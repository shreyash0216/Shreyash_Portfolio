"use client";

import { GraduationCap, MapPin, Terminal, Server, Layout, Brain, CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    icon: <Server size={18} className="text-blue-400" />,
    title: "Backend & Systems",
    desc: "Designing modular RESTful APIs, relational schema models, JWT/bcrypt authentication with strict RBAC, and event-driven services with Node.js and NestJS."
  },
  {
    icon: <Layout size={18} className="text-emerald-400" />,
    title: "Full-Stack SaaS",
    desc: "Shipping end-to-end multi-tenant web applications with React, Next.js, TypeScript, PostgreSQL, and Socket.IO for real-time synchronization."
  },
  {
    icon: <Brain size={18} className="text-purple-400" />,
    title: "Applied AI & Vision",
    desc: "Integrating computer vision models (YOLO, OpenCV, TensorFlow) and LLM pipelines (Gemini API) into functional, latency-aware client applications."
  }
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Terminal size={18} className="text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">About &bull; Background</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Profile &amp; Philosophy
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Core Narrative */}
        <div className="lg:col-span-7 space-y-4">
          <div className="editorial-card p-6 sm:p-7 space-y-4">
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              I am a final-year Computer Science student (<span className="text-white font-semibold">8.68 CGPA</span>) 
              at Sir Parashurambhau College, Pune, focused on engineering reliable backend architectures and full-stack software.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              My hands-on experience spans building production software from scratch to deployment: architecting multi-tenant 
              APIs, securing authentication and role-based permissions, modeling relational PostgreSQL schemas, and configuring 
              Linux droplet environments on DigitalOcean with Render fallbacks.
            </p>
            <div className="pt-2">
              <blockquote className="border-l-2 border-blue-500 pl-3.5 py-1 text-zinc-300 font-mono text-xs italic">
                &ldquo;Build it clearly, understand it deeply, and optimize it when it matters.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PILLARS.map((pillar, i) => (
              <div key={i} className="editorial-card p-4 space-y-2">
                <div className="flex items-center gap-2">
                  {pillar.icon}
                  <h3 className="text-xs font-semibold text-zinc-200 tracking-tight">{pillar.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials & Location Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="editorial-card p-6 space-y-5">
            {/* Education Block */}
            <div className="space-y-3 pb-5 border-b border-white/[0.06]">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-blue-400 shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Education</span>
                  <h4 className="text-sm font-semibold text-zinc-100">Sir Parashurambhau College, Pune</h4>
                  <p className="text-xs text-zinc-400">B.Sc. in Computer Science (2024 &ndash; 2027)</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-1 pl-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Cumulative GPA</span>
                  <span className="text-blue-400 font-semibold">8.68 / 10.0</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "86.8%" }} />
                </div>
              </div>
            </div>

            {/* Practical Experience Summary */}
            <div className="space-y-2.5 pb-4 border-b border-white/[0.06]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Experience Highlights</span>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Syantrex Technologies</strong>: Co-Founder &amp; Full Stack Engineer building Syantrex ERP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                  <span><strong>Moash</strong>: Web &amp; Software Development Intern on Menuara SaaS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-purple-400 mt-0.5 shrink-0" />
                  <span><strong>Careasa Healthcare</strong>: App Development Intern building 15+ production REST APIs.</span>
                </li>
              </ul>
            </div>

            {/* Location & Relocation */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-emerald-400 shrink-0">
                <MapPin size={20} />
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Location &bull; Availability</span>
                <p className="text-xs font-medium text-zinc-200">Pune, Maharashtra, India</p>
                <p className="text-[11px] text-emerald-400/90 font-mono">Available for In-Office / Hybrid / Remote</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
