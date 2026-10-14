import Link from "next/link";

// Some web screens link to flows that are designed for the mobile app
// (safety centre, chat, viewing, payout…). They land here until the mobile phase.
export const metadata = { title: "Plainly · Coming with the mobile app" };

export default async function ComingSoon({ params }) {
  const { screen } = await params;
  return (
    <div style={{ minHeight: "100vh", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif", display: "grid", placeItems: "center", padding: 24, boxSizing: "border-box" }}>
      <main style={{ maxWidth: 520, background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: 24, padding: 40, boxShadow: "0 24px 48px -32px rgba(21,32,26,.35)", display: "flex", flexDirection: "column", gap: 16 }}>
        <svg width="40" height="40" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#0E5A3C" /><path d="M10 25V13.5a6 6 0 0 1 12 0V25z" fill="#F4B728" /><circle cx="19" cy="19.5" r="1.3" fill="#0E5A3C" /></svg>
        <h1 style={{ margin: 0, fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 34, lineHeight: 1.05, letterSpacing: "-0.03em" }}>This screen is part of the mobile app</h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: "#3D4A43" }}>
          <code style={{ fontWeight: 700 }}>{decodeURIComponent(screen)}</code> is designed for the Plainly mobile app and will be built in the mobile phase.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/" style={{ height: 48, padding: "0 20px", display: "inline-flex", alignItems: "center", borderRadius: 12, background: "#0E5A3C", color: "#FFFFFF", fontWeight: 700, textDecoration: "none" }}>Go to the home page</Link>
          <Link href="/screens" style={{ height: 48, padding: "0 20px", display: "inline-flex", alignItems: "center", borderRadius: 12, border: "1.5px solid #15201A", color: "#15201A", fontWeight: 700, textDecoration: "none" }}>All web screens</Link>
        </div>
      </main>
    </div>
  );
}
