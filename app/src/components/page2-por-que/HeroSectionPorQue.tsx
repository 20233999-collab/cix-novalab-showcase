"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowDown,
  Search,
  Compass
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const HeroSectionPorQue: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#080B1A] text-white text-center">
      
      {/* Retícula técnica de fondo (DESIGN.md) */}
      <div 
        aria-hidden 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"
      />

      {/* Aura central en loop continuo (breathing glow CIX) */}
      <motion.div 
        aria-hidden 
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[650px] h-[380px] bg-gradient-to-r from-[#002A8F]/30 via-[#FEA900]/25 to-[#D92107]/20 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      {/* Contenido central del Hero */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto pt-16">
        
        {/* Eyebrow interactivo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(254,169,0,0.1)]"
        >
          <Compass className="w-3.5 h-3.5 text-[#FEA900] animate-spin" style={{ animationDuration: '12s' }} />
          <span>02. ANÁLISIS DE CAUSA RAÍZ · CIX NOVALAB</span>
        </motion.div>

        {/* EL GRAN TITULAR: "¿POR QUÉ OCURRE ESTO?" con loop animado */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-none text-white select-none"
          >
            ¿POR QUÉ{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              OCURRE ESTO?
              
              {/* Resplandor inferior pulsante */}
              <motion.span
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleX: [0.9, 1.05, 0.9]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FEA900] to-transparent rounded-full pointer-events-none"
              />
            </span>
          </motion.h1>
        </div>

        {/* Bajada explicativa e intrigante */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl font-sans leading-relaxed mb-10"
        >
          Detrás de los <span className="text-white font-bold">57 días de retraso</span> y el <span className="text-[#FEA900] font-bold">61% de reproceso</span> no hay falta de talento. Hay una fricción estructural profunda entre la psicología de incentivos y los procesos tradicionales del banco.
        </motion.p>

        {/* Indicador de scroll flotante en loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md"
        >
          <Search className="w-4 h-4 text-[#FEA900] animate-pulse" />
          <span>Auditemos la causa raíz aguas arriba</span>
          <ArrowDown className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
        </motion.div>

      </div>

    </section>
  );
};
