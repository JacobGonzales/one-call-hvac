# Technical Depth And Edge Cases Report

## Run Status

- Canonical run: 18
- Main SEO step: 12
- Phase: implementation
- Status: validated locally
- Pre-execution rundown: delivered before the first write
- Search Console and Analytics: unavailable and skipped by prior owner direction
- Deployment or external mutation: none

## Scope And Inputs

This pass inspected the Next.js App Router entrypoints, metadata helper, canonical host configuration, robots and sitemap routes, noindex placeholders, error handling, image components and CSS backgrounds, shared reveal motion, hero image loading, rendered production HTML, query/trailing-slash behavior, and the current route inventory.

The technical decisions were checked against Google's current guidance for [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading), [Google Images](https://developers.google.com/search/docs/appearance/google-images), and [crawl errors and soft 404s](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors).

## Current Structure

- Five substantive marketing pages are indexable: `/`, `/services`, `/about`, `/location`, and `/contact`.
- `/emergency` and `/about/social-media` are public utility placeholders with `noindex, follow` and no sitemap entries.
- Metadata definitions emit route-specific canonicals against `https://utahonecall.com`.
- `/robots.txt` allows public content, disallows `/api/`, declares the apex host, and advertises the sitemap.
- There are no dynamic route families, filter/search pages, faceted routes, pagination controls, or URL-generating query-state APIs.
- Known routes are statically prerendered; the inquiry API remains server-rendered on demand.

## Findings And Decisions

| Area | Evidence | Assessment | Decision |
|---|---|---|---|
| Image alt coverage | All content-bearing logo images use `One Call Heating & Air`; hero photos use empty alt inside `aria-hidden` decorative layers; the map iframe has a descriptive title; CSS patterns are decorative | Healthy | No semantic alt rewrite |
| Visible-content sufficiency | Shared `SectionReveal` wrappers previously emitted `opacity:0` in prerendered HTML for major page sections | Defect fixed | Keep server snapshots visible and activate reveal motion only after hydration |
| Canonical host | `SITE_URL` and `metadataBase` use `https://utahonecall.com`; rendered canonicals are route-specific and omit noncontent query parameters | Healthy in repo | Preserve apex-host contract; external aliases remain owner-hosted work |
| Faceted or filtered crawl risk | No `searchParams`, filter pages, result sorting, dynamic route segments, or generated parameter links exist | Not present | No speculative blocking rules or canonical exceptions |
| Pagination and crawl edges | No pagination, infinite-scroll archive, load-more content collection, or paginated metadata exists | Not present | No pagination markup or route family added |
| Soft 404 and thin duplicates | `/404` and an unknown path both returned HTTP 404 locally; branded recovery links remain present; two thin utility pages are noindex and excluded from the sitemap | Controlled | Preserve status behavior and placeholder noindex policy |
| Robots/canonical/noindex conflicts | Indexable pages are sitemap-listed and index/follow; placeholders are canonical but noindex/follow; error pages are noindex; API is robots-disallowed and unsitemapped | Consistent | No indexability change |
| Page experience | Home hero previously marked all three large background slides eager, causing three carousel images to compete during initial load | Defect fixed | Keep only the first slide prioritized; emit native lazy loading for later slides |

## Implementation

### Progressive-Enhancement-Safe Reveals

`SectionReveal` now uses a hydration-aware external-store snapshot:

- server and initial hydration output use visible `opacity:1;transform:none` styles;
- client-side motion activates only after hydration;
- in-view alternating motion remains available when JavaScript runs;
- reduced-motion visitors continue to receive immediate visible content.

This prevents animation from becoming a content-delivery dependency while preserving the intended visual behavior.

### Hero Image Request Priority

The first technician background remains the priority image. Heating and cooling backgrounds now use `loading="lazy"`. The production head preloads only the logo and initial hero image, while all three image elements remain in the rendered document for carousel behavior.

### Regression Coverage

- A server-rendering test rejects `opacity:0` and horizontal transforms in `SectionReveal` static markup.
- The hero test asserts that only the first background avoids lazy loading and retains the existing slide-change interaction test.

## Protected Decisions

- No route, public copy, H1, canonical, metadata text, schema, sitemap membership, robots policy, indexability, form behavior, or business claim changed.
- No filter, pagination, city-page, redirect, or infrastructure abstraction was invented.
- Decorative images remain decorative rather than receiving keyword-stuffed alt text.
- No old-domain, `www`, CDN, Cloudflare, deployment, Search Console, Analytics, or external account state changed.

## Validation Evidence

- Focused Vitest: 2 files, 3 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Full Vitest: 23 files, 56 tests passed.
- OpenNext Cloudflare build: passed with Next.js 16.3.0 and OpenNext Cloudflare 1.19.11.
- Generated homepage HTML: 11 reveal wrappers, zero hidden prerendered wrappers, and one consistent visible style.
- Generated homepage head: only the logo and first hero background are image-preloaded.
- Generated hero markup: first image priority/default; second and third images `loading="lazy"`.
- Local HTTP checks: `/404` returned 404; an unmatched URL returned 404; `/services/` with parameters redirected permanently to the slashless route and the final page canonical remained `https://utahonecall.com/services`.
- In-app browser at 1280×720: correct URL/title, meaningful DOM, no framework overlay, no relevant warnings/errors, and a successful hero-tab state change to `Heat When It Counts.`
- Screenshot evidence was saved outside the repository at `/tmp/one-call-handoff-12-hero.jpg`.

## Risks And Exceptions

- The repository can declare the canonical apex host but cannot prove or configure every external alias. Prior project evidence records the legacy domain as a separate self-canonical site; its permanent redirect remains owner-managed.
- Production status codes, response headers, and generated output remain unverified until an authorized deployment.
- The two noindex placeholder routes still need owner lifecycle decisions before they should become indexable.
- Existing marketing claims remain subject to the owner-verification backlog; this handoff did not treat source presence as independent proof.
- Browser QA covered the available 1280×720 in-app viewport. The code path is viewport-independent and mobile CSS did not change, but a separate mobile-sized Browser viewport was not available in this run.

## Supporting Artifacts

- [Implementation summary](./12_TECHNICAL_DEPTH_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./12_TECHNICAL_DEPTH_HUMAN_TODO.md)
- [Page content gaps](./support/PAGE_CONTENT_GAPS.md)
- [Project subpage brief](./support/repo-context/PROJECT_SUBPAGE_BRIEF.md)
