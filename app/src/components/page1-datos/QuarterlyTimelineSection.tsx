"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Layers, 
  Microscope, 
  AlertOctagon, 
  CheckCircle2, 
  XCircle,
  FolderLock,
  ClockAlert,
  CopyX,
  TrendingDown
} from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { QUARTERLY_DATA, LABS_DATA } from "../../data/novalabData";

const EASE = [0.16, 1, 0.3, 1] as const;

export const QuarterlyTimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"documentacion" | "laboratorios" | "calidad">("documentacion");

  return (
    <section 
      id="scrolly-quarterly" 
      className="relative w-full py-32 px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-br from-[#080B1A] via-[#101735] to-[#1e0e03] animate-fluid-gradient text-white"
    >
      {/* Retícula técnica sutil (DESIGN.md) */}
      <div 
        aria-hidden 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"
      />

      {/* Transición suave superior en degradado desde Pareto */}
      <div 
        aria-hidden 
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#080B1A] via-[#080B1A]/80 to-transparent pointer-events-none"
      />

      {/* Halos difusos atmosféricos Optimizados para GPU */}
      <div 
        aria-hidden 
        className="absolute -top-20 left-1/4 w-[450px] h-[450px] bg-[#002A8F]/20 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FEA900]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ========================================================
            HEADER PRINCIPAL: MÁXIMO IMPACTO VISUAL + PALABRAS CLAVE
           ======================================================== */}
        <div className="max-w-4xl mb-12">
          
          {/* Eyebrow de Auditoría */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md mb-4 shadow-sm"
          >
            <AlertOctagon className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-red-300 uppercase font-semibold">
              PROBLEMA PRIORITARIO 03 // AUDITORÍA OPERATIVA
            </span>
          </motion.div>

          {/* Titular Principal con Entrada Escalonada */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white mb-6 uppercase"
          >
            Amnesia Institucional y Fuga de Aprendizajes
          </motion.h2>

          {/* 3 CHIPS VISUALES CON ANIMACIÓN DE ENTRADA Y MICRO-HOVER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-shadow hover:shadow-[0_0_20px_rgba(254,169,0,0.15)]"
            >
              <ClockAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Etapa 7: Opcional</span>
                <span className="text-slate-400 font-mono text-[11px]">Sin SLAs ni medición de tiempo</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <FolderLock className="w-4 h-4 text-blue-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Carpetas Locales</span>
                <span className="text-slate-400 font-mono text-[11px]">Conocimiento disperso en silos</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-shadow hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
            >
              <CopyX className="w-4 h-4 text-red-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Duplicación de Fallas</span>
                <span className="text-slate-400 font-mono text-[11px]">Se repiten pruebas fallidas</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ========================================================
            CUADRO UI GLASSMORPHISM DE ALTO IMPACTO
           ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative rounded-3xl bg-[#080B1A]/80 backdrop-blur-3xl border border-white/10 p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          
          {/* CONTROL DE PESTAÑAS (INTERACTIVAS CON FRAMER MOTION) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
            
            <div className="bg-black/60 border border-white/10 p-1.5 rounded-2xl flex flex-wrap sm:flex-nowrap gap-1 w-full sm:w-auto shadow-inner">
              
              {/* TAB 1 */}
              <button
                type="button"
                onClick={() => setActiveTab("documentacion")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "documentacion"
                    ? "bg-[#002A8F] text-white shadow-[0_0_25px_rgba(0,42,143,0.6)] border border-blue-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <FileText className="w-4 h-4 text-[#FEA900]" />
                <span>1. Colapso de Documentación</span>
              </button>

              {/* TAB 2 */}
              <button
                type="button"
                onClick={() => setActiveTab("laboratorios")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "laboratorios"
                    ? "bg-[#002A8F] text-white shadow-[0_0_25px_rgba(0,42,143,0.6)] border border-blue-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Layers className="w-4 h-4 text-[#FEA900]" />
                <span>2. Desglose por Laboratorio</span>
              </button>

              {/* TAB 3 */}
              <button
                type="button"
                onClick={() => setActiveTab("calidad")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "calidad"
                    ? "bg-[#002A8F] text-white shadow-[0_0_25px_rgba(0,42,143,0.6)] border border-blue-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Microscope className="w-4 h-4 text-[#FEA900]" />
                <span>3. Caída en Calidad Científica</span>
              </button>

            </div>

            {/* Chip de Telemetría Global con Pulso Vivo */}
            <div className="flex items-center gap-2 self-start sm:self-center font-mono text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEA900]"></span>
              </span>
              <span>44 EXPERIMENTOS AUDITADOS</span>
            </div>

          </div>

          {/* CONTENIDO INTERACTIVO DINÁMICO */}
          <AnimatePresence mode="wait">
            
            {/* ========================================================
                VISTA 1: COLAPSO SISTEMÁTICO DE LA DOCUMENTACIÓN
               ======================================================== */}
            {activeTab === "documentacion" && (
              <motion.div
                key="tab-documentacion"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Columna Izquierda: Tarjetas Visuales de Impacto */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* Tarjeta Hero T4 con Resplandor en Loop */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-red-500/15 via-black/40 to-black/60 border border-red-500/40 backdrop-blur-md relative overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.15)] group"
                  >
                    {/* Shimmer Loop sutil */}
                    <div 
                      aria-hidden 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"
                    />

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                        CIERRE DE AÑO (T4)
                      </span>
                      <motion.div
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Badge variant="destructive" className="bg-red-500/20 text-red-300 border-red-500/40">
                          CRÍTICO
                        </Badge>
                      </motion.div>
                    </div>

                    <div className="flex items-baseline gap-2 my-2">
                      {/* Número con animación viva de pulso continuo */}
                      <motion.span 
                        animate={{ opacity: [0.92, 1, 0.92] }}
                        transition={{ duration: 2.8, repeat: Infinity }}
                        className="text-6xl font-mono font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      >
                        25%
                      </motion.span>
                      <span className="text-sm font-mono text-red-300 font-bold">(2 de 8 doc.)</span>
                    </div>

                    <p className="text-xs font-mono text-slate-300">
                      <strong className="text-white">3 de cada 4 experimentos</strong> terminaron en el olvido en T4.
                    </p>
                  </motion.div>

                  {/* Tarjeta Promedio Anual */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                        BALANCE ANUAL 2024
                      </span>
                      <span className="text-xs font-mono text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20">
                        17 / 44 EXP
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 my-1">
                      <motion.span 
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-4xl font-mono font-black text-amber-300 drop-shadow-[0_0_15px_rgba(254,169,0,0.3)]"
                      >
                        39%
                      </motion.span>
                      <span className="text-xs font-mono text-slate-400 uppercase">Promedio Anual</span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/[0.08] flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-400">Pérdida en Amnesia:</span>
                      <span className="text-red-400 font-bold">61% (27 exp sin datos)</span>
                    </div>
                  </motion.div>

                </div>

                {/* Columna Derecha: Gráfico Trimestral Visual T1 a T4 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                  className="lg:col-span-7 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono font-semibold text-slate-300 uppercase flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-red-400 animate-bounce" />
                      Evolución Trimestral de Documentación (T1 → T4)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Tasa de Éxito
                    </span>
                  </div>

                  <div className="space-y-4">
                    {QUARTERLY_DATA.map((q, idx) => {
                      const isCritical = q.quarter === "T4";
                      return (
                        <div key={q.quarter} className="space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-white flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200">
                                {q.quarter}
                              </span>
                              <span>{q.periodLabel}</span>
                            </span>
                            <span className={isCritical ? "text-red-400 font-bold" : "text-amber-300 font-bold"}>
                              {q.documentedCount} / {q.launched} exp ({q.documentedPct}%)
                            </span>
                          </div>
                          
                          {/* Barra de Progreso con Animación de Entrada Escalonada y Shimmer en Loop */}
                          <div className="h-4 w-full rounded-full bg-white/10 p-0.5 relative overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${q.documentedPct}%` }}
                              transition={{ duration: 1.1, delay: 0.15 * idx, ease: EASE }}
                              className={`h-full rounded-full relative overflow-hidden ${
                                isCritical 
                                  ? "bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_20px_rgba(239,68,68,0.6)]" 
                                  : "bg-gradient-to-r from-[#002A8F] via-[#3B49DF] to-[#FEA900]"
                              }`}
                            >
                              {/* Shimmer viajero continuo en la barra crítica de T4 */}
                              {isCritical && (
                                <div 
                                  aria-hidden 
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
                                />
                              )}
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <motion.div 
                    animate={{ borderColor: ["rgba(239,68,68,0.2)", "rgba(239,68,68,0.5)", "rgba(239,68,68,0.2)"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="p-3.5 rounded-xl bg-red-500/10 border text-xs font-mono text-red-200 flex items-center justify-between"
                  >
                    <span>Desplome de Documentación:</span>
                    <span className="font-bold text-white">-50% de caída de T1 (50%) a T4 (25%)</span>
                  </motion.div>
                </motion.div>

              </motion.div>
            )}

            {/* ========================================================
                VISTA 2: DESGLOSE POR LABORATORIO (LA BRECHA DE PAGOS)
               ======================================================== */}
            {activeTab === "laboratorios" && (
              <motion.div
                key="tab-laboratorios"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="space-y-6"
              >
                {/* 4 Cards de Laboratorios en Grid con Entrada Escalonada */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {LABS_DATA.map((lab, idx) => {
                    const isBench = lab.id === "pagos";
                    return (
                      <motion.div
                        key={lab.id}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * idx, ease: EASE }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      >
                        <Card
                          className={`p-5 rounded-2xl border transition-all h-full flex flex-col justify-between ${
                            isBench
                              ? "bg-emerald-500/10 border-emerald-400/50 shadow-[0_0_35px_rgba(16,185,129,0.25)] relative overflow-hidden"
                              : "bg-white/[0.03] border-white/10"
                          }`}
                        >
                          {/* Shimmer Loop en el Benchmark de Pagos */}
                          {isBench && (
                            <div 
                              aria-hidden 
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -translate-x-full animate-[shimmer_3.5s_infinite] pointer-events-none"
                            />
                          )}

                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[11px] font-mono uppercase text-slate-400">
                                {lab.name}
                              </span>
                              {isBench ? (
                                <motion.div
                                  animate={{ scale: [1, 1.05, 1] }}
                                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-[10px]">
                                    BENCHMARK
                                  </Badge>
                                </motion.div>
                              ) : (
                                <Badge variant="outline" className="text-red-400 border-red-500/20 bg-red-500/10 text-[10px]">
                                  SILO
                                </Badge>
                              )}
                            </div>

                            {/* Métrica destacada con animación viva */}
                            <div className="my-2">
                              <div className="text-4xl font-mono font-black text-white">
                                <motion.span 
                                  animate={isBench ? { opacity: [0.9, 1, 0.9] } : {}}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className={isBench ? "text-emerald-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]" : "text-amber-300"}
                                >
                                  {lab.documentedPct}%
                                </motion.span>
                              </div>
                              <span className="text-[11px] font-mono text-slate-400 block mt-1">
                                {lab.documentedCount} de {lab.launched} documentados
                              </span>
                            </div>

                            {/* Barra animada */}
                            <div className="mt-4 mb-3">
                              <Progress 
                                value={lab.documentedPct} 
                                className={`h-2.5 ${isBench ? "bg-emerald-950" : "bg-white/10"}`} 
                              />
                            </div>
                          </div>

                          <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-slate-300">
                            {isBench ? (
                              <span className="text-emerald-300 font-semibold">Plantilla preventiva activa</span>
                            ) : (
                              <span className="text-slate-400">Sin repositorio transversal</span>
                            )}
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Resumen Comparativo Visual */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
                  className="p-6 rounded-2xl bg-black/50 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-xl"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">BRECHA CULTURAL</span>
                    <h4 className="text-lg font-bold text-white font-display">
                      Pagos vs El Resto de Laboratorios
                    </h4>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-center relative overflow-hidden">
                    <span className="text-xs font-mono text-emerald-300 block">PAGOS (BENCHMARK)</span>
                    <span className="text-2xl font-mono font-black text-white">71% Documentado</span>
                  </div>

                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                    <span className="text-xs font-mono text-red-300 block">PYMES, SEGUROS E INVERSIONES</span>
                    <span className="text-2xl font-mono font-black text-white">~23% Promedio</span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* ========================================================
                VISTA 3: CAÍDA EN LA CALIDAD CIENTÍFICA (CONCLUSIVIDAD)
               ======================================================== */}
            {activeTab === "calidad" && (
              <motion.div
                key="tab-calidad"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Columna Izquierda: El Desperdicio de 43% con Pulso en Loop */}
                <div className="lg:col-span-5 space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-red-500/20 via-black/50 to-black/70 border border-red-500/40 backdrop-blur-md shadow-[0_0_40px_rgba(239,68,68,0.18)] relative overflow-hidden"
                  >
                    {/* Shimmer Loop continuo */}
                    <div 
                      aria-hidden 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"
                    />

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                        IMPACTO ANUAL // RIGOR ESTADÍSTICO
                      </span>
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Badge variant="destructive" className="bg-red-500/20 text-red-300 border-red-500/40">
                          DESPERDICIO
                        </Badge>
                      </motion.div>
                    </div>

                    <div className="flex items-baseline gap-2 my-2">
                      <motion.span 
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                        className="text-6xl font-mono font-black text-red-400 drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]"
                      >
                        43%
                      </motion.span>
                      <span className="text-sm font-mono text-white font-bold">INCONCLUSOS</span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 my-3 text-xs font-mono text-slate-300 space-y-1">
                      <div className="flex justify-between">
                        <span>Total Inconclusos:</span>
                        <strong className="text-red-400">19 de 44 experimentos</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Costo Operativo:</span>
                        <strong className="text-white">~2 meses de trabajo por prueba</strong>
                      </div>
                    </div>

                    <p className="text-xs text-red-200/90 font-mono">
                      Se consumieron semanas de ingeniería sin generar datos útiles para tomar decisiones de negocio.
                    </p>
                  </motion.div>
                </div>

                {/* Columna Derecha: Gráfico de Conclusividad T1 a T4 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                  className="lg:col-span-7 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-5 shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono font-semibold text-slate-300 uppercase">
                      Experimentos Concluyentes por Trimestre (T1 → T4)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Válidos / Lanzados
                    </span>
                  </div>

                  <div className="space-y-4">
                    {QUARTERLY_DATA.map((q, idx) => {
                      const isLow = q.conclusivePct <= 50;
                      return (
                        <div key={q.quarter} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-white flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200">
                                {q.quarter}
                              </span>
                              <span>{q.periodLabel}</span>
                            </span>
                            <span className={isLow ? "text-amber-300 font-bold" : "text-emerald-400 font-bold"}>
                              {q.conclusiveCount} / {q.launched} válidos ({q.conclusivePct}%)
                            </span>
                          </div>
                          
                          {/* Barra Animada con entrada escalonada */}
                          <div className="h-3.5 w-full rounded-full bg-white/10 overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${q.conclusivePct}%` }}
                              transition={{ duration: 1.1, delay: 0.15 * idx, ease: EASE }}
                              className={`h-full rounded-full ${
                                isLow
                                  ? "bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                                  : "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Resumen Anual 57% vs 43% con micro-interacciones */}
                  <div className="pt-3 border-t border-white/[0.08] grid grid-cols-2 gap-3 text-xs font-mono">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>57% Concluyentes (25 exp)</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 flex items-center gap-2"
                    >
                      <XCircle className="w-4 h-4 shrink-0" />
                      <span>43% Inconclusos (19 exp)</span>
                    </motion.div>
                  </div>
                </motion.div>

              </motion.div>
            )}

          </AnimatePresence>

        </motion.div>

      </div>

      {/* Transición inferior suave */}
      <div 
        aria-hidden 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080B1A] to-transparent pointer-events-none"
      />
    </section>
  );
};
