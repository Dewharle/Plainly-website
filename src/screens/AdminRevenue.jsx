"use client";

// Generated from Claude Design: W14-AdminRevenue.dc.html (ADM-05 · KPI & revenue dashboard)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-end>[role=tooltip]{left:auto;right:0;transform:none}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class AdminRevenueLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function AdminRevenue() {
  useDCLogic(AdminRevenueLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1720px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.5", display: "flex", flexDirection: "column" }}>
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
                SF
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                <strong style={{ fontSize: "14px" }}>
                  Segun F.
                </strong>
                <span style={{ fontSize: "12px", color: "#5E6862" }}>
                  Finance analyst
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
            <Link href="/admin/revenue" aria-current="page" style={{ height: "44px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "10px", textDecoration: "none", background: "#26342C", color: "#FFFFFF", fontWeight: "700", fontSize: "14px", position: "relative" }}>
              <span style={{ position: "absolute", left: "4px", top: "50%", width: "6px", height: "6px", marginTop: "-3px", borderRadius: "99px", background: "#F4B728" }} aria-hidden="true"></span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                    Business health
                  </span>
                  <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    {"KPIs & revenue"}
                  </h1>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                    </svg>
                    Reconciles daily to billing ledger
                  </span>
                  <span style={{ height: "30px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#EFECE4", color: "#3D4A43", fontSize: "12px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 7v5l3 2"></path>
                    </svg>
                    Last reconciled Tue 13 Oct 06:00 WAT
                  </span>
                </div>
              </div>
              <div role="toolbar" aria-label="Filters" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px", padding: "14px 16px", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1 1 160px", maxWidth: "220px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    Period
                  </span>
                  <span style={{ position: "relative", display: "block" }}>
                    {" "}
                    <select style={{ width: "100%", height: "44px", boxSizing: "border-box", padding: "0 40px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "500 14px 'Figtree', sans-serif", color: "#15201A", appearance: "none", WebkitAppearance: "none" }}>
                      <option>
                        Last 30 days
                      </option>
                      <option>
                        This quarter
                      </option>
                      <option>
                        Year to date
                      </option>
                      <option>
                        Custom range
                      </option>
                    </select>
                    {" "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: "12px", top: "13px", pointerEvents: "none" }}>
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    {" "}
                  </span>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1 1 140px", maxWidth: "200px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    City
                  </span>
                  <span style={{ position: "relative", display: "block" }}>
                    {" "}
                    <select style={{ width: "100%", height: "44px", boxSizing: "border-box", padding: "0 40px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "500 14px 'Figtree', sans-serif", color: "#15201A", appearance: "none", WebkitAppearance: "none" }}>
                      <option>
                        Lagos
                      </option>
                    </select>
                    {" "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: "12px", top: "13px", pointerEvents: "none" }}>
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    {" "}
                  </span>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1 1 160px", maxWidth: "220px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    Area
                  </span>
                  <span style={{ position: "relative", display: "block" }}>
                    {" "}
                    <select style={{ width: "100%", height: "44px", boxSizing: "border-box", padding: "0 40px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "500 14px 'Figtree', sans-serif", color: "#15201A", appearance: "none", WebkitAppearance: "none" }}>
                      <option>
                        All areas
                      </option>
                      <option>
                        Yaba
                      </option>
                      <option>
                        Surulere
                      </option>
                      <option>
                        Gbagada
                      </option>
                      <option>
                        Lekki Phase 1
                      </option>
                    </select>
                    {" "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: "12px", top: "13px", pointerEvents: "none" }}>
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    {" "}
                  </span>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1 1 160px", maxWidth: "220px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    Listed by
                  </span>
                  <span style={{ position: "relative", display: "block" }}>
                    {" "}
                    <select style={{ width: "100%", height: "44px", boxSizing: "border-box", padding: "0 40px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "500 14px 'Figtree', sans-serif", color: "#15201A", appearance: "none", WebkitAppearance: "none" }}>
                      <option>
                        Owners and agents
                      </option>
                      <option>
                        Owners
                      </option>
                      <option>
                        Agents
                      </option>
                      <option>
                        Developers
                      </option>
                    </select>
                    {" "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: "12px", top: "13px", pointerEvents: "none" }}>
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    {" "}
                  </span>
                </label>
                <label style={{ height: "44px", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                  <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", margin: "0", accentColor: "#0E5A3C" }} />
                  Compare to previous period
                </label>
                <button type="button" style={{ marginLeft: "auto", height: "44px", padding: "0 16px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #15201A", color: "#15201A", font: "700 14px 'Figtree', sans-serif", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4M9 12h6M9 16h6"></path>
                  </svg>
                  Export CSV
                </button>
              </div>
              <section aria-labelledby="kpi-h" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                  <h2 id="kpi-h" style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                    Launch KPIs
                  </h2>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Targets from PRD 2.6 · values wire to live data
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "12px" }}>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      Listing completion
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      [value]
                    </strong>
                    <div aria-hidden="true" style={{ height: "6px", borderRadius: "999px", background: "#EFECE4", position: "relative" }}>
                      <span style={{ position: "absolute", left: "60%", top: "-4px", width: "2px", height: "14px", background: "#15201A" }}></span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Target ≥ 60% · started drafts that go live
                    </span>
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      Owner verified · median time
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      [value]
                    </strong>
                    <div aria-hidden="true" style={{ height: "6px", borderRadius: "999px", background: "#EFECE4", position: "relative" }}>
                      <span style={{ position: "absolute", left: "50%", top: "-4px", width: "2px", height: "14px", background: "#15201A" }}></span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Target ≤ 24 h · submission to decision
                    </span>
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      Search to enquiry
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      [value]
                    </strong>
                    <div aria-hidden="true" style={{ height: "6px", borderRadius: "999px", background: "#EFECE4", position: "relative" }}>
                      <span style={{ position: "absolute", left: "8%", top: "-4px", width: "2px", height: "14px", background: "#15201A" }}></span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Target ≥ 8% · searchers who send a first message
                    </span>
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1.5px solid #15201A", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      {"Closes via Plainly Secure "}
                      <span className="tip tip-end">
                        {" "}
                        <button type="button" aria-label="How closes via Plainly Secure is measured" aria-describedby="kpi-tip" style={{ width: "28px", height: "28px", border: "0", background: "transparent", borderRadius: "999px", display: "grid", placeItems: "center", padding: "0" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M12 11v5M12 8h.01"></path>
                          </svg>
                        </button>
                        {" "}
                        <span role="tooltip" id="kpi-tip">
                          Lets and sales paid through Plainly Secure, divided by all close-out declarations of "let" or "sold" in the period.
                        </span>
                        {" "}
                      </span>
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      [value]
                    </strong>
                    <div aria-hidden="true" style={{ height: "6px", borderRadius: "999px", background: "#EFECE4", position: "relative" }}>
                      <span style={{ position: "absolute", left: "60%", top: "-4px", width: "2px", height: "14px", background: "#15201A" }}></span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Target ≥ 60% · the core revenue signal
                    </span>
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      Close-out declarations
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      [value]
                    </strong>
                    <div aria-hidden="true" style={{ height: "6px", borderRadius: "999px", background: "#EFECE4", position: "relative" }}>
                      <span style={{ position: "absolute", left: "90%", top: "-4px", width: "2px", height: "14px", background: "#15201A" }}></span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Target ≥ 90% · ended listings with a declaration
                    </span>
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      Redaction false positives
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      [value]
                    </strong>
                    <div aria-hidden="true" style={{ height: "6px", borderRadius: "999px", background: "#EFECE4", position: "relative" }}>
                      <span style={{ position: "absolute", left: "2%", top: "-4px", width: "2px", height: "14px", background: "#15201A" }}></span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Target ≤ 2% · upheld appeals over redactions
                    </span>
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      KYC first-pass rate
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      [value]
                    </strong>
                    <div aria-hidden="true" style={{ height: "6px", borderRadius: "999px", background: "#EFECE4", position: "relative" }}>
                      <span style={{ position: "absolute", left: "85%", top: "-4px", width: "2px", height: "14px", background: "#15201A" }}></span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Target ≥ 85% · pass without manual review
                    </span>
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#3D4A43" }}>
                      Report to action
                    </span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
                      [value]
                    </strong>
                    <div aria-hidden="true" style={{ height: "6px", borderRadius: "999px", background: "#EFECE4", position: "relative" }}>
                      <span style={{ position: "absolute", left: "50%", top: "-4px", width: "2px", height: "14px", background: "#15201A" }}></span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#5E6862" }}>
                      Target ≤ 2 h · report received to first action
                    </span>
                  </div>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#5E6862" }}>
                  <span style={{ width: "2px", height: "12px", background: "#15201A" }}></span>
                  Tick marks the target on each track. Fill shows once live values are connected.
                </span>
              </section>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "stretch" }}>
                <section aria-labelledby="ch1-h" style={{ flex: "999 1 560px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                    <h3 id="ch1-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      Revenue by week
                    </h3>
                    <span style={{ height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700" }}>
                      Illustrative shape · wire to live data
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", fontSize: "12px", color: "#3D4A43" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "3px", background: "#0E5A3C" }}></span>
                      Closing fees
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "3px", background: "#7FB89A" }}></span>
                      Listing fees
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "3px", background: "#F4B728" }}></span>
                      {"Boosts & Verified Plus"}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "3px", background: "#15201A" }}></span>
                      Introduction fees
                    </span>
                  </div>
                  <div role="img" aria-label="Placeholder stacked bar chart of weekly revenue by stream, illustrative only" style={{ height: "220px", display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "12px", alignItems: "end", padding: "0 4px", borderBottom: "1px solid #CFC9BA", backgroundImage: "repeating-linear-gradient(to top, #EFECE4 0 1px, transparent 1px 55px)" }}>
                    <div style={{ display: "flex", flexDirection: "column-reverse", gap: "2px", height: "42%" }}>
                      <span style={{ flex: "5", background: "#0E5A3C", borderRadius: "0 0 2px 2px" }}></span>
                      <span style={{ flex: "3", background: "#7FB89A" }}></span>
                      <span style={{ flex: "1", background: "#F4B728" }}></span>
                      <span style={{ flex: "1", background: "#15201A", borderRadius: "4px 4px 0 0" }}></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column-reverse", gap: "2px", height: "50%" }}>
                      <span style={{ flex: "5", background: "#0E5A3C" }}></span>
                      <span style={{ flex: "3", background: "#7FB89A" }}></span>
                      <span style={{ flex: "1", background: "#F4B728" }}></span>
                      <span style={{ flex: "1", background: "#15201A", borderRadius: "4px 4px 0 0" }}></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column-reverse", gap: "2px", height: "46%" }}>
                      <span style={{ flex: "5", background: "#0E5A3C" }}></span>
                      <span style={{ flex: "3", background: "#7FB89A" }}></span>
                      <span style={{ flex: "1", background: "#F4B728" }}></span>
                      <span style={{ flex: "1", background: "#15201A", borderRadius: "4px 4px 0 0" }}></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column-reverse", gap: "2px", height: "58%" }}>
                      <span style={{ flex: "5", background: "#0E5A3C" }}></span>
                      <span style={{ flex: "3", background: "#7FB89A" }}></span>
                      <span style={{ flex: "1", background: "#F4B728" }}></span>
                      <span style={{ flex: "1", background: "#15201A", borderRadius: "4px 4px 0 0" }}></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column-reverse", gap: "2px", height: "64%" }}>
                      <span style={{ flex: "5", background: "#0E5A3C" }}></span>
                      <span style={{ flex: "3", background: "#7FB89A" }}></span>
                      <span style={{ flex: "1", background: "#F4B728" }}></span>
                      <span style={{ flex: "1", background: "#15201A", borderRadius: "4px 4px 0 0" }}></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column-reverse", gap: "2px", height: "60%" }}>
                      <span style={{ flex: "5", background: "#0E5A3C" }}></span>
                      <span style={{ flex: "3", background: "#7FB89A" }}></span>
                      <span style={{ flex: "1", background: "#F4B728" }}></span>
                      <span style={{ flex: "1", background: "#15201A", borderRadius: "4px 4px 0 0" }}></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column-reverse", gap: "2px", height: "72%" }}>
                      <span style={{ flex: "5", background: "#0E5A3C" }}></span>
                      <span style={{ flex: "3", background: "#7FB89A" }}></span>
                      <span style={{ flex: "1", background: "#F4B728" }}></span>
                      <span style={{ flex: "1", background: "#15201A", borderRadius: "4px 4px 0 0" }}></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column-reverse", gap: "2px", height: "80%" }}>
                      <span style={{ flex: "5", background: "#0E5A3C" }}></span>
                      <span style={{ flex: "3", background: "#7FB89A" }}></span>
                      <span style={{ flex: "1", background: "#F4B728" }}></span>
                      <span style={{ flex: "1", background: "#15201A", borderRadius: "4px 4px 0 0" }}></span>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "12px", padding: "0 4px", fontSize: "12px", color: "#5E6862", textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
                    <span>
                      W1
                    </span>
                    <span>
                      W2
                    </span>
                    <span>
                      W3
                    </span>
                    <span>
                      W4
                    </span>
                    <span>
                      W5
                    </span>
                    <span>
                      W6
                    </span>
                    <span>
                      W7
                    </span>
                    <span>
                      W8
                    </span>
                  </div>
                </section>
                <section aria-labelledby="ch2-h" style={{ flex: "1 1 320px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h3 id="ch2-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      Rental funnel
                    </h3>
                    <span style={{ alignSelf: "flex-start", height: "26px", padding: "0 9px", display: "inline-flex", alignItems: "center", borderRadius: "6px", background: "#FDF3D3", color: "#6B4E00", fontSize: "12px", fontWeight: "700" }}>
                      Illustrative shape · wire to live data
                    </span>
                  </div>
                  <div role="img" aria-label="Placeholder funnel from search to close, illustrative only" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ fontWeight: "600" }}>
                          Searches
                        </span>
                        <span style={{ color: "#5E6862" }}>
                          [value]
                        </span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "4px", background: "#0E5A3C", width: "100%" }}></div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ fontWeight: "600" }}>
                          Enquiries
                        </span>
                        <span style={{ color: "#5E6862" }}>
                          [value]
                        </span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "4px", background: "#0E5A3C", width: "62%" }}></div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ fontWeight: "600" }}>
                          Viewings
                        </span>
                        <span style={{ color: "#5E6862" }}>
                          [value]
                        </span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "4px", background: "#0E5A3C", width: "40%" }}></div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ fontWeight: "600" }}>
                          Applications
                        </span>
                        <span style={{ color: "#5E6862" }}>
                          [value]
                        </span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "4px", background: "#0E5A3C", width: "24%" }}></div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <span style={{ fontWeight: "600" }}>
                          Closed via Plainly Secure
                        </span>
                        <span style={{ color: "#5E6862" }}>
                          [value]
                        </span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "4px", background: "#0E5A3C", width: "12%" }}></div>
                    </div>
                  </div>
                </section>
              </div>
              <section aria-labelledby="rv-h" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "16px", overflow: "hidden", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 16px", borderBottom: "1px solid #E3DFD4" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <h3 id="rv-h" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      Revenue by stream
                    </h3>
                    <span style={{ fontSize: "13px", color: "#5E6862" }}>
                      Last 30 days vs previous 30 · ₦, net of refunds
                    </span>
                  </div>
                  <Link href="/admin/leakage" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
                    Open leakage cases
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 6 6 6-6 6"></path>
                    </svg>
                  </Link>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", minWidth: "760px", borderCollapse: "collapse", fontSize: "14px" }}>
                    <thead>
                      <tr style={{ background: "#F6F4EE", textAlign: "left" }}>
                        <th scope="col" style={{ padding: "10px 20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Stream
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862", textAlign: "right" }}>
                          This period
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862", textAlign: "right" }}>
                          Previous
                        </th>
                        <th scope="col" style={{ padding: "10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862", textAlign: "right" }}>
                          Change
                        </th>
                        <th scope="col" style={{ padding: "10px 20px 10px 12px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                          Basis
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ fontVariantNumeric: "tabular-nums" }}>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <th scope="row" style={{ padding: "12px 20px", textAlign: "left", fontWeight: "600" }}>
                          Listing fees
                        </th>
                        <td style={{ padding: "12px", textAlign: "right" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          ₦5,000–₦35,000 per 90 days by rent band
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <th scope="row" style={{ padding: "12px 20px", textAlign: "left", fontWeight: "600" }}>
                          Closing fees
                        </th>
                        <td style={{ padding: "12px", textAlign: "right" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          3% of first year's rent, min ₦15,000, less listing fee
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <th scope="row" style={{ padding: "12px 20px", textAlign: "left", fontWeight: "600" }}>
                          Introduction fees · invoiced
                        </th>
                        <td style={{ padding: "12px", textAlign: "right" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          Off-platform closes within 12 months
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <th scope="row" style={{ padding: "12px 20px 12px 36px", textAlign: "left", fontWeight: "500", color: "#3D4A43" }}>
                          Introduction fees · recovered
                        </th>
                        <td style={{ padding: "12px", textAlign: "right" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          Recovery rate [value]
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <th scope="row" style={{ padding: "12px 20px", textAlign: "left", fontWeight: "600" }}>
                          {"Boosts & Featured"}
                        </th>
                        <td style={{ padding: "12px", textAlign: "right" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          Paid placement, always labelled
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <th scope="row" style={{ padding: "12px 20px", textAlign: "left", fontWeight: "600" }}>
                          Verified Plus
                        </th>
                        <td style={{ padding: "12px", textAlign: "right" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          Inspection + professional shoot
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <th scope="row" style={{ padding: "12px 20px", textAlign: "left", fontWeight: "600" }}>
                          Credits issued
                        </th>
                        <td style={{ padding: "12px", textAlign: "right", color: "#8C1D17" }}>
                          −₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          −₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          Founding-owner, referral and refund credits
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #EFECE4" }}>
                        <th scope="row" style={{ padding: "12px 20px 12px 36px", textAlign: "left", fontWeight: "500", color: "#3D4A43" }}>
                          Credits redeemed
                        </th>
                        <td style={{ padding: "12px", textAlign: "right" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "12px 20px 12px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          Liability released when used
                        </td>
                      </tr>
                      <tr style={{ borderTop: "2px solid #15201A", background: "#F6F4EE" }}>
                        <th scope="row" style={{ padding: "14px 20px", textAlign: "left", fontWeight: "700" }}>
                          Net revenue
                        </th>
                        <td style={{ padding: "14px 12px", textAlign: "right", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "17px" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "14px 12px", textAlign: "right", color: "#5E6862" }}>
                          ₦[value]
                        </td>
                        <td style={{ padding: "14px 12px", textAlign: "right", color: "#5E6862" }}>
                          [value]
                        </td>
                        <td style={{ padding: "14px 20px 14px 12px", fontSize: "13px", color: "#3D4A43" }}>
                          Matches billing ledger 13 Oct 06:00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ padding: "12px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", fontSize: "12px", color: "#5E6862", borderTop: "1px solid #E3DFD4" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                      <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                    </svg>
                    Escrowed rent and deposits are not revenue and never appear here.
                  </span>
                  <Link href="/admin/config" style={{ fontWeight: "600", textDecoration: "none" }}>
                    Fee settings in Config
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
