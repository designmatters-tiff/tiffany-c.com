# tiffany-c.com — Site Brief
> Paste this file into your Claude Code session and say: "Read BRIEF.md and start building the site."

---

## Overview

Personal portfolio site for Tiffany C., a product design leader based in Melbourne, Australia. The site lives at tiffany-c.com, hosted on Vercel, domain managed via Porkbun.

**Primary goals:**
- Land a Director / Head of Product Design role
- Attract freelance and consulting clients
- Establish thought leadership and speaking presence

---

## Tech stack

- Next.js (App Router)
- Tailwind CSS
- Deployed to Vercel
- Custom domain: tiffany-c.com

---

## Positioning

**Who Tiffany is:**
A product design leader with over a decade of experience at the executive table. She co-founded and sold her own fashion label (Soak Republic, 160x ROI at exit), led design and UX research at Malaysia's first fintech unicorn (TNG eWallet), grown teams from 1 to 22 people, taken products from 0 to 1 and 1 to 100, and delivered across fintech, fashion/retail, financial services, and solar energy SaaS. Most recently leading design at Cotton On Group in Australia.

**Her philosophy:**
She works at the tension between logic and intuition. Not purely data-driven, not purely instinctive — she holds both and moves between them fluidly. This duality is the central design concept of the site.

**Her purpose:**
Design that builds resilience in the people who use it. Grounded in a belief that financial literacy and empowerment improve quality of life and protect people against adversity.

**Tagline:**
> Clarity in design. Grounded in purpose.

**Status:**
Open to new opportunities and available for freelance / consulting engagements.

---

## Colour palette (from CV — use exactly)

- Near-white background: `#f5f1eb` (warm off-white, slightly warmer than neutral)
- Near-black text: `#0a0a0a`
- Accent gold: `#b8860b` (dark goldenrod, warm amber — used for headings, links, highlights in CV)
- Light accent: `#c9a84c` (lighter gold for hover states or secondary accents)
- Sidebar/panel tones: warm greige `#e8e0d4`

