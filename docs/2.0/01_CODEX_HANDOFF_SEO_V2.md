# Codex SEO Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should:

1. Implement technical SEO basics across the site.
2. Add strong metadata, structured data, sitemap, and robots coverage.
3. Improve on-page copy using business-relevant search language.
4. Build or improve FAQ sections with natural search-intent phrasing.
5. Create a keyword tracking document in `docs/v2-generated-docs/`.
6. Leave a clear TODO list for research, content, and platform verification items that cannot be completed automatically.

Why:
Use this handoff when moving an SEO system from one project into a new or existing website. The goal is to let Codex take a project with little or no SEO setup and implement as much as possible immediately, then leave smart TODOs where manual research, approvals, or business-specific details are still needed.

This handoff combines:

- a repeatable technical SEO implementation pattern
- a reusable keyword filtering and intent-mapping method
- a content and FAQ optimization workflow for conversion + rankings
- a process for handing SEO work to Codex across different industries

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `01_CODEX_HANDOFF_SEO_V2.md`
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when available
  - `docs/data/google-search-performance/` when available
  - `docs/`
  - `docs/v2-generated-docs/SEO_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/SEO_KEYWORDS_[BUSINESS_OR_PROJECT].md`
  - `docs/v2-generated-docs/SEO_OWNER_TODO.md`
  - `docs/v2-generated-docs/SEO_MANUAL_INPUTS.md`
- Related systems:
  - a repeatable technical SEO implementation pattern
  - a reusable keyword filtering and intent-mapping method
  - a content and FAQ optimization workflow for conversion + rankings
  - a process for handing SEO work to Codex across different industries
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites

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
- Inputs Codex should inspect first: site-wide metadata, page-level metadata, sitemap and robots generation, structured-data coverage, homepage and service-page content, FAQ patterns, any existing keyword docs, and optional `docs/data/google-search-performance/` exports when they exist for page and query prioritization.
- Primary outputs expected from this handoff: a baseline SEO implementation, an implementation summary, a keyword tracking document, and an owner TODO file for unresolved follow-up.
- Success signals: the repo has a usable SEO foundation across technical, metadata, schema, content, and documentation layers without stuffing, generic filler, or broken crawl/index behavior.
- Split into phases when technical SEO setup and content-strengthening work are both large enough that they should be reviewed separately.


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
- Implement technical SEO basics across the site.
- Add strong metadata, structured data, sitemap, and robots coverage.
- Improve on-page copy using business-relevant search language.
- Build or improve FAQ sections with natural search-intent phrasing.
- Create a keyword tracking document in `docs/v2-generated-docs/`.
- Leave a clear TODO list for research, content, and platform verification items that cannot be completed automatically.
- `docs/v2-generated-docs/SEO_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/SEO_KEYWORDS_[BUSINESS_OR_PROJECT].md`
- `docs/v2-generated-docs/SEO_OWNER_TODO.md`
- one implementation summary
- one keyword tracking document
- one human or owner TODO file

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
