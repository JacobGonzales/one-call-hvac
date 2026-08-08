# Structured Data And Rich-Result Implementation Report

## Run Status

- Canonical run: 26
- Main SEO step: 17
- Phase: implementation
- Status: validated locally
- Pre-execution rundown: delivered before the first write
- Search Console and Analytics: intentionally skipped because no project material exists
- Deployment, external validator submission, DNS, redirects, commit, or push action: none

## Scope And Inputs

This run inspected every JSON-LD builder, renderer, route injection point, visible breadcrumb, service-area source, site and contact constant, logo asset, metadata definition, prior rich-result readiness decision, and generated-output validation contract.

The existing server-rendered graph contained:

- one homepage `WebSite` node linked to one Organization publisher;
- one homepage `Organization` node with name, canonical URL, logo, telephone, email, contact point, and seven visible counties;
- one visible-breadcrumb-matched `BreadcrumbList` on services, about, location, and contact;
- one `/location` `Service` node linked to the Organization, seven visible counties, 41 visible cities, the contact route, and the public phone number;
- safe JSON-LD serialization that escapes opening angle brackets before embedding data in HTML.

## Official Guidance Applied

Google recommends placing Organization data on the homepage or one organization page, using only applicable facts, and providing a crawlable representative logo at least 112×112 pixels. An `ImageObject` must provide a valid `url` or `contentUrl`. [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)

Google supports `BreadcrumbList` when each list item supplies its required position and visible name/item relationship. A valid breadcrumb may be eligible without being guaranteed to appear. [Google Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)

Google LocalBusiness markup requires a real physical address and name. This repository does not establish a public storefront/hybrid address, so a LocalBusiness subtype cannot be implemented accurately. [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)

Google excludes self-serving Organization/LocalBusiness review snippets, including reviews placed directly on the reviewed entity's own site or through a third-party widget, and says ratings must not be editorially compiled. The manually maintained Google review excerpts are therefore not a review-rich-result source. [Google Review snippet guidance](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

