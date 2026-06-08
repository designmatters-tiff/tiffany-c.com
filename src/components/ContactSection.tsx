export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col gap-4">
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-sans)", opacity: 0.4 }}
          >
            Contact
          </span>
          {/* COPY: contact headline */}
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Let&apos;s make
            <br />
            something worth making.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid #0a0a0a" }}>
          {/* CTA 1 — roles / consulting */}
          <div className="p-12 flex flex-col gap-6" style={{ borderRight: "1px solid #0a0a0a" }}>
            <div
              className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "#c9a96e" }}
            >
              Roles &amp; Consulting
            </div>
            {/* COPY: CTA 1 headline */}
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Let&apos;s work together.
            </h3>
            {/* COPY: CTA 1 body */}
            <p
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.75, opacity: 0.7 }}
            >
              Open to Director and Head of Product Design roles. Also available
              for consulting engagements — design strategy, team audits, and
              fractional design leadership.
            </p>
            {/* COPY: update email address */}
            <a
              href="mailto:hello@tiffany-c.com"
              className="inline-block mt-2 px-8 py-4 text-sm tracking-wider uppercase transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--font-sans)",
                backgroundColor: "#0a0a0a",
                color: "#f5f4f0",
              }}
            >
              Get in touch
            </a>
          </div>

          {/* CTA 2 — coaching / speaking */}
          <div className="p-12 flex flex-col gap-6">
            <div
              className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "#c9a96e" }}
            >
              Coaching &amp; Speaking
            </div>
            {/* COPY: CTA 2 headline */}
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Let&apos;s talk.
            </h3>
            {/* COPY: CTA 2 body */}
            <p
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.75, opacity: 0.7 }}
            >
              Whether you&apos;re a designer navigating your first leadership role,
              or an organisation looking for a speaker who brings genuine
              experience — I&apos;d love to hear from you.
            </p>
            {/* COPY: update email address */}
            <a
              href="mailto:hello@tiffany-c.com"
              className="inline-block mt-2 px-8 py-4 text-sm tracking-wider uppercase border transition-opacity hover:opacity-60"
              style={{
                fontFamily: "var(--font-sans)",
                borderColor: "#0a0a0a",
                color: "#0a0a0a",
              }}
            >
              Say hello
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-12 flex gap-8 items-center">
          {/* COPY: update LinkedIn URL */}
          <a
            href="https://linkedin.com/in/tiffany-c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider uppercase transition-opacity hover:opacity-50"
            style={{ fontFamily: "var(--font-sans)", color: "#0a0a0a" }}
          >
            LinkedIn
          </a>
          {/* COPY: update email address */}
          <a
            href="mailto:hello@tiffany-c.com"
            className="text-sm tracking-wider uppercase transition-opacity hover:opacity-50"
            style={{ fontFamily: "var(--font-sans)", color: "#0a0a0a" }}
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
