# Page Architecture Execution Profile

## 1. Profile Identity

- Repository: `one-call-hvac`
- Root: `/Users/jacobgonzales/Documents/GitHub/one-call-hvac`
- Refreshed: 2026-08-06, America/Denver (MDT, UTC-06:00)
- Branch and commit: `main` at `71db84b`
- Working-tree state: dirty with the accumulated, user-authorized Next.js migration, product work, and completed v2 handoffs; preserve every unrelated change
- Requested scope: canonical runs 27-34, including the approved bounded run-33 normalization, the owner-approved completion of Emergency and Social Media, and contract validation for all current public pages, generated search routes, and the inquiry API
- Directories inspected: `src/app/`, `src/screens/`, `src/components/`, `src/config/`, `src/lib/`, `src/hooks/`, `src/styles/`, `public/`, `scripts/`, `docs/2.0/`, and `docs/v2-generated-docs/`
- Page families inspected: home, services, about, social media/content hub, location/service area, emergency, contact, and not found
- Operational routes inspected: inquiry API, robots, and sitemap
- Repository instructions: `AGENTS.md`, generated from `AGENTS.base-react.md` and `AGENTS.repo-one-call-hvac.md`; both describe the current Next.js/OpenNext/Resend runtime
- Confidence: high for current repository architecture, local build behavior, and the run-33 desktop/320-pixel interaction checks; medium for live deployment and the remaining accessibility matrix
- Known inspection gaps: no live Resend submission, no 200-percent text/custom-spacing/assistive-technology matrix, no Search Console/Analytics or organic-rank material, supplied Keyword Planner geography is unspecified, and production is known from handoff 15 to be behind the repository state

No secret value, API token, customer submission, or private environment value is copied into this profile.

## 2. Execution Mode Decision

**Selected mode: brownfield.**

The requested scope contains established Next.js routes, production page behavior, distinctive page-family CSS, shared and route-owned components, visible public copy, metadata and structured-data contracts, indexing rules, a Resend-backed conversion workflow, tests, and a Cloudflare deployment target. Existing behavior therefore receives brownfield protection.

The mode covers:

- `/`
- `/services`
- `/about`
- `/location`
- `/contact`
- `/emergency`
- `/about/social-media`
- `/404` and framework not-found behavior
- `/api/inquiries`
- `/robots.txt`
- `/sitemap.xml`

The original preflight excluded application edits, route additions/removals, placeholder completion, content rewriting, visual redesign, SEO meaning changes, schema expansion, deployment, external service mutation, dependency cleanup, database/CMS introduction, and optional scaffolding. The owner later authorized completion and indexability promotion of the two existing placeholder routes without authorizing any new route.

Assumptions:

- The current Next.js source, package scripts, tests, and OpenNext configuration are the runtime authority when stale generated instructions disagree.
- The completed Emergency and Social Media pages remain brownfield because their paths, navigation, metadata ownership, and shared shell contracts predate their content promotion.
- A future genuinely new page family may be hybrid for that bounded scope; it would not authorize whole-repository replacement.

Reclassify only when the requested scope introduces a genuinely new product/page family with no established contracts, the framework or content source changes materially, or the owner approves a new CMS/database/content workflow.

## 2A. Execution Phase And Authorization

- Current phase: `implementation`
- Implementation explicitly authorized: yes, by the user's canonical run-32 instruction on 2026-08-06 to continue and implement the documented fixes
- Application implementation authorized: yes, for the bounded run-33 scope below
- Approved plan paths: `PAGE_STRUCTURE_NORMALIZATION_PLAN.md`, `ROUTE_CATALOG_IMPLEMENTATION_PLAN.md`, `NAMING_ADAPTER_PLAN.md`, and `04_ACCESSIBILITY_REFLOW_REPORT.md`
- Approved application files/page families/routes/systems: stable route/config adapters; breadcrumb definitions; existing home/services/about/location/contact compositions; completed emergency/social-media compositions; existing header, sticky-CTA, FAQ, hero, reviews, motion, not-found, and focused test owners
- Excluded application scope: routes/slugs/fragments, visible copy/claims/review data, service-area facts, metadata/schema meaning except the approved not-found title, form/API/Resend behavior, deployment, packages, assets, analytics, CMS/database, and unrelated work
- Migration batch size: one bounded route/config, client-boundary, accessibility, or regression-test responsibility at a time
- Content changes: prohibited
- Visual changes: limited to the approved accessibility behavior—larger invisible/visual control hit areas, complete review text, and pause controls while preserving the established family design
- Component replacement: prohibited; focused behavior extraction and adapters are approved
- Route/indexability/schema changes: prohibited except a page-specific framework not-found title with no lifecycle/indexability change
- Required checkpoint: satisfied by the user's run-32 approval; complete run-33 validation before proceeding to page-architecture step 05

