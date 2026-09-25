import { useState, useEffect, useLayoutEffect, useRef, useCallback, createContext, useContext, Fragment } from "react";
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useTransform, useMotionValueEvent, animate, type MotionValue } from "motion/react";
import { Linkedin, Instagram, X, ExternalLink, Plus, ChevronRight, ChevronLeft, PiggyBank, Heart, LineChart, Users, Layers } from "lucide-react";

import ahPersona from "@/work/case/applehealth/userpersona.avif";
import ahProblem from "@/work/case/applehealth/health problem.avif";
import ahValues from "@/work/case/applehealth/new values.avif";
import ahUserflow from "@/work/case/applehealth/userflow.avif";
import ahPriority from "@/work/case/applehealth/Prioritisation.avif";

import srcHero from "@/work/case/source/source-01-hero-tablet.avif";
import srcRefHuawei from "@/work/case/source/source-02-ref-huawei.avif";
import srcRefSma from "@/work/case/source/source-03-ref-sma.avif";
import srcRefAdmin from "@/work/case/source/source-04-ref-admin.avif";
import srcRawData from "@/work/case/source/source-05-raw-installation-data.avif";
import srcHifi from "@/work/case/source/source-06-hifi-wireframe.avif";
import srcScreenMap from "@/work/case/source/source-07-screen-map.avif";
import srcScreenDash from "@/work/case/source/source-08-screen-dashboard.avif";
import srcScreenDisplay from "@/work/case/source/source-09-screen-display.avif";
import srcBright from "@/work/case/source/source-10-bright-theme.avif";
import srcProductionVideo from "@/work/case/source/source-12-in-production.mp4";
import srcVideoPoster from "@/work/case/source/source-13-video-poster.avif";
import ftAccount from "@/work/business/FinTech/fintech-01-goplus-account.avif";
import ftGrowth from "@/work/business/FinTech/fintech-02-aum-growth-2023.avif";
import ftReviews from "@/work/business/FinTech/fintech-03-appstore-reviews.avif";
import ftFacebook from "@/work/business/FinTech/fintech-04-facebook-thread.avif";
import ftPress from "@/work/business/FinTech/fintech-05-press-soyacincau.avif";
import ftOptIn from "@/work/business/FinTech/fintech-06-opt-in-chart.avif";
import ftConcept from "@/work/business/FinTech/fintech-07-concept-screens.avif";
import ftConsent from "@/work/business/FinTech/fintech-08-consent-screen.avif";
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
import vcTestCard from "@/work/case/visacsr/test-card.avif";
import vcWelcomePack from "@/work/case/visacsr/welcome-pack.avif";
import vcAppDetails from "@/work/case/visacsr/app-card-details.avif";
import vcAppDeactivate from "@/work/case/visacsr/app-deactivate.avif";
import vcAppHideDetails from "@/work/case/visacsr/app-hide-details.avif";
import vcBenchWise from "@/work/case/visacsr/bench-wise.avif";
import vcBenchBigPay from "@/work/case/visacsr/bench-bigpay.avif";
import vcLaunch from "@/work/case/visacsr/launch.avif";
import vcCheque from "@/work/case/visacsr/cheque.avif";
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
const NAV_GRADIENT = "linear-gradient(105deg, #B2933B 0%, #6281B7 45%, #b472a0 75%, #C27AA6 100%)";
const NAV_GRADIENT_DARK = "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), linear-gradient(105deg, #B2933B 0%, #6281B7 45%, #b472a0 75%, #C27AA6 100%)";
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

type Page = "home" | "work" | "workDetail" | "awards" | "speaking" | "coaching" | "connect" | "speakingInquiry" | "businessCase" | "kaiCase" | "appleHealthCase" | "brandPerceptionCase" | "sourceCase" | "finTechCase" | "visaCardCase" | "testimonials";

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
          ? "fixed top-5 right-5 z-[60] hidden items-center"
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
// Tailwind's `md` boundary. useIsMobile() below breaks at `lg`, which is the
// right line for the identity rail but the wrong one for the bottom bar — the
// bar swaps layout at md, and between 768 and 1023 the two disagreed.
function useIsPhone() {
  const q = "(max-width: 767px)";
  const [phone, setPhone] = useState(
    typeof window !== "undefined" ? window.matchMedia(q).matches : false
  );
  useEffect(() => {
    const mql = window.matchMedia(q);
    const h = (e: MediaQueryListEvent) => setPhone(e.matches);
    mql.addEventListener("change", h);
    return () => mql.removeEventListener("change", h);
  }, []);
  return phone;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 1023px)").matches : false
  );
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    const h = (e: MediaQueryListEvent) => setMobile(e.matches);
    mql.addEventListener("change", h);
    return () => mql.removeEventListener("change", h);
  }, []);
  return mobile;
}

// ─── Shared atoms ─────────────────────────────────────────────────

// The hero mark's box, per breakpoint. The mark is 1:1.4.
const HERO_MARK = {
  // The phone mark is small because the hero has to fit a screen. At 52 the
  // block ran 74px past an iPhone SE and the copy scrolled; the mark is the
  // one element there that can give height back without cutting words.
  mobile:  { w: 36, h: 50 },
  desktop: { w: 70, h: 98 },
};

// Every list row on the site names its item at this size, in Museo: the Work
// categories, the award, and the speaking events. They are the same kind of
// thing — one line naming what a row opens — and they were three separate
// clamps drifting apart, the speaking rows a step larger than Work and the
// award a step larger again.
const LIST_TITLE_SIZE = "clamp(1rem, 1.6vw, 1.25rem)";

// Clicking the mark goes to the top of the homepage, not to the slide the
// page you were on corresponds to. It is the brand mark; the top of the site
// is what it means. The rest of the nav stays section-aware.
//
// The mark does not animate between pages. It was briefly a shared element
// that grew or slid from one page's position to the next, and that was worse
// on both counts: travelling sideways across the Work pages read as the mark
// being dragged, and growing into the hero read as a pop, because a mark
// inside an incoming page rides that page's cross-fade and so spends the
// first half of its journey nearly transparent. It now just fades up with
// the page it belongs to, like everything else on it.
const GoHomeCtx = createContext<(() => void) | null>(null);
// True wherever the identity rail is on screen, so the desktop credit knows
// to hang off the rail's edge rather than the page's.

// `className` is how a caller makes the mark responsive: the width/height
// attributes are the default, and Tailwind sizing classes override them.
function LogoMark({ size = 70, color = GOLD, className }: { size?: number; color?: string; className?: string }) {
  return (
    // flexShrink: 0 — the mark sits as a flex child in the hero and the mobile
    // menu, and without this a short viewport squeezes it: measured 70x98 at
    // 1440x900 but 70x17 at 1280x760, i.e. the logo silently flattening to a
    // sliver on smaller laptops.
    <svg width={size} height={Math.round(size * 1.4)} viewBox="0 0 80 112" fill="none"
      className={className} style={{ flexShrink: 0 }}>
      <clipPath id="tiff-clip"><rect width="80" height="112" /></clipPath>
      <g clipPath="url(#tiff-clip)">
        <path d={T_PATH} fill={color} />
        <path d={F_PATH} fill={color} />
        <path d={DOT_PATH} fill={color} />
      </g>
    </svg>
  );
}


// The mark, top right of a page header, on the eyebrow's line. Homepage keeps
// its own large one in the hero; every other page gets this.
//
// The two breakpoints want different things. On desktop the mark is `size`
// tall and hangs from the top of the content, and on hover a hairline ring
// draws itself around it over a second, from twelve o'clock clockwise,
// unwinding the same way on the way out — the mark alone doesn't read as a
// control, and the ring says "this is a button" without putting a permanent
// box in the corner. On mobile there is no hover to reveal anything, so the
// ring is left off; the mark drops to 24 and sits centred on the eyebrow's
// line rather than hanging past it, which at that size read as adrift.
//
// The responsive sizes are CSS, not JS, so there is no first-paint flash at
// the wrong size: --logo-size carries the desktop value into the md: classes.
// Every page takes the default 28; `size` stays a prop for the odd page that
// needs its own, but nothing overrides it today.
const EYEBROW_LINE = 16;   // a text-label line: 0.75rem at 1.2, plus the breadcrumb's padding
const MOBILE_MARK = 24;
const MOBILE_HIT = 44;     // the tap target, larger than the mark it holds
// `lg:hidden` while the identity rail is in trial: the rail carries the mark
// at those widths, and two marks on one page cannot be judged. One class to
// bring it back.
function HeaderLogo({ onNavigate, color = GOLD, size = 28, ring = 48 }: { onNavigate: (p: Page) => void; color?: string; size?: number; ring?: number }) {
  const [active, setActive] = useState(false);
  const goHome = useContext(GoHomeCtx);
  // Circumference of the drawn circle — the stroke sits on the path, so the
  // radius is half the ring less half the 1px stroke.
  const r = (ring - 1) / 2;
  const circumference = 2 * Math.PI * r;
  // rotate(-90) starts the draw at twelve o'clock rather than three.
  return (
    <button aria-label="Tiffany C. — home"
      onClick={() => (goHome ? goHome() : onNavigate("home"))}
      onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)} onBlur={() => setActive(false)}
      // Phones do not get this mark: the nav pill carries "Tiffany C." at the
      // bottom of every page, so a second identity in the top corner only
      // spends the eyebrow's line. It survives from md to lg, the band where
      // there is no rail yet and the pill has already given way to the bar,
      // and the rail takes over from lg.
      className="absolute right-6 md:right-20 top-[var(--logo-top)] md:top-14 hidden md:flex items-center md:items-start justify-end cursor-pointer z-10 lg:hidden
                 w-[var(--hit)] h-[var(--hit)] md:w-[var(--logo-size)] md:h-[var(--logo-size)]"
      style={{
        background: "none", border: "none", padding: 0,
        ["--hit" as string]: `${MOBILE_HIT}px`,
        ["--logo-size" as string]: `${size}px`,
        // Mobile: the hit area is centred on the eyebrow, so the mark inside it
        // is too. Desktop (md:top-14) keeps the mark's top edge on the
        // content's top edge, where the page's own padding puts it.
        ["--logo-top" as string]: `calc(2.5rem + ${EYEBROW_LINE / 2}px - ${MOBILE_HIT / 2}px)`,
      }}>
      <span className="relative flex items-center justify-center
                   w-[17px] h-6 md:w-[calc(var(--logo-size)/1.4)] md:h-[var(--logo-size)]">
        {/* No hover on a phone, so nothing would ever draw the ring there. */}
        <svg className="logo-ring absolute pointer-events-none hidden md:block" width={ring} height={ring} viewBox={`0 0 ${ring} ${ring}`}
          aria-hidden="true" style={{ left: "50%", top: "50%", marginLeft: -ring / 2, marginTop: -ring / 2, overflow: "visible" }}>
          <circle cx={ring / 2} cy={ring / 2} r={r} fill="none" stroke={color} strokeWidth={1}
            strokeDasharray={circumference} strokeDashoffset={active ? 0 : circumference} strokeLinecap="round"
            transform={`rotate(-90 ${ring / 2} ${ring / 2})`}
            style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)" }} />
        </svg>
        {/* The mark is 1:1.4, so height is what's held to the given size. */}
        <LogoMark size={Math.round(MOBILE_MARK / 1.4)} color={color} className="w-full h-full" />
      </span>
    </button>
  );
}


// Breadcrumbs for a third-level page — Work < Case Studies < (this page).
// A single back link tells you how to leave but not where you are; at three
// levels deep that matters. Each crumb is its own control: the chevron slides
// a little on hover and the label takes the site's underline sweep, and the
// trail stitches itself in left to right on arrival so it reads as a path
// rather than appearing all at once.
function Breadcrumbs({ items, color }: { items: { label: string; onClick: () => void }[]; color: string }) {
  return (
    // Shown at every width. The trail was desktop-only for a while and the
    // line it sits on was held open on mobile with a spacer, because the
    // logomark shares that line and the heading rides up under the mark
    // without it. The words are back, so the line carries itself again.
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap mb-4" style={{ marginLeft: -2 }}>
      {/* One chevron, on the first crumb only: it means "back", and back is a
          direction, not a thing each level repeats. The rest are separated by
          a slash, which reads as a path. */}
      {items.map((it, i) => (
        <Fragment key={it.label}>
          {i > 0 && (
            <span aria-hidden="true"
              className="font-['Nunito_Sans',sans-serif] text-label flex-shrink-0"
              style={{ color, opacity: 0.4, margin: "0 8px 0 0" }}>/</span>
          )}
          <motion.button onClick={it.onClick}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.06 + i * 0.09, ease: [0.42, 0, 0.58, 1] }}
            className="crumb group flex items-center gap-1.5 font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.2em] cursor-pointer"
            style={{ background: "none", border: "none", padding: "2px 10px 2px 2px", color, transition: "color 0.3s ease" }}>
            {i === 0 && <ChevronLeft size={12} strokeWidth={1.5} className="crumb-chevron flex-shrink-0" />}
            <span className="link-underline whitespace-nowrap">{it.label}</span>
          </motion.button>
        </Fragment>
      ))}
    </nav>
  );
}

// The menu control is one symbol in two states, not two icons swapped: the
// two rules slide together and cross. Morphing in place is what says "this is
// still the button you pressed, and now it closes" — a separate × appearing
// somewhere else has to be found again.
//
// Geometry matches HamburgerIcon exactly (two 21x1 bars, 8 apart) so the
// closed state is unchanged; the 24x24 box is only there to give the rotated
// bars room. Crossed, the arms span ~15px — near enough to the 20px lucide
// X this replaces that nothing jumps.
function MenuIcon({ open = false, color = "white" }: { open?: boolean; color?: string }) {
  const bar: React.CSSProperties = {
    fill: color,
    transformBox: "fill-box",
    transformOrigin: "center",
    transition: "transform 0.34s cubic-bezier(0.4, 0, 0.2, 1), fill 0.3s ease",
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="menu-icon flex-shrink-0" aria-hidden="true">
      {/* Each bar rotates about its own centre, then travels the 4px to the
          icon's centre — so both land on the same line and cross. */}
      <rect x="1.5" y="7.5" width="21" height="1" rx="0.5"
        style={{ ...bar, transform: open ? "translateY(4px) rotate(45deg)" : "none" }} />
      <rect x="1.5" y="15.5" width="21" height="1" rx="0.5"
        style={{ ...bar, transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }} />
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
  hideClose = false,
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
  // The nav's own control sits above this overlay and morphs into a close,
  // so the footer's separate × would be a second way to do the same thing.
  hideClose?: boolean;
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

      {/* Header row — the same 24px mark the page headers carry. At 44 it
          took 62px of height the list needed, and on a short screen the list
          pushed past the control that closes it. */}
      <div className="relative z-10 flex items-center justify-end px-6 pt-10 pb-4">
        <LogoMark size={Math.round(MOBILE_MARK / 1.4)} color={itemActive} />
      </div>

      {/* Nav items list — right-aligned, active-section dot at the start.
          Auto margins, not justify-center: a centred flex child that overflows
          spills past BOTH ends, so on a short screen the last row ran under
          the close control. Auto margins centre only while there is room to
          spare, and the padding below reserves the control's own footprint. */}
      <div className="relative z-10 flex flex-col flex-1 min-h-0 overflow-y-auto scrollbar-hide"
        style={{ paddingLeft: 42, paddingRight: 24, paddingBottom: `calc(${NAV_BOTTOM} + env(safe-area-inset-bottom) + ${MOBILE_NAV_BAR + FOOTER_TO_NAV}px)` }}>
        {/* No gap between rows: each already draws its own rule, so a gap only
            broke the list into floating segments and cost 20px of height.
            overflow-y is the guarantee — on a screen too short for six rows
            the list scrolls rather than running under the close control. */}
        <div className="flex flex-col" style={{ marginTop: "auto", marginBottom: "auto" }}>
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
              className="flex items-center justify-between py-4 text-right"
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
      </div>

      {/* Footer — on a phone this is where the credit lives, sharing the row
          with the control that closes the menu. That control is the nav's own
          pill showing through above this overlay at bottom left, so the row
          takes its height and offset and keeps its width clear on the left.
          Where the menu still draws its own × instead, that sits here as
          before. */}
      <div className="absolute z-10 flex items-center"
        style={{
          left: 0, right: 0,
          bottom: `calc(${NAV_BOTTOM} + env(safe-area-inset-bottom))`,
          height: MOBILE_NAV_PILL,
          paddingLeft: hideClose ? 24 + MOBILE_NAV_PILL + 16 : 24,
          paddingRight: 24,
          justifyContent: hideClose ? "flex-end" : "space-between",
        }}>
        {hideClose && <SiteCredit align="right" />}
        {!hideClose && (
          <button onClick={onClose} aria-label="Close menu" style={{ background: "none", border: "none", padding: 0 }}>
            <X size={20} strokeWidth={1} color={closeColor} />
          </button>
        )}
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

// Client credits link out, and the same client turns up in more than one case
// study, so the URLs live here rather than inline. Plus Solar Systems is the
// name the SOURCE work was done under; the company is Plus Xnergy now, and the
// live site is the useful destination.
const PLUS_XNERGY_URL = "https://www.plusxnergy.com/";
const TNG_DIGITAL_URL = "https://www.tngdigital.com.my/";

// The eCommerce prototype, as an embed. Figma serves embeds from
// embed.figma.com — the www.figma.com share link renders its own UI and
// refuses to frame. The `t=` share token from the copied link is deliberately
// left off: it's tied to a session, so the embed relies on the prototype's own
// "anyone with the link can view" setting instead of an expiring token.
// `scaling=contain` rather than `min-zoom`: min-zoom fits the frame to the
// viewport's width and lets the rest run off the bottom, which cropped the
// phone. contain fits the whole frame inside the box, letterboxing instead.
const ECOMMERCE_PROTO_EMBED =
  "https://embed.figma.com/proto/hy4NQmlE9WX1sCHaVD9aNh/Portfolio-2026" +
  "?node-id=25-521&starting-point-node-id=25%3A521&page-id=25%3A519" +
  "&scaling=contain&content-scaling=fixed&embed-host=share";

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
    <div className="relative w-full flex flex-col" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10"
        style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? brd : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : undefined,
          transition: "padding-bottom 0.35s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={GOLD} />
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

      <div className="px-6 md:px-20 flex-1 flex flex-col" style={{ maxWidth: 760 }}>
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
          <div className="flex justify-end md:justify-start" style={{ marginTop: 36 }}>
            <button onClick={handleSubmit} disabled={status === "sending"}
              className="gold-submit-btn px-8 font-['Museo',sans-serif] font-light text-small text-white cursor-pointer"
              style={{ height: 48, border: 'none', opacity: status === "sending" ? 0.6 : 1 }}>
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </div>
        )}

        {/* Fills whatever the content leaves, so the credit line lands on
            the nav rather than stopping wherever the copy happens to end. */}
        <div className="flex-1" />
        <NavClearance />
      </div>

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
    context: "Portfolio · Interview · Negotiation",
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
    context: "Consulting · Workshop · Speaking",
    items: ["designmatters.tiff@gmail.com", "Speaking Inquiry", ["LinkedIn", "Instagram"]],
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
  inline = false,
  onNavigate,
}: {
  item: string;
  accent: string;
  itemColor: string;
  // Rows that go somewhere wear the section's heading colour; a row that is
  // just a label keeps itemColor, so colour always means "you can follow this".
  linkColor?: string;
  borderColor: string;
  // Set when several of these share one row: the row wrapper owns the height
  // and the full width, so the item drops its own.
  inline?: boolean;
  onNavigate?: (p: Page) => void;
}) {
  const wide = inline ? "" : "w-full ";
  const pad  = inline ? "" : " py-4 md:py-[18px]";
  // Matched case-insensitively: the same destination is written "linkedin" in
  // the homepage deck's section data and "LinkedIn" in the Connect page's
  // list, and the label a visitor reads shouldn't have to be the lookup key.
  const key = item.toLowerCase();

  if (key === "linkedin") {
    return (
      <a href="https://www.linkedin.com/in/tiffany-c/" target="_blank" rel="noopener noreferrer"
        className={`${wide}flex items-center gap-3${pad} cursor-pointer`} onClick={e => e.stopPropagation()}>
        <Linkedin size={16} strokeWidth={1} style={{ color: accent, flexShrink: 0 }} />
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body whitespace-nowrap" style={{ color: linkColor ?? itemColor }}>LinkedIn</span>
        <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
      </a>
    );
  }
  if (key === "instagram") {
    return (
      <a href="https://www.instagram.com/tffny.c/" target="_blank" rel="noopener noreferrer"
        className={`${wide}flex items-center gap-3${pad} cursor-pointer`} onClick={e => e.stopPropagation()}>
        <Instagram size={16} strokeWidth={1} style={{ color: accent, flexShrink: 0 }} />
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body whitespace-nowrap" style={{ color: linkColor ?? itemColor }}>Instagram</span>
        <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
      </a>
    );
  }
  if (key === "designmatters.tiff@gmail.com") {
    return (
      <a href="mailto:designmatters.tiff@gmail.com"
        className={`${wide}flex items-center${pad} cursor-pointer`} onClick={e => e.stopPropagation()}>
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body" style={{ color: linkColor ?? itemColor }}>{item}</span>
      </a>
    );
  }
  if (key === "1:1 calls" || key === "priority dm" || key === "package (1-1 coaching service)") {
    return (
      <a href="https://topmate.io/tffnyc" target="_blank" rel="noopener noreferrer"
        className={`${wide}flex items-center gap-2${pad} cursor-pointer`} onClick={e => e.stopPropagation()}>
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body" style={{ color: linkColor ?? itemColor }}>{item}</span>
        <ExternalLink size={13} strokeWidth={1} style={{ color: itemColor, opacity: 0.5, flexShrink: 0 }} />
      </a>
    );
  }
  if (key === "speaking inquiry") {
    return (
      <button
        className={`${wide}flex items-center gap-3${pad} cursor-pointer text-left`}
        onClick={() => onNavigate?.("speakingInquiry")}
      >
        <ChevronRight size={16} strokeWidth={1} style={{ color: accent, flexShrink: 0 }} />
        <span className="link-underline font-['Nunito_Sans',sans-serif] text-body whitespace-nowrap" style={{ color: linkColor ?? itemColor }}>
          Speaking Inquiry
        </span>
      </button>
    );
  }
  return (
    <div className={`flex items-center${pad}`}>
      {/* Plain label — goes nowhere, so it stays body text. */}
      <span className="font-['Nunito_Sans',sans-serif] text-body" style={{ color: itemColor }}>{item}</span>
    </div>
  );
}

