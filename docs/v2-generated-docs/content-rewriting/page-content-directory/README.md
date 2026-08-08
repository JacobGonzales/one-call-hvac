# One Call HVAC Page Content Directory

Generated: `2026-08-07T01:02:37Z`
Source commit: `71db84b600efd40fa84d6934a8cc617286060576` (working-tree content fingerprint remains authoritative)

## Purpose

This directory is the documentation-only transfer workspace for the formal content-rewriting workflow. It contains one populated source package and one blank rewrite template for each of the seven public, indexable marketing pages. It is not imported by the Next.js application and must never become a runtime content source.

## Included Routes

| Route | Group | Package | Rendered blocks | Sections | Required phrases | Status |
|---|---|---|---:|---:|---:|---|
| / | general | [source](./general/home/01_SOURCE_CONTENT.md) / [blank rewrite](./general/home/02_REWRITTEN_CONTENT.md) | 111 | 10 | 4 | prepared |
| /services | services | [source](./services/overview/01_SOURCE_CONTENT.md) / [blank rewrite](./services/overview/02_REWRITTEN_CONTENT.md) | 131 | 12 | 5 | prepared |
| /about | company | [source](./company/about/01_SOURCE_CONTENT.md) / [blank rewrite](./company/about/02_REWRITTEN_CONTENT.md) | 78 | 10 | 3 | source_generated |
| /about/social-media | company | [source](./company/social-media/01_SOURCE_CONTENT.md) / [blank rewrite](./company/social-media/02_REWRITTEN_CONTENT.md) | 45 | 6 | 3 | source_generated |
| /location | locations | [source](./locations/service-area/01_SOURCE_CONTENT.md) / [blank rewrite](./locations/service-area/02_REWRITTEN_CONTENT.md) | 86 | 5 | 5 | source_generated |
| /emergency | services | [source](./services/emergency/01_SOURCE_CONTENT.md) / [blank rewrite](./services/emergency/02_REWRITTEN_CONTENT.md) | 45 | 6 | 6 | source_generated |
| /contact | contact | [source](./contact/request-service/01_SOURCE_CONTENT.md) / [blank rewrite](./contact/request-service/02_REWRITTEN_CONTENT.md) | 53 | 6 | 5 | source_generated |

Included groups are `general`, `services`, `company`, `locations`, and `contact`.

## Excluded Routes

- `/404` is a noindex recovery utility, not an indexable marketing-content page.
- `/api/inquiries` is an operational endpoint.
- `/robots.txt` and `/sitemap.xml` are generated metadata endpoints.
- Framework error output, static assets, manifests, and external embed content are excluded.

## Keyword Sources And Authority

1. `src/config/page-metadata.ts` supplies route-owned target keyword context.
2. `docs/v2-generated-docs/page-architecture/PAGE_KEYWORD_STRATEGY_MATRIX.csv` supplies the fixed-route ownership and approved variants.
3. `docs/content/keywords/SEO_KEYWORDS_ONE_CALL_HVAC_TIERED_RANKED.md` supplies user-provided Planner opportunity evidence. Its tiers are not organic rankings, and its export geography is unspecified.
4. Generated HTML and route-owned source files supply visible occurrence evidence.
5. No `CURRENT_PROTECTED_KEYWORDS.md`, protected-keyword CSV, or Search Console export exists. No missing source is invented.

Visible copy does not automatically become a protected keyword. Exact and close-variant requirements are limited to route-owned target terms supported by metadata, the fixed-route matrix, or the Planner reconciliation.

## Paired File Convention

- `01_SOURCE_CONTENT.md` records route intent, metadata, uniqueness, required phrases, section-preservation rules, extracted visible content, links, gaps, and a normalized SHA-256 fingerprint.
- `02_REWRITTEN_CONTENT.md` is intentionally blank except for four writer-facing sections: Rewritten Page, Meta Description, Keyword Check, and Writer Notes. The Keyword Check carries target and maximum counts; the phrase may move anywhere natural. InHouse output belongs there.
- Paired markers such as `+air conditioning repair+` identify visible occurrences of required phrases. They do not lock the phrase's current position.
- Shared customer reviews and operational form UI may appear in the extracted evidence but remain component-owned and are not ordinary rewrite permission.

## Page Uniqueness Briefs

Each brief compares the route with its closest existing pages using the completed SEO/architecture outputs and current source. It identifies the route's exclusive reader job, unique information, useful angles, reducible boilerplate, and content that belongs elsewhere. A brief records meaningful reader value, not merely different wording.

## Phrase Tiers And Safety

- **Must preserve exact phrase**: the route's primary target or a strongly supported Planner/route dependency.
- **Preserve exact phrase or approved close variant**: a required concept whose natural wording may vary.
- **Optional/supporting**: entities or related terms with no required count.

Targets are natural minimums and maximums, not a density formula. Step 02 must confirm them before external rewriting. Step 04 uses [REWRITE_COVERAGE_CHECKLIST.md](./REWRITE_COVERAGE_CHECKLIST.md) to block missing, excessive, or unnatural use.

