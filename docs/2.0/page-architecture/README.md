# Page Architecture Suite 2.0

This folder contains reusable Codex handoffs for normalizing React and Next.js pages and routes after a website has enough real page families to reveal its lasting structure.

The suite standardizes the parts of page creation that should be predictable:

- execution-mode classification and existing-work preservation
- route identity and lifecycle
- runtime content ownership
- page-family contracts and naming
- metadata, schema, breadcrumbs, images, actions, and analytics inputs
- semantic HTML, accessibility, zoom, and reflow requirements
- safe page scaffolding
- cross-route contract validation

It deliberately leaves visual composition open. PageViews may use custom JSX, custom sections, different section orders, unique layouts, imagery, motion, and styling.

## Core Rule

Normalize contracts and production checks, not creative output.

Do not use this suite to build a universal JSON section renderer, runtime page builder, or one component that conditionally renders every page family. Runtime application code remains the source of truth. Generated Markdown is for audits, plans, and handoffs only.

Before any step, read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Every step must give the user a pre-execution rundown, create its detailed report, implementation summary, and human TODO, and update its ledger row.

## Recommended Order

1. `00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md`
2. `01_REUSABLE_PAGE_STRUCTURE_AND_COMPONENT_SKELETON_HANDOFF.md`
3. `02_ROUTE_CATALOG_AND_LIFECYCLE_HANDOFF.md`
4. `03_PAGE_FAMILY_AND_CROSS_CUTTING_CONTRACTS_HANDOFF.md`
5. `04_SEMANTIC_ACCESSIBILITY_AND_REFLOW_HANDOFF.md`
6. `05_PAGE_AND_ROUTE_CONTRACT_VALIDATION_HANDOFF.md`
7. `06_PAGE_SCAFFOLDING_HANDOFF.md`

Always run `00` first. It classifies the requested scope as greenfield, brownfield, or hybrid and creates `docs/v2-generated-docs/page-architecture/PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`. Every later handoff must read that profile before auditing or editing.

Run `01-04` in discovery to audit and design the target architecture. Stop for user review of the reports and normalization plan before changing the execution profile to implementation. Run approved implementation in bounded page-family batches. Run `05` after the contracts exist, and rerun it whenever pages or routes are added, retired, redirected, or substantially refactored. Run `06` only after validation is in place and only when the repository would benefit from repeatable page-file generation.

The suite can be used after the main SEO v2 suite or during a final architecture-normalization phase. When the main SEO suite has already produced route, keyword, indexing, sitemap, or structured-data evidence, reuse that evidence instead of creating competing sources.

## Handoff Responsibilities

### `00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md`

Inspects the repository without changing application behavior, declares the execution mode and scope, records runtime content ownership, creates a component preservation matrix, and establishes allowed, prohibited, and approval-required changes for every later handoff.

### `01_REUSABLE_PAGE_STRUCTURE_AND_COMPONENT_SKELETON_HANDOFF.md`

Establishes the overall ownership model: thin routes, application-owned content, page-model builders, explicit domain PageViews, focused section components, shared layouts, page-level keyword strategy, and small client islands.

### `02_ROUTE_CATALOG_AND_LIFECYCLE_HANDOFF.md`

Creates or normalizes a typed route catalog for stable route facts and reconciles sitemap, canonical, indexing, site-search, image, keyword, redirect, and test-inventory decisions.

### `03_PAGE_FAMILY_AND_CROSS_CUTTING_CONTRACTS_HANDOFF.md`

Defines uniform page-family responsibilities and shared contracts for metadata, schemas, breadcrumbs, images, calls to action, analytics, internal links, freshness, and server data without controlling page design.

### `04_SEMANTIC_ACCESSIBILITY_AND_REFLOW_HANDOFF.md`

Defines semantic and accessibility requirements shared by every visual treatment, including 200 percent text resizing and narrow-width reflow equivalent to 400 percent desktop zoom.

### `05_PAGE_AND_ROUTE_CONTRACT_VALIDATION_HANDOFF.md`

Adds or normalizes automated tests that reconcile public routes and enforce required page contracts while leaving presentation assertions to focused component or visual checks.

