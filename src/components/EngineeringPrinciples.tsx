"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Layers, RefreshCw } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Build It Clearly",
    desc: "Architecting modular, maintainable systems with clean REST API design, strict RBAC, and explicit data contracts that prevent tech debt.",
    icon: <Shield size={20} className="text-blue-400" />
  },
  {
    title: "Understand It Deeply",
    desc: "Full-stack system comprehension — from PostgreSQL schema migrations and environment config to client state and network serialization.",
    icon: <Layers size={20} className="text-purple-400" />
  },
  {
    title: "Optimize When It Matters",
    desc: "Targeting high-impact bottlenecks: sub-100ms API responses, database indexing, and memory/OOM prevention rather than premature abstractions.",
    icon: <Zap size={20} className="text-yellow-400" />
  },
  {
    title: "Resilience & Rigorous QA",
    desc: "End-to-end API validation with Postman, structured pre-launch testing, and dual staging/fallback deployments (DigitalOcean + Render).",
    icon: <RefreshCw size={20} className="text-green-400" />
  }
];

const EngineeringPrinciples = () => {
  return (
    <section className="scroll-mt-32">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Engineering Principles</h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-1">/ Architecture & Standards</p>
        </div>
        <div className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/5 px-4 py-2 rounded-xl">
          &ldquo;Build it clearly, understand it deeply, and optimize it when it matters.&rdquo;
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 glass-card border-white/5 space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
              {p.icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
