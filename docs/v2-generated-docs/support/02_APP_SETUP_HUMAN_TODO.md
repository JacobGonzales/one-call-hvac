# App Setup Human TODO

No human action currently blocks canonical run 04, the project subpage brief handoff.

| Action | Reason | Affected scope | Priority | Blocking status | Evidence | Completion condition |
|---|---|---|---|---|---|---|
| Ensure the Cloudflare build environment uses Node 22.9 or newer | The repository now declares the minimum required by Wrangler and npm, but the external build image remains provider-owned | Cloudflare Builds and future deployments | High before next deploy | Nonblocking for run 04; blocking deployment sign-off | `package.json`, `.nvmrc`, setup reference | A Cloudflare build log shows a compatible Node version and completes successfully |
| Confirm whether installed-but-unused compatibility packages are intentional | MUI X, Radix, dayjs, Tailwind tooling, `@next/third-parties`, Playwright, and some ESLint helpers have no current source/config imports | Dependency maintenance and install surface | Medium | Nonblocking | Setup report and dependency inventory | Owner confirms planned use, or authorizes a separate removal pass followed by lockfile and full-suite validation |
| Deploy and verify the accumulated run-02/run-03 changes | Local OpenNext builds do not update `utahonecall.com` | Cloudflare Worker and production metadata/runtime | High when ready to publish | Nonblocking for run 04; blocking production sign-off | Run-02 and run-03 implementation summaries | Authorized deployment succeeds; direct routes, robots, sitemap, 404, and inquiry workflow are verified |
