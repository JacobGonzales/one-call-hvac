# Page Keyword Pivot Report

## Decision

A bounded keyword-strategy refresh is authorized by the user's 2026-08-06 delivery of `docs/content/keywords/SEO_KEYWORDS_ONE_CALL_HVAC_TIERED_RANKED.md` and the instruction to keep the site at eight total routes.

The new source changes the evidence state but does not authorize organic-ranking claims. Its `Rank` and `Priority Score` fields rank Keyword Planner opportunities; they are not current Google result positions for One Call Heating & Air.

## Fixed-Route Decision

- No new application route was created.
- `/services` remains the parent destination for AC repair, HVAC repair, furnace repair, tune-up, heat-pump, and mini-split demand.
- `/location` remains the geographic eligibility page for the confirmed seven-county, 41-community service area.
- `/about` remains the company/trust route.
- `/contact` remains the request and estimate conversion route.
- `/emergency` is now a complete, indexable urgent-service page for Tier-1 same-day and 24-hour intent.
- `/about/social-media` is now a complete, indexable HVAC tips and project-update hub.
- `/404` remains a noindex utility and receives no SEO expansion.

Planner URL suggestions such as `/hvac-services`, `/air-conditioning`, or `/furnace-services` are treated as strategy examples rather than instructions. The client's fixed eight-page scope takes precedence.

## Evidence State

| Evidence layer | Available | Use in this refresh |
|---|---:|---|
| Ranked Keyword Planner map | Yes | Service-family priority, intent, variants, and non-additive average monthly search estimates. |
| Confirmed repository service area | Yes | Geographic eligibility and northern-Utah wording without city-level volume claims. |
| Runtime route strategy | Yes | `PAGE_METADATA[*].targetKeywords` remains the route-keyed ownership source. |
| Rendered exact-phrase coverage | Yes | Regenerated from the latest `.next/server/app/*.html` output. |
| Search Console performance | No | No clicks, impressions, CTR, average position, or query-to-route conclusions. |
| Analytics landing-page behavior | No | No sessions, conversions, engagement, or attribution conclusions. |
| Organic rank tracking | No | No claim that One Call ranks at the Planner tier or score. |

## Implemented Content Decision

One additive, server-rendered content section remains on each non-home marketing route except the 404 utility. The later owner-approved lifecycle decision replaced the two placeholder compositions with complete route-owned pages while preserving the fixed URL set.

The sections use route-appropriate language rather than distributing the full Planner list everywhere:

- Services: AC repair, furnace repair, tune-ups, heat pumps, mini-splits, installation, and maintenance.
- About: Brigham City, owner-operated, and local-HVAC-company trust terms.
- Location: northern Utah service area, county eligibility, AC/furnace/heat-pump route availability, and address confirmation.
- Contact: service requests, repair, tune-up, maintenance, and installation estimates.
- Emergency: same-day and 24-hour heating/AC response language.
- Social media: branded project, maintenance-tip, and community-update language.

## Coverage Observation

The regenerated exact-phrase inventory contains 31 active targets across all seven indexable marketing routes. Seven exact phrases appear in at least one inspected area and 24 do not.

Exact-phrase absence is not a quality or ranking failure. Hyphenation, approved variants, natural sentence structure, and semantic equivalents deliberately prevent awkward repetition. No minimum density or keyword-stuffing rule is authorized.

## Later Reassessment

Reopen route ownership when one of these becomes available:

1. Search Console query and landing-page exports;
2. Analytics conversion data;
3. approved organic rank tracking;
4. a client-approved expansion beyond eight routes;
5. proof that a Tier-1 service family needs distinct content and conversion handling.

Until then, preserve the fixed route set and use the ranked map as prioritization evidence rather than a command to create thin pages.
