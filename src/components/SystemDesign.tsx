"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Zap,
  Smartphone,
  Info,
  Layers,
  Shield
} from "lucide-react";

interface SystemNode {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
  purpose: string;
  desc: string;
  tech: string[];
  inflow: string;
  outflow: string;
}

const NODES: SystemNode[] = [
  {
    id: "client-layer",
    label: "Client UI",
    sublabel: "Web & Mobile Frontends",
    icon: <Smartphone size={20} />,
    color: "#3b82f6",
    badge: "Presentation Layer",
    purpose: "Cross-platform user interface & real-time client state management.",
    desc: "React and Next.js SPAs with optimistic UI updates, client-side caching, and persistent WebSocket listeners for real-time inventory and checkout sync.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Socket.IO Client"],
    inflow: "User interactions, WebSocket push events",
    outflow: "HTTPS REST requests with JWT Bearer tokens"
  },
  {
    id: "gateway-auth",
    label: "API Gateway & Auth",
    sublabel: "Stateless Security & RBAC",
    icon: <Shield size={20} />,
    color: "#f59e0b",
    badge: "Security & Routing",
    purpose: "Stateless session validation, rate limiting, and RBAC enforcement.",
    desc: "Endpoints secured with JWT authentication and bcrypt password hashing. Enforces strict tenant separation and role-based permissions tested end-to-end via Postman.",
    tech: ["Node.js", "Express", "JWT", "bcrypt", "RBAC", "Postman QA"],
    inflow: "Client REST requests + auth headers",
    outflow: "Authenticated tenant context to core domain services"
  },
  {
    id: "core-engine",
    label: "NestJS Domain Engine",
    sublabel: "Modular Multi-Tenant Logic",
    icon: <Server size={20} />,
    color: "#10b981",
    badge: "Business Logic Tier",
    purpose: "Multi-tenant business workflows, billing, and order orchestration.",
    desc: "Modular service architecture managing tenant isolation, inventory transaction lifecycle, dynamic PDF invoice generation, and asynchronous event broadcasting.",
    tech: ["NestJS", "TypeScript", "Socket.IO", "Event Bus", "PDF Streaming"],
    inflow: "Authorized domain commands from Gateway",
    outflow: "ACID queries to PostgreSQL, real-time events to Redis"
  },
  {
    id: "database-tier",
    label: "PostgreSQL & Supabase",
    sublabel: "Relational Persistence Layer",
    icon: <Database size={20} />,
    color: "#60a5fa",
    badge: "ACID Data Tier",
    purpose: "Relational data management with strict integrity constraints.",
    desc: "Normalized relational schemas with foreign key cascades, tenant partitioning, and zero-drift schema migrations using Sequelize and Prisma.",
    tech: ["PostgreSQL", "MongoDB", "Supabase", "Sequelize", "ACID Transactions"],
    inflow: "Parameterized SQL queries with tenant filtering",
    outflow: "Persistent entity state & audit logs"
  },
  {
    id: "cache-realtime",
    label: "Redis State Store",
    sublabel: "In-Memory Pub/Sub & Caching",
    icon: <Zap size={20} />,
    color: "#ec4899",
    badge: "Low-Latency Cache",
    purpose: "Low-latency state management and WebSocket event distribution.",
    desc: "In-memory caching for frequent tenant catalog reads and pub/sub message broker mediating Socket.IO events across scaled worker processes.",
    tech: ["Redis", "Memory Store", "Pub/Sub", "Socket.IO Broker"],
    inflow: "Event broadcasts & cache invalidation requests",
    outflow: "Sub-millisecond cached reads & event dispatches"
  },
  {
    id: "cloud-infra",
    label: "Cloud & Deployment",
    sublabel: "Droplets, Docker & Staging",
    icon: <Cloud size={20} />,
    color: "#8b5cf6",
    badge: "Infrastructure",
    purpose: "Resilient production deployment with automated fallback.",
    desc: "Production DigitalOcean droplet deployment backed by Render.com staging/fallback environment with Docker containerization and Linux system management.",
    tech: ["DigitalOcean", "Render.com", "Docker", "Linux / Nginx", "CI Deployments"],
    inflow: "Docker release images & deployment hooks",
    outflow: "High-uptime HTTPS edge availability"
  }
];

