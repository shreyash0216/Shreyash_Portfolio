"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Layers, Briefcase, Zap, Terminal } from "lucide-react";

const PROJECTS = [
  {
    title: "Menuara",
    style: "saas",
    desc: "A multi-tenant restaurant management ecosystem. Built with Next.js 14 and Supabase, it handles complex orders, QR menus, and real-time kitchen displays.",
    problem: "Restaurant owners struggle with disconnected systems for menus, billing, and inventory.",
    role: "Founder & Lead Developer",
    arch: "Multi-tenant SaaS",
    tech: ["Next.js", "Supabase", "TypeScript", "Vercel"],
    links: { github: "#", demo: "https://www.syantrex.online" },
    accent: "#0070f3"
  },
  {
    title: "Syantrex ERP",
    style: "enterprise",
    desc: "A high-density super admin control panel for managing ERP clients, subscriptions, and global system health.",
    problem: "Managing multiple ERP clients manually is error-prone and non-scalable.",
    role: "Architect & Developer",
    arch: "Admin Ecosystem",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Node.js"],
    links: { github: "#", demo: "#" },
    accent: "#9333ea"
  },
  {
    title: "DermaScanAI",
    style: "healthcare",
    desc: "CV-based dermatological condition classifier. Architected the backend for secure image upload pipelines and healthcare data workflows.",
    problem: "Early detection of skin conditions is often inaccessible or delayed.",
    role: "Backend Lead",
    arch: "Inference Engine",
    tech: ["Python", "TensorFlow", "Node.js", "Express"],
    links: { github: "https://github.com/shreyash0216", demo: "#" },
    accent: "#10b981"
  },
  {
    title: "GRA – Resilience Agent",
    style: "architecture",
    desc: "AI climate adaptation platform with Gemini API + offline ML fallback. Built for AWS ImpactX Challenge.",
    problem: "Reliable climate risk data often fails in low-connectivity areas.",
    role: "Lead Developer",
    arch: "Fault-Tolerant AI",
    tech: ["TypeScript", "Gemini API", "AWS", "ML"],
    links: { github: "https://github.com/shreyash0216/Gra-2", demo: "#" },
    accent: "#f59e0b"
  },
  {
    title: "OCR Assistant",
    style: "terminal",
    desc: "Real-time object detection and OCR pipeline utilizing YOLOv3 and Tesseract for video stream processing.",
    problem: "Manual data entry from physical documents/labels in dynamic environments.",
    role: "Lead Developer",
    arch: "CV Pipeline",
    tech: ["Python", "YOLOv3", "Tesseract", "OpenCV"],
    links: { github: "https://github.com/shreyash0216/Object-Detection", demo: "#" },
    accent: "#ef4444"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight text-mask">Selected Works</h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mt-4">/ Case Studies & Architecture</p>
        </div>
      </div>

      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
          >
            {/* Visual Representation */}
            <div className="w-full lg:w-3/5 aspect-video glass-card overflow-hidden relative group">
               {/* Unique Background based on style */}
               <div
                className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${project.accent}20, transparent)`,
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                {project.style === 'terminal' ? (
                   <div className="w-full h-full font-mono text-[10px] text-red-500/60 overflow-hidden leading-tight p-4 border border-red-500/20 rounded">
                      {`[SYSTEM_LOG]: Initializing YOLOv3...\n[SCANNER]: Detecting Objects...\n[OCR]: Reading Text Stream...\n>> DATA DETECTED: 0xF29\n>> PROCESSING...`}
                   </div>
                ) : project.style === 'saas' ? (
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="h-32 rounded-xl bg-blue-500/10 border border-blue-500/20" />
                    <div className="h-32 rounded-xl bg-blue-500/20 border border-blue-500/30" />
                    <div className="h-32 rounded-xl bg-blue-500/10 border border-blue-500/20" />
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/10 animate-spin-slow" />
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="w-16 h-16 rounded-lg border border-white/10" />
                  </div>
                )}
              </div>

              <div className="absolute bottom-8 left-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={project.links.github} className="p-3 bg-black border border-white/10 rounded-xl hover:scale-110 transition-transform"><Github size={18} /></a>
                <a href={project.links.demo} className="p-3 bg-black border border-white/10 rounded-xl hover:scale-110 transition-transform text-accent"><ExternalLink size={18} /></a>
              </div>
            </div>

            {/* Info */}
            <div className="w-full lg:w-2/5 space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest" style={{ color: project.accent }}>
                  {project.style}
                </span>
                <h3 className="text-4xl font-bold">{project.title}</h3>
              </div>

              <p className="text-zinc-400 text-lg leading-relaxed">
                {project.desc}
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0 mt-1"><Zap size={14} className="text-accent" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-1">Problem</h4>
                    <p className="text-sm text-zinc-500">{project.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0 mt-1"><Layers size={14} className="text-accent" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-1">Architecture</h4>
                    <p className="text-sm text-zinc-500">{project.arch}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-zinc-900/50 border border-white/5 text-zinc-600 text-[10px] font-mono rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
