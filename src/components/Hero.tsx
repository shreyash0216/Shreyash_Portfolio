"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Cpu, Activity, Terminal, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-wrap items-center gap-4"
              >
                <span className="engineering-callout">System.status("ACTIVE")</span>
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-accent/5 border border-accent/20 text-[10px] font-mono text-accent uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Live Deployment: v2.4.0
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] text-mask"
              >
                Software <br /> Engineer
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-500 max-w-2xl text-xl font-medium leading-relaxed"
              >
                Building scalable backend systems, AI-powered applications, and modern SaaS products with a focus on high availability.
              </motion.p>
            </div>

            {/* Live Engineering Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {[
                { label: "Location", value: "Pune, IN", icon: <Globe size={14} /> },
                { label: "Uptime", value: "4+ Years", icon: <Activity size={14} /> },
                { label: "Core Stack", value: "Node/AWS", icon: <Cpu size={14} /> },
                { label: "Focus", value: "Backend/AI", icon: <Terminal size={14} /> },
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all hover:border-white/10 group cursor-default">
                  <div className="flex items-center gap-2 text-zinc-600 mb-2 group-hover:text-accent transition-colors">
                    {stat.icon} <span className="text-[10px] font-mono uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className="text-sm font-mono text-zinc-300 font-bold tracking-tight">{stat.value}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <button className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
                View Projects
              </button>
              <div className="flex items-center gap-6">
                <a href="https://github.com/shreyash0216" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110"><Github size={24} /></a>
                <a href="https://linkedin.com/in/shreyash-atre-901340317" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110"><Linkedin size={24} /></a>
                <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest font-bold">
                   Resume.pdf <FileText size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Identity Module */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative group"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/5] bg-zinc-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />

              <img
                src="./shreyash.jpg"
                alt="Shreyash Atre"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />

              <div className="absolute top-8 left-8 z-20">
                <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-300">MOASH_INTERN_02</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-20 p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem]">
                <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-2 font-bold">Software Engineer</p>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                  Founder at Syantrex Technologies. Building the future of SaaS.
                </p>
              </div>
            </div>

            <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
