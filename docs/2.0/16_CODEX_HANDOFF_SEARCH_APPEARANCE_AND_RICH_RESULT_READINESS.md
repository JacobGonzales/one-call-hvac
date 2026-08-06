# Codex Search Appearance And Rich Result Readiness Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should improve the repo so important pages are easier for Google to:

1. generate cleaner titles and snippets from
2. use as candidates for supported rich results
3. display with stronger preview assets such as images, dates, and favicons
4. surface in appearance-driven environments such as Discover, Google Images, and AI features when eligible
5. control intentionally when preview suppression is needed
6. establish clearer official-site and site-identity signals where the repo supports them

Why:
Use this handoff after:

- `01_CODEX_HANDOFF_SEO_V2.md`
- `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
- `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
- `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
- `09_CODEX_HANDOFF_SERP_READINESS_AND_SNIPPET_OPPORTUNITY.md`
- `15_CODEX_HANDOFF_INDEXING_AND_CRAWL_READINESS.md`

Use it when the repo already has solid crawlability and baseline metadata, but you want a dedicated pass focused on how the site becomes eligible for richer, cleaner, and more controlled presentation in Google Search.

This handoff is about search appearance readiness, not generic ranking strategy.

It should help prevent the common failure mode where a site is indexable and reasonably optimized, but still misses search-appearance opportunities or sends weak, conflicting, or unsupported appearance signals.

## Important Reality Check

Codex should not promise that a favicon, byline date, Discover card, featured snippet, AI Overview supporting link, or rich result will appear.

Google does not guarantee:

- a title link will be used exactly as written
- a meta description will become the shown snippet
- a favicon will appear
- a byline date will show
- a page will be selected for featured snippets
- a page will appear in Discover
- a supported structured-data type will trigger a rich result

The practical goal is narrower:

- the page should be technically eligible
- the appearance signals should be accurate
- the preview controls should be intentional
- the structured data should match visible content
- the page should be a strong candidate for richer presentation without hacks or unsupported markup

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `16_CODEX_HANDOFF_SEARCH_APPEARANCE_AND_RICH_RESULT_READINESS.md`
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when available
  - `docs/data/google-search-performance/` when available
  - `docs/v2-generated-docs/16_SEARCH_APPEARANCE_REPORT.md`
  - `docs/v2-generated-docs/16_SEARCH_APPEARANCE_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/16_SEARCH_APPEARANCE_HUMAN_TODO.md`
- Related systems:
  - `01_CODEX_HANDOFF_SEO_V2.md`
  - `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
  - `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
  - `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
  - `09_CODEX_HANDOFF_SERP_READINESS_AND_SNIPPET_OPPORTUNITY.md`
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites
- title-link and snippet quality as appearance inputs
- official-site and site-identity appearance inputs
- favicon readiness
- byline date readiness
- preferred preview image signals
- supported structured-data feature readiness

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
- Inputs Codex should inspect first: title and description generation, favicon and preview assets, byline/date handling, structured-data coverage, image/video readiness, any preview-control directives, and optional Search Console performance exports when they exist for title/snippet rewrite risk and CTR interpretation.
- Primary outputs expected from this handoff: a search-appearance report, an implementation summary, and a human TODO file that call out both implemented improvements and non-guaranteed appearance opportunities.
- Success signals: the repo sends cleaner and more intentional title, snippet, preview, identity, and rich-result readiness signals without relying on unsupported markup or promises about Google behavior.
- Pause instead of asserting eligibility when visible content, asset support, or structured-data support is too weak to justify the appearance feature being targeted.
- Split into phases when asset generation, metadata cleanup, and structured-data readiness are all large enough to need separate review steps.

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
- generate cleaner titles and snippets from
- use as candidates for supported rich results
- display with stronger preview assets such as images, dates, and favicons
- surface in appearance-driven environments such as Discover, Google Images, and AI features when eligible
- control intentionally when preview suppression is needed
- establish clearer official-site and site-identity signals where the repo supports them
- `docs/v2-generated-docs/16_SEARCH_APPEARANCE_REPORT.md`
- `docs/v2-generated-docs/16_SEARCH_APPEARANCE_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/16_SEARCH_APPEARANCE_HUMAN_TODO.md`

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
