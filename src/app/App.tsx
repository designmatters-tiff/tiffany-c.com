import { useState, useEffect, useLayoutEffect, useRef, useCallback, createContext, useContext, Fragment } from "react";
import { motion } from "motion/react";
import { Linkedin, Instagram, X, ExternalLink, Plus, ChevronRight, ChevronLeft } from "lucide-react";

import ahPersona from "@/work/case/applehealth/userpersona.avif";
import ahProblem from "@/work/case/applehealth/health problem.avif";
import ahValues from "@/work/case/applehealth/new values.avif";
import ahUserflow from "@/work/case/applehealth/userflow.avif";
import ahPriority from "@/work/case/applehealth/Prioritisation.avif";

import kaiHero from "@/work/case/kai/kai-mobile-01-hero.avif";
import kaiPersona from "@/work/case/kai/kai-mobile-02-persona-mr-tan.avif";
import kaiJourney from "@/work/case/kai/kai-mobile-03-whiteboard-user-feedback.avif";
import kaiSketch from "@/work/case/kai/kai-mobile-04-solution-sketch-selected.avif";
import kaiHeatmap from "@/work/case/kai/kai-mobile-05-heatmap-vote.avif";
import kaiTestFlow from "@/work/case/kai/kai-mobile-06-user-testing-flow.avif";
import kaiProto1 from "@/work/case/kai/kai-mobile-07-proto-1.avif";
import kaiProto2 from "@/work/case/kai/kai-mobile-08-proto-2.avif";
import kaiTesterNotes from "@/work/case/kai/kai-mobile-09-tester-whiteboard-notes.avif";
import kaiZoneFlow from "@/work/case/kai/kai-mobile-10-create-zone-flow.avif";
import kaiHomeScreen from "@/work/case/kai/kai-mobile-11-home-screen.avif";
import kaiHome from "@/work/case/kai/kai-mobile-12-home.avif";
import kaiControls from "@/work/case/kai/kai-mobile-13-machine-controls.avif";
import kaiSchedule from "@/work/case/kai/kai-mobile-14-schedule-chart.avif";

import awardsWomenDigital from "@/imports/AwardsSpeaking/WID-tiff2025.avif";
import awardsFinalistCard from "@/imports/AwardsSpeaking/WID-2.avif";
// Desktop gets a far larger capture of the same finalists page — the mobile
// one is 799px wide and was being upscaled past legibility in the wide column.
import awardsFinalistCardWide from "@/imports/AwardsSpeaking/WID-finalists-desktop.avif";
import awardsFuseConPanelist from "@/imports/AwardsSpeaking/FuseCon_panelist.avif";
import awardsFuseCon from "@/imports/AwardsSpeaking/Fusecon2025.avif";
import awardsTaipei from "@/imports/AwardsSpeaking/LTUX Taipei.avif";
import awardsRotterdam from "@/imports/AwardsSpeaking/ux-rotterdam.avif";
import awardsFuseCon2024 from "@/imports/AwardsSpeaking/FUSECON 2024/Fusecon2024.avif";
import awardsFoF2024Desktop from "@/imports/AwardsSpeaking/FoF 2024/desktop_fof2024.avif";
import awardsFoF2024Mobile from "@/imports/AwardsSpeaking/FoF 2024/mobile_fof2024.avif";
import awardsDesignKL from "@/imports/AwardsSpeaking/Design Leadership KL/DLKL2023.avif";
import awardsDesignKLTiff from "@/imports/AwardsSpeaking/Design Leadership KL/DLKL2023-tiff.avif";
import profilePhoto from "@/imports/Profile/tiff-headshot.avif";
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

// Each section's heading takes its colour from the bottom nav's gradient at
// that section's own position along the bar, so the page and the nav agree.
// Sampled rather than hardcoded, so the two can't drift apart if NAV_GRADIENT
// is ever retuned. The ends are exact: the hero sits on the gold end, Connect
// on the pink end.
const NAV_STOPS: [number, [number, number, number]][] = [
  [0,   [178, 147, 59]],   // #B2933B gold
  [0.5, [98, 129, 183]],   // #6281B7 blue
  [1,   [194, 122, 166]],  // #C27AA6 pink
];

function gradientAt(t: number): string {
  const x = Math.min(1, Math.max(0, t));
  for (let i = 0; i < NAV_STOPS.length - 1; i++) {
    const [t0, c0] = NAV_STOPS[i];
    const [t1, c1] = NAV_STOPS[i + 1];
    if (x <= t1) {
      const f = t1 === t0 ? 0 : (x - t0) / (t1 - t0);
      return "#" + c0
        .map((v, k) => Math.round(v + (c1[k] - v) * f).toString(16).padStart(2, "0"))
        .join("");
    }
  }
  return NAV_GRADIENT;
}

// Deck order — the same order the nav lists them in.
// Nunito Sans 900 is the only heavy weight shipped. It earns its
// place on three things only: eyebrow labels, the figures in metrics, and the
// active item in navigation. Never on a run of running text — it is a display
// weight, and Museo 300 remains the display face for headings.
//
// `Figures` picks the numbers out of a sentence so a proof point carries the
// weight of its claim while the words around it stay at body weight.
// The \b before the digit keeps it off the "2" in B2B/B2C, and a bare
// four-digit number is a year, not a metric, so it stays at body weight too.
const FIGURE = /([+-]?\b\d[\d.,]*(?:\s?[%×])?)/g;
const isMetric = (s: string) => /[%×]/.test(s) || s.replace(/\D/g, "").length <= 3;

function Figures({ children }: { children: string }) {
  return (
    <>
      {children.split(FIGURE).map((part, i) =>
        // split() with one capture group puts the matches at the odd indices
        i % 2 === 1 && isMetric(part)
          ? <span key={i} className="font-black">{part}</span>
          : part,
      )}
    </>
  );
}

const SECTION_ORDER = ["about", "work", "awards", "testimonials", "coaching", "connect"] as const;

// The first half of the deck stays on GOLD. Sampled, those positions land in
// the desaturated gold→blue crossover and read as muddy olive, and this is the
// half a hiring manager reads — the brand colour serves it better than a
// faithful sample would. The gradient takes over from Testimonial onward and
// still ends exactly on the pink end at Connect.
const GRADIENT_HEADINGS = new Set(["testimonials", "coaching", "connect"]);


const HEADING_COLOUR: Record<string, string> = Object.fromEntries(
  SECTION_ORDER.map((key, i) => [
    key,
    GRADIENT_HEADINGS.has(key) ? gradientAt(i / (SECTION_ORDER.length - 1)) : GOLD,
  ]),
);

type Page = "home" | "work" | "workDetail" | "awards" | "speaking" | "coaching" | "connect" | "speakingInquiry" | "businessCase" | "kaiCase" | "appleHealthCase" | "testimonials";

// ─── Dark mode context ────────────────────────────────────────────
const DarkModeCtx = createContext(false);
const DarkModeToggleCtx = createContext<() => void>(() => {});

// Bright/dark is hidden until the bright theme is finished. Only the control
// is gone — DarkModeCtx, the toggle component and every isDark branch stay
// exactly as they are, so flipping this back to true reinstates the feature
// with no other change.
const THEME_TOGGLE_ENABLED = false;

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
          className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.1em]"
          style={{ color: (!isDark || hoverWord === "bright") ? activeColor : dimColor, transition: "color 0.3s" }}>
          Bright
        </span>
        <span className="inline-block" style={{ width: 1, height: 12, background: dimColor, transform: "rotate(20deg)" }} />
        <span ref={darkRef}
          onMouseEnter={() => setHoverWord("dark")}
          onMouseLeave={() => setHoverWord(null)}
          className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.1em]"
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
    // flexShrink: 0 — the mark sits as a flex child in the hero and the mobile
    // menu, and without this a short viewport squeezes it: measured 70x98 at
    // 1440x900 but 70x17 at 1280x760, i.e. the logo silently flattening to a
    // sliver on smaller laptops.
    <svg width={size} height={Math.round(size * 1.4)} viewBox="0 0 80 112" fill="none"
      style={{ flexShrink: 0 }}>
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
  // homepage's own track — Work/Awards & Speaking slides already embed
  // the real page, so there's no need to break out to a separate
  // top-level route. PageBottomNav (used on standalone pages with no
  // track to scroll) keeps the page-aware branching below.
  forceScroll?: boolean;
}) {
  const isDark = useContext(DarkModeCtx);
  // read unconditionally — the toggle below is behind a flag, and a hook
  // must not sit inside that branch
  const toggleDark = useContext(DarkModeToggleCtx);
  const itemActive = GOLD;
  const rowBorder  = isDark ? "rgba(255,255,255,0.15)" : "rgba(17,17,17,0.12)";
  const closeColor = isDark ? "white" : INK;
  const menuBg = isDark ? "#282828" : "#f8f7f5";
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
      <div className="absolute inset-0" style={{ background: menuBg }} />

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

      {/* Footer — close on the left, sitting where the hamburger that opened
          the menu sits in the collapsed nav, so the control doesn't jump
          across the screen between states. Bright/dark took the right until
          THEME_TOGGLE_ENABLED was switched off. */}
      <div className="relative z-10 px-6 pb-8 flex items-center justify-between">
        <button onClick={onClose} aria-label="Close menu" style={{ background: "none", border: "none", padding: 0 }}>
          <X size={20} strokeWidth={1} color={closeColor} />
        </button>
        {THEME_TOGGLE_ENABLED && (
          <DarkModeToggle isDark={isDark} onToggle={toggleDark} variant="inline" />
        )}
      </div>
    </motion.div>
  );
}

// ─── Speaking inquiry form ────────────────────────────────────────
// Formspree, posted as JSON from the browser. Submissions land in the inbox
// the form is registered to; Formspree confirms that address before it starts
// forwarding, so the first real submission is worth sending yourself.
const SPEAKING_FORM_ENDPOINT = "https://formspree.io/f/xzebweln";

// The eCommerce prototype, as an embed. Figma serves embeds from
// embed.figma.com — the www.figma.com share link renders its own UI and
// refuses to frame. The `t=` share token from the copied link is deliberately
// left off: it's tied to a session, so the embed relies on the prototype's own
// "anyone with the link can view" setting instead of an expiring token.
const ECOMMERCE_PROTO_EMBED =
  "https://embed.figma.com/proto/hy4NQmlE9WX1sCHaVD9aNh/Portfolio-2026" +
  "?node-id=25-521&starting-point-node-id=25%3A521&page-id=25%3A519" +
  "&scaling=min-zoom&content-scaling=fixed&embed-host=share";

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

// Speaking Inquiry is a full 2nd-level page (not an inline accordion).
// It carries the same gradient bottom nav as every other page, shown as
// "Connect / Speaking Inquiry" and shrinking on scroll — see StickyPageNav.
function SpeakingInquiryContainer({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={scrollRef} className="absolute inset-0 overflow-y-auto"
      onScroll={e => setHeaderScrolled(e.currentTarget.scrollTop > 24)}>
      <SpeakingInquiryPage onBack={onBack} onNavigate={onNavigate} headerScrolled={headerScrolled}
        scrollToTop={() => scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })} />
    </div>
  );
}

