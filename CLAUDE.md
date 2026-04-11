# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # type-check (tsc -b) then bundle (vite build)
npm run lint      # ESLint
npm run preview   # serve the production build locally
npm run deploy    # deploy the app to Github Pages
```

There are no tests configured yet.

## Architecture

React 19 + TypeScript 6 SPA, bundled with Vite 8. The build pipeline runs `tsc -b` before Vite, so TypeScript errors (including broken imports) fail the build.

### Path aliases

`@/*` maps to `src/*` (defined in `tsconfig.app.json` `paths`, consumed by `vite-tsconfig-paths` — no duplication in `vite.config.ts`).

```ts
import Foo from '@/components/Foo'; // resolves to src/components/Foo
```

### TypeScript strictness

`tsconfig.app.json` enforces `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly` on top of the defaults. `skipLibCheck: true` is set, so only project source is checked.

### Styling

Global CSS variables for light/dark theming live in `src/index.css`. Component-scoped styles use plain `.css` files imported directly into the component file.

### Linting

ESLint v9 flat config (`eslint.config.js`) with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. No Prettier is configured.
