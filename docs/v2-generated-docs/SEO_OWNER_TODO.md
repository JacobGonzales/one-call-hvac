# SEO Owner TODO

| Priority | Blocking | Action | Reason / affected scope | Completion condition |
|---|---:|---|---|---|
| High | Blocks richer local schema | Confirm legal/public business name, physical-address versus service-area-only model, public hours, license identifier, and approved business category | LocalBusiness/HVACBusiness markup must not guess administrative facts | Approved written business identity record exists |
| High | Blocks safe content expansion | Verify every displayed price, diagnostic waiver, membership benefit, discount, response-time statement, permit/warranty claim, and tax-credit/rebate statement | These claims appear in homepage/services/about/contact copy and may be amplified by later SEO work | Each claim is approved, revised, or removed |
| High | Blocks production measurement | Set up and verify Google Search Console after deployment, submit the sitemap, and collect enough data for a useful export | No query/page performance evidence exists | Export supplied under `docs/data/google-search-performance/` and support handoff 04 rerun |
| Medium | Nonblocking | Decide whether Analytics/GA4 is wanted and approve the privacy/consent approach before adding it | No analytics integration or post-click evidence exists | Measurement decision documented; if approved, implementation and exports are available |
| Completed | No | Reviewed Keyword Planner evidence was supplied and reconciled on 2026-08-06 | The source provides Planner volume/priority evidence but not organic rank or identified export geography | Fixed-route reconciliation recorded in `KEYWORD_PLANNER_ROUTE_RECONCILIATION.md`; Search Console/Analytics follow-up remains separate |
| Medium | Blocks placeholder indexing | Approve complete emergency page content or retain `/emergency` as noindex | Current route is conversion-critical but thin | Route lifecycle decision and approved copy recorded |
| Medium | Blocks social route completion | Supply approved social profile URLs/content or remove/de-emphasize `/about/social-media` | Current route is a noindex placeholder | Route lifecycle decision recorded |
| Medium | Blocks richer sharing previews | Supply an approved social-share image, preferably a purpose-built landscape asset | Route metadata has text social cards but no approved OG image | Asset and usage rights approved and added |
| Medium | Nonblocking | Confirm the public email/inquiry recipient and whether the Gmail address should remain visible | Contact/entity consistency | Approved public contact record exists |
| Low | Nonblocking | Establish a manual Google review refresh cadence | Hard-coded relative dates and total count can become stale | Named owner and refresh interval documented |

No item blocks the current technical SEO baseline or the next metadata handoff. Do not implement richer local/review schema until the corresponding facts are approved.
