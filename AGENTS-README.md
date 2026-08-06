# AGENTS README

## Purpose

This repository keeps shared React guidance separate from One Call HVAC-specific instructions.

The source files are:

- `AGENTS.base-react.md`: reusable guidance for React repositories
- `AGENTS.repo-one-call-hvac.md`: stack, routes, commands, and conventions for this app

`AGENTS.md` is the generated guide that tools and contributors read.

## Editing Workflow

1. Edit the shared or repo-specific source file.
2. Run `npm run sync:agents`.
3. Review the regenerated `AGENTS.md`.
4. Keep the source files and generated guide together.

Do not maintain `AGENTS.md` as a separate source of truth.

## What Belongs Where

Use `AGENTS.base-react.md` for guidance that should travel to other React projects, such as code organization, naming, TypeScript, dependencies, and testing expectations.

Use `AGENTS.repo-one-call-hvac.md` for this app’s Vite stack, route inventory, asset paths, suite migration rules, commands, and deployment constraints.

## Sync Command

```bash
npm run sync:agents
```

This runs `scripts/sync-agents.mjs` and combines the two source guides into the root `AGENTS.md`.
