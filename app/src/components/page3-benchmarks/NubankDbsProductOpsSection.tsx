"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sliders, 
  Compass, 
  Layers, 
  Users2,
  FileCheck
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const NubankDbsProductOpsSection: React.FC = () => {
  const [activeModel, setActiveModel] = useState<"nubank" | "dbs">("nubank");

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#060814] text-white border-t border-white/[0.08]">
      
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
        
        {/* Header del Eje 2 */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/25 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>EJE 2 · BENCHMARK GLOBAL EN PRODUCT OPERATIONS & SILOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            Nubank & DBS Bank:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              Product Ops & El Fin de los Silos
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Cómo la fintech más valiosa de América Latina y el banco más innovador de Asia rompieron los feudos de laboratorio unificando un <strong className="text-white">Camino Dorado (Golden Path)</strong> y liderazgos compartidos <strong className="text-white">2-in-a-Box</strong>.
          </p>
        </div>

        {/* Selector de Modelos: Nubank vs DBS */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveModel("nubank")}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeModel === "nubank"
                ? "bg-[#FEA900] text-black shadow-[0_0_20px_rgba(254,169,0,0.4)] border border-amber-300"
                : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/10"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Nubank: El Golden Path de nuFormer</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveModel("dbs")}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeModel === "dbs"
                ? "bg-[#FEA900] text-black shadow-[0_0_20px_rgba(254,169,0,0.4)] border border-amber-300"
                : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/10"
            }`}
          >
            <Users2 className="w-4 h-4" />
            <span>DBS Bank: Modelo 2-in-a-Box & GANDALF</span>
          </button>
        </div>

        {/* Contenido Dinámico de los Modelos */}
        <AnimatePresence mode="wait">
          {activeModel === "nubank" ? (
            <motion.div
              key="nubank"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs font-mono text-amber-200">
                  CASO NUBANK (BRASIL, MÉXICO, COLOMBIA)
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  Product Operations como Infraestructura, no como Burocracia
                </h3>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  En Nubank, la célula de Product Operations no actúa como un comité revisor ni como un cuello de botella. Su función es construir y curar el <strong>Camino Dorado (Golden Path)</strong>: librerías, plantillas maestras y estándares de datos pre-validados con Legal y Riesgos.
                </p>

                <div className="space-y-3 text-xs font-mono text-slate-300">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                    <FileCheck className="w-4 h-4 text-[#FEA900] shrink-0" />
                    <span><strong>nuFormer:</strong> Modelos y componentes que garantizan cumplimiento normativo desde el diseño.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                    <Layers className="w-4 h-4 text-[#FEA900] shrink-0" />
                    <span><strong>Cero Silos:</strong> La misma plantilla opera en tarjetas, préstamos e inversiones sin aislamiento.</span>
                  </div>
                </div>
              </div>

              {/* Riel Visual: Comparación con los Silos de NovaLab */}
              <div className="lg:col-span-6 p-7 rounded-3xl bg-black/50 border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
                  <span className="text-slate-400">Ruptura del Fenómeno de Silos:</span>
                  <span className="text-[#FEA900] font-bold">Standard Intake</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
                    <span className="text-xs font-mono font-bold text-red-400 block mb-1">
                      NOVALAB BCP (ANTES): AISLAMIENTO DE PAGOS
                    </span>
                    <p className="text-xs text-slate-300 font-sans">
                      Pagos descubrió una plantilla con Riesgos pero "no se le ocurrió compartirla". Pymes sufrió 80% de observaciones inventando su propio PPT.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                    <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">
                      NUBANK PRODUCT OPS (DESPUÉS): EXPERIMENT CANVAS GLOBAL
                    </span>
                    <p className="text-xs text-slate-300 font-sans">
                      Product Ops institucionaliza la mejor práctica como estándar obligatorio en el sistema, elevando la velocidad de todos los laboratorios al unísono.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dbs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300">
                  CASO DBS BANK (SINGAPUR · THE DIGITAL BANK OF THE WORLD)
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  Liderazgo Dual 2-in-a-Box y Cultura GANDALF
                </h3>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  DBS Bank eliminó por completo la dicotomía "Negocio vs Control". Cada plataforma de innovación está codirigida por una dupla <strong>2-in-a-box</strong> (un líder de negocio y un líder técnico) que comparten los mismos KPIs de velocidad, estabilidad y cumplimiento regulatorio.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 space-y-2">
                  <span className="text-[#FEA900] font-bold block uppercase">EL ESTÁNDAR GANDALF DE DBS:</span>
                  <p className="font-sans text-slate-300">
                    Operar como una empresa tecnológica de 26,000 personas inspirada en Google, Amazon, Netflix, Apple, LinkedIn y Facebook: infraestructura compartida y cero feudos departamentales.
                  </p>
                </div>
              </div>

              {/* Diagrama 2-in-a-Box */}
              <div className="lg:col-span-6 p-7 rounded-3xl bg-black/50 border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
                  <span className="text-slate-400">Arquitectura de Decisión Dual:</span>
                  <span className="text-emerald-400 font-bold">Incentivos Alineados</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#002A8F]/20 border border-[#3B49DF]/40 text-center">
                    <span className="text-xs font-mono font-bold text-blue-300 block mb-2">LÍDER DE NEGOCIO</span>
                    <span className="text-sm font-bold text-white block">Value & Discovery</span>
                    <span className="text-[10px] font-mono text-slate-400 mt-2 block">KPI: Throughput y Validación</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FEA900]/15 border border-amber-400/40 text-center">
                    <span className="text-xs font-mono font-bold text-amber-300 block mb-2">LÍDER DE CONTROL / TI</span>
                    <span className="text-sm font-bold text-white block">Compliance & Platform</span>
                    <span className="text-[10px] font-mono text-slate-400 mt-2 block">KPI: Seguridad y Reversibilidad</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 text-center">
                  ✓ Resultado: Se elimina la confrontación entre velocidad de producto y seguridad normativa.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
