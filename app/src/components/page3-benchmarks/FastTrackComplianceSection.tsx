"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Check 
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const FastTrackComplianceSection: React.FC = () => {
  // Simulador de Triaje Interactivo
  const [selectedCase, setSelectedCase] = useState<"copy" | "funnel" | "credit">("copy");

  const triageData = {
    copy: {
      title: "Cambio de Copy / Banner de Campaña",
      type: "UX / Textos Reversibles",
      lane: "GREEN LANE (CARRIL VERDE)",
      laneColor: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
      pillBg: "bg-emerald-500",
      resolution: "< 24 Horas",
      mechanism: "Aprobación Automática vía Pre-flight Checklist + Feature Flags",
      stakeholders: "Sistema Automático (OPA) · Sin Comité Humano",
      novalabTime: "15 - 20 Días",
      savedTime: "-95% Tiempo",
      steps: [
        "1. PM carga el texto en el Smart Intake Form.",
        "2. Algoritmo valida ausencia de frases engañosas y cláusulas aprobadas.",
        "3. Feature flag habilitada automáticamente para <5% de clientes.",
        "4. Legal y Riesgos reciben notificación pasiva de auditoría post-lanzamiento."
      ]
    },
    funnel: {
      title: "Optimización de Embudo de Conversión",
      type: "Modificación de Flujo / Muestra 5-15%",
      lane: "YELLOW LANE (CARRIL AMARILLO)",
      laneColor: "text-amber-400 bg-amber-500/15 border-amber-500/30",
      pillBg: "bg-[#FEA900]",
      resolution: "48 - 72 Horas",
      mechanism: "Revisión Rápida por Delegado Único de Riesgos y Legal",
      stakeholders: "1 Representante Técnico Designado",
      novalabTime: "20 Días",
      savedTime: "-80% Tiempo",
      steps: [
        "1. El Canvas pre-calcula el MDE estadístico y parámetros de salida.",
        "2. Formulario enruta automáticamente a la bandeja del delegado único.",
        "3. Aprobación asincrónica mediante checklist binario predeterminado.",
        "4. Enrolamiento progresivo con monitoreo de métricas de negocio."
      ]
    },
    credit: {
      title: "Nuevo Algoritmo de Crédito / PII Sensible",
      type: "Impacto Regulatorio Mayor / BCBS 239",
      lane: "RED LANE (CARRIL ROJO)",
      laneColor: "text-red-400 bg-red-500/15 border-red-500/30",
      pillBg: "bg-red-500",
      resolution: "3 - 5 Días",
      mechanism: "Mesa Concurrente Sincrónica Semanal (Riesgos + Legal + Producto)",
      stakeholders: "Comité Multidisciplinario en Vivo",
      novalabTime: "30+ Días (Reinicio constante)",
      savedTime: "-75% Tiempo",
      steps: [
        "1. Expediente completo auto-verificado ingresa a la sesión semanal.",
        "2. Sesión sincrónica de 45 min: Riesgos, Legal y PM resuelven dudas en vivo.",
        "3. Acuerdos y ajustes normativos firmados en el mismo acto.",
        "4. Despliegue con guardrail metrics y apagado automático en tiempo real."
      ]
    }
  };

  const activeData = triageData[selectedCase];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#080B1A] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/3 left-10 w-[550px] h-[350px] bg-emerald-500/10 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-[#002A8F]/20 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header del Eje 1 */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono uppercase tracking-wider text-emerald-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EJE 1 · BENCHMARK GLOBAL EN CONTROL REGULATORIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            Capital One & BBVA:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-[#FEA900]">
              Compliance-as-Code & Triaje Fast-Track
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Cómo las instituciones financieras más reguladas del mundo sustituyeron los comités burocráticos y cadenas de correos por motores de políticas en código (<strong className="text-white">Open Policy Agent</strong>) y autopistas dinámicas de triaje.
          </p>
        </div>

        {/* Imagen Isométrica de Alta Gama de los Carriles (Glassmorphism Render) */}
        {/* Visualización Isométrica Fast-Track Integrada con degradado orgánico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative max-w-5xl mx-auto mb-16 flex items-center justify-center overflow-visible"
        >
          {/* Halo ambiental tricolor de los 3 carriles */}
          <div 
            aria-hidden
            className="absolute -inset-10 bg-gradient-to-r from-emerald-500/15 via-[#FEA900]/15 to-red-500/15 blur-3xl rounded-full transform scale-95 pointer-events-none"
          />

          <div className="relative w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_96%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_96%)]">
            <img 
              src="/assets/fast-track-lanes.png" 
              alt="Autopista de Triaje Dinámico Fast-Track" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
            />
            {/* Velos de fusión */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B1A] via-transparent to-transparent opacity-85 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080B1A]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080B1A]/90 via-transparent to-[#080B1A]/90 pointer-events-none" />
          </div>

          <div className="absolute bottom-4 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ARQUITECTURA DE TRIAJE DINÁMICO · GREEN / YELLOW / RED LANES</span>
            </span>
            <span className="text-emerald-300 font-bold ml-4">REDUCCIÓN DEL 75% EN CYCLE TIME</span>
          </div>
        </motion.div>

        {/* ========================================================
            SIMULADOR INTERACTIVO DE TRIAJE (PRODUCT OPS ENGINE)
           ======================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.04] to-black/70 border border-white/10 backdrop-blur-2xl shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono text-[#FEA900] uppercase tracking-wider block font-bold mb-1">
                HERRAMIENTA INTERACTIVA
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Simulador de Triaje de Experimentos
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Selecciona un tipo de experimento para calcular su carril
            </span>
          </div>

          {/* Selector de Casos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <button
              type="button"
              onClick={() => setSelectedCase("copy")}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                selectedCase === "copy"
                  ? "bg-emerald-500/15 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
              }`}
            >
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
                🟢 CASO 1: RIESGO MÍNIMO
              </span>
              <span className="text-sm font-bold font-sans text-white block">
                Texto / Copy / Banner
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCase("funnel")}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                selectedCase === "funnel"
                  ? "bg-[#FEA900]/15 border-amber-400/60 shadow-[0_0_20px_rgba(254,169,0,0.25)]"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
              }`}
            >
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block mb-1">
                🟡 CASO 2: RIESGO MEDIO
              </span>
              <span className="text-sm font-bold font-sans text-white block">
                Embudo de Conversión
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCase("credit")}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                selectedCase === "credit"
                  ? "bg-red-500/15 border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                  : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
              }`}
            >
              <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-1">
                🔴 CASO 3: RIESGO ALTO
              </span>
              <span className="text-sm font-bold font-sans text-white block">
                Algoritmo de Crédito / PII
              </span>
            </button>
          </div>

          {/* Resultado del Triaje Dinámico */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Columna Izquierda: Tarjeta del Carril y Métricas */}
              <div className="lg:col-span-5 space-y-4">
                <div className={`p-6 rounded-2xl border ${activeData.laneColor} backdrop-blur-xl relative overflow-hidden`}>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-2 opacity-90">
                    CARRIL ASIGNADO AUTOMÁTICAMENTE
                  </span>
                  <h4 className="text-2xl font-black font-display text-white mb-4">
                    {activeData.lane}
                  </h4>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between pb-2 border-b border-white/10">
                      <span className="text-slate-300">Tiempo de Aprobación:</span>
                      <strong className="text-white text-sm">{activeData.resolution}</strong>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-white/10">
                      <span className="text-slate-300">Tiempo en NovaLab Hoy:</span>
                      <strong className="text-red-400 line-through">{activeData.novalabTime}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Ganancia Neta:</span>
                      <strong className="text-emerald-400 font-bold">{activeData.savedTime}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span>Mecanismo Operativo:</span>
                  <span className="text-[#FEA900] font-bold">{activeData.stakeholders}</span>
                </div>
              </div>

              {/* Columna Derecha: Pipeline Paso a Paso */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-4">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block pb-2 border-b border-white/[0.08]">
                  FLUJO DE TRABAJO AUTOMATIZADO ({activeData.mechanism})
                </span>

                <div className="space-y-3">
                  {activeData.steps.map((st, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-slate-200 p-2.5 rounded-lg bg-white/[0.02]">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};
