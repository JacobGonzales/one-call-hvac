# Internal Linking Notes

## Current Global Paths

- Primary navigation: home, services, about, social media, service area, emergency, and contact. The descriptive “Service Area” anchor points to `/location` on desktop and mobile.
- Footer service navigation: install, repair, service/tune-ups, and Gold Membership fragments on `/services`.
- Footer company navigation: about, service area, all services, and free estimate.
- Conversion links: phone, `/contact`, inquiry form, and configured email.
- Support anchors: `/#faq` and `/#pricing`, both with sticky-header-safe targets.

The footer route arrays are centralized in `src/config/site-navigation.ts`. The four visual footer variants consume those arrays so future route changes have one source of truth.

## Page-Level Paths

| Source page | Strong contextual destinations |
|---|---|
| `/` | Four `/services` fragments, `/location`, `/contact`, phone |
| `/services` | Local service fragments, `/#pricing`, `/#faq`, `/location`, `/about`, `/contact`, phone |
| `/about` | `/services`, `/location`, `/contact`, phone |
| `/location` | `/services`, `/#faq`, `/contact`, phone, breadcrumb to `/` |
| `/contact` | `/services`, `/#pricing`, `/location`, form POST to `/api/inquiries`, phone, email |
| `/emergency` | Phone and `/`; global links remain available |
| `/about/social-media` | `/contact` and `/`; global links remain available |
| `/404` and unmatched paths | `/` and phone |

## Rules For Later Handoffs

1. Use the shared `Link` component for internal routes and fragments.
2. Preserve phone/email as direct external-scheme actions.
3. Link from descriptive context when a destination answers the user’s next question; do not add repetitive keyword links solely for SEO.
4. Keep the four service fragment IDs stable unless every inbound link and hash-behavior test changes together.
5. Do not add unfinished placeholder routes to the footer or sitemap solely because they exist in primary navigation.
6. When a new indexable route is approved, update route constants, navigation placement, sitemap policy, metadata, tests, route inventory, and this note together.
7. Prefer “Service Area” over the vague “Location” when the link destination is the coverage directory; preserve the `/location` route until a separately approved migration exists.
8. Keep leaf-page journey definitions in `PAGE_JOURNEYS`; do not duplicate their route data in page components.
9. Preserve `/#faq` and `/#pricing` as named, sticky-header-safe support targets while inbound journey links exist. Keep FAQ before dynamic review/map content so the mobile deep-link position remains stable.

## Remaining Opportunities

- Resolve the live legacy-domain migration so cross-surface links consolidate on `utahonecall.com`.
- Decide whether the social placeholder belongs in primary navigation before it has approved destinations.
- Decide whether `/emergency` should become a complete indexable service page or remain a call-first utility route.
- Consolidate duplicated footer layout/copy during page-architecture work; route data is already shared.
- Add financing only after the owner supplies provider-approved URLs, terms, eligibility, and disclosures.