// A contact list entry is either one destination or several sharing a row.
// Both the standalone Connect/Coaching page and the homepage deck's slide
// render their lists through this, so the two surfaces stay identical — they
// had already drifted once, with the deck still showing four separate rows
// in the old order after the page had been reordered.
type ContactEntry = string | readonly string[];
const asRow = (entry: ContactEntry): readonly string[] => typeof entry === "string" ? [entry] : entry;

function ContactRow({ row, accent, itemColor, linkColor, borderColor, onNavigate }: {
  row: readonly string[];
  accent: string;
  itemColor: string;
  linkColor?: string;
  borderColor: string;
  onNavigate?: (p: Page) => void;
}) {
  if (row.length === 1) {
    return <ContactItem item={row[0]} accent={accent} itemColor={itemColor} linkColor={linkColor} borderColor={borderColor} onNavigate={onNavigate} />;
  }
  // Several destinations on one line. The wrapper carries the row's full width
  // and height so the items inside keep the same rhythm a row of their own
  // would have, and nothing wraps at 360px.
  return (
    <div className="w-full flex items-center gap-3 py-4 md:py-[18px] flex-nowrap">
      {row.map((sub, i) => (
        <Fragment key={sub}>
          {i > 0 && (
            <span aria-hidden="true" className="flex-shrink-0 font-['Nunito_Sans',sans-serif] text-body"
              style={{ color: itemColor, opacity: 0.3 }}>·</span>
          )}
          <ContactItem item={sub} accent={accent} itemColor={itemColor} linkColor={linkColor} borderColor={borderColor} inline onNavigate={onNavigate} />
        </Fragment>
      ))}
    </div>
  );
}

// One quiet line at the end of a page. Copyright attaches on creation, so the
// notice stakes the claim rather than creating it — which is why it wants the
// lowest contrast on the page and not a divider, a column or a heading.
//
// The year is computed, never written down: a portfolio showing last year's
// year reads as a site nobody tends.
// `gutter={false}` where the page already wraps its content in the px-6
// md:px-20 inset — without it the line indents twice and stops lining up
// with the copy above it.
// The quietest text on the page in either theme: DIM at 45%, and a white
// barely above the background in dark. Shared by the credit and the notice.
const quietText = (isDark: boolean): React.CSSProperties => ({
  fontSize: 11,
  fontWeight: 400,
  lineHeight: 1.5,
  maxWidth: 620,
  color: isDark ? "rgba(255,255,255,0.35)" : "rgba(102,102,96,0.45)",
});

// The terms under which the gated client work is shown. It rides with the
// work at every width, unlike the credit, which moves into the menu on a
// phone — this is a condition of showing the case study, not a byline, so it
// belongs with the case study wherever you read it.
function NdaNotice() {
  const isDark = useContext(DarkModeCtx);
  return (
    <div className="px-6 md:px-20" style={{ marginTop: 24 }}>
      <p className="font-['Nunito_Sans',sans-serif]" style={quietText(isDark)}>
        Shared under NDA for review purposes only, not for redistribution.
        Client data and trademarks remain the property of their respective owners.
      </p>
    </div>
  );
}

// The mark laid over the gated client work once it is unlocked. NdaNotice
// states the terms in words a reader can read; this carries them into any
// screenshot of the page, which is how the work actually travels.
//
// It is meant to sit at the edge of visibility: nobody should have to read
// through it, but a capture holds it, and raising the contrast on that capture
// brings it out. 4% is where body copy still measured at full contrast against
// the cream ground; dark needs 6% to register at all against a near-black one.
//
// Real DOM text rather than an SVG data URI, so the tile is set in the site's
// own Nunito Sans and takes the theme's ink, and the wording lives in one
// place next to the notice it repeats.
//
// The tiling: a rotated sheet twice the viewport in each direction, so its
// corners still cover after the rotation. Rows are 120px apart and each row
// repeats the line with a 64px gap, staggered a third of a line per row — any
// 300px square of the page lands on at least part of one.
const WATERMARK_ROWS = 20;
const WATERMARK_PER_ROW = 6;
const WATERMARK_ROW_GAP = 120;

