# Search Appearance And Rich-Result Readiness Report

## Run Status

- Canonical run: 25
- Main SEO step: 16
- Phase: implementation
- Status: validated locally
- Pre-execution rundown: delivered before the first write
- Search Console and Analytics: intentionally skipped because no project material exists
- Deployment, DNS, redirects, external profiles, commit, or push action: none

## Scope And Inputs

This run inspected the seven route metadata definitions, shared Next.js metadata helper, root metadata, favicon and preview assets, indexing and preview controls, sitemap target set, rendered-content date patterns, homepage site-identity data, page-matched structured data, prior SEO outputs, and the known stale-production evidence from handoff 15.

The application already had:

- unique route titles and descriptions;
- canonical URLs on all seven public content routes;
- five indexable marketing pages and two deliberate `noindex, follow` placeholders;
- `max-image-preview:large`, unrestricted snippet length, and unrestricted video previews on indexable pages;
- route-matched Open Graph and Twitter text;
- homepage `WebSite` and `Organization` identity data;
- visible breadcrumb-matched `BreadcrumbList` data on four leaf pages;
- a page-matched service-area `Service` entity on `/location`.

## Official Guidance Applied

Google says search appearance is automated and that structured data, metadata, and other page signals can make a page eligible without guaranteeing a particular result. [Google Search appearance overview](https://developers.google.com/search/docs/appearance), [Google structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

For large preview images, Google recommends relevant, high-quality images that are at least 1,200 pixels wide and more than 300,000 pixels, with a landscape presentation suitable for 16:9 cropping. A preferred image can be indicated with `og:image`, and large previews should be allowed with `max-image-preview:large`. [Google Discover guidance](https://developers.google.com/search/docs/appearance/google-discover)

For site identity, Google gives the homepage `WebSite` node's `name` and canonical `url` as the required site-name properties and also considers `og:site_name`, title, headings, and visible homepage text. [Google site-name guidance](https://developers.google.com/search/docs/appearance/site-names)

For favicons, Google requires a crawlable square image of at least 8×8 pixels, recommends a size greater than 48×48 pixels, asks for a stable URL, and does not guarantee display. [Google favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search)

## Findings And Decisions

### 1. Title Links And Snippets

| Check | Evidence | Decision |
|---|---|---|
| Unique route titles | Seven typed page definitions; each route exports its own metadata | Preserve |
| Descriptions | Unique, concise, route-specific, and aligned with visible page content | Preserve |
| Canonicals | Explicit for all seven public content routes | Preserve |
| Preview controls | Indexable pages allow large image, full snippet, and full video preview | Preserve |
| Search-performance rewrite evidence | No Search Console or result-observation material exists | Do not speculate or rewrite |

Google may still generate title links and snippets from visible content, so the metadata is an input rather than a guaranteed presentation contract. No evidence justified another title or description rewrite in this run.

### 2. Preferred Preview Image

The previous metadata emitted no `og:image` or `twitter:image`, and Twitter used `summary`. The repository already contains `hero-cooling-summer.jpg`, a 1672×941 landscape photo showing a northern Utah home and visible outdoor cooling equipment.

Implemented:

- centralized the image path, absolute URL, dimensions, and alternative text in `src/config/site.ts`;
- declared the image in every route's Open Graph metadata;
- changed Twitter to `summary_large_image` and declared the same image;
- preserved `max-image-preview:large` for indexable pages;
- added focused regression coverage for the complete image contract.

This is a shared default, not a claim that Google, social networks, Discover, Images, or AI features will select it. Page-specific creative can replace it later if approved and maintained.

### 3. Site Name And Organization Identity

The homepage already emits one `WebSite` node with:

- `name: One Call Heating & Air`;
- canonical homepage URL;
- language;
- a publisher relationship to one stable Organization ID.

Open Graph uses the same site name, and visible copy consistently uses the brand. No verified alternate business/site name was found, so `alternateName` was not invented. The existing Organization node was preserved for handoff 17's dedicated structured-data review.

### 4. Favicon Readiness

Root metadata currently points the favicon relationship at `logo.png`. The file is 1051×718 and therefore does not meet the square 1:1 favicon shape requirement. It is large enough for Organization logo use, but logo eligibility and favicon readiness are separate contracts.

No new icon was generated or derived because that would require a brand-asset decision. A human TODO now requests an approved square, legible favicon at a stable repository URL.

### 5. Byline And Date Readiness

The current indexable routes are evergreen service, company, service-area, and contact pages—not articles, news stories, or dated posts. The reviewed dates on the company fact sheet and service-planning reference describe maintenance of those visible reference sections; they are not publication dates for the whole page.

Decision: do not emit article authorship or fake publication/modification dates. Reassess only if the site adds a maintained article or news content model.

### 6. Supported Structured-Data Readiness

| Type/opportunity | Current evidence | Decision for step 16 |
|---|---|---|
| `WebSite` site name | Homepage name and canonical URL present | Ready; preserve |
| `Organization` identity | Name, URL, logo, phone, email, and seven-county area present | Preserve for step 17 review |
| `BreadcrumbList` | Visible two-level breadcrumbs on services, about, location, and contact | Ready; preserve |
| `/location` `Service` | Visible service-area content and provider relationship | Preserve for step 17 review |
| `LocalBusiness` / `HVACBusiness` | Public address/storefront model, hours, and Business Profile status unverified | Do not add |
| Review / aggregate rating | Reviews are manually copied from a third-party platform and not live source evidence | Do not add |
| FAQ rich result | FAQ is visible, but FAQ is not in Google's current supported structured-data feature list for this business type | Do not add |
| Article/byline date | No article route family or publication workflow | Do not add |

The dedicated step 17 handoff should validate existing JSON-LD and implement only supported, visible, fact-backed improvements. This run did not change schema meaning.

## Hidden Assumptions And Edge Cases

- The selected preview is relevant and large enough, but one shared image is less specific than route-owned creative.
- A CSS hero background and an Open Graph preview serve different purposes; the metadata declaration makes the asset explicit for external consumers.
- Noindex placeholder pages also receive social preview metadata. That supports direct sharing without changing their search-indexing intent.
- The image URL is absolute, stable under the canonical domain, and resolves through a tracked public asset; production will not expose the updated tags until the current build is deployed.
- Image selection, cropping, title links, snippets, site names, favicons, Discover visibility, and rich results remain automated and non-guaranteed.
- A wide Organization logo should not be silently repurposed into a square favicon without a brand decision.
- Search Console absence prevents CTR-led title or snippet conclusions; it does not block repository metadata quality work.

## Protected Decisions

- Preserved all route titles, descriptions, canonicals, indexability, sitemap membership, robots directives, schema meaning, visible content, routes, review data, and conversion behavior.
- Added no LocalBusiness/address/storefront facts, review rating markup, FAQ markup, article dates, alternate site name, or unsupported search claim.
- Added no dependency, client component, effect, or browser-only metadata code.
- Preserved the existing favicon reference until approved square artwork exists.
- Preserved unrelated working-tree changes.

## Validation

- Focused metadata tests: 3 files, 10 tests passed.
- Strict TypeScript: passed.
- Full Vitest: 23 files, 60 tests passed.
- ESLint: passed.
- Next.js 16.3/OpenNext Cloudflare production build: passed; all public pages were prerendered and the preview asset was packaged.
- Generated metadata: all seven known public content routes emitted the absolute `og:image`, dimensions, alternative text, `summary_large_image`, and Twitter image tags.
- Generated preview controls: all five indexable routes retained `max-image-preview:large`; both placeholders retained `noindex, follow`.
- Asset dimensions: the preview is 1672×941; the current logo/favicon source is confirmed as 1051×718.
- Three-artifact integrity, cross-document status agreement, and `git diff --check`: passed.
- Browser QA was intentionally skipped because no visible layout or interaction changed; generated HTML was inspected directly.
- Live production recheck was intentionally skipped because handoff 15 already proved the deployment is behind the repository state.

## Supporting Outputs

- [Implementation summary](./16_SEARCH_APPEARANCE_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./16_SEARCH_APPEARANCE_HUMAN_TODO.md)
- [Route inventory](./support/ROUTE_INVENTORY.md)
- [Page content gaps](./support/PAGE_CONTENT_GAPS.md)
