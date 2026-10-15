"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Syantrex ERP",
    company: "Syantrex (Pre-Registration)",
    role: "Independent Project Lead — Full-Stack Development",
    desc: "Production multi-tenant business management platform built around real-world retail workflows. Features solo-engineered Node.js/Express backend, PostgreSQL database, React frontend, JWT/bcrypt auth with RBAC, Socket.IO real-time updates, PDF billing, and DigitalOcean/Render deployments.",
    stack: ["NestJS", "Node.js", "Express", "PostgreSQL", "React", "Socket.IO", "DigitalOcean", "Render.com", "Postman", "RBAC"],
    status: "Jun 2026 – Present",
    accent: "#9333ea",
    url: "https://www.syantrex.online"
  }
];

const CurrentlyBuilding = () => {
  return (
    <section className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl font-bold">Currently Building</h2>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-6 glass-card border-white/5 overflow-hidden"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ background: project.accent }}
            />

            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  {project.company.includes('Syantrex') && (
                    <img src={getAssetPath("syantrex-logo.png")} alt="Syantrex Technologies Logo" className="w-5 h-5 rounded-sm object-cover bg-white p-0.5" />
                  )}
                  <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest">{project.company}</span>
                </div>
                <h3 className="text-3xl font-bold mt-1">{project.title}</h3>
              </div>
              <div className="px-3 py-1 rounded-full border border-white/10 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                {project.status}
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map(s => (
                <span key={s} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-zinc-400">{s}</span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <span className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                 <Terminal size={14} className="text-accent" /> {project.role}
              </span>
              <div className="ml-auto flex gap-4">
                 <a
                   href={project.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-zinc-500 hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-mono"
                 >
                   <span>Live Preview</span>
                   <ExternalLink size={14} />
                 </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
