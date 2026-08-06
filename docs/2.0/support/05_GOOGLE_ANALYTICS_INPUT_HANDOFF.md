# Google Analytics Input Handoff 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before analyzing exports or writing generated files.
- Create or refresh the declared report, implementation summary, and human TODO.
- Update this handoff's ledger row when work begins and ends.

Objective:
Codex should optionally use Google Analytics or GA4 exports stored in the repo to sharpen conversion, engagement, device, event, and funnel decisions across the SEO and search-experience handoffs without making those handoffs dependent on live analytics access.

Why:
Search Console explains how people find the site in Google Search. Google Analytics explains what visitors do after they arrive. This support handoff turns exported Analytics files into repo-safe recommendations for page priority, conversion tracking, event coverage, landing-page quality, device review, and follow-up measurement work.

Relevant context:
- Stack: Detect the target repo's stack, file structure, analytics implementation, and existing SEO/search docs before applying this support handoff.
- Key files:
  - `docs/2.0/support/05_GOOGLE_ANALYTICS_INPUT_HANDOFF.md`
  - `docs/data/google-analytics/` when available
  - `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_REPORT.md`
  - `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_HUMAN_TODO.md`
  - analytics integration files such as `app/layout.tsx`, `lib/analytics/*`, GTM helpers, or framework equivalents
- Related systems:
  - `01_CODEX_HANDOFF_SEO_V2.md` for baseline conversion and page-priority context
  - `04_CODEX_HANDOFF_SEARCH_EVERYWHERE_OPTIMIZATION.md` for engagement and search-entry page cleanup
  - `07_CODEX_HANDOFF_CONTENT_DEPTH_AND_ENTITY_COVERAGE.md` for landing-page depth prioritization
  - `09_CODEX_HANDOFF_SERP_READINESS_AND_SNIPPET_OPPORTUNITY.md` for CTR and landing-page mismatch review
  - `10_CODEX_HANDOFF_LOCAL_SEO_AND_LOCATION_SIGNALS.md` for local page and city-page performance
  - `15_CODEX_HANDOFF_INDEXING_AND_CRAWL_READINESS.md` for production validation context
  - `16_CODEX_HANDOFF_SEARCH_APPEARANCE_AND_RICH_RESULT_READINESS.md` for appearance-to-engagement review
- Current issue:
  - Analytics data is valuable, but it should be an optional support layer. The numbered handoffs should still run when Analytics exports are absent.

Data Analytics plugin routing:
- When the Data Analytics plugin is available in the current Codex session, use it for the quantitative analysis and report-writing parts of this handoff.
- Treat the local GA4 exports as the provided source of truth for the plugin run unless the user explicitly provides live GA4, BigQuery, Looker Studio, or another reviewed analytics source.
- Follow the plugin's setup or preflight requirements before drawing conclusions, but do not let missing plugin onboarding block this handoff when local exports are present.
- Keep the required repo outputs in this handoff even when the plugin is used: `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_REPORT.md`, `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_IMPLEMENTATION_SUMMARY.md`, and `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_HUMAN_TODO.md`.
- If the Data Analytics plugin is unavailable, continue with direct local-file inspection and clearly state that the run used exported files without plugin-backed context.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Treat this handoff as optional support, not a required numbered phase
- Allow the numbered handoffs to run cleanly whether `docs/data/google-analytics/` exists or not
- Use exported data to prioritize and diagnose, not to invent business claims or change service scope

Expected input files:
- GA4 CSV exports, spreadsheets, or downloaded report files under `docs/data/google-analytics/`
- Useful report types include:
  - Pages and screens
  - Landing page
  - Traffic acquisition
  - User acquisition
  - Events
  - Key events or conversions
  - Device category
  - Geography
  - Path exploration or funnel exploration exports
  - Search Console-linked landing page reports when available

Expected outputs:
- `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_REPORT.md`
- `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/support/google-analytics/GOOGLE_ANALYTICS_HUMAN_TODO.md`