The run-32 approval covers only the documented bounded plans. Conditional icon, footer, or universal-shell consolidation remains excluded because exact equivalence was not established.

## 3. Repository Architecture Baseline

### Route System

The application uses Next.js 16 App Router entrypoints under `src/app/`. Route files are thin server components that own route metadata, route-specific JSON-LD injection, CSS imports, and the page-screen composition.

```text
request path
  -> Next.js App Router page or metadata route
  -> route metadata + optional server-rendered JSON-LD
  -> route screen component
  -> route-owned and shared sections
  -> application-owned TypeScript/TSX data and shared constants
```

There are no dynamic route families, route groups, middleware, redirects, rewrites, authentication routes, or `generateStaticParams` functions. Completed public pages prerender statically. `/api/inquiries` is a dynamic Node.js POST route. Robots and sitemap use Next metadata routes.

### Page Families And Composition

| Family | Route entrypoint | Screen/composition | Primary owned styling/data |
|---|---|---|---|
| Home | `src/app/page.tsx` | `HomePage` with ten ordered sections, reviews, quote form, footer, sticky CTA | `src/screens/home/`, `home-data.ts`, `home.css` |
| Services | `src/app/services/page.tsx` | `ServicesPage` with service anchors, decision guide, planning reference, reviews, related pages, CTA | `src/screens/services/`, `services-data.tsx`, `services.css` |
| About | `src/app/about/page.tsx` | `AboutPage` with company/people/value sections, fact sheet, reviews, service area, journeys | `src/screens/about/`, `about-data.ts`, `about.css` |
| Location | `src/app/location/page.tsx` | `LocationPage` reusing the services shell plus location hero/directory, journeys, reviews | `src/screens/location/`, `location-data.ts`, `location.css`, services shell/CSS |
| Contact | `src/app/contact/page.tsx` | `ContactPage` with contact details, related pages, reviews, service-area summary, form | `src/screens/contact/`, `contact-data.ts`, contact/form CSS |
| Emergency | `src/app/emergency/page.tsx` | `EmergencyPage` with direct-call hero, reviews, urgent guidance, response steps, and journeys | `src/screens/emergency/`, `emergency-data.ts`, `emergency.css`, services shell/CSS |
| Social media | `src/app/about/social-media/page.tsx` | `SocialMediaPage` with HVAC tips, project-update guidance, reviews, preparation checklist, and journeys | `src/screens/social-media/`, `social-media-data.ts`, `social-media.css`, services shell/CSS |
| Not found | `src/app/404/page.tsx`, `src/app/not-found.tsx` | `NotFoundPage` | `not-found.css` |

Route entrypoints remain thin. Major subject changes are generally separate section components. Screen files now own only section order and page-family composition; header shells, sticky CTAs, the FAQ, and the hero own their focused interaction state.

### Shared Layouts And Page Frames

`src/app/layout.tsx` owns root metadata, language, the Node.js runtime declaration, shared CSS, and `RouteEffects`. It intentionally does not impose one visual site shell because the four established page families own distinct headers, footers, icon subsets, wrappers, and mobile CTAs.

Home, services, about, and contact each have route-owned `HeaderShell`, `FooterShell`, `Icon`, and `MobileStickyCta` implementations. Location, Emergency, and Social Media intentionally reuse the services shell. Their structures are duplicated but not identical in content, CTA choices, SVG sets, or CSS contracts.

### Server And Client Boundaries

App Router route files, metadata helpers, structured-data builders, section modules, and all seven marketing-page compositions are server-compatible. Canonical run 33 moved menu, sticky-scroll, FAQ, and hero state into focused interactive leaves so static descendant sections no longer sit below a page-wide client boundary.

Additional focused client components include:

