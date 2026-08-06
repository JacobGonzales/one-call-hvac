# Codex Application Content Implementation 2.0

Before executing, read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md`, the content-rewriting README, and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown and confirm implementation authorization, then update the ledger and cumulative content-rewriting report, implementation summary, and human TODO when this step begins and ends.

## Objective

Replace a page's live application-owned content with its approved rewrite.

The Markdown files under `docs/` and `docs/v2-generated-docs/` are workflow, review, and audit artifacts. They are never runtime content sources.

## Codex Execution Contract

- Execute this handoff only after `04_CODEX_POST_REWRITE_REVIEW.md` returns `approved`.
- Inspect the actual route and trace its current runtime content source before editing.
- Update the existing application-owned TypeScript, TSX, JavaScript, JSON, CMS fixture, or equivalent source already used by that route.
- Preserve the repository's established route, component, content-module, and helper architecture.
- Do not create a Markdown-backed runtime content system.
- Do not stop after updating the generated rewrite files. The required outcome is changed live application content.
- Return one decision: `implemented`, `validation_failed`, or `human_input_required`.

## Required Inputs

For one route, inspect:

- `01_SOURCE_CONTENT.md`
- `02_REWRITTEN_CONTENT.md`
- `03_CODEX_REVIEW.md`
- the route's row in `REWRITE_STATUS.csv`
- the route file
- the repository's route inventory or framework route tree
- every component, constant, helper, fixture, or content module that supplies visible copy to that route
- relevant metadata, structured-data, internal-link, and test sources

Do not implement when:

- the route status is not `approved`
- the approved publish-ready content is missing
- the current source fingerprint no longer matches the approved review
- `Needs Codex Review` contains an unresolved item
- required owner confirmation is missing

## Non-Negotiable Source-Of-Truth Boundary

Never make any file under these locations a runtime content source:

```text
docs/
docs/2.0/
docs/v2-generated-docs/
```

Do not:

- import a generated Markdown file into `app/`, `components/`, or `lib/`
- read rewrite Markdown with `fs`, a route handler, a server component, a build script, or a content loader
- parse the rewrite files at runtime or build time
- add an MD/MDX dependency to serve generated rewrite files
- copy rewrite artifacts into `public/` and fetch them from the application
- create an API endpoint that returns content from the rewrite directory
- change application configuration so `docs/` becomes part of the runtime bundle
- treat `01_SOURCE_CONTENT.md`, `02_REWRITTEN_CONTENT.md`, or `03_CODEX_REVIEW.md` as the long-term editing location

The generated Markdown exists only to transfer, compare, approve, and audit rewritten content.

## Application-Owned Content Placement

Trace the route's existing content flow and update the source it already consumes.

The following destinations are illustrative, not exhaustive:

- a route-specific record in an application constants or data module
- an existing page-content registry
- an existing service, product, location, article, promotion, or company-content source
- an existing page-specific copy module
- props or constants in the component that already owns the section
- inline route copy when the route genuinely owns that small amount of content
- an existing application CMS or data fixture already used by the route

Never assume all content lives under `lib/constants/`, or that one route family represents the application. Homepage, company, promotion, article, conversion, policy, and other static routes may own content differently from service or location routes.

Do not create a new shared content abstraction unless the repository already uses one for that route family or the change has a clear second use.

For Next.js App Router projects:

- keep `page.tsx` focused on route composition, data selection, metadata orchestration, and rendering
- place large structured content in the existing application content module consumed by the route
- keep server-rendered content server-side unless interaction requires a client component
- do not add `"use client"` merely to make rewritten text available
- do not add runtime file reads for static page copy

## Generic Route-Family Discovery

Before implementing any route, inventory the repository's route families. Do not reuse a source map from another repository without verifying it.

Inspect at least:

- root and homepage routes
- general landing and index pages
- company, About, team, careers, testimonials, and FAQ routes
- service, product, category, and nested detail routes
- location, region, sublocation, and location-service combination routes
- deals, specials, promotions, financing, and offer-detail routes
- blog, article, guide, resource, case-study, and hub routes
- contact, booking, quote, emergency, search, and other conversion routes
- privacy, terms, accessibility, and other policy routes
- shared navigation, footer, calls to action, trust content, and site-wide business facts
- metadata, structured data, quick-answer, internal-link, and other derived visible content
- CMS collections, generated route parameters, fixtures, and API-backed content when present

For each repository, create this inventory before editing:

```md
## Route-Family Content Inventory

