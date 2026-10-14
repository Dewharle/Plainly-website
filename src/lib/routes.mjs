// Single source of truth: design artboard → Next.js route.
// Used by the design converter and by the app.

export const SCREENS = [
  // WEB APP · 01 — Landing & public site
  { id: "W00-Landing", component: "Landing", route: "/", group: "public", title: "WEB-00 · Landing page" },
  { id: "W17-Join", component: "Join", route: "/join", group: "public", title: "WEB-01 · Join: choose role + OTP" },
  { id: "W01-Home", component: "BrowseHome", route: "/browse", group: "public", title: "WEB-02 · Browse & search home (guest)" },
  { id: "W02-Search", component: "SearchResults", route: "/search", group: "public", title: "WEB-03 · Results + map" },
  { id: "W03-Listing", component: "ListingDetail", route: "/listings/PL-24817", group: "public", title: "WEB-04 · Listing detail" },
  { id: "W08-SignIn", component: "SignIn", route: "/login", group: "public", title: "WEB-05 · Log in" },

  // WEB APP · 02 — Signed-in workspace
  { id: "W11-Account", component: "Account", route: "/account", group: "workspace", title: "WKS-01 · Seeker account" },
  { id: "W09-Messages", component: "Messages", route: "/messages", group: "workspace", title: "WKS-02 · Messages" },
  { id: "W04-OwnerDash", component: "OwnerOverview", route: "/owner", group: "workspace", title: "WKS-03 · Owner overview" },
  { id: "W10-CreateListing", component: "CreateListing", route: "/owner/listings/new", group: "workspace", title: "WKS-04 · Create listing wizard" },
  { id: "W05-DealRoom", component: "DealRoom", route: "/deal-room", group: "workspace", title: "WKS-05 · Deal room & Plainly Secure" },
  { id: "W06-Billing", component: "Billing", route: "/billing", group: "workspace", title: "WKS-06 · Invoices, credits & plans" },

  // WEB APP · 03 — Developer tools (Phase 2)
  { id: "X06-DevProject", component: "DeveloperProject", route: "/developer", group: "developer", title: "P2-06 · Developer project & lead pipeline" },

  // WEB APP · 04 — Admin back office (staff)
  { id: "W12-AdminVerify", component: "AdminVerification", route: "/admin/verification", group: "admin", title: "ADM-01 · Verification queue" },
  { id: "W16-AdminModeration", component: "AdminModeration", route: "/admin/moderation", group: "admin", title: "ADM-02 · Listing moderation" },
  { id: "W13-AdminDisputes", component: "AdminDisputes", route: "/admin/disputes", group: "admin", title: "ADM-03 · Disputes & escrow" },
  { id: "W07-Admin", component: "AdminLeakage", route: "/admin/leakage", group: "admin", title: "ADM-04 · Leakage investigation" },
  { id: "W14-AdminRevenue", component: "AdminRevenue", route: "/admin/revenue", group: "admin", title: "ADM-05 · KPI & revenue dashboard" },
  { id: "W15-AdminConfig", component: "AdminConfig", route: "/admin/config", group: "admin", title: "ADM-06 · Configuration" },
];

const BY_ID = Object.fromEntries(SCREENS.map((s) => [s.id, s]));

/** Route for an artboard id. Mobile-only artboards go to a holding page until the mobile phase. */
export function routeFor(id) {
  if (BY_ID[id]) return BY_ID[id].route;
  return `/coming-soon/${id}`;
}
