"use client";

import { motion } from "framer-motion";
import { Award, Trophy, ShieldCheck, Star } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const ACHIEVEMENTS = [
  {
    title: "2nd Prize, SP College Science Exhibition 2026",
    org: "DermaScanAI Backend Lead",
    date: "FEB 2026",
    icon: <Trophy className="text-yellow-500" size={20} />,
    desc: "Architected the winning backend system for an AI-based dermatological condition classifier, competing against 10+ teams."
  },
  {
    title: "Oracle Cloud Infrastructure: Generative AI Professional",
    org: "ORACLE CLOUD INFRASTRUCTURE",
    date: "FEB 2026",
    icon: <ShieldCheck className="text-green-500" size={20} />,
    desc: "Certified expertise in building and deploying LLM-based solutions on enterprise cloud infra."
  },
  {
    title: "AWS ImpactX Hackathon Participant",
    org: "IIT BOMBAY (TECHFEST 2025)",
    date: "DEC 2025",
    icon: <Award className="text-accent" size={20} />,
    desc: "Developed a fault-tolerant AI sustainability platform using Gemini API and offline fallback engines."
  },
  {
    title: "Fundamentals of Docker & Kubernetes",
    org: "SCALER",
    date: "DEC 2025",
    icon: <ShieldCheck className="text-blue-500" size={20} />,
    desc: "Mastered container orchestration and microservices deployment strategies."
  },
  {
    title: "SPPU Inter-College CS Quiz: Top 9 Rank",
    org: "SAVITRIBAI PHULE PUNE UNIVERSITY",
    date: "2025",
    icon: <Star className="text-purple-400" size={20} />,
    desc: "Ranked in the Top 9 across DSA, OS, DBMS, CN, and AI/ML domains in the inter-college CS quiz."
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
                {ach.org === 'DermaScanAI Backend Lead' ? (
                  <img src={getAssetPath("dermascan-logo.png")} alt="DermaScanAI" className="w-full h-full object-cover" />
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
