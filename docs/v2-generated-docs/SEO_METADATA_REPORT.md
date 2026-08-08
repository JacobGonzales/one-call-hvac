# SEO Page Metadata Report

## Scope

Canonical run 08 / main SEO step 02 audited every public content route’s title, description, canonical, indexability, social metadata, intent targeting, and visible heading hierarchy. The run used the keyword hypotheses from `SEO_KEYWORDS_one-call-hvac.md`; no Search Console, Analytics, rank, click-through-rate, or keyword-volume evidence exists.

## Inputs Inspected

- `src/app/` route metadata exports and root metadata
- `src/lib/metadata.ts` and its tests
- `src/config/site.ts`, sitemap, robots, and metadata-route tests
- Visible page H1/H2/H3 elements under `src/screens/`
- Current keyword map, project subpage brief, route inventory, and owner TODOs
- Generated production metadata from canonical run 07

## Current Metadata Ownership

- `src/config/page-metadata.ts` is now the single source for the seven public content-route definitions.
- Every route still owns a Next.js `metadata` export and passes its route definition through `createPageMetadata`.
- `src/lib/metadata.ts` owns canonical, Open Graph, Twitter, and noindex behavior.
- `src/app/layout.tsx` owns metadata base, application name, default fallback title/description, language, and icon.
- `/404` intentionally owns separate `noindex, nofollow` metadata; framework not-found behavior remains separate.

The target-keyword lists are implementation guidance, not emitted `<meta name="keywords">` tags. Search engines do not need that obsolete field, and the contract test ensures it remains absent.

## Route Metadata Matrix

| Route | Title | Title chars | Description chars | Intent entries | Indexing |
|---|---|---:|---:|---:|---|
| `/` | One Call Heating & Air \| Northern Utah HVAC Service | 51 | 117 | 4 | indexable |
| `/services` | HVAC Installation & Repair \| One Call Heating & Air | 51 | 124 | 6 | indexable |
| `/about` | About Our Brigham City HVAC Company \| One Call Heating & Air | 60 | 134 | 3 | indexable |
| `/about/social-media` | Social Media \| One Call Heating & Air | 37 | 60 | 2 | `noindex, follow` |
| `/location` | Northern Utah Service Area \| One Call Heating & Air | 51 | 105 | 5 | indexable |
| `/emergency` | 24/7 Emergency HVAC \| One Call Heating & Air | 44 | 93 | 3 | `noindex, follow` |
| `/contact` | Request HVAC Service \| One Call Heating & Air | 45 | 121 | 3 | indexable |

Character counts are review aids, not ranking rules. Search engines may truncate or rewrite title links and snippets based on the query and device.

## Findings And Fixes

| Finding | Risk | Resolution |
|---|---|---|
| Seven route files duplicated title, description, path, and noindex facts | Drift between canonicals, search targeting, and route lifecycle | Centralized definitions in `src/config/page-metadata.ts` while retaining route-owned metadata exports |
| Page-target keywords existed only in a narrative document | Future editors could apply one generic keyword pool to every page | Added focused per-route intent lists with 2–6 phrases each and contract tests |
| Contact title used the brand before its page intent | Broke the shared subpage suffix pattern | Normalized to `Request HVAC Service | One Call Heating & Air` |
| About description omitted source-backed Brigham City/seven-county specificity | Result summary was less distinct from the homepage | Added the existing base-city and seven-county facts without introducing new claims |
| No approved custom social-share image | Text cards are complete, but rich social previews lack a purpose-built asset | Deferred to owner input; the existing 3:2 hero photo was not silently repurposed or cropped |
| No query/CTR evidence | Metadata cannot be tuned empirically | Retained intent-based baseline and documented the future Search Console input |

## Heading Audit

| Page family | H1 state | Supporting hierarchy | Decision |
|---|---|---|---|
| Homepage | One active hero H1 at a time | Major sections use H2; cards/steps use H3 | Healthy; preserved |
| Services | One hero H1 | Four service blocks and bundle use H2; internal visual text is not promoted to headings | Healthy; preserved |
| About | One hero H1 | Manifesto, owner, values, area, and CTA sections use H2; people/value cards use H3 | Healthy; preserved |
| Location | One hero H1 | County coverage uses H2 and each county uses H3 | Healthy; preserved |
| Contact | One hero H1 | Quote form and service area use H2; contact detail cards use H3 | Healthy; preserved |
| Placeholders | One H1 | Review section supplies supporting H2 | Appropriate for temporary pages; preserved |
| Error page | One recovery H1 | No unnecessary heading depth | Healthy; preserved |

No heading change was implemented because no route lacked an H1, duplicated its page-level H1 in static output, or used heading levels in a way that justified changing visible structure during this handoff.

## Intent Ownership

- Homepage: northern Utah HVAC discovery and branded/local contractor intent.
- Services: installation, repair, furnace, AC, heat-pump, mini-split, tune-up, and maintenance comparison.
- About: brand/entity trust, Brigham City company, and owner-operated positioning.
- Location: service-area confirmation and county-modified HVAC intent.
- Contact: request, scheduling, and estimate intent.
- Emergency and social: documented for lifecycle continuity but remain non-indexable.

The complete phrase lists live beside the route facts in `src/config/page-metadata.ts` and are summarized in the main keyword report.

## Hidden Assumptions And Edge Cases

- An intent phrase in code does not establish search volume, ranking opportunity, or permission to add visible claims.
- Metadata titles use absolute values, so the root layout’s title template does not double-append the brand.
- Relative canonical and Open Graph paths resolve through `metadataBase` to `https://utahonecall.com`.
- Noindex placeholders still receive canonical and social metadata because they are public/shareable; they remain excluded from sitemap and search indexing.
- Homepage hero slide changes do not produce multiple static H1 elements simultaneously.
- A custom Open Graph image should be designed/approved rather than inferred from an arbitrary content image.

## Validation

- Targeted metadata tests: 3 files, 8 tests passed.
- Full Vitest suite: 16 files, 31 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Next.js 16.3/OpenNext Cloudflare production build: passed.
- Generated HTML: all seven route titles and canonicals matched the typed definitions; both placeholders retained `noindex, follow`; no route emitted meta-keywords.
- `git diff --check`: passed.

## Supporting Outputs

- `SEO_METADATA_IMPLEMENTATION_SUMMARY.md`
- `SEO_METADATA_OWNER_TODO.md`
- `PAGE_METADATA_MANUAL_INPUTS.md`
- `SEO_KEYWORDS_one-call-hvac.md`

## Keyword Planner Reconciliation Update

Keyword Planner evidence is now available, so the earlier statement that route intent had no tool-based volume/priority input is historical. `PAGE_METADATA.targetKeywords` was refreshed to assign high-fit ranked service families to the existing routes. Titles, descriptions, canonicals, social metadata, indexability, sitemap membership, and absence of meta-keywords were preserved. Planner URL suggestions were not adopted because the client approved a fixed eight-page scope.
