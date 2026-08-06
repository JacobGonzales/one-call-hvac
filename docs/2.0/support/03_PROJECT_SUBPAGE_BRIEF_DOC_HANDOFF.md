# Project Subpage Brief Doc Handoff 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before writing generated context files.
- Create or refresh the ledger-assigned detailed report, implementation summary, and human TODO in addition to the subpage brief.
- Update this handoff's ledger row when work begins and ends.

Objective:
Codex should generate or refresh a repo-specific project subpage brief before applying generic SEO, content-depth, internal-linking, search-appearance, or structured-data handoffs. The goal is to give portable handoffs accurate local facts about public routes, page types, section expectations, content roles, metadata, schema, and known page gaps.

Why:
Generic handoffs work better when Codex knows what each route is supposed to do. This support handoff creates a repo-specific page brief so later content or SEO work can preserve page intent instead of treating all marketing pages the same.

Relevant context:
- Stack: Detect the target repo's routing system, sitemap generation, metadata helpers, content data sources, and page templates before generating the doc.
- Key files:
  - `docs/2.0/support/03_PROJECT_SUBPAGE_BRIEF_DOC_HANDOFF.md`
  - route files and route constants
  - sitemap and robots files
  - metadata and structured-data helpers
  - page content constants, CMS adapters, or markdown/content folders
  - navigation, footer, and internal-link components
  - existing route inventory or repo context docs when present
- Related systems:
  - repo context generator
  - route inventory
  - SEO metadata handoff
  - content depth and entity coverage
  - internal architecture and intent mapping
  - structured-data and rich-result implementation

Scope:
- Only modify docs or lightweight generator scripts needed for repo-context output
- Do not change live page copy, route paths, metadata, schema, sitemap policy, redirects, or UI unless the user explicitly asks for implementation work after reviewing the generated brief
- Keep generic handoffs generic
- Put repo-specific page facts in repo-specific docs
- Prefer source-backed summaries over manual guesses

Primary output:
- `docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md`
- `docs/v2-generated-docs/support/03_PROJECT_SUBPAGE_BRIEF_REPORT.md`
- `docs/v2-generated-docs/support/03_PROJECT_SUBPAGE_BRIEF_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/support/03_PROJECT_SUBPAGE_BRIEF_HUMAN_TODO.md`

Optional outputs when useful:
- `docs/v2-generated-docs/support/ROUTE_INVENTORY.md`
- `docs/v2-generated-docs/support/PAGE_CONTENT_GAPS.md`
- `docs/v2-generated-docs/support/INTERNAL_LINKING_NOTES.md`

Constraints:
- Keep implementation simple and beginner-readable
- Prefer clear naming over clever abstractions
- Match the current stack and project conventions
- Avoid unnecessary dependencies
- Do not invent business facts, service claims, location coverage, reviews, pricing, or credentials
- Distinguish live public routes from redirects, noindex routes, private routes, API routes, and generated assets
- Distinguish page intent from current implementation gaps
- Do not treat sitemap inclusion alone as proof that a page is strategically complete

Required process:
1. Inspect the current implementation first.
2. Identify routing system, route constants, sitemap generation, robots policy, metadata helpers, schema helpers, navigation, footer links, and page content sources.
3. Build the subpage brief from:
- static route files
- dynamic route data maps or static params
- sitemap output logic
- robots and noindex branches
- metadata helpers
- structured-data helpers
- page templates and reusable sections
- navigation, footer, breadcrumbs, and related-link components
- existing route inventory docs
4. Before editing, identify:
- hidden assumptions
- likely edge cases
- route families that need owner confirmation
- risks of stale generated docs
- whether a generated script should be added later
5. Write or refresh `docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md`.
6. Include:
- route groups and page types
- primary user intent by page type
- section expectations by page type
- metadata and canonical expectations
- structured-data expectations
- internal-linking expectations
- conversion/action expectations
- sitemap, robots, noindex, and redirect notes
- known thin, duplicate, ambiguous, or stale pages
- owner TODOs for business facts that cannot be inferred from code
7. Run lightweight validation:
- `git diff --check`
- targeted docs lint or formatting command if the repo has one
- targeted unit tests only when app code or generator code changed
8. Report files changed, results, and follow-up risks.

Acceptance criteria:
- Generic handoffs can remain portable.
- The generated subpage brief gives enough local context for future Codex runs to preserve route intent and page-type expectations.
- The generated doc is source-backed and does not invent business facts.
- Live, redirect, noindex, private, API, and asset routes are clearly separated.
- This support handoff can be copied to another repo.

Return format:
- Current state summary
- Subpage brief generated
- Source files inspected
- Validation results
- Risks / follow-ups

## New Support File


Recommended workflow:
1. Run `01_REPO_CONTEXT_DOC_GENERATOR_HANDOFF.md`.
2. Run this support handoff to create the repo-specific project subpage brief.
3. Use `docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md` as local input for the generic v2 suite.

## Quick Prompt Version

```text
Generate or refresh docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md for this repo. Inspect route files, route constants, sitemap, robots, redirects, metadata helpers, structured-data helpers, page templates, content sources, navigation, footer links, breadcrumbs, and related-link components. Document route groups, page types, user intent, section expectations, metadata/canonical/schema expectations, internal-linking expectations, conversion/action expectations, sitemap/noindex/redirect notes, known content gaps, and owner TODOs. Keep generic docs in docs/2.0 portable, do not change live app behavior, and run git diff --check.
```
