import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";
import { motion } from "motion/react";
import { Linkedin, X, ExternalLink, Plus } from "lucide-react";

import workVectorImg from "@/imports/Work/de262c33781bad1f71ecf3f1af344f0a34fcb830.png";
import workScreenshot from "@/imports/Work/20b286508ef46dd3c3d46807441d1c8751314568.png";
import noiseGrad1 from "@/imports/Home/7e24109bcd9a8ce8e2da86d2a7818871291daeb7.png";
import awardsWomenDigital from "@/imports/AwardsSpeaking/WID-tiff2025.png";
import awardsFinalistCard from "@/imports/AwardsSpeaking/WID-2.png";
import awardsFuseCon from "@/imports/AwardsSpeaking/Fusecon2025.png";
import awardsTaipei from "@/imports/AwardsSpeaking/LTUX Taipei.png";
import awardsRotterdam from "@/imports/AwardsSpeaking/ux-rotterdam.jpeg";

// ─── Logo paths ───────────────────────────────────────────────────
const T_PATH =
  "M15.0593 10.5439H26.1216V41.3947H43.6437V50.6304H26.1216V112H15.0593V50.6304H0V41.3947H15.0593V10.5439Z";
const F_PATH =
  "M51.4358 -0.000101434C54.8629 -0.0961583 58.253 0.706741 61.2465 2.32346C63.8089 3.71473 65.835 5.87316 67.0199 8.47409C68.3908 12.5872 68.9656 16.9096 68.7156 21.2244V34.1896H80V43.4448H68.7156V112H57.6533V43.4448H39.6669V34.1896H57.5927V22.9818C57.7416 20.0554 57.5588 17.1221 57.0477 14.2342C56.5471 12.9864 55.5922 11.9587 54.3628 11.3444C52.724 10.4427 50.8569 10.003 48.973 10.0752C45.3631 10.242 41.823 11.098 38.5566 12.594V2.1282C42.7253 0.838156 47.0608 0.121707 51.4358 -0.000101434V-0.000101434Z";
const DOT_PATH =
  "M42.696 95.5007C41.9444 95.5244 41.196 95.394 40.5002 95.1181C39.8043 94.8421 39.1768 94.4268 38.6587 93.8995C37.8705 93.1384 37.3352 92.167 37.1215 91.1098C36.9078 90.0525 37.0253 88.9576 37.4591 87.9654C37.8928 86.9732 38.623 86.1289 39.556 85.5407C40.4891 84.9524 41.5824 84.6471 42.696 84.6638C43.4258 84.6551 44.1497 84.7909 44.8232 85.0629C45.4967 85.3349 46.1056 85.7373 46.6123 86.2454C47.6576 87.2625 48.2444 88.6383 48.2444 90.0725C48.2444 91.5066 47.6576 92.8825 46.6123 93.8995C46.1095 94.414 45.5019 94.8219 44.8278 95.0975C44.1537 95.3731 43.4278 95.5104 42.696 95.5007V95.5007ZM48.207 77.1854H37.1447V19.0962H48.207V77.1854Z";

const GOLD        = "#B2933B";
const GOLD_BRIGHT = "#e3c85c";
const INK         = "#111111";
const DIM         = "#666660";
const NAV_GRADIENT = "linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), linear-gradient(to right, #B2933B, #6281B7, #C27AA6)";

type Page = "home" | "work" | "awards" | "speaking";

// ─── Dark mode context ────────────────────────────────────────────
const DarkModeCtx = createContext(false);
const DarkModeToggleCtx = createContext<() => void>(() => {});

// ─── Animated gradient background (dark mode) ─────────────────────
function AnimatedGradientBg() {
  return (
    <>
      <style>{`
        @keyframes drift-a { 0%{transform:translate(0%,0%) scale(1)} 33%{transform:translate(8%,-12%) scale(1.08)} 66%{transform:translate(-6%,10%) scale(0.95)} 100%{transform:translate(0%,0%) scale(1)} }
        @keyframes drift-b { 0%{transform:translate(0%,0%) scale(1)} 40%{transform:translate(-10%,8%) scale(1.12)} 70%{transform:translate(7%,-6%) scale(0.92)} 100%{transform:translate(0%,0%) scale(1)} }
        @keyframes drift-c { 0%{transform:translate(0%,0%) scale(1)} 50%{transform:translate(12%,6%) scale(1.06)} 80%{transform:translate(-8%,-10%) scale(1.1)} 100%{transform:translate(0%,0%) scale(1)} }
        @keyframes drift-d { 0%{transform:translate(0%,0%) scale(1.05)} 45%{transform:translate(-5%,14%) scale(0.93)} 75%{transform:translate(9%,-5%) scale(1.1)} 100%{transform:translate(0%,0%) scale(1.05)} }
      `}</style>
      <div className="absolute inset-0 bg-[#181410]" />
      <div className="absolute rounded-full pointer-events-none" style={{ width:"65vw",height:"65vw",top:"-15%",left:"-10%", background:"radial-gradient(circle,rgba(178,147,59,0.28) 0%,transparent 70%)", filter:"blur(48px)", animation:"drift-a 22s ease-in-out infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width:"55vw",height:"55vw",top:"10%",right:"-15%", background:"radial-gradient(circle,rgba(38,88,90,0.42) 0%,transparent 70%)", filter:"blur(60px)", animation:"drift-b 28s ease-in-out infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width:"60vw",height:"60vw",bottom:"-20%",left:"20%", background:"radial-gradient(circle,rgba(110,55,70,0.35) 0%,transparent 70%)", filter:"blur(55px)", animation:"drift-c 32s ease-in-out infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width:"50vw",height:"50vw",top:"5%",left:"30%", background:"radial-gradient(circle,rgba(48,55,110,0.30) 0%,transparent 70%)", filter:"blur(64px)", animation:"drift-d 26s ease-in-out infinite" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background:"linear-gradient(90deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.15) 50%,rgba(0,0,0,0) 100%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" style={{ mixBlendMode:"overlay" }}>
        <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
        <rect width="100%" height="100%" filter="url(#grain)"/>
      </svg>
    </>
  );
}

// ─── Dark / light toggle widget ───────────────────────────────────
// Desktop: shown fixed top-right. Mobile: rendered inside MobileMenu instead
// (see DarkModeToggle usage in MobileMenu / App root, which hides this on mobile).
// Matches Figma node 45:17 — "Bright / Dark" text toggle with an underline
// that slides between the two words on click, rather than a pill/track switch.
function DarkModeToggle({
  isDark,
  onToggle,
  variant = "floating",
}: {
  isDark: boolean;
  onToggle: () => void;
  variant?: "floating" | "inline";
}) {
  const brightRef = useRef<HTMLSpanElement>(null);
  const darkRef = useRef<HTMLSpanElement>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const target = isDark ? darkRef.current : brightRef.current;
    if (target) {
      setUnderline({ left: target.offsetLeft, width: target.offsetWidth });
    }
  }, [isDark]);

  const activeColor = variant === "inline" ? "white" : (isDark ? "white" : INK);
  const dimColor     = variant === "inline" ? "rgba(255,255,255,0.45)" : (isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)");
  const lineColor    = variant === "inline" ? "white" : (isDark ? GOLD_BRIGHT : INK);

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={
        variant === "floating"
          ? "fixed top-5 right-5 z-[60] hidden md:flex items-center"
          : "flex items-center"
      }
      style={{ background: "none", border: "none", padding: 0 }}
    >
      <div className="relative flex items-center gap-2">
        <span ref={brightRef}
          className="font-['Avenir',sans-serif] font-light text-xs uppercase tracking-[0.1em]"
          style={{ color: !isDark ? activeColor : dimColor, transition: "color 0.3s" }}>
          Bright
        </span>
        <span className="inline-block" style={{ width: 1, height: 12, background: dimColor, transform: "rotate(20deg)" }} />
        <span ref={darkRef}
          className="font-['Avenir',sans-serif] font-light text-xs uppercase tracking-[0.1em]"
          style={{ color: isDark ? activeColor : dimColor, transition: "color 0.3s" }}>
          Dark
        </span>
        {/* sliding underline — eases from beneath one word to the other */}
        <div
          className="absolute -bottom-1"
          style={{
            left: underline.left,
            width: underline.width,
            height: 1,
            background: lineColor,
            transition: "left 0.4s cubic-bezier(0.4,0,0.2,1), width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s",
          }}
        />
      </div>
    </button>
  );
}