- `PrimaryNavigation` for active pathname state;
- `RouteEffects` for hash scrolling;
- `SectionReveal` and `MotionVisibility` for progressive motion;
- `GoogleReviewsSection` for auto-advancing carousel behavior;
- `Link` for Next-aware navigation/external anchors; the module is server-compatible and remains usable inside client parents;
- `FreeQuoteForm` for form state, validation, and submission.

The narrowed boundary contract is implemented and validated. Later work must preserve menu, sticky CTA, FAQ, animations, server-visible content, and test behavior without moving state back into page-wide clients.

### Metadata, Indexing, And Structured Data

- `src/config/page-metadata.ts` owns typed route titles, descriptions, canonical paths, keyword intent, and indexability.
- `src/lib/metadata.ts` generates canonical, Open Graph, Twitter, and robots metadata.
- `src/app/layout.tsx` owns `metadataBase`, site identity, favicon, and default metadata.
- `src/app/robots.ts` and `src/app/sitemap.ts` own generated search discovery routes.
- `src/lib/structured-data.ts` owns WebSite, Organization, BreadcrumbList, and contextual Service builders.
- `src/components/StructuredData.tsx` safely serializes JSON-LD.
- All seven completed marketing routes are indexable and included in the generated sitemap; 404 behavior remains non-indexable.

These are settled Phase 2 contracts and protected from architecture-only changes.

### Styling And Design Systems

The established visual system is route-level CSS plus shared interaction/navigation CSS. Family wrapper prefixes remain `oc-`, `ocs-`, `oca-`, and `occ-`. The same local color vocabulary is repeated across page-family CSS rather than owned by a formal global token module. Google Fonts imports are repeated by family. Breakpoints and responsive rules are family-specific, with shared reduced-motion coverage.

CSS consolidation may be studied when it removes confirmed drift without flattening distinctive page-family behavior. It is not authorized by this profile.

### Operational Data And Integrations

The homepage and contact route reuse `FreeQuoteForm`. Client validation and payload construction live in `src/lib/free-quote.ts`. `POST /api/inquiries` repeats validation server-side, rejects oversized requests, filters a honeypot, and calls the Resend delivery helper with server-only configuration. The route returns safe validation/unavailable/failure responses and the form retains direct phone fallback copy.

Public Resend sender/recipient configuration is tracked in `wrangler.jsonc`; the secret API key remains external. No database, CMS, authentication, checkout, booking engine, analytics integration, or submission persistence exists.

### Validation Commands And Restrictions

- `npm test`: Vitest suite; current run-34 baseline 30 files / 95 tests.
- `npm run typecheck`: strict TypeScript, no emit.
- `npm run lint`: Next.js core-web-vitals plus TypeScript ESLint.
- `npm run build`: Next.js production build packaged through OpenNext for Cloudflare.
- `npm run next:build`: framework build without OpenNext packaging.
- Playwright is installed, but no tracked Playwright config/suite is part of the current baseline.
- Local development and preview default to port 3000.
- Do not run live form submissions or deployment without explicit authorization.

## 4. Runtime Content Storage Policy

- Live page copy and facts reside in route-owned TSX sections, `home-data.ts`, `services-data.tsx`, `about-data.ts`, `contact-data.ts`, `location-data.ts`, `emergency-data.ts`, `social-media-data.ts`, and shared site/navigation configuration.
- Metadata inputs and route keyword intent reside in `src/config/page-metadata.ts`; stable site/contact/route values reside in `src/config/site.ts`.
- Route navigation and cross-page journeys reside in `src/config/site-navigation.ts`.
- Structured-data facts are derived from shared configuration and the canonical location data.
- Google review excerpts are application-owned static data in `src/lib/google-reviews.ts`; they are not a live API or schema-eligible rating source.
- Operational quote submissions exist only in request memory and Resend delivery; they are not static content and are not persisted locally.
- No database or CMS exists in the current runtime.
- Adding or expanding a database or CMS is not authorized.
- Files under `docs/v2-generated-docs/` are audit, transfer, evidence, and control artifacts only.

> Live public page content must remain in the repository's established application code. Generated Markdown is not a runtime source. Do not introduce a database or CMS for page content.

## 5. Component Preservation Matrix