function SpeakingInquiryPage({ onBack, onNavigate, headerScrolled = false, scrollToTop }: { onBack: () => void; onNavigate: (p: Page) => void; headerScrolled?: boolean; scrollToTop?: () => void }) {
  const isDark = useContext(DarkModeCtx);
  const accent = "#9B5A88";
  const itemColor = isDark ? "white" : INK;
  const sub = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fields, setFields] = useState<Record<string, string>>({});
  // Held separately so the confirmation can name what was sent after the
  // fields themselves have been cleared for a second inquiry.
  const [sentSummary, setSentSummary] = useState<{ topic: string; event: string }>({ topic: "", event: "" });

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"}`,
    outline: "none",
    padding: "8px 0",
    fontSize: "0.9rem",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 300,
    color: itemColor,
    transition: "border-color 0.2s",
  };

  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));

  // Validation runs on submit rather than on change, so the form stays quiet
  // until the visitor has actually tried to send it.
  const [showErrors, setShowErrors] = useState(false);
  const invalid = (name: string) => {
    const f = FORM_FIELDS.find(x => x.name === name);
    if (!f) return false;
    const v = (fields[name] ?? "").trim();
    if (f.required && !v) return true;
    // Browser email validation never fires — Submit is a button, not a form
    // submit — so the format check lives here.
    return f.type === "email" && !!v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  };
  const firstInvalid = FORM_FIELDS.find(f => invalid(f.name))?.name;

  const handleSubmit = async () => {
    if (firstInvalid) {
      setShowErrors(true);
      document.getElementById(`sif-${firstInvalid}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(SPEAKING_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: `Speaking Inquiry: ${fields.topic ?? ""}`, ...fields }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setSentSummary({ topic: (fields.topic ?? "").trim() || "your talk", event: (fields.event ?? "").trim() });
      // The Submit button sits at the foot of a form the visitor has
      // scrolled through, so the confirmation has to be brought to them —
      // otherwise the fields vanish and the acknowledgement is left
      // somewhere off-screen above. Nothing navigates on its own: leaving
      // the page is the visitor's choice, not a timer's.
      if (res.ok) scrollToTop?.();
    } catch {
      setStatus("error");
    }
  };

  const sent = status === "sent";

  const resetForm = () => {
    setFields({});
    setShowErrors(false);
    setStatus("idle");
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
          className="flex items-center gap-1.5 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] mb-4 cursor-pointer"
          style={{ color: GOLD }}>
          <ChevronLeft size={12} strokeWidth={1.5} /> Connect
        </button>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg"
          style={{ lineHeight: 1.05, color: GOLD, fontSize: headerScrolled ? "1.5rem" : undefined, transition: "font-size 0.35s ease" }}
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
          Speaking Inquiry
        </motion.h1>
      </div>

      <div className="px-6 md:px-20 pb-10" style={{ maxWidth: 760 }}>
        {sent ? (
          /* Confirmation replaces the form in place. It has to carry its own
             weight — a single grey line where eight fields used to be reads
             as the page having emptied, not as a send having succeeded. */
          <div style={{ maxWidth: '52ch' }}>
            <p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em]"
              style={{ color: DIM, margin: 0 }}>Inquiry sent</p>
            <h2 className="font-['Museo',sans-serif] font-light text-h2 md:text-h2-lg"
              style={{ color: accent, lineHeight: 1.15, margin: '12px 0 0' }}>
              Thank you — this is on its way.
            </h2>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: sub, marginTop: 16 }}>
              Your inquiry about <strong style={{ color: itemColor, fontWeight: 600 }}>{sentSummary.topic}</strong>
              {sentSummary.event ? <> for <strong style={{ color: itemColor, fontWeight: 600 }}>{sentSummary.event}</strong></> : null}
              {" "}has landed in my inbox. I read every one myself and usually reply within a few days.
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12 }}>
              If it's time-sensitive, or you'd rather talk it through, email me directly at{" "}
              <a href="mailto:designmatters.tiff@gmail.com"
                className="link-underline" style={{ color: accent }}>designmatters.tiff@gmail.com</a>.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginTop: 28 }}>
              <button onClick={onBack}
                className="gold-submit-btn px-6 font-['Museo',sans-serif] font-light text-small text-white cursor-pointer"
                style={{ height: 44, border: 'none' }}>
                Back to Connect
              </button>
              <button onClick={resetForm}
                className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em] cursor-pointer"
                style={{ background: 'none', border: 'none', padding: '0 4px', color: DIM }}>
                Send another inquiry
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {FORM_FIELDS.map(f => (
              <div key={f.name} className="flex flex-col gap-1">
                <label
                  htmlFor={`sif-${f.name}`}
                  className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]"
                  style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}
                >
                  {f.label}{f.required && " *"}
                </label>
                <input
                  id={`sif-${f.name}`}
                  type={f.type ?? "text"}
                  required={f.required}
                  aria-invalid={showErrors && invalid(f.name)}
                  value={fields[f.name] ?? ""}
                  onChange={e => set(f.name, e.target.value)}
                  style={{
                    ...inputBase,
                    borderBottomColor: showErrors && invalid(f.name)
                      ? "#E05C5C"
                      : (isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"),
                  }}
                  onFocus={e => (e.target.style.borderBottomColor = accent)}
                  onBlur={e => (e.target.style.borderBottomColor = showErrors && invalid(f.name)
                    ? "#E05C5C"
                    : (isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"))}
                />
              </div>
            ))}
          </div>
        )}

        {showErrors && firstInvalid && !sent && (
          <p className="font-['Nunito_Sans',sans-serif] text-label mt-4" style={{ color: "#E05C5C" }}>
            Please complete the required fields marked *.
          </p>
        )}

        {status === "error" && (
          <p className="font-['Nunito_Sans',sans-serif] text-label mt-4" style={{ color: "#E05C5C" }}>
            Something went wrong — please email designmatters.tiff@gmail.com directly.
          </p>
        )}

        {/* Submit sits at the foot of the fields it sends, where a form is
            read to end. The bottom nav is the site's menu on every other
            page and stays that. */}
        {!sent && (
          <button onClick={handleSubmit} disabled={status === "sending"}
            className="gold-submit-btn px-8 font-['Museo',sans-serif] font-light text-small text-white cursor-pointer"
            style={{ height: 48, border: 'none', marginTop: 36, opacity: status === "sending" ? 0.6 : 1 }}>
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        )}

        {/* Bottom spacer so content clears the floating nav */}
        <div style={{ height: 140 }} />
      </div>

      <StickyPageNav activePage="connect" parentLabel="Connect" detailLabel="Speaking Inquiry"
        compact={headerScrolled} onNavigate={onNavigate} />
    </div>
  );
}

// ─── Section data ─────────────────────────────────────────────────

const SECTIONS = [
  { key: "about",   label: "Tiffany C.",      page: null,  accent: GOLD, labelColor: GOLD, items: [] },
  {
    key: "work",    label: "Work",             page: "work" as Page, embeds: true,
    accent: "#8A6E2E", labelColor: "#888880",
    tagline: "Design Strategy & Leadership",
    context: "Fintech · eCommerce · Utility SaaS",
    items: ["AI + UX DesignOps", "Business Acumen", "Product & UX Methods", "People & Process", "Case Studies"],
  },
  {
    key: "awards",  label: "Awards & Speaking", page: "awards" as Page, embeds: true,
    accent: "#5070A0", labelColor: "#5070A0",
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
    key: "testimonials", label: "Testimonials", page: "testimonials" as Page, embeds: true,
    accent: "#9B5A88", labelColor: "#9B5A88",
    tagline: "What they say",
    context: "Leadership · Coaching",
    items: [],
  },
  {
    key: "coaching", label: "Coaching",        page: "coaching" as Page,
    accent: "#5070A0", labelColor: "#9B5A88",
    tagline: "UX Career Coaching",
    context: "Portfolio · Interview Strategies",
    items: [
      "1:1 Calls",
      "Priority DM",
      "Package (1-1 Coaching Service)",
    ],
  },
  {
    key: "connect", label: "Connect",          page: "connect" as Page,
    accent: "#9B5A88", labelColor: "#9B5A88",
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
  linkColor,
  borderColor,
  onNavigate,
}: {
  item: string;
  accent: string;
  itemColor: string;
  // Rows that go somewhere wear the section's heading colour; a row that is
  // just a label keeps itemColor, so colour always means "you can follow this".
  linkColor?: string;
  borderColor: string;
  onNavigate?: (p: Page) => void;
}) {
  if (item === "linkedin") {
    return (
      <a href="https://www.linkedin.com/in/tiffany-c/" target="_blank" rel="noopener noreferrer"
        className="w-full flex items-center gap-3 py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
        <Linkedin size={16} strokeWidth={1} style={{ color: accent, flexShrink: 0 }} />
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body" style={{ color: linkColor ?? itemColor }}>LinkedIn</span>
        <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
      </a>
    );
  }
  if (item === "instagram") {
    return (
      <a href="https://www.instagram.com/tffny.c/" target="_blank" rel="noopener noreferrer"
        className="w-full flex items-center gap-3 py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
        <Instagram size={16} strokeWidth={1} style={{ color: accent, flexShrink: 0 }} />
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body" style={{ color: linkColor ?? itemColor }}>Instagram</span>
        <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
      </a>
    );
  }
  if (item === "designmatters.tiff@gmail.com") {
    return (
      <a href="mailto:designmatters.tiff@gmail.com"
        className="w-full flex items-center py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body" style={{ color: linkColor ?? itemColor }}>{item}</span>
      </a>
    );
  }
  if (item === "1:1 Calls" || item === "Priority DM" || item === "Package (1-1 Coaching Service)") {
    return (
      <a href="https://topmate.io/tffnyc" target="_blank" rel="noopener noreferrer"
        className="w-full flex items-center gap-2 py-4 md:py-[18px] cursor-pointer" onClick={e => e.stopPropagation()}>
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body" style={{ color: linkColor ?? itemColor }}>{item}</span>
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
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body" style={{ color: linkColor ?? itemColor }}>
          Speaking Inquiry
        </span>
      </button>
    );
  }
  return (
    <div className="flex items-center py-4 md:py-[18px]">
      {/* Plain label — goes nowhere, so it stays body text. */}
      <span className="font-['Nunito_Sans',sans-serif] text-body" style={{ color: itemColor }}>{item}</span>
    </div>
  );
}

const AUTO_DURATION = 5000;

// Padding inside the mobile nav bar, in px. NAV_PAD_X mirrors the `px-5` class
// on it — the minimised width is computed from this, so the two have to agree
// or the bar stops being symmetric. NAV_PAD_Y applies to the minimised state
// only: the expanded bar keeps its fixed 56px height.
const NAV_PAD_X = 20;
const NAV_PAD_Y = 12;

// Space the mobile hero leaves clear at the bottom of the slide, so the body
// copy never runs under the floating nav. Built from the same terms as the
// chrome stacked down there:
//
//   5%   floating nav's bottom offset
//   56px floating nav height (mobile; desktop's is 64px)
//   24px breathing room
//
// The safe-area term is the part that originally bit: the nav and carousel
// indicator both include it, so on any phone with a home indicator they lift
// ~34px while content that omitted it stayed put — and the copy ran
// underneath. Keep this in sync with the nav's own offset.
const HERO_BOTTOM_RESERVE = "calc(5% + 80px + env(safe-area-inset-bottom))";

// ─── Homepage ─────────────────────────────────────────────────────

export function HomePage({ onNavigate, onOpenDetail, initialIdx = 0 }: { onNavigate: (p: Page) => void; onOpenDetail?: (key: string) => void; initialIdx?: number }) {
  const isDark = useContext(DarkModeCtx);
  const pageBg  = isDark ? "#282828" : "#f8f7f5";
  const fg      = isDark ? GOLD : INK;
  // Body copy sits one step down from INK. Full black reads heavy against the
  // cream ground; INK is kept for names and card titles.
  const bodyCol = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const dimCol  = isDark ? "rgba(255,255,255,0.38)" : DIM;
  const border  = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const scrollEl  = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ active: boolean; startX: number; scrollLeft: number }>({ active: false, startX: 0, scrollLeft: 0 });
  const [activeIdx, setActiveIdx]   = useState(initialIdx);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [progress, setProgress]     = useState(0);
  const [menuOpen, setMenuOpen]     = useState(false);
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
  // Width of the minimised nav's only content — the hamburger and the name.
  // Measured rather than assumed: the bar shrinks to fit it, and a hardcoded
  // width leaves dead space on the right as soon as the name or the font
  // metrics change. Seeded at the current measured value so the first frame
  // is already close.
  const navBtnRef = useRef<HTMLButtonElement | null>(null);
  const [navBtn, setNavBtn] = useState({ w: 94, h: 20 });
  useEffect(() => {
    const el = navBtnRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setNavBtn(prev => {
        const w = Math.ceil(r.width), h = Math.ceil(r.height);
        return prev.w === w && prev.h === h ? prev : { w, h };
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const activeIdxRef = useRef(0);
  const wheeling     = useRef(false);
  const isPaused     = useRef(false);
  const startTime    = useRef(Date.now());
  const rafRef       = useRef<number>(0);
  const isMobile     = useIsMobile();
  const heroOverflows = sectionOverflows["hero"] ?? false;
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
      // (Work / Awards & Speaking), a vertical gesture should scroll
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
  // True when the active section is an embedded Work/Awards & Speaking
  // page that's been expanded past its mobile "View more" cap — this
  // makes the section vertically scrollable, which is the precondition
  // for the Safari-style nav shrink (see navMinimized) to apply.
  const currentEmbedScrollable = isMobile && "embeds" in currentSection && Boolean(currentSection.embeds);
  const navShrunk = currentEmbedScrollable && navMinimized;

  useEffect(() => { setNavMinimized(false); }, [activeIdx]);

  // Swiping the deck is how most people read this site on a phone, so the
  // section you're looking at owns the address bar: land on Awards and the
  // URL says /awards, shareable and reloadable. replaceState rather than
  // push — a swipe isn't a navigation, and one history entry per swipe would
  // mean pressing back five times to leave the homepage.
  useEffect(() => {
    const target = (SECTIONS[activeIdx]?.page ?? "home") as Page;
    applyRoute(target, null, "replace");
  }, [activeIdx]);


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
          ref={(el) => { embedSectionRefs.current["hero"] = el; }}
          className="flex-shrink-0 relative overflow-x-hidden scrollbar-hide"
          style={{
            width: "100vw", height: "100%", scrollSnapAlign: "start", background: "transparent",
            // The hero is a single screen by design, but it can't always be:
            // a short viewport or large accessibility text pushes the body
            // copy past the fold. Rather than clip it (the old
            // overflow-hidden), let the slide scroll vertically — but only
            // when it genuinely overflows, so horizontal swipe keeps
            // ownership of the gesture on every phone where it does fit.
            overflowY: isMobile && heroOverflows ? "auto" : "hidden",
            // No touchAction override, for the reason the embedded sections
            // give below: the browser already routes a vertical drag to this
            // section and a horizontal one to the deck behind it. Pinning it
            // to pan-y took the horizontal gesture away entirely, so on any
            // viewport short enough for the hero to overflow — which is every
            // phone on first load, while the URL bar is still showing — the
            // swipe to the next section did nothing.

            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* The animated gradient/blob background lives at the App root so it
              stays continuous across page navigation — only content here. */}

          {/* Mobile layout — min-height rather than inset-0 so the block can
              grow past one screen and scroll instead of being clipped. */}
          <div className="md:hidden relative flex flex-col px-6 pt-14"
            style={{ minHeight: "100%", paddingBottom: HERO_BOTTOM_RESERVE }}>
            <LogoMark size={52} />
            {/* Auto margins, not justify-center: a centred flex child that
                overflows spills past BOTH ends, putting the heading out of
                reach even once the slide scrolls. Auto margins centre only
                while there's room to spare. */}
            <div className="flex flex-col gap-5" style={{ marginTop: "auto", marginBottom: "auto" }}>
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
                {/* Fluid like the body copy below it, rather than locked at
                    3rem. At four lines a fixed 3rem heading was what pushed
                    the hero past the fold on shorter phones. */}
                <h1 className="font-['Museo',sans-serif] font-light"
                  style={{ fontSize: "clamp(2.25rem, 11vw, 3rem)", lineHeight: 1.1, color: GOLD }}>
                  Hi, I'm a product &amp; design leader
                </h1>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] text-body leading-relaxed"
                style={{ color: bodyCol, maxWidth: "min(100%, 68ch)" }}>
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
              {/* Same words as the mobile block above. The two breakpoints
                  are separate elements, so this is the one line that has to
                  be kept in step with it. */}
              {/* Fluid, like the mobile block. At a fixed 4rem this wrapped to
                  three lines on a small laptop and pushed the closing
                  paragraph out of the slide, which clips — the section doesn't
                  scroll on desktop. */}
              <h1 className="font-['Museo',sans-serif] font-light"
                style={{ fontSize: "clamp(2.75rem, 4.6vw, 4rem)", lineHeight: 1.05, color: GOLD, maxWidth: "52%" }}>
                Hi, I'm a product &amp; design leader
              </h1>
            </div>
            {/* Pushes the body copy toward the bottom on a tall screen, but
                with a floor: flex-1 collapses to nothing once the viewport is
                short enough, and the heading was landing flush against the
                paragraph — 0px at 1280×800 and below. The other sections use
                minHeight 4vh for the same reason; this clamps it so the gap
                can't fall under 28px on a short laptop. */}
            <div className="flex-1" style={{ minHeight: "clamp(28px, 4vh, 56px)" }} />
            {/* Body copy is one size everywhere: text-body, matching the
                description on a Work detail page. This paragraph used to run
                fluid up to 22.4px, which read as a different species of text
                from the rest of the site. */}
            <p className="font-['Nunito_Sans',sans-serif] text-body leading-relaxed"
              // 60% of a 1920 viewport is 85ch — past the point where the eye
              // loses the line. 68ch is the cap; the percentage still governs
              // on narrower screens.
              style={{ color: bodyCol, maxWidth: "min(60%, 68ch)" }}>
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
          {/* Hairline above the nav. The pulsing "scroll" cue that used to sit
              at its right-hand end is gone, for the same reason as the mobile
              "swipe to explore" label — the hero's words come first. */}
          <div className="hidden md:block">
            <div className="absolute" style={{ bottom: "calc(64px + 5vh + 40px)", left: "7%", right: "7%", height: 1, background: "rgba(178,147,59,0.25)" }} />
          </div>
        </section>

        {/* ── Sections 1–4 ── */}
        {SECTIONS.slice(1).map((section, i) => {
          const idx = i + 1;
          const isActive = activeIdx === idx;

          // Work / Awards & Speaking embed the real page directly so
          // scrolling horizontally into them glides straight into the
          // actual content (no stale preview text). Vertical scroll
          // inside the slide lengthens it independently of the horizontal
          // scroll-snap track, and scrolls from the outset. These used to be
          // capped to one screen behind a "View more" that had to be tapped
          // before the section would scroll at all — a swipe up on a long
          // page did nothing, which reads as broken rather than as a control.
          if ("embeds" in section && section.embeds) {
            return (
              <section key={section.key}
                ref={(el) => { embedSectionRefs.current[section.key] = el; }}
                className="flex-shrink-0 relative scrollbar-hide"
                // No touchAction override: the browser routes a vertical drag
                // to this section and a horizontal one to the deck behind it.
                // Pinning it to pan-y scrolls the section but kills the swipe
                // between sections; pan-x does the reverse.
                style={{ width: "100vw", height: "100%", scrollSnapAlign: "start", overflowY: "auto", WebkitOverflowScrolling: "touch" }}
                onScroll={(e) => setNavMinimized(e.currentTarget.scrollTop > 24)}>
                {section.page === "work"
                  ? <WorkPage onNavigate={onNavigate} onOpenDetail={onOpenDetail} embedded isActive={isActive} compact={isActive && navShrunk} headerScrolled={isActive && navMinimized} />
                  : section.page === "testimonials"
                  ? <TestimonialsPage onNavigate={onNavigate} embedded isActive={isActive} compact={isActive && navShrunk} headerScrolled={isActive && navMinimized} />
                  : <AwardsSpeakingPage onNavigate={onNavigate} embedded isActive={isActive} compact={isActive && navShrunk} headerScrolled={isActive && navMinimized} />}

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

              <div className="relative z-10 flex flex-col h-full px-6 md:px-20 pt-10 md:pt-14"
                style={{ paddingBottom: "calc(64px + 8vh + 32px)" }}>

                <motion.p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.22em] mb-4 md:mb-6"
                  style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }}
                  transition={{ duration: 0.5 }}>
                  {section.context}
                </motion.p>

                <motion.h2 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg"
                  style={{ lineHeight: 1.05, maxWidth: "16ch", color: HEADING_COLOUR[section.key] ?? GOLD }}
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
                          <ContactItem item={item} accent={section.accent} itemColor={itemColor} linkColor={HEADING_COLOUR[section.key]} borderColor={border} onNavigate={onNavigate} />
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

      {/* There used to be a "swipe to explore" label pinned above the nav
          here. It sat over the hero's own words on shorter phones, and the
          intro copy matters more than the hint — the carousel indicator
          below already signals there's more than one section. */}

      {/* ── Persistent mobile carousel indicator — sits directly below the
          floating nav bar, spanning the same width. Stays visible across
          every slide, including the embedded Work/Awards & Speaking pages,
          which have no room in their own content for a per-slide
          indicator. Design: a solid gold bar grows to cover every visited
          section (merged into one continuous line), with small dots
          marking the sections still ahead. Hidden while the user is
          scrolled down inside an expanded Work/Awards & Speaking section,
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
                {/* Museo throughout. The active state is carried by the width
                    and opacity shifts on the button, not by weight — Museo
                    ships only 300, so a heavier class here would do nothing. */}
                <span className="font-['Museo',sans-serif] font-light text-small whitespace-nowrap overflow-hidden text-ellipsis text-white">
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
          Work/Awards & Speaking section is expanded past its "View more"
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
        animate={{
          width:  navShrunk ? navBtn.w + NAV_PAD_X * 2 : "calc(100% - 48px)",
          height: navShrunk ? navBtn.h + NAV_PAD_Y * 2 : 56,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
        <button
          ref={navBtnRef}
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3"
          aria-label="Open navigation">
          <HamburgerIcon color="white" />
          <span className="font-['Museo',sans-serif] font-light text-small text-white whitespace-nowrap">
            Tiffany C.
          </span>
        </button>
        {!navShrunk && (
          <>
            <div className="flex-1" />
            {activeIdx > 0 && (
              <span className="font-['Museo',sans-serif] font-light text-small text-white/75">
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
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a * Math.PI) / 180;
        return (
          <g key={a}>
            <line x1="60" y1="60" x2={60 + 52 * Math.cos(r)} y2={60 + 52 * Math.sin(r)}
              stroke={GOLD} strokeWidth="1" strokeOpacity="0.35" />
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
      <path d="M60 28.4C69.6 35.6 75.6 47.2 75.6 60C75.6 72.8 69.6 84.4 60 91.6C50.4 84.4 44.4 72.8 44.4 60C44.4 47.2 50.4 35.6 60 28.4Z"
        fill="#5070A0" fillOpacity="0.22" />
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
      {[45, 135, 225, 315].map((a, i) => {
        const r = (a * Math.PI) / 180;
        return <circle key={a} cx={60 + 32 * Math.cos(r)} cy={60 + 32 * Math.sin(r)} r="5" fill="#5070A0" fillOpacity="0.8" />;
      })}
    </svg>
  );
}

// Three stacked frames: the case studies themselves, one behind the other.
function IllustrationCases() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <rect x="18" y="20" width="64" height="72" rx="3" stroke={GOLD} strokeWidth="1" strokeOpacity="0.28" />
      <rect x="28" y="28" width="64" height="72" rx="3" stroke={GOLD} strokeWidth="1" strokeOpacity="0.5" fill={GOLD} fillOpacity="0.05" />
      <rect x="38" y="36" width="64" height="72" rx="3" stroke={GOLD} strokeWidth="1.5" fill={GOLD} fillOpacity="0.12" />
      <line x1="48" y1="52" x2="92" y2="52" stroke={GOLD} strokeWidth="1.5" strokeOpacity="0.75" />
      <line x1="48" y1="64" x2="82" y2="64" stroke={GOLD} strokeWidth="1" strokeOpacity="0.45" />
      <line x1="48" y1="76" x2="88" y2="76" stroke={GOLD} strokeWidth="1" strokeOpacity="0.45" />
    </svg>
  );
}

const EXPERTISE_CARDS = [
  {
    key: "ai", slug: "ai-ux", title: "AI + UX", accent: GOLD, Illustration: IllustrationAI,
    description: "Designing and iterating AI-native workflows and infrastructure from the ground up.",
    bullets: ["Reduced trilingual UX copy turnaround by 20% through AI tooling", "AI-native hiring standards & team norms at Cotton On Group"],
  },
  {
    key: "business", slug: "business-acumen", title: "Business Acumen", accent: "#8A6E2E", Illustration: IllustrationBusiness,
    description: "Aligning product design with measurable revenue growth and user outcomes.",
    bullets: ["eCommerce: Behavioural UX Design (passcode required)"],
  },
  {
    key: "ux", slug: "product-ux-strategies", title: "Product & UX Strategies", accent: "#5070A0", Illustration: IllustrationUX,
    description: "Led 0-to-1 enterprise SaaS and scaled global platforms used by millions daily.",
    bullets: ["Built UX Research function & company-wide NPS benchmarks from scratch", "Multi-platform, multi-brand design system adhering to accessibility standards", "End-to-end product design: discovery → delivery across fintech, retail & SaaS"],
  },
  {
    key: "people", slug: "people-process", title: "People & Process", accent: "#5070A0", Illustration: IllustrationPeople,
    description: "Built high-performing multidisciplinary teams and cross-unit prioritisation frameworks.",
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
  {
    key: "cases", slug: "case-studies", title: "Case Studies", accent: GOLD, Illustration: IllustrationCases,
    description: "Product design taken end to end — the individual-contributor work the rest is built on.",
    bullets: [
      "Apple Health — Design Challenge",
      "KAI — Mobile app for IoT device control",
      "Source — Energy performance monitoring dashboard",
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
      {/* No tinted disc behind the mark — the line work stands on the page,
          like every other element here. */}
      <div className="flex-shrink-0 flex items-center justify-center"
        style={{ width: 56, height: 56 }}>
        <div style={{ width: 38, height: 38 }}><Illustration /></div>
      </div>
      <div className="flex-1 min-w-0">
        {/* Title — Museo, matching the Awards and Speaking rows. */}
        <h3 className="font-['Museo',sans-serif] font-light"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", color: titleColor }}>
          {card.title}
        </h3>
        <p className="font-['Nunito_Sans',sans-serif] text-small leading-relaxed mt-1" style={{ color: isDark ? "rgba(255,255,255,0.55)" : DIM, maxWidth: 600 }}>
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
function WorkDetailPage({ cardKey, onBack, onNavigate, headerScrolled = false, compact = false }: { cardKey: string; onBack: () => void; onNavigate: (p: Page) => void; headerScrolled?: boolean; compact?: boolean }) {
  const isDark = useContext(DarkModeCtx);
  const isMobile = useIsMobile();
  const card = EXPERTISE_CARDS.find(c => c.key === cardKey);
  if (!card) return null;
  // A work detail page sits under Work, so its links wear Work's heading
  // colour; everything that isn't a link is body text.
  const linkColor = HEADING_COLOUR.work;
  const bodyText  = isDark ? "rgba(255,255,255,0.72)" : DIM;
  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10"
        style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: compact ? 16 : undefined,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
        <button onClick={onBack}
          className="flex items-center gap-1.5 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] mb-4 cursor-pointer"
          style={{ color: GOLD }}>
          <ChevronLeft size={12} strokeWidth={1.5} /> Work
        </button>
        {/* No mark beside the title here. The illustration identifies a row in
            the Work list, where it sits among three others; on the page itself
            there is nothing to tell apart, and it pushed the heading off the
            same left edge every other page's heading starts from. */}
        <motion.h1 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg mb-2" style={{ fontSize: compact ? '1.5rem' : undefined, lineHeight: 1.05, color: GOLD, transition: 'font-size 0.35s ease' }}
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
          {card.title}
        </motion.h1>
      </div>

      <div className="px-6 md:px-20 pb-10" style={{ maxWidth: 760 }}>
        <p className="font-['Nunito_Sans',sans-serif] leading-relaxed" style={{ color: bodyText }}>
          {card.description}
        </p>
        <ul className="mt-6 space-y-2.5">
          {/* Colour marks what you can follow. A link takes the page heading's
              colour; a bullet that is just a statement reads as body text, so
              it sits in INK like the paragraph above it. */}
          {"resources" in card && (card as any).resources?.filter((r: any) => r.url).map((r: any) => (
            <li key={r.label} className="font-['Nunito_Sans',sans-serif] text-small flex items-start gap-2" style={{ color: bodyText }}>
              <span className="mt-0.5 flex-shrink-0">—</span>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1" style={{ color: linkColor }}>
                <span className="link-underline">{r.label}</span>
                <ExternalLink size={11} strokeWidth={1.5} style={{ flexShrink: 0, opacity: 0.7 }} />
              </a>
            </li>
          ))}
          {card.bullets.map(b => {
            const isSpecial = b === "eCommerce: Behavioural UX Design (passcode required)";
            const isKai = b === "KAI — Mobile app for IoT device control";
            const isApple = b === "Apple Health — Design Challenge";
            return (
              <li key={b} className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: bodyText }}>
                {isApple ? (
                  <button onClick={() => onNavigate('appleHealthCase')}
                    className="flex items-start gap-2 text-left"
                    style={{ background: 'none', border: 'none', padding: 0, color: linkColor, cursor: 'pointer', font: 'inherit' }}>
                    <span className="mt-0.5 flex-shrink-0">—</span>
                    <span className="link-underline">{b}</span>
                  </button>
                ) : isKai ? (
                  <button onClick={() => onNavigate('kaiCase')}
                    className="flex items-start gap-2 text-left"
                    style={{ background: 'none', border: 'none', padding: 0, color: linkColor, cursor: 'pointer', font: 'inherit' }}>
                    <span className="mt-0.5 flex-shrink-0">—</span>
                    <span className="link-underline">{b}</span>
                  </button>
                ) : isSpecial ? (
                  /* The dash sits outside the link and the sweep goes on the
                     text span, so the underline is the width of the words —
                     the same shape as the resource links above. On the button
                     itself (display:block, width:100%) it drew a rule across
                     the whole row. */
                  <button onClick={() => onNavigate('businessCase')}
                    className="flex items-start gap-2 text-left"
                    style={{ background: 'none', border: 'none', padding: 0, color: linkColor, cursor: 'pointer', font: 'inherit' }}>
                    <span className="mt-0.5 flex-shrink-0">—</span>
                    <span className="link-underline">{b}</span>
                  </button>
                ) : (
                  <span className="flex items-start gap-2"><span className="mt-0.5 flex-shrink-0">—</span><span><Figures>{b}</Figures></span></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Bottom spacer so content clears the floating detail nav */}
        <div style={{ height: 96 }} />
      </div>
    </div>
  );
}



// Is the sticky header currently sitting over something dark?
//
// The header's backdrop is only part-opaque, so a dark image scrolling under
// it drags the surface down with it and the gold heading loses its contrast.
// Rather than guess, this measures: every image on the page is sampled once
// into a tiny canvas (they're same-origin, so the pixels are readable) and
// tagged with its own luminance. On scroll, if a dark one overlaps the header
// band, the header flips to a dark surface and the brighter gold.
function useOnDarkBackdrop(
  scrollRef: React.RefObject<HTMLDivElement | null>,
  headerRef: React.RefObject<HTMLDivElement | null>,
) {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    let raf = 0;

    const luminanceOf = (img: HTMLImageElement): number | null => {
      if (!img.naturalWidth) return null;
      try {
        const c = document.createElement("canvas");
        c.width = 8; c.height = 8;
        const ctx = c.getContext("2d", { willReadFrequently: true });
        if (!ctx) return null;
        ctx.drawImage(img, 0, 0, 8, 8);
        const { data } = ctx.getImageData(0, 0, 8, 8);
        let sum = 0;
        for (let i = 0; i < data.length; i += 4) {
          sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
        }
        return sum / (data.length / 4) / 255;
      } catch {
        // A tainted canvas would throw; treat it as unknown rather than dark.
        return null;
      }
    };

    const tag = (img: HTMLImageElement) => {
      if (img.dataset.lum) return;
      const l = luminanceOf(img);
      if (l !== null) img.dataset.lum = l.toFixed(3);
    };

    const measure = () => {
      const header = headerRef.current;
      if (!header) return;
      const hr = header.getBoundingClientRect();
      let dark = false;
      root.querySelectorAll("img").forEach(el => {
        const img = el as HTMLImageElement;
        tag(img);
        const l = img.dataset.lum ? parseFloat(img.dataset.lum) : null;
        if (l === null || l > 0.42) return;          // light enough to ignore
        const r = img.getBoundingClientRect();
        // Overlaps the header band, and covers enough of it to matter.
        const covered = Math.min(hr.bottom, r.bottom) - Math.max(hr.top, r.top);
        const across  = Math.min(hr.right, r.right) - Math.max(hr.left, r.left);
        if (covered > hr.height * 0.4 && across > hr.width * 0.3) dark = true;
      });
      setOnDark(dark);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    // Images decode after first paint, so measure again as they arrive.
    const imgs = Array.from(root.querySelectorAll("img"));
    imgs.forEach(i => i.addEventListener("load", onScroll));
    const t = window.setTimeout(measure, 300);
    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      imgs.forEach(i => i.removeEventListener("load", onScroll));
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrollRef, headerRef]);

  return onDark;
}

// ─── KAI case study ───────────────────────────────────────────────

const KAI_SECTIONS: { id: string; label: string }[] = [
  { id: "kai-overview",  label: "Overview" },
  { id: "kai-brief",     label: "Background & Brief" },
  { id: "kai-sprint",    label: "Design Sprint" },
  { id: "kai-testing",   label: "User Testing" },
  { id: "kai-solutions", label: "Design Solutions" },
  { id: "kai-review",    label: "Stakeholders" },
];

function KaiCaseContent() {
  const isDark = useContext(DarkModeCtx);
  const fg   = GOLD;
  const sub  = isDark ? "rgba(255,255,255,0.75)" : DIM;
  const body = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const rule = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const ink  = isDark ? "white" : INK;
  const MEASURE = '68ch';
  const FIGURE_MAX = 760;

  const META: [string, React.ReactNode][] = [
    ["Year", "August – October 2019"],
    ["Client", (
      <a href="https://edge.plus-solar.com.my/kai" target="_blank" rel="noopener noreferrer"
        className="link-underline" style={{ color: fg }}>Plus Xnergy Edge</a>
    )],
    ["Goal", "Monitor and manage energy use in real time"],
    ["Scope", "Design sprint facilitation, design strategy, UX & UI design"],
    ["Role", "Design Innovation Manager"],
    ["Team size", "2 designers"],
  ];

  const Fig = ({ src, alt, caption, max = FIGURE_MAX }: { src: string; alt: string; caption?: string; max?: number }) => (
    <figure style={{ margin: '28px 0 0' }}>
      <img src={src} alt={alt} loading="lazy"
        style={{ width: '100%', maxWidth: max, display: 'block', borderRadius: 8 }} />
      {caption && (
        <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );

  const Label = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{children}</h3>
  );

  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', background: 'transparent' }}>
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-10" style={{ maxWidth: 'max(900px, 80%)' }}>

        <dl id="kai-overview" className="grid gap-x-6 gap-y-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))', margin: 0, scrollMarginTop: 140 }}>
          {META.map(([label, value]) => (
            <div key={label}>
              <dt className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{label}</dt>
              <dd className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '6px 0 0' }}>{value}</dd>
            </div>
          ))}
        </dl>

        {/* ── Background & brief ── */}
        <section id="kai-brief" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light"
            style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.5rem)', lineHeight: 1.15, margin: 0 }}>
            <Figures>Helped businesses save up to 20% on Maximum Demand charges</Figures>
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
            “Extremely user friendly” — KAI's mobile user feedback.
          </p>

          <Fig src={kaiHero} alt="KAI: monitor and manage energy usage in real time" />

          <div className="grid gap-8 md:grid-cols-2" style={{ marginTop: 32, maxWidth: `calc(${MEASURE} * 2)` }}>
            <div>
              <Label>Background</Label>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                Value adding to the SOURCE ecosystem — an energy performance management system — which made energy
                data visible to the eyes of building owners.
              </p>
            </div>
            <div>
              <Label>The brief</Label>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                Design a mobile app that helps users take real-time action on building energy. It collects every
                smart device in the building to provide analytical data for energy optimisation.
              </p>
            </div>
            <div className="md:col-span-2">
              <Label>My responsibilities</Label>
              <ul className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE, listStyle: 'none', padding: 0 }}>
                {[
                  "Proposed a 4-day design sprint to align which features would ship in the first version, across every collaborating department",
                  "Prototyping through to final UI development, with a junior designer",
                  "Design QA for release",
                ].map(t => (
                  <li key={t} className="flex items-start gap-2" style={{ marginTop: 6 }}>
                    <span className="flex-shrink-0" style={{ marginTop: 2 }}>—</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Design sprint ── */}
        <section id="kai-sprint" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.5rem', margin: 0 }}>Design Sprint</h2>
          <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 12, maxWidth: MEASURE }}>
            I aligned with the product owner — also the decider — on what the sprint was for before it started.
          </p>

          <div className="grid gap-8 md:grid-cols-2" style={{ marginTop: 28, maxWidth: `calc(${MEASURE} * 2)` }}>
            <div>
              <Label>The goal</Label>
              <ul className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, listStyle: 'none', padding: 0 }}>
                {["Discover users' pain points and the key features for the product",
                  "Put ownership of the product in the team's hands — hardware engineers, designers and developers"].map(t => (
                  <li key={t} className="flex items-start gap-2" style={{ marginTop: 6 }}>
                    <span className="flex-shrink-0" style={{ marginTop: 2 }}>—</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Label>The process</Label>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                Design Sprint 2.0, run over four days.
              </p>
            </div>
          </div>

          {/* The four steps as a row of boxes, the way the original reads. */}
          <div className="flex flex-wrap items-stretch gap-2" style={{ marginTop: 28 }}>
            {["Define the challenge", "Solution, user test flow & storyboarding", "Prototyping", "User testing"].map((step, i, arr) => (
              <Fragment key={step}>
                <div className="font-['Nunito_Sans',sans-serif] text-small flex-1"
                  style={{ color: body, border: `1px solid ${rule}`, borderRadius: 4, padding: '14px 16px', minWidth: 140 }}>
                  <span style={{ color: fg, marginRight: 6 }}>{i + 1}.</span>{step}
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:flex items-center flex-shrink-0" style={{ color: sub }} aria-hidden="true">
                    <ChevronRight size={16} strokeWidth={1.25} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* 1 — define the challenge */}
          <div style={{ marginTop: 40 }}>
            <Label>1 · Define the challenge</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              We used the customer journey, built on a user persona, to set the scope. The pain reliever — and the
              sprint's goal — was savings for the building.
            </p>
            {/* The persona reads as a card — a small round headshot and who he
                is on the left, what he wants on the right. The photo is a
                headshot, so it is sized like one. */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10"
              style={{ marginTop: 28, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.025)",
                       borderRadius: 8, padding: '28px 24px', maxWidth: `calc(${MEASURE} * 1.5)` }}>
              <div className="flex-shrink-0 md:w-48">
                <img src={kaiPersona} alt="Mr Tan, the KAI user persona" loading="lazy"
                  style={{ width: 112, height: 112, objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '50%', display: 'block' }} />
                <p className="font-['Museo',sans-serif] font-light" style={{ color: ink, margin: '16px 0 0', fontSize: '1.05rem' }}>Mr Tan</p>
                <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, margin: '4px 0 0' }}>
                  Business owner of a cold storage warehouse
                </p>
                <div style={{ borderTop: `1px solid ${rule}`, margin: '12px 0', width: 48 }} />
                <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, margin: 0 }}>57, male</p>
              </div>
              <div className="min-w-0">
                <Label>Goal</Label>
                <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                  Keep operating costs as low as possible, on the energy side:
                </p>
                <ol className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 6, paddingLeft: '1.2em' }}>
                  <li>Reduce Maximum Demand charges</li>
                  <li style={{ marginTop: 4 }}>Control machines remotely, so fewer people are needed on site</li>
                </ol>
                <div style={{ marginTop: 20 }}>
                  <Label>Behaviour &amp; attitude</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    Open to new ideas; needs simple interactions; learning new technology to help his business.
                  </p>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Label>Pain points</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    The premium the national energy provider charges industrial users for high consumption during
                    peak hours.
                  </p>
                </div>
              </div>
            </div>
            <Fig src={kaiJourney} alt="User journey mapping on a whiteboard"
              caption="On the user journey map, “use” and “goal” directed the next step — the user test flow." />
          </div>

          {/* 2 — solution sketch */}
          <div style={{ marginTop: 40 }}>
            <Label>2 · Solution sketch, user flow & storyboarding</Label>
            <Fig src={kaiSketch} alt="The selected solution sketch"
              caption="My solution sketch was selected as the main direction for design development." />
            <Fig src={kaiHeatmap} alt="Participants casting heat map votes on the solution sketches"
              caption="Every participant read all the solution sketches, then cast a heat map vote." />
            <Fig src={kaiTestFlow} alt="The voted user test flow"
              caption="The voting outcome for the user test flow, approved by the decider — this determined the prototype." />
          </div>

          {/* 3 — prototype */}
          <div style={{ marginTop: 40 }}>
            <Label>3 · Prototype</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              On day three the prototype was co-created with the engineers. We tested overriding a schedule when a
              Maximum Demand limit trips an alert — the user has to act to keep the building optimised.
            </p>
            <div className="flex flex-wrap items-start gap-4" style={{ marginTop: 28 }}>
              <img src={kaiProto1} alt="KAI prototype — alert screen" loading="lazy"
                style={{ width: '46%', maxWidth: 328, display: 'block', borderRadius: 8 }} />
              <img src={kaiProto2} alt="KAI prototype — schedule override" loading="lazy"
                style={{ width: '46%', maxWidth: 328, display: 'block', borderRadius: 8 }} />
            </div>
            <a href="https://marvelapp.com/prototype/igha0g9" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.15em] cursor-pointer"
              style={{ color: fg }}>
              <span className="link-underline">Launch prototype</span>
              <ExternalLink size={13} strokeWidth={1} style={{ opacity: 0.7, flexShrink: 0 }} />
            </a>
          </div>
        </section>

        {/* ── User testing ── */}
        <section id="kai-testing" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.5rem', margin: 0 }}>4 · User testing</h2>
          <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 12, maxWidth: MEASURE }}>
            Testing ran remotely and in person. At the end of day three I led the writing of the questions, built on
            usability — ease of use, satisfaction, and effectiveness at completing a task — through a role-play scenario.
          </p>

          {/* Two scores as rings, as on the original — the arc carries the
              number rather than the number sitting on its own. */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12" style={{ marginTop: 28, maxWidth: `calc(${MEASURE} * 1.6)` }}>
            {[
              { label: "Ease of use", value: "68/100", pct: 68,
                note: "Testers found the prototype easy enough to navigate, and understood the information shown for each device." },
              { label: "Overall experience", value: "2.8/5", pct: 56,
                note: "More features would be handy — and there was more potential in the app than we were making use of." },
            ].map(r => (
              <div key={r.label} className="flex items-center gap-5 flex-1">
                <div className="relative flex-shrink-0" style={{ width: 96, height: 96 }} aria-hidden="true">
                  <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke={rule} strokeWidth="2.6" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke={fg} strokeWidth="2.6" strokeLinecap="round"
                      strokeDasharray={`${r.pct} ${100 - r.pct}`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '0.95rem', lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>{r.value}</span>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub, margin: 0 }}>{r.label}</p>
                  <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: body, margin: '8px 0 0' }}>{r.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>Conclusion</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              What the testers wanted depended on the job they did.
            </p>
            {/* Banded rows, as on the original — but in this site's accents
                rather than its navy and orange: Work's deep gold, Awards'
                blue, Coaching's purple. Solid label cell, tinted body cell. */}
            <div style={{ marginTop: 20, maxWidth: `calc(${MEASURE} * 1.6)`, borderRadius: 8, overflow: 'hidden' }}>
              {[
                { n: "01", title: "Functionality", who: "Operations & maintenance", accent: "#8A6E2E",
                  text: "Features for team collaboration — share an action or an alert over WhatsApp, generate a report, set reminders to reverse an action." },
                { n: "02", title: "User acquisition strategy", who: "Sales & business development", accent: "#5070A0",
                  text: "Free to use. Lower the barrier to adoption so it can be introduced to other businesses." },
                { n: "03", title: "Ecosystem stickiness", who: "Senior management", accent: "#9B5A88",
                  text: "KAI reads as disconnected from the SOURCE ecosystem. That's a product strategy problem, not an interface one." },
              ].map(row => (
                <div key={row.n} className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 flex-shrink-0" style={{ background: row.accent, padding: '20px 22px' }}>
                    <p className="font-['Nunito_Sans',sans-serif] text-label" style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>{row.n}</p>
                    <p className="font-['Museo',sans-serif] font-light" style={{ color: '#fff', fontSize: '1.05rem', margin: '4px 0 0' }}>{row.title}</p>
                    <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: 'rgba(255,255,255,0.75)', margin: '10px 0 0', fontStyle: 'italic' }}>{row.who}</p>
                  </div>
                  <div className="md:w-2/3 flex items-center"
                    style={{ background: isDark ? `${row.accent}33` : `${row.accent}1f`, padding: '20px 22px' }}>
                    <p className="font-['Nunito_Sans',sans-serif]" style={{ color: isDark ? 'rgba(255,255,255,0.86)' : INK, margin: 0 }}>{row.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Fig src={kaiTesterNotes} alt="Whiteboard record of the user testing questions and responses"
              caption="The questions and the testers' responses, recorded on a whiteboard for the sprint post-mortem." />
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>Reflection</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              Everything the testers raised was worth reviewing — those insights shaped the longer-term product
              strategy and how complete the app had to be to actually relieve the pain. One feature went untested:
              Zone, which categorises smart devices, needed a follow-up plan.
            </p>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 12, maxWidth: MEASURE }}>
              And we didn't invite a real user to the testing, so we may not have identified what users would put
              first. That's a real risk to solving the actual problem.
            </p>
          </div>
        </section>

        {/* ── Design solutions ── */}
        <section id="kai-solutions" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light"
            style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.5rem)', lineHeight: 1.15, margin: 0 }}>
            Design solutions (UX &amp; UI)
          </h2>
          <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 12, maxWidth: MEASURE }}>
            With the prototype insights in hand, the user flow for the whole app was the first thing to settle. We
            launched as an MVP with one goal.
          </p>

          <div style={{
            marginTop: 28, padding: '20px 24px', borderRadius: 8, maxWidth: MEASURE,
            background: isDark ? "rgba(255,255,255,0.06)" : "#1c1c1c",
          }}>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: 'rgba(255,255,255,0.92)', margin: 0 }}>
              To make scheduling and overriding machines convenient.
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>User flow</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              <Figures>The prototype's ease of use score — 68/100 — was the thing to fix. Every task was mapped so it
              takes no more than five steps. Creating a zone is one example.</Figures>
            </p>
            <Fig src={kaiZoneFlow} alt="Three-step user flow for creating a zone"
              caption="A three-step flow for creating a zone, in a minimum of four taps." />
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>Convenience for the user</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              The UI pays most of its attention to helping someone act quickly.
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:items-start" style={{ marginTop: 28 }}>
              <img src={kaiHomeScreen} alt="KAI home screen — building data and connected devices" loading="lazy"
                style={{ width: '100%', maxWidth: 300, display: 'block', borderRadius: 8 }} />
              <div style={{ maxWidth: MEASURE }}>
                <div>
                  <Label>Overview of building data</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    Every crucial number on the first screen after launch — what a building owner cares about most.
                    Building data and connected IoT devices are split into two tabs.
                  </p>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Label>The colour of the ring chart</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    A percentage marks the level of alarm: the closer to the limit, the more alarming the colour —
                    green, yellow, orange, red.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:items-start" style={{ marginTop: 40 }}>
              <img src={kaiControls} alt="KAI machine controls — on/off toggles and schedule icons" loading="lazy"
                style={{ width: '100%', maxWidth: 300, display: 'block', borderRadius: 8 }} />
              <div style={{ maxWidth: MEASURE }}>
                <div>
                  <Label>On/off toggles</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    Quick toggles, because the managers using this are busy and the alarms are urgent.
                  </p>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Label>Schedule icon</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    You need to see which machines are on schedule and which aren't, to decide what to put back.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:items-start" style={{ marginTop: 40 }}>
              <img src={kaiSchedule} alt="KAI schedule chart — daily and weekly machine scheduling" loading="lazy"
                style={{ width: '100%', maxWidth: 300, display: 'block', borderRadius: 8 }} />
              <div style={{ maxWidth: MEASURE }}>
                <div>
                  <Label>Daily / weekly schedule</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    Plan by the day or by the week.
                  </p>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Label>Running current time</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    A moving red line marks now, so the eye can catch which machines are scheduled or already running.
                  </p>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Label>Individual machine</Label>
                  <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                    Tap a line by its label to see that device's info, settings and energy data in detail.
                  </p>
                </div>
              </div>
            </div>

            <Fig src={kaiHome} alt="KAI home screen in context" max={300} />
          </div>
        </section>

        {/* ── Stakeholders ── */}
        <section id="kai-review" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.5rem', margin: 0 }}>Stakeholders review</h2>
          <div className="mt-8" style={{ columnGap: 24, maxWidth: `calc(${MEASURE} * 2 + 24px)` }}>
            {[
              ["Starting the project with a design sprint was a saver of time, cost and process. Going from ideation to execution had much more clarity, and went more smoothly, than previous experience. The product turned out to be worth more than its initial requirements.",
               "Ryan", "Product Owner"],
              ["SOURCE (KAI) has helped my business save up to 20% of maximum demand with their monitoring system, which is crucial in the current economy. It's easy to use and extremely user friendly — best of all, it's affordable. It has helped me monitor and manage the energy usage of my premises, and the data lets me better distribute and plan that usage.",
               "Business Owner, Tan Kian Huat Fishery", "KAI user"],
              ["Tiffany successfully guided the design team towards a clear design goal. She carried strong design thinking, and led the design innovation, technical and engineering teams through the sprint. She taught me a lot about user interface and user experience while we worked on KAI. As my design manager she could use design to sell the idea to clients and partners with real credibility — and that built confidence for her team.",
               "Junhoe", "UI/UX Designer"],
            ].map(([quote, name, role]) => (
              <figure key={name} className="flex flex-col"
                style={{ margin: '0 0 32px', padding: '22px 0 0', borderTop: `1px solid ${rule}`, breakInside: 'avoid', maxWidth: MEASURE }}>
                <blockquote className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: 0 }}>{quote}</blockquote>
                <figcaption style={{ marginTop: 16 }}>
                  <p className="font-['Museo',sans-serif] font-light" style={{ color: ink, margin: 0 }}>{name}</p>
                  <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, margin: '2px 0 0' }}>{role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div style={{ height: 96 }} />
      </div>
    </div>
  );
}

function KaiCasePage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const onDark = useOnDarkBackdrop(scrollRef, headerRef);
  // Nothing about the header's surface changes — the frosted backdrop already
  // darkens on its own when a dark image passes under it. Only the text
  // switches, to white, so it stays legible against that darkened band.
  const headingColor = onDark ? "#ffffff" : isDark ? GOLD_BRIGHT : GOLD;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setHeaderScrolled(el.scrollTop > 24);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div ref={scrollRef} className="absolute inset-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div ref={headerRef} className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <button onClick={onBack}
            className="flex items-center gap-2 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] mb-4 cursor-pointer"
            style={{ color: headingColor, transition: "color 0.3s ease" }}>
            <ChevronLeft size={12} strokeWidth={1.5} /> CASE STUDIES
          </button>
          <h1 className="font-['Museo',sans-serif] font-light"
            style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: headingColor, margin: 0, transition: 'font-size 0.3s ease, color 0.3s ease' }}>
            KAI: Mobile app for IoT devices control
          </h1>
        </div>

        <KaiCaseContent />
        <div style={{ height: 96 }} />
      </div>
      <CaseSectionRail scrollRef={scrollRef} sections={KAI_SECTIONS} />
      <StickyPageNav activePage="work" onNavigate={onNavigate} />
    </div>
  );
}


// ─── Apple Health case study ──────────────────────────────────────

const AH_SECTIONS: { id: string; label: string }[] = [
  { id: "ah-overview",  label: "Overview" },
  { id: "ah-solution",  label: "The Solution" },
  { id: "ah-research",  label: "Research" },
  { id: "ah-design",    label: "Design Solutions" },
  { id: "ah-priority",  label: "Prioritisation" },
  { id: "ah-takeaways", label: "Key Takeaways" },
];

// The prototype, as an embed. Same rules as the eCommerce one: embed.figma.com
// rather than the www share link, and no session-bound token.
const AH_PROTO_EMBED =
  "https://embed.figma.com/proto/xH7YB09Mu6lSEsrD7WoYLs" +
  "?node-id=115-160&page-id=50%3A526&scaling=scale-down&embed-host=share";

function AppleHealthContent() {
  const isDark = useContext(DarkModeCtx);
  const fg   = GOLD;
  const sub  = isDark ? "rgba(255,255,255,0.75)" : DIM;
  const body = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const rule = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const ink  = isDark ? "white" : INK;
  const MEASURE = '68ch';
  const FIGURE_MAX = 760;

  // No client and no team: this was a self-directed challenge, so those two
  // fields are replaced by the one fact that does the same work — how long
  // there was to do it.
  const META: [string, React.ReactNode][] = [
    ["Year", "2021"],
    ["Duration", "5 working days"],
    ["Goal", "Drive daily active users"],
    ["Scope", "Research, design strategy, UX, UI design"],
    ["Role", "End-to-end design process"],
  ];

  const Fig = ({ src, alt, caption, max = FIGURE_MAX }: { src: string; alt: string; caption?: string; max?: number }) => (
    <figure style={{ margin: '28px 0 0' }}>
      <img src={src} alt={alt} loading="lazy"
        style={{ width: '100%', maxWidth: max, display: 'block', borderRadius: 8 }} />
      {caption && (
        <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );

  const Label = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{children}</h3>
  );

  const Bullets = ({ items }: { items: string[] }) => (
    <ul className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE, listStyle: 'none', padding: 0 }}>
      {items.map(t => (
        <li key={t} className="flex items-start gap-2" style={{ marginTop: 6 }}>
          <span className="flex-shrink-0" style={{ marginTop: 2 }}>—</span><span>{t}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', background: 'transparent' }}>
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-10" style={{ maxWidth: 'max(900px, 80%)' }}>

        <dl id="ah-overview" className="grid gap-x-6 gap-y-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))', margin: 0, scrollMarginTop: 140 }}>
          {META.map(([label, value]) => (
            <div key={label}>
              <dt className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{label}</dt>
              <dd className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '6px 0 0' }}>{value}</dd>
            </div>
          ))}
        </dl>

        {/* ── Brief & solution ── */}
        <section id="ah-solution" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light"
            style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.5rem)', lineHeight: 1.15, margin: 0 }}>
            Apple Health aggregates health data. Its users wanted a tool.
          </h2>

          <div className="grid gap-8 md:grid-cols-2" style={{ marginTop: 32, maxWidth: `calc(${MEASURE} * 2)` }}>
            <div>
              <Label>The brief</Label>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                Reposition or redesign the Apple Health app into a strong product in the Apple ecosystem — new
                features, or a whole new experience — to drive overall daily active users.
              </p>
            </div>
            <div>
              <Label>The solution</Label>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                Qualitative research in this project found aggregation isn't enough: users compare Apple Health to
                the fitness apps on the market and expect it to be a tool. The prototype re-engages existing iPhone
                users as an assistant for improving health, starting from small daily habits.
              </p>
            </div>
          </div>

          <figure style={{ margin: '32px 0 0' }}>
            <div style={{
              width: '100%', maxWidth: 420, aspectRatio: '9 / 16', borderRadius: 8, overflow: 'hidden',
              border: `1px solid ${rule}`, background: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
            }}>
              <iframe src={AH_PROTO_EMBED} title="Apple Health prototype" loading="lazy" allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
            </div>
            <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
              Prototype: from the morning alarm into building a daily habit.
            </figcaption>
          </figure>
        </section>

        {/* ── Research ── */}
        <section id="ah-research" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.5rem', margin: 0 }}>The story</h2>
          <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 12, maxWidth: MEASURE }}>
            It began with user research. The persona summarises the attitude towards health — what users think, feel,
            do and say — and that scoped the challenge.
          </p>
          <Fig src={ahPersona} alt="Xune, 32, sales executive — the Apple Health user persona"
            caption="Xune, 32, sales executive. She wants to be as healthy as possible by improving her daily lifestyle — and is held back by work, tiredness and a lack of motivation." />

          <div style={{ marginTop: 40 }}>
            <Label>Research</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              Qualitative and quantitative research tested one hypothesis: that health and daily habits are
              correlated, and that people want a nudge to reach a goal.
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>The problem</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              People find it hard to stay healthy. Across 24 respondents, two challenges dominate: being time poor,
              and laziness.
            </p>
            <Fig src={ahProblem} alt="Word cloud from 24 respondents — lazy, time, work, health"
              caption="Word cloud from 24 respondents. The two largest terms are the two biggest obstacles." />
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>Insights &amp; findings</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              The research asked about attitude and behaviour towards health, and about the product — how people see
              Apple Health, and what they expect from a health app.
            </p>
            <dl className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', marginTop: 28, maxWidth: `calc(${MEASURE} * 2)` }}>
              {[
                ["100%", "agreed a healthy lifestyle is formed by daily good habits"],
                ["85%", "believed they do better when reminders, prompts and motivation are there"],
                ["7 / 12", "of those who find it hard to stay active want to improve a daily routine — sleep, food, water"],
                ["10 / 11", "use the alarm or clock on their phone every day"],
              ].map(([value, note]) => (
                <div key={value}>
                  <dd className="font-['Museo',sans-serif] font-light"
                    style={{ color: fg, fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', lineHeight: 1.1, margin: 0, fontVariantNumeric: 'tabular-nums' }}>{value}</dd>
                  <dt className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 8 }}>{note}</dt>
                </div>
              ))}
            </dl>
            <div style={{
              marginTop: 32, padding: '20px 24px', borderRadius: 8, maxWidth: MEASURE,
              background: isDark ? "rgba(255,255,255,0.06)" : "#1c1c1c",
            }}>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                Motivation is progress. People move when they can see a goal advancing — which is exactly what
                laziness needs to be overcome.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>Synthesis with secondary research</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              Being time poor turned out to be an excuse for laziness. Secondary research into what the experts
              advise gave five consistent answers:
            </p>
            <Bullets items={[
              "Make goals manageable — smaller and attainable, rather than overloaded",
              "Don't expect to be perfect",
              "Reward yourself",
              "Recognise accomplishments along the way",
              "Get a partner — someone to go to the gym with",
            ]} />
          </div>
        </section>

        {/* ── Design solutions ── */}
        <section id="ah-design" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light"
            style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.5rem)', lineHeight: 1.15, margin: 0 }}>
            Design solutions
          </h2>
          <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 12, maxWidth: MEASURE }}>
            Connecting the dots: integrate daily habits into Apple Health, so it can intelligently suggest a user
          </p>
          <Bullets items={[
            "Down-size a goal, or take a break from it — so easy you can't say no",
            "Get rewarded for being consistent, with the app recommending cheat days",
            "Track progress by streaking off days, with a streak you set a duration for rather than one that never ends",
            "Share progress with friends, to encourage partnering and social connection",
          ]} />

          <div style={{ marginTop: 40 }}>
            <Label>Design direction</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              To make maintaining health feel less like a chore, the work anchors on the project's tagline.
            </p>
            <Fig src={ahValues} alt="Apple Health — Humanising Health &amp; Growth: being better is your second nature"
              caption="The tagline the design direction anchors on." />
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>User story</Label>
            <div style={{
              marginTop: 12, padding: '20px 24px', borderRadius: 8, maxWidth: MEASURE,
              borderLeft: `2px solid ${fg}`, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.025)",
            }}>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: ink, margin: 0 }}>
                As an iPhone user, I'd like to see how Apple Health helps me improve my overall wellbeing — so that
                I'd use Apple Health as a tool to build my daily good habits.
              </p>
            </div>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 20, maxWidth: MEASURE }}>
              The flow is confined to discovering the new features on the iPhone again, as a daily alarm clock user,
              and starting to integrate Apple Health into the day.
            </p>
            <Fig src={ahUserflow} alt="Apple Health user flow — from alarm through to setting and saving a habit goal"
              caption="The user flow, from the morning alarm through to setting and saving a goal." />
          </div>
        </section>

        {/* ── Prioritisation ── */}
        <section id="ah-priority" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.5rem', margin: 0 }}>
            Feature prioritisation
          </h2>
          <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 12, maxWidth: MEASURE }}>
            An effort–impact mapping found the must-haves for making over the app and winning daily active users.
          </p>
          <Fig src={ahPriority} alt="Effort and impact mapping of the proposed features"
            caption="Effort against impact, with each feature marked must-have, should-have or could-have." />

          <div style={{ marginTop: 40 }}>
            <Label>Defining impact</Label>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
              Agreeing this across functions matters. A product design leader can advise how much effort goes to the
              must-haves, should-haves and could-haves — and name the won't-haves. Here impact is the objective
              itself: increase daily active users.
            </p>
            <div style={{ marginTop: 24, maxWidth: `calc(${MEASURE} * 1.6)`, borderRadius: 8, overflow: 'hidden' }}>
              {[
                { tier: "Must-haves", pct: "60%", accent: "#8A6E2E", items: [
                  "Goal setting and progress — the two have to go hand in hand",
                  "Improve the alarm experience, to lead users back to the app daily",
                  "Share progress — low effort, and it gets people noticing the app again",
                ]},
                { tier: "Should-haves", pct: "30%", accent: "#5070A0", items: [
                  "Widgets integration", "Reminders integration", "Weather suggestion",
                ]},
                { tier: "Could-haves", pct: "10%", accent: "#9B5A88", items: [
                  "Decluttering Apple Health's in-app information and data",
                ]},
              ].map(row => (
                <div key={row.tier} className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 flex-shrink-0" style={{ background: row.accent, padding: '20px 22px' }}>
                    <p className="font-['Museo',sans-serif] font-light" style={{ color: '#fff', fontSize: '1.05rem', margin: 0 }}>{row.tier}</p>
                    <p className="font-['Museo',sans-serif] font-light" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.5rem', margin: '6px 0 0', fontVariantNumeric: 'tabular-nums' }}>{row.pct}</p>
                    <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: 'rgba(255,255,255,0.75)', margin: '6px 0 0', fontStyle: 'italic' }}>of effort</p>
                  </div>
                  <div className="md:w-2/3" style={{ background: isDark ? `${row.accent}33` : `${row.accent}1f`, padding: '20px 22px' }}>
                    <ol className="font-['Nunito_Sans',sans-serif]" style={{ color: isDark ? 'rgba(255,255,255,0.86)' : INK, margin: 0, paddingLeft: '1.2em' }}>
                      {row.items.map(it => <li key={it} style={{ marginTop: 4 }}>{it}</li>)}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Takeaways ── */}
        <section id="ah-takeaways" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.5rem', margin: 0 }}>Key takeaways</h2>
          <ol className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 16, maxWidth: MEASURE, paddingLeft: '1.2em' }}>
            {[
              "The design process matters as much as the story-telling. Planning how a case study is presented is as critical as crafting the solution.",
              "Looking further as a product designer means product thinking — prioritising features not only for desirability, but for feasibility and viability. The right features for the right users, and clarity on must-, should-, could- and won't-haves.",
              "Applied to real practice, it's always worth proposing multiple scenarios, to weigh which features matter to the user's outcome and to the goal of the update.",
              "To evaluate whether the outcome succeeded, start from the brief — including the business problem, the objectives and the constraints. That informs a lot of the decisions along the way.",
            ].map(t => <li key={t} style={{ marginTop: 10 }}>{t}</li>)}
          </ol>

          {/* Served from this site rather than Dropbox, which is being
              sunset — and the copy in the repo was the 38MB export, so it is
              re-encoded at the deck's own 1920x1080 and lives in public/. */}
          <a href="/deck/apple-health-process-deck.pdf" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.15em] cursor-pointer"
            style={{ color: fg }}>
            <span className="link-underline">Process deck</span>
            <ExternalLink size={13} strokeWidth={1} style={{ opacity: 0.7, flexShrink: 0 }} />
          </a>
        </section>

        <div style={{ height: 96 }} />
      </div>
    </div>
  );
}

function AppleHealthPage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setHeaderScrolled(el.scrollTop > 24);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div ref={scrollRef} className="absolute inset-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <button onClick={onBack}
            className="flex items-center gap-2 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] mb-4 cursor-pointer"
            style={{ color: GOLD }}>
            <ChevronLeft size={12} strokeWidth={1.5} /> CASE STUDIES
          </button>
          <h1 className="font-['Museo',sans-serif] font-light"
            style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: GOLD, margin: 0, transition: 'font-size 0.3s ease' }}>
            Apple Health: Design Challenge
          </h1>
        </div>

        <AppleHealthContent />
        <div style={{ height: 96 }} />
      </div>
      <CaseSectionRail scrollRef={scrollRef} sections={AH_SECTIONS} />
      <StickyPageNav activePage="work" onNavigate={onNavigate} />
    </div>
  );
}

// ─── Minimised bottom nav for 2nd-level detail pages ───────────────
// Used when drilling into a Work case study or the Speaking Inquiry
// form — the regular full-height PageBottomNav shrinks down to a
// breadcrumb strip (parent / item) to leave more room for content,
// with an optional CTA button (e.g. "Submit") docked beside it.
// ─── Shared gradient bottom nav (Work / Awards pages) ─────────────

// Wraps PageBottomNav with a full-width fade scrim behind it, so content
// scrolling up from underneath fades into the page background before it
// would otherwise be visible peeking past the nav's side margins/edges.
function StickyPageNav({ activePage, detailLabel, parentLabel, compact, onNavigate }: { activePage: Page; detailLabel?: string; parentLabel?: string; compact?: boolean; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const pageBg = isDark ? "#181410" : "#f8f7f5";
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-20 pointer-events-none"
        style={{ height: 180, background: `linear-gradient(to bottom, ${pageBg}00 0%, ${pageBg} 65%)` }} />
      <div className="fixed inset-x-6 md:inset-x-20 z-30 overflow-hidden"
        style={{ bottom: "calc(3% + env(safe-area-inset-bottom))", borderRadius: 0, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
        <PageBottomNav activePage={activePage} detailLabel={detailLabel} parentLabel={parentLabel} compact={compact} onNavigate={onNavigate} />
      </div>
    </>
  );
}

function PageBottomNav({
  activePage,
  detailLabel,
  parentLabel,
  compact,
  onNavigate,
}: {
  activePage: Page;
  detailLabel?: string;
  parentLabel?: string;
  compact?: boolean;
  onNavigate: (p: Page) => void;
}) {
  const isDark = useContext(DarkModeCtx);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [menuOpen, setMenuOpen]     = useState(false);
  const isMobile = useIsMobile();

  const NAV_ITEMS = [
    { key: "work",     label: "Work",             page: "work" as Page },
    { key: "awards",   label: "Awards & Speaking", page: "awards" as Page },
    { key: "testimonials", label: "Testimonials", page: "testimonials" as Page },
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
          <span className="font-['Museo',sans-serif] font-light text-small text-white whitespace-nowrap overflow-hidden text-ellipsis">Tiffany C.</span>
        </button>
        {NAV_ITEMS.map(item => (
          <button key={item.key}
            onMouseEnter={() => setHoveredNav(item.key)}
            onMouseLeave={() => setHoveredNav(null)}
            onClick={() => item.page && onNavigate(item.page)}
            className="flex items-center font-['Museo',sans-serif] font-light text-small whitespace-nowrap overflow-hidden text-ellipsis text-white"
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
      <div className={`md:hidden flex items-center ${compact ? 'h-12' : 'h-16'} px-5`}
        style={{ background: navGradient(isDark), transition: 'height 0.25s ease' }}>
        <button onClick={() => setMenuOpen(true)} className="flex items-center gap-3" aria-label="Open navigation">
          <HamburgerIcon />
          <span className={`font-['Museo',sans-serif] font-light ${compact ? 'text-small' : 'text-body'} text-white`}>Tiffany C.</span>
        </button>
        <div className="flex-1" />
        <span className={`font-['Museo',sans-serif] font-light ${compact ? 'text-label' : 'text-small'} text-white/75`} style={{ transition: 'font-size 0.25s ease' }}>
          {detailLabel
            ? `${parentLabel ?? NAV_ITEMS.find(n => n.page === activePage)?.label ?? ""} / ${detailLabel}`
            : (NAV_ITEMS.find(n => n.page === activePage)?.label ?? "")}
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
// How long the row takes to open before the detail page takes over, and the
// curve it moves on. Shared by the opening and the closing so the way back is
// the way in, reversed.
const OPEN_MS = 460;
const OPEN_EASE: [number, number, number, number] = [0.42, 0, 0.58, 1];
// How far the rows that aren't being opened travel as they clear the way.
const OPEN_PUSH = 140;

function WorkPage({ onNavigate, onOpenDetail, embedded = false, isActive = true, compact = false, headerScrolled = false }: { onNavigate: (p: Page) => void; onOpenDetail?: (key: string) => void; embedded?: boolean; isActive?: boolean; compact?: boolean; headerScrolled?: boolean }) {
  const isDark = useContext(DarkModeCtx);
  const bg = "transparent";
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  // Opening a card is an animation, not a jump: the chosen row's rules part —
  // the one above it rising, the one below it dropping — while the rest of the
  // list clears out of the way and the heading steps back. The detail page
  // only takes over once that has played, so it reads as the row becoming the
  // page rather than a new screen replacing the list.
  const [opening, setOpening] = useState<string | null>(null);
  const openIdx = opening ? EXPERTISE_CARDS.findIndex(c => c.key === opening) : -1;
  const openTimer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(openTimer.current), []);

  const reduceMotion = typeof window !== "undefined"
    && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const openCard = (key: string) => {
    if (opening) return;                       // one at a time
    if (reduceMotion) { onOpenDetail?.(key); return; }
    setOpening(key);
    openTimer.current = window.setTimeout(() => onOpenDetail?.(key), OPEN_MS);
  };

  // Coming back, the list plays the same move in reverse — rows returning from
  // where they were pushed and the heading growing back — so tapping "Work"
  // reads as closing the page you opened. Only standalone: embedded in the
  // homepage deck the list is a slide you swipe to, not somewhere you return.
  const replay = !embedded;
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
        <motion.p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.22em] mb-2" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}
          initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }} transition={{ duration: 0.5 }}>
          Fintech · eCommerce · SaaS
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg"
          style={{ fontSize: compact ? "1.5rem" : undefined, lineHeight: 1.05, color: HEADING_COLOUR.work,
                   transition: "font-size 0.35s ease", transformOrigin: "left center" }}
          initial={replay ? { opacity: 0, scale: 0.74, y: -8 } : false}
          animate={opening
            ? { opacity: 0.5, scale: 0.74, y: -8 }
            : { opacity: isActive ? 1 : 0, scale: 1, y: isActive ? 0 : -16 }}
          transition={{ duration: opening ? OPEN_MS / 1000 : 0.55, ease: OPEN_EASE, delay: opening ? 0 : 0.06 }}>
          Work
        </motion.h1>
      </div>

      <div style={{ paddingTop: 24 }}>
        {EXPERTISE_CARDS.map((card, i) => {
          const isOpening = opening === card.key;
          const cleared   = openIdx >= 0 && !isOpening;
          // Above the opened row they lift, below it they drop — which is what
          // parts the two rules on either side of the row being opened.
          const dir = i < openIdx ? -1 : 1;
          return (
            <motion.div key={card.key}
              initial={replay ? { opacity: 0, y: i === 0 ? -OPEN_PUSH / 3 : OPEN_PUSH / 3 } : false}
              animate={{
                opacity: cleared ? 0 : 1,
                y: cleared ? dir * OPEN_PUSH : 0,
                // The opened row keeps its content still and grows the space
                // around it, so its own rules travel apart rather than the
                // text stretching.
                paddingTop: isOpening ? 26 : 0,
                paddingBottom: isOpening ? 26 : 0,
              }}
              transition={{
                duration: OPEN_MS / 1000, ease: OPEN_EASE,
                delay: opening ? Math.abs(i - openIdx) * 0.035 : (replay ? 0.08 + i * 0.05 : 0),
              }}
              style={{ willChange: "transform, opacity" }}>
              <ExpertiseCard card={card} onOpen={() => openCard(card.key)} />
            </motion.div>
          );
        })}
        {/* Bottom spacer so content clears the floating nav */}
        <div style={{ height: 96 }} />
      </div>

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
  headingColor,
  activePage,
  onNavigate,
}: {
  eyebrow: string;
  title: string;
  items: readonly string[];
  accent: string;
  // Coaching and Connect share this shell but sit at different points along
  // the nav gradient, so the heading colour comes in per page.
  headingColor?: string;
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
        <motion.p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.22em] mb-2" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {eyebrow}
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg" style={{ lineHeight: 1.05, color: headingColor ?? fg }}
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
          {title}
        </motion.h1>
      </div>

      {/* Items */}
      <div className="px-6 md:px-20 pt-6">
        <div style={{ borderTop: `1px solid ${brd}` }}>
          {items.map(item => (
            <div key={item} style={{ borderBottom: `1px solid ${brd}` }}>
              <ContactItem item={item} accent={accent} itemColor={itemColor} linkColor={headingColor} borderColor={brd} onNavigate={onNavigate} />
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
      accent="#9B5A88"
      headingColor={HEADING_COLOUR.coaching}
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
      headingColor={HEADING_COLOUR.connect}
      activePage="connect"
      onNavigate={onNavigate}
    />
  );
}

// ─── Testimonials ──────────────────────────────────────────────────
//
// Two groups rather than three. Sorting the testimonials by subject puts
// almost everything in "leadership" — nobody has written about design craft
// in isolation — so the split that carries information is by audience:
// someone weighing her for a design leadership role, and someone deciding
// whether to book coaching. They ask different questions.
//
// `source` is not decoration. Two of the coaching reviews are anonymous, and
// a named, publicly checkable platform is what makes an unattributed quote
// worth anything. Shaza's was written as an award nomination, which is
// stronger stated plainly than passed off as unsolicited praise.
//
// Quotes are verbatim, including punctuation BRAND.md would not allow in
// Tiffany's own copy — see the note under "Writing mechanics".

type TestimonialGroup = "leadership" | "coaching";

const TESTIMONIAL_GROUPS: { key: TestimonialGroup; label: string }[] = [
  { key: "leadership", label: "Leadership & teams" },
  { key: "coaching",   label: "Coaching" },
];

const TESTIMONIALS: {
  key: string;
  group: TestimonialGroup;
  name: string | null;
  title: string | null;
  source: string;
  date: string | null;
  quote: string[];
}[] = [
  {
    key: "shaza", group: "leadership",
    name: "Shaza Hakim", title: "CEO & UX Principal, Stampede",
    source: "Women in Digital 2025 nomination", date: null,
    quote: [
      "My name is Shaza. As a business co-founder, designer, and community leader in Malaysia, I've worked with Tiffany on several initiatives over the years.",
      "I first got to know Tiffany through the Ladies That UX community she built. When she invited me to speak at their International Women's Day event, the conversations were genuine, the community felt inclusive beyond just gender, and you could tell she'd thoughtfully created a space for meaningful and safe discussions about our craft.",
      "In 2024, we've shared panels at UX Malaysia and FUSECON. I remember being inspired by her forward-thinking vision paired with her commitment to ensuring others can help shape that future.",
      "This perspective isn't unique to my experience. Speaking with several of her designers at TNG Digital, they shared that whilst working in a fast-paced, high-pressure environment, she consistently led with empathy and created psychological safety for her team.",
      "In a male-dominated industry, Tiffany made sure her people felt supported and heard. Maintaining one's humanity and protecting one's team when the surrounding culture demands intense performance takes real strength. Tiffany did it exceptionally well.",
      "In our conversations, I've seen how she manages to be both tough and kind. She is unwaveringly dedicated to her vision, but she's equally committed to bringing people along with her.",
      "In writing this, I've realised that Tiffany builds things that last. Products, teams, communities.",
      "She builds people up. In an industry that often celebrates individual brilliance, she's chosen to multiply her impact through others. To me, that's not just good leadership—it's transformational leadership, personified.",
      "The Women in Digital UX Leader award should recognise leaders who don't just excel in their craft, but who fundamentally change how we think about success in tech.",
      "Tiffany is exactly that kind of leader.",
    ],
  },
  {
    key: "shin", group: "leadership",
    name: "Shin L.", title: "Lead UX Writer",
    source: "Worked in Tiffany's team", date: null,
    quote: [
      "I had the privilege of working under Tiffany, and she stood out as an exceptional leader who masterfully combines strategic thinking with actionable execution. Tiffany showed me how to translate high-level organisational goals into actionable plans that deliver measurable impact.",
      "One of her key contributions was leveraging content strategy to improve brand perception. Under her leadership, our efforts contributed to a remarkable 14% increase in our brand perception score in 2024. Additionally, Tiffany and I collaborated to implement strategies that harnessed artificial intelligence to enhance team efficiency. These initiatives resulted in a 20% improvement in overall efficiency, setting a benchmark for innovation within the team.",
      "Beyond her strategic acumen, Tiffany is an empathetic and empowering leader. She fosters a culture of collaboration and trust, enabling her team to excel while feeling supported. Personally, I learned invaluable lessons from her about aligning strategic goals with execution, problem-solving, and driving meaningful outcomes.",
      "Tiffany's ability to lead with both vision and heart makes her an incredible asset to any organisation. I feel fortunate to have worked with her and highly recommend her to anyone looking for a transformative leader.",
    ],
  },
  {
    key: "sebastian", group: "leadership",
    name: "Sebastian Wang", title: "Sr. UIUX Designer, PlayStation",
    source: "Reported to Tiffany", date: "13 January 2025",
    quote: [
      "As my Head of Design, Tiffany provided an environment that balanced creative freedom with the structure needed to execute ambitious ideas. What sets Tiffany apart is her innate ability to blend creativity with strategy. She knows when to challenge the status quo and when to refine an idea to perfection. Under her leadership, I grew not only as a designer but also as a strategic thinker.",
    ],
  },
  {
    key: "junhoe", group: "leadership",
    name: "Junhoe W.", title: "Sr. Product Designer, BigPay",
    source: "Reported to Tiffany", date: null,
    quote: [
      "Few people have the opportunity to report to a manager who is also a coach and mentor but I did when I worked for Tiffany Chew. I had the pleasure of working with Tiffany for two years at Plus Solar Systems, collaborating on several project teams. Tiffany's ability to juggle multiple projects was unlike any I've seen before and made a dramatic difference in the productivity level of our team. As a team member, Tiffany earns my highest recommendation.",
    ],
  },
  {
    key: "nehaa", group: "coaching",
    name: "Nehaa", title: "Sr. Design Consultant",
    source: "via Topmate", date: "10 September 2025",
    quote: [
      "I had the privilege of getting my portfolio reviewed by Tiffany, and it was truly a game-changer. She has such deep knowledge and an incredible eye for detail, pointing out nuances in my portfolio that I had completely missed. What stood out was how she gave me perspectives not just as a designer, but also as a design manager, and even how a non-designer would perceive my work. Tiffany provided clear, actionable feedback on both my portfolio and interview preparation, which I immediately incorporated. I'm beyond happy to share that after three years of searching, I was finally able to land a job thanks to her guidance. Forever grateful for Tiffany's mentorship and the clarity she brings.",
    ],
  },
  {
    key: "jia", group: "coaching",
    name: "Jia", title: "Sr. UX Researcher",
    source: "via Topmate", date: "7 September 2025",
    quote: [
      "Tiff has been an incredible guide throughout my job search. She gave me concrete feedback on my UX portfolio—how to showcase impact and structure case studies—coached me on positioning myself confidently in interviews, and walked me through strategies for negotiating offer terms. Thanks to her support, I was able to land my new role and feel aligned with my career goals.",
    ],
  },
  {
    key: "yoonjung", group: "coaching",
    name: "Yoon Jung", title: "Product Designer",
    source: "via Topmate", date: "19 January 2026",
    quote: [
      "I had great session with Tiffany! She really deep-dived in to my portfolio and pointed out the weakest point I had and help me improve to show the strongest skills. Totally recommend to designers who are trying to step into Aus market!",
    ],
  },
  {
    key: "topmate-aug", group: "coaching",
    name: null, title: "Product & Business Owner",
    source: "via Topmate", date: "26 August 2025",
    quote: [
      "Hands-on experience in building and leading a high-performing product design team. Provides clinical, actionable advice that translates into real results. Highly recommended, and I'll definitely be returning for periodic follow-ups.",
    ],
  },
  {
    key: "topmate-oct", group: "coaching",
    name: null, title: "Sr. UX Researcher",
    source: "via Topmate", date: "8 October 2025",
    quote: [
      "I didn't think 15 minutes would be enough to get advice and to understand the problem space I'm in, but Tiffany surprised me by how much she knew about the issue I'm facing. It was short and effective, with actionable things to consider. Thank you Tiffany!",
    ],
  },
];

// Long quotes are clamped to a few lines and expand in place, so the grid
// stays scannable without truncating anyone's words permanently.
const CLAMP_LINES = 8;

function TestimonialCard({ t, accent }: { t: (typeof TESTIMONIALS)[number]; accent: string }) {
  const isDark = useContext(DarkModeCtx);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const quoteRef = useRef<HTMLDivElement | null>(null);

  // Only offer "Read more" where the quote is actually clipped — measured,
  // not guessed from character count, since wrapping depends on width.
  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  const sub  = isDark ? "rgba(255,255,255,0.6)"  : DIM;
  const body = isDark ? "rgba(255,255,255,0.72)" : DIM;
  // The name is the one thing in the card that outranks the quote.
  const nameColor = isDark ? "white" : INK;

  return (
    // No filled box. A tinted panel inside a four-sided border reads as a
    // review widget, and BRAND.md allows no border that isn't separating
    // something. The quote sits on the page ground like every other list on
    // the site, with one hairline above it doing the separating.
    <figure
      className="flex flex-col"
      style={{
        margin: 0, padding: '22px 0 0',
        borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)"}`,
        breakInside: 'avoid',
      }}>
      <blockquote
        ref={quoteRef}
        style={{
          margin: 0, color: body, overflow: 'hidden',
          ...(open ? {} : { display: '-webkit-box', WebkitLineClamp: CLAMP_LINES, WebkitBoxOrient: 'vertical' as const }),
        }}>
        {t.quote.map((para, i) => (
          <p key={i} className="font-['Nunito_Sans',sans-serif] leading-relaxed max-w-[68ch]"
            style={{ margin: i === 0 ? 0 : '0.9em 0 0', fontSize: '0.95rem' }}>{para}</p>
        ))}
      </blockquote>

      {(overflows || open) && (
        <button onClick={() => setOpen(o => !o)}
          className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em] cursor-pointer self-start"
          style={{ background: 'none', border: 'none', padding: '14px 0 0', color: accent }}>
          {open ? "Read less" : "Read more"}
        </button>
      )}

      <figcaption style={{ marginTop: 'auto', paddingTop: 22 }}>
        <div style={{ width: 24, height: 1, background: accent, opacity: 0.5, marginBottom: 14 }} />
        {t.name && (
          <p className="font-['Museo',sans-serif] font-light" style={{ color: nameColor, fontSize: '1rem', margin: 0 }}>{t.name}</p>
        )}
        {t.title && (
          <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, margin: t.name ? '4px 0 0' : 0 }}>{t.title}</p>
        )}
        {/* Footnote: provenance, not a label. Sentence case and no
            letterspacing — the source strings are already written that way
            ("Reported to Tiffany", "via Topmate"), so the caps were doing
            nothing but adding volume to the quietest line in the card. */}
        <p className="font-['Nunito_Sans',sans-serif] text-label"
          style={{ color: sub, margin: '10px 0 0' }}>
          {[t.source, t.date].filter(Boolean).join(" · ")}
        </p>
      </figcaption>
    </figure>
  );
}

