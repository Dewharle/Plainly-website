"use client";

// Generated from Claude Design: W12-AdminVerify.dc.html (ADM-01 · Verification queue)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-end>[role=tooltip]{left:auto;right:0;transform:none}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class AdminVerificationLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function AdminVerification() {
  useDCLogic(AdminVerificationLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "2360px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.5", display: "flex", flexDirection: "column" }}>
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
                TA
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                <strong style={{ fontSize: "14px" }}>
                  Tunde A.
                </strong>
                <span style={{ fontSize: "12px", color: "#5E6862" }}>
                  Verification reviewer
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
            <Link href="/admin/verification" aria-current="page" style={{ height: "44px", padding: "0 12px 0 22px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", background: "#26342C", color: "#FFFFFF", fontWeight: "700", fontSize: "14px", position: "relative" }}>
              <span style={{ position: "absolute", left: "9px", top: "50%", width: "6px", height: "6px", marginTop: "-3px", borderRadius: "99px", background: "#F4B728" }} aria-hidden="true"></span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
              </svg>
              Ownership
              <span style={{ marginLeft: "auto", minWidth: "22px", height: "22px", padding: "0 7px", boxSizing: "border-box", borderRadius: "999px", background: "#F4B728", color: "#15201A", fontSize: "12px", fontWeight: "700", display: "grid", placeItems: "center" }}>
                12
              </span>
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
                      Verification queues
                    </span>
                    <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                      Ownership review
                    </h1>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A3B07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      Decide within 24 h
                    </span>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8C1D17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 4 2.5 20h19z"></path>
                        <path d="M12 10v4M12 17h.01"></path>
                      </svg>
                      1 case due in under 3 h
                    </span>
                    <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                      0 SLA breaches
                    </span>
                  </div>
                </div>
                <div role="tablist" aria-label="Verification queue" style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "4px", background: "#EFECE4", borderRadius: "12px", alignSelf: "flex-start", maxWidth: "100%" }}>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"KYC exceptions "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      7
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="true" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "#15201A", color: "#FFFFFF", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Ownership "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#F4B728" }}>
                      12
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Title "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      3
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Agents "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      5
                    </span>
                  </button>
                  <button type="button" role="tab" aria-selected="false" style={{ height: "38px", padding: "0 14px", border: "0", borderRadius: "9px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif" }}>
                    {"Professionals "}
                    <span style={{ fontVariantNumeric: "tabular-nums", color: "#5E6862" }}>
                      2
                    </span>
                  </button>
                </div>
              </div>
              <section aria-labelledby="q-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ padding: "14px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 16px", borderBottom: "1px solid #E3DFD4" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <h2 id="q-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      Ownership queue
                    </h2>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      Oldest first by time left · 5 of 12 shown · all times WAT
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <button type="button" style={{ height: "36px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "10px", background: "#FFFFFF", border: "1px solid #CFC9BA", color: "#15201A", font: "600 13px 'Figtree', sans-serif" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"></path>
                        <circle cx="16" cy="6" r="2"></circle>
                        <circle cx="10" cy="12" r="2"></circle>
                        <circle cx="18" cy="18" r="2"></circle>
                      </svg>
                      Document type: All
                    </button>
                    <button type="button" style={{ height: "36px", padding: "0 12px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "10px", background: "#15201A", border: "0", color: "#FFFFFF", font: "700 13px 'Figtree', sans-serif" }}>
                      Assigned to me · 4
                    </button>
                  </div>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", minWidth: "880px", borderCollapse: "collapse", fontSize: "14px" }}>
                    <thead>
                      <tr style={{ background: "#F6F4EE", textAlign: "left" }}>
                        <th scope="col" style={{ padding: "10px 20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Case
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Listing
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Owner
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Document
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Submitted
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Time left
                        </th>
                        <th scope="col" style={{ padding: "10px 20px 10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Signals
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <td style={{ padding: "12px 20px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          OV-55114
                        </td>
                        <td style={{ padding: "12px" }}>
                          2-bed flat · Ilupeju
                        </td>
                        <td style={{ padding: "12px", letterSpacing: "0.04em" }}>
                          O•••• B•••
                        </td>
                        <td style={{ padding: "12px" }}>
                          Power of attorney
                        </td>
                        <td style={{ padding: "12px", fontVariantNumeric: "tabular-nums", color: "#3D4A43" }}>
                          12 Oct 14:05
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCE8E6", color: "#8C1D17", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#B3261E" }}></span>
                            2 h 45 m
                          </span>
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#7A3B07" }}>
                          Donor KYC pending
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <td style={{ padding: "12px 20px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          OV-55117
                        </td>
                        <td style={{ padding: "12px" }}>
                          Self-contain · Akoka
                        </td>
                        <td style={{ padding: "12px", letterSpacing: "0.04em" }}>
                          I•••• N•••
                        </td>
                        <td style={{ padding: "12px" }}>
                          Utility bill
                        </td>
                        <td style={{ padding: "12px", fontVariantNumeric: "tabular-nums", color: "#3D4A43" }}>
                          12 Oct 16:40
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#A9520B" }}></span>
                            5 h 20 m
                          </span>
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#7A3B07" }}>
                          Name differs from ID
                        </td>
                      </tr>
                      <tr aria-selected="true" style={{ borderTop: "1px solid #EFECE4", background: "#E2F0E7", boxShadow: "inset 4px 0 0 #0E5A3C" }}>
                        <td style={{ padding: "12px 20px", fontWeight: "700", fontVariantNumeric: "tabular-nums", color: "#0A4630" }}>
                          OV-55120
                        </td>
                        <td style={{ padding: "12px", fontWeight: "600" }}>
                          3-bed flat · Surulere
                        </td>
                        <td style={{ padding: "12px", letterSpacing: "0.04em" }}>
                          F•••• A•••••
                        </td>
                        <td style={{ padding: "12px" }}>
                          Land Use Charge demand
                        </td>
                        <td style={{ padding: "12px", fontVariantNumeric: "tabular-nums", color: "#3D4A43" }}>
                          13 Oct 08:12
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FFFFFF", color: "#145C37", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#1C7A4A" }}></span>
                            20 h 52 m
                          </span>
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#145C37", fontWeight: "600" }}>
                          All automated checks clear
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <td style={{ padding: "12px 20px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          OV-55123
                        </td>
                        <td style={{ padding: "12px" }}>
                          1-bed flat · Ebute Metta
                        </td>
                        <td style={{ padding: "12px", letterSpacing: "0.04em" }}>
                          K•••• O••••
                        </td>
                        <td style={{ padding: "12px" }}>
                          Title document
                        </td>
                        <td style={{ padding: "12px", fontVariantNumeric: "tabular-nums", color: "#3D4A43" }}>
                          13 Oct 09:30
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#1C7A4A" }}></span>
                            22 h 10 m
                          </span>
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#5E6862" }}>
                          None
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <td style={{ padding: "12px 20px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          OV-55126
                        </td>
                        <td style={{ padding: "12px" }}>
                          3-bed duplex · Magodo
                        </td>
                        <td style={{ padding: "12px", letterSpacing: "0.04em" }}>
                          A•••• E•••••
                        </td>
                        <td style={{ padding: "12px" }}>
                          Family property
                        </td>
                        <td style={{ padding: "12px", fontVariantNumeric: "tabular-nums", color: "#3D4A43" }}>
                          13 Oct 10:02
                        </td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#1C7A4A" }}></span>
                            22 h 42 m
                          </span>
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#7A3B07" }}>
                          3 of 4 family members KYC'd
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section aria-labelledby="case-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "20px 22px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "16px 24px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h2 id="case-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "26px", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
                    OV-55120 · 3-bed flat, Surulere (PL-24903)
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                    <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#FCEEDD", color: "#7A3B07", fontSize: "12px", fontWeight: "700" }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#A9520B" }}></span>
                      Pending verification · fee paid
                    </span>
                    <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      Decide in 20 h 52 m
                    </span>
                    <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", fontSize: "12px", fontWeight: "700" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="8" r="4"></circle>
                        <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                      </svg>
                      Random second review (10%) · selected
                    </span>
                  </div>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Owner U-104220 · ID verified 12 Oct 2026 (NIN + liveness) · already Owner verified on 1 other listing · assigned to you 13 Oct 08:15
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span className="tip">
                    {" "}
                    <button type="button" aria-describedby="reveal-tip" style={{ height: "40px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Reveal owner name
                    </button>
                    {" "}
                    <span role="tooltip" id="reveal-tip">
                      You'll need to give a reason. Every reveal is logged, and unusual volume alerts your lead.
                    </span>
                    {" "}
                  </span>
                </div>
              </section>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <section aria-labelledby="doc-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <div style={{ padding: "14px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 16px", borderBottom: "1px solid #E3DFD4" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                        <h3 id="doc-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                          Land Use Charge demand
                        </h3>
                        <span style={{ fontSize: "13px", color: "#5E6862" }}>
                          LUC_2026_Adebayo.pdf · 2 pages · uploaded from the app 13 Oct 08:11
                        </span>
                      </div>
                      <div role="toolbar" aria-label="Document viewer" style={{ display: "flex", alignItems: "center", gap: "4px", padding: "3px", background: "#EFECE4", borderRadius: "10px" }}>
                        <button type="button" aria-label="Zoom out" style={{ width: "36px", height: "36px", border: "0", borderRadius: "8px", background: "transparent", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"></path>
                          </svg>
                        </button>
                        <span style={{ minWidth: "48px", textAlign: "center", fontSize: "13px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          100%
                        </span>
                        <button type="button" aria-label="Zoom in" style={{ width: "36px", height: "36px", border: "0", borderRadius: "8px", background: "transparent", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 5v14M5 12h14"></path>
                          </svg>
                        </button>
                        <span style={{ width: "1px", height: "22px", background: "#CFC9BA" }}></span>
                        <button type="button" aria-label="Previous page" disabled style={{ width: "36px", height: "36px", border: "0", borderRadius: "8px", background: "transparent", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m15 6-6 6 6 6"></path>
                          </svg>
                        </button>
                        <span style={{ fontSize: "13px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                          1 / 2
                        </span>
                        <button type="button" aria-label="Next page" style={{ width: "36px", height: "36px", border: "0", borderRadius: "8px", background: "transparent", display: "grid", placeItems: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 6 6 6-6 6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div style={{ background: "#EFECE4", padding: "24px", display: "flex", justifyContent: "center" }}>
                      <div style={{ width: "100%", maxWidth: "560px", boxSizing: "border-box", background: "#FFFFFF", borderRadius: "4px", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)", padding: "28px 32px", display: "flex", flexDirection: "column", gap: "14px", position: "relative", overflow: "hidden" }}>
                        <span aria-hidden="true" style={{ position: "absolute", inset: "0", backgroundImage: "repeating-linear-gradient(-30deg, transparent 0 90px, rgba(21,32,26,.04) 90px 92px)", pointerEvents: "none" }}></span>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "12px", borderBottom: "2px solid #15201A" }}>
                          <span style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#EFECE4", border: "1px dashed #CFC9BA", display: "grid", placeItems: "center", fontSize: "10px", color: "#5E6862", textAlign: "center", lineHeight: "1.1" }}>
                            Issuer
                            <br />
                            crest
                          </span>
                          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.3" }}>
                            <strong style={{ fontSize: "13px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                              [Issuer] · Land Use Charge
                            </strong>
                            <span style={{ fontSize: "12px", color: "#3D4A43" }}>
                              Demand notice · year of charge 2026
                            </span>
                          </span>
                        </div>
                        <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "150px 1fr", gap: "10px 14px", fontSize: "13px" }}>
                          <dt style={{ color: "#5E6862" }}>
                            Property ID
                          </dt>
                          <dd style={{ margin: "0", padding: "2px 6px", borderRadius: "4px", outline: "2px solid #1C7A4A", background: "#E3F4EA", fontVariantNumeric: "tabular-nums" }}>
                            [masked] · matches issuer lookup
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Name of owner
                          </dt>
                          <dd style={{ margin: "0", padding: "2px 6px", borderRadius: "4px", outline: "2px solid #1C7A4A", background: "#E3F4EA", letterSpacing: "0.04em" }}>
                            F•••• A•••••
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Property address
                          </dt>
                          <dd style={{ margin: "0", padding: "2px 6px", borderRadius: "4px", outline: "2px solid #1C7A4A", background: "#E3F4EA" }}>
                            [masked], Surulere, Lagos
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Charge period
                          </dt>
                          <dd style={{ margin: "0", padding: "2px 6px" }}>
                            1 Jan 2026 – 31 Dec 2026
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Amount due
                          </dt>
                          <dd style={{ margin: "0", padding: "2px 6px", fontVariantNumeric: "tabular-nums" }}>
                            ₦[amount]
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Date of issue
                          </dt>
                          <dd style={{ margin: "0", padding: "2px 6px", fontVariantNumeric: "tabular-nums" }}>
                            4 Feb 2026
                          </dd>
                        </dl>
                        <div style={{ height: "8px", borderRadius: "4px", background: "#EFECE4", width: "92%" }}></div>
                        <div style={{ height: "8px", borderRadius: "4px", background: "#EFECE4", width: "78%" }}></div>
                        <div style={{ height: "8px", borderRadius: "4px", background: "#EFECE4", width: "85%" }}></div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "12px", paddingTop: "6px" }}>
                          <span style={{ width: "120px", height: "40px", borderBottom: "1px solid #15201A", fontSize: "11px", color: "#5E6862", display: "flex", alignItems: "flex-end" }}>
                            Authorised signature
                          </span>
                          <span style={{ width: "64px", height: "64px", borderRadius: "999px", border: "2px dashed #CFC9BA", display: "grid", placeItems: "center", fontSize: "10px", color: "#5E6862" }}>
                            Stamp
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: "12px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", fontSize: "12px", color: "#5E6862", borderTop: "1px solid #E3DFD4" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "12px", height: "12px", borderRadius: "3px", outline: "2px solid #1C7A4A", background: "#E3F4EA" }}></span>
                        Fields read and matched automatically
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                          <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                        </svg>
                        Watermarked with your staff ID · no download
                      </span>
                    </div>
                  </section>
                  <section aria-labelledby="chk-h" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                      <h3 id="chk-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                        Automated checks
                      </h3>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Run 13 Oct 08:12 · checks support your decision, they don't make it
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "12px" }}>
                      <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <strong style={{ fontSize: "15px" }}>
                            Tamper analysis
                          </strong>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            Clear
                          </span>
                        </div>
                        <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                          <li style={{ display: "flex", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            <span>
                              <strong>
                                Metadata
                              </strong>
                              {" · created 4 Feb 2026, no edits after issue"}
                            </span>
                          </li>
                          <li style={{ display: "flex", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            <span>
                              <strong>
                                Fonts
                              </strong>
                              {" · consistent across all fields"}
                            </span>
                          </li>
                          <li style={{ display: "flex", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            <span>
                              <strong>
                                Template
                              </strong>
                              {" · matches the known 2026 notice layout"}
                            </span>
                          </li>
                          <li style={{ display: "flex", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            <span>
                              <strong>
                                Issuer lookup
                              </strong>
                              {" · property ID found, name agrees"}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <strong style={{ fontSize: "15px" }}>
                            Name match
                          </strong>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            Match
                          </span>
                        </div>
                        <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "6px 12px", fontSize: "13px" }}>
                          <dt style={{ color: "#5E6862" }}>
                            On document
                          </dt>
                          <dd style={{ margin: "0", letterSpacing: "0.04em" }}>
                            F. A•••••
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            On verified ID
                          </dt>
                          <dd style={{ margin: "0", letterSpacing: "0.04em" }}>
                            F•••• A•••••
                          </dd>
                          <dt style={{ color: "#5E6862" }}>
                            Rule
                          </dt>
                          <dd style={{ margin: "0" }}>
                            Initial + surname accepted when the issuer lookup agrees
                          </dd>
                        </dl>
                      </div>
                      <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <strong style={{ fontSize: "15px" }}>
                            Live-capture GPS integrity
                          </strong>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            On site
                          </span>
                        </div>
                        <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                          <li style={{ display: "flex", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            <span>
                              {"Walkthrough captured "}
                              <strong style={{ fontVariantNumeric: "tabular-nums" }}>
                                42 m
                              </strong>
                              {" from the map pin"}
                            </span>
                          </li>
                          <li style={{ display: "flex", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            <span>
                              No mock location detected
                            </span>
                          </li>
                          <li style={{ display: "flex", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            <span>
                              Device not rooted · app integrity passed
                            </span>
                          </li>
                          <li style={{ display: "flex", gap: "8px" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                              <circle cx="12" cy="12" r="9"></circle>
                              <path d="M12 7v5l3 2"></path>
                            </svg>
                            <span style={{ color: "#3D4A43" }}>
                              Captured 12 Oct 15:22 · 3 min 05 s
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <strong style={{ fontSize: "15px" }}>
                            Duplicate check
                          </strong>
                          <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                            </svg>
                            Clear
                          </span>
                        </div>
                        <p style={{ margin: "0", fontSize: "13px", color: "#3D4A43" }}>
                          No other listing uses this document, property ID, address or matching media. Nearest similar listing is 1.2 km away.
                        </p>
                        <Link href="/admin/moderation" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                          Open in moderation
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 6 6 6-6 6"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
                <aside style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <section aria-labelledby="dec-h" style={{ background: "#FFFFFF", border: "1.5px solid #15201A", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <h3 id="dec-h" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-0.02em" }}>
                        Decision
                      </h3>
                      <span style={{ fontSize: "13px", color: "#5E6862" }}>
                        Approving adds the Owner verified badge to PL-24903
                      </span>
                    </div>
                    <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <legend style={{ fontSize: "14px", fontWeight: "600", padding: "0 0 6px" }}>
                        Reviewer checklist
                      </legend>
                      <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px" }}>
                        <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        Document type proves control of this property
                      </label>
                      <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px" }}>
                        <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        Name matches the verified ID
                      </label>
                      <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px" }}>
                        <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        Address agrees with the listing area and pin
                      </label>
                      <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px" }}>
                        <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        Document is current (issued within 12 months)
                      </label>
                      <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px" }}>
                        <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        Walkthrough was captured on site
                      </label>
                    </fieldset>
                    <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <legend style={{ fontSize: "14px", fontWeight: "600", padding: "0 0 6px" }}>
                        Outcome
                      </legend>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "2px solid #0E5A3C", background: "#E2F0E7", cursor: "pointer" }}>
                        <input type="radio" name="outcome" defaultChecked style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Approve
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Listing goes live with Owner verified
                          </span>
                        </span>
                      </label>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", cursor: "pointer" }}>
                        <input type="radio" name="outcome" style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Request changes
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Owner gets your reason and can resubmit
                          </span>
                        </span>
                      </label>
                      <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #E3DFD4", cursor: "pointer" }}>
                        <input type="radio" name="outcome" style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <strong style={{ fontSize: "14px" }}>
                            Reject
                          </strong>
                          <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                            Refund or credit if the reason wasn't theirs
                          </span>
                        </span>
                      </label>
                    </fieldset>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="reason" style={{ fontSize: "14px", fontWeight: "600" }}>
                        {"Reason template "}
                        <span style={{ fontWeight: "500", color: "#5E6862" }}>
                          (for changes or rejection)
                        </span>
                      </label>
                      <div style={{ position: "relative" }}>
                        <select id="reason" style={{ width: "100%", height: "44px", boxSizing: "border-box", padding: "0 40px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "500 14px 'Figtree', sans-serif", color: "#15201A", appearance: "none", WebkitAppearance: "none" }}>
                          <option>
                            Choose a reason
                          </option>
                          <option>
                            Name doesn't match your ID: add proof of relationship
                          </option>
                          <option>
                            Document is older than 12 months
                          </option>
                          <option>
                            Page missing or unreadable: upload a clearer copy
                          </option>
                          <option>
                            Address on document doesn't match the listing
                          </option>
                          <option>
                            Document appears altered
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
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                        Badge text the seeker will see
                      </span>
                      <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#F6F4EE", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ alignSelf: "flex-start", height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E2F0E7", color: "#0A4630", fontSize: "12px", fontWeight: "700" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0A4630" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                            <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                          </svg>
                          Owner verified
                        </span>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          ID and proof of control (Land Use Charge demand) reviewed 13 Oct 2026. Plainly does not certify title.
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", background: "#E5EEFB" }}>
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: "13px", color: "#164A90", flex: "1" }}>
                        <strong style={{ fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "2px" }}>
                          {"Random second review (10%) · selected "}
                          <span className="tip tip-end">
                            {" "}
                            <button type="button" aria-label="How random second review works" aria-describedby="sr-tip" style={{ width: "28px", height: "28px", border: "0", background: "transparent", borderRadius: "999px", display: "grid", placeItems: "center", padding: "0" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="9"></circle>
                                <path d="M12 11v5M12 8h.01"></path>
                              </svg>
                            </button>
                            {" "}
                            <span role="tooltip" id="sr-tip">
                              One in ten decisions is picked at random. A second reviewer confirms before the badge shows. It still counts inside the 24 h target.
                            </span>
                            {" "}
                          </span>
                        </strong>
                        After you approve, a second reviewer checks this case before the badge goes live.
                      </span>
                    </div>
                    <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", border: "1px solid #CFC9BA", fontSize: "14px" }}>
                      <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <strong>
                          I have no conflict of interest
                        </strong>
                        <span style={{ fontSize: "13px", color: "#3D4A43" }}>
                          I don't know this owner and have no interest in this property. If I do, I'll pass the case back.
                        </span>
                      </span>
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label htmlFor="note" style={{ fontSize: "14px", fontWeight: "600" }}>
                        Audit note
                      </label>
                      <textarea defaultValue="LUC demand 2026 in owner's name; issuer lookup agrees; walkthrough captured on site 42 m from pin. Approve." id="note" rows="3" style={{ boxSizing: "border-box", width: "100%", padding: "10px 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "400 14px/1.45 'Figtree', sans-serif", color: "#15201A", resize: "vertical" }} />
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Stored with the case. The owner sees only the outcome and any reason.
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <button type="button" style={{ height: "48px", border: "0", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", font: "700 15px 'Figtree', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                        </svg>
                        Approve · send to second review
                      </button>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        <button type="button" style={{ height: "44px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 14px 'Figtree', sans-serif" }}>
                          Request changes
                        </button>
                        <button type="button" style={{ height: "44px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #B3261E", color: "#B3261E", font: "700 14px 'Figtree', sans-serif" }}>
                          Reject
                        </button>
                      </div>
                    </div>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#5E6862" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Every action is audited with your staff ID and time.
                    </span>
                  </section>
                  <section aria-labelledby="hist-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                    <h3 id="hist-h" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                      Case history
                    </h3>
                    <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
                      <li style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Listing fee paid · ₦20,000 band
                        </span>
                        <span style={{ color: "#5E6862", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          12 Oct 15:40
                        </span>
                      </li>
                      <li style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Live walkthrough captured
                        </span>
                        <span style={{ color: "#5E6862", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          12 Oct 15:22
                        </span>
                      </li>
                      <li style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Ownership document submitted
                        </span>
                        <span style={{ color: "#5E6862", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          13 Oct 08:12
                        </span>
                      </li>
                      <li style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                        <span style={{ color: "#3D4A43" }}>
                          Assigned to Tunde A.
                        </span>
                        <span style={{ color: "#5E6862", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          13 Oct 08:15
                        </span>
                      </li>
                    </ol>
                    <Link href="/admin/config" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", textDecoration: "none", paddingTop: "10px", borderTop: "1px solid #E3DFD4" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
                      </svg>
                      Audit trail for OV-55120
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
