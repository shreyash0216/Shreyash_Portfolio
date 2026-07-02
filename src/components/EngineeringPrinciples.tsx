"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Layers, RefreshCw } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Reliability over Hype",
    desc: "Architecting systems that prioritize data integrity and uptime using battle-tested paradigms like clean architecture and rigorous validation.",
    icon: <Shield size={20} className="text-blue-400" />
  },
  {
    title: "Performance First",
    desc: "Every millisecond counts. Optimization isn't an afterthought; it's a core design principle from database indexing to frontend rendering.",
    icon: <Zap size={20} className="text-yellow-400" />
  },
  {
    title: "Scalable Abstractions",
    desc: "Building for today with an eye on tomorrow. Designing modular, multi-tenant architectures that can grow without technical debt.",
    icon: <Layers size={20} className="text-purple-400" />
  },
  {
    title: "Iterative Refinement",
    desc: "Software is never finished. Constant auditing, refactoring, and CI/CD automation ensure the codebase remains elite.",
    icon: <RefreshCw size={20} className="text-green-400" />
  }
];

const EngineeringPrinciples = () => {
  return (
    <section className="scroll-mt-32">
       <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Engineering Principles</h2>
        <div className="h-px flex-1 bg-white/5"></div>
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
