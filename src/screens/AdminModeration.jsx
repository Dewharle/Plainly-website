"use client";

// Generated from Claude Design: W16-AdminModeration.dc.html (ADM-02 · Listing moderation)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class AdminModerationLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function AdminModeration() {
  useDCLogic(AdminModerationLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1840px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.5", display: "flex", flexDirection: "column" }}>
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
                NE
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                <strong style={{ fontSize: "14px" }}>
                  Ngozi E.
                </strong>
                <span style={{ fontSize: "12px", color: "#5E6862" }}>
                  Content moderator
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
            <Link href="/admin/moderation" aria-current="page" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", background: "#26342C", color: "#FFFFFF", fontWeight: "700", fontSize: "14px", position: "relative" }}>
              <span style={{ position: "absolute", left: "4px", top: "50%", width: "6px", height: "6px", marginTop: "-3px", borderRadius: "99px", background: "#F4B728" }} aria-hidden="true"></span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 21V4M5 4h11l-2 4 2 4H5"></path>
              </svg>
              Moderation
              <span style={{ marginLeft: "auto", minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#F4B728", color: "#15201A", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                20
              </span>
            </Link>
            <Link href="/admin/disputes" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Disputes
            </Link>
            <Link href="/admin/leakage" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", color: "#C9D2CC", fontWeight: "600", fontSize: "14px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9D2CC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 20V4l10 16V4M4 10h16M4 14h16"></path>
              </svg>
              Leakage cases
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
                      Listing quality
                    </span>
                    <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                      Moderation
                    </h1>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      Moderate within 4 business hours
                    </span>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                      Oldest item 2 h 10 m
                    </span>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                      0 SLA breaches
                    </span>
                  </div>
                </div>
                <div role="group" aria-label="Filter queue" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <button type="button" aria-pressed="true" style={{ height: "38px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", border: "0", background: "#15201A", color: "#FFFFFF", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Suspected duplicates "}
                    <span style={{ minWidth: "22px", height: "22px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "#F4B728", color: "#15201A", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                      3
                    </span>
                  </button>
                  <button type="button" aria-pressed="false" style={{ height: "38px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", color: "#15201A", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Flagged media "}
                    <span style={{ minWidth: "22px", height: "22px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                      5
                    </span>
                  </button>
                  <button type="button" aria-pressed="false" style={{ height: "38px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", color: "#15201A", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Price / terms changes "}
                    <span style={{ minWidth: "22px", height: "22px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                      4
                    </span>
                  </button>
                  <button type="button" aria-pressed="false" style={{ height: "38px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", color: "#15201A", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Text flags "}
                    <span style={{ minWidth: "22px", height: "22px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                      2
                    </span>
                  </button>
                  <button type="button" aria-pressed="false" style={{ height: "38px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", border: "1px solid #CFC9BA", background: "#FFFFFF", color: "#15201A", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Reports "}
                    <span style={{ minWidth: "22px", height: "22px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                      6
                    </span>
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <section aria-labelledby="dup-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "10px 20px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                        <h2 id="dup-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
                          MOD-3318 · Suspected duplicate
                        </h2>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          Raised automatically 13 Oct 09:51 · 1 of 3 duplicates · assigned to you
                        </span>
                      </div>
                      <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                        1 h 50 m left
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(170px, 100%), 1fr))", gap: "10px" }}>
                      <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#FCE8E6", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#8C1D17" }}>
                          Media hash match
                        </span>
                        <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "26px", fontVariantNumeric: "tabular-nums", color: "#8C1D17", letterSpacing: "-0.02em" }}>
                          94%
                        </strong>
                        <span style={{ fontSize: "12px", color: "#3D4A43" }}>
                          9 of 11 photos, same frames
                        </span>
                      </div>
                      <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#FCEEDD", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#7A3B07" }}>
                          Map pins
                        </span>
                        <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "26px", fontVariantNumeric: "tabular-nums", color: "#7A3B07", letterSpacing: "-0.02em" }}>
                          38 m apart
                        </strong>
                        <span style={{ fontSize: "12px", color: "#3D4A43" }}>
                          Same street block
                        </span>
                      </div>
                      <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#FCEEDD", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#7A3B07" }}>
                          Specs
                        </span>
                        <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "26px", color: "#7A3B07", letterSpacing: "-0.02em" }}>
                          Identical
                        </strong>
                        <span style={{ fontSize: "12px", color: "#3D4A43" }}>
                          2 bed · 85 m² · 2nd floor
                        </span>
                      </div>
                      <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#EFECE4", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                          Owner mandate
                        </span>
                        <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "26px", color: "#15201A", letterSpacing: "-0.02em" }}>
                          None on file
                        </strong>
                        <span style={{ fontSize: "12px", color: "#3D4A43" }}>
                          For the agent listing
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "12px" }}>
                      <article style={{ border: "2px solid #0E5A3C", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                        <div style={{ height: "150px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", position: "relative", display: "flex", alignItems: "flex-end", padding: "10px", boxSizing: "border-box" }}>
                          <span style={{ position: "absolute", top: "10px", left: "10px", height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", color: "#0A4630", fontSize: "12px", fontWeight: "700" }}>
                            Keeps · owner's listing
                          </span>
                          <span style={{ fontSize: "12px", fontWeight: "600", color: "#3D4A43" }}>
                            Photo 1 · living room
                          </span>
                        </div>
                        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "baseline" }}>
                            <strong style={{ fontSize: "15px" }}>
                              2-bed flat · Alagomeji, Yaba
                            </strong>
                            <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                              PL-24817
                            </span>
                          </div>
                          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                            ₦2,000,000
                            <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "13px", fontWeight: "500", color: "#5E6862" }}>
                              /yr · ₦2,200,000 to move in
                            </span>
                          </span>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                              Listed by owner
                            </span>
                            <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "4px", borderRadius: "999px", background: "#E2F0E7", color: "#0A4630", fontSize: "12px", fontWeight: "700" }}>
                              Owner verified
                            </span>
                            <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700" }}>
                              <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#F4B728" }}></span>
                              Live video
                            </span>
                          </div>
                          <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 12px", fontSize: "13px" }}>
                            <dt style={{ color: "#5E6862" }}>
                              Status
                            </dt>
                            <dd style={{ margin: "0" }}>
                              Live since 12 Oct
                            </dd>
                            <dt style={{ color: "#5E6862" }}>
                              Lister
                            </dt>
                            <dd style={{ margin: "0", letterSpacing: "0.04em" }}>
                              F•••• A••••• (U-104220)
                            </dd>
                            <dt style={{ color: "#5E6862" }}>
                              Fees
                            </dt>
                            <dd style={{ margin: "0" }}>
                              No agency fee
                            </dd>
                          </dl>
                        </div>
                      </article>
                      <article style={{ border: "2px solid #B3261E", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                        <div style={{ height: "150px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", position: "relative", display: "flex", alignItems: "flex-end", padding: "10px", boxSizing: "border-box" }}>
                          <span style={{ position: "absolute", top: "10px", left: "10px", height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", color: "#8C1D17", fontSize: "12px", fontWeight: "700" }}>
                            Duplicate · new submission
                          </span>
                          <span style={{ fontSize: "12px", fontWeight: "600", color: "#3D4A43" }}>
                            Photo 1 · same frame, cropped
                          </span>
                        </div>
                        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "baseline" }}>
                            <strong style={{ fontSize: "15px" }}>
                              2-bed flat · Yaba, near Alagomeji
                            </strong>
                            <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                              PL-25230
                            </span>
                          </div>
                          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                            ₦2,200,000
                            <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "13px", fontWeight: "500", color: "#5E6862" }}>
                              /yr · ₦2,640,000 to move in
                            </span>
                          </span>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                              Listed by agent
                            </span>
                            <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "4px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                              ID verified
                            </span>
                            <span style={{ height: "24px", padding: "0 8px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                              <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#5E6862" }}></span>
                              Uploaded video
                            </span>
                          </div>
                          <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 12px", fontSize: "13px" }}>
                            <dt style={{ color: "#5E6862" }}>
                              Status
                            </dt>
                            <dd style={{ margin: "0" }}>
                              Submitted 13 Oct 09:48 · not live
                            </dd>
                            <dt style={{ color: "#5E6862" }}>
                              Lister
                            </dt>
                            <dd style={{ margin: "0", letterSpacing: "0.04em" }}>
                              [agency] · K•••• D•••• (U-208915)
                            </dd>
                            <dt style={{ color: "#5E6862" }}>
                              Fees
                            </dt>
                            <dd style={{ margin: "0" }}>
                              Agency fee 10% ₦220,000 itemised
                            </dd>
                          </dl>
                        </div>
                      </article>
                    </div>
                    <div style={{ borderTop: "1px solid #E3DFD4", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px" }}>
                        <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                          Property history · PR-08812
                        </h3>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          One property record, all listings linked
                        </span>
                      </div>
                      <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "8px", fontSize: "13px" }}>
                        <li style={{ padding: "10px 12px", borderRadius: "12px", background: "#F6F4EE", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                            12 Oct 15:05
                          </span>
                          <strong>
                            Owner listed PL-24817
                          </strong>
                          <span style={{ color: "#3D4A43" }}>
                            Live walkthrough on site
                          </span>
                        </li>
                        <li style={{ padding: "10px 12px", borderRadius: "12px", background: "#F6F4EE", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                            13 Oct 08:40
                          </span>
                          <strong>
                            Owner verified
                          </strong>
                          <span style={{ color: "#3D4A43" }}>
                            LUC demand reviewed
                          </span>
                        </li>
                        <li style={{ padding: "10px 12px", borderRadius: "12px", background: "#FCE8E6", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ color: "#8C1D17", fontVariantNumeric: "tabular-nums" }}>
                            13 Oct 09:48
                          </span>
                          <strong style={{ color: "#8C1D17" }}>
                            Agent submitted PL-25230
                          </strong>
                          <span style={{ color: "#3D4A43" }}>
                            No mandate from this owner
                          </span>
                        </li>
                      </ol>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", paddingTop: "14px", borderTop: "1px solid #E3DFD4" }}>
                      <span className="tip">
                        {" "}
                        <button type="button" aria-describedby="merge-tip" style={{ height: "44px", padding: "0 16px", border: "0", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", font: "700 14px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 4v6a4 4 0 0 0 4 4h8M14 10l4 4-4 4"></path>
                          </svg>
                          Merge · owner's listing stays
                        </button>
                        {" "}
                        <span role="tooltip" id="merge-tip">
                          BRL-02: one property, one live listing. The owner's own listing stays; the agent's is closed and any enquiries move across.
                        </span>
                        {" "}
                      </span>
                      <button type="button" style={{ height: "44px", padding: "0 14px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 14px 'Figtree', sans-serif" }}>
                        Approve
                      </button>
                      <button type="button" style={{ height: "44px", padding: "0 14px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 14px 'Figtree', sans-serif" }}>
                        Request changes
                      </button>
                      <button type="button" style={{ height: "44px", padding: "0 14px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #B3261E", color: "#B3261E", font: "700 14px 'Figtree', sans-serif" }}>
                        Reject
                      </button>
                      <Link href="/admin/leakage" style={{ height: "44px", padding: "0 14px", boxSizing: "border-box", borderRadius: "12px", background: "#B3261E", color: "#FFFFFF", font: "700 14px 'Figtree', sans-serif", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                          <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                        </svg>
                        {"Freeze & route to fraud"}
                      </Link>
                    </div>
                  </section>
                  <section aria-labelledby="media-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                      <h3 id="media-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                        Flagged media · 5
                      </h3>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Next in queue · blur, replace or reject per photo
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "4px" }}>
                      <figure style={{ margin: "0", flex: "0 0 200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ height: "130px", borderRadius: "12px", border: "2px solid #B3261E", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", position: "relative", boxSizing: "border-box" }}>
                          {" "}
                          <span style={{ position: "absolute", left: "30px", top: "46px", width: "120px", height: "30px", border: "2px solid #B3261E", borderRadius: "4px", background: "rgba(252,232,230,.85)", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#8C1D17", fontVariantNumeric: "tabular-nums" }}>
                            080• ••• ••••
                          </span>
                          {" "}
                        </div>
                        <figcaption style={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: "13px" }}>
                          <strong style={{ color: "#8C1D17" }}>
                            OCR: phone number on gate sign
                          </strong>
                          <span style={{ color: "#5E6862" }}>
                            PL-25198 · photo 4
                          </span>
                        </figcaption>
                      </figure>
                      <figure style={{ margin: "0", flex: "0 0 200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ height: "130px", borderRadius: "12px", border: "2px solid #B3261E", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", position: "relative", boxSizing: "border-box" }}>
                          {" "}
                          <span style={{ position: "absolute", right: "14px", bottom: "14px", width: "110px", height: "28px", border: "2px solid #B3261E", borderRadius: "4px", background: "rgba(252,232,230,.85)", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#8C1D17", fontVariantNumeric: "tabular-nums" }}>
                            Call 07• •••
                          </span>
                          {" "}
                        </div>
                        <figcaption style={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: "13px" }}>
                          <strong style={{ color: "#8C1D17" }}>
                            OCR: number painted on wall
                          </strong>
                          <span style={{ color: "#5E6862" }}>
                            PL-25211 · photo 9
                          </span>
                        </figcaption>
                      </figure>
                      <figure style={{ margin: "0", flex: "0 0 200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ height: "130px", borderRadius: "12px", border: "2px solid #A9520B", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", position: "relative", boxSizing: "border-box" }}>
                          {" "}
                          <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%) rotate(-12deg)", padding: "4px 10px", border: "2px dashed #A9520B", borderRadius: "4px", background: "rgba(252,238,221,.85)", fontSize: "12px", fontWeight: "700", color: "#7A3B07", whiteSpace: "nowrap" }}>
                            [other platform] watermark
                          </span>
                          {" "}
                        </div>
                        <figcaption style={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: "13px" }}>
                          <strong style={{ color: "#7A3B07" }}>
                            Another platform's watermark
                          </strong>
                          <span style={{ color: "#5E6862" }}>
                            PL-25230 · photo 2
                          </span>
                        </figcaption>
                      </figure>
                      <figure style={{ margin: "0", flex: "0 0 200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ height: "130px", borderRadius: "12px", border: "2px solid #A9520B", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", position: "relative", boxSizing: "border-box" }}>
                          {" "}
                          <span style={{ position: "absolute", left: "12px", top: "12px", padding: "4px 8px", border: "2px dashed #A9520B", borderRadius: "4px", background: "rgba(252,238,221,.85)", fontSize: "12px", fontWeight: "700", color: "#7A3B07" }}>
                            [other platform] logo
                          </span>
                          {" "}
                        </div>
                        <figcaption style={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: "13px" }}>
                          <strong style={{ color: "#7A3B07" }}>
                            Another platform's watermark
                          </strong>
                          <span style={{ color: "#5E6862" }}>
                            PL-25230 · photo 5
                          </span>
                        </figcaption>
                      </figure>
                      <figure style={{ margin: "0", flex: "0 0 200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ height: "130px", borderRadius: "12px", border: "2px solid #B3261E", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", position: "relative", boxSizing: "border-box" }}>
                          {" "}
                          <span style={{ position: "absolute", left: "24px", bottom: "20px", width: "96px", height: "26px", border: "2px solid #B3261E", borderRadius: "4px", background: "rgba(252,232,230,.85)", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700", color: "#8C1D17" }}>
                            @[handle]
                          </span>
                          {" "}
                        </div>
                        <figcaption style={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: "13px" }}>
                          <strong style={{ color: "#8C1D17" }}>
                            OCR: social handle in caption
                          </strong>
                          <span style={{ color: "#5E6862" }}>
                            PL-25244 · photo 1
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                        {"Blur area & approve"}
                      </button>
                      <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                        Ask lister to replace
                      </button>
                      <button type="button" style={{ height: "40px", padding: "0 14px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #B3261E", color: "#B3261E", font: "700 13px 'Figtree', sans-serif" }}>
                        Reject photo · strike
                      </button>
                    </div>
                  </section>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "20px" }}>
                    <section aria-labelledby="txt-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                        <h3 id="txt-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                          Text flag
                        </h3>
                        <span style={{ fontSize: "13px", color: "#5E6862", fontVariantNumeric: "tabular-nums" }}>
                          PL-25198 · Mini-flat, Onike
                        </span>
                      </div>
                      <blockquote style={{ margin: "0", padding: "12px 14px", borderRadius: "12px", background: "#F6F4EE", fontSize: "14px", color: "#3D4A43", lineHeight: "1.55" }}>
                        {"“Neat mini-flat close to Yaba Tech, prepaid meter, water runs. "}
                        <mark style={{ background: "#FDF3D3", color: "#6B4E00", fontWeight: "700", padding: "1px 3px", borderRadius: "4px", outline: "1.5px solid #F4B728" }}>
                          Other units available
                        </mark>
                        , ask me for more options in the area.”
                      </blockquote>
                      <span style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#7A3B07" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9520B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                          <path d="M12 4 2.5 20h19z"></path>
                          <path d="M12 10v4M12 17h.01"></path>
                        </svg>
                        Bait signal: one listing must describe one property. Lister is "Listed by owner".
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <button type="button" style={{ height: "40px", padding: "0 12px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                          {"Remove phrase & approve"}
                        </button>
                        <button type="button" style={{ height: "40px", padding: "0 12px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                          Request changes
                        </button>
                      </div>
                    </section>
                    <section aria-labelledby="pc-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                        <h3 id="pc-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                          Price / terms changes
                        </h3>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          2 of 4
                        </span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", fontSize: "13px" }}>
                            <strong>
                              PL-24931 · 3-bed flat, Ifako
                            </strong>
                            <span style={{ color: "#5E6862" }}>
                              13 Oct 07:55
                            </span>
                          </div>
                          <span style={{ fontSize: "14px", fontVariantNumeric: "tabular-nums" }}>
                            {"Rent ₦3,500,000 "}
                            <span style={{ color: "#5E6862" }}>
                              →
                            </span>
                            {" "}
                            <strong>
                              ₦3,900,000
                            </strong>
                          </span>
                          <span style={{ fontSize: "12px", color: "#7A3B07", fontWeight: "600" }}>
                            2 applications open · applicants keep the price they applied at
                          </span>
                        </div>
                        <div style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #F4C9C5", background: "#FCE8E6", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", fontSize: "13px" }}>
                            <strong>
                              PL-25102 · Self-contain, Akoka
                            </strong>
                            <span style={{ color: "#5E6862" }}>
                              13 Oct 08:20
                            </span>
                          </div>
                          <span style={{ fontSize: "14px", fontVariantNumeric: "tabular-nums" }}>
                            {"Advance 12 months "}
                            <span style={{ color: "#5E6862" }}>
                              →
                            </span>
                            {" "}
                            <strong>
                              24 months
                            </strong>
                          </span>
                          <span style={{ fontSize: "12px", color: "#8C1D17", fontWeight: "600" }}>
                            Blocked: above the Fair Terms cap of 12 months in Lagos
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <aside style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <section aria-labelledby="dec-h" style={{ background: "#FFFFFF", border: "1.5px solid #15201A", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h3 id="dec-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        Decision · MOD-3318
                      </h3>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Both listers are told the outcome and the reason
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
                            Merge into PL-24817
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Agent listing closed; owner's stays (BRL-02)
                          </span>
                        </span>
                      </label>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", cursor: "pointer" }}>
                        <input type="radio" name="outcome" style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Not a duplicate
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Different unit in the same building
                          </span>
                        </span>
                      </label>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", cursor: "pointer" }}>
                        <input type="radio" name="outcome" style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            {"Freeze & route to fraud"}
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Copied media with intent to mislead
                          </span>
                        </span>
                      </label>
                    </fieldset>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="reason" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Reason sent to the agent
                      </label>
                      <div style={{ position: "relative" }}>
                        <select id="reason" style={{ width: "100%", height: "44px", boxSizing: "border-box", padding: "0 40px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "500 14px 'Figtree', sans-serif", color: "#15201A", appearance: "none", WebkitAppearance: "none" }}>
                          <option>
                            Owner already lists this property; add a signed mandate to list it
                          </option>
                          <option>
                            Photos belong to another listing
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
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px" }}>
                      <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                      <span>
                        Issue strike 1 to the agent for copied media
                      </span>
                    </label>
                    <button type="button" style={{ height: "48px", border: "0", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", font: "700 15px 'Figtree', sans-serif" }}>
                      Confirm merge
                    </button>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#5E6862" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Every action is audited. Strikes can be appealed within 2 business days.
                    </span>
                  </section>
                  <section aria-labelledby="qh-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <h3 id="qh-h" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                      Queue health
                    </h3>
                    <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "1fr auto", gap: "8px 12px", fontSize: "13px" }}>
                      <dt style={{ color: "#3D4A43" }}>
                        Suspected duplicates
                      </dt>
                      <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                        3 · oldest 2 h 10 m
                      </dd>
                      <dt style={{ color: "#3D4A43" }}>
                        Flagged media
                      </dt>
                      <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                        5 · oldest 1 h 35 m
                      </dd>
                      <dt style={{ color: "#3D4A43" }}>
                        Price / terms changes
                      </dt>
                      <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                        4 · oldest 3 h 25 m
                      </dd>
                      <dt style={{ color: "#3D4A43" }}>
                        Text flags
                      </dt>
                      <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                        2 · oldest 40 m
                      </dd>
                      <dt style={{ color: "#3D4A43" }}>
                        Reports
                      </dt>
                      <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums", color: "#8C1D17", fontWeight: "700" }}>
                        6 · act within 2 h
                      </dd>
                    </dl>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Business hours follow the SLA calendar in Config. Reports of fees or off-platform asks go to fraud ops.
                    </span>
                    <Link href="/admin/leakage" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", paddingTop: "10px", borderTop: "1px solid #E3DFD4" }}>
                      Open fraud ops
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
