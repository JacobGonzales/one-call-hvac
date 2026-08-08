# Page Metadata Manual Inputs

Use this worksheet for approved metadata changes and external evidence. Do not include secrets or private customer data.

## Route Review

For each route, mark `approved` or provide exact replacement wording.

| Route | Current title approved? | Current description approved? | Requested revision |
|---|---|---|---|
| `/` |  |  |  |
| `/services` |  |  |  |
| `/about` |  |  |  |
| `/location` |  |  |  |
| `/contact` |  |  |  |
| `/emergency` |  |  |  |
| `/about/social-media` |  |  |  |

## Search Evidence

- Search Console property:
- Export date range:
- Query filters:
- Country/device filters:
- Export folder under `docs/data/google-search-performance/`:
- Pages with high impressions and low CTR:
- Queries with strong position but weak CTR:
- Branded versus non-branded notes:

## Keyword Tool Evidence

- Tool/source: Google Keyword Planner-derived ranked tier map
- Export date: source last updated 2026-08-06
- Target geography: not identified in the supplied export metadata; do not infer city/county demand
- Search engine/device: Google Keyword Planner; device scope not documented
- Volume window/definition: average monthly searches, July 1, 2025 through June 30, 2026; close variants may be grouped and volumes are not additive
- Difficulty/competition definition: internal priority score and Tier 1/2/3 map; not organic ranking position
- File location: `docs/content/keywords/SEO_KEYWORDS_ONE_CALL_HVAC_TIERED_RANKED.md`
- Phrases to add/remove from a route’s intent ownership: reconciled in `KEYWORD_PLANNER_ROUTE_RECONCILIATION.md`; no new routes approved

## Social Preview Asset

- Approved image file:
- Intended crop/aspect ratio:
- Alt text:
- Rights/source confirmation:
- Apply globally or per route:

## New Route Metadata

Complete before adding a new indexable route:

- Route path:
- Page intent:
- Primary visible H1:
- Proposed title:
- Proposed description:
- 2–6 target-intent phrases:
- Canonical policy:
- Indexability/sitemap decision:
- Social preview image:
- Required owner-approved facts:

New routes must update `src/config/page-metadata.ts`, the route-owned metadata export, navigation where appropriate, sitemap policy, metadata tests, route inventory, and project subpage brief together.
