"use client";

// Generated from Claude Design: W17-Join.dc.html (WEB-01 · Join: choose role + OTP)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class JoinLogic extends DCLogic {
  constructor(props) { super(props); this.state = { role: null, step: 1 }; }
  renderVals() {
    const s = this.state || {};
    const role = s.role;
    const isOwner = role === 'owner';
    const isSeeker = role === 'seeker';
    const step2 = s.step === 2 && !!role;
    return {
      isStep1: !step2,
      isStep2: step2,
      hasRole: !!role,
      noRole: !role,
      bar2: step2 ? '#0E5A3C' : '#E3DFD4',
      stepLabel: step2 ? 'Step 2 of 3 · Verify your number' : 'Step 1 of 3 · Create your account',
      title: step2 ? 'Enter the 6-digit code' : 'Welcome to Plainly',
      seekerChecked: isSeeker ? 'true' : 'false',
      ownerChecked: isOwner ? 'true' : 'false',
      seekerBorder: isSeeker ? '#0E5A3C' : '#CFC9BA',
      ownerBorder: isOwner ? '#0E5A3C' : '#CFC9BA',
      seekerBg: isSeeker ? '#F3F9F5' : '#FFFFFF',
      ownerBg: isOwner ? '#F3F9F5' : '#FFFFFF',
      seekerDot: isSeeker ? '#0E5A3C' : 'transparent',
      ownerDot: isOwner ? '#0E5A3C' : 'transparent',
      nextHref: isOwner ? '/owner/listings/new' : '/account',
      nextLabel: isOwner ? 'Verify and set up my first listing' : 'Verify and start my home search',
      asideBg: isOwner ? '#15201A' : '#0E5A3C',
      asideFg: '#FFFFFF',
      asideAccent: '#F4B728',
      asideKicker: isOwner ? 'For owners' : (isSeeker ? 'For tenants & buyers' : 'Why Plainly'),
      asideTitle: isOwner ? 'List once. Get paid at handover.' : (isSeeker ? 'Find a home without the fees.' : 'Straight to the owner, every cost shown.'),
      b1: isOwner ? 'Listing fee from ₦5,000 per 90 days, shown before you start' : (isSeeker ? '₦0 to search, chat, view and apply' : 'Verified owners and live walkthrough videos'),
      b2: isOwner ? 'ID-checked tenants; you approve every one' : (isSeeker ? 'Full cost to move in on every listing' : 'Full cost to move in, before you view'),
      b3: isOwner ? 'Rent secured in Plainly Secure before keys change hands' : (isSeeker ? 'Money held in Plainly Secure until you get the keys' : 'Money held safely until handover'),
      pickSeeker: () => this.setState({ role: 'seeker' }),
      pickOwner: () => this.setState({ role: 'owner' }),
      goStep2: () => this.setState({ step: 2 }),
      goStep1: () => this.setState({ step: 1 })
    };
  }
}