// ─── useIsMobile ──────────────────────────────────────────────────
function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const h = (e: MediaQueryListEvent) => setMobile(e.matches);
    mql.addEventListener("change", h);
    return () => mql.removeEventListener("change", h);
  }, []);
  return mobile;
}

// ─── Shared atoms ─────────────────────────────────────────────────

function LogoMark({ size = 70, color = GOLD }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={Math.round(size * 1.4)} viewBox="0 0 80 112" fill="none">
      <clipPath id="tiff-clip"><rect width="80" height="112" /></clipPath>
      <g clipPath="url(#tiff-clip)">
        <path d={T_PATH} fill={color} />
        <path d={F_PATH} fill={color} />
        <path d={DOT_PATH} fill={color} />
      </g>
    </svg>
  );
}

function HamburgerIcon({ color = "white" }: { color?: string }) {
  return (
    <svg width="22" height="9" viewBox="0 0 22 9" fill="none" className="flex-shrink-0">
      <line x1="0.5" y1="0.5" x2="21.5" y2="0.5" stroke={color} strokeLinecap="round" />
      <line x1="0.5" y1="8.5" x2="21.5" y2="8.5" stroke={color} strokeLinecap="round" />
    </svg>
  );
}

// ─── Mobile menu overlay ─────────────────────────────────────────

function MobileMenu({
  open,
  activeIdx,
  onClose,
  onGoTo,
  onNavigate,
}: {
  open: boolean;
  activeIdx: number;
  onClose: () => void;
  onGoTo: (i: number) => void;
  onNavigate: (p: Page) => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: NAV_GRADIENT }}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: open ? 1 : 0, y: open ? "0%" : "100%" }}
      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
      aria-hidden={!open}
      pointerEvents={open ? "auto" : "none"}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-6 pt-10 pb-6">
        <LogoMark size={44} color="white" />
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full"
          style={{ background: "rgba(255,255,255,0.15)" }}
          aria-label="Close menu"
        >
          <X size={20} strokeWidth={1} color="white" />
        </button>
      </div>

      {/* Nav items list */}
      <div className="flex flex-col flex-1 px-6 pb-12 justify-center gap-1">
        {SECTIONS.map((s, i) => {
          const isActive = activeIdx === i;
          return (
            <button
              key={s.key}
              onClick={() => {
                if (s.page) {
                  onNavigate(s.page);
                } else {
                  onGoTo(i);
                }
                onClose();
              }}
              className="flex items-center justify-between py-5 text-left"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}
            >
              <span
                className="font-['Avenir',sans-serif] font-medium tracking-wide"
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  opacity: isActive ? 1 : 0.6,
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {s.label}
              </span>
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Footer — dark/bright toggle (mobile only; desktop toggle floats top-right) */}
      <div className="px-6 pb-8 flex justify-start">
        <DarkModeToggle isDark={useContext(DarkModeCtx)} onToggle={useContext(DarkModeToggleCtx)} variant="inline" />
      </div>
    </motion.div>
  );
}

// ─── Speaking inquiry form ────────────────────────────────────────
// Sign up at formspree.io, create a form, then paste the endpoint here.
const SPEAKING_FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const FORM_FIELDS: { name: string; label: string; type?: string; required?: boolean }[] = [
  { name: "topic",       label: "Topic",          required: true  },
  { name: "event",       label: "Event",          required: true  },
  { name: "date",        label: "Date of Event",  type: "date",   required: true  },
  { name: "venue",       label: "Venue"                           },
  { name: "name",        label: "Name",           required: true  },
  { name: "company",     label: "Company"                         },
  { name: "designation", label: "Designation"                     },
  { name: "email",       label: "Email",          type: "email",  required: true  },
];

