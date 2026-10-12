"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  ShieldAlert, 
  Cpu, 
  Gauge, 
  SlidersHorizontal,
  Flame,
  CheckCircle2,
  TrendingDown
} from "lucide-react";

export const SpotifyConfidenceSection: React.FC = () => {
  // Simulador de Guardrail Metric
  const [latencyDegradation, setLatencyDegradation] = useState<number>(3.2); // en %
  const [conversionLift, setConversionLift] = useState<number>(14.5); // en %
  const [complaintSpike, setComplaintSpike] = useState<number>(1.8); // en %

  // Límite de guardrail institucional: 5% de degradación en latencia o reclamos
  const isTriggered = latencyDegradation > 5.0 || complaintSpike > 5.0;

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#070A18] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#002A8F]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-[#FEA900]/10 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header del Eje 3 */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002A8F]/25 border border-[#3B49DF]/40 text-xs font-mono uppercase tracking-wider text-blue-300 mb-4">
            <Activity className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>EJE 3 · BENCHMARK GLOBAL EN EXPERIMENTACIÓN A ESCALA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            Spotify Confidence:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-200">
              Salt Machine, Learning Rate & Guardrails
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Cómo la plataforma de experimentación de Spotify corre más de <strong className="text-white">500 experimentos concurrentes</strong> sin interferencia cruzada, valora el aprendizaje estadístico riguroso sobre las corazonadas y protege la experiencia del usuario con apagados automáticos en tiempo real.
          </p>
        </div>

        {/* Bento Grid: 3 Pilares de Spotify Confidence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Pilar 1: Salt Machine */}
          <div className="relative rounded-3xl p-7 bg-[#0B0F24]/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between group hover:border-[#3B49DF]/50 transition-colors">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#002A8F]/20 border border-[#002A8F]/40 flex items-center justify-center text-blue-400 mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-blue-300 mb-1">
                Aislamiento Criptográfico
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                The Salt Machine
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                Asigna una semilla criptográfica ("salt") diferente a cada experimento. Un usuario puede estar en la variante A de pago y simultáneamente en la variante B de onboarding sin que ambas hipótesis se contaminen estadísticamente.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-300">
              <div className="text-slate-500 mb-1">// Hashing seguro por request</div>
              <span className="text-blue-400">hash</span>(user_id + <span className="text-amber-400">"salt_exp_44"</span>) % 100
              <div className="text-emerald-400 mt-1">✓ 0% sesgo de selección cruzada</div>
            </div>
          </div>

          {/* Pilar 2: Win Rate vs Learning Rate */}
          <div className="relative rounded-3xl p-7 bg-[#0B0F24]/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between group hover:border-[#FEA900]/40 transition-colors">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FEA900]/15 border border-[#FEA900]/30 flex items-center justify-center text-amber-400 mb-5">
                <Gauge className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-amber-300 mb-1">
                Cultura de Decisión Rigurosa
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Win Rate (12%) vs Learning Rate (64%)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                En productos complejos, solo ~12% de las hipótesis mueven la aguja positivamente. Spotify no castiga el "experimento perdedor": recompensa el <strong className="text-amber-300">Learning Rate</strong> (experimentos que permiten tomar una decisión estratégica concluyente y descartar malas inversiones a tiempo).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center font-mono">
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase">Win Rate Típico</div>
                <div className="text-lg font-bold text-slate-300">~12%</div>
              </div>
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div className="text-[10px] text-amber-300 uppercase">Learning Rate Spotify</div>
                <div className="text-lg font-bold text-amber-400">64%</div>
              </div>
            </div>
          </div>

          {/* Pilar 3: Guardrail Metrics */}
          <div className="relative rounded-3xl p-7 bg-[#0B0F24]/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between group hover:border-red-500/30 transition-colors">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 mb-5">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-red-300 mb-1">
                Protección Automática en Vivo
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Guardrail Metrics & Kill-Switch
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                Monitoreo automático de telemetría de riesgo. Si un experimento dispara la tasa de conversión pero daña métricas vitales (latencia p99, desinstalaciones o quejas de soporte), el sistema ejecuta un rollback y lo apaga sin intervención humana.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-300">
              <div className="text-slate-500 mb-1">// Regla de seguridad OPA</div>
              <span className="text-red-400">if</span> (latency_p99 &gt; 5% || complaints &gt; 5%)
              <div className="text-red-400 font-bold mt-1">→ SYSTEM_AUTO_SHUTDOWN(0ms)</div>
            </div>
          </div>

        </div>

        {/* Simulador Interactivo de Guardrail en Vivo */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#0C1028] to-[#070A18] border border-white/[0.1] shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08] mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-wider mb-2">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Simulador de Monitoreo Dinámico de Guardrails (Spotify Style)</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                Prueba el Disparo del Kill-Switch Automático
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
                Ajusta las métricas operativas del experimento. Si cualquiera de los guardrails supera el <strong className="text-white">+5.0%</strong> de degradación, la plataforma desactiva la variante al instante.
              </p>
            </div>

            {/* Status Badge */}
            <AnimatePresence mode="wait">
              {isTriggered ? (
                <motion.div
                  key="triggered"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="px-5 py-3 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-300 flex items-center gap-3 shrink-0"
                >
                  <Flame className="w-5 h-5 text-red-400 animate-pulse" />
                  <div>
                    <div className="font-mono text-xs font-bold uppercase tracking-wider">GUARDRAIL VIOLADO</div>
                    <div className="text-[11px] text-red-200">Kill-Switch Ejecutado: 100% Rollback</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="nominal"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="px-5 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 shrink-0"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="font-mono text-xs font-bold uppercase tracking-wider">EXPERIMENTO ACTIVO</div>
                    <div className="text-[11px] text-emerald-200">Tráfico balanceado · Guardrails en rango</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sliders de control */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Control 1: Conversion Lift (Métrica de Negocio) */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className="text-slate-400">Métrica Primaria (Lift Conversión)</span>
                  <span className="text-emerald-400 font-bold">+{conversionLift.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="0.5"
                  value={conversionLift}
                  onChange={(e) => setConversionLift(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
              <div className="text-[11px] text-slate-500 mt-3 font-mono">
                {conversionLift > 10 ? "Impacto positivo notable en adquisición" : "Impacto moderado en métricas núcleo"}
              </div>
            </div>

            {/* Control 2: Latency Degradation (Guardrail 1) */}
            <div className={`p-5 rounded-2xl bg-black/40 border transition-colors flex flex-col justify-between ${latencyDegradation > 5.0 ? "border-red-500/50 bg-red-950/20" : "border-white/5"}`}>
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className="text-slate-400">Guardrail 1 (Degradación Latencia p99)</span>
                  <span className={`font-bold ${latencyDegradation > 5.0 ? "text-red-400" : "text-amber-300"}`}>
                    +{latencyDegradation.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  step="0.2"
                  value={latencyDegradation}
                  onChange={(e) => setLatencyDegradation(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
              <div className="text-[11px] font-mono mt-3">
                {latencyDegradation > 5.0 ? (
                  <span className="text-red-400 font-bold">⚠️ Supera umbral crítico de 5.0%</span>
                ) : (
                  <span className="text-slate-500">Umbral máximo permitido: 5.0%</span>
                )}
              </div>
            </div>

            {/* Control 3: Complaint Spike (Guardrail 2) */}
            <div className={`p-5 rounded-2xl bg-black/40 border transition-colors flex flex-col justify-between ${complaintSpike > 5.0 ? "border-red-500/50 bg-red-950/20" : "border-white/5"}`}>
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className="text-slate-400">Guardrail 2 (Incremento de Reclamos)</span>
                  <span className={`font-bold ${complaintSpike > 5.0 ? "text-red-400" : "text-amber-300"}`}>
                    +{complaintSpike.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.2"
                  value={complaintSpike}
                  onChange={(e) => setComplaintSpike(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>
              <div className="text-[11px] font-mono mt-3">
                {complaintSpike > 5.0 ? (
                  <span className="text-red-400 font-bold">⚠️ Dispara alarmas en Banca por Teléfono</span>
                ) : (
                  <span className="text-slate-500">Umbral máximo tolerado: 5.0%</span>
                )}
              </div>
            </div>

          </div>

          {/* Telemetría comparativa con NovaLab */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <TrendingDown className="w-4 h-4 text-[#FEA900]" />
              <span className="text-slate-300">
                <strong className="text-white">Lección para NovaLab:</strong> En 2024, NovaLab corrió experimentos que generaron reclamos en agencias porque nadie monitoreaba guardrails técnicos ni operacionales.
              </span>
            </div>
            <div className="px-3 py-1 rounded bg-[#002A8F]/40 border border-[#3B49DF]/40 text-blue-200 text-[11px] shrink-0">
              Spotify Platform Standard
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