// `recipient` goes unused while there is a single shared passcode — there is
// no name to put in the line. It is in the signature now because the tile is
// the awkward thing to change later and this is not.
function NdaWatermark({ recipient }: { recipient?: string }) {
  const isDark = useContext(DarkModeCtx);
  // Read at render, never baked in: the date on a capture is the day it was
  // taken.
  // en-AU: day first, and the site is written in Australian English. Its short
  // month is "Sept", not "Sep" — that is the locale's own form, left alone.
  const date = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
  const line = ["SHARED UNDER NDA", recipient, date, "NOT FOR REDISTRIBUTION"]
    .filter(Boolean).join(" \u00b7 ");
  return (
    <div aria-hidden="true" data-nda-watermark
      className="fixed inset-0 overflow-hidden"
      style={{
        // Over the page and its sticky header, under the bottom nav, the
        // section rail and the menu — site chrome stays clean.
        zIndex: 25,
        pointerEvents: "none",
        userSelect: "none", WebkitUserSelect: "none",
        opacity: isDark ? 0.06 : 0.04,
        color: isDark ? "#fff" : INK,
      }}>
      <div style={{ position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%",
                    transform: "rotate(-30deg)", transformOrigin: "center" }}>
        {Array.from({ length: WATERMARK_ROWS }, (_, row) => (
          <div key={row} className="flex whitespace-nowrap"
            style={{ gap: 64, height: WATERMARK_ROW_GAP, alignItems: "center",
                     // A third of a line per row, so the gaps between
                     // instances never line up into a clear channel.
                     marginLeft: (row % 3) * 180 }}>
            {Array.from({ length: WATERMARK_PER_ROW }, (_, i) => (
              <span key={i} className="font-['Nunito_Sans',sans-serif] uppercase"
                style={{ fontSize: 11, letterSpacing: "0.2em" }}>
                {line}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// The line itself, so the page footer and the mobile menu cannot drift apart.
function SiteCredit({ align = "left" }: { align?: "left" | "right" }) {
  const isDark = useContext(DarkModeCtx);
  const year = new Date().getFullYear();
  return (
    <p className="font-['Nunito_Sans',sans-serif] whitespace-nowrap"
      style={{ ...quietText(isDark), textAlign: align }}>
      Designed and built by Tiffany Chew · © {year}
    </p>
  );
}

// Desktop only, and site chrome rather than page content — one line under the
// nav bar, in the strip the phone gives its page indicator, at the same offset
// from the bottom. On a phone the credit lives in the menu instead, on the row
// that closes it, so a small screen does not spend its last line on a byline.
//
// It used to end each page's content and pull back across the rail to start on
// the logomark's column. That column is unreachable from inside a page: past
// the homepage the page layer is offset to clear the rail and it scrolls, so
// it clips horizontally too, and the pull took the line straight into the
// clipped strip — it read as "and built by Tiffany Chew" with the first word
// gone. Out here the left inset is simply the bar's own, which is the mark's
// column as well.
function SiteCreditBar() {
  return (
    <div className="hidden md:block fixed z-30 pointer-events-none"
      style={{ left: RAIL_GUTTER, right: RAIL_GUTTER,
               bottom: `calc(${NAV_UNDERLINE_BOTTOM} + env(safe-area-inset-bottom))` }}>
      <SiteCredit />
    </div>
  );
}

// The identity rail: the logomark, held down the left of every page but the
// homepage, on desktop only. The homepage hero is where the mark is
// introduced; here it has settled into a fixed column that carries it for the
// rest of the site.
//
// RAIL_W is the one number the layout is built from. The page layer starts
// after it, and so does the bottom nav, so the rail's edge is the site's left
// margin on desktop rather than the viewport's.
//
// It is derived, not chosen: the site's own 80px gutter plus the mark, and
// nothing after it. The space between the mark and the first word of the page
// is then the page's own md:px-20 and only that, which is the same gap every
// other element on the site keeps from the edge. An earlier
// clamp(200px, 15vw, 260px) added a second gutter on top of that one and the
// mark read as stranded in a panel of its own.
//
// It starts at lg, not md: at 768 a sidebar takes a quarter of the screen
// from the content, so those widths keep today's layout.
// Page transition. The mark does not move between pages — it is a fixed layer
// and the page travels under it — so the page has to carry the motion, or the
// mark reads as re-drawn on each load rather than as the one thing that
// stayed. 140px is far enough to read as travel and short enough that neither
// page is mostly off-screen mid-flight; a full-width slide turns a cross-fade
// into a carousel, and the two pages are stacked, not sequential.
//
// Defined out here, and driven by `custom` rather than by a closure, because
// the leaving page needs the direction of the move that is leaving it. Read
// from a closure it gets the value from its own last render, which is the
// direction of the *previous* navigation — in practice 0, so it stood still
// and only faded while the incoming page slid in over it.
const PAGE_SLIDE = 140;
type PageMotion = { dir: number; drill: boolean };
const pageVariants = {
  enter: (c: PageMotion) => c.drill
    ? { opacity: 0, scale: 0.965, y: 18, x: 0 }
    : { opacity: 0, scale: 1, y: 0, x: c.dir * PAGE_SLIDE },
  center: { opacity: 1, scale: 1, y: 0, x: 0 },
  exit: (c: PageMotion) => c.drill
    ? { opacity: 0, scale: 1, y: 0, x: 0 }
    : { opacity: 0, scale: 1, y: 0, x: -c.dir * PAGE_SLIDE },
};

const RAIL_GUTTER = 80;   // matches the md:px-20 every page starts from
// The mark is sized and placed off the page heading, not chosen: it stands as
// tall as the heading's em box and sits on the heading's own baseline, so the
// two read as one line rather than as a mark floating beside a title.
//
// 64px is the heading size on the pages that set the site's rhythm — Work,
// Awards, Coaching, Connect — and 129px is where their baseline falls. Case
// study headings are smaller (52px), so their baseline lands at 131 and
// Testimonials at 137; measured across 1280, 1440 and 1728 the spread is
// 127–137, close enough that one position serves all of them.
const RAIL_HEADING_SIZE = 64;
const RAIL_HEADING_BASELINE = 129;
// LogoMark draws at 80x112, so its height is 1.4x the width it is given.
const RAIL_MARK = Math.round(RAIL_HEADING_SIZE / 1.4);
const RAIL_MARK_TOP = RAIL_HEADING_BASELINE - RAIL_HEADING_SIZE;
const RAIL_W = `${RAIL_GUTTER + RAIL_MARK}px`;

function IdentityRail({ onNavigate, progress, visible = true }: { onNavigate: (p: Page) => void; progress: MotionValue<number>; visible?: boolean }) {
  const goHome = useContext(GoHomeCtx);
  // There is one logomark on a desktop screen and this is it. It parks over
  // the hero's corner on the homepage — the hero leaves an empty box for it —
  // and travels into the rail as the deck leaves that slide. The hero used to
  // draw its own as well, which put two on screen for the length of that
  // slide change.
  //
  // `progress` is the journey, 0 at the hero and 1 in the rail, and it is a
  // motion value rather than React state because on the deck it is the scroll
  // position: the mark is not animating on its own timer, it is pinned to how
  // far the track has moved, the way a thing on the page would be. A tween of
  // its own only runs where there is no scroll to ride — a page change.
  //
  // The hero mark is right-aligned inside the hero's px-20, so its left edge
  // is viewport - 80 - 70. Everything else here is a fixed delta from the
  // rail's own position, which is why the viewport width is the only thing
  // that has to be measured.
  const [vw, setVw] = useState(typeof window === "undefined" ? 1440 : window.innerWidth);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const homeX = vw - (RAIL_GUTTER + HERO_MARK.desktop.w) - RAIL_GUTTER;
  const homeY = 64 - RAIL_MARK_TOP;
  // Drawn at the rail's size and scaled up for the hero end, rather than
  // re-rendered at a new size: an SVG scales cleanly, and animating a width
  // would relayout every frame.
  const homeScale = HERO_MARK.desktop.w / RAIL_MARK;
  // 1 lands it in the rail, 0 back over the hero's empty box.
  const x     = useTransform(progress, t => homeX * (1 - t));
  const y     = useTransform(progress, t => homeY * (1 - t));
  const scale = useTransform(progress, t => homeScale + (1 - homeScale) * t);
  return (
    // Never unmounted — it is the one element that stays put while pages slide
    // underneath, and an unmount would make it something each page draws for
    // itself.
    <div className="hidden lg:block fixed top-0 bottom-0 left-0 z-20 pointer-events-none"
      style={{ width: "var(--rail-w)" }}>
      <motion.button onClick={() => (goHome ? goHome() : onNavigate("home"))}
        aria-label="Tiffany C. — home"
        className="absolute cursor-pointer"
        // Not a link on the homepage — you are already there, and the hero
        // is where the mark is simply itself rather than a way back.
        // Opaque throughout. It used to fade in over the hero's own mark,
        // because there were two; now this is the only mark on a desktop
        // screen, so fading it would leave the hero with none.
        style={{ left: RAIL_GUTTER, top: RAIL_MARK_TOP, background: "none", border: "none", padding: 0,
                 transformOrigin: "top left", pointerEvents: visible ? "auto" : "none",
                 x, y, scale }}>
        <LogoMark size={RAIL_MARK} />
      </motion.button>
    </div>
  );
}

// The fade the site uses wherever content runs under the floating nav: a
// translucent wash of the page colour with a blur behind it, masked so it
// dissolves upward into the content. Long pages slide under the bar instead
// of being cut off at it, and the blur keeps whatever is passing beneath
// from competing with the nav's own labels.
//
// It reaches 24px above the bar, so the dissolve has somewhere to happen.
const NAV_FADE_MASK = "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)";
const NAV_FADE_LEAD = 24;
const navFade = (isDark: boolean): React.CSSProperties => ({
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  background: isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)",
  maskImage: NAV_FADE_MASK,
  WebkitMaskImage: NAV_FADE_MASK,
});

// The floating nav's offset from the bottom, and the gap the page leaves above
// it. Both the homepage deck and every other page read these, because they had
// drifted: the deck sat at 5% and the pages at 3%, so the bar jumped lower the
// moment you left home, and the swipe indicator — pinned at 2% for the deck's
// spacing — ended up touching the pill.
const NAV_BOTTOM = "5%";
const NAV_BOTTOM_DVH = "5dvh";
// The strip beneath the nav bar. A phone puts its page indicator there; a
// desktop screen puts the credit there. One constant so the two cannot drift.
const NAV_UNDERLINE_BOTTOM = "2%";
// The wide pill's height. Clearance is figured from this rather than from the
// 44px square, so the taller of the two is always cleared.
const MOBILE_NAV_BAR = 56;
const FOOTER_TO_NAV = 24;

// Sits under a page's last line so the content clears the floating nav by
// FOOTER_TO_NAV. Two blocks rather than one: the bar is 64 tall on desktop and
// 56 on mobile, and a media query cannot be written inline. The dvh term
// mirrors the nav's own percentage offset.
function NavClearance() {
  return (
    <>
      <div className="md:hidden"
        style={{ height: `calc(${NAV_BOTTOM_DVH} + env(safe-area-inset-bottom) + ${MOBILE_NAV_BAR + FOOTER_TO_NAV}px)` }} />
      <div className="hidden md:block"
        style={{ height: `calc(${NAV_BOTTOM_DVH} + ${64 + FOOTER_TO_NAV}px)` }} />
    </>
  );
}

const AUTO_DURATION = 5000;

// Padding inside the mobile nav bar, in px. NAV_PAD_X mirrors the `px-5` class
// on it — the minimised width is computed from this, so the two have to agree
// or the bar stops being symmetric. NAV_PAD_Y applies to the minimised state
// only: the expanded bar keeps its fixed 56px height.
// The mobile nav pill — square, and 44 so the tap target clears the minimum
// however small the icon inside it is.
const MOBILE_NAV_PILL = 44;
// The morphing menu symbol's box. Named because the homepage's bar sizes its
// collapsed hit area from it.
const MENU_ICON_SIZE = 24;
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

export function HomePage({ onNavigate, onOpenDetail, initialIdx = 0, heroProgress, resetSignal = 0 }: { onNavigate: (p: Page) => void; onOpenDetail?: (key: string) => void; initialIdx?: number; heroProgress?: MotionValue<number>; resetSignal?: number }) {
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
  // Held in a ref because the scroll listener is bound once, on mount. A
  // motion value is stable across renders, so it needs no ref of its own.
  const heroProgressRef = useRef(heroProgress);
  heroProgressRef.current = heroProgress;
  // The tween that carries the mark home when the deck mounts. The first
  // scroll stops it: past that the scroll is the animation.
  const heroTween = useRef<{ stop: () => void } | null>(null);
  const reduceMotion = useReducedMotion();
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
  const navBtnRef = useRef<HTMLSpanElement | null>(null);
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

  // "Go home" from anywhere in the site means the hero. From another page
  // that is a mount and initialIdx handles it, but from inside the deck the
  // page is already "home", so setPage("home") changes nothing, nothing
  // moved, and the address bar kept the section's route. This is the deck's
  // half of it: a bumped signal scrolls the track back to slide 0, and the
  // scroll rewrites the URL on its way.
  useEffect(() => {
    if (resetSignal > 0) goTo(0);
  }, [resetSignal, goTo]);

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
      // The logomark rides this, rather than firing a tween of its own once
      // the slide has changed. Tied to a threshold it waited — going back to
      // the hero it only knew at scrollLeft 0, so it sat in the rail for the
      // whole return and then shot right. Tied to the scroll it simply comes
      // with the page, and stops where the page stops.
      const p = heroProgressRef.current;
      if (p) {
        heroTween.current?.stop();
        heroTween.current = null;
        p.set(Math.max(0, Math.min(1, el.scrollLeft / el.clientWidth)));
      }
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

  // Read off the slide you have arrived at, not assumed to be the top of it.
  // Swiping past an embedded section does not unmount it — the slide keeps its
  // scroll position in the track — so coming back to one you had scrolled left
  // this flag false while the content was still well down the page, and the
  // sticky header sat over the quotes with nothing behind it.
  useEffect(() => {
    const el = embedSectionRefs.current[SECTIONS[activeIdx]?.key ?? ""];
    setNavMinimized(!!el && el.scrollTop > 24);
  }, [activeIdx]);
  // Arriving from another page there is no scroll to ride — the deck mounts
  // already at slide 0 — so this one stretch of the journey is a tween. It is
  // cancelled by the first scroll, which takes over.
  useEffect(() => {
    const p = heroProgressRef.current;
    if (!p || p.get() === 0) return;
    const controls = animate(p, 0, reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] });
    heroTween.current = controls;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {/* pt-8 rather than pt-14: the top is the other place height can
              come from, and the mark no longer needs a deep shoulder above it.
              The bottom reserve is not a candidate — it is what holds the copy
              clear of the floating nav and the "swipe to explore" line. */}
          <div className="lg:hidden relative flex flex-col px-6 pt-8"
            style={{ minHeight: "100%", paddingBottom: HERO_BOTTOM_RESERVE }}>
            <span className="self-end" style={{ width: HERO_MARK.mobile.w, height: HERO_MARK.mobile.h }}>
              <LogoMark size={HERO_MARK.mobile.w} className="w-full h-full" />
            </span>
            {/* Auto margins, not justify-center: a centred flex child that
                overflows spills past BOTH ends, putting the heading out of
                reach even once the slide scrolls. Auto margins centre only
                while there's room to spare. */}
            <div className="flex flex-col gap-4" style={{ marginTop: "auto", marginBottom: "auto" }}>
              {/* The portrait sits on the heading's baseline rather than
                  floating from its top: bottom-aligned, the two read as one
                  block instead of the photo hanging above the last lines.
                  A float can only align to the top of the line it sits on,
                  so this is a flex row — which also means the heading wraps
                  in its own column rather than around a circle. */}
              <div className="flex items-end gap-4">
                {/* Fluid like the body copy below it, rather than locked at
                    3rem. At four lines a fixed 3rem heading was what pushed
                    the hero past the fold on shorter phones. */}
                <h1 className="flex-1 min-w-0 font-['Museo',sans-serif] font-light"
                  style={{ fontSize: "clamp(2.25rem, 11vw, 3rem)", lineHeight: 1.1, color: GOLD, margin: 0 }}>
                  Hi, I'm a product &amp; design leader
                </h1>
                <img
                  src={profilePhoto}
                  alt="Tiffany Chew"
                  className="rounded-full object-cover flex-shrink-0"
                  style={{
                    width: "34vw",
                    height: "34vw",
                    maxWidth: 160,
                    maxHeight: 160,
                    border: `1px solid ${GOLD}`,
                  }}
                />
              </div>
              {/* text-small, the size the Work card descriptions use: the hero's
                  body is the longest block on the phone and at text-body it ran
                  past the screen and under the nav. Desktop keeps text-body, where
                  there is room for it. */}
              <p className="font-['Nunito_Sans',sans-serif] text-small leading-relaxed"
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
          <div className="hidden lg:flex absolute inset-0 flex-col px-20"
            style={{ paddingTop: 64, paddingBottom: "calc(64px + 5vh + 64px)" }}>
            {/* Empty on purpose. From lg the mark you see here is the fixed
                one IdentityRail holds, parked over this box until the deck
                leaves the hero. Drawing a second one here put two marks on
                screen for the whole of that first slide change — this one
                scrolling away with the slide while the rail's flew in past
                it. The box stays so the stack below it does not move. */}
            <span className="self-end" aria-hidden
              style={{ width: HERO_MARK.desktop.w, height: HERO_MARK.desktop.h }} />
            {/* Photo left + right column (heading, body, swipe cue). Row is
                full-width; text column is capped at ~55% so the right 40%
                stays naturally empty. */}
            <div className="flex items-start gap-12" style={{ marginTop: 48, flex: 1, minHeight: 0 }}>
              <img
                src={profilePhoto}
                alt="Tiffany Chew"
                className="rounded-full object-cover flex-shrink-0"
                style={{
                  width: "15vw",
                  height: "15vw",
                  maxWidth: 200,
                  maxHeight: 200,
                  border: `1px solid ${GOLD}`,
                }}
              />
              <div className="flex flex-col gap-6" style={{ maxWidth: "55%" }}>
                <h1 className="font-['Museo',sans-serif] font-light" style={{ fontSize: "4rem", lineHeight: 1.05, color: GOLD, margin: 0 }}>
                  Hello, I'm Tiff&nbsp;—<br />
                  a product &amp; design leader
                </h1>
                <p className="font-['Nunito_Sans',sans-serif] text-body leading-relaxed"
                  style={{ color: bodyCol }}>
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
                <p className="font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-widest"
                  style={{ color: dimCol }}>
                  swipe to explore
                </p>
              </div>
            </div>
          </div>
          {/* Hairline above the nav. The pulsing "scroll" cue that used to sit
              at its right-hand end is gone, for the same reason as the mobile
              "swipe to explore" label — the hero's words come first. */}
          <div className="hidden lg:block">
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
                // The slide stays a viewport wide — it is the deck's track and
                // narrowing it would break the snap — so the rail's room is
                // padding inside it, not width taken off it. The embedded page
                // brings its own px-20, which lands under the mark otherwise.
                className="flex-shrink-0 relative scrollbar-hide lg:pl-[var(--rail-w)]"
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

              {/* On desktop these slides start after the rail, exactly as every
                  other page does — the mark is chrome over the deck here, and
                  at the page's own px-20 it landed on top of the heading. The
                  hero is the exception: its own mark is the one on screen
                  there, so it keeps the full width it was designed in. */}
              <div className="relative z-10 flex flex-col h-full px-6 md:px-20 pt-10 md:pt-14 lg:pl-[calc(var(--rail-w)+80px)]"
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
                  {section.items.map((entry, k) => {
                    const itemColor = isDark ? "white" : INK;
                    const row = asRow(entry);
                    return (
                      <div key={row.join("|")} style={{ borderBottom: `1px solid ${border}`, lineHeight: 0, overflow: "hidden" }}>
                        <div style={{
                          clipPath: isActive ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                          transition: `clip-path 0.55s cubic-bezier(0.4,0,0.2,1) ${0.22 + k * 0.09}s`,
                        }}>
                          <ContactRow row={row} accent={section.accent} itemColor={itemColor} linkColor={HEADING_COLOUR[section.key]} borderColor={border} onNavigate={onNavigate} />
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

      {activeIdx === 0 && isMobile && (
        <p className="absolute z-30 font-['Avenir',sans-serif] font-light text-[0.6rem] uppercase tracking-widest"
          style={{
            bottom: "calc(5% + 56px + 14px + env(safe-area-inset-bottom))",
            right: 24,
            color: dimCol,
          }}>
          swipe to explore
        </p>
      )}

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
          top: `calc(100% - (5% + ${64 + NAV_FADE_LEAD}px))`,
          bottom: 0,
          ...navFade(isDark),
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
          top: `calc(100% - (5% + env(safe-area-inset-bottom) + ${56 + NAV_FADE_LEAD}px))`,
          bottom: 0,
          ...navFade(isDark),
        }} />

      {/* While the menu is open the bar collapses to its control and climbs
          above the overlay, so the symbol you pressed is the symbol that
          closes it. The name and the section label go with the width — the
          open menu lists both already. */}
      {/* The bar is the button, not a bar with a button in it. The tap target
          used to be the symbol and the name — about 116px of a 342px bar — so
          the whole right half, section label included, looked pressable and
          did nothing. Nothing inside it is separately interactive, so the
          outer element can carry the press. */}
      <motion.button className="fixed md:hidden flex items-center px-5 overflow-hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        style={{
          border: "none",
          zIndex: menuOpen ? 60 : 30,
          bottom: "calc(5% + env(safe-area-inset-bottom))", left: 24,
          borderRadius: 0,
          background: menuOpen ? "transparent" : navGradient(isDark),
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          boxShadow: menuOpen ? "none" : "0 8px 32px rgba(0,0,0,0.18)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
        animate={{
          // Open, the bar trims from the right and keeps its left edge, its
          // padding and its height — so the symbol morphing inside it does not
          // travel while it morphs. The box is transparent by then, so its
          // width is only ever a hit area.
          width:  menuOpen ? NAV_PAD_X * 2 + MENU_ICON_SIZE
                : navShrunk ? navBtn.w + NAV_PAD_X * 2 : "calc(100% - 48px)",
          // Minimised takes the same 44 the standalone pill does, rather than
          // a height derived from the control inside it. Derived, it grew with
          // the button's tap padding and came out at 68 — taller than the 56
          // it was supposedly shrinking from.
          height: navShrunk ? MOBILE_NAV_PILL : 56,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
        {/* The measurement sits on the content, not the bar: the minimised
            width is meant to be the width of what you can see. */}
        <span ref={navBtnRef} className="flex items-center gap-3">
          <MenuIcon open={menuOpen} color={menuOpen ? (isDark ? "white" : INK) : "white"} />
          {!menuOpen && (
            <span className="font-['Museo',sans-serif] font-light text-small text-white whitespace-nowrap">
              Tiffany C.
            </span>
          )}
        </span>
        {!navShrunk && !menuOpen && (
          <>
            <div className="flex-1" />
            {activeIdx > 0 && (
              <span className="font-['Museo',sans-serif] font-light text-small text-white/75">
                {currentSection.label}
              </span>
            )}
          </>
        )}
      </motion.button>

      {/* Mobile menu overlay */}
      <MobileMenu
        open={menuOpen}
        hideClose
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
    key: "ai", slug: "ai-ux", title: "AI + UX DesignOps", accent: GOLD, Illustration: IllustrationAI,
    description: "Designing and iterating AI-native workflows and infrastructure from the ground up.",
    bullets: ["2023 TNG eWallet: Reduced trilingual UX copy turnaround by 20% through AI tooling", "AI-native hiring standards & team norms at Cotton On Group"],
  },
  {
    key: "business", slug: "business-acumen", title: "Business Acumen", accent: "#8A6E2E", Illustration: IllustrationBusiness,
    description: "Aligning product design with measurable revenue growth and user outcomes.",
    bullets: [
      "FinTech: Balancing user preference & business result (passcode required)",
      "eCommerce: Behavioural UX Design (passcode required)",
    ],
  },
  {
    key: "ux", slug: "product-ux-strategies", title: "Product & UX Strategies", accent: "#5070A0", Illustration: IllustrationUX,
    description: "Setting design direction and the systems to measure whether it worked, from 0-to-1 SaaS to platforms used by millions daily.",
    bullets: ["Brand Perception & UX Strategy — TNG eWallet (passcode required)", "Built UX Research function & company-wide NPS benchmarks from scratch", "Multi-platform, multi-brand design system adhering to accessibility standards", "End-to-end product design: discovery → delivery across fintech, retail & SaaS"],
  },
  {
    key: "people", slug: "people-process", title: "People & Process", accent: "#5070A0", Illustration: IllustrationPeople,
    description: "Built high-performing multidisciplinary teams and cross-unit prioritisation frameworks.",
    bullets: ["Team growth: 7 → 22 designers, writers and built UX research function from scratch across B2C, B2B & Research (2022–2024)", "Chapter Lead — Ladies that UX, Kuala Lumpur (2022–2024)"],
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
    description: "Hands-on product design: research, design sprints, prototyping, shipped work.",
    bullets: [
      "Apple Health — Design Challenge",
      "KAI — Mobile app for IoT device control",
      "SOURCE — Energy performance management dashboard",
      "TNG eWallet Visa Card — Malaysia's first numberless card",
    ],
  },
];

// Work-card bullets that are really links into a case study. Keyed on the
// bullet's exact text, so the copy above stays the single place it is written.
// Brand Perception is deliberately absent: the page is finished enough to
// read at its own URL but not signed off, so the Work index names it without
// opening it. Putting the line back here is all it takes to link it.
const BULLET_LINKS: Record<string, Page> = {
  "eCommerce: Behavioural UX Design (passcode required)": "businessCase",
  "KAI — Mobile app for IoT device control": "kaiCase",
  "Apple Health — Design Challenge": "appleHealthCase",
  "SOURCE — Energy performance management dashboard": "sourceCase",
  "TNG eWallet Visa Card — Malaysia's first numberless card": "visaCardCase",
  "FinTech: Balancing user preference & business result (passcode required)": "finTechCase",
};

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
        <h2 className="font-['Museo',sans-serif] font-light"
          style={{ fontSize: LIST_TITLE_SIZE, color: titleColor }}>
          {card.title}
        </h2>
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
    <div className="relative w-full flex flex-col" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10"
        style={{
          background: headerScrolled ? (isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)") : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: compact ? 16 : undefined,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={GOLD} />
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

      <div className="px-6 md:px-20 flex-1 flex flex-col" style={{ maxWidth: 760 }}>
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
            // A bullet that names a case study is a link to it. This was four
            // hand-written branches with the same body; a fifth would have made
            // the shape harder to read than the data it encodes.
            const target = BULLET_LINKS[b];
            return (
              <li key={b} className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: bodyText }}>
                {target ? (
                  /* The dash sits outside the link and the sweep goes on the
                     text span, so the underline is the width of the words —
                     the same shape as the resource links above. On the button
                     itself (display:block, width:100%) it drew a rule across
                     the whole row. */
                  <button onClick={() => onNavigate(target)}
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

        {/* Plain credit: this is the category listing, not a case study. The
            permission and NDA clauses belong on the work itself. */}
        {/* Fills whatever the content leaves, so the credit line lands on
            the nav rather than stopping wherever the copy happens to end. */}
        <div className="flex-1" />
        <NavClearance />
      </div>
    </div>
  );
}



// Is the sticky header currently sitting over something dark?
//
// The header's backdrop is part-opaque, so a dark image scrolling under it
// drags the surface down with it and a gold heading loses its contrast.
//
// It measures the strip of image that is actually behind the header, not the
// image as a whole. A phone screenshot is a black UI on a white surround: dark
// on average, but the part under the header is the white margin — averaging
// the whole thing turned the heading white against white.
function useOnDarkBackdrop(headerRef: React.RefObject<HTMLDivElement | null>) {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const findScrollParent = (el: HTMLElement | null): HTMLElement | null => {
      for (let n = el?.parentElement ?? null; n; n = n.parentElement) {
        const o = getComputedStyle(n).overflowY;
        // Identify the container by how it's styled, not by whether it happens
        // to overflow yet — at mount the images haven't laid out, and an early
        // return here would leave the hook dead for the page's life.
        if (o === "auto" || o === "scroll") return n;
      }
      return null;
    };
    const root = findScrollParent(headerRef.current);
    if (!root) return;

    // The frosted bar's own opacity, and the page colour behind it.
    const HEADER_TINT_ALPHA = 0.55;
    const pageLum = getComputedStyle(document.documentElement)
      .getPropertyValue("color-scheme").includes("dark") ? 0.16 : 0.968;

    const canvas = document.createElement("canvas");
    canvas.width = 12; canvas.height = 12;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let raf = 0;

    // Mean luminance of just the part of `img` inside `hr`, or null if they
    // don't overlap or the pixels can't be read.
    const luminanceBehind = (img: HTMLImageElement, hr: DOMRect): number | null => {
      if (!ctx || !img.naturalWidth) return null;
      const r = img.getBoundingClientRect();
      const x1 = Math.max(hr.left, r.left), x2 = Math.min(hr.right, r.right);
      const y1 = Math.max(hr.top, r.top),   y2 = Math.min(hr.bottom, r.bottom);
      if (x2 - x1 < 1 || y2 - y1 < 1) return null;

      // Where the pixels sit inside the element box depends on object-fit.
      const { naturalWidth: nw, naturalHeight: nh } = img;
      const fit = getComputedStyle(img).objectFit;
      let dw = r.width, dh = r.height, dx = r.left, dy = r.top;
      if (fit === "contain" || fit === "cover") {
        const sc = fit === "contain"
          ? Math.min(r.width / nw, r.height / nh)
          : Math.max(r.width / nw, r.height / nh);
        dw = nw * sc; dh = nh * sc;
        dx = r.left + (r.width - dw) / 2;
        dy = r.top + (r.height - dh) / 2;
      }
      const sx = Math.max(0, (x1 - dx) / dw * nw);
      const sy = Math.max(0, (y1 - dy) / dh * nh);
      const sw = Math.min(nw - sx, (x2 - x1) / dw * nw);
      const sh = Math.min(nh - sy, (y2 - y1) / dh * nh);
      if (sw < 1 || sh < 1) return null;

      try {
        ctx.clearRect(0, 0, 12, 12);
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, 12, 12);
        const { data } = ctx.getImageData(0, 0, 12, 12);
        let sum = 0, n = 0;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] < 8) continue;           // skip anything transparent
          sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
          n++;
        }
        return n ? sum / n / 255 : null;
      } catch {
        return null;                                // tainted canvas: unknown
      }
    };

    // What of the element is actually on screen. A collapsed accordion clips
    // its contents to nothing, but the image inside still reports its full
    // rect — so without this a hidden photo votes on the heading's colour.
    const visibleRect = (el: HTMLElement): DOMRect | null => {
      let r = el.getBoundingClientRect();
      let l = r.left, t = r.top, rt = r.right, b = r.bottom;
      for (let n = el.parentElement; n; n = n.parentElement) {
        const cs = getComputedStyle(n);
        if (cs.overflow === "visible" && cs.overflowY === "visible" && cs.overflowX === "visible") continue;
        const c = n.getBoundingClientRect();
        l = Math.max(l, c.left); t = Math.max(t, c.top);
        rt = Math.min(rt, c.right); b = Math.min(b, c.bottom);
        if (rt - l < 1 || b - t < 1) return null;
      }
      return new DOMRect(l, t, rt - l, b - t);
    };

    const measure = () => {
      const header = headerRef.current;
      if (!header) return;
      // Measure behind the heading itself, not the whole bar. The bar is tall
      // and the text sits low in it, so an image covering the bar's top while
      // the words sit over page colour was flipping them white against cream.
      const target = (header.querySelector("h1") as HTMLElement | null) ?? header;
      const hr = target.getBoundingClientRect();
      if (hr.height < 4) return;
      let dark = false;
      root.querySelectorAll("img").forEach(el => {
        if (dark) return;
        const img = el as HTMLImageElement;
        const cs = getComputedStyle(img);
        if (cs.visibility === "hidden" || cs.display === "none" || parseFloat(cs.opacity) < 0.5) return;
        const r = visibleRect(img);
        if (!r) return;
        // The image has to be most of the band, not merely in it. A 300px
        // phone mock in a 430px header leaves the rest of the row cream —
        // and the heading spans the whole width, so white text would cross
        // from the dark mock onto the light page and disappear. Gold holds up
        // on both, so only a backdrop that is dark end to end earns the flip.
        const covered = Math.min(hr.bottom, r.bottom) - Math.max(hr.top, r.top);
        const across  = Math.min(hr.right, r.right) - Math.max(hr.left, r.left);
        if (covered < hr.height * 0.6 || across < hr.width * 0.85) return;
        const l = luminanceBehind(img, hr);
        if (l === null) return;
        // What the eye actually gets is the image seen through the header's
        // part-opaque backdrop, which lifts it a long way towards the page
        // colour: a near-black image composites to about 0.58, not 0.11.
        // Threshold on that composite, or white text gets used on backdrops
        // where gold was the better read.
        const composite = HEADER_TINT_ALPHA * pageLum + (1 - HEADER_TINT_ALPHA) * l;
        if (composite < 0.62) dark = true;
      });
      setOnDark(dark);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

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
  }, [headerRef]);

  return onDark;
}

// ─── KAI case study ───────────────────────────────────────────────

const KAI_SECTIONS: { id: string; label: string }[] = [
  // Background & Brief has no dot of its own: it reads as the back half of
  // the overview, and the rail stays with Overview while you are in it.
  { id: "kai-overview",  label: "Overview" },
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
      <a href={PLUS_XNERGY_URL} target="_blank" rel="noopener noreferrer"
        className="link-underline" style={{ color: fg }}>Plus Xnergy</a>
    )],
    ["Goal", "Monitor and manage energy use in real time"],
    ["Scope", "Design sprint facilitation, design strategy, UX & UI design"],
    ["Role", "Design Innovation Manager"],
    ["Team size", "2 designers"],
  ];

  const OUTCOMES: { Icon: typeof PiggyBank; text: string }[] = [
    { Icon: PiggyBank, text: "Helped businesses save up to 20% on Maximum Demand charges" },
    { Icon: Heart,     text: "“Extremely user friendly” — KAI's mobile user feedback" },
    { Icon: LineChart, text: "Monitor and manage energy usage in real time" },
  ];

  const Fig = ({ src, alt, caption, max = FIGURE_MAX }: { src: string; alt: string; caption?: string; max?: number }) => (
    <figure style={{ margin: '28px 0 0' }}>
      <img src={src} alt={alt} loading="lazy" className="mx-auto md:mx-0"
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
          {/* The three outcomes, as the original deck showed them: a band of
              equals. Promoting one of them to the section heading and
              demoting another to a caption under it lost the third
              altogether, and lost the point — the case delivered a saving,
              a reception and a capability, not one headline with footnotes. */}
          <ul className="grid gap-8 md:gap-10 md:grid-cols-3" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {OUTCOMES.map(({ Icon, text }) => (
              // Icon beside the text on a phone, above it on desktop. Stacked,
              // three of these ran the band down most of the screen for three
              // short lines; alongside, each outcome is one block the width of
              // the column and the three read as a list again.
              <li key={text} className="flex items-start gap-4 md:flex-col md:gap-0">
                <Icon size={32} strokeWidth={1.25} style={{ color: fg }} aria-hidden="true" className="flex-shrink-0" />
                <p className="font-['Museo',sans-serif] font-light mt-0 md:mt-4"
                  style={{ color: fg, fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)', lineHeight: 1.25, margin: 0 }}>
                  <Figures>{text}</Figures>
                </p>
              </li>
            ))}
          </ul>

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
              <img src={kaiHomeScreen} alt="KAI home screen — building data and connected devices" loading="lazy" className="mx-auto md:mx-0"
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
              <img src={kaiControls} alt="KAI machine controls — on/off toggles and schedule icons" loading="lazy" className="mx-auto md:mx-0"
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
              <img src={kaiSchedule} alt="KAI schedule chart — daily and weekly machine scheduling" loading="lazy" className="mx-auto md:mx-0"
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
      </div>
    </div>
  );
}

function KaiCasePage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const onDark = useOnDarkBackdrop(headerRef);
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
    // The case study reads as a white document laid on the site's cream,
    // rather than as more of the page it came from. The whole page takes the
    // white, header band included — white content under a cream heading puts
    // a seam across the top of every scroll.
    <div className="relative w-full" style={{ minHeight: "100dvh", background: isDark ? "transparent" : "#ffffff" }}>
      <div ref={scrollRef} className="absolute inset-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div ref={headerRef} className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled
            // A 20% black tint under the frost while the heading is white,
            // so the words have something to sit against rather than
            // relying on whatever happens to be passing beneath.
            ? (onDark
                ? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), rgba(255,255,255,0.55)"
                : isDark ? "rgba(40,40,40,0.55)" : "rgba(255,255,255,0.55)")
            : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={onDark ? "#fff" : GOLD} />
          <Breadcrumbs color={headingColor} items={[
            { label: "Work", onClick: () => onNavigate("work") },
            { label: "Case Studies", onClick: onBack },
          ]} />
          <h1 className="font-['Museo',sans-serif] font-light"
            style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: headingColor, margin: 0, transition: 'font-size 0.3s ease, color 0.3s ease' }}>
            KAI: Mobile app for IoT devices control
          </h1>
        </div>

        <KaiCaseContent />
        <NavClearance />
      </div>
      <CaseSectionRail scrollRef={scrollRef} sections={KAI_SECTIONS} />
    </div>
  );
}


