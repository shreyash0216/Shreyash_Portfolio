"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, FileCode } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const Contact = () => {
  return (
    <section id="contact" className="py-24 scroll-mt-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-10"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold"
            >
              Ready to scale?
            </motion.span>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
              Let&apos;s build <br /> <span className="text-zinc-500">together.</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-4">
            <div className="space-y-4 text-center md:text-left">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Status & Availability</p>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                 <span className="text-lg md:text-xl font-bold text-zinc-200 tracking-tight">Open for SDE Intern / SDE-1 Roles</span>
              </div>
              <p className="text-xs text-zinc-500 font-mono">Available immediately • Full-time in-office in Pune or Hybrid</p>
            </div>

            <div className="h-12 w-px bg-white/10 hidden md:block" />

            <div className="space-y-4 text-center md:text-left">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Direct Line</p>
              <a href="mailto:shreyashatre16@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-accent transition-colors block tracking-tight">
                shreyashatre16@gmail.com
              </a>
              <p className="text-xs text-zinc-500 font-mono">Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {[
              { label: "Github", icon: <Github size={20} />, href: "https://github.com/shreyash0216" },
              { label: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shreyash-atre-901340317/" },
              { label: "X / Twitter", icon: <span className="font-bold text-base">𝕏</span>, href: "https://x.com/atre_shreyash" },
              { label: "Resume", icon: <FileCode size={20} />, href: getAssetPath("resume.pdf") },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center gap-4 hover:bg-white/[0.08] hover:border-white/20 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="text-zinc-400 group-hover:text-white transition-colors relative z-10">{link.icon}</span>
                <span className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-white relative z-10">{link.label}</span>
                <ArrowUpRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
