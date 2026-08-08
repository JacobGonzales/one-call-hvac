# Internal Architecture And Intent Mapping Report

## Run Status

- Canonical run: 14
- Main SEO step: 08
- Phase: implementation
- Status: validated locally
- Pre-execution rundown: delivered before the first write
- Deployment or external mutation: none

## Scope And Inputs

This pass inspected the Next.js App Router entrypoints, shared route constants, primary navigation, four footer variants, breadcrumbs, homepage anchors, contextual calls to action, completed page compositions, placeholder routes, prior linking notes, route inventory, page-content gaps, and the canonical suite ledger.

The implementation was limited to internal route relationships, page-role support, and next-question mapping. Existing URLs, metadata, schema, indexability, service and pricing claims, inquiry behavior, reviews, deployment configuration, and unrelated working-tree changes were preserved.

## Current-State Findings

The homepage already functions as the primary hub. It exposes the four service lanes, published pricing, service-area summary, FAQ content, quote form, and final contact actions. Global navigation and shared footer data make every main route reachable.

The weaker layer was contextual movement between completed leaf pages:

| Source | Existing contextual path | Gap before this run |
|---|---|---|
| `/services` | Contact, phone, and `/#pricing` | FAQ, coverage, and company context depended on global chrome |
| `/about` | Service-area directory, contact, and phone | Services were primarily available through navigation/footer |
| `/location` | Contact, phone, and home breadcrumb | No contextual path to service comparison or FAQ support |
| `/contact` | Service-area directory, phone, email, and form | Service comparison and pricing preparation depended on global chrome |

The visible FAQ section also lacked a stable ID, so it could not safely serve as a reusable cross-page support destination.

## Architecture Decisions

### Centralized Journey Ownership

`src/config/site-navigation.ts` now owns four typed journey definitions: `services`, `about`, `location`, and `contact`. Each definition contains a page-role heading, a short next-step explanation, and exactly three unique destinations. The data is separate from visual rendering so link intent does not drift across page components.

### Reusable Related-Page Section

`src/components/RelatedPagesSection.tsx` renders the journey data as a labeled section containing semantic navigation and a list of descriptive links. The shared component is composed into the four completed leaf routes rather than duplicating route-specific cards.

### Stable Support Anchors

`FAQ_ROUTE` and `PRICING_ROUTE` are centralized in `src/config/site.ts`. The homepage FAQ now exposes `id="faq"`; both homepage support targets reserve 100 pixels of scroll margin for the sticky header. The existing services pricing link now consumes `PRICING_ROUTE` rather than rebuilding the fragment locally.

## Implemented Journey Map

| Source page | Supporting destination | User question answered |
|---|---|---|
| `/services` | `/#faq` | What do people commonly ask before service? |
| `/services` | `/location` | Is my community covered? |
| `/services` | `/about` | Who will perform or answer for the work? |
| `/about` | `/services` | What work can the crew perform? |
| `/about` | `/location` | Does the route reach my community? |
| `/about` | `/contact` | How do I start a request? |
| `/location` | `/services` | Which service matches the need? |
| `/location` | `/#faq` | What should I know before contacting the company? |
| `/location` | `/contact` | How do I confirm route scheduling? |
| `/contact` | `/services` | Which service should I select? |
| `/contact` | `/#pricing` | What published prices can I review first? |
| `/contact` | `/location` | Is the address inside the listed service area? |

This creates explicit hub-and-spoke support without adding new routes, changing primary navigation, or forcing repetitive links into every content block.

## Intentional Exclusions

- Financing was not linked or described because the repository contains no approved provider, application URL, eligibility rules, rates, terms, or disclosures.
- `/emergency` and `/about/social-media` remain `noindex, follow` placeholders. Their content and lifecycle require owner decisions, so this run did not treat them as completed support destinations.
- No breadcrumbs, schema, sitemap membership, canonicals, route paths, or metadata contracts changed.
- No city-specific pages were inferred from the service-area list.

## Validation Evidence

- Focused Vitest: 3 files, 11 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Full Vitest: 21 files, 50 tests passed.
- OpenNext Cloudflare build: passed with Next.js 16.3.0 and OpenNext Cloudflare 1.19.11.
- Generated route inventory: all expected static routes, API route, robots, and sitemap generated.
- In-app browser desktop QA: `/services` rendered three aligned journey cards at 1440×1000 with no horizontal overflow, framework overlay, or console warning/error.
- In-app browser mobile QA: `/services`, `/about`, `/location`, and `/contact` each rendered three stacked cards at 390×844 with no horizontal overflow.
- Interaction proof: `/services` FAQ support navigated to `/#faq`; the target stopped 100 pixels below the viewport top. `/contact` pricing support navigated to `/#pricing` with the same sticky-header-safe offset.
- Output integrity and final diff checks are recorded in the implementation summary.

## Remaining Risks

- The journey data assumes the five currently indexable routes remain the completed route set. New route approval should update this map, metadata, sitemap policy, tests, and route inventory together.
- The two placeholder lifecycle decisions remain unresolved but do not block this architecture.
- Published price claims already present on the homepage still require owner verification; this pass only makes the existing section easier to reach.
- Production behavior remains unverified until these local changes are deployed.

## Supporting Artifacts

- [Implementation summary](./08_INTERNAL_ARCHITECTURE_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./08_INTERNAL_ARCHITECTURE_HUMAN_TODO.md)
- [Internal linking notes](./support/INTERNAL_LINKING_NOTES.md)
- [Route inventory](./support/ROUTE_INVENTORY.md)
- [Page content gaps](./support/PAGE_CONTENT_GAPS.md)

## Keyword Planner Reconciliation Update

The Planner recommends many service URLs, but the client explicitly limited the project to eight routes. Existing ownership therefore remains: `/services` is the service parent, `/location` is geographic eligibility, `/about` is trust/entity, `/contact` is conversion, and `/emergency` is urgent intent. New content links only among existing routes. No route, navigation item, redirect, canonical, sitemap member, or page family was added.
