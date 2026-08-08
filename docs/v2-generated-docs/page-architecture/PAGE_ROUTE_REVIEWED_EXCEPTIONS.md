# Page And Route Reviewed Exceptions

| ID | Contract area | Scope | Reviewed exception | Reason | Reopen condition |
|---|---|---|---|---|---|
| PRE-01 | Internal site search | Entire site | No route-to-search-index coverage is required | No internal site-search feature, index, or search route exists | A real site-search feature is approved |
| PRE-02 | Redirects and retired routes | Repository routing | No redirect-source, chain, loop, or retired-outcome records are required | No middleware, redirects, rewrites, or retired routes exist in repository configuration | A redirect, rewrite, legacy-path migration, or retired route becomes repository-owned |
| PRE-03 | Page images | Seven marketing routes | One shared social-preview fallback satisfies page-image coverage | The current metadata system intentionally owns one verified default image and does not claim page-specific creative | Approved route-specific preview images are introduced |
| PRE-04 | Structured data | `/emergency`; `/about/social-media` | No new JSON-LD type is required by run 34 | The approved Phase-2 schema scope omits these families, and architecture validation may not silently change schema meaning | Owner approves supported breadcrumb or other schema expansion |
| PRE-05 | Error behavior | `/404`; unmatched paths | The direct utility and framework fallback remain distinct test policies | One is a concrete utility route and one is framework response behavior | Next.js error routing changes materially |
| PRE-06 | Rendered conformance | All visual families | Static/component contracts do not claim 200% zoom, custom spacing, assistive technology, forced colors, or every target browser | These require dedicated rendered/manual evidence | Formal accessibility or browser sign-off is requested |
| PRE-07 | Browser-test inventory | All families | Contract tests cover every family; browser tests may remain representative | The handoff explicitly rejects requiring every route in a manually curated browser list when family sampling is intentional | A rendered behavior changes or a family-specific browser defect appears |
| PRE-08 | Page scaffolding | Development tooling | No scaffold generator or scaffold tests are required | The owner fixed the scope at eight pages and explicitly skipped canonical run 35 | Additional repeatable page production is approved |
| PRE-09 | Live integrations | Inquiry API and external search systems | No live Resend, Search Console, Analytics, or third-party fetch occurs in ordinary contracts | Contract tests must remain deterministic and secret-safe | Explicit external validation is authorized with required access/evidence |