| Route family | Route patterns | Primary application content owner | Secondary or derived content owners | Shared consumers | Notes |
|---|---|---|---|---|---|
| Homepage | `/` | | | | |
| Company / About | | | | | |
| Services / Products | | | | | |
| Locations | | | | | |
| Deals / Promotions | | | | | |
| Blog / Resources | | | | | |
| Conversion / Utility | | | | | |
| Policies | | | | | |
```

Add, remove, or rename families to match the repository. The table is a discovery aid, not a fixed schema.

## Framework-Aware Discovery

Detect the routing and content architecture before resolving ownership:

- Next.js App Router: inspect `app/**/page.*`, layouts, route groups, dynamic parameters, imported components, and lookup helpers.
- Next.js Pages Router: inspect `pages/**`, data-fetching functions, imported components, and content registries.
- React Router or another client router: inspect route configuration, lazy route modules, loaders, components, and data imports.
- File-based frameworks: inspect their route conventions, content collections, loaders, and generated-parameter sources.
- CMS-backed applications: identify whether the repository stores CMS fixtures, schema/configuration, or only fetching logic. Update the established authoritative source rather than introducing a parallel local copy.

Do not assume a `page.tsx`, route handler, or route module contains all visible copy. Follow the complete render and data-selection chain.

## Content Ownership Patterns To Detect

A single rendered page may combine content from several owners:

- inline route constants and JSX
- page-specific components
- shared section components with local copy
- typed constants and content registries
- route-keyed maps or lookup helpers
- generated helper copy
- shared site facts
- FAQ, navigation, and internal-link registries
- metadata and structured-data helpers
- CMS records or API-backed fixtures

Update every owner affected by the approved rewrite, but do not alter shared content unless the rewrite is valid for every consumer.

## Step 1: Confirm Approval And Freshness

1. Confirm the route status is `approved`.
2. Read the approved publish-ready content from `03_CODEX_REVIEW.md`.
3. Recompute the current normalized visible-content SHA-256 using the suite's defined algorithm.
4. Compare it with the source and review fingerprints.
5. Stop with `human_input_required` when the live source changed after approval.

Do not silently rebase an approved rewrite onto newly changed application copy.

## Step 2: Resolve The Runtime Content Chain

Starting from the route:

1. Build or refresh the Route-Family Content Inventory.
2. Identify the route file or route configuration entry.
3. Follow imports, route parameters, loaders, lookup helpers, registries, CMS queries, and component props.
4. Inspect page-specific and shared components for inline visible copy.
5. Locate every application source that provides the visible sections being replaced.
6. Locate derived visible content such as FAQs, quick answers, metadata descriptions, structured data, and contextual links.
7. Record the mapping before editing.

Use this format in the implementation report:

```md
## Runtime Content Mapping

| Rewritten section | Route | Runtime source file | Export, key, or component | Implementation action |
|---|---|---|---|---|
```

If more than one route consumes the same content record, identify the downstream routes before changing it. Stop for review when the rewrite is intended for only one route but the existing source is shared.

Do not declare ownership resolved merely because one constants file was found. The mapping is complete only when every section in the approved rewrite has a known application destination or an explicit exclusion.

## Step 3: Prepare Application-Ready Copy

Use the approved publish-ready content from `03_CODEX_REVIEW.md`.

Confirm:

- all recognized `+required phrase+` markers are already removed
- legitimate non-marker plus signs remain unchanged
- no workflow headings, tables, notes, recommendations, or review commentary are included in public copy
- the rewrite maps completely to existing application fields and sections
- approved headings, lists, FAQs, calls to action, and link labels retain their intended structure

Do not paste the complete Markdown review artifact into a TSX component.

## Step 4: Update Application Code

Update the existing application-owned source:

- map rewritten sections into the current typed content shape
- preserve strict TypeScript types
- preserve route keys, slugs, public exports, and API shapes
- escape strings safely
- retain semantic heading order and accessible labels
- preserve internal link destinations unless the approved rewrite changes them
- keep metadata and structured data synchronized when approved visible claims changed
- keep shared content shared only when the rewrite is valid for every consumer

Prefer focused edits to existing records and components. Do not rewrite unrelated routes or restructure content architecture merely because the rewrite is substantial.

## Step 5: Prove Markdown Is Not Runtime State

Inspect the implementation and confirm:

- no application import resolves into `docs/`
- no runtime or build-time file read points at rewrite artifacts
- no public fetch targets a generated Markdown file
- the route renders from application code after the `docs/v2-generated-docs/content-rewriting/` directory is unavailable

Any dependency on the rewrite directory is a blocker.

## Step 6: Validate The Application

Run validation proportional to the changed route:

- `git diff --check`
- relevant content, metadata, route, and SEO tests
- lint
- relevant unit or component tests
- build when content shape, route metadata, structured data, or shared registries changed
- marker-leak checks using the route's required-phrase table
- static inspection confirming no runtime `docs/` dependency

Use browser automation only when explicitly requested or when code inspection and focused tests cannot validate the rendered behavior.

## Step 7: Create The Implementation Report

Create:

```text
docs/v2-generated-docs/content-rewriting/page-content-directory/[route-group]/[route-slug]/04_APPLICATION_IMPLEMENTATION.md
```

Use this format:

```md
# Application Content Implementation

Route:
Implementation date:
Decision: Implemented / Validation failed / Human input required
Approved source content SHA-256:
Current source content SHA-256:

## Runtime Content Mapping

| Rewritten section | Route | Runtime source file | Export, key, or component | Implementation action |
|---|---|---|---|---|

## Route-Family Content Inventory

| Route family | Route patterns | Primary application content owner | Secondary or derived content owners | Shared consumers | Notes |
|---|---|---|---|---|---|

## Application Files Changed

- File:
  - Content ownership:
  - Change:

## Runtime Boundary Review

- Imports from `docs/`: None
- Runtime/build-time reads from `docs/`: None
- Public fetches of rewrite artifacts: None
- New Markdown or MDX runtime dependency: None

## Validation

- Check:
  - Result:

## Remaining Items

- Item:
```

## Step 8: Update Workflow State

- After application code is changed, set the route status to `implemented` and record `implemented_at`.
- After every required validation check passes, set the route status to `validated` and record `validated_at`.
- When code changed but validation failed, keep the implementation for review, set the status to `correction_required`, and record the failure.
- When application ownership is ambiguous or shared-content impact requires a decision, set `human_input_required`.

## Acceptance Criteria

- the approved rewrite is present in the live application source
- the route renders content from application-owned code or its established content system
- no generated Markdown file is a runtime or build-time dependency
- existing route and content architecture is preserved
- the repository-specific Route-Family Content Inventory covers every public content family
- homepage, company, promotion, article, static, and conversion routes were not omitted merely because they use different ownership patterns
- every rewritten section maps to an application-owned destination or an explicit exclusion
- shared-content effects are understood and approved
- metadata, structured data, links, and visible claims remain synchronized
- no recognized plus marker reaches application content
- legitimate non-marker plus signs are preserved
- required validation passes
- `04_APPLICATION_IMPLEMENTATION.md` records the actual runtime source files changed
- the route reaches `validated`
