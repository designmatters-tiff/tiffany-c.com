import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";
import { motion } from "motion/react";
import { Linkedin, Instagram, X, ExternalLink, Plus, ChevronRight, ChevronLeft } from "lucide-react";

import awardsWomenDigital from "@/imports/AwardsSpeaking/WID-tiff2025.png";
import awardsFinalistCard from "@/imports/AwardsSpeaking/WID-2.png";
import awardsFuseConPanelist from "@/imports/AwardsSpeaking/FuseCon_panelist.jpg";
import awardsFuseCon from "@/imports/AwardsSpeaking/Fusecon2025.png";
import awardsTaipei from "@/imports/AwardsSpeaking/LTUX Taipei.png";
import awardsRotterdam from "@/imports/AwardsSpeaking/ux-rotterdam.jpeg";
import awardsFuseCon2024 from "@/imports/AwardsSpeaking/FUSECON 2024/Fusecon2024.jpeg";
import awardsFoF2024Desktop from "@/imports/AwardsSpeaking/FoF 2024/desktop_fof2024.jpeg";
import awardsFoF2024Mobile from "@/imports/AwardsSpeaking/FoF 2024/mobile_fof2024.jpeg";
import awardsDesignKL from "@/imports/AwardsSpeaking/Design Leadership KL/DLKL2023.jpeg";
import awardsDesignKLTiff from "@/imports/AwardsSpeaking/Design Leadership KL/DLKL2023-tiff.jpeg";
import profilePhoto from "@/imports/Profile/tiff-headshot.jpg";
import foggModel from "@/work/business/eCommerce/Fogg behavioural model.avif";
import graphResult from "@/work/business/eCommerce/graph-result.avif";
import interventionImg from "@/work/business/eCommerce/the intervention.avif";

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
// Nav gradient (opaque) — nav itself stays fully opaque per Figma.
const NAV_GRADIENT = "linear-gradient(to right, #B2933B, #6281B7, #C27AA6)";
const NAV_GRADIENT_DARK = "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), linear-gradient(to right, #B2933B, #6281B7, #C27AA6)";
const navGradient = (isDark: boolean) => isDark ? NAV_GRADIENT_DARK : NAV_GRADIENT;

type Page = "home" | "work" | "workDetail" | "awards" | "speaking" | "coaching" | "connect" | "speakingInquiry" | "businessCase";

// ─── Dark mode context ────────────────────────────────────────────
const DarkModeCtx = createContext(false);
const DarkModeToggleCtx = createContext<() => void>(() => {});

// ─── Shared accordion state ────────────────────────────────────────
// One open item at a time across the whole site (Work page expertise
// cards, Awards & Speaking event rows, Connect's Speaking Inquiry).
// Since only one page is ever mounted at once this is effectively
// "one open accordion per page", but a single global id keeps every
// accordion consumer trivially in sync without per-page wiring.
const AccordionCtx = createContext<{ openId: string | null; setOpenId: (id: string | null) => void }>({
  openId: null,
  setOpenId: () => {},
});

function useAccordionItem(id: string) {
  const { openId, setOpenId } = useContext(AccordionCtx);
  const open = openId === id;
  const toggle = () => setOpenId(open ? null : id);
  return { open, toggle };
}

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
      <div className="absolute inset-0 bg-[#282828]" />
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

