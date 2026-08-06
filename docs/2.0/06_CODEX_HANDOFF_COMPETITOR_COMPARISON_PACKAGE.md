# Codex Competitor Comparison Package Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should take two public competitor URLs and produce a reusable comparison package that is easy for a human to study later without rerunning the whole analysis from scratch.

That package should combine:

1. deep audit exports
2. keyword exports
3. per-site summary READMEs
4. a main comparison scorecard
5. a keyword comparison scorecard
6. an implementation summary for the comparison run
7. a human follow-up TODO file

The package should help a human answer:

- which site has the stronger homepage
- which site has the stronger internal-page system
- which site is more useful for metadata study
- which site is more useful for AI-search and answer-structure study
- which site is more useful for keyword and topical-cluster study
- which site appears to have the larger public traffic footprint based on proxy signals
- which patterns are worth learning from versus avoiding

Why:
Use this handoff after:

- `docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md`
- `docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md` when available
- `01_CODEX_HANDOFF_SEO_V2.md`
- `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
- `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
- `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md`
- `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`

This handoff is for competitor study packaging after the SEO/search audit system is already in place.

It is not the handoff that builds the audit engine itself.

It is the handoff that uses the finished engine to produce repeatable two-site competitor packages.

Simple rule:

- `01-05` build the core system
- `07-12` add deeper implementation layers to that system
- `06` uses whatever layers the repo's audit tool already supports

That means `06` is orchestration, not implementation.

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `06_CODEX_HANDOFF_COMPETITOR_COMPARISON_PACKAGE.md`
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
- Inputs Codex should confirm before starting: the two competitor URLs, which audit/export tooling already exists in the repo, where comparison artifacts should live, and whether prior exports can be reused.
- Primary outputs expected from this handoff: the full comparison package, per-site summaries, scorecards, an implementation summary, and a human follow-up TODO file.
- Success signals: a human can review the package later without rerunning the full analysis and can quickly identify which patterns are stronger, weaker, useful to copy, or worth avoiding.
- Pause instead of inventing new audit systems if the repo does not already support the exports this handoff depends on; document the gap and stop at orchestration guidance.
- Split into phases when export generation and package assembly are both large so raw data creation and final synthesis can be checked separately.

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
- deep audit exports
- keyword exports
- per-site summary READMEs
- a main comparison scorecard
- a keyword comparison scorecard
- an implementation summary for the comparison run
- a human follow-up TODO file
- which site has the stronger homepage

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
