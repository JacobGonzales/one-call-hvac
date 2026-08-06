# Google SEO Notes Support Handoff 2.0

Objective:
Keep Google-specific expectations grounded when Codex reports on indexing, crawling, search appearance, and performance changes.

Use this when:

- explaining why a Search Console issue may remain after code is fixed
- deciding whether to validate fixes in Search Console
- discussing indexing timelines, canonical selection, sitemap discovery, or rich-result eligibility

Rules:

- Code fixes do not instantly change Google Search Console status.
- Google may crawl a page before choosing whether to index it.
- `Crawled - currently not indexed` is not always a technical bug; inspect content quality, duplication, internal links, canonicals, sitemap inclusion, and crawlability.
- `Alternate page with proper canonical tag` is usually expected when query URLs or duplicates canonicalize to a clean URL.
- Validate fixes in Search Console only after the repo and production behavior match the intended crawl/index policy.

Generated output:

- Put Google-specific follow-ups in the relevant report under `docs/v2-generated-docs/` or `docs/v2-generated-docs/support/`.
