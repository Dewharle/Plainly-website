"use client";

// Generated from Claude Design: W08-SignIn.dc.html (WEB-05 · Log in)
// Do not hand-edit: change the design and re-run `npm run convert`.

import Link from "next/link";
import { DCLogic, useDCLogic, useFormHandlers } from "@/lib/dc";

const css = "body{margin:0}\na{color:#0E5A3C}a:hover{color:#0A4630}\n.tip{position:relative;display:inline-flex;align-items:center}\n.tip>[role=tooltip]{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;background:#15201A;color:#FFFFFF;font:500 12px/1.45 'Figtree',sans-serif;text-align:left;opacity:0;pointer-events:none;transition:opacity .2s;z-index:20;box-shadow:0 8px 24px -8px rgba(21,32,26,.35)}\n.tip:hover>[role=tooltip],.tip:focus-within>[role=tooltip],.tip.is-open>[role=tooltip]{opacity:1}\n.tip.tip-down>[role=tooltip]{bottom:auto;top:calc(100% + 10px)}\n@media (max-width: 640px){.tip>[role=tooltip]{left:auto;right:-8px;transform:none;max-width:min(260px,78vw)}}";

class SignInLogic extends DCLogic {
  renderVals() { return {}; }
}

export default function SignIn() {
  useDCLogic(SignInLogic);
  const { submitSearch, submitPrevent } = useFormHandlers();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ width: "100%", minHeight: "1420px", boxSizing: "border-box", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.45", display: "flex", flexDirection: "column" }}>
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
              <Link href="/search" style={{ height: "44px", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "15px", fontWeight: "600", color: "#3D4A43" }}>
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
              <Link href="/login" aria-current="page" style={{ height: "44px", padding: "0 20px", boxSizing: "border-box", display: "flex", alignItems: "center", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
                Sign in
              </Link>
            </div>
          </div>
        </header>
        <main style={{ flex: "1", boxSizing: "border-box", padding: "48px 0 56px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 32px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexWrap: "wrap", background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: "18px", boxShadow: "0 8px 24px -8px rgba(21,32,26,.22)", overflow: "hidden" }}>
              <section aria-labelledby="h-signin" style={{ flex: "999 1 480px", minWidth: "0", boxSizing: "border-box", padding: "40px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0E5A3C" }}>
                    One account to rent and to own
                  </span>
                  <h1 id="h-signin" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Sign in or create an account
                  </h1>
                  <p style={{ margin: "0", color: "#3D4A43" }}>
                    {"Enter your phone number. We'll send a 6-digit code. New here? "}
                    <Link href="/join" style={{ fontWeight: "700" }}>
                      Create an account as a tenant or an owner
                    </Link>
                    .
                  </p>
                </div>
                <form onSubmit={submitPrevent} aria-label="Step 1, phone number" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "999px", background: "#0E5A3C", display: "grid", placeItems: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                      </svg>
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                      Step 1 · Phone number
                    </span>
                  </div>
                  <label htmlFor="phone" style={{ fontSize: "14px", fontWeight: "600" }}>
                    Mobile number
                  </label>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <label style={{ flex: "none", height: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "6px", padding: "0 10px 0 12px", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#F6F4EE" }}>
                      <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                        Country code
                      </span>
                      <select defaultValue="NG +234" style={{ border: "0", background: "transparent", font: "700 15px 'Figtree', sans-serif", color: "#15201A", height: "44px" }}>
                        <option>
                          NG +234
                        </option>
                      </select>
                    </label>
                    <input id="phone" type="tel" inputMode="numeric" autoComplete="tel-national" defaultValue="803 555 0142" aria-describedby="phone-help" style={{ flex: "1 1 200px", minWidth: "0", height: "48px", boxSizing: "border-box", padding: "0 14px", border: "1.5px solid #15201A", borderRadius: "12px", background: "#FFFFFF", font: "600 16px 'Figtree', sans-serif", letterSpacing: "0.02em", color: "#15201A", fontVariantNumeric: "tabular-nums" }} />
                  </div>
                  <span id="phone-help" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#5E6862" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3l18 18"></path>
                      <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                    </svg>
                    Owners and seekers never see this number.
                  </span>
                  <button type="button" style={{ height: "44px", border: "0", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", font: "700 15px 'Figtree', sans-serif" }}>
                    Send code
                  </button>
                </form>
                <form onSubmit={submitPrevent} aria-label="Step 2, enter code" style={{ background: "#F6F4EE", border: "1px solid #E3DFD4", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "700" }}>
                        2
                      </span>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#3D4A43" }}>
                        Step 2 · Enter the code
                      </span>
                    </div>
                    <Link href="/login" style={{ fontSize: "14px", fontWeight: "600" }}>
                      Change number
                    </Link>
                  </div>
                  <p style={{ margin: "0", fontSize: "14px", color: "#3D4A43" }}>
                    {"We sent a code by SMS to "}
                    <strong style={{ color: "#15201A", fontVariantNumeric: "tabular-nums" }}>
                      +234 803 ••• 0142
                    </strong>
                    . It expires in 10 minutes.
                  </p>
                  <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <legend style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                      6-digit code
                    </legend>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      <input aria-label="Digit 1" inputMode="numeric" maxLength="1" defaultValue="4" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #15201A", borderRadius: "12px", background: "#FFFFFF", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A" }} />
                      <input aria-label="Digit 2" inputMode="numeric" maxLength="1" defaultValue="8" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #15201A", borderRadius: "12px", background: "#FFFFFF", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A" }} />
                      <input aria-label="Digit 3" inputMode="numeric" maxLength="1" defaultValue="2" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1.5px solid #15201A", borderRadius: "12px", background: "#FFFFFF", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A" }} />
                      <input aria-label="Digit 4" inputMode="numeric" maxLength="1" defaultValue="" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "2px solid #1D5FB8", boxShadow: "0 0 0 3px #E5EEFB", borderRadius: "12px", background: "#FFFFFF", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A" }} />
                      <input aria-label="Digit 5" inputMode="numeric" maxLength="1" defaultValue="" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A" }} />
                      <input aria-label="Digit 6" inputMode="numeric" maxLength="1" defaultValue="" style={{ width: "52px", height: "60px", boxSizing: "border-box", textAlign: "center", border: "1px solid #CFC9BA", borderRadius: "12px", background: "#FFFFFF", font: "700 24px 'Bricolage Grotesque', sans-serif", color: "#15201A" }} />
                    </div>
                  </fieldset>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 16px", fontSize: "13px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#5E6862" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5E6862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      Resend SMS in 0:42
                    </span>
                    <Link href="/login" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", fontWeight: "600", textDecoration: "none" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 5h16v11H9l-5 4z"></path>
                      </svg>
                      SMS not arriving? Get the code on WhatsApp
                    </Link>
                  </div>
                  <Link href="/account" style={{ height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "#0E5A3C", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "15px" }}>
                    Continue
                  </Link>
                </form>
                <div role="separator" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", fontWeight: "600", color: "#5E6862" }}>
                  <span style={{ flex: "1", height: "1px", background: "#E3DFD4" }}></span>
                  or
                  <span style={{ flex: "1", height: "1px", background: "#E3DFD4" }}></span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <button type="button" style={{ flex: "1", height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "12px", border: "1.5px solid #15201A", background: "#FFFFFF", color: "#15201A", font: "700 15px 'Figtree', sans-serif" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15201A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="8" cy="15" r="4"></circle>
                        <path d="m11 12 9-9M17 6l3 3"></path>
                      </svg>
                      Use a passkey
                    </button>
                    <span className="tip">
                      {" "}
                      <button type="button" aria-label="What is a passkey?" aria-describedby="t-passkey" style={{ width: "44px", height: "44px", border: "0", borderRadius: "12px", background: "#EFECE4", display: "grid", placeItems: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 11v5M12 8h.01"></path>
                        </svg>
                      </button>
                      {" "}
                      <span role="tooltip" id="t-passkey" style={{ left: "auto", right: "0", transform: "none" }}>
                        Signs you in with your phone's fingerprint or face unlock. No code, nothing to remember, and it can't be phished.
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "10px" }}>
                    <button type="button" style={{ height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", borderRadius: "12px", border: "1px solid #CFC9BA", background: "#FFFFFF", color: "#15201A", font: "600 15px 'Figtree', sans-serif" }}>
                      <span aria-hidden="true" style={{ width: "22px", height: "22px", borderRadius: "999px", border: "1.5px solid #15201A", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "800" }}>
                        G
                      </span>
                      Continue with Google
                    </button>
                    <button type="button" style={{ height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", borderRadius: "12px", border: "1px solid #CFC9BA", background: "#FFFFFF", color: "#15201A", font: "600 15px 'Figtree', sans-serif" }}>
                      <span aria-hidden="true" style={{ width: "22px", height: "22px", borderRadius: "999px", background: "#15201A", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "800" }}>
                        A
                      </span>
                      Continue with Apple
                    </button>
                  </div>
                  <span style={{ fontSize: "13px", color: "#5E6862" }}>
                    Google or Apple still asks for your phone number once, so chats and calls can be masked.
                  </span>
                </div>
                <div role="note" style={{ background: "#E5EEFB", borderRadius: "16px", padding: "16px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ width: "36px", height: "36px", flex: "none", borderRadius: "10px", background: "#FFFFFF", display: "grid", placeItems: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D5FB8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="7" y="2.5" width="10" height="19" rx="2"></rect>
                      <path d="M11 18h2"></path>
                    </svg>
                  </span>
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <strong style={{ fontSize: "15px", color: "#164A90" }}>
                      Signing in on a new device?
                    </strong>
                    <p style={{ margin: "0", fontSize: "14px", color: "#15201A" }}>
                      For 24 h, payouts, bank changes and signing are paused on it — a quick selfie lifts this early.
                    </p>
                    <span style={{ fontSize: "13px", color: "#164A90" }}>
                      We alert you by SMS, email and in-app every time a new device signs in.
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "4px", borderTop: "1px solid #E3DFD4" }}>
                  <Link href="/owner" style={{ minHeight: "44px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", textDecoration: "none", alignSelf: "flex-start" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"></path>
                    </svg>
                    I'm an owner — take me to my listings
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 6 6 6-6 6"></path>
                    </svg>
                  </Link>
                  <p style={{ margin: "0", fontSize: "13px", color: "#5E6862" }}>
                    {"By continuing you agree to Plainly's "}
                    <Link href="/coming-soon/A06-SafetyCentre" style={{ fontWeight: "600" }}>
                      Terms of use
                    </Link>
                    {" and "}
                    <Link href="/coming-soon/A06-SafetyCentre" style={{ fontWeight: "600" }}>
                      Privacy notice
                    </Link>
                    . You must be 18 or older. Standard SMS rates may apply.
                  </p>
                </div>
              </section>
              <aside aria-labelledby="h-why" style={{ flex: "1 1 340px", minWidth: "0", boxSizing: "border-box", background: "#0E5A3C", color: "#FFFFFF", padding: "40px 36px", display: "flex", flexDirection: "column", gap: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#E2F0E7" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "9px", background: "#F4B728" }}></span>
                    Plainly. Straight to the owner.
                  </span>
                  <h2 id="h-why" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "28px", lineHeight: "1.15", letterSpacing: "-0.02em" }}>
                    Renting without the runaround
                  </h2>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#F4B728", color: "#15201A", display: "grid", placeItems: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "17px" }}>
                    ₦0
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <strong style={{ fontSize: "16px" }}>
                      ₦0 for seekers
                    </strong>
                    <span style={{ fontSize: "14px", color: "#E2F0E7" }}>
                      Searching, chatting, viewings and applying are free. No agency, legal or inspection fees to see a home.
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#0A4630", display: "grid", placeItems: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3l18 18"></path>
                      <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-2.9 3.3M6.2 7.6C4.2 9.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 3.6-.8"></path>
                    </svg>
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <strong style={{ fontSize: "16px" }}>
                      Masked contacts
                    </strong>
                    <span style={{ fontSize: "14px", color: "#E2F0E7" }}>
                      Your number and email stay hidden. Chats and calls run through Plainly until you both sign the agreement.
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "#0A4630", display: "grid", placeItems: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                      <path d="m8.5 12 2.5 2.5 4.5-5"></path>
                    </svg>
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <strong style={{ fontSize: "16px" }}>
                      Plainly Secure
                    </strong>
                    <span style={{ fontSize: "14px", color: "#E2F0E7" }}>
                      Pay rent and caution deposit into Plainly Secure. The owner is paid after you confirm move-in, or 72 h after handover with no dispute.
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "auto", background: "#0A4630", borderRadius: "14px", padding: "14px 16px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4B728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                    <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Plainly can only protect money paid through Plainly.
                  </span>
                </div>
              </aside>
            </div>
          </div>
        </main>
        <footer style={{ background: "#FFFFFF", borderTop: "1px solid #E3DFD4" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "18px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", fontSize: "13px", color: "#5E6862" }}>
            <span>
              Plainly is a marketplace. Plainly does not certify title.
            </span>
            <span style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <Link href="/coming-soon/A06-SafetyCentre" style={{ fontWeight: "600" }}>
                Safety centre
              </Link>
              <Link href="/browse" style={{ fontWeight: "600" }}>
                Home
              </Link>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
