# Route Catalog And Lifecycle Report

## Run Context

- Canonical run: 29
- Handoff: `02_ROUTE_CATALOG_AND_LIFECYCLE_HANDOFF.md`
- Mode: brownfield preservation
- Phase: discovery in run 29; bounded implementation validated in run 33
- Execution profile: current for this scope
- Application route implementation: not authorized in run 29; approved in run 32 and completed in run 33

The audit covers the Next.js App Router tree, runtime content relationships, metadata and canonicals, sitemap and robots, navigation and fragments, preview images, keyword ownership, schema paths, inquiry endpoint, tests, generated route inventory, redirect configuration, and Cloudflare host configuration.

> Post-audit lifecycle update (2026-08-06): the owner approved completion of `/emergency` and `/about/social-media`. Both now have dedicated route-owned compositions, are indexable, and are included in the seven-URL sitemap. The fixed route inventory did not change; the placeholder-era findings below remain historical run-29 evidence.

## Current Route-Fact Owners

### Framework request resolution

`src/app/` is the only request resolver. It contains:

- seven public content pages;
- one explicit `/404` utility page;
- one framework unmatched-path fallback;
- one `POST /api/inquiries` operational endpoint;
- `/robots.txt` and `/sitemap.xml` metadata routes.

There are no dynamic segments, route groups, `generateStaticParams`, authenticated/private pages, middleware, rewrites, locale routes, query-selected page variants, or repository-managed redirects.

### Page identity and search policy

`src/config/page-metadata.ts` owns seven canonical path relationships together with metadata text, target keywords, and two explicit `indexable: false` policies. It derives `INDEXABLE_PAGE_PATHS`, which the sitemap consumes.

`src/config/site.ts` independently owns exported route and fragment constants used by navigation, structured data, and page links. This is the main route-path duplication seam.

### Navigation

`PrimaryNavigation.tsx` owns visible primary navigation hierarchy and uses path constants. `site-navigation.ts` owns footer destinations and four completed-page journey definitions. These human-facing labels, order, descriptions, and hierarchy should remain navigation content rather than move into a route catalog.

### Canonicals, images, keywords, and schema

- Canonicals derive from each `PAGE_METADATA.path` through `createPageMetadata`.
- All seven content routes use one shared Open Graph/Twitter preview image from `src/config/site.ts`; no route-specific image map exists.
- Keyword strategy is route-keyed in `PAGE_METADATA.targetKeywords` and documented by the run-28 strategy matrix.
- Breadcrumb route files pass literal page paths to the schema helper.
- Location service schema contains a literal `/location` URL and a shared contact route constant.

### Operational and external routes

The quote form posts to a literal `/api/inquiries`, matching the App Router endpoint and its tests. Robots disallows `/api/`.

Cloudflare maps the Worker to the apex `utahonecall.com` custom domain. No application redirect exists. The legacy domain remains an independent external Vercel site and `www.utahonecall.com` does not resolve according to the last read-only verification. Those are host-level policies, not hidden application routes.

## Route Inventory Summary

| Surface | Count | Lifecycle result |
|---|---:|---|
| Complete indexable content pages | 5 | active; public; self-canonical; sitemap included |
| Placeholder content pages | 2 | active; public; self-canonical; `noindex, follow`; sitemap excluded |
| Explicit error utility | 1 | active `/404`; `noindex, nofollow`; no canonical; sitemap excluded |
| Framework fallback | 1 policy | unmatched request returns branded 404 with framework noindex |
| API routes | 1 | active POST endpoint; non-content; sitemap/navigation excluded; robots disallowed |
| Metadata routes | 2 | active robots and sitemap outputs |
| Dynamic/private routes | 0 | no adapter required |
| Repository redirects/retired routes | 0 | no records should be invented |

The complete 12-row policy snapshot is in `ROUTE_POLICY_MATRIX.csv`.

## Duplication And Drift Risks

