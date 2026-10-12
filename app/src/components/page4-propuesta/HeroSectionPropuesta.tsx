"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  FileSpreadsheet,
  GitPullRequest,
  Activity,
  Database
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const HeroSectionPropuesta: React.FC<{ onExploreCanvas?: () => void }> = ({ onExploreCanvas }) => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#080B1A] text-white">
      
      {/* Halos de Fondo CIX */}
      <div 
        aria-hidden 
        className="absolute top-1/4 -left-20 w-[600px] h-[400px] bg-[#002A8F]/25 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 right-0 w-[550px] h-[380px] bg-[#FEA900]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Badges de Navegación & Posicionamiento */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/30 text-xs font-mono uppercase tracking-wider text-amber-300 mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>04. LA PROPUESTA · PLAN DE TRANSFORMACIÓN OPERATIVA TO-BE</span>
          </motion.div>

          {/* Título Monumental */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl md:text-7xl font-black font-display text-white tracking-tight leading-[1.08] max-w-5xl"
          >
            El Motor To-Be de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              Product Operations
            </span>{" "}
            para NovaLab BCP
          </motion.h1>

          {/* Bajada Narrativa */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl font-sans leading-relaxed"
          >
            De un taller artesanal en cascada (57 días de ciclo y 61% de retrabajo) a una <strong className="text-white">fábrica digital de experimentación a escala</strong>. Una solución modular con valor tangible desde el primer mes, sin requerir presupuesto de software nuevo.
          </motion.p>

          {/* 4 BOTONES DE ACCESO DIRECTO A LOS PROTOTIPOS MVP (1-4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="mt-10 w-full max-w-5xl"
          >
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FEA900] mb-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FEA900] animate-pulse" />
              <span>PROTOTIPOS INTERACTIVOS EN VIVO · SELECCIONA UN MVP:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              
              {/* MVP 01 Button */}
              <a
                href="/mvp/mvp01.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-gradient-to-b from-[#0F1738] to-[#0A0E24] border border-emerald-500/30 hover:border-emerald-400/80 transition-all shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                    MVP 01
                  </span>
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white font-display group-hover:text-emerald-300 transition-colors">
                    Smart Canvas
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                    Intake inteligente & MDE
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                  <span>Abrir Prototipo</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* MVP 02 Button */}
              <a
                href="/mvp/mvp02.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-gradient-to-b from-[#0F1738] to-[#0A0E24] border border-amber-500/30 hover:border-amber-400/80 transition-all shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">
                    MVP 02
                  </span>
                  <GitPullRequest className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white font-display group-hover:text-amber-300 transition-colors">
                    Smart Routing
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                    Fast-Track & 3 Carriles
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-amber-400">
                  <span>Abrir Prototipo</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* MVP 03 Button */}
              <a
                href="/mvp/mvp03.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-gradient-to-b from-[#0F1738] to-[#0A0E24] border border-indigo-500/30 hover:border-indigo-400/80 transition-all shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold">
                    MVP 03
                  </span>
                  <Activity className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white font-display group-hover:text-indigo-300 transition-colors">
                    Telemetría & Safe
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                    Kill-Switch & Guardrails
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-indigo-300">
                  <span>Abrir Prototipo</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* MVP 04 Button */}
              <a
                href="/mvp/mvp04.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-gradient-to-b from-[#0F1738] to-[#0A0E24] border border-[#FEA900]/40 hover:border-[#FEA900] transition-all shadow-lg hover:shadow-[#FEA900]/25 hover:-translate-y-0.5 text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FEA900]/20 text-amber-300 font-mono text-[10px] font-bold">
                    MVP 04
                  </span>
                  <Database className="w-4 h-4 text-[#FEA900] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white font-display group-hover:text-amber-300 transition-colors">
                    Knowledge AI
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                    RAG Brain & Gating
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-amber-300">
                  <span>Abrir Prototipo</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

            </div>
          </motion.div>
        </div>

        {/* Visual Showcase 3D + HUD de Metas Proyectadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="relative mb-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Hero Image 3D - Integrada orgánicamente sin marco tosco */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              {/* Resplandor ambiental trasero */}
              <div 
                aria-hidden 
                className="absolute inset-0 bg-gradient-to-tr from-[#002A8F]/30 via-[#FEA900]/15 to-transparent blur-3xl rounded-full transform scale-90 pointer-events-none"
              />

              <div className="relative w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
                <img 
                  src="/assets/proposal-suite-hero.png" 
                  alt="Product Operations Control Suite 3D Visualization" 
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                />

                {/* Velo degradado que funde los bordes con el fondo de la página */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B1A] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080B1A]/80 via-transparent to-[#080B1A]/80 pointer-events-none" />
              </div>

              {/* Tag flotante translúcido sin caja dura */}
              <div className="absolute bottom-2 left-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 font-mono text-[11px] text-amber-300 flex items-center gap-2">
                <Rocket className="w-3.5 h-3.5 text-[#FEA900]" />
                <span>NovaLab Ops Command Suite · Arquitectura To-Be</span>
              </div>
            </div>

            {/* Cuadrícula de KPIs Proyectados 2025 */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              
              <div className="border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#FEA900] block mb-1">
                  IMPACTO CUANTIFICADO DEL CASO
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Metas Comprometidas al Final del Despliegue
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3.5 font-mono">
                
                {/* Meta 1: Throughput */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Throughput Anual</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-400">
                    65+ <span className="text-xs font-normal text-slate-400">exp/año</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    +47% vs los 44 de 2024
                  </div>
                </div>

                {/* Meta 2: Cycle Time */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#FEA900]" />
                    <span>Aprobación (Green)</span>
                  </div>
                  <div className="text-2xl font-black text-amber-400">
                    &lt; 24h
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    -95% vs los 20 días por mail
                  </div>
                </div>

                {/* Meta 3: Retrabajo */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Tasa de Retrabajo</span>
                  </div>
                  <div className="text-2xl font-black text-blue-400">
                    &lt; 10%
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    Erradica el 61% de rebote
                  </div>
                </div>

                {/* Meta 4: Documentación */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Documentación</span>
                  </div>
                  <div className="text-2xl font-black text-purple-300">
                    100%
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    Forzada por Gating Rule
                  </div>
                </div>

              </div>

              {/* Botón de Acción Rápida */}
              <button
                type="button"
                onClick={onExploreCanvas}
                className="mt-2 w-full py-4 rounded-2xl bg-[#002A8F] hover:bg-[#002A8F]/80 text-white font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 border border-[#3B49DF]/50 transition-all cursor-pointer group shadow-lg"
              >
                <span>Explorar la Solución Módulo por Módulo</span>
                <ArrowRight className="w-4 h-4 text-[#FEA900] group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
