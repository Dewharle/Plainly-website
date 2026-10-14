"use client";

// Generated from Claude Design: W10-CreateListing.dc.html (WKS-04 · Create listing wizard)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic, useFormHandlers } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-down>[role=tooltip]{bottom:auto;top:calc(100% + 10px)}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class CreateListingLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function CreateListing() {
  useDCLogic(CreateListingLogic);
  const { submitSearch, submitPrevent } = useFormHandlers();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1380px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.45", display: "flex", flexDirection: "column" }}>
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
              Search your listings, deals and people
            </span>
            <input type="search" placeholder="Search listings, deals, applicants" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "500 14px 'Figtree', sans-serif", color: "#15201A" }} />
          </label>
          <span style={{ flex: "1 1 0", minWidth: "0" }}></span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span className="tip tip-down">
              {" "}
              <Link href="/account" aria-describedby="t-role" style={{ height: "36px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", gap: "6px", padding: "0 12px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", font: "700 13px 'Figtree', sans-serif", color: "#15201A", textDecoration: "none" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#0E5A3C" }}></span>
                Owner
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </Link>
              {" "}
              <span role="tooltip" id="t-role">
                Switch role: you can rent and own on one account
              </span>
              {" "}
            </span>
            <Link href="/coming-soon/A05-Notifications" aria-label="Notifications, 3 new" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "grid", placeItems: "center", position: "relative" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                <path d="M10 21h4"></path>
              </svg>
              <span style={{ position: "absolute", top: "10px", right: "11px", width: "8px", height: "8px", borderRadius: "99px", background: "#B3261E", border: "2px solid #FFFFFF" }}></span>
            </Link>
            <button type="button" aria-label="Account menu for Funke Adebayo" style={{ height: "44px", display: "flex", alignItems: "center", gap: "10px", padding: "0 8px 0 4px", border: "0", background: "transparent", font: "600 14px 'Figtree', sans-serif", color: "#15201A" }}>
              <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "14px" }}>
                FA
              </span>
              {"Funke Adebayo "}
            </button>
          </div>
        </header>
        <div style={{ flex: "1", display: "flex", flexWrap: "wrap" }}>
          <nav aria-label="Owner workspace" style={{ flex: "1 1 248px", maxWidth: "248px", boxSizing: "border-box", background: "#FFFFFF", borderRight: "1px solid #E3DFD4", padding: "20px 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <Link href="/owner" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
              </svg>
              Overview
            </Link>
            <Link href="/owner" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
              </svg>
              Listings
            </Link>
            <Link href="/owner/listings/new" aria-current="page" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", background: "#E2F0E7", color: "#0E5A3C", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14"></path>
              </svg>
              Create listing
            </Link>
            <Link href="/messages" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Messages
              <span style={{ flex: "1" }}></span>
              <span aria-label="4 new" style={{ minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#0E5A3C", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                4
              </span>
            </Link>
            <Link href="/deal-room" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4M9 12h6M9 16h6"></path>
              </svg>
              Deals
            </Link>
            <Link href="/coming-soon/O06-Payout" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"></path>
              </svg>
              Payouts
            </Link>
            <Link href="/billing" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
              </svg>
              Billing
            </Link>
            <Link href="/coming-soon/O08-Security" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                <path d="m8.5 12 2.5 2.5 4.5-5"></path>
              </svg>
              Security centre
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
                ID verified · Owner verified
              </span>
              <span>
                ID checked 12 Oct 2026. Plainly does not certify title.
              </span>
            </div>
          </nav>
          <main style={{ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "32px" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                    New listing · Step 4 of 9
                  </span>
                  <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    {"Terms & costs"}
                  </h1>
                  <p style={{ margin: "0", color: "#3D4A43", fontSize: "15px" }}>
                    2-bed flat · Alagomeji, Yaba. Everything a seeker pays to move in, written down before anyone enquires.
                  </p>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                  </svg>
                  Draft saved 2 min ago
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
                <nav aria-label="Listing steps" style={{ flex: "1 1 220px", maxWidth: "260px", minWidth: "0", boxSizing: "border-box", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          Type
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Flat for rent · done
                        </span>
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          Location
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Alagomeji, Yaba · done
                        </span>
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          Specs
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          2 bed · 85 m² · done
                        </span>
                      </span>
                    </li>
                    <li aria-current="step" style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", margin: "0 -8px", padding: "0 8px", borderRadius: "10px", background: "#E2F0E7" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", border: "2px solid #0E5A3C", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                        <span style={{ width: "10px", height: "10px", borderRadius: "99px", background: "#0E5A3C" }}></span>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700", color: "#0E5A3C" }}>
                          Terms
                        </span>
                        <span style={{ fontSize: "12px", color: "#0A4630" }}>
                          In progress
                        </span>
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", border: "1.5px solid #CFC9BA", background: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#5E6862" }}>
                        5
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#3D4A43" }}>
                        Media
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", border: "1.5px solid #CFC9BA", background: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#5E6862" }}>
                        6
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#3D4A43" }}>
                          Video
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Best in the app
                        </span>
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", border: "1.5px solid #CFC9BA", background: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#5E6862" }}>
                        7
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#3D4A43" }}>
                        Ownership
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", border: "1.5px solid #CFC9BA", background: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#5E6862" }}>
                        8
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#3D4A43" }}>
                        Review
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center", minHeight: "44px" }}>
                      <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", border: "1.5px solid #CFC9BA", background: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#5E6862" }}>
                        9
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#3D4A43" }}>
                        Pay
                      </span>
                    </li>
                  </ol>
                  <div style={{ paddingTop: "12px", borderTop: "1px solid #E3DFD4", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      Draft saved 2 min ago
                    </span>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Pick up where you left off on the web or in the app.
                    </span>
                  </div>
                </nav>
                <form onSubmit={submitPrevent} aria-labelledby="h-terms" style={{ flex: "999 1 480px", minWidth: "0", boxSizing: "border-box", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "20px 24px", borderBottom: "1px solid #E3DFD4", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <h2 id="h-terms" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                      Rent and move-in costs
                    </h2>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      Fields marked * are required. These go into the tenancy agreement as written.
                    </span>
                  </div>
                  <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="rent" style={{ fontSize: "14px", fontWeight: "600" }}>
                          Rent per year *
                        </label>
                        <div style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", border: "1.5px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF" }}>
                          <span style={{ fontWeight: "700", color: "#3D4A43" }}>
                            ₦
                          </span>
                          <input id="rent" type="text" inputMode="numeric" defaultValue="2,000,000" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "700 16px 'Figtree', sans-serif", color: "#15201A", fontVariantNumeric: "tabular-nums" }} />
                        </div>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Band ₦1m–₦3m · listing fee ₦10,000 per 90 days
                        </span>
                      </div>
                      <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                        <legend style={{ padding: "0 0 6px", fontSize: "14px", fontWeight: "600" }}>
                          Payment frequency *
                        </legend>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "4px", background: "#EFECE4", borderRadius: "12px" }}>
                          <button type="button" aria-pressed="false" style={{ flex: "1 1 auto", height: "40px", padding: "0 10px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                            Monthly
                          </button>
                          <button type="button" aria-pressed="false" style={{ flex: "1 1 auto", height: "40px", padding: "0 10px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                            Quarterly
                          </button>
                          <button type="button" aria-pressed="false" style={{ flex: "1 1 auto", height: "40px", padding: "0 10px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                            Biannual
                          </button>
                          <button type="button" aria-pressed="true" style={{ flex: "1 1 auto", height: "40px", padding: "0 10px", border: "0", borderRadius: "9px", background: "#15201A", color: "#FFFFFF", font: "600 13px 'Figtree', sans-serif" }}>
                            Yearly
                          </button>
                        </div>
                      </fieldset>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="advance" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Advance required *
                      </label>
                      <select id="advance" style={{ height: "48px", padding: "0 12px", borderRadius: "12px", border: "1.5px solid #CFC9BA", background: "#FFFFFF", font: "600 15px 'Figtree', sans-serif", color: "#15201A", maxWidth: "360px" }}>
                        <option>
                          1 year (12 months)
                        </option>
                        <option>
                          6 months
                        </option>
                        <option>
                          3 months
                        </option>
                        <option>
                          1 month
                        </option>
                      </select>
                      <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", padding: "10px 12px", borderRadius: "12px", background: "#E3F4EA" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                          <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                        </svg>
                        <span style={{ fontSize: "13px", color: "#145C37" }}>
                          <strong>
                            Within the Lagos limit — eligible for the Fair Terms badge.
                          </strong>
                          {" Fair Terms means advance of 12 months or less, every charge itemised, and a stated deposit refund rule."}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="deposit" style={{ fontSize: "14px", fontWeight: "600" }}>
                          Caution deposit *
                        </label>
                        <div style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", border: "1.5px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF" }}>
                          <span style={{ fontWeight: "700", color: "#3D4A43" }}>
                            ₦
                          </span>
                          <input id="deposit" type="text" inputMode="numeric" defaultValue="200,000" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "700 16px 'Figtree', sans-serif", color: "#15201A", fontVariantNumeric: "tabular-nums" }} />
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          Refund rule
                        </span>
                        <div style={{ minHeight: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "12px", background: "#EFECE4", fontSize: "13px", color: "#3D4A43" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                            <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                            <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                          </svg>
                          <span>
                            Refunded within 14 days of move-out. Deductions for documented damage only.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="service" style={{ fontSize: "14px", fontWeight: "600" }}>
                          Service charge per year *
                        </label>
                        <div style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", border: "1.5px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF" }}>
                          <span style={{ fontWeight: "700", color: "#3D4A43" }}>
                            ₦
                          </span>
                          <input id="service" type="text" inputMode="numeric" defaultValue="0" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "700 16px 'Figtree', sans-serif", color: "#15201A", fontVariantNumeric: "tabular-nums" }} />
                        </div>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Enter 0 if there is none. Seekers see "₦0", not a blank.
                        </span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          Agreement fee
                        </span>
                        <div style={{ height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", padding: "0 14px", borderRadius: "12px", background: "#EFECE4", fontSize: "14px", color: "#3D4A43" }}>
                          <span>
                            Plainly standard agreement
                          </span>
                          <strong style={{ color: "#15201A", fontVariantNumeric: "tabular-nums" }}>
                            ₦0
                          </strong>
                        </div>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Free for both of you. No legal or agency fee on owner listings.
                        </span>
                      </div>
                    </div>
                    <fieldset style={{ margin: "0", padding: "16px", border: "1px solid #E3DFD4", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                      <legend style={{ padding: "0 6px", fontSize: "14px", fontWeight: "700" }}>
                        {" "}
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          {"Other charges "}
                          <span className="tip">
                            {" "}
                            <button type="button" aria-label="Why itemise every charge?" aria-describedby="t-items" style={{ width: "32px", height: "32px", border: "0", borderRadius: "8px", background: "transparent", display: "grid", placeItems: "center" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="9"></circle>
                                <path d="M12 11v5M12 8h.01"></path>
                              </svg>
                            </button>
                            {" "}
                            <span role="tooltip" id="t-items" style={{ fontWeight: "500" }}>
                              Every charge must be itemised. Charges not listed can't be requested later.
                            </span>
                            {" "}
                          </span>
                        </span>
                        {" "}
                      </legend>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", borderRadius: "12px", background: "#F6F4EE", border: "1px dashed #CFC9BA" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                          <path d="M6 3h8l4 4v14H6z"></path>
                          <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                        </svg>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          No other charges added. Seekers will see "No other charges" on your listing and in the agreement.
                        </span>
                      </div>
                      <button type="button" style={{ alignSelf: "flex-start", height: "40px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 14px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                        Add another charge
                      </button>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Not allowed: inspection, viewing or "form" fees. Plainly removes them and they can't be charged at a viewing.
                      </span>
                    </fieldset>
                  </div>
                  <div style={{ padding: "16px 24px", borderTop: "1px solid #E3DFD4", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <Link href="/coming-soon/L03-Specs" style={{ height: "44px", boxSizing: "border-box", padding: "0 18px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 12H5M11 6l-6 6 6 6"></path>
                      </svg>
                      Back: specs
                    </Link>
                    <Link href="/coming-soon/L04-Media" style={{ height: "44px", boxSizing: "border-box", padding: "0 20px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                      {"Continue: photos & video"}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 6 6 6-6 6"></path>
                      </svg>
                    </Link>
                  </div>
                </form>
                <aside style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <section aria-labelledby="h-seekers" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span id="h-seekers" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Seekers will see
                    </span>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "30px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      {"₦2,200,000 "}
                      <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "15px", fontWeight: "600", letterSpacing: "0", color: "#3D4A43" }}>
                        to move in
                      </span>
                    </span>
                    <dl style={{ margin: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "13px", color: "#3D4A43" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Rent · 1 year advance
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", fontWeight: "600", color: "#15201A" }}>
                          ₦2,000,000
                        </dd>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Caution deposit
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", fontWeight: "600", color: "#15201A" }}>
                          ₦200,000
                        </dd>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Service charge
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", fontWeight: "600", color: "#15201A" }}>
                          ₦0
                        </dd>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Agreement fee
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", fontWeight: "600", color: "#15201A" }}>
                          ₦0
                        </dd>
                      </div>
                    </dl>
                    <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                      Fair Terms
                    </span>
                  </section>
                  <section aria-labelledby="h-fees" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h2 id="h-fees" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                        Your fees
                      </h2>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Listing fee by yearly rent, per 90 days.
                      </span>
                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                      <thead>
                        <tr style={{ textAlign: "left" }}>
                          <th scope="col" style={{ padding: "6px 8px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", background: "#EFECE4", borderRadius: "8px 0 0 8px" }}>
                            Rent band
                          </th>
                          <th scope="col" style={{ padding: "6px 8px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", background: "#EFECE4", textAlign: "right", borderRadius: "0 8px 8px 0" }}>
                            Fee
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ fontVariantNumeric: "tabular-nums" }}>
                        <tr>
                          <td style={{ padding: "8px", color: "#3D4A43" }}>
                            Under ₦1m
                          </td>
                          <td style={{ padding: "8px", textAlign: "right" }}>
                            ₦5,000
                          </td>
                        </tr>
                        <tr style={{ background: "#E2F0E7" }}>
                          <td style={{ padding: "8px", fontWeight: "700", color: "#0A4630", borderRadius: "8px 0 0 8px" }}>
                            ₦1m–₦3m · yours
                          </td>
                          <td style={{ padding: "8px", textAlign: "right", borderRadius: "0 8px 8px 0" }}>
                            <span style={{ textDecoration: "line-through", color: "#3D4A43" }}>
                              ₦10,000
                            </span>
                            {" "}
                            <strong style={{ color: "#0A4630" }}>
                              ₦0
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: "8px", color: "#3D4A43" }}>
                            ₦3m–₦10m
                          </td>
                          <td style={{ padding: "8px", textAlign: "right" }}>
                            ₦20,000
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: "8px", color: "#3D4A43" }}>
                            Over ₦10m
                          </td>
                          <td style={{ padding: "8px", textAlign: "right" }}>
                            ₦35,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 12px", borderRadius: "12px", background: "#FDF3D3" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B4E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                        <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                      </svg>
                      <span style={{ fontSize: "13px", color: "#6B4E00" }}>
                        <strong>
                          ₦0 today.
                        </strong>
                        {" Your founding-owner credit covers the first 90-day period."}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "12px", borderTop: "1px solid #E3DFD4", fontSize: "13px", color: "#3D4A43" }}>
                      <strong style={{ fontSize: "14px", color: "#15201A" }}>
                        Only if you let through Plainly Secure
                      </strong>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span>
                          Closing fee · 3% of first year's rent (min ₦15,000)
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: "600", color: "#15201A" }}>
                          ₦60,000
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span>
                          Listing fee credited back
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: "600", color: "#145C37" }}>
                          −₦10,000
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <strong style={{ color: "#15201A" }}>
                          Deducted from your payout
                        </strong>
                        <strong style={{ fontVariantNumeric: "tabular-nums", color: "#15201A" }}>
                          ₦50,000
                        </strong>
                      </div>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      No agent commission on owner listings. Plainly can only protect money paid through Plainly.
                    </span>
                  </section>
                  <section aria-labelledby="h-phone" style={{ background: "#FFFFFF", border: "1px dashed #CFC9BA", borderRadius: "16px", padding: "16px 20px", display: "flex", gap: "16px", alignItems: "center" }}>
                    <span role="img" aria-label="QR code placeholder to open this draft in the Plainly app" style={{ width: "96px", height: "96px", flex: "none", boxSizing: "border-box", borderRadius: "10px", border: "1px solid #E3DFD4", backgroundColor: "#FFFFFF", backgroundImage: "repeating-linear-gradient(0deg, #15201A 0 6px, transparent 6px 12px), repeating-linear-gradient(90deg, #15201A 0 6px, transparent 6px 12px)", backgroundBlendMode: "normal", display: "grid", placeItems: "center" }}>
                      <span style={{ padding: "2px 6px", borderRadius: "6px", background: "#FFFFFF", fontSize: "11px", fontWeight: "700", color: "#15201A" }}>
                        QR
                      </span>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                      <strong id="h-phone" style={{ fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="7" y="2.5" width="10" height="19" rx="2"></rect>
                          <path d="M11 18h2"></path>
                        </svg>
                        Video capture works best in the app
                      </strong>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        Scan to continue on your phone. A live walkthrough gets the Live video label.
                      </span>
                      <Link href="/coming-soon/O03-Capture" style={{ fontSize: "13px", fontWeight: "600" }}>
                        Open on this device instead
                      </Link>
                    </span>
                  </section>
                </aside>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
