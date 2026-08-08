# Content Depth And Entity Coverage Report

## Run Status

- Canonical run: 13
- Main SEO step: 07
- Source handoff: `docs/2.0/07_CODEX_HANDOFF_CONTENT_DEPTH_AND_ENTITY_COVERAGE.md`
- Execution mode: implementation
- Status: validated on 2026-08-06
- Search Console input: not available yet; intentionally skipped by owner direction in support run 05
- Analytics input: not available yet; intentionally skipped by owner direction in support run 06

## Current State Summary

The repository already had unusually strong visible breadth for a small local-service site: an owner story, service-area coverage, manual Google review excerpts, published diagnostic and membership prices, a three-step home process, FAQs, and four detailed service lanes. The useful content was distributed across route-owned React sections and generally rendered as real headings, paragraphs, lists, and links.

The main decision-stage gap was on `/services`. Visitors could identify a service lane and read feature lists, but each lane did not directly answer two practical questions: whether the option fits the current situation and what happens next. The page also lacked a neutral approval checklist that connects a finding, scope, price, and next step. The homepage published pricing section existed but was not a stable deep-link target. One About-page sentence spelled the visible business name differently from the canonical `SITE_NAME` value.

## Evidence Reviewed

### Repository evidence

- Page compositions: `src/screens/HomePage.tsx`, `ServicesPage.tsx`, `AboutPage.tsx`, `LocationPage.tsx`, and `ContactPage.tsx`
- Service content and rendering: `src/screens/services/services-data.tsx`, `ServiceBlock.tsx`, `ServiceToc.tsx`, and `ServiceSections.tsx`
- Trust and proof: `src/screens/about/PeopleSection.tsx`, the owner/about sections, and `src/components/GoogleReviewsSection.tsx`
- Pricing and process: `src/screens/home/PricingSection.tsx`, `ProcessSection.tsx`, and `home-data.ts`
- Entity constants: `src/config/site.ts`
- Conversion path: `src/screens/contact/FreeQuoteForm.tsx` and the Resend-backed inquiry route
- Support context: `PROJECT_SUBPAGE_BRIEF.md`, `PAGE_CONTENT_GAPS.md`, route inventory, integration inventory, and earlier SEO handoff outputs

### Current search guidance

- Google recommends useful, complete, people-first content that demonstrates clear experience and trust rather than content written mainly to manipulate rankings: <https://developers.google.com/search/docs/fundamentals/creating-helpful-content>
- Google states that structured data should be a true representation of the visible page content: <https://developers.google.com/search/docs/appearance/structured-data/sd-policies>

No schema was expanded in this run because the new visible guidance does not establish new verified business facts, ratings, credentials, or commercial terms.

## Coverage Audit

| Acceptance area | Before this run | Change in this run | Current result |
|---|---|---|---|
| Trust signals | Owner-operated story, owner profile, values, service geography, contact paths, and manual review excerpts were visible | Preserved; canonical visible entity name now reuses `SITE_NAME` | Strong visible trust framework, still dependent on owner verification for several factual claims |
| Proof signals | Manual review excerpts and detailed marketing claims were visible, but no source records prove their freshness or accuracy | No new proof was invented | Existing proof remains visible; review freshness, licenses, insurance, warranty, permit, and claim evidence remain human work |
| Pricing visibility | `$89` diagnostic and `$99/year` Gold Membership were visible on the homepage and referenced elsewhere | Added stable, named `/#pricing` target and linked it from the new decision guide | Published prices are easier to reach without changing the prices or terms |
| Financing visibility | No financing provider, approval flow, terms, or owner-confirmed offer was found | Deferred rather than guessed | Explicit owner-input gap |
| Process and expectations | Homepage explained a three-step path; service blocks did not consistently state the immediate fit and next step | Added `Best fit when` and `What to expect` definitions to all four service lanes | Every service lane now exposes a concise, semantic decision answer |
| Comparison and fit | Service guide mapped common situations to install, repair, service, and maintenance | Added per-lane fit guidance plus a four-question approval guide | Visitors can choose a lane and evaluate the recommendation without invented comparisons |
| Visible entity consistency | Canonical value was `One Call Heating & Air`; one About sentence used `One Call Heating and Air` | About sentence now renders the shared constant | Audited visible reference is consistent and cannot drift independently |

## Implemented Content Model

Each entry in `serviceSections` now owns two additional visible fields:

- `bestFor`: describes the observable situation that matches the service lane.
- `whatToExpect`: describes the immediate inquiry, diagnosis, scope, or scheduling sequence already supported by current page content.

`ServiceBlock` renders these values as a definition list. This keeps the answers in the existing data-driven service model and makes the relationship between label and answer explicit without adding client state or another dependency.

The new `ServiceDecisionSection` appears after the four service lanes and before reviews. It asks visitors to confirm:

1. What was tested?
2. Is the recommendation repair or replacement?
3. What is included in the written quote?
4. What happens next?

The language is deliberately neutral. It tells a visitor what to clarify and does not claim that a specific permit, warranty, disposal task, schedule, or outcome is included.

## Preservation And Deferrals

This run did not change:

- route paths, route inventory, indexability, sitemap, robots, metadata, canonicals, or JSON-LD;
- phone, email, prices, discounts, review content, form/API behavior, or Resend configuration;
- current emergency, tax-credit, permit, warranty, equipment, licensing, or insurance claims;
- Cloudflare configuration, production deployment, secrets, or external listings.

The following were intentionally deferred because repository evidence is insufficient:

- financing availability, provider, qualification, rates, term length, disclosures, and application destination;
- proof for displayed licenses, insurance, response timing, permit handling, warranty registration, tax-credit eligibility, prices, discounts, and diagnostic-waiver language;
- live review count, freshness, source URLs, reviewer consent, or review-schema eligibility;
- expanded LocalBusiness, service, review, or aggregate-rating structured data.

## Validation Evidence

| Check | Result |
|---|---|
| Focused component tests | Passed: 2 files, 5 tests |
| Full Vitest suite | Passed: 20 files, 43 tests |
| Strict TypeScript | Passed: `npm run typecheck` |
| ESLint | Passed: `npm run lint` |
| Production build | Passed: Next.js 16.3.0 and OpenNext Cloudflare 1.19.11 |
| Desktop rendered QA | Passed at 1440×1000; content present, no horizontal overflow, no relevant console errors, no framework overlay |
| Mobile rendered QA | Passed at 390×844; cards reflow to one column, fixed CTA remains usable, no horizontal overflow, no relevant console errors |
| Interaction | `See Published Pricing` navigated from `/services` to `/#pricing`; pricing section resolved at the named anchor below the sticky header |
| Entity rendering | `/about` rendered `At One Call Heating & Air,` from the shared constant |

The Next.js development server separately emitted an existing LCP suggestion for the shared logo image. It is unrelated to the content-depth changes and is retained as a nonblocking follow-up.

## Outcome

The `/services` page is now more decision-ready without adding unsupported authority. The homepage pricing evidence is directly reachable, the About entity reference is consistent, and the implementation remains inside the existing React/Next.js ownership model. Canonical run 14 / main SEO step 08 can proceed.

## Keyword Planner Reconciliation Update

The later ranked Planner map identified useful demand across AC repair, furnace repair, HVAC repair, tune-ups, heat pumps, mini-splits, maintenance, and emergency service. Rather than adding thin pages or altering existing sections, one additive content section was placed on each non-home marketing route except the 404 utility. New copy uses only services and coverage already represented in the repository; commercial refrigeration and other unconfirmed expansion families were not introduced.
