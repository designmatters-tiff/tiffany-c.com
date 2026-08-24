# tiffany-c.com

Personal portfolio site for Tiffany C., a product & design leader in Melbourne.
Goals: land a Director / Head of Product Design role, attract fractional and
consulting clients, and support speaking presence.

## Read this first: what is actually true

The repo contains older planning docs that **do not describe the current build**:

- `BRIEF_5.md` says the stack is Next.js (App Router). **It is not.** The site is
  Vite + React 18, no framework router.
- `guidelines/Guidelines.md` is an untouched Figma Make template. Ignore it.
- `README.md` is the generic Figma Make export blurb.

**`src/app/App.tsx` is the source of truth.** When a doc and the code disagree,
the code wins. Read the code before acting on anything a `BRIEF_*.md` claims.

## Stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **motion** (Framer Motion v12) for animation
- **lucide-react** for icons
- Deployed to Vercel; domain via Porkbun

Commands:

```bash
npm install
npm run dev      # vite dev server, PORT env var respected (default 5173)
npm run build    # vite build -> dist/
```

There is no test suite, no linter, and no typecheck script. Verify changes by
running the dev server and looking at the page.

## Architecture

**Nearly the entire site is one file: `src/app/App.tsx` (~2,500 lines).** This is
deliberate — it started as a Figma Make export. Do not split it into modules
unless explicitly asked; cross-file refactors here create more churn than value.

Structure within `App.tsx`, in order:

1. Asset imports (`@/imports/...`, `@/work/...`)
2. Logo SVG path constants (`T_PATH`, `F_PATH`, `DOT_PATH`)
3. Colour + gradient constants
4. `type Page` — the router union
5. Contexts (`DarkModeCtx`, `AccordionCtx`)
6. Page components and shared chrome
7. Content data arrays (`SECTIONS`, `EXPERTISE_CARDS`, `SPEAKING_EVENTS`)
8. `export default function App()` — holds page state and renders everything

`src/app/components/ui/*` is the stock shadcn/ui set from the Figma Make export.
Most of it is unused. Don't assume a component there is wired into the site.

### Routing

Routing is a `useState` holding a `Page` union — **no react-router, no URLs, no
history**. Navigation is `setPage(...)`, passed down as `onNavigate`.

```ts
type Page = "home" | "work" | "workDetail" | "awards" | "speaking"
          | "coaching" | "connect" | "speakingInquiry" | "businessCase"
```

Detail pages (`workDetail`, `speaking`) also read `detailKey` to know which card
or event to show. Page transitions are `motion` animations keyed on `motionKey`.

## Design system

Colours are module-level constants in `App.tsx` — use them, don't hardcode hex:

| Constant | Value | Use |
|---|---|---|
| `GOLD` | `#B2933B` | Headings, links, primary accent |
| `GOLD_BRIGHT` | `#e3c85c` | Dark-mode gold |
| `INK` | `#111111` | Body text (light mode) |
| `DIM` | `#666660` | Secondary text |
| `NAV_GRADIENT` | gold → blue → pink | Nav bar |

Page backgrounds are `#f8f7f5` light; dark varies by page (`#282828`, `#181410`).
Section accents: Work grey, Awards blue, Coaching purple, Connect pink.

**Fonts** are self-hosted in `public/fonts` and applied inline via Tailwind
arbitrary values, not a theme config:

- **Museo** (`font-['Museo',sans-serif]`) — headings, weight 300
- **Avenir** (`font-['Avenir',sans-serif]`) — body

Styling is Tailwind utilities plus inline `style={{}}` for anything dynamic
(dark mode, transitions, computed sizes). Follow that pattern — it's consistent
throughout and mixing in a different approach will look out of place.

**Dark mode** is `DarkModeCtx`, read via `const isDark = useContext(DarkModeCtx)`
and branched inline. Every colour decision needs both branches.

## Conventions that recur

- **Shrink-on-scroll headers.** Detail pages track `scrollTop > 24` and pass a
  `compact` / `headerScrolled` flag down to shrink the header and bottom nav
  together. If you add a detail page, match this.
- **Mobile vs desktop** are often two sibling blocks (`md:hidden` and
  `hidden md:flex`) rather than one responsive block. Change both.
- **Transitions** are inline, typically `0.25s`–`0.35s ease`.
- `useIsMobile()` exists for logic that CSS can't express.

## Assets

- `src/imports/` — Figma Make exports (photos, SVG components)
- `src/work/` — case study images, organised by area
- `public/fonts/` — Museo + Avenir files

Import assets as ES modules (`import x from "@/work/..."`) so Vite fingerprints
them. `@` aliases to `src/`. **Commit new image files** — they've been missed
before, which breaks the build for everyone else while working locally.

Images are large and unoptimised (several >2MB PNGs). Prefer `.avif` for new
case study images.

## Known rough edges

Don't "fix" these as drive-by changes — they're known:

- `SPEAKING_FORM_ENDPOINT` is the placeholder `"https://formspree.io/f/YOUR_FORM_ID"`.
  The speaking inquiry form does not submit anywhere real yet.
- The business case passcode (`PASSCODE` in `BusinessCasePage`) is a hardcoded
  client-side string. It's obfuscation for a portfolio piece, not security — the
  case study content ships in the JS bundle regardless. Fine as-is, but don't put
  anything genuinely confidential behind it.
- `.DS_Store` files appear in image folders. Gitignored, but check before `git add`.
- `default_shadcn_theme.css` and most of `components/ui/` are unused export cruft.

## Working agreements

- Small, focused commits with a clear subject line describing the user-visible
  change (e.g. `Awards: stack dual photos vertically on mobile`).
- When working from a cloud session, prefer a branch + PR over pushing to `main`
  so changes get a second look on a full screen before going live.
- Verify visually before saying something works. `npm run dev`, then check the
  actual page at both mobile and desktop widths.
