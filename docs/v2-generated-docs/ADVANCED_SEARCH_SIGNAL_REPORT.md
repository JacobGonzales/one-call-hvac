# Advanced Search Signal Report

## Execution Context

- Canonical run: 11
- Main SEO step: 05
- Phase: implementation
- Repository: Next.js 16 App Router packaged for Cloudflare through OpenNext
- Evidence date: 2026-08-06
- Pre-execution rundown: delivered before the first step-05 write
- Authorization: user requested the next handoff and implementation of findings
- External mutations: none

## Scope And Inputs

Inspected:

- page metadata definitions and the shared metadata builder
- root document language and Open Graph locale
- robots and sitemap metadata routes
- generated HTML for all seven public content routes
- title, description, canonical, robots, and H1 output
- primary/footer/contextual links and anchor labels
- existing structured-data, page-intent, content-gap, and internal-link notes
- current Google Search Central guidance for title links, snippets, localized variants, robots metadata, and crawlable links

The application source remains authoritative. Search Console, Analytics, listing dashboards, and competitor exports do not exist, so this run does not claim ranking, click, or conversion outcomes.

## Current Signal Matrix

| Route | Search state | Sitemap | Canonical | Title and visible H1 relationship | Decision |
|---|---|---:|---:|---|---|
| `/` | indexable | yes | self | Northern Utah HVAC title; initial “One Call. Done.” H1 is brand-led and supported by visible HVAC copy | preserve; monitor with future query evidence |
| `/services` | indexable | yes | self | HVAC install/repair title; “Four Lanes. One Crew.” H1 is explained immediately by install/repair/service/maintenance copy | preserve |
| `/about` | indexable | yes | self | Brigham City company title; “One Crew. One Number.” H1 is paired with “About One Call” and local company copy | preserve |
| `/location` | indexable | yes | self | Northern Utah service-area title; seven-county/local-crew H1 and service-area breadcrumb agree | preserve |
| `/contact` | indexable | yes | self | request-service title; call-first H1, contact breadcrumb, and form content agree | preserve |
| `/emergency` | `noindex, follow` | no | self | title/H1 describe the same emergency utility intent | preserve until substantive content is approved |
| `/about/social-media` | `noindex, follow` | no | self | title/H1 describe the same placeholder intent | preserve until approved destinations/content exist |

Generated output showed exactly one H1 on every route. No title duplication, canonical mismatch, indexable orphan, or forced title/H1 rewrite was found.

## Findings And Decisions

### 1. Crawl And Index Signal Clarity

The existing robots/sitemap split is coherent:

- public crawling is allowed
- `/api/` is disallowed
- OAI-SearchBot is explicitly allowed while `/api/` stays excluded
- only five complete marketing pages appear in the sitemap
- both thin placeholders use page-level `noindex, follow`
- `/404` and framework not-found responses remain non-indexable

Implemented one clarity improvement: indexable pages now emit explicit `index, follow` metadata plus Google preview directives instead of relying only on defaults. No page changed indexability.

### 2. Title-Link And Heading Alignment

Google may use the `<title>`, visible headings, other prominent text, and `og:title` when generating a title link. The current pages use unique titles, one H1, matching route intent, and route-specific Open Graph text. The stylized H1s are supported by nearby explanatory copy, so no public headline rewrite was justified without Search Console evidence.

