# tiffany-c.com — Site Brief (v5)
> Drop this file into your Claude Code session and say: "Read BRIEF_5.md and start building the site. Visual reference is at https://coup-vivid-81996597.figma.site"

---

## Overview

Personal portfolio site for Tiffany C., a product design leader based in Melbourne, Australia. The site lives at tiffany-c.com, hosted on Vercel, domain managed via Porkbun.

**Primary goals:**
- Land a Director / Head of Product Design role
- Attract freelance and consulting clients (fractional design leadership, project work)
- Establish thought leadership and speaking presence

---

## Tech stack

- Next.js (App Router)
- Tailwind CSS
- Deployed to Vercel
- Custom domain: tiffany-c.com via Porkbun

---

## Positioning

**Who Tiffany is:**
A product design leader with over a decade of experience at the executive table. She co-founded and sold her own fashion label (Soak Republic, 160x ROI at exit), led design and UX research at Malaysia's first fintech unicorn (TNG eWallet), grown teams from 1 to 22 people, taken products from 0 to 1 and 1 to 100, and delivered across fintech, fashion/retail, financial services, and solar energy SaaS. Most recently leading design at Cotton On Group in Australia.

**Hero copy (finalised, do not change):**
> I connect strategy to craft. I shape design functions and lead teams that build products from fintech to retail to SaaS, where clarity touches millions.

**Tagline:**
> Clarity in design. Grounded in purpose.

**Status:**
Open to new opportunities and available for freelance / consulting engagements.

---

## Colour palette (use exactly)

- Near-white background: `#f5f1eb` (warm off-white)
- Near-black: `#0a0a0a`
- Accent gold: `#b8860b` (warm amber, used for headings, links, highlights)
- Light accent gold: `#c9a84c` (hover states, secondary accents)
- Panel/sidebar tone: `#e8e0d4` (warm greige)
- Multi-colour gradient: used sparingly to represent the multi-faceted nature of Tiffany's work and quiet resilience

---

## Typography

- Headlines: Museo (serif, editorial weight) — fallback: Playfair Display
- Body: Avenir — fallback: DM Sans or Inter
- Hierarchy: serif for section headings, sans-serif for body, mirrors the CV

---

## Light mode only

Build light mode only for now. Dark mode will be added in a later phase.

- Add `darkMode: 'class'` to Tailwind config so it is ready
- Leave comments in each component marking where `dark:` variants should be added later
- Do not implement any dark mode styles yet

---

## Site structure and navigation

### First level (main horizontal story, desktop)
Desktop scrolls **horizontally** to reveal breadth of work. A persistent **vertical dot navigation on the right** allows users to jump to any section. Sections:

1. Home
2. Work
3. Awards and Speaking
4. Design Philosophy
5. Coaching
6. Connect

### Second level (work section, goes vertical)
When a case study or work category is selected, the page transitions to open up **vertically**, going deeper into the topic. The right dot nav remains, now representing depth within that project. No scroll snap, no auto-advance. User controls the pace.

### Nav behaviour
- On the main horizontal story: dot navigation on the right side
- When entering a second-level section (e.g. a case study): top navigation bar appears with the first-level sections, so horizontal navigation remains accessible
- The bottom portion of the main pages effectively becomes the top nav when drilling into deeper content

### Work categories (second level groupings)
Case studies grouped by:
- Business Acumen
- Talent
- (Third category to be named later)

---

## Intro animation (plays once per session)

A full-screen intro animation plays on first visit, stored in sessionStorage so repeat visitors skip it.

