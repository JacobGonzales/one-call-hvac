# Page Family Contract Matrix

## Status

- Canonical runs: 30 discovery; 33 bounded implementation
- Phase: implementation validated for the approved subset
- Application reorganization: route/breadcrumb adapters, focused client boundaries, and dedicated Emergency/Social Media families completed; visual shells preserved
- Route set: seven public content pages plus error behavior

## Route-To-Render Matrix

| Family | Route pattern | Runtime content owner | Retrieval / invalid input | Model builder | PageView / section order |
|---|---|---|---|---|---|
| Home | static `/` | `home-data.ts`; shared location data; site/contact/review facts | Direct imports; no slug. Invalid routes do not enter this page. | None required; no route transformation. | `HomePage` explicitly orders hero, reviews, services, crew, pricing, process, FAQ, service area, quote, CTA, and footer. |
| Services directory | static `/services` | `services-data.tsx`; shared site/navigation/review facts | Direct imports; section IDs are typed/static content keys rather than slugs. | None required. | `ServicesPage` explicitly orders hero, reviews, keyword content, TOC, four service sections, decision guide, planning reference, related links, bundle, and footer. |
| About | static `/about` | `about-data.ts`; canonical location data for counts/fact sheet; shared review/navigation facts | Direct imports; no slug. | None required. | `AboutPage` explicitly orders company hero, reviews, keyword content, people, Jesse, values, fact sheet, service area, related links, CTA, and footer. |
| Location / service area | static `/location` | `location-data.ts`; shared site/navigation/review facts | Direct imports; no city/county slug family exists. | `serviceAreaCityCount` is the only derived render fact; no page model required. | `LocationPage` explicitly orders hero, reviews, keyword content, county coverage, related links, and footer. |
| Contact / conversion | static `/contact` | `contact-data.ts`; `free-quote.ts`; site facts; review/navigation facts | Direct imports; form input is validated by focused client/server helpers. | No page model; form parsing/validation is deliberately separate. | `ContactPage` explicitly orders hero, keyword content, contact details and quote form, reviews, related links, service area, and footer. |
| Emergency | static `/emergency` | `emergency-data.ts`; shared site/review/navigation facts | Direct imports; no slug. | None required. | `EmergencyPage` explicitly orders hero, reviews, keyword content, urgent situations, response steps, related links, and footer. |
| Social Media / updates | static `/about/social-media` | `social-media-data.ts`; shared site/review/navigation facts | Direct imports; no slug. | None required. | `SocialMediaPage` explicitly orders hero, reviews, keyword content, update topics, homeowner checklist, related links, and footer. |
| Error / not found | static `/404` plus unmatched fallback | Unique inline copy in `NotFoundPage.tsx`; site phone/logo facts | Framework selects `not-found.tsx` for unmatched paths; no content lookup. | None required. | `NotFoundPage` explicitly renders logo, error code, explanation, home/call actions. |

## Metadata, Schema, Navigation, And Test Matrix

