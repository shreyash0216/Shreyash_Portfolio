"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu, Briefcase } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  status: string;
  impact: string[];
  tech: string[];
  logo?: string;
  icon?: React.ReactNode;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Syantrex Technologies",
    role: "Founder & Lead Engineer",
    period: "Jun 2026 - Present",
    status: "founder",
    impact: [
      "Architected a multi-tenant SaaS ERP (NestJS, PostgreSQL, React, WebSockets) with Role-Based Access Control, serving live retail clients.",
      "Engineered an offline-first Mobile Shop Management app in Flutter featuring real-time inventory tracking and client-side PDF invoice generation.",
      "Managed cloud deployments, database schema migrations, and CI/CD pipelines for production Android builds.",
    ],
    tech: ["NestJS", "PostgreSQL", "React", "WebSockets", "Flutter", "Docker"],
    logo: "syantrex-logo.png"
  },
  {
    company: "IBM SkillsBuild × AICTE",
    role: "AI Automation Intern",
    period: "Jun 2026 - Jul 2026",
    status: "completed",
    impact: [
      "Completed a 6-week intensive engineering program on AI automation pipelines, intelligent system integration, and workflow orchestration.",
      "Earned certification with Credential ID: BHIBMAC01877 through Bharat Cares partnership.",
    ],
    tech: ["AI/ML", "Automation", "System Integration", "Workflow Orchestration"],
    icon: <Cpu size={24} className="text-blue-400" />
  },
  {
    company: "Careasa Healthcare",
    role: "App Development Intern",
    period: "Dec 2025 - Jun 2026",
    status: "completed",
    impact: [
      "Built 15+ production REST APIs using Node.js/Express.js with JWT authentication and structured validation layers.",
      "Synchronized AWS RDS models and S3 storage, achieving 99%+ cross-platform data reliability across web/mobile.",
      "Integrated Agora SDK for low-latency real-time video communication and managed 15+ APK/IPA release cycles.",
    ],
    tech: ["Node.js", "Express.js", "JWT", "AWS S3/RDS", "Agora SDK", "Flutter"],
    logo: "careasa-logo.png"
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
    <div className={`px-2 py-0.5 rounded-full border text-[8px] md:text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5 ${config.color}`}>
      <span className="text-[7px]">{config.icon}</span>
      {config.label}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative px-2 md:px-0">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/5 to-transparent hidden sm:block" />

        <div className="space-y-8 md:space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-12 relative group"
            >
              {/* Timeline Node */}
              <div className="flex flex-row sm:flex-col items-center shrink-0 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center shadow-2xl transition-all group-hover:border-accent/50 group-hover:shadow-accent/20 overflow-hidden"
                >
                  <div className="transition-transform group-hover:rotate-2 w-full h-full flex items-center justify-center">
                    {exp.logo ? (
                      <img src={getAssetPath(exp.logo)} alt={`${exp.company} Logo - Software Engineering Internship`} className="w-full h-full object-cover" />
                    ) : (
                      exp.icon
                    )}
                  </div>
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />

                {/* Mobile specific horizontal line or marker */}
                <div className="flex-1 h-px bg-white/5 mx-4 sm:hidden" />
              </div>

              {/* Experience Card */}
              <div className="flex-1 pb-2">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="glass-card p-5 md:p-6 border-white/5 hover:border-white/10 transition-all relative overflow-hidden group/card"
                >
                  <div className="flex flex-col gap-4 mb-6 relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg md:text-xl font-bold text-white">{exp.company}</h3>
                          <StatusBadge status={exp.status} />
                        </div>
                        <p className="text-xs md:text-sm text-accent font-mono uppercase tracking-widest font-bold">{exp.role}</p>
                      </div>
                      <span className="text-[9px] md:text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded border border-white/5">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
                    <div className="lg:col-span-8">
                      <ul className="space-y-3">
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
