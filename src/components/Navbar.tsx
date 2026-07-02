"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-2 p-1.5 rounded-full border transition-all duration-500 ${
          scrolled
          ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl"
          : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center gap-1">
          {["Home", "Experience", "Projects", "Stack"].map((item) => {
            const id = item.toLowerCase() === "stack" ? "skills" : item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <Link
                key={item}
                href={`#${id}`}
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
              </Link>
            );
          })}
        </div>
        <div className="w-px h-4 bg-white/10 mx-2" />
        <Link
          href="mailto:shreyashatre16@gmail.com"
          className="px-6 py-2 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