function TestimonialsPage({
  onNavigate,
  embedded = false,
  isActive = true,
  compact = false,
  headerScrolled: embeddedScrolled = false,
}: {
  onNavigate: (p: Page) => void;
  embedded?: boolean;
  isActive?: boolean;
  compact?: boolean;
  headerScrolled?: boolean;
}) {
  const isDark = useContext(DarkModeCtx);
  const [group, setGroup] = useState<TestimonialGroup>("leadership");
  // Embedded in the homepage deck, the scroll container lives one level up,
  // so the shrink flag is passed down rather than measured here.
  const [selfScrolled, setSelfScrolled] = useState(false);
  const headerScrolled = embedded ? embeddedScrolled : selfScrolled;
  // Heading shrinks on the same signal the sibling sections use: the deck's
  // `compact` flag when embedded, this page's own scroll when standalone.
  const shrunk = embedded ? compact : selfScrolled;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const accent = HEADING_COLOUR.testimonials;
  const sub    = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const shown  = TESTIMONIALS.filter(t => t.group === group);

  // The page always opens at the top. Leaving and coming back used to land
  // here with the browser's restored scroll offset but a freshly-mounted
  // `selfScrolled` of false, so the full-height header painted itself over
  // quotes that were already scrolled past. Reset the column before paint,
  // reset again on the next frame in case the browser restores after this
  // runs, and from then on take the flag from the real scrollTop so the two
  // can never disagree.
  useLayoutEffect(() => {
    if (embedded) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = 0;
    setSelfScrolled(false);
    const onScroll = () => setSelfScrolled(el.scrollTop > 24);
    const raf = requestAnimationFrame(() => { el.scrollTop = 0; onScroll(); });
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); el.removeEventListener('scroll', onScroll); };
  }, [embedded]);

  const content = (
    <>
        <div className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          // No bottom padding: the tab row is the last thing in this block, so
          // its own underline then lands exactly on the bar's bottom edge and
          // reads as a tab indicator against the divider rather than floating
          // above it. The gap between the label and its underline is the tab
          // button's own 10px padding.
          paddingBottom: 0,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}>
          <p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] mb-4"
            style={{ color: sub }}>TESTIMONIAL</p>
          <motion.h1 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg"
            style={{ fontSize: shrunk ? "1.5rem" : undefined, lineHeight: 1.05, color: accent, margin: 0, transition: "font-size 0.35s ease" }}
            initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -16 }} transition={{ duration: 0.55, delay: 0.06 }}>
            What they say
          </motion.h1>

          {/* The intro reads once, on arrival. It collapses as soon as the
              user scrolls so the pinned bar stays shallow — otherwise three
              stacked blocks would eat a third of a phone screen. */}
          <p className="font-['Nunito_Sans',sans-serif]" style={{
            color: sub, maxWidth: '48ch', overflow: 'hidden',
            marginTop: headerScrolled ? 0 : 8,
            maxHeight: headerScrolled ? 0 : 160,
            opacity: headerScrolled ? 0 : 1,
            transition: "max-height 0.35s ease, opacity 0.25s ease, margin-top 0.35s ease",
          }}>
            From seniors and peers I've worked alongside to the talent I've had the honour of leading and mentoring.
          </p>

          {/* Tabs — a two-way split by who's asking, not by subject matter.
              They sit inside the sticky header so switching group stays
              reachable once the user is deep in a long column of quotes.
              The selected tab is marked by colour and the underline, not by
              weight. */}
          <div role="tablist" aria-label="Testimonial groups" className="flex gap-6"
            style={{ marginTop: headerScrolled ? 14 : 32, transition: "margin-top 0.35s ease" }}>
            {TESTIMONIAL_GROUPS.map(g => {
              const active = g.key === group;
              const count  = TESTIMONIALS.filter(t => t.group === g.key).length;
              return (
                <button key={g.key} role="tab" aria-selected={active} onClick={() => setGroup(g.key)}
                  className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em] cursor-pointer"
                  style={{
                    background: 'none', border: 'none', padding: '0 0 10px',
                    color: active ? accent : sub,
                    borderBottom: `1px solid ${active ? accent : 'transparent'}`,
                    transition: 'color 0.25s ease, border-color 0.25s ease',
                  }}>
                  {g.label} <span style={{ opacity: 0.55 }}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-6 md:px-20">
          {/* Masonry columns: quote lengths vary wildly (one line to ten
              paragraphs), and a grid would leave tall gaps beside the short
              ones. Two columns rather than three — three drops the measure to
              ~45 characters, and once a long quote is expanded the balancing
              leaves a column empty. */}
          {/* Two columns of 68ch plus the gap. Capping the track rather than
              only the paragraphs keeps the columns even — a bare cap on the
              text would leave ragged dead space inside each column. The
              body-font class is here so `ch` resolves against the quote's own
              font, not the inherited default. */}
          <div style={{ marginTop: 28, columnGap: 24, maxWidth: "calc(68ch * 2 + 24px)" }}
            className="font-['Nunito_Sans',sans-serif] [column-count:1] md:[column-count:2]">
            {shown.map(t => (
              <div key={t.key} style={{ breakInside: 'avoid', marginBottom: 44 }}>
                <TestimonialCard t={t} accent={accent} />
              </div>
            ))}
          </div>

          <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 32 }}>
            Coaching reviews are published on{" "}
            <a href="https://topmate.io/tffnyc" target="_blank" rel="noopener noreferrer"
              className="link-underline" style={{ color: accent }}>Topmate</a>{" "}and{" "}
            <a href="https://adplist.org/mentors/tiffany-c" target="_blank" rel="noopener noreferrer"
              className="link-underline" style={{ color: accent }}>ADPList</a>.
          </p>

          <div style={{ height: 120 }} />
        </div>
    </>
  );

  // Inside the homepage deck the slide owns the scrolling; standalone, this
  // page does — same split the Work and Awards pages use.
  if (embedded) {
    return (
      <div className="relative w-full" style={{ minHeight: "100%", background: "transparent" }}>
        {content}
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div ref={scrollRef} className="absolute inset-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        {content}
      </div>
      <StickyPageNav activePage="testimonials" onNavigate={onNavigate} />
    </div>
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
  const rowRef = useRef<HTMLDivElement | null>(null);

  // Opening a row deep in the list used to leave it where it was, so the panel
  // unfolded below the fold and the next row was nowhere near the screen.
  // Bringing the row's heading up to the top gives the panel the whole screen
  // beneath it, which is what puts the following row back in view.
  useEffect(() => {
    if (!open) return;
    const el = rowRef.current;
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <div ref={rowRef} style={{ borderTop: isFirst ? "none" : `1px solid ${brd}`, scrollMarginTop: stickyTop }}>
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
            <span className="md:hidden font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub }}>{ev.year} · {ev.region}</span>
            <p className="font-['Museo',sans-serif] font-light" style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.4rem)", color: fg }}>
              {ev.role} — {ev.event}
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub }}>{ev.topic}</p>
          </div>
          <span className="hidden md:block flex-shrink-0 font-['Nunito_Sans',sans-serif] text-small text-right" style={{ color: sub }}>{ev.year} · {ev.region}</span>
        </div>
      </button>

      {expandable && (
          <div className="overflow-hidden" style={{ maxHeight: open ? 1400 : 0, opacity: open ? 1 : 0, transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease" }}>
          <div className="px-6 md:px-20 pb-8 md:pb-8">
            {ev.img && ev.img2 ? (
              // Two images side by side on desktop, stacked on a phone. The
              // comment here used to promise object-contain while the code did
              // object-cover, and the pair is a portrait beside a landscape —
              // so the portrait was forced into a wide, short box and lost the
              // head off the top. Each now keeps its own proportions and sets
              // its width from its height, which is what stops the crop.
              // Mobile still fills its box, but from the upper part of the
              // frame, where the faces are.
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-5">
                <div className="relative w-full h-[220px] md:h-[340px] md:w-auto overflow-hidden flex-shrink-0">
                  <img src={ev.img} alt={`${ev.event} — ${ev.topic}`}
                    className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:static md:inset-auto md:w-auto md:h-full md:max-w-full md:object-contain" />
                </div>
                <div className="relative w-full h-[220px] md:h-[340px] md:w-auto overflow-hidden min-w-0">
                  <img src={ev.img2} alt={`${ev.event} panel discussion`}
                    className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:static md:inset-auto md:w-auto md:h-full md:max-w-full md:object-contain" />
                </div>
              </div>
            ) : ev.img && (
              // Desktop: capped to 50% of viewport height, image keeps its
              // natural aspect ratio (object-contain, auto width) instead
              // of being cropped to fill — mobile keeps the original
              // clamp()-based crop/cover treatment.
              /* 70vh left an open row taller than the screen, so the next
                 row's heading sat below the fold and the list read as having
                 ended. Sized to leave the following row in view. */
              <div className="relative w-full overflow-hidden h-[clamp(220px,40vw,480px)] md:h-[46vh] md:flex md:items-center md:justify-center" style={{ background: "transparent" }}>
                <img src={ev.img} alt={`${ev.event} — ${ev.topic}`}
                  className={`absolute inset-0 w-full h-full ${ev.portrait ? "object-contain" : "object-cover"} md:static md:inset-auto md:w-auto md:h-full md:max-w-full md:object-contain`}
                  style={ev.portrait ? undefined : { objectPosition: ev.dark ? "center 30%" : "center" }} />
                <div className="md:hidden absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "transparent" }} />
              </div>
            )}
            {/* Mounted only while the row is open. The accordion hides rows by
                clipping them to max-height, not by unmounting, so an iframe in
                here would otherwise load on first paint — every visitor pulling
                down YouTube's player, and being cookied by it, without ever
                reaching Awards & Speaking, let alone opening the row.
                nocookie keeps that to people who actually press play. */}
            {ev.youtubeId && open && (
              <div className="relative w-full overflow-hidden mt-5 md:w-auto md:h-[46vh] md:mx-auto md:max-w-full" style={{ aspectRatio: "16 / 9", background: "#000" }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${ev.youtubeId}`}
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
                className="inline-flex items-center gap-2 mt-5 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.15em] cursor-pointer"
                style={{ color: GOLD }}>
                <span className="link-underline">Watch on YouTube</span>
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
            <span className="md:hidden font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub }}>2025 · Australia</span>
            <p className="font-['Museo',sans-serif] font-light" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", color: fg }}>
              UX Leader of the Year — Finalist
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub }}>Women in Digital National Awards</p>
          </div>
          <span className="hidden md:block flex-shrink-0 font-['Nunito_Sans',sans-serif] text-small text-right" style={{ color: sub }}>2025 · Australia</span>
        </div>
      </button>

      <div className="overflow-hidden" style={{ maxHeight: open ? 820 : 0, opacity: open ? 1 : 0, transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease" }}>
        <div className="px-6 md:px-20 pb-8">
          {/* Mobile: the two images layer, because side by side would leave
              each of them too small to read on a phone. */}
          <div className="lg:hidden relative w-full" style={{ height: "clamp(320px, 55vw, 620px)" }}>
            <img src={awardsWomenDigital} alt="Tiffany Chew at Women in Digital Awards 2025"
              className="absolute inset-0 w-full h-full object-contain" style={{ background: "transparent", zIndex: 1 }} />
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

          {/* Desktop: side by side. The portrait is tall and narrow, so
              stretched across the full row it occupied barely a third of the
              width and the finalist card had nowhere to sit but on top of it,
              covering the photo and staying too small to read. Giving each its
              own column uses the row and lets the card grow to legible size.
              From `lg` only: at tablet widths two columns leave the card too
              narrow to read, so those keep the layered treatment above. The
              photo takes a share of the row rather than a fixed height, so it
              can't crowd the card out on the narrower desktop sizes. */}
          <div className="hidden lg:flex items-center gap-10">
            <img src={awardsWomenDigital} alt="Tiffany Chew at Women in Digital Awards 2025"
              className="flex-shrink-0" style={{ width: "36%", maxWidth: 465, height: "auto", borderRadius: 10, display: "block" }} />
            <div style={{
              flex: 1, minWidth: 0,
              background: "white", borderRadius: 16, padding: 12,
              boxShadow: "0 12px 36px rgba(0,0,0,0.18)",
            }}>
              <img src={awardsFinalistCardWide} alt="The 2025 UX Leader of the Year Finalists"
                className="w-full" style={{ borderRadius: 10, display: "block" }} />
            </div>
          </div>
          <a href="https://womenindigital.org/women-in-digital-awards/women-in-digital-awards-2025-finalists/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.15em] cursor-pointer"
            style={{ color: GOLD }}>
            <span className="link-underline">View official finalists page</span>
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
  const listRef = useRef<HTMLDivElement | null>(null);
  const [selfScrolled, setSelfScrolled] = useState(false);
  const capped = !embedded && !selfExpanded;

  // On a tall screen the capped list can be shorter than the viewport, so
  // there is no scrolling to reveal the rest with — and the reader is left
  // with a button as the only way on. If nothing can scroll, show everything.
  useEffect(() => {
    if (embedded || selfExpanded) return;
    const el = listRef.current;
    if (!el) return;
    const check = () => {
      // Not just "doesn't scroll" — "doesn't scroll far enough to be worth
      // scrolling". A capped page 20px taller than the viewport has no runway
      // to reveal anything, and leaves the button as the only way on.
      if (el.scrollHeight - el.clientHeight < 120) setSelfExpanded(true);
    };
    const t = window.setTimeout(check, 250);
    window.addEventListener("resize", check);
    return () => { window.clearTimeout(t); window.removeEventListener("resize", check); };
  }, [embedded, selfExpanded]);
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
        <motion.p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.22em] mb-2" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}
          initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }} transition={{ duration: 0.5 }}>
          Recognition &amp; voice in community
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg"
          style={{ fontSize: compact ? "1.5rem" : undefined, lineHeight: 1.05, color: HEADING_COLOUR.awards, transition: "font-size 0.35s ease" }}
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
          <p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.22em]" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}>Speaking</p>
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
        ref={listRef}
        className="absolute inset-0 scrollbar-hide"
        style={{
          // Always scrollable. "View more" below still governs how many events
          // are listed, but it no longer gates whether the page moves at all.
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
        onScroll={(e) => {
          const el = e.currentTarget;
          setSelfScrolled(el.scrollTop > 24);
          // Reaching the end of a capped list is the request to see the rest:
          // lift the cap there so the next row is already coming up, rather
          // than making the reader stop and press a button to continue.
          if (el.scrollTop > 8) setSelfExpanded(true);
        }}
      >
        {content}
      </div>

      {capped && (
        <>
          <button
            onClick={() => setSelfExpanded(true)}
            className="fixed left-1/2 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.15em] cursor-pointer"
            style={{ transform: "translateX(-50%)", bottom: "calc(8% + env(safe-area-inset-bottom))", color: GOLD, background: "none", border: "none", zIndex: 26 }}>
            View more
          </button>
        </>
      )}

      {/* The nav used to fade in only once scrollTop passed 24, which meant
          collapsing an accordion could take it away: the page gets shorter,
          the browser pulls the scroll position back to the top, and the menu
          silently left with it. Every other page shows its nav unconditionally
          and this one now does too. */}
      <StickyPageNav activePage="awards" onNavigate={onNavigate} />
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
          className="link-underline flex items-center gap-2 font-['Nunito_Sans',sans-serif] text-small uppercase tracking-widest ml-auto"
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
            <p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] mb-1"
              style={{ color: "rgba(255,255,255,0.65)" }}>
              {ev.pageLabel}
            </p>
          </div>
        </div>
      )}

      {/* Event metadata */}
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-8"
        style={{ borderBottom: `1px solid ${ev.dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
        <motion.p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.22em] mb-2"
          // subColor, not isDark: this page can sit on a dark hero of its own
          // (ev.dark) independently of the site theme
          style={{ color: subColor }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {ev.year} · {ev.role} · {ev.location}
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light mb-5 text-display md:text-display-lg"
          style={{ lineHeight: 1.05, color: textColor, maxWidth: "20ch" }}
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
          {ev.event}
        </motion.h1>
        <p className="font-['Nunito_Sans',sans-serif]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", color: subColor, maxWidth: 560, lineHeight: 1.5 }}>
          "{ev.topic}"
        </p>

        {/* YouTube block */}
        {ev.link && !ev.finalistLink && (
          <div className="mt-8 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            style={{ maxWidth: 560, height: 200, background: ev.dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", border: `1px solid ${ev.dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}` }}>
            <p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-widest mb-4"
              style={{ color: subColor }}>Watch the talk</p>
            <a href={ev.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-['Nunito_Sans',sans-serif] text-small uppercase tracking-[0.15em] cursor-pointer"
              style={{ color: GOLD }}>
              <span className="link-underline">Watch on YouTube</span>
              <ExternalLink size={13} strokeWidth={1} style={{ opacity: 0.7, flexShrink: 0 }} />
            </a>
          </div>
        )}

        {/* Finalist link */}
        {ev.finalistLink && (
          <a href={ev.finalistLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.15em] cursor-pointer"
            style={{ color: GOLD }}>
            <span className="link-underline">View official finalists page</span>
            <ExternalLink size={13} strokeWidth={1} style={{ opacity: 0.7, flexShrink: 0 }} />
          </a>
        )}
      </div>

      {/* Finalist card (Women in Digital only) */}
      {ev.additionalImg && (
        <div className="px-4 md:px-20 py-8 md:py-12">
          <p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] mb-4" style={{ color: DIM }}>
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
// The case study's sections, in reading order. One list drives both the
// anchors in the content and the dot rail beside it, so a renamed or
// reordered section can't leave the two disagreeing.
const CASE_SECTIONS: { id: string; label: string }[] = [
  { id: "overview",   label: "Overview" },
  { id: "background", label: "Background & Insights" },
  { id: "rationale",  label: "Rationale" },
  { id: "ab-testing", label: "AB Testing" },
  { id: "results",    label: "Results" },
];

// Section rail — the dotted in-page nav down the right edge. Hollow dot per
// section, filled with its name spelled out when it's the one being read.
// The label sits to the LEFT of its dot: the rail is right-aligned, so a
// label on the outside would run off the screen.
function CaseSectionRail({ scrollRef, sections = CASE_SECTIONS }: { scrollRef: React.RefObject<HTMLDivElement | null>; sections?: { id: string; label: string }[] }) {
  const isDark = useContext(DarkModeCtx);
  const [active, setActive] = useState(sections[0].id);
  const [hovered, setHovered] = useState<string | null>(null);

  // Active section is read straight off the scroll position: the last section
  // whose top has passed the reading line. An IntersectionObserver band was
  // the first attempt and it skipped Background entirely — a tall section
  // starting above the band beats the one actually on screen, whichever way
  // you rank the entries. Measuring is unambiguous.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const LINE = 180; // just below the sticky header
    const pick = () => {
      const rootTop = root.getBoundingClientRect().top;
      let current = CASE_SECTIONS[0].id;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top - rootTop <= LINE) current = sec.id;
      }
      // The last section is often too short to reach the line; once the page
      // is scrolled to the end it is unambiguously the one being read.
      if (root.scrollHeight - root.scrollTop - root.clientHeight < 80) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };
    pick();
    root.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => { root.removeEventListener("scroll", pick); window.removeEventListener("resize", pick); };
  }, [scrollRef, sections]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    const root = scrollRef.current;
    if (!el || !root) return;
    const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 140;
    root.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    setActive(id);
  };

  // Inactive dots are solid grey, the same grey the labels and eyebrows use;
  // only the section being read is gold.
  const idle = isDark ? "rgba(255,255,255,0.45)" : DIM;

  return (
    <nav aria-label="Sections of this case study"
      className="hidden xl:flex fixed z-30 flex-col items-end"
      // Right edge lines up with the bottom nav bar's, which sits at
      // inset-x-20 — so the rail and the menu share one margin.
      style={{ right: 80, top: "50%", transform: "translateY(-50%)", gap: 28 }}>
      {sections.map(sec => {
        const on = sec.id === active;
        const show = on || hovered === sec.id;
        return (
          <button key={sec.id} onClick={() => go(sec.id)}
            onMouseEnter={() => setHovered(sec.id)} onMouseLeave={() => setHovered(null)}
            aria-current={on ? "true" : undefined}
            className="flex items-center justify-end gap-4 cursor-pointer"
            style={{ background: "none", border: "none", padding: 0 }}>
            <span className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em] whitespace-nowrap"
              style={{
                color: on ? GOLD : idle,
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(8px)",
                transition: "opacity 0.3s ease, transform 0.3s ease, color 0.3s ease",
                pointerEvents: "none",
              }}>
              {sec.label}
            </span>
            <span style={{
              width: 4, height: 4, borderRadius: "50%", flexShrink: 0,
              background: on ? GOLD : idle,
              transition: "background 0.3s ease",
            }} />
          </button>
        );
      })}
    </nav>
  );
}

function BusinessCaseContent() {
  const isDark = useContext(DarkModeCtx);
  const fg   = GOLD;
  const sub  = isDark ? "rgba(255,255,255,0.75)" : DIM;
  const body = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const rule = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  // The page spans 80% of the viewport so the metadata band, stats and
  // screenshots use the desk it's read on. Running prose doesn't follow it —
  // past roughly 70 characters the eye loses the start of the next line — so
  // every paragraph that would otherwise span the full band is capped here.
  const MEASURE = '68ch';
  // Figures are 2x assets, so rendering them at their natural pixel width
  // shows them at twice the size they were drawn for — and the intervention
  // shot was being pushed past its natural width entirely (1376px from a
  // 997px file, upscaled and soft). Capped so every figure sits comfortably
  // below its own resolution and reads as a figure in a document rather than
  // a full-bleed image.
  const FIGURE_MAX = 760;

  // Metadata reads as a definition list rather than run-on lines, matching the
  // labelled columns the case study has always had.
  // The case study metadata order, fixed for every case study from here on:
  // Year, Client, Goal, Scope, Role, Team size — team size reads last.
  // The client's site is the client's own name made a link rather than a
  // seventh column, which would otherwise push team size out of last place.
  const META: [string, React.ReactNode][] = [
    ["Year", "Designed and tested in 2025"],
    ["Client", (
      <a href="https://cottonon.com" target="_blank" rel="noopener noreferrer"
        className="link-underline" style={{ color: fg }}>Cotton On Group</a>
    )],
    ["Goal", "Increase checkout rate"],
    ["Scope", "Design workshop facilitation, research analysis"],
    ["Role", "Product Design Lead"],
    ["Team size", "1"],
  ];

  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', background: 'transparent' }}>
      {/* Width grows to 80% of the viewport, so the metadata band, the AB-test
          screenshots and the results row use the width of a desk instead of
          stopping two-thirds of the way across. `max()` rather than a
          breakpoint: 80% only wins once it beats the old 900px cap (past
          ~1125px), so phones and tablets are left exactly as they were —
          80% of a phone would strand a quarter of the screen. */}
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-10" style={{ maxWidth: 'max(900px, 80%)' }}>

        {/* Six equal tracks once there's room for them, so the row reads as one
            band with team size in the last column; below that it wraps. */}
        <dl id="overview" className="grid gap-x-6 gap-y-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))', margin: 0, scrollMarginTop: 140 }}>
          {META.map(([label, value]) => (
            <div key={label}>
              <dt className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]"
                style={{ color: sub }}>{label}</dt>
              <dd className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '6px 0 0' }}>{value}</dd>
            </div>
          ))}
        </dl>

        {/* ── Problem ── */}
        <section id="background" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light"
            /* No measure cap: this heading runs the full width of the page's
               80% band, like everything else here. It's a display line, not
               running prose — read in one or two passes, not line after line
               — so the reason to hold body copy to ~68ch doesn't apply. */
            style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.5rem)', lineHeight: 1.15, margin: 0 }}>
            From Google Analytics and Content Square, we saw the promo code component is most clicked
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
            Excluding the checkout button, which is the bag page's main call to action.
          </p>

          <div className="grid gap-8 md:grid-cols-2" style={{ marginTop: 32, maxWidth: `calc(${MEASURE} * 2)` }}>
            <div>
              <h3 className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>Background</h3>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                <Figures>We had a 3× lower checkout rate compared to other similar players in the industry.</Figures>
              </p>
            </div>
            <div>
              <h3 className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>The brief</h3>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8 }}>
                Increase the checkout rate from the bag page.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>My responsibilities</h3>
              <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
                I led the user surveys and interviews to find the qualitative reason behind what the data showed. The reason was simple —
                users are motivated to check out when they have a promo code to use.
              </p>
            </div>
          </div>
        </section>

        {/* ── Rationale ── */}
        <section id="rationale" style={{ scrollMarginTop: 140, marginTop: 48 }}>
          {/* Prototype beside the model it came from: the thinking on the
              right, the thing it produced on the left. Stacked on a phone with
              the prototype first, where a side-by-side would leave both too
              small to use. */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-start"
            style={{ maxWidth: `calc(${FIGURE_MAX}px * 2 + 32px)` }}>
            <figure className="w-full md:w-1/2" style={{ margin: 0 }}>
              <div style={{
                width: '100%', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden',
                border: `1px solid ${rule}`, background: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
              }}>
                <iframe
                  src={ECOMMERCE_PROTO_EMBED}
                  title="eCommerce bag page prototype"
                  loading="lazy"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                />
              </div>
              <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12 }}>
                Prototype: the bag page flow, clickable.
              </figcaption>
            </figure>

            <figure className="w-full md:w-1/2" style={{ margin: 0 }}>
              <img src={foggModel} alt="The Fogg Behavior Model, annotated with the nudge and one-click voucher interventions"
                style={{ width: '100%', display: 'block', borderRadius: 8 }} />
              <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12 }}>
                Image 1: Concept of human behaviour and UX design.
              </figcaption>
            </figure>
          </div>

          <div style={{
            marginTop: 32, padding: '20px 24px', borderRadius: 8, maxWidth: MEASURE,
            background: isDark ? "rgba(255,255,255,0.06)" : "#1c1c1c",
          }}>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.92)', margin: 0 }}>
              The design solution addresses a well-known broken flow: users leave the website to search for a code.
            </p>
          </div>
        </section>

        {/* ── Intervention ── */}
        <section id="ab-testing" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <h2 className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.5rem', margin: 0 }}>AB testing</h2>
          <div className="grid gap-6 md:grid-cols-2" style={{ marginTop: 16, maxWidth: `calc(${MEASURE} * 2)` }}>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: 0 }}>
              <span style={{ color: fg }}>Group A</span> — the old design, without login, and the promo code field hidden inside a collapsed container.
            </p>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: 0 }}>
              <span style={{ color: fg }}>Group B</span> — the login surfaced, with selectors for the vouchers already available to that account.
            </p>
          </div>

          <figure style={{ margin: '32px 0 0' }}>
            <img src={interventionImg} alt="Group B: the collapsed promo code field on the left, and the surfaced voucher selectors after logging in on the right"
              style={{ width: '100%', maxWidth: FIGURE_MAX, display: 'block', borderRadius: 8 }} />
            <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12 }}>
              Left: the new design where users have not logged in. Right: after logging in.
            </figcaption>
          </figure>
        </section>

        {/* ── Result ── */}
        <section id="results" style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>
            Result from the tested group — voucher owners
          </p>
          <dl className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: 20 }}>
            {[["Revenue", "+57%"], ["Checkout rate", "2×"], ["Conversion rate", "+0.28%"]].map(([label, value]) => (
              <div key={label}>
                <dd className="font-['Museo',sans-serif] font-light"
                  style={{ color: fg, fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: 1.1, margin: 0, fontVariantNumeric: 'tabular-nums' }}>{value}</dd>
                <dt className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 6 }}>{label}</dt>
              </div>
            ))}
          </dl>
          <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 16 }}>
            Measured from checkout entry to purchase.
          </p>

          <figure style={{ margin: '32px 0 0' }}>
            <img src={graphResult} alt="Google Analytics funnel: view bag, enter checkout at 70.1%, purchase at 79.6%"
              style={{ width: '100%', maxWidth: FIGURE_MAX, display: 'block', borderRadius: 8 }} />
            <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12 }}>
              Chart: Google Analytics funnel from bag to successful checkout.
            </figcaption>
          </figure>
        </section>

        <div style={{ height: 96 }} />
      </div>
    </div>
  );
}

