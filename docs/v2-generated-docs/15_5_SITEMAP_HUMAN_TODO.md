# Sitemap Architecture Human TODO

No new sitemap-index or extension-specific human action is currently required.

## 1. Complete The Inherited Production Deployment Check

- Action: deploy the validated repository state and verify the root sitemap and robots reference using the post-deploy crawl contract from handoff 15.
- Reason: production currently returns 404 for `/sitemap.xml`; local architecture and generation already pass.
- Affected scope: production sitemap discovery and processing.
- Priority: critical.
- Status: blocks production sitemap readiness, not completion of the repository architecture review.
- Evidence: `15_INDEXING_AND_CRAWL_HUMAN_TODO.md` and `15_5_SITEMAP_ARCHITECTURE_REPORT.md`.
- Completion condition: production `/sitemap.xml` returns 200 XML with exactly the five canonical URLs, and production `/robots.txt` returns 200 with the sitemap declaration.

## 2. Reopen Extensions Only When A Real Content Model Exists

- Action: rerun the applicability review if the site gains large dynamic route families, per-page significant-update ownership, meaningful hard-to-discover owned images, owned video pages, a news/feed system, or complete localized URL variants.
- Reason: every extension requires accurate source data and maintenance; none exists today.
- Affected scope: future sitemap indexes, `lastmod`, image/video/news elements, feeds, or hreflang entries.
- Priority: conditional.
- Status: nonblocking and inactive until a trigger occurs.
- Evidence: applicability matrix in `15_5_SITEMAP_ARCHITECTURE_REPORT.md`.
- Completion condition: the new content model has canonical/indexability rules, source ownership, refresh behavior, and tests before the sitemap contract changes.

## Search Console

No Search Console task is assigned because the project has no Search Console material and requested that it remain skipped.
