# Indexing And Crawl Readiness Report

## Run Status

- Canonical run: 22
- Main SEO step: 15
- Phase: implementation
- Status: repository implementation validated locally; production deployment follow-up required
- Pre-execution rundown: delivered before the first write
- Search Console input: intentionally skipped because the project has no Search Console material
- Deployment, DNS, redirect, Search Console, commit, or push action: none

## Scope And Inputs

This run inspected Next.js route entries, centralized page metadata, canonicals, robots directives, sitemap generation, internal discovery links, rendered visibility, noindex placeholders, not-found behavior, OpenNext output, live Cloudflare responses, canonical-host variants, the legacy host, and prior technical/indexability reports.

The intended index target set remains:

- `/`
- `/services`
- `/about`
- `/location`
- `/contact`

`/emergency` and `/about/social-media` remain intentionally `noindex, follow` until their placeholder content is replaced. `/404` and framework not-found responses are not index targets.

## Current State Summary

| Objective | Repository/local result | Live production observation | Readiness |
|---|---|---|---|
| Discover | Five completed routes are linked through primary navigation, shared footers, and contextual journeys | All five target URLs return HTTP 200 | Healthy, pending discovery-file deployment |
| Crawl | Public paths allowed; `/api/` excluded; OAI-SearchBot explicitly allowed | `https://utahonecall.com/robots.txt` returns HTTP 404 | Repository ready; production not ready |
| Render | Important content is statically prerendered and visible without client-only fetches or opacity gating | Live target pages return rendered HTML | Healthy, but deployed copy/metadata is older than local source |
| Index signals | Five target pages have self canonicals and index/follow metadata; placeholders have noindex/follow locally | Live placeholders return 200 but their HTML lacks the repository's noindex meta | Repository ready; production stale |
| Sitemap | Generated from metadata-owned indexability after this run; only five targets included | `https://utahonecall.com/sitemap.xml` returns HTTP 404 | Repository ready; production not ready |
| Removal/suppression | Unknown paths return 404; placeholders remain crawlable but noindex; API excluded from crawl | Unknown live path returns HTTP 404 | Healthy except stale placeholder metadata |
| Canonical host | Repository canonicals use `https://utahonecall.com` | `www.utahonecall.com` does not resolve; legacy domain returns an independent Vercel 200 page | External consolidation required |

No repository or live observation proves that Google will crawl, index, or serve a page. This report establishes technical readiness and identifies conflicting deployment signals only.

## Findings

### 1. Sitemap Ownership Was Duplicated

`src/config/page-metadata.ts` already owned every public route's indexability intent, but `src/app/sitemap.ts` maintained a second hard-coded list. The two lists agreed today, yet a future route change could update metadata without updating the sitemap.

The sitemap now derives from exported `INDEXABLE_PAGE_PATHS`, which applies the same default-indexable rule as `createPageMetadata`. Regression coverage proves that:

- all metadata-owned index targets appear in the sitemap;
- both noindex placeholders stay out;
- the current sitemap order and five canonical URLs remain stable.

This changes ownership, not public indexability.

### 2. Repository Discovery Routes Are Correct

The OpenNext production build includes static `/robots.txt` and `/sitemap.xml` routes. Local HTTP checks show both returning 200. The generated robots body:

- allows public content;
- disallows `/api/`;
- explicitly permits OAI-SearchBot on public paths;
- declares the canonical host and sitemap.

The generated sitemap contains exactly the five completed canonical URLs. Placeholder, API, 404, and unknown paths are absent. No speculative `lastmod`, priority, or change-frequency value was added.

### 3. Production Is Behind The Repository

Read-only checks on August 6, 2026 found:

- `/`, `/services`, `/about`, `/location`, and `/contact`: HTTP 200;
- `/emergency` and `/about/social-media`: HTTP 200;
- an unknown route: HTTP 404 with a noindex meta;
- `/robots.txt`: HTTP 404;
- `/sitemap.xml`: HTTP 404;
- live placeholder HTML: no repository-intended `noindex, follow` meta;
- live titles/descriptions: older values than the current local metadata definitions.

