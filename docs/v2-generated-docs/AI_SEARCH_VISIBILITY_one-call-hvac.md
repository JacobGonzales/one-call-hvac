# One Call Heating & Air AI Search Visibility Report

## Scope And Evidence

This is the detailed report for canonical run 09 / main SEO step 03. It extends the validated SEO and metadata baseline without inventing business authority, search demand, citations, rankings, or AI visibility.

Evidence inspected:

- All seven public Next.js route entries and the five indexable page compositions
- Page metadata, canonicals, sitemap, robots policy, indexability, and JSON-LD helpers
- Visible headings, FAQs, service descriptions, service-area lists, owner/company copy, manual Google reviews, and conversion paths
- Existing route, integration, content-gap, keyword, metadata, and project-brief documentation
- No Search Console, Analytics, AI-referral, keyword-tool, competitor, citation, or local-listing exports were available
- Current official guidance from [Google on AI features and websites](https://developers.google.com/search/docs/appearance/ai-features), [Google on people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Google's structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), and [OpenAI's publisher guidance](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)

Google states that its normal SEO best practices continue to apply to AI Overviews and AI Mode and that no additional AI-specific optimization is required. OpenAI's current publisher guidance says public pages can appear in ChatGPT search and that OAI-SearchBot must not be blocked for content to be included in summaries and snippets. Those principles shaped this run; neither source promises inclusion, citation, ranking, traffic, or recommendation.

## Current State Summary

| AI-search objective | Evidence after this run | Readiness | Remaining constraint |
|---|---|---|---|
| Understand the business | Unique page metadata; homepage WebSite/Organization graph; clear service, geography, company, and contact routes | Good technical baseline | Organization facts are deliberately minimal pending owner verification |
| Extract direct answers | Visible FAQ questions/answers; county/city lists; service descriptions; situation-to-service guide; semantic heading relationships | Good structural baseline | Several highly specific answers contain unverified commercial claims |
| Quote or summarize safely | Primary service and service-area descriptions are visible in rendered HTML | Mixed | Prices, rebates, timing, credentials, warranties, and benefit claims need a fact register and sources |
| Compare options | Services page now maps install, repair, seasonal service, and maintenance to distinct customer situations | Good first-party comparison | No verified competitor or alternative-system comparison evidence exists |
| Trust the source | About page identifies the owner; contact paths and manually maintained public feedback are visible | Mixed | Legal identity, license, insurance, address model, hours, and review freshness are not documented as approved facts |
| Recommend an action | Every indexable page exposes a relevant call, contact, or service path | Good conversion baseline | Recommendation quality cannot be measured without search/referral and conversion evidence |

## Route Answer And Entity Map

| Route | Primary question answered | Extraction-ready evidence | Trust or action path |
|---|---|---|---|
| `/` | What does One Call Heating & Air do and where does it operate? | Hero summary, four service categories, process, visible FAQ, service-area map/list | Reviews, call, service links, quote form |
| `/services` | Which HVAC service fits this situation? | New visible situation-to-service guide followed by four labeled service regions and feature lists | Anchored service CTAs and phone/contact actions |
| `/about` | Who operates the company and what does it claim to value? | Owner section, team/value sections, service-area summary | Reviews, phone/email, request-service CTA |
| `/location` | Does the company serve this northern Utah county or city? | Seven county cards, 41 community names, service-area summary | Call to confirm address eligibility and contact CTA |
| `/contact` | How can a visitor request or urgently reach HVAC help? | Phone, email, form fields, service choices, response guidance | Resend-backed form and direct call/email paths |
| `/emergency` | How can a visitor request urgent help? | Thin call-first placeholder | `noindex, follow`; excluded from sitemap until complete |
| `/about/social-media` | Where are company social updates? | Thin contact-first placeholder | `noindex, follow`; excluded from sitemap until approved profiles/content exist |

## Implemented Fixes

### Search-Crawler Access

- Retained the broad public allow rule and `/api/` exclusion.
- Added an explicit `OAI-SearchBot` allow rule with the same `/api/` exclusion.
- Preserved sitemap and canonical-host declarations.
- Kept both incomplete placeholder routes out of the sitemap and under `noindex, follow`.

The wildcard rule already permitted OAI-SearchBot. The explicit entry makes the intended ChatGPT search-crawler policy testable and easier to audit without changing public indexability.

### Direct Comparison And Answerability

- Replaced the services page's label-only jump pills with a visible four-option guide.
- Mapped each option to a concrete need: new/replacement equipment, a malfunctioning system, seasonal service/safety checks, or recurring maintenance benefits.
- Kept the same stable section anchors and conversion destinations.

This creates a concise answer block for users deciding between service types without adding generic filler or unsupported claims.

### Extraction-Friendly Semantics

- Named the homepage services and FAQ regions from their visible headings.
- Named each detailed service region from its visible H2 instead of a generic lowercase label.
- Added focused tests for the answer map, heading relationships, and crawler contract.

The content remains visible, user-oriented, and present in server-rendered output. No hidden AI-only copy was added.

## Crawler And Indexability Decision Record

| Agent or surface | Repository policy | Decision |
|---|---|---|
| Googlebot / Google AI search features | Allowed through `User-agent: *`; completed pages indexable | Preserve standard SEO controls; no special Google AI file or markup added |
| OAI-SearchBot / ChatGPT search | Explicitly allowed on public paths; `/api/` disallowed | Implemented and tested |
| GPTBot | Inherits the wildcard public allow rule | Preserved; training-crawler policy requires an owner decision separate from search inclusion |
| Other compliant crawlers | Allowed on public paths through wildcard; `/api/` disallowed | Preserved |
| Placeholder routes | Crawlable but `noindex, follow`; absent from sitemap | Preserved until substantive content is approved |

No `llms.txt`, AI-only sitemap, `speakable`, or crawler-specific hidden page was added. The inspected official Google and OpenAI guidance did not establish those as requirements for inclusion. A future addition should have a documented consumer, ownership rule, and maintenance plan.

## Authority And Citation Audit

### Strong Repository Evidence

- Stable business name, canonical domain, and consistently displayed phone number
- Visible service categories and equipment categories
- Named northern Utah counties and communities
- Clear owner/company narrative and direct conversion paths
- Six visible, manually maintained review excerpts with outbound Google links

These are repository-supported facts, not independent proof that every claim is current or administratively verified.

### Claims That Must Not Be Amplified Yet

- Exact installation, diagnostic, or membership pricing
- Diagnostic waivers, percentage discounts, and membership benefits
- Federal tax-credit, HEEHRA rebate, or equipment-eligibility statements
- 24/7, same-day, same-night, first-visit, and response-time statements
- License, insurance, permit, warranty-registration, and staffing claims
- Public address/headquarters model, hours, and all-city commercial coverage
- Review total, relative dates, and review freshness

These claims remain visible because this handoff was not authorized to rewrite unverified business terms. They were intentionally excluded from new schema and from any stronger AI-facing summary.

## Structured-Data Decision

The current homepage WebSite/Organization graph and visible breadcrumb markup were preserved. No FAQ, review, aggregate-rating, LocalBusiness/HVACBusiness, Service, Offer, price, credential, or incentive schema was added.

This is consistent with Google's requirement that structured data accurately represent visible page content and not be misleading. Richer schema belongs in the later structured-data handoff after factual and eligibility review.

## Off-Site Brand Signal Awareness

The repository contains outbound Google Maps/review URLs, but it does not contain evidence of:

- an owner-verified Google Business Profile record
- consistent name/address/phone citations across directories
- approved social profiles
- trade association, manufacturer, license-board, or community citations
- earned press, backlinks, case studies, or third-party expert references
- monitored ChatGPT, Copilot, Google AI, or other AI-result citations

No off-site account or listing was changed. Those actions require ownership access and verified business facts.

## Measurement Plan

1. After deployment, verify `robots.txt`, `sitemap.xml`, and the five indexable routes from outside Cloudflare.
2. Confirm that Cloudflare bot/security rules do not return a challenge or denial to OAI-SearchBot.
3. When Search Console exists, measure queries and landing pages; Google reports traffic from AI features within normal Search Console web reporting.
4. If analytics is approved later, segment AI/search referral traffic without treating referral volume as proof of citation quality.
5. Maintain a manual citation log containing engine/surface, prompt, date, cited URL, quoted claim, correctness, and conversion outcome.
6. Re-run this handoff after enough evidence exists to change content priorities rather than manufacturing query-shaped pages now.

## Risks And Follow-Ups

- No Search Console, Analytics, AI-referral, prompt-test, or competitor evidence exists, so visibility and recommendation performance are unknown.
- Existing marketing copy contains time-sensitive and owner-specific claims that can be extracted before they are verified.
- Manual review dates and totals can become stale.
- Cloudflare bot controls are outside this repository and were not inspected or changed.
- Search and AI systems can ignore technically valid metadata, schema, or crawler permission; no inclusion guarantee is claimed.
- The emergency and social routes remain intentionally incomplete and non-indexable.

## Validation

- Targeted crawler/service-answer contracts: 2 files, 4/4 tests passed.
- Full Vitest suite: 17 files, 33/33 tests passed.
- Strict TypeScript: passed.
- ESLint: passed.
- Next.js 16.3/OpenNext Cloudflare production build: passed.
- Generated output: `robots.txt` contains wildcard and OAI-SearchBot rules with `/api/` excluded; the services answer guide and labeled service regions are present in prerendered HTML.
- Browser QA: `/services` passed at 1440×900 and 390×844 with no relevant console errors, framework overlay, clipping, or horizontal overflow; the install guide link navigated to `/services#install` and aligned the labeled install region below the header.
- `git diff --check`: passed.
