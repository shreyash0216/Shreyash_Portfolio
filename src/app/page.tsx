"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SystemDesign from "@/components/SystemDesign";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import { ScrollProgress, CursorGlow } from "@/components/PremiumDetails";
import { ArrowUp, Github, Linkedin, FileText } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-blue-500/20 selection:text-blue-200">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="flex-1">
        <Hero />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-24 pb-24">
          <About />
          <CurrentlyBuilding />
          <Experience />
          <Projects />
          <SystemDesign />
          <EngineeringPrinciples />
          <Skills />
          <Achievements />
          <Contact />
        </div>
      </main>

      {/* Compact & Useful Footer */}
      <footer className="border-t border-white/[0.07] bg-[#07070a] py-8 text-xs font-mono text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-zinc-300 font-semibold tracking-tight">Shreyash Atre</span>
            <span className="hidden sm:inline text-zinc-600">&bull;</span>
            <span className="text-zinc-400">Software Developer (Pune, IN)</span>
            <span className="hidden sm:inline text-zinc-600">&bull;</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com/shreyash0216"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus-ring rounded"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyash-atre-901340317/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus-ring rounded"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={getAssetPath("resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 focus-ring rounded text-[11px]"
            >
              <FileText size={13} />
              <span>Resume</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg transition-colors focus-ring"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
