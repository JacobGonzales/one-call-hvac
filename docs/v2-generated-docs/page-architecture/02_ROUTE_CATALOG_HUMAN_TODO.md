# Route Catalog Human TODO

## Completed Implementation Decision

### Approve the consolidated architecture plan

- Action: completed; the bounded implementation scope was approved at run 32 and validated at run 33.
- Reason: recorded for audit continuity.
- Affected scope: stable route paths, catalog types/selectors, consumer migrations, and tests.
- Priority: required.
- Blocking: no.
- Evidence: `02_ROUTE_CATALOG_REPORT.md` and `ROUTE_CATALOG_IMPLEMENTATION_PLAN.md`.
- Completion condition: satisfied.

## Completed Lifecycle Decisions

### Emergency and Social Media promotion

- Action: completed by explicit owner instruction; `/emergency` and `/about/social-media` are complete, indexable, and retained in primary navigation.
- Reason: the owner requested actual pages while preserving the eight-route client scope.
- Affected scope: those two routes, metadata, sitemap, navigation, content, and tests.
- Priority: complete.
- Blocking: no.
- Evidence: route compositions, `PAGE_METADATA`, route catalog, sitemap tests, and `ROUTE_POLICY_MATRIX.csv`.
- Completion condition: satisfied.

### External host redirects

- Action: configure and verify path-preserving permanent redirects for the legacy domain and decide the `www` host policy when ready.
- Reason: these host-level gaps are outside the repository route catalog.
- Affected scope: DNS/deployment platforms for `onecallheatingandair.com` and `www.utahonecall.com`.
- Priority: production follow-up.
- Blocking: no for architecture discovery or repository catalog work.
- Evidence: `docs/v2-generated-docs/support/ROUTE_INVENTORY.md`.
- Completion condition: old-host paths permanently resolve to their canonical apex equivalents and the chosen `www` policy is verified.

## Current Blocking State

No human route decision blocks architecture step 05. Legacy-host redirects, `www` policy, deployment, and production verification remain separately human-owned.
