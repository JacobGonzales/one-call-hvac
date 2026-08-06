# Codex Linkable Asset And Citation Support Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should improve the site's linkable and citation-ready assets so off-page work has stronger on-site support.

This layer should focus on:

1. company-fact and expertise support
2. glossary, FAQ, and comparison assets worth citing
3. resource, checklist, calculator, or reference-page opportunities
4. clearer source attribution and freshness support
5. better support for press, partner, local, and informational mentions

Why:
Use this handoff after:

- `07_CODEX_HANDOFF_CONTENT_DEPTH_AND_ENTITY_COVERAGE.md`
- `09_CODEX_HANDOFF_SERP_READINESS_AND_SNIPPET_OPPORTUNITY.md`
- `10_CODEX_HANDOFF_LOCAL_SEO_AND_LOCATION_SIGNALS.md` when local intent exists
- `13_CODEX_HANDOFF_BACKLINK_INTELLIGENCE_AND_OFFPAGE_GAPS.md` when off-page gaps have already been reviewed

This handoff is for on-site implementation support.

It is not for outreach execution, press pitching, or editing third-party profiles directly.

This layer should improve the parts of the site that make mentions, citations, and natural linking easier for humans to earn later.

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `14_CODEX_HANDOFF_LINKABLE_ASSET_AND_CITATION_SUPPORT.md`
  - `docs/v2-generated-docs/14_LINKABLE_ASSET_REPORT.md`
  - `docs/v2-generated-docs/14_LINKABLE_ASSET_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/14_LINKABLE_ASSET_HUMAN_TODO.md`
- Related systems:
  - `07_CODEX_HANDOFF_CONTENT_DEPTH_AND_ENTITY_COVERAGE.md`
  - `09_CODEX_HANDOFF_SERP_READINESS_AND_SNIPPET_OPPORTUNITY.md`
  - `10_CODEX_HANDOFF_LOCAL_SEO_AND_LOCATION_SIGNALS.md` when local intent exists
  - `13_CODEX_HANDOFF_BACKLINK_INTELLIGENCE_AND_OFFPAGE_GAPS.md` when off-page gaps have already been reviewed
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites
- on-site pages and content blocks that support mentions, citations, and natural links
- implementation of stronger company, proof, glossary, comparison, and resource assets
- documentation of which assets still require human subject-matter or data inputs

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
- Inputs Codex should inspect first: company-fact sections, expertise signals, glossary and FAQ assets, comparison pages, resource-style pages, source attribution patterns, and freshness cues across the site.
- Primary outputs expected from this handoff: stronger citation-ready assets, a linkable-asset report, an implementation summary, and a human TODO file for data or SME gaps.
- Success signals: the site contains more useful, cite-worthy material for future mentions and links without fabricating studies, proof, or outreach results.
- Split into phases when asset creation and supporting source/proof cleanup both need work and should be reviewed separately.


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
- company-fact and expertise support
- glossary, FAQ, and comparison assets worth citing
- resource, checklist, calculator, or reference-page opportunities
- clearer source attribution and freshness support
- better support for press, partner, local, and informational mentions

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
