"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Cpu, Activity, Terminal, Globe, ArrowDownToLine, ChevronRight } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-8 space-y-8 md:space-y-10">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tight leading-[0.85] text-white"
              >
                Software <br />
                <span className="text-zinc-500">Engineer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-500 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
              >
                Building scalable backend systems, AI-powered applications, and modern SaaS products with a focus on high availability.
              </motion.p>
            </div>

            {/* Live Engineering Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { label: "Location", value: "Pune, IN", icon: <Globe size={14} /> },
                { label: "Uptime", value: "4+ Years", icon: <Activity size={14} /> },
                { label: "Core Stack", value: "Node/AWS", icon: <Cpu size={14} /> },
                { label: "Focus", value: "Fullstack / SWE", icon: <Terminal size={14} /> },
              ].map((stat, i) => (
                <div key={i} className="p-3 md:p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all hover:border-white/10 group cursor-default">
                  <div className="flex items-center gap-2 text-zinc-600 mb-2 group-hover:text-accent transition-colors">
                    {stat.icon} <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className="text-xs md:text-sm font-mono text-zinc-300 font-bold tracking-tight">{stat.value}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 pt-2"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto group px-8 md:px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              >
                View Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href="https://github.com/shreyash0216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-zinc-500 hover:text-white transition-all hover:border-white/10"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/shreyash-atre-901340317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-zinc-500 hover:text-white transition-all hover:border-white/10"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1L77HQNQ3cc_8jI85kSaGXLg5SbB_2a_X/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-6 py-4 bg-accent/10 border border-accent/20 text-accent font-bold rounded-2xl hover:bg-accent hover:text-white transition-all group text-sm"
                >
                   <ArrowDownToLine size={18} className="group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-transform" />
                   Fetch CV
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Identity Module */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative group w-full max-w-[450px] mx-auto"
          >
            <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/5] bg-zinc-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />

              <img
                src={getAssetPath("shreyash.jpg")}
                alt="Shreyash Atre"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 p-5 md:p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-[1.5rem] md:rounded-[2rem]">
                <p className="text-[9px] md:text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-1 md:mb-2 font-bold">Software Engineer</p>
                <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                  Founder at Syantrex Technologies. Building the future of SaaS.
                </p>
              </div>
            </div>

            <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
