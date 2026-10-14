"use client";

// Generated from Claude Design: W09-Messages.dc.html (WKS-02 · Messages)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-down>[role=tooltip]{bottom:auto;top:calc(100% + 10px)}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class MessagesLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function Messages() {
  useDCLogic(MessagesLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1180px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.45", display: "flex", flexDirection: "column" }}>
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
            <Link href="/account" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", color: "#3D4A43", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
              </svg>
              {"Saved & searches"}
            </Link>
            <Link href="/messages" aria-current="page" style={{ height: "44px", display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", borderRadius: "10px", background: "#E2F0E7", color: "#0E5A3C", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                  <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Messages
                  </h1>
                  <p style={{ margin: "0", color: "#3D4A43", fontSize: "15px" }}>
                    Talk to owners about a specific home. Numbers stay hidden until you both sign.
                  </p>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                    <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  Masked chat and calls
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)", overflow: "hidden" }}>
                <section aria-labelledby="h-convos" style={{ flex: "1 1 300px", minWidth: "0", boxSizing: "border-box", borderRight: "1px solid #E3DFD4", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px", borderBottom: "1px solid #E3DFD4" }}>
                    <h2 id="h-convos" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
                      Conversations
                    </h2>
                    <label style={{ height: "40px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px", background: "#F6F4EE", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="7"></circle>
                        <path d="m20 20-3.5-3.5"></path>
                      </svg>
                      <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                        Search conversations
                      </span>
                      <input type="search" placeholder="Search by owner or area" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "500 14px 'Figtree', sans-serif", color: "#15201A" }} />
                    </label>
                    <div role="tablist" aria-label="Filter conversations" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <button type="button" role="tab" aria-selected="true" style={{ height: "32px", padding: "0 12px", border: "0", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", font: "600 13px 'Figtree', sans-serif" }}>
                        All
                      </button>
                      <button type="button" role="tab" aria-selected="false" style={{ height: "32px", padding: "0 12px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                        Unread 2
                      </button>
                      <button type="button" role="tab" aria-selected="false" style={{ height: "32px", padding: "0 12px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                        Viewings
                      </button>
                      <button type="button" role="tab" aria-selected="false" style={{ height: "32px", padding: "0 12px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                        Deals
                      </button>
                    </div>
                  </div>
                  <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                    <li>
                      {" "}
                      <Link href="/messages" aria-current="true" style={{ display: "flex", gap: "12px", padding: "14px 16px", background: "#E2F0E7", textDecoration: "none", color: "#15201A" }}>
                        <span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "999px", background: "#FFFFFF", color: "#0E5A3C", display: "grid", placeItems: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "15px" }}>
                          FA
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                            <strong style={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              Mrs Funke Adebayo
                            </strong>
                            <span style={{ fontSize: "12px", color: "#3D4A43", flex: "none" }}>
                              14:15
                            </span>
                          </span>
                          <span style={{ fontSize: "12px", color: "#0A4630", fontWeight: "600" }}>
                            2-bed flat · Alagomeji, Yaba
                          </span>
                          <span style={{ fontSize: "13px", color: "#3D4A43", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            Sure, call me on [contact hidden] so we…
                          </span>
                        </span>
                      </Link>
                      {" "}
                    </li>
                    <li style={{ borderTop: "1px solid #E3DFD4" }}>
                      {" "}
                      <Link href="/coming-soon/S09-Chat" style={{ display: "flex", gap: "12px", padding: "14px 16px", textDecoration: "none", color: "#15201A" }}>
                        <span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "15px" }}>
                          KO
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                            <strong style={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              Mr Kehinde O.
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862", flex: "none" }}>
                              11:40
                            </span>
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862", fontWeight: "600" }}>
                            Mini-flat · Onike, Yaba
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ flex: "1", minWidth: "0", fontSize: "13px", fontWeight: "700", color: "#15201A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              I can do Thursday 4pm instead
                            </span>
                            <span aria-label="1 unread" style={{ flex: "none", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "99px", background: "#0E5A3C", color: "#FFFFFF", fontSize: "11px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                              1
                            </span>
                          </span>
                          <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "5px", height: "22px", padding: "0 8px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "11px", fontWeight: "700" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                              <path d="M3.5 10h17"></path>
                            </svg>
                            Viewing requested
                          </span>
                        </span>
                      </Link>
                      {" "}
                    </li>
                    <li style={{ borderTop: "1px solid #E3DFD4" }}>
                      {" "}
                      <Link href="/coming-soon/S09-Chat" style={{ display: "flex", gap: "12px", padding: "14px 16px", textDecoration: "none", color: "#15201A" }}>
                        <span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "15px" }}>
                          BA
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                            <strong style={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              Bisi A. · LASRERA agent
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862", flex: "none" }}>
                              Mon
                            </span>
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862", fontWeight: "600" }}>
                            3-bed flat · Ifako, Gbagada
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ flex: "1", minWidth: "0", fontSize: "13px", fontWeight: "700", color: "#15201A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              Application received, I'll reply by Wed
                            </span>
                            <span aria-label="1 unread" style={{ flex: "none", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "99px", background: "#0E5A3C", color: "#FFFFFF", fontSize: "11px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                              1
                            </span>
                          </span>
                        </span>
                      </Link>
                      {" "}
                    </li>
                    <li style={{ borderTop: "1px solid #E3DFD4" }}>
                      {" "}
                      <Link href="/coming-soon/S09-Chat" style={{ display: "flex", gap: "12px", padding: "14px 16px", textDecoration: "none", color: "#15201A" }}>
                        <span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", display: "grid", placeItems: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "15px" }}>
                          EO
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                            <strong style={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              Mrs Ekaete Okon
                            </strong>
                            <span style={{ fontSize: "12px", color: "#5E6862", flex: "none" }}>
                              29 Sep
                            </span>
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862", fontWeight: "600" }}>
                            Self-contain · Akoka
                          </span>
                          <span style={{ fontSize: "13px", color: "#5E6862", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            Thanks for coming. Let me know.
                          </span>
                          <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "5px", height: "22px", padding: "0 8px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "11px", fontWeight: "700" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            Viewed Tue 29 Sep
                          </span>
                        </span>
                      </Link>
                      {" "}
                    </li>
                  </ul>
                  <div style={{ margin: "auto 16px 16px", padding: "12px 14px", borderRadius: "14px", background: "#E5EEFB", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 11v5M12 8h.01"></path>
                    </svg>
                    <span style={{ fontSize: "13px", lineHeight: "1.45", color: "#164A90" }}>
                      Contacts unlock only after both of you sign. Calls run through Plainly.
                    </span>
                  </div>
                </section>
                <section aria-labelledby="h-thread" style={{ flex: "999 1 480px", minWidth: "0", boxSizing: "border-box", display: "flex", flexDirection: "column", background: "#F6F4EE" }}>
                  <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E3DFD4", padding: "12px 16px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
                    <span aria-hidden="true" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", display: "grid", placeItems: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "16px" }}>
                      FA
                    </span>
                    <div style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h2 id="h-thread" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                        Mrs Funke Adebayo
                      </h2>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 10px", fontSize: "12px", color: "#5E6862" }}>
                        <span style={{ height: "22px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "4px", borderRadius: "999px", background: "#E2F0E7", color: "#0A4630", fontSize: "11px", fontWeight: "700" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                            <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                          </svg>
                          Owner verified
                        </span>
                        <span>
                          Listed by owner · usually replies within 2 h
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span className="tip tip-down">
                        {" "}
                        <Link href="/coming-soon/V04-MaskedCall" aria-label="Call through Plainly" aria-describedby="t-call" style={{ height: "40px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
                          </svg>
                          Call
                        </Link>
                        {" "}
                        <span role="tooltip" id="t-call">
                          Calls run through Plainly — your number stays hidden
                        </span>
                        {" "}
                      </span>
                      <button type="button" aria-label="More options: Report or Block" aria-haspopup="menu" aria-expanded="false" style={{ width: "44px", height: "44px", border: "0", borderRadius: "999px", background: "transparent", display: "grid", placeItems: "center" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#15201A" aria-hidden="true">
                          <circle cx="12" cy="5.5" r="1.8"></circle>
                          <circle cx="12" cy="12" r="1.8"></circle>
                          <circle cx="12" cy="18.5" r="1.8"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 16px", background: "#EFECE4", borderBottom: "1px solid #E3DFD4" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                      <path d="M3 3l18 18"></path>
                      <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                    </svg>
                    <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.4", color: "#3D4A43" }}>
                      Numbers, emails and handles stay hidden until you both sign the agreement.
                    </p>
                  </div>
                  <div role="log" aria-label="Conversation with Mrs Funke Adebayo" style={{ flex: "1", padding: "20px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ alignSelf: "center", height: "24px", padding: "0 10px", display: "flex", alignItems: "center", borderRadius: "999px", background: "#EFECE4", fontSize: "12px", fontWeight: "600", color: "#3D4A43" }}>
                      Today, Tue 13 Oct
                    </span>
                    <div style={{ alignSelf: "flex-end", maxWidth: "440px", background: "#0E5A3C", color: "#FFFFFF", padding: "10px 12px 6px 14px", borderRadius: "16px 16px 4px 16px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "15px", lineHeight: "1.45" }}>
                        Good afternoon ma. Is the flat still available? Can I come and see it this Saturday?
                      </span>
                      <span style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", gap: "3px", fontSize: "11px", color: "rgba(255,255,255,.82)" }}>
                        14:02
                        <svg width="16" height="12" viewBox="0 0 24 16" fill="none" stroke="#F4B728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Read" role="img">
                          <path d="m1.5 8.5 4 4L13 4"></path>
                          <path d="M10.5 12.5 19 4"></path>
                        </svg>
                      </span>
                    </div>
                    <div style={{ alignSelf: "flex-start", maxWidth: "440px", background: "#FFFFFF", border: "1px solid #E3DFD4", padding: "10px 14px 6px", borderRadius: "16px 16px 16px 4px", display: "flex", flexDirection: "column", gap: "2px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                      <span style={{ fontSize: "15px", lineHeight: "1.45" }}>
                        Yes, it's available. Saturday morning is fine. Book any free slot so I can see it.
                      </span>
                      <span style={{ alignSelf: "flex-end", fontSize: "11px", color: "#5E6862" }}>
                        14:10
                      </span>
                    </div>
                    <div style={{ alignSelf: "flex-end", width: "280px", boxSizing: "border-box", background: "#0E5A3C", color: "#FFFFFF", padding: "6px 12px 6px 6px", borderRadius: "16px 16px 4px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <button type="button" aria-label="Play voice note, 18 seconds" style={{ flex: "none", width: "44px", height: "44px", border: "0", borderRadius: "999px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#0E5A3C" aria-hidden="true">
                          <path d="M8 5v14l11-7z"></path>
                        </svg>
                      </button>
                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                        <div aria-hidden="true" style={{ height: "24px", display: "flex", alignItems: "center", gap: "2px" }}>
                          <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "#FFFFFF" }}></span>
                          <span style={{ width: "3px", height: "10px", borderRadius: "2px", background: "#FFFFFF" }}></span>
                          <span style={{ width: "3px", height: "16px", borderRadius: "2px", background: "#FFFFFF" }}></span>
                          <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "#FFFFFF" }}></span>
                          <span style={{ width: "3px", height: "20px", borderRadius: "2px", background: "#FFFFFF" }}></span>
                          <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "#FFFFFF" }}></span>
                          <span style={{ width: "3px", height: "22px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "9px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "14px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "20px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "17px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "11px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "7px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "15px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "19px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "12px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "8px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "13px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                          <span style={{ width: "3px", height: "6px", borderRadius: "2px", background: "rgba(255,255,255,.45)" }}></span>
                        </div>
                        <span style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "rgba(255,255,255,.82)" }}>
                          <span>
                            0:18 · voice note
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                            14:12
                            <svg width="16" height="12" viewBox="0 0 24 16" fill="none" stroke="#F4B728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Read" role="img">
                              <path d="m1.5 8.5 4 4L13 4"></path>
                              <path d="M10.5 12.5 19 4"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div style={{ alignSelf: "flex-start", display: "flex", flexDirection: "column", gap: "6px", maxWidth: "460px" }}>
                      <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", padding: "10px 14px 6px", borderRadius: "16px 16px 16px 4px", display: "flex", flexDirection: "column", gap: "2px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                        <span style={{ fontSize: "15px", lineHeight: "1.6" }}>
                          {"Sure, call me on "}
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "22px", padding: "0 7px", borderRadius: "6px", background: "#EFECE4", border: "1px dashed #CFC9BA", fontSize: "13px", fontWeight: "600", color: "#3D4A43", verticalAlign: "1px", whiteSpace: "nowrap" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 3l18 18"></path>
                              <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                            </svg>
                            [contact hidden]
                          </span>
                          {" so we can sort it quickly"}
                        </span>
                        <span style={{ alignSelf: "flex-end", fontSize: "11px", color: "#5E6862" }}>
                          14:15
                        </span>
                      </div>
                      <p style={{ margin: "0", display: "flex", gap: "6px", padding: "0 4px", fontSize: "12px", lineHeight: "1.4", color: "#5E6862" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                          <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                          <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                        </svg>
                        <span>
                          We hid a phone number. Contact details unlock when you both sign — that's what keeps your money protected.
                        </span>
                      </p>
                    </div>
                    <div role="alert" style={{ background: "#FCEEDD", border: "1px solid #EFCFA9", borderRadius: "16px", padding: "12px 14px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 16px" }}>
                      <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", gap: "10px" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A9520B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                          <path d="M12 4 2.5 20h19z"></path>
                          <path d="M12 10v4M12 17h.01"></path>
                        </svg>
                        <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.45", color: "#15201A" }}>
                          <strong style={{ color: "#7A3B07" }}>
                            Heads up: the owner asked to talk outside Plainly.
                          </strong>
                          {" If anyone asks you to pay before viewing or outside Plainly, don't. Plainly can only protect money paid through Plainly."}
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Link href="/coming-soon/A07-Report" style={{ height: "40px", boxSizing: "border-box", padding: "0 14px", display: "flex", alignItems: "center", gap: "6px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 21V4M5 4h11l-2 4 2 4H5"></path>
                          </svg>
                          Report
                        </Link>
                        <Link href="/coming-soon/A06-SafetyCentre" style={{ height: "40px", padding: "0 10px", display: "flex", alignItems: "center", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
                          How scams work
                        </Link>
                      </div>
                    </div>
                    <div role="status" style={{ background: "#FFFFFF", border: "1px dashed #CFC9BA", borderRadius: "14px", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ height: "24px", padding: "0 8px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#B3261E" }}></span>
                          Strike 1 of 4 · Warning
                        </span>
                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Sender's view · shown to Mrs Adebayo
                        </span>
                      </div>
                      <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.4", color: "#15201A" }}>
                        Your message had contact details. They were hidden. Repeat attempts add strikes and can limit chat.
                      </p>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        {"A 2nd strike within 90 days limits chat for 24 h. "}
                        <Link href="/coming-soon/O07-Strikes" style={{ fontWeight: "600" }}>
                          See strikes and appeal
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div style={{ background: "#FFFFFF", borderTop: "1px solid #E3DFD4", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <button type="button" style={{ height: "32px", padding: "0 12px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                        Is 11:00 Saturday free?
                      </button>
                      <button type="button" style={{ height: "32px", padding: "0 12px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#3D4A43", font: "600 13px 'Figtree', sans-serif" }}>
                        Is there a borehole?
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <button type="button" aria-label="Attach photo, document or location" style={{ flex: "none", width: "44px", height: "44px", border: "0", borderRadius: "999px", background: "transparent", display: "grid", placeItems: "center" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m20 11-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L14 7"></path>
                        </svg>
                      </button>
                      <label style={{ flex: "1", minWidth: "0", height: "44px", boxSizing: "border-box", display: "flex", alignItems: "center", padding: "0 16px", background: "#F6F4EE", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                        <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                          Message Mrs Funke Adebayo
                        </span>
                        <input type="text" placeholder="Write a message" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "500 15px 'Figtree', sans-serif", color: "#15201A" }} />
                      </label>
                      <button type="button" aria-label="Record a voice note, up to 2 minutes" style={{ flex: "none", width: "44px", height: "44px", border: "0", borderRadius: "999px", background: "transparent", display: "grid", placeItems: "center" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                          <path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>
                        </svg>
                      </button>
                      <button type="button" style={{ flex: "none", height: "44px", padding: "0 16px", border: "0", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", font: "700 15px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 12 20 4l-6 16-3-7z"></path>
                        </svg>
                        Send
                      </button>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Phone numbers, emails and links to other apps are hidden automatically.
                    </span>
                  </div>
                </section>
                <aside aria-labelledby="h-listing" style={{ flex: "1 1 280px", minWidth: "0", boxSizing: "border-box", borderLeft: "1px solid #E3DFD4", padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <Link href="/listings/PL-24817" style={{ display: "flex", flexDirection: "column", gap: "10px", textDecoration: "none", color: "#15201A" }}>
                    <span role="img" aria-label="Photo placeholder: living room, 2-bed flat in Alagomeji" style={{ height: "150px", borderRadius: "14px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "10px", boxSizing: "border-box" }}>
                      <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", fontSize: "11px", fontWeight: "700" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#F4B728" }}></span>
                        Live video 2:14
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: "600", color: "#3D4A43" }}>
                        Photo · living room
                      </span>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <strong id="h-listing" style={{ fontSize: "16px" }}>
                        2-bed flat · Alagomeji, Yaba
                      </strong>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        PL-24817 · 2 bed · 2 bath · 85 m² · from 1 Nov 2026
                      </span>
                    </span>
                  </Link>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E2F0E7", color: "#0A4630", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                        <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                      </svg>
                      Owner verified
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                      Fair Terms
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                      Listed by owner
                    </span>
                  </div>
                  <span style={{ fontSize: "12px", color: "#5E6862" }}>
                    Confirmed available 2 days ago · ID 12 Oct 2026, Land Use Charge demand reviewed 13 Oct 2026.
                  </span>
                  <section aria-labelledby="h-cost" style={{ background: "#F6F4EE", border: "1px solid #E3DFD4", borderRadius: "14px", padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span id="h-cost" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Total to move in
                    </span>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "28px", lineHeight: "1.1", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      ₦2,200,000
                    </span>
                    <dl style={{ margin: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "13px", color: "#3D4A43" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Rent · 1 year advance
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", color: "#15201A", fontWeight: "600" }}>
                          ₦2,000,000
                        </dd>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Caution deposit
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", color: "#15201A", fontWeight: "600" }}>
                          ₦200,000
                        </dd>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Service charge
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", color: "#15201A", fontWeight: "600" }}>
                          ₦0
                        </dd>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Agreement fee
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", color: "#15201A", fontWeight: "600" }}>
                          ₦0
                        </dd>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <dt>
                          Agency or inspection fee
                        </dt>
                        <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", color: "#15201A", fontWeight: "600" }}>
                          None
                        </dd>
                      </div>
                    </dl>
                    <Link href="/coming-soon/S08-Cost" style={{ fontSize: "13px", fontWeight: "600" }}>
                      See full breakdown
                    </Link>
                  </section>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Link href="/coming-soon/S10-Viewing" style={{ height: "44px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                        <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                      </svg>
                      Book a free viewing
                    </Link>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Viewings are always free. Never pay anything at a viewing.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "12px", borderTop: "1px solid #E3DFD4" }}>
                    <Link href="/coming-soon/A07-Report" style={{ height: "40px", boxSizing: "border-box", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 21V4M5 4h11l-2 4 2 4H5"></path>
                      </svg>
                      Report
                    </Link>
                    <button type="button" style={{ height: "40px", padding: "0 12px", borderRadius: "12px", border: "0", background: "transparent", color: "#8C1D17", font: "700 14px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M5.6 5.6l12.8 12.8"></path>
                      </svg>
                      Block
                    </button>
                  </div>
                  <span style={{ fontSize: "12px", color: "#5E6862" }}>
                    Blocking stops messages and calls. The owner isn't told you blocked them.
                  </span>
                  <div style={{ marginTop: "auto", background: "#0A4630", borderRadius: "14px", padding: "12px 14px", display: "flex", gap: "10px", alignItems: "flex-start", color: "#FFFFFF" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4B728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                      <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                      <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                    </svg>
                    <span style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1.4" }}>
                      Plainly can only protect money paid through Plainly.
                    </span>
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
