# Project Subpage Brief

## Purpose And Authority

This is the repository-specific page brief for `one-call-hvac`. Later SEO, content, architecture, internal-linking, metadata, and structured-data handoffs should use it to preserve current route intent. The application source remains authoritative when this document and the code disagree.

Generated from the Next.js App Router source on 2026-08-06. No business fact should be added only because it appears as a recommendation in this brief.

## Business And Audience Baseline

Source-backed positioning currently presented by the application:

- Owner-operated heating and cooling company based in Brigham City, Utah.
- Residential and business service coverage across 41 named communities in Cache, Box Elder, Weber, Davis, Salt Lake, Rich, and Morgan Counties.
- Primary service lanes: system installation, repair, seasonal service/tune-ups, and maintenance membership.
- Equipment and job types named in source include furnaces, central air conditioning, heat pumps, mini-splits, thermostats, ductwork, and related diagnostics.
- Primary conversion actions are calling `(801) 864-2045`, requesting service through the quote form, or emailing the configured contact address.

Primary user groups inferred from visible page copy and conversion paths:

1. A homeowner or property operator with a no-heat/no-cool problem who needs an immediate phone path.
2. A replacement shopper comparing furnace, air-conditioner, heat-pump, or mini-split installation options.
3. A customer looking for seasonal tune-ups or the Gold Membership maintenance plan.
4. A northern Utah visitor confirming whether One Call reaches their city or county.
5. A trust-seeking visitor reviewing the owner story, operating values, and manually maintained Google review excerpts.

## Route Groups

### Indexable Marketing Pages

| Route | Page type | Primary intent | Current section contract | Primary actions |
|---|---|---|---|---|
| `/` | Homepage | Understand the company, service range, trust signals, and next action | Hero carousel; four service lanes; local-crew proof; pricing; process; visible quick answer and FAQ; reviews; service-area map; quote form; final CTA | Contact form, call, services, full service area |
| `/services` | Service overview | Compare install, repair, tune-up, and maintenance offerings | Hero and breadcrumb; situation-based anchored guide; four detailed service blocks with fit and expectation answers; approval decision guide; sourced planning reference; reviews; contextual next steps; bundle CTA | Planning checklist, FAQ, service area, About, published pricing, call, or request service |
| `/about` | Company/about | Evaluate ownership, people, values, and local accountability | Hero and breadcrumb; company manifesto; people; owner profile; values; sourced company fact sheet; reviews; service-area summary; CTA | Fact sources, full service area, request service, or call |
| `/location` | Service-area overview | Confirm county/city coverage and request scheduling | Hero and breadcrumb; seven-county/41-community inventory; callout; reviews | Request service or call |
| `/contact` | Contact/conversion | Call, email, or submit a service request | Hero and breadcrumb; contact details; Resend-backed free quote form; reviews; service-area summary | Submit inquiry, full service area, call, or email |

### Noindex Public Placeholders

| Route | Current intent | Current state | Required lifecycle decision |
|---|---|---|---|
| `/emergency` | Immediate emergency HVAC contact | Thin call-first placeholder plus reviews; canonical present; `noindex, follow`; excluded from sitemap | Keep as a utility landing page while thin, or approve complete emergency content before indexing |
| `/about/social-media` | Social/community updates | Thin contact-first placeholder plus reviews; canonical present; `noindex, follow`; excluded from sitemap | Supply approved social profiles/content or remove/de-emphasize the route |

Noindex does not make these routes private. They remain reachable from the primary navigation and may be followed by users and crawlers.

### Error, API, And Generated Routes

| Route | Type | Contract |
|---|---|---|
| `/404` | Explicit error page | Branded recovery page; `noindex, nofollow`; home and phone actions |
| Unmatched path | Framework not-found | Real HTTP 404 with branded content and framework noindex behavior |
| `/api/inquiries` | POST API | Validate/sanitize inquiry data, filter honeypot submissions, deliver through Resend, and return safe fallback errors; never sitemap or navigation content |
| `/robots.txt` | Generated metadata route | Allow public content, explicitly allow OAI-SearchBot, disallow `/api/`, and advertise canonical sitemap and host |
| `/sitemap.xml` | Generated metadata route | List only the five completed indexable marketing pages |

There are no dynamic route families, authenticated/private pages, redirects, rewrites, or static-parameter generators in the inspected source.

## Page-Type Expectations

### Homepage

- Preserve one clear H1 and immediate call/quote actions.
- Introduce all major service lanes without duplicating the full services page.
- Provide proof, reviews, service-area discovery, common-question coverage, and a bottom-of-page quote path.
- Link contextually to `/services`, `/location`, and `/contact`.

### Service Overview

