import React, { useState } from "react";
import { 
  Activity, 
  ShieldCheck
} from "lucide-react";

export const ProductOpsControlCenterSection: React.FC = () => {
  // Estado para simular monitoreo de telemetría de 4 laboratorios en vivo
  const [selectedLab, setSelectedLab] = useState<"pagos" | "inversiones" | "pymes" | "seguros">("pymes");

  const labTelemetry = {
    pagos: {
      name: "Silo Pagos & Yape",
      activeExps: 8,
      cycleTime: "24 días",
      reworkRate: "12%",
      guardrailStatus: "Nominal",
      learningRate: "68%",
      color: "text-blue-400"
    },
    inversiones: {
      name: "Silo Inversiones",
      activeExps: 4,
      cycleTime: "28 días",
      reworkRate: "15%",
      guardrailStatus: "Nominal",
      learningRate: "59%",
      color: "text-amber-400"
    },
    pymes: {
      name: "Silo Pymes",
      activeExps: 6,
      cycleTime: "26 días",
      reworkRate: "14%",
      guardrailStatus: "Nominal",
      learningRate: "63%",
      color: "text-purple-400"
    },
    seguros: {
      name: "Silo Seguros",
      activeExps: 5,
      cycleTime: "25 días",
      reworkRate: "10%",
      guardrailStatus: "Nominal",
      learningRate: "71%",
      color: "text-emerald-400"
    }
  };

  const activeData = labTelemetry[selectedLab];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#070A18] text-white border-t border-white/[0.08]">
      
      {/* Halos de Fondo */}
      <div 
        aria-hidden 
        className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#002A8F]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header de la Sección */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/25 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4">
            <Activity className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>FASE 3 · OPERACIÓN & TELEMETRÍA DE SEGURIDAD EN VIVO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            Product Ops Command Center:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-200">
              Telemetría & Guardrails 24/7
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            La torre de control en tiempo real que visibiliza la salud operativa de NovaLab. Sustituimos las reuniones reactivas post-mortem por un tablero conectado a <strong className="text-white">Snowflake y Datadog</strong> que apaga experimentos riesgosos antes de que afecten a los clientes.
          </p>
        </div>

        {/* Dashboard de Telemetría */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0D1232] to-[#080B1A] border border-white/10 shadow-2xl relative mb-12">
          
          {/* Barra Superior del Tablero: Selector de Laboratorios */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
                TELEMETRÍA EN VIVO · SISTEMA NOVALAB OPS
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {(Object.keys(labTelemetry) as Array<keyof typeof labTelemetry>).map((labKey) => (
                <button
                  key={labKey}
                  type="button"
                  onClick={() => setSelectedLab(labKey)}
                  className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                    selectedLab === labKey
                      ? "bg-[#FEA900] text-[#080B1A] font-bold shadow-md"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {labTelemetry[labKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* 4 KPIs de la Telemetría del Laboratorio Seleccionado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-mono">
            
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="text-[11px] text-slate-400 uppercase mb-1">Experimentos Activos</div>
              <div className="text-2xl font-black text-white">{activeData.activeExps}</div>
              <div className="text-[10px] text-emerald-400 mt-1">Concurrencia balanceada</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="text-[11px] text-slate-400 uppercase mb-1">Cycle Time Promedio</div>
              <div className="text-2xl font-black text-[#FEA900]">{activeData.cycleTime}</div>
              <div className="text-[10px] text-slate-400 mt-1">-54% vs los 57 días 2024</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="text-[11px] text-slate-400 uppercase mb-1">Tasa de Retrabajo</div>
              <div className="text-2xl font-black text-emerald-400">{activeData.reworkRate}</div>
              <div className="text-[10px] text-slate-400 mt-1">-80% vs 61% histórico</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="text-[11px] text-slate-400 uppercase mb-1">Learning Rate</div>
              <div className="text-2xl font-black text-purple-300">{activeData.learningRate}</div>
              <div className="text-[10px] text-slate-400 mt-1">Decisiones concluyentes</div>
            </div>

          </div>

          {/* Estado de Guardrails Activos (Monitoreo Spotify Style) */}
          <div className="p-5 rounded-2xl bg-[#002A8F]/15 border border-[#3B49DF]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs font-mono">
                <strong className="text-white block">Guardrails de Producción: SISTEMA NOMINAL</strong>
                <span className="text-slate-300">Latencia p99: +1.2% (límite 5.0%) · Quejas: 0.4% · Kill-Switch Armado y listo</span>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-emerald-400 flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Cero Incidentes Registrados</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