| Route fact | Current owners | Current consumers | Drift risk | Proposed owner |
|---|---|---|---|---|
| Request resolution | `src/app` directory tree | Next.js/OpenNext | Low; framework-authoritative | Keep App Router tree. |
| Public page paths | `site.ts` constants; `PAGE_METADATA.path`; route folders; route-local literals | metadata, navigation, sitemap, schema, placeholders, links, tests, docs | High; same path can change in one layer only | New stable `ROUTE_PATHS` source with adapters; reconcile route tree in tests. |
| Canonical path | `PAGE_METADATA.path` | metadata, Open Graph, coverage checks | Low today | Derive from stable route path through existing metadata adapter. |
| Indexability | optional `PAGE_METADATA.indexable` plus standalone `/404` metadata and framework fallback | metadata robots, sitemap selector, tests | Medium; different route kinds use different valid mechanisms | Public catalog derives content policy; utility/fallback policies stay discriminated. |
| Noindex reason | implied by placeholder state in docs | humans and tests | Medium; reason is not typed in application code | Small lifecycle supplement beside the public catalog. |
| Sitemap membership | derived `INDEXABLE_PAGE_PATHS`; tests also preserve an explicit expected list | sitemap and regression tests | Low; derivation is healthy | Catalog selector; explicit test list remains reviewed external evidence. |
| Primary navigation membership | explicit JSX plus route constants | desktop/mobile navigation | Medium; both placeholders are intentionally included despite noindex | Keep labels/order in navigation config; reconcile route IDs against catalog. |
| Footer and journey destinations | `site-navigation.ts` | four footer families and related-page section | Low; already centralized | Keep current owner; validate every destination. |
| Fragment identity | fragment constants and literal element IDs | journeys, service TOC, footer links, RouteEffects, tests | Medium | Separate `ROUTE_FRAGMENTS` contract; never model fragments as pages. |
| Keyword ownership | `PAGE_METADATA.targetKeywords` | audits and route metadata tests | Low | Keep current strategy owner; catalog joins by canonical route. |
| Page image policy | one shared preview constant | metadata builder for all content routes | Low | Keep site-level default; catalog records/validates policy without copying asset data. |
| Breadcrumb/schema page URLs | route-local literals and structured-data helper literals | JSON-LD output and tests | Medium | Stable route paths passed through existing schema helpers. |
| Inquiry endpoint | App Router file path; form fetch literal; tests | homepage/contact form and API tests | Medium | Stable operational path constant plus route-file reconciliation. |
| Robots and sitemap paths | Next metadata route convention; robots string for sitemap | crawlers and tests | Low | Keep framework routes; optional operational constants only when consumed. |
| Internal site search | absent | none | None | Omit from application model until a real search feature exists. |
| Redirects and retired paths | none in repository; external host gap documented | deployment/DNS owner | External risk only | Do not create catalog records until actual rules are approved and owned. |
| Route test inventory | focused hardcoded expectations and generated docs | regression review | Low and intentional | Keep as reviewed contract evidence rather than production owner. |

## Proposed Route Model

Use three current record kinds plus dormant redirect/retired types:

1. `PublicPageRoute` for the seven content pages;
2. `UtilityRoute` for `/404`;
3. `OperationalRoute` for inquiry API, robots, and sitemap;
4. `RedirectRoute` only when a real application redirect exists;
5. `RetiredRoute` only when an approved path has an explicit outcome.

The unmatched fallback is a framework policy, not a fake URL. Test and document it separately.

For public content routes, derive canonical, sitemap, keyword, and image coverage from existing approved sources. The catalog adds only stable identity, family, lifecycle/content state, reviewed noindex reason, and test profile.

Do not put titles, descriptions, navigation labels, hero content, section data, component references, analytics, or ranking observations in the catalog.

## Static And Dynamic Family Adapters

All current routes are static. A typed map of seven public IDs is sufficient.

No dynamic adapter is warranted. If a future slug family is approved, its route records should derive from that family's real runtime collection instead of copying paths into another manual list.

## Lifecycle And Canonical Decisions

### Active complete pages

`/`, `/services`, `/about`, `/location`, and `/contact` remain active, indexable, self-canonical, and sitemap-included.

