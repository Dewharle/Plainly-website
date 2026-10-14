"use client";

// Generated from Claude Design: W05-DealRoom.dc.html (WKS-05 · Deal room & Plainly Secure)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-down>[role=tooltip]{bottom:auto;top:calc(100% + 10px)}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class DealRoomLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function DealRoom() {
  useDCLogic(DealRoomLogic);
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
            <Link href="/deal-room" aria-current="page" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", background: "#E2F0E7", color: "#0E5A3C", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
                  <Link href="/owner" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 12H5M11 6l-6 6 6 6"></path>
                    </svg>
                    All deals
                  </Link>
                  <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "30px", lineHeight: "1.12", letterSpacing: "-0.02em" }}>
                    Deal room · 2-bed flat, Alagomeji, Yaba
                  </h1>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                    <span style={{ height: "32px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 12px 0 4px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E3DFD4", fontSize: "13px", fontWeight: "600" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                        FA
                      </span>
                      Funke Adebayo · Owner (you)
                    </span>
                    <span style={{ height: "32px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 12px 0 4px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E3DFD4", fontSize: "13px", fontWeight: "600" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "700" }}>
                        TB
                      </span>
                      Tolu Bakare · Tenant
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="ID verified">
                        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                        <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                      </svg>
                    </span>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      PL-24817 · opened 20 Oct 2026 · listed by owner, no agent
                    </span>
                  </div>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#5E6862" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Every action is time-stamped
                </span>
              </div>
              <section aria-label="Deal stages" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                <div style={{ overflowX: "auto", padding: "18px 20px 14px" }}>
                  <ol style={{ margin: "0", padding: "0", listStyle: "none", minWidth: "860px", display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}>
                    <li style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                        </span>
                        <span style={{ flex: "1", height: "2px", background: "#0E5A3C" }}></span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Accepted
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Done · 20 Oct
                        </span>
                      </div>
                    </li>
                    <li style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                        </span>
                        <span style={{ flex: "1", height: "2px", background: "#0E5A3C" }}></span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Signed
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Done · 22 Oct
                        </span>
                      </div>
                    </li>
                    <li style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                        </span>
                        <span style={{ flex: "1", height: "2px", background: "#0E5A3C" }}></span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Contacts unlocked
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Done · on signing
                        </span>
                      </div>
                    </li>
                    <li style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "999px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                        </span>
                        <span style={{ flex: "1", height: "2px", background: "#0E5A3C" }}></span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Paid
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Done · 23 Oct
                        </span>
                      </div>
                    </li>
                    <li aria-current="step" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", background: "#F4B728", border: "2px solid #15201A", display: "grid", placeItems: "center" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="8" cy="15" r="4"></circle>
                            <path d="m11 12 9-9M17 6l3 3"></path>
                          </svg>
                        </span>
                        <span style={{ flex: "1", height: "2px", backgroundImage: "repeating-linear-gradient(90deg, #CFC9BA 0 6px, transparent 6px 10px)" }}></span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Handover
                        </strong>
                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#6B4E00" }}>
                          Now · due today, Sun 1 Nov
                        </span>
                      </div>
                    </li>
                    <li style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", background: "#FFFFFF", border: "2px solid #CFC9BA", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#5E6862" }}>
                          6
                        </span>
                        <span style={{ flex: "1", height: "2px", backgroundImage: "repeating-linear-gradient(90deg, #CFC9BA 0 6px, transparent 6px 10px)" }}></span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px" }}>
                        <strong style={{ fontSize: "14px", color: "#3D4A43" }}>
                          Release
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          On move-in or 72 h
                        </span>
                      </div>
                    </li>
                    <li style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ width: "28px", height: "28px", flex: "none", boxSizing: "border-box", borderRadius: "999px", background: "#FFFFFF", border: "2px solid #CFC9BA", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#5E6862" }}>
                          7
                        </span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", paddingRight: "8px" }}>
                        <strong style={{ fontSize: "14px", color: "#3D4A43" }}>
                          Done
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Payout statement
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 20px", padding: "10px 20px", borderTop: "1px solid #E3DFD4", background: "#FBFAF7", borderRadius: "0 0 16px 16px", fontSize: "12px", color: "#3D4A43" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "99px", background: "#0E5A3C" }}></span>
                    Done
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "10px", height: "10px", boxSizing: "border-box", borderRadius: "99px", background: "#F4B728", border: "1.5px solid #15201A" }}></span>
                    Current
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "10px", height: "10px", boxSizing: "border-box", borderRadius: "99px", border: "1.5px solid #CFC9BA" }}></span>
                    Up next
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ height: "22px", display: "inline-flex", alignItems: "center", gap: "5px", padding: "0 8px", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontWeight: "700" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C1D17" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 21V4M5 4h11l-2 4 2 4H5"></path>
                      </svg>
                      Dispute
                    </span>
                    Branch state: either party, any stage up to Release. Funds freeze until decided.
                  </span>
                </div>
              </section>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
                <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px" }}>
                    <section aria-labelledby="h-handover" style={{ background: "#FFFFFF", border: "1.5px solid #15201A", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B4E00" }}>
                          Your next step · 5 of 7
                        </span>
                        <h2 id="h-handover" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                          Hand over the keys
                        </h2>
                        <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                          {"Due "}
                          <strong>
                            today, Sun 1 Nov 2026
                          </strong>
                          {" · move-in date agreed by both"}
                        </span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <button type="button" style={{ height: "48px", borderRadius: "12px", border: "0", background: "#0E5A3C", color: "#FFFFFF", font: "700 15px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="8" cy="15" r="4"></circle>
                            <path d="m11 12 9-9M17 6l3 3"></path>
                          </svg>
                          Mark keys handed over
                        </button>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#5E6862" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                            <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                          </svg>
                          Confirm with passkey or PIN
                        </span>
                      </div>
                      <p style={{ margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                        After you mark handover, the tenant confirms move-in — or funds release automatically 72 h later if no dispute. We remind the tenant at 24 h and 48 h.
                      </p>
                      <ol aria-label="What happens after handover" style={{ margin: "0", padding: "10px 12px", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "6px", background: "#F6F4EE", borderRadius: "12px", fontSize: "12px", textAlign: "center", color: "#3D4A43" }}>
                        <li style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ color: "#15201A" }}>
                            0 h
                          </strong>
                          You mark
                        </li>
                        <li style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ color: "#15201A" }}>
                            24 h
                          </strong>
                          Reminder
                        </li>
                        <li style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ color: "#15201A" }}>
                            48 h
                          </strong>
                          Reminder
                        </li>
                        <li style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ color: "#0E5A3C" }}>
                            72 h
                          </strong>
                          Release
                        </li>
                      </ol>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        If keys are not handed over by 8 Nov 2026 (agreed date + 7 days), Tolu is refunded in full.
                      </span>
                    </section>
                    <section aria-labelledby="h-check" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                        <h2 id="h-check" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                          Shared checklist
                        </h2>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          2 of 4 done
                        </span>
                      </div>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        You and Tolu both see and tick these. Each entry is evidence if anything is disputed.
                      </span>
                      <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                        <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0" }}>
                          <span style={{ width: "24px", height: "24px", flex: "none", borderRadius: "7px", background: "#1C7A4A", display: "grid", placeItems: "center" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                          </span>
                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                            <strong style={{ fontSize: "14px" }}>
                              Inventory photos
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862" }}>
                              24 photos · added by you 30 Oct, 16:20
                            </span>
                          </div>
                          <Link href="/deal-room" style={{ fontSize: "13px", fontWeight: "600" }}>
                            View
                          </Link>
                        </li>
                        <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0", borderTop: "1px solid #E3DFD4" }}>
                          <span style={{ width: "24px", height: "24px", flex: "none", boxSizing: "border-box", borderRadius: "7px", border: "2px solid #CFC9BA", background: "#FFFFFF" }}></span>
                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                            <strong style={{ fontSize: "14px" }}>
                              Meter reading
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862" }}>
                              Prepaid meter · photo of units at handover
                            </span>
                          </div>
                          <button type="button" style={{ height: "36px", padding: "0 12px", borderRadius: "10px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                            Add
                          </button>
                        </li>
                        <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0", borderTop: "1px solid #E3DFD4" }}>
                          <span style={{ width: "24px", height: "24px", flex: "none", boxSizing: "border-box", borderRadius: "7px", border: "2px solid #CFC9BA", background: "#FFFFFF" }}></span>
                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                            <strong style={{ fontSize: "14px" }}>
                              Keys count: 3
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862" }}>
                              Gate, front door, bedroom · Tolu confirms on receipt
                            </span>
                          </div>
                        </li>
                        <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0", borderTop: "1px solid #E3DFD4" }}>
                          <span style={{ width: "24px", height: "24px", flex: "none", borderRadius: "7px", background: "#1C7A4A", display: "grid", placeItems: "center" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                          </span>
                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                            <strong style={{ fontSize: "14px" }}>
                              Move-in date: 1 Nov 2026
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862" }}>
                              Agreed by both · 22 Oct
                            </span>
                          </div>
                        </li>
                      </ul>
                    </section>
                  </div>
                  <section aria-labelledby="h-agr" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: "0" }}>
                        <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#E2F0E7", display: "grid", placeItems: "center" }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 3h8l4 4v14H6z"></path>
                            <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                          </svg>
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                          <h2 id="h-agr" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                            Lagos residential tenancy
                          </h2>
                          <span style={{ fontSize: "13px", color: "#5E6862" }}>
                            Template v3.2 · reviewed by Nigerian counsel · 1 year from 1 Nov 2026
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                          Signed by both
                        </span>
                        <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 14px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                          </svg>
                          Signed PDF
                        </button>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                      <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Signatures · OTP + audit trail
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                          <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700" }}>
                            FA
                          </span>
                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                            <strong style={{ fontSize: "14px" }}>
                              Funke Adebayo · Owner
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862" }}>
                              Signed 22 Oct 2026, 09:14 WAT
                            </span>
                          </div>
                          <span className="tip">
                            {" "}
                            <button type="button" aria-label="Signature audit details for Funke Adebayo" aria-describedby="t-sig1" style={{ width: "36px", height: "36px", border: "0", borderRadius: "10px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="9"></circle>
                                <path d="M12 11v5M12 8h.01"></path>
                              </svg>
                            </button>
                            {" "}
                            <span role="tooltip" id="t-sig1">
                              <strong style={{ display: "block", paddingBottom: "2px" }}>
                                Audit trail
                              </strong>
                              22 Oct 2026, 09:14:32 WAT
                              <br />
                              OTP to +234 803 ••• ••10
                              <br />
                              Device: Samsung Galaxy A14 · Chrome
                              <br />
                              IP 102.89.34.xx · Lagos
                            </span>
                            {" "}
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                          <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700" }}>
                            TB
                          </span>
                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                            <strong style={{ fontSize: "14px" }}>
                              Tolu Bakare · Tenant
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862" }}>
                              Signed 22 Oct 2026, 18:02 WAT
                            </span>
                          </div>
                          <span className="tip">
                            {" "}
                            <button type="button" aria-label="Signature audit details for Tolu Bakare" aria-describedby="t-sig2" style={{ width: "36px", height: "36px", border: "0", borderRadius: "10px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="9"></circle>
                                <path d="M12 11v5M12 8h.01"></path>
                              </svg>
                            </button>
                            {" "}
                            <span role="tooltip" id="t-sig2">
                              <strong style={{ display: "block", paddingBottom: "2px" }}>
                                Audit trail
                              </strong>
                              22 Oct 2026, 18:02:07 WAT
                              <br />
                              OTP to +234 802 ••• ••77
                              <br />
                              Device: Tecno Camon 20 · Plainly app
                              <br />
                              IP 197.210.53.xx · Lagos
                            </span>
                            {" "}
                          </span>
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3D4A43" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                            <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                          </svg>
                          {"PDF hash "}
                          <code style={{ fontSize: "12px", background: "#EFECE4", padding: "1px 6px", borderRadius: "6px" }}>
                            sha256 …9f2c
                          </code>
                          {" matches stored copy"}
                        </span>
                      </div>
                      <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Key terms
                        </span>
                        <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#FDF3D3", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "700", color: "#6B4E00" }}>
                            Clause 4.1 · Payments
                          </span>
                          <strong style={{ fontSize: "15px", color: "#15201A" }}>
                            All sums are paid through Plainly Secure
                          </strong>
                          <span style={{ fontSize: "12px", color: "#6B4E00" }}>
                            In every Plainly template. No “pay the owner directly” option exists.
                          </span>
                        </div>
                        <div style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            <strong style={{ color: "#15201A" }}>
                              Full-consideration statement.
                            </strong>
                            {" This agreement lists every sum payable. No other payment has been agreed."}
                          </span>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                              </svg>
                              Funke A. confirmed
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                              </svg>
                              Tolu B. confirmed
                            </span>
                          </div>
                        </div>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Rent ₦2,000,000/yr · caution deposit ₦200,000 · service charge ₦0 · agreement fee ₦0
                        </span>
                      </div>
                    </div>
                  </section>
                  <section aria-labelledby="h-log" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px", padding: "16px 20px" }}>
                      <h2 id="h-log" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                        Activity log
                      </h2>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Times in WAT · cannot be edited
                      </span>
                    </div>
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", minWidth: "640px", borderCollapse: "collapse", fontSize: "13px" }}>
                        <thead>
                          <tr style={{ background: "#EFECE4", textAlign: "left" }}>
                            <th scope="col" style={{ padding: "8px 20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", whiteSpace: "nowrap" }}>
                              Time
                            </th>
                            <th scope="col" style={{ padding: "8px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                              Event
                            </th>
                            <th scope="col" style={{ padding: "8px 20px 8px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                              By
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{ fontVariantNumeric: "tabular-nums" }}>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "9px 20px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                              30 Oct 2026, 16:20
                            </td>
                            <td style={{ padding: "9px 12px" }}>
                              Inventory photos added to checklist (24)
                            </td>
                            <td style={{ padding: "9px 20px 9px 12px", color: "#3D4A43" }}>
                              Funke A.
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "9px 20px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                              23 Oct 2026, 12:40
                            </td>
                            <td style={{ padding: "9px 12px" }}>
                              <strong>
                                ₦2,200,000 paid into Plainly Secure
                              </strong>
                              {" · bank transfer"}
                            </td>
                            <td style={{ padding: "9px 20px 9px 12px", color: "#3D4A43" }}>
                              Tolu B.
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "9px 20px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                              22 Oct 2026, 18:02
                            </td>
                            <td style={{ padding: "9px 12px" }}>
                              Agreement signed (OTP) · contacts unlocked for both
                            </td>
                            <td style={{ padding: "9px 20px 9px 12px", color: "#3D4A43" }}>
                              Tolu B.
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "9px 20px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                              22 Oct 2026, 09:14
                            </td>
                            <td style={{ padding: "9px 12px" }}>
                              Agreement signed (OTP) · full-consideration statement confirmed
                            </td>
                            <td style={{ padding: "9px 20px 9px 12px", color: "#3D4A43" }}>
                              Funke A.
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "9px 20px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                              20 Oct 2026, 10:15
                            </td>
                            <td style={{ padding: "9px 12px" }}>
                              Other applicants told the property is under offer
                            </td>
                            <td style={{ padding: "9px 20px 9px 12px", color: "#3D4A43" }}>
                              Plainly
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "9px 20px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                              20 Oct 2026, 10:15
                            </td>
                            <td style={{ padding: "9px 12px" }}>
                              Application accepted · listing moved to Under offer · deal room opened
                            </td>
                            <td style={{ padding: "9px 20px 9px 12px", color: "#3D4A43" }}>
                              Funke A.
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "9px 20px", whiteSpace: "nowrap", color: "#3D4A43" }}>
                              19 Oct 2026, 14:22
                            </td>
                            <td style={{ padding: "9px 12px" }}>
                              Application submitted · intended occupier: applicant only
                            </td>
                            <td style={{ padding: "9px 20px 9px 12px", color: "#3D4A43" }}>
                              Tolu B.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
                <aside style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <section aria-labelledby="h-money" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                          <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                        </svg>
                        Plainly Secure
                      </span>
                      <h2 id="h-money" style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: "#3D4A43" }}>
                        Held in Plainly Secure
                      </h2>
                      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                        ₦2,200,000
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                          </svg>
                          Paid 23 Oct
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Rent ₦2,000,000 + caution deposit ₦200,000
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "14px", background: "#F6F4EE", borderRadius: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                        At release · preview
                      </span>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                        <strong style={{ fontSize: "15px" }}>
                          To you
                        </strong>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums", color: "#0E5A3C" }}>
                          ₦2,150,000
                        </span>
                      </div>
                      <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "1fr auto", gap: "6px 12px", fontSize: "13px", fontVariantNumeric: "tabular-nums", paddingTop: "8px", borderTop: "1px dashed #CFC9BA" }}>
                        <dt style={{ color: "#3D4A43" }}>
                          Closing fee 3%
                        </dt>
                        <dd style={{ margin: "0", textAlign: "right", fontWeight: "600" }}>
                          −₦60,000
                        </dd>
                        <dt style={{ color: "#3D4A43" }}>
                          Listing-fee credit
                        </dt>
                        <dd style={{ margin: "0", textAlign: "right", fontWeight: "600", color: "#145C37" }}>
                          +₦10,000
                        </dd>
                        <dt style={{ color: "#3D4A43" }}>
                          {"Agent commission "}
                          <span style={{ color: "#5E6862" }}>
                            · listed by owner
                          </span>
                        </dt>
                        <dd style={{ margin: "0", textAlign: "right", fontWeight: "600" }}>
                          ₦0
                        </dd>
                      </dl>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Caution deposit is held per the agreement. Tenant sees the same split.
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "10px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"></path>
                        </svg>
                      </span>
                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "14px" }}>
                          GTBank ••••4821 · name match ✓
                        </strong>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          FUNKE ADEBAYO · payout account
                        </span>
                      </div>
                      <Link href="/coming-soon/O08-Security" style={{ fontSize: "13px", fontWeight: "600" }}>
                        Change
                      </Link>
                    </div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", padding: "10px 12px", borderRadius: "12px", background: "#E2F0E7", color: "#0A4630", fontSize: "13px", fontWeight: "600" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                        <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                      </svg>
                      <span>
                        Plainly can only protect money paid through Plainly.
                      </span>
                    </div>
                  </section>
                  <section aria-labelledby="h-contact" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                      <h2 id="h-contact" style={{ margin: "0", fontSize: "15px", fontWeight: "700" }}>
                        Contacts unlocked
                      </h2>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                          <path d="M8 11V8a4 4 0 0 1 7.5-2"></path>
                        </svg>
                        Since 22 Oct
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", display: "grid", placeItems: "center", fontSize: "13px", fontWeight: "700" }}>
                        TB
                      </span>
                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "15px", fontVariantNumeric: "tabular-nums" }}>
                          +234 802 555 0177
                        </strong>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Tolu Bakare (verified)
                        </span>
                      </div>
                      <a href="tel:+2348025550177" aria-label="Call Tolu Bakare" style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1.5px solid #15201A", boxSizing: "border-box", display: "grid", placeItems: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
                        </svg>
                      </a>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Numbers unlocked when you both signed. Keep payments in Plainly Secure.
                    </span>
                  </section>
                  <section aria-labelledby="h-dispute" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 21V4M5 4h11l-2 4 2 4H5"></path>
                      </svg>
                      <h2 id="h-dispute" style={{ margin: "0", fontSize: "15px", fontWeight: "700" }}>
                        Something wrong?
                      </h2>
                    </div>
                    <p style={{ margin: "0", fontSize: "13px", color: "#3D4A43" }}>
                      Raised until release · 72 h evidence window · decision within 5 business days · funds stay frozen
                    </p>
                    <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "6px", fontSize: "12px" }}>
                      <li style={{ padding: "8px 10px", borderRadius: "10px", background: "#F6F4EE", display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "13px" }}>
                          Until release
                        </strong>
                        <span style={{ color: "#5E6862" }}>
                          Either party can raise
                        </span>
                      </li>
                      <li style={{ padding: "8px 10px", borderRadius: "10px", background: "#F6F4EE", display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "13px" }}>
                          72 h
                        </strong>
                        <span style={{ color: "#5E6862" }}>
                          To add evidence
                        </span>
                      </li>
                      <li style={{ padding: "8px 10px", borderRadius: "10px", background: "#F6F4EE", display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "13px" }}>
                          5 business days
                        </strong>
                        <span style={{ color: "#5E6862" }}>
                          For a decision
                        </span>
                      </li>
                      <li style={{ padding: "8px 10px", borderRadius: "10px", background: "#F6F4EE", display: "flex", flexDirection: "column" }}>
                        <strong style={{ fontSize: "13px" }}>
                          Frozen
                        </strong>
                        <span style={{ color: "#5E6862" }}>
                          No release meanwhile
                        </span>
                      </li>
                    </ul>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Chat, agreement, checklist and payment records are used as evidence.
                    </span>
                    <div>
                      <button type="button" style={{ height: "44px", padding: "0 4px", border: "0", background: "transparent", color: "#B3261E", font: "700 14px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                        Raise a dispute
                      </button>
                    </div>
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
