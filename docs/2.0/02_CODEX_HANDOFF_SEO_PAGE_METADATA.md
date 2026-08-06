# Codex SEO Page Metadata Handoff 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should implement a page-level SEO system where:

1. Every important public page has its own metadata export or `generateMetadata()`.
2. Each page uses a keyword list filtered to that page's topic and intent.
3. Metadata titles follow one shared format for subpages.
4. Heading structure supports both readability and search relevance.
5. High-priority pages get custom keyword targeting, not just global defaults.

Why:
Use this handoff in any repo when the goal is to make every important page SEO-aware instead of relying on one generic site-wide metadata setup.

This handoff is designed for projects that need:

- page-specific metadata on every major route
- consistent subpage title formatting
- keyword filtering per page instead of one giant shared list
- stronger heading structure for each page type
- rank-weighted keyword prioritization
- a repeatable Codex workflow that can be reused in other repos

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when available
  - `docs/data/google-search-performance/` when available
  - `docs/v2-generated-docs/SEO_METADATA_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/SEO_METADATA_OWNER_TODO.md`
  - `docs/v2-generated-docs/PAGE_METADATA_MANUAL_INPUTS.md`
- Related systems:
  - page-specific metadata on every major route
  - consistent subpage title formatting
  - keyword filtering per page instead of one giant shared list
  - stronger heading structure for each page type
  - rank-weighted keyword prioritization
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
- Inputs Codex should inspect first: public routes, current page metadata exports, title-template logic, heading structure, keyword-targeting helpers, any metadata duplication risks already visible in the repo, and optional Search Console export data for high-impression or low-CTR page tuning when it exists.
- Primary outputs expected from this handoff: stronger page-level metadata coverage, a metadata implementation summary, and a metadata owner TODO file.
- Success signals: important public pages are handled as distinct SEO targets with clear metadata, cleaner heading structure, and less reliance on one generic shared setup.
- Split into phases when route-level metadata cleanup and page-structure/content updates both need work and would be easier to review separately.


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
- Every important public page has its own metadata export or `generateMetadata()`.
- Each page uses a keyword list filtered to that page's topic and intent.
- Metadata titles follow one shared format for subpages.
- Heading structure supports both readability and search relevance.
- High-priority pages get custom keyword targeting, not just global defaults.
- `docs/v2-generated-docs/SEO_METADATA_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/SEO_METADATA_OWNER_TODO.md`
- one implementation summary for the metadata pass
- one human or owner TODO file for unresolved follow-up

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
