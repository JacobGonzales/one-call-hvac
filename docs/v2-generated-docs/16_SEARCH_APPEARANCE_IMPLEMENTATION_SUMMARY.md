# Search Appearance Implementation Summary

## Phase And Status

- Phase used: implementation
- Pre-execution rundown: delivered
- Completion status: validated locally
- Search Console and Analytics: intentionally skipped
- External mutations: none

## Current Structure

Next.js route metadata is defined in `src/config/page-metadata.ts`, emitted through the server-owned `createPageMetadata` helper, and resolved against the canonical domain by root `metadataBase`. Site identity and preview-asset constants live in `src/config/site.ts`.

## Top Issues

- Route previews declared titles and descriptions but no preferred image.
- Twitter used the small `summary` card despite an existing suitable landscape HVAC image.
- The favicon relationship points to a non-square wide logo.
- No verified evidence supports richer LocalBusiness, review, FAQ, or article/date markup.

## Refactor Plan Used

1. Preserve the already healthy title, description, canonical, indexability, and site-name contracts.
2. Reuse one existing high-resolution, relevant HVAC image as a centralized preview default.
3. Add Open Graph dimensions/alt text and use a large Twitter card.
4. Cover the complete metadata shape with focused tests.
5. Document the square-favicon and evidence-gated schema work without inventing facts or artwork.

## Files Changed

- `src/config/site.ts` — centralizes the preferred preview path, canonical URL, dimensions, and alternative text.
- `src/lib/metadata.ts` — emits the image through Open Graph and large-card Twitter metadata for every known route.
- `src/lib/metadata.test.ts` — protects image URL, dimensions, alternative text, and card type.
- `docs/v2-generated-docs/16_SEARCH_APPEARANCE_REPORT.md` — records evidence, decisions, readiness matrix, and risks.
- `docs/v2-generated-docs/16_SEARCH_APPEARANCE_IMPLEMENTATION_SUMMARY.md` — records the implementation and preserved behavior.
- `docs/v2-generated-docs/16_SEARCH_APPEARANCE_HUMAN_TODO.md` — isolates approved favicon, deployment, and external verification work.
- `docs/v2-generated-docs/support/PAGE_CONTENT_GAPS.md` — closes the generic shared-preview gap and records favicon ownership.
- `docs/v2-generated-docs/support/ROUTE_INVENTORY.md` — records the shared large-image metadata contract.
- `docs/v2-generated-docs/support/repo-context/PROJECT_SUBPAGE_BRIEF.md` — updates later-handoff metadata expectations.
- `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` — records canonical run 25.

## Runtime Behavior Changed Or Preserved

External preview consumers now receive one explicit, absolute 1672×941 image and Twitter's `summary_large_image` card. No visible page UI, route, title, description, canonical, indexing policy, sitemap, robots rule, structured data, review, form, or public claim changed.

The React/Next.js best-practices review kept metadata server-owned and centralized. No client component, state, effect, fetch, or new dependency was introduced.

## Validation

- Focused metadata tests: 10/10 passed.
- Typecheck: passed.
- Full tests: 60/60 passed.
- Lint: passed.
- OpenNext Cloudflare build: passed.
- Generated metadata: 7/7 public content routes emitted the preferred Open Graph/Twitter image contract; 5/5 indexable pages retained large-image preview permission; 2/2 placeholders retained `noindex, follow`.
- Preview asset packaging and source dimensions: passed.
- Three-artifact integrity, cross-document status agreement, and `git diff --check`: passed.
- Browser QA: intentionally skipped because the change affects generated `<head>` metadata only.

## Remaining Issues

An approved square favicon is still needed. The current repository also requires deployment and production verification before the new preview tags and earlier crawl fixes are live. Structured-data expansion remains assigned to step 17 and must stay evidence-gated.