### `06_PAGE_SCAFFOLDING_HANDOFF.md`

Creates an optional development-time scaffold that generates predictable route, PageView, content, strategy, and test starting points without becoming a runtime page builder.

## Generated Outputs

Write architecture-suite reports to:

```text
docs/v2-generated-docs/page-architecture/
```

Recommended outputs include:

- `PAGE_ARCHITECTURE_EXECUTION_PROFILE.md`
- `00_PREFLIGHT_REPORT.md`
- `00_PREFLIGHT_IMPLEMENTATION_SUMMARY.md`
- `00_PREFLIGHT_HUMAN_TODO.md`
- `01_PAGE_STRUCTURE_REPORT.md`
- `01_PAGE_STRUCTURE_IMPLEMENTATION_SUMMARY.md`
- `01_PAGE_STRUCTURE_HUMAN_TODO.md`
- `02_ROUTE_CATALOG_REPORT.md`
- `02_ROUTE_CATALOG_IMPLEMENTATION_SUMMARY.md`
- `02_ROUTE_CATALOG_HUMAN_TODO.md`
- `03_PAGE_FAMILY_CONTRACTS_REPORT.md`
- `03_PAGE_FAMILY_CONTRACTS_IMPLEMENTATION_SUMMARY.md`
- `03_PAGE_FAMILY_CONTRACTS_HUMAN_TODO.md`
- `04_ACCESSIBILITY_REFLOW_REPORT.md`
- `04_ACCESSIBILITY_REFLOW_IMPLEMENTATION_SUMMARY.md`
- `04_ACCESSIBILITY_REFLOW_HUMAN_TODO.md`
- `05_PAGE_ROUTE_CONTRACT_REPORT.md`
- `05_PAGE_ROUTE_CONTRACT_IMPLEMENTATION_SUMMARY.md`
- `05_PAGE_ROUTE_CONTRACT_HUMAN_TODO.md`
- `06_PAGE_SCAFFOLD_REPORT.md`
- `06_PAGE_SCAFFOLD_IMPLEMENTATION_SUMMARY.md`
- `06_PAGE_SCAFFOLD_HUMAN_TODO.md`
- `PAGE_STRUCTURE_NORMALIZATION_PLAN.md`
- `PAGE_KEYWORD_STRATEGY_MATRIX.csv`
- `PAGE_KEYWORD_COVERAGE_MATRIX.csv`
- `PAGE_KEYWORD_PIVOT_REPORT.md`
- `ROUTE_POLICY_MATRIX.csv`
- `ROUTE_CATALOG_IMPLEMENTATION_PLAN.md`
- `PAGE_FAMILY_CONTRACT_MATRIX.md`
- `NAMING_ADAPTER_PLAN.md`
- `ACCESSIBILITY_REFLOW_MATRIX.csv`
- `INTERACTIVE_COMPONENT_ACCESSIBILITY_REPORT.md`
- `PAGE_ROUTE_COVERAGE_MATRIX.csv`
- `PAGE_ROUTE_REVIEWED_EXCEPTIONS.md`
- `PAGE_SCAFFOLD_PLAN.md`
- `PAGE_SCAFFOLD_TEMPLATE_MATRIX.md`

The numbered report, implementation summary, and human TODO are mandatory for each step. The remaining files are supporting evidence and may use the exact names declared by their handoffs.

Do not write reports into this source handoff folder.

## Completion Standard

The suite is complete when:

- the requested scope has a current greenfield, brownfield, or hybrid execution profile
- existing components and repository conventions have explicit preservation decisions
- runtime content ownership and database or CMS authorization are unambiguous
- every step delivered its pre-execution rundown and three primary documents
- discovery recommendations were approved before implementation began
- every public route has one discoverable identity and lifecycle decision
- dynamic routes are derived from runtime collections rather than copied into several registries
- each page family has a clear route, content, model, PageView, metadata, schema, and validation path
- cross-cutting facts are derived or validated from one owner
- custom page sections remain easy to add with normal React composition
- semantic, keyboard, resize, and reflow behavior do not depend on a particular visual design
- new pages can be scaffolded safely when appropriate
- contract tests report drift before it reaches production
- the global v2 suite ledger records current state and output paths