function SpeakingInquiryRow({ accent, itemColor, borderColor }: {
  accent: string; itemColor: string; borderColor: string;
}) {
  const isDark = useContext(DarkModeCtx);
  const [open, setOpen]       = useState(false);
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fields, setFields]   = useState<Record<string, string>>({});

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"}`,
    outline: "none",
    padding: "6px 0",
    fontSize: "0.9rem",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 300,
    color: itemColor,
    transition: "border-color 0.2s",
  };

  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(SPEAKING_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: `Speaking Inquiry: ${fields.topic ?? ""}`, ...fields }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setTimeout(() => { setOpen(false); setStatus("idle"); setFields({}); }, 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Row trigger */}
      <button
        className="w-full flex items-center gap-3 py-4 md:py-[18px] cursor-pointer"
        onClick={() => setOpen(v => !v)}
      >
        <Plus
          size={16}
          strokeWidth={1}
          style={{
            color: accent,
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
        <span className="link-underline font-['Avenir',sans-serif] font-light text-base md:text-lg text-left"
          style={{ color: itemColor }}>
          Speaking Inquiry
        </span>
      </button>

      {/* Expanding form */}
      <div style={{
        maxHeight: open ? "820px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}>
        {status === "sent" ? (
          <div className="pb-6 pt-2">
            <p className="font-['Avenir',sans-serif] font-light text-sm" style={{ color: accent }}>
              ✓ Sent — Tiffany will be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pb-8 pt-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {FORM_FIELDS.map(f => (
                <div key={f.name} className="flex flex-col gap-1">
                  <label
                    className="font-['Avenir',sans-serif] font-light text-[0.58rem] uppercase tracking-[0.18em]"
                    style={{ color: isDark ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.65)" }}
                  >
                    {f.label}{f.required && " *"}
                  </label>
                  <input
                    type={f.type ?? "text"}
                    required={f.required}
                    value={fields[f.name] ?? ""}
                    onChange={e => set(f.name, e.target.value)}
                    style={inputBase}
                    onFocus={e => (e.target.style.borderBottomColor = accent)}
                    onBlur={e => (e.target.style.borderBottomColor = isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)")}
                  />
                </div>
              ))}
            </div>

            {status === "error" && (
              <p className="font-['Avenir',sans-serif] font-light text-xs mt-4" style={{ color: "#E05C5C" }}>
                Something went wrong — please email designmatters.tiff@gmail.com directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 px-6 py-2.5 rounded-full font-['Avenir',sans-serif] font-medium text-xs uppercase tracking-[0.18em] transition-opacity duration-200"
              style={{
                background: accent,
                color: "white",
                opacity: status === "sending" ? 0.6 : 1,
              }}
            >
              {status === "sending" ? "Sending…" : "Send Inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Section data ─────────────────────────────────────────────────

const SECTIONS = [
  { key: "about",   label: "Tiffany C.",      page: null,  accent: GOLD, items: [] },
  {
    key: "work",    label: "Work",             page: "work" as Page,
    accent: "#8A6E2E",
    tagline: "Design Strategy & Leadership",
    context: "Fintech • eCommerce • Utility SaaS",
    items: ["AI + UX DesignOps", "Business Acumen", "Product & UX Methods", "People & Process"],
  },
  {
    key: "awards",  label: "Award & Speaking", page: "awards" as Page,
    accent: "#5070A0",
    tagline: "Recognition & Voices",
    context: "Finalist · Speaker · Panelist",
    items: [
      "UX Leader of the Year, Finalist — Women in Digital 2025",
      "Speaker @ UX Rotterdam, NL 2026",
      "Speaker @ UX Camp Melbourne, AU 2025",
      "Panelist @ FUSECON 2025, MY",
    ],
  },
  {
    key: "coaching", label: "Coaching",        page: null,
    accent: "#5070A0",
    tagline: "UX Career Coaching",
    context: "1:1 · Priority DM · Packages",
    items: [
      "1:1 Calls",
      "Priority DM",
      "Package (1-1 Coaching Service)",
    ],
  },
  {
    key: "connect", label: "Connect",          page: null,
    accent: "#9B5A88",
    tagline: "Let's Connect",
    context: "Open to collaboration",
    items: ["linkedin", "designmatters.tiff@gmail.com", "Speaking Inquiry"],
  },
] as const;

const AUTO_DURATION = 5000;

// ─── Homepage ─────────────────────────────────────────────────────

export function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const pageBg  = isDark ? "#181410" : "#f8f7f5";
  const fg      = isDark ? GOLD : INK;
  const dimCol  = isDark ? "rgba(255,255,255,0.38)" : DIM;
  const border  = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";

  const scrollEl  = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx]   = useState(0);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [progress, setProgress]     = useState(0);
  const [menuOpen, setMenuOpen]     = useState(false);
  const activeIdxRef = useRef(0);
  const wheeling     = useRef(false);
  const isPaused     = useRef(false);
  const startTime    = useRef(Date.now());
  const rafRef       = useRef<number>(0);
  const isMobile     = useIsMobile();
  const isMobileRef  = useRef(isMobile);
  useEffect(() => { isMobileRef.current = isMobile; }, [isMobile]);

  const resetTimer = useCallback(() => {
    startTime.current = Date.now();
    setProgress(0);
  }, []);

  const goTo = useCallback((idx: number) => {
    const el = scrollEl.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(SECTIONS.length - 1, idx));
    activeIdxRef.current = clamped;
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    resetTimer();
  }, [resetTimer]);

  // rAF auto-advance — skipped entirely on mobile
  useEffect(() => {
    const tick = () => {
      if (!isMobileRef.current && !isPaused.current) {
        const elapsed = Date.now() - startTime.current;
        const p = Math.min(100, (elapsed / AUTO_DURATION) * 100);
        setProgress(p);
        if (p >= 100) {
          const next = activeIdxRef.current + 1;
          if (next >= SECTIONS.length) { setProgress(100); return; }
          activeIdxRef.current = next;
          scrollEl.current?.scrollTo({ left: next * (scrollEl.current?.clientWidth ?? 0), behavior: "smooth" });
          startTime.current = Date.now();
          setProgress(0);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Wheel → horizontal (desktop only)
  useEffect(() => {
    const el = scrollEl.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const onWheel = (e: WheelEvent) => {
      if (isMobileRef.current) return;
      e.preventDefault();
      if (wheeling.current) return;
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 6) return;
      wheeling.current = true;
      goTo(activeIdxRef.current + (delta > 0 ? 1 : -1));
      clearTimeout(timer);
      timer = setTimeout(() => { wheeling.current = false; }, 900);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => { el.removeEventListener("wheel", onWheel); clearTimeout(timer); };
  }, [goTo]);

  // Scroll → sync activeIdx
  useEffect(() => {
    const el = scrollEl.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      if (idx !== activeIdxRef.current) {
        activeIdxRef.current = idx;
        setActiveIdx(idx);
        if (isMobileRef.current) setProgress(0);
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard (desktop)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isMobileRef.current) return;
      if (e.key === "ArrowRight") goTo(activeIdxRef.current + 1);
      if (e.key === "ArrowLeft")  goTo(activeIdxRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  const currentSection = SECTIONS[activeIdx];

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: isDark ? "transparent" : "#f8f7f5" }}>

      {/* ── Horizontal scroll track ── */}
      <div
        ref={scrollEl}
        className="absolute inset-0 z-10 flex overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        onMouseEnter={() => { if (!isMobileRef.current) isPaused.current = true; }}
        onMouseLeave={() => {
          if (!isMobileRef.current && !hoveredNav) {
            isPaused.current = false;
            startTime.current = Date.now();
            setProgress(0);
          }
        }}
      >
        {/* ── Section 0: Tiffany C. ── */}
        <section
          className="flex-shrink-0 relative overflow-hidden"
          style={{ width: "100vw", height: "100%", scrollSnapAlign: "start", background: isDark ? "transparent" : pageBg }}
        >
          {/* Dark mode: the animated gradient lives at the App root so it stays
              continuous across page navigation — only content here, no bg fill. */}
          {!isDark && (
            <img src={noiseGrad1} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.04, mixBlendMode: "multiply" }} />
          )}

          {/* Mobile layout */}
          <div className="md:hidden absolute inset-0 flex flex-col px-6 pt-14"
            style={{ paddingBottom: "calc(64px + 8vh + 24px)" }}>
            <LogoMark size={52} />
            <div className="flex-1 flex items-center">
              <p className="font-['Museo',sans-serif] font-light leading-snug"
                style={{ fontSize: "clamp(1.6rem, 6vw, 2.5rem)", color: fg, maxWidth: "22ch" }}>
                Tiffany shapes design functions and leads teams that build
                experiences for people, profit, and planet
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 pb-2">
              <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-widest"
                style={{ color: dimCol }}>
                swipe to explore
              </p>
              <div className="flex items-center gap-1">
                {SECTIONS.map((_, i) => (
                  <div key={i} className="rounded-full transition-all duration-300"
                    style={{ width: activeIdx === i ? 16 : 5, height: 5,
                      background: activeIdx === i ? GOLD : (isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)") }} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:block">
            <div className="absolute" style={{ top: "11%", left: "7%" }}>
              <LogoMark size={70} />
            </div>
            <div className="absolute inset-0 flex items-center px-20">
              <p className="font-['Museo',sans-serif] font-light leading-snug"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: fg, maxWidth: "20ch" }}>
                Tiffany shapes design functions and leads teams that build
                experiences for people, profit, and planet
              </p>
            </div>
            <div className="absolute" style={{ bottom: "calc(64px + 5vh + 40px)", left: "7%", right: "7%", height: 1, background: "rgba(178,147,59,0.25)" }} />
            <div className="absolute right-10 flex flex-col items-center gap-2"
              style={{ bottom: "calc(64px + 5vh + 28px)" }}>
              <motion.p className="font-['Avenir',sans-serif] font-light text-[0.65rem] uppercase tracking-[0.2em]"
                style={{ color: dimCol }}
                animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ repeat: Infinity, duration: 3 }}>
                scroll
              </motion.p>
              <motion.div className="w-px" style={{ background: dimCol }}
                animate={{ height: [16, 28, 16] }} transition={{ repeat: Infinity, duration: 3 }} />
            </div>
          </div>
        </section>

        {/* ── Sections 1–4 ── */}
        {SECTIONS.slice(1).map((section, i) => {
          const idx = i + 1;
          const isActive = activeIdx === idx;
          return (
            <section key={section.key}
              className="flex-shrink-0 relative flex flex-col"
              style={{ width: "100vw", height: "100%", scrollSnapAlign: "start", background: isDark ? "transparent" : pageBg }}>

              <div className="absolute inset-0 pointer-events-none"
                style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.6s ease",
                  background: `radial-gradient(ellipse 70% 50% at 60% 30%, ${section.accent}0d 0%, transparent 70%)` }} />

              <div className="relative z-10 flex flex-col h-full px-6 md:px-20"
                style={{ paddingTop: "8vh", paddingBottom: "calc(64px + 8vh + 32px)" }}>

                <motion.p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em] mb-4 md:mb-6"
                  style={{ color: section.accent }}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }}
                  transition={{ duration: 0.5 }}>
                  {section.context}
                </motion.p>

                <motion.h2 className="font-['Museo',sans-serif] font-light"
                  style={{ fontSize: "48px", lineHeight: 1.05, maxWidth: "16ch", color: GOLD }}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -16 }}
                  transition={{ duration: 0.55, delay: 0.06 }}>
                  {section.tagline}
                </motion.h2>

                <div className="flex-1" style={{ minHeight: "4vh" }} />

                <div style={{ borderTop: `1px solid ${border}` }}>
                  {section.items.map((item, k) => {
                    const isLinkedin = item === "linkedin";
                    const itemColor = isDark ? "white" : INK;
                    return (
                      <div key={item} style={{ borderBottom: `1px solid ${border}`, lineHeight: 0, overflow: "hidden" }}>
                        <div style={{
                          clipPath: isActive ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                          transition: `clip-path 0.55s cubic-bezier(0.4,0,0.2,1) ${0.22 + k * 0.09}s`,
                        }}>
                          {isLinkedin ? (
                            <a href="https://www.linkedin.com/in/tiffany-c/" target="_blank" rel="noopener noreferrer"
                              className="w-full flex items-center gap-3 py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
                              <Linkedin size={16} strokeWidth={1} style={{ color: section.accent, flexShrink: 0 }} />
                              <span className="link-underline font-['Avenir',sans-serif] font-light text-base md:text-lg" style={{ color: itemColor }}>LinkedIn</span>
                              <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
                            </a>
                          ) : item === "designmatters.tiff@gmail.com" ? (
                            <a href="mailto:designmatters.tiff@gmail.com"
                              className="w-full flex items-center py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
                              <span className="link-underline font-['Avenir',sans-serif] font-light text-sm md:text-lg" style={{ color: itemColor }}>{item}</span>
                            </a>
                          ) : (item === "1:1 Calls" || item === "Priority DM" || item === "Package (1-1 Coaching Service)") ? (
                            <a href="https://topmate.io/tffnyc" target="_blank" rel="noopener noreferrer"
                              className="w-full flex items-center gap-2 py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
                              <span className="link-underline font-['Avenir',sans-serif] font-light text-base md:text-lg" style={{ color: itemColor }}>{item}</span>
                              <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
                            </a>
                          ) : item === "Speaking Inquiry" ? (
                            <SpeakingInquiryRow
                              accent={section.accent}
                              itemColor={itemColor}
                              borderColor={border}
                            />
                          ) : (
                            <div className="flex items-center py-4 md:py-[18px]">
                              <span className="font-['Avenir',sans-serif] font-light text-base md:text-lg" style={{ color: itemColor }}>{item}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile swipe dots */}
                <div className="md:hidden flex items-center gap-1.5 mt-6">
                  {SECTIONS.map((_, di) => (
                    <div key={di} className="rounded-full transition-all duration-300"
                      style={{ width: activeIdx === di ? 16 : 5, height: 5,
                        background: activeIdx === di ? section.accent : (isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.18)") }} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Desktop nav — floating above bottom edge, aligned to content width ── */}
      <nav className="absolute z-30 hidden md:flex items-stretch h-16 overflow-hidden"
        style={{
          bottom: "5%", left: 80, right: 80,
          borderRadius: 0,
          background: NAV_GRADIENT,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}>
        {SECTIONS.map((s, i) => {
          const active = activeIdx === i;
          const hovered = hoveredNav === s.key;
          return (
            <button key={s.key}
              onClick={() => (s.page ? onNavigate(s.page) : goTo(i))}
              onMouseEnter={() => { setHoveredNav(s.key); isPaused.current = true; }}
              onMouseLeave={() => {
                setHoveredNav(null);
                isPaused.current = false;
                startTime.current = Date.now();
                setProgress(0);
              }}
              className="relative flex items-center overflow-hidden"
              style={{
                flex: active ? "3 1 0%" : "1 1 0%",
                minWidth: 0, padding: "0 20px",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.18)" : "none",
                opacity: active || hovered ? 1 : 0.52,
                transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
              }}>
              <span className="flex items-center gap-3 min-w-0">
                {i === 0 && <HamburgerIcon color="white" />}
                <span className="font-['Museo',sans-serif] font-light text-[0.85rem] whitespace-nowrap overflow-hidden text-ellipsis text-white">
                  {s.label}
                </span>
              </span>
              <div className="absolute bottom-0 left-0 h-[3px]"
                style={{
                  width: active ? `${progress}%` : "0%",
                  background: "rgba(255,255,255,0.85)",
                  transition: active ? "width 0.05s linear" : "width 0.3s ease",
                }} />
            </button>
          );
        })}
      </nav>

      {/* ── Mobile nav bar — floating, aligned to content width ── */}
      <nav className="absolute z-30 md:hidden flex items-center h-14 px-5 overflow-hidden"
        style={{
          bottom: "5%", left: 24, right: 24,
          borderRadius: 0,
          background: NAV_GRADIENT,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3"
          aria-label="Open navigation">
          <HamburgerIcon color="white" />
          <span className="font-['Museo',sans-serif] font-light text-sm text-white">
            Tiffany C.
          </span>
        </button>
        <div className="flex-1" />
        {activeIdx > 0 && (
          <span className="font-['Museo',sans-serif] font-light text-sm text-white/75">
            {currentSection.label}
          </span>
        )}
      </nav>

      {/* Mobile menu overlay */}
      <MobileMenu
        open={menuOpen}
        activeIdx={activeIdx}
        onClose={() => setMenuOpen(false)}
        onGoTo={(i) => { goTo(i); setMenuOpen(false); }}
        onNavigate={(p) => { onNavigate(p); setMenuOpen(false); }}
      />
    </div>
  );
}

// ─── Work page illustrations ──────────────────────────────────────

function IllustrationAI() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="60" cy="60" r="52" stroke={GOLD} strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="60" cy="60" r="28" stroke={GOLD} strokeWidth="1.5" strokeOpacity="0.6" />
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <g key={a}>
            <line x1="60" y1="60" x2={60 + 52 * Math.cos(r)} y2={60 + 52 * Math.sin(r)} stroke={GOLD} strokeWidth="1" strokeOpacity="0.35" />
            <circle cx={60 + 52 * Math.cos(r)} cy={60 + 52 * Math.sin(r)} r="4" fill={GOLD} fillOpacity="0.7" />
          </g>
        );
      })}
      <circle cx="60" cy="60" r="5" fill={GOLD} />
    </svg>
  );
}

function IllustrationBusiness() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <polygon points="60,12 108,100 12,100" stroke="#8A6E2E" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
      <polygon points="60,30 94,88 26,88" fill="#8A6E2E" fillOpacity="0.12" stroke="#8A6E2E" strokeWidth="1" />
      <polygon points="60,48 78,78 42,78" fill="#8A6E2E" fillOpacity="0.28" />
      <line x1="60" y1="12" x2="60" y2="100" stroke="#8A6E2E" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 3" />
    </svg>
  );
}

function IllustrationUX() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="44" cy="60" r="34" stroke="#5070A0" strokeWidth="1.5" fill="#5070A0" fillOpacity="0.08" />
      <circle cx="76" cy="60" r="34" stroke="#5070A0" strokeWidth="1.5" fill="#5070A0" fillOpacity="0.08" />
      <path d="M60 28.4C69.6 35.6 75.6 47.2 75.6 60C75.6 72.8 69.6 84.4 60 91.6C50.4 84.4 44.4 72.8 44.4 60C44.4 47.2 50.4 35.6 60 28.4Z" fill="#5070A0" fillOpacity="0.22" />
      <rect x="36" y="36" width="48" height="48" stroke="#5070A0" strokeWidth="1" strokeOpacity="0.25" rx="2" />
    </svg>
  );
}

function IllustrationPeople() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="60" cy="60" r="48" stroke="#5070A0" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
      <circle cx="60" cy="60" r="32" stroke="#5070A0" strokeWidth="2" fill="#5070A0" fillOpacity="0.08" />
      <circle cx="60" cy="60" r="14" fill="#5070A0" fillOpacity="0.3" />
      {[45, 135, 225, 315].map((a) => {
        const r = (a * Math.PI) / 180;
        return <circle key={a} cx={60 + 32 * Math.cos(r)} cy={60 + 32 * Math.sin(r)} r="5" fill="#5070A0" fillOpacity="0.8" />;
      })}
    </svg>
  );
}

const EXPERTISE_CARDS = [
  {
    key: "ai", title: "AI + UX DesignOps", accent: GOLD, Illustration: IllustrationAI,
    description: "Rebuilding design workflows as AI-native infrastructure — shortening the design-to-dev cycle, setting AI fluency as a hiring standard, and embedding AI tooling into research, copy, and system governance.",
    bullets: ["Reduced trilingual UX copy turnaround by 20% through AI tooling", "AI-native hiring standards & team norms at Cotton On Group", "Automated design system governance & DesignOps maturity frameworks"],
  },
  {
    key: "business", title: "Business Acumen", accent: "#8A6E2E", Illustration: IllustrationBusiness,
    description: "Identified a revenue gap and designed the Save for Later feature — projected at A$3.5M in annualised global revenue, delivered in a 9-week design and tech effort. Exceeded brand perception target by 14% against a 9.8% KPI at TNG eWallet.",
    bullets: ["Roadmap co-ownership, AB testing & experimentation", "Cross-unit prioritisation frameworks resolving four business units", "Sep 2024: first profitable month in TNG's seven-year history"],
  },
  {
    key: "ux", title: "Product & UX Methods", accent: "#5070A0", Illustration: IllustrationUX,
    description: "Led 0-to-1 UX for an enterprise SaaS IoT platform and scaled a fintech super-app to 23M+ users across B2C and B2B surfaces — delivering 20+ features covering payments, loyalty, wealth, and merchant tools.",
    bullets: ["Built UX Research function & company-wide NPS benchmarks from scratch", "Multi-platform, multi-brand design system adhering to accessibility standards", "End-to-end product design: discovery → delivery across fintech, retail & SaaS"],
  },
  {
    key: "people", title: "People & Process", accent: "#5070A0", Illustration: IllustrationPeople,
    description: "Grew a multidisciplinary design department from 7 to 22 within a controlled budget. Established cross-unit prioritisation frameworks and UX Research operations from the ground up.",
    bullets: ["Team growth: 7 → 22 designers across B2C, B2B & Research", "Coaching Responsibility Agreements & design culture building", "Chapter Lead — Ladies that UX, Kuala Lumpur (2022–2024)"],
  },
];

function ExpertiseCard({ card }: { card: typeof EXPERTISE_CARDS[0] }) {
  const [open, setOpen] = useState(false);
  const isDark = useContext(DarkModeCtx);
  const { Illustration } = card;
  const cardBrd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  return (
    <div
      className="flex flex-col md:flex-row items-start gap-4 md:gap-8 px-5 md:px-10 py-6 md:py-8 cursor-pointer"
      style={{ borderBottom: `1px solid ${cardBrd}`, background: open ? (isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)") : "transparent", transition: "background 0.3s" }}
      onClick={() => setOpen(v => !v)}>
      <div className="flex-shrink-0" style={{ width: 64, height: 64 }}>
        <Illustration />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <Plus
            size={18}
            strokeWidth={1}
            style={{ color: card.accent, flexShrink: 0, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s" }}
          />
          <h3 className="font-['Museo',sans-serif] font-light"
            style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)", color: isDark ? GOLD : INK }}>
            {card.title}
          </h3>
        </div>
        <p className="font-['Avenir',sans-serif] font-light text-sm leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.55)" : DIM, maxWidth: 600 }}>
          {card.description}
        </p>
        <div className="overflow-hidden" style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0, transition: "max-height 0.4s ease, opacity 0.3s ease" }}>
          <ul className="mt-3 space-y-1.5">
            {card.bullets.map(b => (
              <li key={b} className="font-['Avenir',sans-serif] font-light text-sm flex items-start gap-2" style={{ color: card.accent }}>
                <span className="mt-0.5 flex-shrink-0">—</span><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Shared gradient bottom nav (Work / Awards pages) ─────────────

function PageBottomNav({
  activePage,
  onNavigate,
}: {
  activePage: Page;
  onNavigate: (p: Page) => void;
}) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [menuOpen, setMenuOpen]     = useState(false);
  const isMobile = useIsMobile();

  const NAV_ITEMS = [
    { key: "work",     label: "Work",             page: "work" as Page },
    { key: "awards",   label: "Award & Speaking", page: "awards" as Page },
    { key: "coaching", label: "Coaching",         page: null },
    { key: "connect",  label: "Connect",          page: null },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-stretch h-16 overflow-x-auto scrollbar-hide"
        style={{ background: NAV_GRADIENT }}>
        <button
          className="flex items-center gap-3 flex-shrink-0 px-6"
          onMouseEnter={() => setHoveredNav("about")}
          onMouseLeave={() => setHoveredNav(null)}
          onClick={() => onNavigate("home")}
          style={{ opacity: hoveredNav === "about" ? 1 : 0.52, transition: "opacity 0.25s", borderRight: "1px solid rgba(255,255,255,0.18)" }}>
          <HamburgerIcon />
          <span className="font-['Museo',sans-serif] font-light text-[0.85rem] text-white whitespace-nowrap">Tiffany C.</span>
        </button>
        <div className="flex-1" />
        {NAV_ITEMS.map(item => (
          <button key={item.key}
            onMouseEnter={() => setHoveredNav(item.key)}
            onMouseLeave={() => setHoveredNav(null)}
            onClick={() => item.page && onNavigate(item.page)}
            className="font-['Museo',sans-serif] font-light text-[0.85rem] whitespace-nowrap flex-shrink-0 px-6 text-white"
            style={{
              opacity: activePage === item.page || hoveredNav === item.key ? 1 : 0.52,
              transition: "opacity 0.25s",
              borderLeft: "1px solid rgba(255,255,255,0.18)",
            }}>
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center h-16 px-5"
        style={{ background: NAV_GRADIENT }}>
        <button onClick={() => setMenuOpen(true)} className="flex items-center gap-3" aria-label="Open navigation">
          <HamburgerIcon />
          <span className="font-['Avenir',sans-serif] font-medium text-base text-white">Tiffany C.</span>
        </button>
        <div className="flex-1" />
        <span className="font-['Avenir',sans-serif] font-light text-sm text-white/75">
          {NAV_ITEMS.find(n => n.page === activePage)?.label ?? ""}
        </span>
      </div>

      {/* Mobile overlay */}
      <MobileMenu
        open={menuOpen}
        activeIdx={SECTIONS.findIndex(s => s.page === activePage)}
        onClose={() => setMenuOpen(false)}
        onGoTo={() => { onNavigate("home"); setMenuOpen(false); }}
        onNavigate={(p) => { onNavigate(p); setMenuOpen(false); }}
      />
    </>
  );
}

// ─── Work page ────────────────────────────────────────────────────

function WorkPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const bg = isDark ? "transparent" : "#f8f7f5";
  const fg = isDark ? GOLD : INK;
  const sub = isDark ? "rgba(255,255,255,0.55)" : DIM;
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  return (
    <div className="relative w-full" style={{ minHeight: "100vh", background: bg }}>
      {/* Top decorative image */}
      <div className="relative w-full" style={{ height: "22vh", maxHeight: 280 }}>
        <img src={workVectorImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <button
          onClick={() => onNavigate("home")}
          aria-label="Back to homepage"
          className="fixed top-16 right-5 z-[59] cursor-pointer"
        >
          <LogoMark size={14} />
        </button>
      </div>

      {/* Content — single column on mobile, two columns on desktop */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:flex-shrink-0 flex flex-col pt-8 md:pt-12 px-5 md:pl-10 md:pr-8 pb-6 md:pb-12"
          style={{
            width: "100%",
            maxWidth: "100%",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            // desktop overrides below
          }}>
          {/* On desktop this renders as a sidebar; we use CSS to constrain it */}
          <div className="md:hidden">
            <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>Expertise</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {["AI + UX DesignOps", "Business Acumen", "Product & UX Methods", "People & Process"].map(s => (
                <span key={s} className="font-['Avenir',sans-serif] font-light text-sm" style={{ color: INK }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar — desktop only */}
        <div className="hidden md:flex flex-col flex-shrink-0 pt-12 pl-10 pr-8 overflow-y-auto"
          style={{ width: "clamp(200px, 22vw, 300px)", borderRight: "1px solid rgba(0,0,0,0.08)", minHeight: "calc(78vh - 64px)" }}>
          <p className="font-['Avenir',sans-serif] font-light text-[0.65rem] uppercase tracking-[0.2em] mb-5" style={{ color: GOLD }}>Expertise</p>
          {["AI + UX DesignOps", "Business Acumen", "Product & UX Methods", "People & Process"].map(skill => (
            <p key={skill} className="font-['Avenir',sans-serif] font-light leading-snug mb-1"
              style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.8rem)", color: INK }}>{skill}</p>
          ))}
          <div className="mt-10">
            <p className="font-['Avenir',sans-serif] font-light text-[0.65rem] uppercase tracking-[0.2em] mb-4" style={{ color: GOLD }}>Speaking</p>
            {[
              { year: "2026", event: "Speaker @ UX Rotterdam, NL",                          topic: "The Human Cost of Human-Centred-Design" },
              { year: "2025", event: "Speaker @ UX Camp Melbourne, AU",                      topic: "404: System Burnout" },
              { year: "2025", event: "Panelist @ Ladies that UX Taipei, TW",                 topic: "Driving Organisational Change" },
              { year: "2025", event: "Panelist @ FUSECON 2025, MY",                          topic: "Mental Health: From Awareness to Action" },
              { year: "2024", event: "Panelist @ FUSECON 2024, MY",                          topic: "UX in Malaysia & beyond" },
              { year: "2024", event: "Panelist @ Friends of Figma KL × adplist, MY",         topic: "The Journey to Senior Designer" },
              { year: "2023", event: "Speaker @ Design Leadership KL, MY",                   topic: "Synergy for Sustainable Growth" },
            ].map(s => (
              <div key={s.event} className="mb-3">
                <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.12em]" style={{ color: DIM }}>{s.year}</p>
                <p className="font-['Avenir',sans-serif] font-medium text-sm leading-snug" style={{ color: INK }}>{s.event}</p>
                <p className="font-['Avenir',sans-serif] font-light text-xs leading-snug" style={{ color: DIM }}>{s.topic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cards — full width on mobile */}
        <div className="flex-1">
          {EXPERTISE_CARDS.map(card => <ExpertiseCard key={card.key} card={card} />)}
          <div className="w-full">
            <div className="px-5 md:px-10 pt-6 md:pt-8 pb-3" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              <p className="font-['Avenir',sans-serif] font-light text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: GOLD }}>Selected Work</p>
            </div>
            <img src={workScreenshot} alt="Work samples" className="w-full object-cover" />
            {/* Bottom spacer so content clears the floating nav */}
            <div style={{ height: "calc(64px + 8vh)" }} />
          </div>
        </div>
      </div>

      <div className="sticky z-30 overflow-hidden mx-6 md:mx-20"
        style={{ bottom: "3%", borderRadius: 0, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
        <PageBottomNav activePage="work" onNavigate={onNavigate} />
      </div>
    </div>
  );
}

// ─── Awards & Speaking page ────────────────────────────────────────

const SPEAKING_EVENTS = [
  { key: "rotterdam", year: "2026", role: "Speaker",  event: "UX Rotterdam",                  location: "Rotterdam, NL", topic: "The Human Cost of Human-Centred-Design",                           link: null,                                               img: awardsRotterdam, caption: "2026 @ Rotterdam, NL", dark: true },
  { key: "ux-camp",   year: "2025", role: "Speaker",  event: "UX Camp Melbourne",             location: "Melbourne, AU", topic: "404: System Burnout — An error message to my UX career",            link: "https://youtu.be/hJIJB3di6T4?si=a1XcoU3eV6f0bVvE",  img: null,          caption: null,             dark: false },
  { key: "taipei",    year: "2025", role: "Panelist", event: "Ladies that UX Taipei",         location: "Taipei, TW",    topic: "Driving Organisational Change and Creating Meaningful Impact",     link: null,                                               img: awardsTaipei,  caption: "2025 @ Taipei, TW",  dark: false },
  { key: "fusecon",   year: "2025", role: "Panelist", event: "FUSECON 2025",                  location: "Malaysia",      topic: "Mental Health: From Awareness to Action",                          link: null,                                               img: awardsFuseCon, caption: "FUSECON 2025, MY",    dark: true  },
  { key: "fusecon-2024", year: "2024", role: "Panelist", event: "FUSECON 2024",               location: "Malaysia",      topic: "UX in Malaysia & beyond",                                          link: null,                                               img: null,          caption: null,             dark: false },
  { key: "figma-kl",  year: "2024", role: "Panelist", event: "Friends of Figma KL × adplist", location: "KL, MY",        topic: "The Journey to Senior Designer: Skills, Insights and Experiences", link: null,                                               img: null,          caption: null,             dark: false },
  { key: "design-kl", year: "2023", role: "Speaker",  event: "Design Leadership Kuala Lumpur",location: "KL, MY",        topic: "Synergy for Sustainable Growth: Empowering UX Team",               link: null,                                               img: null,          caption: null,             dark: false },
];

// Shared hover-lift style for clickable event rows
const EVENT_ROW_STYLE: React.CSSProperties = {
  cursor: "pointer",
  transition: "opacity 0.2s ease",
};

function AwardsSpeakingPage({
  onNavigate,
  onEventClick,
}: {
  onNavigate: (p: Page) => void;
  onEventClick: (key: string) => void;
}) {
  const isDark = useContext(DarkModeCtx);
  const bg = isDark ? "transparent" : "#f8f7f5";
  const fg = isDark ? GOLD : INK;
  const sub = isDark ? "rgba(255,255,255,0.55)" : DIM;
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  return (
    <div className="relative w-full" style={{ minHeight: "100vh", background: bg }}>
      {/* Top decorative image */}
      <div className="relative w-full" style={{ height: "22vh", maxHeight: 280 }}>
        <img src={workVectorImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <button
          onClick={() => onNavigate("home")}
          aria-label="Back to homepage"
          className="fixed top-16 right-5 z-[59] cursor-pointer"
        >
          <LogoMark size={14} />
        </button>
      </div>

      {/* Page heading */}
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10" style={{ borderBottom: `1px solid ${brd}` }}>
        <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em] mb-2" style={{ color: GOLD }}>Recognition</p>
        <h1 className="font-['Museo',sans-serif] font-light" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05, color: fg }}>
          Awards &amp; Speaking
        </h1>
      </div>

      {/* Women in Digital — clickable */}
      <div className="group" style={EVENT_ROW_STYLE} onClick={() => onEventClick("women-digital")}>
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(300px, 60vw, 700px)" }}>
          <img src={awardsWomenDigital} alt="Tiffany Chew at Women in Digital Awards 2025"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.2)" }} />
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-20">
            <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.2em] text-white/70 mb-1">2025 · National Awards · Australia</p>
            <h2 className="font-['Museo',sans-serif] font-light text-white" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)" }}>
              UX Leader of the Year — Finalist
            </h2>
            <p className="font-['Avenir',sans-serif] font-light text-white/80 text-sm mt-1">Women in Digital National Awards</p>
          </div>
          <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-['Avenir',sans-serif] font-medium text-xs uppercase tracking-widest text-white/90 bg-black/30 rounded-full px-3 py-1.5">
              View →
            </span>
          </div>
        </div>
      </div>

      {/* Speaking events */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="px-6 md:px-20 pt-8 md:pt-12 pb-4 md:pb-6">
          <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em]" style={{ color: GOLD }}>Speaking</p>
        </div>
        {SPEAKING_EVENTS.map((ev, i) => (
          <div key={ev.key} className="group" style={EVENT_ROW_STYLE}
            onClick={() => onEventClick(ev.key)}>
            {ev.img ? (
              <div className="relative w-full overflow-hidden" style={{ background: ev.dark ? "#030303" : "#f8f7f5" }}>
                <div className="relative" style={{ height: "clamp(260px, 50vw, 620px)" }}>
                  <img src={ev.img} alt={`${ev.event} — ${ev.topic}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: ev.dark ? "center 30%" : "center" }} />
                  <div className="absolute inset-0" style={{ background: ev.dark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.15)" }} />
                  <div className="absolute bottom-6 left-6 md:left-20">
                    <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.2em] text-white/70 mb-1">{ev.caption}</p>
                    <h3 className="font-['Museo',sans-serif] font-light text-white" style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)" }}>
                      {ev.role} @ {ev.event}
                    </h3>
                    <p className="font-['Avenir',sans-serif] font-light text-white/75 text-sm mt-1" style={{ maxWidth: 480 }}>{ev.topic}</p>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-['Avenir',sans-serif] font-medium text-xs uppercase tracking-widest text-white/90 bg-black/30 rounded-full px-3 py-1.5">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex flex-col gap-1 px-6 md:px-20 py-5 md:py-7 transition-colors duration-200"
                style={{ borderTop: i === 0 ? "none" : `1px solid ${brd}`, background: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                <span className="font-['Avenir',sans-serif] font-light text-[0.7rem]" style={{ color: sub }}>{ev.year}</span>
                <p className="font-['Avenir',sans-serif] font-medium group-hover:underline" style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.4rem)", color: fg }}>
                  {ev.role} @ {ev.event}, {ev.location}
                </p>
                <p className="font-['Avenir',sans-serif] font-light text-sm" style={{ color: sub }}>{ev.topic}</p>
                <span className="absolute top-5 md:top-7 right-6 md:right-20 font-['Avenir',sans-serif] font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: GOLD }}>→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ height: "calc(64px + 8vh)" }} />
      <div className="sticky z-30 overflow-hidden mx-6 md:mx-20"
        style={{ bottom: "3%", borderRadius: 0, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
        <PageBottomNav activePage="awards" onNavigate={onNavigate} />
      </div>
    </div>
  );
}

// ─── Speaking detail page ─────────────────────────────────────────

const SPEAKING_DETAIL: Record<string, {
  pageLabel: string;
  year: string;
  role: string;
  event: string;
  location: string;
  topic: string;
  heroImg: string | null;
  additionalImg: string | null;
  link: string | null;
  dark: boolean;
  finalistLink: string | null;
}> = {
  "women-digital": {
    pageLabel: "UX Leader of the Year, Finalist",
    year: "2025", role: "Finalist", event: "Women in Digital National Awards", location: "Australia",
    topic: "UX Leader of the Year",
    heroImg: awardsWomenDigital, additionalImg: awardsFinalistCard,
    link: "https://womenindigital.org/women-in-digital-awards/women-in-digital-awards-2025-finalists/",
    dark: false, finalistLink: "https://womenindigital.org/women-in-digital-awards/women-in-digital-awards-2025-finalists/",
  },
  "rotterdam": {
    pageLabel: "2026 @ Rotterdam, NL",
    year: "2026", role: "Speaker", event: "UX Rotterdam", location: "Rotterdam, NL",
    topic: "The Human Cost of Human-Centred-Design",
    heroImg: awardsRotterdam, additionalImg: null, link: null, dark: true, finalistLink: null,
  },
  "ux-camp": {
    pageLabel: "Speaker @ UX Camp Melbourne, AU",
    year: "2025", role: "Speaker", event: "UX Camp Melbourne", location: "Melbourne, AU",
    topic: "404: System Burnout — An error message to my UX career",
    heroImg: null, additionalImg: null,
    link: "https://youtu.be/hJIJB3di6T4?si=a1XcoU3eV6f0bVvE",
    dark: false, finalistLink: null,
  },
  "taipei": {
    pageLabel: "2025 @ Taipei, TW",
    year: "2025", role: "Panelist", event: "Ladies that UX Taipei", location: "Taipei, TW",
    topic: "Driving Organisational Change and Creating Meaningful Impact",
    heroImg: awardsTaipei, additionalImg: null, link: null, dark: false, finalistLink: null,
  },
  "fusecon": {
    pageLabel: "FUSECON 2025, MY",
    year: "2025", role: "Panelist", event: "FUSECON 2025", location: "Malaysia",
    topic: "Mental Health: From Awareness to Action",
    heroImg: awardsFuseCon, additionalImg: null, link: null, dark: true, finalistLink: null,
  },
  "fusecon-2024": {
    pageLabel: "FUSECON 2024, MY",
    year: "2024", role: "Panelist", event: "FUSECON 2024", location: "Malaysia",
    topic: "UX in Malaysia & beyond",
    heroImg: null, additionalImg: null, link: null, dark: false, finalistLink: null,
  },
  "figma-kl": {
    pageLabel: "Panelist @ Friends of Figma KL × adplist",
    year: "2024", role: "Panelist", event: "Friends of Figma KL × adplist", location: "Kuala Lumpur, MY",
    topic: "The Journey to Senior Designer: Skills, Insights and Experiences",
    heroImg: null, additionalImg: null, link: null, dark: false, finalistLink: null,
  },
  "design-kl": {
    pageLabel: "Speaker @ Design Leadership KL",
    year: "2023", role: "Speaker", event: "Design Leadership Kuala Lumpur", location: "Kuala Lumpur, MY",
    topic: "Synergy for Sustainable Growth: Empowering UX Team",
    heroImg: null, additionalImg: null, link: null, dark: false, finalistLink: null,
  },
};

function SpeakingDetailPage({
  eventKey,
  onBack,
  onNavigate,
}: {
  eventKey: string;
  onBack: () => void;
  onNavigate: (p: Page) => void;
}) {
  const globalDark = useContext(DarkModeCtx);
  const ev = SPEAKING_DETAIL[eventKey];
  if (!ev) return null;

  // Event-specific dark (fusecon) overrides global light mode
  const bg = ev.dark ? "#030303" : (globalDark ? "transparent" : "#f8f7f5");
  const textColor = (ev.dark || globalDark) ? GOLD : INK;
  const subColor = (ev.dark || globalDark) ? "rgba(255,255,255,0.55)" : DIM;

  return (
    <div className="relative w-full" style={{ minHeight: "100vh", background: bg }}>

      {/* Back bar */}
      <div className="relative flex items-center gap-4 px-6 md:px-20 pt-8 pb-6"
        style={{ borderBottom: `1px solid ${ev.dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}` }}>
        <button
          onClick={() => onNavigate("home")}
          aria-label="Back to homepage"
          className="fixed top-16 right-5 z-[59] cursor-pointer"
        >
          <LogoMark size={14} color={(ev.dark || globalDark) ? "white" : GOLD} />
        </button>
        <button
          onClick={onBack}
          className="link-underline flex items-center gap-2 font-['Avenir',sans-serif] font-light text-sm uppercase tracking-widest ml-auto"
          style={{ color: GOLD }}>
          ← Awards &amp; Speaking
        </button>
      </div>

      {/* Hero image */}
      {ev.heroImg && (
        <div className="relative w-full overflow-hidden"
          style={{ height: "clamp(320px, 65vw, 780px)", background: ev.dark ? "#030303" : "#f0ede8" }}>
          <img
            src={ev.heroImg}
            alt={ev.pageLabel}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: ev.dark ? "right center" : "center top",
              // FuseCon Figma is right-aligned portrait — match that
              ...(eventKey === "fusecon" ? { objectPosition: "right center", width: "44%", left: "auto", right: 0 } : {}),
              // Rotterdam is a wide stage shot — keep it centered, not right-cropped
              ...(eventKey === "rotterdam" ? { objectPosition: "center 35%" } : {}),
            }}
          />
          {ev.dark && <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />}
          {/* Figma-faithful: FuseCon dark left zone for text */}
          {eventKey === "fusecon" && (
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(3,3,3,0.85) 50%, transparent 80%)" }} />
          )}
          {/* Label on image as in Figma */}
          <div className="absolute bottom-8 left-6 md:left-20">
            <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.2em] mb-1"
              style={{ color: "rgba(255,255,255,0.65)" }}>
              {ev.pageLabel}
            </p>
          </div>
        </div>
      )}

      {/* Event metadata */}
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-8"
        style={{ borderBottom: `1px solid ${ev.dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
        <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em] mb-2"
          style={{ color: GOLD }}>
          {ev.year} · {ev.role} · {ev.location}
        </p>
        <h1 className="font-['Museo',sans-serif] font-light mb-5"
          style={{ fontSize: "clamp(1.9rem, 5vw, 4rem)", lineHeight: 1.05, color: textColor, maxWidth: "20ch" }}>
          {ev.event}
        </h1>
        <p className="font-['Avenir',sans-serif] font-light"
          style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", color: subColor, maxWidth: 560, lineHeight: 1.5 }}>
          "{ev.topic}"
        </p>

        {/* YouTube block */}
        {ev.link && !ev.finalistLink && (
          <div className="mt-8 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            style={{ maxWidth: 560, height: 200, background: ev.dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", border: `1px solid ${ev.dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}` }}>
            <p className="font-['Avenir',sans-serif] font-light text-xs uppercase tracking-widest mb-4"
              style={{ color: subColor }}>Watch the talk</p>
            <a href={ev.link} target="_blank" rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2 font-['Avenir',sans-serif] font-medium text-sm uppercase tracking-[0.15em] cursor-pointer"
              style={{ color: GOLD }}>
              Watch on YouTube
              <ExternalLink size={13} strokeWidth={1} style={{ opacity: 0.7, flexShrink: 0 }} />
            </a>
          </div>
        )}

        {/* Finalist link */}
        {ev.finalistLink && (
          <a href={ev.finalistLink} target="_blank" rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 mt-6 font-['Avenir',sans-serif] font-medium text-xs uppercase tracking-[0.15em] cursor-pointer"
            style={{ color: GOLD }}>
            View official finalists page
            <ExternalLink size={13} strokeWidth={1} style={{ opacity: 0.7, flexShrink: 0 }} />
          </a>
        )}
      </div>

      {/* Finalist card (Women in Digital only) */}
      {ev.additionalImg && (
        <div className="px-4 md:px-20 py-8 md:py-12">
          <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.2em] mb-4" style={{ color: DIM }}>
            The 2025 UX Leader of the Year Finalists
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 0 28px rgba(0,0,0,0.12)", maxWidth: 900 }}>
            <img src={ev.additionalImg} alt="2025 UX Leader of the Year Finalists" className="w-full object-cover" />
          </div>
        </div>
      )}

      <div style={{ height: "calc(64px + 8vh)" }} />
      <div className="sticky z-30 overflow-hidden mx-6 md:mx-20"
        style={{ bottom: "3%", borderRadius: 0, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
        <PageBottomNav activePage="awards" onNavigate={onNavigate} />
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage]           = useState<Page>("home");
  const [detailKey, setDetailKey] = useState<string | null>(null);
  const [isDark, setIsDark]       = useState(false);

  const navigateToEvent = (key: string) => {
    setDetailKey(key);
    setPage("speaking");
  };

  const navigateBack = () => {
    setPage("awards");
    setDetailKey(null);
  };

  const motionKey = page === "speaking" ? `speaking:${detailKey}` : page;

  const toggleDark = useCallback(() => setIsDark(d => !d), []);

  return (
    <DarkModeCtx.Provider value={isDark}>
    <DarkModeToggleCtx.Provider value={toggleDark}>
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: isDark ? "#181410" : "#f8f7f5" }}>
      {/* Persistent background — mounted once at the App root so its drift
          animation never resets on page navigation. Only the content above
          it (motion.div below) transitions between pages. */}
      {isDark && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <AnimatedGradientBg />
        </div>
      )}
      <DarkModeToggle isDark={isDark} onToggle={toggleDark} />
      <motion.div key={motionKey} className="absolute inset-0" style={{ zIndex: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
        {page === "home"     && <HomePage onNavigate={setPage} />}
        {page === "work"     && <div className="absolute inset-0 overflow-y-auto"><WorkPage onNavigate={setPage} /></div>}
        {page === "awards"   && <div className="absolute inset-0 overflow-y-auto"><AwardsSpeakingPage onNavigate={setPage} onEventClick={navigateToEvent} /></div>}
        {page === "speaking" && detailKey && (
          <div className="absolute inset-0 overflow-y-auto">
            <SpeakingDetailPage eventKey={detailKey} onBack={navigateBack} onNavigate={setPage} />
          </div>
        )}
      </motion.div>
    </div>
    </DarkModeToggleCtx.Provider>
    </DarkModeCtx.Provider>
  );
}
