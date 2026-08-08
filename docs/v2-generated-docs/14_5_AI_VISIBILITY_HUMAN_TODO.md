# AI Visibility And LLM Citation Intelligence Human TODO

## 1. Record A Dated Brand Citation Baseline

- Action: run the approved prompt families manually and record the exact surface/model label, date/time, tester location, exact prompt, brand mention, site citation, cited URL, claim accuracy, and screenshot/transcript location.
- Reason: no observed AI-answer visibility or citation evidence exists.
- Affected scope: brand visibility and citation accuracy across AI-assisted search/answer surfaces.
- Priority: high.
- Status: blocks visibility conclusions; does not block the site's current technical baseline or canonical run 22.
- Evidence: `AI_VISIBILITY_MANUAL_INPUTS.md#ai-citation-observation-log`.
- Completion condition: at least one reproducible baseline round covers every approved prompt family and preserves all visible citations without treating one round as permanent ranking.

## 2. Approve Competitors And Capture Their Cited Sources

- Action: approve at least two comparable competitors, document why each is relevant, then capture answer observations and every visible cited source URL using the same prompt set and observation window.
- Reason: no competitor or cited-source dataset exists, so source patterns and content gaps cannot be interpreted.
- Affected scope: `14_5_COMPETITOR_CITATION_SOURCE_MAP.md` and any later competitor-led content recommendation.
- Priority: high for competitor intelligence.
- Status: blocks competitor citation-source discovery only.
- Evidence: the blank competitor citation observation table in `AI_VISIBILITY_MANUAL_INPUTS.md` and steps 06/11.
- Completion condition: approved targets, capture dates/methods, answer evidence, cited domains/URLs, source types, and accuracy reviews are complete enough to compare without guesses.

## 3. Verify Public Business Facts

- Action: complete the business entity record and claim verification register, including service-area business model, hours, emergency wording, license/insurance evidence, Google Business Profile URL, and approved public profiles.
- Reason: a retrieval system can amplify visible claims; richer summaries or schema must not strengthen unverified facts.
- Affected scope: `/`, `/services`, `/about`, `/location`, `/contact`, future structured data, and external citation correction.
- Priority: high.
- Status: blocks stronger entity/claim remediation, not the current conservative baseline.
- Evidence: `AI_VISIBILITY_MANUAL_INPUTS.md#business-entity-record` and `#claim-verification-register`.
- Completion condition: every field has an owner, source, approved wording, status, and approval date.

## 4. Verify Production Crawler Access

- Action: after the reviewed repository state is deployed, verify production `robots.txt`, `sitemap.xml`, and all five indexable routes externally, and confirm Cloudflare/WAF does not challenge or block OAI-SearchBot.
- Reason: repository rules cannot prove edge-security behavior or deployed output.
- Affected scope: public crawl and retrieval access.
- Priority: high after deployment.
- Status: blocks production crawler assurance.
- Evidence: `AI_VISIBILITY_MANUAL_INPUTS.md#crawler-verification`.
- Completion condition: dated external checks show normal content responses, the intended robot directives, the five-route sitemap, and no crawler-specific challenge/block.

## 5. Complete Legitimate Off-Site Corroboration Inventory

- Action: provide canonical, owner-approved URLs and accuracy/ownership status for the Google Business Profile, Utah license record if publishable, legitimate trade/manufacturer affiliations, approved social profiles, and any real local organization/directory records.
- Reason: first-party facts do not provide independent entity corroboration.
- Affected scope: citation correction, entity consistency, and later off-page prioritization.
- Priority: medium.
- Status: blocks off-site corroboration analysis, not repository implementation.
- Evidence: `AI_VISIBILITY_MANUAL_INPUTS.md#off-site-entity-and-citation-inventory` and handoff 13.
- Completion condition: every legitimate source has a public URL, owner/status, last-checked date, and consistent approved facts; low-quality bulk listings are excluded.

## 6. Decide GPTBot Training Policy

- Action: decide whether GPTBot should remain allowed under the wildcard rule and record the approver, decision date, review date, and rationale.
- Reason: training-crawler policy is separate from search retrieval/citation policy.
- Affected scope: `src/app/robots.ts` only if the owner requests a policy change.
- Priority: medium.
- Status: nonblocking.
- Evidence: `AI_VISIBILITY_MANUAL_INPUTS.md#policy-decisions`.
- Completion condition: the policy decision is documented and the repository changes only if the approved decision differs from the current wildcard behavior.
