"use client";

import { Github, ExternalLink, Code2, Layers, ShieldCheck, CheckCircle2, Trophy, Terminal, Award } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  problem: string;
  contribution: string;
  decisions: string[];
  architecture: string;
  results: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
  logo?: string;
  featuredBadge?: {
    text: string;
    icon: "trophy" | "production" | "award";
  };
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "syantrex-erp",
    title: "Syantrex ERP",
    tagline: "Production Multi-Tenant Business & Retail Management Platform",
    category: "Full-Stack & Cloud Architecture",
    role: "Co-Founder & Full Stack Engineer — Syantrex Technologies",
    problem: "Retail electronics businesses suffer from fragmented IMEI/serial inventory tracking, multi-tenant permission vulnerabilities, and lack of real-time inventory synchronization during checkout operations.",
    contribution: "Architected and engineered the entire application end-to-end: designed modular backend microservices, modeled normalized relational schemas, built responsive web clients, and managed production cloud deployments.",
    decisions: [
      "Modular NestJS & Express architecture with strict tenant schema isolation and stateless session management.",
      "Stateless JWT authentication with bcrypt password hashing and fine-grained Role-Based Access Control (RBAC).",
      "Socket.IO event bus for live multi-terminal inventory deduction and real-time checkout updates.",
      "Production deployment on a DigitalOcean droplet with Render.com automated staging fallback and Postman test validation."
    ],
    architecture: "Multi-Tenant Event-Driven Architecture (NestJS/Express + PostgreSQL + React + Socket.IO + DigitalOcean)",
    results: "Live in production at syantrex.online; 5 release-blocking issues preemptively resolved via end-to-end Postman QA suites before public release.",
    stack: ["NestJS", "Node.js", "Express.js", "PostgreSQL", "React", "Socket.IO", "DigitalOcean", "Render", "RBAC", "Postman"],
    links: {
      demo: "https://www.syantrex.online"
    },
    logo: "syantrex-logo-dark.png",
    featuredBadge: {
      text: "Production Deployment",
      icon: "production"
    }
  },
  {
    id: "dermascan-ai",
    title: "DermaScanAI",
    tagline: "AI-Powered Dermatological Condition Detection & Triage Engine",
    category: "Healthcare AI & Spatial Computing",
    role: "Backend & ML System Contributor",
    problem: "Early detection of dermatological conditions is delayed by limited specialist dermatologist availability, and general patients lack immediate, location-aware triage guidance to find appropriate nearby clinics.",
    contribution: "Built the backend inference pipeline, integrated the deep learning model for skin lesion classification, and engineered geolocation-based clinic discovery using OpenStreetMap Overpass APIs.",
    decisions: [
      "Engineered FastAPI backend for asynchronous, low-latency image preprocessing and TensorFlow model inference.",
      "Integrated OpenStreetMap Overpass API to query nearby certified dermatology clinics based on user coordinates without proprietary vendor lock-in.",
      "Implemented structured validation for uploaded clinical photographs with fallback triage suggestions for ambiguous confidence scores."
    ],
    architecture: "Multi-Tier Computer Vision & Spatial Mapping Pipeline (FastAPI + TensorFlow + Next.js + OpenStreetMap)",
    results: "Awarded 2nd Prize Winner at Sir Parashurambhau College Science Exhibition 2026 competing against 10+ engineering teams.",
    stack: ["FastAPI", "TensorFlow", "Next.js", "Python", "OpenStreetMap API", "Tailwind CSS", "REST APIs"],
    links: {
      github: "https://github.com/siddheshwar09/DermaScanAI"
    },
    logo: "dermascan-logo-dark.png",
    featuredBadge: {
      text: "2nd Prize Winner (SP College 2026)",
      icon: "trophy"
    }
  },
  {
    id: "gra-climate",
    title: "GRA — Generative Resilience Agent",
    tagline: "GenAI Climate Risk Modeling & Adaptive Agriculture Advisor",
    category: "GenAI & Resilient Systems",
    role: "Frontend Lead (Team COSMOS)",
    problem: "Agricultural producers in rural areas face catastrophic crop loss from climate shifts, but existing risk modeling tools are too slow, heavy, and unreliable under poor network connectivity.",
    contribution: "Led and completed a complete frontend rewrite in React/Vite within a constrained hackathon timeline while preserving ML prediction engine integration and Gemini API workflows.",
    decisions: [
      "Architected lightweight React SPA with client-side state caching to survive intermittent internet connectivity.",
      "Structured resilient Gemini API prompt chains with graceful client-side fallbacks for tailored advisory across 10 crop varieties.",
      "Enforced zero-dependency bundle hygiene to maintain sub-second first input delay (FID) on entry-level mobile devices."
    ],
    architecture: "Fault-Tolerant Generative AI Client (React + TypeScript + Vite + Gemini API + AWS)",
    results: "Selected national participant in the AWS ImpactX Challenge at IIT Bombay Techfest 2025.",
    stack: ["React", "TypeScript", "Vite", "Gemini API", "Tailwind CSS", "AWS"],
    links: {
      demo: "https://www.genresai.me/",
      github: "https://github.com/shreyash0216/Gra-2"
    },
    logo: "gra-logo.png",
    featuredBadge: {
      text: "IIT Bombay Techfest Participant",
      icon: "award"
    }
  }
];

