"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Command } from "lucide-react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

export const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:opacity-100 opacity-0"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 112, 243, 0.05), transparent 80%)`,
      }}
    />
  );
};

export const CommandBar = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        // Trigger command menu logic here
        console.log("Command Menu Triggered");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono text-zinc-500 uppercase tracking-widest shadow-2xl">
      <Command size={12} /> + K to search
    </div>
  );
};
