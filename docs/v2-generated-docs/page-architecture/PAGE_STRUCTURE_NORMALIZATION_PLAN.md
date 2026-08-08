# Page Structure Normalization Plan

## Status And Boundary

- Canonical run: 28
- Handoff: page architecture step 01
- Mode: brownfield preservation
- Phase: implementation validated at canonical run 33 for the approved bounded batches
- Application implementation: route adapters, breadcrumb ownership, placeholder extraction, focused client boundaries, accessibility fixes, and regression tests completed after run-32 approval

This remains the controlling preservation plan and now also records the run-33 implementation boundary. Conditional shell/footer/icon/service-area/keyword-tooling batches were not executed. Completed batches preserved public routes, copy, section order, styling, metadata/schema meaning except the approved 404 title, form behavior, and conversion behavior.

## Target Ownership Model

```text
Next.js app route
  -> select route metadata and structured data
  -> render the existing named route Page composition
       -> explicit route-owned sections in JSX order
       -> focused client leaves for menu, carousel, FAQ, form, and sticky CTA
  -> use route-owned data plus shared site/config helpers
```

The current repository does not need a generic section registry, universal JSON renderer, CMS, dynamic page-model layer, or new shared page-definition envelope. There are no dynamic route families or server data transformations that justify those abstractions.

## Proposed Skeleton

```text
src/app/<route>/page.tsx
  metadata and structured-data orchestration
  -> src/screens/<Route>Page.tsx
       explicit section order
       -> src/screens/<route>/<Section>.tsx
       -> focused client leaf where interaction requires it

src/config/page-metadata.ts
  route metadata and route-keyed keyword targets

src/config/site-navigation.ts
  navigation ownership

src/screens/<route>/<route>-data.ts[x]
  publishable route copy and facts

src/lib/metadata.ts
src/lib/structured-data.ts
  shared output builders
```

Keep `HomePage`, `ServicesPage`, `AboutPage`, `LocationPage`, `ContactPage`, `PlaceholderPage`, and `NotFoundPage`. They already serve the domain PageView responsibility; renaming them only to add a `View` suffix would add churn without clarity.

## Planned Batches

### Batch 0 — Reconcile repository instructions

**Gate:** before any application implementation.

1. Update `AGENTS.repo-one-call-hvac.md` to the real Next.js 16/OpenNext/Resend architecture.
2. Run `npm run sync:agents` to regenerate `AGENTS.md`.
3. Confirm that the command, routing, output, form, and deployment guidance agrees with `package.json`, `src/app`, and `wrangler.toml`.

**Rollback condition:** generated instructions still mention Vite, `src/App.tsx`, `dist/`, browser-history routing, or Formspree as the active architecture.

### Batch 1 — Guard existing page and keyword contracts

**Gate:** steps 02-04 findings incorporated and run-32 approval granted.

1. Add focused tests proving route-to-screen, metadata, indexability, sitemap, H1, and section-order contracts that later extraction could affect.
2. Add route-keyword checks for:
   - every indexable public page has at least one target;
   - the first target remains the documented primary until a richer adapter is approved;
   - primary ownership is unique across unrelated routes;
   - noindex placeholders remain explicit reviewed exceptions.
3. Add a development-only rendered-coverage generator only if the approval includes repository tooling. It should read `PAGE_METADATA` plus built HTML and output the same columns as `PAGE_KEYWORD_COVERAGE_MATRIX.csv` without changing live copy.

**Rollback condition:** any guard requires changing a public contract merely to make the test pass.

### Batch 2 — Narrow client boundaries

**Gate:** component contracts from step 03 and accessibility/reflow requirements from step 04 approved.

1. Move mobile-menu state into each existing `HeaderShell` or an approved shared header controller; preserve labels, focus behavior, drawer behavior, and navigation markup.
2. Move `useStickyCta` ownership into each existing `MobileStickyCta`; preserve the route-specific thresholds of 380, 280, and 220 pixels.
3. Mark `HeroSection` as its own client leaf because its carousel uses effects and state.
4. Move FAQ state into `FaqSection`; preserve the one-open-item behavior and current tests.
5. Keep `FreeQuoteForm`, `GoogleReviewsSection`, motion/reveal helpers, and other genuine interactive units as client leaves.
6. Remove `"use client"` from the top-level completed page compositions only after all imported interactive children have explicit client boundaries.

**Expected result:** static headings, copy, lists, links, schema-adjacent content, and most section composition remain server-rendered while interactive behavior hydrates at focused leaves.