Valid markup and passing a validator do not guarantee enhanced search appearance. Structured data must remain visible-content-aligned and policy-compliant. [Google structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

## Eligibility And Implementation Matrix

| Type or feature | Visible/source support | Google appearance status | Decision |
|---|---|---|---|
| `Organization` | Brand, description, logo, phone, email, contact path, and seven counties are present in source/visible pages | Supported organization identity input | Strengthen and keep on homepage |
| `WebSite` | Canonical homepage and consistent site name | Site-name identity input, not a promised rich result | Preserve one homepage node |
| `BreadcrumbList` | Visible two-level breadcrumbs on four completed leaf pages | Supported rich-result candidate | Preserve and add stable IDs |
| `Service` | `/location` visibly lists the provider relationship, seven counties, 41 cities, phone, and request route | Valid Schema.org context; not treated as a Google rich-result target | Preserve as contextual entity data |
| `LocalBusiness` / `HVACBusiness` | No verified public physical address, storefront/hybrid model, hours, or Business Profile relationship | Required facts unavailable | Do not add |
| `Review` / `AggregateRating` | Manually copied third-party reviews about this same business | Self-serving review snippets are ineligible | Do not add |
| `FAQPage` | Visible homepage FAQ exists | Not a current Google FAQ rich-result target for this business | Do not add |
| `Article` / `BlogPosting` | No article route, author, publication date, or editorial workflow | Page type does not match | Do not add |
| `SearchAction` | No supported sitelinks-search-box surface or site-search product | No current appearance target | Do not add |
| Event, Product, Video, Job, Recipe, Course | No matching page or maintained source model | Not applicable | Do not add |

## Implementation

### Centralized Site And Logo Facts

The existing homepage description and logo asset contract were centralized in `src/config/site.ts` and reused by:

- root metadata;
- homepage page metadata;
- Organization JSON-LD.

The visible wording did not change. This removes three opportunities for description or logo-path drift.

### Organization Logo And Description

The Organization now includes:

- the existing owner-operated northern Utah service description;
- one stable logo node ID;
- canonical `url` and `contentUrl` values;
- verified 1051×718 source dimensions.

The asset exceeds Google's minimum logo dimensions and remains a tracked, crawlable public PNG. The step-16 square-favicon issue is separate: a search favicon must be square, while the Organization logo guidance does not impose that same 1:1 rule.

### Breadcrumb Entity IDs

Each breadcrumb builder now derives one canonical page URL and emits a stable ID such as:

```text
https://utahonecall.com/location#breadcrumb
```

The required two-item visible hierarchy, names, positions, and items remain unchanged.

### Drift Guards

Focused tests now protect:

- the Organization description and complete logo ImageObject;
- stable Organization, WebSite, logo, Service, and breadcrumb IDs;
- seven counties and 41 cities on the location entity;
- the absence of guessed PostalAddress, LocalBusiness, coordinates, self-serving Review/AggregateRating, FAQPage, Article, and SearchAction data;
- angle-bracket escaping during JSON-LD serialization.

## Visible-Content Parity

| JSON-LD fact | Visible/source parity |
|---|---|
| Site and Organization name | Shared `SITE_NAME` and visible global brand |
| Organization description | Existing homepage metadata and visible owner-operated service summary |
| Phone and email | Shared contact constants and visible contact surfaces |
| Seven counties | Canonical location data and visible `/location` directory |
| 41 cities | Canonical location data and visible `/location` directory |
| Contact URL | Public `/contact` route and request form |
| Breadcrumb labels | Visible breadcrumb navigation on the same four routes |
| Logo | Public PNG used visibly in site headers/footers |

## Hidden Assumptions And Edge Cases

- The public Gmail address is already a visible configured contact fact, but its long-term branding suitability remains owner-controlled.
- A stable `@id` connects entities; it does not create a new crawlable route or visible anchor requirement.
- The Service entity is preserved for factual machine-readable context and must not be reported as a Google Service rich result.
- Organization logo and search favicon requirements are different; the wide logo can satisfy the former while failing the latter's square requirement.
- A future public address does not automatically authorize LocalBusiness markup; storefront/service-area status and visible parity must also be resolved.
- Review text visible on the site does not make self-serving review-star markup eligible.
- Production remains behind the local repository until deployed, so external validators currently cannot inspect this implementation at the canonical URLs.

## Protected Decisions

- Preserved every existing schema type, route injection point, visible breadcrumb, entity relationship, and service-area fact.
- Preserved routes, UI, metadata wording, indexability, sitemap, robots, reviews, forms, and public claims.
- Added no address, hours, coordinates, rating, alternate name, social profile, founding date, license, credential, price, article author/date, or site-search action.
- Added no dependency, client component, state, effect, fetch, or dynamic schema injection.
- Preserved unrelated working-tree changes.

## Validation

- Focused Vitest: 4 files, 11 tests passed.
- Strict TypeScript: passed.
- Full Vitest: 23 files, 60 tests passed.
- ESLint: passed.
- Next.js 16.3/OpenNext Cloudflare production build: passed; all intended pages were prerendered and the logo asset was packaged.
- Generated JSON-LD parsing: passed for all six blocks across the five indexable pages.
- Generated type/ID inventory: homepage `WebSite` and `Organization`; one stable-ID `BreadcrumbList` on services, about, location, and contact; one stable-ID `Service` on location.
- Generated Organization logo contract: canonical URL/content URL, stable ID, and 1051×718 dimensions passed.
- Generated exclusion check: no LocalBusiness, Review, AggregateRating, FAQPage, Article, or SearchAction on the five indexable pages.
- Three-artifact integrity, cross-document status agreement, and `git diff --check`: passed.
- Browser QA was intentionally skipped because no visible layout or interaction changed; generated HTML was inspected directly.
- Search Console and external Rich Results Test checks are deferred until the current build is deployed.

## Supporting Outputs

- [Implementation summary](./17_STRUCTURED_DATA_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./17_STRUCTURED_DATA_HUMAN_TODO.md)
- [Step 16 readiness report](./16_SEARCH_APPEARANCE_REPORT.md)
- [Route inventory](./support/ROUTE_INVENTORY.md)
- [Project subpage brief](./support/repo-context/PROJECT_SUBPAGE_BRIEF.md)
