# AI Search Implementation Summary

## Execution

- Canonical run: 09
- V2 step: 03
- Phase: implementation
- Pre-execution rundown: delivered
- Authorization: user requested the next handoff and implementation of findings
- Search Console support: skipped because no material exists
- Analytics support: skipped because no material or integration exists

## Implemented

- Added an explicit OAI-SearchBot rule while keeping public crawling, `/api/` exclusion, sitemap, and host behavior intact.
- Converted the services jump list into a visible situation-to-service comparison for install, repair, service, and maintenance needs.
- Connected the homepage service/FAQ regions and detailed service regions to their visible headings.
- Added tests for the crawler policy, service answer map, anchors, and semantic section names.
- Created the detailed AI-search visibility report, owner TODO, and manual-input worksheet.
- Refreshed the current project brief and suite ledger for the implemented policy.

## React / Next.js Design Effect

The React best-practices guidance kept the change static and dependency-free. The new answer map is module-owned data rendered directly in the existing client page, introduces no new effects or network requests, and remains available in server-rendered HTML.

## Intentionally Preserved

- Routes, canonicals, sitemap membership, and placeholder `noindex` policy
- Existing form, Resend, phone, email, review-carousel, and conversion behavior
- Existing pricing, benefit, response-time, credential, incentive, and service-area claims
- Minimal Organization/WebSite and breadcrumb schema intent
- GPTBot training-crawler policy, pending an explicit owner decision
- Deployment and all external search, listing, analytics, and Cloudflare state
- Unrelated working-tree changes

## Deferred

- LocalBusiness/HVACBusiness, FAQ, review, aggregate-rating, Service, Offer, price, and credential schema
- Claim rewrites until a reviewed business fact register exists
- Emergency and social placeholder completion
- Search Console, Analytics, AI referral, prompt testing, competitor, and off-site citation conclusions
- Cloudflare bot-rule verification and production crawler tests
- Any `llms.txt` or AI-only page pending a standards-backed consumer and maintenance case

## Files Changed

Application:

- `src/app/robots.ts`
- `src/app/search-metadata-routes.test.ts`
- `src/screens/home/FaqSection.tsx`
- `src/screens/home/ServicesSection.tsx`
- `src/screens/services/services-data.tsx`
- `src/screens/services/ServiceToc.tsx`
- `src/screens/services/ServiceBlock.tsx`
- `src/screens/services/ServiceSections.tsx`
- `src/screens/services/services.css`
- `src/screens/services/ServiceGuide.test.tsx`

Documentation:

- `docs/v2-generated-docs/AI_SEARCH_VISIBILITY_one-call-hvac.md`
- `docs/v2-generated-docs/AI_SEARCH_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/AI_SEARCH_OWNER_TODO.md`
- `docs/v2-generated-docs/AI_VISIBILITY_MANUAL_INPUTS.md`
- current project subpage brief and suite ledger

## Validation

- Targeted tests: 4/4 passed across 2 files.
- Full tests: 33/33 passed across 17 files.
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed with Next.js 16.3.0 and OpenNext Cloudflare 1.19.11.
- Generated output checks: OAI-SearchBot and `/api/` directives, service answer guide, and labeled service regions present.
- Browser QA at 1440×900 and 390×844: page identity, meaningful content, console health, no framework overlay, responsive layout, and install-anchor interaction passed.
- `git diff --check`: passed.

No dedicated Markdown lint script exists. Documentation was reviewed and covered by the diff integrity check.

## Completion Status

Validated. No deployment or external system changed.
