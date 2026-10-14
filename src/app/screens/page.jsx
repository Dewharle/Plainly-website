import Link from "next/link";
import { SCREENS } from "@/lib/routes.mjs";

// Prototype index: every web app screen from the design, grouped as on the canvas.
export const metadata = { title: "Plainly · Web app screens" };

const GROUPS = [
  ["public", "Landing & public site"],
  ["workspace", "Signed-in workspace"],
  ["developer", "Developer tools (Phase 2)"],
  ["admin", "Admin back office (staff)"],
];

export default function Screens() {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F4EE", color: "#15201A", fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif" }}>
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", display: "flex", flexDirection: "column", gap: 40 }}>
        <h1 style={{ margin: 0, fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 48, letterSpacing: "-0.03em" }}>Plainly web app screens</h1>
        {GROUPS.map(([key, label]) => (
          <section key={key} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{label}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {SCREENS.filter((s) => s.group === key).map((s) => (
                <Link key={s.id} href={s.route} style={{ display: "flex", flexDirection: "column", gap: 4, padding: 18, background: "#FFFFFF", border: "1px solid #E3DFD4", borderRadius: 16, textDecoration: "none", color: "#15201A" }}>
                  <strong style={{ fontSize: 16 }}>{s.title}</strong>
                  <span style={{ fontSize: 14, color: "#5E6862" }}>{s.route}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
