# Page Structure Report

> Post-audit lifecycle update (2026-08-06): `/emergency` and `/about/social-media` now use dedicated, complete route compositions. The shared `PlaceholderPage` and its data/styles were removed without adding or renaming a route. Placeholder references below document the earlier run-28 state.

## Run Context

- Canonical run: 28
- Handoff: `01_REUSABLE_PAGE_STRUCTURE_AND_COMPONENT_SKELETON_HANDOFF.md`
- Execution profile: `PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`
- Selected mode: brownfield preservation
- Execution phase: discovery in run 28; bounded implementation validated in run 33
- Application implementation: not authorized in run 28; approved in run 32 and completed in run 33
- Application baseline: Next.js 16 App Router, React 19, strict TypeScript, OpenNext/Cloudflare, Resend inquiry delivery

The execution profile remains current for this scope. The discovery gate was satisfied at run 32; the selected bounded batches were completed at run 33.

## Current Structure

The repository already follows most of the desired responsibility chain:

```text
src/app/<route>/page.tsx
  -> PAGE_METADATA and structured-data builders
  -> src/screens/<Route>Page.tsx
  -> explicit route-owned section components
  -> route-owned *-data.ts[x] plus shared config/helpers
```

Key findings:

- Public route entrypoints are 13-32 lines and contain metadata/schema orchestration rather than long marketing bodies.
- Completed `src/screens/*Page.tsx` files are 37-55 lines and make section order obvious in JSX.
- `PlaceholderPage` is a deliberate shared view for the two incomplete noindex routes.
- Route copy and list content is mostly kept in route `*-data` files.
- `PAGE_METADATA` is the single route-keyed metadata and target-keyword source.
- `createPageMetadata` and focused structured-data helpers own final output formatting.
- There are no dynamic route families, slug collections, CMS records, database loaders, or transformations that justify a page-model builder today.
- The main structural debt is broad client ownership around mostly static page compositions.

## Page-Family Matrix

| Page family | Route file | Content source | PageView | Shared layout/shell | Metadata source | Keyword source | Client boundary | Main issue |
|---|---|---|---|---|---|---|---|---|
| Unique homepage | `src/app/page.tsx` | `src/screens/home/home-data.ts` plus explicit sections | `HomePage` | root layout plus home Header/Footer/CTA | `PAGE_METADATA.home`; site schema helper | `PAGE_METADATA.home.targetKeywords` | Entire `HomePage`; nested carousel/reviews/motion | Menu, FAQ, sticky CTA, and carousel state pull static composition into the client graph. |
| Service directory | `src/app/services/page.tsx` | `src/screens/services/services-data.tsx` | `ServicesPage` | root layout plus services Header/Footer/CTA | `PAGE_METADATA.services`; breadcrumb helper | `PAGE_METADATA.services.targetKeywords` | Entire `ServicesPage`; nested interactive service controls/motion | Menu and sticky CTA state are owned too high. |
| Company marketing | `src/app/about/page.tsx` | `src/screens/about/about-data.ts` | `AboutPage` | root layout plus about Header/Footer/CTA | `PAGE_METADATA.about`; breadcrumb helper | `PAGE_METADATA.about.targetKeywords` | Entire `AboutPage`; nested motion/reviews | Menu and sticky CTA state are owned too high. |
| Service area | `src/app/location/page.tsx` | `src/screens/location/location-data.ts` | `LocationPage` | root layout; reuses services Header/Footer/CTA | `PAGE_METADATA.location`; breadcrumb and service-area helpers | `PAGE_METADATA.location.targetKeywords` | Entire `LocationPage`; nested motion/reviews | Menu and sticky CTA state are owned too high; related summary facts exist elsewhere. |
| Conversion/contact | `src/app/contact/page.tsx` | `src/screens/contact/contact-data.ts` plus validated form constants | `ContactPage` | root layout plus contact Header/Footer/CTA | `PAGE_METADATA.contact`; breadcrumb helper | `PAGE_METADATA.contact.targetKeywords` | Entire `ContactPage`; `FreeQuoteForm` is a legitimate client leaf | Menu and sticky CTA state unnecessarily expand the boundary; the form must stay isolated. |
| Noindex placeholders | `src/app/emergency/page.tsx`; `src/app/about/social-media/page.tsx` | route props passed to shared view | `PlaceholderPage` | root layout plus services Header/Footer | route-specific `PAGE_METADATA` entries | route-specific `targetKeywords` | Entire `PlaceholderPage` for menu state | Shared placeholder is appropriate; menu state can become a header-owned island later. |
| Not found | `src/app/not-found.tsx`; `src/app/404/page.tsx` | inline branded not-found copy | `NotFoundPage` | root layout and not-found styling | framework not-found behavior | none required | Server-compatible | No normalization defect found. |
| Operational endpoint | `src/app/api/inquiries/route.ts` | validated request parsing and Resend helper | n/a | n/a | n/a | n/a | Server route | Protected integration; not a page-family refactor target. |

