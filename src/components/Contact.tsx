"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, FileCode } from "lucide-react";

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
              Let's build <br /> <span className="text-zinc-500">together.</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-4">
            <div className="space-y-4 text-center md:text-left">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Status</p>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                 <span className="text-xl font-bold text-zinc-200 tracking-tight">Open for Production Roles</span>
              </div>
            </div>

            <div className="h-12 w-px bg-white/10 hidden md:block" />

            <div className="space-y-4 text-center md:text-left">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Direct Line</p>
              <a href="mailto:shreyashatre16@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-accent transition-colors block tracking-tight">
                shreyashatre16@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {[
              { label: "Github", icon: <Github size={20} />, href: "https://github.com/shreyash0216" },
              { label: "LinkedIn", icon: <Linkedin size={20} />, href: "https://linkedin.com/in/shreyash-atre-901340317" },
              { label: "Resume", icon: <FileCode size={20} />, href: "https://drive.google.com/file/d/1L77HQNQ3cc_8jI85kSaGXLg5SbB_2a_X/view?usp=share_link" },
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