// ─── SOURCE case study ────────────────────────────────────────────
// Plus Solar Systems' energy performance management dashboard, 2018–2019.
// The sibling of the KAI case: same client, same ecosystem, the web
// dashboard KAI later put in a pocket. It follows KAI's shape deliberately —
// a reader who has just come from one should not have to relearn the other.
const SOURCE_SECTIONS: { id: string; label: string }[] = [
  // As in KAI, Background & Brief has no dot of its own: it is the back half
  // of the overview, and the rail stays with Overview while you are in it.
  { id: "source-overview",     label: "Overview" },
  { id: "source-research",     label: "Research" },
  { id: "source-development",  label: "Development" },
  { id: "source-result",       label: "Result" },
];

function SourceCaseContent() {
  const isDark = useContext(DarkModeCtx);
  const fg   = GOLD;
  const sub  = isDark ? "rgba(255,255,255,0.75)" : DIM;
  const body = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const rule = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const ink  = isDark ? "white" : INK;
  const MEASURE = '68ch';
  const FIGURE_MAX = 760;

  const META: [string, React.ReactNode][] = [
    ["Year", "2018 – 2019"],
    ["Client", (
      <a href={PLUS_XNERGY_URL} target="_blank" rel="noopener noreferrer"
        style={{ color: GOLD }} className="link-underline">Plus Solar Systems</a>
    )],
    ["Goal", "Make building energy and solar data visible to the people who own it"],
    ["Scope", "Design strategy, UX, UI design"],
    ["Role", "Design Innovation Manager"],
    ["Team size", "1 – 2 designers"],
  ];

  // Same band as KAI's, for the same reason: the outcomes are what the case
  // delivered, and one of them promoted to a headline turns the other two
  // into footnotes.
  const OUTCOMES: { Icon: typeof PiggyBank; text: string }[] = [
    { Icon: Users,     text: "80+ daily active industrial users by March 2021" },
    { Icon: LineChart, text: "Opened new business in energy savings and maximum demand management" },
    { Icon: Layers,    text: "Became the base every later version of SOURCE was built on" },
  ];

  const Fig = ({ src, alt, caption, max = FIGURE_MAX }: { src: string; alt: string; caption?: string; max?: number }) => (
    <figure style={{ margin: '28px 0 0' }}>
      <img src={src} alt={alt} loading="lazy" className="mx-auto md:mx-0"
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

  const P = ({ children, top = 8 }: { children: React.ReactNode; top?: number }) => (
    <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: top, maxWidth: MEASURE }}>{children}</p>
  );

  // The 24px below is load-bearing: a section head is often followed straight
  // by a Label, which carries no top margin of its own, and at margin 0 the
  // two collided.
  const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-['Museo',sans-serif] font-light"
      style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)', lineHeight: 1.15, margin: '0 0 24px' }}>{children}</h2>
  );

  const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-['Museo',sans-serif] font-light"
      style={{ color: ink, fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)', lineHeight: 1.2, margin: '32px 0 0' }}>{children}</h3>
  );

  const Bullets = ({ items }: { items: string[] }) => (
    <ul className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '8px 0 0', padding: 0, listStyle: 'none', maxWidth: MEASURE }}>
      {items.map(t => (
        <li key={t} className="flex items-start gap-2" style={{ marginTop: 6 }}>
          <span className="flex-shrink-0" style={{ marginTop: 1 }}>—</span>
          <span><Figures>{t}</Figures></span>
        </li>
      ))}
    </ul>
  );

  const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <section id={id} style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
      {children}
    </section>
  );

  // The research method, as it ran: four steps, each feeding the next.
  const RESEARCH_STEPS = [
    "Stakeholder interviews",
    "Define users & personas",
    "Findings & analysis",
    "Key features & data",
  ];

  const PERSONAS: { name: string; role: string; who: string; tasks: string[]; pains: string[] }[] = [
    {
      name: "Ms. Marion", role: "Building Manager", who: "36, Female",
      tasks: [
        "Ensure the building energy performs normal",
        "Ensure solar performance with no downtime",
        "Attend to any building energy anomaly",
      ],
      pains: [
        "Wants a monthly energy consumption report to present to management without assembling it by hand",
        "Often needs to check building systems manually",
        "Alerts depend on on-site manpower, usually labour workers — a delayed alert puts both the workers and the building at risk",
      ],
    },
    {
      name: "John", role: "Senior Project Engineer", who: "29, Male",
      tasks: [
        "Conduct routine checkups on sites from time to time",
        "Ensure a healthy level of solar system performance",
        "Alert the factory owner or manager for operation and maintenance",
        "Attend to system downtime, rectify cause and problems",
      ],
      pains: [
        "Checking the solar systems is one-way — the system tells him nothing back",
        "Extracting a report from the monitoring system to share with the factory manager is counter-productive",
      ],
    },
  ];

  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', background: 'transparent' }}>
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-10" style={{ maxWidth: 'max(900px, 80%)' }}>

        <dl id="source-overview" className="grid gap-x-6 gap-y-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))', margin: 0, scrollMarginTop: 140 }}>
          {META.map(([label, value]) => (
            <div key={label}>
              <dt className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{label}</dt>
              <dd className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '6px 0 0' }}>{value}</dd>
            </div>
          ))}
        </dl>

        {/* ── Background & brief ── */}
        <section style={{ marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <ul className="grid gap-8 md:gap-10 md:grid-cols-3" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {OUTCOMES.map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-4 md:flex-col md:gap-0">
                <Icon size={32} strokeWidth={1.25} style={{ color: fg }} aria-hidden="true" className="flex-shrink-0" />
                <p className="font-['Museo',sans-serif] font-light mt-0 md:mt-4"
                  style={{ color: fg, fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)', lineHeight: 1.25, margin: 0 }}>
                  <Figures>{text}</Figures>
                </p>
              </li>
            ))}
          </ul>

          <Fig src={srcHero} alt="The SOURCE dashboard running on a tablet" />

          <div className="grid gap-8 md:grid-cols-2" style={{ marginTop: 32, maxWidth: `calc(${MEASURE} * 2)` }}>
            <div>
              <Label>Background</Label>
              <P>
                The client's core business is solar engineering. As a solar system provider, they wanted their
                customers to feel confident that the systems were performing to expectation after installation.
                SOURCE 1.0 answered that by making building energy data and solar system data visible to the
                people who had bought it.
              </P>
            </div>
            <div>
              <Label>The brief</Label>
              <P>
                Design a web-based dashboard that shows the real-time performance of the company's solar systems —
                and makes energy data worth looking at.
              </P>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <Label>My responsibilities</Label>
            <P>
              The project ran about a year, from scratch to an improved version. I started as the sole designer,
              working closely with the product owner, the hardware engineers and a solar specialist to make sure
              the data could actually be understood. A second designer joined during the product improvement phase.
            </P>
          </div>
        </section>

        {/* ── Design research & strategy ── */}
        <Section id="source-research">
          <H2>Design Research &amp; Strategy</H2>
          <Label>Research goal</Label>
          <Bullets items={[
            "Discover users' pain points and needs",
            "Find out the best practices of current dashboards",
          ]} />

          {/* The four steps as a row of their own rather than a diagram: the
              original was a boxes-and-arrows image, and four short phrases
              carry it without an asset to maintain. */}
          <ol className="grid gap-3 md:grid-cols-4" style={{ listStyle: 'none', margin: '28px 0 0', padding: 0 }}>
            {RESEARCH_STEPS.map((step, i) => (
              <li key={step} className="font-['Nunito_Sans',sans-serif] text-small flex items-start gap-3"
                style={{ color: body, border: `1px solid ${rule}`, borderRadius: 8, padding: '14px 16px' }}>
                <span className="font-['Museo',sans-serif] flex-shrink-0" style={{ color: fg }}>{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <H3>1. Stakeholder interviews</H3>
          <P>
            To deepen the understanding of the brief. The interviews happened in a meeting with the client's
            business owners, internal engineers and the business development people who face clients — between
            them, the key users of the dashboard.
          </P>

          <H3>2. Define users &amp; personas</H3>
          <P>
            Defining key features for a new product without being a domain expert meant starting from who uses it.
            The dashboard's users are not only the solar system owners but the internal engineers the original
            dashboards existed for. Two personas came out of it.
          </P>

          <div className="grid gap-6 md:grid-cols-2" style={{ marginTop: 20, maxWidth: `calc(${MEASURE} * 2)` }}>
            {PERSONAS.map(p => (
              <div key={p.name} style={{ border: `1px solid ${rule}`, borderRadius: 8, padding: 20 }}>
                <p className="font-['Museo',sans-serif] font-light" style={{ color: ink, fontSize: '1.125rem', margin: 0 }}>{p.name}</p>
                <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, margin: '4px 0 0' }}>
                  {p.role} · {p.who}
                </p>
                <div style={{ marginTop: 16 }}><Label>Key tasks</Label><Bullets items={p.tasks} /></div>
                <div style={{ marginTop: 16 }}><Label>Pain points</Label><Bullets items={p.pains} /></div>
              </div>
            ))}
          </div>

          <H3>3. Findings &amp; analysis</H3>
          <Bullets items={[
            "Existing dashboards were built for engineers to understand",
            "Simplified data followed observable patterns, using semiotic representations",
            "The visualisations were unappealing to a layman — a building supervisor is not necessarily an engineer",
          ]} />
          {/* Three of the dashboards we were measuring against, side by side:
              one is a screenshot, three is the pattern the finding describes. */}
          <div className="grid gap-4 md:grid-cols-3" style={{ marginTop: 28, maxWidth: FIGURE_MAX }}>
            {[[srcRefHuawei, "Huawei NetEco monitoring dashboard"],
              [srcRefSma, "SMA Sunny Portal PV system overview"],
              [srcRefAdmin, "Plus Solar residential admin dashboard"]].map(([src, alt]) => (
              <img key={alt as string} src={src as string} alt={alt as string} loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: 6, border: `1px solid ${rule}` }} />
            ))}
          </div>
          <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
            Existing dashboards, built for engineers: crucial data points for a solar system, laid out as tables
            and plots rather than as something a building supervisor would read.
          </p>

          <H3>4. Key features &amp; data</H3>
          <Bullets items={[
            "An overview of all buildings, mainly for internal engineers",
            "The major list of building energy consumption data: solar power, utility, exported and imported energy, performance ratio, irradiance",
            "Timestamps for crucial data points, e.g. maximum and minimum building consumption",
            "A flexible viewing mode — by year, month, week, day",
            "Export an energy report",
          ]} />
        </Section>

        {/* ── Design development ── */}
        <Section id="source-development">
          <H2>Design Development</H2>

          <Label>The challenge</Label>
          <P>
            The low-fidelity wireframe stage was dropped. Dashboard design is graphs and charts, and with the
            actual visualisation of the data in front of us the considerations ran deeper for both the designer
            and the stakeholders — which is what drove the iterations.
          </P>

          <H3>Synthesising data to design</H3>
          <P>
            The stakeholder briefing was what let me turn data into a wireframe. One customer profile — IKEA, a
            solar system owner with multiple sites across Malaysia — was taken as the case to develop against.
          </P>
          <P>
            The existing dashboard's data set the ground to start from. After gathering as many samples as
            possible, a high-fidelity wireframe went up for review. Reading a piece of that raw data was the
            first step to designing against it.
          </P>
          <Fig src={srcRawData} alt="Raw installation data from the existing monitoring system" max={380}
            caption="A piece of the raw data — total production, peak power, panels, inverter, orientation, slope. Understanding this was the first step to designing against it." />
          <Fig src={srcHifi} alt="High-fidelity wireframe of the SOURCE energy monitoring dashboard" max={480}
            caption="High-fidelity wireframe: SOURCE energy monitoring dashboard." />

          <H3>Screens design</H3>
          <P>
            Into the final stage, where the choice of colour and typography is ready to be decided.
          </P>
          <Bullets items={[
            "Left: a map view, as an overview of every building under the SOURCE system",
            "Middle: the main dashboard, a single building's energy data visualised",
            "Right: a display screen serving as a daily lookout point, and as branding",
          ]} />
          {/* The three screens the bullets above describe, in that order. */}
          <div className="grid gap-4 md:grid-cols-3" style={{ marginTop: 28, maxWidth: FIGURE_MAX }}>
            {[[srcScreenMap, "Map view — every building under the SOURCE system"],
              [srcScreenDash, "Main dashboard — one building's energy data"],
              [srcScreenDisplay, "Display screen — the daily lookout point"]].map(([src, alt]) => (
              <img key={alt as string} src={src as string} alt={alt as string} loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: 6 }} />
            ))}
          </div>

          <H3>Accessibility: a bright theme for an older generation</H3>
          <P>
            Users over fifty preferred a bright theme. White text on the original dark scheme was not legible to
            them, so the dashboard's colours were reconsidered for that group, with the contrast between colour
            and text raised.
          </P>
          <Fig src={srcBright} alt="The bright theme variant of the SOURCE dashboard" max={620}
            caption="The bright theme: the same data, with the contrast between colour and text raised." />
        </Section>

        {/* ── Result ── */}
        <Section id="source-result">
          <H2>Result</H2>
          <Label>Final production &amp; outcome</Label>
          <P>
            About 80 daily active industrial users as of March 2021 — building managers, business owners, energy
            managers and engineers.
          </P>
          <P>
            Making building consumption visible opened new business for the client in energy savings, maximum
            demand management and process automation. SOURCE 1.0 became the version every later one was built on.
          </P>
          {/* The result is the thing moving, not a still of it: the product
              walkthrough, postered on the video's own backdrop so the frame
              belongs to what plays rather than showing an unrelated slide.
              Controls rather than autoplay — it runs nearly two minutes, and
              it is the last thing on the page rather than something to scroll
              past. */}
          <figure style={{ margin: '28px 0 0' }}>
            <video
              src={srcProductionVideo}
              poster={srcVideoPoster}
              controls
              playsInline
              preload="metadata"
              aria-label="SOURCE in production — a walkthrough of the live dashboard"
              style={{ width: '100%', maxWidth: FIGURE_MAX, display: 'block', borderRadius: 8, background: '#000' }}
            />
            <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
              SOURCE in production.
            </figcaption>
          </figure>
        </Section>

      </div>
    </div>
  );
}

function SourceCasePage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const onDark = useOnDarkBackdrop(headerRef);
  const headingColor = onDark ? "#ffffff" : isDark ? GOLD_BRIGHT : GOLD;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setHeaderScrolled(el.scrollTop > 24);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Cream, not KAI's white. KAI is white because its content is a white
    // document; this one is the site's own ground, and going white here would
    // make the rail's strip the odd colour again for no gain.
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div ref={scrollRef} className="absolute inset-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div ref={headerRef} className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled
            ? (onDark
                ? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), rgba(248,247,245,0.55)"
                : isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)")
            : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={onDark ? "#fff" : GOLD} />
          <Breadcrumbs color={headingColor} items={[
            { label: "Work", onClick: () => onNavigate("work") },
            { label: "Case Studies", onClick: onBack },
          ]} />
          <h1 className="font-['Museo',sans-serif] font-light"
            style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: headingColor, margin: 0, transition: 'font-size 0.3s ease, color 0.3s ease' }}>
            SOURCE: Energy performance management dashboard
          </h1>
        </div>

        <SourceCaseContent />
        <NavClearance />
      </div>
      <CaseSectionRail scrollRef={scrollRef} sections={SOURCE_SECTIONS} />
    </div>
  );
}


// ─── TNG eWallet Visa Card case study ─────────────────────────────
// Public, unlike the two TNG pieces under Business Acumen: the card shipped,
// was launched publicly and was written about, so there is nothing here to
// gate. Built on SOURCE's shapes so a reader coming from one case does not
// have to relearn the next.
const VC_SECTIONS: { id: string; label: string }[] = [
  { id: "vc-overview",    label: "Overview" },
  { id: "vc-turn",        label: "The Turn" },
  { id: "vc-choice",      label: "The Choice" },
  { id: "vc-numberless",  label: "A Card With No Number" },
  { id: "vc-shipped",     label: "What Shipped" },
];