function BusinessCasePage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const PASSCODE = "tifffolio";
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setHeaderScrolled(el.scrollTop > 24);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const submit = () => {
    if (value.trim() === PASSCODE) {
      setError("");
      setUnlocked(true);
    } else {
      setError("Incorrect passcode");
    }
  };

  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div ref={scrollRef} className="absolute inset-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <button onClick={onBack}
            className="flex items-center gap-2 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] mb-4 cursor-pointer"
            style={{ color: GOLD }}>
            <ChevronLeft size={12} strokeWidth={1.5} /> BUSINESS ACUMEN
          </button>
          <h1 className="font-['Museo',sans-serif] font-light" style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: GOLD, margin: 0, transition: 'font-size 0.3s ease' }}>eCommerce: Behavioural UX Design</h1>
        </div>

        {unlocked ? (
          <>
            <BusinessCaseContent />
            <div style={{ height: 96 }} />
          </>
        ) : (
          <div className="px-6 md:px-20 pt-8 pb-10" style={{ maxWidth: 560 }}>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}>This page requires passcode</p>

            <div className="flex flex-col gap-1" style={{ marginTop: 32 }}>
              <label
                className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]"
                style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}>
                PASSCODE *
              </label>
              {/* Masked, like any passcode field. The dots are set a little
                  larger and widely tracked so they read as a deliberate row
                  of marks rather than cramped default bullets. */}
              <input
                type="password"
                aria-label="Passcode"
                autoComplete="off"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                placeholder=""
                className="w-full"
                style={{ background: 'transparent', border: 'none', borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"}`, outline: 'none', padding: '8px 0', fontSize: '1.05rem', letterSpacing: value ? '0.35em' : 'normal', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300, color: isDark ? 'white' : INK, transition: 'border-color 0.2s, letter-spacing 0.2s' }}
              />
            </div>

            {error && <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: '#E05C5C', marginTop: 10 }}>{error}</p>}

            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={submit}
                className="font-['Nunito_Sans',sans-serif] text-small uppercase tracking-widest"
                style={{ background: GOLD, color: '#fff', border: 'none', padding: '12px 28px', cursor: 'pointer', borderRadius: 2 }}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      {unlocked && <CaseSectionRail scrollRef={scrollRef} />}
      <StickyPageNav activePage="work" onNavigate={onNavigate} />
    </div>
  );
}

