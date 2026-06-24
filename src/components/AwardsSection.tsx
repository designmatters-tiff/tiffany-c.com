const awards = [
  {
    year: "2025",
    // COPY: award name
    title: "UX Leader of the Year — Finalist",
    body: "Women in Digital National Awards · AU",
  },
  {
    year: "2007",
    // COPY: award name
    title: "Best Tertiary Students Award (SPINOBOT)",
    body: "TUANZ Business Internet Awards · NZ",
  },
];

const community = [
  {
    period: "Jul 2025 – present",
    // COPY: community role
    role: "Member",
    org: "Women in Digital · AU",
  },
  {
    period: "Jan 2022 – Oct 2024",
    role: "Chapter Lead",
    org: "Ladies that UX · Kuala Lumpur MY",
  },
  {
    period: "Mar 2021 – present",
    role: "Mentor",
    org: "ADPList",
  },
  {
    period: "2021",
    role: "Founder",
    // COPY: initiative description — feel free to expand
    org: "Save the White Flag — pandemic-response initiative connecting donors with households in crisis. Reached 1,700 individuals and 200 households in under two months. Raised RM100,000 in relief support.",
  },
];

export default function AwardsSection() {
  return (
    <section
      className="py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#e8e0d4", color: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Awards */}
        <div>
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-10"
            style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
          >
            Awards &amp; Recognition
          </span>
          <div className="flex flex-col" style={{ borderTop: "1px solid rgba(10,10,10,0.2)" }}>
            {awards.map((a) => (
              <div
                key={a.title}
                className="py-6 flex gap-6 items-start"
                style={{ borderBottom: "1px solid rgba(10,10,10,0.1)" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    opacity: 0.4,
                    minWidth: "3rem",
                    paddingTop: "3px",
                  }}
                >
                  {a.year}
                </div>
                <div>
                  {/* COPY: award title */}
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      lineHeight: 1.4,
                    }}
                  >
                    {a.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      opacity: 0.5,
                      marginTop: "4px",
                    }}
                  >
                    {a.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community */}
        <div>
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-10"
            style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
          >
            Community
          </span>
          <div className="flex flex-col" style={{ borderTop: "1px solid rgba(10,10,10,0.2)" }}>
            {community.map((c) => (
              <div
                key={c.org}
                className="py-6 flex gap-6 items-start"
                style={{ borderBottom: "1px solid rgba(10,10,10,0.1)" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    opacity: 0.35,
                    minWidth: "3rem",
                    paddingTop: "3px",
                    lineHeight: 1.5,
                  }}
                >
                  {c.period}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#b8860b",
                      marginBottom: "4px",
                    }}
                  >
                    {c.role}
                  </div>
                  {/* COPY: org/initiative */}
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      opacity: 0.8,
                    }}
                  >
                    {c.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