| Component or pattern | Current responsibility | Consumers | Existing quality | Decision | Protection | Evidence |
|---|---|---|---|---|---|---|
| App Router page files | Route metadata, JSON-LD, CSS imports, screen composition | Seven public routes | Thin and framework-aligned | keep as-is | Preserve route paths, server metadata, and static generation | `src/app/**/page.tsx` |
| Root layout | Global metadata, language, shared CSS, route effects | Entire app | Focused | keep as-is | Do not force a visual shell into it without evidence | `src/app/layout.tsx` |
| Route screen compositions | Page state and ordered sections | Main public families | Clear but broad client boundaries | keep; analyze focused boundary extraction | Preserve section order and family wrapper contracts | `src/screens/*Page.tsx` |
| Family HeaderShells | Brand, navigation, mobile menu, CTA | Home/services/about/contact; services reused by location/emergency/social media | Confirmed structural overlap with family differences | reuse; consider shared behavior adapter | Preserve visual identity, CTA choices, classes, and menu behavior | four `HeaderShell.tsx` files |
| Family FooterShells | Contact summary, route links, brand/signoff | Same page families | Shared link data reduces drift; markup/styles still vary | keep; consider focused data/primitive extraction | Do not flatten family-specific layout/copy | four `FooterShell.tsx` files |
| Family MobileStickyCta | Mobile call/quote actions | Main page families | Small, duplicated, intentionally varied | keep; consolidate only after contract comparison | Preserve labels, destinations, visibility thresholds | four `MobileStickyCta.tsx` files |
| Family Icon components | Inline SVG subsets | Route-owned sections | Duplicated switch implementations with different sets | keep; inventory before any consolidation | Preserve SVG output and accessible decoration behavior | four `Icon.tsx` files |
| `PrimaryNavigation` | Desktop/mobile route labels and active state | Header shells | Shared, tested, Next-aware | reuse | Preserve public props and route vocabulary | component and test |
| `Link` | Internal Next navigation and external native anchors | Global/route CTAs | Focused and beginner-readable | reuse | Preserve props, protocols, and anchor semantics | `src/components/Link.tsx` |
| `SectionReveal` | Server-visible progressive section motion | All visual families | Reduced-motion aware and tested | reuse | Never hide prerendered primary content | component and test |
| `GoogleReviewsSection` | Manual review carousel and auto-advance | All seven marketing-page families | Reusable, interactive, tested | reuse | Preserve reduced motion, controls, excerpts, and no-rating-schema rule | component/data/tests |
| `RelatedPagesSection` | Typed page-specific next journeys | Six completed non-home marketing pages | Centralized and tested | reuse | Keep routes and intent mapping synchronized | component/config/tests |
| Free quote form + helpers | Client interaction, validation, consent, submission | Home and contact | Sensitive shared flow with client/server validation | keep as-is | No behavior/endpoints/fields/Resend changes during architecture normalization | form, API, lib tests |
| Metadata system | Route identity, canonical, social preview, indexability | Public routes, sitemap | Centralized and tested | keep as-is | Protected SEO contract | config/helper/tests |
| Structured-data system | Site/entity/breadcrumb/location JSON-LD | Home and completed leaf pages | Server-rendered, linked, tested | keep as-is | No schema-meaning changes in architecture work | helper/component/tests |
| Canonical location data | Seven counties and 41 cities | Location UI, schema, summaries/tests | Clear primary source, but summary arrays still exist elsewhere | reuse; plan fact adapters | Do not change coverage facts during consolidation | `location-data.ts` and tests |
| Route-family CSS | Visual identity, responsive rules, local tokens | Each family | Large but established and distinctive | keep; audit confirmed duplication only | No redesign, class-prefix replacement, or section reordering | route CSS files |
| Vitest contracts | Route, metadata, schema, content, interaction, form, App Router reconciliation, and page-family guards | 30 test files | Strong local contract baseline, not full browser accessibility coverage | keep focused and outcome-based | Preserve existing test-visible behavior | `*.test.ts(x)` inventory |

## 6. Repository Conventions To Preserve