const SystemDesign = () => {
  const [selectedNodeIdx, setSelectedNodeIdx] = useState<number>(0);
  const [hoveredNodeIdx, setHoveredNodeIdx] = useState<number | null>(null);

  const activeIdx = hoveredNodeIdx !== null ? hoveredNodeIdx : selectedNodeIdx;
  const activeNode = NODES[activeIdx];

  // Dismiss on Escape key (WCAG 1.4.13)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHoveredNodeIdx(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="architecture" className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Layers size={18} className="text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">System Architecture</h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full">
          <Info size={12} className="text-blue-400" />
          <span>Interactive Flow &bull; Select or hover any module</span>
        </div>
      </div>

      <div className="editorial-card p-5 sm:p-7 space-y-7">
        
        {/* Desktop Pipeline Flow (>= 1024px) */}
        <div className="hidden lg:block space-y-3">
          {/* Subtle Pipeline Sequence Track ABOVE the boxes */}
          <div className="relative px-1 pt-1 pb-1">
            {/* Horizontal connection line above the boxes */}
            <div className="absolute top-1/2 left-[8.33%] right-[8.33%] h-px -translate-y-1/2 bg-white/[0.08]" />
            
            {/* Animated data packet traveling the pipeline above the boxes */}
            <div className="absolute top-1/2 left-[8.33%] right-[8.33%] h-px -translate-y-1/2 overflow-hidden pointer-events-none">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-24 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-90"
              />
            </div>

            {/* Sequence step pills above each box */}
            <div className="grid grid-cols-6 gap-2.5 relative z-10">
              {NODES.map((node, i) => {
                const isSelected = activeIdx === i;
                return (
                  <div key={node.id} className="flex justify-center">
                    <span
                      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-mono transition-all duration-200 ${
                        isSelected
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold shadow-sm"
                          : "bg-zinc-950 border border-white/[0.08] text-zinc-500"
                      }`}
                    >
                      Step 0{i + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node buttons row - clean, with no line behind */}
          <div className="grid grid-cols-6 gap-2.5 relative z-10">
            {NODES.map((node, i) => {
              const isSelected = activeIdx === i;
              const isNeighbor = activeIdx === i - 1 || activeIdx === i + 1;
              const isDimmed = !isSelected && !isNeighbor;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeIdx(i)}
                  onMouseEnter={() => setHoveredNodeIdx(i)}
                  onMouseLeave={() => setHoveredNodeIdx(null)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl transition-all duration-200 group focus-ring ${
                    isSelected
                      ? "bg-white/[0.08] border border-white/25 shadow-lg scale-[1.02]"
                      : isDimmed
                      ? "bg-black/60 border border-white/[0.04] opacity-75 hover:opacity-100 hover:bg-white/[0.04]"
                      : "bg-black/60 border border-white/[0.08] hover:bg-white/[0.04]"
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`Inspect ${node.label} module`}
                >
                  {/* Icon circle */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all mb-2 shadow-md shrink-0"
                    style={{
                      backgroundColor: isSelected ? `${node.color}25` : "rgba(24, 24, 27, 0.8)",
                      border: `1px solid ${isSelected ? node.color : "rgba(255, 255, 255, 0.1)"}`,
                      color: node.color,
                      boxShadow: isSelected ? `0 0 16px ${node.color}35` : "none"
                    }}
                  >
                    {node.icon}
                  </div>

                  {/* Title */}
                  <span className={`text-[11px] font-semibold tracking-tight leading-tight transition-colors ${
                    isSelected ? "text-white font-bold" : "text-zinc-300 group-hover:text-white"
                  }`}>
                    {node.label}
                  </span>

                  {/* Layer Subtitle */}
                  <span className="text-[9px] font-mono text-zinc-500 mt-0.5 line-clamp-1 leading-tight">
                    {node.badge}
                  </span>

                  {/* Active selection bar indicator */}
                  <div
                    className="mt-2 h-1 w-6 rounded-full transition-all"
                    style={{
                      backgroundColor: isSelected ? node.color : "transparent"
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Tablet Connected Flow (768px - 1023px) */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-3">
          {NODES.map((node, i) => {
            const isSelected = activeIdx === i;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeIdx(i)}
                className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all focus-ring ${
                  isSelected
                    ? "bg-white/[0.08] border border-white/20 text-white shadow-md"
                    : "bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-zinc-200"
                }`}
                aria-pressed={isSelected}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: isSelected ? `${node.color}20` : "rgba(255, 255, 255, 0.05)",
                    color: node.color,
                    border: `1px solid ${isSelected ? node.color : "rgba(255, 255, 255, 0.1)"}`
                  }}
                >
                  {node.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold truncate leading-tight text-white">{node.label}</div>
                  <div className="text-[9px] font-mono text-zinc-500 truncate mt-0.5">{node.badge}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Responsive Stepper (< 768px) */}
        <div className="md:hidden space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-1">
            <span>Select Architecture Module:</span>
            <span className="text-blue-400 font-semibold">{activeIdx + 1} of {NODES.length}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {NODES.map((node, i) => {
              const isSelected = activeIdx === i;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeIdx(i)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg text-left transition-all focus-ring ${
                    isSelected
                      ? "bg-white/[0.08] border border-white/20 text-white shadow"
                      : "bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-zinc-200"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 text-xs"
                    style={{
                      backgroundColor: isSelected ? `${node.color}20` : "rgba(255, 255, 255, 0.05)",
                      color: node.color,
                      border: `1px solid ${isSelected ? node.color : "rgba(255, 255, 255, 0.1)"}`
                    }}
                  >
                    {node.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold truncate leading-tight">{node.label}</div>
                    <div className="text-[9px] font-mono text-zinc-500 truncate">{node.badge}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Module Architecture Inspector Console (Always unclipped, fully responsive) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="rounded-xl bg-zinc-950/80 border border-white/10 p-5 sm:p-6 space-y-5 shadow-2xl relative overflow-hidden"
          >
            {/* Top decorative accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: activeNode.color }}
            />

            {/* Inspector Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow"
                  style={{
                    backgroundColor: `${activeNode.color}20`,
                    color: activeNode.color,
                    border: `1px solid ${activeNode.color}40`
                  }}
                >
                  {activeNode.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {activeNode.label}
                    </h3>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold"
                      style={{
                        backgroundColor: `${activeNode.color}15`,
                        color: activeNode.color,
                        border: `1px solid ${activeNode.color}30`
                      }}
                    >
                      {activeNode.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {activeNode.sublabel}
                  </p>
                </div>
              </div>

              {/* Data Flow Indicator */}
              <div className="text-right text-xs font-mono text-zinc-500">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">Subsystem Pipeline</span>
                <span className="text-zinc-300">Node {activeIdx + 1} of 6 &bull; Architecture Flow</span>
              </div>
            </div>

            {/* Deep-dive Intelligence Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-xs">
              
              {/* Primary Purpose & Intelligence */}
              <div className="md:col-span-7 space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 font-semibold block">
                    Core Architectural Responsibility
                  </span>
                  <p className="text-sm font-medium text-zinc-100 leading-snug">
                    {activeNode.purpose}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block">
                    Technical Implementation Intelligence
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {activeNode.desc}
                  </p>
                </div>
              </div>

              {/* Pipeline Inflow / Outflow & Stack */}
              <div className="md:col-span-5 space-y-3.5 bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">
                    Inbound Flow
                  </span>
                  <p className="text-xs font-mono text-zinc-300 leading-tight">
                    &rarr; {activeNode.inflow}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">
                    Outbound Flow
                  </span>
                  <p className="text-xs font-mono text-zinc-300 leading-tight">
                    &rarr; {activeNode.outflow}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">
                    Active Technologies
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {activeNode.tech.map(t => (
                      <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.07] text-[10px] font-mono text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Accessible Static Fallback Table (screen-reader accessible) */}
        <div className="sr-only">
          <h3>System Architecture Overview Table</h3>
          <table>
            <thead>
              <tr>
                <th>Module</th>
                <th>Layer</th>
                <th>Responsibility</th>
                <th>Technologies</th>
              </tr>
            </thead>
            <tbody>
              {NODES.map((node) => (
                <tr key={node.id}>
                  <td>{node.label}</td>
                  <td>{node.badge}</td>
                  <td>{node.purpose}</td>
                  <td>{node.tech.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default SystemDesign;
