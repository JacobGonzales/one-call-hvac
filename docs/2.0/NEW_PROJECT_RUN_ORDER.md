# V2 Suite: New-Project Run Order

This is the canonical beginning-to-end order for running the complete V2 suite
on a new project. The continuous run numbers in this document do not rename the
source handoffs. They provide one dependency-aware sequence across support,
main SEO, page architecture, and content rewriting.

## Rules For Every Executable Handoff

Before each executable handoff:

1. Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md`.
2. Read the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`.
3. Give the required pre-execution rundown before the first write.
4. Run discovery before implementation when the handoff requires approval.
5. Create or update the detailed report, implementation summary, and human TODO.
6. Update the affected ledger row and append the run history.

Do not treat the existence of generated files as proof that a step passed.

## Phase 1: Initialize The Suite And Project Context

| Run | Source | Requirement | Outcome |
|---:|---|---|---|
| 00 | `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` | Read first | Establishes the execution, preservation, reporting, and validation rules. |
| 01 | `docs/2.0/00_CODEX_HANDOFF_V2_SUITE_LEDGER.md` | Required | Initializes the global run ledger before any other executable handoff. |
| 02 | `docs/2.0/support/01_REPO_CONTEXT_DOC_GENERATOR_HANDOFF.md` | Required | Inventories the repository, routes, environment variables, integrations, and validation commands. |
| 03 | `docs/2.0/support/02_APP_SETUP_AND_DEPENDENCIES_DOC_HANDOFF.md` | Required | Records the real setup, dependency, framework, and local-development requirements. |
| 04 | `docs/2.0/support/03_PROJECT_SUBPAGE_BRIEF_DOC_HANDOFF.md` | Required | Defines project scope, audiences, page types, services, locations, and subpage intent. |
| 05 | `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` | Conditional | Imports Search Console evidence when the project already has search data. Record `not available yet` for a new site and rerun after data accumulates. |
| 06 | `docs/2.0/support/05_GOOGLE_ANALYTICS_INPUT_HANDOFF.md` | Conditional | Imports Analytics evidence when available. Record `not available yet` for a new site and rerun after launch. |

Support files `07-10` are references, alignment guidance, notes, and backlog
material. Read them when relevant; do not treat them as required executable run
steps.

## Phase 2: Run The Main SEO Suite

| Run | V2 step | Source | Requirement | Dependency or gate |
|---:|---:|---|---|---|
| 07 | 01 | `docs/2.0/01_CODEX_HANDOFF_SEO_V2.md` | Required | Project context is ready. Establish the core SEO system. |
| 08 | 02 | `docs/2.0/02_CODEX_HANDOFF_SEO_PAGE_METADATA.md` | Required | Run after V2 step 01. |
| 09 | 03 | `docs/2.0/03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md` | Required | Run after V2 step 01. |
| 10 | 04 | `docs/2.0/04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md` | Required | Run after V2 steps 01 and 03. |
| 11 | 05 | `docs/2.0/05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md` | Required | Run after V2 steps 01-04. |
| 12 | 06 | `docs/2.0/06_CODEX_HANDOFF_COMPETITOR_COMPARISON_PACKAGE.md` | Conditional | Run only when two competitor URLs and supported comparison tooling are available. |
| 13 | 07 | `docs/2.0/07_CODEX_HANDOFF_CONTENT_DEPTH_AND_ENTITY_COVERAGE.md` | Required | Run after V2 steps 01-05. Step 06 is optional. |
| 14 | 08 | `docs/2.0/08_CODEX_HANDOFF_INTERNAL_ARCHITECTURE_AND_INTENT_MAPPING.md` | Required | Run after V2 step 07. |
| 15 | 09 | `docs/2.0/09_CODEX_HANDOFF_SERP_READINESS_AND_SNIPPET_OPPORTUNITY.md` | Required | Run after V2 steps 02 and 07. |
| 16 | 10 | `docs/2.0/10_CODEX_HANDOFF_LOCAL_SEO_AND_LOCATION_SIGNALS.md` | Required | Run after V2 steps 01-09. |
| 17 | 11 | `docs/2.0/11_CODEX_HANDOFF_COMPETITIVE_PATTERN_INTELLIGENCE.md` | Required | Run after V2 step 05. Step 06 adds competitor-specific evidence but does not block tooling-only mode. |
| 18 | 12 | `docs/2.0/12_CODEX_HANDOFF_TECHNICAL_DEPTH_AND_EDGE_CASES.md` | Required | Run after V2 steps 01-11. |
| 19 | 13 | `docs/2.0/13_CODEX_HANDOFF_BACKLINK_INTELLIGENCE_AND_OFFPAGE_GAPS.md` | Required | External backlink exports deepen the result; competitor mode also depends on V2 step 06. |
| 20 | 14 | `docs/2.0/14_CODEX_HANDOFF_LINKABLE_ASSET_AND_CITATION_SUPPORT.md` | Required | Run after V2 steps 07 and 13. |
| 21 | 14.5 | `docs/2.0/14.5_CODEX_HANDOFF_AI_VISIBILITY_AND_LLM_CITATION_INTELLIGENCE.md` | Required | Run after V2 steps 03, 13, and 14. |
| 22 | 15 | `docs/2.0/15_CODEX_HANDOFF_INDEXING_AND_CRAWL_READINESS.md` | Required | Run after V2 steps 01-14.5. |
| 23 | 15.5 | `docs/2.0/15.5_CODEX_HANDOFF_SITEMAP_ARCHITECTURE_AND_EXTENSIONS.md` | Required | Run after V2 step 15. |
| 24 | 15.6 | `docs/2.0/15.6_CODEX_HANDOFF_AMP_DISCOVERY_AND_INDEXING.md` | Conditional | Inspect for AMP. Stop as `not applicable` when the project has no AMP implementation. |
| 25 | 16 | `docs/2.0/16_CODEX_HANDOFF_SEARCH_APPEARANCE_AND_RICH_RESULT_READINESS.md` | Required | Run after V2 steps 15 and 15.5. |
| 26 | 17 | `docs/2.0/17_CODEX_HANDOFF_STRUCTURED_DATA_AND_RICH_RESULT_IMPLEMENTATION.md` | Required | Run after V2 step 16. Complete targeted validation, lint, and production build as required by the handoff. |

