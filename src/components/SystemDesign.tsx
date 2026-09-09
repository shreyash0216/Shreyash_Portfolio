"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, Cloud, Zap, Smartphone, ArrowRight, Info } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const NODES = [
  {
    icon: <Smartphone size={24} />,
    label: "React / Client UI",
    color: "#0070f3",
    purpose: "Cross-platform client interface.",
    desc: "React and Next.js interfaces with responsive state management, client-side caching, and Socket.IO listeners.",
    tech: ["React", "Next.js", "TypeScript", "Socket.IO"]
  },
  {
    icon: <Zap size={24} />,
    label: "REST APIs & Auth",
    color: "#f59e0b",
    purpose: "Stateless communication & RBAC.",
    desc: "Endpoints secured with JWT auth, bcrypt hashing, and role-based access control tested end-to-end via Postman.",
    tech: ["Node.js", "Express", "JWT/bcrypt", "RBAC", "Postman"]
  },
  {
    icon: <Server size={24} />,
    label: "NestJS Core Engine",
    color: "#10b981",
    purpose: "Multi-tenant business logic.",
    desc: "Modular service architecture managing tenant isolation, invoice/PDF generation, and real-time event broadcasting.",
    tech: ["NestJS", "TypeScript", "Socket.IO", "Event Bus"]
  },
  {
    icon: <Database size={24} />,
    label: "PostgreSQL & Supabase",
    color: "#3b82f6",
    purpose: "Relational data management.",
    desc: "ACID-compliant relational schemas with Sequelize/Prisma ORM, foreign keys, and zero-drift migrations.",
    tech: ["PostgreSQL", "Supabase", "Sequelize", "SQL"]
  },
  {
    icon: <Zap size={24} />,
    label: "Redis & Pub/Sub",
    color: "#ef4444",
    purpose: "Low-latency state & cache.",
    desc: "Memory store caching frequent tenant queries and mediating socket event distribution under load.",
    tech: ["Redis", "Memory Store", "Pub/Sub"]
  },
  {
    icon: <Cloud size={24} />,
    label: "DigitalOcean & Render",
    color: "#ff9900",
    purpose: "Production deployment & fallback.",
    desc: "Production DigitalOcean droplet deployment backed by Render.com staging/fallback environment with Docker.",
    tech: ["DigitalOcean", "Render.com", "Docker", "Linux"]
  },
];

const SystemDesign = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <h2 className="text-3xl font-bold">System Architecture</h2>
        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
          <Info size={12} className="text-accent" /> Hover for module intelligence
        </div>
      </div>

      <div ref={containerRef} className="glass-card pt-24 pb-8 px-4 sm:px-6 md:px-8 overflow-x-auto lg:overflow-visible relative scrollbar-hide">
        <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 relative lg:h-28 min-w-[720px] lg:min-w-0 w-full">
          {NODES.map((node, i) => {
            const isNeighbor = hoveredNode !== null && (hoveredNode === i - 1 || hoveredNode === i + 1);
            const isActive = hoveredNode === i;
            const isInactive = hoveredNode !== null && !isActive && !isNeighbor;

            return (
              <div
                key={i}
                className="flex items-center flex-1 last:flex-initial gap-2 sm:gap-3 relative z-10 justify-between last:justify-start"
                onMouseEnter={() => setHoveredNode(i)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : isNeighbor ? 1.05 : 1,
                    opacity: isInactive ? 0.4 : 1,
                    borderColor: isActive ? node.color : isNeighbor ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.05)"
                  }}
                  className="flex flex-col items-center gap-3 cursor-help relative shrink-0 mx-auto"
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-white transition-all shadow-2xl relative"
                    style={{
                      boxShadow: isActive ? `0 0 40px ${node.color}40` : isNeighbor ? `0 0 20px ${node.color}10` : 'none',
                    }}
                  >
                    <div style={{ color: node.color }}>{node.icon}</div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          className={`absolute z-[100] w-64 p-5 bg-[#09090b]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none
                            ${i >= 4 ? 'right-0 origin-top-right' : i === 0 ? 'left-0 origin-top-left' : '-left-8 origin-left'}
                            -top-[155px]
                          `}
                        >
                          <div className="space-y-4 text-left">
                            <div>
                              <p className="text-[9px] font-mono text-accent uppercase tracking-widest mb-1 font-bold">Purpose</p>
                              <p className="text-xs text-white font-bold leading-tight">{node.purpose}</p>
                            </div>
                            <div>
                              <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1 font-bold">Intelligence</p>
                              <p className="text-[11px] text-zinc-300 leading-relaxed font-medium">{node.desc}</p>
                            </div>
                            <div className="pt-3 flex flex-wrap gap-1.5 border-t border-white/5">
                              {node.tech.map(t => (
                                <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[8px] font-mono text-zinc-400">{t}</span>
                              ))}
                            </div>
                          </div>
                          <div className={`absolute -bottom-1 w-2 h-2 bg-[#09090b] border-b border-r border-white/10 rotate-45 ${i >= 4 ? 'right-8' : 'left-8'}`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-wider transition-all text-center max-w-[80px] sm:max-w-[100px] leading-tight block ${isActive ? 'text-white font-bold' : 'text-zinc-500'}`}>
                    {node.label}
                  </span>
                </motion.div>

                {i < NODES.length - 1 && (
                  <div className="flex-1 flex items-center justify-center px-1">
                    <motion.div
                      animate={{
                        opacity: hoveredNode === i || hoveredNode === i + 1 ? 1 : 0.15,
                        scaleX: hoveredNode === i || hoveredNode === i + 1 ? 1.2 : 1,
                        backgroundColor: hoveredNode === i || hoveredNode === i + 1 ? node.color : "#27272a"
                      }}
                      className="w-full max-w-[24px] sm:max-w-[36px] md:max-w-[48px] h-0.5 origin-left transition-colors"
                    />
                    <motion.div
                      animate={{
                        x: hoveredNode === i || hoveredNode === i + 1 ? [0, 3, 0] : 0,
                        color: hoveredNode === i || hoveredNode === i + 1 ? node.color : "#27272a",
                        opacity: hoveredNode === i || hoveredNode === i + 1 ? 1 : 0.15,
                      }}
                      transition={{
                        x: { repeat: hoveredNode === i || hoveredNode === i + 1 ? Infinity : 0, duration: 1.5 },
                        opacity: { duration: 0.3 }
                      }}
                      className="-ml-1 transition-colors shrink-0"
                    >
                      <ArrowRight size={14} />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800/10 -translate-y-8 hidden lg:block overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="w-48 h-full bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile hint */}
      <p className="mt-4 text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest lg:hidden">
        Scroll horizontally to explore
      </p>
    </section>
  );
};

export default SystemDesign;
