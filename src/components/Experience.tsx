"use client";

import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

interface ExperienceItem {
  company: string;
  role: string;
  category: "Entrepreneurial" | "Internship" | "Specialization";
  period: string;
  location: string;
  status: "active" | "completed";
  badge: string;
  shortDesc: string;
  responsibilities: string[];
  tech: string[];
  logo?: string;
  companyUrl?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Syantrex Technologies",
    role: "Co-Founder & Full Stack Engineer",
    category: "Entrepreneurial",
    period: "Jun 2026 – Present",
    location: "Pune, India",
    status: "active",
    badge: "Entrepreneurial &bull; Active",
    companyUrl: "https://www.syantrex.online",
    shortDesc: "Building software products and Syantrex ERP for retail shop management, inventory, sales workflows, APIs, and automated billing.",
    responsibilities: [
      "Software Architecture: Architected full-stack retail management systems with a modular Node.js/Express and NestJS backend, PostgreSQL database, React frontend, and Socket.IO real-time event sync.",
      "Security & Data Isolation: Implemented stateless JWT authentication with bcrypt hashing, tenant data partitioning, and strict Role-Based Access Control (RBAC).",
      "Infrastructure & DevOps: Provisioned and configured a production droplet on DigitalOcean with Render.com as an automated staging/fallback environment.",
      "Quality Assurance: Executed comprehensive end-to-end API testing suites in Postman to catch and fix 5 release-blocking issues across build signing, memory allocation, and hashing consistency prior to deployment."
    ],
    tech: ["NestJS", "Node.js", "Express.js", "PostgreSQL", "React", "Socket.IO", "DigitalOcean", "Render", "RBAC", "Postman"],
    logo: "syantrex-logo.png"
  },
  {
    company: "Moash",
    role: "Web & Software Development Intern",
    category: "Internship",
    period: "Jun 2026 – Aug 2026",
    location: "Pune, India (Hybrid)",
    status: "completed",
    badge: "Menuara SaaS &bull; Completed",
    shortDesc: "Contributed to Menuara, a multi-tenant SaaS application built on Next.js, TypeScript, and Supabase.",
    responsibilities: [
      "Specification Auditing: Audited 96 product features against technical engineering specifications, compiling structured findings that directly informed core engineering sprint priorities.",
      "Frontend Development: Engineered responsive web interfaces, form state workflows, and UI components adhering to design systems and data isolation standards.",
      "Confidentiality & Compliance: Operated strictly within approved technical scope without exposing proprietary algorithms, confidential client data, or internal source code."
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Multi-Tenant SaaS", "Feature Auditing"]
  },
  {
    company: "Careasa Healthcare",
    role: "App Development Intern",
    category: "Internship",
    period: "Dec 2025 – Jun 2026",
    location: "Pune, India",
    status: "completed",
    badge: "Healthcare Platform &bull; Completed",
    companyUrl: "https://www.careasa.com",
    shortDesc: "Application development and backend API engineering for healthcare operations, patient appointments, and clinical workflows.",
    responsibilities: [
      "REST API Engineering: Built and documented 15+ production REST APIs using Node.js/Express with JWT authentication for authenticated clinical and patient workflows.",
      "Data Reliability: Maintained 99%+ cross-platform data reliability across web and Flutter mobile clients using PostgreSQL and Sequelize ORM.",
      "Audio/Video & Integration: Integrated real-time communication workflows using Agora SDK and resolved production database connection bugs by tracing configuration propagation across environments."
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT Auth", "REST APIs", "Flutter", "Agora SDK", "Postman"],
    logo: "careasa-logo.png"
  },
  {
    company: "IBM SkillsBuild × AICTE (Bharat Cares)",
    role: "AI Automation Intern",
    category: "Specialization",
    period: "Jun 2026 – Jul 2026",
    location: "Remote",
    status: "completed",
    badge: "Credential ID: BHIBMAC01877",
    shortDesc: "Intensive 6-week technical curriculum on enterprise automation pipelines, workflow orchestration, and system integration.",
    responsibilities: [
      "Workflow Orchestration: Mastered enterprise automation pipelines, process orchestration, and intelligent system integration.",
      "Verified Certification: Earned verified certification with Credential ID: BHIBMAC01877 demonstrating proficiency in automated workflows and data integration."
    ],
    tech: ["Automation Pipelines", "Workflow Orchestration", "AI Integration", "System Architecture"],
    logo: "IBM_LOGO.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-8 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Briefcase size={18} className="text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Experience</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Professional Timeline &bull; Reverse Chronological
        </span>
      </div>

      <div className="relative">
        {/* Continuous Timeline Spine */}
        <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-white/[0.08] hidden sm:block" />

        <div className="space-y-6 sm:space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
              
              {/* Timeline Icon / Node */}
              <div className="hidden sm:flex items-start justify-center shrink-0 z-10 pt-1 w-12">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center overflow-hidden p-2 shadow-lg group-hover:border-blue-500/40 transition-colors">
                  {exp.logo ? (
                    <img
                      src={getAssetPath(exp.logo)}
                      alt={`${exp.company} logo`}
                      className={`w-full h-full ${
                        exp.logo === "IBM_LOGO.png"
                          ? "object-contain bg-white p-1 rounded"
                          : "object-contain"
                      }`}
                    />
                  ) : (
                    <span className="font-mono text-xs font-bold text-blue-400">
                      {exp.company.substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
              </div>

              {/* Experience Card */}
              <div className="flex-1 w-full editorial-card p-5 sm:p-6 space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                          exp.category === "Entrepreneurial"
                            ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            : exp.status === "active"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                        }`}
                      >
                        {exp.category}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-blue-400 font-medium mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-zinc-500" />
                      {exp.period}
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">&bull;</span>
                    <span className="hidden sm:flex items-center gap-1">
                      <MapPin size={12} className="text-zinc-500" />
                      {exp.location}
                    </span>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 ml-1 inline-flex items-center gap-0.5 focus-ring rounded"
                        aria-label={`Visit ${exp.company} website`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {exp.shortDesc}
                </p>

                {/* Actual Responsibilities */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                    Key Responsibilities &bull; Outcomes:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {exp.responsibilities.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-blue-500 shrink-0 mt-1 font-mono text-xs">&rsaquo;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-2 border-t border-white/[0.05] flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mr-1">
                    Tech:
                  </span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-white/[0.02] border border-white/[0.06] rounded text-[10px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
