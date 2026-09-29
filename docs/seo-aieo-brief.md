# SEO and AI-engine brief for tiffany-c.com

A spec for Code. Work in `/Users/tiff/tiffany-c.com` on `main-v2`. Audited 26 Sep 2026
against the repo and the live site.

The goal is narrow: be findable and citable for **UX career coaching** by people
searching Google and by people asking ChatGPT, Perplexity, Claude and Google AI
Overviews. Not consulting. The Connect page deliberately does not publish consulting
services for employer reasons, and this brief respects that. If that decision ever
changes, the consulting sections here are marked and can be switched on.

---

## 0. What is already right, do not redo

- `scripts/prerender.mjs` exists and is sound: per-route HTML, per-route title,
  description, canonical and share card, `noindex` on gated routes, `sitemap.xml`
  generated at build time.
- `public/robots.txt` allows all and points at the sitemap.
- `index.html` carries Open Graph and Twitter cards with an absolute `og.jpg`.
- Every route sets its own `document.title` and `meta[name=description]` in App.tsx
  (`titleOf`, `descriptionOf`), and the prerender reads them from the page so there
  is one source of truth.

---

## 1. CRITICAL: the prerender is falling back on Vercel

**Finding.** The live site serves metadata-only shells. `/work/product-ux-strategies`
returns the head and an empty `#root`. The prerender needs a browser and the Vercel
build image has none, so it takes the fallback path the script itself describes:
"no browser available — writing metadata-only shells".

**Consequence.** Search engines see a title and a description per page and no body.
AI engines see nothing to cite. Every other item in this brief is worthless until
this is fixed.

**Verify first.** Open the latest Vercel build log and find the line the script
prints. Confirm it is the fallback message.

**Fix, in order of preference.**

**Option A, smallest change.** Make a browser available to the existing script in
the Vercel build.

1. Add `playwright` as a devDependency if it is not already.
2. Change the build script so Chromium is installed before prerender runs:
   ```json
   "build": "vite build && npx playwright install chromium --with-deps && node scripts/prerender.mjs"
   ```
   If `--with-deps` fails on Vercel's image (it needs apt), drop it and try
   `@sparticuz/chromium` with `playwright-core` instead, pointing
   `PRERENDER_CHROMIUM` at its executable path. The script already honours that
   env var.
3. Build. Confirm the log now says "rendering with a browser — full HTML per route".
4. Confirm by fetching a deployed page's raw HTML: body text must be present inside
   `#root`.

Cost: build time goes up by a minute or two. Acceptable.

**Option B, if A cannot be made reliable.** Replace the browser step with
`react-dom/server` `renderToString` at build time. The app already guards
`typeof window` in `applyRoute`, so it is partly SSR-safe, but framer-motion,
contexts and any `useEffect`-dependent content will need care. This is the correct
long-term answer and the larger change. Only go here if A fails twice.

**Do not** commit a locally rendered `dist/`. It will drift.

---

## 2. Register the new routes

`ROUTES` in `scripts/prerender.mjs` does not include the cross-border page. Add:

```js
{ path: '/work/people-process/cross-border-qr' },
```

Public, so it is indexed. Do the same for any future page; the checklist for a new
case study is: Page union, DEEP_PAGES, pathOf, routeOf, descriptionOf, titleOf,
render branch, BULLET_LINKS, **and ROUTES in prerender.mjs**. That last one has been
missed before.

---

## 3. Structured data (JSON-LD)

There is none. This is the highest-value addition for both Google and AI engines,
because it is the one place the site states facts in a form machines read
unambiguously.

Add a small component that injects `<script type="application/ld+json">` into the
head per route. The prerender captures head changes, so it will be in the static
HTML. Keep the data in one object so it cannot drift from the copy.