Constraints:
- Keep implementation simple and beginner-readable
- Prefer clear naming over clever abstractions
- Match the current stack and project conventions
- Avoid unnecessary dependencies
- Do not treat Analytics exports as perfect truth
- Do not claim causation from correlation
- Do not expose private user identifiers or raw personal data in generated docs
- Do not invent conversion rates, revenue, attribution, or event names that are not present in the export or code
- Do not change public claims, SEO contracts, schema intent, indexability intent, or core user-flow behavior unless the repo evidence clearly supports it

Execution notes:
- Inputs Codex should inspect first:
  - latest dated folder under `docs/data/google-analytics/`
  - latest flat GA4 report snapshot under `docs/data/google-analytics/` when no dated folder exists
  - event/key-event exports
  - landing page and pages/screens exports
  - traffic/source exports
  - device and geography exports
  - current analytics code and GTM/GA wiring
  - existing Search Console reports when both data sources are available
- If Data Analytics is available, route analysis through the plugin after identifying the export files, then write the repo docs from the reviewed plugin-backed findings.
- If no export exists, inspect analytics wiring and leave a human TODO for the export files needed.
- If exports exist, summarize data at a decision-ready level. Do not dump raw rows.

Export quality checks:
- Parse multi-table GA4 CSV snapshots as separate report sections, not as one continuous table.
- Capture the export date range from the file comments or folder name before making recommendations.
- Flag unrelated brands, page titles, hostnames, or app screens as likely property/filter contamination instead of treating them as site performance.
- If event, key-event, landing-page, device, or hostname data is missing, mark it as a measurement gap instead of inferring the values from page views.
- Treat short-window exports and low user counts as directional evidence only.

Stop conditions:
- Stop and document the gap if no usable Analytics export exists and the requested work depends on that data.
- Stop and ask for confirmation before making changes that alter public claims, conversion flows, checkout/payment behavior, booking behavior, analytics consent expectations, or privacy/legal statements.
- Stop after leaving the required report, summary, and TODO outputs when remaining work depends on live GA4 access, Tag Manager access, stakeholder approval, or production-only event verification.

Required process:
1. Inspect the current implementation first.
2. Check whether `docs/data/google-analytics/` exists and identify the latest dated export folder or latest flat report snapshot.
3. Inspect analytics wiring in the app, including GA/GTM env names and event helper usage.
4. If the Data Analytics plugin is available, use it for the export analysis and preserve this handoff's required markdown outputs.
5. Before editing, identify:
- hidden assumptions
- likely edge cases
- risks of regression
- whether the task should be split into phases
6. If export data exists, summarize:
- date range
- top landing pages
- top pages/screens
- source/medium or channel mix
- device mix
- geography when relevant
- top events and key events
- obvious conversion or engagement gaps
- pages with search visibility but weak engagement when Search Console exports also exist
7. Map findings back to the numbered handoffs they most likely inform.
8. Implement only the changes justified by both Analytics evidence and current repo state.
9. Run validation commands.
10. Report files changed, results, and follow-up risks.

Validation commands:
- npm test
- npm run lint
- npm run build

Acceptance criteria:
- The support handoff remains optional.
- The handoff uses the Data Analytics plugin for quantitative/report-style analysis when it is available, while still working without it.
- The file clearly explains how to use `docs/data/google-analytics/` when it exists.
- The file clearly explains what to do when Analytics exports are missing.
- The file calls out contaminated Analytics exports and missing report sections instead of treating noisy exports as complete truth.
- The handoff maps Analytics findings back to SEO, search-experience, conversion, and measurement follow-up work.
- The handoff leaves clear report and TODO outputs for future follow-up.

Return format:
- Current state summary
- Analytics data summary
- Affected handoff mapping
- Implementation summary
- Validation results
- Risks / follow-ups

## New Support File


Use it as an optional shared layer when Google Analytics exports are available in `docs/data/google-analytics/`.