**Sequence:**
1. 周 (Zhou, Tiffany's Chinese surname) appears centred. Still. Rooted.
2. The character's strokes slowly rearrange and evolve
3. T, I, F emerge from within 周, breaking out one by one
4. They form the TIF logotype mark
5. The logotype holds for a moment
6. T, I, F gently separate and space apart
7. Simple text fades in beneath: Product and Design Leader / Based in Australia / Open to opportunities, collaboration, and speaking
8. Homepage fades in behind

**Feel:** Slow, deliberate, cultural, confident. Not a loading screen. A breath before speaking.

---

## Logotype

The TIF logotype (formed from 周) appears as a **stamp in the top right** of all pages. It is Tiffany's personal mark and cultural anchor. Treat it with the same weight as a brand logo — always present, never decorative.

---

## Homepage

Full dark background (`#0a0a0a`). Clean. No split panels.

- Hero copy in gold Museo serif, large and confident
- TIF logotype stamp top right
- "Tiffany C." anchored bottom left in gold
- No rotating cards, no split layout, no mode switcher

---

## Design philosophy section

This is where the rational/intuitive duality concept lives. Tiffany works at the tension between logic and intuition — not purely data-driven, not purely instinctive. She holds both and moves between them fluidly.

Present this as an interactive or visual expression of how she thinks and works. The organic wave concept (slow breathing curve between two sides, draggable left and right) lives here as an illustration of that tension. This is not the homepage — it is a deeper section for visitors who want to understand how she works.

**Wave animation spec:**
```js
// Three layered sine waves create the organic curve
const wave =
  Math.sin(y * 0.009 + t * 0.6) * 30 +
  Math.sin(y * 0.02  + t * 0.35) * 14 +
  Math.sin(y * 0.004 + t * 0.9) * 22;
```
- `t` increments by `0.007` per frame via `requestAnimationFrame`
- `currentX` eases toward `targetX` at `0.05` per frame
- Soft gold glow on the curve edge: `rgba(184,134,11,0.15)` at 22px, then `rgba(255,255,255,0.2)` at 1px
- Cancel `requestAnimationFrame` on component unmount

---

## Content sections

### Work — Leadership and Case Studies

**Cotton On Group** (Oct 2024 - Present)
- Role: Product Design Lead
- Industry: Fashion/retail, eCommerce, 9 countries, 7 brands
- Key outcomes: AI-native design workflow rebuild, multi-brand accessible design system, A$3.5M annualised revenue from Save for Later feature delivered in 9 weeks, AB testing and roadmap co-ownership

**TNG eWallet** (Oct 2021 - Oct 2024)
- Role: Head of Product Design and UX Research
- Industry: Fintech, Malaysia's first unicorn
- Key outcomes: Team grown from 7 to 22 within budget, 20+ features for 23M+ users, 2M+ merchant touchpoints, brand perception exceeded target by 14% against 9.8% KPI, contributed to company's first profitable month in seven years, UX Research function built from scratch, trilingual copy turnaround reduced 20% via early ChatGPT adoption

**Plus Xnergy** (2018 - 2021)
- Role: Senior Manager, Design Innovation
- Industry: Solar energy SaaS, enterprise IoT
- Key outcomes: 0-to-1 UX for enterprise SaaS IoT dashboard and mobile apps (iOS and Android), in-house design and UX team built from scratch, design sprints run directly with C-suite and R&D

**Soak Republic** (2010 - 2017)
- Role: Co-founder and Head of Design
- Industry: Fashion accessories
- Key outcomes: Built from blog sales to retail and eCommerce, 160x ROI on initial capital at exit, owned P&L, buying, operations, brand direction, creative production

**Saatchi and Saatchi Arachnid** (2007 - 2010)
- Role: Art Director
- Industry: Digital advertising
- Key outcomes: Campaign visuals for Toyota, Nippon Paint, Coca-Cola, HSBC, FIFA World Cup 2010

NDA-sensitive work shown as "available on request" with brief scope description.

---

### Speaking

Full-page photo grid. Each image is from a real speaking event. On hover, the speaking title appears. When active/selected, the year and country appear top left corner of the image.

Known talks:
- 2026: Speaker, UX Rotterdam NL — "The Human Cost of Human-Centred Design"
- 2025: Speaker, UX Camp Melbourne AU — "404: System Burnout"
- 2025: Panelist, Ladies that UX Taipei TW — "Driving Organizational Change and Creating Meaningful Impact"
- 2025: Panelist, FUSECON MY — "Mental Health: From Awareness to Action"
- 2023: Speaker, Design Leadership KL MY — "Synergy for Sustainable Growth: Empowering UX Team"

Topics available: design leadership, building design culture, purpose-driven design, AI-native design practice, financial empowerment through design, designer wellbeing and burnout

---

### Awards and Recognition

- 2025: UX Leader of the Year, Finalist — Women in Digital National Awards, AU
- 2007: Best Tertiary Students Award (SPINOBOT) — TUANZ Business Internet Awards, NZ

**Community:**
- Member, Women in Digital AU (Jul 2025 - present)
- Chapter Lead, Ladies that UX Kuala Lumpur MY (Jan 2022 - Oct 2024)
- Founder, Save the White Flag — pandemic-response initiative, reached 1,700 individuals and 200 households in under two months, raised RM100,000 in relief support
- Mentor, ADPList (Mar 2021 - present): https://adplist.org/mentors/tiffany-c

---

### Coaching and Mentorship

Warm and direct tone. For designers growing into leadership.

- Link to ADPList: https://adplist.org/mentors/tiffany-c
- Link to topmate.io (to be added)
- CTA: "Let's connect"

---

### Testimonials

Placeholder layout for 3 to 4 cards. Each card: quote, name, title, company. Build the layout ready for real content to be dropped in.

---

### Connect / Footer

CTA: "Let's connect"
Links: LinkedIn, designmatters.tiff@gmail.com
Standard copyright footer.

---

## Aesthetic direction

- Bold, confident, high contrast, warm editorial personality
- Gold accent used sparingly — editorial touch, not decoration
- No gradients (except the subtle multi-colour resilience gradient used intentionally)
- No drop shadows, no decorative effects
- Generous whitespace
- Motion is slow and intentional — nothing fast or bouncy
- Feels like it belongs to a senior leader, not a junior designer trying to impress

---

## Mobile (below 768px)

- Horizontal story becomes vertical scroll
- Dot nav moves to bottom as horizontal progress indicator
- Case study depth view stays vertical
- Intro animation plays the same but scaled to screen
- Homepage hero: full dark background, hero copy centred, logotype top right

---

## Visual reference

Figma prototype (published): https://coup-vivid-81996597.figma.site
Use this as the primary visual reference for layout, spacing, and design direction.

---

## Notes for Claude Code

- Start with the intro animation component (ZhouToTIF)
- Then build the homepage hero (full dark, hero copy, logotype, name anchor)
- Use sessionStorage to track whether intro has played
- All copy is placeholder-grade — Tiffany will refine, leave clear comments marking editable copy
- Do not build the duality wave on the homepage — it belongs in the Design Philosophy section only
- Museo and Avenir are the brand fonts — load via @font-face or a hosted source if available, otherwise use Playfair Display and DM Sans as fallbacks
- Light mode only — add darkMode: 'class' to Tailwind config and leave dark: comments in components for later
- Leave clear component boundaries so sections can be worked on independently
