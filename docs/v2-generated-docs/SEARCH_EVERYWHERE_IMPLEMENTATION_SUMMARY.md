# Search Everywhere Implementation Summary

## Execution

- Canonical run: 10
- V2 step: 04
- Phase: implementation
- Pre-execution rundown: delivered
- Authorization: user requested the next handoff and implementation of findings
- Search Console and Analytics inputs: skipped because none exist
- External mutations: none

## Implemented

- Added contextual links from about/contact coverage summaries to the full 41-community service-area directory.
- Derived the visible community count from canonical location data.
- Converted services/about/contact breadcrumbs into labeled navigation regions.
- Named services/about/contact hero regions and about/contact coverage regions from their visible headings.
- Replaced the homepage footer's hardcoded email with the shared public email constant.
- Added focused tests for breadcrumbs, service-area journey links, and the shared email contract.
- Audited the live canonical and legacy domains and documented the unresolved migration conflict.
- Created the detailed strategy, owner TODO, search-experience backlog, and manual-input worksheet.
- Refreshed internal-link, content-gap, project-context, validation, and suite-ledger documentation.

## React / Next.js Design Effect

The React best-practices guidance kept these changes static and dependency-free. The new links consume existing constants/data, introduce no client state, effects, requests, or extra bundles, and remain present in server-rendered HTML.

## Intentionally Preserved

- Routes, indexability, sitemap membership, canonicals, and schema meaning
- Existing public copy, prices, availability, credentials, incentives, reviews, and service-area claims
- Emergency/social placeholder lifecycle
- Phone, map, review, form, Resend, and mobile sticky behavior
- Cloudflare and Vercel deployment state, DNS, listings, analytics, and external accounts
- Unrelated working-tree changes

## Deferred

- Permanent redirects from `onecallheatingandair.com` to `utahonecall.com`
- Google Business Profile, Bing Places, and Apple Business Connect verification
- Canonical Google profile and direct review URLs
- Search Console, Analytics, listing insights, call tracking, and conversion conclusions
- Voice/AI prompt observations and competitor comparisons
- Public claim verification and richer entity/local schema

## Files Changed

Application:

- `src/screens/services/ServicesHeroSection.tsx`
- `src/screens/about/OneCrewSection.tsx`
- `src/screens/contact/ContactHeroSection.tsx`
- `src/screens/about/ServiceAreaSection.tsx`
- `src/screens/contact/ServiceAreaSection.tsx`
- `src/screens/home/FooterShell.tsx`
- `src/screens/about/about.css`
- `src/screens/contact/contact.css`
- `src/screens/SearchJourneySections.test.tsx`

Documentation:

- `docs/v2-generated-docs/SEARCH_EVERYWHERE_STRATEGY.md`
- `docs/v2-generated-docs/SEARCH_EVERYWHERE_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/SEARCH_EVERYWHERE_OWNER_TODO.md`
- `docs/v2-generated-docs/SEARCH_EXPERIENCE_TODOS.md`
- `docs/v2-generated-docs/MODERN_SEARCH_MANUAL_INPUTS.md`
- current internal-link/content-gap/project context and suite ledger

## Validation

- Focused Vitest coverage: 8/8 tests across 3 files passed.
- Full Vitest coverage: 38/38 tests across 18 files passed.
- Strict TypeScript, ESLint, the Next.js 16.3/OpenNext Cloudflare production build, generated HTML checks, and `git diff --check` passed.
- Generated HTML retained the semantic breadcrumbs, heading relationships, both contextual `/location` links, and the shared homepage email.
- Desktop browser QA confirmed the centered About coverage link, no horizontal overflow, and successful navigation to the full `/location` directory.
- Mobile browser QA on Contact confirmed the breadcrumb, centered coverage link, no horizontal overflow, and no framework error overlay.
- QA screenshots: `/tmp/one-call-search-everywhere-desktop.png` and `/tmp/one-call-search-everywhere-mobile.png`.

## Completion Status

Validated. No deployment or external system changed. Canonical run 11 / advanced search signal expansion step 05 is next.
