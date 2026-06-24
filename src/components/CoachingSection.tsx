export default function CoachingSection() {
  return (
    <section
      id="coaching"
      className="py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#0a0a0a", color: "#f5f1eb" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — header */}
        <div className="flex flex-col gap-6">
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
          >
            Coaching &amp; Mentorship
          </span>
          {/* COPY: coaching headline */}
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Grow into
            <br />
            leadership.
          </h2>
          {/* COPY: coaching intro */}
          <p
            className="leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", opacity: 0.7 }}
          >
            If you&apos;re a designer who knows you&apos;re ready for more — more
            responsibility, more influence, more clarity about where you&apos;re
            headed — let&apos;s talk.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="#contact"
              className="inline-block px-8 py-4 text-sm tracking-wider uppercase transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--font-sans)",
                backgroundColor: "#b8860b",
                color: "#0a0a0a",
              }}
            >
              {/* COPY: primary CTA */}
              Get in touch
            </a>
            {/* ADPList mentor profile */}
            <a
              href="https://adplist.org/mentors/tiffany-c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-sm tracking-wider uppercase border transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--font-sans)",
                borderColor: "rgba(245,241,235,0.3)",
                color: "#f5f1eb",
              }}
            >
              Book on ADPList
            </a>
          </div>
        </div>

        {/* Right — details */}
        <div className="flex flex-col gap-10">
          {/* Who it's for */}
          <div className="flex flex-col gap-3">
            <div
              className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "#b8860b" }}
            >
              Who it&apos;s for
            </div>
            {/* COPY: who coaching is for */}
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.8 }}>
              Designers at the mid-to-senior level who are looking to move into
              design leadership — and want a thinking partner who has already
              made that journey.
            </p>
          </div>

          {/* What it involves */}
          <div className="flex flex-col gap-3">
            <div
              className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "#b8860b" }}
            >
              What it involves
            </div>
            {/* COPY: update list items as needed */}
            <ul
              className="flex flex-col gap-2"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.8 }}
            >
              {[
                "1:1 sessions — structured or open depending on what you need",
                "Portfolio and narrative review",
                "Navigating the politics of leadership",
                "Building credibility in rooms where design isn't yet valued",
                "Career path clarity and next-role strategy",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: "#b8860b", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
