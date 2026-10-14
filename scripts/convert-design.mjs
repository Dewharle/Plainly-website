#!/usr/bin/env node
/**
 * convert-design.mjs
 *
 * Converts the Claude Design artboards (project/*.dc.html) for the Plainly
 * WEB APP into React client components under src/screens/.
 *
 * Every element, inline style, SVG and string is carried over 1:1, so the
 * rendered pages match the design exactly. Design logic (the DCLogic class in
 * each artboard) is kept verbatim and driven by a tiny React hook.
 *
 * Usage:
 *   node scripts/convert-design.mjs <path-to-design>/project
 *
 * Re-run it whenever the design changes; the generated screens are
 * overwritten, everything else (routes, layout, helpers) is untouched.
 */
import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "htmlparser2";
import { SCREENS, routeFor } from "../src/lib/routes.mjs";

const SRC = process.argv[2];
if (!SRC) {
  console.error("Usage: node scripts/convert-design.mjs <design>/project");
  process.exit(1);
}
const OUT = path.resolve("src/screens");
fs.mkdirSync(OUT, { recursive: true });

const VOID = new Set(["input", "br", "img", "meta", "link", "hr", "col", "source"]);
const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  maxlength: "maxLength",
  inputmode: "inputMode",
  autocomplete: "autoComplete",
  colspan: "colSpan",
  rowspan: "rowSpan",
  readonly: "readOnly",
  viewbox: "viewBox",
  "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace",
};
const BOOL = new Set(["checked", "disabled", "open", "selected", "readonly", "required", "hidden", "multiple", "autofocus"]);
const DROP = new Set(["hint-placeholder-val"]);

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const TPL = /\{\{\s*([A-Za-z_$][\w$]*)\s*\}\}/g;
const hasTpl = (s) => /\{\{\s*[A-Za-z_$][\w$]*\s*\}\}/.test(s);

/** "a {{x}} b" -> `a ${v.x} b`, "{{x}}" -> v.x, "plain" -> "plain" */
function valueExpr(s) {
  const whole = s.match(/^\{\{\s*([A-Za-z_$][\w$]*)\s*\}\}$/);
  if (whole) return `v.${whole[1]}`;
  if (hasTpl(s)) {
    const esc = s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
    return "`" + esc.replace(TPL, (_, n) => "${v." + n + "}") + "`";
  }
  return JSON.stringify(s);
}

function splitDecls(style) {
  const out = [];
  let buf = "", depth = 0, q = null;
  for (const ch of style) {
    if (q) { if (ch === q) q = null; buf += ch; continue; }
    if (ch === "'" || ch === '"') { q = ch; buf += ch; continue; }
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) { out.push(buf); buf = ""; continue; }
    buf += ch;
  }
  if (buf.trim()) out.push(buf);
  return out.map((d) => d.trim()).filter(Boolean);
}

function styleExpr(style) {
  const parts = [];
  for (const decl of splitDecls(style)) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    let prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    let key;
    if (prop.startsWith("--")) key = JSON.stringify(prop);
    else {
      if (prop.startsWith("-ms-")) prop = prop.slice(1);
      key = camel(prop.replace(/^-(webkit|moz)-/, (m, p) => p.charAt(0).toUpperCase() + p.slice(1) + "-"))
        .replace(/^(Webkit|Moz)-?([a-z])/, (m, p, c) => p + c.toUpperCase());
      if (!/^[A-Za-z_$][\w$]*$/.test(key)) key = JSON.stringify(key);
    }
    parts.push(`${key}: ${valueExpr(val)}`);
  }
  return `{{ ${parts.join(", ")} }}`;
}

