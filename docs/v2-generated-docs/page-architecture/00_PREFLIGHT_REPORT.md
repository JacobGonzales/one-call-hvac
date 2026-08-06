# Page Architecture Preflight Report

## Outcome

The current public site is classified as **brownfield** with high confidence. The scope already has established route behavior, page-family composition, application-owned content, visual identity, interactions, metadata titles, and a live form integration. Preservation is therefore the default.

This was a discovery-only run. No application implementation occurred.

## Scope And Inputs Inspected

- Repository and nested instruction discovery: `AGENTS.md`, its two source guides, and nested-file search
- Framework and deployment evidence: `package.json`, lockfile, Vite/TypeScript/ESLint configuration, `index.html`, README
- Routes and navigation: `App.tsx`, `Link.tsx`, `PrimaryNavigation.tsx`, `RouteEffects.tsx`, site constants
- Public families: home, services, about, contact, placeholder, not-found
- Runtime content: route section TSX, route data modules, site constants
- Styles and assets: shared CSS, all route CSS, and `public/onecall-heating-and-air/`
- Interactions: mobile drawers, sticky CTAs, carousel, FAQ, anchor navigation, section reveals, Formspree form
- SEO and operational searches: title, canonical, robots, sitemap, schema, indexability, analytics, auth, booking, payment, storage, and data-source patterns
- Tests and validation: repository test/config/script inventory, TypeScript, ESLint
- V2 evidence: shared contract, ledger handoff, suite/page-architecture/content-rewriting/support readmes, and newly initialized ledger

## Current Structure

The Vite application uses a small browser-history adapter rather than a routing dependency. `App.tsx` lazy-loads six route-level page modules and chooses them by pathname. Four main content pages are thin compositions of route-owned section components. Three established placeholder paths share one route page and the services shell. Unmatched paths and `/404` render the branded not-found page.

Content is application-owned TypeScript/TSX. Shared behavior is intentionally narrow: navigation, links, images, motion/reveals, route effects, and sticky visibility. Each major family owns its section components, data, CSS prefix, header/footer/icon/mobile-CTA shell, and visual composition.

## Top Issues

1. Route identity is manually repeated across constants, resolver branches, navigation, title records, README, and repository instructions with no executable drift check.
2. Header/footer/icon/mobile-CTA structures and public facts are duplicated across families, but not identical enough to justify immediate replacement.
3. Service-area lists and some contact/company facts live in several content owners and differ; consolidation could accidentally rewrite public claims.
4. Metadata is limited to a static default description and runtime titles. No canonical, sitemap, robots, structured-data, route description, or explicit indexability layer was found.
5. Test tooling is installed, but the repository has no authored unit, integration, browser, route-contract, or accessibility tests.
6. Important interactive flows are source-visible but unverified in a browser: drawer focus behavior, carousel tab model, reflow/zoom, Formspree success/error behavior, and direct-route hosting.
7. Git branch/commit/working-tree evidence is unavailable because `.git` metadata is absent.

## Decisions

- Preserve route-level page files as thin compositions.
- Preserve route-owned sections, copy, ordering, CSS, and page-family vocabulary.
- Reuse existing shared components and hooks before proposing new abstractions.
- Treat suite example names as responsibilities, never naming requirements.
- If later audits confirm a normalization need, prefer focused fact extraction or adapters before shell replacement.
- Keep generated Markdown outside runtime code.
- Keep Formspree and all protected routes/content/SEO/visual behavior unchanged until explicitly authorized.

The complete execution rules and component preservation matrix are in `PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`.

## Proposed Discovery Sequence

1. Run page-architecture steps 01-04 in discovery against this profile.
2. Produce one bounded normalization plan that identifies precise files, compatibility strategy, and behavior-preserving tests.
3. Stop for user approval.
4. If approved, update the profile phase and implement one responsibility or page-family batch at a time.
5. Run step 05 to establish/verify route and page contracts before considering optional scaffolding step 06.

This sequence is a recommendation, not implementation authorization.

## Validation Evidence

- `npm run typecheck`: passed, exit 0.
- `npm run lint`: passed, exit 0.
- Source inventory confirmed there are no repository test files or test runner configs/scripts.
- Production build was not run because the discovery preflight did not need to refresh `dist/`.
- Browser, responsive, accessibility, live host, and Formspree submission checks were not run and are not claimed.

## Supporting Artifacts

- `docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`
- `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`
- `docs/v2-generated-docs/V2_SUITE_LEDGER_REPORT.md`

## Unresolved Risks

No ambiguity blocks the brownfield classification. Later implementation remains blocked on explicit approval after discovery reports and a concrete plan. Git/change attribution, live deployment, external form behavior, and visual/accessibility behavior remain inspection gaps.
