# Plainly — Web app (Next.js)

The Plainly web app, built from the Claude Design file
**"Plainly — UI/UX Design v1.3 (Mobile app + Web app)"**. Every screen under the
design's four WEB APP pages is implemented as a route, with the exact markup,
inline styles, SVG icons, copy and prototype interactions from the design.
The mobile app is not included (it comes in a later phase).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Open **/screens** for an index of every screen.

## Routes

| Design artboard | Screen | Route |
|---|---|---|
| W00-Landing | WEB-00 Landing page (start) | `/` |
| W17-Join | WEB-01 Join: role + phone + OTP | `/join` |
| W01-Home | WEB-02 Browse & search home (guest) | `/browse` |
| W02-Search | WEB-03 Results + map | `/search` |
| W03-Listing | WEB-04 Listing detail | `/listings/PL-24817` |
| W08-SignIn | WEB-05 Log in | `/login` |
| W11-Account | WKS-01 Seeker account | `/account` |
| W09-Messages | WKS-02 Messages | `/messages` |
| W04-OwnerDash | WKS-03 Owner overview | `/owner` |
| W10-CreateListing | WKS-04 Create listing wizard | `/owner/listings/new` |
| W05-DealRoom | WKS-05 Deal room & Plainly Secure | `/deal-room` |
| W06-Billing | WKS-06 Invoices, credits & plans | `/billing` |
| X06-DevProject | P2-06 Developer project (Phase 2) | `/developer` |
| W12-AdminVerify | ADM-01 Verification queue | `/admin/verification` (`/admin` redirects here) |
| W16-AdminModeration | ADM-02 Listing moderation | `/admin/moderation` |
| W13-AdminDisputes | ADM-03 Disputes & escrow | `/admin/disputes` |
| W07-Admin | ADM-04 Leakage investigation | `/admin/leakage` |
| W14-AdminRevenue | ADM-05 KPI & revenue dashboard | `/admin/revenue` |
| W15-AdminConfig | ADM-06 Configuration | `/admin/config` |

Links in the web screens that point at mobile-only artboards (safety centre,
chat, viewing day, payout…) go to `/coming-soon/<artboard>` until the mobile phase.

## Prototype behaviour carried over

- Landing: "Tenants & buyers / Owners & landlords" switch in *How it works*; FAQ accordion.
- Join: pick tenant/buyer or owner (button stays disabled until you do), step 1 → step 2,
  side panel copy changes with the role, and the final CTA goes to the seeker account
  or the owner listing wizard.
- Tooltips open on hover, keyboard focus or tap (Escape closes). The design export
  pins some tooltips open for presentation; in the app they behave normally.
- Every cross-screen link in the design is a Next.js `<Link>`.
- Search forms submit to `/search`; other forms are prototype-only and do not submit.
- All screens are responsive exactly as designed (fluid grids, `clamp()` type).

## How the code is organised

```
design/project/          Source artboards exported from Claude Design (.dc.html)
scripts/convert-design.mjs   Artboard → React converter (keeps every style 1:1)
scripts/generate-routes.mjs  Writes the app/ route files from src/lib/routes.mjs
src/lib/routes.mjs       Artboard ⇄ route map (single source of truth)
src/lib/dc.js            Tiny runtime: DCLogic base class + useDCLogic hook
src/screens/*.jsx        Generated screen components (one per artboard)
src/app/**/page.jsx      Next.js routes (metadata + screen)
src/components/          App-level helpers (tooltip tap support)
public/fonts/            Self-hosted Bricolage Grotesque + Figtree (OFL)
```

### Updating from the design

When the design changes, re-export the artboards into `design/project/` and run:

```bash
npm run convert
```

Screens in `src/screens/` are regenerated; don't hand-edit them. When a screen is
ready to be wired to real data, copy it out of `src/screens/` into a hand-maintained
component (and remove it from the converter's list in `src/lib/routes.mjs`) so the
converter no longer overwrites it.

## Next steps for production

- Extract shared pieces (header, side nav, badges, cost table, listing card) into
  components backed by the design tokens in `src/app/globals.css`.
- Replace the sample content (listing PL-24817, the owner dashboard, admin queues)
  with API data; make `/listings/[id]` load the listing by id.
- Wire auth (phone OTP, passkey, Google/Apple), Plainly Secure payments and the
  maps provider shown as `[maps provider]` placeholders in the design.
