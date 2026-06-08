import DualityHero from "@/components/DualityHero";
import WorkSection from "@/components/WorkSection";
import CoachingSection from "@/components/CoachingSection";
import SpeakingSection from "@/components/SpeakingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <DualityHero />
      <WorkSection />
      <CoachingSection />
      <SpeakingSection />
      <TestimonialsSection />
      <ContactSection />
      <footer
        className="py-8 px-8 flex items-center justify-between"
        style={{
          backgroundColor: "#0a0a0a",
          color: "#f5f4f0",
          fontFamily: "var(--font-sans)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          opacity: 0.6,
        }}
      >
        {/* COPY: update year / name if needed */}
        <span>© 2025 Tiffany C.</span>
        <span>Melbourne, Australia</span>
      </footer>
    </main>
  );
}
