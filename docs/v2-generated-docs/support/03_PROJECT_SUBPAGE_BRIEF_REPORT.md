# Project Subpage Brief Report

## Current State Summary

Canonical run 04 audited the current Next.js 16 App Router implementation and generated the repository-specific subpage brief. The application has five completed indexable marketing pages, two public noindex placeholders, one explicit 404 page, a framework not-found response, one inquiry API, and Next.js-generated robots/sitemap routes.

The route intent and search controls are generally coherent. The principal content risks are unfinished placeholder routes, unverified high-specificity marketing claims, absent structured data, and duplicated content/layout sources that can drift.

## Sources Inspected

- `src/app/` route entrypoints, root layout, metadata routes, and inquiry API
- `src/config/site.ts` and shared navigation
- `src/lib/metadata.ts`, inquiry/Resend helpers, and manual Google review data
- `src/screens/` page compositions, route-owned sections, content data, breadcrumbs, CTAs, headers, and footers
- `next.config.ts`, `open-next.config.ts`, and `wrangler.jsonc`
- Existing route, integration, environment, dependency, and validation inventories
- Search metadata, form, review, route-effect, location-data, and page-component tests

## Findings And Disposition

| Finding | Evidence | Disposition |
|---|---|---|
| Service-area page lacked the breadcrumb used by comparable subpages | `/services`, `/about`, and `/contact` had breadcrumbs; `/location` did not | Implemented visible, labeled Home / Service Area breadcrumb with a targeted test |
| Footer company links omitted the completed `/location` page | All four footer variants listed only about, services, and estimate | Implemented shared footer data including Service Area |
| Internal links inconsistently used plain anchors | Route-owned footers and several homepage/services CTAs bypassed the shared link adapter | Replaced internal destinations with the shared Next-aware `Link`; phone/external actions remain anchors |
| Footer route data was duplicated four times | Home, services, about, and contact footer arrays repeated | Centralized route arrays without consolidating visual shells |
| Emergency and social pages are unfinished | Both render `PlaceholderPage`, are noindex, and are excluded from sitemap | Preserved; owner content/lifecycle decision required |
| Structured data is absent | No JSON-LD/schema helper or render path found | Documented for later structured-data work; no schema invented |
| Marketing claims need verification | Specific prices, timing, credentials, incentives, warranty, and permit language appears in route data | Preserved but flagged for owner confirmation |
| Manual reviews can become stale | Six excerpts and a total count are hard-coded | Preserved; freshness and schema eligibility flagged |

## Hidden Assumptions And Edge Cases

- Noindex placeholders remain public and linked from primary navigation; noindex is not privacy.
- Service-area lists are treated as source-backed because the owner supplied them earlier, but no independent geographic/business verification occurred in this run.
- Existing copy describes homes and businesses; coverage uniformity for commercial work still needs owner confirmation.
- Hash service links rely on stable element IDs plus `RouteEffects`; a future route split must preserve or migrate those inbound fragments.
- The Resend API route is not a content route and must stay outside navigation/sitemap even though it is essential to conversion.
- The four footer visuals deliberately remain separate to avoid an out-of-scope architecture refactor.

## Outputs

- `support/repo-context/PROJECT_SUBPAGE_BRIEF.md`
- `support/PAGE_CONTENT_GAPS.md`
- `support/INTERNAL_LINKING_NOTES.md`
- This detailed report
- Required implementation summary and human TODO
- Refreshed route inventory and suite ledger

## Validation

- Targeted tests: 2 files, 3 tests passed.
- Full Vitest suite: 13 files, 24 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Next.js 16.3/OpenNext Cloudflare production build: passed and generated all expected static routes plus the dynamic inquiry API.
- `git diff --check`: passed.

The first targeted run exposed only a whitespace-sensitive test expectation; that assertion was corrected before the successful final validation.

## Risks And Follow-Ups

- Complete or retire the two placeholder routes before changing indexability.
- Verify business facts before metadata, local SEO, content expansion, or structured-data handoffs amplify them.
- Keep the canonical location data synchronized with any duplicated about/contact summaries.
- No deployment, external inquiry, Search Console change, analytics change, or secret mutation is part of this handoff.