## Route And Page Responsibilities

### Route files

Current status: healthy.

The completed public route files select metadata, emit the relevant structured data, and render a named screen. The placeholder routes select metadata and pass bounded copy to the shared placeholder. There is no oversized route that needs extraction.

Decision: keep this pattern. Do not add route loaders, model builders, or indirection where the route has no params or server data.

### Page compositions

Current status: healthy composition with overly broad client ownership.

`HomePage`, `ServicesPage`, `AboutPage`, `LocationPage`, and `ContactPage` already function as domain PageViews. Their explicit JSX makes it easy to insert a custom React section without changing a schema or registry.

Decision: keep their names and section order. After approval, make the compositions server-compatible by relocating only the state that forces them to be client components.

### Runtime content

Current status: mostly healthy.

Route data files own publishable copy and list content. `src/screens/location/location-data.ts` is the canonical full county/city inventory. About and Contact contain smaller service-area summaries whose relationship to that canonical list should be proven before any adapter replaces them.

Decision: preserve route ownership and introduce derived adapters only for exact duplicated facts. Generated Markdown remains documentation, never runtime content.

### Metadata and schema

Current status: healthy.

`src/config/page-metadata.ts` provides canonical paths, titles, descriptions, target keywords, and indexability. `src/lib/metadata.ts` formats final metadata. Focused helpers in `src/lib/structured-data.ts` derive schema from approved runtime facts.

Decision: keep this system. Do not add a second `PageSeo` registry or place changing performance data in runtime constants.

## Top Issues

### 1. Broad client boundaries

Five completed screen compositions and the shared placeholder begin with `"use client"`. They own menu state; four also own sticky-CTA visibility; Home also owns FAQ state. `HeroSection` uses its own carousel state and effects but currently relies on the ancestor client boundary.

This hydrates more static composition than necessary and makes the server/client contract implicit.

Proposed fix after approval:

- make HeaderShell own menu state;
- make each MobileStickyCta own its threshold hook;
- make FaqSection own FAQ state;
- add an explicit client boundary to HeroSection;
- retain the form, reviews carousel, reveal/motion helpers, and other genuine interactions as client leaves;
- then remove broad client directives from page compositions.

This proposal follows the React performance guidance used in the audit: keep static page composition server-rendered and isolate interactivity to the narrowest practical leaves.

### 2. Repeated shell families are similar but not yet proven equivalent

Home, Services, About, and Contact each own HeaderShell, FooterShell, Icon, and MobileStickyCta variants. Location deliberately reuses the Services family.

Similarity alone is not enough to merge them. Their class contracts and CSS ownership differ. Architecture step 03 must compare exact props, semantics, and styles before any shared primitive is approved.

### 3. Service-area fact summaries have more than one owner

The full county/city list is correctly centralized under Location, but About and Contact contain independent summary arrays/copy. That creates potential count and wording drift.

Proposed fix after approval: derive only truly equivalent summaries from the canonical list. Keep route-specific marketing sentences local.

### 4. Keyword roles are implicit

`targetKeywords` correctly ties targets to routes, but array order implicitly carries primary-versus-supporting meaning. The runtime metadata helper does not need richer roles, yet architecture and audit tooling do.

Proposed fix after approval: use a typed adapter or audit-side strategy record before considering any consumer migration. Do not duplicate the phrases into a second runtime registry.

### 5. Repository instructions are stale

`AGENTS.repo-one-call-hvac.md` and generated `AGENTS.md` still describe Vite, `src/App.tsx`, `dist/`, browser-history routing, and Formspree. The application is Next.js/OpenNext and Resend-backed.

Required prerequisite: reconcile the source guide and regenerate `AGENTS.md` before any architecture implementation. This does not block steps 01-04 discovery.

## Naming Normalization Map

| Current name or field | Intended meaning | Target decision |
|---|---|---|
| `src/app/**/page.tsx` | framework route entrypoint | Keep. |
| `HomePage`, `ServicesPage`, etc. | explicit domain PageView | Keep; no cosmetic rename. |
| `*-data.ts[x]` | route runtime content | Keep. |
| `PageMetadataDefinition.title` | metadata title input | Keep. |
| `PageMetadataDefinition.description` | metadata description input | Keep. |
| `PageMetadataDefinition.path` | canonical application route | Keep. |
| `PageMetadataDefinition.targetKeywords` | route-keyed tracked targets | Keep as source; document first entry as primary until an adapter is approved. |
| route hero component title fields | visible H1 inputs | Keep domain-specific names; review individual adapters only when ambiguity is demonstrated. |
| no page-model builder | no real transformation layer needed | Keep absent. |
| no universal `SitePageLayout` | family shells are not yet one contract | Keep absent pending step 03. |

## Page Keyword Ownership And Coverage

