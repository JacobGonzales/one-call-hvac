# Internal Architecture Human TODO

No human action blocks completion of handoff 08 or the next canonical handoff.

## 1. Decide The Financing Position

- Action: confirm that financing is unavailable, or provide the approved provider name, application URL, eligibility rules, rates or rate ranges, terms, and required disclosures.
- Reason: the handoff calls for support-path review, but the repository has no evidence that permits a financing link or claim.
- Affected scope: future services, pricing, contact, and navigation content.
- Priority: medium.
- Status: nonblocking.
- Evidence: `08_INTERNAL_ARCHITECTURE_REPORT.md` and `support/PAGE_CONTENT_GAPS.md`.
- Completion condition: an approved public financing contract exists, or the owner confirms that no financing path should be added.

## 2. Resolve The Emergency-Page Lifecycle

- Action: approve complete emergency-service scope, availability wording, response expectations, safety guidance, and conversion content, or approve removing/de-emphasizing the route.
- Reason: `/emergency` remains a thin `noindex, follow` placeholder in primary navigation.
- Affected scope: `/emergency`, primary navigation, sitemap/indexability policy, metadata, and journey mapping.
- Priority: high.
- Status: nonblocking for this run.
- Evidence: `support/ROUTE_INVENTORY.md` and `support/PAGE_CONTENT_GAPS.md`.
- Completion condition: the route has approved complete content and search intent, or an approved retirement plan.

## 3. Resolve The Social-Page Lifecycle

- Action: provide approved social profile URLs and durable page content, or approve removing/de-emphasizing the placeholder.
- Reason: `/about/social-media` has no verified destinations and remains `noindex, follow`.
- Affected scope: primary navigation, About route family, metadata, and journey mapping.
- Priority: medium.
- Status: nonblocking.
- Evidence: `support/ROUTE_INVENTORY.md` and `support/PAGE_CONTENT_GAPS.md`.
- Completion condition: verified public profiles/content exist, or the route is intentionally retired.

## 4. Verify Published Price Claims

- Action: verify that the current `$89` diagnostic and `$99/year` Gold membership claims, inclusions, and waiver language remain accurate.
- Reason: this handoff makes the existing `/#pricing` section easier to reach but does not independently validate business terms.
- Affected scope: homepage pricing, services decision support, and contact preparation links.
- Priority: high.
- Status: nonblocking for code completion; required before relying on the claims operationally.
- Evidence: `07_CONTENT_DEPTH_HUMAN_TODO.md` and `08_INTERNAL_ARCHITECTURE_REPORT.md`.
- Completion condition: the owner confirms the displayed prices and terms or supplies approved corrections.

## 5. Approve Deployment Verification

- Action: deploy the reviewed repository state when ready, then verify all related-page links and hash targets on `https://utahonecall.com`.
- Reason: validation in this run was local; no production mutation was authorized.
- Affected scope: five completed public routes.
- Priority: medium.
- Status: nonblocking.
- Evidence: `08_INTERNAL_ARCHITECTURE_IMPLEMENTATION_SUMMARY.md`.
- Completion condition: production navigation matches the validated local behavior.
