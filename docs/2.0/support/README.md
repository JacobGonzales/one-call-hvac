# SEO Handoffs Support README 2.0

This folder contains support handoffs for the reusable `docs/2.0/` SEO suite.

Before executing a support handoff, read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the required pre-execution rundown, create or update the handoff's detailed report, implementation summary, and human TODO, and update its ledger row.

Use these before, during, or after the numbered v2 handoffs when the repo needs local context, Search Console exports, Analytics exports, or process notes.

Page and route structure is now large enough to have its own ordered suite under `docs/2.0/page-architecture/`. Content rewriting remains under `docs/2.0/content-rewriting/`.

## Generated Output Folders

Use these output folders for new generated docs:

- Main v2 handoff outputs: `docs/v2-generated-docs/`
- Support handoff outputs: `docs/v2-generated-docs/support/`
- Repo-context support docs: `docs/v2-generated-docs/support/repo-context/`
- Search Console support reports: `docs/v2-generated-docs/support/google-search-performance/`
- Google Analytics support reports: `docs/v2-generated-docs/support/google-analytics/`
- Page architecture reports: `docs/v2-generated-docs/page-architecture/`
- Post-v2 rewrite workspace: `docs/v2-generated-docs/content-rewriting/page-content-directory/`

Keep source handoffs in their dedicated `docs/2.0/` suite folders, including `support/`, `page-architecture/`, and `content-rewriting/`. Do not write generated reports back into those source folders.

## Recommended Support Order

1. Initialize or refresh `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` with `docs/2.0/00_CODEX_HANDOFF_V2_SUITE_LEDGER.md`
2. `01_REPO_CONTEXT_DOC_GENERATOR_HANDOFF.md`
3. `02_APP_SETUP_AND_DEPENDENCIES_DOC_HANDOFF.md`
4. `03_PROJECT_SUBPAGE_BRIEF_DOC_HANDOFF.md`
5. `04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when Search Console exports exist
6. `05_GOOGLE_ANALYTICS_INPUT_HANDOFF.md` when Analytics exports exist
7. `07-10` as reference, alignment, refactor, notes, or backlog context when relevant
8. Complete the entire numbered v2 suite, including its fractional handoffs
9. Use `docs/2.0/page-architecture/` when normalizing page and route structure
10. Use `docs/2.0/content-rewriting/` after the suite when page content will be rewritten

## Support Handoffs

### `01_REPO_CONTEXT_DOC_GENERATOR_HANDOFF.md`

Creates or refreshes repo-specific context docs such as environment variables, route inventory, integrations, and validation commands.

Default output area: `docs/v2-generated-docs/support/`

### `02_APP_SETUP_AND_DEPENDENCIES_DOC_HANDOFF.md`

Creates or refreshes the setup/dependency doc used by the generic v2 suite.

Default output: `docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md`

### `03_PROJECT_SUBPAGE_BRIEF_DOC_HANDOFF.md`

Creates or refreshes the project subpage brief used by content, metadata, internal-linking, and structured-data handoffs.

Default output: `docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md`

### `04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md`

Uses local Search Console exports under `docs/data/google-search-performance/` when available.

Default output area: `docs/v2-generated-docs/support/google-search-performance/`

### `05_GOOGLE_ANALYTICS_INPUT_HANDOFF.md`

Uses local Google Analytics exports under `docs/data/google-analytics/` when available.

Default output area: `docs/v2-generated-docs/support/google-analytics/`

### `07_README_SEARCH_DOC_ALIGNMENT.md`

Reference notes for distinguishing primary-source-grounded search guidance from heuristic tooling.

### `08_README_REFACTOR_PROMPT.md`

Reference prompt for search-safe refactoring.

### `09_SEO_GOOGLE_NOTES.md`

Google-specific notes that may inform owner expectations and timing.

### `10_SEO_HUMAN_INPUT_AND_TOOL_IMPROVEMENT_BACKLOG.md`

Backlog for human inputs, tooling improvements, and process follow-up.

## Numbered V2 Suite

After support context is ready, run `docs/2.0/01` through `docs/2.0/17` as needed and update the global ledger after every handoff.

Simple order:

- `01-05` build the core SEO/search system
- `06` handles competitor comparison work
- `07-12` extend on-site content, internal architecture, SERP readiness, local signals, competitive patterns, and technical edge cases
- `13-14.5` cover backlinks, linkable assets, citations, and AI visibility
- `15-17` cover crawl/index readiness, sitemap/AMP checks, search appearance, and structured data

Each handoff should leave its report, summary, and TODO files in `docs/v2-generated-docs/` unless that handoff explicitly belongs to support.

## Page Architecture

The reusable React and Next.js structure workflow lives under `docs/2.0/page-architecture/`. Its mandatory preflight classifies each scope as greenfield, brownfield, or hybrid and records repository-specific preservation and runtime-content rules before later handoffs run. The suite then covers thin routes, application-owned content, explicit PageViews, route identity and lifecycle, page-family contracts, cross-cutting metadata and schema concerns, accessibility and reflow, repository contract tests, and optional page scaffolding.

Use `docs/2.0/page-architecture/README.md` for its order. It deliberately normalizes architecture and validation while leaving frontend styling and page-specific composition open.

## Content Rewriting

The post-v2 page-directory generation, InHouse preparation, rewrite, Codex review, and application-code implementation workflow lives under `docs/2.0/content-rewriting/`. Generated Markdown is used for transfer and review only; live content remains in the application's existing runtime source.