### Active placeholders

`/emergency` and `/about/social-media` remain active, navigable, self-canonical placeholders with `noindex, follow` and sitemap exclusion. Primary-navigation inclusion is a reviewed exception, not a contradiction: users may reach useful call/contact placeholders while search indexing remains deferred.

### Error behavior

`/404` remains a direct utility path with `noindex, nofollow`, no canonical, and no navigation/sitemap entry. Unmatched paths continue to use the framework 404 response. The two surfaces are related but not interchangeable lifecycle records.

### URL variants

- non-root routes use no trailing slash;
- query strings are not route identities and canonicalize through clean page metadata;
- fragments are in-page navigation contracts only;
- there are no locale or case-variant route records;
- no canonical should substitute for a needed legacy-host redirect.

## Consumer Migration Order

After steps 03-04 and explicit run-32 approval:

1. reconcile stale repository instructions;
2. add catalog and route-file parity tests;
3. introduce the stable route-path source while preserving current constant exports;
4. add the public/utility/operational catalog projection;
5. migrate sitemap enumeration;
6. migrate metadata/indexability reconciliation tests;
7. migrate schema and placeholder path literals;
8. migrate inquiry endpoint literal and its tests;
9. refresh generated route inventory;
10. remove old duplicate selectors only after all consumers move.

Navigation stays human-authored; it gains reconciliation tests rather than being rendered from the catalog.

The detailed batches and rollback conditions are in `ROUTE_CATALOG_IMPLEMENTATION_PLAN.md`.

## Reviewed Exceptions

| Exception | Reason | Decision |
|---|---|---|
| Noindex placeholders remain in primary navigation | They provide call/contact value but are not complete search landing pages | Preserve pending an explicit lifecycle decision. |
| `/404` direct route and unmatched fallback are separate | One is a stable utility URL; one is framework error handling | Preserve both without canonical or sitemap inclusion. |
| Tests repeat expected paths | Explicit expectations detect accidental policy drift | Keep as contract evidence; do not use as runtime source. |
| No internal site-search policy | No site-search feature exists | Record `unavailable` in documentation; omit from application types. |
| No redirect/retired entries | Repository contains no owned rules | Do not invent them from external host gaps. |
| One shared preview image | Current metadata intentionally uses a site default | Keep; route-specific creative is optional future work. |

## Files Changed

Discovery outputs only:

- `02_ROUTE_CATALOG_REPORT.md`
- `02_ROUTE_CATALOG_IMPLEMENTATION_SUMMARY.md`
- `02_ROUTE_CATALOG_HUMAN_TODO.md`
- `ROUTE_POLICY_MATRIX.csv`
- `ROUTE_CATALOG_IMPLEMENTATION_PLAN.md`
- `V2_SUITE_RUN_LEDGER.md`

No application, route, metadata, schema, navigation, test, package, deployment, form, asset, or external-system file changed.

## Validation Results

Recorded in the implementation summary and ledger. The route policy is reconciled against source route files, metadata definitions, sitemap/indexability selectors, navigation constants, schema helpers, inquiry endpoint, tests, and generated inventory.

Because this is documentation-only and application state is unchanged, the immediate run-26 baseline remains applicable: 60/60 tests, typecheck, lint, and OpenNext build passed.

## Remaining Human Decisions

No decision blocks architecture step 03 discovery.

Application implementation received explicit approval at run 32 and the bounded route-catalog batch completed at run 33. Placeholder promotion/removal and host-level redirects remain separately approval-gated and were not changed; the only approved `/404` change was its descriptive title.

## Canonical Run 33 Implementation Update

Run-32 approval was granted and run 33 implemented the stable route-identity layer through `route-paths.ts` and `route-catalog.ts`, with compatibility exports retained from `site.ts`. Metadata, sitemap, structured-data, placeholder, API, and focused test consumers now derive stable path identity from that contract. No path, fragment, canonical, redirect, indexability, sitemap membership/order, robots rule, navigation label/order, or endpoint changed. Placeholder lifecycle and host-level redirect decisions remain external/product work.
