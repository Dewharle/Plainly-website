"use client";

// Generated from Claude Design: W07-Admin.dc.html (ADM-04 · Leakage investigation)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class AdminLeakageLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function AdminLeakage() {
  useDCLogic(AdminLeakageLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1350px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.5", display: "flex", flexDirection: "column" }}>
        <header style={{ minHeight: "64px", boxSizing: "border-box", background: "#FFFFFF", borderBottom: "1px solid #E3DFD4", padding: "10px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px" }}>
          <Link href="/browse" aria-label="Plainly home, back office" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#15201A" }}>
            <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
              <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
              <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
            </svg>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "22px", letterSpacing: "-0.03em" }}>
              plainly
            </span>
            <span style={{ height: "26px", padding: "0 10px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#15201A", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Back office
            </span>
          </Link>
          <label style={{ flex: "1 1 220px", maxWidth: "360px", height: "42px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px", background: "#F6F4EE", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
            <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Search case, listing or user ID
            </span>
            <input type="search" placeholder="Case, listing or user ID" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "500 14px 'Figtree', sans-serif", color: "#15201A" }} />
          </label>
          <div style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
            <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 3l18 18"></path>
                <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
              </svg>
              PII masked by default
            </span>
            <button type="button" aria-label="Notifications" style={{ width: "44px", height: "44px", borderRadius: "999px", border: "0", background: "transparent", display: "grid", placeItems: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"></path>
                <path d="M10 21h4"></path>
              </svg>
            </button>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "34px", height: "34px", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "13px" }}>
                KO
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                <strong style={{ fontSize: "14px" }}>
                  Kemi O.
                </strong>
                <span style={{ fontSize: "12px", color: "#5E6862" }}>
                  Fraud analyst
                </span>
              </span>
            </span>
          </div>
        </header>
        <div style={{ flex: "1", display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
          <nav aria-label="Back office" style={{ flex: "1 1 248px", maxWidth: "248px", boxSizing: "border-box", background: "#15201A", padding: "20px 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ padding: "4px 12px 6px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8E9A93" }}>
              Queues
            </span>
            <Link href="/admin/verification" style={{ height: "44px", padding: "0 12px 0 22px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
              </svg>
              KYC exceptions
            </Link>
            <Link href="/admin/verification" style={{ height: "44px", padding: "0 12px 0 22px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
              </svg>
              Ownership
            </Link>
            <Link href="/admin/verification" style={{ height: "44px", padding: "0 12px 0 22px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4M9 12h6M9 16h6"></path>
              </svg>
              Title
            </Link>
            <Link href="/admin/verification" style={{ height: "44px", padding: "0 12px 0 22px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                <path d="m8.5 12 2.5 2.5 4.5-5"></path>
              </svg>
              Agents
            </Link>
            <span style={{ height: "1px", background: "#26342C", margin: "10px 4px" }}></span>
            <Link href="/admin/moderation" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 21V4M5 4h11l-2 4 2 4H5"></path>
              </svg>
              Moderation
            </Link>
            <Link href="/admin/disputes" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Disputes
            </Link>
            <Link href="/admin/leakage" aria-current="page" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", background: "#26342C", color: "#FFFFFF", fontWeight: "700", fontSize: "14px", position: "relative" }}>
              <span style={{ position: "absolute", left: "4px", top: "50%", width: "6px", height: "6px", marginTop: "-3px", borderRadius: "99px", background: "#F4B728" }} aria-hidden="true"></span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
              </svg>
              Leakage cases
              <span style={{ marginLeft: "auto", minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#F4B728", color: "#15201A", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                14
              </span>
            </Link>
            <Link href="/admin/leakage" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 4 2.5 20h19z"></path>
                <path d="M12 10v4M12 17h.01"></path>
              </svg>
              Fraud ops
            </Link>
            <Link href="/admin/revenue" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"></path>
              </svg>
              Revenue
            </Link>
            <Link href="/admin/config" style={{ minHeight: "44px", padding: "6px 12px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"></path>
                <circle cx="16" cy="6" r="2"></circle>
                <circle cx="10" cy="12" r="2"></circle>
                <circle cx="18" cy="18" r="2"></circle>
              </svg>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
                Config
                <span style={{ fontSize: "12px", fontWeight: "500", color: "#8E9A93" }}>
                  Two-person approval
                </span>
              </span>
            </Link>
            <Link href="/admin/config" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
              </svg>
              Audit log
            </Link>
            <span style={{ marginTop: "16px", padding: "12px", borderRadius: "12px", background: "#1D2A23", color: "#C9D2CC", fontSize: "12px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F4B728" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
              </svg>
              Least-privilege role. Every action is audited.
            </span>
          </nav>
          <main style={{ flex: "999 1 560px", minWidth: "0", boxSizing: "border-box", padding: "32px" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 20px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                      Anti-circumvention
                    </span>
                    <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                      Leakage cases
                    </h1>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8C1D17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      1 decision due in under 6 h
                    </span>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
                      </svg>
                      Owner disputes: decide within 5 business days
                    </span>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                      0 SLA breaches
                    </span>
                  </div>
                </div>
                <div role="tablist" aria-label="Case stage" style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "4px", background: "#EFECE4", borderRadius: "12px", alignSelf: "flex-start", maxWidth: "100%" }}>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Open "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      14
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Evidence "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      6
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="true" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "#15201A", color: "#FFFFFF", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Decision "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#F4B728" }}>
                      3
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Invoiced "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      9
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Recovered "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      21
                    </span>
                  </button>
                </div>
              </div>
              <section aria-labelledby="case-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "18px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "16px 24px" }}>
                  <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <Link href="/admin/leakage" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 12H5M11 6l-6 6 6 6"></path>
                      </svg>
                      Decision queue
                    </Link>
                    <h2 id="case-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "26px", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
                      Case LK-0391 · Surulere self-contain (PL-23102)
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#A9520B" }}></span>
                        Awaiting decision
                      </span>
                      <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8C1D17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                        Decide in 5 h 12 m
                      </span>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Opened automatically 19 Oct (score above threshold) · assigned to you
                      </span>
                    </div>
                  </div>
                  <div style={{ flex: "0 1 300px", minWidth: "240px", display: "flex", flexDirection: "column", gap: "8px", padding: "14px 16px", borderRadius: "14px", background: "#F6F4EE", border: "1px solid #E3DFD4" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                        {"Leakage score "}
                        <span className="tip">
                          {" "}
                          <button type="button" aria-label="How the leakage score works" aria-describedby="score-tip" style={{ width: "28px", height: "28px", border: "0", background: "transparent", borderRadius: "999px", display: "grid", placeItems: "center", padding: "0" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="9"></circle>
                              <path d="M12 11v5M12 8h.01"></path>
                            </svg>
                          </button>
                          {" "}
                          <span role="tooltip" id="score-tip">
                            Leakage score: viewings then 'let elsewhere', quick relist, introductions without closes, redaction events, seeker outcome answers.
                          </span>
                          {" "}
                        </span>
                      </span>
                      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                        78
                        <span style={{ fontSize: "14px", color: "#5E6862", fontWeight: "500" }}>
                          /100
                        </span>
                      </span>
                    </div>
                    <div role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="78" aria-label="Leakage score 78 of 100, high" style={{ height: "10px", borderRadius: "999px", background: "#E3DFD4", position: "relative", overflow: "hidden" }}>
                      {" "}
                      <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "78%", background: "#B3261E", borderRadius: "999px" }}></span>
                      {" "}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#5E6862" }}>
                      <span>
                        Low
                      </span>
                      <span>
                        Review threshold
                      </span>
                      <span style={{ color: "#8C1D17", fontWeight: "700" }}>
                        High
                      </span>
                    </div>
                  </div>
                </div>
                <ol aria-label="Case stages" style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))", gap: "8px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#E3F4EA", color: "#145C37", fontSize: "13px", fontWeight: "700" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                    </svg>
                    Case open
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#E3F4EA", color: "#145C37", fontSize: "13px", fontWeight: "700" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                    </svg>
                    Evidence complete
                  </li>
                  <li aria-current="step" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#15201A", color: "#FFFFFF", fontSize: "13px", fontWeight: "700" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#F4B728" }}></span>
                    Decision
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#EFECE4", color: "#5E6862", fontSize: "13px", fontWeight: "600" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "9px", border: "1.5px solid #5E6862", boxSizing: "border-box" }}></span>
                    Invoice
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#EFECE4", color: "#5E6862", fontSize: "13px", fontWeight: "600" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "9px", border: "1.5px solid #5E6862", boxSizing: "border-box" }}></span>
                    Recovered
                  </li>
                </ol>
              </section>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <section aria-labelledby="ev-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 16px", borderBottom: "1px solid #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <h3 id="ev-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                          Evidence timeline
                        </h3>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          7 records · all times WAT
                        </span>
                      </div>
                      <span style={{ height: "28px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                          <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                        </svg>
                        Introduction records are immutable · kept 24 months
                      </span>
                    </div>
                    <ol style={{ margin: "0", padding: "8px 20px 12px", listStyle: "none", display: "flex", flexDirection: "column" }}>
                      <li style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "12px 0", borderBottom: "1px solid #EFECE4", alignItems: "start" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#E5EEFB", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 5h16v11H9l-5 4z"></path>
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                          <strong style={{ fontSize: "14px" }}>
                            First chat message · introduction record created
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Seeker messaged owner through masked chat. Record IR-77104.
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Source: Chat
                          </span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#3D4A43", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", textAlign: "right" }}>
                          2 Oct
                          <br />
                          <span style={{ color: "#5E6862" }}>
                            14:08
                          </span>
                        </span>
                      </li>
                      <li style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "12px 0", borderBottom: "1px solid #EFECE4", alignItems: "start" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#E5EEFB", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"></path>
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Masked call
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Seeker called owner through the masked number. Neither saw the other's number.
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Source: Masked calling
                          </span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#3D4A43", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", textAlign: "right" }}>
                          3 Oct
                          <br />
                          <span style={{ color: "#5E6862" }}>
                            18:22
                          </span>
                        </span>
                      </li>
                      <li style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "12px 0", borderBottom: "1px solid #EFECE4", alignItems: "start" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#E2F0E7", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                            <circle cx="12" cy="9.5" r="2.5"></circle>
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Viewing acknowledgment accepted · address revealed
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Seeker accepted the viewing acknowledgment, including the introduction-fee clause; exact address shown.
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Source: Viewings
                          </span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#3D4A43", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", textAlign: "right" }}>
                          5 Oct
                          <br />
                          <span style={{ color: "#5E6862" }}>
                            10:41
                          </span>
                        </span>
                      </li>
                      <li style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "12px", margin: "4px -12px", borderRadius: "12px", background: "#FCE8E6", alignItems: "start" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 3l18 18"></path>
                            <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                          <strong style={{ fontSize: "14px", color: "#8C1D17" }}>
                            Redaction event: phone number
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                            {"Owner sent “call me on "}
                            <span style={{ height: "22px", padding: "0 7px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#15201A", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                              [contact hidden]
                            </span>
                            ” after the viewing.
                          </span>
                          <span style={{ alignSelf: "flex-start", height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", color: "#8C1D17", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C1D17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M5 21V4M5 4h11l-2 4 2 4H5"></path>
                            </svg>
                            Strike 1 · warning issued to owner
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Source: Chat scanner
                          </span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#3D4A43", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", textAlign: "right" }}>
                          5 Oct
                          <br />
                          <span style={{ color: "#5E6862" }}>
                            16:05
                          </span>
                        </span>
                      </li>
                      <li style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "12px 0", borderBottom: "1px solid #EFECE4", alignItems: "start" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#FCEEDD", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A9520B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 3h8l4 4v14H6z"></path>
                            <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Owner close-out declaration
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            “Let to someone found elsewhere.” Listing paused 4 days after the viewing.
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Source: Close-out declaration
                          </span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#3D4A43", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", textAlign: "right" }}>
                          9 Oct
                          <br />
                          <span style={{ color: "#5E6862" }}>
                            09:12
                          </span>
                        </span>
                      </li>
                      <li style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "12px 0", borderBottom: "1px solid #EFECE4", alignItems: "start" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#FCEEDD", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A9520B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="8" r="4"></circle>
                            <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Seeker outcome check
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            “Did you rent this place?” → “Yes, I agreed directly with the owner.”
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Source: Outcome check (S14)
                          </span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#3D4A43", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", textAlign: "right" }}>
                          19 Oct
                          <br />
                          <span style={{ color: "#5E6862" }}>
                            11:30
                          </span>
                        </span>
                      </li>
                      <li style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "12px 0", alignItems: "start" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#FCEEDD", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A9520B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Tenancy registration by seeker
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Seeker registered a tenancy at this property's address.
                          </span>
                          <span style={{ fontSize: "12px", color: "#5E6862" }}>
                            Source: Tenancy registration
                          </span>
                        </span>
                        <span style={{ fontSize: "13px", color: "#3D4A43", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", textAlign: "right" }}>
                          19 Oct
                          <br />
                          <span style={{ color: "#5E6862" }}>
                            11:34
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section aria-labelledby="pt-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <h3 id="pt-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                        Parties
                      </h3>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#5E6862" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 3l18 18"></path>
                          <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                        </svg>
                        Personal details masked
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "12px" }}>
                      <div style={{ border: "1px solid #E3DFD4", borderRadius: "14px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="8" r="4"></circle>
                              <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                            </svg>
                          </span>
                          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                              Owner
                            </span>
                            <strong style={{ fontSize: "15px", letterSpacing: "0.04em" }}>
                              A•••• O•••••
                            </strong>
                          </span>
                        </div>
                        <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 12px", fontSize: "13px" }}>
                          <dt style={{ color: "#5E6862" }}>
                            User ID
                          </dt>
                          <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                            U-118204
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Phone
                          </dt>
                          <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                            +234 ••• ••• 4417
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Tiers
                          </dt>
                          <dd style={{ margin: "0" }}>
                            ID verified · Owner verified
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Strikes
                          </dt>
                          <dd style={{ margin: "0" }}>
                            1 in last 90 days
                          </dd>
                        </dl>
                        <span className="tip" style={{ alignSelf: "flex-start" }}>
                          {" "}
                          <button type="button" aria-describedby="reveal-tip-1" style={{ height: "36px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                            </svg>
                            Reveal
                          </button>
                          {" "}
                          <span role="tooltip" id="reveal-tip-1">
                            You'll need to give a reason. Every reveal is logged, and unusual volume alerts your lead.
                          </span>
                          {" "}
                        </span>
                      </div>
                      <div style={{ border: "1px solid #E3DFD4", borderRadius: "14px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="8" r="4"></circle>
                              <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                            </svg>
                          </span>
                          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                              Seeker
                            </span>
                            <strong style={{ fontSize: "15px", letterSpacing: "0.04em" }}>
                              C•••• E•••
                            </strong>
                          </span>
                        </div>
                        <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 12px", fontSize: "13px" }}>
                          <dt style={{ color: "#5E6862" }}>
                            User ID
                          </dt>
                          <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                            U-203377
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Phone
                          </dt>
                          <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                            +234 ••• ••• 0952
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Tiers
                          </dt>
                          <dd style={{ margin: "0" }}>
                            ID verified
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Strikes
                          </dt>
                          <dd style={{ margin: "0" }}>
                            None
                          </dd>
                        </dl>
                        <span className="tip" style={{ alignSelf: "flex-start" }}>
                          {" "}
                          <button type="button" aria-describedby="reveal-tip-2" style={{ height: "36px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                            </svg>
                            Reveal
                          </button>
                          {" "}
                          <span role="tooltip" id="reveal-tip-2">
                            You'll need to give a reason. Every reveal is logged, and unusual volume alerts your lead.
                          </span>
                          {" "}
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Seekers never pay introduction fees. Only the owner can be invoiced.
                    </span>
                  </section>
                </div>
                <aside style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <section aria-labelledby="dec-h" style={{ background: "#FFFFFF", border: "1.5px solid #15201A", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h3 id="dec-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        Decision
                      </h3>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Introduction window: 12 months from first introduction
                      </span>
                    </div>
                    <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <legend style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                        Outcome
                      </legend>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "2px solid #0E5A3C", background: "#E2F0E7", cursor: "pointer" }}>
                        <input type="radio" name="outcome" defaultChecked style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Confirm off-platform close
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            {"Issue introduction fee invoice "}
                            <strong style={{ color: "#15201A", fontVariantNumeric: "tabular-nums" }}>
                              ₦14,500
                            </strong>
                          </span>
                        </span>
                      </label>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", cursor: "pointer" }}>
                        <input type="radio" name="outcome" style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Not enough evidence
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Close case, no invoice
                          </span>
                        </span>
                      </label>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", cursor: "pointer" }}>
                        <input type="radio" name="outcome" style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            {"Escalate to trust & safety"}
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            For suspected fraud or repeat behaviour
                          </span>
                        </span>
                      </label>
                    </fieldset>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "12px 14px", borderRadius: "12px", background: "#F6F4EE", fontSize: "13px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                        Invoice basis
                      </span>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Closing fee that would have applied
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums" }}>
                          ₦19,500
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Less listing fee paid
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums" }}>
                          −₦5,000
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", paddingTop: "6px", borderTop: "1px dashed #CFC9BA" }}>
                        <strong>
                          Introduction fee
                        </strong>
                        <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "16px", fontVariantNumeric: "tabular-nums" }}>
                          ₦14,500
                        </strong>
                      </div>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        No penalty uplift. Owner can dispute within 7 days; decision within 5 business days.
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="reason" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Reason template
                      </label>
                      <div style={{ position: "relative" }}>
                        <select id="reason" style={{ width: "100%", height: "44px", boxSizing: "border-box", padding: "0 40px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "500 14px 'Figtree', sans-serif", color: "#15201A", appearance: "none", WebkitAppearance: "none" }}>
                          <option>
                            Seeker confirmed direct deal + tenancy registered
                          </option>
                          <option>
                            Owner declared let to an introduced party
                          </option>
                          <option>
                            Viewing followed by “let elsewhere” and quick relist
                          </option>
                          <option>
                            Other (explain in note)
                          </option>
                        </select>
                        {" "}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: "12px", top: "13px", pointerEvents: "none" }}>
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                        {" "}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="note" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Note for the evidence summary
                      </label>
                      <textarea defaultValue={"Address revealed 5 Oct; owner declared \"let elsewhere\" 9 Oct; seeker confirmed a direct deal and registered the tenancy 19 Oct."} id="note" rows="3" style={{ boxSizing: "border-box", width: "100%", padding: "10px 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "400 14px/1.45 'Figtree', sans-serif", color: "#15201A", resize: "vertical" }} />
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        The owner sees this summary on the invoice.
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 14px", borderRadius: "12px", background: "#E5EEFB" }}>
                      <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "999px", border: "1.5px dashed #1D5FB8", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="8" r="4"></circle>
                          <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                        </svg>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", fontSize: "13px", color: "#164A90" }}>
                        <strong style={{ fontSize: "14px" }}>
                          Requires second approver (four-eyes)
                        </strong>
                        A finance or senior fraud reviewer is assigned when you submit. You can't approve your own decision.
                      </span>
                    </div>
                    <button type="button" style={{ height: "48px", border: "0", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", font: "700 15px 'Figtree', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 12 20 4l-6 16-3-7z"></path>
                      </svg>
                      Submit for approval
                    </button>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#5E6862" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Every action is audited.
                    </span>
                  </section>
                  <section aria-labelledby="rev-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                      <h3 id="rev-h" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                        Introduction fees · this month
                      </h3>
                      <Link href="/admin/revenue" style={{ fontSize: "13px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap" }}>
                        Revenue
                      </Link>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ color: "#3D4A43", fontWeight: "600" }}>
                          Invoiced
                        </span>
                        <span style={{ fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          ₦[value]
                        </span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "6px", background: "#EFECE4", overflow: "hidden" }}>
                        <span style={{ display: "block", height: "100%", width: "100%", background: "#15201A", borderRadius: "6px" }}></span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ color: "#3D4A43", fontWeight: "600" }}>
                          Recovered
                        </span>
                        <span style={{ fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          ₦[value]
                        </span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "6px", background: "#EFECE4", overflow: "hidden" }}>
                        <span style={{ display: "block", height: "100%", width: "62%", background: "#1C7A4A", borderRadius: "6px" }}></span>
                      </div>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Bar lengths are placeholders. Figures refresh daily and reconcile to the billing ledger.
                    </span>
                    <Link href="/admin/config" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", paddingTop: "10px", borderTop: "1px solid #E3DFD4" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
                      </svg>
                      Audit trail for LK-0391
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 6 6 6-6 6"></path>
                      </svg>
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
