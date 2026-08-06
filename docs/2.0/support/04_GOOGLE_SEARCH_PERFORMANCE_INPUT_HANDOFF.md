# Google Search Performance Input Handoff 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before analyzing exports or writing generated files.
- Create or refresh the declared report, implementation summary, and human TODO.
- Update this handoff's ledger row when work begins and ends.

Objective:
Codex should optionally use Google Search Console performance exports stored under `docs/data/google-search-performance/` to sharpen decisions across the numbered SEO handoffs without making those handoffs dependent on the exports.

Why:
Search Console export data can improve prioritization, title and snippet decisions, local-query interpretation, and search-entry page cleanup, but it should stay an optional support layer instead of becoming a required prerequisite for `01-17`.

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this support handoff, then adapt the guidance to the current conventions.
- Key files:
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md`
  - `docs/data/google-search-performance/` when available
  - `docs/v2-generated-docs/support/google-search-performance/GOOGLE_SEARCH_PERFORMANCE_REPORT.md`
  - `docs/v2-generated-docs/support/google-search-performance/GOOGLE_SEARCH_PERFORMANCE_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/support/google-search-performance/GOOGLE_SEARCH_PERFORMANCE_HUMAN_TODO.md`
- Related systems:
  - `01_CODEX_HANDOFF_SEO_V2.md` for page and keyword prioritization
  - `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md` for titles, descriptions, and page targeting
  - `03_CODEX_HANDOFF_AI_SEARCH_OPTIMIZATION.md` for real query-shape inputs
  - `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md` for search-entry page prioritization
  - `07_CODEX_HANDOFF_CONTENT_DEPTH_AND_ENTITY_COVERAGE.md` for high-impression thin-page triage
  - `09_CODEX_HANDOFF_SERP_READINESS_AND_SNIPPET_OPPORTUNITY.md` for CTR and snippet opportunities
  - `10_CODEX_HANDOFF_LOCAL_SEO_AND_LOCATION_SIGNALS.md` for local page and query validation
  - `15_CODEX_HANDOFF_INDEXING_AND_CRAWL_READINESS.md` for Search Console indexing context
  - `16_CODEX_HANDOFF_SEARCH_APPEARANCE_AND_RICH_RESULT_READINESS.md` for appearance and CTR interpretation
  - `17_CODEX_HANDOFF_STRUCTURED_DATA_AND_RICH_RESULT_IMPLEMENTATION.md` for Search Console feedback context
- Current issue:
  - Search Console export data is useful across multiple handoffs, but until now the stack did not have one shared optional support handoff that explained how to use it consistently.

Data Analytics plugin routing:
- When the Data Analytics plugin is available in the current Codex session, use it for the quantitative analysis and report-writing parts of this handoff.
- Treat the local Search Console export files as the provided source of truth for the plugin run unless the user explicitly provides a live Search Console connector or another reviewed source.
- Follow the plugin's setup or preflight requirements before drawing conclusions, but do not let missing plugin onboarding block this handoff when local exports are present.
- Keep the required repo outputs in this handoff even when the plugin is used: `docs/v2-generated-docs/support/google-search-performance/GOOGLE_SEARCH_PERFORMANCE_REPORT.md`, `docs/v2-generated-docs/support/google-search-performance/GOOGLE_SEARCH_PERFORMANCE_IMPLEMENTATION_SUMMARY.md`, and `docs/v2-generated-docs/support/google-search-performance/GOOGLE_SEARCH_PERFORMANCE_HUMAN_TODO.md`.
- If the Data Analytics plugin is unavailable, continue with direct local-file inspection and clearly state that the run used exported CSVs without plugin-backed context.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Treat this handoff as optional support, not a required numbered phase
- Allow the numbered `01-17` handoffs to run cleanly whether `docs/data/google-search-performance/` exists or not
- Allow this support handoff to run later and suggest updates back into the numbered stack when export data becomes available

Constraints:
- Keep implementation simple and beginner-readable
- Prefer clear naming over clever abstractions
- Use OOP only where it genuinely improves clarity
- Match the current stack and project conventions
- Minimize duplication
- Add comments where a new developer would need them
- Avoid unnecessary dependencies
- Preserve existing behavior unless required for the task
- Do not treat Search Console exports as perfect truth; use them as directional evidence
- Do not force changes when the export window is too small, noisy, or ambiguous

Execution notes:
- Inputs Codex should inspect first: the latest dated folder in `docs/data/google-search-performance/`, `Filters.csv`, `Pages.csv`, `Queries.csv`, `Devices.csv`, `Countries.csv`, `Chart.csv`, and any existing SEO implementation docs already created by earlier handoffs.
- If Data Analytics is available, route analysis through the plugin after identifying the export files, then write the repo docs from the reviewed plugin-backed findings.
- Primary outputs expected from this handoff: a Search performance report, an implementation summary, and a human TODO file that map performance signals back to the numbered SEO handoffs that should be revisited.
- Success signals: export data leads to cleaner prioritization and more evidence-based follow-up recommendations without blocking repo work when exports are missing.
- The export folder is optional. If it is absent, stale, or too thin to support confident decisions, document that clearly and avoid pretending the data exists.
- Use the export data to prioritize and tune work, not to overwrite repo-owned technical truths such as canonicals, index rules, structured-data validity, or service-area reality.

Stop conditions:
- Stop and document the gap if no usable `docs/data/google-search-performance/` export folder exists and the requested work depends on that data.
- Stop and ask for confirmation before making changes that would alter public claims, SEO contracts, schema intent, indexability intent, or core user-flow behavior beyond the support handoff's safe scope.
- Stop after leaving the required report, summary, and TODO outputs when the remaining work depends on live Search Console access, analytics tools, or business approvals not available in the repo.

Required process:
1. Inspect the current implementation first.
2. Check whether `docs/data/google-search-performance/` exists and identify the latest dated export folder.
3. If the Data Analytics plugin is available, use it for the export analysis and preserve this handoff's required markdown outputs.
4. Before editing, identify:
- hidden assumptions
- likely edge cases
- risks of regression
- whether the task should be split into phases
5. If export data exists, summarize:
- date range
- top pages by impressions and clicks
- top queries
- device mix
- country mix when relevant
- obvious CTR or position patterns that matter to on-site decisions
6. Map those findings back to the numbered handoffs they most likely inform.
7. Implement only the changes that are justified by both the export data and the current repo state.
8. Run validation commands.
9. Report files changed, results, and any follow-up risks.

Validation commands:
- npm test
- npm run lint
- npm run build

Acceptance criteria:
- The support handoff remains optional and does not become a hard prerequisite for `01-17`.
- The handoff uses the Data Analytics plugin for quantitative/report-style analysis when it is available, while still working without it.
- The file clearly explains how to use `docs/data/google-search-performance/` when it exists.
- The file clearly explains what to do when the export folder is missing.
- The handoff maps export findings back to the relevant numbered SEO systems instead of treating Search Console as a standalone rewrite engine.
- The handoff leaves clear report and TODO outputs for future follow-up.

Return format:
- Current state summary
- Performance data summary
- Affected handoff mapping
- Implementation summary
- Validation results
- Risks / follow-ups

## New Support File


Use it as an optional shared layer when Search Console exports are available in `docs/data/google-search-performance/`.