Because the local build contains all missing routes and metadata, adding duplicate route handlers would create a conflict rather than solve the deployment mismatch. The correct fix is to deploy the current validated build and re-run the production checks.

### 4. Canonical Host Variants Need External Coordination

`www.utahonecall.com` did not resolve during the live check. The legacy `onecallheatingandair.com` host returned HTTP 200 from Vercel instead of permanently redirecting to the matching `utahonecall.com` path.

The repository cannot safely create DNS records or control the legacy Vercel host. Those remain human/host tasks. Redirects should preserve paths and query strings and avoid redirect chains.

### 5. Suppression And Removal Logic Is Intentional

- Placeholder pages remain user-accessible and internally linked but are locally `noindex, follow` and excluded from the sitemap.
- Unknown URLs return real 404 responses.
- The explicit `/404` page is noindex/nofollow and excluded from discovery surfaces.
- `/api/inquiries` is not a content route and is excluded by robots and sitemap policy.
- There are no query-selected content variants, faceted routes, pagination, alternate locale sets, or dynamic index targets.

No indexability, canonical, route, or suppression intent changed in this run.

## Hidden Assumptions And Edge Cases

- A 200 response does not establish indexability if the deployed metadata is stale or conflicting.
- A sitemap URL does not guarantee crawling or indexing.
- `noindex` must remain crawlable so a crawler can observe it; blocking placeholders in robots would be counterproductive.
- Canonical tags do not replace permanent redirects between duplicate hosts.
- `www` absence is not a duplicate-content problem by itself, but common inbound variants should resolve predictably.
- A `lastmod` value should describe a real substantial page update; one shared fact-sheet review date must not be copied onto every sitemap entry.
- Search Console absence prevents URL-level Google status diagnosis but does not prevent repository and live HTTP validation.

## Protected Decisions

- Preserved the five-page index target set and two-placeholder noindex policy.
- Preserved all canonicals, metadata copy, schema, routes, navigation, forms, API behavior, public claims, and crawler directives.
- Added no redirects, rewrites, host rules, DNS entries, Search Console actions, or deployment mutations.
- Preserved unrelated working-tree changes.

## Validation Evidence

- Focused Vitest: 2 files, 7 tests passed.
- Strict TypeScript: passed.
- Full Vitest: 23 files, 59 tests passed.
- ESLint: passed.
- Next.js 16.3/OpenNext Cloudflare production build: passed; 13 static pages generated and `/robots.txt` plus `/sitemap.xml` included as static routes.
- Generated robots body: wildcard and OAI-SearchBot policies present; `/api/` excluded; canonical sitemap/host present.
- Generated sitemap body: exactly `/`, `/services`, `/about`, `/location`, and `/contact`.
- Generated placeholder HTML: both routes contain `noindex, follow` and self canonicals.
- Local production HTTP: five target routes and two placeholders returned 200; unknown route returned 404; robots and sitemap returned 200 with correct content types and bodies.
- Live production read-only checks: five target routes returned 200; unknown route returned 404; robots and sitemap returned 404; placeholder metadata was stale; `www` resolution failed; legacy host returned an independent 200.
- Browser QA was intentionally skipped because the implementation changes data ownership only and the rendered/HTTP contracts were validated directly.
- `git diff --check`: passed.

## Supporting Outputs

- [Implementation summary](./15_INDEXING_AND_CRAWL_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./15_INDEXING_AND_CRAWL_HUMAN_TODO.md)
- [Route inventory](./support/ROUTE_INVENTORY.md)
- [Page content gaps](./support/PAGE_CONTENT_GAPS.md)
- [Technical depth report](./12_TECHNICAL_DEPTH_REPORT.md)
