# Indexing And Crawl Human TODO

## 1. Deploy The Validated Repository State

- Action: deploy the current OpenNext build to the `utahonecall.com` Cloudflare Worker.
- Reason: production currently serves an older build; `robots.txt` and `sitemap.xml` return 404, placeholder noindex metadata is absent, and live titles/descriptions differ from source.
- Affected scope: all public pages, discovery files, metadata, and crawler access.
- Priority: critical.
- Status: blocks production crawl/index readiness.
- Evidence: `15_INDEXING_AND_CRAWL_READINESS_REPORT.md#3-production-is-behind-the-repository`.
- Completion condition: the deployed build identifier is recorded and post-deploy checks below pass.

## 2. Run The Post-Deploy Crawl Contract

- Action: after deployment, verify `robots.txt`, `sitemap.xml`, all five index targets, both placeholders, an unknown path, and the inquiry API behavior from outside Cloudflare.
- Reason: local output cannot prove edge routing, cache state, or WAF behavior.
- Affected scope: production discovery, crawling, indexability, and suppression.
- Priority: critical after deployment.
- Status: blocks production validation.
- Evidence: local/live comparison in the report.
- Completion condition:
  - `/robots.txt` returns 200 text/plain with wildcard and OAI-SearchBot rules, `/api/` exclusion, canonical host, and sitemap;
  - `/sitemap.xml` returns 200 XML with exactly five canonical URLs;
  - the five index targets return 200, self canonicals, and index/follow policy;
  - both placeholders return 200, `noindex, follow`, and remain absent from the sitemap;
  - an unknown path returns 404 and noindex;
  - Cloudflare does not challenge or block normal crawler retrieval.

## 3. Consolidate The Legacy Domain

- Action: configure permanent path-preserving redirects from `onecallheatingandair.com` and any legacy `www` variant to `https://utahonecall.com`.
- Reason: the legacy Vercel host currently serves an independent self-contained 200 page, creating duplicate-host discovery and consolidation risk.
- Affected scope: every legacy path, query string, backlink, bookmark, and search signal.
- Priority: high.
- Status: blocks canonical host consolidation, not local application validation.
- Evidence: live HTTP checks in the report and the domain migration row in `PAGE_CONTENT_GAPS.md`.
- Completion condition: representative root and deep legacy URLs return one permanent redirect to the matching apex path with query strings preserved and no chain.

## 4. Decide And Configure The `www` Variant

- Action: decide whether `www.utahonecall.com` should resolve and permanently redirect to the apex; if yes, add the required DNS/custom-domain and redirect configuration.
- Reason: the host currently does not resolve, so mistyped or externally linked `www` URLs fail instead of consolidating predictably.
- Affected scope: canonical host access and inbound links.
- Priority: medium.
- Status: nonblocking for apex crawl readiness.
- Evidence: live DNS failure recorded in the report.
- Completion condition: the approved policy is documented; if enabled, HTTP and HTTPS `www` requests permanently redirect to the matching apex URL without a chain.

## Search Console

No Search Console task is assigned in this handoff because the project has no Search Console material and requested that this input remain skipped. If the owner creates a property later, its inspection and sitemap-submission workflow can be reopened as a separate evidence-backed task.
