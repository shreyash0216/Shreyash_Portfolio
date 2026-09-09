"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Layers, Briefcase, Zap, Terminal } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Syantrex ERP",
    style: "Multi-Tenant SaaS",
    desc: "Production retail business management platform built around real-world retail workflows. Shipped solo with Node.js/Express backend, PostgreSQL database, React frontend, JWT/bcrypt auth with RBAC, Socket.IO real-time sync, and PDF billing deployed to DigitalOcean & Render.",
    problem: "Electronics retailers face IMEI tracking gaps, inventory desynchronization, and multi-tenant access control risks during high-throughput checkouts.",
    role: "Independent Project Lead — Full-Stack Development",
    arch: "Multi-Tenant Event-Driven Architecture (NestJS/Express + PostgreSQL + Socket.IO + React)",
    tech: ["NestJS", "Node.js", "Express.js", "PostgreSQL", "React", "Socket.IO", "DigitalOcean", "Render.com"],
    links: { demo: "https://www.syantrex.online" },
    accent: "#9333ea",
    logo: "syantrex-logo-dark.png"
  },
  {
    title: "DermaScanAI",
    style: "AI Healthcare (2nd Prize)",
    desc: "AI-powered skin disease detection project combining computer vision with practical healthcare workflows, image-based condition classification, triage guidance, and clinic discovery using OpenStreetMap APIs.",
    problem: "Early detection of dermatological conditions is hindered by scarce clinical specialists and lack of automated location-aware triage.",
    role: "Backend & System Contributor (SP College 2nd Prize Winner)",
    arch: "Multi-Tier Inference & Spatial Mapping Engine (FastAPI + TensorFlow + Next.js + OSM APIs)",
    tech: ["Next.js", "FastAPI", "TensorFlow", "OpenStreetMap APIs", "Python", "REST APIs"],
    links: { github: "https://github.com/siddheshwar09/DermaScanAI" },
    accent: "#10b981",
    logo: "dermascan-logo-dark.png"
  },
  {
    title: "GRA — Resilience Agent",
    style: "GenAI & Climate (IIT Bombay Techfest)",
    desc: "Full React rewrite of an ML-powered frontend (10 crop varieties) preserving the existing prediction engine and Gemini API integration within a fixed hackathon timeline (Team COSMOS, AWS ImpactX Challenge).",
    problem: "Reliable climate risk data and crop recommendations fail under low-connectivity or high-latency environments without resilient client fallback.",
    role: "Frontend Lead (Team COSMOS)",
    arch: "Fault-Tolerant Generative AI Client Architecture (React + Vite + Gemini API)",
    tech: ["React", "Vite", "TypeScript", "Gemini API", "Tailwind CSS", "AWS"],
    links: { demo: "https://www.genresai.me/", github: "https://github.com/shreyash0216/Gra-2" },
    accent: "#22c55e",
    logo: "gra-logo.png"
  },
  {
    title: "Careasa Healthcare Platform",
    style: "Production REST APIs",
    desc: "Built 15+ production REST APIs with Node.js/Express and JWT authentication, achieving 99%+ cross-platform data reliability across web and mobile clients, with end-to-end PostgreSQL/Sequelize integration.",
    problem: "Healthcare providers require strictly authenticated patient workflows, zero-drift cross-platform synchronization, and resilient production database configs.",
    role: "App Development Intern",
    arch: "Relational REST Architecture (Node.js + Express + Sequelize + PostgreSQL)",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT Auth", "Postman"],
    links: { demo: "https://www.careasa.com" },
    accent: "#3b82f6",
    logo: "careasa-logo.png"
  },
  {
    title: "OCR Assistant & CV Pipeline",
    style: "Computer Vision",
    desc: "Real-time object detection and OCR pipeline utilizing YOLOv3 and Tesseract for continuous video stream processing, text extraction, and automated classification.",
    problem: "Manual data entry and classification from physical documents or video streams in dynamic environments is slow and error-prone.",
    role: "Lead Developer",
    arch: "Real-Time Video Stream Inference Pipeline",
    tech: ["Python", "YOLOv3", "Tesseract", "OpenCV", "NumPy"],
    links: { github: "https://github.com/shreyash0216/Object-Detection" },
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
            <div className="w-full lg:w-3/5 aspect-video glass-card overflow-hidden relative group border border-white/10">
              {/* Top Window Bar */}
              <div className="absolute top-0 left-0 right-0 h-9 px-4 border-b border-white/5 bg-black/50 backdrop-blur-md flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="tracking-wider">{project.links.demo ? project.links.demo.replace('https://', '').replace('www.', '') : 'architecture-preview'}</span>
                </div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-zinc-600">v2.4</div>
              </div>

              {/* Ambient Glow */}
              <div
                className="absolute inset-0 opacity-25 transition-opacity group-hover:opacity-40"
                style={{
                  background: `radial-gradient(circle at 50% 55%, ${project.accent}35, transparent 70%)`,
                }}
              />

              <div className="absolute inset-0 pt-9 flex items-center justify-center p-6 md:p-10">
                {project.logo ? (
                  <div className="relative group/logo flex flex-col items-center gap-4">
                    <div
                      className="absolute -inset-10 rounded-full blur-3xl opacity-30 group-hover/logo:opacity-50 transition-opacity duration-500"
                      style={{ background: project.accent }}
                    />

                    {/* Sleek Dark Frosted Tile with zero harsh white background */}
                    <div className="relative z-10 px-8 py-6 md:px-12 md:py-8 bg-zinc-950/60 hover:bg-zinc-900/60 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 backdrop-blur-2xl flex items-center justify-center transform group-hover/logo:scale-105 transition-all duration-500">
                      <img
                        src={getAssetPath(project.logo)}
                        alt={`${project.title} project logo`}
                        className="w-28 sm:w-36 md:w-44 h-auto max-h-16 md:max-h-20 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
                      />
                    </div>

                    <div className="relative z-10 flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full backdrop-blur-md text-[10px] font-mono text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accent }} />
                      <span className="tracking-wide font-medium text-zinc-300">{project.title}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full font-mono text-[11px] text-zinc-400 p-6 flex flex-col justify-center items-center gap-3 border border-white/5 rounded-2xl bg-black/40">
                    <div className="text-red-400 font-bold text-lg md:text-xl flex items-center gap-2">
                      <Terminal size={18} /> OCR Assistant &amp; CV Pipeline
                    </div>
                    <div className="text-xs text-zinc-500 max-w-sm text-center font-mono">
                      [YOLOv3 Inference Engine] • [Tesseract OCR Extraction] • [OpenCV Video Pipeline]
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded text-[9px]">REAL-TIME 60FPS</span>
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-zinc-300 rounded text-[9px]">BOUNDING BOX ACCURACY</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex gap-3 z-30">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-black/80 backdrop-blur-md border border-white/15 rounded-xl hover:scale-110 transition-transform text-zinc-300 hover:text-white"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-black/80 backdrop-blur-md border border-white/15 rounded-xl hover:scale-110 transition-transform text-accent"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
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
                  <div className="p-2 bg-white/5 rounded-lg shrink-0 mt-1"><Terminal size={14} className="text-accent" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-1">Role</h4>
                    <p className="text-sm text-zinc-300 font-medium">{project.role}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0 mt-1"><Zap size={14} className="text-accent" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-1">Problem</h4>
                    <p className="text-sm text-zinc-400">{project.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0 mt-1"><Layers size={14} className="text-accent" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-1">Architecture</h4>
                    <p className="text-sm text-zinc-400">{project.arch}</p>
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
