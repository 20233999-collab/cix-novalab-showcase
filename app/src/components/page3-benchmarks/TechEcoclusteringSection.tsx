"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Workflow, 
  ArrowRight, 
  Server
} from "lucide-react";

interface TechLayer {
  number: string;
  title: string;
  category: string;
  purpose: string;
  tools: string[];
  benchmarkOrigin: string;
  novaLabStatus: string;
  colorBorder: string;
  colorBadge: string;
}

const TECH_LAYERS: TechLayer[] = [
  {
    number: "01",
    title: "Capa de Intake & Registro Estandarizado",
    category: "Ingreso & Formalización",
    purpose: "Autoservicio para squads de innovación. El formulario digital valida campos obligatorios (cálculo muestral MDE, copys legales, métricas guardrail) antes de permitir el envío.",
    tools: ["Jira Service Management", "Typeform Enterprise", "Experiment Canvas Form"],
    benchmarkOrigin: "Nubank nuFormer",
    novaLabStatus: "En 2024: PPTs/Excel sueltos por correo (80% con errores). En To-Be: 100% estandarizado.",
    colorBorder: "border-blue-500/40",
    colorBadge: "bg-blue-500/15 text-blue-300 border-blue-500/30"
  },
  {
    number: "02",
    title: "Capa de Triaje & Control de Despliegue",
    category: "Gobernanza & Fast-Track",
    purpose: "Políticas como código. Triaje automático por nivel de riesgo regulatorio (Verde <24h, Amarillo 48h, Rojo concurrente). Feature flags para encendido progresivo de tráfico.",
    tools: ["Open Policy Agent (OPA)", "LaunchDarkly", "GitLab CI/CD Policies"],
    benchmarkOrigin: "BBVA The Frame & Capital One",
    novaLabStatus: "En 2024: Aprobación secuencial de 20 días por mail. En To-Be: Aprobación en <24h para el 70% de casos.",
    colorBorder: "border-amber-500/40",
    colorBadge: "bg-amber-500/15 text-amber-300 border-amber-500/30"
  },
  {
    number: "03",
    title: "Capa de Telemetría & Guardrails en Vivo",
    category: "Monitoreo & Seguridad",
    purpose: "Aislamiento criptográfico de variantes sin colisión (Salt Machine) y telemetría en tiempo real. Kill-Switch automático si la degradación de latencia o quejas supera el 5%.",
    tools: ["Snowflake", "Datadog / New Relic", "Spotify Confidence Platform"],
    benchmarkOrigin: "Spotify Confidence",
    novaLabStatus: "En 2024: Análisis manual reactivo post-mortem. En To-Be: Monitoreo autónomo con guardrails 24/7.",
    colorBorder: "border-indigo-500/40",
    colorBadge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
  },
  {
    number: "04",
    title: "Capa de Memoria Organizacional & RAG",
    category: "Conocimiento & Capitalización",
    purpose: "Repositorio vivo de fichas en Markdown/YAML con revisión de pares. Motor de búsqueda semántica RAG para consultar aprendizajes y regla infranqueable de Gating.",
    tools: ["Knowledge Repo (Git-based)", "Confluence Enterprise", "OpenAI / Claude RAG Indexer"],
    benchmarkOrigin: "Airbnb Knowledge Repo",
    novaLabStatus: "En 2024: Pérdida del 75% del conocimiento histórico. En To-Be: 100% de experimentos consultables.",
    colorBorder: "border-[#FEA900]/50",
    colorBadge: "bg-[#FEA900]/15 text-amber-300 border-[#FEA900]/30"
  }
];

export const TechEcoclusteringSection: React.FC = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const activeLayer = TECH_LAYERS[selectedLayerIndex];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#070A18] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-[#002A8F]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header de la Arquitectura */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002A8F]/20 border border-[#3B49DF]/40 text-xs font-mono uppercase tracking-wider text-blue-300 mb-4">
            <Workflow className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>ECOCLUSTERING TECNOLÓGICO · ARQUITECTURA DE 4 CAPAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            El Stack Tecnológico To-Be:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-300">
              4 Capas para Blindar la Experimentación
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Consolidamos las mejores prácticas de <strong className="text-white">Nubank, BBVA, Spotify y Airbnb</strong> en una arquitectura modular empresarial. Cada capa sustituye un cuello de botella manual identificado en NovaLab por un componente de infraestructura automatizado.
          </p>
        </div>

        {/* Pipeline de 4 Capas Interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Columna Izquierda: Los 4 Niveles del Pipeline */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {TECH_LAYERS.map((layer, idx) => {
              const isSelected = selectedLayerIndex === idx;
              return (
                <button
                  key={layer.number}
                  type="button"
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[#0E1438] border-[#3B49DF] shadow-lg shadow-blue-950/40"
                      : "bg-[#090D22]/60 border-white/5 hover:border-white/20 hover:bg-[#0B102C]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${
                      isSelected 
                        ? "bg-[#002A8F] text-white border border-[#3B49DF]" 
                        : "bg-white/5 text-slate-400 border border-white/10"
                    }`}>
                      {layer.number}
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {layer.category}
                      </div>
                      <div className={`text-sm sm:text-base font-bold font-display ${isSelected ? "text-white" : "text-slate-300"}`}>
                        {layer.title}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "text-[#FEA900] translate-x-1" : "text-slate-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Columna Derecha: Detalle Técnico de la Capa Seleccionada */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0D1232] to-[#080B1A] border border-white/10 shadow-2xl relative"
              >
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-black text-amber-400">
                      CAPA {activeLayer.number}
                    </span>
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${activeLayer.colorBadge}`}>
                      {activeLayer.category}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Inspiración: <strong className="text-white">{activeLayer.benchmarkOrigin}</strong>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-3">
                  {activeLayer.title}
                </h3>

                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {activeLayer.purpose}
                </p>

                {/* Herramientas de Referencia */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-[#FEA900]" />
                    <span>Herramientas & Estándares Recomendados</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeLayer.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Diagnóstico vs Solución */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/5 font-mono text-xs space-y-2">
                  <div className="text-slate-400">
                    <strong className="text-amber-400">Impacto en NovaLab:</strong> {activeLayer.novaLabStatus}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
