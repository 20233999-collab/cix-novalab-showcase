"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Target, Flame, Zap } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ParetoPrincipleSection: React.FC = () => {
  // Estado numérico dinámico: oscilación suave, sutil y continua
  const [ratio20, setRatio20] = useState(20);
  const [clashState, setClashState] = useState<"neutral" | "push20" | "push80">("neutral");

  // Motor de oscilación infinito suave (ondas suaves continuas entre 19% y 25%)
  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 4;
      if (step === 0) {
        setRatio20(20);
        setClashState("neutral");
      } else if (step === 1) {
        setRatio20(24); // Micro-expansión sutil y elegante del 20%
        setClashState("push20");
      } else if (step === 2) {
        setRatio20(20);
        setClashState("neutral");
      } else if (step === 3) {
        setRatio20(18); // Micro-contracción sutil
        setClashState("push80");
      }
    }, 2800); // Ritmo pausado y relajado de 2.8s por fase

    return () => clearInterval(interval);
  }, []);

  const ratio80 = 100 - ratio20;

  return (
    <section className="relative w-full min-h-[90vh] py-32 px-6 sm:px-10 lg:px-20 overflow-hidden bg-gradient-to-b from-[#080B1A] via-[#100b1a] to-[#080B1A] text-white flex items-center">
      
      {/* Retícula técnica de fondo (DESIGN.md) */}
      <div 
        aria-hidden 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none"
      />

      {/* Degradado superior ultra suave desde Abyssal Navy */}
      <div 
        aria-hidden 
        className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#080B1A] via-[#080B1A]/80 to-transparent pointer-events-none"
      />

      {/* Halos ambientales cálidos y CIX Índigo Optimizados */}
      <div 
        aria-hidden
        className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-[#002A8F]/25 blur-3xl rounded-full pointer-events-none will-change-transform transform-gpu"
      />
      <div 
        aria-hidden
        className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#FEA900]/20 blur-3xl rounded-full pointer-events-none will-change-transform transform-gpu"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* ========================================================
            BLOQUE IZQUIERDO: TEXTO EDITORIAL (Awwwards / CIX Grade)
           ======================================================== */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          
          {/* Eyebrow Chip minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#FEA900] shadow-[0_0_8px_#FEA900]" />
            <span className="text-[11px] font-mono tracking-[0.16em] text-white/80 uppercase font-semibold">
              MARCO METODOLÓGICO
            </span>
          </motion.div>

          {/* Texto Normal: Editorial, ligero, alta legibilidad */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="text-xl sm:text-2xl text-slate-300 font-normal tracking-tight leading-relaxed max-w-xl font-display"
          >
            El objetivo estratégico de este análisis es aplicar
          </motion.p>

          {/* Bloque Destacado: Principio de Pareto (Tarjeta CIX Azul Premium con Glass & Halo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="relative group w-fit"
          >
            {/* Halo posterior de resplandor CIX Azul */}
            <div 
              aria-hidden
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#002A8F] via-[#3B49DF] to-[#002A8F] opacity-75 blur-xl group-hover:opacity-100 transition duration-700 pointer-events-none"
            />

            {/* Pastilla Insignia CIX */}
            <div className="relative flex items-center gap-4 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#002A8F] via-[#002273] to-[#001854] border border-blue-400/40 shadow-[0_20px_45px_rgba(0,42,143,0.55)]">
              <Target className="w-7 h-7 sm:w-8 h-8 text-[#FEA900] shrink-0" />
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-blue-200/70 font-semibold mb-0.5">
                  LEY ESTRATÉGICA 80 / 20
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-none">
                  Principio de Pareto
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Micro nota de ingeniería de producto */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center gap-3 pt-2 text-xs text-white/60 font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEA900]"></span>
            </span>
            <span>Relación de asimetría operativa · Distribución proporcional continua</span>
          </motion.div>

        </div>

        {/* ========================================================
            BLOQUE DERECHO: GRÁFICA TUG-OF-WAR (LOOP INFINITO VIVO)
           ======================================================== */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            className="w-full max-w-xl"
          >
            {/* Contenedor Glass Neomórfico (Acorde a DESIGN.md) */}
            <div className="relative rounded-3xl bg-[#080B1A]/80 backdrop-blur-2xl border border-white/10 p-7 sm:p-9 shadow-[0_30px_80px_rgba(0,0,0,0.65)] overflow-hidden">
              
              {/* Luz interior difusa */}
              <div 
                aria-hidden
                className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-b from-[#FEA900]/15 to-transparent rounded-full blur-3xl pointer-events-none"
              />

              {/* Header técnico sobrio y ejecutivo */}
              <div className="flex items-center justify-between pb-5 mb-7 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-[#FEA900]" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white uppercase font-display">
                    La regla del 80/20
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.08] text-[11px] font-mono text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FEA900]" />
                  <span>RATIO 80:20</span>
                </div>
              </div>

              {/* Subheader de balance */}
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3 flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Zap className="w-3.5 h-3.5" />
                  20% Insumos Críticos
                </span>
                <span className="text-blue-300 flex items-center gap-1.5">
                  80% Consecuencias
                  <Flame className="w-3.5 h-3.5 text-blue-400" />
                </span>
              </div>

              {/* RIEL DE BATALLA DINÁMICO (Animación continua tipo loop) */}
              <div className="mb-8">
                <div className="h-24 w-full rounded-2xl p-1.5 bg-black/60 border border-white/15 flex relative overflow-hidden shadow-inner">
                  
                  {/* BARRA 20% (Input en respiración elástica suave) */}
                  <motion.div
                    animate={{ width: `${ratio20}%` }}
                    transition={{ duration: 2.4, ease: [0.4, 0.0, 0.2, 1] }}
                    className="relative h-full rounded-xl bg-gradient-to-r from-amber-400 via-[#FEA900] to-orange-500 p-3.5 flex flex-col justify-between overflow-hidden shadow-[0_0_25px_rgba(254,169,0,0.35)] border border-amber-200/50"
                  >
                    {/* Efecto de brillo viajero interno calmado */}
                    <div 
                      aria-hidden 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3.5s_infinite]"
                    />
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-black uppercase text-black font-mono tracking-tight">
                        INPUT
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-black leading-none z-10 flex items-baseline gap-1">
                      <span>{ratio20}</span>
                      <span className="text-xs font-bold">%</span>
                    </div>
                  </motion.div>

                  {/* ZONA DE CONTACTO / LÍNEA DIVISORIA PULSANTE SUTIL */}
                  <motion.div 
                    animate={{ 
                      scaleY: clashState !== "neutral" ? [1, 1.08, 1] : 1,
                      opacity: clashState !== "neutral" ? 0.9 : 0.5
                    }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className="relative z-20 -mx-1 w-2 h-full flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-1 h-full bg-white/90 rounded-full shadow-[0_0_12px_#ffffff,0_0_20px_#FEA900]" />
                  </motion.div>

                  {/* BARRA 80% (Output en flujo continuo armónico) */}
                  <motion.div
                    animate={{ width: `${ratio80}%` }}
                    transition={{ duration: 2.4, ease: [0.4, 0.0, 0.2, 1] }}
                    className="relative h-full rounded-xl bg-gradient-to-r from-[#002A8F] via-[#1E40AF] to-[#0A1A4A] p-3.5 flex flex-col justify-between overflow-hidden shadow-[0_0_28px_rgba(0,42,143,0.4)] border border-blue-400/40"
                  >
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-semibold text-blue-200 font-mono uppercase tracking-wider">
                        OUTPUT IMPACT
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-white leading-none z-10 flex items-baseline gap-1">
                      <span>{ratio80}</span>
                      <span className="text-xs font-bold text-blue-300">%</span>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* TARJETAS COMPLEMENTARIAS SINCRONIZADAS CON EL LOOP */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Micro Tarjeta 20: Insumos */}
                <motion.div 
                  animate={{ 
                    scale: clashState === "push20" ? 1.03 : 1,
                    borderColor: clashState === "push20" ? "rgba(254, 169, 0, 0.8)" : "rgba(255, 255, 255, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl bg-white/[0.03] border backdrop-blur-md transition-all shadow-lg"
                >
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-[#FEA900]">
                      20%
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/20">
                      Causas Raíz
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Fallas de Entrada
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">
                    Muestra & métricas en diseño inicial
                  </div>
                </motion.div>

                {/* Micro Tarjeta 80: Fricción & Retraso */}
                <motion.div 
                  animate={{ 
                    scale: clashState === "push80" ? 1.03 : 1,
                    borderColor: clashState === "push80" ? "rgba(59, 130, 246, 0.8)" : "rgba(255, 255, 255, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl bg-white/[0.03] border backdrop-blur-md transition-all shadow-lg"
                >
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-blue-300">
                      80%
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/20">
                      Efecto Sistémico
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Fricción y Retraso
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">
                    61% retrabajo y ciclo de 57 días
                  </div>
                </motion.div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Transición inferior suave hacia la siguiente sección */}
      <div 
        aria-hidden 
        className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#080B1A] to-transparent pointer-events-none"
      />
    </section>
  );
};
