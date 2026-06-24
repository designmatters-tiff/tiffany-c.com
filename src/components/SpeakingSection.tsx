const pastTalks = [
  {
    year: "2026",
    event: "UX Rotterdam",
    location: "NL",
    role: "Speaker",
    // COPY: talk title
    title: "The Human Cost of Human-Centred Design",
  },
  {
    year: "2025",
    event: "UX Camp Melbourne",
    location: "AU",
    role: "Speaker",
    // COPY: talk title
    title: "404: System Burnout",
  },
  {
    year: "2025",
    event: "Ladies that UX Taipei",
    location: "TW",
    role: "Panelist",
    // COPY: talk title
    title: "Driving Organisational Change and Creating Meaningful Impact",
  },
  {
    year: "2025",
    event: "FUSECON",
    location: "MY",
    role: "Panelist",
    // COPY: talk title
    title: "Mental Health: From Awareness to Action",
  },
  {
    year: "2023",
    event: "Design Leadership KL",
    location: "MY",
    role: "Speaker",
    // COPY: talk title
    title: "Synergy for Sustainable Growth: Empowering UX Teams",
  },
];

const futureTopics = [
  "Design leadership",
  "Building design culture",
  "Purpose-driven design",
  "AI-native design practice",
  "Financial empowerment through design",
  "Designer wellbeing and burnout",
];

export default function SpeakingSection() {
  return (
    <section
      id="speaking"
      className="py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#f5f1eb", color: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col gap-4">
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
          >
            Speaking
          </span>
          {/* COPY: speaking headline */}
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
          {/* COPY: speaking intro */}
          <p
            className="max-w-lg leading-relaxed mt-2"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", opacity: 0.7 }}
          >
            Available for conferences, company events, and panel discussions.
            Talks drawn from 15+ years at the intersection of design, business, and people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Past talks */}
          <div>
            <div
              className="text-xs tracking-[0.2em] uppercase mb-8"
              style={{ fontFamily: "var(--font-sans)", color: "#b8860b" }}
            >
              Past talks
            </div>
            <div className="flex flex-col" style={{ borderTop: "1px solid #0a0a0a" }}>
              {pastTalks.map((talk) => (
                <div
                  key={talk.title}
                  className="py-6 flex gap-6 items-start"
                  style={{ borderBottom: "1px solid rgba(10,10,10,0.12)" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      color: "#0a0a0a",
                      opacity: 0.4,
                      minWidth: "3rem",
                      paddingTop: "2px",
                    }}
                  >
                    {talk.year}
                  </div>
                  <div className="flex flex-col gap-1">
                    {/* COPY: talk title */}
                    <div
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#0a0a0a",
                        lineHeight: 1.4,
                      }}
                    >
                      {talk.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        opacity: 0.5,
                      }}
                    >
                      {talk.role} · {talk.event} · {talk.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Available topics + CTA */}
          <div className="flex flex-col gap-10">
            <div>
              <div
                className="text-xs tracking-[0.2em] uppercase mb-6"
                style={{ fontFamily: "var(--font-sans)", color: "#b8860b" }}
              >
                Available topics
              </div>
              {/* COPY: update topic list */}
              <ul className="flex flex-col gap-2">
                {futureTopics.map((topic) => (
                  <li key={topic} className="flex gap-3 items-start">
                    <span style={{ color: "#b8860b", flexShrink: 0 }}>—</span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        opacity: 0.75,
                      }}
                    >
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-4 text-sm tracking-wider uppercase border transition-opacity hover:opacity-60 self-start"
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
      </div>
    </section>
  );
}