## Status And Freshness

[REWRITE_STATUS.csv](./REWRITE_STATUS.csv) tracks each route through `source_generated`, preparation, external handoff, review, approval, implementation, and validation. A refresh must never overwrite a later status or a returned rewrite.

Fingerprints use rendered reading order, Unicode NFC, LF line endings, removed trailing whitespace, trimmed outer blank lines, preserved internal spaces/blank lines/capitalization/punctuation, UTF-8 encoding, and SHA-256. Recompute the fingerprint before InHouse handoff and before implementation. A mismatch blocks stale-copy implementation.

## Coverage Files

- [Route keyword map](./ROUTE_KEYWORD_MAP.csv)
- [Required phrases](./REQUIRED_PHRASES.csv)
- [Keyword coverage matrix](./KEYWORD_COVERAGE_MATRIX.csv)
- [Before/after checklist](./REWRITE_COVERAGE_CHECKLIST.md)
- [Gaps and review notes](./GAPS_AND_REVIEW_NOTES.md)

## Workflow

Continue with `docs/2.0/content-rewriting/02_CODEX_REWRITE_PREPARATION.md` for one route at a time. The remaining workflow lives in `docs/2.0/content-rewriting/`.

## Source Files Inspected

- `src/app/page.tsx`
- `src/screens/HomePage.tsx`
- `src/screens/home/home-data.ts`
- `src/screens/home/HeroSection.tsx`
- `src/screens/home/ServicesSection.tsx`
- `src/screens/home/LocalCrewSection.tsx`
- `src/screens/home/PricingSection.tsx`
- `src/screens/home/ProcessSection.tsx`
- `src/screens/home/FaqSection.tsx`
- `src/screens/home/ServiceAreaSection.tsx`
- `src/screens/home/HomeQuoteSection.tsx`
- `src/config/page-metadata.ts`
- `src/app/services/page.tsx`
- `src/screens/ServicesPage.tsx`
- `src/screens/services/services-data.tsx`
- `src/screens/services/ServicesHeroSection.tsx`
- `src/screens/services/ServiceSections.tsx`
- `src/screens/services/ServiceDecisionSection.tsx`
- `src/screens/services/ServicePlanningResourceSection.tsx`
- `src/app/about/page.tsx`
- `src/screens/AboutPage.tsx`
- `src/screens/about/about-data.ts`
- `src/screens/about/OneCrewSection.tsx`
- `src/screens/about/MeetJesseSection.tsx`
- `src/screens/about/ValuesSection.tsx`
- `src/screens/about/CompanyFactSheetSection.tsx`
- `src/screens/about/ServiceAreaSection.tsx`
- `src/app/about/social-media/page.tsx`
- `src/screens/SocialMediaPage.tsx`
- `src/screens/social-media/social-media-data.ts`
- `src/screens/social-media/SocialMediaHeroSection.tsx`
- `src/screens/social-media/SocialMediaSections.tsx`
- `src/app/location/page.tsx`
- `src/screens/LocationPage.tsx`
- `src/screens/location/location-data.ts`
- `src/screens/location/LocationHeroSection.tsx`
- `src/screens/location/CountyCoverageSection.tsx`
- `src/app/emergency/page.tsx`
- `src/screens/EmergencyPage.tsx`
- `src/screens/emergency/emergency-data.ts`
- `src/screens/emergency/EmergencyHeroSection.tsx`
- `src/screens/emergency/EmergencySections.tsx`
- `src/app/contact/page.tsx`
- `src/screens/ContactPage.tsx`
- `src/screens/contact/contact-data.ts`
- `src/screens/contact/ContactHeroSection.tsx`
- `src/screens/contact/ContactDetailsSection.tsx`
- `src/screens/contact/FreeQuoteForm.tsx`
- `src/lib/free-quote.ts`
- `src/app/api/inquiries/route.ts`
- `src/config/route-catalog.ts`
- `src/config/route-paths.ts`
- `src/app/sitemap.ts`
- `src/components/GoogleReviewsSection.tsx`
- `src/lib/google-reviews.ts`
- `src/components/KeywordContentSection.tsx`
- `docs/v2-generated-docs/KEYWORD_PLANNER_ROUTE_RECONCILIATION.md`
- `docs/v2-generated-docs/page-architecture/PAGE_KEYWORD_STRATEGY_MATRIX.csv`
- `docs/v2-generated-docs/support/ROUTE_INVENTORY.md`
- the seven current files under `.next/server/app/*.html`

## Validation

Run-37 validation passed for CSV schemas, exact seven-route parity, seven populated source packages, seven blank rewrite bodies, 32 initial required-phrase marker/count contracts, 63 route-keyword rows, 63 coverage rows, fingerprint/timestamp/commit formats, default no-merge protection, the 24-file workflow inventory, and `git diff --check`. Run 38 subsequently prepared `/services` with five natural phrases and a complete 12-section preservation inventory, then corrected the homepage omission by preparing `/` with four natural one-use phrases and a complete 10-section preservation inventory. The other five routes remain `source_generated`.