- Preserve the four anchored service lanes and stable fragment IDs: `#install`, `#repair`, `#service`, and `#maintenance`.
- Keep each lane's `Best fit when` and `What to expect` answers in the shared service data so visible guidance does not drift from its section.
- Preserve the neutral approval guide and its path to the published homepage pricing section at `/#pricing`.
- Preserve the stable `#service-planning-checklist` target, its four existing service definitions, pre-call checklist, safety boundary, source note, and reviewed date.
- Keep pricing, response-time, tax-credit, permit, warranty, and membership claims tied to owner-approved facts.
- Maintain a direct phone option for urgent work and a contact route for scheduled work.
- Do not convert the overview into unapproved individual service routes without a route/content plan.

### About

- Explain ownership, local operating model, people, values, and service geography.
- Keep the company fact sheet derived from shared contact/site values and canonical location counts; update its reviewed date only after checking the sources.
- Keep credentials and operating claims verifiable; source code currently contains licensing, insurance, permit, and response claims that require owner confirmation.
- Route visitors to contact and full service-area information.

### Service Area

- Treat `src/screens/location/location-data.ts` as the current canonical city/county inventory.
- Preserve the seven named counties and 41 named communities unless the owner approves a coverage change.
- Avoid converting every city into a location landing page without unique, useful local content and a route strategy.
- Provide a breadcrumb, service request, and call path.

### Contact

- Keep the form contract, server validation, honeypot, maximum request size, and Resend fallback behavior intact.
- Keep secrets server-only; only public/non-secret deployment values belong in tracked configuration.
- Provide alternate call and email paths if submission delivery is unavailable.

### Placeholder And Error Pages

- Placeholder pages should remain `noindex, follow` and outside the sitemap until substantively complete.
- Error pages must remain non-indexable and provide at least a home recovery action.
- A public primary-navigation link to a placeholder is an owner-visible lifecycle choice, not evidence that the page is complete.

### Rendered Content And Image Loading

- Shared `SectionReveal` wrappers must keep server-rendered content visible; scroll motion is progressive enhancement and must not make primary content depend on hydration.
- The homepage may prioritize its initially visible hero background, but noninitial carousel backgrounds should remain lazy loaded.
- Keep meaningful image alt text descriptive and decorative hero/CSS backgrounds semantically decorative.

## Metadata And Canonical Expectations

- `src/app/layout.tsx` owns `metadataBase`, default title/description, favicon, language, and the Node.js runtime.
- The single current language version declares `en-US`; Open Graph declares `en_US`. No `hreflang` is emitted because no alternate-language or regional equivalents exist.
- `src/config/page-metadata.ts` owns the typed title, description, path, indexability, and internal target-intent definition for each public content route.
- Each known marketing route retains an explicit metadata export and resolves its shared definition through `createPageMetadata`.
- Indexable pages explicitly allow indexing/following and unrestricted Google text/video plus large image previews. Placeholder pages retain `noindex, follow` without preview directives.
- Noindex routes must continue to opt out through the metadata helper rather than relying only on sitemap exclusion.
- New indexable routes must update the route entrypoint, `src/config/site.ts`, `src/config/page-metadata.ts`, appropriate navigation, sitemap policy, metadata tests, and this brief together.
- Open Graph and Twitter metadata is generated from each page definition and uses one centralized 1672×941 HVAC image as the default large preview; route-specific creative requires explicit approval and maintenance.
- Root favicon metadata still points to a wide logo. Replace it only after an approved square, small-size-legible brand asset exists.

## Structured-Data Expectations

The current baseline includes a homepage `WebSite`/`Organization` graph, stable-ID `BreadcrumbList` markup on services, about, location, and contact, and a page-matched `/location` `Service` entity. The Organization exposes the centralized site description, one stable logo ImageObject with canonical URL/content URL and verified dimensions, the public contact point, and seven county service areas; the Service entity connects those counties and all 41 visible cities to the same provider. `src/lib/structured-data.ts` owns the factual builders and `src/components/StructuredData.tsx` owns safe JSON-LD rendering.

Later-work expectations:

- Do not add `LocalBusiness`, `HVACBusiness`, `PostalAddress`, storefront, coordinate, hour, license, or social-profile facts until the public address/service-area model and supporting facts are verified.
- Service markup only for services visibly described on the corresponding page.
- BreadcrumbList only where the visible breadcrumb and route hierarchy agree.
- Keep FAQ markup absent while Google does not support an applicable FAQ rich result; visible FAQ content alone is not an implementation trigger.
- Keep Review and AggregateRating markup absent for the manually copied third-party reviews because self-serving Organization/LocalBusiness review snippets are ineligible under current Google policy.
- Treat the `/location` `Service` entity as valid contextual schema, not a promised Google Service rich result.

## Internal-Linking Contract

