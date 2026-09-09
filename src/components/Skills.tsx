"use client";

import { motion } from "framer-motion";
import { Server, Layout, Cloud, Settings, Brain, Smartphone, Code2, Database } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Backend & Systems",
    icon: <Server size={20} />,
    skills: ["Node.js", "Express.js", "NestJS", "REST API Design", "JWT / bcrypt Auth", "RBAC", "Socket.IO", "Sequelize", "System Design"],
    color: "#0070f3"
  },
  {
    title: "Frontend Engineering",
    icon: <Layout size={20} />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Framer Motion"],
    color: "#9333ea"
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: ["PostgreSQL", "Supabase", "MySQL", "Redis", "SQL (ACID & Relations)"],
    color: "#3b82f6"
  },
  {
    title: "DevOps & Deployment",
    icon: <Cloud size={20} />,
    skills: ["DigitalOcean", "Render.com", "Docker", "Kubernetes", "Git / GitHub", "Postman", "Linux", "CI-Style Release Management"],
    color: "#f59e0b"
  },
  {
    title: "Languages",
    icon: <Code2 size={20} />,
    skills: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "C++"],
    color: "#10b981"
  },
  {
    title: "AI / ML & Foundations",
    icon: <Brain size={20} />,
    skills: ["Gemini API", "TensorFlow", "OpenCV", "Data Structures & Algorithms", "Structured Manual/API Testing"],
    color: "#ef4444"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-32">
       <div className="flex items-end gap-6 mb-10">
        <h2 className="text-6xl font-extrabold tracking-tight text-mask">Stack</h2>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest pb-2">/ Control Center</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-6 glass-card border-white/5 flex flex-col gap-6 group"
          >
            <div className="flex items-center justify-between">
              <div
                className="p-3 rounded-2xl bg-zinc-950 border border-white/10 text-white transition-all group-hover:scale-110"
                style={{ color: cat.color }}
              >
                {cat.icon}
              </div>
              <div className="h-px flex-1 mx-4 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 bg-white/[0.02] border border-white/5 rounded text-[10px] font-mono text-zinc-500 hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance Metric (Decorative) */}
            <div className="pt-4 mt-auto space-y-2">
              <div className="flex justify-between text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
                <span>Expertise_Level</span>
                <span>{90 - i * 5}%</span>
              </div>
              <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                   initial={{ width: 0 }}
                   whileInView={{ width: `${90 - i * 5}%` }}
                   transition={{ duration: 1, delay: 0.5 }}
                   className="h-full"
                   style={{ backgroundColor: cat.color }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
