# Linkable Asset Human TODO

No human action blocks completion of handoff 14 or the next canonical handoff.

## 1. Approve The Public Fact Sheet

- Action: verify the public business name, Brigham City home base, 41-community/seven-county summary, four service categories, phone, email, and canonical website.
- Reason: the fact sheet consolidates repository-visible facts but this handoff did not independently verify business records.
- Affected scope: `/about` company reference and any partner, press, directory, or local organization using it.
- Priority: high before external promotion.
- Status: nonblocking for local implementation.
- Evidence: `14_LINKABLE_ASSET_REPORT.md` and the rendered About fact sheet.
- Completion condition: an owner approves every field, records the approval date, and supplies corrected wording for any mismatch.

## 2. Assign A Refresh Owner

- Action: assign someone to review the fact sheet and planning reference whenever contact, service-area, service-category, request-form, or decision-guide content changes.
- Reason: both assets display a reviewed date and should not imply freshness after their underlying facts change.
- Affected scope: `PUBLIC_CONTENT_LAST_REVIEWED`, `/about`, and `/services#service-planning-checklist`.
- Priority: medium.
- Status: nonblocking.
- Evidence: both sections currently display `August 6, 2026`.
- Completion condition: a named owner and review cadence exist, and the shared date is updated only after the source values are actually checked.

## 3. Supply SME Inputs For Richer Resources

- Action: if a calculator, technical guide, case study, seasonal checklist, or downloadable asset is desired, provide the approved topic, audience, assumptions, source records, safety boundaries, reviewer, and refresh cadence.
- Reason: calculations and expertise claims cannot be inferred safely from marketing copy alone.
- Affected scope: future informational/linkable assets.
- Priority: optional.
- Status: blocking only the specific richer asset.
- Evidence: `14_LINKABLE_ASSET_REPORT.md#why-no-calculator-or-download`.
- Completion condition: inputs are complete enough to create useful content without invented savings, sizing, eligibility, diagnosis, or performance claims.

## 4. Deploy And Validate Production

- Action: deploy the reviewed repository state, then test the About fact-source links and the Services planning deep link on `https://utahonecall.com`.
- Reason: this run validated local production output only.
- Affected scope: public rendering, responsive layout, sticky-header anchor positioning, and conversion links.
- Priority: medium.
- Status: nonblocking.
- Evidence: local validation table in `14_LINKABLE_ASSET_IMPLEMENTATION_SUMMARY.md`.
- Completion condition: both assets render with correct facts, dates, links, and no console errors on production desktop and mobile.

