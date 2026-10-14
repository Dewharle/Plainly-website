"use client";

// Generated from Claude Design: W06-Billing.dc.html (WKS-06 · Invoices, credits & plans)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class BillingLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function Billing() {
  useDCLogic(BillingLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1250px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.5", display: "flex", flexDirection: "column" }}>
        <header style={{ minHeight: "64px", boxSizing: "border-box", background: "#FFFFFF", borderBottom: "1px solid #E3DFD4", padding: "10px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 24px" }}>
          <Link href="/browse" aria-label="Plainly home" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#15201A" }}>
            <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
              <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
              <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
            </svg>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "22px", letterSpacing: "-0.03em" }}>
              plainly
            </span>
          </Link>
          <label style={{ flex: "1 1 220px", maxWidth: "360px", height: "42px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px", background: "#F6F4EE", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
            <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Search listings, people, invoices
            </span>
            <input type="search" placeholder="Search listings, people, invoices" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "500 14px 'Figtree', sans-serif", color: "#15201A" }} />
          </label>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span className="tip">
              {" "}
              <Link href="/account" aria-describedby="role-tip" style={{ height: "36px", boxSizing: "border-box", padding: "0 12px", display: "flex", alignItems: "center", gap: "6px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", font: "600 14px 'Figtree', sans-serif", color: "#15201A", textDecoration: "none" }}>
                Owner
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </Link>
              {" "}
              <span role="tooltip" id="role-tip">
                Switch role: you can rent and own on one account
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
            <button type="button" style={{ height: "44px", display: "flex", alignItems: "center", gap: "10px", padding: "0 6px", border: "0", background: "transparent", font: "600 14px 'Figtree', sans-serif", color: "#15201A" }}>
              <span style={{ width: "34px", height: "34px", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "13px" }}>
                FA
              </span>
              {"Funke Adebayo "}
            </button>
          </div>
        </header>
        <div style={{ flex: "1", display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
          <nav aria-label="Workspace" style={{ flex: "1 1 248px", maxWidth: "248px", boxSizing: "border-box", background: "#FFFFFF", borderRight: "1px solid #E3DFD4", padding: "20px 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <Link href="/owner" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
              </svg>
              Overview
            </Link>
            <Link href="/owner" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
              </svg>
              Listings
            </Link>
            <Link href="/owner/listings/new" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14"></path>
              </svg>
              Create listing
            </Link>
            <Link href="/messages" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Messages
            </Link>
            <Link href="/messages" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Enquiries
              <span style={{ marginLeft: "auto", minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#B3261E", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }} aria-label="4 new">
                4
              </span>
            </Link>
            <Link href="/owner" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                <path d="M3.5 10h17M8 3v4M16 3v4"></path>
              </svg>
              Viewings
            </Link>
            <Link href="/deal-room" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4M9 12h6M9 16h6"></path>
              </svg>
              Deals
            </Link>
            <Link href="/coming-soon/O06-Payout" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"></path>
              </svg>
              Payouts
            </Link>
            <Link href="/billing" aria-current="page" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", background: "#E2F0E7", color: "#0E5A3C", fontWeight: "700", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
              </svg>
              Billing
              <span style={{ marginLeft: "auto", width: "8px", height: "8px", borderRadius: "99px", background: "#B3261E" }} aria-label="Overdue invoice"></span>
            </Link>
            <Link href="/coming-soon/O08-Security" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                <path d="m8.5 12 2.5 2.5 4.5-5"></path>
              </svg>
              Security centre
            </Link>
            <Link href="/coming-soon/A06-SafetyCentre" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#3D4A43", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 11v5M12 8h.01"></path>
              </svg>
              {"Help & safety"}
            </Link>
          </nav>
          <main style={{ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "32px" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
              <section role="alert" style={{ background: "#FCE8E6", border: "1px solid #F2C4BF", borderRadius: "16px", padding: "16px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 20px" }}>
                <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#B3261E", display: "grid", placeItems: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 4 2.5 20h19z"></path>
                    <path d="M12 10v4M12 17h.01"></path>
                  </svg>
                </span>
                <div style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <strong style={{ fontSize: "16px", color: "#8C1D17" }}>
                    Account restricted: overdue introduction fee
                  </strong>
                  <span style={{ fontSize: "14px", color: "#8C1D17" }}>
                    Invoice INV-2026-005102 is 15 days overdue (due Tue 20 Oct). New listings are blocked and badges removed until it's paid or disputed.
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <Link href="/billing" style={{ height: "44px", padding: "0 18px", display: "inline-flex", alignItems: "center", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px", fontVariantNumeric: "tabular-nums" }}>
                    Pay ₦10,000
                  </Link>
                  <Link href="/billing" style={{ height: "44px", padding: "0 16px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                    View evidence
                  </Link>
                </div>
              </section>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px 24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                    Owner workspace
                  </span>
                  <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "40px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Billing
                  </h1>
                  <p style={{ margin: "0", fontSize: "16px", color: "#3D4A43" }}>
                    Fees are platform charges. They never touch tenant money held in escrow.
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <button type="button" style={{ height: "44px", padding: "0 16px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 15px 'Figtree', sans-serif" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 3h8l4 4v14H6z"></path>
                      <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                    </svg>
                    Download statement
                  </button>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "16px" }}>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                      Credit balance
                    </span>
                    <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700" }}>
                      Founding · Referral
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", lineHeight: "1.1" }}>
                    ₦5,000
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "#5E6862" }}>
                    {"Non-cashable · expires 31 Mar 2027 "}
                    <span className="tip">
                      {" "}
                      <button type="button" aria-label="About platform credits" aria-describedby="credit-tip" style={{ width: "28px", height: "28px", border: "0", background: "transparent", borderRadius: "999px", display: "grid", placeItems: "center", padding: "0" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 11v5M12 8h.01"></path>
                        </svg>
                      </button>
                      {" "}
                      <span role="tooltip" id="credit-tip">
                        Credits can only be used against Plainly fees. They can't be withdrawn or transferred.
                      </span>
                      {" "}
                    </span>
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                      Due now
                    </span>
                    <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      1 invoice
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", lineHeight: "1.1" }}>
                    ₦5,375
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Listing fee ₦5,000 + VAT ₦375 · Surulere mini-flat
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #F2C4BF", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                      Overdue
                    </span>
                    <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8C1D17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 4 2.5 20h19z"></path>
                        <path d="M12 10v4M12 17h.01"></path>
                      </svg>
                      15 days
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "32px", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", lineHeight: "1.1", color: "#8C1D17" }}>
                    ₦10,000
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Introduction fee · restrictions active
                  </span>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                      Plan
                    </span>
                    <Link href="/billing" style={{ fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                      Compare plans
                    </Link>
                  </div>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "28px", letterSpacing: "-0.02em", lineHeight: "1.15" }}>
                    Pay as you go
                  </span>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Listing fee per 90 days · closing fee only when you let through Plainly Secure
                  </span>
                </div>
              </div>
              <section aria-labelledby="inv-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ padding: "18px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px 16px", borderBottom: "1px solid #E3DFD4" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <h2 id="inv-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                      Invoices and receipts
                    </h2>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      Sequential numbering · VAT shown where it applies · PDF for every invoice
                    </span>
                  </div>
                  <div role="tablist" aria-label="Filter invoices" style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "4px", background: "#EFECE4", borderRadius: "12px" }}>
                    <button type="button" role="tab" aria-selected="true" style={{ height: "36px", padding: "0 14px", border: "0", borderRadius: "9px", background: "#15201A", color: "#FFFFFF", font: "600 14px 'Figtree', sans-serif" }}>
                      All
                    </button>
                    <button type="button" role="tab" aria-selected="false" style={{ height: "36px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                      Unpaid
                    </button>
                    <button type="button" role="tab" aria-selected="false" style={{ height: "36px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                      Paid
                    </button>
                  </div>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", minWidth: "940px", borderCollapse: "collapse", fontSize: "14px" }}>
                    <thead>
                      <tr style={{ background: "#EFECE4", textAlign: "left" }}>
                        <th scope="col" style={{ padding: "12px 20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Number
                        </th>
                        <th scope="col" style={{ padding: "12px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Date
                        </th>
                        <th scope="col" style={{ padding: "12px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Description
                        </th>
                        <th scope="col" style={{ padding: "12px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "right" }}>
                          Amount
                        </th>
                        <th scope="col" style={{ padding: "12px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "right" }}>
                          VAT
                        </th>
                        <th scope="col" style={{ padding: "12px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Status
                        </th>
                        <th scope="col" style={{ padding: "12px 20px 12px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="pay-005102" style={{ borderTop: "1px solid #E3DFD4", background: "#FFFAF9", verticalAlign: "top" }}>
                        <td style={{ padding: "16px 20px", fontWeight: "700", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                          INV-2026-005102
                        </td>
                        <td style={{ padding: "16px 12px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                          13 Oct 2026
                          <br />
                          <span style={{ fontSize: "12px", color: "#8C1D17", fontWeight: "600" }}>
                            Due 20 Oct
                          </span>
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <strong style={{ fontWeight: "600" }}>
                              Introduction fee — Room in shared flat, Ojuelegba (PL-21877)
                            </strong>
                            <span style={{ fontSize: "13px", color: "#5E6862" }}>
                              Off-platform let to a Plainly-introduced seeker. Equals the closing fee that would have applied, less listing fee paid.
                            </span>
                            <Link id="evidence-005102" href="/billing" style={{ fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                              Evidence summary (4 records)
                            </Link>
                          </div>
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", fontWeight: "700", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          ₦10,000
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                          —
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8C1D17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 4 2.5 20h19z"></path>
                              <path d="M12 10v4M12 17h.01"></path>
                            </svg>
                            Overdue 15 days
                          </span>
                        </td>
                        <td style={{ padding: "16px 20px 16px 12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }}>
                            <button type="button" style={{ height: "36px", padding: "0 14px", border: "0", borderRadius: "10px", background: "#0E5A3C", color: "#FFFFFF", font: "700 14px 'Figtree', sans-serif", whiteSpace: "nowrap" }}>
                              Pay ₦10,000
                            </button>
                            <button type="button" disabled aria-describedby="dispute-why" style={{ height: "32px", padding: "0 10px", border: "0", borderRadius: "8px", background: "#EFECE4", color: "#5E6862", font: "600 13px 'Figtree', sans-serif", textDecoration: "line-through" }}>
                              Dispute
                            </button>
                            <span id="dispute-why" style={{ fontSize: "12px", color: "#5E6862", whiteSpace: "nowrap" }}>
                              Dispute window closed 20 Oct
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4", verticalAlign: "top" }}>
                        <td style={{ padding: "16px 20px", fontWeight: "700", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                          INV-2026-005033
                        </td>
                        <td style={{ padding: "16px 12px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                          30 Oct 2026
                          <br />
                          <span style={{ fontSize: "12px", color: "#7A3B07", fontWeight: "600" }}>
                            Due Fri 6 Nov
                          </span>
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <strong style={{ fontWeight: "600" }}>
                              Listing fee — Surulere mini-flat
                            </strong>
                            <span style={{ fontSize: "13px", color: "#5E6862" }}>
                              90 days · rent band under ₦1m. Listing goes to verification once paid.
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          ₦5,000
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", color: "#3D4A43", fontVariantNumeric: "tabular-nums" }}>
                          ₦375
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="9"></circle>
                              <path d="M12 7v5l3 2"></path>
                            </svg>
                            Due
                          </span>
                        </td>
                        <td style={{ padding: "16px 20px 16px 12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }}>
                            <button type="button" style={{ height: "36px", padding: "0 14px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 14px 'Figtree', sans-serif", whiteSpace: "nowrap" }}>
                              Pay ₦5,375
                            </button>
                            <span style={{ fontSize: "12px", color: "#5E6862", whiteSpace: "nowrap" }}>
                              Credits can cover ₦5,000
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4", verticalAlign: "top" }}>
                        <td style={{ padding: "16px 20px", fontWeight: "700", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                          INV-2026-004817
                        </td>
                        <td style={{ padding: "16px 12px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                          4 Nov 2026
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <strong style={{ fontWeight: "600" }}>
                              Closing fee — PL-24817, 2-bed flat · Alagomeji, Yaba
                            </strong>
                            <span style={{ fontSize: "13px", color: "#5E6862" }}>
                              3% of first year's rent ₦2,000,000 = ₦60,000, less listing-fee credit ₦10,000. ₦50,000 deducted at release.
                            </span>
                            <Link href="/coming-soon/O06-Payout" style={{ fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                              See payout statement
                            </Link>
                          </div>
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", fontWeight: "700", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          ₦60,000
                          <br />
                          <span style={{ fontSize: "12px", fontWeight: "600", color: "#145C37" }}>
                            −₦10,000 credit
                          </span>
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                          —
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            Paid
                          </span>
                        </td>
                        <td style={{ padding: "16px 20px 16px 12px" }}>
                          <Link href="/billing" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M6 3h8l4 4v14H6z"></path>
                              <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                            </svg>
                            Receipt PDF
                          </Link>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4", verticalAlign: "top" }}>
                        <td style={{ padding: "16px 20px", fontWeight: "700", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                          INV-2026-004410
                        </td>
                        <td style={{ padding: "16px 12px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                          22 Sep 2026
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <strong style={{ fontWeight: "600" }}>
                              Verified Plus — Surulere 1-bed flat
                            </strong>
                            <span style={{ fontSize: "13px", color: "#5E6862" }}>
                              In-person inspection, pro photo and video shoot. Earned the Inspected badge.
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          ₦15,000
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", color: "#3D4A43", fontVariantNumeric: "tabular-nums" }}>
                          ₦1,125
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            Paid
                          </span>
                        </td>
                        <td style={{ padding: "16px 20px 16px 12px" }}>
                          <Link href="/billing" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M6 3h8l4 4v14H6z"></path>
                              <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                            </svg>
                            Receipt PDF
                          </Link>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4", verticalAlign: "top" }}>
                        <td style={{ padding: "16px 20px", fontWeight: "700", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                          INV-2026-003901
                        </td>
                        <td style={{ padding: "16px 12px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                          2 Sep 2026
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <strong style={{ fontWeight: "600" }}>
                              Listing fee — Yaba 2-bed flat (PL-24817)
                            </strong>
                            <span style={{ fontSize: "13px", color: "#5E6862" }}>
                              90 days · rent band ₦1m–₦3m. Paid with founding-owner credit.
                            </span>
                            <span style={{ alignSelf: "flex-start", height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "6px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700" }}>
                              Credited against closing fee
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          ₦10,000
                        </td>
                        <td style={{ padding: "16px 12px", textAlign: "right", color: "#3D4A43", fontVariantNumeric: "tabular-nums" }}>
                          ₦750
                        </td>
                        <td style={{ padding: "16px 12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            Paid
                          </span>
                        </td>
                        <td style={{ padding: "16px 20px 16px 12px" }}>
                          <Link href="/billing" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M6 3h8l4 4v14H6z"></path>
                              <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                            </svg>
                            Receipt PDF
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: "16px" }}>
                <section aria-labelledby="cr-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                    <h2 id="cr-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                      Credits ledger
                    </h2>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      Every credit and use, both sides recorded
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", border: "1px solid #E3DFD4", borderRadius: "12px", overflow: "hidden" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "76px 1fr auto", gap: "12px", alignItems: "center", padding: "12px 14px" }}>
                      <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                        2 Sep
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px", fontWeight: "600" }}>
                          Founding-owner credit issued
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Covers your first 90-day listing period
                        </span>
                      </span>
                      <span style={{ fontWeight: "700", color: "#145C37", fontVariantNumeric: "tabular-nums" }}>
                        +₦10,000
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "76px 1fr auto", gap: "12px", alignItems: "center", padding: "12px 14px", borderTop: "1px solid #E3DFD4" }}>
                      <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                        2 Sep
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px", fontWeight: "600" }}>
                          Used on Yaba 2-bed listing fee
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          INV-2026-003901
                        </span>
                      </span>
                      <span style={{ fontWeight: "700", color: "#15201A", fontVariantNumeric: "tabular-nums" }}>
                        −₦10,000
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "76px 1fr auto", gap: "12px", alignItems: "center", padding: "12px 14px", borderTop: "1px solid #E3DFD4" }}>
                      <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                        28 Sep
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px", fontWeight: "600" }}>
                          Referral credit
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          An owner you invited published a listing · expires 31 Mar 2027
                        </span>
                      </span>
                      <span style={{ fontWeight: "700", color: "#145C37", fontVariantNumeric: "tabular-nums" }}>
                        +₦5,000
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "76px 1fr auto", gap: "12px", alignItems: "center", padding: "12px 14px", borderTop: "1px solid #E3DFD4" }}>
                      <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                        4 Nov
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px", fontWeight: "600" }}>
                          Listing-fee credit applied at release
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Against PL-24817 closing fee · INV-2026-004817 · not part of your balance
                        </span>
                      </span>
                      <span style={{ fontWeight: "700", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                        ₦10,000
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "76px 1fr auto", gap: "12px", alignItems: "center", padding: "12px 14px", borderTop: "1px solid #CFC9BA", background: "#F6F4EE" }}>
                      <span></span>
                      <strong style={{ fontSize: "14px" }}>
                        Available balance
                      </strong>
                      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "18px", fontVariantNumeric: "tabular-nums" }}>
                        ₦5,000
                      </span>
                    </div>
                  </div>
                  <p style={{ margin: "0", fontSize: "13px", color: "#5E6862" }}>
                    Credits are applied automatically to your next fee, soonest-expiring first. You can choose to keep them for later at checkout.
                  </p>
                </section>
                <section aria-labelledby="dun-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <h2 id="dun-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                      What happens if an invoice isn't paid
                    </h2>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      We remind you on every channel before anything changes. Each reminder is logged.
                    </span>
                  </div>
                  <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                    <li style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "12px", paddingBottom: "14px", position: "relative" }}>
                      <span style={{ width: "28px", height: "28px", borderRadius: "999px", background: "#E5EEFB", display: "grid", placeItems: "center" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                          <path d="M10 21h4"></path>
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px" }}>
                          7 days and 1 day before due
                        </strong>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Reminder by app, SMS and email
                        </span>
                      </span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "12px", paddingBottom: "14px" }}>
                      <span style={{ width: "28px", height: "28px", borderRadius: "999px", background: "#FCEEDD", display: "grid", placeItems: "center" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px" }}>
                          On the due date
                        </strong>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Final reminder with a pay link
                        </span>
                      </span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "12px", paddingBottom: "14px" }}>
                      <span style={{ width: "28px", height: "28px", borderRadius: "999px", background: "#FCE8E6", display: "grid", placeItems: "center" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8C1D17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 4 2.5 20h19z"></path>
                          <path d="M12 10v4M12 17h.01"></path>
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px" }}>
                          7 days after due: restrictions
                        </strong>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Listings paused, new listings blocked, badges removed until paid or disputed
                        </span>
                        <span style={{ alignSelf: "flex-start", marginTop: "4px", height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700" }}>
                          You are here · INV-2026-005102
                        </span>
                      </span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "12px" }}>
                      <span style={{ width: "28px", height: "28px", borderRadius: "999px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"></path>
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Deduction from payouts
                        </strong>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Overdue invoices may be deducted from future payouts with 48 h notice.
                        </span>
                      </span>
                    </li>
                  </ol>
                </section>
              </div>
              <section id="plans" aria-labelledby="plan-h" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                  <h2 id="plan-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                    Plans
                  </h2>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Agent subscriptions show here when you switch to an agent role.
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "16px" }}>
                  <article style={{ background: "#FFFFFF", border: "2px solid #0E5A3C", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                        Pay as you go
                      </h3>
                      <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", fontSize: "12px", fontWeight: "700" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Current plan
                      </span>
                    </div>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "26px", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      {"₦5,000–₦35,000 "}
                      <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "14px", fontWeight: "500", color: "#5E6862", letterSpacing: "0" }}>
                        per listing · 90 days
                      </span>
                    </span>
                    <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#3D4A43" }}>
                      <li style={{ display: "flex", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Listing fee by rent band, shown before you pay
                      </li>
                      <li style={{ display: "flex", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Closing fee 3% of first year's rent (min ₦15,000), only on Plainly Secure deals
                      </li>
                      <li style={{ display: "flex", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Listing fee credited against the closing fee
                      </li>
                    </ul>
                  </article>
                  <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                        Landlord Pro
                      </h3>
                      <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                        Phase 2 · coming later
                      </span>
                    </div>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "26px", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      {"₦15,000–₦50,000 "}
                      <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "14px", fontWeight: "500", color: "#5E6862", letterSpacing: "0" }}>
                        per month
                      </span>
                    </span>
                    <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "#3D4A43" }}>
                      <li style={{ display: "flex", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Discounted listings for multi-unit owners
                      </li>
                      <li style={{ display: "flex", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Rent collection and tenant management
                      </li>
                      <li style={{ display: "flex", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Reports across all your properties
                      </li>
                    </ul>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px", paddingTop: "4px" }}>
                      <button type="button" style={{ height: "44px", padding: "0 16px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 15px 'Figtree', sans-serif" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                          <path d="M10 21h4"></path>
                        </svg>
                        Notify me
                      </button>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Not available yet. We'll tell you when it opens in Lagos.
                      </span>
                    </div>
                  </article>
                </div>
              </section>
              <section aria-labelledby="pm-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 16px" }}>
                <h2 id="pm-h" style={{ margin: "0", fontSize: "17px", fontWeight: "700", flex: "0 0 auto" }}>
                  Payment methods
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", flex: "1 1 400px" }}>
                  <span style={{ height: "40px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "12px", border: "1.5px solid #0E5A3C", background: "#E2F0E7", fontSize: "14px", fontWeight: "600", color: "#0E5A3C" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    Card •••• 5519 · default
                  </span>
                  <span style={{ height: "40px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "12px", border: "1px solid #E3DFD4", fontSize: "14px", fontWeight: "600", color: "#15201A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"></path>
                    </svg>
                    Bank transfer
                  </span>
                  <span style={{ height: "40px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "12px", border: "1px solid #E3DFD4", fontSize: "14px", fontWeight: "600", color: "#15201A" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="7" y="2.5" width="10" height="19" rx="2"></rect>
                      <path d="M11 18h2"></path>
                    </svg>
                    USSD
                  </span>
                  <button type="button" style={{ height: "40px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "12px", border: "1px dashed #CFC9BA", background: "transparent", font: "600 14px 'Figtree', sans-serif", color: "#0E5A3C" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    Add method
                  </button>
                </div>
                <span style={{ flex: "1 1 100%", fontSize: "13px", color: "#5E6862" }}>
                  Fee payments go to Plainly's revenue account, never to the escrow account. Receipt within 1 minute.
                </span>
              </section>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", borderRadius: "12px", background: "#EFECE4", fontSize: "14px", color: "#3D4A43" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                  <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                  <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                </svg>
                <span>
                  <strong style={{ color: "#15201A" }}>
                    Plainly can only protect money paid through Plainly.
                  </strong>
                  {" Questions about a fee? "}
                  <Link href="/messages" style={{ fontWeight: "600", textDecoration: "none" }}>
                    Talk to billing support
                  </Link>
                </span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
