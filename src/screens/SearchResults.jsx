"use client";

// Generated from Claude Design: W02-Search.dc.html (WEB-03 · Results + map)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic, useFormHandlers } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class SearchResultsLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function SearchResults() {
  useDCLogic(SearchResultsLogic);
  const { submitSearch, submitPrevent } = useFormHandlers();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1150px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.45", display: "flex", flexDirection: "column" }}>
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
              <Link href="/search" aria-current="page" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#0E5A3C", boxShadow: "inset 0 -2px 0 #0E5A3C" }}>
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
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E3DFD4" }}>
          <form onSubmit={submitSearch} role="search" aria-label="Search homes" style={{ maxWidth: "1280px", margin: "0 auto", padding: "14px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            <label style={{ flex: "1 1 280px", minWidth: "0", height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px", border: "1.5px solid #15201A", borderRadius: "12px", background: "#FFFFFF" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                Area, estate or landmark
              </span>
              <input type="search" defaultValue="Yaba, Lagos Mainland" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "600 15px 'Figtree', sans-serif", color: "#15201A" }} />
              <button type="button" aria-label="Clear location" style={{ width: "32px", height: "32px", border: "0", borderRadius: "8px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18"></path>
                </svg>
              </button>
            </label>
            <label style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px 0 14px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                Type
              </span>
              <select defaultValue="Rent" style={{ border: "0", background: "transparent", font: "600 15px 'Figtree', sans-serif", color: "#15201A", height: "44px" }}>
                <option>
                  Rent
                </option>
                <option>
                  Lease
                </option>
                <option>
                  Buy
                </option>
                <option>
                  Land
                </option>
              </select>
            </label>
            <button type="button" aria-haspopup="dialog" style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", border: "1px solid #0E5A3C", borderRadius: "12px", background: "#E2F0E7", color: "#0E5A3C", font: "600 15px 'Figtree', sans-serif" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Move-in
              </span>
              {"Up to ₦2.5m "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <button type="button" aria-haspopup="dialog" style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", border: "1px solid #0E5A3C", borderRadius: "12px", background: "#E2F0E7", color: "#0E5A3C", font: "600 15px 'Figtree', sans-serif" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 18V7M3 13h18v5M21 18v-5a3 3 0 0 0-3-3h-8v3"></path>
              </svg>
              {"Beds 2+ "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <button type="button" aria-haspopup="dialog" style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", color: "#15201A", font: "600 15px 'Figtree', sans-serif" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"></path>
                <circle cx="16" cy="6" r="2"></circle>
                <circle cx="10" cy="12" r="2"></circle>
                <circle cx="18" cy="18" r="2"></circle>
              </svg>
              {"More filters "}
              <span style={{ minWidth: "22px", height: "22px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                3
              </span>
            </button>
            <button type="button" aria-pressed="true" style={{ height: "40px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "6px", padding: "0 14px", border: "0", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", font: "600 14px 'Figtree', sans-serif" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12.5 4.5 4.5L19 7.5"></path>
              </svg>
              {"Owner only "}
            </button>
            <span style={{ flex: "1 1 0", minWidth: "0" }}></span>
            <span className="tip">
              {" "}
              <button type="button" aria-describedby="tip-alerts" style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 16px", border: "1.5px solid #15201A", borderRadius: "12px", background: "#FFFFFF", color: "#15201A", font: "700 15px 'Figtree', sans-serif" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                  <path d="M10 21h4"></path>
                </svg>
                {"Save search "}
              </button>
              {" "}
              <span role="tooltip" id="tip-alerts">
                Alerts by push, email or WhatsApp within 15 minutes of a new match
              </span>
              {" "}
            </span>
          </form>
        </div>
        <main style={{ flex: "1", width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "24px 32px 48px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "28px", lineHeight: "1.15", letterSpacing: "-0.02em" }}>
                142 homes for rent in Yaba
              </h1>
              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                Owner only · Up to ₦2.5m to move in · 2+ beds · Prepaid meter · Video available · Fair Terms
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <label style={{ height: "44px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px 0 14px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF" }}>
                  <span style={{ fontSize: "14px", color: "#5E6862", fontWeight: "600" }}>
                    Sort
                  </span>
                  <select defaultValue="Best match" style={{ border: "0", background: "transparent", font: "700 14px 'Figtree', sans-serif", color: "#15201A", height: "40px" }}>
                    <option>
                      Best match
                    </option>
                    <option>
                      Newest
                    </option>
                    <option>
                      Total move-in cost: low to high
                    </option>
                    <option>
                      Rent: low to high
                    </option>
                    <option>
                      Closest
                    </option>
                    <option>
                      Best verified
                    </option>
                  </select>
                </label>
                <span className="tip">
                  {" "}
                  <button type="button" aria-label="How Best match works" aria-describedby="tip-sort" style={{ width: "44px", height: "44px", border: "0", borderRadius: "999px", background: "transparent", display: "grid", placeItems: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 11v5M12 8h.01"></path>
                    </svg>
                  </button>
                  {" "}
                  <span role="tooltip" id="tip-sort">
                    Best match ranks verification tier, freshness, relevance and the lister's record of closes through Plainly Secure. Featured listings are labelled.
                  </span>
                  {" "}
                </span>
              </div>
              <button type="button" aria-pressed="true" style={{ height: "44px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", border: "1.5px solid #0E5A3C", borderRadius: "12px", background: "#E2F0E7", color: "#0E5A3C", font: "700 14px 'Figtree', sans-serif" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
                </svg>
                {"Compare (2/4) "}
              </button>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px" }}>
            <section aria-label="Results list" style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "16px" }}>
                <article style={{ background: "#FFFFFF", border: "1.5px solid #0E5A3C", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                  <div style={{ height: "150px", position: "relative", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "rgba(21,32,26,.72)", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </span>
                    <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px", fontWeight: "700", color: "#0E5A3C" }}>
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
                    <span style={{ position: "absolute", bottom: "10px", right: "64px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", color: "rgba(255,255,255,.75)" }}>
                      PLAINLY · PL-24817
                    </span>
                    <button type="button" aria-label="Save 2-bed flat, Alagomeji" style={{ position: "absolute", top: "8px", right: "8px", width: "40px", height: "40px", border: "0", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                      </svg>
                    </button>
                    <label style={{ position: "absolute", bottom: "8px", right: "8px", height: "32px", padding: "0 8px", display: "flex", alignItems: "center", gap: "4px", borderRadius: "8px", background: "#FFFFFF", fontSize: "12px", fontWeight: "700", color: "#0E5A3C" }}>
                      <input type="checkbox" defaultChecked aria-label="Compare 2-bed flat, Alagomeji" style={{ width: "16px", height: "16px", margin: "0", accentColor: "#0E5A3C" }} />
                      1
                    </label>
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <Link href="/listings/PL-24817" style={{ fontWeight: "700", fontSize: "16px", color: "#15201A", textDecoration: "none" }}>
                        2-bed flat · Alagomeji, Yaba
                      </Link>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        2 bed · 2 bath · 85 m² · Prepaid meter · Borehole
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px", paddingTop: "8px", borderTop: "1px dashed #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          To move in
                        </span>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                          ₦2,200,000
                        </span>
                      </div>
                      <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                        ₦2,000,000/yr
                        <br />
                        1 yr advance · Fair Terms
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px", fontSize: "12px", color: "#5E6862" }}>
                      <span>
                        Listed by owner
                      </span>
                      <span>
                        Confirmed available 2 days ago
                      </span>
                    </div>
                  </div>
                </article>
                <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ height: "150px", position: "relative", background: "#D6D2C2", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "rgba(21,32,26,.72)", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </span>
                    <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#F4B728", fontSize: "12px", fontWeight: "700", color: "#15201A" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                        </svg>
                        Featured
                      </span>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FDF3D3", fontSize: "12px", fontWeight: "700", color: "#6B4E00" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B4E00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Inspected
                      </span>
                    </div>
                    <span style={{ position: "absolute", bottom: "10px", left: "10px", height: "24px", padding: "0 8px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "6px", background: "rgba(21,32,26,.72)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#F4B728" }}></span>
                      Live video · 1:48
                    </span>
                    <button type="button" aria-label="Save 1-bed flat, Adeniran Ogunsanya" style={{ position: "absolute", top: "8px", right: "8px", width: "40px", height: "40px", border: "0", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                      </svg>
                    </button>
                    <label style={{ position: "absolute", bottom: "8px", right: "8px", height: "32px", padding: "0 8px", display: "flex", alignItems: "center", gap: "4px", borderRadius: "8px", background: "#FFFFFF", fontSize: "12px", fontWeight: "700", color: "#0E5A3C" }}>
                      <input type="checkbox" defaultChecked aria-label="Compare 1-bed flat, Adeniran Ogunsanya" style={{ width: "16px", height: "16px", margin: "0", accentColor: "#0E5A3C" }} />
                      2
                    </label>
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <Link href="/listings/PL-24817" style={{ fontWeight: "700", fontSize: "16px", color: "#15201A", textDecoration: "none" }}>
                        1-bed flat · Adeniran Ogunsanya, Surulere
                      </Link>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        1 bed · 1 bath · Owner verified · Inspected
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px", paddingTop: "8px", borderTop: "1px dashed #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          To move in
                        </span>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                          ₦2,000,000
                        </span>
                      </div>
                      <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                        ₦1,800,000/yr
                        <br />
                        1 yr advance
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px", fontSize: "12px", color: "#5E6862" }}>
                      <span>
                        Listed by owner · Featured is a paid placement
                      </span>
                      <span>
                        Confirmed available today
                      </span>
                    </div>
                  </div>
                </article>
                <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ height: "150px", position: "relative", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "rgba(21,32,26,.72)", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </span>
                    <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px", fontWeight: "700", color: "#1D5FB8" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="8" r="4"></circle>
                          <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                        </svg>
                        ID verified
                      </span>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#15201A", fontSize: "12px", fontWeight: "700", color: "#FFFFFF" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#F4B728" }}></span>
                        Live video
                      </span>
                    </div>
                    <span style={{ position: "absolute", bottom: "10px", left: "10px", height: "24px", padding: "0 8px", display: "flex", alignItems: "center", borderRadius: "6px", background: "rgba(21,32,26,.72)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                      1:32 · walkthrough
                    </span>
                    <button type="button" aria-label="Save mini-flat, Onike" style={{ position: "absolute", top: "8px", right: "8px", width: "40px", height: "40px", border: "0", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                      </svg>
                    </button>
                    <label style={{ position: "absolute", bottom: "8px", right: "8px", height: "32px", padding: "0 8px", display: "flex", alignItems: "center", gap: "4px", borderRadius: "8px", background: "#FFFFFF", fontSize: "12px", fontWeight: "600", color: "#3D4A43" }}>
                      <input type="checkbox" aria-label="Compare mini-flat, Onike" style={{ width: "16px", height: "16px", margin: "0", accentColor: "#0E5A3C" }} />
                      Compare
                    </label>
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <Link href="/listings/PL-24817" style={{ fontWeight: "700", fontSize: "16px", color: "#15201A", textDecoration: "none" }}>
                        Mini-flat · Onike, Yaba
                      </Link>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        1 bed · 1 bath · Prepaid meter
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px", paddingTop: "8px", borderTop: "1px dashed #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          To move in
                        </span>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                          ₦1,350,000
                        </span>
                      </div>
                      <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                        ₦1,200,000/yr
                        <br />
                        1 yr advance · Fair Terms
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px", fontSize: "12px", color: "#5E6862" }}>
                      <span>
                        Listed by owner
                      </span>
                      <span>
                        Confirmed available 1 day ago
                      </span>
                    </div>
                  </div>
                </article>
                <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ height: "150px", position: "relative", background: "#D3DAD6", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "rgba(21,32,26,.72)", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </span>
                    <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px", fontWeight: "700", color: "#1D5FB8" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="8" r="4"></circle>
                          <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                        </svg>
                        ID verified
                      </span>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#EFECE4", fontSize: "12px", fontWeight: "700", color: "#3D4A43" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="6" width="13" height="12" rx="2"></rect>
                          <path d="m16 10 5-3v10l-5-3"></path>
                        </svg>
                        Uploaded video
                      </span>
                    </div>
                    <span style={{ position: "absolute", bottom: "10px", left: "10px", height: "24px", padding: "0 8px", display: "flex", alignItems: "center", borderRadius: "6px", background: "rgba(21,32,26,.72)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                      0:58 · not shot in app
                    </span>
                    <button type="button" aria-label="Save self-contain, Akoka" style={{ position: "absolute", top: "8px", right: "8px", width: "40px", height: "40px", border: "0", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                      </svg>
                    </button>
                    <label style={{ position: "absolute", bottom: "8px", right: "8px", height: "32px", padding: "0 8px", display: "flex", alignItems: "center", gap: "4px", borderRadius: "8px", background: "#FFFFFF", fontSize: "12px", fontWeight: "600", color: "#3D4A43" }}>
                      <input type="checkbox" aria-label="Compare self-contain, Akoka" style={{ width: "16px", height: "16px", margin: "0", accentColor: "#0E5A3C" }} />
                      Compare
                    </label>
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <Link href="/listings/PL-24817" style={{ fontWeight: "700", fontSize: "16px", color: "#15201A", textDecoration: "none" }}>
                        Self-contain · Akoka
                      </Link>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        Studio · 1 bath · Near UNILAG
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px", paddingTop: "8px", borderTop: "1px dashed #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          To move in
                        </span>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                          ₦750,000
                        </span>
                      </div>
                      <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                        ₦650,000/yr
                        <br />
                        1 yr advance
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px", fontSize: "12px", color: "#5E6862" }}>
                      <span>
                        Listed by owner
                      </span>
                      <span>
                        Confirmed available 3 days ago
                      </span>
                    </div>
                  </div>
                </article>
                <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ height: "150px", position: "relative", background: "#CCD3DA", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "rgba(21,32,26,.72)", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </span>
                    <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px", fontWeight: "700", color: "#15201A" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 3h8l4 4v14H6z"></path>
                          <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                        </svg>
                        LASRERA agent
                      </span>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#15201A", fontSize: "12px", fontWeight: "700", color: "#FFFFFF" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#F4B728" }}></span>
                        Live video
                      </span>
                    </div>
                    <span style={{ position: "absolute", bottom: "10px", left: "10px", height: "24px", padding: "0 8px", display: "flex", alignItems: "center", borderRadius: "6px", background: "rgba(21,32,26,.72)", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                      2:40 · walkthrough
                    </span>
                    <button type="button" aria-label="Save 3-bed flat, Ifako" style={{ position: "absolute", top: "8px", right: "8px", width: "40px", height: "40px", border: "0", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                      </svg>
                    </button>
                    <label style={{ position: "absolute", bottom: "8px", right: "8px", height: "32px", padding: "0 8px", display: "flex", alignItems: "center", gap: "4px", borderRadius: "8px", background: "#FFFFFF", fontSize: "12px", fontWeight: "600", color: "#3D4A43" }}>
                      <input type="checkbox" aria-label="Compare 3-bed flat, Ifako" style={{ width: "16px", height: "16px", margin: "0", accentColor: "#0E5A3C" }} />
                      Compare
                    </label>
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <Link href="/listings/PL-24817" style={{ fontWeight: "700", fontSize: "16px", color: "#15201A", textDecoration: "none" }}>
                        3-bed flat · Ifako, Gbagada
                      </Link>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        3 bed · 3 bath · Nearby, outside your filters
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px", paddingTop: "8px", borderTop: "1px dashed #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          To move in
                        </span>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                          ₦3,900,000
                        </span>
                      </div>
                      <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                        ₦3,500,000/yr
                        <br />
                        incl. agency fee 10% ₦350,000
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px", fontSize: "12px", color: "#5E6862" }}>
                      <span style={{ fontWeight: "700", color: "#3D4A43" }}>
                        Listed by agent · LASRERA
                      </span>
                      <span>
                        Fee itemised on listing
                      </span>
                    </div>
                  </div>
                </article>
                <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ height: "150px", position: "relative", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "rgba(21,32,26,.72)", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </span>
                    <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px", fontWeight: "700", color: "#0E5A3C" }}>
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
                      2:05 · walkthrough
                    </span>
                    <button type="button" aria-label="Save 2-bed flat, Surulere" style={{ position: "absolute", top: "8px", right: "8px", width: "40px", height: "40px", border: "0", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                      </svg>
                    </button>
                    <label style={{ position: "absolute", bottom: "8px", right: "8px", height: "32px", padding: "0 8px", display: "flex", alignItems: "center", gap: "4px", borderRadius: "8px", background: "#FFFFFF", fontSize: "12px", fontWeight: "600", color: "#3D4A43" }}>
                      <input type="checkbox" aria-label="Compare 2-bed flat, Surulere" style={{ width: "16px", height: "16px", margin: "0", accentColor: "#0E5A3C" }} />
                      Compare
                    </label>
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <Link href="/listings/PL-24817" style={{ fontWeight: "700", fontSize: "16px", color: "#15201A", textDecoration: "none" }}>
                        2-bed flat · Surulere
                      </Link>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        2 bed · 2 bath · Prepaid meter · Gated
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px", paddingTop: "8px", borderTop: "1px dashed #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          To move in
                        </span>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                          ₦2,420,000
                        </span>
                      </div>
                      <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                        ₦2,200,000/yr
                        <br />
                        1 yr advance · Fair Terms
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px", fontSize: "12px", color: "#5E6862" }}>
                      <span>
                        Listed by owner
                      </span>
                      <span>
                        Confirmed available 4 days ago
                      </span>
                    </div>
                  </div>
                </article>
              </div>
              <nav aria-label="Pages" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ fontSize: "14px", color: "#5E6862" }}>
                  Showing 1–6 of 142
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                  <button type="button" disabled aria-label="Previous page" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #E3DFD4", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m15 6-6 6 6 6"></path>
                    </svg>
                  </button>
                  <Link href="/search" aria-current="page" style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#15201A", color: "#FFFFFF", display: "grid", placeItems: "center", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                    1
                  </Link>
                  <Link href="/search" style={{ width: "44px", height: "44px", boxSizing: "border-box", borderRadius: "12px", border: "1px solid #E3DFD4", background: "#FFFFFF", color: "#15201A", display: "grid", placeItems: "center", textDecoration: "none", fontWeight: "600", fontSize: "14px" }}>
                    2
                  </Link>
                  <Link href="/search" style={{ width: "44px", height: "44px", boxSizing: "border-box", borderRadius: "12px", border: "1px solid #E3DFD4", background: "#FFFFFF", color: "#15201A", display: "grid", placeItems: "center", textDecoration: "none", fontWeight: "600", fontSize: "14px" }}>
                    3
                  </Link>
                  <span style={{ width: "28px", textAlign: "center", color: "#5E6862" }}>
                    …
                  </span>
                  <Link href="/search" style={{ width: "44px", height: "44px", boxSizing: "border-box", borderRadius: "12px", border: "1px solid #E3DFD4", background: "#FFFFFF", color: "#15201A", display: "grid", placeItems: "center", textDecoration: "none", fontWeight: "600", fontSize: "14px" }}>
                    24
                  </Link>
                  <Link href="/search" style={{ height: "44px", padding: "0 14px", boxSizing: "border-box", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                    Next
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 6 6 6-6 6"></path>
                    </svg>
                  </Link>
                </div>
              </nav>
            </section>
            <section aria-label="Map of results" style={{ flex: "1 1 420px", minWidth: "0", height: "900px", position: "relative", overflow: "hidden", borderRadius: "16px", border: "1px solid #E3DFD4", background: "#E9E5DA" }}>
              <div style={{ position: "absolute", right: "-120px", top: "80px", width: "260px", height: "640px", borderRadius: "48% 52% 40% 60%", background: "#CFE0E8" }}></div>
              <div style={{ position: "absolute", right: "-60px", top: "600px", width: "220px", height: "360px", borderRadius: "50%", background: "#CFE0E8" }}></div>
              {" "}
              <span style={{ position: "absolute", right: "18px", top: "330px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3A6274", transform: "rotate(80deg)" }}>
                Lagos Lagoon
              </span>
              {" "}
              <div style={{ position: "absolute", left: "12%", top: "64%", width: "90px", height: "60px", borderRadius: "10px", background: "#D9E3D2" }}></div>
              <div style={{ position: "absolute", left: "50%", top: "18%", width: "120px", height: "70px", borderRadius: "10px", background: "#D9E3D2" }}></div>
              <div style={{ position: "absolute", left: "-10%", top: "30%", width: "130%", height: "12px", background: "#FFFFFF", transform: "rotate(-8deg)" }}></div>
              <div style={{ position: "absolute", left: "-10%", top: "58%", width: "130%", height: "8px", background: "#FFFFFF", transform: "rotate(6deg)" }}></div>
              <div style={{ position: "absolute", left: "34%", top: "-5%", width: "12px", height: "115%", background: "#FFFFFF", transform: "rotate(10deg)" }}></div>
              <div style={{ position: "absolute", left: "66%", top: "-5%", width: "8px", height: "115%", background: "#FFFFFF", transform: "rotate(-6deg)" }}></div>
              <div style={{ position: "absolute", left: "10%", top: "10%", width: "6px", height: "90%", background: "#FFFFFF", transform: "rotate(-14deg)" }}></div>
              <div style={{ position: "absolute", left: "-10%", top: "82%", width: "130%", height: "6px", background: "#FFFFFF", transform: "rotate(-3deg)" }}></div>
              {" "}
              <span style={{ position: "absolute", left: "40%", top: "36%", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Yaba
              </span>
              {" "}
              <span style={{ position: "absolute", left: "70%", top: "12%", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Akoka
              </span>
              {" "}
              <span style={{ position: "absolute", left: "14%", top: "22%", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Onike
              </span>
              {" "}
              <span style={{ position: "absolute", left: "22%", top: "48%", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Alagomeji
              </span>
              {" "}
              <span style={{ position: "absolute", left: "52%", top: "66%", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Ebute Metta
              </span>
              {" "}
              <span style={{ position: "absolute", left: "8%", top: "88%", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Surulere
              </span>
              {" "}
              <span style={{ position: "absolute", left: "6%", top: "6%", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Gbagada
              </span>
              {" "}
              <div style={{ position: "absolute", left: "24%", top: "44%", width: "190px", height: "190px", margin: "-95px 0 0 -95px", borderRadius: "999px", background: "rgba(14,90,60,.14)", border: "2px dashed #0E5A3C", boxSizing: "border-box" }}></div>
              {" "}
              <span style={{ position: "absolute", left: "24%", top: "44%", margin: "70px 0 0 -62px", height: "24px", padding: "0 8px", display: "flex", alignItems: "center", borderRadius: "6px", background: "#FFFFFF", fontSize: "12px", fontWeight: "600", color: "#0E5A3C", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                Within 300 m · exact address after viewing
              </span>
              {" "}
              {" "}
              <button type="button" aria-label="2-bed flat, Alagomeji, ₦2,200,000 to move in, highlighted" style={{ position: "absolute", left: "24%", top: "44%", transform: "translate(-50%, -50%)", height: "34px", padding: "0 12px", border: "2px solid #FFFFFF", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", font: "700 14px 'Figtree', sans-serif", fontVariantNumeric: "tabular-nums", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)", zIndex: "2" }}>
                ₦2.2m
              </button>
              {" "}
              <button type="button" aria-label="Mini-flat, Onike, ₦1,350,000 to move in" style={{ position: "absolute", left: "22%", top: "26%", transform: "translate(-50%, -50%)", height: "32px", padding: "0 10px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#15201A", font: "700 13px 'Figtree', sans-serif", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                ₦1.35m
              </button>
              {" "}
              <button type="button" aria-label="Self-contain, Akoka, ₦750,000 to move in" style={{ position: "absolute", left: "74%", top: "18%", transform: "translate(-50%, -50%)", height: "32px", padding: "0 10px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#15201A", font: "700 13px 'Figtree', sans-serif", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                ₦750k
              </button>
              {" "}
              <button type="button" aria-label="Featured: 1-bed flat, Surulere, ₦2,000,000 to move in" style={{ position: "absolute", left: "22%", top: "80%", transform: "translate(-50%, -50%)", height: "32px", padding: "0 10px", border: "1px solid #15201A", borderRadius: "999px", background: "#F4B728", color: "#15201A", font: "700 13px 'Figtree', sans-serif", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                ₦2m · Featured
              </button>
              {" "}
              <button type="button" aria-label="2-bed flat, Surulere, ₦2,420,000 to move in" style={{ position: "absolute", left: "44%", top: "74%", transform: "translate(-50%, -50%)", height: "32px", padding: "0 10px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#15201A", font: "700 13px 'Figtree', sans-serif", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                ₦2.42m
              </button>
              {" "}
              <button type="button" aria-label="3-bed flat, Ifako, ₦3,900,000 to move in" style={{ position: "absolute", left: "20%", top: "10%", transform: "translate(-50%, -50%)", height: "32px", padding: "0 10px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#3D4A43", font: "700 13px 'Figtree', sans-serif", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                ₦3.9m
              </button>
              {" "}
              <button type="button" aria-label="Cluster of 18 homes near Yaba, zoom in" style={{ position: "absolute", left: "52%", top: "42%", transform: "translate(-50%, -50%)", width: "52px", height: "52px", border: "3px solid #FFFFFF", borderRadius: "999px", background: "#0E5A3C", color: "#FFFFFF", font: "800 16px 'Bricolage Grotesque', sans-serif", boxShadow: "0 0 0 6px rgba(14,90,60,.18)" }}>
                18
              </button>
              {" "}
              <button type="button" aria-label="Cluster of 7 homes near Akoka, zoom in" style={{ position: "absolute", left: "60%", top: "28%", transform: "translate(-50%, -50%)", width: "44px", height: "44px", border: "3px solid #FFFFFF", borderRadius: "999px", background: "#0E5A3C", color: "#FFFFFF", font: "800 14px 'Bricolage Grotesque', sans-serif", boxShadow: "0 0 0 5px rgba(14,90,60,.18)" }}>
                7
              </button>
              {" "}
              {" "}
              <label style={{ position: "absolute", top: "14px", left: "14px", height: "44px", padding: "0 14px 0 12px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", borderRadius: "12px", background: "#FFFFFF", fontSize: "14px", fontWeight: "600", color: "#15201A", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "0", accentColor: "#0E5A3C" }} />
                Search as I move the map
              </label>
              {" "}
              <button type="button" style={{ position: "absolute", top: "14px", right: "14px", height: "44px", padding: "0 14px", display: "flex", alignItems: "center", gap: "8px", border: "0", borderRadius: "12px", background: "#FFFFFF", color: "#15201A", font: "700 14px 'Figtree', sans-serif", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 18c2-6 5-12 10-12 3 0 5 2 5 5 0 5-6 3-9 7"></path>
                  <circle cx="4" cy="18" r="1.5"></circle>
                </svg>
                {"Draw area "}
              </button>
              {" "}
              <div style={{ position: "absolute", right: "14px", bottom: "56px", display: "flex", flexDirection: "column", borderRadius: "12px", background: "#FFFFFF", overflow: "hidden", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                <button type="button" aria-label="Zoom in" style={{ width: "44px", height: "44px", border: "0", borderBottom: "1px solid #E3DFD4", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                </button>
                <button type="button" aria-label="Zoom out" style={{ width: "44px", height: "44px", border: "0", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
              </div>
              <div style={{ position: "absolute", left: "14px", right: "14px", bottom: "14px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "6px", fontSize: "12px", color: "#3D4A43" }}>
                <span style={{ padding: "4px 8px", borderRadius: "6px", background: "rgba(255,255,255,.85)" }}>
                  Pins show approximate areas. Exact addresses are shared after a viewing is confirmed.
                </span>
                <span style={{ padding: "4px 8px", borderRadius: "6px", background: "rgba(255,255,255,.85)" }}>
                  Map data: [maps provider]
                </span>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
