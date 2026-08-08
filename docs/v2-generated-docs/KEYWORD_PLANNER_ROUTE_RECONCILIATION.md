# Keyword Planner Route Reconciliation

## Outcome

The ranked Keyword Planner source has been reconciled with the existing eight-route site without creating new pages or rewriting existing sections.

- Source: `docs/content/keywords/SEO_KEYWORDS_ONE_CALL_HVAC_TIERED_RANKED.md`
- Source period: July 1, 2025 through June 30, 2026
- Source scale: 42 exports and 54,196 evaluated rows
- Important limitation: export geography is not identified, so no Utah city or county is assigned a Planner volume
- Organic ranking limitation: Planner tiers and priority scores are not current search positions

## Existing Route Assignment

| Route | Assigned role | Keyword families |
|---|---|---|
| `/` | Brand and broad northern-Utah entry | Existing northern Utah HVAC and Brigham City strategy; visible content unchanged |
| `/services` | Fixed parent service directory | Air conditioning repair, HVAC repair, furnace repair, AC tune-up, heat-pump installation, mini-split installation |
| `/about` | Company and trust | Brigham City HVAC company, owner-operated HVAC company, local HVAC company |
| `/location` | Geographic eligibility | Northern Utah HVAC service area, local/nearby eligibility, confirmed county coverage |
| `/contact` | Conversion | Request/schedule service, estimate, AC repair request, furnace repair request |
| `/emergency` | Complete urgent-service page | Same-day HVAC, 24-hour heating and air, emergency furnace/AC repair |
| `/about/social-media` | Complete HVAC tips and project-update hub | One Call social media, HVAC tips, and project updates |
| `/404` | Noindex recovery utility | No keyword target and no SEO content section |

## Page Count Protection

The Planner's recommended URL examples were not implemented. No `/hvac-services`, `/air-conditioning`, `/furnace-services`, `/hvac-maintenance`, `/heat-pump-services`, `/commercial-refrigeration`, or other new route was added. The current eight-page client scope remains intact.

## Content Implementation

- Google reviews follow the hero on every marketing page except Contact, where they intentionally follow the quote form.
- A shared server-rendered content-section component presents route-owned copy on the six non-home marketing routes.
- Existing public sections and their order relative to one another remain unchanged after the inserted review/content blocks.
- New copy uses only services and coverage already represented in repository content; it does not introduce commercial refrigeration or other unsupported service claims.
- The later owner-approved lifecycle decision completed `/emergency` and `/about/social-media`, removed their placeholder wording, made both indexable, and added them to the generated sitemap without adding routes.
- Canonicals, schema meaning, review data, form/Resend behavior, and the other six route compositions remain unchanged.

## Validation Contract

- Keep one H1 and one `main` per page.
- Keep reviews immediately after the hero on all marketing routes except Contact; keep the Contact reviews below the quote form.
- Keep the keyword content server-rendered and accessible by a unique section heading.
- Preserve the seven public metadata definitions plus the 404 utility; no new route may appear without explicit client scope approval.
- Treat exact-phrase coverage as an inventory, not a density target.
- Recheck route ownership only with Search Console, Analytics, organic rank tracking, or a later page-scope decision.

## Validation Evidence

- Focused keyword/metadata tests passed: 18/18.
- Full automated suite passed: 28 files and 84 tests after completing the Emergency and Social Media routes.
- TypeScript, ESLint, and the Next.js 16.3/OpenNext production build passed.
- Desktop and 320-pixel browser checks passed across all eight routes: one H1 per page, no duplicate IDs, no meaningful horizontal overflow, and no console warnings or errors.
- Reviews rendered immediately after the hero on six marketing routes, including the completed Emergency and Social Media pages. Contact rendered its keyword section and quote form before reviews, as the approved route-specific exception. Every eligible non-home marketing route rendered one keyword section with three articles and two or three existing-route actions.
- The service-area-to-services link, service-area-to-contact link, contact quote-form anchor, Contact form-before-reviews order, review-carousel advance, and mobile navigation open/close flow all passed.