function linkFor(href) {
  if (!href) return null;
  const m = href.match(/^([A-Za-z0-9-]+)\.dc\.html(#.*)?$/);
  if (!m) return null;
  return routeFor(m[1]) + (m[2] || "");
}

let usesLink = false;
let usesV = false;
let usesForm = false;

function attrsFor(el) {
  const a = el.attribs || {};
  const tag = el.name;
  const out = [];
  let isLink = false;

  // <select>: lift <option selected> to defaultValue
  if (tag === "select") {
    const opts = (el.children || []).filter((c) => c.type === "tag" && c.name === "option");
    const sel = opts.find((o) => "selected" in o.attribs);
    if (sel) {
      const val = sel.attribs.value ?? textOf(sel);
      out.push(`defaultValue=${attrStr(val)}`);
    }
  }
  // <textarea>: children become defaultValue
  if (tag === "textarea") {
    const t = textOf(el);
    if (t) out.push(`defaultValue=${attrStr(t)}`);
  }
  if (tag === "form") {
    usesForm = true;
    out.push(`onSubmit={${a.role === "search" ? "submitSearch" : "submitPrevent"}}`);
  }

  for (let [name, value] of Object.entries(a)) {
    if (DROP.has(name)) continue;
    if (tag === "option" && name === "selected") continue;
    if (name === "class") {
      // .is-open only pins tooltips open for the static design export;
      // in the app tooltips open on hover, focus or tap.
      value = value.split(/\s+/).filter((c) => c && c !== "is-open").join(" ");
      if (!value) continue;
    }
    let key = ATTR_MAP[name.toLowerCase()] || ATTR_MAP[name] || name;
    if (!key.startsWith("aria-") && !key.startsWith("data-") && key.includes("-")) key = camel(key);
    if (/^on[A-Z]/i.test(name)) key = "on" + name.slice(2, 3).toUpperCase() + name.slice(3);

    if (tag === "input" && name === "value" && a.type !== "radio" && a.type !== "checkbox") key = "defaultValue";
    if (tag === "input" && name === "checked") key = "defaultChecked";

    if (name === "style") { if (hasTpl(value)) usesV = true; out.push(`style=${styleExpr(value)}`); continue; }
    if (name === "href" && tag === "a") {
      const r = linkFor(value);
      if (r) { isLink = true; usesLink = true; out.push(`href=${JSON.stringify(r)}`); continue; }
    }
    if (BOOL.has(name.toLowerCase()) && (value === "" || value === name)) {
      out.push(key);
      continue;
    }
    if (hasTpl(value)) { usesV = true; out.push(`${key}={${valueExpr(value)}}`); continue; }
    out.push(`${key}=${attrStr(value)}`);
  }
  return { attrs: out, isLink };
}

/** JSX attribute string literals cannot hold escapes; use an expression when needed. */
const attrStr = (v) => (/["\\\n{}]/.test(v) ? `{${JSON.stringify(v)}}` : JSON.stringify(v));

function textOf(el) {
  return (el.children || []).map((c) => (c.type === "text" ? c.data : textOf(c))).join("");
}

function emitText(raw, inPre) {
  let t = inPre ? raw : raw.replace(/\s+/g, " ");
  if (t === "") return "";
  if (t === " ") return `{" "}`;
  if (hasTpl(t)) usesV = true;
  const pieces = [];
  let last = 0;
  t.replace(TPL, (m, n, idx) => {
    if (idx > last) pieces.push({ s: t.slice(last, idx) });
    pieces.push({ e: n });
    last = idx + m.length;
  });
  if (last < t.length) pieces.push({ s: t.slice(last) });
  return pieces
    .map((p) => {
      if (p.e) return `{v.${p.e}}`;
      const s = p.s;
      if (/[{}<>&]/.test(s) || /^\s|\s$/.test(s)) return `{${JSON.stringify(s)}}`;
      return s;
    })
    .join("");
}

const BLOCK = new Set("div section header footer main nav ul ol li table thead tbody tr th td caption p h1 h2 h3 h4 h5 h6 form fieldset legend details summary article aside figure figcaption dl dt dd blockquote sc-if select option".split(" "));
const isBlockNode = (n) => !n || n.type === "comment" || (n.type === "tag" && BLOCK.has(n.name));

/** Whitespace-only text that HTML would not render (so JSX can drop it). */
function droppableWhitespace(node, layoutParent) {
  if (/\S/.test(node.data)) return false;
  if (!layoutParent) return true;
  if (layoutParent.name === "svg" || layoutParent.parent?.name === "svg") return true;
  const st = (layoutParent.attribs && layoutParent.attribs.style) || "";
  if (/display:\s*(inline-)?(flex|grid)/.test(st)) return true;
  if (["ul", "ol", "table", "thead", "tbody", "tr", "select", "dl", "details", "fieldset"].includes(layoutParent.name)) return true;
  const sibs = node.parent.children;
  const i = sibs.indexOf(node);
  const prev = sibs[i - 1], next = sibs[i + 1];
  const blockParent = BLOCK.has(layoutParent.name);
  const blockish = (n) => (n ? isBlockNode(n) : blockParent);
  return blockish(prev) && blockish(next);
}

function emit(node, ind, inPre = false, layoutParent = null) {
  const pad = "  ".repeat(ind);
  if (node.type === "text") {
    if (!inPre && droppableWhitespace(node, layoutParent)) return "";
    const t = emitText(node.data, inPre);
    return t ? pad + t : "";
  }
  if (node.type === "comment") return "";
  if (node.type !== "tag" && node.type !== "script" && node.type !== "style") return "";
  const tag = node.name;
  if (tag === "script" || tag === "helmet" || tag === "link" || tag === "meta") return "";
  if (tag === "sc-if") {
    usesV = true;
    const m = (node.attribs.value || "").match(/\{\{\s*([A-Za-z_$][\w$]*)\s*\}\}/);
    const cond = m ? `v.${m[1]}` : "false";
    const kids = childrenOf(node, ind + 2, inPre, layoutParent);
    return `${pad}{${cond} && (\n${pad}  <>\n${kids}\n${pad}  </>\n${pad})}`;
  }
  const { attrs, isLink } = attrsFor(node);
  const name = isLink ? "Link" : tag;
  const open = `<${name}${attrs.length ? " " + attrs.join(" ") : ""}`;
  if (VOID.has(tag)) return `${pad}${open} />`;
  if (tag === "textarea") return `${pad}${open} />`;
  const pre = inPre || tag === "pre";
  const kids = childrenOf(node, ind + 1, pre, node);
  if (!kids.trim()) return `${pad}${open}></${name}>`;
  return `${pad}${open}>\n${kids}\n${pad}</${name}>`;
}

function childrenOf(node, ind, inPre, layoutParent) {
  return (node.children || [])
    .map((c) => emit(c, ind, inPre, layoutParent))
    .filter((s) => s !== "")
    .join("\n");
}

function find(node, name) {
  if (node.name === name) return node;
  for (const c of node.children || []) {
    const r = find(c, name);
    if (r) return r;
  }
  return null;
}

const index = [];
for (const s of SCREENS) {
  const file = path.join(SRC, `${s.id}.dc.html`);
  const html = fs.readFileSync(file, "utf8");
  const doc = parseDocument(html, { lowerCaseAttributeNames: false, lowerCaseTags: false, recognizeSelfClosing: true });
  const xdc = find(doc, "x-dc");
  const helmet = find(xdc, "helmet");
  const css = helmet ? textOf(find(helmet, "style") || { children: [] }).trim() : "";
  const title = textOf(find(doc, "title") || { children: [] }).trim();

  // Design logic: keep the class verbatim; swap artboard file names for routes.
  const m = html.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/);
  let logic = m ? m[1].trim() : "class Component extends DCLogic { renderVals() { return {}; } }";
  logic = logic.replace(/'([A-Za-z0-9-]+)\.dc\.html'/g, (_, id) => `'${routeFor(id)}'`);
  const cls = `${s.component}Logic`;
  logic = logic.replace(/class\s+Component\s+extends/, `class ${cls} extends`);

  usesLink = false; usesV = false; usesForm = false;
  const body = (xdc.children || [])
    .filter((c) => !(c.type === "tag" && c.name === "helmet"))
    .map((c) => emit(c, 3, false, null))
    .filter(Boolean)
    .join("\n");

  const imports = [`"use client";`, ``, `// Generated from Claude Design: ${s.id}.dc.html (${s.title})`, `// Do not hand-edit: change the design and re-run \`npm run convert\`.`, ``];
  if (usesLink) imports.push(`import Link from "next/link";`);
  imports.push(`import { DCLogic, useDCLogic${usesForm ? ", useFormHandlers" : ""} } from "@/lib/dc";`);

  const src = `${imports.join("\n")}

const css = ${JSON.stringify(css)};

${logic}

export default function ${s.component}() {
  ${usesV ? `const v = useDCLogic(${cls});` : `useDCLogic(${cls});`}
${usesForm ? "  const { submitSearch, submitPrevent } = useFormHandlers();\n" : ""}  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
${body}
    </>
  );
}
`;
  fs.writeFileSync(path.join(OUT, `${s.component}.jsx`), src);
  index.push({ ...s, docTitle: title });
  console.log(`✓ ${s.id} → src/screens/${s.component}.jsx  (${s.route})`);
}
fs.writeFileSync(path.join(OUT, "titles.json"), JSON.stringify(Object.fromEntries(index.map((s) => [s.id, s.docTitle])), null, 2));
