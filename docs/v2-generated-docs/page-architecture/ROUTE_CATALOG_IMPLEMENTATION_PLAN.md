# Route Catalog Implementation Plan

## Status And Gate

- Canonical run: 29
- Architecture step: 02
- Mode: brownfield preservation
- Phase: implementation validated at canonical run 33
- Application changes: stable route-path/catalog owners and compatibility adapters completed
- Implementation gate: satisfied by canonical run 32

The implementation preserves every current public path, fragment, canonical, indexability state, sitemap and robots response, navigation item, schema URL, API endpoint, and 404 lifecycle. The only approved metadata adjustment is the specific framework not-found title.

## Smallest Useful Model

The repository needs a focused route identity and policy catalog, not a page registry. It should use discriminated records so content pages, utility/error surfaces, operational endpoints, future redirects, and future retired routes cannot carry contradictory fields.

Proposed concepts:

```ts
type PublicPageRoute = {
  id: PublicPageId;
  path: PublicPagePath;
  kind: "page";
  family: "home" | "services" | "about" | "location" | "contact" | "placeholder";
  lifecycle: "active";
  contentState: "complete" | "placeholder";
  indexability: "index" | "noindex-follow";
  noindexReason?: "incomplete-placeholder";
  testProfile: "core" | "contract-only";
};

type UtilityRoute = {
  id: "explicit-404";
  path: "/404";
  kind: "error-page";
  lifecycle: "active";
  indexability: "noindex-nofollow";
  testProfile: "contract-only";
};

type OperationalRoute = {
  id: "inquiries-api" | "robots" | "sitemap";
  path: "/api/inquiries" | "/robots.txt" | "/sitemap.xml";
  kind: "api" | "metadata-route";
  lifecycle: "active";
  testProfile: "core" | "contract-only";
};

type RedirectRoute = {
  id: string;
  path: `/${string}`;
  kind: "redirect";
  lifecycle: "redirect";
  destination: PublicPagePath;
  permanent: boolean;
};

type RetiredRoute = {
  id: string;
  path: `/${string}`;
  kind: "retired";
  lifecycle: "retired";
  outcome: "not-found" | "replacement";
  replacementPath?: PublicPagePath;
};
```

Do not add redirect or retired records until a real repository-managed rule is approved. The legacy-domain and `www` issues are host-level work and must not be represented as fake application paths.

## Ownership Layout

### 1. Stable path constants

Proposed file: `src/config/route-paths.ts`.

Own:

- seven public content paths;
- `/404`;
- `/api/inquiries`;
- `/robots.txt` and `/sitemap.xml` only if a consumer benefits;
- the existing named fragment destinations in a separate `ROUTE_FRAGMENTS` object.

Preserve current exports such as `HOME_ROUTE` and `SERVICES_ROUTE` through adapters or re-exports during migration. Do not change all imports at once.

Fragments are not routes. Keep `/#faq`, `/#pricing`, the four service anchors, and `#service-planning-checklist` as separately validated navigation contracts.

### 2. Public route policy

Proposed file: `src/config/route-catalog.ts`.

Create the seven content-route definitions by joining stable path IDs to the existing `PAGE_METADATA` entries and a small lifecycle supplement. Derive:

- canonical path from the stable path;
- indexability from the existing metadata policy during the first adapter phase;
- sitemap inclusion from active indexability;
- keyword strategy ID from the canonical path;
- preview coverage from the existing shared preview policy.

Do not copy titles, descriptions, keywords, body content, navigation labels, section order, component imports, analytics, or search-performance data into the catalog.

### 3. Utility and operational policy

Keep utility and operational definitions separate from the public content selector so `/404`, the inquiry API, robots, and sitemap can never enter the content sitemap or keyword checks.

The unmatched fallback is a framework policy, not a concrete catalog path. Record it in validation and generated documentation rather than pretending it is a public URL.

### 4. Navigation and site search

Navigation labels, order, hierarchy, descriptions, and fragment destinations remain in `src/config/site-navigation.ts` because they are human-facing content.

Add reconciliation tests that every primary navigation page ID resolves to an active public catalog route. Do not render navigation directly from the catalog.

Internal site search does not exist. Omit a per-route `siteSearch` field from application code until a real search feature is approved. The generated matrix records `unavailable` so absence is explicit.

## Invariants

The implementation must enforce:

