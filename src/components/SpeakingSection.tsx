const topics = [
  {
    title: "Design Leadership",
    // COPY: topic description
    desc: "What it actually takes to lead a design team — beyond craft. How to build influence, manage up, and create the conditions for great work.",
  },
  {
    title: "Building Design Culture",
    // COPY: topic description
    desc: "How to build a design function that earns a seat at the table. From hiring and onboarding to DesignOps and measuring impact.",
  },
  {
    title: "Purpose-Driven Design",
    // COPY: topic description
    desc: "Design that goes beyond usability. How to bring genuine purpose into product work without losing commercial rigour.",
  },
  {
    title: "Financial Empowerment Through Design",
    // COPY: topic description
    desc: "How design can improve financial literacy and resilience — drawing on fintech experience at consumer scale.",
  },
];

export default function SpeakingSection() {
  return (
    <section
      id="speaking"
      className="py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col gap-4">
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
          >
            Speaking
          </span>
          {/* COPY: speaking section headline */}
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Talks that move
            <br />
            the conversation forward.
          </h2>
          <p
            className="max-w-lg leading-relaxed mt-2"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", opacity: 0.7 }}
          >
            {/* COPY: speaking intro */}
            Available for conferences, company events, and panel discussions.
            Talks drawn from 10+ years at the intersection of design, business, and
            people.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ border: "1px solid #0a0a0a" }}>
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="p-10 flex flex-col gap-4"
              style={{ borderRight: "1px solid #0a0a0a", borderBottom: "1px solid #0a0a0a" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#0a0a0a",
                }}
              >
                {/* COPY: topic title */}
                {topic.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  opacity: 0.7,
                }}
              >
                {/* COPY: topic description */}
                {topic.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-sm tracking-wider uppercase border transition-opacity hover:opacity-60"
            style={{
              fontFamily: "var(--font-sans)",
              borderColor: "#0a0a0a",
              color: "#0a0a0a",
            }}
          >
            {/* COPY: CTA */}
            Invite me to speak
          </a>
        </div>
      </div>
    </section>
  );
}
