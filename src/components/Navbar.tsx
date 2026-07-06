"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["experience", "projects", "skills"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = ["Home", "Experience", "Projects", "Stack"];

  return (
    <nav className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between md:justify-center gap-2 p-1.5 rounded-full border transition-all duration-500 w-full max-w-[400px] md:w-auto ${
          scrolled || isMobileMenuOpen
          ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl"
          : "bg-transparent border-transparent md:bg-black/20 md:backdrop-blur-md md:border-white/5"
        }`}
      >
        {/* Mobile Logo/Title (Visible only on small screens) */}
        <div className="md:hidden pl-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white">
          SA_ENGINEER
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.toLowerCase() === "stack" ? "skills" : item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <button
                key={item}
                onClick={() => scrollTo(id)}
                className={`px-5 py-2 text-[10px] font-mono uppercase tracking-[0.2em] transition-colors relative ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/5 rounded-full z-[-1]"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="hidden md:block w-px h-4 bg-white/10 mx-2" />

        {/* Contact CTA */}
        <a
          href="mailto:shreyashatre16@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
        >
          Contact
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors mr-1"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-16 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 z-[49] md:hidden"
          >
            {navItems.map((item) => {
              const id = item.toLowerCase() === "stack" ? "skills" : item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(id)}
                  className="text-left py-4 px-6 text-sm font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                >
                  {item}
                </button>
              );
            })}
            <div className="h-px bg-white/5 my-2" />
            <a
              href="mailto:shreyashatre16@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 px-6 bg-white text-black text-sm font-mono font-bold text-center uppercase tracking-widest rounded-2xl"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