function VisaCardContent() {
  const isDark = useContext(DarkModeCtx);
  const fg   = GOLD;
  const sub  = isDark ? "rgba(255,255,255,0.75)" : DIM;
  const body = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const rule = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const MEASURE = '68ch';
  const FIGURE_MAX = 760;

  const META: [string, React.ReactNode][] = [
    ["Year", "Feb 2022 to Jan 2023"],
    ["Client", (
      <a href={TNG_DIGITAL_URL} target="_blank" rel="noopener noreferrer"
        className="link-underline" style={{ color: fg }}>Touch &apos;n Go eWallet</a>
    )],
    ["Goal", "Extend the eWallet beyond DuitNow QR"],
    ["Scope", "Card design, artwork selection, user survey, welcome pack, in-app card experience, print production"],
    // TODO: Tiffany to fill these two.
    ["Role", "[Role]"],
    ["Team size", "[Team size]"],
  ];

  const Fig = ({ src, alt, caption, max = FIGURE_MAX }: { src: string; alt: string; caption?: string; max?: number }) => (
    <figure style={{ margin: '28px 0 0' }}>
      <img src={src} alt={alt} loading="lazy" className="mx-auto md:mx-0"
        style={{ width: '100%', maxWidth: max, display: 'block', borderRadius: 8 }} />
      {caption && (
        <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );

  // A row of shots that belong together, with one caption under the set. The
  // grid is the figure; a caption per image would read as three figures.
  const FigRow = ({ items, cols, caption }: { items: { src: string; alt: string }[]; cols: string; caption: string }) => (
    <figure style={{ margin: '28px 0 0', maxWidth: FIGURE_MAX }}>
      <div className={`grid gap-4 ${cols}`}>
        {items.map(it => (
          <img key={it.src} src={it.src} alt={it.alt} loading="lazy"
            style={{ width: '100%', display: 'block', borderRadius: 8 }} />
        ))}
      </div>
      <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
        {caption}
      </figcaption>
    </figure>
  );

  const Label = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{children}</h3>
  );

  const P = ({ children, top = 8 }: { children: React.ReactNode; top?: number }) => (
    <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: top, maxWidth: MEASURE }}>{children}</p>
  );

  const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-['Museo',sans-serif] font-light"
      style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)', lineHeight: 1.15, margin: '0 0 24px' }}>{children}</h2>
  );

  const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <section id={id} style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
      {children}
    </section>
  );

  return (
    <div className="px-6 md:px-20 pt-10 md:pt-14 pb-10" style={{ maxWidth: 'max(900px, 80%)' }}>

      <dl id="vc-overview" className="grid gap-x-6 gap-y-6"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))', margin: 0, scrollMarginTop: 140 }}>
        {META.map(([label, value]) => (
          <div key={label}>
            <dt className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{label}</dt>
            <dd className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '6px 0 0' }}>{value}</dd>
          </div>
        ))}
      </dl>

      <section style={{ marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
        <P top={0}>
          The eWallet could only be spent where a DuitNow QR code was accepted. The TNG eWallet Visa card
          opened the rest: merchants without QR, ATM withdrawals, and payments overseas.
        </P>
        <P top={16}>
          It launched on <Figures>18 January 2023</Figures> as two firsts for Malaysia. The first CSR-linked
          Visa prepaid card, with <Figures>RM2</Figures> donated to United Voice for every application. And
          the first numberless card, with the credentials held inside the eWallet rather than printed on the
          plastic.
        </P>
        <P top={16}>
          I took the card design on in February 2022 and it did not ship for eleven months. Rounds of review,
          presentations to CEOs, a user survey to choose between design directions, mock cards test-printed
          overseas to check how the colours held on the real substrate. None of it converged. The work was not
          the problem. The card had no reason that anyone could agree on, so every design was arguable and none
          was decidable.
        </P>
        <Fig src={vcTestCard} alt="An unprinted mock test card"
          caption="Mock card, test-printed overseas to check how the gradient and the yellow edge held on the real substrate." />
      </section>

      {/* ── The Turn ── */}
      <Section id="vc-turn">
        <H2>The Turn</H2>
        <P top={0}>
          In August 2022 group leadership set the direction: the card would be tied to United Voice, a Malaysian
          self-advocacy society for people with learning disabilities. <Figures>RM2</Figures> from every card
          applied for would be donated, and the card face would carry an artist&apos;s work.
        </P>
        <P top={16}>
          That answered the question six months of design review had not. The card now had something to be right
          about, and the arguments about how it should look resolved themselves almost immediately.
        </P>
        {/* No figure here on purpose: the turn was a decision, not an artefact. */}
      </Section>

      {/* ── The Choice ── */}
      <Section id="vc-choice">
        <H2>The Choice</H2>
        <P top={0}>
          Selecting from the artists&apos; work, I chose a painting by Damien Wong. Two reasons, at once: it
          would still look right in five years, and its colours already sat inside our brand palette. A card
          lives in a wallet for years and cannot be reissued on a whim, so ageing well was a requirement, not a
          preference. [Colleague] seconded it.
        </P>
        <P top={16}>
          Blue, green and yellow, mostly splashes. Damien describes it as &ldquo;In my eyes, this is how the
          world looks to me, a splash of colors.&rdquo;
        </P>
        <P top={16}>
          The painting had been rejected by the client it was made for, because the canvas was an odd size, and
          had sat unsold for years. The proceeds from its purchase went directly to him.
        </P>
        <Fig src={vcWelcomePack} alt="The physical card carrier"
          caption="The card carrier, which tells Damien's story alongside the activation steps in English and Malay." />
      </Section>

      {/* ── A card with no number ── */}
      <Section id="vc-numberless">
        <H2>A Card With No Number</H2>
        <P top={0}>
          A numberless card moves the credentials off the plastic and into the app, so the app has to do the
          work the card used to. Reveal and hide the details. Lock and unlock. Set the PIN, order a replacement,
          track the delivery. Temporarily deactivating a card is destructive enough to need a confirmation
          before it happens.
        </P>
        <P top={16}>
          We benchmarked the onboarding against Wise and BigPay, both of which were solving the same problem of
          getting a physical card into use from inside an app.
        </P>
        <FigRow cols="md:grid-cols-3"
          items={[
            { src: vcAppDetails, alt: "The Visa Card screen with the card details visible" },
            { src: vcAppHideDetails, alt: "The Visa Card screen with the card details hidden" },
            { src: vcAppDeactivate, alt: "The confirmation dialog for temporarily deactivating the card" },
          ]}
          caption="Details revealed, details hidden, and the confirmation before a card is deactivated." />

        <div style={{ marginTop: 40 }}>
          <Label>Onboarding benchmarks</Label>
          <FigRow cols="md:grid-cols-2"
            items={[
              { src: vcBenchWise, alt: "The Wise welcome pack" },
              { src: vcBenchBigPay, alt: "The BigPay welcome pack" },
            ]}
            caption="Wise and BigPay welcome packs, reviewed for how they carry a user from a posted card to a working one." />
        </div>
      </Section>

      {/* ── What shipped ── */}
      <Section id="vc-shipped">
        <H2>What Shipped</H2>
        <P top={0}>
          The card launched on <Figures>18 January 2023</Figures> as Malaysia&apos;s first CSR-linked Visa
          prepaid card, and its first numberless one.
        </P>
        <P top={16}>
          At the launch, Damien&apos;s mother, Nora Tan, spoke. She said she had never seen him paint with the
          enthusiasm he brought to that canvas.
        </P>
        <P top={16}>
          A year later, in January 2024, TNG Digital and Visa presented United Voice with
          <Figures> RM1,000,000</Figures>, raised at <Figures>RM2</Figures> per card application. From October
          2023 the funds went into United Voice&apos;s Skills Training for Employment programme and a Health
          and Wellness programme.
        </P>
        <P top={16}>
          The card has since been discontinued.
        </P>
        <Fig src={vcLaunch} alt="The launch event on 18 January 2023"
          caption="Launch, 18 January 2023." />
        <Fig src={vcCheque} alt="The RM1,000,000 presentation to United Voice in January 2024"
          caption="RM1,000,000 presented to United Voice, January 2024." />
      </Section>

    </div>
  );
}

function VisaCardPage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const onDark = useOnDarkBackdrop(headerRef);
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
          background: headerScrolled
            ? (onDark
                ? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), rgba(248,247,245,0.55)"
                : isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)")
            : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={onDark ? "#fff" : GOLD} />
          <Breadcrumbs color={headingColor} items={[
            { label: "Work", onClick: () => onNavigate("work") },
            { label: "Case Studies", onClick: onBack },
          ]} />
          <h1 className="font-['Museo',sans-serif] font-light"
            style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: headingColor, margin: 0, transition: 'font-size 0.3s ease, color 0.3s ease' }}>
            TNG eWallet Visa Card
          </h1>
        </div>

        <VisaCardContent />
        <NavClearance />
      </div>
      <CaseSectionRail scrollRef={scrollRef} sections={VC_SECTIONS} />
    </div>
  );
}


// ─── FinTech case study (passcode-gated) ──────────────────────────
// TNG eWallet's Quick Cash In, 2022–2023. Lives under Business Acumen: the
// case is the balance between what the business needed and what users would
// accept, and the numbers are the argument.
const FT_SECTIONS: { id: string; label: string }[] = [
  { id: "ft-overview", label: "Overview" },
  { id: "ft-outcome",  label: "Outcome" },
  { id: "ft-pitfalls", label: "Pitfalls" },
  { id: "ft-findings", label: "Findings" },
  { id: "ft-decision", label: "Decision & Learning" },
];

// The evidence for the outcome comes from three directions and they are not a
// sequence — a reader wants the business case, or the user reaction, or the
// press, not all three stacked. Tabs keep the section one screen tall and let
// the reader pick, which is how the original presented it.
const FT_EVIDENCE = ["Business", "Users", "Media"] as const;
type FtEvidence = typeof FT_EVIDENCE[number];

function EvidenceTabs({ value, onChange }: { value: FtEvidence; onChange: (v: FtEvidence) => void }) {
  const isDark = useContext(DarkModeCtx);
  return (
    <div role="tablist" aria-label="Evidence" className="flex flex-wrap gap-2" style={{ marginTop: 28 }}>
      {FT_EVIDENCE.map(t => {
        const on = t === value;
        return (
          <button key={t} role="tab" aria-selected={on} id={`ft-tab-${t}`} aria-controls={`ft-panel-${t}`}
            onClick={() => onChange(t)}
            className="font-['Nunito_Sans',sans-serif] text-small cursor-pointer"
            style={{
              // 44px floor for the tap target, whatever the label's width.
              minHeight: 44, padding: "0 20px", borderRadius: 999,
              border: `1px solid ${on ? "transparent" : isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.14)"}`,
              background: on ? GOLD : "transparent",
              color: on ? "#fff" : isDark ? "rgba(255,255,255,0.72)" : DIM,
              transition: "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
            }}>
            {t}
          </button>
        );
      })}
    </div>
  );
}

function FinTechContent() {
  const isDark = useContext(DarkModeCtx);
  const fg   = GOLD;
  const sub  = isDark ? "rgba(255,255,255,0.75)" : DIM;
  const body = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const rule = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const ink  = isDark ? "white" : INK;
  const MEASURE = '68ch';
  const FIGURE_MAX = 760;

  const [tab, setTab] = useState<FtEvidence>("Business");

  const META: [string, React.ReactNode][] = [
    ["Year", "2021"],
    ["Client", (
      <a href={TNG_DIGITAL_URL} target="_blank" rel="noopener noreferrer"
        className="link-underline" style={{ color: fg }}>TNG Digital (TNG eWallet)</a>
    )],
    ["Goal", "Encourage users to enable auto-sweep"],
    ["Scope", "Concept and design validation"],
    ["Role", "Product Design Lead"],
    ["Launched", "20 February 2023"],
  ];

  // `radius` for the two device mockups, whose body is cropped to its own
  // bounding box: the corner the artwork draws runs off the square edge of the
  // file, so the 8px every other figure takes leaves them with four hard
  // corners. Not for the raw app captures on the Users tab — there is no bezel
  // there for the arc to cut into, only the status bar and the tab labels.
  const PHONE_RADIUS = 60;
  const PHONE_WIDTH = "md:w-[60%]";
  // `top` so a figure can head a column flush with the heading beside it —
  // 28px of clear air is right when it follows a paragraph, wrong when it is
  // the first thing in its own column.
  // `imgClass` for the phone shots sitting beside their own copy. A device
  // mockup given the whole column is a life-size phone pinned to the page — it
  // takes the eye before the words it is there to illustrate. It is a class
  // rather than a width so the cap can start at md: below that the figure has
  // the row to itself and there is nothing for it to shout over. The caption
  // still runs the column's width; it is a line of text, not part of the
  // picture.
  const Fig = ({ src, alt, caption, max = FIGURE_MAX, radius, top = 28, imgClass = '' }: { src: string; alt: string; caption?: string; max?: number; radius?: number; top?: number; imgClass?: string }) => (
    <figure style={{ margin: `${top}px 0 0` }}>
      <img src={src} alt={alt} loading="lazy" className={`mx-auto md:mx-0 w-full ${imgClass}`}
        style={{ maxWidth: max, display: 'block', borderRadius: radius ?? 8 }} />
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

  const P = ({ children, top = 8 }: { children: React.ReactNode; top?: number }) => (
    <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: top, maxWidth: MEASURE }}>{children}</p>
  );

  // The 24px below is load-bearing: a section head is often followed straight
  // by a Label, which carries no top margin of its own, and at margin 0 the
  // two collided.
  const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-['Museo',sans-serif] font-light"
      style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)', lineHeight: 1.15, margin: '0 0 24px' }}>{children}</h2>
  );

  const Bullets = ({ items }: { items: React.ReactNode[] }) => (
    <ul className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '8px 0 0', padding: 0, listStyle: 'none', maxWidth: MEASURE }}>
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2" style={{ marginTop: 6 }}>
          <span className="flex-shrink-0" style={{ marginTop: 1 }}>—</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );

  const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <section id={id} style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
      {children}
    </section>
  );

  // The lessons are the spine of this case — each one is what a stretch of it
  // cost to learn. They get a surface of their own so they read as asides
  // rather than as more body copy, which is how the original set them.
  const Lesson = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
    <div style={{
      marginTop: 28, borderRadius: 8, padding: '20px 24px',
      background: isDark ? "rgba(255,255,255,0.05)" : "rgba(17,17,17,0.04)",
      borderLeft: `2px solid ${GOLD}`,
    }}>
      <p className="font-['Museo',sans-serif] font-light" style={{ color: ink, fontSize: '1.0625rem', margin: 0 }}>
        Lesson #{n}: {title}
      </p>
      <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: body, margin: '8px 0 0', maxWidth: MEASURE }}>
        {children}
      </p>
    </div>
  );

  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', background: 'transparent' }}>
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-10" style={{ maxWidth: 'max(900px, 80%)' }}>

        <dl id="ft-overview" className="grid gap-x-6 gap-y-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))', margin: 0, scrollMarginTop: 140 }}>
          {META.map(([label, value]) => (
            <div key={label}>
              <dt className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{label}</dt>
              <dd className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '6px 0 0' }}>{value}</dd>
            </div>
          ))}
        </dl>

        <section style={{ marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
          <div className="grid gap-8 md:grid-cols-2" style={{ maxWidth: `calc(${MEASURE} * 2)` }}>
            <div>
              <Label>The brief</Label>
              <P>
                GO+ is the eWallet's investment account: money parked there earns daily interest. Its problem was
                that the balance kept draining away — GO+ funds are what the wallet spends from, so tolls, parking
                and merchant payments emptied the thing users were trying to grow.
              </P>
            </div>
            <div>
              <Label>My responsibilities</Label>
              <P>
                I ran a two-day design sprint to frame the problem, then led the team through focus group
                interviews. The analysis produced the first user persona for GO+ and the evidence behind the
                solutions I took to the business owners. It was deprioritised for several months, then picked
                back up and shipped on 20 February 2023.
              </P>
            </div>
          </div>
        </section>

        {/* ── Outcome ── */}
        {/* The GO+ screen and what the feature did to it, side by side: the
            shot used to sit alone at the end of the brief with the outcome
            starting below it, so the screen being described was already off
            the top by the time you read the numbers. */}
        <Section id="ft-outcome">
          <div className="grid gap-8 md:grid-cols-2" style={{ alignItems: 'start' }}>
            <div>
              <Fig src={ftAccount} top={0} imgClass={PHONE_WIDTH} alt="The GO+ account screen inside TNG eWallet" radius={PHONE_RADIUS}
                caption="GO+: balance, daily earnings, and the cash in and cash out the feature had to sit between." />
            </div>
            <div>
              <H2>A middle ground for users and business</H2>
              <P>
                Quick Cash In — the refined version of what started as 'auto-sweeping' — struck the balance. It routes
                future reloads, transfers and cashback into GO+ rather than taking control of the wallet, and it has
                been written up in the press as the fix to a market problem.
              </P>
              <P>
                Post-launch there were no major customer complaints, and users who understand the product applaud the
                convenience. A minority still prefer to keep day-to-day spending separate from their investment
                account, which is useful for the next iteration rather than a mark against this one.
              </P>
              <div style={{ marginTop: 24 }}>
                <Label>What it delivered</Label>
                <Bullets items={[
                  <Figures>30% increment in Assets Under Management (AUM) within the first three months</Figures>,
                  <Figures>4x more fund-in transactions</Figures>,
                  <Figures>1.25x growth in the user base</Figures>,
                ]} />
              </div>
            </div>
          </div>

          {/* Three directions of evidence, one at a time. */}
          <EvidenceTabs value={tab} onChange={setTab} />

          <div role="tabpanel" id={`ft-panel-${tab}`} aria-labelledby={`ft-tab-${tab}`}
            style={{ marginTop: 20, border: `1px solid ${rule}`, borderRadius: 12, padding: '24px' }}>
            {tab === "Business" && (
              <div className="grid gap-8 md:grid-cols-2" style={{ alignItems: 'start' }}>
                <div>
                  <Fig src={ftGrowth} top={0}
                    alt="2023 QCI and AUM growth — monthly total AUM against fund-in amount" />
                  <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
                    Organic cash-in fell while users kept reloading their eWallets — the behaviour that held AUM up
                    through 2023.
                  </p>
                </div>
                <div>
                  <p className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', margin: 0, lineHeight: 1.2 }}>
                    <Figures>1.7x AUM growth year on year</Figures>
                  </p>
                  <P top={12}>
                    AUM of MYR 685.6 million across 3.54 million users, with QCI contributing 91.6% of it, as of
                    March 2024 — against MYR 395.3 million and 2.83 million users in January 2023.
                  </P>
                  <div style={{ marginTop: 20 }}><Label>Daily QCI transactions</Label>
                    <Bullets items={[<Figures>Feb 2023: 152k → Feb 2024: 467k</Figures>]} />
                  </div>
                  <div style={{ marginTop: 16 }}><Label>Daily amount</Label>
                    <Bullets items={[<Figures>Feb 2023: RM 16 mil → Feb 2024: RM 58 mil</Figures>]} />
                  </div>
                  <div style={{ marginTop: 16 }}><Label>Cumulative</Label>
                    <Bullets items={[
                      <Figures>MYR 521 mil on day one (19 Feb 2023)</Figures>,
                      <Figures>MYR 14 bil cumulative QCI amount</Figures>,
                    ]} />
                  </div>
                </div>
              </div>
            )}

            {tab === "Users" && (
              <div className="grid gap-8 md:grid-cols-2" style={{ alignItems: 'start' }}>
                {/* Both sources — the point of the tab is that the reaction is
                    mixed, and one screenshot only shows one side of it. Side by
                    side inside the column: stacked, two full-height phone
                    captures ran about 1,700px against 300 of text and the tab
                    was mostly scrolling. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* The ordinary 8px, not the phone radius: these are raw
                      captures, so a device corner cuts into the status bar and
                      the tab labels rather than into a bezel. */}
                  <img src={ftReviews} alt="App Store ratings and reviews for TNG eWallet" loading="lazy"
                    style={{ width: '100%', display: 'block', borderRadius: 8 }} />
                  <img src={ftFacebook} alt="A Facebook thread discussing the GO+ change" loading="lazy"
                    style={{ width: '100%', display: 'block', borderRadius: 8 }} />
                </div>
                <div>
                  <p className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', margin: 0, lineHeight: 1.2 }}>
                    App Store and Facebook responses are a mix of positive and negative
                  </p>
                  <P top={12}>
                    It is entirely the user's call what serves them best and what they perceive as beneficial.
                  </P>
                  <P>
                    <Figures>Today 2.17 million users out of 3.5 million — roughly 70% of GO+ users — have QCI enabled.</Figures>{" "}
                    We take the minority to be users who prefer to separate the two funds: one for daily spending,
                    one for saving or investment. That is consistent with what the focus group interviews found.
                  </P>
                </div>
              </div>
            )}

            {tab === "Media" && (
              <div className="grid gap-8 md:grid-cols-2" style={{ alignItems: 'start' }}>
                <div>
                  <Fig src={ftPress} top={0} alt="SoyaCincau coverage of the Quick Cash In feature" />
                </div>
                <div>
                  <p className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', margin: 0, lineHeight: 1.2 }}>
                    “TNG eWallet finally solves the biggest problem of its Go+ investment feature”
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 8 }}>
                    Alexander Wong, SoyaCincau — 3 January 2023
                  </p>
                  <P>
                    The article names the problem the project existed to solve: a GO+ balance is hard to keep high
                    because it is spent on tolls, parking and merchant payments. Quick Cash In transfers future
                    reloads, transfers and cashback above RM10 into GO+ instead.
                  </P>
                </div>
              </div>
            )}
          </div>
        </Section>

        {/* ── Pitfalls ── */}
        <Section id="ft-pitfalls">
          <H2>Pitfalls from the design sprint</H2>
          <Label>Reflection</Label>
          <P>
            The workshop's objective was a solution we were confident to deploy. The design direction I was given
            was broader than a feature change: in the long-term goal setting session the team agreed to change
            users' behaviour by positioning GO+ as the main eWallet — a transactional account routing funds to the
            wallet and then to GO+, closer to a savings account.
          </P>
          <P>
            In retrospect, as a newcomer myself, I was eager to understand the business intention and proposed a
            two-day workshop. The invitation was forwarded past the intended group of ten: two fund operation
            managers, four product managers, four business owners, two designers and one UX writer. With several
            people representing the same unit, the conversation broadened well past the original intention.
          </P>
          <P>
            The business intention was aggressive — to force users to opt in. The design team proposed testing
            three solutions instead, which took us into the testing stage of the sprint.
          </P>
          <Lesson n={1} title="Pivot when things go haywire">
            When a project veers off course, pivot quickly through validation. Early scope creep turned into
            immediate concept validation with internal users, to narrow the requirements and make an informed
            decision. It taught me the power of rapid validation in a complex environment.
          </Lesson>
        </Section>

        {/* ── Findings ── */}
        <Section id="ft-findings">
          <H2>Key findings from focus group interviews and concept validation</H2>
          <P>Nine GO+ users, internal. Concept C with three variants, tested with a prototype.</P>
          <Bullets items={[
            <><strong style={{ color: ink, fontWeight: 600 }}>Strong acceptance of auto-sweeping.</strong> The hypothesis held: <Figures>89% of users agreed to enrol once they were fully informed of the benefits.</Figures></>,
            <><strong style={{ color: ink, fontWeight: 600 }}>Concept C2 was preferred.</strong> It informs the user and leaves them the option to opt in later.</>,
            <><strong style={{ color: ink, fontWeight: 600 }}>Mixed emotions.</strong> Testing drew both positive and negative reactions, which is what makes clear communication and user control matter here.</>,
            <><strong style={{ color: ink, fontWeight: 600 }}>Stakeholder disconnect on personas.</strong> The personas did not resonate with business stakeholders, or they did not see their significance — a sign we needed better ways to carry user insight into that room.</>,
            <><strong style={{ color: ink, fontWeight: 600 }}>Terminology.</strong> Users found 'auto-sweeping' confusing. The copy had to explain itself.</>,
          ]} />
          <div className="grid gap-6 md:grid-cols-2" style={{ marginTop: 8 }}>
            <div>
              <img src={ftOptIn} alt="89% of testers agreed to opt in, 11% did not" loading="lazy" className="mx-auto md:mx-0"
                style={{ width: '100%', maxWidth: 320, display: 'block' }} />
              <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12 }}>
                89% of testers agreed to opt in to auto-sweeping on the condition of informed understanding —
                well-informed users show more positive emotion.
              </p>
            </div>
            <div>
              <Fig src={ftConcept} alt="The concept screens for enabling the feature" max={420}
                caption="The concept screens: the notification, the confirmation, and the FAQ that explains what just happened." />
            </div>
          </div>
          <Lesson n={2} title="Beyond design">
            As UX experts our role is to offer strategic, informed recommendations, not just designs. My team and I
            weighed the pros and cons of every proposal against the core business goals. It is about calculated
            risk and measurable impact.
          </Lesson>
          <Lesson n={3} title="Earning business owners' trust">
            Early business scepticism, fuelled by the workshop mismatch, showed we had to demonstrate UX value
            proactively. The team repaired that through clear communication and tangible outcomes. We are now
            highly strategic in proposing new initiatives, and make sure their purpose is unmistakable.
          </Lesson>
        </Section>

        {/* ── Decision ── */}
        {/* ── Decision & Learning ── */}
        {/* One section, one dot. The decision and what it taught were two
            stops on the rail with one screen between them; read together they
            are the same argument, and the consent screen is the thing both
            halves are about. */}
        <Section id="ft-decision">
          <div className="grid gap-8 md:grid-cols-2" style={{ alignItems: 'start' }}>
            <div>
              <Fig src={ftConsent} top={0} imgClass={PHONE_WIDTH} alt="The final Quick Cash In consent screen" radius={PHONE_RADIUS}
                caption="The shipped screen: the benefit, the terms it consents to, and an equally available way out." />
            </div>
            <div>
              <H2>Decision &amp; Learning: product and business versus UX</H2>
              <P>
                The factor that shaped the final GO+ design was a mandatory user consent requirement identified with
                Bank Negara Malaysia, the central bank. Working closely with the product and business teams, our User
                Experience Design team's recommended option was what the final solution was built on — meeting the
                regulatory demand while keeping the experience usable and compliant.
              </P>
              <Lesson n={4} title="Take calculated risk">
                Striking the product-design balance means assessing user input fairly while knowing the business
                must-dos. This project underlined the importance of understanding the risks, managing user
                expectations, and making brave, informed decisions.
              </Lesson>
              <div style={{ marginTop: 24 }}>
                <Label>Learnings</Label>
                <Bullets items={[
                  <><strong style={{ color: ink, fontWeight: 600 }}>Design vision is crucial.</strong> For a design lead it is paramount to have absolute clarity on the business need and on the feasibility of design solutions, short and long term. That is what keeps a team moving in one direction.</>,
                  <><strong style={{ color: ink, fontWeight: 600 }}>Informed decision-making.</strong> For a product with no precedent in the market, collective decision-making from business stakeholders, combined with a deep understanding of user needs, becomes the guiding factor.</>,
                  <><strong style={{ color: ink, fontWeight: 600 }}>Consistent communication.</strong> Leadership has to keep communicating with both internal and external teams. It builds a habit of learning from challenges and the awareness to head off the same problem next time — even when the approach that ships is simpler than the one planned.</>,
                ]} />
              </div>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}

