# tiffany-c.com — Brand & Tone

How the site should sound, feel, and behave. Not a build spec — the site is
built, and `src/app/App.tsx` is the source of truth for what exists. This is the
document to check before writing copy, adding a section, or picking a colour.

---

## Essence

**Clarity, held with conviction.**

Tiffany works at the tension between logic and intuition — not purely
data-driven, not purely instinctive, but holding both and moving between them.
The site should feel like that: warm and human, but structurally certain. Every
claim is specific. Nothing is decorative.

The visitor is usually a hiring executive, a founder sizing up a consultant, or a
designer looking for a mentor. All three are busy and slightly sceptical. The
site earns attention with evidence, not enthusiasm.

**Positioning:** a product design leader with over a decade at the executive
table — co-founded and exited a fashion label (160x ROI), led design and UX
research at Malaysia's first fintech unicorn, grew a team from 7 to 22, took
products 0→1 and 1→100 across fintech, retail, financial services, and solar
energy SaaS. Currently leading design at Cotton On Group.

---

## The mark

The TIF logotype is built from **周** (Zhōu), Tiffany's Chinese surname. The
strokes of the character resolve into T, I, and F.

This is the strongest asset the brand has: a personal and cultural anchor that
nobody else can use. Treat it with the weight of a brand logo — always present,
never decorative, never recoloured outside the gold family, never stretched or
rotated. It carries the whole "rooted, then evolved" idea without a word of
explanation.

*(The animated version — 周 resolving into TIF on first visit — is designed but
not built. If it ever ships, it should feel slow, deliberate, and confident: a
breath before speaking, not a loading screen.)*

---

## Voice

### Lead with the outcome, then the method

The work is described by what it moved, not by what was done.

> ✅ "Aligning product design with measurable revenue growth and user outcomes."
> ✅ "Led 0-to-1 enterprise SaaS and scaled global platforms used by millions daily."
> ❌ "Passionate about crafting delightful user-centric experiences."

### Be specific enough to be checkable

Numbers do the persuading. A$3.5M annualised revenue in 9 weeks. 160x ROI. 23M+
users. Team of 7 to 22, within budget. Brand perception 14% against a 9.8% KPI.
If a claim can't carry a number, it should carry a name — a company, a country
count, a product.

Vague superlatives ("world-class", "cutting-edge", "passionate") are off-brand
precisely because they can't be checked.

### First person, unhedged

> ✅ "I work with C-suites and product teams to shape design functions that deliver."
> ❌ "Tiffany aims to help teams try to improve their design maturity."

No "I believe I can", no "helping teams to hopefully". She has done these things.
State them.

### Let one sentence break the rhythm

The copy is mostly plain declaratives, which makes a single fragment land hard.
The hero uses this deliberately:

> "My forte is connecting strategy to craft, breaking it into tangible wins
> toward an ultimate company vision. **Because the clarity between a big decision
> and a small win is where sustainable growth lives.**"

One of these per section, at most. It stops being a device if it's everywhere.

### Name the hard thing

The speaking work is unusually direct about burnout, mental health, and the cost
of the profession — *"The Human Cost of Human-Centred-Design"*, *"404: System
Burnout — An error message to my UX career"*. That candour is part of the brand,
not a departure from it. Don't sand it down into something more comfortable.

---

## Tone by context

| Context | Tone | Notes |
|---|---|---|
| **Home / Work** | Confident, evidence-led | Talking to someone deciding whether to hire her. Outcomes first. |
| **Awards & Speaking** | Factual, unshowy | Let the list do the work. Year, role, event, topic — no adjectives. |
| **Coaching** | Warm and direct | The one place that softens. Still no fluff — direct is the *point*, it's what mentees are paying for. |
| **Connect** | Open, brief | An invitation, not a pitch. "Let's connect" and the links. |
| **Case studies** | Analytical, structured | Problem, rationale, intervention, result. Shows thinking, not just outcome. |

The register never drops into corporate abstraction, and never rises into
exclamation. If a line would sound odd said aloud in a meeting, rewrite it.

---

## Writing mechanics

- **Australian / British spelling.** *Behavioural, organisational, prioritisation,
  centred, recognise.* (CSS properties stay American — `color`, `center` — that's
  the spec, not prose.)
- **Ampersands** in section and card titles (*Awards & Speaking*, *Product & UX
  Strategies*); "and" in sentences.
- **Em dashes** — spaced — for asides and in talk titles.
- **Numerals for evidence.** "23M+ users", "0-to-1", "7 to 22", "9 weeks". Spell
  out only where a numeral would look odd mid-sentence.
- **Eyebrow labels** are uppercase with wide letter-spacing, and are context, not
  headline: *FINTECH · ECOMMERCE · SAAS*, *RECOGNITION & VOICE IN COMMUNITY*.
- **Sentence case** for headings. Never Title Case Every Word.
- **The page title and meta description are the site's search result.** They
  carry her full name and role — "Tiffany Chew — Product & Design Leader" —
  because a recruiter searches a person, not a portfolio. Keep the description
  under ~155 characters or Google truncates it, and keep it in her voice: it's
  read more often than most of the site.
- **No exclamation marks** in Tiffany's own copy. The rule governs her voice,
  not other people's — testimonials are quoted verbatim, punctuation and all.
  Editing someone's words to fit this guide would misrepresent them.

---

## Visual identity

### Colour

Constants live at the top of `App.tsx` — use them, never a raw hex.

