"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  CheckCircle2, 
  FileSpreadsheet, 
  GitPullRequest, 
  Activity, 
  Database
} from "lucide-react";

interface RoadmapPhase {
  id: number;
  weeks: string;
  badge: string;
  name: string;
  objective: string;
  deliverables: string[];
  kpi: string;
  kpiLabel: string;
  icon: React.ElementType;
  borderColor: string;
  badgeColor: string;
}

const PHASES: RoadmapPhase[] = [
  {
    id: 1,
    weeks: "Semanas 1–4 (Mes 1)",
    badge: "🟢 MVP 1 · CALIDAD DE ENTRADA",
    name: "Estandarización de Entrada & Calidad desde la Fuente",
    objective: "Atacar la causa raíz del 80% de los rechazos mediante el Smart Intake Form y la regla de Gating sin pedir nuevo software.",
    deliverables: [
      "Semana 1: Co-diseño del Experiment Canvas en Jira Service Management.",
      "Semana 2: Configuración de calculadora MDE y catálogo legal preaprobado.",
      "Semana 3: Despliegue de la regla de Gating ('Sin Ficha = No Nuevo Experimento').",
      "Semana 4: Talleres prácticos con los 4 laboratorios y arranque del piloto."
    ],
    kpi: "0% Expedientes Incompletos",
    kpiLabel: "Caída del 80% en observaciones de Riesgos y Legal",
    icon: FileSpreadsheet,
    borderColor: "border-emerald-500/40",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
  },
  {
    id: 2,
    weeks: "Semanas 5–8 (Mes 2)",
    badge: "🟡 MVP 2 · FAST-TRACK & GOBERNANZA",
    name: "Rediseño de Gobernanza & Activación del Fast-Track",
    objective: "Reducir el tiempo promedio de aprobación de 20 días a menos de 48 horas para el 70% de las pruebas mediante triaje y concurrencia.",
    deliverables: [
      "Semana 5: Firma del acuerdo de Matriz de Triaje con Riesgos, Legal y Ciberseguridad.",
      "Semana 6: Configuración de Feature Flags para encendido/apagado instantáneo.",
      "Semana 7: Activación del Green Lane (<24h) con pre-flight checklist.",
      "Semana 8: Primer Comité Concurrente Sincrónico semanal (30 min en vivo)."
    ],
    kpi: "< 48h en 70% de Casos",
    kpiLabel: "-80% en tiempos de espera de aprobación",
    icon: GitPullRequest,
    borderColor: "border-amber-500/40",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30"
  },
  {
    id: 3,
    weeks: "Semanas 9–12 (Mes 3)",
    badge: "🔴 MVP 3 · CONTROL & TELEMETRÍA",
    name: "Institucionalización de Product Ops & Métricas Guardrail",
    objective: "Garantizar monitoreo en tiempo real, rigor estadístico y autonomía segura con apagados automáticos de riesgo.",
    deliverables: [
      "Semana 9: Conexión de telemetría de producción (Snowflake / Datadog).",
      "Semana 10: Activación de Kill-Switches automáticos ante degradación de latencia o quejas.",
      "Semana 11: Pantalla de telemetría en vivo (Cycle Time, Throughput, Learning Rate).",
      "Semana 12: Primer ciclo formal de revisión entre pares (Peer Review)."
    ],
    kpi: "Red Lane en < 5 Días",
    kpiLabel: "0 incidentes no controlados en producción",
    icon: Activity,
    borderColor: "border-indigo-500/40",
    badgeColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
  },
  {
    id: 4,
    weeks: "Semanas 13–16 (Mes 4)",
    badge: "🟣 MVP 4 · MEMORIA VIVA & IA",
    name: "Repositorio Vivo de Aprendizajes & BCP Brain (RAG)",
    objective: "Erradicar la amnesia organizacional, eliminar la duplicación de experimentos y democratizar el conocimiento histórico.",
    deliverables: [
      "Semana 13: Despliegue de Knowledge Repo en Markdown/YAML con metadatos estructurados.",
      "Semana 14: Migración e indexación del historial de experimentos de 2024.",
      "Semana 15: Integración del motor RAG de búsqueda en lenguaje natural.",
      "Semana 16: Publicación del catálogo oficial de aprendizajes y cierre de transición."
    ],
    kpi: "100% Documentación Viva",
    kpiLabel: "0% experimentos duplicados entre laboratorios",
    icon: Database,
    borderColor: "border-[#FEA900]/50",
    badgeColor: "bg-[#FEA900]/15 text-amber-300 border-[#FEA900]/30"
  }
];

export const RoadmapMvpEvolutionSection: React.FC = () => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<number>(1);
  const activePhase = PHASES.find(p => p.id === selectedPhaseId) || PHASES[0];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#060814] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/3 right-10 w-[550px] h-[350px] bg-[#FEA900]/10 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header de la Sección */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/25 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>HOJA DE RUTA DEL PRACTICANTE · 16 SEMANAS / 4 FASES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            Estrategia de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              4 MVPs Evolutivos
            </span>{" "}
            con Valor Incremental
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Para la Dirección de NovaLab no proponemos un megaproyecto en cascada a 4 meses donde nada funciona hasta el final. Proponemos <strong className="text-white">un incremento validado por mes</strong>: atacamos la entrada con el Canvas en el mes 1, aceleramos aprobaciones en el mes 2, controlamos riesgos en el mes 3 e instalamos la memoria IA en el mes 4.
          </p>
        </div>

        {/* Barra de Fases 1 a 4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PHASES.map((phase) => {
            const isSelected = phase.id === selectedPhaseId;
            const Icon = phase.icon;
            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => setSelectedPhaseId(phase.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#0E1438] border-[#3B49DF] shadow-lg shadow-blue-950/40"
                    : "bg-[#090D22]/60 border-white/5 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-slate-400">{phase.weeks}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-[#FEA900]" : "text-slate-500"}`} />
                  </div>
                  <div className={`font-mono text-xs font-bold ${isSelected ? "text-amber-300" : "text-slate-300"}`}>
                    {phase.badge.split(" · ")[1]}
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-white/5">
                  KPI: {phase.kpi}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalle de la Fase Seleccionada */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0D1232] to-[#080B1A] border border-white/10 shadow-2xl relative"
          >
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className={`inline-block font-mono text-xs px-3 py-1 rounded-full border mb-2 ${activePhase.badgeColor}`}>
                  {activePhase.badge} · {activePhase.weeks}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {activePhase.name}
                </h3>
              </div>

              {/* KPI Box */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-right shrink-0">
                <div className="text-[11px] text-slate-400 uppercase">Hito de Éxito del MVP</div>
                <div className="text-xl font-black text-emerald-400">{activePhase.kpi}</div>
                <div className="text-[10px] text-slate-500">{activePhase.kpiLabel}</div>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
              <strong className="text-white">Objetivo Estratégico:</strong> {activePhase.objective}
            </p>

            {/* Los 4 Entregables Semanales */}
            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Entregables Semanales & Responsabilidad del Practicante:
              </div>
              {activePhase.deliverables.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-sans text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FEA900] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
