"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const NarrativeBridgeP3ToP2: React.FC = () => {
  return (
    <div className="relative w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-[#080B1A] overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Halo ambiental sutil CIX Scarlet Red / Índigo sin bordes duros */}
      <div 
        aria-hidden 
        className="absolute w-[450px] h-[200px] bg-[#D92107]/12 blur-3xl rounded-full pointer-events-none transform-gpu top-1/2 -translate-y-1/2"
      />

      {/* Micro-chip de orientación */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#3B49DF]" />
        <span>Fase 02 · El Cuello de Botella Físico</span>
      </motion.div>

      {/* Titular sobrio y tipográfico */}
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white max-w-2xl leading-snug tracking-tight mb-3"
      >
        "La amnesia explica la repetición... pero{" "}
        <span className="text-[#3B49DF]">
          ¿dónde se frena físicamente el flujo?
        </span>"
      </motion.h3>

      {/* Explicación concisa y elegante */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans leading-relaxed"
      >
        En los pasillos todos señalan al mismo sospechoso: <span className="text-slate-200">"Legal y Riesgos demoran demasiado"</span>. Sin embargo, los números muestran una penalización oculta: un experimento con observaciones pasa de <strong className="text-white">8 a 20 días hábiles (+150%)</strong>.
      </motion.p>

      {/* Indicador de continuidad fluido */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 flex items-center gap-1.5 text-[11px] font-mono text-slate-500"
      >
        <span>El tapón en Aprobaciones</span>
        <ArrowDown className="w-3 h-3 text-[#3B49DF] animate-bounce" />
      </motion.div>
    </div>
  );
};
