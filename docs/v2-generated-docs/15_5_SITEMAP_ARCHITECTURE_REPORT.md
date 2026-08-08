# Sitemap Architecture And Extensions Report

## Run Status

- Canonical run: 23
- Main SEO step: 15.5
- Phase: implementation
- Status: validated locally
- Pre-execution rundown: delivered before the first write
- Runtime sitemap output changed: no
- Search Console, deployment, DNS, redirect, commit, or push action: none

## Scope And Inputs

This run inspected the metadata-owned index target set, Next.js sitemap generator, robots sitemap reference, generated XML, route scale, static media inventory, rendered image behavior, embedded media, language/locale configuration, publishing model, content freshness ownership, and step 15's local/live crawl evidence.

Current architecture:

- one root-level XML sitemap at `/sitemap.xml`;
- five absolute canonical URLs;
- membership derived from `INDEXABLE_PAGE_PATHS`;
- both noindex placeholders excluded;
- one sitemap declaration in `/robots.txt`;
- no sitemap index, child sitemap, feed, or extension namespace.

## Official Guidance Applied

Google's current sitemap guidance says a sitemap should contain the canonical URLs a site wants shown in search, recommends a root-level location, and requires splitting only after a sitemap exceeds 50,000 URLs or 50 MB uncompressed. It also says URL order does not matter, `priority` and `changefreq` are ignored, and `lastmod` is useful only when it is consistently accurate and reflects a significant page update. [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

Google describes image sitemaps as a way to expose images that might not otherwise be discovered and separately notes that standard HTML `<img>` elements are crawlable while CSS background images are not. [Google: Image sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps), [Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)

Localized sitemap annotations apply when distinct URL versions actually exist for different languages or regions and must cross-reference all variants, including themselves. This repository has no such route set. [Google: Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)

These sources support a minimal canonical sitemap for this project. They do not imply that submission guarantees crawling, indexing, or ranking.

## Extension Applicability Matrix

| Architecture or field | Repository evidence | Decision | Reopen trigger |
|---|---|---|---|
| Single XML sitemap | Five canonical index targets | Keep | Reassess only if the route/content model materially expands |
| Sitemap index | Five URLs, one host, one content family | Do not add | Required at protocol limits; optionally useful only with real large content families and operational ownership |
| `<lastmod>` | No per-page significant-update source of truth; the shared August 6 review date belongs only to two reference sections | Do not add | Add per URL only after update dates are generated from trustworthy page/content ownership |
| `priority` | No supported ranking value; current guidance says Google ignores it | Do not add | None for Google sitemap needs |
| `changefreq` | No reliable route refresh model; current guidance says Google ignores it | Do not add | None for Google sitemap needs |
| Image extension | Three hero photos are decorative server-rendered `<img>` elements with empty alt text; the logo is a normal discoverable `<img>` | Do not add | Add only for meaningful owned images that are hard to discover through crawlable HTML |
| Video extension / mRSS | No owned video page, player metadata, thumbnail contract, duration, publication date, or feed | Do not add | Add when an owned indexable video content model and maintained metadata exist |
| News extension | No news publication, article route family, dates, publication metadata, or News participation workflow | Do not add | Add only if a genuine maintained news system is created and eligible |
| Localized URL extension | One `en-US` route set and no alternate-language URLs | Do not add | Add only after complete reciprocal localized routes exist |
| RSS/Atom sitemap | No chronological publishing feed or recent-content model | Do not add | Add when a maintained feed is a real product/content surface |

## Implementation

Step 15 already fixed the only runtime architecture defect by deriving sitemap membership from metadata-owned indexability. This handoff added a focused contract asserting that each entry contains only the supported canonical `url` property.

The guard prevents accidental introduction of:

- fabricated `lastModified` dates;
- ignored priority/change-frequency values;
- decorative image entries;
- unsupported video/news metadata;
- nonexistent language alternates.

A future extension is still possible, but it must update the explicit test and document the content source, owner, refresh rules, and validation contract.

## Sitemap Quality Assessment

| Quality check | Result |
|---|---|
| Absolute URLs | Pass; all five use `https://utahonecall.com` |
| Canonical targets only | Pass |
| Indexable routes only | Pass |
| Same host | Pass |
| Root-level location | Pass |
| Duplicate URLs | None |
| Placeholder/API/404 URLs | Excluded |
| Unsupported fields | None |
| UTF-8 XML generation | Pass through Next metadata route |
| Robots discovery reference | Present locally |
| Protocol scale | Five URLs; no index needed |

## Hidden Assumptions And Edge Cases

- A page's visible review date is not automatically the page's last significant modification date.
- Git commit dates and build/deploy dates are not reliable substitutes for per-page content modification dates.
- A sitemap index adds no discovery value merely because it is more elaborate.
- Decorative images do not become useful search targets merely by appearing in an image namespace.
- An embedded Google map is not an owned video or image content page.
- A language attribute on one English page set is not evidence of alternate localized URLs.
- Future dynamic routes must join the metadata/indexability contract before entering the sitemap.
- Production currently returns 404 for the repository's sitemap route; extension work cannot correct a stale deployment.

## Protected Decisions

- Preserved the five canonical URL set, ordering, placeholder exclusion, root sitemap URL, and robots declaration.
- Preserved metadata, routes, indexability, media rendering, schema, content, and deployment configuration.
- Added no sitemap index, timestamps, priorities, change frequencies, media/news/localization extensions, or feed.
- Preserved unrelated working-tree changes.

## Validation

- Focused Vitest: 2 files, 8 tests passed.
- Strict TypeScript: passed.
- Full Vitest: 23 files, 60 tests passed.
- ESLint: passed.
- Next.js 16.3/OpenNext Cloudflare production build: passed; `/sitemap.xml` and `/robots.txt` generated as static routes.
- Generated XML: five `<url>` and five canonical `<loc>` entries.
- Generated XML extension check: no `lastmod`, priority, change frequency, image, video, news, or hreflang namespace/element present.
- Browser QA was intentionally skipped because no visual or interaction behavior changed.
- Live production recheck was not repeated; step 15 already established that deployment is stale and the sitemap returns 404.
- Output integrity and `git diff --check`: passed.

## Supporting Outputs

- [Implementation summary](./15_5_SITEMAP_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./15_5_SITEMAP_HUMAN_TODO.md)
- [Step 15 crawl-readiness report](./15_INDEXING_AND_CRAWL_READINESS_REPORT.md)
- [Route inventory](./support/ROUTE_INVENTORY.md)
