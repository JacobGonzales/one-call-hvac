# Local SEO And Location Signals Report

## Run Status

- Canonical run: 16
- Main SEO step: 10
- Phase: implementation
- Status: validated locally
- Pre-execution rundown: delivered before the first write
- Search Console input: unavailable and skipped by prior owner direction
- Deployment or external mutation: none

## Scope And Evidence

This pass inspected the five indexable routes, page metadata, visible headings, location-directory data, contact cards, footer variants, organization and breadcrumb structured data, Google Maps/review links, sitemap and robots policy, prior SEO reports, and the suite ledger.

The repository provides a source-backed local baseline:

- One Call Heating & Air is visibly described as based in Brigham City, Utah.
- `/location` lists 41 communities in seven northern Utah counties.
- The site exposes the same phone and email across conversion and footer surfaces.
- Homepage, About, Services, Location, and Contact content use consistent northern-Utah language.
- The location page is indexable, canonical, included in the sitemap, and linked globally as `Service Area`.

Google guidance was checked against the current [LocalBusiness structured-data documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) and [Business Profile service-area guidelines](https://support.google.com/business/answer/3038177). Google requires a physical address for its supported LocalBusiness result and tells service-area businesses that do not receive customers at their address to hide that address. The repository does not establish a verified public street address or storefront, so this run did not invent either.

## Signal Audit

| Signal | Evidence | Assessment | Decision |
|---|---|---|---|
| Business identity | Shared name, canonical domain, phone, email, and logo | Consistent | Reused in Organization data |
| Home base | Brigham City appears in hero, contact, footer, and metadata copy | Strong visible signal | Preserved without adding an address |
| Service area | 41 cities grouped under seven counties | Strong and specific | Connected to structured data |
| Contact access | Phone, email, form, and route-confirmation paths | Strong | Preserved |
| Metadata/heading alignment | Northern Utah and HVAC context appear in title, description, eyebrow, H1 support copy, and county heading | Healthy | No speculative rewrite |
| Location page | Canonical, indexable directory with breadcrumb and conversion paths | Healthy | Added page-matched Service JSON-LD |
| LocalBusiness eligibility | No verified street address or storefront status | Incomplete | LocalBusiness markup intentionally omitted |
| Business Profile | Google Maps search URLs exist, but no owned profile URL or verified profile facts exist | External gap | Recorded for owner verification |

## Implementation

### Organization Entity

The existing homepage `Organization` now includes only already-visible facts:

- public email;
- seven county-level `areaServed` entries;
- one customer-service `ContactPoint` using the public phone and email;
- northern Utah as the contact coverage area;
- English as the available contact language.

The stable `https://utahonecall.com/#organization` identifier remains unchanged.

### Service-Area Entity

The location page now publishes a separate `Service` entity with:

- a stable `/location#service-area` identifier;
- HVAC service type and canonical location URL;
- the existing organization as provider;
- seven `AdministrativeArea` county entries;
- 41 contained `City` entries matching the visible directory;
- the existing contact route and public phone as the available service channel.

This markup describes page-visible coverage. It does not create city landing pages, promise availability for a specific address, or assert a physical shop.

### Visible Storefront Semantics

All four duplicated footer variants now label the Brigham City/county block `Service Area` instead of `Shop`. This removes an unsupported storefront implication while preserving every location, phone, email, and link.

## Protected Decisions

- No `LocalBusiness`, `HVACBusiness`, `PostalAddress`, `GeoCoordinates`, opening-hours, license, social-profile, rating, or review markup was added.
- No title, description, H1, canonical, sitemap, robots, indexability, route, city, county, form, review, price, emergency, or credential claim changed.
- No per-city doorway pages were created.
- No Google Business Profile, directory, deployment, secret, or external listing was changed.

## Validation Evidence

- Focused Vitest: 4 files, 11 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Full Vitest: 22 files, 54 tests passed.
- OpenNext Cloudflare build: passed with Next.js 16.3.0 and OpenNext Cloudflare 1.19.11.
- Generated homepage HTML contains the seven organization service areas and public contact point.
- Generated `/location` HTML contains the Service entity, seven counties, 41 cities, provider relationship, and contact channel.
- Generated JSON-LD contains no `LocalBusiness`, `PostalAddress`, street address, or coordinates.
- In-app browser QA passed at 1280×720 with no horizontal overflow, relevant console warning/error, or framework overlay.
- `/location` Request Service navigation reached the complete `/contact` quote form and returned successfully.
- Rendered footer inspection confirmed `Service Area` and no remaining `Shop` label.

## Risks And Exceptions

- The service-area inventory is repository evidence, not independent proof that every address can be scheduled.
- Google Business Profile ownership, category, configured service areas, phone, hours, and public website URL were not accessible.
- A future verified storefront or hybrid-business fact set may justify complete `LocalBusiness` markup; incomplete address markup should not be added now.
- Existing business-hours, emergency, license, insurance, permit, pricing, warranty, rebate, and review claims still require owner verification.
- Production output remains unverified until an authorized deployment.

## Supporting Artifacts

- [Implementation summary](./10_LOCAL_SEO_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./10_LOCAL_SEO_HUMAN_TODO.md)
- [Page content gaps](./support/PAGE_CONTENT_GAPS.md)
- [Project subpage brief](./support/repo-context/PROJECT_SUBPAGE_BRIEF.md)

## Keyword Planner Reconciliation Update

The ranked source includes strong `near me` families but does not identify the export geography. It therefore does not establish Salt Lake City, county, or northern-Utah search volumes. `/location` keeps its confirmed seven-county and 41-community eligibility role and adds natural HVAC/AC/furnace/heat-pump route language. No city pages were created, and no city-specific demand claim was made. Google Business Profile and service-area-versus-hybrid verification remain outstanding.
