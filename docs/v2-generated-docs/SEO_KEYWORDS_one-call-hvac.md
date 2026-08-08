# One Call Heating & Air SEO Baseline And Keyword Map

## Scope And Evidence

This is the detailed report and keyword-tracking artifact for canonical run 07 / main SEO step 01. It maps search intent to the current five indexable routes without inventing traffic, volume, rank, service scope, or new location pages.

Evidence inspected:

- Next.js route metadata, canonical helper, sitemap, robots, route tests, and not-found behavior
- Visible headings, service descriptions, FAQ copy, service-area data, navigation, and conversion paths
- The repository subpage brief, route inventory, content-gap notes, and current owner TODOs
- No Search Console or Analytics exports; both conditional inputs were skipped by user direction
- Current Google Search Central guidance for [SEO fundamentals](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [title links](https://developers.google.com/search/docs/appearance/title-link), [snippets and meta descriptions](https://developers.google.com/search/docs/appearance/snippet), [site names](https://developers.google.com/search/docs/appearance/site-names), [structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [Organization markup](https://developers.google.com/search/docs/appearance/structured-data/organization), [breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), and [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

Google documents that titles should be descriptive and concise, descriptions should be unique and page-specific, important pages should be logically linked, structured data must represent visible/accurate content, and sitemap priority/change-frequency values are ignored. Those principles informed the implementation; they do not provide keyword volume or ranking evidence.

## Current SEO State

| System | State after this run | Decision |
|---|---|---|
| Indexable routes | `/`, `/services`, `/about`, `/location`, `/contact` | Preserved |
| Noindex public routes | `/emergency`, `/about/social-media` | Preserved until complete |
| Canonicals | Explicit on all known public content routes | Preserved |
| Sitemap | Five completed indexable routes | Preserved; no unsupported priority/change-frequency fields added |
| Robots | Public content allowed; `/api/` disallowed; sitemap and host declared | Preserved |
| Titles/descriptions | Unique baseline existed; home, services, about, and contact targeting strengthened | Implemented |
| Open Graph/Twitter | Missing at route level | Implemented from each route’s existing title/description/canonical path |
| Site entity JSON-LD | Missing | Added factual `WebSite` and `Organization` graph to the homepage |
| Breadcrumb JSON-LD | Missing | Added to services, about, location, and contact where visible breadcrumbs exist |
| LocalBusiness data | Address, hours, legal identity, and license details unverified | Deferred |
| FAQ | Six visible, natural-language questions already cover major intents | Preserved; no FAQ rich-result markup added |
| Search/Analytics evidence | None | Keyword priorities remain hypotheses pending real data |

## Route Keyword Map

The terms below are targeting hypotheses based on current services and geography. They are not search-volume claims.

| Route | Primary target hypothesis | Supporting intent phrases | Search intent | Status |
|---|---|---|---|---|
| `/` | northern Utah HVAC service | HVAC contractor northern Utah; Brigham City HVAC; heating and cooling northern Utah; owner-operated HVAC | Local commercial investigation and service discovery | Active baseline |
| `/services` | HVAC installation and repair northern Utah | furnace repair; AC repair; heat pump installation; mini-split installation; HVAC tune-up; HVAC maintenance plan | Compare service capabilities and choose a service path | Active baseline |
| `/about` | Brigham City HVAC company | One Call Heating & Air; owner-operated HVAC company; local northern Utah HVAC team | Brand/entity trust and company evaluation | Active baseline |
| `/location` | northern Utah HVAC service area | HVAC service Salt Lake County; Davis County HVAC; Weber County HVAC; Box Elder County HVAC; Cache County HVAC; Morgan County HVAC; Rich County HVAC | Confirm geographic eligibility | Active baseline |
| `/contact` | request HVAC service northern Utah | schedule HVAC service; HVAC estimate; furnace service request; AC service request | Conversion/navigation | Active baseline |
| `/emergency` | emergency HVAC northern Utah | 24/7 furnace repair; no-heat repair; emergency AC repair | Urgent service | Deferred: placeholder/noindex |
| `/about/social-media` | One Call Heating & Air social media | project updates; community updates | Branded navigation | Deferred: placeholder/noindex |

## Service Intent Clusters

### Repair And Emergency

- furnace repair northern Utah
- furnace repair Brigham City
- AC repair northern Utah
- heat pump repair northern Utah
- no-heat HVAC repair
- no-cool HVAC repair
- emergency HVAC service

Current destination: `/services#repair`; urgent phone paths are already visible. A standalone emergency page should not become indexable until its approved content is complete.

### Installation And Replacement

- furnace installation northern Utah
- furnace replacement Brigham City
- AC installation northern Utah
- air conditioner replacement northern Utah
- heat pump installation northern Utah
- cold-climate heat pump Utah
- ductless mini-split installation northern Utah

Current destination: `/services#install`. Incentive, equipment, pricing, permit, and warranty statements require owner verification before expansion.

### Tune-Up And Maintenance

- HVAC tune-up northern Utah
- furnace tune-up northern Utah
- AC tune-up northern Utah
- seasonal HVAC maintenance
- HVAC maintenance plan northern Utah

Current destinations: `/services#service` and `/services#maintenance`.

### Local And Service-Area

- HVAC company Brigham City
- northern Utah HVAC contractor
- HVAC service Salt Lake City
- HVAC service Ogden
- HVAC service Logan
- HVAC service Layton
- HVAC service Bountiful
- HVAC service West Jordan
- HVAC service Sandy

Current destination: `/location`, supported by its county/city inventory. These phrases do not justify thin city landing pages. Any future city route needs unique local value, approved coverage facts, and an architecture/indexing plan.

## Page-Level Content Assessment

### Homepage

- Already names HVAC, furnace, AC, repair, installation, heat pumps, mini-splits, tune-ups, maintenance, northern Utah, and major service areas naturally.
- Existing FAQ questions align with emergency repair, installation cost, heat pumps, diagnostics, maintenance plans, and ductless systems.
- No visible copy was changed because several answers contain owner-specific pricing, response, incentive, and benefit claims that require verification.

### Services

- The four stable fragments provide clear intent separation without requiring new routes.
- Metadata now names installation and repair plus the main equipment categories.
- Future service-specific pages should be considered only after keyword evidence and sufficient unique content exist.

### About

- Supports brand/entity trust and local company intent.
- The title now distinguishes the page from a generic “About” result and includes the source-backed Brigham City context.
- License, insurance, permit, staffing, and owner-response claims remain visible but unverified by this run.

### Location

- Provides the strongest local coverage evidence: seven counties and 41 named communities.
- Existing title/description already match service-area intent and were preserved.
- Breadcrumb markup mirrors the visible Home / Service Area trail.

### Contact

- Metadata now describes both the equipment/service request and the urgent-call alternative.
- Form behavior and Resend delivery were unchanged.

## Structured-Data Decision Record

- Homepage: `WebSite` communicates the preferred site name; `Organization` supplies only name, URL, logo, and the consistently displayed phone number.
- Services, about, location, and contact: two-level `BreadcrumbList` mirrors visible page hierarchy.
- Not implemented: `LocalBusiness`/HVACBusiness address or hours, reviews/aggregate ratings, FAQ rich-result markup, service offers/prices, social profiles, or license identifiers.
- JSON-LD output escapes opening angle brackets before insertion and is covered by unit tests.

This deliberately follows Google’s guidance to prefer fewer accurate properties over incomplete or misleading markup.

## Measurement And Revisit Rules

1. Treat every non-branded priority as a hypothesis until Search Console or a reviewed keyword tool provides evidence.
2. After launch/data accumulation, record clicks, impressions, CTR, and average position by query and landing page.
3. Use Analytics only to assess post-click behavior; do not infer rankings from Analytics.
4. Revisit titles/descriptions during main SEO step 02, using this map plus any new evidence.
5. Revisit schema during step 17 after business identity and LocalBusiness facts are approved.
6. Avoid creating city or service routes solely to match a phrase.

## Exceptions And Risks

- At canonical run 07, no keyword volumes, ranking positions, traffic, conversions, competitor gap, or trend data were available. The later Planner update below now supplies volume/priority evidence only; organic ranking, traffic, conversion, competitor-gap, and location-specific evidence remain unavailable.
- Existing marketing copy includes facts this handoff did not independently verify.
- The two placeholder routes remain linked from primary navigation but intentionally noindex.
- A valid structured-data implementation does not guarantee a rich result.
- Search Console and Analytics support handoffs should be rerun when real exports exist.

## Validation

- Targeted metadata/schema tests: 4 files, 7 tests passed.
- Full Vitest suite: 15 files, 27 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Next.js 16.3/OpenNext Cloudflare production build: passed.
- Rendered output: homepage `WebSite`/`Organization`, four subpage breadcrumbs, canonical/social metadata, and placeholder `noindex, follow` were found in generated production HTML; placeholders contained no JSON-LD.
- `git diff --check`: passed.

## Keyword Planner Evidence Update — 2026-08-06

The later source `docs/content/keywords/SEO_KEYWORDS_ONE_CALL_HVAC_TIERED_RANKED.md` supersedes this report's earlier assumption that no reviewed volume/priority evidence existed. It contains a July 2025–June 2026 Keyword Planner map from 42 exports and 54,196 evaluated rows.

The Planner tiers are priority ranks, not One Call's organic Google positions, and the export geography is unspecified. The approved reconciliation therefore maps relevant Tier-1 service families into the existing eight-route scope instead of creating the suggested service URLs. `/services` owns the main repair/install/tune-up families, `/location` retains geographic eligibility, and `/emergency` retains urgent intent while noindex. See `KEYWORD_PLANNER_ROUTE_RECONCILIATION.md` and the refreshed page-architecture keyword matrices.
