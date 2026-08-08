# Page Architecture Preflight Report

## Run Status

- Canonical run: 27
- Architecture step: 00
- Phase: discovery
- Status: audited
- Execution mode: brownfield
- Pre-execution rundown: delivered before the first write
- Application implementation: prohibited by this handoff and not performed

## Why The Prior Profile Was Stale

The August 5 profile described the repository before the completed migration and SEO suite. It recorded:

- Vite and a browser-history resolver;
- no Git metadata;
- Formspree delivery;
- no canonical, robots, sitemap, structured-data, or indexability system;
- no authored tests;
- `dist/` as the production output.

The current evidence instead shows:

- Next.js 16 App Router routes under `src/app/`;
- OpenNext packaging and Cloudflare Worker deployment;
- Git `main` at `71db84b` with an intentionally dirty accumulated worktree;
- a Resend-backed `POST /api/inquiries` route with client/server validation;
- centralized page metadata, canonical URLs, indexing policy, social previews, sitemap, robots, and JSON-LD;
- 23 Vitest files and a 60-test baseline;
- `.next/` and `.open-next/` build ownership.

The old profile could not safely control later architecture work and has been replaced with a current repository-specific baseline.

## Inspection Scope

Inspected evidence included:

- merged repository instructions and the stale Vite repo addendum;
- package, TypeScript, ESLint, Next, OpenNext, and Wrangler configuration;
- the complete App Router tree and metadata/API routes;
- all screen compositions, route-owned sections, shared components, hooks, data modules, CSS, and public assets;
- all client boundaries and the server-compatible route/helper layer;
- navigation, metadata, schema, sitemap, robots, review, service-area, and form ownership;
- the inquiry API, payload validation, honeypot, request-size limit, Resend delivery, and error fallback;
- all 23 test files and the immediately preceding typecheck/lint/test/build results;
- generated v2 SEO, route, content-gap, and project-context evidence;
- Git branch, revision, and working-tree state.

## Classification

The site is brownfield for all current routes and page families. Existing behavior, content, visual identity, search contracts, and conversion behavior take precedence over suite examples.

No ambiguity requires a hybrid boundary today. A later genuinely new page family could receive a bounded hybrid classification, but it would not authorize migration of existing families.

## Current Architecture Summary

Route entrypoints are thin server components. They emit metadata/JSON-LD and compose client screen components. Home, services, about, contact, location, and placeholder families are assembled from focused section modules. Location and placeholders reuse the services shell; the four main families retain distinct headers, footers, icons, mobile CTAs, wrappers, and CSS prefixes.

Static copy and facts remain in TypeScript/TSX data and section modules. Metadata, site constants, navigation, location inventory, reviews, form validation, Resend delivery, and structured data each have focused owners. Generated Markdown is not part of the runtime.

## Top Architecture Findings

1. **The repository instruction addendum is stale.** It still directs agents toward Vite, `src/App.tsx`, `dist/`, and Formspree. Current executable source proves a Next.js/OpenNext/Resend architecture.
2. **Main screen client boundaries are broad.** Menu/sticky/FAQ state at the screen level places otherwise static sections below client components. Narrowing may help, but only if it does not trade bundle reduction for fragile prop plumbing or interaction regressions.
3. **Family shells are duplicated but not equivalent.** Headers, footers, icons, and mobile CTAs share shapes while retaining distinct CTA, copy, SVG, and CSS behavior.
4. **Content ownership is substantially improved but not complete.** Location data is canonical for seven counties/41 cities, while selected service-area summaries and page-family facts remain duplicated.
5. **CSS has deliberate family ownership plus confirmed repetition.** Tokens and Google Font imports repeat, but cascade and family identity make blind extraction risky.
6. **Tests provide a useful contract baseline.** Route/metadata/schema/content/navigation/review/form behavior is covered, but there is no tracked end-to-end suite and no complete keyboard/zoom/reflow baseline.
7. **Sensitive flows are well isolated.** The shared quote form and API route have clear validation/delivery boundaries and must not be mixed into a page-shell refactor.
8. **Production evidence remains stale.** Local source/build is authoritative for architecture; live search routes and placeholder metadata were behind in handoff 15.

## Component Preservation Decisions

- Keep App Router page files, root metadata layout, metadata/schema helpers, search routes, and API route ownership.
- Reuse `PrimaryNavigation`, `Link`, `SectionReveal`, `GoogleReviewsSection`, `RelatedPagesSection`, form helpers, and canonical location data.
- Keep family-specific shells and CSS until discovery proves a coherent shared responsibility and the user approves a compatibility plan.
- Analyze narrower client islands during steps 01 and 03; do not rewrite screens during discovery.
- Extend tests only after the intended contracts are defined and approved.
- Never replace a component merely because its name or folder differs from a suite example.

The full preservation matrix is in `PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`.

## Discovery Scope For Runs 28-31

The next four runs may design, inventory, and recommend:

- reusable page-frame/component responsibilities;
- route catalog and lifecycle ownership;
- page-family and cross-cutting contracts;
- semantic, keyboard, accessibility, resize, zoom, and reflow requirements;
- bounded implementation batches and prerequisite tests.

They may not alter application code. Canonical run 32 is the explicit user approval gate.

## Protected Areas

Routes, slugs, fragments, metadata, indexability, schema, sitemap/robots, public copy and claims, reviews, visual identity, section order, navigation, CTAs, form fields/validation/API/Resend behavior, component exports, packages, deployment, and content-source boundaries remain protected.

## Validation Baseline

The immediately preceding run 26 validated the same application state with:

- 60/60 tests across 23 files;
- strict TypeScript;
- ESLint;
- Next.js 16.3/OpenNext Cloudflare production build;
- generated metadata and six JSON-LD block checks;
- `git diff --check`.

This preflight changed generated documentation only. It does not repeat application validation or claim new browser/accessibility/live-host evidence.

Profile-section inventory, current-framework/source agreement, the four-artifact contract, cross-document status agreement, and `git diff --check` passed.

## Supporting Outputs

- [Execution profile](./PAGE_ARCHITECTURE_EXECUTION_PROFILE.md)
- [Implementation summary](./00_PREFLIGHT_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./00_PREFLIGHT_HUMAN_TODO.md)
- [Suite ledger](../V2_SUITE_RUN_LEDGER.md)
