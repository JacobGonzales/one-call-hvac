# Competitive Pattern Intelligence Human TODO

No human action blocks completion of the current evidence-gap documentation. The following items are required before competitive pattern extraction can be implemented.

## 1. Approve Two Competitors

- Action: provide two public competitor URLs and one sentence explaining why each is a meaningful business or organic-search competitor.
- Reason: selecting nearby companies from search results would guess the comparison set.
- Affected scope: step 06 comparison evidence and step 11 pattern extraction.
- Priority: medium.
- Status: blocking for competitive extraction; nonblocking for unrelated suite work.
- Evidence: `06_COMPETITOR_COMPARISON_REPORT.md` and `11_COMPETITIVE_PATTERN_REPORT.md`.
- Completion condition: both URL and relevance fields are completed in `SEO_MANUAL_INPUTS.md` or supplied directly.

## 2. Approve Comparable Page Families

- Action: confirm whether the first sample should compare homepages only or include matching service and location pages.
- Reason: patterns are meaningful only when page intent is comparable.
- Affected scope: capture inventory, taxonomy, and cross-site matrix.
- Priority: medium.
- Status: blocking for extraction design.
- Evidence: `11_COMPETITIVE_PATTERN_REPORT.md`.
- Completion condition: an approved page-family list exists for One Call and both competitors.

## 3. Provide Or Approve Stable Captures

- Action: provide dated HTML/DOM exports and screenshots, or approve a supported public-page capture workflow for the selected URLs.
- Reason: repeated section patterns need reproducible source evidence rather than memory or search snippets.
- Affected scope: trust, offer/conversion, process, comparison/fit, and repeated-section observations.
- Priority: medium.
- Status: blocking for taxonomy and tooling implementation.
- Evidence: no capture or extraction surface exists in the repository.
- Completion condition: every included page has its URL, page type, capture date, viewport/source method, visible text, and section order preserved.

## 4. Provide Optional Audit And Keyword Exports

- Action: if step 06 scoring is also desired, provide supported deep-audit and keyword exports with source and capture date.
- Reason: visible pattern extraction does not establish rankings, traffic, query ownership, or technical winners.
- Affected scope: optional comparison scorecards only.
- Priority: low.
- Status: optional for step 11 patterns; blocking for the fuller step 06 package.
- Evidence: `06_COMPETITOR_COMPARISON_HUMAN_TODO.md`.
- Completion condition: raw exports and provenance are stored separately from interpretation.

