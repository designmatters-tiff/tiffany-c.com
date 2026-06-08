// COPY: replace placeholder testimonials with real quotes
const testimonials = [
  {
    quote: "Testimonial quote goes here — to be provided by Tiffany.",
    name: "Name Surname",
    title: "Job Title",
    company: "Company",
  },
  {
    quote: "Testimonial quote goes here — to be provided by Tiffany.",
    name: "Name Surname",
    title: "Job Title",
    company: "Company",
  },
  {
    quote: "Testimonial quote goes here — to be provided by Tiffany.",
    name: "Name Surname",
    title: "Job Title",
    company: "Company",
  },
  {
    quote: "Testimonial quote goes here — to be provided by Tiffany.",
    name: "Name Surname",
    title: "Job Title",
    company: "Company",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#0a0a0a", color: "#f5f4f0" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col gap-4">
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
          >
            What people say
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ border: "1px solid rgba(245,244,240,0.12)" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-10 flex flex-col gap-6"
              style={{ borderRight: "1px solid rgba(245,244,240,0.12)", borderBottom: "1px solid rgba(245,244,240,0.12)" }}
            >
              {/* COPY: testimonial quote */}
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  opacity: 0.85,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#f5f4f0",
                  }}
                >
                  {/* COPY: name */}
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    opacity: 0.5,
                    letterSpacing: "0.05em",
                  }}
                >
                  {/* COPY: title, company */}
                  {t.title} · {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
