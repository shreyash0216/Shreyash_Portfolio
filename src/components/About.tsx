"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2, Cpu } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-8 md:mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-mask">About</h2>
        <p className="text-zinc-500 font-mono text-[10px] md:text-sm uppercase tracking-widest pb-1 md:pb-2">/ System Profile</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start">
        {/* Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card p-6 md:p-10 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
            <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-medium">
              Final-year B.Sc. Computer Science student (<span className="text-white font-bold">CGPA 8.68</span>) who has shipped production full-stack systems solo — backend, frontend, database, deployment, and QA.
            </p>
            <p className="text-zinc-400 mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
              Experienced across Node.js, NestJS, React, and PostgreSQL. Comfortable setting up projects from scratch and owning them through to live clients using them daily. Dedicated to turning real-world requirements into resilient software:
              <span className="block mt-3 text-zinc-300 font-mono text-xs md:text-sm border-l-2 border-accent pl-3 py-0.5">
                &ldquo;Build it clearly, understand it deeply, and optimize it when it matters.&rdquo;
              </span>
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available immediately, full-time, in-office in Pune.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-5 md:p-6 glass-card border-white/5 flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
              <div className="p-3 bg-accent/10 rounded-xl text-accent"><Code2 size={20} /></div>
              <div>
                <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-1">Current Experience</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Independent Project Lead at Syantrex &amp; Ex-Intern at Moash / Careasa.</p>
              </div>
            </div>
            <div className="p-5 md:p-6 glass-card border-white/5 flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400"><Cpu size={20} /></div>
              <div>
                <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest mb-1">Core Focus</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">NestJS, Node.js, PostgreSQL, React, REST API Design, and Multi-Tenant SaaS.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meta Grid */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 glass-card border-white/5 space-y-6"
          >
            <div className="flex items-center gap-4 border-b border-white/5 pb-6">
              <div className="p-3 bg-zinc-950 border border-white/10 rounded-2xl text-zinc-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] mb-1">Education</h3>
                <p className="text-white font-bold text-base">B.Sc Computer Science</p>
                <p className="text-xs text-zinc-500">2024 — 2027</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-zinc-300 font-medium">Sir Parashurambhau College</p>
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Current_GPA</span>
                <span className="text-accent">8.68 / 10.0</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "86.8%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-accent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="p-3 bg-zinc-950 border border-white/10 rounded-2xl text-zinc-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] mb-1">Location</h3>
                <p className="text-white font-bold">Pune, Maharashtra</p>
                <p className="text-xs text-zinc-500">IST (UTC +5:30)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
