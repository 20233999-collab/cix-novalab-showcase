"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GitPullRequest, 
  Clock, 
  TrendingDown, 
  Mail, 
  RotateCcw, 
  Inbox, 
  Flame,
  CheckCircle2,
  XCircle,
  ShieldAlert
} from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { QUARTERLY_DATA } from "../../data/novalabData";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ApprovalsBottleneckSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"penalizacion" | "cycletime" | "productividad">("penalizacion");

  return (
    <section 
      id="approvals-bottleneck" 
      className="relative w-full py-32 px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-br from-[#080B1A] via-[#1a0808] to-[#0d132b] animate-fluid-gradient text-white"
    >
      {/* Retícula técnica de fondo (DESIGN.md) */}
      <div 
        aria-hidden 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"
      />

      {/* Transición suave superior en degradado desde la sección previa */}
      <div 
        aria-hidden 
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#080B1A] via-[#080B1A]/80 to-transparent pointer-events-none"
      />

      {/* Halos difusos atmosféricos Optimizados para GPU */}
      <div 
        aria-hidden 
        className="absolute -top-24 right-1/4 w-[450px] h-[450px] bg-[#D92107]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#3B49DF]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/25 backdrop-blur-md mb-4 shadow-sm"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-red-300 uppercase font-semibold">
              PROBLEMA PRIORITARIO 02 // CUELLO DE BOTELLA FÍSICO
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
            Cuello de Botella en Aprobaciones y Flujo en Cascada
          </motion.h2>

          {/* 3 CHIPS VISUALES CON PALABRAS CLAVE (CERO PÁRRAFO DENSO) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-shadow hover:shadow-[0_0_20px_rgba(217,33,7,0.2)]"
            >
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Revisión por Correo</span>
                <span className="text-slate-400 font-mono text-[11px]">Asincrónico y sin trazabilidad</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <GitPullRequest className="w-4 h-4 text-blue-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Cascada Secuencial</span>
                <span className="text-slate-400 font-mono text-[11px]">Riesgos → Legal (sin concurrencia)</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-shadow hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
            >
              <RotateCcw className="w-4 h-4 text-red-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Reinicio desde Cero</span>
                <span className="text-slate-400 font-mono text-[11px]">Observación en Legal = circuito reiniciado</span>
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
          className="relative rounded-3xl bg-[#080B1A]/85 backdrop-blur-3xl border border-white/10 p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          
          {/* CONTROL DE PESTAÑAS INTERACTIVAS */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
            
            <div className="bg-black/60 border border-white/10 p-1.5 rounded-2xl flex flex-wrap sm:flex-nowrap gap-1 w-full sm:w-auto shadow-inner">
              
              {/* TAB 1 */}
              <button
                type="button"
                onClick={() => setActiveTab("penalizacion")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "penalizacion"
                    ? "bg-[#D92107] text-white shadow-[0_0_25px_rgba(217,33,7,0.6)] border border-red-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Clock className="w-4 h-4 text-amber-300" />
                <span>1. Penalización Temporal (+150%)</span>
              </button>

              {/* TAB 2 */}
              <button
                type="button"
                onClick={() => setActiveTab("cycletime")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "cycletime"
                    ? "bg-[#002A8F] text-white shadow-[0_0_25px_rgba(0,42,143,0.6)] border border-blue-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <TrendingDown className="w-4 h-4 text-[#FEA900]" />
                <span>2. Deterioro de Cycle Time (+50%)</span>
              </button>

              {/* TAB 3 */}
              <button
                type="button"
                onClick={() => setActiveTab("productividad")}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "productividad"
                    ? "bg-[#D92107] text-white shadow-[0_0_25px_rgba(217,33,7,0.6)] border border-red-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Inbox className="w-4 h-4 text-amber-300" />
                <span>3. Productividad & Embalse</span>
              </button>

            </div>

            {/* Chip de Telemetría Global con Pulso Vivo */}
            <div className="flex items-center gap-2 self-start sm:self-center font-mono text-xs text-red-300 bg-red-500/10 px-3 py-1.5 rounded-xl border border-red-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D92107]"></span>
              </span>
              <span>ETAPA 3 // CUELLO DE BOTELLA AUDITADO</span>
            </div>

          </div>

          {/* CONTENIDO INTERACTIVO DINÁMICO */}
          <AnimatePresence mode="wait">
            
            {/* ========================================================
                VISTA 1: PENALIZACIÓN TEMPORAL POR OBSERVACIÓN (+150%)
               ======================================================== */}
            {activeTab === "penalizacion" && (
              <motion.div
                key="tab-penalizacion"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Columna Izquierda: Tarjetas Hero de Costo de No-Calidad */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* Tarjeta Hero Penalización (+150%) */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-red-600/20 via-black/50 to-black/70 border border-red-500/40 backdrop-blur-md relative overflow-hidden shadow-[0_0_40px_rgba(217,33,7,0.2)]"
                  >
                    <div 
                      aria-hidden 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"
                    />

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                        PENALIZACIÓN POR REPROCESO
                      </span>
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Badge variant="destructive" className="bg-red-500/25 text-red-300 border-red-500/40">
                          +150% RETRASO
                        </Badge>
                      </motion.div>
                    </div>

                    <div className="flex items-baseline gap-2 my-2">
                      <motion.span 
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                        className="text-6xl font-mono font-black text-red-400 drop-shadow-[0_0_20px_rgba(217,33,7,0.4)]"
                      >
                        +12
                      </motion.span>
                      <span className="text-xl font-mono text-white font-bold">DÍAS EXTRA</span>
                    </div>

                    <p className="text-xs font-mono text-slate-300">
                      Por cada expediente devuelto al inicio del circuito de aprobación.
                    </p>
                  </motion.div>

                  {/* Tarjeta Promedio Actual vs Meta */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                        PROMEDIO REAL ETAPA 3
                      </span>
                      <span className="text-xs font-mono text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20">
                        META: 7 DÍAS
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 my-1">
                      <span className="text-4xl font-mono font-black text-white">15</span>
                      <span className="text-xs font-mono text-slate-400 uppercase">Días Hábiles Reales</span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/[0.08] flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-400">Desvío de Aprobación:</span>
                      <span className="text-red-400 font-bold">2.1x por encima del objetivo</span>
                    </div>
                  </motion.div>

                </div>

                {/* Columna Derecha: Comparador Visual Sin vs Con Observaciones */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                  className="lg:col-span-7 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono font-semibold text-slate-300 uppercase flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400" />
                      Tiempo de Aprobación por Condición (Días Hábiles)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Comparativa Directa
                    </span>
                  </div>

                  <div className="space-y-6">
                    
                    {/* Caso A: SIN Observaciones */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-emerald-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          Experimento SIN Observaciones
                        </span>
                        <span className="text-white font-bold font-mono text-sm">
                          8 Días Hábiles
                        </span>
                      </div>
                      
                      <div className="h-5 w-full rounded-full bg-white/10 p-0.5 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "40%" }}
                          transition={{ duration: 0.9, ease: EASE }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-end pr-2 text-[10px] font-mono font-black text-black"
                        >
                          8D
                        </motion.div>
                      </div>
                    </div>

                    {/* Caso B: CON Observaciones */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-red-400 flex items-center gap-2">
                          <XCircle className="w-4 h-4" />
                          Experimento CON Observaciones (Cascada Devuelta)
                        </span>
                        <span className="text-red-400 font-bold font-mono text-sm">
                          20 Días Hábiles (+150%)
                        </span>
                      </div>
                      
                      <div className="h-5 w-full rounded-full bg-white/10 p-0.5 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
                          className="h-full rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-red-500 shadow-[0_0_20px_rgba(217,33,7,0.5)] flex items-center justify-end pr-3 text-[10px] font-mono font-black text-white relative overflow-hidden"
                        >
                          <div 
                            aria-hidden 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
                          />
                          20 DÍAS
                        </motion.div>
                      </div>
                    </div>

                  </div>

                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-between text-xs font-mono text-red-200">
                    <span className="flex items-center gap-2">
                      <RotateCcw className="w-4 h-4 shrink-0 text-red-400" />
                      Falla Sistémica:
                    </span>
                    <span className="font-bold text-white text-right">
                      Circuito lineal estricto sin aprobación concurrente
                    </span>
                  </div>
                </motion.div>

              </motion.div>
            )}

            {/* ========================================================
                VISTA 2: DETERIORO PROGRESIVO DEL CYCLE TIME (+50%)
               ======================================================== */}
            {activeTab === "cycletime" && (
              <motion.div
                key="tab-cycletime"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Columna Izquierda: Tarjeta Hero Deterioro Anual */}
                <div className="lg:col-span-5 space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#002A8F]/25 via-black/50 to-black/70 border border-blue-400/40 backdrop-blur-md shadow-[0_0_40px_rgba(0,42,143,0.3)] relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                        DETERIORO TOTAL ANUAL
                      </span>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/40">
                        +50% MÁS LENTO
                      </Badge>
                    </div>

                    <div className="flex items-baseline gap-2 my-2">
                      <motion.span 
                        animate={{ opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="text-6xl font-mono font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      >
                        57
                      </motion.span>
                      <span className="text-xl font-mono text-amber-300 font-bold">DÍAS HÁBILES EN T4</span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 my-3 text-xs font-mono text-slate-300 space-y-1">
                      <div className="flex justify-between">
                        <span>Punto de Partida (T1):</span>
                        <strong className="text-emerald-400">38 días hábiles</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Pérdida de Velocidad:</span>
                        <strong className="text-red-400">+19 días por experimento</strong>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-mono">
                      Se pasó de 7.6 semanas a más de 11.4 semanas por ciclo de experimento.
                    </p>
                  </motion.div>
                </div>

                {/* Columna Derecha: Gráfico Trimestral de la Espiral */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                  className="lg:col-span-7 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-5 shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono font-semibold text-slate-300 uppercase">
                      Evolución del Tiempo de Ciclo (T1 → T4)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Días Hábiles
                    </span>
                  </div>

                  <div className="space-y-4">
                    {QUARTERLY_DATA.map((q, idx) => {
                      const isHigh = q.quarter === "T4";
                      const pctWidth = (q.cycleTimeDays / 60) * 100;
                      return (
                        <div key={q.quarter} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-white flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200">
                                {q.quarter}
                              </span>
                              <span>{q.periodLabel}</span>
                            </span>
                            <span className={isHigh ? "text-red-400 font-bold" : "text-amber-300 font-bold"}>
                              {q.cycleTimeDays} Días {idx > 0 && `(▲ +${idx === 1 ? '15.8' : idx === 2 ? '15.9' : '11.8'}%)`}
                            </span>
                          </div>
                          
                          {/* Barra de Tiempo */}
                          <div className="h-4 w-full rounded-full bg-white/10 p-0.5 relative overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${pctWidth}%` }}
                              transition={{ duration: 1.1, delay: 0.15 * idx, ease: EASE }}
                              className={`h-full rounded-full ${
                                isHigh
                                  ? "bg-gradient-to-r from-red-600 to-orange-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                                  : "bg-gradient-to-r from-[#002A8F] via-[#3B49DF] to-[#FEA900]"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/[0.06]">
                    <span>Promedio Anual: 46 Días</span>
                    <span className="text-red-400 font-bold">Deterioro Total Anual: +50%</span>
                  </div>
                </motion.div>

              </motion.div>
            )}

            {/* ========================================================
                VISTA 3: PRODUCTIVIDAD & EMBALSE (BACKLOG CHOKE)
               ======================================================== */}
            {activeTab === "productividad" && (
              <motion.div
                key="tab-productividad"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="space-y-6"
              >
                {/* 3 Tarjetas Hero de Impacto Directo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  
                  {/* Tarjeta 1: Caída de Throughput */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono uppercase text-slate-400">
                            VELOCIDAD DE ENTREGA
                          </span>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-300 border-red-500/30 text-[10px]">
                            -42.8%
                          </Badge>
                        </div>

                        <div className="my-2">
                          <div className="text-5xl font-mono font-black text-white">
                            8 <span className="text-xl text-slate-400 font-normal">/ 14</span>
                          </div>
                          <span className="text-xs font-mono text-amber-300 block mt-1">
                            Lanzamientos: 14 (T1) → 8 (T4)
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-300">
                        Desplome trimestral de la capacidad productiva de los equipos.
                      </div>
                    </Card>
                  </motion.div>

                  {/* Tarjeta 2: Incumplimiento del Plan */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono uppercase text-slate-400">
                            CUMPLIMIENTO ANUAL
                          </span>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-300 border-red-500/30 text-[10px]">
                            -26.7% DÉFICIT
                          </Badge>
                        </div>

                        <div className="my-2">
                          <div className="text-5xl font-mono font-black text-white">
                            44 <span className="text-xl text-slate-400 font-normal">/ 60</span>
                          </div>
                          <span className="text-xs font-mono text-red-400 block mt-1">
                            16 experimentos sin ejecutar
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-300">
                        Brecha directa entre la meta estratégica de innovación y la realidad.
                      </div>
                    </Card>
                  </motion.div>

                  {/* Tarjeta 3: Efecto Embalse (23 Ideas Varadas) - FONDO NARANJA CON DEGRADADO */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="p-6 rounded-2xl bg-gradient-to-br from-[#FEA900] via-[#E65100] to-[#992E00] border border-amber-300/50 h-full flex flex-col justify-between shadow-[0_12px_40px_rgba(254,169,0,0.35)] relative overflow-hidden text-black">
                      {/* Shimmer Loop sutil sobre el fondo naranja */}
                      <div 
                        aria-hidden 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"
                      />

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono font-bold uppercase text-black/80 tracking-wider">
                            EFECTO EMBALSE
                          </span>
                          <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Badge className="bg-black/85 text-amber-300 border border-black text-[10px] font-mono font-bold shadow-md">
                              VARADAS
                            </Badge>
                          </motion.div>
                        </div>

                        <div className="my-2">
                          <div className="text-5xl font-mono font-black text-white flex items-baseline gap-1 drop-shadow-md">
                            <motion.span
                              animate={{ opacity: [0.92, 1, 0.92] }}
                              transition={{ duration: 2.2, repeat: Infinity }}
                              className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                            >
                              23
                            </motion.span>
                            <span className="text-lg text-amber-100 font-semibold">Ideas</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-amber-100/90 block mt-1">
                            Congeladas en el Backlog
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-black/15 text-[11px] font-medium text-black/90">
                        Inventario varado sin poder iniciar pruebas por saturación de revisión.
                      </div>
                    </Card>
                  </motion.div>

                </div>

                {/* Síntesis Visual de Cuello de Botella */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
                  className="p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        El Costo de la Inacción Operativa
                      </h4>
                      <p className="text-xs text-slate-300">
                        La lentitud en la Etapa 3 no solo frena el presente, sino que ahoga la cartera futura de innovación del banco.
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-slate-400 block">Déficit de Entrega</span>
                    <span className="text-lg font-mono font-bold text-red-400">-16 Experimentos</span>
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
