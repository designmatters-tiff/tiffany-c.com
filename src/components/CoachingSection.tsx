export default function CoachingSection() {
  return (
    <section
      id="coaching"
      className="py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#0a0a0a", color: "#f5f4f0" }}
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
          {/* COPY: coaching intro — update with Tiffany's own words */}
          <p
            className="leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", opacity: 0.7 }}
          >
            If you&apos;re a designer who knows you&apos;re ready for more — more
            responsibility, more influence, more clarity about where you&apos;re
            headed — let&apos;s talk.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-8 py-4 text-sm tracking-wider uppercase transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-sans)",
              backgroundColor: "#c9a96e",
              color: "#0a0a0a",
            }}
          >
            {/* COPY: CTA text */}
            Get in touch
          </a>
        </div>

        {/* Right — details */}
        <div className="flex flex-col gap-10">
          {/* Who it's for */}
          <div className="flex flex-col gap-3">
            <div
              className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "#c9a96e" }}
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
              style={{ fontFamily: "var(--font-sans)", color: "#c9a96e" }}
            >
              What it involves
            </div>
            {/* COPY: what coaching involves — update list items */}
            <ul
              className="flex flex-col gap-2"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.8 }}
            >
              {[
                "1:1 sessions — structured or open depending on what you need",
                "Portfolio and narrative review",
                "Navigating the politics of leadership",
                "Building credibility in rooms where design isn't yet valued",
                "Career path clarity",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: "#c9a96e", flexShrink: 0 }}>—</span>
                  {/* COPY: coaching item */}
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
