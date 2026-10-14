"use client";

// Generated from Claude Design: W13-AdminDisputes.dc.html (ADM-03 · Disputes & escrow)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class AdminDisputesLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function AdminDisputes() {
  useDCLogic(AdminDisputesLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "2060px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.5", display: "flex", flexDirection: "column" }}>
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
                BI
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                <strong style={{ fontSize: "14px" }}>
                  Bola I.
                </strong>
                <span style={{ fontSize: "12px", color: "#5E6862" }}>
                  Disputes officer
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
            <Link href="/admin/disputes" aria-current="page" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", background: "#26342C", color: "#FFFFFF", fontWeight: "700", fontSize: "14px", position: "relative" }}>
              <span style={{ position: "absolute", left: "4px", top: "50%", width: "6px", height: "6px", marginTop: "-3px", borderRadius: "99px", background: "#F4B728" }} aria-hidden="true"></span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z"></path>
              </svg>
              Disputes
              <span style={{ marginLeft: "auto", minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#F4B728", color: "#15201A", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                9
              </span>
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
                      Plainly Secure
                    </span>
                    <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                      {"Disputes & escrow"}
                    </h1>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Funds stay frozen until a decision
                    </span>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      Decide within 5 business days
                    </span>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                      0 SLA breaches
                    </span>
                  </div>
                </div>
                <div role="tablist" aria-label="Dispute stage" style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "4px", background: "#EFECE4", borderRadius: "12px", alignSelf: "flex-start", maxWidth: "100%" }}>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"New "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      2
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="true" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "#15201A", color: "#FFFFFF", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Evidence window "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#F4B728" }}>
                      4
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Ready to decide "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      2
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Second approver "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      1
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Funds instructed "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      7
                    </span>
                  </button>
                </div>
              </div>
              <section aria-labelledby="case-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "18px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "16px 24px" }}>
                  <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h2 id="case-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "26px", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
                      DSP-0087 · Property doesn't match agreement
                    </h2>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      Mini-flat, Onike, Yaba (PL-24655) · raised by tenant Sun 11 Oct 18:00 · deal DL-11872
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                      <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                        Evidence window closes in 31 h
                      </span>
                      <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700" }}>
                        Decision due in 4 business days
                      </span>
                    </div>
                  </div>
                  <div style={{ flex: "0 1 300px", minWidth: "240px", display: "flex", flexDirection: "column", gap: "6px", padding: "14px 16px", borderRadius: "14px", background: "#E5EEFB" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#164A90" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Frozen in Plainly Secure
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", color: "#15201A" }}>
                      ₦1,350,000
                    </strong>
                    <span style={{ fontSize: "13px", color: "#164A90", fontVariantNumeric: "tabular-nums" }}>
                      Rent ₦1,200,000 · caution deposit ₦150,000 · held by [Escrow partner] since 5 Oct
                    </span>
                  </div>
                </div>
                <ol aria-label="Dispute stages" style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "8px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#E3F4EA", color: "#145C37", fontSize: "13px", fontWeight: "700" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                    </svg>
                    Submitted
                  </li>
                  <li aria-current="step" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#15201A", color: "#FFFFFF", fontSize: "13px", fontWeight: "700" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#F4B728" }}></span>
                    Evidence · 31 h left
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#EFECE4", color: "#5E6862", fontSize: "13px", fontWeight: "600" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "9px", border: "1.5px solid #5E6862", boxSizing: "border-box" }}></span>
                    Decision
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", background: "#EFECE4", color: "#5E6862", fontSize: "13px", fontWeight: "600" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "9px", border: "1.5px solid #5E6862", boxSizing: "border-box" }}></span>
                    Funds instructed
                  </li>
                </ol>
              </section>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <section aria-labelledby="ev-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ padding: "16px 20px 0", display: "flex", flexDirection: "column", gap: "12px", borderBottom: "1px solid #E3DFD4" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                        <h3 id="ev-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                          Evidence
                        </h3>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          Chat history and agreement attached automatically
                        </span>
                      </div>
                      <div role="tablist" aria-label="Evidence type" style={{ display: "flex", gap: "4px", overflowX: "auto" }}>
                        <button type="button" role="tab" aria-selected="true" style={{ height: "42px", padding: "0 14px", border: "0", borderBottom: "3px solid #0E5A3C", background: "transparent", color: "#0E5A3C", font: "700 14px 'Figtree', sans-serif", whiteSpace: "nowrap" }}>
                          Chat
                        </button>
                        <button type="button" role="tab" aria-selected="false" style={{ height: "42px", padding: "0 14px", border: "0", borderBottom: "3px solid transparent", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif", whiteSpace: "nowrap" }}>
                          Agreement
                        </button>
                        <button type="button" role="tab" aria-selected="false" style={{ height: "42px", padding: "0 14px", border: "0", borderBottom: "3px solid transparent", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif", whiteSpace: "nowrap" }}>
                          Payments
                        </button>
                        <button type="button" role="tab" aria-selected="false" style={{ height: "42px", padding: "0 14px", border: "0", borderBottom: "3px solid transparent", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif", whiteSpace: "nowrap" }}>
                          {"Photos "}
                          <span style={{ color: "#5E6862" }}>
                            6
                          </span>
                        </button>
                        <button type="button" role="tab" aria-selected="false" style={{ height: "42px", padding: "0 14px", border: "0", borderBottom: "3px solid transparent", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif", whiteSpace: "nowrap" }}>
                          Check-in GPS
                        </button>
                      </div>
                    </div>
                    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px", background: "#F6F4EE" }}>
                      <div style={{ alignSelf: "flex-start", maxWidth: "78%", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Owner · 28 Sep 10:14
                        </span>
                        <span style={{ padding: "10px 14px", borderRadius: "4px 14px 14px 14px", background: "#FFFFFF", border: "1px solid #E3DFD4", fontSize: "14px" }}>
                          Yes, the prepaid meter is installed and the kitchen has new fitted cabinets, same as the video.
                        </span>
                      </div>
                      <div style={{ alignSelf: "flex-end", maxWidth: "78%", display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Tenant · 10 Oct 13:05
                        </span>
                        <span style={{ padding: "10px 14px", borderRadius: "14px 4px 14px 14px", background: "#E2F0E7", fontSize: "14px" }}>
                          I'm here now. There's no prepaid meter, it's still the old estimated billing. The cabinets in the video are not here either.
                        </span>
                      </div>
                      <div style={{ alignSelf: "flex-start", maxWidth: "78%", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Owner · 10 Oct 13:40
                        </span>
                        <span style={{ padding: "10px 14px", borderRadius: "4px 14px 14px 14px", background: "#FFFFFF", border: "1px solid #E3DFD4", fontSize: "14px" }}>
                          The meter is coming. The cabinets went for repair, they'll be back.
                        </span>
                      </div>
                      <div style={{ alignSelf: "center", display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                          <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                        </svg>
                        Dispute raised · funds frozen · 11 Oct 18:00
                      </div>
                    </div>
                    <div style={{ padding: "14px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "12px", borderTop: "1px solid #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "12px 14px", borderRadius: "12px", background: "#FDF3D3" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6B4E00" }}>
                          Agreement says · Schedule 1
                        </span>
                        <span style={{ fontSize: "14px", color: "#15201A" }}>
                          “Prepaid meter installed. Fitted kitchen cabinets.”
                        </span>
                        <span style={{ fontSize: "12px", color: "#6B4E00" }}>
                          Signed by both 2 Oct · Plainly standard agreement
                        </span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "12px 14px", borderRadius: "12px", background: "#E3F4EA" }}>
                        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#145C37" }}>
                          Check-in GPS · handover
                        </span>
                        <span style={{ fontSize: "14px", color: "#15201A" }}>
                          Both checked in on site, 18 m apart
                        </span>
                        <span style={{ fontSize: "12px", color: "#145C37", fontVariantNumeric: "tabular-nums" }}>
                          Sat 10 Oct 12:02 · keys marked handed over 12:20
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: "0 20px 16px", display: "flex", gap: "10px", overflowX: "auto" }}>
                      <figure style={{ margin: "0", flex: "0 0 140px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ height: "96px", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></div>
                        <figcaption style={{ fontSize: "12px", color: "#3D4A43" }}>
                          Tenant · meter box
                        </figcaption>
                      </figure>
                      <figure style={{ margin: "0", flex: "0 0 140px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ height: "96px", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></div>
                        <figcaption style={{ fontSize: "12px", color: "#3D4A43" }}>
                          Tenant · kitchen wall
                        </figcaption>
                      </figure>
                      <figure style={{ margin: "0", flex: "0 0 140px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ height: "96px", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></div>
                        <figcaption style={{ fontSize: "12px", color: "#3D4A43" }}>
                          Listing video · 0:48
                        </figcaption>
                      </figure>
                      <figure style={{ margin: "0", flex: "0 0 140px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ height: "96px", borderRadius: "10px", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}></div>
                        <figcaption style={{ fontSize: "12px", color: "#3D4A43" }}>
                          Owner · meter receipt
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                  <section aria-labelledby="st-h" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 id="st-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      Statements
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "12px" }}>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                              Tenant
                            </span>
                            <strong style={{ fontSize: "15px", letterSpacing: "0.04em" }}>
                              A•••• B•••
                            </strong>
                          </span>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                            Submitted 11 Oct
                          </span>
                        </div>
                        <p style={{ margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                          “Two things the agreement lists are missing: the prepaid meter and the fitted kitchen. I still want the flat, but I shouldn't pay full price for what I didn't get.”
                        </p>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Asks for: partial refund · 4 photos
                        </span>
                      </article>
                      <article style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                              Owner
                            </span>
                            <strong style={{ fontSize: "15px", letterSpacing: "0.04em" }}>
                              O•••• K•••
                            </strong>
                          </span>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                            Submitted 12 Oct
                          </span>
                        </div>
                        <p style={{ margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                          “The meter was paid for in September and the installer is delayed. The cabinets were taken out for repair after the video. Both will be back before month end.”
                        </p>
                        <span style={{ fontSize: "12px", color: "#5E6862" }}>
                          Asks for: release in full · 2 photos (receipt)
                        </span>
                      </article>
                    </div>
                  </section>
                </div>
                <aside style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <section aria-labelledby="dec-h" style={{ background: "#FFFFFF", border: "1.5px solid #15201A", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h3 id="dec-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        Decision draft
                      </h3>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Both parties get the outcome and reasons in writing
                      </span>
                    </div>
                    <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <legend style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                        Outcome
                      </legend>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", cursor: "pointer" }}>
                        <input type="radio" name="outcome" style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Release to owner
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Full amount, less closing fee
                          </span>
                        </span>
                      </label>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "12px 14px", borderRadius: "12px", border: "2px solid #0E5A3C", background: "#E2F0E7" }}>
                        <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", cursor: "pointer" }}>
                          <input type="radio" name="outcome" defaultChecked style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                          <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <strong style={{ fontSize: "14px" }}>
                              Partial refund to tenant
                            </strong>
                            <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                              Rest released to owner
                            </span>
                          </span>
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "4px", paddingLeft: "32px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "600" }}>
                            Refund amount
                          </span>
                          <span style={{ height: "44px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "6px", padding: "0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF" }}>
                            <span style={{ fontWeight: "700", color: "#3D4A43" }}>
                              ₦
                            </span>
                            <input type="text" inputMode="numeric" defaultValue="100,000" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "700 15px 'Figtree', sans-serif", fontVariantNumeric: "tabular-nums", color: "#15201A" }} />
                          </span>
                        </label>
                      </div>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", cursor: "pointer" }}>
                        <input type="radio" name="outcome" style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Full refund to tenant
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Deal cancelled, listing reviewed
                          </span>
                        </span>
                      </label>
                    </fieldset>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "12px 14px", borderRadius: "12px", background: "#F6F4EE", fontSize: "13px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                        Escrow instruction preview
                      </span>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Refund to tenant
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums" }}>
                          ₦100,000
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Owner gross
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums" }}>
                          ₦1,250,000
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Closing fee 3% of ₦1,200,000
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums" }}>
                          −₦36,000
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Listing-fee credit
                        </span>
                        <span style={{ fontVariantNumeric: "tabular-nums" }}>
                          +₦10,000
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", paddingTop: "6px", borderTop: "1px dashed #CFC9BA" }}>
                        <strong>
                          Release to owner
                        </strong>
                        <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "16px", fontVariantNumeric: "tabular-nums" }}>
                          ₦1,224,000
                        </strong>
                      </div>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Totals ₦1,350,000 with the ₦26,000 Plainly fee. Sent to [Escrow partner] only after approval.
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="note" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Reasons (shared with both)
                      </label>
                      <textarea defaultValue="Schedule 1 lists a prepaid meter and fitted kitchen. Neither was present at handover on 10 Oct." id="note" rows="3" style={{ boxSizing: "border-box", width: "100%", padding: "10px 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "400 14px/1.45 'Figtree', sans-serif", color: "#15201A", resize: "vertical" }} />
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
                          Four-eyes above ₦[threshold]
                        </strong>
                        This case moves ₦1,350,000, so a second approver signs before funds are instructed.
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <button type="button" disabled aria-describedby="sub-why" style={{ height: "48px", border: "0", borderRadius: "12px", background: "#EFECE4", color: "#5E6862", font: "700 15px 'Figtree', sans-serif" }}>
                        Submit for second approval
                      </button>
                      <span id="sub-why" style={{ fontSize: "12px", color: "#5E6862" }}>
                        Unlocks when the evidence window closes in 31 h. Both parties can still add evidence.
                      </span>
                    </div>
                    <button type="button" style={{ height: "44px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 14px 'Figtree', sans-serif" }}>
                      Save draft
                    </button>
                  </section>
                  <section aria-labelledby="pii-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <h3 id="pii-h" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                        Parties
                      </h3>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#5E6862" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 3l18 18"></path>
                          <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                        </svg>
                        Masked
                      </span>
                    </div>
                    <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "6px 12px", fontSize: "13px" }}>
                      <dt style={{ color: "#5E6862" }}>
                        Tenant
                      </dt>
                      <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                        U-203590 · +234 ••• ••• 2281
                      </dd>
                      <dt style={{ color: "#5E6862" }}>
                        Owner
                      </dt>
                      <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                        U-117342 · +234 ••• ••• 6604
                      </dd>
                      <dt style={{ color: "#5E6862" }}>
                        Payout to
                      </dt>
                      <dd style={{ margin: "0", fontVariantNumeric: "tabular-nums" }}>
                        [bank] ••••3390 · name match ✓
                      </dd>
                    </dl>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="rev" style={{ fontSize: "13px", fontWeight: "600" }}>
                        Reason to reveal
                      </label>
                      <div style={{ position: "relative" }}>
                        <select id="rev" style={{ width: "100%", height: "44px", boxSizing: "border-box", padding: "0 40px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "500 14px 'Figtree', sans-serif", color: "#15201A", appearance: "none", WebkitAppearance: "none" }}>
                          <option>
                            Need to call a party about evidence
                          </option>
                          <option>
                            Bank details check for refund
                          </option>
                          <option>
                            Law enforcement request (attach reference)
                          </option>
                        </select>
                        {" "}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: "12px", top: "13px", pointerEvents: "none" }}>
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                        {" "}
                      </div>
                    </div>
                    <span className="tip" style={{ alignSelf: "flex-start", marginTop: "64px" }}>
                      {" "}
                      <button type="button" aria-describedby="reveal-tip" style={{ height: "40px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                          <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                        </svg>
                        Reveal with reason
                      </button>
                      {" "}
                      <span role="tooltip" id="reveal-tip">
                        Shown for 10 minutes. Every reveal is logged against this case, and unusual volume alerts your lead.
                      </span>
                      {" "}
                    </span>
                    <Link href="/admin/config" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", paddingTop: "10px", borderTop: "1px solid #E3DFD4" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
                      </svg>
                      Audit trail for DSP-0087
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
