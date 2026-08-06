# Codex Local SEO And Location Signals Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should improve and report on visible local-business and location signals.

This layer should focus on:

1. service-area language
2. local-business support
3. visible contact signals
4. geo alignment in headings and metadata
5. location-page and local-trust patterns

Why:
Use this handoff after:

- `01_CODEX_HANDOFF_SEO_V2.md`
- `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
- `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`

Use it only when the business has real local or regional intent.

This is an implementation handoff.

You should be able to drop it into a repo after the earlier SEO handoffs and have Codex improve the repo itself.

This handoff does not replace off-site citation cleanup. Use `13_CODEX_HANDOFF_BACKLINK_INTELLIGENCE_AND_OFFPAGE_GAPS.md` if the project also needs profile, directory, or citation-gap analysis.

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `10_CODEX_HANDOFF_LOCAL_SEO_AND_LOCATION_SIGNALS.md`
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when available
  - `docs/v2-generated-docs/10_LOCAL_SEO_REPORT.md`
  - `docs/v2-generated-docs/10_LOCAL_SEO_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/10_LOCAL_SEO_HUMAN_TODO.md`
  - `docs/data/google-search-performance/` when available for Search Console export context
- Related systems:
  - `01_CODEX_HANDOFF_SEO_V2.md`
  - `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
  - `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites
- visible local signals on the site
- local-business schema support
- service-area and geo-language consistency
- location-page readiness

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
- Inputs Codex should inspect first: location pages, service-area wording, contact details, geo modifiers in metadata and headings, local-business schema, visible trust signals tied to real geography, and either `docs/data/google-search-performance/` exports or the shared `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` workflow when they exist.
- Primary outputs expected from this handoff: clearer local signals, a local SEO report, an implementation summary, and a human TODO file for unresolved local-business inputs.
- Success signals: the site reflects real local or regional intent more clearly without pretending to serve locations or markets the business does not actually cover.
- Split into phases when location-page cleanup and broader geo-language/content updates should be reviewed separately.


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
3. If `docs/data/google-search-performance/` exists, use its pages, queries, device, and date-range exports as real local-performance context before deciding whether current geo language should be kept, tightened, or expanded.
4. Give a concise plan
5. Implement in small, logical changes
6. Run validation commands
7. Report files changed, results, and any follow-up risks

Validation commands:
- npm test
- npm run lint
- npm run build

Acceptance criteria:
- service-area language
- local-business support
- visible contact signals
- geo alignment in headings and metadata
- location-page and local-trust patterns

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
