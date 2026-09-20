# tiffany-c.com

Personal portfolio site for Tiffany C., a product & design leader in Melbourne.
Goals: land a Director / Head of Product Design role, attract fractional and
consulting clients, and support speaking presence.

## Read this first: what is actually true

**`src/app/App.tsx` is the source of truth** for what the site does. When a doc
and the code disagree, the code wins.

- **`BRAND.md`** — voice, tone, colour, motion, and the rules behind them. Read it
  before writing user-facing copy or adding anything visual. It also tracks open
  brand items (including a broken form endpoint that blocks launch).
- `guidelines/Guidelines.md` is an untouched Figma Make template. Ignore it.
- `README.md` is the generic Figma Make export blurb.

Earlier `BRIEF_*.md` planning docs described a build that never happened (Next.js,
light-mode-only, a different palette). They've been replaced by `BRAND.md`.

## Stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **motion** (Framer Motion v12) for animation
- **lucide-react** for icons
- Deployed to Vercel; domain via Porkbun
- **`main-v2` is the working branch and the repo default.** `main` is frozen as
  a backup. Vercel's Production Branch is a separate setting from GitHub's
  default — if the live site looks stale, check it points at `main-v2`.

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

Routing is a `useState` holding a `Page` union — **no react-router** — but every
state has a real URL, pushed through the History API. `pathOf()` maps state to a
path, `routeOf()` maps a path back, and `titleOf()` / `descriptionOf()` give each
route its own metadata. Navigation is still `setPage(...)`, passed down as
`onNavigate`; the URL follows automatically.

`npm run build` runs `scripts/prerender.mjs` after vite, which visits every route
in a headless browser and writes `dist/<route>/index.html` with that page's title,
description, canonical and share card, plus `sitemap.xml`. Without a usable
browser it degrades to metadata-only shells rather than failing the build.

```ts
type Page = "home" | "work" | "workDetail" | "awards" | "speaking"
          | "coaching" | "connect" | "speakingInquiry" | "businessCase"
          | "kaiCase" | "appleHealthCase" | "testimonials"
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
- **Nunito Sans** (`font-['Nunito_Sans',sans-serif]`) — body. Note the
  underscore: Tailwind arbitrary values turn `_` into a space.

Styling is Tailwind utilities plus inline `style={{}}` for anything dynamic
(dark mode, transitions, computed sizes). Follow that pattern — it's consistent
throughout and mixing in a different approach will look out of place.

**Dark mode is dormant — do not build for it.** `THEME_TOGGLE_ENABLED` is
`false`, there is no way for a visitor to turn it on, and the site ships
light-only. New work takes the light value and stops there; don't write an
`isDark` branch, and don't spend a verification pass on a theme nobody can
reach.

The machinery stays where it is: `DarkModeCtx` still exists, `isDark` still
reads from it, and the branches already scattered through `App.tsx` are
harmless — `isDark` is permanently `false`, so they resolve to the light value.
Leave them be rather than unpicking them. If the toggle is ever switched back
on, anything added in the meantime will need its dark half written then.

## Conventions that recur

- **Shrink-on-scroll headers.** Detail pages track `scrollTop > 24` and pass a
  `headerScrolled` flag down to shrink the header. The bottom nav no longer
  shrinks with it — see below.
- **The bottom nav is site chrome, not page content.** `App` renders one
  `StickyPageNav` outside the page-transition layer; pages must not render
  their own. Inside the transition it faded and scaled back in on every
  navigation, which read as the whole window reloading.
- **Mobile vs desktop** are often two sibling blocks (`md:hidden` and
  `hidden md:flex`) rather than one responsive block. Change both. The header
  logomark is the exception: its sizes are CSS custom properties so there is
  no first-paint flash at the wrong size.
- **Transitions** are inline, typically `0.25s`–`0.35s ease`.
- `useIsMobile()` exists for logic that CSS can't express.
- **The logomark does not animate between pages.** It was briefly a shared
  layout element; inside an incoming page it rides that page's cross-fade, so
  it spent most of its travel near-transparent and read as a pop. It fades
  with its page like everything else.
- **The footer's legal clauses belong on the work itself.** Every page shows
  the credit line; only an actual case study adds a clause —
  `variant="work"` where content is shared with permission, `variant="nda"`
  on the passcode-gated client work. The category listings under `/work`
  take the plain credit.
- **Client credits link out.** The Client field in a case study's META grid
  is a link to the client, in `GOLD` with the site's underline sweep, opened
  in a new tab with `rel="noopener noreferrer"`. The ones in use:

  | Client | URL |
  |---|---|
  | Plus Xnergy | `https://www.plusxnergy.com/` |
  | TNG Digital (TNG eWallet) | `https://www.tngdigital.com.my/` |

  This covers the client credit only. A mention inside a testimonial stays
  plain — those are someone else's words, not a credit — and a client name
  inside a Work card bullet is already a link to the case study itself.
