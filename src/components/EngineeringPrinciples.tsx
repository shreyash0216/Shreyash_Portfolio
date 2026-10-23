"use client";

import { ShieldCheck, Layers, Zap, RefreshCw, Cpu } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Build It Clearly",
    tag: "Design & Contracts",
    desc: "Architecting modular, maintainable systems with clean REST API design, strict RBAC, and explicit data contracts that prevent technical debt.",
    icon: <ShieldCheck size={18} className="text-blue-400" />
  },
  {
    title: "Understand It Deeply",
    tag: "Full-Stack Mental Model",
    desc: "End-to-end system comprehension — from PostgreSQL schema migrations and environment variables to React DOM reconciliation and network serialization.",
    icon: <Layers size={18} className="text-purple-400" />
  },
  {
    title: "Optimize When It Matters",
    tag: "Targeted Performance",
    desc: "Targeting high-impact bottlenecks: sub-100ms API latency, database indexing, and memory allocation rather than premature micro-optimizations.",
    icon: <Zap size={18} className="text-amber-400" />
  },
  {
    title: "Resilience & Rigorous QA",
    tag: "Production Reliability",
    desc: "End-to-end API verification with Postman, structured pre-launch QA passes, and dual staging/fallback deployments (DigitalOcean + Render).",
    icon: <RefreshCw size={18} className="text-emerald-400" />
  }
];

const EngineeringPrinciples = () => {
  return (
    <section className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Cpu size={18} className="text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Engineering Principles</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Standards &amp; Architectural Mindset
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRINCIPLES.map((principle, idx) => (
          <div
            key={idx}
            className="editorial-card p-5 space-y-3 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-white/20 transition-colors">
                  {principle.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  {principle.tag}
                </span>
              </div>
              <h3 className="text-sm font-bold text-zinc-100 tracking-tight">
                {principle.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {principle.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>Standard 0{idx + 1}</span>
              <span className="text-blue-400/80">Enforced</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
