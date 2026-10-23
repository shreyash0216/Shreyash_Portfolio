"use client";

import { Trophy, Award, ShieldCheck, Star, Calendar } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

interface Milestone {
  title: string;
  issuer: string;
  date: string;
  category: "Award" | "Certification" | "Participation" | "Competition Rank";
  desc: string;
  credentialId?: string;
  logo?: string;
  iconType: "trophy" | "award" | "shield" | "star";
}

const MILESTONES: Milestone[] = [
  {
    title: "2nd Prize Winner — SP College Science Exhibition 2026",
    issuer: "Sir Parashurambhau College, Pune",
    date: "Feb 2026",
    category: "Award",
    desc: "Built and demonstrated DermaScanAI (AI skin condition detection & clinic triage engine) end-to-end against 10+ competing collegiate engineering teams.",
    logo: "dermascan-logo.png",
    iconType: "trophy"
  },
  {
    title: "Oracle Cloud Infrastructure — Generative AI Certified Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "Feb 2026",
    category: "Certification",
    desc: "Demonstrated professional competency in architecting LLM solutions, prompt engineering pipelines, and deploying enterprise generative AI workloads.",
    iconType: "shield"
  },
  {
    title: "Fundamentals of Docker & Kubernetes",
    issuer: "Scaler",
    date: "Dec 2025",
    category: "Certification",
    desc: "Mastered containerization concepts, multi-stage Docker builds, microservice isolation, and orchestration fundamentals.",
    iconType: "shield"
  },
  {
    title: "AWS ImpactX Challenge — National Participant",
    issuer: "IIT Bombay Techfest 2025 (Team COSMOS)",
    date: "Dec 2025",
    category: "Participation",
    desc: "Selected national participant for architecting and executing a rapid React rewrite of a climate resilience advisory tool (GRA) integrating Gemini API and ML prediction engines.",
    iconType: "award"
  },
  {
    title: "SPPU Inter-College CS Quiz: Top 9 Rank",
    issuer: "Savitribai Phule Pune University",
    date: "2025",
    category: "Competition Rank",
    desc: "Achieved Top 9 rank across university-wide competitive evaluation spanning Data Structures & Algorithms, DBMS, Operating Systems, Networks, and AI.",
    iconType: "star"
  },
  {
    title: "AI Automation & Intelligent Solutions",
    issuer: "IBM SkillsBuild × AICTE (Bharat Cares)",
    date: "Jul 2026",
    category: "Certification",
    desc: "Completed an intensive 6-week technical curriculum on enterprise automation pipelines and intelligent workflow orchestration.",
    credentialId: "BHIBMAC01877",
    logo: "IBM_LOGO.png",
    iconType: "shield"
  },
  {
    title: "Certificate of Excellence, DevOps Workshop",
    issuer: "SPPU ACM Student Chapter",
    date: "Sep 2026",
    category: "Certification",
    desc: "Recognized for excellence in modern DevOps practices, containerization lifecycle, automation workflows, and CI/CD deployment pipelines.",
    iconType: "shield"
  }
];

const Achievements = () => {
  return (
    <section id="milestones" className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Trophy size={18} className="text-amber-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Achievements &bull; Credentials</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Awards &bull; Certifications &bull; Participation
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MILESTONES.map((item, idx) => (
          <div
            key={idx}
            className="editorial-card p-5 space-y-3 flex flex-col justify-between group"
          >
            <div className="space-y-2.5">
              {/* Header row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden p-1">
                    {item.logo ? (
                      <img
                        src={getAssetPath(item.logo)}
                        alt={`${item.issuer} logo`}
                        className={`w-full h-full ${
                          item.logo === "IBM_LOGO.png" ? "object-contain bg-white rounded p-0.5" : "object-contain"
                        }`}
                      />
                    ) : item.iconType === "trophy" ? (
                      <Trophy size={16} className="text-amber-400" />
                    ) : item.iconType === "award" ? (
                      <Award size={16} className="text-blue-400" />
                    ) : item.iconType === "star" ? (
                      <Star size={16} className="text-purple-400" />
                    ) : (
                      <ShieldCheck size={16} className="text-emerald-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                      {item.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                      <Calendar size={10} />
                      {item.date}
                    </span>
                  </div>
                </div>

                <span
                  className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider shrink-0 font-medium ${
                    item.category === "Award"
                      ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                      : item.category === "Certification"
                      ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                      : item.category === "Participation"
                      ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      : "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  }`}
                >
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>

            {/* Credential ID if present */}
            {item.credentialId && (
              <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Verified Credential ID:</span>
                <span className="text-blue-400 font-mono font-medium">{item.credentialId}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