| Family | Final metadata | Required schemas | Breadcrumb / related-link source | Route and keyword identity | Primary contract tests |
|---|---|---|---|---|---|
| Home | `createPageMetadata(PAGE_METADATA.home)` | `createSiteStructuredData(countyServiceAreas)` | No visible breadcrumb; primary/footer links and route-owned sections | `/`; `PAGE_METADATA.home.targetKeywords` | hero carousel; metadata; structured data; reviews; navigation; content-depth and SERP suites |
| Services | `createPageMetadata(PAGE_METADATA.services)` | two-level BreadcrumbList | `PAGE_BREADCRUMBS.services` feeds visible/schema consumers; related links from `PAGE_JOURNEYS.services` | `/services`; route-keyed targets | service guide; search journey; metadata/schema; route catalog; related links; reviews |
| About | `createPageMetadata(PAGE_METADATA.about)` | two-level BreadcrumbList | `PAGE_BREADCRUMBS.about` feeds visible/schema consumers; related links from `PAGE_JOURNEYS.about` | `/about`; route-keyed targets | content-depth; search journey; metadata/schema; route catalog; related links; reviews |
| Location | `createPageMetadata(PAGE_METADATA.location)` | BreadcrumbList and Service area data | `PAGE_BREADCRUMBS.location` feeds visible/schema consumers; related links from `PAGE_JOURNEYS.location` | `/location`; route-keyed targets | location data; location hero; search journey; metadata/schema; route catalog; related links; reviews |
| Contact | `createPageMetadata(PAGE_METADATA.contact)` | two-level BreadcrumbList | `PAGE_BREADCRUMBS.contact` feeds visible/schema consumers; related links from `PAGE_JOURNEYS.contact` | `/contact`; route-keyed targets | quote form; inquiry API; search journey; metadata/schema; route catalog; related links; reviews |
| Emergency | `createPageMetadata(PAGE_METADATA.emergency)` | None | Hero breadcrumb; related links from `PAGE_JOURNEYS.emergency` | `/emergency`; route-keyed targets | completed-page order; metadata/indexability/sitemap; navigation; reviews |
| Social Media / updates | `createPageMetadata(PAGE_METADATA.socialMedia)` | None | Hero breadcrumb; related links from `PAGE_JOURNEYS.socialMedia` | `/about/social-media`; route-keyed targets | completed-page order; metadata/indexability/sitemap; navigation; reviews |
| Error | `/404` owns explicit `noindex, nofollow`; unmatched uses framework metadata behavior | None | No breadcrumb or contextual links; home/call actions only | no keyword strategy required | route inventory and generated not-found checks; no focused component test today |

## Required Question Dispositions

1. **Route resolution:** static App Router entrypoints; no dynamic patterns.
2. **Content ownership:** route `*-data` files where content is substantial; two bounded unique inline sources remain.
3. **Lookup helper:** unnecessary because all content routes are static and directly composed.
4. **Page-model builder:** unnecessary because there is no server retrieval or multi-source transformation requiring one.
5. **PageView:** existing `*Page` components already own explicit JSX order.
6. **Metadata helper:** one shared `createPageMetadata` builder consumes route definitions.
7. **Schemas:** one shared site builder, one breadcrumb builder, and one service-area builder; route files select them.
8. **Breadcrumbs/related links:** visible breadcrumb copies are route-local today; `PAGE_JOURNEYS` centrally owns related links.
9. **Invalid/unpublished input:** static routes have no slug; unmatched URLs use Next not-found.
10. **Keyword/route identity:** `PAGE_METADATA` and run-29 route policy join by canonical path.
11. **Tests:** focused family tests plus metadata, schema, navigation, review, motion, form, and route suites.

## Cross-Cutting Ownership Matrix