// ─── Light mode background — soft multicolour blobs ────────────────
// Pure CSS (radial-gradient + blur + transform drift), same technique
// as AnimatedGradientBg above — no images, no JS animation loop, so it
// costs nothing extra at load. Blobs are irregular (asymmetric
// border-radius) and very low-opacity so they sit quietly behind
// content rather than competing with it.
function LightGradientBlobs() {
  return (
    <>
      <style>{`
        @keyframes blob-drift-a { 0%{transform:translate(0%,0%) scale(1) rotate(0deg)} 33%{transform:translate(-5%,-7%) scale(1.07) rotate(7deg)} 66%{transform:translate(4%,5%) scale(0.95) rotate(-5deg)} 100%{transform:translate(0%,0%) scale(1) rotate(0deg)} }
        @keyframes blob-drift-b { 0%{transform:translate(0%,0%) scale(1) rotate(0deg)} 40%{transform:translate(6%,5%) scale(1.1) rotate(-9deg)} 70%{transform:translate(-4%,-5%) scale(0.93) rotate(6deg)} 100%{transform:translate(0%,0%) scale(1) rotate(0deg)} }
        @keyframes blob-drift-c { 0%{transform:translate(0%,0%) scale(1.04) rotate(0deg)} 50%{transform:translate(-6%,4%) scale(0.94) rotate(9deg)} 100%{transform:translate(0%,0%) scale(1.04) rotate(0deg)} }
        @keyframes blob-drift-d { 0%{transform:translate(0%,0%) scale(1) rotate(0deg)} 45%{transform:translate(5%,-6%) scale(1.08) rotate(-8deg)} 75%{transform:translate(-4%,5%) scale(0.96) rotate(5deg)} 100%{transform:translate(0%,0%) scale(1) rotate(0deg)} }
      `}</style>
      <div className="absolute inset-0" style={{ background: "#f8f7f5" }} />
      {/* Joyful multicolour patch — concentrated on the right, left stays
          clean warm cream. Golden yellow is the dominant centre, with
          peach, violet and sky-blue blended around it. */}
      <div className="absolute pointer-events-none" style={{
        width: "52vw", height: "48vw", top: "22%", right: "-12%",
        borderRadius: "58% 42% 50% 50% / 52% 48% 52% 48%",
        background: "radial-gradient(circle at 50% 50%, rgba(244,196,72,0.42) 0%, rgba(244,196,72,0.28) 35%, transparent 72%)",
        filter: "blur(55px)", animation: "blob-drift-a 30s ease-in-out infinite",
      }} />
      <div className="absolute pointer-events-none" style={{
        width: "40vw", height: "38vw", top: "-6%", right: "4%",
        borderRadius: "55% 45% 40% 60% / 60% 40% 60% 40%",
        background: "radial-gradient(circle at 55% 50%, rgba(244,176,120,0.40) 0%, rgba(244,176,120,0.24) 40%, transparent 74%)",
        filter: "blur(58px)", animation: "blob-drift-b 34s ease-in-out infinite",
      }} />
      <div className="absolute pointer-events-none" style={{
        width: "34vw", height: "32vw", top: "-14%", right: "-12%",
        borderRadius: "48% 52% 58% 42% / 55% 45% 55% 45%",
        background: "radial-gradient(circle at 55% 45%, rgba(140,108,224,0.36) 0%, rgba(140,108,224,0.20) 45%, transparent 75%)",
        filter: "blur(58px)", animation: "blob-drift-c 38s ease-in-out infinite",
      }} />
      <div className="absolute pointer-events-none" style={{
        width: "44vw", height: "40vw", bottom: "-18%", right: "-8%",
        borderRadius: "45% 55% 60% 40% / 52% 48% 52% 48%",
        background: "radial-gradient(circle at 50% 50%, rgba(140,180,226,0.36) 0%, rgba(160,200,210,0.20) 45%, transparent 75%)",
        filter: "blur(60px)", animation: "blob-drift-d 32s ease-in-out infinite",
      }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" style={{ mixBlendMode: "multiply" }}>
        <filter id="grain-light"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
        <rect width="100%" height="100%" filter="url(#grain-light)"/>
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
  const [hoverWord, setHoverWord] = useState<"bright" | "dark" | null>(null);

  useEffect(() => {
    const target = isDark ? darkRef.current : brightRef.current;
    if (target) {
      setUnderline({ left: target.offsetLeft, width: target.offsetWidth });
    }
  }, [isDark]);

  const activeColor = isDark ? "white" : INK;
  const dimColor     = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)";
  const lineColor    = isDark ? GOLD_BRIGHT : INK;

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
          onMouseEnter={() => setHoverWord("bright")}
          onMouseLeave={() => setHoverWord(null)}
          className="font-['Avenir',sans-serif] font-light text-xs uppercase tracking-[0.1em]"
          style={{ color: (!isDark || hoverWord === "bright") ? activeColor : dimColor, transition: "color 0.3s" }}>
          Bright
        </span>
        <span className="inline-block" style={{ width: 1, height: 12, background: dimColor, transform: "rotate(20deg)" }} />
        <span ref={darkRef}
          onMouseEnter={() => setHoverWord("dark")}
          onMouseLeave={() => setHoverWord(null)}
          className="font-['Avenir',sans-serif] font-light text-xs uppercase tracking-[0.1em]"
          style={{ color: (isDark || hoverWord === "dark") ? activeColor : dimColor, transition: "color 0.3s" }}>
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
  forceScroll = false,
}: {
  open: boolean;
  activeIdx: number;
  onClose: () => void;
  onGoTo: (i: number) => void;
  onNavigate: (p: Page) => void;
  // When true (homepage usage), every item scrolls within the
  // homepage's own track — Work/Award & Speaking slides already embed
  // the real page, so there's no need to break out to a separate
  // top-level route. PageBottomNav (used on standalone pages with no
  // track to scroll) keeps the page-aware branching below.
  forceScroll?: boolean;
}) {
  const isDark = useContext(DarkModeCtx);
  const itemActive = GOLD;
  const rowBorder  = isDark ? "rgba(255,255,255,0.15)" : "rgba(17,17,17,0.12)";
  const closeColor = isDark ? "white" : INK;
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col overflow-hidden"
      style={{ background: "transparent" }}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: open ? 1 : 0, y: open ? "0%" : "100%" }}
      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
      aria-hidden={!open}
      pointerEvents={open ? "auto" : "none"}
    >
      {isDark ? <AnimatedGradientBg /> : <LightGradientBlobs />}

      {/* Header row */}
      <div className="relative z-10 flex items-center px-6 pt-10 pb-6">
        <LogoMark size={44} color={itemActive} />
      </div>

      {/* Nav items list — right-aligned, active-section dot at the start */}
      <div className="relative z-10 flex flex-col flex-1 px-6 pb-12 justify-center gap-1">
        {SECTIONS.map((s, i) => {
          const isActive = activeIdx === i;
          return (
            <button
              key={s.key}
              onClick={() => {
                if (s.page && !forceScroll) {
                  onNavigate(s.page);
                } else {
                  onGoTo(i);
                }
                onClose();
              }}
              onMouseEnter={() => setHoveredKey(s.key)}
              onMouseLeave={() => setHoveredKey(null)}
              className="flex items-center justify-between py-5 text-right"
              style={{ borderBottom: `1px solid ${rowBorder}` }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: itemActive, opacity: isActive ? 1 : 0 }} />
              <span
                className="font-['Museo',sans-serif] font-light tracking-wide"
                style={{
                  fontSize: "1.5rem",
                  color: itemActive,
                  opacity: isActive || hoveredKey === s.key ? 1 : 0.55,
                  transition: "opacity 0.2s ease",
                }}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer — dark/bright toggle and close, side by side */}
      <div className="relative z-10 px-6 pb-8 flex items-center justify-between">
        <DarkModeToggle isDark={isDark} onToggle={useContext(DarkModeToggleCtx)} variant="inline" />
        <button onClick={onClose} aria-label="Close menu" style={{ background: "none", border: "none", padding: 0 }}>
          <X size={20} strokeWidth={1} color={closeColor} />
        </button>
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

// Speaking Inquiry is a full 2nd-level page (not an inline accordion) —
// drilling in from Connect minimises the bottom nav to a breadcrumb
// strip with a docked "Submit" CTA, leaving the full viewport for the
// form. See DetailBottomBar.
function SpeakingInquiryContainer({ onBack }: { onBack: () => void }) {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  return (
    <div className="absolute inset-0 overflow-y-auto" onScroll={e => setHeaderScrolled(e.currentTarget.scrollTop > 24)}>
      <SpeakingInquiryPage onBack={onBack} headerScrolled={headerScrolled} />
    </div>
  );
}

function SpeakingInquiryPage({ onBack, headerScrolled = false }: { onBack: () => void; headerScrolled?: boolean }) {
  const isDark = useContext(DarkModeCtx);
  const accent = "#9B5A88";
  const itemColor = isDark ? "white" : INK;
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fields, setFields] = useState<Record<string, string>>({});

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"}`,
    outline: "none",
    padding: "8px 0",
    fontSize: "0.9rem",
    fontFamily: "'Avenir', sans-serif",
    fontWeight: 300,
    color: itemColor,
    transition: "border-color 0.2s",
  };

  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch(SPEAKING_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: `Speaking Inquiry: ${fields.topic ?? ""}`, ...fields }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setTimeout(() => { onBack(); setStatus("idle"); setFields({}); }, 2500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10"
        style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? brd : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : undefined,
          transition: "padding-bottom 0.35s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}>
        <button onClick={onBack}
          className="flex items-center gap-1.5 font-['Avenir',sans-serif] font-light text-[0.65rem] uppercase tracking-[0.2em] mb-4 cursor-pointer"
          style={{ color: GOLD }}>
          <ChevronLeft size={12} strokeWidth={1.5} /> Connect
        </button>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-[3rem] md:text-[4rem]"
          style={{ lineHeight: 1.05, color: GOLD, fontSize: headerScrolled ? "1.5rem" : undefined, transition: "font-size 0.35s ease" }}
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
          Speaking Inquiry
        </motion.h1>
      </div>

      <div className="px-6 md:px-20 pb-10" style={{ maxWidth: 760 }}>
        {status === "sent" ? (
          <p className="font-['Avenir',sans-serif] font-light text-sm" style={{ color: accent }}>
            ✓ Sent — Tiffany will be in touch soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {FORM_FIELDS.map(f => (
              <div key={f.name} className="flex flex-col gap-1">
                <label
                  className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.18em]"
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
        )}

        {status === "error" && (
          <p className="font-['Avenir',sans-serif] font-light text-xs mt-4" style={{ color: "#E05C5C" }}>
            Something went wrong — please email designmatters.tiff@gmail.com directly.
          </p>
        )}

        {/* Bottom spacer so content clears the floating detail nav */}
        <div style={{ height: 96 }} />
      </div>

      <div className="fixed inset-x-3 md:inset-x-20 z-30" style={{ bottom: "calc(3% + env(safe-area-inset-bottom))" }}>
        <DetailBottomBar
          parentLabel="Connect"
          itemLabel="Speaking Inquiry"
          onBack={onBack}
          cta={{ label: status === "sending" ? "Sending…" : "Submit", onClick: handleSubmit, disabled: status === "sending" || status === "sent" }}
        />
      </div>
    </div>
  );
}

// ─── Section data ─────────────────────────────────────────────────

const SECTIONS = [
  { key: "about",   label: "Tiffany C.",      page: null,  accent: GOLD, items: [] },
  {
    key: "work",    label: "Work",             page: "work" as Page, embeds: true,
    accent: "#8A6E2E",
    tagline: "Design Strategy & Leadership",
    context: "Fintech • eCommerce • Utility SaaS",
    items: ["AI + UX DesignOps", "Business Acumen", "Product & UX Methods", "People & Process"],
  },
  {
    key: "awards",  label: "Award & Speaking", page: "awards" as Page, embeds: true,
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
    key: "coaching", label: "Coaching",        page: "coaching" as Page,
    accent: "#5070A0",
    tagline: "UX Career Coaching",
    context: "Open to collaboration",
    items: [
      "1:1 Calls",
      "Priority DM",
      "Package (1-1 Coaching Service)",
    ],
  },
  {
    key: "connect", label: "Connect",          page: "connect" as Page,
    accent: "#9B5A88",
    tagline: "Let's Connect",
    context: "Open to collaboration",
    items: ["Speaking Inquiry", "linkedin", "instagram", "designmatters.tiff@gmail.com"],
  },
] as const;

// ─── Contact / link row content ───────────────────────────────────
// Renders the inner content for a single Coaching/Connect item. Shared
// between the homepage swipe-deck (wrapped in a clip-path reveal) and
// the standalone Coaching/Connect pages so the per-item-type branching
// lives in one place.
function ContactItem({
  item,
  accent,
  itemColor,
  borderColor,
  onNavigate,
}: {
  item: string;
  accent: string;
  itemColor: string;
  borderColor: string;
  onNavigate?: (p: Page) => void;
}) {
  if (item === "linkedin") {
    return (
      <a href="https://www.linkedin.com/in/tiffany-c/" target="_blank" rel="noopener noreferrer"
        className="w-full flex items-center gap-3 py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
        <Linkedin size={16} strokeWidth={1} style={{ color: accent, flexShrink: 0 }} />
        <span className="link-underline font-['Avenir',sans-serif] font-light text-base md:text-lg" style={{ color: itemColor }}>LinkedIn</span>
        <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
      </a>
    );
  }
  if (item === "instagram") {
    return (
      <a href="https://www.instagram.com/tffny.c/" target="_blank" rel="noopener noreferrer"
        className="w-full flex items-center gap-3 py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
        <Instagram size={16} strokeWidth={1} style={{ color: accent, flexShrink: 0 }} />
        <span className="link-underline font-['Avenir',sans-serif] font-light text-base md:text-lg" style={{ color: itemColor }}>Instagram</span>
        <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
      </a>
    );
  }
  if (item === "designmatters.tiff@gmail.com") {
    return (
      <a href="mailto:designmatters.tiff@gmail.com"
        className="w-full flex items-center py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
        <span className="link-underline font-['Avenir',sans-serif] font-light text-sm md:text-lg" style={{ color: itemColor }}>{item}</span>
      </a>
    );
  }
  if (item === "1:1 Calls" || item === "Priority DM" || item === "Package (1-1 Coaching Service)") {
    return (
      <a href="https://topmate.io/tffnyc" target="_blank" rel="noopener noreferrer"
        className="w-full flex items-center gap-2 py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
        <span className="link-underline font-['Avenir',sans-serif] font-light text-base md:text-lg" style={{ color: itemColor }}>{item}</span>
        <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
      </a>
    );
  }
  if (item === "Speaking Inquiry") {
    return (
      <button
        className="w-full flex items-center gap-3 py-4 md:py-[18px] cursor-pointer text-left"
        onClick={() => onNavigate?.("speakingInquiry")}
      >
        <ChevronRight size={16} strokeWidth={1} style={{ color: accent, flexShrink: 0 }} />
        <span className="link-underline font-['Avenir',sans-serif] font-light text-base md:text-lg" style={{ color: itemColor }}>
          Speaking Inquiry
        </span>
      </button>
    );
  }
  return (
    <div className="flex items-center py-4 md:py-[18px]">
      <span className="font-['Avenir',sans-serif] font-light text-base md:text-lg" style={{ color: itemColor }}>{item}</span>
    </div>
  );
}

const AUTO_DURATION = 5000;

// ─── Homepage ─────────────────────────────────────────────────────

export function HomePage({ onNavigate, onOpenDetail, initialIdx = 0 }: { onNavigate: (p: Page) => void; onOpenDetail?: (key: string) => void; initialIdx?: number }) {
  const isDark = useContext(DarkModeCtx);
  const pageBg  = isDark ? "#282828" : "#f8f7f5";
  const fg      = isDark ? GOLD : INK;
  const bodyCol = isDark ? "rgba(255,255,255,0.85)" : INK;
  const dimCol  = isDark ? "rgba(255,255,255,0.38)" : DIM;
  const border  = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const scrollEl  = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ active: boolean; startX: number; scrollLeft: number }>({ active: false, startX: 0, scrollLeft: 0 });
  const [activeIdx, setActiveIdx]   = useState(initialIdx);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [progress, setProgress]     = useState(0);
  const [menuOpen, setMenuOpen]     = useState(false);
  // On mobile, the embedded Work/Award & Speaking pages are capped to one
  // screen with a gradient fade + "View more" until expanded, so the
  // persistent carousel indicator always has room.
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  // Whether an embedded section's natural content height actually
  // exceeds the viewport — the "View more" cap should only ever kick
  // in for sections that genuinely overflow (e.g. Awards & Speaking's
  // long list), not unconditionally on every mobile section.
  const [sectionOverflows, setSectionOverflows] = useState<Record<string, boolean>>({});
  const embedSectionRefs = useRef<Record<string, HTMLElement | null>>({});
  // Like Safari's URL bar — the floating nav only shrinks once the user
  // actually scrolls down inside an expanded section, not just because
  // it was expanded. Resets whenever the active section changes so a
  // stale "scrolled" state from a previous section can't carry over.
  const [navMinimized, setNavMinimized] = useState(false);
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

  // Restores horizontal-swipe position when returning from a Work
  // detail page — jumps instantly (no smooth scroll) so it doesn't
  // visibly re-play the swipe on mount.
  useEffect(() => {
    const el = scrollEl.current;
    if (el && initialIdx > 0) {
      el.scrollTo({ left: initialIdx * el.clientWidth, behavior: "auto" });
      activeIdxRef.current = initialIdx;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Measure each embedded section's natural content height against the
  // viewport so the "View more" cap only applies when content actually
  // overflows. scrollHeight reflects the full content size regardless
  // of overflow:hidden, so this works even while capped.
  useEffect(() => {
    const observers: ResizeObserver[] = [];
    Object.entries(embedSectionRefs.current).forEach(([key, el]) => {
      if (!el) return;
      const check = () => {
        const overflows = el.scrollHeight > el.clientHeight + 1;
        setSectionOverflows(m => (m[key] === overflows ? m : { ...m, [key]: overflows }));
      };
      check();
      const ro = new ResizeObserver(check);
      ro.observe(el);
      observers.push(ro);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [isMobile]);

  // rAF auto-advance — skipped entirely on mobile
  useEffect(() => {
    const tick = () => {
      const onEmbeddedPage = Boolean((SECTIONS[activeIdxRef.current] as { embeds?: boolean }).embeds);
      if (!isMobileRef.current && !isPaused.current && !onEmbeddedPage) {
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

      const absY = Math.abs(e.deltaY);
      const absX = Math.abs(e.deltaX);

      // On a slide that embeds a real, vertically-scrollable page
      // (Work / Award & Speaking), a vertical gesture should scroll
      // that page's own content — not hijack the wheel to advance to
      // the next/prev section. Horizontal gestures still switch
      // sections even while on one of these slides.
      const isEmbeddedPage = Boolean((SECTIONS[activeIdxRef.current] as { embeds?: boolean }).embeds);
      if (isEmbeddedPage && absY >= absX) return;

      e.preventDefault();
      if (wheeling.current) return;
      const delta = absY >= absX ? e.deltaY : e.deltaX;
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
  // True when the active section is an embedded Work/Award & Speaking
  // page that's been expanded past its mobile "View more" cap — this
  // makes the section vertically scrollable, which is the precondition
  // for the Safari-style nav shrink (see navMinimized) to apply.
  const currentEmbedExpanded = isMobile && "embeds" in currentSection && currentSection.embeds && (mobileExpanded[currentSection.key] ?? false);
  const navShrunk = currentEmbedExpanded && navMinimized;

  useEffect(() => { setNavMinimized(false); }, [activeIdx]);

  // Expanding any row's accordion (a finalist photo, a speaking event's
  // image/video) inside a still-capped Work/Award & Speaking section
  // can grow taller than the one-screen cap allows — auto-lift the cap
  // so that content isn't clipped with no way to scroll down and see it.
  const { openId: openAccordionIdHome } = useContext(AccordionCtx);
  useEffect(() => {
    if (openAccordionIdHome && "embeds" in currentSection && currentSection.embeds) {
      setMobileExpanded(m => (m[currentSection.key] ? m : { ...m, [currentSection.key]: true }));
    }
  }, [openAccordionIdHome, currentSection]);

  return (
    <div className="relative w-screen h-dvh overflow-hidden" style={{ background: "transparent" }}>

      {/* ── Horizontal scroll track ── */}
      <div
        ref={scrollEl}
        className="absolute inset-0 z-10 flex overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
        onMouseEnter={() => { if (!isMobileRef.current) isPaused.current = true; }}
        onMouseLeave={() => {
          if (!isMobileRef.current && !hoveredNav) {
            isPaused.current = false;
            startTime.current = Date.now();
            setProgress(0);
          }
          if (dragState.current.active) {
            dragState.current.active = false;
            if (scrollEl.current) {
              scrollEl.current.style.cursor = "";
              scrollEl.current.style.scrollSnapType = "x mandatory";
              scrollEl.current.style.userSelect = "";
            }
          }
        }}
        onMouseDown={e => {
          if (isMobileRef.current) return;
          dragState.current = { active: true, startX: e.pageX, scrollLeft: scrollEl.current?.scrollLeft ?? 0 };
          if (scrollEl.current) {
            scrollEl.current.style.cursor = "grabbing";
            scrollEl.current.style.scrollSnapType = "none";
            scrollEl.current.style.userSelect = "none";
          }
        }}
        onMouseMove={e => {
          if (!dragState.current.active || isMobileRef.current) return;
          const dx = e.pageX - dragState.current.startX;
          if (scrollEl.current) scrollEl.current.scrollLeft = dragState.current.scrollLeft - dx;
        }}
        onMouseUp={() => {
          if (!dragState.current.active) return;
          dragState.current.active = false;
          if (scrollEl.current) {
            scrollEl.current.style.cursor = "";
            scrollEl.current.style.userSelect = "";
            // snap to nearest section
            const el = scrollEl.current;
            const w = el.clientWidth;
            const nearest = Math.round(el.scrollLeft / w);
            el.style.scrollSnapType = "x mandatory";
            el.scrollTo({ left: nearest * w, behavior: "smooth" });
          }
        }}
      >
        {/* ── Section 0: Tiffany C. ── */}
        <section
          className="flex-shrink-0 relative overflow-hidden"
          style={{ width: "100vw", height: "100%", scrollSnapAlign: "start", background: "transparent" }}
        >
          {/* The animated gradient/blob background lives at the App root so it
              stays continuous across page navigation — only content here. */}

          {/* Mobile layout */}
          <div className="md:hidden absolute inset-0 flex flex-col px-6 pt-14"
            style={{ paddingBottom: "calc(64px + 8vh + 24px)" }}>
            <LogoMark size={52} />
            <div className="flex-1 flex flex-col justify-center gap-5">
              <div>
                <img
                  src={profilePhoto}
                  alt="Tiffany Chew"
                  className="rounded-full object-cover"
                  style={{
                    float: "right",
                    width: "34vw",
                    height: "34vw",
                    maxWidth: 160,
                    maxHeight: 160,
                    marginLeft: 16,
                    marginBottom: 8,
                    shapeOutside: "circle(50%)",
                    border: `1px solid ${GOLD}`,
                  }}
                />
                <h1 className="font-['Museo',sans-serif] font-light"
                  style={{ fontSize: "3rem", lineHeight: 1.1, color: GOLD }}>
                  Hi, I'm a product &amp; design leader
                </h1>
              </div>
              <p className="font-['Avenir',sans-serif] font-light leading-relaxed"
                style={{ fontSize: "clamp(0.85rem, 3.8vw, 1.05rem)", color: bodyCol, maxWidth: "100%" }}>
                I work with C-suites and product teams to shape design
                functions that deliver. As a founder who built and
                exited my own brand, and a leader across fintech, retail,
                and SaaS, I bring an entrepreneurial and outcomes-focused
                lens to design leadership.
                <br /><br />
                My forte is connecting strategy to craft, breaking it into
                tangible wins toward an ultimate company vision. Because the
                clarity between a big decision and a small win is where
                sustainable growth lives.
              </p>
            </div>
          </div>

          {/* Desktop layout — top-aligned stack (logo, heading, body) with
              fixed gaps, matching the Figma reference exactly, rather than
              vertically centering the whole block. */}
          <div className="hidden md:flex absolute inset-0 flex-col px-20"
            style={{ paddingTop: 64, paddingBottom: "calc(64px + 5vh + 96px)" }}>
            <LogoMark size={70} />
            <div className="relative" style={{ marginTop: 64 }}>
              <img
                src={profilePhoto}
                alt="Tiffany Chew"
                className="rounded-full object-cover absolute"
                style={{
                  width: "24vw",
                  height: "24vw",
                  maxWidth: 315,
                  maxHeight: 315,
                  right: 0,
                  top: "-14%",
                  border: `1px solid ${GOLD}`,
                }}
              />
              <h1 className="font-['Museo',sans-serif] font-light"
                style={{ fontSize: "4rem", lineHeight: 1.05, color: GOLD, maxWidth: "52%" }}>
                Tiff is a product &amp; design leader
              </h1>
            </div>
            <div className="flex-1" />
            <p className="font-['Avenir',sans-serif] font-light leading-relaxed"
              style={{ fontSize: "clamp(1.05rem, 1.7vw, 1.4rem)", color: bodyCol, maxWidth: "60%" }}>
              I work with C-suites and product teams to shape design
              functions that deliver. As an ex-founder who built and
              exited my own brand, and a leader across fintech, retail,
              and SaaS, I bring an entrepreneurial and outcomes-focused
              lens to design leadership.
              <br /><br />
              My forte is connecting strategy to craft, breaking it into
              tangible wins toward an ultimate company vision. Because the
              clarity between a big decision and a small win is where
              sustainable growth lives.
            </p>
          </div>
          <div className="hidden md:block">
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

          // Work / Award & Speaking embed the real page directly so
          // scrolling horizontally into them glides straight into the
          // actual content (no stale preview text). Vertical scroll
          // inside the slide lengthens it independently of the
          // horizontal scroll-snap track. On mobile, that content is
          // capped to one screen with a gradient fade + "View more"
          // until expanded, so there's always room for the persistent
          // carousel indicator instead of it disappearing into a long page.
          if ("embeds" in section && section.embeds) {
            const expanded = mobileExpanded[section.key] ?? false;
            const overflows = sectionOverflows[section.key] ?? false;
            const capped = isMobile && !expanded && overflows;
            return (
              <section key={section.key}
                ref={(el) => { embedSectionRefs.current[section.key] = el; }}
                className="flex-shrink-0 relative scrollbar-hide"
                style={{ width: "100vw", height: "100%", scrollSnapAlign: "start", overflowY: capped ? "hidden" : "auto", WebkitOverflowScrolling: "touch", touchAction: capped ? "pan-x" : "pan-y" }}
                onScroll={!capped ? (e) => setNavMinimized(e.currentTarget.scrollTop > 24) : undefined}>
                {section.page === "work"
                  ? <WorkPage onNavigate={onNavigate} onOpenDetail={onOpenDetail} embedded isActive={isActive} compact={isActive && navShrunk} headerScrolled={isActive && navMinimized} />
                  : <AwardsSpeakingPage onNavigate={onNavigate} embedded isActive={isActive} compact={isActive && navShrunk} headerScrolled={isActive && navMinimized} />}

                {capped && (
                  <>
                    {/* Frosted fade — same blurred/tinted treatment as the
                        scrolled header, so the nav reads as a foreground
                        layer with the list falling away behind it. The
                        mask fades the blur in gradually rather than a
                        hard edge. */}
                    <div className="pointer-events-none absolute" style={{
                      left: 0, right: 0, bottom: 0, height: 260, zIndex: 5,
                      background: isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      maskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
                      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
                    }} />
                    <button
                      onClick={() => setMobileExpanded(m => ({ ...m, [section.key]: true }))}
                      className="absolute left-1/2 font-['Avenir',sans-serif] font-medium text-xs uppercase tracking-[0.15em] cursor-pointer"
                      style={{ transform: "translateX(-50%)", bottom: "calc(5% + 56px + 34px + env(safe-area-inset-bottom))", color: GOLD, background: "none", border: "none", zIndex: 6 }}>
                      View more
                    </button>
                  </>
                )}
              </section>
            );
          }

          return (
            <section key={section.key}
              className="flex-shrink-0 relative flex flex-col"
              style={{
                width: "100vw", height: "100%", scrollSnapAlign: "start", background: "transparent",
                overflowY: "hidden",
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-x",
              }}>

              <div className="absolute inset-0 pointer-events-none"
                style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.6s ease",
                  background: `radial-gradient(ellipse 70% 50% at 60% 30%, ${section.accent}0d 0%, transparent 70%)` }} />

              <div className="relative z-10 flex flex-col h-full px-6 md:px-20 pt-10 md:pt-14"
                style={{ paddingBottom: "calc(64px + 8vh + 32px)" }}>

                <motion.p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em] mb-4 md:mb-6"
                  style={{ color: section.accent }}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }}
                  transition={{ duration: 0.5 }}>
                  {section.context}
                </motion.p>

                <motion.h2 className="font-['Museo',sans-serif] font-light text-[3rem] md:text-[4rem]"
                  style={{ lineHeight: 1.05, maxWidth: "16ch", color: GOLD }}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -16 }}
                  transition={{ duration: 0.55, delay: 0.06 }}>
                  {section.tagline}
                </motion.h2>

                <div className="flex-1" style={{ minHeight: "4vh" }} />

                <div style={{ borderTop: `1px solid ${border}` }}>
                  {section.items.map((item, k) => {
                    const itemColor = isDark ? "white" : INK;
                    return (
                      <div key={item} style={{ borderBottom: `1px solid ${border}`, lineHeight: 0, overflow: "hidden" }}>
                        <div style={{
                          clipPath: isActive ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                          transition: `clip-path 0.55s cubic-bezier(0.4,0,0.2,1) ${0.22 + k * 0.09}s`,
                        }}>
                          <ContactItem item={item} accent={section.accent} itemColor={itemColor} borderColor={border} onNavigate={onNavigate} />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ── "Swipe to explore" (hero only), alone on its own row above the
          nav bar. Same copy and the same bottom-left position on both
          breakpoints — only the offset constants change, since the
          mobile floating nav is 56px tall vs. 64px on desktop. ── */}
      {activeIdx === 0 && (
        <p className="absolute z-30 font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-widest"
          style={{
            bottom: isMobile
              ? "calc(5% + 56px + 14px + env(safe-area-inset-bottom))"
              : "calc(64px + 5vh + 28px)",
            left: isMobile ? 24 : "7%",
            color: dimCol,
          }}>
          swipe to explore
        </p>
      )}

      {/* ── Persistent mobile carousel indicator — sits directly below the
          floating nav bar, spanning the same width. Stays visible across
          every slide, including the embedded Work/Award & Speaking pages,
          which have no room in their own content for a per-slide
          indicator. Design: a solid gold bar grows to cover every visited
          section (merged into one continuous line), with small dots
          marking the sections still ahead. Hidden while the user is
          scrolled down inside an expanded Work/Award & Speaking section,
          since the nav itself shrinks then and sits lower on screen. ── */}
      <div className="md:hidden absolute z-30 flex items-center"
        style={{
          bottom: "calc(2% + env(safe-area-inset-bottom))", left: 24, right: 24,
          opacity: navShrunk ? 0 : 1,
          transition: "opacity 0.25s ease",
          pointerEvents: navShrunk ? "none" : "auto",
        }}>
        <div className="rounded-full transition-all duration-300"
          style={{
            width: `${((activeIdx + 1) / SECTIONS.length) * 100}%`,
            height: 2,
            background: GOLD,
            flexShrink: 0,
          }} />
        {activeIdx < SECTIONS.length - 1 && (
          <div className="flex items-center gap-1.5" style={{ marginLeft: 8 }}>
            {SECTIONS.slice(activeIdx + 1).map((_, i) => (
              <div key={i} className="rounded-full"
                style={{ width: 4, height: 4,
                  background: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.25)" }} />
            ))}
          </div>
        )}
      </div>

      {/* ── Desktop nav — floating above bottom edge, aligned to content width.
          We keep the nav itself fully opaque (matches Figma). A separate
          fixed, pointer-events-none backdrop element sits behind the nav
          and applies the `backdrop-filter: blur()` to the area behind it
          (nav height + 24px top and bottom padding). */}
      <div className="fixed z-20 hidden md:block pointer-events-none"
        style={{
          left: 80,
          right: 80,
          // Span from slightly above the nav (24px) down to the viewport bottom
          top: "calc(100% - (5% + 64px + 24px))",
          bottom: 0,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }} />

      <nav className="fixed z-30 hidden md:flex items-stretch h-16 overflow-hidden"
        style={{
          bottom: "5%", left: 80, right: 80,
          borderRadius: 0,
          background: navGradient(isDark),
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          backgroundClip: "padding-box",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}>
        {SECTIONS.map((s, i) => {
          const active = activeIdx === i;
          const hovered = hoveredNav === s.key;
          return (
            <button key={s.key}
              onClick={() => goTo(i)}
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

      {/* ── Mobile nav bar — floating, aligned to content width. Shrinks
          to a left-aligned, content-width pill once the active embedded
          Work/Award & Speaking section is expanded past its "View more"
          cap, to free up room for the now-longer scrollable content. ── */}
      {/* Mobile backdrop: aligns with the mobile nav and gives a 24px top/bottom
          blur area behind the fully opaque mobile nav. */}
      <div className="fixed z-20 md:hidden pointer-events-none"
        style={{
          left: 0,
          right: 0,
          // Span from slightly above the mobile nav (24px) down to the viewport bottom
          top: "calc(100% - (5% + env(safe-area-inset-bottom) + 56px + 24px))",
          bottom: 0,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }} />

      <motion.nav className="fixed z-30 md:hidden flex items-center px-5 overflow-hidden"
        style={{
          bottom: "calc(5% + env(safe-area-inset-bottom))", left: 24,
          borderRadius: 0,
          background: navGradient(isDark),
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}
        animate={{ width: navShrunk ? 168 : "calc(100% - 48px)", height: navShrunk ? 36 : 56 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3"
          aria-label="Open navigation">
          <HamburgerIcon color="white" />
          <span className="font-['Museo',sans-serif] font-light text-sm text-white whitespace-nowrap">
            Tiffany C.
          </span>
        </button>
        {!navShrunk && (
          <>
            <div className="flex-1" />
            {activeIdx > 0 && (
              <span className="font-['Museo',sans-serif] font-light text-sm text-white/75">
                {currentSection.label}
              </span>
            )}
          </>
        )}
      </motion.nav>

      {/* Mobile menu overlay */}
      <MobileMenu
        open={menuOpen}
        activeIdx={activeIdx}
        onClose={() => setMenuOpen(false)}
        onGoTo={(i) => { goTo(i); setMenuOpen(false); }}
        onNavigate={(p) => { onNavigate(p); setMenuOpen(false); }}
        forceScroll
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
    key: "ai", title: "AI + UX", accent: GOLD, Illustration: IllustrationAI,
    description: "Designing and iterating AI-native workflows and infrastructure from the ground up.",
    bullets: ["Reduced trilingual UX copy turnaround by 20% through AI tooling", "AI-native hiring standards & team norms at Cotton On Group", "Automated design system governance & DesignOps maturity frameworks"],
  },
  {
    key: "business", title: "Business Acumen", accent: "#8A6E2E", Illustration: IllustrationBusiness,
    description: "Aligning product design with measurable revenue growth and user outcomes.",
    bullets: ["eCommerce: Behavioural UX Design (passcode required)"],
  },
  {
    key: "ux", title: "Product & UX Strategies", accent: "#5070A0", Illustration: IllustrationUX,
    description: "Led 0-to-1 enterprise SaaS and scaled global platforms used by millions daily.",
    bullets: ["Built UX Research function & company-wide NPS benchmarks from scratch", "Multi-platform, multi-brand design system adhering to accessibility standards", "End-to-end product design: discovery → delivery across fintech, retail & SaaS"],
  },
  {
    key: "people", title: "People & Process", accent: "#5070A0", Illustration: IllustrationPeople,
    description: "Built high-performing multidisciplinary teams and cross-unit prioritization frameworks.",
    bullets: ["Team growth: 7 → 22 designers across B2C, B2B & Research", "Coaching Responsibility Agreements & design culture building", "Chapter Lead — Ladies that UX, Kuala Lumpur (2022–2024)"],
    resources: [
      {
        label: "Coaching Guide for Product Designers at all levels",
        description: "A structured guide for talent development across junior, mid, and senior practitioners — covering skills, responsibilities, and growth frameworks.",
        url: "https://tiffanychew.notion.site/Coaching-Guide-for-Product-Designers-at-all-levels-a6349a68618a4eda8b0f678e3738cb8b?pvs=4",
      },
      {
        label: "Role, Responsibility, Requirement & Result (4Rs) for Product Designers, UX Writers & UX Researchers",
        description: "A practical framework for defining what each role owns, what's expected, and how output is measured.",
        url: null,
        comingSoon: true,
      },
    ],
  },
];

// Rows navigate to a full WorkDetailPage rather than expanding inline —
// matches the same drill-in pattern as the Speaking Inquiry page.
function ExpertiseCard({ card, onOpen }: { card: typeof EXPERTISE_CARDS[0]; onOpen: () => void }) {
  const isDark = useContext(DarkModeCtx);
  const { Illustration } = card;
  const cardBrd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const titleColor = isDark ? "white" : INK;
  return (
    <button
      className="w-full flex items-start gap-4 md:gap-6 px-5 md:px-20 py-5 md:py-7 cursor-pointer text-left"
      style={{ borderBottom: `1px solid ${cardBrd}`, background: "transparent", transition: "background 0.3s" }}
      onClick={onOpen}
      onMouseEnter={e => (e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)")}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
    >
      <div className="flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden"
        style={{ width: 56, height: 56, background: `${card.accent}1f` }}>
        <div style={{ width: 38, height: 38 }}><Illustration /></div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-['Avenir',sans-serif] font-medium"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", color: titleColor }}>
          {card.title}
        </h3>
        <p className="font-['Avenir',sans-serif] font-light text-sm leading-relaxed mt-1" style={{ color: isDark ? "rgba(255,255,255,0.55)" : DIM, maxWidth: 600 }}>
          {card.description}
        </p>
      </div>
      <ChevronRight
        size={18}
        strokeWidth={1.5}
        style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(17,17,17,0.35)", flexShrink: 0, marginTop: 4 }}
      />
    </button>
  );
}

// ─── Work case study detail page ───────────────────────────────────
function WorkDetailPage({ cardKey, onBack, onNavigate }: { cardKey: string; onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const card = EXPERTISE_CARDS.find(c => c.key === cardKey);
  if (!card) return null;
  const { Illustration } = card;
  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10">
        <button onClick={onBack}
          className="flex items-center gap-1.5 font-['Avenir',sans-serif] font-light text-[0.65rem] uppercase tracking-[0.2em] mb-4 cursor-pointer"
          style={{ color: GOLD }}>
          <ChevronLeft size={12} strokeWidth={1.5} /> Work
        </button>
        <div className="flex items-center gap-5 mb-2">
          <div className="flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden"
            style={{ width: 56, height: 56, background: `${card.accent}1f` }}>
            <div style={{ width: 38, height: 38 }}><Illustration /></div>
          </div>
          <motion.h1 className="font-['Museo',sans-serif] font-light text-[3rem] md:text-[4rem]" style={{ lineHeight: 1.05, color: GOLD }}
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
            {card.title}
          </motion.h1>
        </div>
      </div>

      <div className="px-6 md:px-20 pb-10" style={{ maxWidth: 760 }}>
        <p className="font-['Avenir',sans-serif] font-light leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.85)" : INK }}>
          {card.description}
        </p>
        <ul className="mt-6 space-y-2.5">
          {"resources" in card && (card as any).resources?.filter((r: any) => r.url).map((r: any) => (
            <li key={r.label} className="font-['Avenir',sans-serif] font-light text-sm flex items-start gap-2" style={{ color: card.accent }}>
              <span className="mt-0.5 flex-shrink-0">—</span>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1" style={{ color: card.accent }}>
                {r.label}<ExternalLink size={11} strokeWidth={1.5} style={{ flexShrink: 0, opacity: 0.7 }} />
              </a>
            </li>
          ))}
          {card.bullets.map(b => {
            const isSpecial = b === "eCommerce: Behavioural UX Design (passcode required)";
            return (
              <li key={b} className="font-['Avenir',sans-serif] font-light text-sm flex items-start gap-2" style={{ color: card.accent }}>
                <span className="mt-0.5 flex-shrink-0">—</span>
                {isSpecial ? (
                  <button onClick={() => onNavigate('businessCase')} className="link-underline" style={{ background: 'none', border: 'none', padding: 0, color: card.accent, cursor: 'pointer' }}>
                    {b}
                  </button>
                ) : (
                  <span>{b}</span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Bottom spacer so content clears the floating detail nav */}
        <div style={{ height: 96 }} />
      </div>

      <div className="fixed inset-x-3 md:inset-x-20 z-30" style={{ bottom: "calc(3% + env(safe-area-inset-bottom))" }}>
        <DetailBottomBar parentLabel="Work" itemLabel={card.title} onBack={onBack} />
      </div>
    </div>
  );
}

// ─── Minimised bottom nav for 2nd-level detail pages ───────────────
// Used when drilling into a Work case study or the Speaking Inquiry
// form — the regular full-height PageBottomNav shrinks down to a
// breadcrumb strip (parent / item) to leave more room for content,
// with an optional CTA button (e.g. "Submit") docked beside it.
function DetailBottomBar({
  parentLabel,
  itemLabel,
  onBack,
  cta,
}: {
  parentLabel: string;
  itemLabel: string;
  onBack: () => void;
  cta?: { label: string; onClick: () => void; disabled?: boolean };
}) {
  const isDark = useContext(DarkModeCtx);
  return (
    <div className="flex items-stretch gap-2">
      <motion.button onClick={onBack}
        className="flex-1 min-w-0 flex items-center gap-3 px-5 cursor-pointer"
        style={{ background: navGradient(isDark) }}
        initial={{ height: 56 }} animate={{ height: 36 }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
        <HamburgerIcon />
        <span className="font-['Avenir',sans-serif] font-light text-sm text-white whitespace-nowrap overflow-hidden text-ellipsis">
          {parentLabel} / {itemLabel}
        </span>
      </motion.button>
      {cta && (
        <motion.button onClick={cta.onClick} disabled={cta.disabled}
          className="gold-submit-btn px-6 flex-shrink-0 font-['Museo',sans-serif] font-light text-sm text-white cursor-pointer"
          style={{ opacity: cta.disabled ? 0.6 : 1 }}
          initial={{ height: 56 }} animate={{ height: 36 }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
          {cta.label}
        </motion.button>
      )}
    </div>
  );
}

// ─── Shared gradient bottom nav (Work / Awards pages) ─────────────

// Wraps PageBottomNav with a full-width fade scrim behind it, so content
// scrolling up from underneath fades into the page background before it
// would otherwise be visible peeking past the nav's side margins/edges.
function StickyPageNav({ activePage, onNavigate }: { activePage: Page; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const pageBg = isDark ? "#181410" : "#f8f7f5";
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-20 pointer-events-none"
        style={{ height: 180, background: `linear-gradient(to bottom, ${pageBg}00 0%, ${pageBg} 65%)` }} />
      <div className="fixed inset-x-6 md:inset-x-20 z-30 overflow-hidden"
        style={{ bottom: "calc(3% + env(safe-area-inset-bottom))", borderRadius: 0, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
        <PageBottomNav activePage={activePage} onNavigate={onNavigate} />
      </div>
    </>
  );
}

function PageBottomNav({
  activePage,
  onNavigate,
}: {
  activePage: Page;
  onNavigate: (p: Page) => void;
}) {
  const isDark = useContext(DarkModeCtx);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [menuOpen, setMenuOpen]     = useState(false);
  const isMobile = useIsMobile();

  const NAV_ITEMS = [
    { key: "work",     label: "Work",             page: "work" as Page },
    { key: "awards",   label: "Award & Speaking", page: "awards" as Page },
    { key: "coaching", label: "Coaching",         page: "coaching" as Page },
    { key: "connect",  label: "Connect",          page: "connect" as Page },
  ];

  return (
    <>
      {/* Desktop — same fluid flex-grow expand/collapse as the homepage nav */}
      <div className="hidden md:flex items-stretch h-16 overflow-hidden"
        style={{ background: navGradient(isDark) }}>
        <button
          className="flex items-center gap-3 overflow-hidden"
          onMouseEnter={() => setHoveredNav("about")}
          onMouseLeave={() => setHoveredNav(null)}
          onClick={() => onNavigate("home")}
          style={{
            flex: hoveredNav === "about" ? "3 1 0%" : "1 1 0%",
            minWidth: 0, padding: "0 20px",
            opacity: hoveredNav === "about" ? 1 : 0.52,
            transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
            borderRight: "1px solid rgba(255,255,255,0.18)",
          }}>
          <HamburgerIcon />
          <span className="font-['Museo',sans-serif] font-light text-[0.85rem] text-white whitespace-nowrap overflow-hidden text-ellipsis">Tiffany C.</span>
        </button>
        {NAV_ITEMS.map(item => (
          <button key={item.key}
            onMouseEnter={() => setHoveredNav(item.key)}
            onMouseLeave={() => setHoveredNav(null)}
            onClick={() => item.page && onNavigate(item.page)}
            className="flex items-center font-['Museo',sans-serif] font-light text-[0.85rem] whitespace-nowrap overflow-hidden text-ellipsis text-white"
            style={{
              flex: activePage === item.page || hoveredNav === item.key ? "3 1 0%" : "1 1 0%",
              minWidth: 0, padding: "0 20px",
              opacity: activePage === item.page || hoveredNav === item.key ? 1 : 0.52,
              transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
              borderLeft: "1px solid rgba(255,255,255,0.18)",
            }}>
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center h-16 px-5"
        style={{ background: navGradient(isDark) }}>
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

// `embedded` is used when this page is rendered inline inside the
// homepage's horizontal scroll-snap track (see HomePage) — in that
// case the homepage's own logomark/back-button and floating nav are
// already on screen, so this component's copies are suppressed to
// avoid duplicating them.
function WorkPage({ onNavigate, onOpenDetail, embedded = false, isActive = true, compact = false, headerScrolled = false }: { onNavigate: (p: Page) => void; onOpenDetail?: (key: string) => void; embedded?: boolean; isActive?: boolean; compact?: boolean; headerScrolled?: boolean }) {
  const isDark = useContext(DarkModeCtx);
  const bg = "transparent";
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  return (
    <div className="relative w-full" style={{ minHeight: embedded ? "100%" : "100dvh", background: bg }}>
      {/* Page heading — sticky so it stays visible while the rows below
          scroll past it, shrinking once the mobile "View more" cap lifts.
          Transparent at rest so the multicolour background shows through;
          only once the user scrolls does it pick up a frosted (blurred,
          80% opacity) backdrop so the now-passing content reads cleanly
          behind it. */}
      <div className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10"
        style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? brd : "transparent"}`,
          paddingBottom: compact ? 16 : undefined,
          transition: "padding-bottom 0.35s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}>
        <motion.p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em] mb-2" style={{ color: GOLD }}
          initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }} transition={{ duration: 0.5 }}>
          Fintech · eCommerce · SaaS
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-[3rem] md:text-[4rem]"
          style={{ fontSize: compact ? "1.5rem" : undefined, lineHeight: 1.05, color: GOLD, transition: "font-size 0.35s ease" }}
          initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -16 }} transition={{ duration: 0.55, delay: 0.06 }}>
          Work
        </motion.h1>
      </div>

      <div style={{ paddingTop: 24 }}>
        {EXPERTISE_CARDS.map(card => <ExpertiseCard key={card.key} card={card} onOpen={() => onOpenDetail?.(card.key)} />)}
        {/* Bottom spacer so content clears the floating nav */}
        <div style={{ height: 96 }} />
      </div>

      {!embedded && <StickyPageNav activePage="work" onNavigate={onNavigate} />}
    </div>
  );
}

// ─── Coaching & Connect pages ──────────────────────────────────────
// Both share the same shell: eyebrow + heading, then a list of contact
// rows rendered via the shared ContactItem component. Modelled on
// AwardsSpeakingPage so the back button, spacing and sticky PageBottomNav
// all match the other standalone pages.
function ContactListPage({
  eyebrow,
  title,
  items,
  accent,
  activePage,
  onNavigate,
}: {
  eyebrow: string;
  title: string;
  items: readonly string[];
  accent: string;
  activePage: Page;
  onNavigate: (p: Page) => void;
}) {
  const isDark = useContext(DarkModeCtx);
  const fg = GOLD;
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const itemColor = isDark ? "white" : INK;
  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      {/* Page heading */}
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10" style={{ borderBottom: `1px solid ${brd}` }}>
        <motion.p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em] mb-2" style={{ color: GOLD }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {eyebrow}
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-[3rem] md:text-[4rem]" style={{ lineHeight: 1.05, color: fg }}
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
          {title}
        </motion.h1>
      </div>

      {/* Items */}
      <div className="px-6 md:px-20 pt-6">
        <div style={{ borderTop: `1px solid ${brd}` }}>
          {items.map(item => (
            <div key={item} style={{ borderBottom: `1px solid ${brd}` }}>
              <ContactItem item={item} accent={accent} itemColor={itemColor} borderColor={brd} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 96 }} />
      <StickyPageNav activePage={activePage} onNavigate={onNavigate} />
    </div>
  );
}

function CoachingPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <ContactListPage
      eyebrow="Open to collaboration"
      title="UX Career Coaching"
      items={["1:1 Calls", "Priority DM", "Package (1-1 Coaching Service)"]}
      accent="#5070A0"
      activePage="coaching"
      onNavigate={onNavigate}
    />
  );
}

function ConnectPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <ContactListPage
      eyebrow="Open to collaboration"
      title="Let's Connect"
      items={["Speaking Inquiry", "linkedin", "instagram", "designmatters.tiff@gmail.com"]}
      accent="#9B5A88"
      activePage="connect"
      onNavigate={onNavigate}
    />
  );
}

// ─── Awards & Speaking page ────────────────────────────────────────

const SPEAKING_EVENTS = [
  { key: "rotterdam", year: "2026", role: "Speaker",  event: "UX Rotterdam",                  location: "Rotterdam, NL", region: "Europe",    topic: "The Human Cost of Human-Centred-Design",                           link: null,                                               img: awardsRotterdam, caption: "2026 @ Rotterdam, NL", dark: true },
  { key: "ux-camp",   year: "2025", role: "Speaker",  event: "UX Camp Melbourne",             location: "Melbourne, AU", region: "Australia", topic: "404: System Burnout — An error message to my UX career",            link: null, youtubeId: "hJIJB3di6T4",                                img: null,          caption: null,             dark: false },
  { key: "taipei",    year: "2025", role: "Panelist", event: "Ladies that UX Taipei",         location: "Taipei, TW",    region: "Taiwan",    topic: "Driving Organisational Change and Creating Meaningful Impact",     link: null,                                               img: awardsTaipei,  caption: "2025 @ Taipei, TW",  dark: false },
  { key: "fusecon",   year: "2025", role: "Panelist", event: "FUSECON 2025",                  location: "Malaysia",      region: "Malaysia",  topic: "Mental Health: From Awareness to Action",                          link: null,                                               img: awardsFuseCon, img2: awardsFuseConPanelist, caption: "FUSECON 2025, MY",    dark: true  },
  { key: "fusecon-2024", year: "2024", role: "Panelist", event: "FUSECON 2024",               location: "Malaysia",      region: "Malaysia",  topic: "UX in Malaysia & beyond",                                          link: null,                                               img: awardsFuseCon2024, caption: "FUSECON 2024, MY", dark: false },
  { key: "figma-kl",  year: "2024", role: "Panelist", event: "Friends of Figma KL × adplist", location: "KL, MY",        region: "Malaysia",  topic: "The Journey to Senior Designer: Skills, Insights and Experiences", link: null,                                               img: awardsFoF2024Desktop, caption: "Friends of Figma KL × adplist, 2024", dark: false },
  { key: "design-kl", year: "2023", role: "Speaker",  event: "Design Leadership Kuala Lumpur",location: "KL, MY",        region: "Malaysia",  topic: "Synergy for Sustainable Growth: Empowering UX Team",               link: null,                                               img: awardsDesignKL, img2: awardsDesignKLTiff, caption: "Design Leadership KL 2023", dark: false },
];

// ─── Speaking event accordion row ──────────────────────────────────
// Title/topic always sit on top as plain text (never overlaid on the
// photo). Expanding reveals the image + watch link below, in place —
// no navigation away from the page. Rows with neither an image nor a
// link render as a static (non-expandable) row.
function SpeakingEventRow({
  ev,
  isFirst,
  isDark,
  fg,
  sub,
  brd,
  stickyTop = 0,
}: {
  ev: typeof SPEAKING_EVENTS[number];
  isFirst: boolean;
  isDark: boolean;
  fg: string;
  sub: string;
  brd: string;
  stickyTop?: number;
}) {
  const { open, toggle } = useAccordionItem(`speaking-event:${ev.key}`);
  const expandable = Boolean(ev.img || ev.link || ev.youtubeId);

  return (
    <div style={{ borderTop: isFirst ? "none" : `1px solid ${brd}` }}>
      <button
        onClick={() => expandable && toggle()}
        className="relative w-full flex items-start gap-3 text-left px-6 md:px-20 py-3 md:py-7"
        style={{
          cursor: expandable ? "pointer" : "default",
          position: open ? "sticky" : "relative",
          top: open ? stickyTop : undefined,
          zIndex: open ? 15 : undefined,
          background: open ? (isDark ? "rgba(40,40,40,0.82)" : "rgba(255,255,255,0.82)") : "transparent",
          backdropFilter: open ? "blur(16px)" : "none",
          WebkitBackdropFilter: open ? "blur(16px)" : "none",
          boxShadow: open ? (isDark ? "0 2px 16px rgba(0,0,0,0.2)" : "0 2px 16px rgba(0,0,0,0.06)") : "none",
          borderLeft: open ? `2px solid ${isDark ? "rgba(178,147,59,0.5)" : "rgba(178,147,59,0.35)"}` : "2px solid transparent",
          transition: "background 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease, border-left-color 0.35s ease",
        }}
        onMouseEnter={e => expandable && !open && (e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)")}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = "transparent"; }}
      >
        {expandable && (
          <Plus
            size={16}
            strokeWidth={1}
            style={{
              color: GOLD,
              flexShrink: 0,
              marginTop: 6,
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        )}
        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-6 min-w-0">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="md:hidden font-['Avenir',sans-serif] font-light text-[0.7rem]" style={{ color: sub }}>{ev.year} · {ev.region}</span>
            <p className="font-['Avenir',sans-serif] font-medium" style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.4rem)", color: fg }}>
              {ev.role} — {ev.event}
            </p>
            <p className="font-['Avenir',sans-serif] font-light text-sm" style={{ color: sub }}>{ev.topic}</p>
          </div>
          <span className="hidden md:block flex-shrink-0 font-['Avenir',sans-serif] font-light text-[0.7rem] text-right" style={{ color: sub }}>{ev.year} · {ev.region}</span>
        </div>
      </button>

      {expandable && (
          <div className="overflow-hidden" style={{ maxHeight: open ? 1400 : 0, opacity: open ? 1 : 0, transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease" }}>
          <div className="px-6 md:px-20 pb-8 md:pb-8">
            {ev.img && ev.img2 ? (
              // Two images side by side (stacked on mobile) — portrait shots
              // use object-contain so they fit the row height instead of
              // being cropped/zoomed into.
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative w-full md:w-2/5 h-[280px] md:h-[420px] overflow-hidden flex-shrink-0" style={{ background: "transparent" }}>
                  <img src={ev.img} alt={`${ev.event} — ${ev.topic}`} className="absolute inset-0 w-full h-full object-contain" />
                  <div className="md:hidden absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "transparent" }} />
                </div>
                <div className="relative w-full md:w-3/5 h-[220px] md:h-[420px] overflow-hidden" style={{ background: "transparent" }}>
                  <img src={ev.img2} alt={`${ev.event} panel discussion`} className="absolute inset-0 w-full h-full object-contain" />
                  <div className="md:hidden absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "transparent" }} />
                </div>
              </div>
            ) : ev.img && (
              // Desktop: capped to 50% of viewport height, image keeps its
              // natural aspect ratio (object-contain, auto width) instead
              // of being cropped to fill — mobile keeps the original
              // clamp()-based crop/cover treatment.
              <div className="relative w-full overflow-hidden h-[clamp(220px,40vw,480px)] md:h-[70vh] md:flex md:items-center md:justify-center" style={{ background: "transparent" }}>
                <img src={ev.img} alt={`${ev.event} — ${ev.topic}`}
                  className={`absolute inset-0 w-full h-full ${ev.portrait ? "object-contain" : "object-cover"} md:static md:inset-auto md:w-auto md:h-full md:max-w-full md:object-contain`}
                  style={ev.portrait ? undefined : { objectPosition: ev.dark ? "center 30%" : "center" }} />
                <div className="md:hidden absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "transparent" }} />
              </div>
            )}
            {ev.youtubeId && (
              <div className="relative w-full overflow-hidden mt-5 md:w-auto md:h-[70vh] md:mx-auto md:max-w-full" style={{ aspectRatio: "16 / 9", background: "#000" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${ev.youtubeId}`}
                  title={`${ev.event} — ${ev.topic}`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}
            {ev.link && (
              <a href={ev.link} target="_blank" rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-2 mt-5 font-['Avenir',sans-serif] font-medium text-xs uppercase tracking-[0.15em] cursor-pointer"
                style={{ color: GOLD }}>
                Watch on YouTube
                <ExternalLink size={13} strokeWidth={1} style={{ opacity: 0.7, flexShrink: 0 }} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Women in Digital accordion row ────────────────────────────────
// Default-collapsed, same header pattern as SpeakingEventRow. Expanded
// panel layers the finalist-list graphic on top of the portrait photo
// (matches the Figma composition) — portrait fits the row's height via
// object-contain rather than being cropped/zoomed.
function WomenInDigitalRow({ isDark, fg, sub }: { isDark: boolean; fg: string; sub: string }) {
  const { open, toggle } = useAccordionItem("women-digital");

  return (
    <div>
      <button
        onClick={toggle}
        className="relative w-full flex items-start gap-3 text-left px-6 md:px-20 py-3 md:py-7 transition-colors duration-200"
        style={{ cursor: "pointer", background: "transparent" }}
        onMouseEnter={e => (e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)")}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      >
        <Plus
          size={16}
          strokeWidth={1}
          style={{
            color: GOLD,
            flexShrink: 0,
            marginTop: 6,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-6 min-w-0">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="md:hidden font-['Avenir',sans-serif] font-light text-[0.7rem]" style={{ color: sub }}>2025 · Australia</span>
            <p className="font-['Museo',sans-serif] font-light" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", color: fg }}>
              UX Leader of the Year — Finalist
            </p>
            <p className="font-['Avenir',sans-serif] font-light text-sm" style={{ color: sub }}>Women in Digital National Awards</p>
          </div>
          <span className="hidden md:block flex-shrink-0 font-['Avenir',sans-serif] font-light text-[0.7rem] text-right" style={{ color: sub }}>2025 · Australia</span>
        </div>
      </button>

      <div className="overflow-hidden" style={{ maxHeight: open ? 820 : 0, opacity: open ? 1 : 0, transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease" }}>
        <div className="px-6 md:px-20 pb-8">
            <div className="relative w-full" style={{ height: "clamp(320px, 55vw, 620px)" }}>
            {/* Base layer: portrait photo, fit to height — not cropped/zoomed */}
            <img src={awardsWomenDigital} alt="Tiffany Chew at Women in Digital Awards 2025"
              className="absolute inset-0 w-full h-full object-contain" style={{ background: "transparent", zIndex: 1 }} />
            {/* Overlay layer: finalist-list card, floated on top per Figma layout */}
            <div className="absolute left-1/2"
              style={{
                bottom: "5%", transform: "translateX(-50%)",
                width: "min(90%, 460px)", zIndex: 2,
                background: "white", borderRadius: 16, padding: 8,
                boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
              }}>
              <img src={awardsFinalistCard} alt="The 2025 UX Leader of the Year Finalists" className="w-full" style={{ borderRadius: 10, display: "block" }} />
            </div>
          </div>
          <a href="https://womenindigital.org/women-in-digital-awards/women-in-digital-awards-2025-finalists/" target="_blank" rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 mt-5 font-['Avenir',sans-serif] font-medium text-xs uppercase tracking-[0.15em] cursor-pointer"
            style={{ color: GOLD }}>
            View official finalists page
            <ExternalLink size={13} strokeWidth={1} style={{ opacity: 0.7, flexShrink: 0 }} />
          </a>
        </div>
      </div>
    </div>
  );
}

// `embedded` — see WorkPage's comment; same idea when this renders
// inline inside the homepage's horizontal scroll-snap track.
function AwardsSpeakingPage({
  onNavigate,
  embedded = false,
  isActive = true,
  compact = false,
  headerScrolled = false,
}: {
  onNavigate: (p: Page) => void;
  embedded?: boolean;
  isActive?: boolean;
  compact?: boolean;
  headerScrolled?: boolean;
}) {
  const isDark = useContext(DarkModeCtx);
  const bg = "transparent";
  const fg = GOLD;
  const sub = isDark ? "rgba(255,255,255,0.55)" : DIM;
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  // Standalone (non-embedded) visits — reached directly via nav rather than
  // the homepage swipe-track — get their own cap/scroll handling: only the
  // 4 latest items show until "View more" is clicked, and the frosted
  // header + footer nav only switch on once the user actually scrolls.
  // (Embedded/mobile homepage capping is handled one level up in HomePage.)
  const [selfExpanded, setSelfExpanded] = useState(false);
  const [selfScrolled, setSelfScrolled] = useState(false);
  const capped = !embedded && !selfExpanded;
  const scrolled = embedded ? headerScrolled : selfScrolled;
  const visibleEvents = capped ? SPEAKING_EVENTS.slice(0, 3) : SPEAKING_EVENTS;

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const content = (
    <>

      {/* Page heading — sticky so it stays visible while the rows below
          scroll past it, shrinking once the mobile "View more" cap lifts.
          Transparent at rest so the multicolour background shows through;
          only once the user scrolls does it pick up a frosted (blurred,
          80% opacity) backdrop so the now-passing content reads cleanly
          behind it. */}
      <div ref={headerRef} className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10"
        style={{
          background: scrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${scrolled ? brd : "transparent"}`,
          paddingBottom: compact ? 16 : undefined,
          transition: "padding-bottom 0.35s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}>
        <motion.p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em] mb-2" style={{ color: GOLD }}
          initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }} transition={{ duration: 0.5 }}>
          Recognition &amp; voice in community
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-[3rem] md:text-[4rem]"
          style={{ fontSize: compact ? "1.5rem" : undefined, lineHeight: 1.05, color: fg, transition: "font-size 0.35s ease" }}
          initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -16 }} transition={{ duration: 0.55, delay: 0.06 }}>
          Awards &amp; Speaking
        </motion.h1>
      </div>

      {/* Women in Digital — default-collapsed accordion, matches SpeakingEventRow */}
      <div style={{ paddingTop: 24 }}>
        <WomenInDigitalRow isDark={isDark} fg={fg} sub={sub} />
      </div>

      {/* Speaking events */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="px-6 md:px-20 pt-8 md:pt-12 pb-4 md:pb-6">
          <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em]" style={{ color: GOLD }}>Speaking</p>
        </div>
        {visibleEvents.map((ev, i) => (
          <SpeakingEventRow key={ev.key} ev={ev} isFirst={i === 0} isDark={isDark} fg={fg} sub={sub} brd={brd} stickyTop={headerHeight} />
        ))}
      </div>

      <div style={{ height: 96 }} />
    </>
  );

  if (embedded) {
    return (
      <div className="relative w-full" style={{ minHeight: "100%", background: bg }}>
        {content}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full" style={{ background: bg }}>
      <div
        className="absolute inset-0 scrollbar-hide"
        style={{
          overflowY: capped ? "hidden" : "auto",
          WebkitOverflowScrolling: "touch",
        }}
        onScroll={!capped ? (e) => setSelfScrolled(e.currentTarget.scrollTop > 24) : undefined}
      >
        {content}
      </div>

      {capped && (
        <>
          <div className="pointer-events-none fixed inset-x-0 bottom-0" style={{
            height: 260, zIndex: 25,
            background: isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
          }} />
          <button
            onClick={() => setSelfExpanded(true)}
            className="fixed left-1/2 font-['Avenir',sans-serif] font-medium text-xs uppercase tracking-[0.15em] cursor-pointer"
            style={{ transform: "translateX(-50%)", bottom: "calc(8% + env(safe-area-inset-bottom))", color: GOLD, background: "none", border: "none", zIndex: 26 }}>
            View more
          </button>
        </>
      )}

      {/* Footer nav only switches on once the user has scrolled past the
          heading — kept hidden (rather than unmounted) before that so it
          fades in instead of popping in abruptly. */}
      <div style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? "auto" : "none", transition: "opacity 0.3s ease" }}>
        <StickyPageNav activePage="awards" onNavigate={onNavigate} />
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
    heroImg: awardsFuseCon2024, additionalImg: null, link: null, dark: false, finalistLink: null,
  },
  "figma-kl": {
    pageLabel: "Panelist @ Friends of Figma KL × adplist",
    year: "2024", role: "Panelist", event: "Friends of Figma KL × adplist", location: "Kuala Lumpur, MY",
    topic: "The Journey to Senior Designer: Skills, Insights and Experiences",
    heroImg: awardsFoF2024Desktop, mobileImg: awardsFoF2024Mobile, additionalImg: null, link: null, dark: false, finalistLink: null,
  },
  "design-kl": {
    pageLabel: "Speaker @ Design Leadership KL",
    year: "2023", role: "Speaker", event: "Design Leadership Kuala Lumpur", location: "Kuala Lumpur, MY",
    topic: "Synergy for Sustainable Growth: Empowering UX Team",
    heroImg: awardsDesignKL, additionalImg: awardsDesignKLTiff, link: null, dark: false, finalistLink: null,
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
  const bg = ev.dark ? "#030303" : "transparent";
  const textColor = GOLD;
  const subColor = (ev.dark || globalDark) ? "rgba(255,255,255,0.55)" : DIM;

  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: bg }}>

      {/* Back bar */}
      <div className="relative flex items-center gap-4 px-6 md:px-20 pt-8 pb-6"
        style={{ borderBottom: `1px solid ${ev.dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}` }}>
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
            src={(ev as any).mobileImg ? (ev as any).mobileImg : ev.heroImg}
            alt={ev.pageLabel}
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            style={{ objectPosition: "center" }}
          />
          <img
            src={ev.heroImg}
            alt={ev.pageLabel}
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
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
        <motion.p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-[0.22em] mb-2"
          style={{ color: GOLD }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {ev.year} · {ev.role} · {ev.location}
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light mb-5 text-[3rem] md:text-[4rem]"
          style={{ lineHeight: 1.05, color: textColor, maxWidth: "20ch" }}
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
          {ev.event}
        </motion.h1>
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

      <div style={{ height: 96 }} />
      <StickyPageNav activePage="awards" onNavigate={onNavigate} />
    </div>
  );
}

// (BusinessCasePage implemented further below)

// Passcode-protected business case page
// Migrate the Wix project content into a local React component so it
// can be rendered inline after the passcode is entered.
function BusinessCaseContent() {
  const isDark = useContext(DarkModeCtx);
  const fg = GOLD;
  const sub = isDark ? "rgba(255,255,255,0.75)" : DIM;
  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', background: 'transparent' }}>
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-10">
        <h1 className="font-['Museo',sans-serif] font-light" style={{ fontSize: '2.4rem', color: fg }}>eCommerce: Behavioural UX Design</h1>
        <div style={{ marginTop: 8 }}>
          <p className="font-['Avenir',sans-serif] font-light" style={{ color: sub }}>Goal — Increase Checkout Rate</p>
          <p className="font-['Avenir',sans-serif] font-light" style={{ color: sub, marginTop: 6 }}>Year: Designed & tested in 2025 · Client: Cotton On Group</p>
          <p className="font-['Avenir',sans-serif] font-light" style={{ color: sub, marginTop: 6 }}>My Role: Product Design Lead · Team: 1</p>
          <p className="font-['Avenir',sans-serif] font-light" style={{ color: sub, marginTop: 6 }}>Scope: Design Workshop Facilitation, research analysis, Business Website</p>
        </div>

        <section style={{ marginTop: 28 }}>
          <h2 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.25rem' }}>The Solution</h2>
          <p className="font-['Avenir',sans-serif] font-light" style={{ color: isDark ? 'rgba(255,255,255,0.85)' : INK, marginTop: 8 }}>
            From analytics and session data we identified that promo code interactions were the most-clicked element on the bag page; users
            were leaving the site to search for codes which broke checkout intent. The intervention surfaced account/login and voucher selectors
            to reduce off-site search and make available vouchers discoverable at the point of checkout.
          </p>
          <div style={{ marginTop: 18 }}>
            <img src={foggModel} alt="Fogg behavioural model" style={{ width: '100%', maxWidth: 760, display: 'block', borderRadius: 8 }} />
            <p className="font-['Avenir',sans-serif] font-light" style={{ color: sub, marginTop: 8 }}>Image: Fogg behavioural model — rationale for intervention.</p>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <h3 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1rem' }}>AB testing</h3>
          <p className="font-['Avenir',sans-serif] font-light" style={{ color: sub, marginTop: 8 }}>
            Group A: legacy design (promo code hidden). Group B: surfaced login and voucher selectors. The new flow reduced users leaving the
            funnel to search for promo codes and improved checkout conversions for users with vouchers.
          </p>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
            <img src={interventionImg} alt="The intervention" style={{ width: '100%', borderRadius: 8 }} />
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <h4 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1rem' }}>Results</h4>
          <div style={{ marginTop: 8 }}>
            <p className="font-['Avenir',sans-serif] font-medium" style={{ color: fg }}>Revenue +57% · Checkout rate 2× · Conversion rate +0.28%</p>
            <p className="font-['Avenir',sans-serif] font-light" style={{ color: sub, marginTop: 8 }}>Measured from checkout entry to purchase.</p>
            <div style={{ marginTop: 12 }}>
              <img src={graphResult} alt="graph result" style={{ width: '100%', maxWidth: 720, borderRadius: 8 }} />
            </div>
          </div>
        </section>

        <div style={{ height: 96 }} />
      </div>
    </div>
  );
}

function BusinessCasePage({ onBack }: { onBack: () => void }) {
  const isDark = useContext(DarkModeCtx);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const PASSCODE = "tifffolio";

  const submit = () => {
    if (value.trim() === PASSCODE) {
      setError("");
      setUnlocked(true);
    } else {
      setError("Incorrect passcode");
    }
  };

  if (unlocked) return <BusinessCaseContent />;

  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-6" style={{ borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
        <button onClick={onBack}
          className="flex items-center gap-2 font-['Avenir',sans-serif] font-light text-[0.65rem] uppercase tracking-[0.2em] mb-4 cursor-pointer"
          style={{ color: GOLD }}>
          <ChevronLeft size={12} strokeWidth={1.5} /> BUSINESS ACUMEN
        </button>
        <h1 className="font-['Museo',sans-serif] font-light" style={{ fontSize: '2.25rem', lineHeight: 1.05, color: GOLD, margin: 0 }}>eCommerce: Behavioural UX Design</h1>
      </div>

      <div className="px-6 md:px-20 pt-8" style={{ maxWidth: 900 }}>
        <div style={{ marginTop: 12, padding: '8px 0' }}>
          <p className="font-['Avenir',sans-serif] font-light" style={{ color: isDark ? 'rgba(255,255,255,0.85)' : INK }}>This page requires passcode</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
            <label className="font-['Avenir',sans-serif] font-light text-xs uppercase" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : DIM, minWidth: 80 }}>PASSCODE *</label>
            <div style={{ flex: 1, position: 'relative' }}>
              <input
                aria-label="Passcode"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                placeholder=""
                className="w-full"
                style={{ background: 'transparent', border: 'none', borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.12)'}`, padding: '8px 6px', color: isDark ? 'white' : INK, fontSize: '1rem', outline: 'none' }}
              />
            </div>
            <div style={{ width: 96, textAlign: 'right' }}>
              <button onClick={submit} className="font-['Avenir',sans-serif] font-medium" style={{ background: isDark ? 'transparent' : '#fff', border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`, padding: '12px 10px', cursor: 'pointer', borderRadius: 2 }}>Submit</button>
            </div>
          </div>

          {error && <p className="font-['Avenir',sans-serif] font-light" style={{ color: '#E05C5C', marginTop: 12 }}>{error}</p>}
          <div style={{ height: 120 }} />
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage]           = useState<Page>("home");
  const [detailKey, setDetailKey] = useState<string | null>(null);
  const [isDark, setIsDark]       = useState(false);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  // Reset the shared accordion state whenever the page changes so a
  // stale open id from the previous page can't accidentally collide.
  useEffect(() => { setOpenAccordionId(null); }, [page]);

  const navigateToEvent = (key: string) => {
    setDetailKey(key);
    setPage("speaking");
  };

  const navigateBack = () => {
    setPage("awards");
    setDetailKey(null);
  };

  // Remembers whether Work-detail was opened from the standalone /work
  // route or from the homepage's embedded Work section, so "back"
  // returns to the same context — including, for the homepage case,
  // jumping straight back to the Work section so horizontal swipe
  // between sections keeps working immediately.
  const [workDetailOrigin, setWorkDetailOrigin] = useState<Page>("work");
  const workSectionIdx = SECTIONS.findIndex(s => s.key === "work");
  const [homeInitialIdx, setHomeInitialIdx] = useState(0);

  const navigateToWorkDetail = (key: string) => {
    setWorkDetailOrigin(page === "home" ? "home" : "work");
    setDetailKey(key);
    setPage("workDetail");
  };

  const navigateBackFromWork = () => {
    if (workDetailOrigin === "home") setHomeInitialIdx(workSectionIdx);
    setPage(workDetailOrigin);
    setDetailKey(null);
  };

  // General "back to home" handler for every other standalone page
  // (Awards, Coaching, Connect, Speaking detail) — restores horizontal
  // swipe by jumping straight to whichever section that page
  // corresponds to, instead of always resetting to the hero.
  const navigateGeneral = (target: Page) => {
    if (target === "home") {
      const idx = SECTIONS.findIndex(s => s.page === page);
      setHomeInitialIdx(idx > 0 ? idx : 0);
    }
    setPage(target);
  };

  const motionKey = page === "speaking" ? `speaking:${detailKey}` : page === "workDetail" ? `workDetail:${detailKey}` : page;

  const toggleDark = useCallback(() => setIsDark(d => !d), []);

  return (
    <DarkModeCtx.Provider value={isDark}>
    <DarkModeToggleCtx.Provider value={toggleDark}>
    <AccordionCtx.Provider value={{ openId: openAccordionId, setOpenId: setOpenAccordionId }}>
    <div className="relative w-screen h-dvh overflow-hidden" style={{ background: isDark ? "#282828" : "#f8f7f5" }}>
      {/* Persistent background — mounted once at the App root so its drift
          animation never resets on page navigation. Only the content above
          it (motion.div below) transitions between pages. */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {isDark ? <AnimatedGradientBg /> : <LightGradientBlobs />}
      </div>
      <DarkModeToggle isDark={isDark} onToggle={toggleDark} />
      <motion.div key={motionKey} className="absolute inset-0" style={{ zIndex: 1 }}
        initial={page === "workDetail" ? { opacity: 1, x: "100%" } : { opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: page === "workDetail" ? 0.4 : 0.45, ease: [0.4, 0, 0.2, 1] }}>
        {page === "home"     && <HomePage onNavigate={navigateGeneral} onOpenDetail={navigateToWorkDetail} initialIdx={homeInitialIdx} />}
        {page === "work"     && <div className="absolute inset-0 overflow-y-auto"><WorkPage onNavigate={navigateGeneral} onOpenDetail={navigateToWorkDetail} /></div>}
        {page === "awards"   && <div className="absolute inset-0"><AwardsSpeakingPage onNavigate={navigateGeneral} /></div>}
        {page === "coaching" && <div className="absolute inset-0 overflow-y-auto"><CoachingPage onNavigate={navigateGeneral} /></div>}
        {page === "connect"  && <div className="absolute inset-0 overflow-y-auto"><ConnectPage onNavigate={navigateGeneral} /></div>}
        {page === "speakingInquiry" && (
          <SpeakingInquiryContainer onBack={() => {
            const connectIdx = SECTIONS.findIndex(s => s.key === "connect");
            setHomeInitialIdx(connectIdx > 0 ? connectIdx : 0);
            setPage("home");
          }} />
        )}
        {page === "speaking" && detailKey && (
          <div className="absolute inset-0 overflow-y-auto">
            <SpeakingDetailPage eventKey={detailKey} onBack={navigateBack} onNavigate={navigateGeneral} />
          </div>
        )}
        {page === "workDetail" && detailKey && (
          <div className="absolute inset-0 overflow-y-auto">
            <WorkDetailPage cardKey={detailKey} onBack={navigateBackFromWork} onNavigate={navigateGeneral} />
          </div>
        )}
        {page === "businessCase" && (
          <div className="absolute inset-0 overflow-y-auto">
            <BusinessCasePage onBack={() => setPage('work')} />
          </div>
        )}
      </motion.div>
    </div>
    </AccordionCtx.Provider>
    </DarkModeToggleCtx.Provider>
    </DarkModeCtx.Provider>
  );
}
