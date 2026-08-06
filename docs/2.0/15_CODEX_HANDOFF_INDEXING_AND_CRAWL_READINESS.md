# Codex Indexing And Crawl Readiness Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should improve the repo so that intended pages are easier for Google to:

1. discover
2. crawl
3. render
4. index
5. serve in search when relevant

Codex should also leave a clear human follow-up path for anything that requires Search Console access, infrastructure checks, or CMS/platform coordination.

Why:
Use this handoff after:

- `01_CODEX_HANDOFF_SEO_V2.md`
- `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
- `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
- `12_CODEX_HANDOFF_TECHNICAL_DEPTH_AND_EDGE_CASES.md`

Use it when the repo already has baseline SEO work, but you want a dedicated pass that makes important pages easier for Google to discover, crawl, index, and serve in search.

This handoff is specifically about indexability readiness.

This is a drop-in implementation handoff for a working repo.

It should help prevent the common failure mode where a site has titles, descriptions, schema, and good copy, but Google still cannot reliably crawl, understand, or index the intended pages.

Expected behavior:

- you can place this handoff into a repo
- give Codex this handoff plus the target codebase
- Codex should implement the fixes it can make directly in that repo
- Codex should then generate the report, implementation summary, and human TODO outputs in `docs/v2-generated-docs/`

This is not just an audit brief.

It is an implementation handoff with required outputs.

## Important Reality Check

Codex should not promise that every URL will be indexed or that every indexed page will rank.

Google does not guarantee:

- crawling
- indexing
- serving in results
- a ranking position

The practical goal is narrower and more useful:

- every important canonical page should be discoverable
- every intended indexable page should be crawlable
- every intended indexable page should send consistent indexability signals
- every intended indexable page should be technically capable of being indexed and served

Good rule:

- important canonical pages should be made indexable
- duplicate, filtered, redirected, gated, or intentionally suppressed URLs should usually not be treated as index targets

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `15_CODEX_HANDOFF_INDEXING_AND_CRAWL_READINESS.md`
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when available
  - `docs/data/google-search-performance/` when available
  - `docs/`
  - `docs/v2-generated-docs/15_INDEXING_AND_CRAWL_READINESS_REPORT.md`
  - `docs/v2-generated-docs/15_INDEXING_AND_CRAWL_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/15_INDEXING_AND_CRAWL_HUMAN_TODO.md`
- Related systems:
  - `01_CODEX_HANDOFF_SEO_V2.md`
  - `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
  - `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
  - `12_CODEX_HANDOFF_TECHNICAL_DEPTH_AND_EDGE_CASES.md`
  - you can place this handoff into a repo
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites
- crawl-discovery support
- indexability consistency
- canonical clarity
- robots and noindex sanity
- content suppression and removal controls
- sitemap quality

Constraints:
- Keep implementation simple and beginner-readable
- Prefer clear naming over clever abstractions
- Use OOP only where it genuinely improves clarity
- Match the current stack and project conventions
- Minimize duplication
- Add comments where a new developer would need them
- Avoid unnecessary dependencies
- Preserve existing behavior unless required for the task
- Do not narrow the original handoff's intended outcomes; clarify them

Execution notes:
- Inputs Codex should inspect first: important canonical routes, internal-link discovery paths, sitemap and robots behavior, noindex and canonical rules, rendered-content visibility, redirect patterns, any existing crawl/index reports, and optional Search Console performance exports when they exist to add real page-level indexing context.
- Primary outputs expected from this handoff: an indexing and crawl-readiness report, an implementation summary, and a human TODO file that clearly separate repo-level fixes from Search Console, hosting, or CMS follow-up.
- Success signals: intended canonical pages are easier to discover, crawl, render, and index consistently, while non-index targets are handled intentionally instead of being treated as accidental candidates.
- Pause instead of asserting indexability when the repo lacks enough evidence about rendering, blocked resources, or platform behavior to prove Google can fetch the final intended page state.
- Split into phases when discovery-path cleanup, indexability-signal cleanup, and suppression/removal logic are all large enough to need separate review passes.

Stop conditions:
- Stop and document the gap if required inputs, exports, or verified business facts are missing and the handoff would otherwise force guesses.
- Stop and ask for confirmation before making changes that would alter public claims, SEO contracts, schema intent, indexability intent, or core user-flow behavior beyond the handoff's safe scope.
- Stop after leaving the required report, summary, and TODO outputs when the remaining work depends on external tools, approvals, or data not available in the repo.


Required process:
1. Inspect the current implementation first
2. Before editing, identify:
- hidden assumptions
- likely edge cases
- risks of regression
- whether the task should be split into phases
3. Give a concise plan
4. Implement in small, logical changes
5. Run validation commands
6. Report files changed, results, and any follow-up risks

Validation commands:
- npm test
- npm run lint
- npm run build

Acceptance criteria:
- discover
- crawl
- render
- index
- serve in search when relevant
- `docs/v2-generated-docs/15_INDEXING_AND_CRAWL_READINESS_REPORT.md`
- `docs/v2-generated-docs/15_INDEXING_AND_CRAWL_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/15_INDEXING_AND_CRAWL_HUMAN_TODO.md`
- still generate the files
- note what was checked
- note what already looks healthy

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