- Next.js App Router filenames and server-owned route metadata.
- Thin route entrypoints composed from `src/screens/`.
- Route-owned major sections and domain data placed beside their page family.
- `@/` imports for shared/domain modules; short relative imports inside a screen family.
- Named exports for reusable components/helpers and default exports for route-level screens/pages where established.
- Strict TypeScript and pure helpers for metadata, validation, schema, and data shaping.
- CSS family prefixes `oc-`, `ocs-`, `oca-`, and `occ-` plus shared style modules.
- Shared `Link` for internal navigation and ordinary anchors for phone/email/external destinations.
- Centralized site, metadata, navigation, location, form, review, and schema facts.
- Server-visible content with motion as progressive enhancement.
- The existing route paths, service fragment IDs, `/#faq`, `/#pricing`, and `/services#service-planning-checklist`.
- Current form endpoint, payload shape, honeypot, request limit, validation, consent, Resend fallback, and direct phone path.
- Focused Vitest contracts near the current repo pattern.
- Generated Markdown remains non-runtime documentation.

Suite example names such as `SitePageLayout`, `PageView`, `PageDefinition`, or `lib/content/` describe responsibilities only. They are not required repository names.

## 7. Approved Normalization Scope

During canonical runs 28-31, the following are approved for **discovery and planning only**:

- map repeated page-frame responsibilities and identify whether behavior adapters are safer than visual shell replacement;
- assess whether menu/sticky state can be isolated to narrower client components while preserving server-rendered section content;
- compare family headers, footers, mobile CTAs, icons, design tokens, font imports, and service-area summaries for confirmed versus deliberate differences;
- design route/page-family/metadata/schema/content ownership contracts without changing current owners;
- identify accessibility, keyboard, zoom, reflow, and reduced-motion gaps with precise evidence;
- define focused contract tests required before any approved normalization;
- prepare bounded implementation batches, compatibility strategy, rollback conditions, and validation requirements.

The run-32 decision approved bounded run-33 implementation of route identity adapters, breadcrumb ownership, focused client boundaries, confirmed accessibility fixes, and focused contract tests. Conditional icon/footer/shell consolidation remains discovery-only.

## 8. Protected And Approval-Required Areas

Explicit approval is required before changing:

- public routes, slugs, fragments, redirects, canonicals, sitemap, robots, or indexability;
- metadata wording, structured-data meaning, entity IDs, or rich-result eligibility;
- visible page copy, prices, claims, reviews, service coverage, or placeholder lifecycle;
- visual identity, page-family CSS prefixes, section order, hero/carousel behavior, or distinctive components;
- navigation labels/hierarchy, footer destinations, CTA wording/destinations, or mobile sticky behavior;
- quote fields, consent, validation, endpoint, API responses, Resend delivery, recipient, or secret ownership;
- public component props/exports or test-visible behavior;
- database, CMS, content-source, analytics, authentication, payment, booking, or persistence boundaries;
- package/deployment/Cloudflare/OpenNext configuration;
- deletion or replacement of any existing component or user-owned work.

The stale Vite-era repository instruction addendum must be reconciled before application implementation so future agents do not follow conflicting commands. That documentation repair does not itself authorize runtime changes.

## 9. Validation Baseline

| Area | Current evidence | Baseline or gap |
|---|---|---|
| Route resolution | Next build prerenders all expected public/static routes and exposes API/metadata routes | Strong local build baseline |
| Metadata/canonicals/indexing | Focused config/helper/metadata-route tests and generated HTML checks | Strong local source/build baseline; production deployment stale |
| Structured data | Builder/serializer tests and six generated JSON-LD blocks parsed in run 26 | Strong local baseline; external validator deferred |
| Runtime content | Section/content tests cover major entity, journey, service, location, and snippet contracts | Partial; not every sentence or visual section has a contract |
| Navigation | Primary navigation, related pages, route effects, hash targets, link behavior, and the mobile-drawer focus lifecycle have focused coverage | Strong local component/browser baseline; target-browser and assistive-technology coverage remains |
| Interactions | Hero/review pause controls, 24-pixel pagination targets, FAQ, section reveal, sticky behavior, quote disclosure, and invalid-submit focus have focused coverage | Strong local baseline; no tracked Playwright suite or live success submission |
| Accessibility | Semantic labels, reduced motion, server-visible reveals, drawer focus containment/return, unclipped reviews, 320-pixel reflow, and 404 titles passed locally | 200% text, custom text spacing, full assistive-technology/forced-colors/target-browser matrix remains |
| Forms/API | Client validation, server parsing, honeypot, delivery helpers, and API responses are tested | Strong local logic baseline; live Resend delivery not performed |
| Type safety | `npm run typecheck` passed immediately before this preflight in run 26 | Rerun after approved changes |
| Lint | `npm run lint` passed immediately before this preflight in run 26 | Rerun after approved changes |
| Tests | 26 files / 77 tests passed after the approved fixed-route keyword/content reconciliation | Current local baseline |
| Production build | Next.js 16.3/OpenNext Cloudflare build passed in canonical run 33 | Current local baseline |
| Deployment | Handoff 15 found live robots/sitemap/placeholder metadata behind local source | Deploy and recheck remains human/external work |

