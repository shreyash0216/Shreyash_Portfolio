"use client";

import { ExternalLink, Terminal, Layers, ShieldCheck, Activity } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const INITIATIVES = [
  {
    title: "Syantrex ERP",
    organization: "Syantrex Technologies",
    role: "Co-Founder & Full Stack Engineer",
    timeline: "Jun 2026 – Present",
    statusBadge: "Active Development",
    statusColor: "emerald",
    desc: "Production multi-tenant retail shop management and business operations platform built around real-world retail workflows. Architected for retail shop management, inventory tracking, sales workflows, APIs, and product development with a Node.js/Express and NestJS backend, PostgreSQL database, React frontend, stateless JWT auth with bcrypt and RBAC, Socket.IO real-time synchronization, and automated billing.",
    confidentialityNote: "Production software deployed to DigitalOcean with Render.com staging fallback; verified end-to-end with Postman.",
    stack: ["NestJS", "Node.js", "Express.js", "PostgreSQL", "React", "Socket.IO", "DigitalOcean", "Render", "RBAC"],
    url: "https://www.syantrex.online",
    logo: "syantrex-logo.png"
  },
  {
    title: "Menuara",
    organization: "Moash (Pune)",
    role: "Web & Software Development Intern",
    timeline: "Jun 2026 – Aug 2026",
    statusBadge: "Completed Internship",
    statusColor: "blue",
    desc: "Contributed to Menuara, a multi-tenant SaaS platform built on Next.js, TypeScript, and Supabase. Audited 96 product features against technical engineering specifications to compile structured gap analyses that guided core engineering iterations.",
    confidentialityNote: "Work described strictly using publicly approved scope. Proprietary algorithms, confidential features, and internal client data are strictly withheld.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Multi-Tenant SaaS", "Specification Auditing"],
    url: null,
    logo: null
  }
];

const CurrentlyBuilding = () => {
  return (
    <section id="building" className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Activity size={18} className="text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Current &amp; Recent Initiatives</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Syantrex ERP vs. Menuara (Moash)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {INITIATIVES.map((item, idx) => (
          <div
            key={idx}
            className="editorial-card p-6 sm:p-7 flex flex-col justify-between relative group"
          >
            <div>
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    {item.logo ? (
                      <img
                        src={getAssetPath(item.logo)}
                        alt={`${item.organization} logo`}
                        className="w-5 h-5 rounded object-contain bg-white/10 p-0.5 border border-white/10"
                      />
                    ) : (
                      <span className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[10px] font-mono text-blue-300">
                        M
                      </span>
                    )}
                    <span className="font-mono text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                      {item.organization}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                      item.statusColor === "emerald"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}
                  >
                    {item.statusBadge}
                  </span>
                  <div className="text-[10px] font-mono text-zinc-500 mt-1">{item.timeline}</div>
                </div>
              </div>

              {/* Role Title */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-medium pb-3 mb-3 border-b border-white/[0.06]">
                <Terminal size={13} className="text-blue-400" />
                <span>{item.role}</span>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Confidentiality / Scope Disclosure */}
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[11px] text-zinc-400 font-mono mb-5">
                <ShieldCheck size={14} className="text-zinc-500 shrink-0 mt-0.5" />
                <span>{item.confidentialityNote}</span>
              </div>
            </div>

            <div>
              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06] mb-4">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-white/[0.03] border border-white/[0.06] rounded text-[10px] font-mono text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer action */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                  <Layers size={12} className="text-zinc-500" />
                  {item.title === "Syantrex ERP" ? "Retail SaaS Platform" : "Restaurant SaaS Platform"}
                </span>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors focus-ring rounded"
                  >
                    <span>syantrex.online</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
