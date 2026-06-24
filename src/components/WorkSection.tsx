const caseStudies = [
  {
    company: "Cotton On Group",
    tenure: "Oct 2024 – Present",
    role: "Product Design Lead",
    industry: "Fashion / Retail · Australia",
    tag: "Growth & Conversion · Design Systems",
    problem:
      "Multi-brand, multi-platform eCommerce environment across 9 countries and 7 brands — fragmented design practices, growing demand for AI-native workflows, and pressure to deliver measurable commercial outcomes.",
    // COPY: refine with Tiffany's own words
    what: "Rebuilding the design workflow as AI-native. Building a multi-brand design system with accessibility standards. Co-owning the AB testing roadmap.",
    outcome: "A$3.5M annualised revenue from Save for Later feature — delivered in 9 weeks.",
    nda: false,
  },
  {
    company: "TNG eWallet",
    tenure: "Oct 2021 – Oct 2024",
    role: "Head of Product Design & UX Research",
    industry: "Fintech · Malaysia",
    tag: "Team & Culture · Product Strategy",
    problem:
      "Malaysia's first fintech unicorn needed to scale design from a small team into an enterprise function — serving 23M+ users and 2M+ merchant touchpoints — while building UX Research from zero.",
    // COPY: refine with Tiffany's own words
    what: "Grew the team from 7 to 22. Shipped 20+ features at consumer scale. Built the UX Research function from scratch. Reduced trilingual copy turnaround by 20% via AI tooling. Led DesignOps and OKR frameworks.",
    outcome: "Brand perception exceeded target by 14% against a 9.8% KPI. September 2024: first profitable month in seven years.",
    nda: false,
  },
  {
    company: "Plus Xnergy",
    tenure: "2018 – 2021",
    role: "Senior Manager, Design Innovation",
    industry: "Solar Energy SaaS · Enterprise IoT",
    tag: "0 to 1 · Product Strategy",
    problem:
      "A technically complex B2B SaaS product with no existing design function and a need to translate enterprise IoT data into usable dashboards and mobile apps.",
    // COPY: refine with Tiffany's own words
    what: "Led 0-to-1 UX for enterprise SaaS IoT dashboard and mobile apps. Built an in-house design and UX team from scratch. Ran design sprints with C-suite and R&D.",
    outcome: "Available on request.",
    nda: true,
  },
  {
    company: "Soak Republic",
    tenure: "2010 – 2017",
    role: "Co-founder & Head of Design",
    industry: "Fashion Accessories · Founder",
    tag: "0 to 1 · Growth & Conversion",
    problem:
      "Building a fashion accessories brand from blog sales to retail and eCommerce — with no playbook, no team, and no outside funding.",
    // COPY: refine with Tiffany's own words
    what: "Co-founded and built the brand end-to-end. Owned P&L, buying, operations, brand direction, and customer experience.",
    outcome: "160x ROI on initial capital at exit.",
    nda: false,
  },
  {
    company: "Saatchi & Saatchi Arachnid",
    tenure: "2007 – 2010",
    role: "Art Director",
    industry: "Digital Advertising",
    tag: "Brand & Campaign",
    problem:
      "Campaign visual production for global brands in a fast-paced agency environment.",
    // COPY: refine with Tiffany's own words
    what: "Art directed digital campaigns for Toyota, Nippon Paint, Coca-Cola, HSBC, and FIFA World Cup 2010.",
    outcome: "Multi-market award-recognised campaign work.",
    nda: false,
  },
];

const tags = ["All", "Growth & Conversion", "Product Strategy", "Team & Culture", "Design Systems", "0 to 1"];

export default function WorkSection() {
  return (
    <section id="work" className="py-32 px-8 md:px-16 lg:px-24" style={{ backgroundColor: "#f5f1eb" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4">
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: "#0a0a0a", opacity: 0.4 }}
          >
            Work
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 900,
              color: "#0a0a0a",
              lineHeight: 1.1,
            }}
          >
            Leadership &amp;
            <br />
            Case Studies
          </h2>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-xs tracking-wider uppercase border"
              style={{
                fontFamily: "var(--font-sans)",
                borderColor: "#0a0a0a",
                color: "#0a0a0a",
                opacity: tag === "All" ? 1 : 0.45,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Case study grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ border: "1px solid #0a0a0a" }}
        >
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="p-10 flex flex-col gap-5"
              style={{ borderRight: "1px solid #0a0a0a", borderBottom: "1px solid #0a0a0a" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#0a0a0a",
                    }}
                  >
                    {/* COPY: company name */}
                    {cs.company}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      color: "#0a0a0a",
                      opacity: 0.45,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {/* COPY: role + tenure */}
                    {cs.role} · {cs.tenure}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      color: "#0a0a0a",
                      opacity: 0.35,
                      letterSpacing: "0.05em",
                      marginTop: "2px",
                    }}
                  >
                    {cs.industry}
                  </div>
                </div>
                {cs.nda && (
                  <span
                    className="text-xs px-2 py-1 border shrink-0"
                    style={{
                      fontFamily: "var(--font-sans)",
                      borderColor: "#b8860b",
                      color: "#b8860b",
                    }}
                  >
                    NDA · on request
                  </span>
                )}
              </div>

              <span
                className="text-xs tracking-wider uppercase"
                style={{ fontFamily: "var(--font-sans)", color: "#b8860b" }}
              >
                {cs.tag}
              </span>

              <div className="flex flex-col gap-4">
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ fontFamily: "var(--font-sans)", opacity: 0.35 }}
                  >
                    The problem
                  </div>
                  {/* COPY: problem */}
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.75 }}>
                    {cs.problem}
                  </p>
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ fontFamily: "var(--font-sans)", opacity: 0.35 }}
                  >
                    What I did
                  </div>
                  {/* COPY: what */}
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.75 }}>
                    {cs.what}
                  </p>
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ fontFamily: "var(--font-sans)", opacity: 0.35 }}
                  >
                    Outcome
                  </div>
                  {/* COPY: outcome */}
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      color: "#0a0a0a",
                    }}
                  >
                    {cs.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