Canonical run 33 supersedes the preflight-only baseline with focused tests, the complete Vitest suite, typecheck, lint, OpenNext production build, generated HTML checks, and rendered desktop/320-pixel route and interaction checks.

The later fixed-route keyword/content reconciliation supersedes the test count with 26 files / 77 tests and another successful typecheck, lint, and OpenNext build. Rendered Browser-plugin validation for that content/reordering batch is recorded separately in the suite ledger.

## 10. Risks, Conflicts, And Human Decisions

- `AGENTS.repo-one-call-hvac.md` and generated `AGENTS.md` now describe the current Next.js/OpenNext/Resend runtime; the instruction prerequisite is satisfied without another rewrite.
- The dirty worktree contains all accumulated handoff changes. Later work must use targeted diffs and must not assume unrelated modifications are disposable.
- Main screen components create broad client boundaries. Narrowing them may improve server/client separation, but could increase prop plumbing or break interactions if attempted without a contract.
- Headers, footers, icons, and mobile CTAs are duplicated but intentionally differ. Visual similarity alone is not sufficient replacement evidence.
- Service-area facts have a canonical location source, while some family summaries remain duplicated. Consolidation must preserve deliberate subsets and public wording.
- Route-family CSS repeats tokens and font imports; extracting them may change cascade/specificity and requires visual regression evidence.
- Emergency and Social Media remain in primary navigation as completed, indexable pages after the explicit owner lifecycle decision.
- Production is behind the local search and metadata implementation. Architecture work must not use the stale live output as the runtime source of truth.
- Step 04 identified concrete drawer, carousel, review-content, motion, and not-found-title defects; run 33 fixed them and reran rendered evidence before step 05.
- External Resend delivery, Google validators, Search Console, DNS, redirects, and deployment remain outside repository-only architecture work.

The run-32 human decision and bounded run-33 implementation are complete. Production deployment and external validation remain outside that approval.

## 11. Canonical Run 33 Completion Record

- Added one stable typed route/path owner plus compatibility adapters without changing any public URL, fragment, canonical, sitemap membership, robots policy, or API endpoint.
- Added one shared breadcrumb definition owner and, at run 33, moved then-placeholder definitions out of the page composition without changing visible wording.
- Narrowed the main page compositions to server-compatible components while keeping menu, sticky CTA, FAQ, hero, reviews, motion, navigation, and form behavior in focused client leaves.
- Implemented mobile-drawer inert/hidden state, focus transfer, Tab containment, Escape dismissal, link dismissal, body scroll lock, and trigger focus return without consolidating family markup.
- Replaced incomplete hero tab semantics with named current-state buttons, added durable hero/equipment and review pause controls, enlarged pagination targets to at least 24 CSS pixels, and exposed complete review text.
- Added the framework not-found title `Page Not Found | One Call Heating & Air` while retaining `noindex, nofollow`.
- Validation passed: 25 Vitest files / 69 tests, typecheck, lint, Next.js 16.3/OpenNext build, generated route/404 HTML checks, and Browser-plugin desktop/320-pixel checks across every public/utility route plus an unmatched path.
- No deployment, live inquiry, content rewrite, analytics, shell/footer/icon consolidation, or external-system mutation occurred.

## 12. Fixed-Route Keyword Evidence Reconciliation

- The user supplied `docs/content/keywords/SEO_KEYWORDS_ONE_CALL_HVAC_TIERED_RANKED.md` after canonical run 33 and explicitly limited the client scope to eight routes.
- Planner tiers and priority scores are treated as opportunity evidence, not organic Google positions; the unspecified export geography is not used as city/county volume evidence.
- No route was added or renamed. Suggested Planner URLs were mapped into the existing service, location, about, contact, emergency, and social-media responsibilities.
- One additive, route-owned, server-rendered content section was added to the six non-home marketing routes; the 404 utility remains unexpanded.
- Google reviews follow the hero on six marketing routes. Contact is the deliberate exception: its quote form follows the hero and reviews follow the form.
- A later explicit owner decision replaced the Emergency and Social Media placeholders with complete route-owned sections, updated their metadata wording, promoted both to indexable, and added both to the sitemap. Canonicals, structured-data meaning, form/Resend behavior, and the fixed eight-route scope were preserved.

