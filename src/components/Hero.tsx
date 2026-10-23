"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Mail, FileDown, Database, Server, Cpu, MapPin } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-zinc-300"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Available for Software Developer Roles
              </span>
              <span className="text-zinc-600 hidden sm:inline">&bull;</span>
              <span className="text-zinc-400 hidden sm:inline flex items-center gap-1 font-mono text-[11px]">
                <MapPin size={11} className="text-zinc-500" /> Pune, IN
              </span>
            </motion.div>

            {/* Core Identity & Heading */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block mb-1">
                  Shreyash Atre
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                  Software Developer
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xs sm:text-sm font-mono uppercase tracking-wider text-blue-400 font-semibold"
              >
                Backend Engineer &bull; Full Stack Engineer &bull; Product Builder
              </motion.p>
            </div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
            >
              I build reliable software products, scalable backend systems, full-stack applications, and AI-powered solutions. 
              Final-year B.Sc. Computer Science student at Sir Parashurambhau College, Pune (CGPA 8.68). 
              Co-Founder &amp; Full Stack Engineer at Syantrex Technologies, engineering production software and Syantrex ERP.
            </motion.p>

            {/* Verified Technical Signals Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1"
            >
              <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors">
                <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                  <Server size={13} className="text-blue-400" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">Backend &bull; APIs</span>
                </div>
                <div className="text-xs font-mono font-medium text-zinc-200">Node &bull; NestJS &bull; REST</div>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors">
                <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                  <Database size={13} className="text-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">Databases</span>
                </div>
                <div className="text-xs font-mono font-medium text-zinc-200">PostgreSQL &bull; MongoDB &bull; Redis</div>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                  <Cpu size={13} className="text-purple-400" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">Academics</span>
                </div>
                <div className="text-xs font-mono font-medium text-zinc-200">8.68 CGPA (SP College)</div>
              </div>
            </motion.div>

            {/* CTAs & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm rounded-xl transition-all shadow-md hover:shadow-zinc-100/10 focus-ring"
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-200 hover:text-white font-medium text-sm rounded-xl transition-all focus-ring"
              >
                <Mail size={14} className="text-blue-400" />
                <span>Contact Me</span>
              </a>

              {/* One-Page Resume Link */}
              <a
                href={getAssetPath("resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all focus-ring"
              >
                <FileDown size={14} className="text-emerald-400" />
                <span>Resume (PDF)</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                <a
                  href="https://github.com/shreyash0216"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (shreyash0216)"
                  className="p-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white rounded-xl transition-colors focus-ring"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shreyash-atre-901340317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white rounded-xl transition-colors focus-ring"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 max-w-sm mx-auto lg:max-w-none w-full"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 shadow-2xl p-2">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950">
                <img
                  src={getAssetPath("shreyash.jpg")}
                  alt="Shreyash Atre - Software Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Portrait Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-black/75 backdrop-blur-md border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-white text-xs font-semibold">Shreyash Atre</p>
                      <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
                        Software Developer &bull; Pune
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30 whitespace-nowrap">
                      Co-Founder &bull; Syantrex
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
