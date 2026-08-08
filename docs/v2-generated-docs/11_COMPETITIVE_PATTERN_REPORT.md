# Competitive Pattern Intelligence Report

## Run Status

- Canonical run: 17
- Main SEO step: 11
- Requested phase: implementation
- Result: stopped at the required input-availability gate
- Pre-execution rundown: delivered before the first write
- Application implementation: none
- External browsing or mutation: none

## Objective

This handoff is intended to group repeated visible competitor-page patterns into trust, offer/conversion, process, comparison/fit, and reusable section buckets. It improves extraction and reportability after concrete competitor evidence exists; it does not choose competitors or replace the comparison package in step 06.

## Inputs Inspected

- `docs/2.0/11_CODEX_HANDOFF_COMPETITIVE_PATTERN_INTELLIGENCE.md`
- Shared execution contract and current suite ledger
- Step 06 competitor-comparison report, summary, and human TODO
- `SEO_MANUAL_INPUTS.md` competitor fields
- Repository scripts, commands, dependencies, generated reports, and `docs/data/`
- Files and text matching competitor, audit, extraction, taxonomy, trust-pattern, offer-pattern, process-pattern, fit-pattern, and comparison terms
- Existing first-party reports covering search journeys, content depth, internal architecture, local signals, and visible page structures

## Input Gate

| Required evidence layer | Repository state | Result |
|---|---|---|
| Approved competitor identity | Both URL fields are blank | Missing |
| Relevance statement | No owner-approved business/search relevance note | Missing |
| Stable visible-page evidence | No captured HTML, screenshots, DOM extracts, or dated page inventories | Missing |
| Existing extraction surface | No crawler, parser, audit engine, or page-section extraction command | Missing |
| Existing pattern taxonomy | No versioned trust, offer, process, fit, or repeated-section model | Missing |
| Prior grouped observations | No competitor observations or reusable comparison package | Missing |
| Keyword/audit context | Step 06 records both exports and supported tools as absent | Missing |

The handoff explicitly says to pause instead of forcing a pattern model when no stable extraction surface exists. This repository has no raw competitor evidence at all, so inventing an extractor or taxonomy would encode assumptions before there is a sample to validate.

## Acceptance-Criteria Assessment

| Acceptance area | What could be verified | Current disposition |
|---|---|---|
| Trust-pattern visibility | First-party owner, reviews, contact, service-area, and credential claims are visible | Not competitor evidence; excluded from comparison extraction |
| Offer and conversion patterns | First-party call, quote, pricing, and emergency paths are visible | Useful later as a comparison baseline, but no competitor observation exists |
| Process-pattern visibility | First-party three-step process and service expectations are visible | No repeated cross-site pattern can be established |
| Comparison and fit patterns | First-party service fit/decision sections are visible | No competitor fit structure can be compared |
| Repeated section extraction | Route-owned React sections can be inventoried for this site | No competitor page corpus or stable external extraction surface exists |

The first-party site is not treated as its own competitor. Its sections can become the baseline column only after approved external targets provide the comparison columns.

## Hidden Assumptions And Edge Cases

- A nearby HVAC company is not automatically the right organic-search or commercial competitor.
- A homepage pattern may not appear on service or location pages; page type must be recorded.
- Dynamic, consent-gated, personalized, or location-sensitive sections can differ between captures.
- Section order alone does not establish quality, conversion impact, or search performance.
- Similar copy does not establish that a pattern should be copied; claims and legal terms remain business-specific.
- A capture needs URL, page type, date, viewport, and source method so later observations are reproducible.
- Keyword and traffic estimates must remain separate from visible page-pattern observations.

## Required Stable Extraction Surface

Once targets are approved, the smallest reliable input set is:

1. two approved public competitor domains with a relevance note;
2. one approved comparable page family per site, beginning with homepages;
3. dated visible-page captures or exports preserving headings, section order, calls to action, and accessible text;
4. source and capture method for every observation;
5. a reviewed sample from which the pattern taxonomy can be derived;
6. a repeatable output format that distinguishes observed facts from interpretation.

Only after that evidence exists should a repository tool or template group observations. The first version should use the handoff's five broad buckets and add subcategories only when the sample repeatedly supports them.

## Phased Restart Plan

### Phase 1: Evidence And Taxonomy

- Confirm targets and comparable page families.
- Capture visible sections with dates and source URLs.
- Human-review a sample and define evidence-backed subcategories.
- Record exclusions, ambiguous sections, and dynamic-content limitations.

### Phase 2: Extraction And Reporting

- Implement the smallest parser or structured-input validator appropriate to the supplied evidence format.
- Group observations without winner claims or performance inference.
- Add fixtures and tests for repeated, missing, and ambiguous sections.
- Produce a cross-site matrix separating observation, inference, and approved recommendation.

## Stop-Condition Decision

No application or extraction-tool code was added. No competitor was selected through web search, no competitor page was browsed, and no score, winner, pattern frequency, traffic estimate, keyword gap, or recommendation was fabricated.

This is not a runtime defect in the One Call site. It is an unavailable input layer for a competitive-research capability. The required report, summary, and human TODO document the exact restart contract.

## Validation

- Handoff, ledger, step 06 outputs, manual-input fields, repository scripts, dependencies, data folders, and prior reports were cross-checked.
- All three required step 11 artifacts exist and agree on the stop condition.
- Application tests, typecheck, lint, build, and browser QA were intentionally skipped because no runtime, configuration, component, route, or generator file changed.
- `git diff --check` passed after output creation and ledger reconciliation.

## Supporting Artifacts

- [Implementation summary](./11_COMPETITIVE_PATTERN_IMPLEMENTATION_SUMMARY.md)
- [Human TODO](./11_COMPETITIVE_PATTERN_HUMAN_TODO.md)
- [Step 06 applicability report](./06_COMPETITOR_COMPARISON_REPORT.md)
- [Manual competitor inputs](./SEO_MANUAL_INPUTS.md#competitor-inputs)

