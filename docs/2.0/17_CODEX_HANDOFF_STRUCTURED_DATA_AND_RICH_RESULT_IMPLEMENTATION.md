# Codex Structured Data And Rich Result Implementation Handoff (Generic, Reusable Across Client Projects) 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and the current `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before the first write or implementation action.
- Create or refresh this handoff's detailed report, implementation summary, and human or owner TODO; use the ledger-assigned fallback path when an older output list omits one member of the trio.
- Update this handoff's ledger row and append history when work begins and ends.

Objective:
Codex should improve the repo so eligible pages are easier for Google to:

1. understand explicitly
2. match to supported rich-result features
3. connect to related on-page entities such as videos, breadcrumbs, authors, and organizations
4. validate cleanly in tools and Search Console
5. maintain over time without schema drift

Why:
Use this handoff after:

- `01_CODEX_HANDOFF_SEO_V2.md`
- `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
- `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
- `15_CODEX_HANDOFF_INDEXING_AND_CRAWL_READINESS.md`
- `16_CODEX_HANDOFF_SEARCH_APPEARANCE_AND_RICH_RESULT_READINESS.md`

Use it when the repo already has baseline crawlability and search-appearance direction, but now needs a dedicated implementation pass for supported structured data.

This handoff is about selecting, implementing, validating, and monitoring structured data accurately.

It should help prevent the common failure mode where a site has some schema scattered around the repo, but the markup is incomplete, mismatched to visible content, unsupported by Google Search, or too fragile to trust after deployment.

## Important Reality Check

Codex should not promise that valid structured data will produce a rich result.

Google does not guarantee:

- that valid markup will be shown as a rich result
- that every supported property will be used in Search
- that a page passing Rich Results Test will surface with enhanced treatment
- that dynamically injected markup will be processed as often or as reliably as ideal in every scenario

The practical goal is narrower:

- choose only supported and appropriate schema types
- make the markup accurate and visible-content-aligned
- satisfy required properties where the feature needs them
- add recommended properties when they are real and maintainable
- validate the implementation and leave clear monitoring guidance

## Current Google Search Behavior Notes

Check the current Google Search Central documentation during each run because supported rich-result surfaces change over time.

As of the June 2026 update of this handoff:

- FAQ rich results are no longer shown in Google Search results. `FAQPage` markup may still be useful as visible-content schema for other consumers, but it should not be reported as a current Google FAQ rich-result target.
- Sitelinks Search Box visual results were removed globally starting November 21, 2024. `WebSite` markup can still support site identity, and unsupported sitelinks-search-box markup is not automatically harmful, but do not promise or report a visual sitelinks search box as an active Google Search enhancement.
- Google Search Central documentation is the authority for Google Search behavior. Schema.org may contain valid types and properties that Google Search does not use for rich results.
- Rich Results Test eligibility is not the same thing as guaranteed search appearance.

Practical rule:

- Treat `BreadcrumbList`, eligible `Article`/`BlogPosting`, `LocalBusiness`, `Organization`, and other currently documented Google feature types as supported candidates only when the visible page content and required properties match.
- Treat `FAQPage`, `ItemList`, `Service`, and `WebSite` search actions carefully: they can be valid structured data, but they are not automatically current Google rich-result wins for every site or page.
- Do not add or keep stale schema solely because an older handoff, plugin, SEO checklist, or competitor site used it.

Relevant context:
- Stack: Detect the target repo's stack, file structure, and existing implementation before applying this handoff, then adapt the work to the current conventions.
- Key files:
  - `17_CODEX_HANDOFF_STRUCTURED_DATA_AND_RICH_RESULT_IMPLEMENTATION.md`
  - `docs/2.0/support/04_GOOGLE_SEARCH_PERFORMANCE_INPUT_HANDOFF.md` when available
  - `docs/data/google-search-performance/` when available
  - `docs/v2-generated-docs/17_STRUCTURED_DATA_REPORT.md`
  - `docs/v2-generated-docs/17_STRUCTURED_DATA_IMPLEMENTATION_SUMMARY.md`
  - `docs/v2-generated-docs/17_STRUCTURED_DATA_HUMAN_TODO.md`
- Related systems:
  - `01_CODEX_HANDOFF_SEO_V2.md`
  - `02_CODEX_HANDOFF_SEO_PAGE_METADATA.md`
  - `05_CODEX_HANDOFF_ADVANCED_SEARCH_SIGNAL_EXPANSION.md`
  - `15_CODEX_HANDOFF_INDEXING_AND_CRAWL_READINESS.md`
  - `16_CODEX_HANDOFF_SEARCH_APPEARANCE_AND_RICH_RESULT_READINESS.md`
- Current issue:
  - The original handoff already defines the right SEO work; this 2.0 version keeps that same intent while shaping it into a cleaner Codex brief.

Scope:
- Only modify files needed for this task
- Keep unrelated files unchanged
- Use this handoff as a reshaped 2.0 version of the original source file
- Match the original handoff's ownership boundaries and prerequisites
- supported structured-data feature selection
- JSON-LD-first implementation strategy
- required and recommended property coverage
- visible-content parity checks
- multi-item modeling and `@id` linking when appropriate
- JavaScript and SSR structured-data implementation guidance

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
- Inputs Codex should inspect first: current schema helpers, eligible page types, visible-content support, JSON-LD injection patterns, any existing validation or Search Console feedback, and optional Search Console performance exports when they exist to prioritize which eligible pages deserve closer structured-data follow-up first.
- Primary outputs expected from this handoff: a structured-data report, an implementation summary, and a human TODO file that document supported schema choices, validation status, and remaining monitoring work.
- Success signals: the repo uses supported schema types, required properties are satisfied where applicable, visible-content parity is maintained, related entities are connected with stable `@id` values where useful, and the implementation is maintainable enough to avoid schema drift later.
- Pause instead of adding markup when the page lacks visible support, the schema type is not clearly supported, or the data values would be guessed rather than verified.
- Split into phases when schema selection, implementation, and validation each need separate review to avoid mixing unsupported ideas into production markup.

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
- understand explicitly
- match to supported rich-result features
- connect to related on-page entities such as videos, breadcrumbs, authors, and organizations
- validate cleanly in tools and Search Console
- maintain over time without schema drift
- `docs/v2-generated-docs/17_STRUCTURED_DATA_REPORT.md`
- `docs/v2-generated-docs/17_STRUCTURED_DATA_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/17_STRUCTURED_DATA_HUMAN_TODO.md`

Return format:
- Current state summary
- Plan
- Implementation summary
- Validation results
- Risks / follow-ups
