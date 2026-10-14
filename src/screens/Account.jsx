"use client";

// Generated from Claude Design: W11-Account.dc.html (WKS-01 · Seeker account)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-down>[role=tooltip]{bottom:auto;top:calc(100% + 10px)}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class AccountLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function Account() {
  useDCLogic(AccountLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1560px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.45", display: "flex", flexDirection: "column" }}>
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
              Search homes, saved searches and messages
            </span>
            <input type="search" placeholder="Search homes, saved searches, messages" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "500 14px 'Figtree', sans-serif", color: "#15201A" }} />
          </label>
          <span style={{ flex: "1 1 0", minWidth: "0" }}></span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span className="tip tip-down">
              {" "}
              <Link href="/owner" aria-describedby="t-role" style={{ height: "36px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", gap: "6px", padding: "0 12px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", font: "700 13px 'Figtree', sans-serif", color: "#15201A", textDecoration: "none" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#1D5FB8" }}></span>
                Seeker
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
            <Link href="/coming-soon/A05-Notifications" aria-label="Notifications, 2 new" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "grid", placeItems: "center", position: "relative" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                <path d="M10 21h4"></path>
              </svg>
              <span style={{ position: "absolute", top: "10px", right: "11px", width: "8px", height: "8px", borderRadius: "99px", background: "#B3261E", border: "2px solid #FFFFFF" }}></span>
            </Link>
            <button type="button" aria-label="Account menu for Tolu Bakare" style={{ height: "44px", display: "flex", alignItems: "center", gap: "10px", padding: "0 8px 0 4px", border: "0", background: "transparent", font: "600 14px 'Figtree', sans-serif", color: "#15201A" }}>
              <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "14px" }}>
                TB
              </span>
              {"Tolu Bakare "}
            </button>
          </div>
        </header>
        <div style={{ flex: "1", display: "flex", flexWrap: "wrap" }}>
          <nav aria-label="Seeker workspace" style={{ flex: "1 1 248px", maxWidth: "248px", boxSizing: "border-box", background: "#FFFFFF", borderRight: "1px solid #E3DFD4", padding: "20px 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <Link href="/account" aria-current="page" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", background: "#E2F0E7", color: "#0E5A3C", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
              </svg>
              {"Saved & searches"}
            </Link>
            <Link href="/messages" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Messages
              <span style={{ flex: "1" }}></span>
              <span aria-label="2 unread" style={{ minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "99px", background: "#0E5A3C", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                2
              </span>
            </Link>
            <Link href="/account" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
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
              {"Applications & deals"}
            </Link>
            <Link href="/coming-soon/O08-Security" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                <path d="m8.5 12 2.5 2.5 4.5-5"></path>
              </svg>
              Security
            </Link>
            <div style={{ padding: "16px 12px 0", display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid #E3DFD4", fontSize: "12px", color: "#5E6862" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: "700", color: "#164A90" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                  <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                </svg>
                ID verified · 18+
              </span>
              <span>
                NIN and liveness checked. Owners see "ID verified", never your NIN.
              </span>
            </div>
          </nav>
          <main style={{ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "32px" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                  <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    {"Saved & searches"}
                  </h1>
                  <p style={{ margin: "0", color: "#3D4A43", fontSize: "15px" }}>
                    Good afternoon, Tolu. One payment due, one viewing this Saturday, two new matches.
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "32px", padding: "0 12px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E3DFD4", color: "#3D4A43", fontSize: "13px", fontWeight: "600" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 3h8l4 4v14H6z"></path>
                      <path d="M14 3v4h4"></path>
                    </svg>
                    <strong style={{ color: "#15201A" }}>
                      2 of 5
                    </strong>
                    {" active applications"}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "32px", padding: "0 12px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E3DFD4", color: "#3D4A43", fontSize: "13px", fontWeight: "600" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                      <path d="M3.5 10h17"></path>
                    </svg>
                    <strong style={{ color: "#15201A" }}>
                      2 of 8
                    </strong>
                    {" viewings this week"}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
                <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
                  <section aria-labelledby="h-apps" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", borderBottom: "1px solid #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <h2 id="h-apps" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                          {"Applications & deals"}
                        </h2>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          Up to 5 active applications at a time. Owners choose their tenant.
                        </span>
                      </div>
                    </div>
                    <article style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", background: "#FBFAF7" }}>
                      <span aria-hidden="true" style={{ width: "56px", height: "56px", flex: "none", borderRadius: "12px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                      <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                          <strong style={{ fontSize: "16px" }}>
                            2-bed flat · Alagomeji, Yaba
                          </strong>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
                            </svg>
                            Payment due
                          </span>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          {"Accepted 20 Oct · both signed 22 Oct · pay "}
                          <strong style={{ fontVariantNumeric: "tabular-nums" }}>
                            ₦2,200,000
                          </strong>
                          {" into Plainly Secure"}
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Plainly can only protect money paid through Plainly.
                        </span>
                      </div>
                      <Link href="/deal-room" style={{ height: "44px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 18px", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                        Open deal room
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m9 6 6 6-6 6"></path>
                        </svg>
                      </Link>
                    </article>
                    <article style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", borderTop: "1px solid #E3DFD4" }}>
                      <span aria-hidden="true" style={{ width: "56px", height: "56px", flex: "none", borderRadius: "12px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                      <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                          <strong style={{ fontSize: "16px" }}>
                            3-bed flat · Ifako, Gbagada
                          </strong>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="9"></circle>
                              <path d="M12 7v5l3 2"></path>
                            </svg>
                            Waiting for agent
                          </span>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Applied Mon 12 Oct · Listed by agent (LASRERA) · agency fee 10% itemised
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          You can withdraw any time. Withdrawing frees one of your 5 application slots.
                        </span>
                      </div>
                      <Link href="/messages" style={{ height: "44px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", padding: "0 16px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                        Message agent
                      </Link>
                    </article>
                    <article style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", borderTop: "1px solid #E3DFD4" }}>
                      <span aria-hidden="true" style={{ width: "56px", height: "56px", flex: "none", borderRadius: "12px", background: "#DCDCD4", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></span>
                      <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                          <strong style={{ fontSize: "16px", color: "#3D4A43" }}>
                            Mini-flat · Onike, Yaba
                          </strong>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M6 6l12 12M18 6 6 18"></path>
                            </svg>
                            Declined
                          </span>
                        </div>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          Owner chose another applicant · Fri 9 Oct
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          This doesn't affect your account standing. It no longer counts toward your limit.
                        </span>
                      </div>
                      <Link href="/search" style={{ height: "44px", display: "inline-flex", alignItems: "center", padding: "0 10px", fontWeight: "600", fontSize: "15px", textDecoration: "none" }}>
                        See similar homes
                      </Link>
                    </article>
                  </section>
                  <section aria-labelledby="h-saved" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                      <h2 id="h-saved" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        {"Saved homes "}
                        <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "15px", fontWeight: "600", color: "#5E6862" }}>
                          3
                        </span>
                      </h2>
                      <Link href="/coming-soon/D02-Compare" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Compare saved homes
                      </Link>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px" }}>
                      <Link href="/listings/PL-24817" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", color: "#15201A", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                        <span role="img" aria-label="Photo placeholder: self-contain room in Akoka" style={{ height: "140px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "10px", boxSizing: "border-box" }}>
                          <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "11px", fontWeight: "700" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 5v14M6 13l6 6 6-6"></path>
                            </svg>
                            Price dropped
                          </span>
                          <span style={{ width: "32px", height: "32px", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#B3261E" stroke="#B3261E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                            </svg>
                          </span>
                        </span>
                        <span style={{ padding: "12px 14px 14px", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                            {"₦750,000 "}
                            <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0", color: "#5E6862" }}>
                              to move in
                            </span>
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            Self-contain · Akoka
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            ₦650,000/yr · Uploaded video
                          </span>
                          <span style={{ fontSize: "12px", color: "#145C37", fontWeight: "600" }}>
                            Rent lowered since you saved it
                          </span>
                        </span>
                      </Link>
                      <Link href="/listings/PL-24817" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", color: "#15201A", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                        <span role="img" aria-label="Photo placeholder: 1-bed flat living room in Surulere" style={{ height: "140px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "10px", boxSizing: "border-box" }}>
                          <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#FDF3D3", color: "#6B4E00", fontSize: "11px", fontWeight: "700" }}>
                            Featured
                          </span>
                          <span style={{ width: "32px", height: "32px", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#B3261E" stroke="#B3261E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                            </svg>
                          </span>
                        </span>
                        <span style={{ padding: "12px 14px 14px", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                            {"₦2,000,000 "}
                            <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0", color: "#5E6862" }}>
                              to move in
                            </span>
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            1-bed flat · Adeniran Ogunsanya, Surulere
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            ₦1,800,000/yr · Listed by owner
                          </span>
                          <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "5px", height: "24px", padding: "0 8px", borderRadius: "999px", background: "#FDF3D3", color: "#6B4E00", fontSize: "11px", fontWeight: "700" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B4E00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                            </svg>
                            Inspected
                          </span>
                        </span>
                      </Link>
                      <Link href="/listings/PL-24817" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", color: "#15201A", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                        <span role="img" aria-label="Photo placeholder: 2-bed flat in Alagomeji" style={{ height: "140px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "10px", boxSizing: "border-box" }}>
                          <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", fontSize: "11px", fontWeight: "700" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#F4B728" }}></span>
                            Live video
                          </span>
                          <span style={{ width: "32px", height: "32px", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#B3261E" stroke="#B3261E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                            </svg>
                          </span>
                        </span>
                        <span style={{ padding: "12px 14px 14px", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                            {"₦2,200,000 "}
                            <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0", color: "#5E6862" }}>
                              to move in
                            </span>
                          </span>
                          <strong style={{ fontSize: "14px" }}>
                            2-bed flat · Alagomeji, Yaba
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            ₦2,000,000/yr · Listed by owner
                          </span>
                          <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "5px", height: "24px", padding: "0 8px", borderRadius: "999px", background: "#E2F0E7", color: "#0A4630", fontSize: "11px", fontWeight: "700" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                              <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                            </svg>
                            Owner verified
                          </span>
                        </span>
                      </Link>
                    </div>
                  </section>
                  <section aria-labelledby="h-searches" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", borderBottom: "1px solid #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <h2 id="h-searches" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                          Saved searches
                        </h2>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "#5E6862" }}>
                          {"Alerts within 15 min of a new match "}
                          <span className="tip">
                            {" "}
                            <button type="button" aria-label="How alerts work" aria-describedby="t-alerts" style={{ width: "32px", height: "32px", border: "0", borderRadius: "8px", background: "transparent", display: "grid", placeItems: "center" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="9"></circle>
                                <path d="M12 11v5M12 8h.01"></path>
                              </svg>
                            </button>
                            {" "}
                            <span role="tooltip" id="t-alerts">
                              New listings and price drops that match are sent within 15 minutes on the channels you switch on. Quiet hours 21:00–07:00 WAT apply to SMS and WhatsApp.
                            </span>
                            {" "}
                          </span>
                        </span>
                      </div>
                      <Link href="/search" style={{ height: "40px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", gap: "6px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                        New search
                      </Link>
                    </div>
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", minWidth: "760px", borderCollapse: "collapse", fontSize: "14px" }}>
                        <thead>
                          <tr style={{ background: "#EFECE4", textAlign: "left" }}>
                            <th scope="col" style={{ padding: "10px 20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                              Search
                            </th>
                            <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "right" }}>
                              Matches
                            </th>
                            <th scope="col" style={{ padding: "10px 4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "center" }}>
                              Push
                            </th>
                            <th scope="col" style={{ padding: "10px 4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "center" }}>
                              SMS
                            </th>
                            <th scope="col" style={{ padding: "10px 4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "center" }}>
                              Email
                            </th>
                            <th scope="col" style={{ padding: "10px 4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43", textAlign: "center" }}>
                              WhatsApp
                            </th>
                            <th scope="col" style={{ padding: "10px 20px 10px 12px" }}>
                              <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                                Actions
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "12px 20px" }}>
                              <span style={{ display: "flex", flexDirection: "column" }}>
                                <strong style={{ fontSize: "14px" }}>
                                  Yaba 2-bed under ₦2.5m
                                </strong>
                                <span style={{ fontSize: "12px", color: "#5E6862" }}>
                                  Yaba LCDA · 2+ bed · Owner verified
                                </span>
                              </span>
                            </td>
                            <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                              {"12 "}
                              <span style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 8px", borderRadius: "999px", background: "#E2F0E7", color: "#0A4630", fontSize: "11px", fontWeight: "700" }}>
                                2 new
                              </span>
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button type="button" role="switch" aria-checked="true" aria-label="Push alerts for Yaba 2-bed under ₦2.5m" style={{ width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", display: "inline-grid", placeItems: "center" }}>
                                <span style={{ width: "36px", height: "22px", boxSizing: "border-box", padding: "2px", borderRadius: "999px", background: "#0E5A3C", display: "flex", justifyContent: "flex-end" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFFFFF" }}></span>
                                </span>
                              </button>
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button type="button" role="switch" aria-checked="false" aria-label="SMS alerts for Yaba 2-bed under ₦2.5m" style={{ width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", display: "inline-grid", placeItems: "center" }}>
                                <span style={{ width: "36px", height: "22px", boxSizing: "border-box", padding: "2px", borderRadius: "999px", background: "#CFC9BA", display: "flex", justifyContent: "flex-start" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFFFFF" }}></span>
                                </span>
                              </button>
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button type="button" role="switch" aria-checked="true" aria-label="Email alerts for Yaba 2-bed under ₦2.5m" style={{ width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", display: "inline-grid", placeItems: "center" }}>
                                <span style={{ width: "36px", height: "22px", boxSizing: "border-box", padding: "2px", borderRadius: "999px", background: "#0E5A3C", display: "flex", justifyContent: "flex-end" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFFFFF" }}></span>
                                </span>
                              </button>
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button type="button" role="switch" aria-checked="true" aria-label="WhatsApp alerts for Yaba 2-bed under ₦2.5m" style={{ width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", display: "inline-grid", placeItems: "center" }}>
                                <span style={{ width: "36px", height: "22px", boxSizing: "border-box", padding: "2px", borderRadius: "999px", background: "#0E5A3C", display: "flex", justifyContent: "flex-end" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFFFFF" }}></span>
                                </span>
                              </button>
                            </td>
                            <td style={{ padding: "12px 20px 12px 12px", textAlign: "right" }}>
                              <Link href="/search" style={{ fontWeight: "600", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
                                See matches
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 6 6 6-6 6"></path>
                                </svg>
                              </Link>
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "12px 20px" }}>
                              <span style={{ display: "flex", flexDirection: "column" }}>
                                <strong style={{ fontSize: "14px" }}>
                                  Mini-flat · Yaba, Akoka, Onike under ₦1.5m
                                </strong>
                                <span style={{ fontSize: "12px", color: "#5E6862" }}>
                                  Mini-flat or self-contain · Fair Terms only
                                </span>
                              </span>
                            </td>
                            <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                              8
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button type="button" role="switch" aria-checked="true" aria-label="Push alerts for mini-flat search" style={{ width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", display: "inline-grid", placeItems: "center" }}>
                                <span style={{ width: "36px", height: "22px", boxSizing: "border-box", padding: "2px", borderRadius: "999px", background: "#0E5A3C", display: "flex", justifyContent: "flex-end" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFFFFF" }}></span>
                                </span>
                              </button>
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button type="button" role="switch" aria-checked="false" aria-label="SMS alerts for mini-flat search" style={{ width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", display: "inline-grid", placeItems: "center" }}>
                                <span style={{ width: "36px", height: "22px", boxSizing: "border-box", padding: "2px", borderRadius: "999px", background: "#CFC9BA", display: "flex", justifyContent: "flex-start" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFFFFF" }}></span>
                                </span>
                              </button>
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button type="button" role="switch" aria-checked="false" aria-label="Email alerts for mini-flat search" style={{ width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", display: "inline-grid", placeItems: "center" }}>
                                <span style={{ width: "36px", height: "22px", boxSizing: "border-box", padding: "2px", borderRadius: "999px", background: "#CFC9BA", display: "flex", justifyContent: "flex-start" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFFFFF" }}></span>
                                </span>
                              </button>
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button type="button" role="switch" aria-checked="false" aria-label="WhatsApp alerts for mini-flat search" style={{ width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", display: "inline-grid", placeItems: "center" }}>
                                <span style={{ width: "36px", height: "22px", boxSizing: "border-box", padding: "2px", borderRadius: "999px", background: "#CFC9BA", display: "flex", justifyContent: "flex-start" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFFFFF" }}></span>
                                </span>
                              </button>
                            </td>
                            <td style={{ padding: "12px 20px 12px 12px", textAlign: "right" }}>
                              <Link href="/search" style={{ fontWeight: "600", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
                                See matches
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 6 6 6-6 6"></path>
                                </svg>
                              </Link>
                            </td>
                          </tr>
                          <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                            <td style={{ padding: "12px 20px" }}>
                              <span style={{ display: "flex", flexDirection: "column" }}>
                                <strong style={{ fontSize: "14px" }}>
                                  Surulere 1-bed · Inspected only
                                </strong>
                                <span style={{ fontSize: "12px", color: "#5E6862" }}>
                                  Paused by you · no alerts sent
                                </span>
                              </span>
                            </td>
                            <td style={{ padding: "12px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                              5
                            </td>
                            <td colSpan="4" style={{ padding: "12px", textAlign: "center", fontSize: "13px", color: "#5E6862" }}>
                              All alerts off
                            </td>
                            <td style={{ padding: "12px 20px 12px 12px", textAlign: "right" }}>
                              <button type="button" style={{ height: "36px", padding: "0 12px", borderRadius: "10px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 13px 'Figtree', sans-serif", whiteSpace: "nowrap" }}>
                                Resume alerts
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div style={{ padding: "12px 20px", borderTop: "1px solid #E3DFD4", fontSize: "12px", color: "#5E6862" }}>
                      {"Matches update as owners confirm availability. "}
                      <Link href="/coming-soon/A05-Notifications" style={{ fontWeight: "600" }}>
                        Manage all notifications
                      </Link>
                    </div>
                  </section>
                </div>
                <aside style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <section aria-labelledby="h-verify" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", display: "grid", placeItems: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "16px" }}>
                        TB
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                        <h2 id="h-verify" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                          Tolu Bakare
                        </h2>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          Seeker · member since Sep 2026
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 12px", borderRadius: "12px", background: "#E5EEFB" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                        <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                      </svg>
                      <span style={{ fontSize: "13px", color: "#164A90" }}>
                        <strong>
                          ID verified
                        </strong>
                        {" · NIN and liveness check passed · 18+. Owners see this badge, never your NIN."}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "12px", borderTop: "1px solid #E3DFD4" }}>
                      <strong style={{ fontSize: "14px" }}>
                        Want to list? Become an owner
                      </strong>
                      <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                        Same account. Add proof of ownership for each property; the fee is shown before you start.
                      </span>
                      <Link href="/owner/listings/new" style={{ alignSelf: "flex-start", height: "40px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                        List a property
                      </Link>
                    </div>
                  </section>
                  <section id="viewings" aria-labelledby="h-viewing" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 id="h-viewing" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                      Upcoming viewing
                    </h2>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <span style={{ width: "52px", flex: "none", textAlign: "center", display: "flex", flexDirection: "column", borderRadius: "10px", background: "#E2F0E7", padding: "6px 0" }}>
                        <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#0A4630" }}>
                          Sat
                        </span>
                        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", lineHeight: "1.1" }}>
                          17
                        </span>
                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#0A4630" }}>
                          Oct
                        </span>
                      </span>
                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <strong style={{ fontSize: "15px" }}>
                          11:00 · 2-bed flat, Yaba
                        </strong>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          12B Alagomeji Close, Yaba
                        </span>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          with Mrs Funke Adebayo
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Confirmed · address revealed
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                        </svg>
                        Reminders 24 h · 2 h
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      <Link href="/coming-soon/V02-ViewingDay" style={{ height: "40px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", padding: "0 14px", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                        Viewing details
                      </Link>
                      <Link href="/coming-soon/S10-Viewing" style={{ height: "40px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                        Reschedule
                      </Link>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      {"Viewings are free. Never pay anything at a viewing. "}
                      <strong style={{ color: "#3D4A43" }}>
                        2 of 8
                      </strong>
                      {" viewings used this week."}
                    </span>
                  </section>
                  <section aria-labelledby="h-limits" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 id="h-limits" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Your limits
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Active applications
                        </span>
                        <strong style={{ fontVariantNumeric: "tabular-nums" }}>
                          2 of 5
                        </strong>
                      </div>
                      <div role="progressbar" aria-label="Active applications" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ height: "8px", borderRadius: "99px", background: "#EFECE4", overflow: "hidden" }}>
                        <span style={{ display: "block", width: "40%", height: "8px", background: "#0E5A3C" }}></span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Viewings this week
                        </span>
                        <strong style={{ fontVariantNumeric: "tabular-nums" }}>
                          2 of 8
                        </strong>
                      </div>
                      <div role="progressbar" aria-label="Viewings this week" aria-valuenow="2" aria-valuemin="0" aria-valuemax="8" style={{ height: "8px", borderRadius: "99px", background: "#EFECE4", overflow: "hidden" }}>
                        <span style={{ display: "block", width: "25%", height: "8px", background: "#0E5A3C" }}></span>
                      </div>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Limits keep owners' calendars real. 3 missed viewings in 30 days limits new bookings.
                    </span>
                  </section>
                  <section aria-labelledby="h-tenancy" style={{ background: "#F6F4EE", border: "1px dashed #CFC9BA", borderRadius: "16px", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <h2 id="h-tenancy" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                        My tenancy
                      </h2>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "24px", padding: "0 8px", borderRadius: "6px", background: "#FDF3D3", color: "#6B4E00", fontSize: "11px", fontWeight: "700", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                        Phase 2
                      </span>
                    </div>
                    <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                      After you move in: rent reminders, renewal offers, maintenance requests and your deposit refund in one place.
                    </span>
                    <Link href="/coming-soon/P05-Tenancy" style={{ fontSize: "13px", fontWeight: "600" }}>
                      Preview tenancy
                    </Link>
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