**Typography:**
- Headlines: a strong editorial serif (e.g. Playfair Display or similar — matches the CV's serif heading style)
- Body: clean sans-serif (e.g. Inter or DM Sans)
- The CV uses serif for section headings and sans for body — replicate this hierarchy on the site

---

## The core design concept: duality

The site is built around the tension between rational and intuitive. This is not decorative — it is the philosophy made visible.

The hero section is split into two sides:
- **Left / Rational:** Warm off-white background (`#f5f1eb`), dark text (`#0a0a0a`). Evidence-led. Outcomes, numbers, proof points.
- **Right / Intuitive:** Near-black background (`#0a0a0a`), light text (`#f5f1eb`). Feeling-led. Beliefs, questions, purpose.

The dividing line between the two sides is an **organic, slowly breathing wave curve** drawn on an HTML canvas using layered sine waves. It moves gently on its own and can be dragged left or right by the visitor. The visitor literally experiences the duality rather than just reading about it.

**The anchor:** Tiffany's name and title sit fixed at the bottom centre of the hero, visible on both sides. This is the constant thread — both worlds are the same person.

### DualityHero component spec

Build this as a React component called `DualityHero`.

**Canvas wave logic:**
```js
// Three layered sine waves create the organic curve
const wave =
  Math.sin(y * 0.009 + t * 0.6) * 30 +
  Math.sin(y * 0.02  + t * 0.35) * 14 +
  Math.sin(y * 0.004 + t * 0.9) * 22;
```

- `t` increments by `0.007` per frame via `requestAnimationFrame`
- The base X position of the curve is controlled by drag (mouse and touch)
- `currentX` eases toward `targetX` at a rate of `0.05` per frame (slow, fluid)
- The dark side is clipped to the right of the curve using canvas fill + CSS `clip-path: polygon()` updated every frame on the intuitive content layer
- A soft glow is drawn along the curve edge: `rgba(184,134,11,0.15)` at 22px lineWidth (gold tint), then `rgba(255,255,255,0.2)` at 1px lineWidth

**Cleanup:** Cancel `requestAnimationFrame` on component unmount.

**Mobile:** On screens below 768px, replace the drag interaction with a slow auto-breathing animation only (no drag). The curve still animates, the two sides are still visible, stacked vertically with the curve as a horizontal divider.

---

## Content

### Hero

**Rational side (left):**
- Label: RATIONAL
- Headline: Design shaped by evidence.
- Body: A decade at the executive table. From co-founding my own brand to Head of Product Design and UX Research at TNG eWallet, Malaysia's first fintech unicorn.
- Proof points: 15+ years experience / 0 to 1 products built / 22 team peak

**Intuitive side (right):**
- Label: INTUITIVE
- Headline: Design shaped by feeling.
- Body: The best products are born from moments you can't put in a brief. A hunch. A conversation. A thing someone didn't say.
- Tagline: "Clarity in design. Grounded in purpose."

**Anchor (centre, fixed):**
- Name: Tiffany C.
- Title: Product Design Leader

---

## Sections (below the hero)

**1. Work — Leadership and Case Studies**

Case studies framed by impact type, not discipline:
- Growth and conversion
- Product strategy
- Team and culture
- Design systems

Each case study card: company, industry, the problem, what Tiffany did, outcome. NDA-sensitive work shown as "available on request."

Work to include:

**Cotton On Group** (Oct 2024 - Present)
- Role: Product Design Lead
- Industry: Fashion/retail, eCommerce, 9 countries, 7 brands
- Key outcomes: AI-native design workflow rebuild, multi-brand design system with accessibility standards, A$3.5M annualised revenue from Save for Later feature (9-week delivery), AB testing and roadmap co-ownership

**TNG eWallet** (Oct 2021 - Oct 2024)
- Role: Head of Product Design and UX Research
- Industry: Fintech, Malaysia's first unicorn
- Key outcomes: Team grown from 7 to 22, 20+ features for 23M+ users, 2M+ merchant touchpoints, brand perception exceeded target by 14% against 9.8% KPI, Sep 2024 first profitable month in seven years, UX Research function built from scratch, trilingual copy turnaround reduced 20% via AI

**Plus Xnergy** (2018 - 2021)
- Role: Senior Manager, Design Innovation
- Industry: Solar energy SaaS (enterprise IoT)
- Key outcomes: 0-to-1 UX for enterprise SaaS IoT dashboard and mobile apps, in-house design and UX team built from scratch, design sprints with C-suite and R&D

**Soak Republic** (2010 - 2017)
- Role: Co-founder and Head of Design
- Industry: Fashion accessories
- Key outcomes: Built from blog sales to retail and eCommerce, 160x ROI on initial capital at exit, owned P&L, buying, operations, brand direction

**Saatchi & Saatchi Arachnid** (2007 - 2010)
- Role: Art Director
- Industry: Digital advertising
- Key outcomes: Campaign visuals for Toyota, Nippon Paint, Coca-Cola, HSBC, FIFA World Cup 2010

**2. Coaching and Mentorship**

Tiffany offers design career coaching and mentorship. Warm and direct tone.
- Who it is for: designers growing into leadership
- ADPList mentor profile: https://adplist.org/mentors/tiffany-c
- Call to action to get in touch

**3. Speaking**

Available for speaking engagements. Known talks to feature:
- 2026: Speaker, UX Rotterdam NL — "The Human Cost of Human-Centred Design"
- 2025: Speaker, UX Camp Melbourne AU — "404: System Burnout"
- 2025: Panelist, Ladies that UX Taipei TW — "Driving Organizational Change and Creating Meaningful Impact"
- 2025: Panelist, FUSECON MY — "Mental Health: From Awareness to Action"
- 2023: Speaker, Design Leadership KL MY — "Synergy for Sustainable Growth: Empowering UX Team"

Topics available for future engagements: design leadership, building design culture, purpose-driven design, AI-native design practice, financial empowerment through design, designer wellbeing and burnout

**4. Awards and Recognition**

- 2025: UX Leader of the Year, Finalist — Women in Digital National Awards, AU
- 2007: Best Tertiary Students Award (SPINOBOT) — TUANZ Business Internet Awards, NZ

Community:
- Member, Women in Digital AU (Jul 2025 - present)
- Chapter Lead, Ladies that UX Kuala Lumpur MY (Jan 2022 - Oct 2024)
- Founder, Save the White Flag — pandemic-response initiative connecting donors with households in crisis, reached 1,700 individuals and 200 households in under two months, raised RM100,000 in relief support
- Mentor, ADPList (Mar 2021 - present)

**5. Testimonials**

Placeholder layout for 3 to 4 cards. Each card: quote, name, title, company.

**6. Contact**

Two calls to action:
- "Let's work together" (roles / consulting)
- "Let's talk" (coaching / speaking)

Links: LinkedIn, designmatters.tiff@gmail.com

---

## Aesthetic direction

**Bold and confident. High contrast. Warm editorial personality.**

- Primary palette: warm off-white `#f5f1eb` and near-black `#0a0a0a`
- Accent: warm gold `#b8860b` used sparingly for links, labels, and highlights — not overused
- Typography: strong editorial serif (Playfair Display or similar) for headlines, clean sans-serif (Inter or DM Sans) for body
- No gradients, no drop shadows, no decorative effects
- Generous whitespace
- Motion is slow and intentional — nothing fast or bouncy
- The gold accent should feel like an editorial touch, not a branding gimmick
- The site should feel like it belongs to a senior leader, not a junior designer trying to impress

---

## Navigation

Simple, minimal:
- Work
- Coaching
- Speaking
- Contact

No hamburger menu on desktop. Clean horizontal nav. Logo/name top left.

---

## Notes for Claude Code

- Build page by page, starting with the DualityHero component
- Use `useRef` for canvas and intuitive content div
- Use `useEffect` for the animation loop with cleanup
- Keep the wave math exactly as specified — it produces the right feel
- The gold glow on the wave edge ties the curve to the accent colour palette
- All copy above is placeholder-grade — Tiffany will refine it, just get the structure right
- Leave clear comments in the code marking where copy should be updated
- Proof points on the rational side: 15+ years / 0 to 1 products / 22 team peak