// ─── URLs ──────────────────────────────────────────────────────────
// The router is still a `Page` union held in useState — no library, no file
// split — but every state now has a real path, pushed through the History
// API. That buys three things the single-URL design could not give:
// a link you can send someone, a working back button, and a set of paths
// the prerender step turns into static HTML for search engines.
//
// The deck on `/` is the homepage experience; a deep link opens the
// standalone page for that section instead, which is the better landing.

const EVENT_KEYS = new Set(SPEAKING_EVENTS.map(e => e.key));

function pathOf(page: Page, detailKey?: string | null): string {
  switch (page) {
    case "home":            return "/";
    case "work":            return "/work";
    case "workDetail":      return `/work/${EXPERTISE_CARDS.find(c => c.key === detailKey)?.slug ?? ""}`;
    case "businessCase":    return "/work/business-acumen/ecommerce";
    case "kaiCase":         return "/work/case-studies/kai";
    case "appleHealthCase": return "/work/case-studies/apple-health";
    case "awards":          return "/awards";
    case "speaking":        return `/awards/${detailKey ?? ""}`;
    case "testimonials":    return "/testimonials";
    case "coaching":        return "/coaching";
    case "connect":         return "/connect";
    case "speakingInquiry": return "/connect/speaking-inquiry";
    default:                return "/";
  }
}

