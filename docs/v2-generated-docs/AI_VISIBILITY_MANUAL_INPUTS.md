# AI Visibility Manual Inputs

Use this worksheet for human-verified facts and observation data that cannot be inferred safely from the repository. Do not paste secrets, private customer information, or unredacted account exports here.

## Business Entity Record

- Approved public business name:
- Legal name, if different and publishable:
- Business model: public storefront / service-area business / both
- Approved public address, if applicable:
- Approved service-area description:
- Public hours:
- Emergency availability wording:
- Public phone:
- Public email:
- Business category:
- License identifier and verification URL:
- Insurance wording and evidence owner:
- Google Business Profile canonical URL:
- Approved social profile URLs:
- Approver and approval date:

## Claim Verification Register

Add one row for each price, incentive, benefit, availability, credential, service-area, equipment, warranty, or response-time claim.

| Page / component | Exact claim | Claim owner | Supporting source or record | Effective / expiry date | Approved wording | Status |
|---|---|---|---|---|---|---|
| | | | | | | pending |

Status values: `pending`, `approved`, `revise`, or `remove`.

## Off-Site Entity And Citation Inventory

| Platform / source | Public URL | Owner access confirmed | Name/phone/location consistent | Last checked | Action |
|---|---|---:|---:|---|---|
| Google Business Profile | | no | no | | |
| Utah license record | | n/a | no | | |
| Manufacturer / trade affiliation | | no | no | | |
| Social profile | | no | no | | |
| Local directory or chamber | | no | no | | |

Only list legitimate, owner-approved profiles and citations. Do not create bulk low-quality directory listings.

## AI Citation Observation Log

AI/search results vary by date, location, account state, and prompt. Record observations; do not treat one result as a stable ranking.

| Date/time and location | Surface / model | Exact prompt | Brand mentioned | Site cited | Cited URL | Claim accurate | Notes / correction needed |
|---|---|---|---:|---:|---|---:|---|
| | | | no | no | | | |

Suggested baseline prompt families:

- HVAC company serving Brigham City and northern Utah
- furnace or AC repair options in a confirmed service area
- HVAC installation versus repair for a described homeowner situation
- heating/cooling company serving one of the approved counties
- branded query for One Call Heating & Air contact, services, or service area

Do not seed prompts with claims that have not passed the claim verification register.

## Search And Referral Evidence

- Search Console property:
- Sitemap submission date:
- Export date range:
- Analytics decision and consent notes:
- AI/search referral report location:
- Conversion definition:
- Reviewer:

## Competitor Citation Observation Log

Complete this only for owner-approved competitors. Preserve every visible cited source from the answer; do not record only the sources that support a preferred conclusion.

| Observation ID | Date/time and location | Surface / model | Exact prompt | Approved competitor or entity mentioned | Cited source domain | Cited URL | Source / page type | First or third party | Claim accurate | Evidence location / notes |
|---|---|---|---|---|---|---|---|---|---:|---|
| | | | | | | | | | | |

Minimum evidence requirements:

- use a stable observation ID to connect multiple cited URLs from one answer;
- store a screenshot, transcript, or export location for each observation;
- record personalization, sign-in, location, or experiment limitations;
- classify page/source type only after opening and reviewing the cited page;
- do not infer citation preference, permanence, or ranking from one result;
- do not choose competitors solely because an answer engine mentioned them.

## Crawler Verification

| Check | Environment | Date | Result | Evidence / owner |
|---|---|---|---|---|
| `/robots.txt` includes OAI-SearchBot allow and `/api/` disallow | production | | pending | |
| OAI-SearchBot is not blocked by Cloudflare/WAF | production | | pending | |
| Five indexable routes return normal HTML to external requests | production | | pending | |
| Placeholder routes retain `noindex, follow` | production | | pending | |
| `/sitemap.xml` lists only completed indexable routes | production | | pending | |

## Policy Decisions

- GPTBot training access: allow / disallow / undecided
- Approved by:
- Decision date:
- Review date:
- Notes:
