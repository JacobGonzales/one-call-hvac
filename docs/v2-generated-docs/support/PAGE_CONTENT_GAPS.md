# Page Content Gaps

## Status Key

- `implemented`: resolved in canonical run 04 or a later source-backed handoff.
- `owner_input`: requires approved business facts or a lifecycle decision.
- `later_handoff`: valid gap assigned to a later SEO/content/architecture step.

| Priority | Route/system | Gap | Status | Safe next action |
|---|---|---|---|---|
| Critical | Domain migration | `onecallheatingandair.com` and `utahonecall.com` both return independent 200 pages; `www.utahonecall.com` does not resolve | `owner_input` | Configure path-preserving permanent legacy redirects and decide whether `www` should resolve and redirect to the apex |
| Critical | Production discovery files | Live `robots.txt` and `sitemap.xml` return 404 even though both are generated and return 200 in the current local OpenNext build | `owner_input` | Deploy the current repository state, clear/refresh edge caches if needed, and run the handoff 15 post-deploy crawl contract |
| High | `/emergency` | Conversion-critical route is only a thin placeholder | `owner_input` | Approve emergency service scope, availability, response wording, safety guidance, and full page content; retain noindex until complete |
| Medium | `/about/social-media` | Placeholder has no approved social destinations or durable updates | `owner_input` | Supply approved profile URLs/content or remove/de-emphasize the route |
| High | Marketing claims | Prices, discounts, response times, licensing/insurance, permits, warranty, tax-credit, and incentive claims are not independently evidenced by this handoff | `owner_input` | Verify each claim against current business records and terms before SEO expansion |
| High | Financing | No approved provider, application URL, eligibility, rates, terms, or disclosure language exists in repository evidence | `owner_input` | Confirm that financing is unavailable or supply the complete provider-approved public contract |
| Medium | Entity/service-area schema | Organization contact and seven-county coverage connect to a page-matched `/location` Service entity with all 41 visible cities | `implemented` | Preserve the stable entity IDs, centralized description/logo contract, and visible location-directory parity |
| Medium | Structured-data drift | Existing guards covered false storefront facts but not self-serving reviews, FAQ, Article, SearchAction, logo identity, or breadcrumb IDs | `implemented` | Preserve the expanded eligibility-boundary tests and rerun the supported-feature review when Google policy or page types change |
| High | LocalBusiness/storefront eligibility | No verified public street address, storefront/hybrid status, owned Business Profile URL, or approved public hours exists | `owner_input` | Confirm service-area versus hybrid status; add complete LocalBusiness markup only if public address eligibility is established |
| Medium | Competitive pattern extraction | No approved competitor targets, comparable page captures, extraction surface, taxonomy, or grouped observations exist | `owner_input` | Supply two approved competitors and stable comparable-page captures before implementing extraction tooling |
| High | Backlink and off-page evidence | No dated backlink, referring-domain, anchor, profile/directory, reputation, mention, or comparable competitor exports exist | `owner_input` | Supply the evidence contract defined by handoff 13 before scoring opportunities or authorizing external work |
| High | AI visibility and citation evidence | No dated AI-answer observations, cited URLs, approved competitor set, competitor cited-source dataset, or production crawler verification exists | `owner_input` | Complete the handoff 14.5 observation and crawler worksheets before making visibility, citation-pattern, or competitor-led content conclusions |
| Medium | `/about` citation support | Public company/contact/coverage facts were distributed across sections and routes without a concise sourced reference | `implemented` | Preserve the shared-data fact sheet, source paths, and reviewed-date maintenance contract |
| Medium | `/services` resource support | Comparisons and approval guidance lacked a stable glossary/pre-call reference target | `implemented` | Preserve `#service-planning-checklist`, its safety boundary, source note, and shared service definitions |
| Medium | Sitemap route ownership | Sitemap membership duplicated metadata-owned indexability and could drift on a future route change | `implemented` | Preserve `INDEXABLE_PAGE_PATHS`, its parity/output-shape tests, and the URL-only extension policy until maintained source data justifies a change |
| High | Shared page reveals | Major page sections were prerendered at zero opacity until JavaScript activated the in-view animation | `implemented` | Preserve visible server snapshots and keep motion as progressive enhancement |
| Medium | Homepage hero loading | All three large carousel backgrounds were requested eagerly during initial page load | `implemented` | Prioritize only the initial slide and keep later backgrounds lazy while preserving carousel behavior |
| Medium | Social previews | Route metadata lacked a preferred large image and used the small Twitter card | `implemented` | Preserve the centralized 1672×941 preview contract; replace it only with approved, maintained route-specific creative |
| High | Search favicon | Root icon metadata points to a 1051×718 wide logo rather than a square favicon | `owner_input` | Supply an approved square brand mark at least 48×48 pixels and update root metadata without inventing artwork |
| Medium | About/contact/location data | Service-area lists have multiple source arrays that can drift | `later_handoff` | Consolidate data ownership during architecture work without changing approved coverage |
| Low | Footer variants | Four visual footer components duplicate layout/copy | `later_handoff` | Keep shared route data centralized now; consider a visual shell contract during page architecture |
| Medium | `/location` | Full indexable service-area page lacked a breadcrumb | `implemented` | Covered by `LocationHeroSection` and its targeted test |
| Medium | Global footers | Completed service-area page was omitted from company links | `implemented` | Shared footer company links now include `/location` |
| Medium | About/contact coverage journeys | Partial/summary service-area sections relied on global navigation to reach the complete directory | `implemented` | Both sections now link contextually to `/location` using the canonical 41-community count |
| Low | Internal navigation | Several internal CTAs and route-owned footer links used plain anchors | `implemented` | Internal destinations now use the shared Next-aware `Link` component |
| Medium | `/services` decision depth | Service lanes lacked concise fit and immediate expectation guidance | `implemented` | All four data-driven service blocks now expose semantic `Best fit when` and `What to expect` answers |
| Medium | `/services` approval guidance | Visitors had no neutral checklist for evaluating a recommendation and written quote | `implemented` | The visible decision guide now connects findings, repair/replacement scope, inclusions, and next steps |
| Low | Homepage pricing discovery | Published prices had no stable contextual deep-link target | `implemented` | `/#pricing` is a named, sticky-header-safe target linked from the services decision guide |
| Low | Visible entity naming | An About-page sentence did not use the canonical `One Call Heating & Air` spelling | `implemented` | The sentence now renders `SITE_NAME` from shared configuration |
| Medium | Leaf-page journeys | Completed service, about, location, and contact pages relied too heavily on global navigation for supporting answers | `implemented` | Typed `PAGE_JOURNEYS` now drive one reusable related-page section with three intent-matched destinations per page |
| Low | Homepage FAQ discovery | Visible FAQ content had no stable internal-link target | `implemented` | `/#faq` is now a named, sticky-header-safe support target used by services and location journeys |
| Medium | Snippet-ready summary | Service, equipment, and coverage answers were distributed across multiple homepage sections | `implemented` | An always-visible question, concise answer, and three-item definition list now precede the FAQ accordion |
| Low | FAQ deep-link stability | Reviews and the service-area map above `/#faq` could shift the mobile target after navigation | `implemented` | FAQ now appears directly after the process section and before dynamic review/map content |

## Do Not Infer

- A city in the current list does not authorize a unique city landing page.
- A service named in copy does not establish an approved price, availability window, license, warranty, rebate, or tax result.
- A manually copied review does not establish live review count, review freshness, or review-schema eligibility.
- A sitemap entry does not establish that a page is complete enough for every later SEO tactic.
