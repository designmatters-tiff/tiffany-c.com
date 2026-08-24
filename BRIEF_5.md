# tiffany-c.com — Site Brief (v6)

Personal portfolio site for Tiffany C., a product & design leader in Melbourne,
Australia. Live at tiffany-c.com, hosted on Vercel, domain via Porkbun.

**Primary goals:**
- Land a Director / Head of Product Design role
- Attract freelance and consulting clients (fractional design leadership)
- Establish thought leadership and speaking presence

> **Status of this document.** Versions 1–5 of this brief were written *before*
> the site was built, and the build diverged from them substantially. This
> version describes **what actually exists**, plus what's still outstanding.
> Where this document and `src/app/App.tsx` disagree, **the code is correct** —
> update this file to match, not the other way around.

---

## Tech stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **motion** (Framer Motion v12) for animation
- **lucide-react** for icons
- Deployed to Vercel; custom domain via Porkbun

Originally exported from Figma Make, which is why nearly the whole site lives in
one file. See `CLAUDE.md` for architecture and conventions.

> Earlier briefs specified **Next.js (App Router)**. That was never built. There
> is no framework router, no SSR, and no app directory.

---

## Positioning

A product design leader with over a decade at the executive table. Co-founded and
sold a fashion label (Soak Republic, 160x ROI at exit), led design and UX research
at Malaysia's first fintech unicorn (TNG eWallet), grew teams from 1 to 22, took
products 0→1 and 1→100, and delivered across fintech, fashion/retail, financial
services, and solar energy SaaS. Most recently leading design at Cotton On Group.

**Status:** Open to new opportunities and available for freelance / consulting.

### Hero copy (as shipped)

Heading:

> Hi, I'm a product & design leader

Body:

> I work with C-suites and product teams to shape design functions that deliver.
> As a founder who built and exited my own brand, and a leader across fintech,
> retail, and SaaS, I bring an entrepreneurial and outcomes-focused lens to
> design leadership.
>
> My forte is connecting strategy to craft, breaking it into tangible wins toward
> an ultimate company vision. Because the clarity between a big decision and a
> small win is where sustainable growth lives.

The desktop variant opens "Tiff is a product & design leader" with lightly
reworded body copy.

> Earlier briefs marked a different hero line as "finalised, do not change"
> ("I connect strategy to craft…"), along with the tagline "Clarity in design.
> Grounded in purpose." Neither is in the build. The copy above superseded them.

---

## Design system

### Colour (as built)

Defined as constants at the top of `App.tsx` — use them, don't hardcode hex.

| Constant | Value | Use |
|---|---|---|
| `GOLD` | `#B2933B` | Headings, links, primary accent |
| `GOLD_BRIGHT` | `#e3c85c` | Dark-mode gold |
| `INK` | `#111111` | Body text (light) |
| `DIM` | `#666660` | Secondary text |
| `NAV_GRADIENT` | `#B2933B → #6281B7 → #C27AA6` | Nav bar |

Page background is `#f8f7f5` (light); dark mode varies per page (`#282828`,
`#181410`). Section accents: Work grey/bronze, Awards blue `#5070A0`, Coaching
purple `#9B5A88`, Connect pink `#9B5A88`.

> Earlier palette (`#f5f1eb`, `#0a0a0a`, `#b8860b`, `#c9a84c`, `#e8e0d4`) is
> superseded. The "no gradients" rule is also superseded — the three-colour nav
> gradient is now a core brand element expressing the multi-faceted work.

### Typography

- **Museo** — headings, weight 300, self-hosted (`public/fonts/museo`)
- **Avenir** — body, Book/Black, self-hosted (`public/fonts/avenir`)

Applied inline via Tailwind arbitrary values (`font-['Museo',sans-serif]`), not
through a theme config. Both are real files in the repo; the Playfair/DM Sans
fallbacks earlier briefs mention are not needed.

### Dark mode — built

Implemented via `DarkModeCtx`, toggled from the UI. Every colour decision branches
on `const isDark = useContext(DarkModeCtx)`.

> Earlier briefs said "light mode only, dark mode is a later phase." That phase
> already happened. Any new component must handle both modes.

