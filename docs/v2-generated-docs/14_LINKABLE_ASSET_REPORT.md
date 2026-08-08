# Linkable Asset And Citation Support Report

## Run Status

- Canonical run: 20
- Main SEO step: 14
- Phase: implementation
- Status: validated locally
- Pre-execution rundown: delivered before the first write
- Backlink evidence: unavailable; handoff 13 remains stopped at its input gate
- Outreach, profile mutation, deployment, commit, or push: none

## Scope And Inputs

This pass inspected the five indexable pages, company facts, owner/expertise sections, FAQ and answer assets, service comparisons, approval guidance, service-area reference data, quote-form inputs, source/freshness patterns, prior local/technical/backlink reports, and the current suite ledger.

The safe implementation basis was first-party content already published by the site:

- canonical business name, phone, email, website, and Brigham City home base;
- 41 communities grouped under seven northern Utah counties;
- four established service lanes: installation, repair, seasonal service, and maintenance;
- existing service fit/expectation guidance, approval questions, and request-form fields.

No study, statistic, credential, affiliation, result, profile, citation, testimonial, or external authority was invented.

## Current-State Findings

| Acceptance area | Before this run | Decision |
|---|---|---|
| Company-fact and expertise support | About content established identity and operating context, but facts were scattered across sections/routes | Add one semantic company fact sheet derived from shared values |
| Glossary, FAQ, and comparison assets | Homepage FAQ, Services situation guide, fit/expectation answers, and approval guide were already strong | Preserve them; add a compact four-term reference rather than duplicate more FAQ copy |
| Resource/checklist/calculator opportunities | No stable resource anchor combined service definitions and pre-call preparation | Add a service-planning reference/checklist; omit a calculator without validated inputs |
| Source attribution and freshness | Page content had no explicit review date or source note | Add machine-readable review dates and visible source statements to both new assets |
| Press, partner, local, informational support | About and Location facts were usable but required manual extraction | Add a concise fact block with direct service, location, and contact source paths |

## Implementation

### Company Fact Sheet

`/about` now includes a `Company Reference` section containing:

- public business name;
- Brigham City home base;
- a coverage total derived from canonical location data;
- primary service categories;
- public phone, email, and website;
- direct links to Services, Service Area, and Contact;
- a visible source statement and `<time dateTime="2026-08-06">` review cue;
- an explicit warning to confirm scheduling before publishing address-specific availability.

The coverage total is calculated from `src/screens/location/location-data.ts`, so the fact sheet does not create another city inventory.

### HVAC Service Planning Reference

`/services#service-planning-checklist` now provides:

- the four existing service terms and their existing descriptions;
- a five-item pre-call preparation checklist based on current service/request fields;
- an explicit statement that the reference is not remote diagnosis or emergency guidance;
- visible source and reviewed-date cues;
- call and request-service actions;
- a contextual link from the existing approval decision guide.

The asset is part of the existing indexable Services page. No new route, sitemap entry, canonical, or metadata definition was required.

### Why No Calculator Or Download

A replacement/payback, energy-savings, sizing, rebate, tax-credit, or repair-versus-replace calculator would require validated assumptions and maintained external inputs. A PDF/download would create a second content copy that can drift. This run kept the reference semantic, linkable, responsive, and directly maintainable in the canonical page.

## Protected Decisions

- No existing title, description, H1, canonical, robots directive, sitemap entry, schema, route, service definition, price, credential, emergency claim, review, form, or conversion destination changed.
- No backlink, traffic, citation, ranking, press, partner, or outreach outcome was claimed.
- No FAQ/review schema or richer entity type was added.
- No new client-side state, effect, dependency, data fetch, or hydration requirement was introduced.
- Prior unrelated working-tree changes, deployment state, secrets, and external accounts were preserved.

## Validation Evidence

- Focused Vitest: 2 files, 8 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Full Vitest: 23 files, 58 tests passed.
- OpenNext Cloudflare build: passed with Next.js 16.3.0 and OpenNext Cloudflare 1.19.11.
- Generated `/about` HTML contains the fact-sheet heading relationship, shared 41/7 coverage total, public contact values, source navigation, and reviewed date.
- Generated `/services` HTML contains the stable checklist ID, four-term reference, five-item checklist, safety boundary, source statement, reviewed date, and conversion actions.
- In-app browser QA at 1280×720 passed on `/about` and `/services#service-planning-checklist` with meaningful content, no framework overlay, and no relevant console warning/error.
- Interaction proof: `Use Planning Checklist` changed the URL to `/services#service-planning-checklist` and positioned the reference below the sticky navigation.
- Screenshot evidence was saved outside the repository at `/tmp/one-call-handoff-14-about.jpg` and `/tmp/one-call-handoff-14-services.jpg`.
- `git diff --check` passed.

## Risks And Follow-Ups

- The visible reviewed date is a maintenance contract, not proof that every underlying business fact was independently verified on that date.
- Phone, email, service categories, home base, and coverage totals still require owner approval as public facts.
- External organizations should link to the page matching their context rather than copying claims without confirming them.
- A calculator, case study, technical guide, or downloadable reference should wait for approved SME inputs, assumptions, source ownership, and refresh cadence.
- Production rendering and hash navigation remain unverified until an authorized deployment.
- Browser QA used the available 1280×720 viewport. Responsive CSS and tests passed, but a separate mobile-sized Browser viewport was unavailable.

## Supporting Artifacts

- [Implementation summary](./14_LINKABLE_ASSET_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./14_LINKABLE_ASSET_HUMAN_TODO.md)
- [Backlink target map](./13_BACKLINK_OPPORTUNITY_SCORECARD.md)
- [Project subpage brief](./support/repo-context/PROJECT_SUBPAGE_BRIEF.md)
- [Route inventory](./support/ROUTE_INVENTORY.md)

