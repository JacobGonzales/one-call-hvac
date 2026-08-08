# AMP Discovery And Indexing Report

## Run Status

- Canonical run: 24
- Main SEO step: 15.6
- Classification: conditional
- Phase: discovery
- Status: `skipped_not_applicable`
- Pre-execution rundown: delivered before the first write
- Application implementation: none
- External validation, deployment, Search Console, commit, or push action: none

## Applicability Decision

AMP is not part of this repository. The handoff explicitly applies only when AMP pages, variants, templates, or a publishing path exist and instructs Codex to stop rather than invent AMP work when they do not.

No AMP implementation, remediation, validator, dependency, route, relationship, sitemap entry, robots rule, structured-data copy, or monitoring workflow was added.

## Evidence Inspected

| Surface | Evidence | Result |
|---|---|---|
| Dependencies | `package.json` and lockfile package names | No AMP package or plugin |
| Next configuration | `next.config.ts`, OpenNext config, and Wrangler config | No AMP mode, transform, route, or deployment setting |
| App Router inventory | All files under `src/app/` | No AMP route, route group, template, or alternate page |
| Source markup and metadata | Search for `amphtml`, `useAmp`, `hybridAmp`, AMP markup, and AMP metadata keys | No AMP relationship or implementation |
| Canonicals | One canonical non-AMP URL per public route | No AMP counterpart requiring paired relationships |
| Sitemap and robots | Root five-URL sitemap and crawler rules | No AMP URL or AMP-specific rule |
| Generated Next build | Static route/file inventory and generated HTML/body search | No AMP output or `rel="amphtml"` link |
| Structured data | Current WebSite, Organization, Service, and breadcrumb output | No separate AMP page requiring parity review |
| Apparent text matches | CSS `-webkit-line-clamp` and documentation references | Unrelated to Accelerated Mobile Pages |

## Acceptance-Criteria Disposition

| Acceptance area | Disposition |
|---|---|
| Verify whether AMP exists | Complete: it does not |
| Determine canonical AMP versus paired AMP | Not applicable; no AMP URL exists |
| Fix AMP discovery/canonical relationships | Not applicable; no relationship exists |
| Fix AMP validity | Not applicable; no AMP document exists |
| Fix AMP structured-data parity | Not applicable; no duplicate AMP document exists |
| Fix AMP robots/accessibility | Not applicable; no AMP resource surface exists |
| Leave required outputs | Complete |

## Why No Implementation Was Added

Adding AMP would create a second page-rendering and publishing contract with:

- duplicate template and content ownership;
- canonical and `amphtml` relationship requirements;
- component/CSS restrictions and validation work;
- structured-data and metadata parity obligations;
- additional testing, deployment, and monitoring surfaces.

The repository has no approved product requirement, content system, route family, analytics evidence, or existing AMP surface that would justify those costs. The current responsive Next.js pages remain the single canonical experience.

## Hidden Assumptions And Edge Cases

- `-webkit-line-clamp` is a CSS truncation property and not AMP evidence.
- The Next.js App Router and OpenNext deployment do not imply AMP support.
- A mobile-responsive page is not an AMP page.
- An embedded Google map is not an AMP document.
- Absence of AMP is not an indexing defect.
- A future external marketing request for AMP would require an explicit product and architecture decision before implementation.

## Validation

- Handoff, ledger, dependency manifests, Next/OpenNext/Wrangler configuration, route tree, metadata, source markup, sitemap, robots, structured data, and generated build output were inspected.
- No AMP dependency, route, template, metadata relationship, markup, sitemap entry, robots surface, or generated file was found.
- All three required AMP artifacts exist and agree on `skipped_not_applicable`.
- Application tests, typecheck, lint, build, and browser QA were intentionally skipped because no runtime, configuration, component, route, metadata, schema, or public-content file changed; the immediately preceding handoff validated the same application with 60/60 tests and a successful OpenNext build.
- `git diff --check` passed after artifact and ledger reconciliation.

## Supporting Outputs

- [Implementation summary](./15_6_AMP_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./15_6_AMP_HUMAN_TODO.md)
- [Sitemap architecture report](./15_5_SITEMAP_ARCHITECTURE_REPORT.md)
- [Route inventory](./support/ROUTE_INVENTORY.md)
