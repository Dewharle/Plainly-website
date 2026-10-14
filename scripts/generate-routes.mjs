import fs from "node:fs"; import path from "node:path";
import { SCREENS } from "../src/lib/routes.mjs";
const titles = JSON.parse(fs.readFileSync("src/screens/titles.json","utf8"));
for (const s of SCREENS) {
  let dir = s.route === "/" ? "src/app" : path.join("src/app", s.route);
  let params = "";
  if (s.id === "W03-Listing") dir = "src/app/listings/[id]";
  fs.mkdirSync(dir, { recursive: true });
  const t = (titles[s.id] || "Plainly").replace(/ \(web\)$/, "");
  fs.writeFileSync(path.join(dir, "page.jsx"),
`import ${s.component} from "@/screens/${s.component}";

// ${s.title} — design artboard ${s.id}
export const metadata = { title: ${JSON.stringify(t)} };

export default function Page() {
  return <${s.component} />;
}
`);
}
