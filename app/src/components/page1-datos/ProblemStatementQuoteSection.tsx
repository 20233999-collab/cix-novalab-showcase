"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ProblemStatementQuoteSection: React.FC = () => {
  return (
    <section className="relative w-full py-32 px-6 bg-[#080B1A] text-white overflow-hidden border-b border-slate-800/80">
      
      {/* Fondo con halo sutil Índigo / Clementine CIX */}
      <div 
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[340px] bg-gradient-to-r from-[#3B49DF]/15 via-[#FEA900]/10 to-transparent blur-[120px] pointer-events-none rounded-full"
      />

      {/* Grid tenue de ingeniería */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow de transición */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FEA900] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEA900]"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
            PRINCIPIO OPERATIVO // EL VALOR DEL DIAGNÓSTICO
          </span>
        </motion.div>

        {/* Cita limpia, sin comillas, con "casi resuelto." en loop */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.18] font-display max-w-4xl mx-auto"
        >
          <span className="text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] inline-block mr-2">
            Un problema bien planteado
          </span>
          <span className="text-slate-200 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] inline-block mr-2 font-semibold">
            es un problema
          </span>
          
          {/* Parte en loop: "casi resuelto." */}
          <motion.span
            className="relative inline-block font-extrabold"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: EASE, delay: 0.35 }}
          >
            {/* Halo difuso posterior con pulso */}
            <motion.span
              aria-hidden
              animate={{
                opacity: [0.35, 0.85, 0.35],
                scale: [0.97, 1.1, 0.97],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-x-3 -inset-y-2 bg-gradient-to-r from-[#FEA900]/30 via-orange-500/25 to-[#3B49DF]/25 blur-xl -z-10 rounded-full pointer-events-none"
            />

            {/* Shimmer en loop constante */}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "200% 50%"],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-white via-[48%] to-[#FEA900] drop-shadow-[0_2px_24px_rgba(254,169,0,0.65)]"
            >
              casi resuelto.
            </motion.span>
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
};
export default ProblemStatementQuoteSection;
