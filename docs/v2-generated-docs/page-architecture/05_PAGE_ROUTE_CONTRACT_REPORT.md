# Page And Route Contract Validation Report

## Run Context

- Canonical run: 34
- Handoff: `05_PAGE_AND_ROUTE_CONTRACT_VALIDATION_HANDOFF.md`
- Mode: brownfield
- Phase: implementation
- Authorization: the user instructed Codex to continue the remaining handoffs; the execution profile authorizes bounded validation work
- Route scope: seven completed marketing pages, `/404`, framework not-found behavior, the inquiry API, robots, and sitemap
- Protected scope preserved: route count and paths, visible copy, visual design, metadata/schema meaning, form and Resend behavior, deployment, packages, and external systems

## Existing Validation Map

| Layer | Existing evidence before run 34 | Run-34 disposition |
|---|---|---|
| Route identity | `route-paths.ts`, `route-catalog.ts`, four catalog tests | Preserved and reconciled with the App Router file tree. |
| Metadata and sitemap | Metadata builder tests, seven page definitions, robots/sitemap tests | Added a seven-route final-output contract for canonical, robots, and shared preview image behavior. |
| Navigation | Primary-navigation, footer, breadcrumb, related-page, and hash-target tests | Added one cross-collection journey validator for every completed non-home route. |
| Structured data | Site, Organization, breadcrumb, Service, serialization, and exclusion tests | Preserved. Schema remains required only where supported by the approved family contract. |
| Page semantics | Focused hero/form/review/accessibility tests and prior browser evidence | Added one component contract across all seven marketing-page compositions. |
| Framework/build | Next/OpenNext build and generated-HTML checks | Added deterministic App Router page discovery and reran the production build. |
| Forms/API | Client validation, server validation, honeypot, Resend helper, and API response tests | Preserved; no live submission performed. |
| Rendered reflow | Prior desktop and 320-pixel Browser checks | Not repeated because this run changed no rendered component or CSS. |

## Missing Contracts Found

The repository already had strong focused coverage, but four cross-collection gaps remained:

1. No executable contract compared the complete App Router `page.tsx` tree with the public and utility route catalogs.
2. No single validator reported route-path, lifecycle, metadata, keyword-owner, sitemap-source, and related-journey drift together with route-specific messages.
3. Final metadata behavior was tested with representative fixtures, not every current public page definition.
4. One-H1, one-main, and unique-ID semantics were not enforced across all seven completed marketing-page compositions in one stable family-level test.

No production behavior defect was discovered. The gaps were validation gaps rather than page defects.

## Validators And Tests Added

### Cross-collection validator

`src/config/page-route-contracts.ts` now returns every detected issue in one pass. It validates:

- unique public route IDs and canonical paths;
- lowercase, root-relative, no-trailing-slash path policy;
- catalog, route-path, and metadata path agreement;
- completed-route/indexability consistency;
- nonempty metadata title and description inputs;
- nonempty, route-unique, and cross-route-unique keyword ownership;
- exact sitemap-source alignment with indexable catalog routes;
- one related-page journey for every completed non-home route;
- journey targets that resolve to public pages, avoid self-links, and remain unique.

Messages include the route ID and conflicting value where applicable. The validator does not assert copy length, keyword density, visual section order, or unsupported schema.

### Repository contract tests

`src/config/page-route-contracts.test.ts` now checks:

- zero current cross-collection issues;
- deterministic App Router page discovery against all seven public routes plus `/404`;
- existence of the shared social-preview fallback asset;
- final title, description, canonical, index/follow, Open Graph, Twitter, and preview-image behavior for every public route.

This means a newly added App Router page cannot silently bypass the route catalog, metadata strategy, sitemap policy, and test review.

### Page-family semantic contracts

`src/screens/PageFamilyContracts.test.tsx` renders Home, Services, About, Social Media, Location, Emergency, and Contact with only the shared reveal wrapper mocked. Every family must expose:

- exactly one `main` landmark;
- exactly one H1;
- unique rendered IDs;
- no page-owned viewport metadata that disables user scaling.

The test avoids snapshots and does not freeze layout, wording, section count, or visual creativity.

## Route And Family Coverage

The complete coverage map is in `PAGE_ROUTE_COVERAGE_MATRIX.csv`.

- Seven marketing pages: catalog, metadata, canonical, indexability, sitemap, keyword, image, framework source, and semantic composition coverage passed.
- Six non-home marketing pages: related-journey ownership and target resolution passed.
- Home: WebSite/Organization schema coverage remains supported and tested.
- Services, About, Location, and Contact: approved breadcrumb schema coverage remains tested; Location also retains Service area schema coverage.
- Emergency and Social Media: no new schema was introduced; this is an explicit reviewed exception rather than an accidental omission.
- `/404` and unmatched paths: remain separate, non-indexable error policies.
- Inquiry API, robots, and sitemap: remain operational/non-content routes and cannot enter public-page discovery.

## Reviewed Exceptions

`PAGE_ROUTE_REVIEWED_EXCEPTIONS.md` records the current exceptions. The main decisions are:

- no internal site search exists, so no search index is required;
- no redirects or retired routes exist in repository configuration;
- all pages intentionally use one shared preview image fallback;
- Emergency and Social Media do not gain schema during an architecture validation handoff;
- rendered zoom, assistive-technology, forced-colors, and target-browser conformance remain outside static/component contract claims;
- optional page scaffolding is skipped under the fixed eight-page scope.

## Validation Results

- Targeted contract tests: 3 files / 13 tests passed.
- Full Vitest suite: 30 files / 95 tests passed.
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed with Next.js 16.3 and OpenNext Cloudflare 1.19.11.
- Production route inventory: seven static marketing pages, static `/404`, framework not-found, dynamic inquiry API, robots, and sitemap generated as expected.
- Generated HTML: all seven marketing routes had one H1, one `main`, `index, follow`, and the expected absolute canonical.
- CSV shape and cross-document integrity: the 12-row, 18-column matrix and all five required artifacts passed final integrity checks.

## Rendered Behaviors Not Tested In This Run

Browser automation was intentionally not repeated. Run 34 changed only validators, tests, and generated documentation; no component JSX, CSS, interaction, metadata input, route, form, or production behavior changed. Page-family semantics were rendered in JSDOM, and Next/OpenNext integration was verified through the production build and generated HTML. The most recent desktop/320-pixel Browser evidence remains the applicable visual baseline.

## Decision

The page-and-route contract layer satisfies canonical run 34. Drift now produces focused failures without freezing page composition. No application fix, route change, schema expansion, or human approval is required to complete this handoff.
