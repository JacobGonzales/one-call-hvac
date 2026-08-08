# AI Visibility And LLM Citation Intelligence Report

## Run Status

- Canonical run: 21
- Main SEO step: 14.5
- Phase: discovery
- Result: stopped at the required external-evidence gate after completing the repository-controlled citation-readiness audit
- Pre-execution rundown: delivered before the first write
- Application implementation: none
- External prompt testing, competitor research, profile mutation, deployment, commit, or push: none

## Objective

This handoff is intended to translate observed AI-answer citations and competitor cited-source patterns into defensible site improvements. It does not infer visibility from technical readiness, treat a first-party source as independent corroboration, choose competitors without approval, or promise that an answer engine will cite the site.

## Inputs Inspected

- The step 14.5 handoff, shared execution contract, and current suite ledger
- Step 03 AI-search report, crawler policy, observation worksheet, and owner TODO
- Steps 06 and 11 competitor evidence gates
- Step 13 backlink/off-page evidence gate and target-page scorecard
- Step 14 linkable-asset report, About company fact sheet, and Services planning reference
- Current route inventory, sitemap, robots policy, metadata/indexability baseline, and structured-data inventory
- Repository files and `docs/data/` entries matching AI visibility, prompts, citations, competitors, sources, profiles, and crawler verification

## Evidence Gate

| Required evidence | Repository state | Result |
|---|---|---|
| Dated AI-answer observations | The observation worksheet has no prompt/result rows | Missing |
| Cited URLs and source domains | No answer transcript, screenshot, export, or citation row exists | Missing |
| Brand/site citation outcomes | No observed mention, citation, accuracy, or omission record exists | Missing |
| Approved competitors | Steps 06 and 11 record blank competitor targets and no comparable captures | Missing |
| Competitor cited-source dataset | No competitor answer observations or cited-source URLs exist | Missing |
| Off-site corroboration | Profile/citation worksheet is blank; step 13 has no dated off-page export | Missing |
| Production crawler verification | Repository rules are testable, but Cloudflare/WAF and production route checks remain pending in the worksheet | Missing externally |
| First-party citation surfaces | Five indexable routes, answer sections, fact sheet, planning reference, canonicals, sitemap, and crawler policy exist | Ready locally |

The handoff requires observation data before visibility, competitor-citation, frequency, or recommendation conclusions can be made. Repository readiness can be audited; actual answer-engine behavior cannot be reconstructed from source code.

## Current Citation-Readiness Baseline

| Route or system | Citation-ready surface | Strength | Boundary |
|---|---|---|---|
| `/` | Business/service summary, quick answer, visible FAQ, service categories, process, and stable pricing/FAQ anchors | Direct answers are visible in rendered content | Pricing, incentives, emergency timing, and other commercial claims still need owner verification |
| `/services` | Situation-to-service guide, four detailed service lanes, approval guide, and dated `#service-planning-checklist` reference | Strong definition, comparison, and preparation surface | It is first-party guidance, not remote diagnosis or independent expertise validation |
| `/about` | Owner/company narrative and dated company fact sheet with source links | Concise entity/contact/coverage reference | Reviewed date does not independently verify legal identity, credentials, or every operating claim |
| `/location` | Seven counties and 41 named communities in visible HTML plus page-matched Service structured data | Clear geographic relationship | A city name does not guarantee appointment availability for every address |
| `/contact` | Public phone/email, preparation links, and request workflow | Clear action and contact destination | Business hours and response-time claims require owner verification |
| Crawl/discovery | Five-route sitemap, canonical URLs, wildcard public access, and explicit `OAI-SearchBot` access with `/api/` excluded | Clear local repository intent | CDN/WAF behavior and deployed output are not proven by repository configuration |
| Entity markup | WebSite/Organization baseline, breadcrumbs, and a location-page Service entity | Visible facts and structured relationships are aligned conservatively | LocalBusiness, review/rating, FAQ, offer, credential, and address markup remain evidence- or eligibility-gated |

These surfaces make the site easier to retrieve and summarize accurately. They are not evidence of inclusion, citation, ranking, recommendation, referral traffic, or conversion.

## Citation-Pattern Interpretation

Only first-party patterns can be interpreted from the available evidence:

1. **Concise, bounded facts:** the company fact sheet consolidates entity, contact, service-category, and service-area facts without adding unsupported authority claims.
2. **Stable source paths:** the fact sheet links to Services, Service Area, and Contact; the planning reference has a stable fragment identifier and conversion paths.
3. **Visible definitions and comparisons:** service terms, fit guidance, expectations, and homeowner preparation are written for users and available in rendered HTML.
4. **Freshness with ownership risk:** both new reference assets expose one reviewed date, but that date must be updated only after their underlying facts are checked.
5. **Clear safety boundaries:** the planning reference says it is not diagnosis or emergency guidance; the location reference asks users to confirm address-specific scheduling.

No conclusion is available about which third-party domain types, page formats, authors, statistics, organizations, or competitors are favored by any AI surface. The required observations do not exist.

## Repository-Controlled Fix Decision

The repository already contains the safe citation-signal improvements supported by current facts: crawl access, clean indexability, visible answers, conservative entity relationships, stable internal source paths, a dated fact sheet, and a dated planning reference. This audit found no concrete public-page defect that justified another content, metadata, schema, crawler, or routing change.

The correct implementation for this run was therefore to:

- preserve the validated runtime baseline;
- add an explicit competitor citation-observation intake table to the existing manual worksheet;
- document the first-party citation-surface map and all fix dispositions;
- keep visibility and competitor conclusions unavailable until real observations exist.

No `llms.txt`, AI-only page, hidden crawler copy, speculative schema, keyword-stuffed city page, review markup, or stronger business claim was added. None is supported by the missing observation layer.

## Stop-Condition Decision

This run stops at `stopped_input_required` for AI visibility auditing and competitor citation-source discovery. The repository-controlled readiness audit and restart framework are complete, but the handoff's full intelligence outcomes depend on external observations, approved competitors, cited URLs, verified business facts, and production crawler checks.

The next canonical handoff may proceed with its own indexing/crawl-readiness scope. This stop does not invalidate the site's existing technical baseline.

## Validation

- Cross-checked the handoff, ledger, route inventory, crawler policy, sitemap, step 03/11/13/14 outputs, manual-input worksheets, and `docs/data/` inventory.
- Confirmed that all five step 14.5 artifacts exist and use explicit evidence states rather than inferred visibility metrics.
- Confirmed the competitor citation map contains no guessed competitor, source, frequency, score, or winner.
- Confirmed the LLM citation-signal fix register distinguishes implemented repository signals from external and owner-gated work.
- Application tests, typecheck, lint, build, and browser QA were intentionally skipped because no runtime, route, metadata, schema, component, configuration, or public-content file changed.
- `git diff --check` passed after artifact and ledger reconciliation.

## Supporting Artifacts

- [Competitor citation source map](./14_5_COMPETITOR_CITATION_SOURCE_MAP.md)
- [LLM citation signal fixes](./14_5_LLM_CITATION_SIGNAL_FIXES.md)
- [Implementation summary](./14_5_AI_VISIBILITY_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./14_5_AI_VISIBILITY_HUMAN_TODO.md)
- [Manual AI visibility inputs](./AI_VISIBILITY_MANUAL_INPUTS.md)
- [Step 03 AI-search baseline](./AI_SEARCH_VISIBILITY_one-call-hvac.md)
- [Step 13 off-page evidence gate](./13_BACKLINK_INTELLIGENCE_REPORT.md)
- [Step 14 linkable-asset report](./14_LINKABLE_ASSET_REPORT.md)