- `PrimaryNavigation` is the global route menu and currently exposes every public content route, including both noindex placeholders. Its `/location` anchor is labeled “Service Area” on desktop and mobile.
- Shared footer link data lives in `src/config/site-navigation.ts`; all footer visual variants must consume that data so service anchors and company routes do not drift.
- Internal routes use the shared `Link` component; phone, email, and true external URLs remain ordinary external anchors through that component or direct anchors.
- The footer must link to the completed `/location` page. The emergency and social placeholders are intentionally not added to footer company links while unfinished.
- Homepage service cards link to service anchors; the homepage service-area section links to `/location`; route CTAs link to `/contact` or the phone number.
- The services decision guide links to the named `/#pricing` section; the target must retain sticky-header-safe scroll spacing.
- About and contact service-area summaries link contextually to `/location` and derive the displayed 41-community count from canonical location data.
- Typed leaf-page journey data lives in `PAGE_JOURNEYS`; the reusable related-page section maps services, about, location, and contact to three unique next-question destinations each.
- `/#faq` and `/#pricing` are named, sticky-header-safe homepage support targets. Keep their constants and target IDs synchronized.
- Keep the FAQ before dynamic review and map content so the named cross-page target remains stable after mobile layout settles.

## Sitemap, Robots, And Indexability

- Sitemap: `/`, `/services`, `/about`, `/location`, `/contact` only.
- Robots: public crawl allowed; OAI-SearchBot is explicitly allowed; `/api/` remains disallowed; canonical host and sitemap are declared.
- Sitemap membership is derived from metadata-owned indexability through `INDEXABLE_PAGE_PATHS`; do not add a second hard-coded route list.
- Keep the current sitemap as one root-level, five-entry, URL-only XML file. Do not add a sitemap index, `lastmod`, priority/change frequency, image/video/news fields, feeds, or hreflang until the corresponding maintained content model exists and the handoff 15.5 contract is updated.
- AMP is not part of the application. Preserve one responsive canonical Next.js route set and do not create AMP variants without an explicit product/architecture decision and a fresh handoff 15.6 applicability review.
- Production verification on 2026-08-06 found `robots.txt` and `sitemap.xml` returning 404 and both placeholder pages missing the repository's noindex metadata, confirming that the deployed Worker is behind the local source/build.
- `www.utahonecall.com` did not resolve, while `onecallheatingandair.com` remained an independent Vercel 200 host; DNS and path-preserving permanent redirects are external follow-up.
- Noindex: `/emergency`, `/about/social-media`, `/404`, and framework not-found responses.
- Sitemap inclusion is not proof of content quality; sitemap exclusion is not access control.

## Known Gaps And Assumptions

- `onecallheatingandair.com` still returns a separate self-canonical Vercel page while `utahonecall.com` serves the canonical Cloudflare site; owner-managed permanent redirects are pending.
- No alternate-language or regional page set exists; locale expansion and reciprocal `hreflang` remain intentionally deferred.
- `/emergency` and `/about/social-media` are intentionally thin placeholders.
- Structured data now describes the verified service-area relationship but intentionally omits LocalBusiness/address/storefront facts pending owner evidence.
- Page-specific Open Graph/Twitter text descriptions and one shared large preview image are present; route-specific share creative remains optional future work.
- Complete favicon readiness remains blocked on an approved square brand asset; the current 1051×718 logo is not a 1:1 favicon source.
- City/service-area data is duplicated in about/contact data files in addition to the canonical location inventory, so future edits can drift.
- Four visual footer implementations remain duplicated even though their route data is now shared.
- Several high-specificity claims in marketing copy—pricing, emergency response timing, credentials, permits, warranties, tax incentives, and equipment eligibility—are present in source but were not independently verified by this handoff.
- Google reviews are manually maintained. Relative dates and the displayed total can become stale and should not be treated as live API evidence.
- No approved financing provider, destination, rates, terms, eligibility, or disclosures exist in repository evidence.
- No approved competitor set, captured competitor page corpus, extraction tooling, or pattern taxonomy exists; do not infer competitive patterns from first-party sections alone.
- No dated backlink, referring-domain, anchor, owned-profile, directory, reputation, mention, or competitor-link export exists; the five indexable pages can be target-mapped but must remain unscored until off-page evidence is supplied.
- The company fact sheet and planning reference are first-party sources, not independent verification; external users and future schema work must not treat their reviewed date as proof of unverified claims.

## Owner Confirmations Needed

- Confirm business/legal name, public address versus service-area-only status, public hours, license identifier, insurance wording, and approved social profiles.
- Confirm all displayed prices, discounts, diagnostic-waiver terms, warranties, response-time language, and incentive/tax-credit statements.
- Decide whether to complete, retain as noindex, or remove/de-emphasize each placeholder route.
- Confirm the 41-city/seven-county service inventory and whether business/commercial work is intentionally offered across all listed locations.
- Confirm the intended public inquiry recipient and whether the current Gmail address should remain public.

## Maintenance Rule

Refresh this brief when routes, page intent, service/location coverage, indexability, metadata/schema ownership, global navigation, or conversion workflows change. Prefer generating inventories from source in a later support iteration if the route count grows enough to make manual synchronization unreliable.