Reference: [Google Search Central title-link guidance](https://developers.google.com/search/docs/appearance/title-link).

### 3. Alternate-Language And Regional Discovery

The site has one English version and no translated or region-specific equivalent URLs. Implemented `en-US` as the document language and preserved `en_US` for Open Graph. Did not add:

- self-only `hreflang`
- invented Spanish pages
- `x-default` without a selector/alternate set
- IP-based redirects
- unsupported geo meta tags

Google documents `hreflang` for actual localized variations and requires reciprocal sets that include each version. Adding it without alternate pages would create a false relationship rather than a useful search signal.

Reference: [Google Search Central localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

### 4. Snippet Eligibility And Control Safety

Indexable pages now explicitly permit:

- unrestricted text snippets with `max-snippet: -1`
- large image previews with `max-image-preview: large`
- unrestricted video-preview length with `max-video-preview: -1`

No `nosnippet` or `data-nosnippet` restriction was added because the audited marketing copy is intended to be public and no sensitive field value is rendered into an indexable page. Inquiry submissions remain server-handled and are not page content.

The two noindex placeholders retain only `noindex, follow`; preview controls are unnecessary when the page is excluded from results. Google notes that robots metadata must remain crawlable to be read, which agrees with the current robots.txt policy.

References: [Google snippet guidance](https://developers.google.com/search/docs/appearance/snippet) and [robots metadata specification](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

### 5. Internal-Link And Anchor Quality

The indexable route set is reachable through ordinary anchors. Service fragments use descriptive labels, context sections point to the complete service-area directory, and conversion links identify their action.

Implemented one global anchor improvement:

- “Location” → “Service Area” for `/location` in desktop and mobile primary navigation

This matches the page title, breadcrumb, footer, and user intent without changing the URL or navigation hierarchy.

Reference: [Google crawlable-link and anchor-text guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

## Implementation Record

Application changes:

- `src/config/site.ts`: centralized `en-US` and `en_US` locale constants
- `src/app/layout.tsx`: uses the US-English document language
- `src/lib/metadata.ts`: explicit indexable robots and Google preview directives
- `src/components/PrimaryNavigation.tsx`: clearer “Service Area” anchor
- `src/lib/metadata.test.ts`: preview directive contract
- `src/components/PrimaryNavigation.test.tsx`: desktop/mobile anchor contract

Context changes:

- advanced-signal report, summary, and owner TODO
- project subpage brief and internal-linking notes
- validation inventory and suite ledger after final validation

## Future Comparison Framework

Use this same matrix after deployment or when competitor evidence becomes available:

| Dimension | Repository baseline | External evidence needed | Comparison rule |
|---|---|---|---|
| indexability | five indexable; two noindex placeholders | Search Console URL inspection/coverage | flag disagreement between intended and selected/indexed state |
| title links | unique route titles; one H1 each | query/page title-link examples | distinguish Google rewrites from source defects |
| snippets | page-specific descriptions; unrestricted previews | actual result snippets by query/device | change copy only when repeated mismatch is evidenced |
| locale | one `en-US` version | approved translated/region routes | add reciprocal `hreflang` only for real equivalents |
| internal links | descriptive global/footer/context anchors | crawl or link report | flag orphaned indexable pages and vague repeated anchors |
| domain consolidation | canonical new domain; old domain still independent | redirect/header crawl and Search Console move evidence | require path-preserving permanent redirects with no chains |

## Risks And Exceptions

- Explicit preview directives express permission, not a guarantee that any search engine will use a particular preview.
- Large image previews assume public site imagery is approved for search presentation; the owner can narrow this later if required.
- Search engines may rewrite title links and snippets even when the source is technically sound.
- No alternate-language pages exist; regional expansion requires translated content ownership, equivalent URL mapping, and QA.
- The legacy domain still needs owner-managed permanent redirects outside this repository.
- Existing public pricing, timing, credential, permit, warranty, rebate, and service claims remain unverified and unchanged.

## Validation Status

The implementation is validated:

- 10/10 tests passed across four focused files
- 40/40 full-suite tests passed across 19 files
- strict TypeScript passed
- ESLint passed
- Next.js 16.3/OpenNext 1.19.11 production build passed
- generated HTML confirmed `en-US`, one H1, self-canonicals, explicit indexable preview directives, preserved placeholder noindex, and server-rendered “Service Area” anchors
- desktop and mobile browser navigation to `/location` passed with no relevant console messages, framework overlay, or horizontal overflow
- `git diff --check` passed

## Keyword Planner Reconciliation Update

Planner volume and priority evidence is now available for non-branded service families. It does not change language, canonical, preview, hreflang, indexability, or host-policy conclusions. Suggested Planner URLs were not implemented because the client limited the project to eight routes. Existing pages received additive server-rendered topical sections, and the advanced-signal implementation remains route-compatible.
