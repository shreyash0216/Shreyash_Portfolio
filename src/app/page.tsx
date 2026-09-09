import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SystemDesign from "@/components/SystemDesign";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { ScrollProgress, CursorGlow } from "@/components/PremiumDetails";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 space-y-20 pb-24">
        <About />
        <CurrentlyBuilding />
        <Experience />
        <EngineeringPrinciples />
        <SystemDesign />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </div>
      <footer className="border-t border-border py-8 text-center text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Shreyash Atre. Engineered for Performance.</p>
      </footer>
    </main>
  );
}
