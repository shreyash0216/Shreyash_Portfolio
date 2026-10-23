"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, FileDown, MapPin, ArrowUpRight, Send, CheckCircle2, Globe } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "shreyashatre16@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <Mail size={18} className="text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Contact &bull; Connect</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Opportunities &bull; Collaborations
        </span>
      </div>

      <div className="editorial-card p-6 sm:p-8 space-y-8">
        
        {/* Main Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Have a software product to build?
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal max-w-2xl">
              I’m interested in software engineering opportunities, technical collaborations, and building useful products. 
              Whether you are architecting backend systems, scaling full-stack platforms, or developing reliable APIs, I would love to connect.
            </p>
          </div>

          <div className="lg:col-span-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 text-xs">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">
                Primary Location
              </span>
              <p className="text-zinc-200 font-medium flex items-center gap-1.5">
                <MapPin size={13} className="text-blue-400 shrink-0" />
                Pune, Maharashtra, India
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">
                Availability &bull; Relocation
              </span>
              <p className="text-zinc-200 font-medium flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                Available Immediately &bull; In-Office, Hybrid, or Remote
              </p>
            </div>
          </div>
        </div>

        {/* Primary Action Row: Direct Email & One-Click Copy */}
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Direct Email Address
            </span>
            <div className="text-base sm:text-lg font-mono font-medium text-white select-all">
              {email}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-lg text-xs font-mono text-zinc-200 hover:text-white transition-all focus-ring"
              aria-label="Copy email address to clipboard"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? "Copied to Clipboard" : "Copy Email"}</span>
            </button>

            <a
              href={`mailto:${email}?subject=Software%20Developer%20Opportunity%20/%20Inquiry`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-medium transition-colors focus-ring"
            >
              <Send size={13} />
              <span>Compose Email</span>
            </a>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <a
            href="https://github.com/shreyash0216"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/15 transition-all flex items-center justify-between group focus-ring"
          >
            <div className="flex items-center gap-2.5">
              <Github size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
              <div>
                <span className="text-xs font-semibold text-zinc-200 block group-hover:text-white">GitHub</span>
                <span className="text-[10px] font-mono text-zinc-500">@shreyash0216</span>
              </div>
            </div>
            <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/shreyash-atre-901340317/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/15 transition-all flex items-center justify-between group focus-ring"
          >
            <div className="flex items-center gap-2.5">
              <Linkedin size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div>
                <span className="text-xs font-semibold text-zinc-200 block group-hover:text-white">LinkedIn</span>
                <span className="text-[10px] font-mono text-zinc-500">Shreyash Atre</span>
              </div>
            </div>
            <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </a>

          <a
            href={getAssetPath("resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/15 transition-all flex items-center justify-between group focus-ring"
          >
            <div className="flex items-center gap-2.5">
              <FileDown size={16} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <div>
                <span className="text-xs font-semibold text-zinc-200 block group-hover:text-white">Resume (PDF)</span>
                <span className="text-[10px] font-mono text-zinc-500">1-Page Resume</span>
              </div>
            </div>
            <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </a>

          <a
            href="https://www.syantrex.online"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/15 transition-all flex items-center justify-between group focus-ring"
          >
            <div className="flex items-center gap-2.5">
              <Globe size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div>
                <span className="text-xs font-semibold text-zinc-200 block group-hover:text-white">Syantrex</span>
                <span className="text-[10px] font-mono text-zinc-500">syantrex.online</span>
              </div>
            </div>
            <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
