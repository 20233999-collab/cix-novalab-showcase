"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Quote, 
  GitFork, 
  AlertTriangle, 
  Clock, 
  TrendingDown, 
  FileX, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface ParetoRecapMatrixSectionProps {
  onNavigateToNextPage?: () => void;
}

export const ParetoRecapMatrixSection: React.FC<ParetoRecapMatrixSectionProps> = ({ 
  onNavigateToNextPage 
}) => {
  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#080B1A] overflow-hidden text-center flex flex-col items-center justify-center">
      
      {/* Halo ambiental sutil Clementine Gold sin bordes duros */}
      <div 
        aria-hidden 
        className="absolute w-[650px] h-[320px] bg-[#FEA900]/10 blur-3xl rounded-full pointer-events-none transform-gpu top-1/4 -translate-y-1/2"
      />

      {/* ========================================================
          1. TÍTULO PRINCIPAL: CONCLUSIONES DEL DIAGNÓSTICO
         ======================================================== */}
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/25 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA900]" />
          <span>Cierre de Auditoría · 01. DATOS</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4"
        >
          Conclusiones:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-amber-400">
            La Anatomía del Problema
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans"
        >
          Síntesis ejecutiva de la investigación forense realizada sobre los 44 experimentos de NovaLab.
        </motion.p>
      </div>

      {/* ========================================================
          2. RECAP: MATRIZ DE PRIORIZACIÓN PARETO (80/20)
         ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="w-full max-w-5xl rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-6 sm:p-10 backdrop-blur-2xl text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)] mb-16"
      >
        
        {/* Encabezado del Recapitulator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#FEA900] font-bold block">
              Recapitulación Estratégica
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Matriz de Priorización Pareto (Regla del 80/20)
            </h4>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono">
            <span>Guía Diagnóstica Oficial NovaLab BCP</span>
          </div>
        </div>

        {/* Diagrama Arquitectónico de Flujo: 20% Palanca vs 80% Fricción */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 items-stretch">
          
          {/* Tarjeta Izquierda: EL 20% PALANCA PARETO */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#FEA900]/15 via-amber-950/20 to-black/40 border border-[#FEA900]/40 p-6 flex flex-col justify-between shadow-[0_0_35px_rgba(254,169,0,0.15)]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-lg bg-[#FEA900] text-black font-mono font-black text-xs uppercase tracking-wider">
                  20% PALANCA PARETO
                </span>
                <span className="text-[11px] font-mono text-amber-300/80">Etapas 1 y 2</span>
              </div>
              <h5 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                Entrada Defectuosa y Falta de Estandarización
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                El 80% de los expedientes enviados a revisión contenían errores conceptuales, estadísticos o normativos básicos por falta de un <strong className="text-amber-200">Experiment Canvas</strong> mandatorio.
              </p>
            </div>

            <div className="pt-4 border-t border-[#FEA900]/20 flex items-center justify-between text-xs font-mono text-amber-300">
              <span className="flex items-center gap-1.5 font-bold">
                <GitFork className="w-4 h-4 text-[#FEA900]" />
                Causa Raíz de Fondo
              </span>
              <span className="text-[11px] text-slate-400">Garbage In, Garbage Out</span>
            </div>
          </div>

          {/* Conector Central Visual (Flecha en desktop) */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase rotate-90 tracking-widest">
                GENERA
              </span>
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-400">
                <ArrowRight className="w-4 h-4 text-[#FEA900]" />
              </div>
            </div>
          </div>

          {/* Tarjeta Derecha: EL 80% DE FRICCIÓN SISTÉMICA (4 IMPACTOS) */}
          <div className="lg:col-span-6 rounded-2xl bg-black/40 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 font-mono font-bold text-xs uppercase tracking-wider">
                  80% DE FRICCIÓN SISTÉMICA
                </span>
                <span className="text-[11px] font-mono text-slate-400">Impactos Observados</span>
              </div>

              {/* Lista de los 4 hallazgos de fricción */}
              <div className="space-y-3">
                
                {/* Impacto 1 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      61% de Experimentos Observados (27 de 44)
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      41 observaciones acumuladas por falta de muestra y métricas.
                    </span>
                  </div>
                </div>

                {/* Impacto 2 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                  <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      +150% de Penalización de Tiempo (20 vs 8 días)
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Cycle time disparado de 38 a 57 días hábiles (+50% anual).
                    </span>
                  </div>
                </div>

                {/* Impacto 3 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                  <TrendingDown className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Caída de Conclusividad Científica (64% a 50%)
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Experimentos que no permiten tomar decisiones certeras de negocio.
                    </span>
                  </div>
                </div>

                {/* Impacto 4 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                  <FileX className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Amnesia Organizacional y Duplicidad
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Documentación cayó de 50% a 25%; repetición de experimentos fallidos.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </motion.div>

      {/* ========================================================
          3. FRASE CÉLEBRE: W. EDWARDS DEMING
         ======================================================== */}
      <div className="max-w-3xl mx-auto flex flex-col items-center mb-14">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="w-12 h-12 rounded-2xl bg-[#FEA900]/15 border border-[#FEA900]/30 flex items-center justify-center text-[#FEA900] mb-5 shadow-[0_0_25px_rgba(254,169,0,0.2)]"
        >
          <Quote className="w-5 h-5" />
        </motion.div>

        <motion.h4
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white leading-snug tracking-tight mb-4"
        >
          "No intentamos resolver los problemas donde se manifiestan,{" "}
          <span className="text-[#FEA900]">
            sino donde se originan.
          </span>"
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-widest"
        >
          — W. Edwards Deming · <span className="text-slate-300">Padre de la Calidad Total</span>
        </motion.p>
      </div>

      {/* ========================================================
          4. CTA AL "¿POR QUÉ?" (BOTÓN DE TRANSICIÓN FINAL)
         ======================================================== */}
      {onNavigateToNextPage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="flex flex-col items-center gap-4"
        >
          <button
            type="button"
            onClick={onNavigateToNextPage}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#002A8F] via-[#3B49DF] to-[#253096] hover:from-[#0034b3] hover:to-[#313ec2] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_10px_35px_rgba(59,73,223,0.35)] hover:shadow-[0_15px_45px_rgba(59,73,223,0.5)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0.5 border border-blue-400/30"
          >
            <span>ENTENDER LA CAUSA RAÍZ EN PROFUNDIDAD</span>
            <span className="px-2.5 py-0.5 rounded-lg bg-white/15 text-xs font-mono font-semibold">
              02. ¿POR QUÉ?
            </span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </button>

          <span className="text-xs font-mono text-slate-500">
            Descubre los 5 Porqués, el Value Stream Map y los Silos de NovaLab
          </span>
        </motion.div>
      )}

    </section>
  );
};