const SECONDARY_PROJECTS = [
  {
    title: "Careasa Healthcare Platform APIs",
    role: "App Development Intern",
    category: "Enterprise Healthcare REST Backend",
    desc: "Engineered 15+ production REST APIs using Node.js/Express with JWT authentication and PostgreSQL/Sequelize ORM, achieving 99%+ cross-platform data reliability across web and mobile clients.",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT Auth", "Postman"],
    links: { demo: "https://www.careasa.com" },
    logo: "careasa-logo.png"
  },
  {
    title: "Computer Vision & OCR Stream Pipeline",
    role: "Lead Developer",
    category: "Real-Time Image Processing",
    desc: "Engineered an asynchronous video stream processing pipeline combining YOLOv3 bounding-box object detection with Tesseract OCR for automated real-time text extraction.",
    stack: ["Python", "YOLOv3", "Tesseract OCR", "OpenCV", "NumPy"],
    links: { github: "https://github.com/shreyash0216/Object-Detection" }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-8 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Code2 size={18} className="text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Featured Projects</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Case Studies &bull; Syantrex ERP &bull; DermaScanAI &bull; GRA
        </span>
      </div>

      {/* Featured Projects Deep Dive */}
      <div className="space-y-8 sm:space-y-10">
        {FEATURED_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="editorial-card p-6 sm:p-8 space-y-6 group"
          >
            {/* Top Bar: Title, Category, Badge & External Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-blue-400 font-semibold">
                    {project.category}
                  </span>
                  {project.featuredBadge && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {project.featuredBadge.icon === "trophy" && <Trophy size={11} className="text-amber-400" />}
                      {project.featuredBadge.icon === "award" && <Award size={11} className="text-amber-400" />}
                      {project.featuredBadge.icon === "production" && <ShieldCheck size={11} className="text-emerald-400" />}
                      <span>{project.featuredBadge.text}</span>
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                  {project.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-lg text-xs font-mono text-zinc-300 hover:text-white transition-colors focus-ring"
                  >
                    <Github size={14} />
                    <span>Source</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-mono text-white transition-colors focus-ring"
                  >
                    <span>Live Preview</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>

            {/* Structured Engineering Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Visual Preview / Architecture Header */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-950 p-4 sm:p-5 space-y-4">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                    </div>
                    <span>{project.id}.service.ts</span>
                  </div>

                  {/* Logo / Entity Emblem */}
                  <div className="py-6 flex flex-col items-center justify-center gap-3">
                    {project.logo ? (
                      <div className="p-4 bg-zinc-900/90 rounded-2xl border border-white/10 shadow-inner flex items-center justify-center">
                        <img
                          src={getAssetPath(project.logo)}
                          alt={`${project.title} logo`}
                          className="max-h-16 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-4 bg-zinc-900 rounded-2xl border border-white/10 text-zinc-400">
                        <Terminal size={36} />
                      </div>
                    )}
                    <div className="text-center">
                      <span className="text-xs font-mono text-zinc-300 font-medium">{project.title}</span>
                      <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{project.role}</p>
                    </div>
                  </div>

                  {/* Architecture Callout */}
                  <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-lg space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                      <Layers size={12} />
                      <span>Architecture Spec</span>
                    </div>
                    <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>
              </div>

              {/* Narrative & Engineering Decisions */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                
                {/* The Problem */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    The Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                {/* My Contribution */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                    My Contribution
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {project.contribution}
                  </p>
                </div>

                {/* Important Technical Decisions */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Important Technical Decisions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {project.decisions.map((decision, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Outcome */}
                <div className="pt-2">
                  <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-0.5">
                      Verified Outcome &bull; Benchmark
                    </span>
                    <p className="text-xs text-zinc-300 font-medium">
                      {project.results}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-white/[0.03] border border-white/[0.06] rounded text-[10px] font-mono text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Additional Engineering Work */}
      <div className="mt-8 pt-8 border-t border-white/[0.07]">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 font-semibold">
          Additional Production &amp; Systems Work
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SECONDARY_PROJECTS.map((sec, sIdx) => (
            <div key={sIdx} className="editorial-card p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 font-semibold">
                    {sec.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">{sec.role}</span>
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">{sec.title}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed mt-2">{sec.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3 pt-2">
                  {sec.stack.map(s => (
                    <span key={s} className="px-1.5 py-0.5 bg-white/[0.02] border border-white/[0.05] rounded text-[9px] font-mono text-zinc-400">
                      {s}
                    </span>
                  ))}
                </div>
                {sec.links.demo && (
                  <a
                    href={sec.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors focus-ring rounded"
                  >
                    <span>careasa.com</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {sec.links.github && (
                  <a
                    href={sec.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors focus-ring rounded"
                  >
                    <span>View Repository</span>
                    <Github size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