### Aesthetic direction (still current)

- Bold, confident, high contrast, warm editorial personality
- Gold used sparingly — editorial touch, not decoration
- No drop shadows or decorative effects (beyond nav elevation)
- Generous whitespace
- Motion slow and intentional — nothing fast or bouncy; transitions ~0.25–0.35s
- Feels like it belongs to a senior leader, not a junior designer impressing

---

## Site structure

Routing is a `useState` holding a `Page` union — no URLs, no history, no router.

```ts
type Page = "home" | "work" | "workDetail" | "awards" | "speaking"
          | "coaching" | "connect" | "speakingInquiry" | "businessCase"
```

### Top level (5 sections)

Desktop scrolls **horizontally** through a swipe deck with scroll-snap; wheel
gestures are translated to horizontal. Mobile becomes vertical with a progress
indicator at the bottom.

1. **Tiffany C.** (home / about)
2. **Work** — *Design Strategy & Leadership* · Fintech • eCommerce • Utility SaaS
3. **Award & Speaking** — *Recognition & Voices* · Finalist · Speaker · Panelist
4. **Coaching** — *UX Career Coaching*
5. **Connect** — *Let's Connect*

> Earlier briefs listed six sections including **Design Philosophy**. That section
> was never built (see Not yet built). Awards and Speaking were merged into one.

### Second level

Selecting a Work card opens a detail page vertically. A persistent bottom nav bar
(`PageBottomNav`, gradient) shows breadcrumbs like `Work / Business Acumen`.

**Shrink-on-scroll:** detail pages track `scrollTop > 24` and shrink the header
and bottom nav together via a `compact` flag. New detail pages must match this.

### Work categories (four, as built)

| Key | Title |
|---|---|
| `ai` | AI + UX |
| `business` | Business Acumen |
| `ux` | Product & UX Strategies |
| `people` | People & Process |

> Earlier briefs proposed "Business Acumen / Talent / TBD". Superseded.

---

## Content

### Career history (source material for case studies)

**Cotton On Group** (Oct 2024 – present) — Product Design Lead. Fashion/retail
eCommerce, 9 countries, 7 brands. AI-native design workflow rebuild, multi-brand
accessible design system, A$3.5M annualised revenue from Save for Later delivered
in 9 weeks, AB testing and roadmap co-ownership.

**TNG eWallet** (Oct 2021 – Oct 2024) — Head of Product Design & UX Research.
Malaysia's first fintech unicorn. Team 7→22 within budget, 20+ features for 23M+
users, 2M+ merchant touchpoints, brand perception exceeded target by 14% against a
9.8% KPI, contributed to the company's first profitable month in seven years, UX
Research function built from scratch, trilingual copy turnaround cut 20% via early
ChatGPT adoption.

**Plus Xnergy** (2018 – 2021) — Senior Manager, Design Innovation. Solar energy
SaaS, enterprise IoT. 0→1 UX for enterprise IoT dashboard and mobile apps, in-house
design/UX team built from scratch, design sprints with C-suite and R&D.

**Soak Republic** (2010 – 2017) — Co-founder & Head of Design. Fashion accessories.
Blog sales to retail and eCommerce, 160x ROI at exit, owned P&L, buying, operations,
brand direction, creative production.

**Saatchi & Saatchi Arachnid** (2007 – 2010) — Art Director. Campaign visuals for
Toyota, Nippon Paint, Coca-Cola, HSBC, FIFA World Cup 2010.

NDA-sensitive work shows as "available on request" with brief scope description.

### Case studies

**eCommerce: Behavioural UX Design** — passcode-gated, reached from the Business
Acumen card. Covers the Fogg behavioural model as intervention rationale, the
intervention itself, and results. Images in `src/work/business/eCommerce/`.

> The passcode is a hardcoded client-side string. It's a soft gate for a portfolio
> piece, not security — the content ships in the JS bundle either way. Don't put
> anything genuinely confidential behind it.

### Speaking (seven events, built)