// Writing a route into the document — URL, title, description. Shared by the
// router effect (which pushes, because it's a navigation) and by the homepage
// deck (which replaces, because swiping between sections isn't one).
function applyRoute(page: Page, detailKey: string | null, mode: "push" | "replace") {
  if (typeof window === "undefined") return;
  const next = pathOf(page, detailKey);
  if (window.location.pathname !== next) {
    if (mode === "push") window.history.pushState({}, "", next);
    else window.history.replaceState({}, "", next);
  }
  document.title = titleOf(page, detailKey);
  // kept in the DOM so the prerender step can read each route's own
  // description straight off the page
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
  m.setAttribute("content", descriptionOf(page, detailKey));
}

function routeOf(pathname: string): { page: Page; detailKey: string | null } {
  const seg = pathname.split("/").filter(Boolean).map(x => decodeURIComponent(x).toLowerCase());
  const at = (p: Page, k: string | null = null) => ({ page: p, detailKey: k });
  if (!seg.length) return at("home");

  if (seg[0] === "work") {
    if (!seg[1]) return at("work");
    if (seg[1] === "business-acumen" && seg[2] === "ecommerce") return at("businessCase");
    if (seg[1] === "case-studies" && seg[2] === "kai") return at("kaiCase");
    if (seg[1] === "case-studies" && seg[2] === "apple-health") return at("appleHealthCase");
    const card = EXPERTISE_CARDS.find(c => c.slug === seg[1]);
    // an unknown child falls back to the section rather than a dead end
    return card ? at("workDetail", card.key) : at("work");
  }
  if (seg[0] === "awards") {
    if (!seg[1]) return at("awards");
    return EVENT_KEYS.has(seg[1]) ? at("speaking", seg[1]) : at("awards");
  }
  if (seg[0] === "connect") return seg[1] === "speaking-inquiry" ? at("speakingInquiry") : at("connect");
  if (seg[0] === "testimonials" || seg[0] === "coaching") return at(seg[0] as Page);
  return at("home");
}

