# Codex Competitive Pattern Intelligence Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should make competitor study more useful by turning visible page sections into patterns that can be grouped, compared, and reviewed later.

This layer should focus on:

1. trust-pattern visibility
2. offer and conversion-pattern visibility
3. process-pattern visibility
4. comparison and fit-pattern visibility
5. repeated section-pattern extraction

Why:
Use this handoff after:

- `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
- `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md`
- `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
- `06_CODEX_HANDOFF_COMPETITOR_COMPARISON_PACKAGE.md`

This handoff is for extracting learnable competitor patterns from visible pages.

It is not for backlink intelligence, ad spying, or off-site reputation data.

Use `13_CODEX_HANDOFF_BACKLINK_INTELLIGENCE_AND_OFFPAGE_GAPS.md` for backlink and off-page gap analysis.

This is still an implementation handoff.

You should be able to drop it into a repo and have Codex improve the repo's tooling, reporting, and grouped pattern extraction.

It does not replace `06`.

`06` packages comparisons.

`11` improves the repo's ability to detect and group visible competitor patterns.

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `11_CODEX_HANDOFF_COMPETITIVE_PATTERN_INTELLIGENCE.md`
  - `docs/v2-generated-docs/11_COMPETITIVE_PATTERN_REPORT.md`
  - `docs/v2-generated-docs/11_COMPETITIVE_PATTERN_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/11_COMPETITIVE_PATTERN_HUMAN_TODO.md`
- Related systems:
  - `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md`
  - `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md`
  - `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
  - `06_CODEX_HANDOFF_COMPETITOR_COMPARISON_PACKAGE.md`
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites
- visible competitor page patterns
- grouped competitor observations
- stronger reportability for human review

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
- Inputs Codex should look for first: existing competitor exports, grouped report formats, visible section-detection logic, and any current pattern taxonomies already used by the repo.
- Primary outputs expected from this handoff: stronger grouped pattern extraction, a report, an implementation summary, and a human TODO file.
- Success signals: competitor observations are grouped into reusable pattern buckets instead of staying as flat notes, and humans can compare repeated trust, process, offer, and fit patterns faster.
- Pause instead of forcing a pattern model when the repo only has raw comparison notes and no stable extraction surface; document the missing layer first.
- Split into phases when the repo needs taxonomy design first and extraction/report updates second.

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
- trust-pattern visibility
- offer and conversion-pattern visibility
- process-pattern visibility
- comparison and fit-pattern visibility
- repeated section-pattern extraction

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