function FinTechPage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const PASSCODE = "tifffolio";
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const onDark = useOnDarkBackdrop(headerRef);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setHeaderScrolled(el.scrollTop > 24);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const submit = () => {
    if (value.trim() === PASSCODE) { setError(""); setUnlocked(true); }
    else setError("Incorrect passcode");
  };

  return (
    <div className="relative w-full" style={{ minHeight: "100dvh", background: "transparent" }}>
      <div ref={scrollRef} className="absolute inset-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div ref={headerRef} className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled
            ? (onDark
                ? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), rgba(248,247,245,0.55)"
                : isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)")
            : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={onDark ? "#fff" : GOLD} />
          <Breadcrumbs color={onDark ? "#fff" : GOLD} items={[
            { label: "Work", onClick: () => onNavigate("work") },
            { label: "Business Acumen", onClick: onBack },
          ]} />
          <h1 className="font-['Museo',sans-serif] font-light"
            style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: onDark ? '#fff' : GOLD, margin: 0, transition: 'font-size 0.3s ease, color 0.3s ease' }}>
            FinTech: Balancing user preference &amp; business result
          </h1>
        </div>

        {unlocked ? (
          <>
            <FinTechContent />
            <NdaNotice />
            <NavClearance />
          </>
        ) : (
          // content-box, so the 560 caps the column and not the column plus its
          // gutter. Border-box made it 560 including md:px-20, leaving a 400px
          // measure that the NDA line missed fitting on one line by nine
          // pixels — so it wrapped, on a desktop screen with the whole
          // right-hand side empty.
          <div className="px-6 md:px-20 pt-8 pb-10" style={{ maxWidth: 560, boxSizing: 'content-box' }}>
            <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}>This work was produced under NDA. Access available on request.</p>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM, marginTop: 8 }}>This page requires passcode</p>

            <div className="flex flex-col gap-1" style={{ marginTop: 32 }}>
              <label className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]"
                style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}>
                PASSCODE *
              </label>
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

            <div className="flex justify-end md:justify-start" style={{ marginTop: 24 }}>
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
      {/* Only behind the gate, and only once it is open — never on the
          passcode screen, and never on a public page. */}
      {unlocked && <NdaWatermark />}
      {unlocked && <CaseSectionRail scrollRef={scrollRef} sections={FT_SECTIONS} />}
    </div>
  );
}


// ─── Apple Health case study ──────────────────────────────────────

const AH_SECTIONS: { id: string; label: string }[] = [
  // The Solution has no dot of its own: it reads as the back half of the
  // overview, and the rail stays with Overview while you are in it — the same
  // way Background & Brief sits under KAI's. The section itself stays in the
  // page, heading, anchor and all.
  { id: "ah-overview",  label: "Overview" },
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
      <img src={src} alt={alt} loading="lazy" className="mx-auto md:mx-0"
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
      </div>
    </div>
  );
}

function AppleHealthPage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const onDark = useOnDarkBackdrop(headerRef);

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
          background: headerScrolled
            // A 20% black tint under the frost while the heading is white,
            // so the words have something to sit against rather than
            // relying on whatever happens to be passing beneath.
            ? (onDark
                ? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), rgba(248,247,245,0.55)"
                : isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)")
            : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={onDark ? "#fff" : GOLD} />
          <Breadcrumbs color={onDark ? "#fff" : GOLD} items={[
            { label: "Work", onClick: () => onNavigate("work") },
            { label: "Case Studies", onClick: onBack },
          ]} />
          <h1 className="font-['Museo',sans-serif] font-light"
            style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: onDark ? '#fff' : GOLD, margin: 0, transition: 'font-size 0.3s ease, color 0.3s ease' }}>
            Apple Health: Design Challenge
          </h1>
        </div>

        <AppleHealthContent />
        <NavClearance />
      </div>
      <CaseSectionRail scrollRef={scrollRef} sections={AH_SECTIONS} />
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
// Third-level pages — Work > category > case study, and the gated pieces that
// sit the same depth under Business Acumen and Product & UX Strategies. These
// are the only pages that show the hamburger on a phone; first and second
// level both carry the full bar.
// The same track the homepage deck runs, as routes. Swiping a section page
// moves along it; the hero is index 0, so the indicator's proportions match
// the deck's and the two read as one sequence rather than two.
const SWIPE_PAGES: Page[] = ["home", "work", "awards", "testimonials", "coaching", "connect"];

// The deck's carousel indicator, for the standalone section pages. Same
// design deliberately: a gold bar covering what you have passed, small dots
// for what is ahead. A second style here would say the two were different
// things when they are the same track.
function SectionProgress({ idx }: { idx: number }) {
  const isDark = useContext(DarkModeCtx);
  return (
    <div className="md:hidden fixed z-30 flex items-center pointer-events-none"
      style={{ bottom: `calc(${NAV_UNDERLINE_BOTTOM} + env(safe-area-inset-bottom))`, left: 24, right: 24 }}>
      <div className="rounded-full transition-all duration-300"
        style={{ width: `${((idx + 1) / SWIPE_PAGES.length) * 100}%`, height: 2, background: GOLD, flexShrink: 0 }} />
      {idx < SWIPE_PAGES.length - 1 && (
        <div className="flex items-center gap-1.5" style={{ marginLeft: 8 }}>
          {SWIPE_PAGES.slice(idx + 1).map((_, i) => (
            <div key={i} className="rounded-full"
              style={{ width: 4, height: 4, background: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.25)" }} />
          ))}
        </div>
      )}
    </div>
  );
}

// The section each page belongs to, for the phone pill's right-hand label.
// Second-level pages name their parent, which is what the desktop bar's active
// state does too.
const NAV_LABELS: Partial<Record<Page, string>> = {
  work: "Work",
  awards: "Awards & Speaking",
  testimonials: "Testimonials",
  coaching: "Coaching",
  connect: "Connect",
};

const DEEP_PAGES = new Set<Page>(["businessCase", "kaiCase", "appleHealthCase", "brandPerceptionCase", "sourceCase", "finTechCase", "visaCardCase"]);

function StickyPageNav({ activePage, tint, onNavigate, isSubPage = false }: { activePage: Page; tint?: string; onNavigate: (p: Page) => void; isSubPage?: boolean }) {
  const isDark = useContext(DarkModeCtx);
  const [menuOpen, setMenuOpen] = useState(false);
  const goHome = useContext(GoHomeCtx);
  // Desktop bar height (px) — used for the fade scrim sizing.
  const BAR_H = 64;
  // Shrunk on a third-level page, and while the menu is open.
  const phoneShrunk = isSubPage || menuOpen;
  // The pill's full width in pixels, because motion cannot tween a calc().
  // Measured off the viewport rather than a container, so the element can be
  // positioned on its own and animate without anything clipping it.
  const [vw, setVw] = useState(typeof window === "undefined" ? 390 : window.innerWidth);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const phoneWide = Math.max(MOBILE_NAV_PILL, vw - 48);
  // Mobile fade: sized to whichever height the control is at.
  const mobileNavH = phoneShrunk ? MOBILE_NAV_PILL : 56;
  return (
    <>
      <div className="fixed inset-x-0 z-20 pointer-events-none"
        style={{
          top: `calc(100% - (${NAV_BOTTOM} + env(safe-area-inset-bottom) + ${mobileNavH + NAV_FADE_LEAD}px))`,
          bottom: 0,
          ...navFade(isDark),
        }} />
      <div className="fixed z-20 pointer-events-none hidden md:block"
        style={{
          left: RAIL_GUTTER, right: RAIL_GUTTER,
          top: `calc(100% - (${NAV_BOTTOM} + ${BAR_H + NAV_FADE_LEAD}px))`,
          bottom: 0,
          ...navFade(isDark),
        }} />
      {/* Desktop: the bar spans the page, rail or no rail. Run it in to the
          rail's edge and the left column reads as a separate panel rather than
          as part of the page; crossing it ties the two back together. */}
      <div className="fixed overflow-hidden hidden md:block md:left-20 md:right-20"
        style={{
          zIndex: 30,
          bottom: `calc(${NAV_BOTTOM} + env(safe-area-inset-bottom))`,
          borderRadius: 0,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}>
        <PageBottomNav activePage={activePage} tint={tint} onNavigate={onNavigate} />
      </div>

      {/* The phone control, as one element rather than two. Going from second
          level into a case study it was a wide pill and a square swapping by
          display, which cut from one to the other with nothing in between. It
          animates its own width now, the way the homepage's bar does when a
          section expands: the pill draws in from the right to the square, and
          the symbol never moves because it sits in a 44-wide block at the left
          edge the whole time.

          Opening the menu is the same move, so the symbol you pressed is the
          symbol that closes it. */}
      <motion.button
        className="md:hidden flex items-center overflow-hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        style={{
          position: "fixed", left: 24,
          bottom: `calc(${NAV_BOTTOM} + env(safe-area-inset-bottom))`,
          zIndex: menuOpen ? 60 : 30,
          border: "none", padding: 0, borderRadius: 0,
          // Wide it carries the nav's gradient; shrunk to a 44 square that
          // same five-stop sweep reads as noise, so it takes the page's own
          // heading colour, flat. Open it goes altogether and the x sits on
          // the menu's cream.
          background: menuOpen ? "transparent"
            : phoneShrunk ? (tint ?? HEADING_COLOUR[activePage] ?? GOLD)
            : navGradient(isDark),
          boxShadow: menuOpen ? "none" : "0 8px 32px rgba(0,0,0,0.18)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
        animate={{
          width: phoneShrunk ? MOBILE_NAV_PILL : phoneWide,
          height: phoneShrunk ? MOBILE_NAV_PILL : 56,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
        {/* 44 wide, centred: at the square size the symbol is exactly in the
            middle, and at full width it is in the same place it will end up. */}
        <span className="flex items-center justify-center flex-shrink-0"
          style={{ width: MOBILE_NAV_PILL }}>
          <MenuIcon open={menuOpen} color={menuOpen ? (isDark ? "white" : INK) : "white"} />
        </span>
        <motion.span className="font-['Museo',sans-serif] font-light text-small text-white whitespace-nowrap"
          animate={{ opacity: phoneShrunk ? 0 : 1 }}
          transition={{ duration: phoneShrunk ? 0.15 : 0.3, delay: phoneShrunk ? 0 : 0.12 }}>
          Tiffany C.
        </motion.span>
        <motion.span className="ml-auto font-['Museo',sans-serif] font-light text-small text-white whitespace-nowrap"
          style={{ paddingLeft: 12, paddingRight: 20 }}
          animate={{ opacity: phoneShrunk ? 0 : 1 }}
          transition={{ duration: phoneShrunk ? 0.15 : 0.3, delay: phoneShrunk ? 0 : 0.12 }}>
          {NAV_LABELS[activePage] ?? ""}
        </motion.span>
      </motion.button>
      {/* Reachable from the pill on deep pages and from the bar everywhere
          else, so it is no longer conditional. menuOpen can only be set on a
          phone, so desktop never sees it. */}
      {(
        <MobileMenu
          open={menuOpen}
          hideClose
          activeIdx={SECTIONS.findIndex(s => s.page === activePage)}
          onClose={() => setMenuOpen(false)}
          onGoTo={() => { (goHome ?? (() => onNavigate("home")))(); setMenuOpen(false); }}
          onNavigate={(p) => { onNavigate(p); setMenuOpen(false); }}
        />
      )}
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
  // On a phone the bar scrolls instead of squeezing. Equal flex shares gave
  // each of six items a sixth of 390px, so the labels ellipsised to "Award",
  // "Testim", "Coach" and "Conne" ran off the end. Sized to their content and
  // scrolled, nothing is ever cut; the active one is brought into view.
  const isPhone = useIsPhone();
  const barRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!isPhone) return;
    const el = barRef.current?.querySelector('[data-nav-active="true"]');
    el?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [isPhone, activePage]);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // `short` is the phone label. Six full labels do not fit 360px however they
  // are sized, and the alternatives are worse: squeezed they ellipsise to
  // "Award" and "Testim", scrolled they sit cut off at the right edge, which
  // reads as broken rather than as scrollable. Only Awards & Speaking actually
  // needs shortening, and the page it opens says the full name at the top.
  const NAV_ITEMS = [
    { key: "work",     label: "Work",             short: "Work",         page: "work" as Page },
    { key: "awards",   label: "Awards & Speaking", short: "Awards",      page: "awards" as Page },
    { key: "testimonials", label: "Testimonials", short: "Testimonials", page: "testimonials" as Page },
    { key: "coaching", label: "Coaching",         short: "Coaching",     page: "coaching" as Page },
    { key: "connect",  label: "Connect",          short: "Connect",      page: "connect" as Page },
  ];

  return (
    <>
      {/* Full gradient bar — on a phone only where the page is one of the five
          the bar names; desktop always.
          On a phone the whole bar is one control that opens the menu, not six
          small ones: at 390px a six-way split gives each about 60px, which is
          under the 44px floor once padding is taken off, and the labels past
          the edge could not be reached at all. Tapping anywhere opens the full
          list, which is where the navigating happens. Desktop keeps its six
          separate targets, where there is room for them. */}
      <div className="hidden md:flex items-stretch h-16 overflow-hidden"
        style={{ background: navGradient(isDark) }}>
        <button
          className="flex items-center gap-3 overflow-hidden"
          onMouseEnter={() => setHoveredNav("about")}
          onMouseLeave={() => setHoveredNav(null)}
          onClick={() => onNavigate("home")}
          style={{
            flex: isPhone ? "0 0 auto" : hoveredNav === "about" ? "3 1 0%" : "1 1 0%",
            pointerEvents: isPhone ? "none" : undefined,
            minWidth: 0, padding: isPhone ? "0 12px" : "0 20px",
            opacity: hoveredNav === "about" ? 1 : 0.52,
            transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
            borderRight: "1px solid rgba(255,255,255,0.18)",
          }}>
          <HamburgerIcon />
          {/* The name is desktop-only: on a phone its ~70px is what the five
              labels need to fit, and the icon alone already says "menu". */}
          <span className="hidden md:inline font-['Museo',sans-serif] font-light text-small text-white whitespace-nowrap overflow-hidden text-ellipsis">Tiffany C.</span>
        </button>
        {/* No scroller: the labels fit. `md:contents` dissolves this wrapper
            above the breakpoint so the desktop row is untouched. */}
        <div className="flex items-stretch min-w-0 flex-1 md:contents"
          style={{ pointerEvents: isPhone ? "none" : undefined }}>
        {NAV_ITEMS.map(item => (
          <button key={item.key}
            onMouseEnter={() => setHoveredNav(item.key)}
            onMouseLeave={() => setHoveredNav(null)}
            onClick={() => item.page && onNavigate(item.page)}
            className="flex items-center font-['Museo',sans-serif] font-light text-small whitespace-nowrap overflow-hidden text-ellipsis text-white"
            data-nav-active={activePage === item.page ? "true" : undefined}
            style={{
              flex: isPhone ? "1 1 auto" : activePage === item.page || hoveredNav === item.key ? "3 1 0%" : "1 1 0%",
              minWidth: 0, padding: isPhone ? "0 6px" : "0 20px",
              fontSize: isPhone ? 11 : undefined,
              justifyContent: isPhone ? "center" : undefined,
              opacity: activePage === item.page || hoveredNav === item.key ? 1 : 0.52,
              transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
              borderLeft: "1px solid rgba(255,255,255,0.18)",
            }}>
            {isPhone ? item.short : item.label}
          </button>
        ))}
        </div>
      </div>

      {/* The pill: the nav below first level, and the close control everywhere
          else once the bar has opened the menu. One × in one place, morphing
          from the same icon, with the credit on its row — rather than a second
          close button that the menu would have had to grow for this case. */}
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
    // Standalone, a column: on a tall screen the five rows do not reach the
    // bottom, and the credit line has to end up 16px off the nav wherever the
    // list stops. Embedded in the deck the slide owns its own height.
    <div className={`relative w-full${embedded ? "" : " flex flex-col"}`} style={{ minHeight: embedded ? "100%" : "100dvh", background: bg }}>
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
          {!embedded && <HeaderLogo onNavigate={onNavigate} color={HEADING_COLOUR.work} />}
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

      <div className={embedded ? undefined : "flex-1 flex flex-col"} style={{ paddingTop: 24 }}>
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
        {/* Takes up whatever the rows leave, so the credit line lands on the
            nav rather than floating under the last divider. */}
        {!embedded && <div className="flex-1" />}
        <NavClearance />
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
  onNavigate,
}: {
  eyebrow: string;
  title: string;
  items: readonly ContactEntry[];
  accent: string;
  // Coaching and Connect share this shell but sit at different points along
  // the nav gradient, so the heading colour comes in per page.
  headingColor?: string;
  onNavigate: (p: Page) => void;
}) {
  const isDark = useContext(DarkModeCtx);
  const fg = GOLD;
  const brd = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const itemColor = isDark ? "white" : INK;
  return (
    // A column, so a short list can be held at the foot of the screen instead
    // of stopping a third of the way down with the rest of the page empty —
    // the same shape the homepage deck gives this section.
    <div className="relative w-full flex flex-col" style={{ minHeight: "100dvh", background: "transparent" }}>
      {/* Page heading. No rule of its own: the list's own top border is the
          line, and carrying both drew two of them 25px apart. */}
      <div className="relative px-6 md:px-20 pt-10 md:pt-14 pb-8 md:pb-10">
        <HeaderLogo onNavigate={onNavigate} color={headingColor} />
        <motion.p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.22em] mb-2" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {eyebrow}
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg" style={{ lineHeight: 1.05, color: headingColor ?? fg }}
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
          {title}
        </motion.h1>
      </div>

      {/* Takes up whatever is spare, pushing the list down the page. */}
      <div className="flex-1" style={{ minHeight: "4vh" }} />

      {/* Items */}
      <div className="px-6 md:px-20">
        <div style={{ borderTop: `1px solid ${brd}` }}>
          {items.map(entry => {
            const row = asRow(entry);
            return (
              <div key={row.join("|")} style={{ borderBottom: `1px solid ${brd}` }}>
                <ContactRow row={row} accent={accent} itemColor={itemColor} linkColor={headingColor} borderColor={brd} onNavigate={onNavigate} />
              </div>
            );
          })}
        </div>
      </div>

      <NavClearance />
    </div>
  );
}

// The eyebrow and title come from SECTIONS, not from a second copy here. Both
// pages had drifted to a generic "Open to collaboration" while the homepage
// deck still showed the real one.
const sectionOf = (key: string) => SECTIONS.find(s => s.key === key);

function CoachingPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const section = sectionOf("coaching");
  return (
    <ContactListPage
      eyebrow={section?.context ?? ""}
      title={section?.tagline ?? "UX Career Coaching"}
      items={["1:1 Calls", "Priority DM", "Package (1-1 Coaching Service)"]}
      accent="#9B5A88"
      headingColor={HEADING_COLOUR.coaching}
      onNavigate={onNavigate}
    />
  );
}

function ConnectPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const section = sectionOf("connect");
  return (
    <ContactListPage
      eyebrow={section?.context ?? ""}
      title={section?.tagline ?? "Let's Connect"}
      // Email first: it is the primary action for a consulting enquiry.
      // LinkedIn and Instagram are passive profiles, so they share the last
      // row rather than each taking one of their own.
      items={[
        "designmatters.tiff@gmail.com",
        "Speaking Inquiry",
        ["LinkedIn", "Instagram"],
      ]}
      accent="#9B5A88"
      headingColor={HEADING_COLOUR.connect}
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
    source: "Reported to Tiffany", date: null,
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
    name: "Junhoe W.", title: "Design Manager",
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
          {!embedded && <HeaderLogo onNavigate={onNavigate} color={accent} />}
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

          <NavClearance />
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
    </div>
  );
}