1. every catalog path is unique;
2. every `PAGE_METADATA` entry maps to exactly one active public route;
3. every indexable page is complete, self-canonical, sitemap-included, and has a keyword strategy;
4. every placeholder is `noindex, follow`, sitemap-excluded, and has a reviewed reason;
5. no utility or operational route enters the public content sitemap;
6. all five current sitemap paths equal the derived indexable selector in existing order;
7. page paths contain no query or hash component and have no trailing slash except `/`;
8. named fragments resolve to existing element IDs;
9. structured-data page URLs use the same stable path constants as metadata;
10. the inquiry form posts to the stable operational endpoint;
11. no route record includes visible copy, React component references, or changing performance metrics;
12. no redirect destination loops or points to a retired route if redirect records are added later.

## Consumer Migration Order

### Batch 0 — Instruction prerequisite

Reconcile the stale Vite-era repository addendum and regenerate `AGENTS.md` before source implementation.

### Batch 1 — Contract tests before migration

- Add catalog shape, uniqueness, lifecycle contradiction, noindex-reason, canonical, sitemap, keyword, and fragment tests.
- Treat expected route-file mappings as reviewed test evidence, not a second production owner.
- Capture the current five sitemap URLs and seven page metadata outputs before changing consumers.

### Batch 2 — Stable path owner

- Add `route-paths.ts`.
- Adapt or re-export existing constants from `src/config/site.ts` to preserve public imports.
- Replace `PAGE_METADATA.path` literals with stable path constants.
- Keep route tree folder names unchanged; verify catalog-to-route-file parity in tests.

### Batch 3 — Catalog projection

- Add the discriminated route definitions and selectors.
- Derive content routes from `PAGE_METADATA` plus the minimal lifecycle supplement.
- Keep noindex reasons close to placeholder policy.
- Do not add site-search, redirect, retired, or dynamic-family records without a real consumer.

### Batch 4 — Low-risk consumers

Migrate one at a time, comparing output after each change:

1. sitemap enumeration;
2. route/metadata/indexability tests;
3. breadcrumb and location schema path inputs;
4. placeholder pathname props;
5. inquiry form endpoint and endpoint tests;
6. generated route inventory.

Keep navigation copy in `site-navigation.ts`; add only reconciliation checks.

### Batch 5 — Remove duplicate owners

Remove or deprecate `INDEXABLE_PAGE_PATHS` from `page-metadata.ts` only after all consumers use the catalog selector. Preserve an adapter temporarily if tests or downstream helpers still import it.

Do not delete hardcoded paths from tests when they serve as intentional external expectations. Label those fixtures as contract evidence.

### Batch 6 — Full validation

- focused catalog, metadata, sitemap, robots, navigation, structured-data, fragment, form, API, and 404 tests;
- full Vitest suite;
- TypeScript and lint;
- Next/OpenNext production build;
- generated HTML/XML/robots comparisons;
- direct route checks for all seven public content pages, `/404`, an unmatched path, `/robots.txt`, and `/sitemap.xml`;
- homepage and contact inquiry-form endpoint contract without sending a live email;
- desktop/mobile navigation and fragment behavior where later handoffs require it.

## Static And Dynamic Family Adapters

All current page families are static. Define the seven public entries directly or from a typed key map.

There are no dynamic content collections or slug routes, so no dynamic adapter should be added. If a future service/location/blog family is approved, derive its instances from the runtime content collection and keep explicit exceptions beside that adapter.

## Canonical And URL Policy

- Canonical host: `https://utahonecall.com`.
- Canonical page paths: self-referencing paths from the public route catalog.
- Trailing slash: absent for non-root paths because `next.config.ts` does not enable `trailingSlash`.
- Query strings: not route identities; page metadata remains canonical to the clean path.
- Fragments: navigation targets only; never canonical or catalog route identities.
- Case variants: no separate records or rewrite policy exists.
- Locales: no locale-prefixed routes or alternates exist.
- `/404`: reviewed utility path with no canonical and explicit `noindex, nofollow`.
- Unmatched path: framework 404 response with framework noindex behavior.
- Legacy and `www` hosts: external DNS/redirect work; no repository redirect exists.

## Rollback Conditions

Stop or revert the active batch if:

- a public path, fragment, canonical, status code, redirect, or indexability changes;
- sitemap order or membership changes;
- navigation wording/order/hierarchy changes;
- metadata or schema URLs drift;
- the inquiry form posts to a different endpoint;
- a circular config import appears;
- a route record begins owning visible page content or components;
- site-search or redirect state is invented;
- the implementation becomes an all-at-once registry rewrite.
