"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Zap, Building2 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const HeroSectionBenchmarks: React.FC = () => {
  const benchmarksList = [
    { name: "CAPITAL ONE", hub: "USA · Cloud Bank", badge: "Compliance-as-Code", color: "from-blue-500/20 to-transparent", border: "border-blue-400/30", text: "text-blue-300" },
    { name: "BBVA", hub: "España · ADA Platform", badge: "Fast-Track Triage", color: "from-emerald-500/20 to-transparent", border: "border-emerald-400/30", text: "text-emerald-300" },
    { name: "NUBANK", hub: "Brasil / Latam", badge: "Product Ops Golden Path", color: "from-[#FEA900]/20 to-transparent", border: "border-amber-400/30", text: "text-amber-300" },
    { name: "DBS BANK", hub: "Singapur · GANDALF", badge: "2-in-a-Box Leadership", color: "from-red-500/20 to-transparent", border: "border-red-400/30", text: "text-red-300" },
    { name: "SPOTIFY", hub: "Suecia · Confidence", badge: "Salt Machine & Guardrails", color: "from-[#3B49DF]/20 to-transparent", border: "border-[#3B49DF]/30", text: "text-blue-200" },
    { name: "AIRBNB", hub: "USA · Knowledge Repo", badge: "Research as Code & Gating", color: "from-[#FEA900]/20 to-transparent", border: "border-amber-400/30", text: "text-amber-200" },
  ];

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#080B1A] text-white">
      
      {/* Retícula técnica de fondo con gradiente radial */}
      <div 
        aria-hidden 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"
      />

      {/* Halos ambientales profundos */}
      <div 
        aria-hidden 
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#002A8F]/25 via-[#FEA900]/15 to-transparent blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        
        {/* Eyebrow de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002A8F]/25 border border-[#3B49DF]/40 text-xs font-mono uppercase tracking-wider text-blue-200 mb-6 shadow-[0_0_20px_rgba(0,42,143,0.3)]"
        >
          <Globe2 className="w-4 h-4 text-[#FEA900] animate-spin" style={{ animationDuration: "12s" }} />
          <span>03. BENCHMARKS GLOBALES · MODELOS DE ALTA ESCALA</span>
        </motion.div>

        {/* Titular Principal Cinemático */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white tracking-tight leading-[1.08] mb-6 uppercase"
        >
          Cómo lo Resuelven{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
            Los Líderes
          </span>
        </motion.h1>

        {/* Subtítulo Descriptivo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="text-base sm:text-lg md:text-xl text-slate-300 font-sans max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Los problemas de aprobación, estandarización y amnesia que afectaron a NovaLab ya fueron superados por gigantes fintech y tecnológicos globales. La solución no exige heroísmos, sino <strong className="text-white">arquitectura de procesos, automatización normativa y Product Operations</strong>.
        </motion.p>

        {/* Visualización Isométrica de Alta Gama Generada (Integrada con degradados orgánicos) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className="relative max-w-4xl mx-auto mb-14 flex items-center justify-center overflow-visible"
        >
          {/* Resplandor orbital difuso de fondo */}
          <div 
            aria-hidden
            className="absolute -inset-10 bg-gradient-to-tr from-[#002A8F]/40 via-[#FEA900]/20 to-[#3B49DF]/30 blur-3xl rounded-full transform scale-95 pointer-events-none"
          />

          {/* Imagen con máscara radial y degradados de fundido */}
          <div className="relative w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_96%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_96%)]">
            {/* Haz de luz de escaneo en loop */}
            <motion.div 
              aria-hidden
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FEA900]/20 to-transparent pointer-events-none z-10"
            />

            <img 
              src="/assets/benchmark-radar-hero.png" 
              alt="Red Global de Experimentación Financiera" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
            />

            {/* Velos degradados de integración con el fondo #080B1A */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B1A] via-transparent to-transparent opacity-85 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080B1A]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080B1A]/90 via-transparent to-[#080B1A]/90 pointer-events-none" />
          </div>

          <div className="absolute bottom-4 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 z-20 shadow-xl">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FEA900] animate-pulse" />
              <span>TOPOLOGÍA DE ALTA ESCALA · 6 HUBS INTERNACIONALES</span>
            </span>
            <span className="text-[#FEA900] font-bold ml-4">BCBS 239 COMPLIANT</span>
          </div>
        </motion.div>

        {/* HUD Chips de Telemetría Global */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16 text-xs font-mono"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>6 CASOS DE ÉXITO AUDITADOS</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 backdrop-blur-md font-bold">
            <Zap className="w-3.5 h-3.5" />
            <span>ZERO BUREAUCRACY ESCALABLE</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-300 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>BCBS 239 & POLICIES-AS-CODE</span>
          </div>
        </motion.div>

        {/* Carrusel / Grid de los 6 Gigantes con Radar y Nodos */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-left"
        >
          {benchmarksList.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-gradient-to-b ${item.color} border ${item.border} backdrop-blur-xl flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300 group`}
            >
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider mb-1">
                  {item.hub}
                </span>
                <h3 className="text-sm font-black font-display text-white group-hover:text-[#FEA900] transition-colors mb-2">
                  {item.name}
                </h3>
              </div>
              <div>
                <span className={`text-[10px] font-mono font-bold ${item.text} bg-black/40 px-2 py-0.5 rounded border border-white/10 block text-center truncate`}>
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
};
