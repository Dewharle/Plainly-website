"use client";

// Generated from Claude Design: W01-Home.dc.html (WEB-02 · Browse & search home (guest))
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic, useFormHandlers } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class BrowseHomeLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function BrowseHome() {
  useDCLogic(BrowseHomeLogic);
  const { submitSearch, submitPrevent } = useFormHandlers();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "2700px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "16px", lineHeight: "1.5", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
        <header style={{ background: "#FFFFFF", borderBottom: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "12px 32px", minHeight: "72px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 32px" }}>
            <Link href="/" aria-label="Plainly home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#15201A" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
                <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
                <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
              </svg>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: "-0.03em" }}>
                plainly
              </span>
            </Link>
            <nav aria-label="Main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 28px" }}>
              <Link href="/search" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                Rent
              </Link>
              <Link href="/search" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                Buy
              </Link>
              <Link href="/search" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                Land
              </Link>
              <Link href="/owner/listings/new" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                For owners
              </Link>
              <Link href="/coming-soon/A06-SafetyCentre" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                Safety centre
              </Link>
            </nav>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
              <Link href="/owner/listings/new" style={{ height: "44px", padding: "0 16px", boxSizing: "border-box", display: "flex", alignItems: "center", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
                List your property
              </Link>
              <Link href="/login" style={{ height: "44px", padding: "0 20px", boxSizing: "border-box", display: "flex", alignItems: "center", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
                Sign in
              </Link>
            </div>
          </div>
        </header>
        <main style={{ flex: "1", display: "flex", flexDirection: "column" }}>
          <section aria-labelledby="h-hero" style={{ padding: "56px 0 64px" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
              <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: "2" }}>
                <span style={{ alignSelf: "flex-start", height: "30px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", fontSize: "13px", fontWeight: "700" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                  Homes and land across Lagos
                </span>
                <h1 id="h-hero" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(40px, 5vw, 64px)", lineHeight: "1.02", letterSpacing: "-0.035em", textWrap: "balance", maxWidth: "680px" }}>
                  Rent and buy straight from the owner.
                </h1>
                <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.55", color: "#3D4A43", maxWidth: "580px" }}>
                  Verified owners, real walkthrough videos and the full cost to move in — before you view. Free for seekers, always.
                </p>
                <form onSubmit={submitSearch} role="search" aria-label="Search homes" style={{ margin: "0", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "20px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 24px 48px -12px rgba(21,32,26,.22)", maxWidth: "720px" }}>
                  <div role="tablist" aria-label="What are you looking for" style={{ alignSelf: "flex-start", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "4px", padding: "4px", background: "#EFECE4", borderRadius: "12px", width: "min(380px, 100%)", boxSizing: "border-box" }}>
                    <button type="button" role="tab" aria-selected="true" style={{ height: "40px", border: "0", borderRadius: "9px", background: "#15201A", color: "#FFFFFF", font: "600 14px 'Figtree', sans-serif" }}>
                      Rent
                    </button>
                    <button type="button" role="tab" aria-selected="false" style={{ height: "40px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                      Lease
                    </button>
                    <button type="button" role="tab" aria-selected="false" style={{ height: "40px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                      Buy
                    </button>
                    <button type="button" role="tab" aria-selected="false" style={{ height: "40px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                      Land
                    </button>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px" }}>
                    <div style={{ flex: "2 1 260px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px", position: "relative" }}>
                      <label htmlFor="w01-area" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Area, estate or landmark
                      </label>
                      <div style={{ height: "52px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px", border: "2px solid #0E5A3C", borderRadius: "12px", background: "#FFFFFF", boxShadow: "0 0 0 3px #E2F0E7" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                          <circle cx="12" cy="9.5" r="2.5"></circle>
                        </svg>
                        <input id="w01-area" type="text" role="combobox" aria-expanded="true" aria-controls="w01-area-list" aria-autocomplete="list" aria-activedescendant="w01-opt-2" defaultValue="Yaba" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "500 16px 'Figtree', sans-serif", color: "#15201A" }} />
                        <button type="button" aria-label="Clear area" style={{ width: "32px", height: "32px", border: "0", borderRadius: "8px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 6l12 12M18 6 6 18"></path>
                          </svg>
                        </button>
                      </div>
                      <div style={{ position: "absolute", top: "calc(100% + 8px)", left: "0", right: "0", minWidth: "260px", zIndex: "30", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "14px", padding: "6px", boxSizing: "border-box", boxShadow: "0 24px 48px -12px rgba(21,32,26,.32)" }}>
                        {" "}
                        <button type="button" style={{ width: "100%", minHeight: "44px", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px", border: "0", borderRadius: "10px", background: "transparent", color: "#0E5A3C", font: "700 15px 'Figtree', sans-serif", textAlign: "left" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 11 21 3l-8 18-2-8z"></path>
                          </svg>
                          Use my location
                        </button>
                        {" "}
                        <div style={{ height: "1px", background: "#E3DFD4", margin: "4px 10px" }}></div>
                        <ul id="w01-area-list" role="listbox" aria-label="Area suggestions" style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                          <li id="w01-opt-1" role="option" aria-selected="false" style={{ minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "0 10px", borderRadius: "10px" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"></path>
                                <path d="M9 4v14M15 6v14"></path>
                              </svg>
                              <span>
                                <strong>
                                  Yaba
                                </strong>
                              </span>
                            </span>
                            <span style={{ fontSize: "13px", color: "#5E6862" }}>
                              Area · Lagos Mainland
                            </span>
                          </li>
                          <li id="w01-opt-2" role="option" aria-selected="true" style={{ minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "0 10px", borderRadius: "10px", background: "#E2F0E7" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                                <circle cx="12" cy="9.5" r="2.5"></circle>
                              </svg>
                              <span>
                                <strong>
                                  Yaba
                                </strong>
                                {" – Alagomeji"}
                              </span>
                            </span>
                            <span style={{ fontSize: "13px", color: "#0A4630" }}>
                              Neighbourhood
                            </span>
                          </li>
                          <li id="w01-opt-3" role="option" aria-selected="false" style={{ minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "0 10px", borderRadius: "10px" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                                <circle cx="12" cy="9.5" r="2.5"></circle>
                              </svg>
                              <span>
                                <strong>
                                  Yaba
                                </strong>
                                {" – Onike"}
                              </span>
                            </span>
                            <span style={{ fontSize: "13px", color: "#5E6862" }}>
                              Neighbourhood
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="w01-budget" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Total move-in up to
                      </label>
                      <div style={{ height: "52px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px 0 14px", border: "1.5px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
                        </svg>
                        <select defaultValue="₦2,500,000" id="w01-budget" style={{ flex: "1", minWidth: "0", height: "48px", border: "0", outline: "none", background: "transparent", font: "600 16px 'Figtree', sans-serif", color: "#15201A", fontVariantNumeric: "tabular-nums" }}>
                          <option>
                            Any amount
                          </option>
                          <option>
                            ₦1,000,000
                          </option>
                          <option>
                            ₦1,500,000
                          </option>
                          <option>
                            ₦2,500,000
                          </option>
                          <option>
                            ₦5,000,000
                          </option>
                        </select>
                      </div>
                    </div>
                    <Link href="/search" style={{ flex: "0 1 auto", height: "52px", padding: "0 26px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontSize: "16px", fontWeight: "700" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="7"></circle>
                        <path d="m20 20-3.5-3.5"></path>
                      </svg>
                      Search
                    </Link>
                  </div>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Budget is the total to move in — rent, deposit and every fee — not just the yearly rent.
                  </span>
                </form>
                <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px", fontSize: "14px", color: "#3D4A43" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                    </svg>
                    No sign-up to search or watch
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                    </svg>
                    Data saver on slow networks
                  </span>
                </span>
              </div>
              <div style={{ flex: "1 1 420px", minWidth: "0", position: "relative", minHeight: "580px" }}>
                <div aria-hidden="true" style={{ position: "absolute", top: "40px", right: "0", bottom: "30px", left: "40px", borderRadius: "32px", background: "#EFECE4" }}></div>
                <div aria-hidden="true" style={{ position: "absolute", top: "0", left: "8px", zIndex: "3", maxWidth: "250px", padding: "10px 12px", borderRadius: "10px", background: "#15201A", color: "#FFFFFF", fontSize: "12px", lineHeight: "1.45", boxShadow: "0 8px 24px -8px rgba(21,32,26,.35)" }}>
                  {" "}
                  <strong style={{ display: "block", fontSize: "13px" }}>
                    Owner verified
                  </strong>
                  {" ID checked 12 Oct 2026 · proof of control reviewed 13 Oct 2026 "}
                  <span style={{ position: "absolute", left: "30px", bottom: "-5px", width: "10px", height: "10px", background: "#15201A", transform: "rotate(45deg)" }}></span>
                  {" "}
                </div>
                {" "}
                <Link href="/listings/PL-24817" style={{ position: "absolute", top: "76px", left: "0", zIndex: "1", width: "min(360px, 86%)", display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", color: "#15201A", textDecoration: "none", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                  <div style={{ height: "190px", position: "relative", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "56px", height: "56px", borderRadius: "999px", background: "rgba(21,32,26,.72)", display: "grid", placeItems: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </span>
                    <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", gap: "6px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px", fontWeight: "700", color: "#0E5A3C", boxShadow: "0 0 0 2px #15201A" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                          <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                        </svg>
                        Owner verified
                      </span>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#15201A", fontSize: "12px", fontWeight: "700", color: "#FFFFFF" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#F4B728" }}></span>
                        Live video
                      </span>
                    </div>
                    <span style={{ position: "absolute", bottom: "10px", left: "10px", height: "24px", padding: "0 8px", display: "flex", alignItems: "center", borderRadius: "6px", background: "rgba(21,32,26,.72)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                      2:14 · walkthrough
                    </span>
                    <span style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", color: "rgba(255,255,255,.85)" }}>
                      PLAINLY · PL-24817
                    </span>
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontWeight: "700", fontSize: "17px" }}>
                        2-bed flat · Alagomeji, Yaba
                      </span>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        2 bed · 2 bath · Prepaid meter · Borehole
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px", paddingTop: "8px", borderTop: "1px dashed #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          To move in
                        </span>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                          ₦2,200,000
                        </span>
                      </div>
                      <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                        ₦2,000,000/yr
                        <br />
                        1 yr advance · Fair Terms
                      </span>
                    </div>
                  </div>
                </Link>
                {" "}
                <div aria-label="Example cost to move in" role="group" style={{ position: "absolute", right: "0", bottom: "0", zIndex: "2", width: "min(300px, 78%)", boxSizing: "border-box", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", boxShadow: "0 24px 48px -12px rgba(21,32,26,.32)" }}>
                  <div style={{ padding: "14px 16px 10px", background: "#FDF3D3", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B4E00" }}>
                      Cost to move in
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#6B4E00" }}>
                      PL-24817
                    </span>
                  </div>
                  <dl style={{ margin: "0", padding: "6px 16px 14px", display: "flex", flexDirection: "column", fontSize: "14px", fontVariantNumeric: "tabular-nums" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "7px 0" }}>
                      <dt style={{ color: "#3D4A43" }}>
                        Rent · 1 year
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "600" }}>
                        ₦2,000,000
                      </dd>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "7px 0", borderTop: "1px solid #E3DFD4" }}>
                      <dt style={{ color: "#3D4A43" }}>
                        Caution deposit
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "600" }}>
                        ₦200,000
                      </dd>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "7px 0", borderTop: "1px solid #E3DFD4" }}>
                      <dt style={{ color: "#3D4A43" }}>
                        Agency fee
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "600", color: "#145C37" }}>
                        ₦0
                      </dd>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "7px 0", borderTop: "1px solid #E3DFD4" }}>
                      <dt style={{ color: "#3D4A43" }}>
                        Legal / agreement
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "600", color: "#145C37" }}>
                        ₦0
                      </dd>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "7px 0", borderTop: "1px solid #E3DFD4" }}>
                      <dt style={{ color: "#3D4A43" }}>
                        Inspection fee
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "600", color: "#145C37" }}>
                        ₦0
                      </dd>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", padding: "10px 0 0", borderTop: "1.5px solid #15201A" }}>
                      <dt style={{ fontWeight: "700" }}>
                        Total
                      </dt>
                      <dd style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        ₦2,200,000
                      </dd>
                    </div>
                  </dl>
                  <div style={{ padding: "10px 16px", borderTop: "1px solid #E3DFD4", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#0A4630", fontWeight: "600", background: "#E2F0E7" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                      <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                    </svg>
                    That's everything. Paid through Plainly Secure.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-labelledby="h-free" style={{ background: "#15201A", color: "#F6F4EE" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px 48px" }}>
              <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h2 id="h-free" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(28px, 3vw, 36px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                  Free for seekers. Always.
                </h2>
                <p style={{ margin: "0", fontSize: "16px", color: "#C9D2CC", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 8px" }}>
                  {"No inspection, form or agency fees on Plainly. Who pays, then? "}
                  <span className="tip">
                    {" "}
                    <button type="button" aria-label="How Plainly makes money" aria-describedby="t-free" style={{ width: "32px", height: "32px", border: "1px solid #3D4A43", borderRadius: "999px", background: "#26342C", display: "grid", placeItems: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4B728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 11v5M12 8h.01"></path>
                      </svg>
                    </button>
                    {" "}
                    <span role="tooltip" id="t-free" style={{ background: "#FFFFFF", color: "#15201A" }}>
                      Owners pay a listing fee to publish. Plainly never charges seekers a percentage of rent.
                    </span>
                    {" "}
                  </span>
                </p>
              </div>
              <ul style={{ flex: "999 1 560px", minWidth: "0", margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "12px" }}>
                <li style={{ padding: "18px 20px", borderRadius: "16px", background: "#1E2B24", border: "1px solid #26342C", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#F4B728" }}>
                    ₦0
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    to search
                  </span>
                </li>
                <li style={{ padding: "18px 20px", borderRadius: "16px", background: "#1E2B24", border: "1px solid #26342C", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#F4B728" }}>
                    ₦0
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    to chat
                  </span>
                </li>
                <li style={{ padding: "18px 20px", borderRadius: "16px", background: "#1E2B24", border: "1px solid #26342C", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#F4B728" }}>
                    ₦0
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    to view
                  </span>
                </li>
                <li style={{ padding: "18px 20px", borderRadius: "16px", background: "#1E2B24", border: "1px solid #26342C", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#F4B728" }}>
                    ₦0
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    to apply
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section aria-labelledby="h-how" style={{ padding: "72px 0 0" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                  For seekers
                </span>
                <h2 id="h-how" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                  How Plainly works
                </h2>
              </div>
              <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px" }}>
                <li style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#E2F0E7", display: "grid", placeItems: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="6" width="13" height="12" rx="2"></rect>
                        <path d="m16 10 5-3v10l-5-3"></path>
                      </svg>
                    </span>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "32px", color: "#CFC9BA", lineHeight: "1" }}>
                      1
                    </span>
                  </div>
                  <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                    Watch the video
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", color: "#3D4A43" }}>
                    Every rental has a walkthrough. “Live video” means it was filmed in the app, at the property.
                  </p>
                </li>
                <li style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#FDF3D3", display: "grid", placeItems: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
                      </svg>
                    </span>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "32px", color: "#CFC9BA", lineHeight: "1" }}>
                      2
                    </span>
                  </div>
                  <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                    See the full cost
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", color: "#3D4A43" }}>
                    The total to move in leads every listing: rent, advance, deposit and any fee, itemised.
                  </p>
                </li>
                <li style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#E5EEFB", display: "grid", placeItems: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 3l18 18"></path>
                        <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                      </svg>
                    </span>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "32px", color: "#CFC9BA", lineHeight: "1" }}>
                      3
                    </span>
                  </div>
                  <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                    Chat and view
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", color: "#3D4A43" }}>
                    Message the owner and book a free viewing. Phone numbers stay masked until you both sign.
                  </p>
                </li>
                <li style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                    </span>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "32px", color: "#CFC9BA", lineHeight: "1" }}>
                      4
                    </span>
                  </div>
                  <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                    Sign and pay safely
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", color: "#3D4A43" }}>
                    Sign the agreement and pay through Plainly Secure. The owner is paid after you confirm move-in.
                  </p>
                </li>
              </ol>
            </div>
          </section>
          <section aria-labelledby="h-trust" style={{ padding: "72px 0 0" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                  Trust and safety
                </span>
                <h2 id="h-trust" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                  Every badge says what we checked
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: "16px" }}>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                    Badge guide
                  </h3>
                  <dl style={{ margin: "0", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0" }}>
                      <dt style={{ flex: "0 0 168px" }}>
                        <span style={{ height: "28px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="8" r="4"></circle>
                            <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                          </svg>
                          ID verified
                        </span>
                      </dt>
                      <dd style={{ flex: "1 1 220px", margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                        NIN and a live selfie were matched.
                      </dd>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid #E3DFD4" }}>
                      <dt style={{ flex: "0 0 168px" }}>
                        <span style={{ height: "28px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                            <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                          </svg>
                          Owner verified
                        </span>
                      </dt>
                      <dd style={{ flex: "1 1 220px", margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                        ID plus proof of control, such as a Land Use Charge demand. Plainly does not certify title.
                      </dd>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0", borderTop: "1px solid #E3DFD4" }}>
                      <dt style={{ flex: "0 0 168px" }}>
                        <span style={{ height: "28px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#F4B728", boxShadow: "0 0 0 1px #6B4E00" }}></span>
                          Inspected
                        </span>
                      </dt>
                      <dd style={{ flex: "1 1 220px", margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                        A Plainly inspector visited and checked the home against the listing.
                      </dd>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", padding: "12px 0 0", borderTop: "1px solid #E3DFD4" }}>
                      <dt style={{ flex: "0 0 168px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }}>
                        <span style={{ height: "28px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", color: "#15201A", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
                          </svg>
                          Listed by owner
                        </span>
                        <span style={{ height: "28px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="8" r="4"></circle>
                            <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                          </svg>
                          Listed by agent
                        </span>
                      </dt>
                      <dd style={{ flex: "1 1 220px", margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                        Owner listings carry no agency or legal fee. Agents must be LASRERA-registered and itemise their fee in the total.
                      </dd>
                    </div>
                  </dl>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                    What Plainly will never ask you for
                  </h3>
                  <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "10px" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px", borderRadius: "12px", background: "#FCE8E6", color: "#8C1D17", fontSize: "15px", fontWeight: "600" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M8.5 8.5l7 7M15.5 8.5l-7 7"></path>
                      </svg>
                      Inspection fees
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px", borderRadius: "12px", background: "#FCE8E6", color: "#8C1D17", fontSize: "15px", fontWeight: "600" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M8.5 8.5l7 7M15.5 8.5l-7 7"></path>
                      </svg>
                      Payment before viewing
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px", borderRadius: "12px", background: "#FCE8E6", color: "#8C1D17", fontSize: "15px", fontWeight: "600" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M8.5 8.5l7 7M15.5 8.5l-7 7"></path>
                      </svg>
                      Payment outside Plainly
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px", borderRadius: "12px", background: "#FCE8E6", color: "#8C1D17", fontSize: "15px", fontWeight: "600" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M8.5 8.5l7 7M15.5 8.5l-7 7"></path>
                      </svg>
                      Your OTP or PIN
                    </li>
                  </ul>
                  <p style={{ margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                    If anyone asks for these, stop and report it from the chat or the listing. Our team reviews every report.
                  </p>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", borderRadius: "12px", background: "#E2F0E7", color: "#0A4630", fontSize: "14px", fontWeight: "600" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                      <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                    </svg>
                    Plainly can only protect money paid through Plainly.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-labelledby="h-compare" style={{ padding: "72px 0 0" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "28px 48px" }}>
              <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                  What it costs to move in
                </span>
                <h2 id="h-compare" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                  Same flat. ₦410,000 to ₦450,000 less.
                </h2>
                <p style={{ margin: "0", fontSize: "16px", color: "#3D4A43" }}>
                  Like for like: the same rent, the same one-year advance and the same caution deposit. The difference is the fees that disappear when you deal with the owner.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ height: "28px", padding: "0 10px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700", letterSpacing: "0.04em" }}>
                    Worked example, ₦2m/yr flat
                  </span>
                  <span style={{ height: "28px", padding: "0 10px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Illustration
                  </span>
                </div>
              </div>
              <div style={{ flex: "999 1 560px", minWidth: "0", overflowX: "auto", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px" }}>
                <table style={{ width: "100%", minWidth: "560px", borderCollapse: "collapse", fontSize: "15px", fontVariantNumeric: "tabular-nums" }}>
                  <caption style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                    Worked example, ₦2m/yr flat: typical agent route compared with Plainly
                  </caption>
                  <thead>
                    <tr style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      <th scope="col" style={{ textAlign: "left", padding: "16px 20px", color: "#5E6862", background: "#FBFAF7", width: "38%" }}>
                        Cost
                      </th>
                      <th scope="col" style={{ textAlign: "right", padding: "16px 20px", color: "#5E6862", background: "#FBFAF7" }}>
                        Typical agent route
                      </th>
                      <th scope="col" style={{ textAlign: "right", padding: "16px 20px", color: "#0E5A3C", background: "#E2F0E7" }}>
                        Plainly
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "14px 20px", fontWeight: "600" }}>
                        Agency fee
                      </th>
                      <td style={{ textAlign: "right", padding: "14px 20px" }}>
                        10% · ₦200,000
                      </td>
                      <td style={{ textAlign: "right", padding: "14px 20px", fontWeight: "700", color: "#145C37", background: "#F3F9F5" }}>
                        ₦0
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "14px 20px", fontWeight: "600" }}>
                        Legal / agreement fee
                      </th>
                      <td style={{ textAlign: "right", padding: "14px 20px" }}>
                        10% · ₦200,000
                      </td>
                      <td style={{ textAlign: "right", padding: "14px 20px", fontWeight: "700", color: "#145C37", background: "#F3F9F5" }}>
                        {"₦0 "}
                        <span style={{ fontWeight: "500", color: "#3D4A43" }}>
                          · free standard agreement
                        </span>
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "14px 20px", fontWeight: "600" }}>
                        Inspection / form fees
                      </th>
                      <td style={{ textAlign: "right", padding: "14px 20px" }}>
                        ₦10,000–₦50,000
                      </td>
                      <td style={{ textAlign: "right", padding: "14px 20px", fontWeight: "700", color: "#145C37", background: "#F3F9F5" }}>
                        ₦0
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "14px 20px", fontWeight: "600" }}>
                        Rent, 1 year advance
                      </th>
                      <td style={{ textAlign: "right", padding: "14px 20px" }}>
                        ₦2,000,000
                      </td>
                      <td style={{ textAlign: "right", padding: "14px 20px", background: "#F3F9F5" }}>
                        ₦2,000,000
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "14px 20px", fontWeight: "600" }}>
                        Caution deposit
                      </th>
                      <td style={{ textAlign: "right", padding: "14px 20px" }}>
                        ₦200,000
                      </td>
                      <td style={{ textAlign: "right", padding: "14px 20px", background: "#F3F9F5" }}>
                        ₦200,000
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1.5px solid #15201A" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "18px 20px", fontWeight: "700", fontSize: "16px" }}>
                        Total to move in
                      </th>
                      <td style={{ textAlign: "right", padding: "18px 20px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        ₦2.61m–₦2.65m
                      </td>
                      <td style={{ textAlign: "right", padding: "18px 20px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: "-0.02em", background: "#F4B728", color: "#15201A" }}>
                        ₦2.2m
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section aria-labelledby="h-areas" style={{ padding: "72px 0" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "8px 24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                    Start somewhere
                  </span>
                  <h2 id="h-areas" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Popular areas in Lagos
                  </h2>
                </div>
                <Link href="/search" style={{ minHeight: "44px", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "600", textDecoration: "none" }}>
                  Browse all of Lagos
                </Link>
              </div>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "16px" }}>
                <li>
                  <Link href="/search" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "180px", boxSizing: "border-box", padding: "16px", borderRadius: "18px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", color: "#15201A", textDecoration: "none", position: "relative" }}>
                    <span style={{ position: "absolute", top: "14px", right: "14px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Mainland
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                      <strong style={{ fontSize: "17px" }}>
                        Yaba
                      </strong>
                      <span style={{ fontSize: "14px", color: "#3D4A43", fontVariantNumeric: "tabular-nums" }}>
                        142 homes
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/search" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "180px", boxSizing: "border-box", padding: "16px", borderRadius: "18px", background: "#D6D2C2", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", color: "#15201A", textDecoration: "none", position: "relative" }}>
                    <span style={{ position: "absolute", top: "14px", right: "14px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Mainland
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                      <strong style={{ fontSize: "17px" }}>
                        Gbagada
                      </strong>
                      <span style={{ fontSize: "14px", color: "#3D4A43", fontVariantNumeric: "tabular-nums" }}>
                        88 homes
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/search" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "180px", boxSizing: "border-box", padding: "16px", borderRadius: "18px", background: "#D3DAD6", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", color: "#15201A", textDecoration: "none", position: "relative" }}>
                    <span style={{ position: "absolute", top: "14px", right: "14px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Mainland
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                      <strong style={{ fontSize: "17px" }}>
                        Surulere
                      </strong>
                      <span style={{ fontSize: "14px", color: "#3D4A43", fontVariantNumeric: "tabular-nums" }}>
                        96 homes
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/search" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "180px", boxSizing: "border-box", padding: "16px", borderRadius: "18px", background: "#CFE0E8", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", color: "#15201A", textDecoration: "none", position: "relative" }}>
                    <span style={{ position: "absolute", top: "14px", right: "14px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Island
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                      <strong style={{ fontSize: "17px" }}>
                        Lekki Phase 1
                      </strong>
                      <span style={{ fontSize: "14px", color: "#0E5A3C", fontWeight: "600" }}>
                        Explore
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/search" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "180px", boxSizing: "border-box", padding: "16px", borderRadius: "18px", background: "#E3DCC8", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", color: "#15201A", textDecoration: "none", position: "relative" }}>
                    <span style={{ position: "absolute", top: "14px", right: "14px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Mainland
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                      <strong style={{ fontSize: "17px" }}>
                        Ikorodu
                      </strong>
                      <span style={{ fontSize: "14px", color: "#0E5A3C", fontWeight: "600" }}>
                        Explore
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section aria-labelledby="h-owners" style={{ background: "#0E5A3C", color: "#FFFFFF" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px 56px" }}>
              <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#CDE6D6" }}>
                  For owners
                </span>
                <h2 id="h-owners" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: "1.05", letterSpacing: "-0.03em" }}>
                  Own a flat? List it plainly.
                </h2>
                <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "14px 24px", fontSize: "16px" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#F4B728", display: "grid", placeItems: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                    </span>
                    <span>
                      <strong>
                        Tenant ID checks
                      </strong>
                      {" before anyone books a viewing."}
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#F4B728", display: "grid", placeItems: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                    </span>
                    <span>
                      <strong>
                        You approve every tenant.
                      </strong>
                      {" Nobody moves in without your yes."}
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#F4B728", display: "grid", placeItems: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                    </span>
                    <span>
                      <strong>
                        Guaranteed payment
                      </strong>
                      {" through Plainly Secure, straight to your bank."}
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#F4B728", display: "grid", placeItems: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                    </span>
                    <span>
                      <strong>
                        Fee shown before you start:
                      </strong>
                      {" ₦5,000–₦35,000 per 90 days by rent band. Founding owners list free first."}
                    </span>
                  </li>
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px", paddingTop: "4px" }}>
                  <Link href="/owner/listings/new" style={{ height: "52px", padding: "0 24px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", borderRadius: "12px", background: "#FFFFFF", color: "#0E5A3C", textDecoration: "none", fontSize: "16px", fontWeight: "700" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    List your property
                  </Link>
                  <Link href="/owner" style={{ minHeight: "44px", display: "flex", alignItems: "center", color: "#FFFFFF", fontSize: "15px", fontWeight: "600", textUnderlineOffset: "3px" }}>
                    How owner fees work
                  </Link>
                </div>
              </div>
              <div style={{ flex: "1 1 320px", minWidth: "0", background: "#0A4630", border: "1px solid #1C6B4B", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                    Listing fee per 90 days
                  </h3>
                  <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#F4B728", color: "#15201A", fontSize: "12px", fontWeight: "700" }}>
                    Founding: first 90 days free
                  </span>
                </div>
                <dl style={{ margin: "0", display: "flex", flexDirection: "column", fontSize: "15px", fontVariantNumeric: "tabular-nums" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0" }}>
                    <dt style={{ color: "#CDE6D6" }}>
                      Rent under ₦1m
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "700" }}>
                      ₦5,000
                    </dd>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #1C6B4B" }}>
                    <dt style={{ color: "#CDE6D6" }}>
                      ₦1m–₦3m
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "700" }}>
                      ₦10,000
                    </dd>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #1C6B4B" }}>
                    <dt style={{ color: "#CDE6D6" }}>
                      ₦3m–₦10m
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "700" }}>
                      ₦20,000
                    </dd>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #1C6B4B" }}>
                    <dt style={{ color: "#CDE6D6" }}>
                      Over ₦10m
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "700" }}>
                      ₦35,000
                    </dd>
                  </div>
                </dl>
                <span style={{ fontSize: "13px", color: "#CDE6D6" }}>
                  A closing fee applies only when you let through Plainly, and your listing fee is credited against it.
                </span>
              </div>
            </div>
          </section>
          <section aria-labelledby="h-app" style={{ padding: "56px 0" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", boxSizing: "border-box" }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "24px", padding: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px 40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: "1 1 360px", minWidth: "0" }}>
                  <span style={{ width: "64px", height: "64px", flex: "none", borderRadius: "18px", background: "#E2F0E7", display: "grid", placeItems: "center" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="7" y="2.5" width="10" height="19" rx="2"></rect>
                      <path d="M11 18h2"></path>
                    </svg>
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <h2 id="h-app" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "28px", lineHeight: "1.15", letterSpacing: "-0.02em" }}>
                      Get the app. Built for patchy data.
                    </h2>
                    <span style={{ fontSize: "15px", color: "#3D4A43" }}>
                      Data saver on 2G and 3G, offline drafts, and alerts when a home you saved changes.
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <button type="button" style={{ height: "52px", padding: "0 20px", display: "flex", alignItems: "center", gap: "10px", border: "1.5px solid #15201A", borderRadius: "12px", background: "#FFFFFF", color: "#15201A", font: "700 15px 'Figtree', sans-serif" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                    </svg>
                    Get it on Google Play
                  </button>
                  <button type="button" style={{ height: "52px", padding: "0 20px", display: "flex", alignItems: "center", gap: "10px", border: "1.5px solid #15201A", borderRadius: "12px", background: "#FFFFFF", color: "#15201A", font: "700 15px 'Figtree', sans-serif" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                    </svg>
                    Download on the App Store
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer style={{ background: "#FFFFFF", borderTop: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "28px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 32px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
              <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
                <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
                <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
              </svg>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "20px", letterSpacing: "-0.03em" }}>
                plainly
              </span>
              <span style={{ fontSize: "14px", color: "#5E6862" }}>
                Plainly. Straight to the owner.
              </span>
            </div>
            <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", fontSize: "14px", fontWeight: "600" }}>
              <Link href="/coming-soon/A06-SafetyCentre" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                Safety centre
              </Link>
              <Link href="/browse" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                How fees work
              </Link>
              <Link href="/owner/listings/new" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                For owners
              </Link>
              <Link href="/browse" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                Agents
              </Link>
              <Link href="/browse" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                Legal
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
