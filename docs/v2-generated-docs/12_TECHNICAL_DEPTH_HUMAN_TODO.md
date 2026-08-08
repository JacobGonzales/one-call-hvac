# Technical Depth Human TODO

No human action blocks completion of handoff 12 or the next canonical handoff.

## 1. Enforce One Production Host

- Action: permanently redirect every legacy-domain and `www` URL to the matching path on `https://utahonecall.com`.
- Reason: repository canonicals identify the apex host, but external hosts can still publish independent 200 pages unless their platforms redirect them.
- Affected scope: canonical consolidation, duplicate prevention, inbound links, and migration continuity.
- Priority: high.
- Status: nonblocking for local code completion; blocking for complete production host consolidation.
- Evidence: `12_TECHNICAL_DEPTH_REPORT.md` and the existing domain-migration row in `support/PAGE_CONTENT_GAPS.md`.
- Completion condition: HTTP checks show one-hop permanent path-preserving redirects from every alias and no independent self-canonical legacy pages.

## 2. Deploy And Repeat Production Edge Checks

- Action: deploy the reviewed repository state, then check `/`, `/services/`, a parameterized `/services` URL, `/404`, an unmatched URL, `/robots.txt`, and `/sitemap.xml` on the public domain.
- Reason: this run validated local Next.js/OpenNext artifacts, not the deployed Cloudflare response path.
- Affected scope: status codes, canonical output, robots/noindex behavior, image preloads, and visible content.
- Priority: high after review.
- Status: nonblocking.
- Evidence: local validation table in `12_TECHNICAL_DEPTH_IMPLEMENTATION_SUMMARY.md`.
- Completion condition: production matches the documented status, canonical, indexability, visibility, and image-loading contracts with no console errors.

## 3. Decide Placeholder Lifecycles

- Action: approve full content for `/emergency` and `/about/social-media`, keep each intentionally noindex, or remove/de-emphasize the route.
- Reason: both are controlled today but intentionally thin and should not remain indefinite without an owner decision.
- Affected scope: primary navigation, sitemap eligibility, page depth, and future indexability.
- Priority: medium.
- Status: nonblocking now; blocking before indexing either route.
- Evidence: `12_TECHNICAL_DEPTH_REPORT.md` and `support/repo-context/PROJECT_SUBPAGE_BRIEF.md`.
- Completion condition: each route has a recorded owner decision and either substantive approved content or an intentional noindex/removal policy.