const SITE_TITLE = "Tiffany Chew — Product & Design Leader";
const SITE_DESC  = "Product and design leader in Melbourne. I work with C-suites and product teams to shape design functions that deliver — across fintech, retail and SaaS.";

// Each route describes itself. The prerender step reads these off the rendered
// page rather than keeping a second copy of the copy, so search results and
// link previews can't drift from what the page actually says.
function descriptionOf(page: Page, detailKey?: string | null): string {
  const card = EXPERTISE_CARDS.find(c => c.key === detailKey);
  const ev = SPEAKING_EVENTS.find(e => e.key === detailKey);
  switch (page) {
    case "home":         return SITE_DESC;
    case "work":         return "Design leadership across fintech, eCommerce and SaaS — AI and UX, business acumen, product and UX strategy, and building the teams and process behind them.";
    case "workDetail":   return card?.description ?? SITE_DESC;
    case "businessCase": return "A behavioural UX case study: lifting checkout rate from the bag page at Cotton On Group.";
    case "appleHealthCase": return "A five-day design challenge: repositioning Apple Health as a daily habit tool to drive daily active users.";
    case "kaiCase": return "A design sprint case study: KAI, a mobile app for controlling a building's IoT machines and cutting Maximum Demand charges.";
    case "awards":       return "UX Leader of the Year finalist, with speaking and panel appearances across Australia, Europe and Asia.";
    case "speaking":     return ev ? `${ev.role} at ${ev.event}, ${ev.year} — ${ev.topic}` : SITE_DESC;
    case "testimonials": return "What senior colleagues, the designers I have led, and coaching clients say about working with Tiffany Chew.";
    case "coaching":     return "UX career coaching — portfolio reviews, positioning and interview strategies for designers and researchers.";
    case "connect":      return "Get in touch about design leadership roles, fractional and consulting work, speaking or coaching.";
    case "speakingInquiry": return "Invite Tiffany Chew to speak at your event or join a panel.";
    default:             return SITE_DESC;
  }
}


