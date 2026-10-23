"use client";

import { Server, Layout, Cloud, Brain, Code2, Database } from "lucide-react";

interface SkillCategory {
  title: string;
  focus: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; tag?: string }>;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    focus: "Type-Safe, Scripting & Systems",
    icon: <Code2 size={18} className="text-emerald-400" />,
    skills: [
      { name: "TypeScript", tag: "Primary" },
      { name: "JavaScript (ES6+)", tag: "Daily" },
      { name: "Python", tag: "ML & APIs" },
      { name: "SQL", tag: "Relational" },
      { name: "Java", tag: "Academic" },
      { name: "C++", tag: "Academic" },
      { name: "Dart", tag: "Mobile" }
    ]
  },
  {
    title: "Backend Engineering",
    focus: "REST APIs, Security & Service Architecture",
    icon: <Server size={18} className="text-blue-400" />,
    skills: [
      { name: "Node.js", tag: "Core" },
      { name: "Express.js", tag: "Production" },
      { name: "NestJS", tag: "Production" },
      { name: "FastAPI", tag: "ML Backend" },
      { name: "REST APIs", tag: "Core" },
      { name: "JWT Auth & RBAC", tag: "Security" },
      { name: "Socket.IO", tag: "Real-Time" }
    ]
  },
  {
    title: "Databases & Caching",
    focus: "Relational Modeling, NoSQL & Low-Latency Persistence",
    icon: <Database size={18} className="text-cyan-400" />,
    skills: [
      { name: "PostgreSQL", tag: "Primary DB" },
      { name: "MongoDB", tag: "Document DB" },
      { name: "Redis", tag: "Cache & State" },
      { name: "Sequelize ORM", tag: "Production" },
      { name: "Supabase", tag: "Auth & DB" },
      { name: "Relational Schema Migrations", tag: "Core" }
    ]
  },
  {
    title: "Frontend & Mobile",
    focus: "Cross-Platform SPAs & Responsive Interfaces",
    icon: <Layout size={18} className="text-purple-400" />,
    skills: [
      { name: "React", tag: "Primary" },
      { name: "Next.js", tag: "Production" },
      { name: "Tailwind CSS", tag: "Daily" },
      { name: "Flutter", tag: "Mobile Client" },
      { name: "Vite", tag: "SPA Build" },
      { name: "Semantic HTML5" }
    ]
  },
  {
    title: "Cloud & DevOps",
    focus: "Containerization, Droplets & Deployment",
    icon: <Cloud size={18} className="text-amber-400" />,
    skills: [
      { name: "AWS", tag: "Cloud" },
      { name: "Docker", tag: "Certified" },
      { name: "DigitalOcean", tag: "Production" },
      { name: "Render.com", tag: "Staging" },
      { name: "CI/CD Workflows", tag: "Pipelines" },
      { name: "Linux / Bash", tag: "Daily" },
      { name: "Git & GitHub", tag: "VCS" }
    ]
  },
  {
    title: "AI & Related Tools",
    focus: "Model Integration, Real-Time Audio & QA",
    icon: <Brain size={18} className="text-pink-400" />,
    skills: [
      { name: "TensorFlow", tag: "Vision ML" },
      { name: "AI Integrations (Gemini API)", tag: "Applied" },
      { name: "Postman", tag: "API Testing" },
      { name: "Agora SDK", tag: "Voice/Video" },
      { name: "OpenCV", tag: "Image Processing" },
      { name: "Data Structures & Algorithms", tag: "Foundations" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Code2 size={18} className="text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Technical Skills</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          6 Core Categories &bull; Verified Technologies
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="editorial-card p-5 space-y-4 flex flex-col justify-between group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-white/20 transition-colors">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">{cat.title}</h3>
                    <p className="text-[10px] font-mono text-zinc-400">{cat.focus}</p>
                  </div>
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] rounded-lg transition-colors group/item"
                  >
                    <span className="text-xs text-zinc-200 font-mono">{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[9px] font-mono text-blue-400/90 font-medium bg-blue-500/10 px-1 py-0.2 rounded border border-blue-500/20">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>{cat.skills.length} Technologies</span>
              <span className="text-zinc-400 font-mono text-[9px]">Verified Experience</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