export default function Join() {
  const v = useDCLogic(JoinLogic);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1000px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "16px", lineHeight: "1.5" }}>
        <header style={{ borderBottom: "1px solid #E3DFD4", background: "#F6F4EE" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <Link href="/" aria-label="Back to Plainly home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#15201A" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill="#0E5A3C"></rect>
                <path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728"></path>
                <circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C"></circle>
              </svg>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "25px", letterSpacing: "-0.03em" }}>
                plainly
              </span>
            </Link>
            <span style={{ fontSize: "15px", color: "#3D4A43" }}>
              {"Have an account? "}
              <Link href="/login" style={{ fontWeight: "700" }}>
                Log in
              </Link>
            </span>
          </div>
        </header>
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 72px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>
          <section aria-labelledby="join-title" style={{ flex: "999 1 560px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "24px", padding: "clamp(24px, 4vw, 44px)", display: "flex", flexDirection: "column", gap: "26px", boxShadow: "0 24px 48px -32px rgba(21,32,26,.35)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", gap: "6px" }} aria-hidden="true">
                <span style={{ flex: "1", height: "6px", borderRadius: "9px", background: "#0E5A3C" }}></span>
                <span style={{ flex: "1", height: "6px", borderRadius: "9px", background: v.bar2 }}></span>
                <span style={{ flex: "1", height: "6px", borderRadius: "9px", background: "#E3DFD4" }}></span>
              </div>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                {v.stepLabel}
              </span>
              <h1 id="join-title" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: "1.05", letterSpacing: "-0.03em" }}>
                {v.title}
              </h1>
            </div>
            {v.isStep1 && (
              <>
                <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <legend style={{ padding: "0 0 12px", fontWeight: "700", fontSize: "16px" }}>
                    I'm joining as…
                  </legend>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "14px" }}>
                    <button type="button" role="radio" aria-checked={v.seekerChecked} onClick={v.pickSeeker} style={{ textAlign: "left", padding: "20px", borderRadius: "18px", border: `2px solid ${v.seekerBorder}`, background: v.seekerBg, display: "flex", flexDirection: "column", gap: "10px", cursor: "pointer", fontFamily: "'Figtree', sans-serif", color: "#15201A" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#E2F0E7", display: "grid", placeItems: "center" }}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="11" cy="11" r="7"></circle>
                            <path d="m20 20-3.5-3.5"></path>
                          </svg>
                        </span>
                        <span style={{ width: "22px", height: "22px", borderRadius: "99px", border: `2px solid ${v.seekerBorder}`, boxSizing: "border-box", display: "grid", placeItems: "center" }}>
                          <span style={{ width: "10px", height: "10px", borderRadius: "99px", background: v.seekerDot }}></span>
                        </span>
                      </span>
                      <strong style={{ fontSize: "19px" }}>
                        Tenant or buyer
                      </strong>
                      <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                        I'm looking for a home to rent or buy. Free, always.
                      </span>
                    </button>
                    <button type="button" role="radio" aria-checked={v.ownerChecked} onClick={v.pickOwner} style={{ textAlign: "left", padding: "20px", borderRadius: "18px", border: `2px solid ${v.ownerBorder}`, background: v.ownerBg, display: "flex", flexDirection: "column", gap: "10px", cursor: "pointer", fontFamily: "'Figtree', sans-serif", color: "#15201A" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#F4B728", display: "grid", placeItems: "center" }}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="8" cy="15" r="4"></circle>
                            <path d="m11 12 9-9M17 6l3 3"></path>
                          </svg>
                        </span>
                        <span style={{ width: "22px", height: "22px", borderRadius: "99px", border: `2px solid ${v.ownerBorder}`, boxSizing: "border-box", display: "grid", placeItems: "center" }}>
                          <span style={{ width: "10px", height: "10px", borderRadius: "99px", background: v.ownerDot }}></span>
                        </span>
                      </span>
                      <strong style={{ fontSize: "19px" }}>
                        Landlord or property owner
                      </strong>
                      <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                        I have a home or land to let or sell. Fee shown before I start.
                      </span>
                    </button>
                  </div>
                  <span style={{ fontSize: "14px", color: "#5E6862" }}>
                    One account for both. You can add the other role later in two taps.
                  </span>
                </fieldset>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="phone" style={{ fontWeight: "700", fontSize: "15px" }}>
                    Mobile number
                  </label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ height: "52px", padding: "0 14px", display: "inline-flex", alignItems: "center", gap: "6px", border: "1.5px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", fontWeight: "600" }}>
                      +234
                    </span>
                    <input id="phone" type="tel" inputMode="tel" defaultValue="803 555 1290" style={{ flex: "1", minWidth: "0", height: "52px", boxSizing: "border-box", padding: "0 16px", border: "1.5px solid #15201A", borderRadius: "12px", font: "600 17px 'Figtree', sans-serif", color: "#15201A", fontVariantNumeric: "tabular-nums" }} />
                  </div>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    We'll text a 6-digit code (WhatsApp if SMS doesn't arrive). Your number is never shown to other users until you both sign an agreement.
                  </span>
                </div>
                <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", color: "#3D4A43" }}>
                  <input type="checkbox" defaultChecked style={{ width: "20px", height: "20px", margin: "2px 0 0", accentColor: "#0E5A3C", flex: "none" }} />
                  <span>
                    {"I agree to Plainly's "}
                    <a href="#terms">
                      Terms
                    </a>
                    {" and "}
                    <a href="#privacy">
                      Privacy notice
                    </a>
                    , including that deals I make with people I meet on Plainly go through Plainly Secure.
                  </span>
                </label>
                {v.hasRole && (
                  <>
                    <button type="button" onClick={v.goStep2} style={{ height: "54px", border: "0", borderRadius: "14px", background: "#0E5A3C", color: "#FFFFFF", font: "700 16px 'Figtree', sans-serif", cursor: "pointer" }}>
                      Send my code
                    </button>
                  </>
                )}
                {v.noRole && (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <button type="button" disabled aria-describedby="why-disabled" style={{ height: "54px", border: "0", borderRadius: "14px", background: "#EFECE4", color: "#5E6862", font: "700 16px 'Figtree', sans-serif" }}>
                        Send my code
                      </button>
                      <span id="why-disabled" style={{ fontSize: "13px", color: "#5E6862" }}>
                        Choose tenant/buyer or owner above to continue.
                      </span>
                    </div>
                  </>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#5E6862", fontSize: "13px" }}>
                  <span style={{ flex: "1", height: "1px", background: "#E3DFD4" }}></span>
                  or
                  <span style={{ flex: "1", height: "1px", background: "#E3DFD4" }}></span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "10px" }}>
                  <span className="tip">
                    <button type="button" aria-describedby="tip-link" style={{ width: "100%", height: "48px", border: "1.5px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "700 15px 'Figtree', sans-serif", color: "#15201A" }}>
                      Continue with Google
                    </button>
                    <span role="tooltip" id="tip-link">
                      We still verify your phone number. Linking never creates a second account.
                    </span>
                  </span>
                  <button type="button" style={{ height: "48px", border: "1.5px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "700 15px 'Figtree', sans-serif", color: "#15201A" }}>
                    Continue with Apple
                  </button>
                </div>
              </>
            )}
            {v.isStep2 && (
              <>
                <p style={{ margin: "0", color: "#3D4A43" }}>
                  {"We sent a code to "}
                  <strong>
                    +234 803 ••• 1290
                  </strong>
                  {". "}
                  <button type="button" onClick={v.goStep1} style={{ border: "0", background: "transparent", padding: "0", font: "700 16px 'Figtree', sans-serif", color: "#0E5A3C", cursor: "pointer", textDecoration: "underline" }}>
                    Change
                  </button>
                </p>
                <div role="group" aria-label="6-digit code" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 56px))", gap: "10px" }}>
                  <input aria-label="Digit 1" defaultValue="4" style={{ height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #CFC9BA", borderRadius: "12px", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A", minWidth: "0" }} />
                  <input aria-label="Digit 2" defaultValue="8" style={{ height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #CFC9BA", borderRadius: "12px", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A", minWidth: "0" }} />
                  <input aria-label="Digit 3" defaultValue="2" style={{ height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #CFC9BA", borderRadius: "12px", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A", minWidth: "0" }} />
                  <input aria-label="Digit 4" defaultValue="7" style={{ height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #CFC9BA", borderRadius: "12px", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A", minWidth: "0" }} />
                  <input aria-label="Digit 5" defaultValue="1" style={{ height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #CFC9BA", borderRadius: "12px", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A", minWidth: "0" }} />
                  <input aria-label="Digit 6" defaultValue="9" style={{ height: "60px", boxSizing: "border-box", textAlign: "center", border: "2px solid #1D5FB8", borderRadius: "12px", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A", minWidth: "0" }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", fontSize: "14px", color: "#5E6862" }}>
                  <span>
                    Resend in 0:24
                  </span>
                  <a href="#whatsapp" style={{ fontWeight: "700" }}>
                    Get it on WhatsApp instead
                  </a>
                  <span>
                    Code expires in 5 minutes
                  </span>
                </div>
                <a href={v.nextHref} style={{ height: "54px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                  {v.nextLabel}
                </a>
                <span style={{ fontSize: "13px", color: "#5E6862" }}>
                  Next, a 2-minute ID check (NIN and a selfie) unlocks chat, viewings and listing. You can keep browsing without it.
                </span>
              </>
            )}
          </section>
          <aside style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: v.asideBg, color: v.asideFg, borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: v.asideAccent }}>
                {v.asideKicker}
              </span>
              <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "26px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                {v.asideTitle}
              </strong>
              <ul style={{ margin: "0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px" }}>
                <li>
                  {v.b1}
                </li>
                <li>
                  {v.b2}
                </li>
                <li>
                  {v.b3}
                </li>
              </ul>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                <path d="m8.5 12 2.5 2.5 4.5-5"></path>
              </svg>
              <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                Plainly will never ask for your OTP, PIN or password by phone, WhatsApp or email.
              </span>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", padding: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <strong style={{ fontSize: "15px" }}>
                Agent or developer?
              </strong>
              <span style={{ fontSize: "14px", color: "#3D4A43" }}>
                LASRERA agent and developer accounts open in Phase 2.
              </span>
              <Link href="/coming-soon/X01-AgentOnboard" style={{ fontSize: "14px", fontWeight: "700" }}>
                Preview agent verification
              </Link>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