## 13. Completed Existing-Route Promotion And Scaffolding Decision

- `/emergency` now renders `EmergencyPage` with direct-call guidance, reviews, keyword content, urgent-situation guidance, response steps, and existing-route journeys.
- `/about/social-media` now renders `SocialMediaPage` with HVAC tips, project-update guidance, reviews, a preparation checklist, and existing-route journeys.
- Both routes use repository-owned static TypeScript content, reuse the services shell, remain statically generated, and now participate in the seven-URL sitemap.
- The obsolete shared `PlaceholderPage`, placeholder data, and placeholder CSS were removed.
- The client-paid route count remains eight including `/404`; no slug, canonical path, API route, or redirect was added.
- The owner explicitly skipped optional canonical run 35 / page-architecture step 06 because no further pages or scaffold generator are needed.
- Validation baseline after canonical run 34: 30 Vitest files / 95 tests, typecheck, lint, and Next.js 16.3/OpenNext build passed. Cross-collection route, framework-page, metadata, sitemap, keyword, journey, image, and all-family semantic contracts are executable. The most recent Browser QA at 1280 and 320 CSS pixels remains applicable because run 34 changed no rendered component or CSS.

## 14. Page And Route Contract Validation Completion

- `src/config/page-route-contracts.ts` reports all current cross-collection route issues in one pass with route-specific messages.
- The App Router page tree must equal the seven public catalog paths plus `/404`; a new `page.tsx` cannot silently bypass the normalized workflow.
- Every public route must retain aligned final canonical, robots, and shared preview-image metadata.
- Every completed non-home route must retain one valid related-page journey whose targets resolve and avoid self-links.
- All seven marketing-page compositions must retain one `main`, one H1, and unique IDs without freezing visual layout or section count.
- `PAGE_ROUTE_COVERAGE_MATRIX.csv` and `PAGE_ROUTE_REVIEWED_EXCEPTIONS.md` record coverage and deliberate exclusions.
- Canonical run 34 is validated. Optional run 35 is skipped by owner decision; canonical run 36 has completed the final architecture gate.

## 15. Final Architecture Validation

- Canonical run 36 is validated and Phase 3 is complete.
- Automated validation passed with 30 Vitest files / 95 tests, strict typechecking, ESLint, and the Next.js 16.3/OpenNext 1.19.11 production build.
- Generated output retained the expected canonical, indexability, H1, and `main` contracts across all seven marketing routes.
- In-app Browser validation covered all eight explicit routes at 1280x800 and 320x800. Every route retained one H1 and one `main`, unique IDs, correct titles, and no horizontal overflow or framework error overlay.
- Interaction checks passed for the homepage review carousel, internal Services navigation, and the Emergency mobile drawer's open, close, focus-transfer, and focus-return behavior. Browser warning/error logs were empty.
- A temporary production server returned 200 HTML for all seven marketing routes, 404 HTML for both `/404` and an unmatched path, `text/plain` for `robots.txt`, and `application/xml` for `sitemap.xml`; the server was stopped after validation.
- Run 36 introduced no implementation, content, route, metadata, schema, form, package, deployment, integration, or secret change.
- The next suite decision is whether to begin conditional Phase 4 content rewriting at canonical run 37 or skip that phase and proceed to canonical run 42 closeout.

## Staleness Conditions

Refresh this profile when:

- the framework, App Router structure, route inventory, or deployment model changes materially;
- a page family is added, removed, or substantially redesigned;
- runtime content ownership, metadata/schema ownership, or canonical location data changes;
- a database, CMS, authentication, booking, payment, or persistence system is introduced;
- the form/API/Resend contract changes;
- the design system or client-boundary strategy changes materially;
- the requested architecture scope falls outside the inspected families;
- the run-32 approval changes protected areas or replacement authority;
- later inspection finds a conflict that changes preservation decisions.

Every later page-architecture handoff must read this profile, confirm it is current for its scope, state brownfield/discovery or approved implementation mode, and preserve the decisions above.