function titleOf(page: Page, detailKey?: string | null): string {
  const card = EXPERTISE_CARDS.find(c => c.key === detailKey);
  const ev = SPEAKING_EVENTS.find(e => e.key === detailKey);
  switch (page) {
    case "home":            return SITE_TITLE;
    case "work":            return `Work — ${SITE_TITLE}`;
    case "workDetail":      return card ? `${card.title} — Work — ${SITE_TITLE}` : `Work — ${SITE_TITLE}`;
    case "businessCase":    return `eCommerce: Behavioural UX Design — ${SITE_TITLE}`;
    case "kaiCase":         return `KAI: Mobile app for IoT devices control — ${SITE_TITLE}`;
    case "appleHealthCase": return `Apple Health: Design Challenge — ${SITE_TITLE}`;
    case "awards":          return `Awards & Speaking — ${SITE_TITLE}`;
    case "speaking":        return ev ? `${ev.role} — ${ev.event} — ${SITE_TITLE}` : `Awards & Speaking — ${SITE_TITLE}`;
    case "testimonials":    return `Testimonials — ${SITE_TITLE}`;
    case "coaching":        return `UX Career Coaching — ${SITE_TITLE}`;
    case "connect":         return `Connect — ${SITE_TITLE}`;
    case "speakingInquiry": return `Speaking Inquiry — ${SITE_TITLE}`;
    default:                return SITE_TITLE;
  }
}

// ─── Root ─────────────────────────────────────────────────────────

export default function App() {
  const first = typeof window === "undefined" ? { page: "home" as Page, detailKey: null } : routeOf(window.location.pathname);
  const [page, setPage]           = useState<Page>(first.page);
  const [detailKey, setDetailKey] = useState<string | null>(first.detailKey);
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

  const [detailHeaderScrolled, setDetailHeaderScrolled] = useState(false);
  const detailLabel = page === "workDetail" && detailKey ? EXPERTISE_CARDS.find(c => c.key === detailKey)?.title : undefined;
  const motionKey = page === "speaking" ? `speaking:${detailKey}` : page === "workDetail" ? `workDetail:${detailKey}` : page;
  // Case-study pages are a drill-in from the Work list; they animate as an
  // expansion of the row rather than as a new screen sliding in.
  const drillIn = page === "workDetail" || page === "businessCase" || page === "kaiCase" || page === "appleHealthCase";

  useEffect(() => {
    if (page !== "workDetail") setDetailHeaderScrolled(false);
  }, [page]);

  const toggleDark = useCallback(() => setIsDark(d => !d), []);

  // Router state -> address bar. The guard matters: without it the first
  // render would push a duplicate entry, and a popstate-driven change would
  // push the entry it just came from, trapping the back button.
  useEffect(() => {
    applyRoute(page, detailKey, "push");
  }, [page, detailKey]);

  // Address bar -> router state, so back and forward move through the site
  // instead of leaving it.
  useEffect(() => {
    // Pages own their own scroll position — every route opens at the top.
    // Left on, the browser restores the previous offset of a scroll container
    // it recognises while React remounts the page with fresh state, and the
    // header then renders for the top of a page that isn't at the top.
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    const onPop = () => {
      const r = routeOf(window.location.pathname);
      setPage(r.page);
      setDetailKey(r.detailKey);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <DarkModeCtx.Provider value={isDark}>
    <DarkModeToggleCtx.Provider value={toggleDark}>
    <AccordionCtx.Provider value={{ openId: openAccordionId, setOpenId: setOpenAccordionId }}>
    <div className="relative w-screen h-dvh overflow-hidden" style={{ background: isDark ? "#282828" : "#f8f7f5" }}>
      {/* Flat ground — warm cream in light, near-black in dark. No mesh, and
          no per-section tinting: one colour behind the whole site. */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, background: isDark ? "#282828" : "#f8f7f5" }} />
      {THEME_TOGGLE_ENABLED && <DarkModeToggle isDark={isDark} onToggle={toggleDark} />}
      {/* Drilling into a case study used to slide in from the right, which read
          as a separate screen arriving over the top of the list. These pages
          are the row you just opened, so they unfold instead: a slight scale
          up from the top edge, where the accordion row sits, easing in and
          out so it settles rather than snaps. Everything else stays a plain
          cross-fade. */}
      <motion.div key={motionKey} className="absolute inset-0"
        style={{ zIndex: 1, transformOrigin: "50% 0%" }}
        initial={drillIn ? { opacity: 0, scale: 0.965, y: 18 } : { opacity: 0, x: 0 }}
        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        transition={{ duration: drillIn ? 0.5 : 0.45, ease: [0.42, 0, 0.58, 1] }}>
        {page === "home"     && <HomePage onNavigate={navigateGeneral} onOpenDetail={navigateToWorkDetail} initialIdx={homeInitialIdx} />}
        {page === "work"     && <div className="absolute inset-0 overflow-y-auto"><WorkPage onNavigate={navigateGeneral} onOpenDetail={navigateToWorkDetail} /></div>}
        {page === "awards"   && <div className="absolute inset-0"><AwardsSpeakingPage onNavigate={navigateGeneral} /></div>}
        {page === "coaching" && <div className="absolute inset-0 overflow-y-auto"><CoachingPage onNavigate={navigateGeneral} /></div>}
        {page === "connect"  && <div className="absolute inset-0 overflow-y-auto"><ConnectPage onNavigate={navigateGeneral} /></div>}
        {page === "speakingInquiry" && (
          <SpeakingInquiryContainer onNavigate={navigateGeneral} onBack={() => {
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
          <div className="absolute inset-0 overflow-y-auto" onScroll={(e) => setDetailHeaderScrolled((e.target as HTMLElement).scrollTop > 24)}>
            <WorkDetailPage cardKey={detailKey} onBack={navigateBackFromWork} onNavigate={navigateGeneral} headerScrolled={detailHeaderScrolled} compact={detailHeaderScrolled} />
          </div>
        )}
        {page === "testimonials" && (
          <div className="absolute inset-0"><TestimonialsPage onNavigate={navigateGeneral} /></div>
        )}
        {page === "businessCase" && (
          <BusinessCasePage onBack={() => setPage('work')} onNavigate={navigateGeneral} />
        )}
        {page === "kaiCase" && (
          <KaiCasePage onBack={() => { setDetailKey("cases"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
        {page === "appleHealthCase" && (
          <AppleHealthPage onBack={() => { setDetailKey("cases"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
      </motion.div>
      {(page === "work" || page === "workDetail") && (
        <StickyPageNav activePage="work" detailLabel={detailLabel} compact={page === "workDetail" && detailHeaderScrolled} onNavigate={navigateGeneral} />
      )}
    </div>
    </AccordionCtx.Provider>
    </DarkModeToggleCtx.Provider>
    </DarkModeCtx.Provider>
  );
}
