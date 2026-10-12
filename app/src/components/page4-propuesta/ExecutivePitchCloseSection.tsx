"use client";

import React from "react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Award
} from "lucide-react";

interface ExecutivePitchCloseSectionProps {
  onBackToStart?: () => void;
}

export const ExecutivePitchCloseSection: React.FC<ExecutivePitchCloseSectionProps> = ({
  onBackToStart
}) => {
  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#050713] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#002A8F]/25 via-[#FEA900]/15 to-[#3B49DF]/25 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/30 text-xs font-mono uppercase tracking-wider text-amber-300 mb-6">
          <Award className="w-3.5 h-3.5" />
          <span>CONCLUSIÓN & PITCH PARA LA DIRECCIÓN DE NOVALAB</span>
        </div>

        {/* Cita de Cierre / Discurso del Practicante */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0F1435] to-[#080B1A] border border-white/10 shadow-2xl mb-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FEA900]/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="font-mono text-xs text-[#FEA900] uppercase tracking-wider block mb-3">
            Guion Estratégico de Cierre:
          </span>

          <blockquote className="text-base sm:text-xl font-display text-slate-100 leading-relaxed italic mb-6">
            &ldquo;Señor Director: Para transformar NovaLab no necesitamos un proyecto pesado en cascada de 4 meses donde no se ve nada hasta el final. Mi propuesta se basa en <strong className="text-amber-300">4 MVPs evolutivos</strong>. El MVP 1 lo desplegamos en el primer mes con herramientas que el banco ya tiene: estandarizamos la entrada con el Experiment Canvas para erradicar las observaciones de Riesgos desde el día 1. A partir de ahí, cada mes entregamos un nuevo incremento probado: Fast-Track en el mes 2, telemetría en el mes 3 y el repositorio de conocimiento con IA en el mes 4.&rdquo;
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sin compras de software extraordinarias</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Resultados medibles en 30 días</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Alineación total con Riesgos y Legal</span>
            </div>
          </div>
        </div>

        {/* Botones de Navegación Final */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onBackToStart}
            className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 border border-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a 01. DATOS (Inicio)</span>
          </button>
        </div>

        <div className="mt-8 font-mono text-[11px] text-slate-500">
          Caso Practicante Product Operations · Centro de InnovaCXión (CIX BCP) · 2026
        </div>

      </div>
    </section>
  );
};
