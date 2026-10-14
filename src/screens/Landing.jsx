"use client";

// Generated from Claude Design: W00-Landing.dc.html (WEB-00 · Landing page)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}\n@media (max-width: 860px){.nav-links{display:none !important}.nav-menu{display:inline-flex !important}}\nsummary{cursor:pointer;list-style:none}summary::-webkit-details-marker{display:none}\ndetails[open] .faq-plus{transform:rotate(45deg)}";

class LandingLogic extends DCLogic {
  constructor(props) { super(props); this.state = { tab: 'seeker' }; }
  renderVals() {
    const isSeeker = (this.state && this.state.tab) !== 'owner';
    return {
      isSeeker: isSeeker,
      isOwner: !isSeeker,
      seekerSelected: isSeeker ? 'true' : 'false',
      ownerSelected: isSeeker ? 'false' : 'true',
      seekerBg: isSeeker ? '#15201A' : 'transparent',
      seekerFg: isSeeker ? '#FFFFFF' : '#3D4A43',
      ownerBg: isSeeker ? 'transparent' : '#15201A',
      ownerFg: isSeeker ? '#3D4A43' : '#FFFFFF',
      showSeeker: () => this.setState({ tab: 'seeker' }),
      showOwner: () => this.setState({ tab: 'owner' })
    };
  }
}

