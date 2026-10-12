"use client";

import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Target
} from "lucide-react";

interface BenchmarkRoadmapGatewaySectionProps {
  onNavigateToPropuesta?: () => void;
}

export const BenchmarkRoadmapGatewaySection: React.FC<BenchmarkRoadmapGatewaySectionProps> = ({
  onNavigateToPropuesta
}) => {
  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#050713] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#002A8F]/20 via-[#FEA900]/10 to-[#3B49DF]/20 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/30 text-xs font-mono uppercase tracking-wider text-amber-300 mb-6">
          <Target className="w-3.5 h-3.5" />
          <span>SÍNTESIS ESTRATÉGICA · DEL BENCHMARK AL PLAN DE ACCIÓN</span>
        </div>

        {/* Título Monumental */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Los líderes globales ya trazaron el camino.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
            Ahora es el turno de NovaLab BCP.
          </span>
        </h2>

        {/* Subtítulo */}
        <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto mb-12">
          La caída de velocidad de 2024 no se resuelve con más reuniones ni diapositivas: se resuelve implementando el <strong className="text-white">Motor To-Be de Product Operations</strong> diseñado específicamente para Banco Andino / BCP.
        </p>

        {/* 3 Promesas de Transformación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-14">
          
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-1">
              Throughput & Velocidad
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              +40% Capacidad Anual
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Superar la barrera de 60 experimentos al año recuperando el ritmo de T1 mediante Fast-Track y Intake sin fricción.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs text-blue-400 uppercase tracking-wider mb-1">
              Cycle Time & Eficiencia
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              -65% en Aprobaciones
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Reducir los 20 días de ping-pong por correo a &lt;24 horas para experimentos de bajo riesgo y comités concurrentes semanales.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs text-amber-400 uppercase tracking-wider mb-1">
              Calidad & Memoria Viva
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              100% Repositorio RAG
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Cero duplicidad de hipótesis y preservación del 100% del aprendizaje institucional mediante la regla de Gating.
            </p>
          </div>

        </div>

        {/* Botón CTA Interactivo a Página 4 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onNavigateToPropuesta}
            className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-gradient-to-r from-[#FEA900] via-amber-400 to-orange-500 text-[#080B1A] font-mono font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-xl hover:shadow-[#FEA900]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Ver 04. LA PROPUESTA (El Motor To-Be)</span>
            <ArrowRight className="w-4 h-4 text-[#080B1A] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-6 font-mono text-[11px] text-slate-500">
          Diseñado bajo los estándares de Product Operations para el Centro de InnovaCXión (CIX BCP)
        </div>

      </div>
    </section>
  );
};