The authoritative current route relationship is `PAGE_METADATA[*].targetKeywords`. The audit classified its first entry as the primary baseline and later entries as supporting targets, using `SEO_KEYWORDS_one-call-hvac.md` only for intent and approved-variant context.

Summary:

| State | Routes/targets |
|---|---:|
| Indexable routes with a strategy | 5 of 5 |
| Noindex routes with reviewed exceptions | 2 of 2 |
| Active indexable targets | 21 |
| Active targets with at least one rendered exact occurrence | 3 |
| Active targets with no rendered exact occurrence | 18 |
| Noindex deferred targets | 5 |
| Duplicate primary ownership across unrelated routes | 0 |

The exact coverage result is an audit signal, not an instruction to repeat phrases. There are no evidence-backed minimums or maximums, and no Search Console or Analytics evidence. Natural variants may support intent even when the exact phrase is absent.

Supporting artifacts:

- `PAGE_KEYWORD_STRATEGY_MATRIX.csv`
- `PAGE_KEYWORD_COVERAGE_MATRIX.csv`
- `PAGE_KEYWORD_PIVOT_REPORT.md`

## Search-Performance Pivot Backlog

No performance pivot is available. Search Console, Analytics, and rank-tracking evidence are absent by explicit user direction. The backlog is therefore conditional:

1. import dated query-to-landing-page observations when available;
2. compare observed owner with intended canonical route;
3. inspect visible coverage and conversion purpose;
4. classify an evidence-backed action as keep, strengthen, reposition, consolidate, split, test, or retire;
5. update route strategy only after approval;
6. regenerate both matrices.

## Proposed Target Skeleton

Keep the existing folders and responsibility boundaries. The target change is behavioral ownership, not a tree rewrite:

```text
src/app/<route>/page.tsx                 thin metadata/schema route
src/screens/<Route>Page.tsx              server-compatible explicit composition
src/screens/<route>/<Section>.tsx        static or focused interactive section
src/screens/<route>/<route>-data.ts[x]   route content
src/config/page-metadata.ts              metadata and keyword targets
src/config/site-navigation.ts            navigation
src/lib/metadata.ts                      final metadata builder
src/lib/structured-data.ts               focused schema builders
```

Do not create `GenericPageRenderer`, a universal section union, or a CMS-like PageDefinition system. A new custom section should remain a normal component imported directly into the relevant `*Page` composition.

## Phased Refactor Plan

The detailed, rollback-aware plan is in `PAGE_STRUCTURE_NORMALIZATION_PLAN.md`.

1. Reconcile stale repository instructions.
2. Add contract guards and optional coverage tooling.
3. Narrow page-level client boundaries.
4. Normalize duplicated facts through adapters only where equivalence is proven.
5. Consolidate shell primitives only after step 03 proves the contract.
6. Validate all representative page families, interactions, metadata, schema, forms, and reflow.

## Files Changed

Discovery outputs only:

- `01_PAGE_STRUCTURE_REPORT.md`
- `01_PAGE_STRUCTURE_IMPLEMENTATION_SUMMARY.md`
- `01_PAGE_STRUCTURE_HUMAN_TODO.md`
- `PAGE_STRUCTURE_NORMALIZATION_PLAN.md`
- `PAGE_KEYWORD_STRATEGY_MATRIX.csv`
- `PAGE_KEYWORD_COVERAGE_MATRIX.csv`
- `PAGE_KEYWORD_PIVOT_REPORT.md`
- `V2_SUITE_RUN_LEDGER.md`

No application, route, content, metadata, schema, style, test, package, asset, deployment, form, secret, or external-system file changed.

## Validation Results

Validation is recorded in the implementation summary and ledger. The coverage matrix was generated from the latest successful `.next/server/app/*.html` output. Because this run changes documentation only, the immediate run-26 application baseline is reused: 60 of 60 tests, typecheck, lint, and OpenNext build passed against the same application state.

## Remaining Human Decisions

No decision blocks architecture steps 02-04.

Before application implementation, the user must:

1. approve the consolidated implementation plan at canonical run 32;

## Canonical Run 33 Implementation Update

The user approved the bounded plan at canonical run 32. Run 33 implemented the selected structure work: main page compositions are server-compatible, menu/sticky/FAQ/hero state lives in focused client leaves, placeholder definitions have a route-owned data module, and the shared `Link` wrapper no longer creates an unnecessary client boundary. Existing page names, section order, CSS families, content, metadata/schema meaning, routes, and form behavior were preserved. Focused and full validation passed; conditional shell, footer, icon, service-area-summary, and keyword-tooling work was not performed because equivalence or a second runtime consumer was not proven.
2. approve repository-instruction reconciliation as the first source-side prerequisite;
3. decide placeholder lifecycle/indexability only if step 02 recommends a change;
4. provide dated search evidence later if keyword pivots are desired.
