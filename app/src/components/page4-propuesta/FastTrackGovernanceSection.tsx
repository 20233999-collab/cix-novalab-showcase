"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GitPullRequest, 
  CheckCircle2, 
  Clock, 
  Zap, 
  ShieldAlert, 
  Split,
  Layers
} from "lucide-react";

export const FastTrackGovernanceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"lanes" | "comparison">("lanes");

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#060814] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/4 right-10 w-[550px] h-[350px] bg-[#002A8F]/20 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 left-10 w-[550px] h-[350px] bg-[#FEA900]/10 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header de la Sección */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002A8F]/25 border border-[#3B49DF]/40 text-xs font-mono uppercase tracking-wider text-blue-300 mb-4">
            <GitPullRequest className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>FASE 2 · REDISEÑO DE GOBERNANZA & FAST-TRACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            Fast-Track Triaje &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-300">
              Comité Concurrente Sincrónico
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Eliminamos el circuito en cascada por correo electrónico que demoraba <strong className="text-red-400">20 días hábiles</strong>. Con la Matriz de Triaje de Riesgos aprobada con 2da Línea, el <strong className="text-white">70% de las pruebas se aprueba en &lt;24h</strong> y los casos complejos se resuelven en una sesión semanal de 30 minutos.
          </p>
        </div>

        {/* Selector de Vista: Carriles vs Cascada vs Concurrencia */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("lanes")}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "lanes"
                ? "bg-[#FEA900] text-[#080B1A] shadow-lg shadow-[#FEA900]/20"
                : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            <Split className="w-4 h-4" />
            <span>Los 3 Carriles de Aprobación (Triaje)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("comparison")}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "comparison"
                ? "bg-[#FEA900] text-[#080B1A] shadow-lg shadow-[#FEA900]/20"
                : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Cascada (20 Días) vs Concurrencia (5 Días)</span>
          </button>
        </div>

        {/* Contenido Dinámico */}
        <AnimatePresence mode="wait">
          {activeTab === "lanes" ? (
            <motion.div
              key="lanes"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              {/* Carril Verde */}
              <div className="p-7 rounded-3xl bg-[#091520]/80 border border-emerald-500/30 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-emerald-400/60 transition-colors">
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold">
                      🟢 GREEN LANE (70% VOLUMEN)
                    </span>
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    Aprobación Instantánea
                  </h3>
                  <div className="text-3xl font-black font-mono text-emerald-400 mb-4">
                    &lt; 24 Horas
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                    Para copys estándar, cambios de layout y pruebas de interacción reversibles con tráfico &lt;5% y sin captura de datos sensibles. Aprobación 100% algorítmica vía Feature Flags.
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-300">
                  <div className="text-slate-500 mb-1">// Gobernanza OPA</div>
                  <span>Pre-flight checklist cumplido → Despliegue inmediato</span>
                </div>
              </div>

              {/* Carril Amarillo */}
              <div className="p-7 rounded-3xl bg-[#1A1509]/80 border border-amber-500/30 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-400/60 transition-colors">
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[11px] font-bold">
                      🟡 YELLOW LANE (20% VOLUMEN)
                    </span>
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    Delegado Único Técnico
                  </h3>
                  <div className="text-3xl font-black font-mono text-amber-400 mb-4">
                    48 - 72 Horas
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                    Para ajustes en embudos de conversión y tráfico del 5% al 15%. Revisión asincrónica por un delegado único designado por Riesgos y Legal con checklist estandarizado.
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-300">
                  <div className="text-slate-500 mb-1">// Sin reuniones masivas</div>
                  <span>Revisión binaria asincrónica en bandeja centralizada</span>
                </div>
              </div>

              {/* Carril Rojo */}
              <div className="p-7 rounded-3xl bg-[#1C0E14]/80 border border-red-500/30 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-red-400/60 transition-colors">
                <div className="absolute top-0 right-0 w-28 h-28 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 font-mono text-[11px] font-bold">
                      🔴 RED LANE (10% VOLUMEN)
                    </span>
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    Comité Concurrente Semanal
                  </h3>
                  <div className="text-3xl font-black font-mono text-red-400 mb-4">
                    &lt; 5 Días
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                    Para productos de crédito, apertura de cuentas y PII de alto impacto. Mesa de trabajo sincrónica semanal de 30 minutos con Producto, Riesgos y Legal juntos en vivo.
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-300">
                  <div className="text-slate-500 mb-1">// Adiós al ping-pong</div>
                  <span>Aprobación colectiva en la misma mesa de 30 minutos</span>
                </div>
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0D1232] to-[#080B1A] border border-white/10 shadow-2xl font-mono text-xs"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Cascada NovaLab 2024 */}
                <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-4">
                  <div className="flex justify-between items-center text-red-400 font-bold border-b border-red-500/20 pb-3">
                    <span>MODELO AS-IS (CASCADA SECUENCIAL 2024)</span>
                    <span className="text-lg">20 DÍAS</span>
                  </div>
                  <div className="space-y-3 font-sans text-slate-300 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-mono text-[10px]">1</span>
                      <span>Envío de PPT a Riesgos por correo (Día 1)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-mono text-[10px]">2</span>
                      <span>Espera pasiva en bandeja de entrada (Días 2-8)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-mono text-[10px]">3</span>
                      <span>Riesgos responde observaciones → Reenvío a Legal (Día 9)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-mono text-[10px]">4</span>
                      <span>Legal observa textos → Nueva versión de PPT (Días 10-18)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-mono text-[10px]">5</span>
                      <span>Aprobación final extenuada (Día 20 hábiles)</span>
                    </div>
                  </div>
                </div>

                {/* Concurrencia To-Be */}
                <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
                  <div className="flex justify-between items-center text-emerald-400 font-bold border-b border-emerald-500/20 pb-3">
                    <span>MODELO TO-BE (CONCURRENCIA SINCRÓNICA 2025)</span>
                    <span className="text-lg">&lt; 5 DÍAS</span>
                  </div>
                  <div className="space-y-3 font-sans text-slate-300 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Ingreso vía Smart Intake Form con campos pre-validados (Día 1)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Triaje automático asigna Green (&lt;24h) o Red Lane (Día 1)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Comité semanal sincronizado: Producto + Riesgos + Legal (Día 3)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Ajustes en vivo sobre el Canvas sin correos ni versiones paralelas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Despliegue autorizado en Feature Flag (Día 4-5 hábiles)</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
