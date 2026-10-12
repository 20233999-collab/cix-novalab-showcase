import React from "react";
import { ArrowRight, ShieldAlert } from "lucide-react";

interface TransitionGatewayProps {
  onNavigateToNextPage: () => void;
}

export const TransitionGateway: React.FC<TransitionGatewayProps> = ({ onNavigateToNextPage }) => {
  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#080B1A] overflow-hidden">
      <div className="relative max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-2xl text-white p-8 md:p-12 overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        
        {/* Glow de fondo y acentos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B49DF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Borde con haz de luz simulado */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B49DF] to-[#FEA900]" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-semibold">
              <ShieldAlert className="w-3.5 h-3.5" />
              EL DETONANTE DEL PROBLEMA DETECTADO
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
              61% de los experimentos fueron rechazados en Aprobaciones
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Los datos son concluyentes: mientras un experimento sin observaciones toma solo <strong className="text-white font-mono">8 días</strong> en aprobarse, un experimento con observaciones se dispara a <strong className="text-rose-400 font-mono">20 días</strong> (+150%). ¿Qué está fallando exactamente en el diseño y en los silos?
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <button
              onClick={onNavigateToNextPage}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#3B49DF] to-[#2e3bb8] hover:from-[#313ec2] hover:to-[#253096] text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-[#3B49DF]/25 cursor-pointer hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              <span>PASAR A: 02. ¿POR QUÉ?</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
