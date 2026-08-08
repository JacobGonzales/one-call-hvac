# SERP Readiness And Snippet Opportunity Report

## Run Status

- Canonical run: 15
- Main SEO step: 09
- Phase: implementation
- Status: validated locally
- Pre-execution rundown: delivered before the first write
- Search Console input: unavailable; skipped by prior owner direction
- Deployment or external mutation: none

## Scope And Evidence

This pass inspected every route title and description, visible H1 and section-heading structure, homepage FAQ content, service comparison lists, service fit/expectation definitions, service-area summaries and county lists, contact information structure, structured-data boundaries, prior metadata/search reports, generated output, and the V2 suite ledger.

Current guidance was checked against Google Search Central documentation for [title links](https://developers.google.com/search/docs/appearance/title-link), [snippets and meta descriptions](https://developers.google.com/search/docs/appearance/snippet), and the [June 2026 removal of FAQ rich results](https://developers.google.com/search/updates#removing-faq-rich-result).

Google documents page content as the primary source for result snippets. It may use the meta description when that provides a better summary. Google also builds title links from multiple sources, including the title element, visible main title, headings, prominent text, and link text. Search engines still control the final result text.

## Metadata Audit

Character counts are review aids, not search-engine limits.

| Route | Title characters | Description characters | Assessment | Decision |
|---|---:|---:|---|---|
| `/` | 51 | 117 | Unique, descriptive, branded, local intent | Retained |
| `/services` | 51 | 124 | Names the two primary service intents and page scope | Retained |
| `/about` | 60 | 134 | Longest title, but clear company/local intent | Retained pending result evidence |
| `/about/social-media` | 37 | 60 | Unique but attached to a noindex placeholder | Retained |
| `/location` | 51 | 105 | Clear service-area intent and useful coverage detail | Retained |
| `/emergency` | 44 | 93 | Clear but attached to a noindex placeholder | Retained |
| `/contact` | 45 | 121 | Clear request intent and service scope | Retained |

All descriptions are unique and summarize their route. No description is a keyword list. Without query, position, device, or CTR evidence, rewriting these fields would be speculative and could erase a working baseline.

## Title Rewrite Risk

The indexable pages use stylized visible H1s supported by direct explanatory copy. That produces a moderate title-rewrite risk because Google may prefer a nearby descriptive phrase over the brand-led H1. However:

- every page still has one visible H1;
- the title element and Open Graph title agree;
- nearby hero copy states the route purpose;
- titles are unique and concise;
- no observed result-title mismatch or Search Console CTR evidence exists.

The safe decision was to preserve the current public H1s and titles, record the risk, and wait for actual result evidence.

## Snippet And Answer Findings

### Existing Strengths

- Services exposes a visible situation-to-service list followed by four detailed sections.
- Each service section includes semantic `Best fit when` and `What to expect` definitions.
- The services decision guide presents four short approval questions.
- Location exposes a numeric definition list plus county and community lists.
- Contact groups phone, email, service-area, business-hours, and form information visibly.
- The homepage has six natural-language FAQ questions and answers.

### Gap Implemented

The most reusable high-level answer was previously distributed across the hero, service cards, equipment marquee, and service-area section. FAQ answers were also collapsed by default.

The FAQ section now begins with an always-visible answer to “What HVAC services does One Call provide?” followed by a semantic definition list for:

1. services;
2. equipment;
3. service area.

The summary uses only existing public content and adds no pricing, response-time, credential, warranty, rebate, or financing claim.

### Deep-Link Stability Fix

Rendered mobile QA found that the service-area map and city list above `/#faq` could finish laying out after cross-page navigation and push the FAQ below the first viewport. The FAQ was moved immediately after the process section and before reviews and the map. This preserves every section and interaction while keeping the named answer target stable.

After the fix, `/services` → `/#faq` lands with the FAQ region 100 pixels below the viewport top at 390px and the full quick-answer card visible.

## List And Table Opportunities

| Page | Current structure | Decision |
|---|---|---|
| Homepage | Service cards, pricing lists, process list, quick-answer definition list, FAQ | Quick-answer definition list added; no table needed |
| Services | Situation list, service feature lists, fit/expectation definitions, decision list | Existing structure is sufficient |
| About | Narrative, value cards, service-area list, related-page links | A comparison table would add little and risk repetitive copy |
| Location | Summary definitions, county cards, community lists | Existing list structure matches the information |
| Contact | Contact cards, business-hours rows, form, preparation links | Existing structure is sufficient |

Tables were not added where they would merely restate short lists. The new definition list improves scannability without adding a heavy comparison surface.

## Enhancement-Friendly Structure

- Existing `max-snippet: -1`, large image preview, indexability, canonical, sitemap, breadcrumb, and minimal Organization/WebSite schema behavior remains unchanged.
- No FAQ schema was added. Google removed FAQ rich-result support in June 2026, and the visible FAQ remains useful without obsolete markup.
- The summary is present in prerendered homepage HTML and is not dependent on client interaction.
- The question, answer, terms, and definitions use visible semantic HTML.

## Validation Evidence

- Focused Vitest: 3 files, 9 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Full Vitest: 22 files, 52 tests passed.
- OpenNext Cloudflare build: passed with Next.js 16.3.0 and OpenNext Cloudflare 1.19.11.
- Generated homepage HTML contains the unique title, description, unrestricted preview directives, visible quick answer, and three definitions.
- Desktop in-app browser QA passed at 1440×1000.
- Mobile in-app browser QA passed at 390×844 with no horizontal overflow.
- FAQ accordion interaction still expands its answer.
- Cross-page FAQ navigation lands at the intended sticky-header-safe position.
- No relevant browser console warning/error or framework overlay appeared.

## Remaining Risks

- Search engines may still rewrite titles or descriptions per query and device.
- No Search Console data exists to identify high-impression/low-CTR queries or landing pages.
- Any public page sentence can be selected as a snippet, so existing price, availability, response, credential, warranty, rebate, and financing claims require owner verification.
- Production behavior remains unverified until deployment.

## Supporting Artifacts

- [Implementation summary](./09_SERP_READINESS_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./09_SERP_READINESS_HUMAN_TODO.md)
- [Metadata report](./SEO_METADATA_REPORT.md)
- [Advanced search signal report](./ADVANCED_SEARCH_SIGNAL_REPORT.md)
- [Page content gaps](./support/PAGE_CONTENT_GAPS.md)

## Keyword Planner Reconciliation Update

Planner priority evidence now informs route targeting, but no Search Console query, impression, CTR, or organic-position evidence exists. Existing titles and descriptions remain concise, unique, and route-appropriate, so they were preserved. The new server-rendered sections add natural topical coverage without enforcing exact-phrase density. Generated coverage records exact matches as an inventory only; missing exact strings are not treated as a quality failure when approved variants or natural hyphenation are present.