### 3a. Person, on every page

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://tiffany-c.com/#tiffany",
  "name": "Tiffany Chew",
  "url": "https://tiffany-c.com/",
  "image": "https://tiffany-c.com/og.jpg",
  "jobTitle": "Product & Design Leader",
  "description": "Product and design leader in Melbourne. Head of Product Design and User Research. Works with C-suites and product teams to shape design functions that deliver, across fintech, retail and SaaS.",
  "address": { "@type": "PostalAddress", "addressLocality": "Melbourne", "addressCountry": "AU" },
  "sameAs": [
    "https://www.linkedin.com/in/tiffany-c/",
    "https://topmate.io/tffnyc"
  ],
  "knowsAbout": [
    "Product design", "UX research", "Design leadership", "Design systems",
    "UX career coaching", "Portfolio review", "Fintech UX", "eCommerce UX",
    "Behavioural UX design", "Design operations"
  ]
}
```

Tiffany to fill: an Instagram URL if she wants it in `sameAs`; whether to include
`worksFor` (it is on her LinkedIn, but it is her call given the employer
sensitivity elsewhere on the site). Leave `worksFor` out unless she says so.

### 3b. Service, on `/coaching` only

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://tiffany-c.com/coaching#service",
  "serviceType": "UX career coaching",
  "name": "UX Career Coaching with Tiffany Chew",
  "description": "Portfolio reviews, positioning and interview strategy for product designers and UX researchers, from a Head of Product Design who hires them.",
  "provider": { "@id": "https://tiffany-c.com/#tiffany" },
  "areaServed": ["Australia", "Asia-Pacific", "Online"],
  "audience": { "@type": "Audience", "audienceType": "Product designers, UX researchers, design leads" },
  "url": "https://tiffany-c.com/coaching",
  "offers": { "@type": "Offer", "url": "https://topmate.io/tffnyc" }
}
```

### 3c. WebSite, on the home page only

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://tiffany-c.com/",
  "name": "Tiffany Chew",
  "author": { "@id": "https://tiffany-c.com/#tiffany" }
}
```

### 3d. Article-ish data on case study pages: skip

Case studies are not articles and forcing `Article` schema on them invites a
mismatch. The Person schema on every page is enough.

### Validate

Run every page through https://validator.schema.org and Google's Rich Results Test
after deploy. Zero errors, warnings acceptable.

---

## 4. `llms.txt`

An emerging convention: a plain-text file at `/llms.txt` that summarises the site
for language models. Low cost, growing adoption, no downside.

Create `public/llms.txt`:

```
# Tiffany Chew

> Product and design leader in Melbourne. Head of Product Design and User Research.
> Coaches product designers and UX researchers on portfolios, positioning and
> interviews.

## About
- Works across fintech, retail and SaaS.
- Led a design team from 7 to 22 across B2C, B2B and Research at Touch 'n Go
  eWallet, Malaysia's largest eWallet.
- Head of Product Design at Cotton On Group.
- UX Leader of the Year 2025 finalist.

## Coaching
- UX career coaching for product designers and researchers: portfolio reviews,
  positioning, interview strategy. https://tiffany-c.com/coaching
- Book: https://topmate.io/tffnyc

## Work
- Case studies: https://tiffany-c.com/work
- Speaking and recognition: https://tiffany-c.com/awards
- Testimonials: https://tiffany-c.com/testimonials

