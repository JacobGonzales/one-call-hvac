# Codex Advanced Search Signal Expansion Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should build on the existing search foundation so the repo becomes stronger in the areas that usually get skipped after the first four handoffs:

1. advanced crawl/index signal clarity
2. title-link and heading alignment sanity
3. alternate-language and regional discovery support
4. snippet eligibility and snippet-control safety
5. internal-link and anchor-text quality
6. richer report structure for future learning and comparison

This handoff should help a repo move from:

- "the pages are basically optimized"

to:

- "the pages are also clean, consistent, and easier to study as a system"

Why:
Use this handoff after:

- `docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md`
- `docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md` when available
- `01_CODEX_HANDOFF_SEO_V2.md`
- `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
- `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
- `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md`

This handoff is the next layer after the core SEO, metadata, AI-search, and Search Everywhere work is already in place.

It is not a replacement for those earlier handoffs.

It is meant to add advanced search-signal coverage, cleaner reporting, and more useful competitor-learning structure.

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
  - `docs/v2-generated-docs/ADVANCED_SEARCH_SIGNAL_REPORT.md`
  - `docs/v2-generated-docs/ADVANCED_SEARCH_SIGNAL_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/ADVANCED_SEARCH_SIGNAL_OWNER_TODO.md`
- Related systems:
  - `docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md`
  - `docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md` when available
  - `01_CODEX_HANDOFF_SEO_V2.md`
  - `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
  - `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
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
- Inputs Codex should inspect first: current crawl and index controls, title and heading patterns, internal-link patterns, alternate-language or regional signals, snippet-control directives, and the reporting structure already used by the repo.
- Primary outputs expected from this handoff: an advanced search-signal report, an implementation summary, and an owner TODO file that explain what was cleaned up, what remains uncertain, and what still needs manual validation.
- Success signals: the repo has cleaner crawl and index signals, safer snippet controls, stronger internal-link quality, and reporting that makes future comparison or learning easier.
- Pause instead of forcing regional, hreflang, or alternate-language logic when the repo has no real locale strategy or the required content relationships are missing.
- Split into phases when signal cleanup and reporting improvements are both substantial enough that they should be reviewed separately.

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
- advanced crawl/index signal clarity
- title-link and heading alignment sanity
- alternate-language and regional discovery support
- snippet eligibility and snippet-control safety
- internal-link and anchor-text quality
- richer report structure for future learning and comparison
- "the pages are basically optimized"
- "the pages are also clean, consistent, and easier to study as a system"

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
