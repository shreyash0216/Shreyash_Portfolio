"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu, Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Moash",
    role: "Web & Software Development Intern",
    period: "June 2026 - Present",
    status: "current",
    impact: [
      "Engineered high-performance SaaS features for Menuara, reducing latency by 30%.",
      "Architected responsive, real-time dashboards using Next.js 14 and state management.",
      "Collaborated on production-level deployments, ensuring 99.9% system availability.",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind", "REST APIs"],
    icon: <Terminal size={20} className="text-accent" />
  },
  {
    company: "Syantrex Technologies",
    role: "Founder & Software Developer",
    period: "June 2026 - Present",
    status: "founder",
    impact: [
      "Built multi-tenant Syantrex ERP from zero to production, serving live enterprise clients.",
      "Optimized PostgreSQL schema performance, improving query speeds by 40% for large data sets.",
      "Automated deployment pipelines and cloud infrastructure management for scalable delivery.",
    ],
    tech: ["Product Ownership", "Architecture", "Backend", "Cloud Deploy"],
    icon: <Cpu size={20} className="text-purple-400" />
  },
  {
    company: "Careasa Healthcare",
    role: "App Development Intern",
    period: "Dec 2025 - June 2026",
    status: "completed",
    impact: [
      "Designed secure RESTful APIs with Node.js/Express and JWT, handling 1k+ daily requests.",
      "Integrated real-time video/audio infrastructure using Agora SDK for healthcare delivery.",
      "Synchronized AWS S3 and RDS models, resolving cross-platform data alignment issues.",
    ],
    tech: ["Node.js", "JWT", "AWS S3/RDS", "Agora", "Flutter"],
    icon: <ShieldCheck size={20} className="text-green-400" />
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const configs: Record<string, { label: string; color: string; icon: string }> = {
    current: { label: "Current", color: "text-green-500 bg-green-500/10 border-green-500/20", icon: "🟢" },
    founder: { label: "Founder", color: "text-purple-500 bg-purple-500/10 border-purple-500/20", icon: "🟣" },
    completed: { label: "Completed", color: "text-orange-500 bg-orange-500/10 border-orange-500/20", icon: "🟠" },
  };

  const config = configs[status];
  return (
    <div className={`px-2 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5 ${config.color}`}>
      <span className="text-[7px]">{config.icon}</span>
      {config.label}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Professional Experience</h2>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/5 to-transparent hidden md:block" />

        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-4 md:gap-12 relative group"
            >
              {/* Timeline Node */}
              <div className="flex flex-col items-center shrink-0 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center shadow-2xl transition-all group-hover:border-accent/50 group-hover:shadow-accent/20"
                >
                  <div className="transition-transform group-hover:rotate-2">
                    {exp.icon}
                  </div>
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Experience Card */}
              <div className="flex-1 pb-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-4 border-white/5 hover:border-white/10 transition-all relative overflow-hidden group/card"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 relative z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <StatusBadge status={exp.status} />
                      </div>
                      <p className="text-sm text-accent font-mono uppercase tracking-widest font-bold">{exp.role}</p>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded border border-white/5">
                      {exp.period}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10">
                    <div className="lg:col-span-8">
                      <ul className="space-y-2">
                        {exp.impact.map((bullet, i) => (
                          <li key={i} className="text-sm text-zinc-500 leading-relaxed relative pl-4 border-l border-white/10 hover:border-accent/50 transition-colors">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-4 space-y-3">
                      <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em] border-b border-white/5 pb-1">Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-white/[0.02] border border-white/5 text-zinc-400 text-[9px] font-mono rounded group-hover/card:text-zinc-200 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
