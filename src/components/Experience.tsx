"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
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
    company: "Syantrex (Pre-Registration)",
    role: "Independent Project Lead — Full-Stack Development",
    period: "Jun 2026 – Present",
    status: "current",
    impact: [
      "Built and shipped a production retail SaaS application solo — Node.js/Express backend, PostgreSQL database, React-based frontend, JWT auth with bcrypt hashing, and role-based access control (RBAC).",
      "Set up the project from scratch and deployed it to a DigitalOcean production droplet, with Render.com as a staging/fallback environment.",
      "Ran the full pre-launch QA pass myself — used Postman to test API endpoints end-to-end and caught 5 release-blocking issues (release build signing, image memory/OOM handling, hashing consistency) before go-live.",
      "Currently architecting a multi-tenant SaaS admin panel on NestJS, PostgreSQL, React, JWT/bcrypt, RBAC, and Socket.IO as a parallel workstream.",
    ],
    tech: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "React", "Socket.IO", "DigitalOcean", "Render.com", "Postman", "RBAC", "JWT/bcrypt"],
    logo: "syantrex-logo.png"
  },
  {
    company: "Moash, Pune (Hybrid)",
    role: "Web & Software Development Intern",
    period: "Jun 2026 – Aug 2026",
    status: "completed",
    impact: [
      "Reporting directly to Founder & CEO, worked within a multi-tenant SaaS product built on Next.js, TypeScript, and Supabase.",
      "Audited all 96 product features against technical specification and compiled comprehensive findings that informed core engineering priorities.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Multi-Tenant SaaS", "Feature Auditing"],
    icon: <Briefcase size={24} className="text-cyan-400" />
  },
  {
    company: "Careasa Healthcare",
    role: "App Development Intern",
    period: "Dec 2025 – Jun 2026",
    status: "completed",
    impact: [
      "Built 15+ production REST APIs using Node.js/Express with JWT authentication, achieving 99%+ cross-platform data reliability across web and mobile clients.",
      "Debugged production config issues end-to-end, including a Node.js/Sequelize/PostgreSQL connection failure traced to missing environment variables.",
      "Contributed to backend development and API endpoints across multiple application releases, working with existing architecture and database layers.",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT Auth", "REST APIs"],
    logo: "careasa-logo.png"
  },
  {
    company: "IBM SkillsBuild × AICTE (Bharat Cares)",
    role: "AI Automation Intern",
    period: "Jun 2026 – Jul 2026",
    status: "completed",
    impact: [
      "Completed a 6-week intensive structured program on automation pipelines and workflow orchestration.",
      "Earned verified certification with Credential ID: BHIBMAC01877 covering enterprise AI automation workflows.",
    ],
    tech: ["Automation Pipelines", "Workflow Orchestration", "AI Integration", "System Architecture"],
    logo: "IBM_LOGO.png"
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const configs: Record<string, { label: string; color: string; icon: string }> = {
    current: { label: "Current Lead", color: "text-purple-400 bg-purple-500/10 border-purple-500/20", icon: "🟣" },
    founder: { label: "Founder", color: "text-purple-500 bg-purple-500/10 border-purple-500/20", icon: "🟣" },
    completed: { label: "Completed", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", icon: "🟢" },
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
                      <img
                        src={getAssetPath(exp.logo)}
                        alt={`${exp.company} Logo - Software Engineering Internship`}
                        className={`w-full h-full ${
                          exp.logo === 'IBM_LOGO.png'
                            ? 'object-contain p-2 bg-white'
                            : 'object-cover'
                        }`}
                      />
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
