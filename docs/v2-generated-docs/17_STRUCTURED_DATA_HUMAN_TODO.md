# Structured Data Human TODO

## 1. Deploy And Validate Canonical URLs

- Action: deploy the validated repository state, then test `/`, `/services`, `/about`, `/location`, and `/contact` with Google's Rich Results Test and URL Inspection when Search Console becomes available.
- Reason: external tools can only evaluate the canonical production output after deployment; repository tests cannot guarantee Google processing or presentation.
- Affected scope: Organization identity, Breadcrumb rich-result eligibility, contextual Service data, and production crawler visibility.
- Priority: critical.
- Status: blocks production verification, not local handoff completion.
- Evidence: `17_STRUCTURED_DATA_REPORT.md` and inherited handoff-15 deployment gap.
- Completion condition: production JSON-LD parses without errors, all four breadcrumb pages report the intended BreadcrumbList, the homepage exposes one WebSite/Organization graph, and no unintended schema types appear.

## 2. Supply Identity Facts Before Any LocalBusiness Expansion

- Action: provide owner-approved service-area-only versus storefront/hybrid status, a public physical address if applicable, public hours, Google Business Profile URL, and approved social profiles.
- Reason: Google LocalBusiness markup requires a physical address, and every added property must match visible public content.
- Affected scope: any future `LocalBusiness`/`HVACBusiness`, PostalAddress, opening hours, coordinates, or `sameAs` implementation.
- Priority: conditional.
- Status: nonblocking unless richer local-business markup is requested.
- Evidence: eligibility matrix in `17_STRUCTURED_DATA_REPORT.md`.
- Completion condition: facts have a maintained public source, visible page parity, and owner approval before a new schema implementation is authorized.

## 3. Keep Review-Star Markup Disabled

- Action: do not add `Review` or `AggregateRating` schema for the manually copied Google reviews, even if the carousel or review count changes.
- Reason: Google treats Organization/LocalBusiness reviews controlled by the reviewed business as self-serving and ineligible for review snippets.
- Affected scope: Google review component and any future schema/plugin configuration.
- Priority: high maintenance rule.
- Status: ongoing, nonblocking.
- Evidence: review eligibility decision in `17_STRUCTURED_DATA_REPORT.md`.
- Completion condition: production markup remains free of self-serving rating/review schema unless Google policy materially changes and a new evidence-backed review is completed.

## 4. Verify Organization Logo Presentation

- Action: after deployment, confirm that the public logo URL is crawlable and that the transparent logo remains readable on a plain white background.
- Reason: Google requires a crawlable representative logo and specifically advises checking white-background presentation.
- Affected scope: Organization logo eligibility, not the separate square-favicon requirement.
- Priority: medium.
- Status: nonblocking and post-deployment.
- Evidence: Organization logo section in `17_STRUCTURED_DATA_REPORT.md`.
- Completion condition: the canonical logo URL returns the expected PNG and the artwork is visually acceptable on white; replace only with approved brand artwork if it is not.

## Search Console And Analytics

No Search Console or Analytics setup task is assigned. URL Inspection and enhancement monitoring remain deferred until the project has access and real material.

