const caseStudies = [
  {
    company: "TNG eWallet",
    industry: "Fintech · Malaysia",
    tag: "Team & Culture · Product Strategy",
    problem:
      "Malaysia's first fintech unicorn needed to scale its design capability from a small team to an enterprise function — fast.",
    // COPY: update with Tiffany's own words
    what: "Built design team from 7 to 22. Established UX Research from the ground up. Led DesignOps, OKR framework, and design culture across mass-consumer scale.",
    outcome: "Design function operating at unicorn scale — embedded, strategic, and measurable.",
    nda: false,
  },
  {
    company: "Cotton On",
    industry: "Fashion / Retail · Australia",
    tag: "Growth & Conversion · Design Systems",
    problem:
      "Multi-brand, multi-platform eCommerce environment with fragmented design practices and pressure to deliver measurable commercial outcomes.",
    // COPY: update with Tiffany's own words
    what: "Led design across eCommerce platforms, established design systems, and drove AB testing culture. Aligned design output to commercial KPIs.",
    outcome: "$15M annualised growth outcome attributed to design-led improvements.",
    nda: false,
  },
  {
    company: "Soak Republic",
    industry: "Fashion · Founder",
    tag: "0 to 1 · Product Strategy",
    problem: "Building a fashion brand from zero — no team, no infrastructure, no playbook.",
    // COPY: update with Tiffany's own words
    what: "Co-founded and built the brand end-to-end. Owned P&L, brand identity, customer experience, and product direction.",
    outcome: "Brand built, scaled, and sold.",
    nda: false,
  },
  {
    company: "Solar Energy SaaS",
    industry: "Energy · B2B",
    tag: "0 to 1 · Product Strategy",
    problem: "Niche B2B product in a technically complex domain with a lean team and no established UX practice.",
    // COPY: update with Tiffany's own words
    what: "Work shown on request — scope includes 0-to-1 product design, stakeholder alignment, and lean research in a regulated domain.",
    outcome: "Available on request.",
    nda: true,
  },
];

const tags = ["All", "Growth & Conversion", "Product Strategy", "Team & Culture", "Design Systems"];

export default function WorkSection() {
  return (
    <section id="work" className="py-32 px-8 md:px-16 lg:px-24" style={{ backgroundColor: "#f5f4f0" }}>
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
                opacity: tag === "All" ? 1 : 0.5,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Case study grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ borderColor: "#0a0a0a", border: "1px solid #0a0a0a" }}>
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
                    {cs.company}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      color: "#0a0a0a",
                      opacity: 0.5,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {cs.industry}
                  </div>
                </div>
                {cs.nda && (
                  <span
                    className="text-xs px-2 py-1 border"
                    style={{
                      fontFamily: "var(--font-sans)",
                      borderColor: "#c9a96e",
                      color: "#c9a96e",
                      whiteSpace: "nowrap",
                    }}
                  >
                    NDA · on request
                  </span>
                )}
              </div>

              <span
                className="text-xs tracking-wider uppercase"
                style={{ fontFamily: "var(--font-sans)", color: "#c9a96e" }}
              >
                {cs.tag}
              </span>

              <div className="flex flex-col gap-4">
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
                  >
                    The problem
                  </div>
                  {/* COPY: problem description */}
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.8 }}>
                    {cs.problem}
                  </p>
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
                  >
                    What I did
                  </div>
                  {/* COPY: what Tiffany did */}
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.8 }}>
                    {cs.what}
                  </p>
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
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
