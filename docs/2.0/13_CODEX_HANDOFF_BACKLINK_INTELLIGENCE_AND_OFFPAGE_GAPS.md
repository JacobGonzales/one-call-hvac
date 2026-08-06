# Codex Backlink Intelligence And Off-Page Gaps Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should make off-page work more actionable by turning backlink and profile data into prioritized, explainable next steps.

This layer should focus on:

1. backlink and referring-domain gap review
2. target-page and anchor-pattern review
3. profile, directory, and citation-gap review
4. reputation and mention-gap backlog creation
5. clear separation between what Codex can analyze and what humans must execute

Why:
Use this handoff after:

- `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
- `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md`
- `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
- `06_CODEX_HANDOFF_COMPETITOR_COMPARISON_PACKAGE.md` when competitor exports are available

Use it when the project has backlink, referring-domain, profile, directory, or reputation inputs to analyze.

This handoff is for intelligence and prioritization.

It is not for buying links, automating outreach spam, faking citations, or pretending Codex can create authority by itself.

This is not a direct repo-implementation layer in the same way `01` through `12` are.

Its job is to translate off-page inputs into a strong human backlog and connect those gaps to the right on-site targets.

Use `14.5_CODEX_HANDOFF_AI_VISIBILITY_AND_LLM_CITATION_INTELLIGENCE.md` when the project specifically needs AI-answer visibility review, competitor cited-source mapping, or page-level LLM citation-signal fixes rather than general backlink and profile-gap analysis.

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `13_CODEX_HANDOFF_BACKLINK_INTELLIGENCE_AND_OFFPAGE_GAPS.md`
  - `docs/v2-generated-docs/13_BACKLINK_INTELLIGENCE_REPORT.md`
  - `docs/v2-generated-docs/13_BACKLINK_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/13_BACKLINK_OPPORTUNITY_SCORECARD.md`
  - `docs/v2-generated-docs/13_BACKLINK_HUMAN_TODO.md`
- Related systems:
  - `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
  - `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md`
  - `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
  - `06_CODEX_HANDOFF_COMPETITOR_COMPARISON_PACKAGE.md` when competitor exports are available
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites
- analysis of backlink, referring-domain, anchor, and profile exports
- competitor gap interpretation
- prioritization of likely useful link targets and mention targets
- off-page backlog documentation tied to the site's actual page inventory

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
- Inputs Codex should confirm before starting: backlink or referring-domain exports, anchor data, profile or directory inputs, competitor data, and the site's current target pages.
- Primary outputs expected from this handoff: an off-page intelligence report, an implementation summary, an opportunity scorecard, and a human TODO/backlog file.
- Success signals: off-page gaps are translated into prioritized next steps tied to real on-site targets, and the report clearly separates analysis from execution work humans still need to do.
- Pause instead of fabricating authority tactics when exports are missing or too thin; document what additional data is needed rather than pretending the gap analysis is complete.
- Split into phases when the repo needs export normalization first and prioritization/reporting second.

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
- backlink and referring-domain gap review
- target-page and anchor-pattern review
- profile, directory, and citation-gap review
- reputation and mention-gap backlog creation
- clear separation between what Codex can analyze and what humans must execute

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
