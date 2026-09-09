"use client";

import { motion } from "framer-motion";
import { Award, Trophy, ShieldCheck, Star } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const ACHIEVEMENTS = [
  {
    title: "2nd Prize Winner — SP College Science Exhibition 2026",
    org: "SP College, Pune (DermaScanAI)",
    date: "FEB 2026",
    icon: <Trophy className="text-yellow-500" size={20} />,
    desc: "Built and presented a working AI skin condition detection product end-to-end against 10+ competing collegiate teams."
  },
  {
    title: "Certificate of Excellence, DevOps Workshop",
    org: "SPPU ACM Student Chapter",
    date: "SEP 2026",
    icon: <Award className="text-accent" size={20} />,
    desc: "Demonstrated excellence in DevOps culture, automation workflows, containerization lifecycle, and CI/CD deployment pipelines."
  },
  {
    title: "AWS ImpactX Challenge — National Participant",
    org: "IIT Bombay Techfest 2025 (Team COSMOS)",
    date: "DEC 2025",
    icon: <Award className="text-cyan-400" size={20} />,
    desc: "Executed full React rewrite of an ML-powered frontend (10 crop varieties) preserving the prediction engine and Gemini API integration within a fixed hackathon timeline."
  },
  {
    title: "SPPU Inter-College CS Quiz: Top 9 Rank",
    org: "Savitribai Phule Pune University",
    date: "2025",
    icon: <Star className="text-purple-400" size={20} />,
    desc: "Achieved Top 9 rank across DSA, DBMS, Operating Systems, Computer Networks, and AI/ML domains in university-wide competition."
  },
  {
    title: "IBM SkillsBuild × AICTE — AI Automation & Intelligent Solutions",
    org: "IBM SkillsBuild × AICTE (Bharat Cares)",
    date: "JUL 2026",
    icon: <ShieldCheck className="text-emerald-400" size={20} />,
    desc: "Credential ID: BHIBMAC01877 — Completed a 6-week intensive program on automation pipelines and workflow orchestration."
  },
  {
    title: "Oracle Cloud Infrastructure — Generative AI Professional",
    org: "Oracle Cloud Infrastructure",
    date: "FEB 2026",
    icon: <ShieldCheck className="text-green-500" size={20} />,
    desc: "Certified expertise in architecting and deploying LLM/GenAI solutions and enterprise AI inference workloads."
  },
  {
    title: "Fundamentals of Docker & Kubernetes",
    org: "Scaler",
    date: "DEC 2025",
    icon: <ShieldCheck className="text-blue-500" size={20} />,
    desc: "Mastered containerization, microservices deployment strategies, Docker multi-stage builds, and orchestration."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold">Milestones & Certifications</h2>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {ACHIEVEMENTS.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 relative"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center shrink-0 shadow-2xl z-10 overflow-hidden">
                {ach.org.includes('DermaScanAI') ? (
                  <img src={getAssetPath("dermascan-logo.png")} alt="DermaScanAI" className="w-full h-full object-cover" />
                ) : ach.org.includes('IBM') ? (
                  <img src={getAssetPath("IBM_LOGO.png")} alt="IBM SkillsBuild" className="w-full h-full object-contain p-2 bg-white" />
                ) : (
                  ach.icon
                )}
              </div>
              {index < ACHIEVEMENTS.length - 1 && (
                <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent mt-4" />
              )}
            </div>

            <div className="pb-8 space-y-2">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">{ach.date}</span>
                 <div className="w-1 h-1 rounded-full bg-zinc-800" />
                 <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{ach.org}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{ach.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                {ach.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