**Rollback conditions:** changed markup order; hydration warning; lost menu/FAQ/carousel/sticky behavior; changed thresholds; accessibility regression; serialized data growth; or route output drift.

### Batch 3 — Normalize fact ownership through adapters

**Gate:** route lifecycle and cross-cutting contract decisions from steps 02-03 approved.

1. Keep `src/screens/location/location-data.ts` as the canonical full county/city inventory.
2. Replace only exact duplicate service-area summaries in About or Contact with derived adapters when the wording and count contract are proven equivalent.
3. Keep route-specific marketing copy in its route data file; do not force all copy into one global content registry.
4. Keep `PAGE_METADATA` as the metadata and keyword strategy source. If explicit keyword roles are approved, introduce a typed adapter around existing `targetKeywords` before changing consumers.

**Rollback conditions:** public wording changes, county/city loss, schema-visible fact drift, metadata change, or a second copy of the same strategy data.

### Batch 4 — Consolidate only proven shared visual contracts

**Gate:** step 03 must identify exact prop, markup, style, and behavior equivalence.

Review the four header/footer/icon/sticky-CTA families. Extract a shared primitive only where at least two consumers have the same responsibility and the resulting API remains small. Keep domain wrappers when class names or semantic behavior differ.

Do not add a universal `SitePageLayout` merely to wrap header/main/footer. The existing family CSS and markup are not yet proven equivalent, and a boolean-heavy layout API would create drift.

**Rollback conditions:** growing variant booleans, domain class leakage, CSS cascade changes, or harder custom-section insertion.

### Batch 5 — Validate representative families

Run, at minimum:

1. focused tests for touched headers, FAQ, hero carousel, sticky CTA, quote form, metadata, route inventory, sitemap, and structured data;
2. `npm run typecheck`;
3. `npm run lint`;
4. `npm test` or the repository's full Vitest command;
5. `npm run build` or the approved OpenNext production build;
6. desktop and mobile browser checks for `/`, `/services`, `/about`, `/location`, `/contact`, both placeholders, and a real 404;
7. keyboard and reduced-motion checks defined by architecture step 04;
8. rendered metadata, canonical, indexability, H1, schema, form, and keyword coverage checks.

## Naming Normalization Map

| Suite concept | Existing repository equivalent | Decision |
|---|---|---|
| route page | `src/app/**/page.tsx` | Keep. Already thin and framework-native. |
| `DomainPageView` | `src/screens/*Page.tsx` | Keep names. They already own explicit section order. |
| content source | route `*-data.ts` or `*-data.tsx` | Keep. Split only when a real maintenance boundary appears. |
| `PageSeo` | `PageMetadataDefinition` and `PAGE_METADATA` | Keep. Do not create a duplicate SEO registry. |
| keyword strategy | `PAGE_METADATA[*].targetKeywords` | Keep as source; add a role adapter only after approval. |
| page-model builder | none | Do not add without a dynamic family or real transformation. |
| `SitePageLayout` | root layout plus family shells | Do not add a universal layout until exact shared contracts are proven. |
| `PageHero` | route-specific hero sections | Keep domain-specific components. |
| section renderer | explicit JSX in each `*Page` | Preserve; generic renderer is rejected. |
| interactive islands | current broad page clients plus leaf clients | Narrow through Batch 2 after approval. |

## Keyword Coverage Regeneration Contract

The current matrix was generated from the latest successful production output with `jsdom`:

1. load each `.next/server/app/<route>.html` document;
2. read final title and meta description;
3. collect H1 text;
4. collect `.oc-faq` text as the current FAQ surface;
5. collect root-relative, hash, and canonical-domain anchor labels as internal links;
6. remove scripts, styles, noscript, H1, FAQ, and anchor nodes from a cloned body before counting remaining body text;
7. normalize whitespace and compare exact phrases case-insensitively;
8. join the result to the strategy matrix by canonical route and keyword.

`healthy` currently means at least one exact occurrence was observed. `missing` means no exact occurrence was observed. No `weak` or `excessive` decision is made because no evidence-backed page-specific minimum or maximum exists. A later generator must preserve this distinction and must not insert markers into application content.

## Explicit Non-Goals

- no generic site builder or universal section renderer;
- no CMS or Markdown runtime source;
- no route, slug, redirect, canonical, or indexability change;
- no metadata or schema meaning change;
- no form/API/Resend behavior change;
- no keyword stuffing or performance claim without dated evidence;
- no all-at-once folder rewrite;
- no speculative component abstraction.
