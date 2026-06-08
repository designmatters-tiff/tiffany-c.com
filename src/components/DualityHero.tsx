"use client";

import { useEffect, useRef, useCallback } from "react";

export default function DualityHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intuitiveRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const tRef = useRef(0);
  const targetXRef = useRef(0.5); // fraction of width
  const currentXRef = useRef(0.5);
  const isDragging = useRef(false);
  const isMobile = useRef(false);

  const updateClipPath = useCallback(
    (canvas: HTMLCanvasElement, points: { x: number; y: number }[]) => {
      if (!intuitiveRef.current) return;
      const h = canvas.height;
      const pts = points.map((p) => `${p.x}px ${p.y}px`).join(", ");
      intuitiveRef.current.style.clipPath = `polygon(${pts}, ${canvas.width}px ${h}px, ${canvas.width}px 0px)`;
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      isMobile.current = canvas.offsetWidth < 768;
      // Centre split on resize
      currentXRef.current = 0.5;
      targetXRef.current = 0.5;
    };

    resize();
    window.addEventListener("resize", resize);

    // ---- Drag handlers (desktop only) ----
    const onMouseDown = (e: MouseEvent) => {
      if (isMobile.current) return;
      isDragging.current = true;
      targetXRef.current = e.clientX / canvas.offsetWidth;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || isMobile.current) return;
      targetXRef.current = Math.max(
        0.2,
        Math.min(0.8, e.clientX / canvas.offsetWidth)
      );
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };
    const onTouchStart = (e: TouchEvent) => {
      if (isMobile.current) return;
      targetXRef.current =
        e.touches[0].clientX / canvas.offsetWidth;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isMobile.current) return;
      targetXRef.current = Math.max(
        0.2,
        Math.min(0.8, e.touches[0].clientX / canvas.offsetWidth)
      );
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onMouseUp);

    // ---- Animation loop ----
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const t = tRef.current;
      tRef.current += 0.007;

      // Ease currentX toward targetX
      currentXRef.current +=
        (targetXRef.current - currentXRef.current) * 0.05;

      const baseX = currentXRef.current * w;

      // Build wave points
      const points: { x: number; y: number }[] = [];
      for (let y = 0; y <= h; y += 2) {
        const wave =
          Math.sin(y * 0.009 + t * 0.6) * 30 +
          Math.sin(y * 0.02 + t * 0.35) * 14 +
          Math.sin(y * 0.004 + t * 0.9) * 22;
        points.push({ x: baseX + wave, y });
      }

      // Soft glow behind curve
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 22;
      ctx.stroke();

      // Sharp edge line
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Update clip-path on the intuitive (dark) content div
      updateClipPath(canvas, points);

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [updateClipPath]);

  return (
    <section
      className="relative w-full"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* ── Rational side (light) — full bleed base ── */}
      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ backgroundColor: "#f5f4f0", color: "#0a0a0a" }}
      >
        <div className="pl-[8vw] pr-[52%] flex flex-col gap-6">
          {/* COPY: rational label */}
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: "#0a0a0a", opacity: 0.4 }}
          >
            Rational
          </span>
          {/* COPY: rational headline */}
          <h1
            className="leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
              fontWeight: 900,
              color: "#0a0a0a",
            }}
          >
            Design shaped
            <br />
            by evidence.
          </h1>
          {/* COPY: rational body */}
          <p
            className="max-w-sm leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#0a0a0a", opacity: 0.7 }}
          >
            A decade at the executive table. From founding my own brand to
            Head of Product Design at Malaysia&apos;s first fintech unicorn,
            TNG eWallet.
          </p>
          {/* COPY: proof points */}
          <div className="flex gap-8 pt-2">
            {[
              ["10+", "years leading"],
              ["0→1", "products built"],
              ["22", "team peak"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    color: "#0a0a0a",
                    opacity: 0.5,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Intuitive side (dark) — clipped by wave ── */}
      <div
        ref={intuitiveRef}
        className="absolute inset-0 flex flex-col justify-center"
        style={{ backgroundColor: "#0a0a0a", color: "#f5f4f0", willChange: "clip-path" }}
      >
        <div className="pr-[8vw] pl-[52%] flex flex-col gap-6">
          {/* COPY: intuitive label */}
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: "#f5f4f0", opacity: 0.4 }}
          >
            Intuitive
          </span>
          {/* COPY: intuitive headline */}
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
              fontWeight: 900,
              color: "#f5f4f0",
            }}
          >
            Design shaped
            <br />
            by feeling.
          </h2>
          {/* COPY: intuitive body */}
          <p
            className="max-w-sm leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#f5f4f0", opacity: 0.7 }}
          >
            The best products are born from moments you can&apos;t put in a
            brief. A hunch. A conversation. A thing someone didn&apos;t say.
          </p>
          {/* COPY: tagline */}
          <p
            className="max-w-xs leading-relaxed"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "#c9a96e",
            }}
          >
            &ldquo;Clarity in design. Grounded in purpose.&rdquo;
          </p>
        </div>
      </div>

      {/* ── Canvas — wave divider ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ cursor: "ew-resize", zIndex: 10 }}
      />

      {/* ── Anchor — name + title fixed at bottom centre ── */}
      <div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-1 z-20 pointer-events-none"
      >
        {/* COPY: name + title */}
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
            fontWeight: 700,
            color: "#f5f4f0",
            mixBlendMode: "difference",
          }}
        >
          Tiffany C.
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#f5f4f0",
            mixBlendMode: "difference",
          }}
        >
          Product Design Leader
        </div>
      </div>

      {/* ── Drag hint ── */}
      <div
        className="absolute bottom-10 right-8 z-20 pointer-events-none hidden md:block"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#f5f4f0",
          mixBlendMode: "difference",
          opacity: 0.5,
        }}
      >
        drag to explore
      </div>
    </section>
  );
}