## Contact
- https://tiffany-c.com/connect
- https://www.linkedin.com/in/tiffany-c/
```

Tiffany to check every factual line before this ships. It is the file most likely
to be quoted verbatim by an AI engine.

---

## 5. The coaching page

This is the page the whole brief is for. Code should audit it against the following
and report gaps rather than rewrite copy without Tiffany's review.

### The queries to be eligible for

Search queries:
- product design career coach
- UX portfolio review
- design leadership coaching
- product designer interview coaching
- UX career coach Melbourne / Australia
- senior product designer portfolio feedback

Question forms, which is how people ask AI engines:
- who can review my product design portfolio
- how do I prepare for a design leadership interview
- how do I position myself for a senior product design role
- is UX career coaching worth it

### What the page must contain, in plain declarative sentences

AI engines cite pages that state facts plainly. Editorial restraint is good for
humans and bad for machines, so the page needs at least one block that says the
obvious thing in the obvious way:

- **Who it is for.** "This is for product designers and UX researchers at mid to
  senior level who are..."
- **What it is.** Portfolio review, positioning, interview strategy. Named, not
  implied.
- **Who is giving it.** One sentence connecting the coaching to the hiring seat:
  she is a Head of Product Design who hires designers, and the coaching is what she
  knows from that side of the table.
- **Where and how.** Online, time zones served, how to book. The topmate link as a
  real link with descriptive anchor text, not "click here".
- **Proof.** At least two testimonials on the page itself, not only on
  `/testimonials`. Quotes are what AI engines lift.
- **An FAQ block.** Four to six question-and-answer pairs using the question forms
  above, each answered in two or three sentences. Mark it up with `FAQPage` JSON-LD.
  This is the single best AIEO move available on a page like this.

### Title and description for the route

Current: "UX Career Coaching — Tiffany Chew — Product & Design Leader" and "UX career
coaching — portfolio reviews, positioning and interview strategies for designers and
researchers."

Both are fine. Tighten the description to include the differentiator:
"UX career coaching from a Head of Product Design who hires designers: portfolio
reviews, positioning and interview strategy for product designers and researchers."

### Headings

The H1 should contain "UX career coaching" or "product design coaching" literally.
Check it does.

---

## 6. Internal linking

- The home page should link to `/coaching` with descriptive anchor text, not just
  a nav item. One sentence in the body.
- `/testimonials` should link to `/coaching` where a testimonial is about coaching.
- Case study pages can carry a single quiet line at the end pointing to coaching.
  Do not add this to gated pages.

---

## 7. Things code cannot fix, for Tiffany

The technical work above makes the site **eligible** to rank and to be cited. What
makes it actually rank is corroboration elsewhere. In rough order of value:

1. **Google Search Console.** Verify the domain if not done, submit the sitemap,
   and watch which queries already bring impressions. This is the only real data
   source for the SEO question and it is free.
2. **LinkedIn.** The profile is the strongest off-site signal for a personal brand.
   It should link to tiffany-c.com/coaching, use the words "UX career coaching" in
   the About, and the Featured section should carry the coaching page.
3. **Topmate profile.** Link back to tiffany-c.com. Consistency of name and claim
   across topmate, LinkedIn and the site is what AI engines use to decide you are
   who you say you are.
4. **Speaking pages.** Every event that listed her as a speaker is a backlink
   opportunity. Ask organisers to link to the site.
5. **Directories.** ADPList, if she is on it, and any Australian or Malaysian design
   community listings.
6. **One or two written pieces** on LinkedIn that answer the question-form queries
   above, linking to /coaching. Corroboration plus a link.

### Honest expectations

- For her own name she will rank first. That is not the goal.
- For "UX career coach" and similar, competition is established coaches and
  platforms. The site can be eligible within weeks of the prerender fix; ranking
  takes months and depends on items 1 to 6 above more than on anything in code.
- AI engines cite what is stated plainly and corroborated. The FAQ block, the
  Person schema and llms.txt are the on-site half. LinkedIn and topmate are the
  other half.

---

## 8. Measurement

- **Vercel Analytics** is already on. It answers traffic and device questions.
- **Search Console** answers query and ranking questions. Non-negotiable.
- **The feedback form** (separate task) answers "who came and why". Add a "what
  brought you here" field so coaching intent is visible.
- **AI engine test, monthly.** Ask ChatGPT, Perplexity and Claude the question-form
  queries above and note whether tiffany-c.com is cited. Keep a simple log. This is
  the only way to know whether AIEO is working, and it costs ten minutes.

---

## 9. Consulting: parked

If the decision on publishing consulting services changes, the following switch on:

- Add "Design consulting" to `knowsAbout` and a second `Service` block for it.
- Add the query set: fractional design leader, design consultant Asia-Pacific,
  product design consultant Melbourne.
- Give the Connect page the same declarative block and FAQ treatment as coaching.

Until then, do none of this. SEO cannot bring people to a service the site does not
say it offers.

---

## Order of work

1. Section 1, the prerender. Verify, fix, verify again. Nothing else matters until
   body text is in the static HTML.
2. Section 2, register the cross-border route.
3. Section 3, JSON-LD. Person everywhere, Service on coaching, WebSite on home.
4. Section 4, llms.txt, after Tiffany checks the facts.
5. Section 5, audit the coaching page and report gaps.
6. Section 6, internal links.

Commit each section separately so a regression can be bisected.
