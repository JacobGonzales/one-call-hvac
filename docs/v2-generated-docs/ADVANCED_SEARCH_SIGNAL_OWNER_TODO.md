# Advanced Search Signal Owner TODO

| Priority | Blocking | Action | Reason / affected scope | Completion condition |
|---|---:|---|---|---|
| Critical | Blocks domain consolidation | Configure reviewed path-preserving permanent redirects from `onecallheatingandair.com` to `utahonecall.com` at the legacy host | Both domains currently serve independent self-canonical 200 pages | Every valid old URL returns one 301/308 hop to the matching new URL; invalid old URLs resolve intentionally; new URLs remain 200/self-canonical |
| High | Blocks empirical refinement | Verify `utahonecall.com` in Search Console, submit the sitemap, and collect enough query/page evidence before rewriting titles or headings | Current title/H1 assessment is source-based; no result-performance evidence exists | Dated URL-inspection and performance exports are available and support handoff 04 can be rerun |
| High | Blocks alternate-language implementation | Decide whether a genuine Spanish or other locale experience is planned; if yes, approve translated equivalent URLs and a content owner | `hreflang` requires real, reciprocal alternate pages and should not be invented | Approved locale list, route mapping, translations, fallback behavior, and QA owner exist |
| Medium | Nonblocking | Review whether large search image previews are acceptable for all public marketing imagery | Indexable pages now explicitly allow large previews | Owner accepts the policy or supplies route/image-specific restrictions and approved replacement assets |
| Medium | Nonblocking | Capture actual title links and snippets after deployment for a stable branded/service/local query set | Search engines may rewrite technically valid titles or snippets per query/device | Dated observations include query, device, result title, snippet, URL, and whether a source change is justified |
| Medium | Blocks public claim expansion | Verify pricing, availability, response timing, credentials, permits, warranties, rebates, and service-area assertions | Search snippets can surface any public page content | Claim register has approved wording, evidence owner, and review/expiry dates |

No owner action blocks the next repository handoff. Do not add `hreflang`, localized canonicals, or translated metadata until the corresponding public pages actually exist.

