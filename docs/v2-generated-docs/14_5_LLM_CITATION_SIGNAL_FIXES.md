# LLM Citation Signal Fixes

## Decision Register

| Signal or issue | Current evidence | Disposition in run 21 | Remaining dependency |
|---|---|---|---|
| Public crawler access | Wildcard public allow plus explicit `OAI-SearchBot` allow; `/api/` excluded | Preserve; already implemented and tested in step 03 | Verify deployed `robots.txt` and Cloudflare/WAF behavior |
| Canonical discovery | Five completed routes have canonicals and appear in the sitemap | Preserve | Verify production output after deployment |
| Direct answer structure | Homepage quick answer/FAQ and Services situation guide, fit, expectation, and approval sections are visible | Preserve; no duplicate AI-only copy added | Use observed prompt gaps before expanding content |
| Business entity clarity | Shared name/domain/contact values and conservative Organization graph exist | Preserve | Owner approval of legal/public facts and operating model |
| Geographic clarity | `/location` lists seven counties and 41 communities; visible copy aligns with Service structured data | Preserve | Confirm coverage and address-specific availability wording |
| Linkable source surface | `/about` fact sheet and `/services#service-planning-checklist` are stable, sourced, and dated | Preserve; step 14 completed the supported runtime fix | Assign a refresh owner and deploy |
| Source/freshness ownership | Shared reviewed date is visible on both reference assets | Preserve with caution | Update only after source values are actually reviewed |
| Independent corroboration | No approved profile, license, trade, manufacturer, directory, press, or partner URL inventory | No site claim/schema change | Supply verified public URLs and ownership/status |
| Actual AI citation evidence | No prompt observations, mentions, citations, cited URLs, or accuracy records | No visibility claim or content-priority inference | Populate dated observation logs |
| Competitor citation patterns | No approved competitors or cited-source dataset | No competitor/source pattern conclusion | Supply approved targets and captured observations |
| Production bot access | Repository intent exists; CDN/WAF behavior is not evidenced | No configuration guess | Perform external crawler-response verification |
| GPTBot training policy | Inherits wildcard allow | No change; search crawling and training policy remain separate | Owner decision, approver, and date |
| Richer schema | Eligibility/verification remains incomplete for LocalBusiness, reviews, ratings, FAQ, offers, credentials, and prices | Omit | Reassess only with verified facts and then-current eligibility |
| `llms.txt` or AI-only assets | No documented consumer, requirement, or maintenance owner in repository evidence | Omit | Reopen only with a standards-backed consumer and maintenance case |

## Route Citation-Surface Map

| Route | Best-supported use | Stable evidence | Claims to avoid amplifying |
|---|---|---|---|
| `/` | Broad company/service summary and common HVAC questions | Visible quick answer, services, process, FAQ, contact actions | Unverified prices, discounts, response timing, incentives, warranties, or credentials |
| `/services` | Service definitions, situation fit, expectations, and homeowner planning | Four service lanes, decision guide, stable planning reference | Diagnosis, guaranteed results, savings, equipment sizing, or universal recommendation |
| `/about` | Public company/entity reference | Shared fact sheet, owner/company narrative, source links, reviewed date | Legal identity, license, insurance, affiliation, storefront, or staffing claims without records |
| `/location` | Published northern Utah coverage reference | Seven counties and 41 visible communities | Guaranteed appointment availability at every address |
| `/contact` | Official contact and request path | Shared phone/email and Resend-backed inquiry flow | Unsupported hours, response time, or emergency availability |

## Safe Future Fix Trigger

A new repository fix is justified only when a dated observation shows one of the following and the underlying fact is approved:

- a cited page states a One Call fact incorrectly because the site is ambiguous;
- an important approved answer is absent or scattered across the existing route responsible for it;
- a cited stale URL or duplicate host reveals a canonical/redirect problem;
- a recurring cited-source pattern exposes a useful format gap that can be met with genuine first-party expertise;
- production crawler checks reveal a repository-controlled block or malformed response.

The observation must identify the prompt, surface, date, cited URL, inaccurate/missing fact, target route, proposed wording, source owner, and validation method.

## Rejected Speculative Changes

This run intentionally did not add:

- hidden or crawler-only content;
- an AI-only sitemap or page;
- `llms.txt` without a documented consumer;
- FAQ, review, rating, LocalBusiness, offer, credential, or price schema without eligibility and verified facts;
- city pages derived only from the service-area list;
- copied competitor content or cited-source wording;
- artificial third-party citations, bulk directory submissions, or outreach automation;
- prompt-shaped pages unsupported by recurring observations.

## Implementation Outcome

No application file changed. The supported runtime citation signals were already implemented by earlier validated handoffs, especially steps 03, 07-10, 12, and 14. Run 21 adds the evidence/disposition layer needed to prevent speculative changes and to restart cleanly when observations arrive.