| Contract | Current owner | Consumers | Finding | Post-approval disposition |
|---|---|---|---|---|
| Stable route identity | `route-paths.ts` and `route-catalog.ts`; compatibility exports in `site.ts` | all families | Implemented and contract-tested | Preserve the typed catalog; do not move visible content into it. |
| Metadata | `PAGE_METADATA` + `createPageMetadata` | seven content routes | Healthy and centralized | Preserve names and behavior; no second SEO envelope. |
| Structured data | `structured-data.ts`; route selection | home and completed leaf routes with supported schema | Healthy builders; route paths repeat | Keep builders; feed stable path/breadcrumb definitions. |
| Visible breadcrumbs | `PAGE_BREADCRUMBS` plus styled hero consumers | completed non-home routes | Shared label/path identity with family markup preserved | Keep definition and schema/visible consumers synchronized. |
| Related links | `PAGE_JOURNEYS`; `RelatedPagesSection` | six completed non-home routes | Healthy typed owner and self-link tests | Preserve. |
| Primary/footer navigation | `PrimaryNavigation`; centralized footer arrays | all shell families | Healthy content ownership; PrimaryNavigation is a focused client leaf | Preserve; reconcile routes through catalog tests. |
| Internal links | shared server-compatible `Link` wrapper | all families | Module-level client directive removed; client-parent `onClick` use preserved | Preserve link protocol and navigation tests. |
| Social preview image | site preview constants + metadata builder | all content routes | Healthy site default; no per-route need | Preserve until approved route-specific creative exists. |
| Rendered images | route data and section components via shared `Image` | domain sections | Domain-specific alt/decorative decisions | Keep local; introduce `PageImageDefinition` only with a real repeated data contract. |
| Contact facts | `site.ts` | headers, footers, forms, schema, actions | `PHONE` and `PHONE_NUMBER` duplicate one display value | Standardize on `PHONE_NUMBER`; retain `PHONE` adapter during migration. |
| Actions | route data plus site contact/route constants | headers, heroes, cards, sticky CTA, form | Intent is clear; visuals and wording intentionally vary | Do not add a global `PageAction` registry without an analytics or rendering consumer. |
| Analytics | absent | none | No event helper or provider exists | Do not invent events. Add only with an approved analytics integration. |
| Freshness | shared public review date; review capture disclosure | About fact sheet; Services planning reference; reviews | Dates have specific reviewed/captured meanings | Preserve; never bump for code-only refactors. |
| Reviews | `google-reviews.ts`; `GoogleReviewsSection` | all seven marketing pages | Valid shared interactive leaf | Preserve component/data/disclosure and reduced-motion behavior. |
| Motion | `SectionReveal`; `MotionVisibility` | all families and drawers/CTAs | Valid focused client primitives; broad parent clients reduce benefit | Preserve primitives; pass server-rendered children after boundary narrowing. |
| Quote workflow | `FreeQuoteForm`; `free-quote.ts`; inquiry API; Resend helper | home and contact | Protected end-to-end contract | Preserve unchanged; keep client/server validation split. |
| Service-area facts | `location-data.ts` plus smaller route summaries | home/about/location/contact/schema | Full list has canonical owner; summaries can drift | Derive only equivalent facts through adapters. |
| Icons | four family `Icon.tsx` files | family sections/shells | SVG paths and base props repeat; family icon unions differ | Add shared exact icon renderer with narrow family adapters only after snapshot/DOM tests. |
| Headers | four `HeaderShell` variants; Location/Emergency/Social Media reuse Services | all families | Same responsibility but different announcement bars, CTAs, classes, logo wrappers, and DOM order | Keep family shells; move menu state inside each shell. No generic header now. |
| Footers | four `FooterShell` variants; shared link arrays | all families | Services/About/Contact markup is nearly equivalent; class and semantic details differ; public copy repeats | Centralize shared footer copy first; keep family renderers until exact style/semantic parity is proven. |
| Sticky CTAs | four family variants | completed pages | Home/Services/About share call+quote; Contact uses call+form; thresholds vary | Move threshold state into each leaf; retain discriminated action behavior. |
| Page composition | existing server-compatible `*Page` files | seven families | Explicit and easy to extend; interaction state lives in focused leaves | Preserve JSX order and focused client ownership. |

## Preservation Decisions

### Preserve directly

- all existing `*Page` composition names and JSX order;
- route data files and canonical location data;
- `PAGE_METADATA`, `createPageMetadata`, and current schema builders;
- `PAGE_JOURNEYS`, navigation labels/order, and shared link arrays;
- Google reviews data/component and disclosures;
- quote form/API/Resend contracts;
- `SectionReveal`, `MotionVisibility`, route CSS prefixes, current link behavior, and current action wording.

### Adapter candidates

- stable route paths from run 29;
- breadcrumb label/path definitions shared by visible and schema consumers;
- `PHONE_NUMBER` as the canonical display name with temporary `PHONE` alias;
- route-owned emergency and social-media definitions;
- exact SVG renderer shared behind family icon adapters;
- footer public copy centralized before considering shared markup;
- derived service-area summaries where facts are exactly equivalent.

### Do not abstract

- no universal `PageDefinition<TBody>` for seven unrelated static pages;
- no generic section renderer or component registry;
- no universal Header/Footer/Layout with CSS-prefix or boolean-prop matrices;
- no retrieval or page-model builders without dynamic data;
- no analytics action registry without an integration;
- no site-search, CMS, or dynamic family adapter without a product requirement.

## Validation Contract For Later Implementation

- preserve route, metadata, schema, sitemap, H1, visible breadcrumb, related-link, review, form, and action outputs;
- preserve header/footer DOM order and family class names until separately approved;
- preserve sticky thresholds and destination differences;
- prove icon SVG output parity before deleting family implementations;
- prove all static content remains in server-rendered HTML after client-boundary work;
- use focused tests plus full test/typecheck/lint/OpenNext build and representative browser/reflow checks.
