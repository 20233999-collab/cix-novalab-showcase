"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, 
  PieChart, 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight
} from "lucide-react";
import { Badge } from "../ui/badge";
import { LABS_DATA } from "../../data/novalabData";

const EASE = [0.16, 1, 0.3, 1] as const;

export const DefectiveInputParetoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"observaciones" | "causas" | "disparidad">("observaciones");

  // Las 4 causas anatómicas auditadas
  const rejectCauses = [
    { label: "Muestra o Segmento no Definido", count: 14, pct: 34, desc: "Sin cálculo de MDE ni criterios de inclusión/exclusión", color: "from-[#FEA900] to-[#E65100]" },
    { label: "Métricas de Éxito Ausentes", count: 10, pct: 24, desc: "Imposible medir si la hipótesis se valida o refuta", color: "from-[#002A8F] to-[#3B49DF]" },
    { label: "Comunicación al Cliente sin Detalle", count: 9, pct: 22, desc: "Piezas gráficas o copys sin revisión previa", color: "from-amber-500 to-orange-500" },
    { label: "Tratamiento de Datos (PII) Omitido", count: 6, pct: 15, desc: "Falta de cláusulas de consentimiento normativo", color: "from-red-500 to-rose-600" },
    { label: "Otros Aspectos Técnicos", count: 2, pct: 5, desc: "Fricciones de integración o arquitectura", color: "from-slate-600 to-slate-500" },
  ];

  return (
    <section 
      id="pareto-root-cause" 
      className="relative w-full py-32 px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-br from-[#080B1A] via-[#150a00] to-[#0a0f29] animate-fluid-gradient text-white"
    >
      {/* Retícula técnica de fondo (DESIGN.md) */}
      <div 
        aria-hidden 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"
      />

      {/* Transición suave superior en degradado */}
      <div 
        aria-hidden 
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#080B1A] via-[#080B1A]/80 to-transparent pointer-events-none"
      />

      {/* Halos difusos atmosféricos optimizados en GPU (Clementine & Deep Navy) */}
      <div 
        aria-hidden 
        className="absolute -top-20 left-1/3 w-[450px] h-[450px] bg-[#FEA900]/20 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#002A8F]/25 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ========================================================
            HEADER PRINCIPAL: EL CLÍMAX // LA PALANCA PARETO
           ======================================================== */}
        <div className="max-w-4xl mb-12">
          
          {/* Eyebrow de Clímax Pareto */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md mb-4 shadow-sm"
          >
            <Target className="w-3.5 h-3.5 text-[#FEA900] animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-amber-300 uppercase font-bold">
              PROBLEMA PRIORITARIO 01 // LA PALANCA PARETO REVELADA
            </span>
          </motion.div>

          {/* Titular Principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white mb-6 uppercase"
          >
            Ausencia de Estandarización y Entrada Defectuosa
          </motion.h2>

          {/* 3 CHIPS VISUALES CON PALABRAS CLAVE - ESTILO FUTURISTA MINIMALISTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-400/25 text-amber-300 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#FEA900] animate-pulse" />
              <span>ETAPAS 01 & 02: INTAKE ARTESANAL</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-300 font-mono text-xs">
              <span>FORMATO LIBRE SIN GOBERNANZA</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 font-mono text-xs font-bold">
              <span>80% DÉFICIT EN ORIGEN</span>
            </div>
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
          className="relative rounded-3xl bg-[#080B1A]/85 backdrop-blur-3xl border border-white/10 p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          
          {/* CONTROL DE PESTAÑAS */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
            
            <div className="bg-black/60 border border-white/10 p-1.5 rounded-2xl flex flex-wrap sm:flex-nowrap gap-1 w-full sm:w-auto shadow-inner">
              
              {/* TAB 1 */}
              <button
                type="button"
                onClick={() => setActiveTab("observaciones")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "observaciones"
                    ? "bg-[#FEA900] text-black shadow-[0_0_25px_rgba(254,169,0,0.5)] border border-amber-300 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Target className="w-4 h-4 text-black/80" />
                <span>1. Tasa de Observación Global (61%)</span>
              </button>

              {/* TAB 2 */}
              <button
                type="button"
                onClick={() => setActiveTab("causas")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "causas"
                    ? "bg-[#002A8F] text-white shadow-[0_0_25px_rgba(0,42,143,0.6)] border border-blue-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <PieChart className="w-4 h-4 text-[#FEA900]" />
                <span>2. Anatomía de las 4 Causas</span>
              </button>

              {/* TAB 3 */}
              <button
                type="button"
                onClick={() => setActiveTab("disparidad")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "disparidad"
                    ? "bg-[#002A8F] text-white shadow-[0_0_25px_rgba(0,42,143,0.6)] border border-blue-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Building2 className="w-4 h-4 text-[#FEA900]" />
                <span>3. Disparidad por Laboratorio</span>
              </button>

            </div>

            {/* Chip de Telemetría Global con Pulso */}
            <div className="flex items-center gap-2 self-start sm:self-center font-mono text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEA900]"></span>
              </span>
              <span>41 OBSERVACIONES EN 27 EXP</span>
            </div>

          </div>

          {/* CONTENIDO INTERACTIVO DINÁMICO */}
          <AnimatePresence mode="wait">
            
            {/* ========================================================
                VISTA 1: TASA DE OBSERVACIÓN GLOBAL (61%)
               ======================================================== */}
            {activeTab === "observaciones" && (
              <motion.div
                key="tab-observaciones"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Columna Izquierda: Tarjeta Hero del 61% */}
                <div className="lg:col-span-5 space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#FEA900]/20 via-black/50 to-black/70 border border-amber-400/40 backdrop-blur-md shadow-[0_0_40px_rgba(254,169,0,0.2)] relative overflow-hidden"
                  >
                    <div 
                      aria-hidden 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"
                    />

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                        RETRABAJO EN ENTRADA
                      </span>
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/40 text-[10px]">
                          FALLA SISTÉMICA
                        </Badge>
                      </motion.div>
                    </div>

                    <div className="flex items-baseline gap-2 my-2">
                      <motion.span 
                        animate={{ opacity: [0.92, 1, 0.92] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                        className="text-6xl font-mono font-black text-white drop-shadow-[0_0_20px_rgba(254,169,0,0.3)]"
                      >
                        61%
                      </motion.span>
                      <span className="text-xl font-mono text-amber-300 font-bold">OBSERVADOS</span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 my-3 text-xs font-mono text-slate-300 space-y-1">
                      <div className="flex justify-between">
                        <span>Experimentos Devueltos:</span>
                        <strong className="text-red-400">27 de 44 experimentos</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Observaciones Totales:</span>
                        <strong className="text-white">41 hallazgos formales</strong>
                      </div>
                    </div>

                    <p className="text-xs font-mono text-slate-300">
                      <strong className="text-white">6 de cada 10 experimentos</strong> salieron de los laboratorios con defectos críticos que obligaron a rehacerlos.
                    </p>
                  </motion.div>
                </div>

                {/* Columna Derecha: Riel Visual Comparativo */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                  className="lg:col-span-7 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono font-semibold text-slate-300 uppercase flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      Balance del Universo Total de Experimentos (44 Exp)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Entrada vs Retrabajo
                    </span>
                  </div>

                  <div className="space-y-6">
                    {/* Barra 61% Observados */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-red-400 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-400" />
                          Experimentos con al menos 1 Devolución (61%)
                        </span>
                        <span className="text-red-400 font-bold text-sm">
                          27 Experimentos (41 Obs.)
                        </span>
                      </div>
                      
                      <div className="h-5 w-full rounded-full bg-white/10 p-0.5 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "61%" }}
                          transition={{ duration: 1.1, ease: EASE }}
                          className="h-full rounded-full bg-gradient-to-r from-red-600 via-[#FEA900] to-orange-500 shadow-[0_0_20px_rgba(254,169,0,0.5)] flex items-center justify-end pr-3 text-[10px] font-mono font-black text-black"
                        >
                          61%
                        </motion.div>
                      </div>
                    </div>

                    {/* Barra 39% Sin Observaciones */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-emerald-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          Experimentos Aprobados Directo (39%)
                        </span>
                        <span className="text-white font-bold text-sm">
                          17 Experimentos
                        </span>
                      </div>
                      
                      <div className="h-5 w-full rounded-full bg-white/10 p-0.5 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "39%" }}
                          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
                          className="h-full rounded-full bg-gradient-to-r from-[#002A8F] to-emerald-500 flex items-center justify-end pr-2 text-[10px] font-mono font-black text-white"
                        >
                          39%
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-between text-xs font-mono text-amber-200">
                    <span>Frecuencia de Devolución:</span>
                    <span className="font-bold text-white">Promedio de 1.5 observaciones por prueba rechazada</span>
                  </div>
                </motion.div>

              </motion.div>
            )}

            {/* ========================================================
                VISTA 2: ANATOMÍA DE LAS 4 CAUSAS DE RECHAZO
               ======================================================== */}
            {activeTab === "causas" && (
              <motion.div
                key="tab-causas"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Columna Izquierda: Gráfico de Barras Progresivas de Causas */}
                  <div className="lg:col-span-8 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <span className="text-xs font-mono font-semibold text-slate-300 uppercase">
                        DESGLOSE DE LOS 41 HALLAZGOS DE RECHAZO (100%)
                      </span>
                      <span className="text-[11px] font-mono text-amber-300">
                        4 Causas Raíz
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {rejectCauses.map((cause, idx) => (
                        <div key={cause.label} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-white flex items-center gap-2">
                              <span className="text-amber-400 font-bold">{cause.pct}%</span>
                              <span>{cause.label}</span>
                            </span>
                            <span className="text-slate-400">
                              {cause.count} obs.
                            </span>
                          </div>

                          {/* Barra */}
                          <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${cause.pct * 2.2}%` }}
                              transition={{ duration: 0.9, delay: 0.1 * idx, ease: EASE }}
                              className={`h-full rounded-full bg-gradient-to-r ${cause.color}`}
                            />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 block">
                            {cause.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Columna Derecha: Tarjeta de Revelación Pareto (34% + 24% = 58%) */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FEA900]/25 via-black/40 to-black/60 border border-amber-300/40 text-white relative overflow-hidden shadow-xl">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-200 font-bold block mb-1">
                        LA REVELACIÓN DE PARETO
                      </span>
                      <div className="text-5xl font-mono font-black text-amber-300 my-2">
                        58%
                      </div>
                      <p className="text-xs text-white leading-relaxed font-sans">
                        El <strong className="text-amber-300">58% de todo el rechazo</strong> proviene exclusivamente de 2 errores básicos de diseño: <strong className="text-white">Muestra no calculada (34%)</strong> y <strong className="text-white">Métricas no definidas (24%)</strong>.
                      </p>

                      <div className="mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-amber-200 flex items-center gap-2">
                        <ArrowUpRight className="w-4 h-4 text-[#FEA900] shrink-0" />
                        <span>Solucionable al 100% con un Standard Experiment Canvas</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ========================================================
                VISTA 3: DISPARIDAD EXTREMA POR LABORATORIO (TABLA OFICIAL)
               ======================================================== */}
            {activeTab === "disparidad" && (
              <motion.div
                key="tab-disparidad"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="space-y-6"
              >
                {/* Tabla Interactiva de Alto Impacto */}
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-white/[0.04] border-b border-white/10 text-slate-400 uppercase text-[10px]">
                      <tr>
                        <th className="p-4 font-bold text-white">Laboratorio</th>
                        <th className="p-4 text-center">Exp. Lanzados</th>
                        <th className="p-4 text-center">Tiempo Prom.</th>
                        <th className="p-4 text-center text-amber-300">Obs. / Retrabajo</th>
                        <th className="p-4 text-center">Conclusivos</th>
                        <th className="p-4 text-center">Documentados</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                      {LABS_DATA.map((lab) => {
                        const isBench = lab.id === "pagos";
                        return (
                          <tr 
                            key={lab.id} 
                            className={`transition-colors ${
                              isBench 
                                ? "bg-emerald-500/10 hover:bg-emerald-500/15" 
                                : "hover:bg-white/[0.02]"
                            }`}
                          >
                            <td className="p-4 font-bold text-white flex items-center gap-2">
                              {lab.name}
                              {isBench && (
                                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-[9px]">
                                  BENCHMARK
                                </Badge>
                              )}
                            </td>
                            <td className="p-4 text-center font-bold text-white">{lab.launched}</td>
                            <td className="p-4 text-center text-slate-300">{lab.cycleTimeAvg} días</td>
                            <td className="p-4 text-center">
                              <span className={`px-2 py-1 rounded font-bold ${
                                isBench 
                                  ? "bg-emerald-500/20 text-emerald-300" 
                                  : "bg-red-500/20 text-red-300"
                              }`}>
                                {lab.observedPct}% ({lab.observedCount}/{lab.launched})
                              </span>
                            </td>
                            <td className="p-4 text-center text-slate-300">{lab.conclusivePct}%</td>
                            <td className="p-4 text-center text-slate-300">{lab.documentedPct}%</td>
                          </tr>
                        );
                      })}
                      {/* FILA DE TOTAL / PROMEDIO */}
                      <tr className="bg-white/[0.06] font-bold text-white border-t-2 border-white/20">
                        <td className="p-4 uppercase text-amber-300">TOTAL / PROMEDIO</td>
                        <td className="p-4 text-center">44</td>
                        <td className="p-4 text-center">46 días</td>
                        <td className="p-4 text-center text-red-400">61% (27/44)</td>
                        <td className="p-4 text-center">57% (25/44)</td>
                        <td className="p-4 text-center">39% (17/44)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Banner de Evidencia Irrefutable */}
                <div className="p-5 rounded-2xl bg-[#FEA900]/10 border border-[#FEA900]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        La Prueba del Algodón: El Escuadrón de Pagos
                      </h4>
                      <p className="text-xs text-slate-300 font-sans">
                        Pagos demostró que crear una plantilla preventiva no oficial redujo sus observaciones a solo <strong>29%</strong> y su tiempo a <strong>36 días</strong>. La solución ya existía dentro del BCP, pero aislada en un silo.
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-slate-400 block">Tasa de Observación</span>
                    <span className="text-lg font-mono font-bold text-emerald-400">2.7x Menor que el Resto</span>
                  </div>
                </div>
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