## Phase 3: Normalize Page And Route Architecture

The architecture suite starts after the main SEO suite so it can reuse the
settled route, keyword, indexing, sitemap, and structured-data evidence. It does
not replace that evidence.

| Run | Architecture step | Source or action | Requirement | Outcome or gate |
|---:|---:|---|---|---|
| 27 | 00 | `docs/2.0/page-architecture/00_PAGE_ARCHITECTURE_PREFLIGHT_AND_EXECUTION_PROFILE_HANDOFF.md` | Required | Classifies the scope as greenfield, brownfield, or hybrid and establishes preservation rules. |
| 28 | 01 | `docs/2.0/page-architecture/01_REUSABLE_PAGE_STRUCTURE_AND_COMPONENT_SKELETON_HANDOFF.md` | Required discovery | Designs the ownership and reusable page-structure model. |
| 29 | 02 | `docs/2.0/page-architecture/02_ROUTE_CATALOG_AND_LIFECYCLE_HANDOFF.md` | Required discovery | Designs route identity, lifecycle, catalog, redirect, sitemap, and indexing ownership. |
| 30 | 03 | `docs/2.0/page-architecture/03_PAGE_FAMILY_AND_CROSS_CUTTING_CONTRACTS_HANDOFF.md` | Required discovery | Defines page-family and cross-cutting contracts without controlling visual design. |
| 31 | 04 | `docs/2.0/page-architecture/04_SEMANTIC_ACCESSIBILITY_AND_REFLOW_HANDOFF.md` | Required discovery | Defines semantic, keyboard, resize, zoom, and reflow requirements. |
| 32 | Approval gate | Review the reports, matrices, normalization plan, execution profile, and human TODOs from architecture steps 00-04. | Required human decision | Approve or revise the implementation scope before application changes begin. |
| 33 | 01-04 implementation | Execute only the approved architecture plans in bounded page-family batches. | Required after approval | Implements the approved ownership, route, family, accessibility, and reflow contracts while preserving unrelated behavior. |
| 34 | 05 | `docs/2.0/page-architecture/05_PAGE_AND_ROUTE_CONTRACT_VALIDATION_HANDOFF.md` | Required | Adds or normalizes automated validation after the contracts exist. Rerun it after later route or page-family changes. |
| 35 | 06 | `docs/2.0/page-architecture/06_PAGE_SCAFFOLDING_HANDOFF.md` | Optional | Adds development-time scaffolding only when repeatable page generation will materially help the project. |
| 36 | Final architecture validation | Run the smallest relevant targeted suites, then the required lint, tests, and production build for the implemented scope. | Required | Confirms the approved architecture works before content rewriting starts. |

## Phase 4: Rewrite Page Content

Do not start this phase until the complete applicable V2 and architecture work
is stable. Run steps 38-41 separately for each route and keep runtime content in
the application's established source files.

| Run | Rewrite step | Source or action | Requirement | Outcome or gate |
|---:|---:|---|---|---|
| 37 | 01 | `docs/2.0/content-rewriting/01_PAGE_CONTENT_DIRECTORY_GENERATION.md` | Required when rewriting content | Generates the page inventory, source packages, blank rewrite files, fingerprints, and rewrite status ledger. |
| 38 | 02 | `docs/2.0/content-rewriting/02_CODEX_REWRITE_PREPARATION.md` | Required per route | Creates the phrase requirements, preservation inventory, uniqueness brief, and focused handoff package. |
| 39 | 03 | `docs/2.0/content-rewriting/03_INHOUSE_AI_REWRITE_HANDOFF.md` | External per route | Sends only the approved narrow rewrite package to InHouse and stores the returned draft. |
| 40 | 04 | `docs/2.0/content-rewriting/04_CODEX_POST_REWRITE_REVIEW.md` | Required per route | Checks phrase limits, information preservation, accuracy, uniqueness, and source-fingerprint freshness. |
| 41 | 05 | `docs/2.0/content-rewriting/05_CODEX_APPLICATION_CONTENT_IMPLEMENTATION.md` | Required per approved route | Applies approved content to the existing application-owned source and validates the route. |

## Phase 5: Close The Project Run

| Run | Action | Requirement | Completion standard |
|---:|---|---|---|
| 42 | Refresh `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` using the suite-ledger handoff. | Required | Every applicable step has an evidence-backed status, all conditional skips are explained, human follow-ups remain visible, and no step is marked complete from file presence alone. |

After launch, rerun the Search Console and Analytics support handoffs when
enough real data exists. Rerun the affected downstream handoffs only when the
new evidence materially changes priorities, ownership, or implementation.