- **Contact lists take nested arrays.** An entry in `ContactListPage`'s
  `items` (or a `SECTIONS` entry's) can be `["LinkedIn", "Instagram"]` to put
  several destinations on one row. Both the standalone page and the homepage
  deck render through the same `ContactRow` — they had already drifted apart
  once when only one was updated.

## Mobile rules

The phone layout is not the desktop one reflowed; several of these decisions
have each been walked back once already.

- **360px is the narrowest width to check.** Not 390. The tight cases — the
  eCommerce breadcrumb, the paired social row on Connect — only bite there.
  375x667 (iPhone SE) is worth a look too: the hero genuinely overflows at
  that height and the slide scrolls. That is by design, not a bug to fix.
- **Chrome is deliberately bare.** The bottom nav is a 44px hamburger pill at
  bottom left — no name, no page label. Both only repeated what the page
  already said, and cost the full width of the screen to do it.
- **The eyebrow line is shared, and something must hold it open.** The header
  logomark sits on that line, centred on it. Whatever else is there —
  breadcrumbs on a third-level page, a `text-label` eyebrow elsewhere — the
  row has to keep its height, or the heading rides up underneath the mark.
  When the breadcrumbs were briefly desktop-only, mobile needed an empty 18px
  spacer in their place for exactly this reason.
- **The logomark is 24px on mobile, 28px on desktop.** Mobile centres it on
  the eyebrow's line rather than hanging it from the top; the tap target stays
  44px around it. The hover ring is desktop-only — nothing on a phone can
  hover to reveal it.
- **44px is the floor for anything tappable**, however small the thing inside
  it looks.
- **Returning home lands on the hero, not on a matching slide.** The homepage
  is a deck you swipe through; landing on the slide matching the page you left
  put you at the end of the track when you came from Connect or Coaching, with
  the forward swipe dead on arrival. That reads as a broken gesture. Both the
  logomark and the menu's "Tiffany C." go to slide 0.
- **Keep the hero above the fold.** `HERO_BOTTOM_RESERVE` accounts for the
  floating nav, its offset and the safe-area inset. Anything added to the hero
  competes with the body copy for the same screen — check it at 375x667 before
  assuming it fits.

## Analytics

Vercel Web Analytics, wired in `src/main.tsx` via `<Analytics />` from
`@vercel/analytics/react`. The component only injects Vercel's own
`/_vercel/insights/script.js`; that script does the counting, and follows
`pushState` by itself, so the hand-rolled router needs no wiring.

The tag also ends up in every prerendered HTML file, because `prerender.mjs`
serialises the live DOM. That is not a double count — `inject()` checks
`document.head` for an existing tag before adding one, and appends there.

If the dashboard ever shows no pageviews, suspect the catch-all rewrite in
`vercel.json` (`/(.*)` -> `/index.html`) swallowing the script path. Vercel
handles `/_vercel/*` ahead of user rewrites, so it should not, but the fix
would be to exclude it: `"source": "/((?!_vercel/).*)"`.

## Assets

- `src/imports/` — Figma Make exports (photos, SVG components)
- `src/work/` — case study images, organised by area
- `public/fonts/` — Museo + Nunito Sans files

Import assets as ES modules (`import x from "@/work/..."`) so Vite fingerprints
them. `@` aliases to `src/`. **Commit new image files** — they've been missed
before, which breaks the build for everyone else while working locally.

Images are large and unoptimised (several >2MB PNGs). Prefer `.avif` for new
case study images.

## Known rough edges

Don't "fix" these as drive-by changes — they're known:

- `SPEAKING_FORM_ENDPOINT` now points at a real Formspree form. Formspree only
  starts forwarding once the registered address is confirmed, so one live
  submission still needs sending to check it reaches the inbox.
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
