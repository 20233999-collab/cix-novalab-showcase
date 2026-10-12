"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const NarrativeBridgeP2ToP1: React.FC = () => {
  return (
    <div className="relative w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-[#080B1A] overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Halo ambiental sutil Clementine Gold sin bordes duros */}
      <div 
        aria-hidden 
        className="absolute w-[500px] h-[220px] bg-[#FEA900]/12 blur-3xl rounded-full pointer-events-none transform-gpu top-1/2 -translate-y-1/2"
      />

      {/* Micro-chip de orientación: Palanca Pareto */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEA900]/10 text-[11px] font-mono uppercase tracking-wider text-amber-300 mb-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#FEA900] animate-pulse" />
        <span>Fase 03 · Mirando Aguas Arriba</span>
      </motion.div>

      {/* Titular sobrio de tensión deductiva */}
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white max-w-2xl leading-snug tracking-tight mb-3"
      >
        "El cuello de botella no nace en el control;{" "}
        <span className="text-[#FEA900]">
          se hereda de una entrada no estandarizada.
        </span>"
      </motion.h3>

      {/* Explicación concisa y persuasiva */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans leading-relaxed"
      >
        Si el <strong className="text-white">61% de los expedientes</strong> son observados y tardan 20 días, la pregunta analítica no es por qué Legal tarda en evaluar, sino qué estamos dejando pasar en las <strong className="text-slate-200">Etapas 1 y 2</strong> antes de enviar a revisión.
      </motion.p>

      {/* Indicador de continuidad fluido */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 flex items-center gap-1.5 text-[11px] font-mono text-amber-300/80"
      >
        <span>Descubriendo el problema raíz</span>
        <ArrowDown className="w-3 h-3 text-[#FEA900] animate-bounce" />
      </motion.div>
    </div>
  );
};
