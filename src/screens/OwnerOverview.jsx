"use client";

// Generated from Claude Design: W04-OwnerDash.dc.html (WKS-03 · Owner overview)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-down>[role=tooltip]{bottom:auto;top:calc(100% + 10px)}\n.tip.tip-end>[role=tooltip]{left:auto;right:0;transform:none}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class OwnerOverviewLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function OwnerOverview() {
  useDCLogic(OwnerOverviewLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1350px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.45", display: "flex", flexDirection: "column" }}>
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
            <button type="button" aria-label="Notifications, 3 new" style={{ width: "44px", height: "44px", borderRadius: "999px", border: "0", background: "transparent", display: "grid", placeItems: "center", position: "relative" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                <path d="M10 21h4"></path>
              </svg>
              <span style={{ position: "absolute", top: "10px", right: "11px", width: "8px", height: "8px", borderRadius: "99px", background: "#B3261E", border: "2px solid #FFFFFF" }}></span>
            </button>
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
            <Link href="/owner" aria-current="page" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", background: "#E2F0E7", color: "#0E5A3C", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            <Link href="/owner/listings/new" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14"></path>
              </svg>
              Create listing
            </Link>
            <Link href="/messages" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Messages
            </Link>
            <Link href="/messages" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Enquiries
              <span style={{ flex: "1" }}></span>
              <span aria-label="4 new" style={{ minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#0E5A3C", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                4
              </span>
            </Link>
            <Link href="/owner" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                <path d="M3.5 10h17M8 3v4M16 3v4"></path>
              </svg>
              Viewings
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
                  <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Overview
                  </h1>
                  <p style={{ margin: "0", color: "#3D4A43", fontSize: "15px" }}>
                    Good afternoon, Mrs Adebayo. Six properties, one deal in progress, three things need you.
                  </p>
                </div>
                <span className="tip tip-end">
                  {" "}
                  <Link href="/owner/listings/new" aria-describedby="t-add" style={{ height: "44px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 18px", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    Add a property
                  </Link>
                  {" "}
                  <span role="tooltip" id="t-add">
                    Fee shown before you start. Listing fee is credited against the closing fee when you let through Plainly Secure.
                  </span>
                  {" "}
                </span>
              </div>
              <section aria-labelledby="h-action" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                  <h2 id="h-action" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                    Action needed
                  </h2>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    3 items · oldest first by due date
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "12px" }}>
                  <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", gap: "12px", alignItems: "flex-start", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#FCEEDD", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A9520B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                    </span>
                    <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <strong style={{ fontSize: "15px", lineHeight: "1.35" }}>
                          Confirm Surulere 1-bed is still available
                        </strong>
                        <span style={{ fontSize: "13px", color: "#7A3B07", fontWeight: "600" }}>
                          Due in 3 days · Wed 4 Nov
                        </span>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          No answer within 72 h of the ping pauses the listing.
                        </span>
                      </div>
                      <div>
                        <button type="button" style={{ height: "40px", padding: "0 16px", borderRadius: "12px", border: "0", background: "#0E5A3C", color: "#FFFFFF", font: "700 14px 'Figtree', sans-serif" }}>
                          Confirm
                        </button>
                      </div>
                    </div>
                  </article>
                  <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", gap: "12px", alignItems: "flex-start", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#E5EEFB", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="8" cy="15" r="4"></circle>
                        <path d="m11 12 9-9M17 6l3 3"></path>
                      </svg>
                    </span>
                    <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <strong style={{ fontSize: "15px", lineHeight: "1.35" }}>
                          Hand over keys for Yaba 2-bed today, Sun 1 Nov
                        </strong>
                        <span style={{ fontSize: "13px", color: "#164A90", fontWeight: "600" }}>
                          ₦2,200,000 held in Plainly Secure
                        </span>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          Tolu Bakare moves in. Shared checklist: 2 of 4 done.
                        </span>
                      </div>
                      <div>
                        <Link href="/deal-room" style={{ height: "40px", display: "inline-flex", alignItems: "center", padding: "0 16px", boxSizing: "border-box", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                          Open deal room
                        </Link>
                      </div>
                    </div>
                  </article>
                  <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", gap: "12px", alignItems: "flex-start", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#FDF3D3", display: "grid", placeItems: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B4E00" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
                      </svg>
                    </span>
                    <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <strong style={{ fontSize: "15px", lineHeight: "1.35" }}>
                          Pay ₦5,375 to submit Surulere mini-flat
                        </strong>
                        <span style={{ fontSize: "13px", color: "#6B4E00", fontWeight: "600" }}>
                          Listing fee ₦5,000 + VAT · 90 days
                        </span>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          Your draft is complete. Verification starts once paid.
                        </span>
                      </div>
                      <div>
                        <Link href="/billing" style={{ height: "40px", display: "inline-flex", alignItems: "center", padding: "0 16px", boxSizing: "border-box", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                          Pay
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
              <section aria-label="This week at a glance" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "12px" }}>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    Live listings
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                    1
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    of 6 properties · 1 under offer
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    Enquiries this week
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                    4
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Since Mon 26 Oct
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    Viewings booked
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                    3
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Next: Tue 3 Nov, 16:00
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                    Next payout
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                    ₦2,150,000
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    After handover · to GTBank ••••4821
                  </span>
                </div>
              </section>
              <section id="listings" aria-labelledby="h-listings" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", borderBottom: "1px solid #E3DFD4" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <h2 id="h-listings" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                      Your listings
                    </h2>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      Every status change is logged. Leaving Live after an introduction asks for a close-out declaration.
                    </span>
                  </div>
                  <div role="tablist" aria-label="Filter listings" style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "4px", background: "#EFECE4", borderRadius: "12px" }}>
                    <button type="button" role="tab" aria-selected="true" style={{ height: "36px", padding: "0 12px", border: "0", borderRadius: "9px", background: "#15201A", color: "#FFFFFF", font: "600 13px 'Figtree', sans-serif" }}>
                      All 6
                    </button>
                    <button type="button" role="tab" aria-selected="false" style={{ height: "36px", padding: "0 12px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                      Needs action 3
                    </button>
                    <button type="button" role="tab" aria-selected="false" style={{ height: "36px", padding: "0 12px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                      Closed 1
                    </button>
                  </div>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", minWidth: "980px", borderCollapse: "collapse", fontSize: "14px" }}>
                    <thead>
                      <tr style={{ background: "#EFECE4", textAlign: "left" }}>
                        <th scope="col" style={{ padding: "10px 20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Property
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          {" "}
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            {"Status "}
                            <span className="tip tip-down">
                              {" "}
                              <button type="button" aria-label="Status guide" aria-describedby="t-status" style={{ width: "28px", height: "28px", border: "0", borderRadius: "8px", background: "transparent", display: "grid", placeItems: "center" }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="9"></circle>
                                  <path d="M12 11v5M12 8h.01"></path>
                                </svg>
                              </button>
                              {" "}
                              <span role="tooltip" id="t-status" style={{ textTransform: "none", letterSpacing: "0", width: "240px" }}>
                                <strong style={{ display: "block", fontWeight: "700", paddingBottom: "4px" }}>
                                  Status guide
                                </strong>
                                Draft → Awaiting payment → Pending verification → Live → Under offer → Let/Sold
                                <span style={{ display: "block", paddingTop: "4px", color: "#C9D2CC" }}>
                                  Also: Paused, Expired, Rejected, Suspended. Each status says why and what to do next.
                                </span>
                              </span>
                              {" "}
                            </span>
                          </span>
                          {" "}
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "right" }}>
                          Views 7d
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "right" }}>
                          Enquiries
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "right" }}>
                          Viewings
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Listing period ends
                        </th>
                        <th scope="col" style={{ padding: "10px 20px 10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Next action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <td style={{ padding: "12px 20px" }}>
                          <Link href="/listings/PL-24817" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#15201A" }}>
                            <span aria-hidden="true" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                            <span style={{ display: "flex", flexDirection: "column" }}>
                              <strong style={{ fontSize: "14px" }}>
                                2-bed flat · Alagomeji, Yaba
                              </strong>
                              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                                PL-24817 · ₦2,000,000/yr
                              </span>
                            </span>
                          </Link>
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B4E00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M6 3h8l4 4v14H6z"></path>
                              <path d="M14 3v4h4"></path>
                            </svg>
                            Under offer
                          </span>
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          184
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          3
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          2
                        </td>
                        <td style={{ padding: "12px", color: "#3D4A43" }}>
                          {"8 Jan 2027 "}
                          <span style={{ display: "block", fontSize: "12px", color: "#5E6862" }}>
                            Founding credit
                          </span>
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px" }}>
                          <Link href="/deal-room" style={{ fontWeight: "600", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            Hand over keys today
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m9 6 6 6-6 6"></path>
                            </svg>
                          </Link>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <td style={{ padding: "12px 20px" }}>
                          <Link href="/listings/PL-24817" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#15201A" }}>
                            <span aria-hidden="true" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                            <span style={{ display: "flex", flexDirection: "column" }}>
                              <strong style={{ fontSize: "14px" }}>
                                1-bed flat · Adeniran Ogunsanya, Surulere
                              </strong>
                              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                                {"₦1,800,000/yr · "}
                                <span style={{ color: "#6B4E00", fontWeight: "600" }}>
                                  Featured
                                </span>
                              </span>
                            </span>
                          </Link>
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "6px" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                              <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#1C7A4A" }}></span>
                              Live
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 9px", borderRadius: "999px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B4E00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                              </svg>
                              Inspected
                            </span>
                          </span>
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          96
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          1
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          1
                        </td>
                        <td style={{ padding: "12px", color: "#3D4A43" }}>
                          21 Dec 2026
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px" }}>
                          <button type="button" style={{ height: "36px", padding: "0 12px", borderRadius: "10px", border: "0", background: "#FCEEDD", color: "#7A3B07", font: "700 13px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A9520B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="9"></circle>
                              <path d="M12 7v5l3 2"></path>
                            </svg>
                            Confirm available · 3 days
                          </button>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <td style={{ padding: "12px 20px" }}>
                          <Link href="/listings/PL-24817" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#15201A" }}>
                            <span aria-hidden="true" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                            <span style={{ display: "flex", flexDirection: "column" }}>
                              <strong style={{ fontSize: "14px" }}>
                                3-bed flat · Aguda, Surulere
                              </strong>
                              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                                ₦2,800,000/yr · fee paid
                              </span>
                            </span>
                          </Link>
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="9"></circle>
                              <path d="M12 7v5l3 2"></path>
                            </svg>
                            Pending verification
                          </span>
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", color: "#3D4A43" }}>
                          Starts when live
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", color: "#3D4A43", fontSize: "13px" }}>
                          Nothing to do. We review proof of control within 1 business day.
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <td style={{ padding: "12px 20px" }}>
                          <Link href="/owner/listings/new" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#15201A" }}>
                            <span aria-hidden="true" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                            <span style={{ display: "flex", flexDirection: "column" }}>
                              <strong style={{ fontSize: "14px" }}>
                                Mini-flat · Ojuelegba, Surulere
                              </strong>
                              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                                ₦900,000/yr · draft complete
                              </span>
                            </span>
                          </Link>
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
                            </svg>
                            Awaiting payment
                          </span>
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", color: "#3D4A43" }}>
                          Starts when live
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px" }}>
                          <Link href="/billing" style={{ fontWeight: "600", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            Pay ₦5,375 to submit
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m9 6 6 6-6 6"></path>
                            </svg>
                          </Link>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <td style={{ padding: "12px 20px" }}>
                          <Link href="/listings/PL-24817" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#15201A" }}>
                            <span aria-hidden="true" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                            <span style={{ display: "flex", flexDirection: "column" }}>
                              <strong style={{ fontSize: "14px" }}>
                                Self-contain · Bode Thomas, Surulere
                              </strong>
                              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                                ₦600,000/yr · hidden from search
                              </span>
                            </span>
                          </Link>
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                              <path d="M9 6v12M15 6v12"></path>
                            </svg>
                            Paused
                          </span>
                          <span style={{ display: "block", paddingTop: "4px", fontSize: "12px", color: "#5E6862" }}>
                            Availability not confirmed within 72 h
                          </span>
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          0
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          0
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                          0
                        </td>
                        <td style={{ padding: "12px", color: "#3D4A43" }}>
                          14 Nov 2026
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px" }}>
                          <button type="button" style={{ height: "36px", padding: "0 12px", borderRadius: "10px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                            Confirm available to relist
                          </button>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <td style={{ padding: "12px 20px" }}>
                          <Link href="/coming-soon/O06-Payout" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#15201A" }}>
                            <span aria-hidden="true" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                            <span style={{ display: "flex", flexDirection: "column" }}>
                              <strong style={{ fontSize: "14px" }}>
                                2-bed flat · Masha, Surulere
                              </strong>
                              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                                ₦1,600,000/yr · close-out declared
                              </span>
                            </span>
                          </Link>
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            Let
                          </span>
                          <span style={{ display: "block", paddingTop: "4px", fontSize: "12px", color: "#5E6862" }}>
                            Via Plainly Secure
                          </span>
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          –
                        </td>
                        <td style={{ padding: "12px", color: "#3D4A43" }}>
                          Ended at letting
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px" }}>
                          <Link href="/coming-soon/O06-Payout" style={{ fontWeight: "600", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            View payout statement
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m9 6 6 6-6 6"></path>
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
                <section id="applications" aria-labelledby="h-apps" style={{ flex: "999 1 560px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", borderBottom: "1px solid #E3DFD4" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h2 id="h-apps" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        Applications · Yaba 2-bed
                      </h2>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        3 applicants. Accepting one opens a deal room; the others are told it is under offer.
                      </span>
                    </div>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0", maxWidth: "100%", fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      {"Listing "}
                      <select style={{ flex: "1 1 auto", width: "100%", maxWidth: "100%", minWidth: "0", height: "40px", padding: "0 10px", borderRadius: "12px", border: "1px solid #CFC9BA", background: "#FFFFFF", font: "600 14px 'Figtree', sans-serif", color: "#15201A" }}>
                        <option>
                          2-bed flat · Alagomeji, Yaba
                        </option>
                        <option>
                          1-bed flat · Adeniran Ogunsanya, Surulere
                        </option>
                      </select>
                    </label>
                  </div>
                  <article style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "flex-start", background: "#FBFAF7" }}>
                    <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "14px" }}>
                      TB
                    </span>
                    <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                        <strong style={{ fontSize: "16px" }}>
                          Tolu B.
                        </strong>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                          Accepted 20 Oct
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Applied 19 Oct · viewed Sat 17 Oct
                        </span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", fontSize: "13px", color: "#3D4A43" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#164A90", fontWeight: "600" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                            <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                          </svg>
                          ID verified · NIN + liveness · 18+
                        </span>
                        <span>
                          Income ₦4m–₦6m/yr · software tester
                        </span>
                        <span>
                          Occupier: applicant only
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                      <Link href="/deal-room" style={{ height: "40px", display: "inline-flex", alignItems: "center", padding: "0 14px", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                        Open deal room
                      </Link>
                    </div>
                  </article>
                  <article style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "flex-start", borderTop: "1px solid #E3DFD4" }}>
                    <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "14px" }}>
                      AO
                    </span>
                    <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                        <strong style={{ fontSize: "16px" }}>
                          Adaeze O.
                        </strong>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                          </svg>
                          Shortlisted
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Applied 19 Oct · viewed Sun 18 Oct
                        </span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", fontSize: "13px", color: "#3D4A43" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#164A90", fontWeight: "600" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                            <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                          </svg>
                          ID verified · NIN + liveness
                        </span>
                        <span>
                          Income ₦6m–₦10m/yr · employed
                        </span>
                        <span>
                          Occupiers: applicant + 1 named (sister)
                        </span>
                      </div>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Accept is unavailable while Tolu B.'s deal is open. If that deal is cancelled, you can accept a shortlisted applicant.
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                      <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 14px 'Figtree', sans-serif" }}>
                        Request info
                      </button>
                      <button type="button" disabled style={{ height: "40px", padding: "0 14px", borderRadius: "12px", border: "0", background: "#EFECE4", color: "#5E6862", font: "700 14px 'Figtree', sans-serif" }}>
                        Accept
                      </button>
                      <button type="button" style={{ height: "40px", padding: "0 10px", borderRadius: "12px", border: "0", background: "transparent", color: "#8C1D17", font: "600 14px 'Figtree', sans-serif" }}>
                        Decline
                      </button>
                    </div>
                  </article>
                  <article style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "flex-start", borderTop: "1px solid #E3DFD4" }}>
                    <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "14px" }}>
                      KA
                    </span>
                    <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                        <strong style={{ fontSize: "16px" }}>
                          Kunle A.
                        </strong>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 12 20 4l-6 16-3-7z"></path>
                          </svg>
                          Told the property is under offer
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Applied 20 Oct
                        </span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", fontSize: "13px", color: "#3D4A43" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#7A3B07", fontWeight: "600" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A9520B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M12 7v5l3 2"></path>
                          </svg>
                          ID check in progress
                        </span>
                        <span>
                          Income ₦2.5m–₦4m/yr · self-employed
                        </span>
                        <span>
                          Occupier: applicant only
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                      <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 14px 'Figtree', sans-serif" }}>
                        Shortlist
                      </button>
                      <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 14px 'Figtree', sans-serif" }}>
                        Request info
                      </button>
                      <button type="button" style={{ height: "40px", padding: "0 10px", borderRadius: "12px", border: "0", background: "transparent", color: "#8C1D17", font: "600 14px 'Figtree', sans-serif" }}>
                        Decline
                      </button>
                    </div>
                  </article>
                </section>
                <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <section id="viewings" aria-labelledby="h-viewings" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 id="h-viewings" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                      Viewings
                    </h2>
                    <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                      <li style={{ display: "flex", gap: "12px", alignItems: "center", padding: "10px 0" }}>
                        <span style={{ width: "48px", flex: "none", textAlign: "center", display: "flex", flexDirection: "column", borderRadius: "10px", background: "#EFECE4", padding: "4px 0" }}>
                          <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#5E6862" }}>
                            Sat
                          </span>
                          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "18px", lineHeight: "1.1" }}>
                            17
                          </span>
                        </span>
                        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            11:00 · Tolu B.
                          </strong>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            Yaba 2-bed · Sat 17 Oct
                          </span>
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                          Checked in
                        </span>
                      </li>
                      <li style={{ display: "flex", gap: "12px", alignItems: "center", padding: "10px 0", borderTop: "1px solid #E3DFD4" }}>
                        <span style={{ width: "48px", flex: "none", textAlign: "center", display: "flex", flexDirection: "column", borderRadius: "10px", background: "#EFECE4", padding: "4px 0" }}>
                          <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#5E6862" }}>
                            Fri
                          </span>
                          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "18px", lineHeight: "1.1" }}>
                            23
                          </span>
                        </span>
                        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            16:00 · Surulere 1-bed
                          </strong>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            Fri 23 Oct · seeker did not arrive
                          </span>
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 6l12 12M18 6 6 18"></path>
                          </svg>
                          No-show recorded
                        </span>
                      </li>
                      <li style={{ display: "flex", gap: "12px", alignItems: "center", padding: "10px 0", borderTop: "1px solid #E3DFD4" }}>
                        <span style={{ width: "48px", flex: "none", textAlign: "center", display: "flex", flexDirection: "column", borderRadius: "10px", background: "#E2F0E7", padding: "4px 0" }}>
                          <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#0A4630" }}>
                            Tue
                          </span>
                          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "18px", lineHeight: "1.1" }}>
                            3
                          </span>
                        </span>
                        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <strong style={{ fontSize: "14px" }}>
                            16:00 · Ifeoma N.
                          </strong>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            Surulere 1-bed · Tue 3 Nov · next
                          </span>
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                            <path d="M3.5 10h17"></path>
                          </svg>
                          Confirmed
                        </span>
                      </li>
                    </ul>
                    <button type="button" style={{ height: "44px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 15px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                        <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                      </svg>
                      Manage viewing slots
                    </button>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Slots never double-book. Exact address is shared only after a seeker confirms.
                    </span>
                  </section>
                  <section aria-labelledby="h-extras" style={{ background: "#F6F4EE", border: "1px dashed #CFC9BA", borderRadius: "16px", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h2 id="h-extras" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                        Optional paid extras
                      </h2>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Not needed to let your property. Shown here so the prices are never a surprise.
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "10px", background: "#FDF3D3", display: "grid", placeItems: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B4E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 8h3l2-3h6l2 3h3v11H4z"></path>
                          <circle cx="12" cy="13" r="3.5"></circle>
                        </svg>
                      </span>
                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Verified Plus
                          </strong>
                          <span style={{ fontSize: "14px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                            ₦15,000–₦40,000
                          </span>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Inspection + pro shoot → Inspected badge and top ranking
                        </span>
                        <Link href="/billing" style={{ fontSize: "13px", fontWeight: "600" }}>
                          See what is checked
                        </Link>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", paddingTop: "12px", borderTop: "1px solid #E3DFD4" }}>
                      <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "10px", background: "#FDF3D3", display: "grid", placeItems: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B4E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M13 3 5 13h6l-1 8 8-10h-6z"></path>
                        </svg>
                      </span>
                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 8px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Boost
                          </strong>
                          <span style={{ fontSize: "14px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                            ₦5,000
                          </span>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Featured for 14 days. Always labelled “Featured”; never jumps verified listings.
                        </span>
                        <Link href="/billing" style={{ fontSize: "13px", fontWeight: "600" }}>
                          Choose a listing
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
