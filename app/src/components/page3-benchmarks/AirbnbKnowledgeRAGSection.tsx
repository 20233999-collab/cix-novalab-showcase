"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  Search, 
  Lock, 
  FileText, 
  Sparkles, 
  AlertTriangle, 
  ArrowRight,
  BookOpenCheck,
  Brain
} from "lucide-react";

interface MockSearchResult {
  id: string;
  quarter: string;
  lab: string;
  title: string;
  hypothesis: string;
  verdict: "Concluyente (Exitoso)" | "Concluyente (Descartado)" | "No Concluyente";
  sampleSize: string;
  learning: string;
  badgeColor: string;
}

const MOCK_RESULTS: Record<string, MockSearchResult> = {
  "onboarding": {
    id: "EXP-2023-41",
    quarter: "T3 2023",
    lab: "Silo Pagos & Yape",
    title: "Onboarding Biométrico Facial Simplificado para Independientes",
    hypothesis: "Reducir de 3 a 1 captura fotográfica eleva la tasa de finalización sin aumentar fraudes.",
    verdict: "Concluyente (Exitoso)",
    sampleSize: "12,400 usuarios (p < 0.01)",
    learning: "La tasa de activación subió +18.4%. La tasa de fraude se mantuvo en 0.02% con re-validación pasiva de RENIEC.",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  },
  "plazo-fijo": {
    id: "EXP-2024-12",
    quarter: "T1 2024",
    lab: "Silo Inversiones",
    title: "Plazo Fijo con Interés Pre-pagado en App Banca Móvil",
    hypothesis: "Ofrecer abono de intereses en el día 1 incrementa depósitos a 360 días.",
    verdict: "Concluyente (Descartado)",
    sampleSize: "8,500 clientes Pyme",
    learning: "El costo de liquidez adelantado canibalizó el margen financiero sin incrementar retención a vencimiento. HIPÓTESIS DESCARTADA.",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30"
  },
  "credito-pyme": {
    id: "EXP-2024-28",
    quarter: "T2 2024",
    lab: "Silo Pymes",
    title: "Línea de Capital de Trabajo con Desembolso QR Inmediato",
    hypothesis: "Habilitar desembolso por QR para comercios eleva la tasa de utilización en fines de semana.",
    verdict: "Concluyente (Exitoso)",
    sampleSize: "4,200 comercios aliados",
    learning: "Utilización se incrementó +27.3% los viernes de 18:00 a 22:00. Requiere monitoreo de límite diario en Riesgos.",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  }
};

export const AirbnbKnowledgeRAGSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("onboarding");
  const selectedResult = MOCK_RESULTS[searchQuery] || MOCK_RESULTS["onboarding"];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#060815] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/3 right-10 w-[550px] h-[350px] bg-[#FEA900]/10 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 left-10 w-[550px] h-[350px] bg-[#002A8F]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header del Eje 4 */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/25 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4">
            <Database className="w-3.5 h-3.5" />
            <span>EJE 4 · BENCHMARK GLOBAL EN MEMORIA ORGANIZACIONAL & RAG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            Airbnb & RAG:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              Knowledge Repo & Regla de Gating
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Cómo Airbnb convirtió los aprendizajes de experimentos en <strong className="text-white">código versionable (Markdown/YAML)</strong> con revisión de pares, y cómo un motor RAG evita la amnesia corporativa y el desperdicio de presupuesto en ideas ya testeadas.
          </p>
        </div>

        {/* Visual Asset + Regla de Gating Infranqueable */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Imagen 3D generada del Brain RAG integrada con degradados orgánicos */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Halo de resplandor inteligente */}
            <div 
              aria-hidden
              className="absolute -inset-4 bg-gradient-to-tr from-[#002A8F]/30 via-[#FEA900]/20 to-transparent blur-3xl rounded-full transform scale-90 pointer-events-none"
            />

            <div className="relative w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
              <img 
                src="/assets/knowledge-rag-brain.png" 
                alt="Knowledge Repo RAG Brain 3D Visualization" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060815] via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060815]/75 via-transparent to-[#060815]/75 pointer-events-none" />
            </div>

            <div className="absolute bottom-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono flex items-center gap-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#FEA900]" />
                <span className="text-slate-200">BCP Brain · Semantic Vector Index</span>
              </div>
              <span className="text-emerald-400 font-bold">100% Indexado</span>
            </div>
          </div>

          {/* Tarjeta de la Regla de Gating Airbnb */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0E1330] to-[#080B1A] border border-[#3B49DF]/30 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#002A8F]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-300">
                    Regla de Gobernanza Institucional
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    La Regla de Gating Infranqueable
                  </h3>
                </div>
              </div>

              <blockquote className="p-5 rounded-2xl bg-black/40 border border-white/5 font-sans text-sm sm:text-base text-slate-200 leading-relaxed italic mb-4">
                &ldquo;Sin Ficha de Aprendizaje aprobada y versionada en el sistema, la plataforma bloquea automáticamente la solicitud y el presupuesto para el siguiente experimento del equipo.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <BookOpenCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Documentación formal pasa de 25% a 100% de cumplimiento forzoso.</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Se erradica la pérdida del 75% del conocimiento institucional al rotar personal.</span>
                </div>
              </div>
            </div>

            {/* Comparativa Airbnb vs NovaLab 2024 */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20">
                <div className="text-red-400 font-bold mb-1">// NovaLab 2024 (Amnesia)</div>
                <div className="text-slate-300 text-[11px] leading-relaxed">
                  Solo 25% de experimentos documentados en PPTs sueltos en carpetas personales. Duplicidad de pruebas sin que nadie lo note.
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                <div className="text-emerald-400 font-bold mb-1">// Airbnb Knowledge Repo</div>
                <div className="text-slate-300 text-[11px] leading-relaxed">
                  Repositorio unificado en Git / Markdown. Peer review estadístico obligatorio antes del merge. Cero duplicidades.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Mockup Interactivo: Buscador Semántico con RAG */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#0C1028] to-[#070A18] border border-white/[0.1] shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulador de Búsqueda Semántica RAG (BCP Brain Mockup)</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                Consulta en Lenguaje Natural sobre el Histórico de Experimentos
              </h4>
            </div>

            {/* Consultas Sugeridas Rápidas */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-mono text-slate-500">Prueba con:</span>
              <button
                type="button"
                onClick={() => setSearchQuery("onboarding")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  searchQuery === "onboarding"
                    ? "bg-[#FEA900] text-[#080B1A] font-bold"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                Onboarding Facial
              </button>
              <button
                type="button"
                onClick={() => setSearchQuery("plazo-fijo")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  searchQuery === "plazo-fijo"
                    ? "bg-[#FEA900] text-[#080B1A] font-bold"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                Plazo Fijo
              </button>
              <button
                type="button"
                onClick={() => setSearchQuery("credito-pyme")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  searchQuery === "credito-pyme"
                    ? "bg-[#FEA900] text-[#080B1A] font-bold"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                Crédito QR Pyme
              </button>
            </div>
          </div>

          {/* Barra de Búsqueda RAG */}
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              readOnly
              value={
                searchQuery === "onboarding" ? "¿Qué aprendimos sobre onboarding biométrico en independientes?" :
                searchQuery === "plazo-fijo" ? "¿Es rentable pagar intereses de plazo fijo por adelantado?" :
                "¿Cómo respondió el segmento Pyme al financiamiento express por QR?"
              }
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-[#002A8F]/40 border border-[#3B49DF]/40 text-blue-300 font-mono text-[10px] uppercase">
              RAG Embeddings 1536d
            </div>
          </div>

          {/* Resultado Sintetizado por el RAG */}
          <motion.div
            key={selectedResult.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 font-sans"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {selectedResult.id}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {selectedResult.quarter} · {selectedResult.lab}
                </span>
              </div>
              <span className={`font-mono text-xs px-3 py-1 rounded-full border ${selectedResult.badgeColor}`}>
                {selectedResult.verdict}
              </span>
            </div>

            <h5 className="text-lg font-bold text-white mb-2">
              {selectedResult.title}
            </h5>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 font-mono bg-black/40 p-3 rounded-xl border border-white/5">
              <strong className="text-amber-300">Hipótesis Original:</strong> {selectedResult.hypothesis}
            </p>

            <div className="p-4 rounded-xl bg-[#002A8F]/15 border border-[#3B49DF]/30">
              <div className="font-mono text-xs text-blue-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#FEA900]" />
                <span>Síntesis Ejecutiva del Aprendizaje (Knowledge Repo)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {selectedResult.learning}
              </p>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-slate-400 pt-2 border-t border-white/5">
                <span>Muestra: {selectedResult.sampleSize}</span>
                <span className="text-amber-300 flex items-center gap-1 hover:underline cursor-pointer">
                  Ver Ficha Completa en Git <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
