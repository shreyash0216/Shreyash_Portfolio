"use client";

import { motion } from "framer-motion";

const ProofSection = () => {
  const proofs = [
    {
      title: "8.68/10",
      subtitle: "CGPA"
    },
    {
      title: "Founder",
      subtitle: "Syantrex Technologies"
    },
    {
      title: "2nd Prize",
      subtitle: "DermaScanAI"
    },
    {
      title: "Backend Focus",
      subtitle: "APIs · Databases · SaaS"
    }
  ];

  return (
    <section className="relative py-12 bg-[#0D1314] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/5">
          {proofs.map((proof, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 group"
            >
              <h3 className="text-2xl md:text-3xl font-black text-[#F5F7F6] mb-2 tracking-tight group-hover:text-[#35E58D] transition-colors">{proof.title}</h3>
              <p className="text-[10px] md:text-xs text-[#697773] font-bold tracking-widest uppercase">{proof.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