export default function Landing() {
  const v = useDCLogic(LandingLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "5610px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "16px", lineHeight: "1.55" }}>
        <header style={{ background: "rgba(246,244,238,.96)", borderBottom: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <Link href="/" aria-label="Plainly home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#15201A" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
                <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
                <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
              </svg>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "25px", letterSpacing: "-0.03em" }}>
                plainly
              </span>
            </Link>
            <nav aria-label="Main" className="nav-links" style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "15px", fontWeight: "600" }}>
              <a href="#how" style={{ color: "#3D4A43", textDecoration: "none" }}>
                How it works
              </a>
              <Link href="/browse" style={{ color: "#3D4A43", textDecoration: "none" }}>
                Browse homes
              </Link>
              <a href="#owners" style={{ color: "#3D4A43", textDecoration: "none" }}>
                For owners
              </a>
              <a href="#fees" style={{ color: "#3D4A43", textDecoration: "none" }}>
                Fees
              </a>
              <Link href="/coming-soon/A06-SafetyCentre" style={{ color: "#3D4A43", textDecoration: "none" }}>
                Safety
              </Link>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Link href="/login" style={{ height: "44px", padding: "0 16px", display: "inline-flex", alignItems: "center", borderRadius: "12px", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                Log in
              </Link>
              <Link href="/join" style={{ height: "44px", padding: "0 18px", display: "inline-flex", alignItems: "center", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                Get started
              </Link>
              <a href="#roles" className="nav-menu" aria-label="Open menu" style={{ display: "none", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", borderRadius: "12px", border: "1px solid #E3DFD4", background: "#FFFFFF" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", right: "-60px", top: "40px", display: "flex", alignItems: "flex-end", gap: "18px", opacity: ".9" }}>
            <div style={{ width: "120px", height: "220px", borderRadius: "60px 60px 0 0", background: "#E2F0E7" }}></div>
            <div style={{ width: "160px", height: "300px", borderRadius: "80px 80px 0 0", background: "#0E5A3C", position: "relative" }}>
              <div style={{ position: "absolute", left: "34px", right: "34px", bottom: "0", height: "190px", borderRadius: "46px 46px 0 0", background: "#F4B728" }}></div>
            </div>
            <div style={{ width: "120px", height: "180px", borderRadius: "60px 60px 0 0", background: "#EFECE4" }}></div>
          </div>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 32px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <span style={{ alignSelf: "flex-start", height: "32px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E3DFD4", fontSize: "13px", fontWeight: "700", color: "#0E5A3C" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#1C7A4A" }}></span>
              Now open in Lagos · Yaba, Surulere, Gbagada and more
            </span>
            <h1 style={{ margin: "0", maxWidth: "820px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(40px, 7vw, 80px)", lineHeight: "0.98", letterSpacing: "-0.04em", textWrap: "balance" }}>
              Rent and buy straight from the owner.
            </h1>
            <p style={{ margin: "0", maxWidth: "640px", fontSize: "clamp(17px, 2vw, 20px)", color: "#3D4A43" }}>
              Verified owners, real walkthrough videos and the full cost to move in, before you ever leave home. No inspection fees. No surprise charges. Your money held safely until you get the keys.
            </p>
          </div>
        </section>
        <section id="roles" aria-labelledby="roles-title" style={{ maxWidth: "1200px", margin: "0 auto", padding: "8px 24px 64px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <h2 id="roles-title" style={{ margin: "0", fontSize: "15px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
            Start here: which describes you?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: "20px" }}>
            <article style={{ background: "#FFFFFF", border: "1.5px solid #15201A", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "22px", boxShadow: "0 24px 48px -28px rgba(21,32,26,.35)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#E2F0E7", display: "grid", placeItems: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-3.5-3.5"></path>
                  </svg>
                </span>
                <span style={{ height: "30px", padding: "0 12px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#FDF3D3", color: "#6B4E00", fontSize: "13px", fontWeight: "700" }}>
                  Always free for you
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                  Tenant or buyer
                </span>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "34px", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
                  I'm looking for a home
                </h3>
              </div>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", color: "#3D4A43" }}>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                    <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                  </svg>
                  <span>
                    <strong style={{ color: "#15201A" }}>
                      Watch before you visit.
                    </strong>
                    {" Every rental has a real walkthrough video."}
                  </span>
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                    <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                  </svg>
                  <span>
                    <strong style={{ color: "#15201A" }}>
                      See the full cost to move in.
                    </strong>
                    {" Rent, deposit and every charge, itemised."}
                  </span>
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C7A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                    <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                  </svg>
                  <span>
                    <strong style={{ color: "#15201A" }}>
                      ₦0 to search, chat, view or apply.
                    </strong>
                    {" No inspection, form or agency fees."}
                  </span>
                </li>
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginTop: "auto" }}>
                <Link href="/join" style={{ height: "52px", padding: "0 24px", display: "inline-flex", alignItems: "center", gap: "10px", borderRadius: "14px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                  Sign up as a tenant or buyer
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/browse" style={{ height: "52px", padding: "0 8px", display: "inline-flex", alignItems: "center", fontWeight: "700", fontSize: "15px" }}>
                  Browse first, no account
                </Link>
              </div>
            </article>
            <article id="owner-card" style={{ background: "#15201A", color: "#F6F4EE", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "22px", boxShadow: "0 24px 48px -28px rgba(21,32,26,.55)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#F4B728", display: "grid", placeItems: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="8" cy="15" r="4"></circle>
                    <path d="m11 12 9-9M17 6l3 3"></path>
                  </svg>
                </span>
                <span style={{ height: "30px", padding: "0 12px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#26342C", color: "#F4B728", fontSize: "13px", fontWeight: "700" }}>
                  First listing free for founding owners
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F4B728" }}>
                  Landlord or property owner
                </span>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "34px", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
                  I own property to let or sell
                </h3>
              </div>
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", color: "#C9D2CC" }}>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5CC28E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                    <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                  </svg>
                  <span>
                    <strong style={{ color: "#FFFFFF" }}>
                      ID-checked tenants only.
                    </strong>
                    {" You approve every viewing and choose your tenant."}
                  </span>
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5CC28E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                    <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                  </svg>
                  <span>
                    <strong style={{ color: "#FFFFFF" }}>
                      Guaranteed payment.
                    </strong>
                    {" Rent is paid into Plainly Secure before you hand over keys."}
                  </span>
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5CC28E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                    <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                  </svg>
                  <span>
                    <strong style={{ color: "#FFFFFF" }}>
                      One clear fee, shown before you start.
                    </strong>
                    {" No 10% agent cut."}
                  </span>
                </li>
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginTop: "auto" }}>
                <Link href="/join" style={{ height: "52px", padding: "0 24px", display: "inline-flex", alignItems: "center", gap: "10px", borderRadius: "14px", background: "#F4B728", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                  Sign up as an owner
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </Link>
                <a href="#fees" style={{ height: "52px", padding: "0 8px", display: "inline-flex", alignItems: "center", fontWeight: "700", fontSize: "15px", color: "#F4B728" }}>
                  See what it costs
                </a>
              </div>
            </article>
          </div>
          <p style={{ margin: "0", fontSize: "14px", color: "#5E6862" }}>
            {"Already on Plainly? "}
            <Link href="/login" style={{ fontWeight: "700" }}>
              Log in
            </Link>
            . You can rent and own on one account, and switch roles any time.
          </p>
        </section>
        <section aria-label="Why Plainly is safe" style={{ background: "#FFFFFF", borderTop: "1px solid #E3DFD4", borderBottom: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "20px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                <path d="m8.5 12 2.5 2.5 4.5-5"></path>
              </svg>
              <div>
                <strong style={{ display: "block" }}>
                  Owner-verified listings
                </strong>
                <span style={{ fontSize: "14px", color: "#5E6862" }}>
                  ID and proof of ownership checked
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <rect x="3" y="6" width="13" height="12" rx="2"></rect>
                <path d="m16 10 5-3v10l-5-3"></path>
              </svg>
              <div>
                <strong style={{ display: "block" }}>
                  Live walkthrough videos
                </strong>
                <span style={{ fontSize: "14px", color: "#5E6862" }}>
                  Filmed at the property, GPS-stamped
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
              </svg>
              <div>
                <strong style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  {"Money held in "}
                  <span className="tip">
                    <button type="button" aria-describedby="tip-secure" style={{ border: "0", background: "transparent", padding: "0", font: "700 16px 'Figtree', sans-serif", color: "#0E5A3C", textDecoration: "underline dotted", textUnderlineOffset: "3px", cursor: "help" }}>
                      Plainly Secure
                    </button>
                    <span role="tooltip" id="tip-secure">
                      Your move-in money goes to a licensed escrow partner, not to Plainly and not to the owner, until you confirm you got the keys.
                    </span>
                  </span>
                </strong>
                <span style={{ display: "block", fontSize: "14px", color: "#5E6862" }}>
                  Released only after handover
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M3 3l18 18"></path>
                <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
              </svg>
              <div>
                <strong style={{ display: "block" }}>
                  Numbers stay private
                </strong>
                <span style={{ fontSize: "14px", color: "#5E6862" }}>
                  Contacts unlock only when you both sign
                </span>
              </div>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
              Every cost, plainly shown
            </span>
            <h2 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.03em" }}>
              Stop paying to look. Start paying for a home.
            </h2>
            <p style={{ margin: "0", color: "#3D4A43", fontSize: "17px" }}>
              Renting in Lagos usually means inspection fees, a 10% agency fee, another 10% for an agreement nobody drafted, and flats that don't match the photos. On Plainly you deal with the owner, and the only money you pay is for the home itself.
            </p>
            <Link href="/browse" style={{ alignSelf: "flex-start", height: "48px", padding: "0 20px", display: "inline-flex", alignItems: "center", borderRadius: "12px", border: "1.5px solid #15201A", color: "#15201A", textDecoration: "none", fontWeight: "700" }}>
              Browse homes in Lagos
            </Link>
          </div>
          <figure style={{ flex: "1 1 460px", minWidth: "0", margin: "0", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "20px", overflow: "hidden" }}>
            <figcaption style={{ padding: "18px 24px", borderBottom: "1px solid #E3DFD4", display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
              <strong>
                Worked example · ₦2,000,000/yr flat, 1 year's advance
              </strong>
              <span style={{ fontSize: "13px", color: "#5E6862" }}>
                Illustration
              </span>
            </figcaption>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", minWidth: "420px", borderCollapse: "collapse", fontSize: "15px", fontVariantNumeric: "tabular-nums" }}>
                <thead>
                  <tr style={{ background: "#EFECE4", textAlign: "left", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                    <th scope="col" style={{ padding: "10px 24px" }}>
                      Cost
                    </th>
                    <th scope="col" style={{ padding: "10px 12px", textAlign: "right" }}>
                      Typical route
                    </th>
                    <th scope="col" style={{ padding: "10px 24px", textAlign: "right", color: "#0E5A3C" }}>
                      On Plainly
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                    <td style={{ padding: "12px 24px" }}>
                      Rent, 1 year
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      ₦2,000,000
                    </td>
                    <td style={{ padding: "12px 24px", textAlign: "right" }}>
                      ₦2,000,000
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                    <td style={{ padding: "12px 24px" }}>
                      Caution deposit (refundable)
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      ₦200,000
                    </td>
                    <td style={{ padding: "12px 24px", textAlign: "right" }}>
                      ₦200,000
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                    <td style={{ padding: "12px 24px" }}>
                      Agency fee, 10%
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      ₦200,000
                    </td>
                    <td style={{ padding: "12px 24px", textAlign: "right", fontWeight: "700", color: "#1C7A4A" }}>
                      ₦0
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                    <td style={{ padding: "12px 24px" }}>
                      Legal / agreement fee, 10%
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      ₦200,000
                    </td>
                    <td style={{ padding: "12px 24px", textAlign: "right", fontWeight: "700", color: "#1C7A4A" }}>
                      ₦0
                    </td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #E3DFD4" }}>
                    <td style={{ padding: "12px 24px" }}>
                      Inspection and form fees
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      ₦10,000–₦50,000
                    </td>
                    <td style={{ padding: "12px 24px", textAlign: "right", fontWeight: "700", color: "#1C7A4A" }}>
                      ₦0
                    </td>
                  </tr>
                  <tr style={{ borderTop: "2px solid #15201A", background: "#FDF3D3" }}>
                    <th scope="row" style={{ padding: "14px 24px", textAlign: "left" }}>
                      Cash to move in
                    </th>
                    <td style={{ padding: "14px 12px", textAlign: "right", fontWeight: "700" }}>
                      ₦2.61m–₦2.65m
                    </td>
                    <td style={{ padding: "14px 24px", textAlign: "right", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "20px" }}>
                      ₦2,200,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </figure>
        </section>
        <section id="how" style={{ background: "#FFFFFF", borderTop: "1px solid #E3DFD4", borderBottom: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "620px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                  How it works
                </span>
                <h2 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.03em" }}>
                  Five plain steps, either side of the door.
                </h2>
              </div>
              <div role="tablist" aria-label="Choose your side" style={{ display: "inline-flex", padding: "4px", gap: "4px", background: "#EFECE4", borderRadius: "14px" }}>
                <button type="button" role="tab" aria-selected={v.seekerSelected} onClick={v.showSeeker} style={{ height: "44px", padding: "0 18px", border: "0", borderRadius: "10px", background: v.seekerBg, color: v.seekerFg, font: "700 15px 'Figtree', sans-serif", cursor: "pointer" }}>
                  {"Tenants & buyers"}
                </button>
                <button type="button" role="tab" aria-selected={v.ownerSelected} onClick={v.showOwner} style={{ height: "44px", padding: "0 18px", border: "0", borderRadius: "10px", background: v.ownerBg, color: v.ownerFg, font: "700 15px 'Figtree', sans-serif", cursor: "pointer" }}>
                  {"Owners & landlords"}
                </button>
              </div>
            </div>
            {v.isSeeker && (
              <>
                <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "16px" }}>
                  <li style={{ background: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#0E5A3C", lineHeight: "1" }}>
                      1
                    </span>
                    <strong>
                      Search and watch
                    </strong>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      Filter by area and total move-in cost. Watch the walkthrough video.
                    </span>
                  </li>
                  <li style={{ background: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#0E5A3C", lineHeight: "1" }}>
                      2
                    </span>
                    <strong>
                      Verify once
                    </strong>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      A quick NIN and selfie check lets you chat and book viewings.
                    </span>
                  </li>
                  <li style={{ background: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#0E5A3C", lineHeight: "1" }}>
                      3
                    </span>
                    <strong>
                      Chat and view, free
                    </strong>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      Talk to the owner with your number hidden. Book a free viewing.
                    </span>
                  </li>
                  <li style={{ background: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#0E5A3C", lineHeight: "1" }}>
                      4
                    </span>
                    <strong>
                      Apply and sign
                    </strong>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      Send your tenant profile. Sign a standard agreement in the app.
                    </span>
                  </li>
                  <li style={{ background: "#15201A", color: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#F4B728", lineHeight: "1" }}>
                      5
                    </span>
                    <strong>
                      Pay safely, get keys
                    </strong>
                    <span style={{ fontSize: "14px", color: "#C9D2CC" }}>
                      Pay into Plainly Secure. The owner is paid after you move in.
                    </span>
                  </li>
                </ol>
                <Link href="/join" style={{ alignSelf: "flex-start", height: "52px", padding: "0 24px", display: "inline-flex", alignItems: "center", borderRadius: "14px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700" }}>
                  Find a home on Plainly
                </Link>
              </>
            )}
            {v.isOwner && (
              <>
                <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "16px" }}>
                  <li style={{ background: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#0E5A3C", lineHeight: "1" }}>
                      1
                    </span>
                    <strong>
                      See your fee first
                    </strong>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      Your listing fee is shown before you start. Founding owners list free.
                    </span>
                  </li>
                  <li style={{ background: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#0E5A3C", lineHeight: "1" }}>
                      2
                    </span>
                    <strong>
                      Film and list
                    </strong>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      Record a live walkthrough, set your terms. Drafts save offline.
                    </span>
                  </li>
                  <li style={{ background: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#0E5A3C", lineHeight: "1" }}>
                      3
                    </span>
                    <strong>
                      Get verified
                    </strong>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      Upload proof of ownership. Most decisions within 24 hours.
                    </span>
                  </li>
                  <li style={{ background: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#0E5A3C", lineHeight: "1" }}>
                      4
                    </span>
                    <strong>
                      Choose your tenant
                    </strong>
                    <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                      Approve viewings, compare ID-checked applicants, accept one.
                    </span>
                  </li>
                  <li style={{ background: "#15201A", color: "#F6F4EE", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "36px", color: "#F4B728", lineHeight: "1" }}>
                      5
                    </span>
                    <strong>
                      Hand over, get paid
                    </strong>
                    <span style={{ fontSize: "14px", color: "#C9D2CC" }}>
                      Money is already secured. You're paid at handover, fee deducted.
                    </span>
                  </li>
                </ol>
                <Link href="/join" style={{ alignSelf: "flex-start", height: "52px", padding: "0 24px", display: "inline-flex", alignItems: "center", borderRadius: "14px", background: "#15201A", color: "#FFFFFF", textDecoration: "none", fontWeight: "700" }}>
                  List your property
                </Link>
              </>
            )}
          </div>
        </section>
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "700px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
              Plainly Secure
            </span>
            <h2 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.03em" }}>
              Nobody touches the money until the keys change hands.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "16px", alignItems: "stretch" }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Step 1 · Both sign
              </span>
              <strong style={{ fontSize: "18px" }}>
                Agreement signed in the app
              </strong>
              <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                Standard Lagos tenancy, reviewed by Nigerian counsel. Contacts unlock now.
              </span>
            </div>
            <div style={{ background: "#0E5A3C", color: "#FFFFFF", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F4B728" }}>
                Step 2 · Tenant pays
              </span>
              <strong style={{ fontSize: "18px" }}>
                ₦2,200,000 into Plainly Secure
              </strong>
              <span style={{ fontSize: "14px", color: "#E2F0E7" }}>
                Held by a licensed escrow partner. Transfer, USSD or card.
              </span>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5E6862" }}>
                Step 3 · Handover
              </span>
              <strong style={{ fontSize: "18px" }}>
                Keys handed over, move-in confirmed
              </strong>
              <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                Or released automatically 72 hours after handover if nobody raises an issue.
              </span>
            </div>
            <div style={{ background: "#FDF3D3", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B4E00" }}>
                Step 4 · Owner paid
              </span>
              <strong style={{ fontSize: "18px" }}>
                ₦2,150,000 to the owner's verified bank
              </strong>
              <span style={{ fontSize: "14px", color: "#6B4E00" }}>
                Plainly's closing fee is deducted here, with the listing fee credited back.
              </span>
            </div>
          </div>
          <p style={{ margin: "0", display: "flex", gap: "10px", alignItems: "center", fontWeight: "600" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
              <rect x="5" y="11" width="14" height="10" rx="2"></rect>
              <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
            </svg>
            Plainly can only protect money paid through Plainly.
          </p>
        </section>
        <section id="owners" style={{ background: "#15201A", color: "#F6F4EE" }}>
          <div id="fees" style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexWrap: "wrap", gap: "48px" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F4B728" }}>
                Fees, plainly
              </span>
              <h2 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.03em" }}>
                Free for seekers. Fair for owners.
              </h2>
              <p style={{ margin: "0", color: "#C9D2CC", fontSize: "17px" }}>
                Tenants and buyers never pay to search, chat, view or apply, and never a percentage of rent. Owners pay a small listing fee to publish and a closing fee only when the deal completes through Plainly Secure. You pay once, not twice: your listing fee is credited against the closing fee.
              </p>
              <div style={{ background: "#26342C", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <strong style={{ color: "#F4B728" }}>
                  Owner example · ₦2,000,000/yr flat
                </strong>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "6px 16px", fontSize: "15px", fontVariantNumeric: "tabular-nums", color: "#E6ECE8" }}>
                  <span>
                    Listing fee to publish (90 days)
                  </span>
                  <span>
                    ₦10,000
                  </span>
                  <span>
                    Closing fee, 3% of first year's rent
                  </span>
                  <span>
                    ₦60,000
                  </span>
                  <span>
                    Listing fee credited back
                  </span>
                  <span>
                    −₦10,000
                  </span>
                  <strong style={{ color: "#FFFFFF", paddingTop: "6px", borderTop: "1px solid #3A4A41" }}>
                    Total you pay Plainly
                  </strong>
                  <strong style={{ color: "#FFFFFF", paddingTop: "6px", borderTop: "1px solid #3A4A41" }}>
                    ₦60,000
                  </strong>
                </div>
                <span style={{ fontSize: "13px", color: "#A9B6AE" }}>
                  Against a typical 10% agent fee of ₦200,000. Prices are launch prices and may change; every fee is shown before you commit.
                </span>
              </div>
            </div>
            <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ background: "#F6F4EE", color: "#15201A", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                  <strong style={{ fontSize: "18px" }}>
                    Listing fee per 90 days
                  </strong>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Rent and lease, by annual rent
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", fontSize: "15px", fontVariantNumeric: "tabular-nums" }}>
                  <span style={{ padding: "12px 22px", borderTop: "1px solid #E3DFD4" }}>
                    Under ₦1m
                  </span>
                  <strong style={{ padding: "12px 22px", borderTop: "1px solid #E3DFD4" }}>
                    ₦5,000
                  </strong>
                  <span style={{ padding: "12px 22px", borderTop: "1px solid #E3DFD4", background: "#FDF3D3" }}>
                    ₦1m – ₦3m
                  </span>
                  <strong style={{ padding: "12px 22px", borderTop: "1px solid #E3DFD4", background: "#FDF3D3" }}>
                    ₦10,000
                  </strong>
                  <span style={{ padding: "12px 22px", borderTop: "1px solid #E3DFD4" }}>
                    ₦3m – ₦10m
                  </span>
                  <strong style={{ padding: "12px 22px", borderTop: "1px solid #E3DFD4" }}>
                    ₦20,000
                  </strong>
                  <span style={{ padding: "12px 22px", borderTop: "1px solid #E3DFD4" }}>
                    Over ₦10m
                  </span>
                  <strong style={{ padding: "12px 22px", borderTop: "1px solid #E3DFD4" }}>
                    ₦35,000
                  </strong>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(190px, 100%), 1fr))", gap: "14px" }}>
                <div style={{ background: "#26342C", borderRadius: "16px", padding: "18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "28px", color: "#F4B728" }}>
                    3%
                  </strong>
                  <span style={{ fontSize: "14px", color: "#C9D2CC" }}>
                    Closing fee on first year's rent (minimum ₦15,000), only through Plainly Secure
                  </span>
                </div>
                <div style={{ background: "#26342C", borderRadius: "16px", padding: "18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "28px", color: "#F4B728" }}>
                    ₦0
                  </strong>
                  <span style={{ fontSize: "14px", color: "#C9D2CC" }}>
                    First listing for the first 500 verified founding owners in launch areas
                  </span>
                </div>
              </div>
              <Link href="/join" style={{ alignSelf: "flex-start", height: "52px", padding: "0 24px", display: "inline-flex", alignItems: "center", borderRadius: "14px", background: "#F4B728", color: "#15201A", textDecoration: "none", fontWeight: "700" }}>
                Sign up as an owner
              </Link>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
              Safety
            </span>
            <h2 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: "1.05", letterSpacing: "-0.03em" }}>
              What Plainly will never ask you to do
            </h2>
            <Link href="/coming-soon/A06-SafetyCentre" style={{ fontWeight: "700" }}>
              Visit the safety centre
            </Link>
          </div>
          <ul style={{ flex: "2 1 520px", minWidth: "0", margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "12px" }}>
            <li style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "14px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M6 6l12 12M18 6 6 18"></path>
              </svg>
              Pay an inspection or viewing fee
            </li>
            <li style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "14px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M6 6l12 12M18 6 6 18"></path>
              </svg>
              Pay anything before you've viewed
            </li>
            <li style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "14px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M6 6l12 12M18 6 6 18"></path>
              </svg>
              Pay into a personal bank account
            </li>
            <li style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "14px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B3261E" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M6 6l12 12M18 6 6 18"></path>
              </svg>
              Share your OTP, PIN or password
            </li>
          </ul>
        </section>
        <section style={{ background: "#FFFFFF", borderTop: "1px solid #E3DFD4", borderBottom: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(30px, 4vw, 44px)", letterSpacing: "-0.03em" }}>
              Questions, answered plainly
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <details open style={{ borderTop: "1px solid #E3DFD4", padding: "18px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontWeight: "700", fontSize: "17px", minHeight: "44px", alignItems: "center" }}>
                  Is Plainly really free for tenants?
                  <span className="faq-plus" aria-hidden="true" style={{ fontSize: "26px", color: "#0E5A3C", transition: "transform .2s" }}>
                    +
                  </span>
                </summary>
                <p style={{ margin: "8px 0 0", color: "#3D4A43" }}>
                  Yes. Searching, chatting, booking viewings and applying are always free. You pay only what's on the listing: rent, deposit and any itemised charge, all shown before you view.
                </p>
              </details>
              <details style={{ borderTop: "1px solid #E3DFD4", padding: "18px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontWeight: "700", fontSize: "17px", minHeight: "44px", alignItems: "center" }}>
                  Why can't I see the owner's phone number?
                  <span className="faq-plus" aria-hidden="true" style={{ fontSize: "26px", color: "#0E5A3C", transition: "transform .2s" }}>
                    +
                  </span>
                </summary>
                <p style={{ margin: "8px 0 0", color: "#3D4A43" }}>
                  Numbers stay hidden until you both sign the agreement, so every step of your deal is recorded and protected. You can chat and call in the app before then.
                </p>
              </details>
              <details style={{ borderTop: "1px solid #E3DFD4", padding: "18px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontWeight: "700", fontSize: "17px", minHeight: "44px", alignItems: "center" }}>
                  What does "Owner verified" mean?
                  <span className="faq-plus" aria-hidden="true" style={{ fontSize: "26px", color: "#0E5A3C", transition: "transform .2s" }}>
                    +
                  </span>
                </summary>
                <p style={{ margin: "8px 0 0", color: "#3D4A43" }}>
                  We checked the owner's ID and a document showing they control the property, such as a Land Use Charge demand. Badges always say what was checked and when. Plainly does not certify title.
                </p>
              </details>
              <details style={{ borderTop: "1px solid #E3DFD4", padding: "18px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontWeight: "700", fontSize: "17px", minHeight: "44px", alignItems: "center" }}>
                  Can agents list on Plainly?
                  <span className="faq-plus" aria-hidden="true" style={{ fontSize: "26px", color: "#0E5A3C", transition: "transform .2s" }}>
                    +
                  </span>
                </summary>
                <p style={{ margin: "8px 0 0", color: "#3D4A43" }}>
                  Later, as a clearly labelled option: LASRERA-registered agents with a signed owner mandate, fees capped and shown on the listing. You can always filter to "Owner only".
                </p>
              </details>
              <details style={{ borderTop: "1px solid #E3DFD4", borderBottom: "1px solid #E3DFD4", padding: "18px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontWeight: "700", fontSize: "17px", minHeight: "44px", alignItems: "center" }}>
                  I'm a landlord. When do I pay?
                  <span className="faq-plus" aria-hidden="true" style={{ fontSize: "26px", color: "#0E5A3C", transition: "transform .2s" }}>
                    +
                  </span>
                </summary>
                <p style={{ margin: "8px 0 0", color: "#3D4A43" }}>
                  The listing fee is charged when you submit a listing for verification. The closing fee is deducted from your payout only when a tenant pays through Plainly Secure, with your listing fee credited back.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "22px" }}>
          <svg width="64" height="64" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
            <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
            <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
          </svg>
          <h2 style={{ margin: "0", maxWidth: "760px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 5vw, 60px)", lineHeight: "1", letterSpacing: "-0.035em" }}>
            Plainly. Straight to the owner.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <Link href="/join" style={{ height: "54px", padding: "0 26px", display: "inline-flex", alignItems: "center", borderRadius: "14px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
              I'm looking for a home
            </Link>
            <Link href="/join" style={{ height: "54px", padding: "0 26px", display: "inline-flex", alignItems: "center", borderRadius: "14px", background: "#15201A", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
              I own property
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", paddingTop: "6px" }}>
            <Link href="/coming-soon/A01-Splash" style={{ height: "48px", padding: "0 18px", display: "inline-flex", alignItems: "center", gap: "10px", borderRadius: "12px", border: "1.5px solid #15201A", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                <rect x="7" y="2.5" width="10" height="19" rx="2"></rect>
                <path d="M11 18h2"></path>
              </svg>
              Get it on Google Play
            </Link>
            <Link href="/coming-soon/A01-Splash" style={{ height: "48px", padding: "0 18px", display: "inline-flex", alignItems: "center", gap: "10px", borderRadius: "12px", border: "1.5px solid #15201A", color: "#15201A", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                <rect x="7" y="2.5" width="10" height="19" rx="2"></rect>
                <path d="M11 18h2"></path>
              </svg>
              Download on the App Store
            </Link>
          </div>
          <span style={{ fontSize: "13px", color: "#5E6862" }}>
            Works on low-data connections. Data saver turns on automatically on 2G/3G.
          </span>
        </section>
        <footer style={{ background: "#15201A", color: "#C9D2CC" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: "28px", fontSize: "14px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "24px", color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                plainly
              </span>
              <span>
                Every cost, plainly shown.
              </span>
              <span>
                Lagos, Nigeria
              </span>
            </div>
            <nav aria-label="Seekers" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <strong style={{ color: "#FFFFFF" }}>
                {"Tenants & buyers"}
              </strong>
              <Link href="/browse" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                Browse homes
              </Link>
              <Link href="/join" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                Create an account
              </Link>
              <a href="#how" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                How it works
              </a>
            </nav>
            <nav aria-label="Owners" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <strong style={{ color: "#FFFFFF" }}>
                Owners
              </strong>
              <Link href="/join" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                List your property
              </Link>
              <a href="#fees" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                Fees
              </a>
              <Link href="/login" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                Owner log in
              </Link>
            </nav>
            <nav aria-label="Company" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <strong style={{ color: "#FFFFFF" }}>
                Trust
              </strong>
              <Link href="/coming-soon/A06-SafetyCentre" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                Safety centre
              </Link>
              <a href="#roles" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                Terms
              </a>
              <a href="#roles" style={{ color: "#C9D2CC", textDecoration: "none" }}>
                Privacy
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