// ─── Awards & Speaking page ────────────────────────────────────────

const SPEAKING_EVENTS = [
  { key: "rotterdam", year: "2026", role: "Speaker",  event: "UX Rotterdam",                  location: "Rotterdam, NL", region: "Europe",    topic: "The Human Cost of Human-Centred-Design",                           link: null,                                               img: awardsRotterdam, caption: "2026 @ Rotterdam, NL", dark: true },
  { key: "ux-camp",   year: "2025", role: "Speaker",  event: "UX Camp Melbourne",             location: "Melbourne, AU", region: "Australia", topic: "404: System Burnout — An error message to my UX career",            link: null, youtubeId: "hJIJB3di6T4",                                img: null,          caption: null,             dark: false },
  { key: "taipei",    year: "2025", role: "Panelist", event: "Ladies that UX Taipei",         location: "Taipei, TW",    region: "Taiwan",    topic: "Driving Organisational Change and Creating Meaningful Impact",     link: null,                                               img: awardsTaipei,  caption: "2025 @ Taipei, TW",  dark: false },
  { key: "fusecon",   year: "2025", role: "Panelist", event: "FUSECON 2025",                  location: "Malaysia",      region: "Malaysia",  topic: "Mental Health In Tech: From Awareness to Action",                 link: null,                                               img: awardsFuseCon, img2: awardsFuseConPanelist, mobileImgOnly: 2, caption: "FUSECON 2025, MY",    dark: true  },
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
            <h2 className="font-['Museo',sans-serif] font-light" style={{ fontSize: LIST_TITLE_SIZE, color: fg }}>
              {ev.role} — {ev.event}
            </h2>
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
              // `mobileImgOnly` drops the other one below md, where the pair
              // stacks and the row costs two screens. Which one goes is per
              // event, not a rule: FUSECON pairs a portrait of Tiffany with
              // the panel, and the panel is the one that says what the event
              // was, but Design Leadership KL pairs them the other way round.
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-5">
                <div className={`relative w-full h-[220px] md:h-[340px] md:w-auto overflow-hidden flex-shrink-0${ev.mobileImgOnly === 2 ? " hidden md:block" : ""}`}>
                  <img src={ev.img} alt={`${ev.event} — ${ev.topic}`}
                    className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:static md:inset-auto md:w-auto md:h-full md:max-w-full md:object-contain" />
                </div>
                <div className={`relative w-full h-[220px] md:h-[340px] md:w-auto overflow-hidden min-w-0${ev.mobileImgOnly === 1 ? " hidden md:block" : ""}`}>
                  <img src={ev.img2} alt={`${ev.event} panel discussion`}
                    className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:static md:inset-auto md:w-auto md:h-full md:max-w-full md:object-contain" />
                </div>
              </div>
            ) : ev.img && (
              // Desktop: capped to 50% of viewport height, image keeps its
              // natural aspect ratio (object-contain, auto width) instead
              // of being cropped to fill — mobile keeps the original
              // clamp()-based crop/cover treatment.
              // Left-aligned, not centred: object-contain leaves slack beside
              // a portrait, and centring it started each image at a different
              // x. Down a list they read as drifting rather than as a column.
              // The video below aligns the same way.
              /* 70vh left an open row taller than the screen, so the next
                 row's heading sat below the fold and the list read as having
                 ended. Sized to leave the following row in view. */
              <div className="relative w-full overflow-hidden h-[clamp(220px,40vw,480px)] md:h-[46vh] md:flex md:items-center md:justify-start" style={{ background: "transparent" }}>
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
              <div className="relative w-full overflow-hidden mt-5 md:w-auto md:h-[46vh] md:mr-auto md:max-w-full" style={{ aspectRatio: "16 / 9", background: "#000" }}>
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
            <h2 className="font-['Museo',sans-serif] font-light" style={{ fontSize: LIST_TITLE_SIZE, color: fg }}>
              UX Leader of the Year — Finalist
            </h2>
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
  // The heading shrinks on the same signal that frosts the band behind it.
  // It was driven by `compact`, which only the homepage deck ever sets, so on
  // /awards the band appeared and the heading stayed full size — an opened row
  // then scrolled under a full-height header and could not be read. Same shape
  // as TestimonialsPage: the deck's flag when embedded, this page's own scroll
  // when standalone.
  const shrunk = embedded ? compact : selfScrolled;
  const visibleEvents = capped ? SPEAKING_EVENTS.slice(0, 3) : SPEAKING_EVENTS;

  const headerRef = useRef<HTMLDivElement>(null);
  const onDark = useOnDarkBackdrop(headerRef);
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
          paddingBottom: shrunk ? 16 : undefined,
          transition: "padding-bottom 0.35s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}>
          {!embedded && <HeaderLogo onNavigate={onNavigate} color={onDark ? "#fff" : HEADING_COLOUR.awards} />}
        <motion.p className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.22em] mb-2" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}
          initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }} transition={{ duration: 0.5 }}>
          Ideas · Voices · Community
        </motion.p>
        <motion.h1 className="font-['Museo',sans-serif] font-light text-display md:text-display-lg"
          style={{ fontSize: shrunk ? "1.5rem" : undefined, lineHeight: 1.05, color: onDark ? "#fff" : HEADING_COLOUR.awards, transition: "font-size 0.35s ease, color 0.3s ease" }}
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

      <NavClearance />
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
    topic: "Mental Health In Tech: From Awareness to Action",
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
    <div className="relative w-full flex flex-col" style={{ minHeight: "100dvh", background: bg }}>

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

      <div className="flex-1" />
      <NavClearance />
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
      let current = sections[0].id;
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
    ["Goal", "Increase checkout completion rate"],
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
              {/* Portrait, because what is inside is a phone. At 4/3 the box
                  was wider than tall and the frame's bottom — the Apply
                  button the whole flow ends on — fell outside it. */}
              <div style={{
                width: '100%', aspectRatio: '3 / 4', borderRadius: 8, overflow: 'hidden',
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
                Lived test: the bag page flow, clickable.
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
            {[["Revenue", "+57%"], ["Checkout completion", "2×"], ["Conversion rate", "+0.28pp"]].map(([label, value]) => (
              <div key={label}>
                <dd className="font-['Museo',sans-serif] font-light"
                  style={{ color: fg, fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: 1.1, margin: 0, fontVariantNumeric: 'tabular-nums' }}>{value}</dd>
                <dt className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 6 }}>{label}</dt>
              </div>
            ))}
          </dl>
          <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 16 }}>
            Checkout completion is purchases as a share of checkout entries.
            Conversion rate is in percentage points.
          </p>

          <figure style={{ margin: '32px 0 0' }}>
            <img src={graphResult} alt="Google Analytics funnel: view bag, enter checkout at 70.1%, purchase at 79.6%"
              style={{ width: '100%', maxWidth: FIGURE_MAX, display: 'block', borderRadius: 8 }} />
            <figcaption className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12 }}>
              Chart: Google Analytics funnel from bag to successful checkout.
            </figcaption>
          </figure>
        </section>
      </div>
    </div>
  );
}

// ─── Brand Perception & UX Strategy (TNG eWallet) ──────────────────
//
// Built on the KAI case study's shapes — the same META grid, section rule,
// Museo h2, 68ch measure, Label and Fig — behind the eCommerce case's
// passcode gate.

const BP_SECTIONS: { id: string; label: string }[] = [
  { id: "bp-overview", label: "Overview" },
  { id: "bp-problem",  label: "The Problem" },
  { id: "bp-strategy", label: "Strategy" },
  { id: "bp-product",  label: "In the Product" },
  { id: "bp-results",  label: "Results" },
];

function BrandPerceptionContent() {
  const isDark = useContext(DarkModeCtx);
  const fg   = GOLD;
  const sub  = isDark ? "rgba(255,255,255,0.75)" : DIM;
  const body = isDark ? "rgba(255,255,255,0.72)" : DIM;
  const rule = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const ink  = isDark ? "white" : INK;
  const MEASURE = '68ch';
  const FIGURE_MAX = 760;

  const META: [string, React.ReactNode][] = [
    ["Year", "January – December 2024"],
    ["Client", (
      <a href={TNG_DIGITAL_URL} target="_blank" rel="noopener noreferrer"
        className="link-underline" style={{ color: fg }}>TNG Digital (TNG eWallet)</a>
    )],
    ["Goal", "Shift perception beyond payments and tolls"],
    ["Scope", "Brand perception framework, UX strategy, cross-functional roadmap, measurement design"],
    ["Role", "Head of Product Design & UX Research"],
    ["Team size", "TBC"],
  ];

  // Stands in for artwork that lands in the next pass. A dashed outline in the
  // section rule's own colour, holding its ratio — not a grey block, which
  // reads as an image that failed to load.
  //
  // The frame is decoration and says nothing; the caption carries what will go
  // there, so the frame is hidden from a screen reader and the caption is not.
  // Same call shape as Fig, so swapping real artwork in is one line.
  const FigPlaceholder = ({ caption, ratio = "16/9", max = FIGURE_MAX }: { caption: string; ratio?: string; max?: number }) => (
    <figure style={{ margin: '28px 0 0', width: '100%', maxWidth: max }}>
      <div aria-hidden="true" className="flex items-center justify-center"
        style={{ aspectRatio: ratio, border: `1px dashed ${rule}`, borderRadius: 12, background: 'transparent', padding: 16 }} />
      <figcaption className="font-['Nunito_Sans',sans-serif] text-small text-center" style={{ color: sub, marginTop: 12 }}>
        {caption}
      </figcaption>
    </figure>
  );

  const Label = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{children}</h3>
  );

  const P = ({ children, top = 8 }: { children: React.ReactNode; top?: number }) => (
    <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: top, maxWidth: MEASURE }}>{children}</p>
  );

  // Section heads all carry the same rule, spacing and Museo gold.
  const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <section id={id} style={{ scrollMarginTop: 140, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 32 }}>
      {children}
    </section>
  );

  const PRIORITISATION: [string, string, string][] = [
    ["01", "Desirability", "NPS and brand perception feedback, CES tickets, UX audit"],
    ["02", "Reach", "Traffic flow and user reach"],
    ["03", "Impact", "The sum of the two, used to sequence"],
  ];

  // Each block is title, figure, result, learning — so the next one is an
  // entry in this array rather than another hand-built section.
  const IN_PRODUCT: { title: string; body: string; result?: string; learning?: string; figure: string }[] = [
    {
      title: "Keyword seeding",
      body: "Seeded the phrase “for safety” into copy that already existed, rather than writing new screens.",
      result: "Security perception rose 13% over the quarter.",
      learning: "Exposing users to the same stimulus repeatedly across touchpoints shifts perception. Small edits to legacy copy carried more weight than new features did.",
      figure: "Before / after copy comparison",
    },
    {
      title: "In-app education",
      body: "Dynamic banners and push notifications in three languages, explaining what we were doing to keep users' money safe.",
      result: "Push CTR between 0.94% and 3.45% across three April campaigns.",
      learning: "Copy naming a specific benefit outperformed general reassurance. “Safe payments without entering your PIN” beat “keep your money safe.”",
      figure: "Trilingual banner set",
    },
    {
      title: "Email education",
      body: "Educating users on checking transaction details before approving.",
      result: "26.24% open rate across 2.9 million sends. Perception of “safe to transact” rose 12%.",
      learning: "An education email moved a perception metric, not only an engagement one.",
      figure: "Email and banner set",
    },
    {
      title: "Onboarding revamp",
      body: "Rewrote the onboarding sliders away from toll and payment messaging onto the new pillars: convenient, confident, rewarding. Turned around in ten days.",
      figure: "Onboarding slider set",
    },
  ];

  const RESULTS: [string, string, string][] = [
    ["Security", "+13%", "beat target"],
    ["Financial Services", "+27%", "beat target"],
    ["Sustainability", "+20%", "beat target"],
    ["Convenience", "flat", "missed target"],
  ];

  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', background: 'transparent' }}>
      <div className="px-6 md:px-20 pt-10 md:pt-14 pb-10" style={{ maxWidth: 'max(900px, 80%)' }}>

        <dl id="bp-overview" className="grid gap-x-6 gap-y-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))', margin: 0, scrollMarginTop: 140 }}>
          {META.map(([label, value]) => (
            <div key={label}>
              <dt className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub }}>{label}</dt>
              <dd className="font-['Nunito_Sans',sans-serif]" style={{ color: body, margin: '6px 0 0' }}>{value}</dd>
            </div>
          ))}
        </dl>

        {/* ── The problem ── */}
        <Section id="bp-problem">
          <h2 className="font-['Museo',sans-serif] font-light"
            style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.5rem)', lineHeight: 1.15, margin: 0 }}>
            <Figures>Three of four brand perception pillars beat target in six months</Figures>
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: sub, marginTop: 12, maxWidth: MEASURE }}>
            <Figures>A 23-million-user wallet that people thought of as a toll company.</Figures>
          </p>

          <div className="grid gap-8 md:grid-cols-2" style={{ marginTop: 32, maxWidth: `calc(${MEASURE} * 2)` }}>
            <div>
              <Label>What users believed</Label>
              <P>Users saw us as a payment and toll company. Most were unaware of any product or service beyond payment.</P>
            </div>
            <div>
              <Label>What they did</Label>
              <P>Reload just enough to use, just in time. They would not park money in the wallet even when the rate beat a fixed deposit.</P>
            </div>
          </div>

          <P top={32}>
            The gap between those two is where the work sat. A payment company gets used. A financial
            service gets trusted, and trust is a perception problem before it is a product one.
          </P>
          <P top={16}>
            How might we make the app a default choice that Malaysians, and people beyond Malaysia,
            would want to use?
          </P>
        </Section>

        {/* ── Strategy ── */}
        <Section id="bp-strategy">
          <Label>Four pillars</Label>
          <P>
            A nested model that separates how users feel from what they use. Convenience and security
            as the emotional layer, payment and banking services as the functional layer, and social
            responsibility inside that.
          </P>
          <P top={16}>
            The value proposition it produced: the convenient and secure daily app to save, earn and
            spend for people in Malaysia.
          </P>
          <FigPlaceholder caption="Four-pillar nested diagram" ratio="1/1" max={560} />

          <div style={{ marginTop: 40 }}>
            <Label>Two principles</Label>
            <P>
              <strong style={{ color: ink, fontWeight: 600 }}>1. Perception shift via user journey.</strong>{' '}
              Working from the peak-end rule: the lowest point in a journey shapes how the whole
              experience is remembered, so the low points get optimised first, and the high points
              become where convenience and security are deliberately instilled.
            </P>
            <P top={16}>
              <strong style={{ color: ink, fontWeight: 600 }}>2. Well-informed users are happy users.</strong>{' '}
              Working from the framing effect: repetition and reinforcement of the same vocabulary
              across every communication and every state message, including empty, error, success and
              transition states.
            </P>
            <P top={16}>
              The complication: one flow carries three perceptions. A single onboarding journey moves
              through financial services, then security, then convenience. The work could not be
              organised by feature. It had to be organised by perception.
            </P>
            <FigPlaceholder caption="Perception journey — five onboarding screens with perception tags" ratio="16/5" />
          </div>

          <div style={{ marginTop: 40 }}>
            <Label>Prioritisation</Label>
            <div className="grid gap-6 md:grid-cols-3" style={{ marginTop: 16 }}>
              {PRIORITISATION.map(([n, title, detail]) => (
                <div key={n} style={{ borderTop: `1px solid ${rule}`, paddingTop: 12 }}>
                  <span className="font-['Museo',sans-serif] font-light" style={{ color: fg, fontSize: '1.5rem', lineHeight: 1 }}>{n}</span>
                  <h4 className="font-['Nunito_Sans',sans-serif]" style={{ color: ink, marginTop: 8, fontWeight: 600 }}>{title}</h4>
                  <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: body, marginTop: 4 }}>{detail}</p>
                </div>
              ))}
            </div>
            <P top={24}>
              Used to sequence work across six teams: UX Research, Merchant Services, Commercial,
              Core and Growth, User Domain, and Financial Services.
            </P>
          </div>
        </Section>

        {/* ── In the product ── */}
        <Section id="bp-product">
          <h2 className="font-['Museo',sans-serif] font-light"
            style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.5rem)', lineHeight: 1.15, margin: 0 }}>
            In the Product
          </h2>
          {IN_PRODUCT.map((b, i) => (
            <div key={b.title} style={{ marginTop: i === 0 ? 32 : 48 }}>
              <Label>{b.title}</Label>
              <P><Figures>{b.body}</Figures></P>
              <FigPlaceholder caption={b.figure} />
              {b.result && (
                <p className="font-['Nunito_Sans',sans-serif]" style={{ color: ink, marginTop: 16, maxWidth: MEASURE }}>
                  <span className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub, marginRight: 8 }}>Result</span>
                  <Figures>{b.result}</Figures>
                </p>
              )}
              {b.learning && (
                <p className="font-['Nunito_Sans',sans-serif]" style={{ color: body, marginTop: 8, maxWidth: MEASURE }}>
                  <span className="font-['Nunito_Sans',sans-serif] text-label uppercase tracking-[0.18em]" style={{ color: sub, marginRight: 8 }}>Learning</span>
                  <Figures>{b.learning}</Figures>
                </p>
              )}
            </div>
          ))}
        </Section>

        {/* ── Results ── */}
        <Section id="bp-results">
          <h2 className="font-['Museo',sans-serif] font-light"
            style={{ color: fg, fontSize: 'clamp(1.5rem, 2.6vw, 2.5rem)', lineHeight: 1.15, margin: 0 }}>
            Results
          </h2>

          {/* Deltas only — the absolute index values stay with the client.
              overflow-x on the wrapper alone, so a narrow screen scrolls the
              table rather than the page. */}
          <div style={{ marginTop: 24, maxWidth: MEASURE, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 300 }}>
              <tbody>
                {RESULTS.map(([pillar, delta, verdict]) => (
                  <tr key={pillar} style={{ borderTop: `1px solid ${rule}` }}>
                    <th scope="row" className="font-['Nunito_Sans',sans-serif]"
                      style={{ color: ink, fontWeight: 400, textAlign: 'left', padding: '14px 16px 14px 0', whiteSpace: 'nowrap' }}>
                      {pillar}
                    </th>
                    <td className="font-['Museo',sans-serif] font-light"
                      style={{ color: fg, fontSize: '1.25rem', padding: '14px 16px 14px 0', whiteSpace: 'nowrap' }}>
                      {delta}
                    </td>
                    <td className="font-['Nunito_Sans',sans-serif] text-small"
                      style={{ color: sub, padding: '14px 0', whiteSpace: 'nowrap' }}>
                      {verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <P top={32}>
            Convenience carried the most ambitious target of the four and was the only one we missed.
            It finished flat.
          </P>
          <P top={16}>
            The diagnosis was straightforward. H1 effort concentrated on financial services, security
            and sustainability, and convenience received the least direct intervention of the four.
          </P>
          <P top={16}>
            H2 moved to convenience specifically: seeding perception vocabulary into in-app copy,
            applying a zero-rejection rule so the benefit is always stated plainly rather than the
            restriction, and updating legacy copy across teams. That last one came straight from the
            security result, which had shown legacy copy to be the highest-leverage surface available.
          </P>
        </Section>
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
  const headerRef = useRef<HTMLDivElement | null>(null);
  const onDark = useOnDarkBackdrop(headerRef);

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
        <div ref={headerRef} className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled
            // A 20% black tint under the frost while the heading is white,
            // so the words have something to sit against rather than
            // relying on whatever happens to be passing beneath.
            ? (onDark
                ? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), rgba(248,247,245,0.55)"
                : isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)")
            : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={onDark ? "#fff" : GOLD} />
          <Breadcrumbs color={onDark ? "#fff" : GOLD} items={[
            { label: "Work", onClick: () => onNavigate("work") },
            { label: "Business Acumen", onClick: onBack },
          ]} />
          <h1 className="font-['Museo',sans-serif] font-light" style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: onDark ? '#fff' : GOLD, margin: 0, transition: 'font-size 0.3s ease, color 0.3s ease' }}>eCommerce: Behavioural UX Design</h1>
        </div>

        {unlocked ? (
          <>
            <BusinessCaseContent />
            <NdaNotice />
            <NavClearance />
          </>
        ) : (
          // content-box, so the 560 caps the column and not the column plus its
          // gutter. Border-box made it 560 including md:px-20, leaving a 400px
          // measure that the NDA line missed fitting on one line by nine
          // pixels — so it wrapped, on a desktop screen with the whole
          // right-hand side empty.
          <div className="px-6 md:px-20 pt-8 pb-10" style={{ maxWidth: 560, boxSizing: 'content-box' }}>
            <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}>This work was produced under NDA. Access available on request.</p>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM, marginTop: 8 }}>This page requires passcode</p>

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

            {/* Right on a phone, where the thumb is; left on desktop, where
                the form's own left edge is what the eye follows down. */}
            <div className="flex justify-end md:justify-start" style={{ marginTop: 24 }}>
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
      {/* Only behind the gate, and only once it is open — never on the
          passcode screen, and never on a public page. */}
      {unlocked && <NdaWatermark />}
      {unlocked && <CaseSectionRail scrollRef={scrollRef} />}
    </div>
  );
}