| Token | Value | Role |
|---|---|---|
| `GOLD` | `#B2933B` | Headings, links, the mark. The brand colour. |
| `GOLD_BRIGHT` | `#e3c85c` | Dark-mode gold |
| `INK` | `#111111` | Body text (light) |
| `DIM` | `#666660` | Secondary text |
| `NAV_GRADIENT` | `#B2933B → #6281B7 → #C27AA6` | Nav bar, and the source of section heading colours |

**Backgrounds are flat, and tinted by the section.** The base is warm off-white
`#f8f7f5` (light) / near-black `#282828` (dark), carrying 8% (light) or 12%
(dark) of that section's heading colour — so the gold sections read cream and
Connect reads cream-pink, on the same principle as the headings. `tintedBg()`
in `App.tsx` mixes it; `PageTintCtx` carries it to the chrome that has to
disappear into it. The ground cross-fades over 0.6s as the deck moves.

Keep the mix low. It should register as warmth, not as colour — the type is
what should be noticed. There is deliberately no gradient mesh behind the
site; that was removed in favour of this.

**Gold is an accent, not a fill.** It marks what matters — headings, links, the
logomark — and loses its authority the moment it's used for large areas.

**The nav gradient** (gold → blue → pink) is the one place colour runs free. It
represents the multi-faceted nature of the work and a quiet resilience. It
belongs on the nav bar and on section headings. Don't spread it to buttons,
cards, or backgrounds.

**The back half of the deck takes its heading colour from that gradient**, at
each section's own position along the bar, so heading and nav agree. The front
half stays on `GOLD`: sampled, those positions land in the desaturated
gold→blue crossover and read as muddy olive, and it's the half a hiring manager
reads first. Connect still lands exactly on the pink end.

| Section | Heading | |
|---|---|---|
| Tiffany C. (hero) | `GOLD` | |
| Work | `GOLD` | |
| Award & Speaking | `GOLD` | |
| Testimonial | `#7580B4` | blue-violet |
| Coaching | `#9C7DAD` | purple |
| Connect | `#C27AA6` | pink — the far end |

`gradientAt()` in `App.tsx` samples; `GRADIENT_HEADINGS` says which sections opt
in. Don't hardcode the sampled values — they'd drift if the gradient is retuned
or a section is added. To move the gold/gradient boundary, change that set.

The three sampled colours clear 3:1 on both grounds, the AA floor for text this
size, but none clears 4.5:1 — so none may be reused for body copy.

Section accents (eyebrows, items, rules) are separate: Work bronze/grey, Awards
blue `#5070A0`, Coaching and Connect purple-pink `#9B5A88`.

Every colour decision must handle **both light and dark mode** — read `isDark`
from `DarkModeCtx` and branch.

### Type

- **Museo** (300) — headings. Editorial, generous, never bold.
- **Avenir** — body. Book weight for reading, Black used sparingly.

Both are self-hosted in `public/fonts`. Applied inline via Tailwind arbitrary
values, not a theme config.

Headings run large and light — the confidence comes from scale and space, not
weight.

### Motion

Slow and intentional. Transitions land around **0.25–0.35s ease**. Page
transitions are `motion` animations; detail headers and the bottom nav shrink
together on scroll past 24px.

Nothing bounces, springs, pulses, or auto-advances. Motion acknowledges an
action; it never performs for its own sake. If an animation draws attention to
itself, it's wrong.

### Space

Generous whitespace is doing real work — it's what makes the site read as senior.
Resist filling it. No drop shadows, no decorative effects, no borders that aren't
separating something.

---

## What this brand is not

- Not a junior portfolio trying to impress — no clever interactions for their own sake
- Not a design-agency site — no manifesto paragraphs, no "we believe"
- Not corporate — no stock abstraction, no "leveraging synergies"
- Not breathless — no exclamation marks, no hype adjectives, no emoji
- Not busy — if a section feels crowded, cut, don't rearrange

---

## Open items

Things that affect brand consistency and are still outstanding:

- ~~**Speaking inquiry form doesn't work.**~~ Wired to a real Formspree
  endpoint. Worth one live submission after launch to confirm the address and
  prove the path end to end.
- **Email link styling** is inconsistent with LinkedIn and Instagram beside it —
  it's a real `mailto:` link but has no icon and no hover underline, so it reads
  as plain text.
- ~~**ADPList mentor profile**~~ — now linked from the testimonials page,
  alongside Topmate, as the public record behind the coaching reviews.
- ~~**Testimonials**~~ — built. A top-level *Testimonial* section, sitting
  between Award & Speaking and Coaching, with two tabs: leadership & teams (3)
  and coaching (5). Sources are shown rather than hidden, since two coaching
  reviews are anonymous and a named public platform is what makes an
  unattributed quote credible.
- **Design Philosophy section** — the rational/intuitive duality, planned as an
  interactive breathing-wave illustration. Never built. It's the piece that would
  explain *how she thinks* rather than *what she delivered*.
- **Hero copy divergence** — earlier briefs marked *"I connect strategy to craft…"*
  and the tagline *"Clarity in design. Grounded in purpose."* as final. Neither is
  in the build. The shipped copy superseded them; noted in case the tagline is
  still wanted somewhere.
- **Image weight** — several case study and event images exceed 2MB. Prefer `.avif`
  for anything new.

---

## Reference

- Figma design file: https://www.figma.com/design/2vNbrTyez1jzlvZyciRNY9/tiffany-c-portfolio-2026
- Published prototype: https://coup-vivid-81996597.figma.site — reflects an earlier
  direction in places; the code is current.
- `CLAUDE.md` — architecture, conventions, and how to work in this codebase.
