"use client";

// Generated from Claude Design: X06-DevProject.dc.html (P2-06 · Developer project & lead pipeline)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-down>[role=tooltip]{bottom:auto;top:calc(100% + 10px)}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class DeveloperProjectLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function DeveloperProject() {
  useDCLogic(DeveloperProjectLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "2360px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.45", display: "flex", flexDirection: "column" }}>
        <header style={{ minHeight: "64px", boxSizing: "border-box", background: "#FFFFFF", borderBottom: "1px solid #E3DFD4", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 24px", padding: "10px 24px" }}>
          <Link href="/browse" aria-label="Plainly home" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#15201A" }}>
            <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
              <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
              <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
            </svg>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: "-0.03em" }}>
              plainly
            </span>
          </Link>
          <label style={{ flex: "0 1 360px", minWidth: "0", height: "40px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px", background: "#F6F4EE", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
            <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Search units, leads and team
            </span>
            <input type="search" placeholder="Search units, leads, team" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "500 14px 'Figtree', sans-serif", color: "#15201A" }} />
          </label>
          <span style={{ flex: "1 1 0", minWidth: "0" }}></span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span className="tip tip-down">
              {" "}
              <button type="button" aria-describedby="t-role" style={{ height: "36px", display: "inline-flex", alignItems: "center", gap: "6px", padding: "0 12px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", font: "700 13px 'Figtree', sans-serif", color: "#15201A" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#1D5FB8" }}></span>
                Developer
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {" "}
              <span role="tooltip" id="t-role">
                Switch role: you can rent, own and sell on one account
              </span>
              {" "}
            </span>
            <button type="button" aria-label="Notifications, 2 new" style={{ width: "44px", height: "44px", borderRadius: "999px", border: "0", background: "transparent", display: "grid", placeItems: "center", position: "relative" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                <path d="M10 21h4"></path>
              </svg>
              <span style={{ position: "absolute", top: "10px", right: "11px", width: "8px", height: "8px", borderRadius: "99px", background: "#B3261E", border: "2px solid #FFFFFF" }}></span>
            </button>
            <button type="button" aria-label="Account menu for Halima B." style={{ height: "44px", display: "flex", alignItems: "center", gap: "10px", padding: "0 8px 0 4px", border: "0", background: "transparent", font: "600 14px 'Figtree', sans-serif", color: "#15201A" }}>
              <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "14px" }}>
                HB
              </span>
              {"Halima B. "}
            </button>
          </div>
        </header>
        <div style={{ flex: "1", display: "flex", flexWrap: "wrap" }}>
          <nav aria-label="Developer workspace" style={{ flex: "1 1 248px", maxWidth: "248px", boxSizing: "border-box", background: "#FFFFFF", borderRight: "1px solid #E3DFD4", padding: "20px 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <Link href="/developer" aria-current="page" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", background: "#E2F0E7", color: "#0E5A3C", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
              </svg>
              Projects
            </Link>
            <Link href="/developer" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
              </svg>
              Units
              <span style={{ flex: "1" }}></span>
              <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                40
              </span>
            </Link>
            <Link href="/developer" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Lead pipeline
              <span style={{ flex: "1" }}></span>
              <span aria-label="12 new" style={{ minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#0E5A3C", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                12
              </span>
            </Link>
            <Link href="/developer" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
              </svg>
              Team seats
            </Link>
            <Link href="/billing" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
              </svg>
              Billing
            </Link>
            <Link href="/coming-soon/A06-SafetyCentre" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 11v5M12 8h.01"></path>
              </svg>
              {"Help & safety"}
            </Link>
            <div style={{ padding: "16px 12px 0", display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid #E3DFD4", fontSize: "12px", color: "#5E6862" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: "700", color: "#0E5A3C" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                  <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                </svg>
                ID verified · Listed by developer
              </span>
              <span>
                Company (CAC) checked. Plainly does not certify title.
              </span>
            </div>
          </nav>
          <main style={{ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "32px" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                  <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#5E6862" }}>
                    <Link href="/developer" style={{ fontWeight: "600", textDecoration: "none" }}>
                      Projects
                    </Link>
                    {" "}
                    <span aria-hidden="true">
                      ›
                    </span>
                    {" Greenfield Court"}
                  </nav>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
                    <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                      Greenfield Court, Ajah — 40 units
                    </h1>
                    <span style={{ height: "24px", padding: "0 9px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                      Phase 2
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#5E6862" }}></span>
                      Draft · not published
                    </span>
                  </div>
                  <p style={{ margin: "0", color: "#3D4A43", fontSize: "15px" }}>
                    Off-plan estate · Ajah, Eti-Osa · Listed by developer · Project lead Halima B.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <button type="button" style={{ height: "44px", padding: "0 16px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 15px 'Figtree', sans-serif" }}>
                      Preview as buyer
                    </button>
                    <button type="button" disabled style={{ height: "44px", padding: "0 18px", borderRadius: "12px", border: "0", background: "#EFECE4", color: "#5E6862", font: "700 15px 'Figtree', sans-serif" }}>
                      Publish project
                    </button>
                  </div>
                  <span style={{ fontSize: "12px", color: "#8C1D17", fontWeight: "600" }}>
                    Add the refund policy to publish
                  </span>
                </div>
              </div>
              <section aria-label="Project at a glance" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "12px" }}>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    Units
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                    40
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    24 terraces · 16 semi-detached
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    Construction stage
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Roofing
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Stage 3 of 5 · site update 6 Oct
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    Leads
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                    31
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    12 new · 1 closed
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    Package quota
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                    32 / 40
                  </span>
                  <div role="progressbar" aria-label="Units used" aria-valuemin="0" aria-valuemax="40" aria-valuenow="32" style={{ height: "8px", borderRadius: "99px", background: "#EFECE4", overflow: "hidden" }}>
                    <div style={{ width: "80%", height: "100%", background: "#0E5A3C" }}></div>
                  </div>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    units used · overage priced before publish
                  </span>
                </div>
              </section>
              <section id="pipeline" aria-labelledby="h-pipe" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", borderBottom: "1px solid #E3DFD4" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <h2 id="h-pipe" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                      Lead pipeline
                    </h2>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      Buyer contacts stay masked until a unit is reserved through Plainly Secure.
                    </span>
                  </div>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    {"Assigned to "}
                    <select style={{ height: "40px", padding: "0 10px", borderRadius: "12px", border: "1px solid #CFC9BA", background: "#FFFFFF", font: "600 14px 'Figtree', sans-serif", color: "#15201A" }}>
                      <option>
                        Everyone
                      </option>
                      <option>
                        Tunde A.
                      </option>
                      <option>
                        Ese O.
                      </option>
                    </select>
                  </label>
                </div>
                <div style={{ overflowX: "auto", padding: "16px 20px 20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(170px, 1fr))", gap: "10px", minWidth: "1060px" }}>
                    <div style={{ background: "#F6F4EE", borderRadius: "14px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 4px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          New
                        </strong>
                        <span style={{ minWidth: "24px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#0E5A3C", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                          12
                        </span>
                      </div>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                            EN
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Emeka N.
                          </strong>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          3-bed semi · 12-month plan
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Enquiry · today 09:14
                        </span>
                      </article>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                            FO
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Folake O.
                          </strong>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          2-bed terrace · outright
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Enquiry · Mon 12 Oct
                        </span>
                      </article>
                      <button type="button" style={{ height: "36px", border: "0", background: "transparent", color: "#0E5A3C", font: "600 13px 'Figtree', sans-serif" }}>
                        +10 more
                      </button>
                    </div>
                    <div style={{ background: "#F6F4EE", borderRadius: "14px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 4px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Contacted
                        </strong>
                        <span style={{ minWidth: "24px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#CFC9BA", color: "#15201A", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                          8
                        </span>
                      </div>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                            CO
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Chidi O.
                          </strong>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          2-bed terrace · diaspora (UK)
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Tunde A. · replied in 40 min
                        </span>
                      </article>
                      <button type="button" style={{ height: "36px", border: "0", background: "transparent", color: "#0E5A3C", font: "600 13px 'Figtree', sans-serif" }}>
                        +7 more
                      </button>
                    </div>
                    <div style={{ background: "#F6F4EE", borderRadius: "14px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 4px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Viewing
                        </strong>
                        <span style={{ minWidth: "24px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#CFC9BA", color: "#15201A", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                          5
                        </span>
                      </div>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                            AK
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Amaka K.
                          </strong>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          3-bed semi · site visit
                        </span>
                        <span style={{ alignSelf: "flex-start", height: "22px", padding: "0 7px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#E5EEFB", color: "#164A90", fontSize: "11px", fontWeight: "700" }}>
                          Sat 17 Oct · 10:00
                        </span>
                      </article>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                            YB
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Yusuf B.
                          </strong>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          2-bed terrace · live video
                        </span>
                        <span style={{ alignSelf: "flex-start", height: "22px", padding: "0 7px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#E5EEFB", color: "#164A90", fontSize: "11px", fontWeight: "700" }}>
                          Mon 19 Oct · 18:00
                        </span>
                      </article>
                    </div>
                    <div style={{ background: "#F6F4EE", borderRadius: "14px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 4px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Offer
                        </strong>
                        <span style={{ minWidth: "24px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#F4B728", color: "#15201A", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                          2
                        </span>
                      </div>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                            IA
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Ifeanyi A.
                          </strong>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Unit T-07 · 12-month plan
                        </span>
                        <span style={{ fontSize: "12px", color: "#6B4E00", fontWeight: "600" }}>
                          Awaiting reservation deposit
                        </span>
                      </article>
                    </div>
                    <div style={{ background: "#F6F4EE", borderRadius: "14px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 4px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Closed
                        </strong>
                        <span style={{ minWidth: "24px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#1C7A4A", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                          1
                        </span>
                      </div>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                            RM
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Rukayat M.
                          </strong>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Unit S-02 · outright
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#145C37", fontWeight: "700" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                          Via Plainly Secure
                        </span>
                      </article>
                    </div>
                    <div style={{ background: "#F6F4EE", borderRadius: "14px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 4px" }}>
                        <strong style={{ fontSize: "14px", color: "#3D4A43" }}>
                          Lost
                        </strong>
                        <span style={{ minWidth: "24px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                          3
                        </span>
                      </div>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                            DS
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Dapo S.
                          </strong>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Reason: budget
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Closed by Ese O. · 9 Oct
                        </span>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
                <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
                  <section aria-labelledby="h-units" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", borderBottom: "1px solid #E3DFD4" }}>
                      <h2 id="h-units" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        Unit types
                      </h2>
                      <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 14px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                        Add unit type
                      </button>
                    </div>
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", minWidth: "640px", borderCollapse: "collapse", fontSize: "14px" }}>
                        <thead>
                          <tr style={{ background: "#EFECE4", textAlign: "left" }}>
                            <th scope="col" style={{ padding: "10px 20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                              Type
                            </th>
                            <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "right" }}>
                              Units
                            </th>
                            <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "right" }}>
                              Price
                            </th>
                            <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                              Plans
                            </th>
                            <th scope="col" style={{ padding: "10px 20px 10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                              Available
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "12px 20px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <span aria-hidden="true" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                                <span style={{ display: "flex", flexDirection: "column" }}>
                                  <strong>
                                    2-bed terrace
                                  </strong>
                                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                                    Units T-01 to T-24
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                              ×24
                            </td>
                            <td style={{ padding: "12px", textAlign: "right", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                              ₦[price]
                            </td>
                            <td style={{ padding: "12px", color: "#3D4A43" }}>
                              Outright · 12 months
                            </td>
                            <td style={{ padding: "12px 20px 12px 12px", fontVariantNumeric: "tabular-nums" }}>
                              23 of 24
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "12px 20px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <span aria-hidden="true" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                                <span style={{ display: "flex", flexDirection: "column" }}>
                                  <strong>
                                    3-bed semi-detached
                                  </strong>
                                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                                    Units S-01 to S-16
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                              ×16
                            </td>
                            <td style={{ padding: "12px", textAlign: "right", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                              ₦[price]
                            </td>
                            <td style={{ padding: "12px", color: "#3D4A43" }}>
                              Outright · 12 months
                            </td>
                            <td style={{ padding: "12px 20px 12px 12px", fontVariantNumeric: "tabular-nums" }}>
                              15 of 16
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                  <section aria-labelledby="h-plans" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 id="h-plans" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                      Payment plans
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "12px", alignItems: "start" }}>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                          <strong style={{ fontSize: "16px" }}>
                            Outright
                          </strong>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#1C7A4A" }}></span>
                            On
                          </span>
                        </div>
                        <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                          100% at contract, paid into Plainly Secure. Released to you at handover milestones agreed in the contract.
                        </span>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "8px", borderTop: "1px solid #E3DFD4", fontSize: "14px" }}>
                          <span style={{ color: "#3D4A43" }}>
                            Buyer pays
                          </span>
                          <strong style={{ fontVariantNumeric: "tabular-nums" }}>
                            ₦[price]
                          </strong>
                        </div>
                      </article>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                          <strong style={{ fontSize: "16px" }}>
                            12-month instalments
                          </strong>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#1C7A4A" }}></span>
                            On
                          </span>
                        </div>
                        <dl style={{ margin: "0", display: "flex", flexDirection: "column", fontSize: "14px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "6px 0" }}>
                            <dt style={{ color: "#3D4A43" }}>
                              Reservation deposit
                            </dt>
                            <dd style={{ margin: "0", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                              30%
                            </dd>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "6px 0", borderTop: "1px solid #E3DFD4" }}>
                            <dt style={{ color: "#3D4A43" }}>
                              Months 1–11
                            </dt>
                            <dd style={{ margin: "0", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                              11 × 5%
                            </dd>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "6px 0", borderTop: "1px solid #E3DFD4" }}>
                            <dt style={{ color: "#3D4A43" }}>
                              Final, at handover
                            </dt>
                            <dd style={{ margin: "0", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                              15%
                            </dd>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "8px 0 0", borderTop: "1.5px solid #15201A" }}>
                            <dt style={{ fontWeight: "700" }}>
                              Total
                            </dt>
                            <dd style={{ margin: "0", fontWeight: "800", fontVariantNumeric: "tabular-nums" }}>
                              100% = ₦[price]
                            </dd>
                          </div>
                        </dl>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600", color: "#145C37" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                          Schedule sums to the unit price
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Plans that don’t add up to the price can’t be saved.
                        </span>
                      </article>
                    </div>
                  </section>
                  <section aria-labelledby="h-stage" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                      <h2 id="h-stage" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        Construction stage
                      </h2>
                      <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 14px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 8h3l2-3h6l2 3h3v11H4z"></path>
                          <circle cx="12" cy="13" r="3.5"></circle>
                        </svg>
                        Post site update
                      </button>
                    </div>
                    <ol aria-label="Construction stages" style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "6px" }}>
                      <li style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ height: "6px", borderRadius: "99px", background: "#1C7A4A" }}></span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#145C37" }}>
                          Foundation ✓
                        </span>
                      </li>
                      <li style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ height: "6px", borderRadius: "99px", background: "#1C7A4A" }}></span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#145C37" }}>
                          Frame ✓
                        </span>
                      </li>
                      <li aria-current="step" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ height: "6px", borderRadius: "99px", background: "#F4B728", outline: "1.5px solid #15201A" }}></span>
                        <span style={{ fontSize: "13px", fontWeight: "800" }}>
                          Roofing
                        </span>
                      </li>
                      <li style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ height: "6px", borderRadius: "99px", background: "#E3DFD4" }}></span>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#5E6862" }}>
                          Finishing
                        </span>
                      </li>
                      <li style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ height: "6px", borderRadius: "99px", background: "#E3DFD4" }}></span>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#5E6862" }}>
                          Handover
                        </span>
                      </li>
                    </ol>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                      <span aria-hidden="true" style={{ width: "88px", height: "64px", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                      <span aria-hidden="true" style={{ width: "88px", height: "64px", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                      <span aria-hidden="true" style={{ width: "88px", height: "64px", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Site update 6 Oct 2026 · live-captured on site · shown to buyers with the date
                      </span>
                    </div>
                  </section>
                  <section aria-labelledby="h-disc" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "16px 20px", borderBottom: "1px solid #E3DFD4", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h2 id="h-disc" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        Off-plan disclosures
                      </h2>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Shown to buyers on every unit, before any enquiry.
                      </span>
                    </div>
                    <ul style={{ margin: "0", padding: "0 20px", listStyle: "none" }}>
                      <li style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 0" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        <span style={{ flex: "1 1 200px", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Building plan approval number
                          </strong>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            [number] · approval letter attached
                          </span>
                        </span>
                        <button type="button" style={{ height: "36px", padding: "0 10px", border: "0", background: "transparent", color: "#0E5A3C", font: "600 14px 'Figtree', sans-serif" }}>
                          Edit
                        </button>
                      </li>
                      <li style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 0", borderTop: "1px solid #E3DFD4" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        <span style={{ flex: "1 1 200px", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Expected completion
                          </strong>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            [date] · changes are shown to buyers with the reason
                          </span>
                        </span>
                        <button type="button" style={{ height: "36px", padding: "0 10px", border: "0", background: "transparent", color: "#0E5A3C", font: "600 14px 'Figtree', sans-serif" }}>
                          Edit
                        </button>
                      </li>
                      <li style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "12px 0", borderTop: "1px solid #E3DFD4" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 4 2.5 20h19z"></path>
                          <path d="M12 10v4M12 17h.01"></path>
                        </svg>
                        <span style={{ flex: "1 1 200px", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px", color: "#8C1D17" }}>
                            Refund policy · missing
                          </strong>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            What buyers get back if the project is delayed or cancelled
                          </span>
                        </span>
                        <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "12px", border: "0", background: "#0E5A3C", color: "#FFFFFF", font: "700 14px 'Figtree', sans-serif" }}>
                          Upload policy
                        </button>
                      </li>
                    </ul>
                    <div style={{ margin: "0 20px 20px", padding: "10px 12px", borderRadius: "12px", background: "#FCE8E6", display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", color: "#8C1D17", fontWeight: "600" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      {" Off-plan projects can’t publish without all three disclosures. "}
                    </div>
                  </section>
                  <section aria-labelledby="h-bulk" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "8px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <h2 id="h-bulk" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                          Bulk upload
                        </h2>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          One CSV for unit details, one zip for media. 100 units in under 10 min.
                        </span>
                      </div>
                      <Link href="/developer" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Download CSV template
                      </Link>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "12px" }}>
                      <div style={{ border: "1.5px dashed #CFC9BA", borderRadius: "14px", padding: "14px", display: "flex", alignItems: "center", gap: "12px", background: "#FBFAF7" }}>
                        <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "10px", background: "#E3F4EA", display: "grid", placeItems: "center" }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 3h8l4 4v14H6z"></path>
                            <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                          </svg>
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            greenfield_units.csv ✓
                          </strong>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            40 rows · 39 ready · 1 error
                          </span>
                        </span>
                      </div>
                      <div style={{ border: "1.5px dashed #CFC9BA", borderRadius: "14px", padding: "14px", display: "flex", alignItems: "center", gap: "12px", background: "#FBFAF7" }}>
                        <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "10px", background: "#E3F4EA", display: "grid", placeItems: "center" }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 8h3l2-3h6l2 3h3v11H4z"></path>
                            <circle cx="12" cy="13" r="3.5"></circle>
                          </svg>
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            greenfield_media.zip ✓
                          </strong>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            Photos matched to unit IDs · location data removed
                          </span>
                        </span>
                      </div>
                    </div>
                    <div role="alert" style={{ border: "1px solid #E3DFD4", borderRadius: "12px", overflow: "hidden" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", padding: "10px 14px", background: "#FCE8E6" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 4 2.5 20h19z"></path>
                          <path d="M12 10v4M12 17h.01"></path>
                        </svg>
                        <strong style={{ flex: "1 1 200px", fontSize: "14px", color: "#8C1D17" }}>
                          Row 14: price missing
                        </strong>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Unit S-06 · 3-bed semi
                        </span>
                        <button type="button" style={{ height: "36px", padding: "0 12px", borderRadius: "10px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                          Fix row
                        </button>
                      </div>
                      <div style={{ padding: "10px 14px", fontSize: "13px", color: "#3D4A43" }}>
                        39 rows will import as drafts. Row 14 stays out until it has a price.
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                      <button type="button" style={{ height: "44px", padding: "0 18px", borderRadius: "12px", border: "0", background: "#0E5A3C", color: "#FFFFFF", font: "700 15px 'Figtree', sans-serif" }}>
                        Import 39 units
                      </button>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Imports count against your package quota.
                      </span>
                    </div>
                  </section>
                </div>
                <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <section aria-labelledby="h-team" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                      <h2 id="h-team" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                        Team seats
                      </h2>
                      <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                        4 of 5 used
                      </span>
                    </div>
                    <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                      <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
                        <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700" }}>
                          HB
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            {"Halima B. "}
                            <span style={{ fontWeight: "500", color: "#5E6862" }}>
                              (you)
                            </span>
                          </strong>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Everything, incl. billing
                          </span>
                        </span>
                        <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#15201A", color: "#FFFFFF", fontSize: "12px", fontWeight: "700" }}>
                          Admin
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid #E3DFD4" }}>
                        <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700" }}>
                          TA
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Tunde A.
                          </strong>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Leads, chat, viewings
                          </span>
                        </span>
                        <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#E2F0E7", color: "#0E5A3C", fontSize: "12px", fontWeight: "700" }}>
                          Sales
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid #E3DFD4" }}>
                        <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700" }}>
                          EO
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Ese O.
                          </strong>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Leads, chat, viewings
                          </span>
                        </span>
                        <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#E2F0E7", color: "#0E5A3C", fontSize: "12px", fontWeight: "700" }}>
                          Sales
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid #E3DFD4" }}>
                        <span style={{ width: "34px", height: "34px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700" }}>
                          BK
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Bayo K.
                          </strong>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Read only · no buyer details
                          </span>
                        </span>
                        <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                          Viewer
                        </span>
                      </li>
                    </ul>
                    <button type="button" style={{ height: "44px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 15px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                      Invite a teammate
                    </button>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Every seat is ID-verified. Actions are logged per person.
                    </span>
                  </section>
                  <section aria-labelledby="h-fees" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 id="h-fees" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                      {"Package & fees"}
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#3D4A43" }}>
                        <span>
                          Developer package
                        </span>
                        <span style={{ fontWeight: "700", color: "#15201A", fontVariantNumeric: "tabular-nums" }}>
                          32 / 40 units used
                        </span>
                      </div>
                      <div role="progressbar" aria-label="Package units used" aria-valuemin="0" aria-valuemax="40" aria-valuenow="32" style={{ height: "8px", borderRadius: "99px", background: "#EFECE4", overflow: "hidden" }}>
                        <div style={{ width: "80%", height: "100%", background: "#0E5A3C" }}></div>
                      </div>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Going over? Overage is priced before you publish. Nothing is charged by surprise.
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", paddingTop: "12px", borderTop: "1px solid #E3DFD4" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "14px", color: "#3D4A43" }}>
                        {"Closing fee "}
                        <span className="tip">
                          {" "}
                          <button type="button" aria-label="How the closing fee works" aria-describedby="t-close" style={{ width: "28px", height: "28px", border: "0", borderRadius: "8px", background: "transparent", display: "grid", placeItems: "center" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="9"></circle>
                              <path d="M12 11v5M12 8h.01"></path>
                            </svg>
                          </button>
                          {" "}
                          <span role="tooltip" id="t-close">
                            Charged only on sales completed through Plainly Secure, deducted at release. Your exact rate is in your developer agreement.
                          </span>
                          {" "}
                        </span>
                      </span>
                      <strong style={{ fontSize: "15px", fontVariantNumeric: "tabular-nums" }}>
                        0.5–1%
                      </strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", fontSize: "14px", color: "#3D4A43" }}>
                      <span>
                        Billing
                      </span>
                      <Link href="/billing" style={{ fontWeight: "600" }}>
                        View invoices
                      </Link>
                    </div>
                  </section>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", borderRadius: "16px", background: "#E2F0E7", fontSize: "13px", color: "#0A4630", fontWeight: "600" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                      <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                    </svg>
                    {" Plainly can only protect money paid through Plainly. "}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