// Gated exactly as the eCommerce case is — same passcode, same shape. The
// section rail takes this page's own five sections.
function BrandPerceptionPage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (p: Page) => void }) {
  const isDark = useContext(DarkModeCtx);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const PASSCODE = "tifffolio";
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const onDark = useOnDarkBackdrop(headerRef);

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
        <div ref={headerRef} className="sticky top-0 z-20 px-6 md:px-20 pt-10 md:pt-14" style={{
          background: headerScrolled
            // A 20% black tint under the frost while the heading is white,
            // so the words have something to sit against rather than
            // relying on whatever happens to be passing beneath.
            ? (onDark
                ? "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), rgba(248,247,245,0.55)"
                : isDark ? "rgba(40,40,40,0.55)" : "rgba(248,247,245,0.55)")
            : "transparent",
          backdropFilter: headerScrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(8px)" : "none",
          borderBottom: `1px solid ${headerScrolled ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
          paddingBottom: headerScrolled ? 16 : 24,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding-bottom 0.3s ease",
        }}>
          <HeaderLogo onNavigate={onNavigate} color={onDark ? "#fff" : GOLD} />
          <Breadcrumbs color={onDark ? "#fff" : GOLD} items={[
            { label: "Work", onClick: () => onNavigate("work") },
            { label: "Product & UX Strategies", onClick: onBack },
          ]} />
          <h1 className="font-['Museo',sans-serif] font-light" style={{ fontSize: headerScrolled ? '1.5rem' : 'clamp(2.25rem, 3.6vw, 3.25rem)', lineHeight: 1.05, color: onDark ? '#fff' : GOLD, margin: 0, transition: 'font-size 0.3s ease, color 0.3s ease' }}>Brand Perception &amp; UX Strategy</h1>
        </div>

        {unlocked ? (
          <>
            <BrandPerceptionContent />
            <NdaNotice />
            <NavClearance />
          </>
        ) : (
          // content-box, so the 560 caps the column and not the column plus its
          // gutter. Border-box made it 560 including md:px-20, leaving a 400px
          // measure that the NDA line missed fitting on one line by nine
          // pixels — so it wrapped, on a desktop screen with the whole
          // right-hand side empty.
          <div className="px-6 md:px-20 pt-8 pb-10" style={{ maxWidth: 560, boxSizing: 'content-box' }}>
            <p className="font-['Nunito_Sans',sans-serif] text-small" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM }}>This work was produced under NDA. Access available on request.</p>
            <p className="font-['Nunito_Sans',sans-serif]" style={{ color: isDark ? "rgba(255,255,255,0.72)" : DIM, marginTop: 8 }}>This page requires passcode</p>

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

            {/* Right on a phone, where the thumb is; left on desktop, where
                the form's own left edge is what the eye follows down. */}
            <div className="flex justify-end md:justify-start" style={{ marginTop: 24 }}>
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
      {/* Only behind the gate, and only once it is open — never on the
          passcode screen, and never on a public page. */}
      {unlocked && <NdaWatermark />}
      {unlocked && <CaseSectionRail scrollRef={scrollRef} sections={BP_SECTIONS} />}
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
    case "sourceCase":      return "/work/case-studies/source";
    case "visaCardCase":    return "/work/case-studies/visa-card";
    case "finTechCase":     return "/work/business-acumen/fintech";
    case "brandPerceptionCase": return "/work/product-ux-strategies/brand-perception";
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
    if (seg[1] === "case-studies" && seg[2] === "source") return at("sourceCase");
    if (seg[1] === "business-acumen" && seg[2] === "fintech") return at("finTechCase");
    if (seg[1] === "product-ux-strategies" && seg[2] === "brand-perception") return at("brandPerceptionCase");
    if (seg[1] === "case-studies" && seg[2] === "visa-card") return at("visaCardCase");
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
    case "finTechCase":     return "A passcode-gated case study: Quick Cash In for TNG eWallet's GO+, and the balance between an aggressive business goal and what users would accept.";
    case "sourceCase":      return "A year-long case study: SOURCE, the energy performance management dashboard that made building and solar data visible to the people who owned it.";
    case "visaCardCase": return "Malaysia's first CSR-linked and first numberless Visa prepaid card — the artwork, the numberless in-app experience, and the RM1,000,000 it raised for United Voice.";
    case "brandPerceptionCase": return "Shifting how 23 million people saw a wallet app — a brand perception framework, the UX strategy behind it, and how it was measured.";
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
    case "sourceCase":      return `SOURCE: Energy Performance Management Dashboard — ${SITE_TITLE}`;
    case "finTechCase":     return `FinTech: Balancing User Preference & Business Result — ${SITE_TITLE}`;
    case "visaCardCase": return `TNG eWallet Visa Card — ${SITE_TITLE}`;
    case "brandPerceptionCase": return `Brand Perception & UX Strategy — ${SITE_TITLE}`;
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
  const reduceMotion = useReducedMotion();

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
  // Where the one logomark is on its journey: 0 over the hero's corner, 1 in
  // the rail. A motion value, not state, because on the homepage the deck
  // writes the scroll into it frame by frame and App has no business
  // re-rendering for that.
  const heroProgress = useMotionValue(0);
  // Bumped by goHome to send the deck back to the hero slide.
  const [homeReset, setHomeReset] = useState(0);

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
  const motionKey = page === "speaking" ? `speaking:${detailKey}` : page === "workDetail" ? `workDetail:${detailKey}` : page;
  // Case-study pages are a drill-in from the Work list; they animate as an
  // expansion of the row rather than as a new screen sliding in.
  const drillIn = page === "workDetail" || page === "businessCase" || page === "kaiCase"
    || page === "appleHealthCase" || page === "brandPerceptionCase" || page === "sourceCase" || page === "finTechCase"
    || page === "visaCardCase";


  useEffect(() => {
    setDetailHeaderScrolled(false);
  }, [page, detailKey]);

  // The bottom nav is site chrome, not page content. It used to be rendered
  // inside each page, which put it inside the page transition: every
  // navigation faded and scaled it back in, so drilling from Work into a case
  // study read as the whole window reloading. It now lives out here, mounted
  // once, and only its active item changes as the route does — the bar itself
  // never moves. The homepage is the exception; its nav travels with the deck.
  // The rail is desktop chrome everywhere except the homepage's first slide,
  // which is where the mark is introduced and still carries its own. Swiping
  // the deck past that slide is a section change without a page change, so it
  // has to count: otherwise the deck runs from Work to Connect with the hero's
  // mark scrolled off and the rail's not yet shown.
  // The boolean the rest of the site asks for — is the mark in the rail —
  // taken off the same journey at its midpoint. React only re-renders when it
  // crosses.
  const [railOn, setRailOn] = useState(false);
  useMotionValueEvent(heroProgress, "change", t => setRailOn(t > 0.5));
  // Leaving the homepage there is no deck scroll to ride, so the mark tweens.
  // The first route of a session is not a journey at all — a deep link opens
  // with the mark already in the rail.
  const routed = useRef(false);
  useEffect(() => {
    const first = !routed.current;
    routed.current = true;
    if (page === "home") return;   // the deck owns the value while it is mounted
    if (first) { heroProgress.set(1); setRailOn(true); return; }
    const controls = animate(heroProgress, 1, reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [page, heroProgress, reduceMotion]);
  // The mark showing and the page making room for it are different questions.
  // The homepage deck is a full-bleed track whose slides are each a viewport
  // wide; insetting it mid-swipe shoved it 126px sideways and narrowed every
  // slide. On the deck the mark simply sits over it, as chrome.
  const railInset = page !== "home";
  // The strip the rail occupies is root, not page, so it has to take the
  // page's own colour or the mark sits on a band of the wrong one beside the
  // content. Two pages set their own: the KAI case is a white document, and
  // a speaking event flagged `dark` runs near-black behind its hero.
  // Everything else is the site's cream.
  // A case study is a document, and a document is on white. The site's cream
  // is the ground the portfolio sits on; inside a case the work is the page.
  // KAI had this to itself — the rest of the cases now read the same way.
  // DEEP_PAGES is the same six routes the phone nav treats as third level.
  const groundBg = isDark
    ? "#282828"
    : DEEP_PAGES.has(page)
      ? "#ffffff"
      : page === "speaking" && SPEAKING_DETAIL[detailKey ?? ""]?.dark
        ? "#030303"
        : "#f8f7f5";

  const navActive: Page | null =
      page === "home" ? null
    : page === "work" || page === "workDetail" || page === "businessCase"
      || page === "kaiCase" || page === "appleHealthCase" || page === "brandPerceptionCase"
      || page === "sourceCase" || page === "finTechCase" || page === "visaCardCase" ? "work"
    : page === "awards" || page === "speaking" ? "awards"
    : page === "speakingInquiry" ? "connect"
    : page;
  // Which way the page travels. The mark does not move between pages — it is
  // a fixed layer and the page slides under it — so the page has to carry the
  // motion, or the mark reads as re-drawn on each load rather than as the one
  // thing that stayed. Direction follows the nav's own order, the same left to
  // right the homepage deck runs in, so moving forward through the bar sends
  // the new page in from the right and going back sends it in from the left.
  const navIdx = navActive ? SECTION_ORDER.indexOf(navActive as typeof SECTION_ORDER[number]) : 0;
  const prevNavIdx = useRef(navIdx);
  const slideDir = navIdx === prevNavIdx.current ? 0 : navIdx > prevNavIdx.current ? 1 : -1;
  useEffect(() => { prevNavIdx.current = navIdx; }, [navIdx]);
  const pageMotion = { dir: slideDir, drill: drillIn };

  // Swiping between section pages. The homepage deck is a real scroll track;
  // these are separate routes, so rather than mount all five at once the
  // gesture is read and turned into a navigation — the page transition is
  // already a cross-slide in the nav's own direction, so it lands the same way
  // a deck slide would, and every page keeps its URL.
  const swipeIdx = SWIPE_PAGES.indexOf(page);
  const canSwipe = swipeIdx > 0;   // the hero has the deck's own gesture
  const touchStart = useRef<{ x: number; y: number; t: number } | null>(null);
  const onPageTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  };
  const onPageTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || !canSwipe) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Four ways a gesture is not this gesture: it began in the edge strip iOS
    // uses for its own back swipe; it did not travel far enough to be
    // deliberate; it was mostly vertical, which is the page scrolling; or it
    // was slow, which is a drag rather than a flick.
    if (start.x < 24) return;
    if (Math.abs(dx) < 60) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (Date.now() - start.t > 600) return;
    const next = swipeIdx + (dx < 0 ? 1 : -1);
    if (next < 0 || next >= SWIPE_PAGES.length) return;
    const target = SWIPE_PAGES[next];
    if (target === "home") { goHome(); return; }
    setPage(target);
  };
  const toggleDark = useCallback(() => setIsDark(d => !d), []);

  // Router state -> address bar. The guard matters: without it the first
  // render would push a duplicate entry, and a popstate-driven change would
  // push the entry it just came from, trapping the back button.
  useEffect(() => {
    applyRoute(page, detailKey, "push");
  }, [page, detailKey]);

  // Hover has to be asked for. A navigation leaves the pointer exactly where it
  // was, so whatever the new page puts under it comes up hovered on arrival —
  // on Business Acumen that was the second bullet, underlining itself before
  // the reader had done anything. The class goes on at every route change and
  // comes off at the first genuine pointer movement. Touch never sets it off:
  // a tap emits pointermove at the tap point, which clears the flag with
  // nothing hovered.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("nav-settling");
    const clear = () => root.classList.remove("nav-settling");
    window.addEventListener("pointermove", clear, { once: true });
    return () => { window.removeEventListener("pointermove", clear); clear(); };
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

  // The mark always lands on the hero, growing back into the corner it
  // started from. Clearing leftHero here as well as on the deck's own mount
  // means the flight back begins with the navigation rather than after it.
  const goHome = useCallback(() => {
    setHomeInitialIdx(0);
    // Bumped every time, because the deck may already be mounted and on
    // another slide — setPage alone is a no-op then.
    setHomeReset(n => n + 1);
    setPage("home");
  }, []);

  return (
    <DarkModeCtx.Provider value={isDark}>
    <DarkModeToggleCtx.Provider value={toggleDark}>
    <GoHomeCtx.Provider value={goHome}>
    <AccordionCtx.Provider value={{ openId: openAccordionId, setOpenId: setOpenAccordionId }}>
    <div className="relative w-screen h-dvh overflow-hidden"
      style={{ background: groundBg, transition: "background 0.3s ease", ["--rail-w" as string]: RAIL_W }}>
      {/* Flat ground — warm cream in light, near-black in dark. No mesh, and
          no per-section tinting: one colour behind the whole site. */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, background: groundBg, transition: "background 0.3s ease" }} />
      {THEME_TOGGLE_ENABLED && <DarkModeToggle isDark={isDark} onToggle={toggleDark} />}
      {/* Drilling into a case study used to slide in from the right, which read
          as a separate screen arriving over the top of the list. These pages
          are the row you just opened, so they unfold instead: a slight scale
          up from the top edge, where the accordion row sits, easing in and
          out so it settles rather than snaps. Everything else stays a plain
          cross-fade. */}
      {/* One offset moves every page: each keeps its own md:px-20 gutter,
          now measured from the rail's edge rather than the viewport's.
          The root behind the rail takes the page's own background, so the
          strip holding the mark is not a panel of a different colour beside
          a white case study. Padding the page instead of insetting it would
          do the same in one line, but the pages whose roots are absolutely
          positioned ignore it. */}
      <AnimatePresence initial={false} custom={pageMotion}>
      <motion.div key={motionKey} className={`absolute inset-0${railInset ? " lg:left-[var(--rail-w)]" : ""}`}
        onTouchStart={onPageTouchStart}
        onTouchEnd={onPageTouchEnd}
        // Horizontal overscroll stays inside the page: without this a swipe
        // right hands the gesture to the browser's own back navigation, which
        // leaves the site rather than moving a section. The OS edge swipe is
        // untouched — that one starts in the strip the handler ignores.
        style={{ zIndex: 1, transformOrigin: "50% 0%", overscrollBehaviorX: "contain" }}
        custom={pageMotion}
        variants={pageVariants}
        initial="enter" animate="center" exit="exit"
        transition={{ duration: drillIn ? 0.5 : 0.45, ease: [0.42, 0, 0.58, 1] }}>
        {page === "home"     && <HomePage onNavigate={navigateGeneral} onOpenDetail={navigateToWorkDetail} initialIdx={homeInitialIdx} heroProgress={heroProgress} resetSignal={homeReset} />}
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
          <BusinessCasePage onBack={() => { setDetailKey("business"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
        {page === "kaiCase" && (
          <KaiCasePage onBack={() => { setDetailKey("cases"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
        {page === "appleHealthCase" && (
          <AppleHealthPage onBack={() => { setDetailKey("cases"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
        {page === "brandPerceptionCase" && (
          <BrandPerceptionPage onBack={() => { setDetailKey("ux"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
        {page === "sourceCase" && (
          <SourceCasePage onBack={() => { setDetailKey("cases"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
        {page === "visaCardCase" && (
          <VisaCardPage onBack={() => { setDetailKey("cases"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
        {page === "finTechCase" && (
          <FinTechPage onBack={() => { setDetailKey("business"); setPage("workDetail"); }} onNavigate={navigateGeneral} />
        )}
      </motion.div>
      </AnimatePresence>
      {/* Outside the transition layer, and mounted for every page including
          the homepage, so it is one element that persists rather than one
          drawn again per route. On the homepage the hero carries its own mark,
          so this one fades out rather than unmounting — unmounted, it popped
          back on the first step away from home, which is the blink that made
          the whole thing read as reloaded. */}
      {canSwipe && <SectionProgress idx={swipeIdx} />}
      <IdentityRail onNavigate={navigateGeneral} progress={heroProgress} visible={railOn} />
      {navActive && (
        <StickyPageNav activePage={navActive} onNavigate={navigateGeneral}
          tint={page === "speakingInquiry" || page === "speaking" ? GOLD : undefined}
          isSubPage={DEEP_PAGES.has(page)} />
      )}
      {/* Chrome, like the nav above it: one credit for the site rather than
          one per page, outside the layer pages slide through. */}
      <SiteCreditBar />
    </div>
    </AccordionCtx.Provider>
    </GoHomeCtx.Provider>
    </DarkModeToggleCtx.Provider>
    </DarkModeCtx.Provider>
  );
}
