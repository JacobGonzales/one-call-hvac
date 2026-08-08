# One Call Heating & Air Search Everywhere Strategy

## Scope And Evidence

This is the detailed report for canonical run 10 / main SEO step 04. It evaluates the complete modern search journey—discovery, understanding, comparison, trust, interaction, conversion, and follow-up—without inventing traffic, listings, rankings, conversion rates, or business authority.

Evidence inspected:

- All seven public Next.js routes and the five completed indexable page compositions
- Metadata, canonicals, sitemap, robots, structured data, FAQs, service guide, service-area data, reviews, navigation, phone/email links, and inquiry workflow
- Prior SEO, metadata, AI-search, route, integration, content-gap, and internal-link reports
- Read-only HTTP responses and canonical tags from both known business domains on 2026-08-06
- Current official guidance from [Google Business Profile on local ranking](https://support.google.com/business/answer/7091), [Google on representing a business accurately](https://support.google.com/business/answer/3038177), [Bing Places for Business](https://www.bing.com/forbusiness/), and [Apple Business Connect](https://businessconnect.apple.com/)
- No Search Console, Analytics, Business Profile export, listing-ownership record, voice-query study, AI-referral report, call tracking, or conversion evidence was available

Google documents that local results are mainly based on relevance, distance, and prominence, and recommends verified, complete, accurate business information plus review and photo management. Bing and Apple provide separate business-listing ownership systems. These sources support an accuracy-first cross-surface plan; they do not guarantee rank, citation, traffic, or conversion.

## Executive Finding

The repository now has a strong on-site journey baseline: searchers can understand the business, compare four service paths, verify a listed service area, review public feedback, and call or submit a request. The largest modern-search risk is outside the application:

- `https://utahonecall.com` returns the current Next.js site with a self-canonical.
- `https://onecallheatingandair.com` still returns a separate Vercel-hosted 200 page with its own self-canonical.
- A web search currently discovers the older domain for the brand.

This is not a harmless alias. Two live self-canonical domains presenting the same business can split discovery, links, entity references, and user trust. The old host should receive a reviewed path-level permanent redirect plan to the new canonical domain. This repository controls only the Cloudflare target for `utahonecall.com`, so the old Vercel/domain configuration requires owner access.

## Modern Search Journey

| Stage | Current on-site support | Implemented in this run | Remaining gap |
|---|---|---|---|
| Discovery | Five indexable routes, sitemap, canonicals, crawl permission, global navigation | Preserved | Old self-canonical domain competes with the new domain; listing ownership unknown |
| Understanding | Route-specific metadata, visible headings, factual baseline schema, services and geography | Improved hero/coverage region semantics | Richer entity facts require verified business records |
| Comparison | Four-option service guide and detailed install/repair/service/maintenance sections | Preserved | No evidence-backed system or competitor comparison content yet |
| Trust | Owner story, contact information, manual Google review excerpts | Centralized remaining footer email | Credentials, hours, listing ownership, review freshness, and direct review URL need verification |
| Interaction | Breadcrumbs, contextual links, service anchors, map, phone, email | Converted three visible breadcrumbs to semantic navigation | Social and emergency routes remain thin placeholders |
| Conversion | Phone CTAs, quote form, service CTAs, mobile sticky actions | About/contact service-area summaries now link to the complete directory | No conversion or call-quality measurement exists |
| Follow-up refinement | Manual input/TODO systems and suite ledger | Added a cross-surface evidence plan | Search Console, listing insights, Analytics, call outcomes, and citation observations are absent |

## Implemented Repository Fixes

### Contextual Service-Area Journeys

- Added direct `View all 41 communities` links from the about and contact coverage sections to `/location`.
- Derived the displayed count from the canonical location data instead of duplicating it in component copy.
- Preserved the existing partial about list, complete contact chips, layout, and service-area claims.

This lets location-intent visitors move from trust or conversion pages to the full county-by-county answer without returning to global navigation.

### Search And Voice-Friendly Semantics

- Converted services, about, and contact breadcrumbs from generic containers to labeled navigation regions.
- Connected the services, about, and contact hero regions to their visible H1 headings.
- Connected about/contact coverage regions to their visible H2 headings.

These changes improve document relationships for assistive technology and machine extraction while leaving visible copy unchanged. No hidden voice-only or AI-only content was added.

### Cross-Page Business Detail Consistency

- Replaced the homepage footer's remaining hardcoded email text with the shared `EMAIL` constant.
- Preserved the actual public address, mail link, and inquiry recipient behavior.

This reduces future drift when a public contact fact changes.

## Surface Strategy

### Traditional Search

- Keep the five completed routes indexable and the two thin placeholders `noindex, follow`.
- Preserve descriptive metadata, canonical URLs, sitemap ownership, internal service anchors, and factual schema.
- Resolve the legacy-domain conflict before building more authority to the new domain.
- Use future Search Console evidence to identify real entry pages and weak query/page matches.

### Google Search And Maps

- Claim or verify one eligible Business Profile representing the real-world business.
- Confirm whether the business is service-area-only, storefront, or hybrid before publishing an address.
- Keep business name, phone, website, category, hours, and service areas consistent with approved records.
- Replace the current Google search URL used for `Leave a Review` with an approved direct review URL only after the profile is verified.
- Maintain genuine reviews and responses; do not add review schema merely because excerpts are displayed on the site.

### Bing And Microsoft Surfaces

- Claim or create the Bing Places listing, complete it with the same approved facts, and verify ownership.
- Use the new canonical website after the domain migration is settled.
- Do not import unreviewed or stale facts from another listing without confirming them first.

### Apple Maps And Voice Surfaces

- Claim the location/service-area presence through Apple Business Connect if eligible.
- Use the same approved name, phone, hours, website, category, and location/service-area model.
- Treat voice discovery as a business-data consistency and answer-clarity problem, not a reason to create repetitive question pages.

### AI And Agentic Discovery

- Preserve public crawl access and the explicit OAI-SearchBot policy from run 09.
- Keep visible answer blocks concise and source-backed.
- Resolve competing domains and off-site entity inconsistencies because assistants may encounter either source.
- Maintain the citation observation log from `MODERN_SEARCH_MANUAL_INPUTS.md`; do not treat a single prompt result as a stable rank.

### Reviews And Social

- Manual review excerpts remain a trust aid but are not a live feed or schema source.
- The displayed total and relative dates require a refresh owner.
- The social route remains `noindex` until approved profiles or durable content exist.
- Do not create profiles, posts, directory listings, or review requests without owner access and an approved public fact record.

## Query And Next-Action Map

| Query style | Best current destination | Expected next action | Gap |
|---|---|---|---|
| Branded company query | `/` or `/about` | Verify company, reviews, and contact paths | Older domain can intercept the journey |
| What HVAC services are offered? | `/services` | Choose install, repair, tune-up, or maintenance | Evidence-backed deeper comparison is later work |
| Do you serve my city/county? | `/location` | Confirm listed community, then contact/call | Listing service areas still require owner verification |
| Furnace/AC stopped working | `/services#repair` or phone | Call or request service | `/emergency` remains thin and noindex |
| New/replacement equipment | `/services#install` | Request install quote | Price/incentive claims require verification |
| Who owns or operates the company? | `/about` | Review owner story, feedback, and CTA | Credential/business-record proof is absent |
| How do I request service? | `/contact` | Call, email, or submit quote form | No post-click conversion evidence |
| Near-me / map query | Verified external listing | Call, website visit, directions/service-area confirmation | Listing ownership and accuracy not evidenced |

## Conversion And UX Guardrails

- Maintain phone and form alternatives on every commercial journey.
- Keep urgent phone actions separate from routine quote requests.
- Do not add friction, forced account creation, popups, or hidden content for search purposes.
- Do not make the emergency placeholder indexable merely to target urgent keywords.
- Preserve form validation, honeypot, request-size limits, Resend delivery, and safe fallback errors.
- Use contextual internal links when they answer the next user question; avoid repetitive keyword-stuffed link blocks.

## Measurement And Refinement Plan

1. Resolve domain ownership and redirect mapping first.
2. Verify Google, Bing, and Apple listings using one approved business fact record.
3. Configure Search Console for the canonical domain and submit the sitemap.
4. Export Google Business Profile performance after sufficient data exists.
5. If analytics is approved, define privacy/consent and conversion events before installation.
6. Track call/form outcomes by landing page without exposing customer data.
7. Run a small recurring set of branded, service, local, AI, and voice-style observations with date/location recorded.
8. Feed real findings into later content, local SEO, internal architecture, and citation handoffs.

## Exceptions And Risks

- The old-domain conflict is externally observable but cannot be corrected safely from the current Cloudflare-only repository configuration.
- Both domains currently self-canonicalize; canonical tags are not a substitute for permanent redirects during a real domain move.
- Google Maps/review links are search URLs, not verified canonical profile or direct-review URLs.
- No listing ownership, hours, address model, category, credential, or service-area record was verified.
- No Search Console, Analytics, listing-insight, call, form, voice, or AI citation performance evidence exists.
- Existing price, incentive, response-time, credential, permit, warranty, and benefit claims remain unverified.
- Search engines and assistants may ignore technically correct signals; no visibility or conversion gain is claimed.

## Validation Status

The implementation is validated:

- `src/screens/SearchJourneySections.test.tsx`
- `src/screens/location/LocationHeroSection.test.tsx`
- `src/config/site-navigation.test.ts`
- 8/8 targeted tests passed after the lint correction
- 38/38 full-suite tests passed across 18 files
- Strict TypeScript passed
- ESLint passed
- Next.js 16.3/OpenNext Cloudflare production build passed
- Generated HTML and desktop/mobile browser journey checks passed
- `git diff --check` passed

## Keyword Planner Reconciliation Update

The later ranked Planner map now supplies demand-priority evidence for service discovery, but it does not supply Search Console, Analytics, voice, maps, AI-citation, or conversion performance. The fixed eight-route plan assigns service queries to `/services`, local eligibility to `/location`, and urgent queries to `/emergency`; no additional URL or navigation destination was created. Additive page sections provide natural search and assistant context while preserving existing journeys and action wording.