| Year | Role | Event | Topic |
|---|---|---|---|
| 2026 | Speaker | UX Rotterdam, NL | The Human Cost of Human-Centred-Design |
| 2025 | Speaker | UX Camp Melbourne, AU | 404: System Burnout — An error message to my UX career |
| 2025 | Panelist | Ladies that UX Taipei, TW | Driving Organisational Change and Creating Meaningful Impact |
| 2025 | Panelist | FUSECON 2025, MY | Mental Health: From Awareness to Action |
| 2024 | Panelist | FUSECON 2024, MY | UX in Malaysia & beyond |
| 2024 | Panelist | Friends of Figma KL × ADPList | The Journey to Senior Designer |
| 2023 | Speaker | Design Leadership KL, MY | Synergy for Sustainable Growth: Empowering UX Team |

Each has a detail page; UX Camp Melbourne embeds a YouTube recording, others use
event photography (some with dual-photo layouts).

**Topics offered:** design leadership, building design culture, purpose-driven
design, AI-native design practice, financial empowerment through design, designer
wellbeing and burnout.

**Speaking Inquiry** is a dedicated form page reached from Connect.

### Awards & recognition

- 2025 — UX Leader of the Year, **Finalist**, Women in Digital National Awards, AU
- 2007 — Best Tertiary Students Award (SPINOBOT), TUANZ Business Internet Awards, NZ

**Community:**
- Member, Women in Digital AU (Jul 2025 – present)
- Chapter Lead, Ladies that UX Kuala Lumpur, MY (Jan 2022 – Oct 2024)
- Founder, Save the White Flag — pandemic-response initiative; 1,700 individuals
  and 200 households in under two months, RM100,000 raised in relief
- Mentor, ADPList (Mar 2021 – present)

### Coaching

Warm and direct tone, for designers growing into leadership. Offers: 1:1 Calls,
Priority DM, and a packaged 1-1 Coaching Service. Includes a Coaching Guide link.

### Connect

Speaking Inquiry · LinkedIn (`/in/tiffany-c/`) · Instagram (`@tffny.c`) ·
designmatters.tiff@gmail.com

---

## Not yet built

Carried forward from earlier briefs, still outstanding. Listed so they're not
mistaken for missing work — they were deliberately deferred.

**Intro animation (ZhouToTIF).** 周 (Tiffany's Chinese surname) appears centred and
still, strokes rearrange, T/I/F emerge and form the logotype, hold, separate, then
text fades in beneath and the homepage appears. Once per session via
sessionStorage. Feel: slow, deliberate, cultural, confident — a breath before
speaking, not a loading screen. *Currently `LogoMark` renders the finished mark
statically; there is no animation and no sessionStorage gate.*

**Design Philosophy section.** The rational/intuitive duality — working at the
tension between logic and intuition, holding both and moving fluidly between them.
Planned as an interactive expression with a draggable breathing wave:

```js
const wave =
  Math.sin(y * 0.009 + t * 0.6)  * 30 +
  Math.sin(y * 0.02  + t * 0.35) * 14 +
  Math.sin(y * 0.004 + t * 0.9)  * 22;
```

`t` increments `0.007`/frame via `requestAnimationFrame`; `currentX` eases toward
`targetX` at `0.05`/frame; soft gold glow `rgba(184,134,11,0.15)` at 22px then
`rgba(255,255,255,0.2)` at 1px; cancel the rAF on unmount. Belongs in its own
section, never the homepage.

**Testimonials.** 3–4 cards, each with quote, name, title, company. Awaiting real
content.

**Topmate.io link** for Coaching — URL not yet provided.

**Speaking Inquiry form endpoint.** `SPEAKING_FORM_ENDPOINT` is still the
placeholder `https://formspree.io/f/YOUR_FORM_ID`. The form does not submit
anywhere real — this needs a live Formspree ID before launch.

---

## Reference

- Figma design file: https://www.figma.com/design/2vNbrTyez1jzlvZyciRNY9/tiffany-c-portfolio-2026
- Published Figma prototype: https://coup-vivid-81996597.figma.site

The prototype reflects an earlier direction in places. Treat the code as current
and the Figma file as the design reference for anything not yet built.
