"use client";

// Generated from Claude Design: W03-Listing.dc.html (WEB-04 · Listing detail)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class ListingDetailLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function ListingDetail() {
  useDCLogic(ListingDetailLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "2200px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "16px", lineHeight: "1.5", display: "flex", flexDirection: "column" }}>
        <header style={{ background: "#FFFFFF", borderBottom: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "12px 32px", minHeight: "72px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 32px" }}>
            <Link href="/" aria-label="Plainly home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#15201A" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
                <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
                <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
              </svg>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: "-0.03em" }}>
                plainly
              </span>
            </Link>
            <nav aria-label="Main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 28px" }}>
              <Link href="/search" aria-current="page" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#0E5A3C", boxShadow: "inset 0 -2px 0 #0E5A3C" }}>
                Rent
              </Link>
              <Link href="/search" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                Buy
              </Link>
              <Link href="/search" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                Land
              </Link>
              <Link href="/owner/listings/new" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                For owners
              </Link>
              <Link href="/coming-soon/A06-SafetyCentre" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
                Safety centre
              </Link>
            </nav>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
              <Link href="/owner/listings/new" style={{ height: "44px", padding: "0 16px", boxSizing: "border-box", display: "flex", alignItems: "center", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
                List your property
              </Link>
              <Link href="/login" style={{ height: "44px", padding: "0 20px", boxSizing: "border-box", display: "flex", alignItems: "center", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
                Sign in
              </Link>
            </div>
          </div>
        </header>
        <main style={{ flex: "1", width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "20px 32px 64px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "28px" }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px", fontSize: "14px", color: "#5E6862" }}>
              <li>
                <Link href="/search" style={{ fontWeight: "600", textDecoration: "none" }}>
                  Lagos
                </Link>
              </li>
              <li aria-hidden="true">
                ›
              </li>
              <li>
                <Link href="/search" style={{ fontWeight: "600", textDecoration: "none" }}>
                  Yaba
                </Link>
              </li>
              <li aria-hidden="true">
                ›
              </li>
              <li>
                <Link href="/search" style={{ fontWeight: "600", textDecoration: "none" }}>
                  Alagomeji
                </Link>
              </li>
              <li aria-hidden="true">
                ›
              </li>
              <li aria-current="page" style={{ color: "#3D4A43" }}>
                PL-24817
              </li>
            </ol>
          </nav>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 32px" }}>
            <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <h1 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "40px", lineHeight: "1.15", letterSpacing: "-0.02em" }}>
                  2-bed flat · Alagomeji, Yaba
                </h1>
                <span style={{ fontSize: "15px", color: "#3D4A43" }}>
                  Yaba LCDA, Lagos Mainland · For rent · Listing PL-24817
                </span>
              </div>
              <ul aria-label="Verification and listing badges" style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <li className="tip">
                  {" "}
                  <button type="button" aria-describedby="tb-owner" style={{ height: "32px", padding: "0 12px", display: "flex", alignItems: "center", gap: "6px", border: "0", borderRadius: "999px", background: "#E2F0E7", color: "#0E5A3C", font: "700 13px 'Figtree', sans-serif" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                      <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                    </svg>
                    Owner verified
                  </button>
                  {" "}
                  <span role="tooltip" id="tb-owner">
                    ID checked 12 Oct 2026 and proof of control (Land Use Charge demand) reviewed 13 Oct 2026. Plainly does not certify title.
                  </span>
                  {" "}
                </li>
                <li className="tip">
                  {" "}
                  <button type="button" aria-describedby="tb-id" style={{ height: "32px", padding: "0 12px", display: "flex", alignItems: "center", gap: "6px", border: "0", borderRadius: "999px", background: "#E5EEFB", color: "#164A90", font: "700 13px 'Figtree', sans-serif" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>
                    </svg>
                    ID verified
                  </button>
                  {" "}
                  <span role="tooltip" id="tb-id">
                    Owner's NIN and a live selfie were matched on 12 Oct 2026.
                  </span>
                  {" "}
                </li>
                <li className="tip">
                  {" "}
                  <button type="button" aria-describedby="tb-live" style={{ height: "32px", padding: "0 12px", display: "flex", alignItems: "center", gap: "6px", border: "0", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", font: "700 13px 'Figtree', sans-serif" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#F4B728" }}></span>
                    Live video
                  </button>
                  {" "}
                  <span role="tooltip" id="tb-live">
                    Recorded in the Plainly app at the property on 12 Oct 2026. GPS and time were checked against the listing pin.
                  </span>
                  {" "}
                </li>
                <li className="tip">
                  {" "}
                  <button type="button" aria-describedby="tb-fair" style={{ height: "32px", padding: "0 12px", display: "flex", alignItems: "center", gap: "6px", border: "0", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", font: "700 13px 'Figtree', sans-serif" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                    </svg>
                    Fair Terms
                  </button>
                  {" "}
                  <span role="tooltip" id="tb-fair">
                    Advance is 12 months or less, the deposit refund rule is stated and there are no unlisted charges. Removed automatically if terms change.
                  </span>
                  {" "}
                </li>
                <li className="tip">
                  {" "}
                  <button type="button" aria-describedby="tb-by" style={{ height: "32px", padding: "0 12px", display: "flex", alignItems: "center", gap: "6px", border: "1px solid #CFC9BA", borderRadius: "999px", background: "#FFFFFF", color: "#15201A", font: "700 13px 'Figtree', sans-serif" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
                    </svg>
                    Listed by owner
                  </button>
                  {" "}
                  <span role="tooltip" id="tb-by">
                    The person who controls this home listed it themselves. No agency or legal fee is added.
                  </span>
                  {" "}
                </li>
              </ul>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <button type="button" style={{ height: "44px", padding: "0 14px", display: "flex", alignItems: "center", gap: "8px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", color: "#15201A", font: "600 14px 'Figtree', sans-serif" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="18" cy="5" r="2.5"></circle>
                  <circle cx="6" cy="12" r="2.5"></circle>
                  <circle cx="18" cy="19" r="2.5"></circle>
                  <path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"></path>
                </svg>
                Share on WhatsApp
              </button>
              <button type="button" aria-pressed="false" style={{ height: "44px", padding: "0 14px", display: "flex", alignItems: "center", gap: "8px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", color: "#15201A", font: "600 14px 'Figtree', sans-serif" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path>
                </svg>
                Save
              </button>
              <Link href="/coming-soon/A07-Report" style={{ height: "44px", padding: "0 14px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", border: "0", borderRadius: "12px", background: "transparent", color: "#3D4A43", font: "600 14px 'Figtree', sans-serif", textDecoration: "none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 21V4M5 4h11l-2 4 2 4H5"></path>
                </svg>
                Report
              </Link>
            </div>
          </div>
          <section aria-label="Video and photos" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "18px", overflow: "hidden", background: "#B9C9BF", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}>
                {" "}
                <span style={{ position: "absolute", top: "16px", left: "16px", height: "30px", padding: "0 12px", display: "flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", fontSize: "13px", fontWeight: "700" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#F4B728" }}></span>
                  Live video · 2:14 · captured at the property 12 Oct
                </span>
                {" "}
                <span style={{ position: "absolute", top: "16px", right: "16px", height: "30px", padding: "0 10px", display: "flex", alignItems: "center", gap: "6px", borderRadius: "999px", background: "rgba(255,255,255,.92)", color: "#15201A", fontSize: "12px", fontWeight: "700" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3l18 18"></path>
                    <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.7M14 10.3A10 10 0 0 1 19 13"></path>
                  </svg>
                  Data saver: thumbnail until you press play
                </span>
                {" "}
                <button type="button" aria-label="Play walkthrough video, 2 minutes 14 seconds" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "84px", height: "84px", border: "0", borderRadius: "999px", background: "rgba(21,32,26,.78)", display: "grid", placeItems: "center" }}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </button>
                {" "}
                <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, 64px)", fontSize: "14px", fontWeight: "600", color: "#15201A" }}>
                  Walkthrough: gate, parlour, kitchen, both bedrooms
                </span>
                {" "}
                <span style={{ position: "absolute", right: "24px", bottom: "76px", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "18px", fontWeight: "800", letterSpacing: "0.08em", color: "rgba(255,255,255,.7)" }}>
                  PLAINLY · PL-24817
                </span>
                {" "}
                <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "10px 14px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", background: "rgba(21,32,26,.82)", color: "#FFFFFF" }}>
                  <button type="button" aria-label="Play" style={{ width: "40px", height: "40px", border: "0", borderRadius: "10px", background: "transparent", display: "grid", placeItems: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                  <span style={{ fontSize: "13px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                    0:00 / 2:14
                  </span>
                  <div role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="134" aria-valuenow="0" tabIndex="0" style={{ flex: "1 1 120px", height: "4px", borderRadius: "4px", background: "rgba(255,255,255,.3)", position: "relative" }}>
                    <span style={{ position: "absolute", left: "0", top: "-4px", width: "12px", height: "12px", borderRadius: "999px", background: "#F4B728" }}></span>
                  </div>
                  <label style={{ height: "36px", display: "flex", alignItems: "center", gap: "6px", padding: "0 8px", borderRadius: "8px", background: "rgba(255,255,255,.12)", fontSize: "13px", fontWeight: "600" }}>
                    {"Quality "}
                    <select defaultValue="Auto (data saver)" style={{ border: "0", background: "transparent", color: "#FFFFFF", font: "700 13px 'Figtree', sans-serif" }}>
                      <option style={{ color: "#15201A" }}>
                        Auto (data saver)
                      </option>
                      <option style={{ color: "#15201A" }}>
                        240p
                      </option>
                      <option style={{ color: "#15201A" }}>
                        480p
                      </option>
                      <option style={{ color: "#15201A" }}>
                        720p
                      </option>
                      <option style={{ color: "#15201A" }}>
                        1080p
                      </option>
                    </select>
                  </label>
                  <button type="button" aria-pressed="true" aria-label="Captions on" style={{ height: "36px", padding: "0 10px", border: "1.5px solid #FFFFFF", borderRadius: "8px", background: "#FFFFFF", color: "#15201A", font: "800 12px 'Figtree', sans-serif" }}>
                    CC on
                  </button>
                  <button type="button" aria-label="Full screen" style={{ width: "40px", height: "40px", border: "0", borderRadius: "10px", background: "transparent", display: "grid", placeItems: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                Every photo and video carries the Plainly watermark and listing ID. Location data is removed from public copies.
              </span>
            </div>
            <div style={{ flex: "1 1 280px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gridAutoRows: "minmax(120px, 1fr)", gap: "12px" }}>
              <button type="button" aria-label="Photo 1 of 18: parlour" style={{ position: "relative", border: "0", borderRadius: "14px", padding: "0", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", font: "600 13px 'Figtree', sans-serif", color: "#15201A" }}>
                Parlour
                <span style={{ position: "absolute", right: "8px", bottom: "6px", fontSize: "9px", fontWeight: "700", letterSpacing: "0.08em", color: "rgba(255,255,255,.85)" }}>
                  PLAINLY · PL-24817
                </span>
              </button>
              <button type="button" aria-label="Photo 2 of 18: kitchen" style={{ position: "relative", border: "0", borderRadius: "14px", padding: "0", background: "#D6D2C2", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", font: "600 13px 'Figtree', sans-serif", color: "#15201A" }}>
                Kitchen
                <span style={{ position: "absolute", right: "8px", bottom: "6px", fontSize: "9px", fontWeight: "700", letterSpacing: "0.08em", color: "rgba(255,255,255,.85)" }}>
                  PLAINLY · PL-24817
                </span>
              </button>
              <button type="button" aria-label="Photo 3 of 18: main bedroom" style={{ position: "relative", border: "0", borderRadius: "14px", padding: "0", background: "#D3DAD6", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", font: "600 13px 'Figtree', sans-serif", color: "#15201A" }}>
                Main bedroom
                <span style={{ position: "absolute", right: "8px", bottom: "6px", fontSize: "9px", fontWeight: "700", letterSpacing: "0.08em", color: "rgba(255,255,255,.85)" }}>
                  PLAINLY · PL-24817
                </span>
              </button>
              <button type="button" aria-label="See all 18 photos" style={{ position: "relative", border: "0", borderRadius: "14px", padding: "0", overflow: "hidden", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)", font: "600 13px 'Figtree', sans-serif", color: "#FFFFFF" }}>
                {" "}
                <span style={{ position: "absolute", inset: "0", background: "rgba(21,32,26,.62)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "28px", fontWeight: "800" }}>
                    +14
                  </span>
                  <span>
                    See all photos
                  </span>
                </span>
                {" "}
                <span style={{ position: "absolute", right: "8px", bottom: "6px", fontSize: "9px", fontWeight: "700", letterSpacing: "0.08em", color: "rgba(255,255,255,.85)" }}>
                  PLAINLY · PL-24817
                </span>
                {" "}
              </button>
            </div>
          </section>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "32px" }}>
            <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
              <section aria-labelledby="h-facts" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <h2 id="h-facts" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px", letterSpacing: "-0.02em" }}>
                  Key facts
                </h2>
                <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: "12px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 18V7M3 13h18v5M21 18v-5a3 3 0 0 0-3-3h-8v3"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Bedrooms
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        2
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                      <path d="M6 12V6a2 2 0 0 1 4 0"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Bathrooms
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        2
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                      <path d="M6 12V6a2 2 0 0 1 4 0"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Toilets
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        3
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Size
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        85 m²
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Floor
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        2nd floor
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="4" width="16" height="16" rx="3"></rect>
                      <path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Parking
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        1 space
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M13 3 5 13h6l-1 8 8-10h-6z"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Power
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        Prepaid meter · Band B
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Water
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        Borehole
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                      <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Security
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        Gated street
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 14 0M2 9.5a14.5 14.5 0 0 1 20 0"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Internet
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        Fibre available
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M2 18h20M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Furnishing
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        Unfurnished
                      </dd>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px", borderRadius: "12px", background: "#F6F4EE" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                      <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                    </svg>
                    <div>
                      <dt style={{ fontSize: "13px", color: "#5E6862" }}>
                        Available from
                      </dt>
                      <dd style={{ margin: "0", fontWeight: "700" }}>
                        1 Nov 2026
                      </dd>
                    </div>
                  </div>
                </dl>
              </section>
              <section aria-labelledby="h-desc" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h2 id="h-desc" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px", letterSpacing: "-0.02em" }}>
                  About this home
                </h2>
                <p style={{ margin: "0", color: "#3D4A43", maxWidth: "720px" }}>
                  A bright 2-bedroom flat on the second floor of a quiet, gated street in Alagomeji. Both bedrooms are en suite, with a guest toilet off the parlour. The kitchen has fitted cabinets and space for a gas cooker. Water comes from a borehole and power is on a prepaid meter (grid band B). One parking space in the compound.
                </p>
                <p style={{ margin: "0", color: "#3D4A43", maxWidth: "720px" }}>
                  Walking distance to Yaba bus stops and the tech offices around Herbert Macaulay Way. I live in Surulere and come over for every viewing myself.
                </p>
                <span style={{ fontSize: "13px", color: "#5E6862" }}>
                  Written by the owner. Contact details in descriptions are removed automatically.
                </span>
              </section>
              <section aria-labelledby="h-terms" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <h2 id="h-terms" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px", letterSpacing: "-0.02em" }}>
                    Terms
                  </h2>
                  <span style={{ height: "26px", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#E3F4EA", color: "#145C37", fontSize: "12px", fontWeight: "700" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#145C37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                    </svg>
                    Fair Terms
                  </span>
                </div>
                <div style={{ overflowX: "auto", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                  <table style={{ width: "100%", minWidth: "480px", borderCollapse: "collapse", fontSize: "15px" }}>
                    <tbody>
                      <tr>
                        <th scope="row" style={{ textAlign: "left", fontWeight: "600", color: "#5E6862", padding: "14px 16px", width: "38%", background: "#FBFAF7" }}>
                          Rent
                        </th>
                        <td style={{ padding: "14px 16px", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                          ₦2,000,000 a year · paid yearly
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <th scope="row" style={{ textAlign: "left", fontWeight: "600", color: "#5E6862", padding: "14px 16px", background: "#FBFAF7" }}>
                          Advance required
                        </th>
                        <td style={{ padding: "14px 16px", fontWeight: "700" }}>
                          1 year (12 months)
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <th scope="row" style={{ textAlign: "left", fontWeight: "600", color: "#5E6862", padding: "14px 16px", background: "#FBFAF7" }}>
                          Caution deposit
                        </th>
                        <td style={{ padding: "14px 16px" }}>
                          <strong style={{ fontVariantNumeric: "tabular-nums" }}>
                            ₦200,000
                          </strong>
                          {" "}
                          <span style={{ color: "#3D4A43" }}>
                            · refunded within 14 days of move-out; deductions only for documented damage
                          </span>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <th scope="row" style={{ textAlign: "left", fontWeight: "600", color: "#5E6862", padding: "14px 16px", background: "#FBFAF7" }}>
                          Duration
                        </th>
                        <td style={{ padding: "14px 16px", fontWeight: "700" }}>
                          1 year, renewable
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <th scope="row" style={{ textAlign: "left", fontWeight: "600", color: "#5E6862", padding: "14px 16px", background: "#FBFAF7" }}>
                          Service charge · Agreement
                        </th>
                        <td style={{ padding: "14px 16px" }}>
                          <strong>
                            ₦0 · ₦0
                          </strong>
                          {" "}
                          <span style={{ color: "#3D4A43" }}>
                            · free standard tenancy agreement
                          </span>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                        <th scope="row" style={{ textAlign: "left", fontWeight: "600", color: "#5E6862", padding: "14px 16px", background: "#FBFAF7" }}>
                          Price history
                        </th>
                        <td style={{ padding: "14px 16px", fontVariantNumeric: "tabular-nums" }}>
                          ₦2,000,000 since 2 Oct · no changes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section aria-labelledby="h-area" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px" }}>
                  <h2 id="h-area" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px", letterSpacing: "-0.02em" }}>
                    Neighbourhood
                  </h2>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Distances are from the centre of the 300 m area, not the exact address
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  <div style={{ flex: "1 1 240px", minHeight: "240px", position: "relative", overflow: "hidden", borderRadius: "14px", background: "#E9E5DA" }}>
                    <div style={{ position: "absolute", right: "-60px", top: "20px", width: "140px", height: "260px", borderRadius: "50%", background: "#CFE0E8" }}></div>
                    <div style={{ position: "absolute", left: "-10%", top: "38%", width: "130%", height: "10px", background: "#FFFFFF", transform: "rotate(-8deg)" }}></div>
                    <div style={{ position: "absolute", left: "40%", top: "-10%", width: "8px", height: "130%", background: "#FFFFFF", transform: "rotate(12deg)" }}></div>
                    <div style={{ position: "absolute", left: "46%", top: "52%", width: "150px", height: "150px", margin: "-75px 0 0 -75px", borderRadius: "999px", background: "rgba(14,90,60,.16)", border: "2px dashed #0E5A3C", boxSizing: "border-box" }}></div>
                    {" "}
                    <span style={{ position: "absolute", left: "12px", top: "12px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                      Alagomeji
                    </span>
                    {" "}
                    <span style={{ position: "absolute", left: "12px", right: "12px", bottom: "12px", padding: "6px 8px", borderRadius: "8px", background: "rgba(255,255,255,.92)", fontSize: "12px", color: "#3D4A43", display: "flex", gap: "6px", alignItems: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                      </svg>
                      Exact address shared after your viewing is confirmed
                    </span>
                    {" "}
                  </div>
                  <div style={{ flex: "999 1 320px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "14px", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#0E5A3C" }}>
                        Transport
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Yaba bus stop · Ojuelegba · Yaba rail station
                      </span>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Source: [maps provider], Oct 2026
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "14px", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#0E5A3C" }}>
                        Schools
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Yaba College of Technology · University of Lagos (Akoka)
                      </span>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Source: [schools directory]
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "14px", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#0E5A3C" }}>
                        Hospitals
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Federal Medical Centre, Ebute Metta
                      </span>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Source: [health facility registry]
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "14px", border: "1px solid #E3DFD4", borderRadius: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#0E5A3C" }}>
                        Markets
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Yaba Market (Tejuosho)
                      </span>
                      <span style={{ fontSize: "12px", color: "#5E6862" }}>
                        Source: [maps provider], Oct 2026
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 14px", borderRadius: "12px", background: "#E5EEFB", color: "#164A90", fontSize: "14px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#164A90" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 11v5M12 8h.01"></path>
                  </svg>
                  <span>
                    <strong>
                      Flood risk: Low
                    </strong>
                    {" — source: [data provider]. Ask the owner about the street in rainy season during your viewing."}
                  </span>
                </div>
              </section>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "16px" }}>
                <section aria-labelledby="h-acc" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 id="h-acc" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                    Listing accuracy
                  </h2>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.02em" }}>
                      4.8
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span aria-label="4.8 out of 5" style={{ display: "flex", gap: "2px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#F4B728" stroke="#15201A" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
                          <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#F4B728" stroke="#15201A" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
                          <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#F4B728" stroke="#15201A" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
                          <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#F4B728" stroke="#15201A" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
                          <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#FDF3D3" stroke="#15201A" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
                          <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"></path>
                        </svg>
                      </span>
                      <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                        from 6 viewers who said it matched
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Only people who attended a viewing booked on Plainly can answer “Did the home match the listing?”
                  </span>
                </section>
                <section aria-labelledby="h-owner" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span aria-hidden="true" style={{ width: "56px", height: "56px", flex: "none", borderRadius: "999px", background: "#0E5A3C", color: "#FFFFFF", display: "grid", placeItems: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "20px" }}>
                      FA
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                      <h2 id="h-owner" style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                        {"Funke A. "}
                        <span style={{ fontWeight: "500", color: "#5E6862", fontSize: "14px" }}>
                          · Owner
                        </span>
                      </h2>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px", fontWeight: "700", color: "#0E5A3C" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                          <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                        </svg>
                        Owner verified · ID verified
                      </span>
                    </div>
                  </div>
                  <dl style={{ margin: "0", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "8px", textAlign: "left" }}>
                    <div style={{ padding: "10px", borderRadius: "12px", background: "#F6F4EE" }}>
                      <dt style={{ fontSize: "12px", color: "#5E6862" }}>
                        Responds
                      </dt>
                      <dd style={{ margin: "0", fontSize: "14px", fontWeight: "700" }}>
                        Within 2 h
                      </dd>
                    </div>
                    <div style={{ padding: "10px", borderRadius: "12px", background: "#F6F4EE" }}>
                      <dt style={{ fontSize: "12px", color: "#5E6862" }}>
                        Member since
                      </dt>
                      <dd style={{ margin: "0", fontSize: "14px", fontWeight: "700" }}>
                        2026
                      </dd>
                    </div>
                    <div style={{ padding: "10px", borderRadius: "12px", background: "#F6F4EE" }}>
                      <dt style={{ fontSize: "12px", color: "#5E6862" }}>
                        Verified Closes
                      </dt>
                      <dd style={{ margin: "0", fontSize: "14px", fontWeight: "700" }}>
                        3
                      </dd>
                    </div>
                  </dl>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Verified Closes count lets completed through Plainly Secure.
                  </span>
                </section>
              </div>
            </div>
            <aside aria-label="Cost and next steps" style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
              <section aria-labelledby="h-cost" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span id="h-cost" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                    To move in
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "40px", lineHeight: "1.1", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                    ₦2,200,000
                  </span>
                  <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                    That's everything. No other charges.
                  </span>
                </div>
                <dl style={{ margin: "0", display: "flex", flexDirection: "column", fontSize: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "9px 0" }}>
                    <dt style={{ color: "#3D4A43" }}>
                      Rent · 1 year advance
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                      ₦2,000,000
                    </dd>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "9px 0", borderTop: "1px solid #E3DFD4" }}>
                    <dt style={{ color: "#3D4A43" }}>
                      Caution deposit · refundable
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                      ₦200,000
                    </dd>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "9px 0", borderTop: "1px solid #E3DFD4" }}>
                    <dt style={{ color: "#3D4A43" }}>
                      Service charge
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                      ₦0
                    </dd>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "9px 0", borderTop: "1px solid #E3DFD4" }}>
                    <dt style={{ color: "#3D4A43" }}>
                      Agreement fee · standard
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                      ₦0
                    </dd>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "9px 0", borderTop: "1px solid #E3DFD4" }}>
                    <dt style={{ color: "#3D4A43" }}>
                      Agency / legal fee · listed by owner
                    </dt>
                    <dd style={{ margin: "0", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                      ₦0
                    </dd>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "12px 0 0", borderTop: "1.5px solid #15201A" }}>
                    <dt style={{ fontWeight: "700" }}>
                      Total to move in
                    </dt>
                    <dd style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "18px", fontVariantNumeric: "tabular-nums" }}>
                      ₦2,200,000
                    </dd>
                  </div>
                </dl>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "14px", borderRadius: "14px", background: "#FDF3D3" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#15201A" }}>
                      Compared with the agent route
                    </span>
                    <span style={{ height: "22px", padding: "0 8px", display: "flex", alignItems: "center", borderRadius: "6px", background: "#FFFFFF", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6B4E00" }}>
                      Illustration
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                      <span style={{ fontWeight: "600" }}>
                        Plainly
                      </span>
                      <span style={{ fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                        ₦2.2m
                      </span>
                    </div>
                    <div style={{ height: "10px", borderRadius: "999px", background: "#0E5A3C", width: "83%" }}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                      <span style={{ fontWeight: "600" }}>
                        Agent route (illustration)
                      </span>
                      <span style={{ fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>
                        ₦2.61m–₦2.65m
                      </span>
                    </div>
                    <div style={{ height: "10px", borderRadius: "999px", background: "#15201A", width: "100%", position: "relative" }}>
                      <span style={{ position: "absolute", right: "0", top: "0", width: "2%", height: "10px", borderRadius: "0 999px 999px 0", background: "#CFC9BA" }}></span>
                    </div>
                  </div>
                  <span style={{ fontSize: "12px", color: "#6B4E00" }}>
                    Typical agency 10% (₦200,000) + legal 10% (₦200,000) + inspection/form ₦10,000–₦50,000, same rent and 1 year advance.
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Link href="/coming-soon/S10-Viewing" style={{ height: "52px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontSize: "16px", fontWeight: "700" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                      <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                    </svg>
                    Book a free viewing
                  </Link>
                  <Link href="/messages" style={{ height: "52px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", textDecoration: "none", fontSize: "16px", fontWeight: "700" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 5h16v11H9l-5 4z"></path>
                    </svg>
                    Chat with owner
                  </Link>
                  <span style={{ textAlign: "center", fontSize: "14px", fontWeight: "600", color: "#15201A" }}>
                    Free to view, chat and apply.
                  </span>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "13px", color: "#5E6862" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3l18 18"></path>
                      <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                    </svg>
                    Owner's number stays hidden until you both sign
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 14px", borderRadius: "12px", background: "#E2F0E7", color: "#0A4630", fontSize: "14px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                    <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                  </svg>
                  <span>
                    <strong>
                      Plainly can only protect money paid through Plainly.
                    </strong>
                    {" Pay into Plainly Secure; the owner is paid after you confirm move-in."}
                  </span>
                </div>
              </section>
              <section aria-label="Availability" style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#1C7A4A", flex: "none" }}></span>
                  <span>
                    <strong>
                      Last confirmed available 2 days ago
                    </strong>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3D4A43" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D4A43" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
                    <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                  </svg>
                  Available from 1 Nov 2026
                </div>
                <span style={{ fontSize: "13px", color: "#5E6862" }}>
                  Owners confirm availability every 72 hours or the listing is paused.
                </span>
              </section>
            </aside>
          </div>
          <section aria-labelledby="h-similar" style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "8px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
              <h2 id="h-similar" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "28px", letterSpacing: "-0.02em" }}>
                Similar homes
              </h2>
              <Link href="/search" style={{ fontSize: "15px", fontWeight: "600", textDecoration: "none" }}>
                See all in Yaba
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "16px" }}>
              <Link href="/listings/PL-24817" style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", color: "#15201A", textDecoration: "none", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ height: "160px", position: "relative", background: "#C9D6CD", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}>
                  {" "}
                  <span style={{ position: "absolute", top: "10px", left: "10px", height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#15201A", fontSize: "12px", fontWeight: "700", color: "#FFFFFF" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "9px", background: "#F4B728" }}></span>
                    Live video
                  </span>
                  {" "}
                </div>
                <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontWeight: "700", fontSize: "16px" }}>
                    Mini-flat · Onike, Yaba
                  </span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "8px", paddingTop: "6px", borderTop: "1px dashed #E3DFD4" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                        To move in
                      </span>
                      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums" }}>
                        ₦1,350,000
                      </span>
                    </div>
                    <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                      ₦1,200,000/yr
                      <br />
                      Listed by owner
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="/listings/PL-24817" style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", color: "#15201A", textDecoration: "none", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ height: "160px", position: "relative", background: "#D6D2C2", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}>
                  {" "}
                  <span style={{ position: "absolute", top: "10px", left: "10px", height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#F4B728", fontSize: "12px", fontWeight: "700", color: "#15201A" }}>
                    Featured
                  </span>
                  {" "}
                </div>
                <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontWeight: "700", fontSize: "16px" }}>
                    1-bed flat · Adeniran Ogunsanya, Surulere
                  </span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "8px", paddingTop: "6px", borderTop: "1px dashed #E3DFD4" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                        To move in
                      </span>
                      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums" }}>
                        ₦2,000,000
                      </span>
                    </div>
                    <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                      ₦1,800,000/yr
                      <br />
                      Inspected
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="/listings/PL-24817" style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", overflow: "hidden", color: "#15201A", textDecoration: "none", boxShadow: "0 1px 2px rgba(21,32,26,.06)" }}>
                <div style={{ height: "160px", position: "relative", background: "#D3DAD6", backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.18) 0 2px, transparent 2px 14px)" }}>
                  {" "}
                  <span style={{ position: "absolute", top: "10px", left: "10px", height: "26px", padding: "0 9px", display: "flex", alignItems: "center", gap: "5px", borderRadius: "999px", background: "#EFECE4", fontSize: "12px", fontWeight: "700", color: "#3D4A43" }}>
                    Uploaded video
                  </span>
                  {" "}
                </div>
                <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontWeight: "700", fontSize: "16px" }}>
                    Self-contain · Akoka
                  </span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "8px", paddingTop: "6px", borderTop: "1px dashed #E3DFD4" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5E6862" }}>
                        To move in
                      </span>
                      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px", fontVariantNumeric: "tabular-nums" }}>
                        ₦750,000
                      </span>
                    </div>
                    <span style={{ fontSize: "13px", color: "#3D4A43", textAlign: "right" }}>
                      ₦650,000/yr
                      <br />
                      Listed by owner
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </main>
        <footer style={{ background: "#FFFFFF", borderTop: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "28px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
                <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
                <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
              </svg>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "20px", letterSpacing: "-0.03em" }}>
                plainly
              </span>
              <span style={{ fontSize: "14px", color: "#5E6862" }}>
                Plainly. Straight to the owner.
              </span>
            </div>
            <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", fontSize: "14px", fontWeight: "600" }}>
              <Link href="/coming-soon/A06-SafetyCentre" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                Safety centre
              </Link>
              <Link href="/browse" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                How fees work
              </Link>
              <Link href="/owner/listings/new" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                For owners
              </Link>
              <Link href="/browse" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                Agents
              </Link>
              <Link href="/browse" style={{ minHeight: "44px", display: "flex", alignItems: "center", textDecoration: "none", color: "#3D4A43" }}>
                Legal
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
