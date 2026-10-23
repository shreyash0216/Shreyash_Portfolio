"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Overview", id: "home" },
  { label: "Building", id: "building" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Architecture", id: "architecture" },
  { label: "Stack", id: "skills" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ["contact", "skills", "architecture", "projects", "experience", "building", "home"];
      const scrollPos = window.scrollY + 180;

      for (const id of sectionIds) {
        if (id === "home" && window.scrollY < 260) {
          setActiveSection("home");
          break;
        }
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPos) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0c10]/90 backdrop-blur-md border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
            : "bg-[#0b0c10]/70 backdrop-blur-sm border-white/[0.07] shadow-lg"
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 pl-2 pr-2.5 py-1 text-left text-xs font-semibold text-zinc-100 hover:text-white transition-colors focus-ring rounded-full"
          aria-label="Shreyash Atre - Home"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="tracking-tight font-medium">Shreyash Atre</span>
        </button>

        <div className="hidden lg:block w-px h-3.5 bg-white/10 mx-1" />

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full transition-all relative ${
                  isActive
                    ? "text-white font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                } focus-ring`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="hidden sm:block w-px h-3.5 bg-white/10 mx-1" />

        {/* Quick Resume CTA */}
        <a
          href={getAssetPath("resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-full text-[11px] font-mono text-zinc-200 hover:text-white transition-all focus-ring"
        >
          <FileText size={12} className="text-blue-400" />
          <span>Resume</span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-1.5 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors focus-ring"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-14 left-4 right-4 bg-[#0d0e13]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-1 z-50 lg:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "bg-white/10 text-white font-medium"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-px bg-white/10 my-1" />
            <div className="flex items-center gap-2 pt-1">
              <a
                href={getAssetPath("resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 text-center text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-xl transition-colors"
              >
                View Resume (PDF)
              </a>
              <a
                href="mailto:shreyashatre16@gmail.com"
                className="flex-1 py-2 px-3 text-center text-xs font-mono uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors"
              >
                Email Shreyash
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
