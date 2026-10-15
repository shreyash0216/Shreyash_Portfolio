"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0D1314] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7F6] tracking-tighter mb-4 uppercase">See how I think about building software.</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-video bg-[#080B0C] rounded-sm border border-white/10 overflow-hidden group shadow-2xl flex items-center justify-center cursor-pointer"
        >
          {/* Subtle placeholder / fallback visual if video not present */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#121C1D] to-[#0D1314]" />
          
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F5F7F6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:scale-110 group-hover:border-[#35E58D]/50 transition-all duration-300">
            <Play className="text-[#F5F7F6] group-hover:text-[#35E58D] ml-1 transition-colors" size={32} />
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A5B2AE]">Play Introduction</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoSection;
