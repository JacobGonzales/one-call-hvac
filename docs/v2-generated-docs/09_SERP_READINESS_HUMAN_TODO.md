# SERP Readiness Human TODO

No human action blocks completion of handoff 09 or the next canonical handoff.

## 1. Provide Search Console Evidence Later

- Action: verify `utahonecall.com` in Google Search Console, submit the sitemap, and provide dated query/page/device exports after useful impressions accumulate.
- Reason: title and description rewrites should be based on observed queries, positions, impressions, and click-through rates rather than guesses.
- Affected scope: all five indexable routes, especially homepage, services, location, and contact.
- Priority: high after deployment and data accumulation.
- Status: nonblocking now.
- Evidence: `09_SERP_READINESS_REPORT.md`.
- Completion condition: exports exist under `docs/data/google-search-performance/` and support handoff 04 can be rerun.

## 2. Record Actual Search Titles And Snippets

- Action: after indexing, record the displayed result title, snippet, query, device, date, and landing page for a stable branded, service, and local query set.
- Reason: Google may rewrite technically sound title links and snippets from page content.
- Affected scope: route metadata and visible hero/answer content.
- Priority: medium.
- Status: nonblocking.
- Evidence: Google Search Central title-link and snippet guidance linked in the report.
- Completion condition: repeated mismatch evidence identifies a specific source change worth testing.

## 3. Verify Snippet-Eligible Public Claims

- Action: verify current pricing, emergency availability, response timing, credentials, permit handling, warranty, tax-credit, rebate, financing, and equipment-eligibility language.
- Reason: search engines may reuse any visible public text as a snippet, not only the meta description or new quick-answer block.
- Affected scope: homepage, services, about, contact, footer, FAQ, and future rich-result work.
- Priority: high.
- Status: nonblocking for code completion; required before relying on those claims operationally.
- Evidence: `07_CONTENT_DEPTH_HUMAN_TODO.md` and `09_SERP_READINESS_REPORT.md`.
- Completion condition: each claim has approved wording, an evidence owner, and a review date, or is removed.

## 4. Approve Production Verification

- Action: deploy the reviewed repository state when ready, then verify the homepage source and `/services` → `/#faq` journey on `https://utahonecall.com`.
- Reason: this run validated local prerendered output and browser behavior only.
- Affected scope: homepage FAQ and inbound support links.
- Priority: medium.
- Status: nonblocking.
- Evidence: `09_SERP_READINESS_IMPLEMENTATION_SUMMARY.md`.
- Completion condition: production source contains the quick answer and production deep links land correctly.
