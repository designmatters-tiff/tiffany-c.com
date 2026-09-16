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

Backgrounds are flat: warm off-white `#f8f7f5` (light) and near-black
(`#282828`, `#181410`) in dark. One ground behind the whole site — no gradient
mesh, and no per-section tinting. Both were tried and neither held up; the type
and the nav gradient carry the colour.

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
- **Nunito Sans** (350) — body, and everything that reads as running text. It is
  a variable font (wght 200-1000, one file), and 350 is deliberate: it matches the
  stem of Avenir Book, the face it replaced, which declared `usWeightClass` 350 and
  was never really a 400. Set as the document default on `body`, so body copy needs
  no weight class at all. Do not reintroduce `font-medium` — 500 is now a real,
  heavier weight rather than the no-op it used to be.
- **Nunito Sans Black** (900) — a display weight with exactly one job:
  **figures in metrics** — the number only (`7 → 22`, `3×`, `20%`), never the
  sentence carrying it. The `Figures` helper in `App.tsx` does this; it leaves
  years and strings like `B2B` alone.

  Nothing else is Black, and selection state never uses weight. Two things were
  tried at 900 and reverted: eyebrow labels, where caps and letterspacing already
  carry them at 12px, and the selected state in navigation and the testimonial
  tabs, which is marked by colour, underline, width and opacity instead.

  Nothing else. Never on a run of running text longer than a few words, and
  never as a substitute for Museo on a heading.

Both are self-hosted in `public/fonts`.

**The scale is defined once**, as Tailwind theme tokens in `src/styles/theme.css`:

| Token | Face | Size |
|---|---|---|
| `text-display` / `md:text-display-lg` | Museo 300 | 3rem / 4rem |
| `text-h2` / `md:text-h2-lg` | Museo 300 | 2rem / 2.5rem |
| `text-h3` | Nunito Sans 400 | 1.25rem |
| `text-body` | Nunito Sans 400 | 1rem, 1.6 line-height |
| `text-small` | Nunito Sans 400 | 0.875rem |
| `text-label` | Nunito Sans 400 | 0.75rem, uppercase |

Use these. Do not reintroduce arbitrary bracket sizes — the site previously
carried five different sizes inside a 4px band, which is noise, not hierarchy.

Weights follow from the scale, so only two weight classes should ever appear:
`font-light` on Museo, and `font-black` on the two things the 900 weight is for
(metric figures and the active item in navigation — eyebrow labels are Book 400,
carried by size, caps and letterspacing rather than weight). Nunito Sans at 400
needs no class. `font-medium` is never correct here — no 500 weight
is loaded, so it silently renders as 400.

**One body size.** Body copy is `text-body` (1rem) everywhere, including the
homepage hero paragraph — it used to run fluid up to 22.4px on a wide screen,
which read as a different species of text from the rest of the site.

**Line length:** body copy caps at `68ch`. The About paragraph and the
testimonial quotes are the two that run wide on a large display.

Headings run large and light — the confidence comes from scale and space, not
weight.

### Naming the parts

So the same thing gets called the same thing in a brief, a comment, or a
conversation. An Awards or Speaking row has three lines:

| Line | Call it | Built from | Treatment |
|---|---|---|---|
| `2025 · Australia` | **Meta** | `year` · `region` | Nunito Sans, `text-small`, DIM |
| `UX Leader of the Year — Finalist` | **Title** | `topic` — `role` | Museo 300, fluid 1.1–1.5rem, gold |
| `Women in Digital National Awards` | **Source** | `event` | Nunito Sans, `text-small`, DIM |

Plus the **expand toggle** (the `+`) and, once open, the **expanded panel**
holding the image or watch link.

The smallest size in the scale carries two different treatments — same
`text-label` size, opposite volume:

| Treatment | Case | Letterspacing | Used for |
|---|---|---|---|
| **Label** | ALL CAPS | wide (`0.16`–`0.22em`) | eyebrows, group labels, field labels |

Labels are **always** `DIM` (`#666660`), the body-copy grey — never the section
accent, never gold. Colour on this site marks what you can follow, and a label
is not a link. The one exception is a label sitting on a photograph, which stays
light so it survives the image behind it.
| **Footnote** | Sentence case | none | provenance and attribution, e.g. `Reported to Tiffany · 13 January 2025` |

A footnote is the quietest line in a block. If it is set in caps it stops being
quiet, which is why the testimonial provenance line is not a label.

Two of these resist the obvious names:

- The meta line is **not a subheader**. On mobile it stacks above the title, but
  on desktop it moves to the right-hand end of the row. It is not above anything
  there, so a name based on position would be wrong half the time.
- The source line is **not a description**. It is never prose — it is the
  awarding body or the event, a proper noun.

Above the rows, at page level:

- **Eyebrow** — the small uppercase kicker (`RECOGNITION & VOICE IN COMMUNITY`)
- **Display** — the page heading (`Awards & Speaking`)
- **Group label** — the eyebrow that divides one block of rows from the next
  (`SPEAKING`)

### Motion

Slow and intentional. Transitions land around **0.25–0.35s ease**. Page
transitions are `motion` animations; detail headers and the bottom nav shrink
together on scroll past 24px.

Nothing bounces, springs, pulses, or auto-advances. Motion acknowledges an
action; it never performs for its own sake. If an animation draws attention to
itself, it's wrong.

The Work illustrations do not animate. A draw-in trace and a 3D tilt were both
built and both removed — the marks sit still. They do not sit on a tinted disc
either; the line work stands on the page like everything else here.

### Space

Generous whitespace is doing real work — it's what makes the site read as senior.
Resist filling it. No drop shadows, no decorative effects, no borders that aren't
separating something.

### Case study metadata

Every case study opens with the same six fields, in this order, as one band
across the top:

1. **Year**
2. **Client**
3. **Goal**
4. **Scope**
5. **Role**
6. **Team size**

Team size reads last — it's the detail a hiring manager looks for once the
rest has landed, not the thing to lead with. The client's website is the
client's own name made a link, not a seventh column, so nothing displaces
team size from the end. Labels take the label treatment; values are body
text.

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
- ~~**Image weight**~~ — done. Every photo is `.avif`, sized from its measured
  render box rather than shipped at camera resolution: 10.7MB to 1.2MB. Keep
  new images `.avif`, and size them to what the page actually draws — a 4032px
  photo in an 840px box is 20x the bytes for no visible gain.

---

## Reference

- Figma design file: https://www.figma.com/design/2vNbrTyez1jzlvZyciRNY9/tiffany-c-portfolio-2026
- Published prototype: https://coup-vivid-81996597.figma.site — reflects an earlier
  direction in places; the code is current.
- `CLAUDE.md` — architecture, conventions, and how to work in this codebase.
