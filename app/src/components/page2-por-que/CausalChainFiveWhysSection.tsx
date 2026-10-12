"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GitFork, 
  HelpCircle, 
  ArrowDown, 
  ArrowRight,
  Target
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface CausalNode {
  id: number;
  level: string;
  question: string;
  answer: string;
  category: string;
  metric?: string;
  detail: string;
  color: string;
  borderColor: string;
  tagColor: string;
}

export const CausalChainFiveWhysSection: React.FC<{ onNavigateToPage3?: () => void }> = ({ onNavigateToPage3 }) => {

  const chain: CausalNode[] = [
    {
      id: 1,
      level: "¿POR QUÉ 1?",
      question: "¿Por qué colapsó la velocidad a 57 días y solo se lanzaron 44 experimentos?",
      answer: "Porque el 61% de los experimentos fueron rebotados por Control y tardaron 20 días en aprobarse.",
      category: "CUELLO DE BOTELLA EN APROBACIONES",
      metric: "61% Retrabajo / 20 Días",
      detail: "Cada devolución generó +12 días hábiles adicionales de demora (+150% de sobrecosto temporal).",
      color: "from-red-500/15 to-transparent",
      borderColor: "border-red-500/40",
      tagColor: "bg-red-500/20 text-red-300 border-red-500/30"
    },
    {
      id: 2,
      level: "¿POR QUÉ 2?",
      question: "¿Por qué el 61% de los experimentos fueron rebotados por Riesgos y Legal?",
      answer: "Porque observaron errores críticos y recurrentes en muestras (34%), métricas (24%), textos (22%) y datos personales PII (15%).",
      category: "ANATOMÍA DE LOS 41 HALLAZGOS",
      metric: "4 Causas Raíz",
      detail: "Las áreas de segunda línea recibieron expedientes con hipótesis no parametrizadas ni criterios de exclusión de clientes.",
      color: "from-[#FEA900]/15 to-transparent",
      borderColor: "border-[#FEA900]/40",
      tagColor: "bg-[#FEA900]/20 text-amber-300 border-amber-400/30"
    },
    {
      id: 3,
      level: "¿POR QUÉ 3?",
      question: "¿Por qué los laboratorios envían expedientes con errores conceptuales y legales básicos?",
      answer: "Porque diseñan en formatos libres de PowerPoint o Excel sin validaciones previas ni campos obligatorios.",
      category: "INTAKE ARTESANAL Y DISPAR",
      metric: "80% Déficit en Origen",
      detail: "Cada equipo redacta empíricamente lo que recuerda (Racionalidad Limitada), trasladando la carga de descubrir las reglas a la etapa de aprobación.",
      color: "from-[#3B49DF]/15 to-transparent",
      borderColor: "border-[#3B49DF]/40",
      tagColor: "bg-[#002A8F]/30 text-blue-300 border-blue-400/30"
    },
    {
      id: 4,
      level: "¿POR QUÉ 4?",
      question: "¿Por qué no existen validaciones previas ni herramientas obligatorias en las etapas 1 y 2?",
      answer: "Porque Product Operations no ha establecido un Experiment Canvas estandarizado, catálogo de métricas ni un intake condicional inteligente.",
      category: "VACÍO METODOLÓGICO DE PRODUCT OPS",
      metric: "Zero Frameworks",
      detail: "No existía una arquitectura operativa que filtre la basura antes de que entre al pipeline (Garbage In, Garbage Out).",
      color: "from-[#FEA900]/15 to-transparent",
      borderColor: "border-[#FEA900]/40",
      tagColor: "bg-amber-500/20 text-amber-300 border-amber-400/30"
    },
    {
      id: 5,
      level: "¿POR QUÉ 5? (CAUSA RAÍZ ÚLTIMA)",
      question: "¿Por qué NovaLab operaba sin arquitectura de Product Operations ni estándares?",
      answer: "Porque NovaLab opera con una gobernanza tradicional secuencial (Waterfall) y en silos sin memoria corporativa, intentando hacer innovación ágil sobre procesos de control pensados para banca tradicional.",
      category: "FALLA ESTRUCTURAL Y CULTURAL SISTÉMICA",
      metric: "Desconexión Ágil vs Banca",
      detail: "La innovación se gestionó como compartimentos estancos sin un habilitador centralizado que sincronice la velocidad del negocio con la solidez de la segunda línea de defensa.",
      color: "from-gradient-to-r from-[#FEA900]/25 via-red-500/20 to-[#002A8F]/25",
      borderColor: "border-amber-300",
      tagColor: "bg-[#FEA900] text-black font-black shadow-[0_0_20px_rgba(254,169,0,0.4)]"
    }
  ];

  return (
    <section className="relative w-full py-32 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#060814] text-white border-t border-white/[0.08]">
      
      {/* Retícula técnica de fondo */}
      <div 
        aria-hidden 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"
      />

      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#FEA900]/10 via-[#002A8F]/15 to-transparent blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* ========================================================
            HEADER DE SECCIÓN
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/30 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4"
          >
            <GitFork className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>DIAGNÓSTICO PROFUNDO · ANÁLISIS DE CAUSA RAÍZ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4"
          >
            Cadena de Causalidad:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              Los 5 Porqués
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed"
          >
            Para comprender cómo se interconectan los tres problemas prioritarios, rastreamos desde el síntoma visible del desplome de velocidad hasta la falla estructural última del sistema.
          </motion.p>
        </div>

        {/* ========================================================
            EL SÍNTOMA MACRO (ORIGEN DE LA INVESTIGACIÓN)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/30 via-black/60 to-red-950/30 border border-red-500/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(239,68,68,0.2)] text-center relative overflow-hidden"
        >
          <motion.div 
            aria-hidden
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent pointer-events-none"
          />

          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-mono font-bold uppercase tracking-wider inline-block mb-3">
            [ SÍNTOMA MACRO VISIBLE ]
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white mb-2">
            NovaLab solo lanzó 44 de 60 experimentos y su tiempo de ciclo escaló a 57 días hábiles (+50%).
          </h3>
          <p className="text-xs sm:text-sm font-mono text-slate-300">
            Pérdida de tracción, desborde de backlog (23 ideas varadas) y caída del throughput anual en un -42.8%.
          </p>
        </motion.div>

        {/* ========================================================
            LA CADENA DESPLEGADA DE LOS 5 PORQUÉS
           ======================================================== */}
        <div className="relative space-y-6 before:absolute before:left-6 sm:before:left-10 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-red-500/60 before:via-[#FEA900]/60 before:to-amber-300">
          
          {chain.map((item, idx) => {
            const isRootCause = item.id === 5;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
                className="relative pl-14 sm:pl-20 opacity-100"
              >
                {/* Conector Circular en el Riel */}
                <div className={`absolute left-3.5 sm:left-7.5 top-6 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-xs shadow-lg transition-transform ${
                  isRootCause 
                    ? "bg-[#FEA900] text-black ring-4 ring-amber-400/30 scale-125 animate-pulse" 
                    : "bg-[#080B1A] text-white border-2 border-[#FEA900]"
                }`}>
                  {item.id}
                </div>

                {/* Tarjeta del Porqué */}
                <div 
                  className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b ${item.color} border ${item.borderColor} backdrop-blur-xl relative overflow-hidden transition-all duration-300 ${
                    isRootCause 
                      ? "shadow-[0_20px_60px_rgba(254,169,0,0.25)] bg-[#0A0E24]/90" 
                      : "shadow-xl bg-black/40 hover:border-white/25"
                  }`}
                >
                  {/* Etiqueta superior */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase border ${item.tagColor}`}>
                      {item.level}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  {/* Pregunta del nivel */}
                  <h4 className="text-base sm:text-lg font-bold font-sans text-amber-200/90 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#FEA900] shrink-0" />
                    <span>{item.question}</span>
                  </h4>

                  {/* Respuesta Causal */}
                  <div className={`p-4 rounded-xl my-3 ${
                    isRootCause ? "bg-[#FEA900]/10 border border-[#FEA900]/30" : "bg-white/[0.03] border border-white/10"
                  }`}>
                    <p className={`text-sm sm:text-base font-semibold font-sans leading-relaxed ${
                      isRootCause ? "text-white font-bold" : "text-slate-100"
                    }`}>
                      {item.answer}
                    </p>
                  </div>

                  {/* Detalle y Métrica */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-white/[0.08] text-xs font-mono">
                    <span className="text-slate-400">
                      {item.detail}
                    </span>
                    {item.metric && (
                      <span className="text-[#FEA900] font-bold bg-white/[0.04] px-2.5 py-1 rounded-md self-start sm:self-auto border border-white/10 shrink-0">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  {/* Conector visual hacia abajo (si no es el último) */}
                  {!isRootCause && (
                    <div className="flex justify-center -mb-5 mt-3">
                      <ArrowDown className="w-4 h-4 text-slate-500 animate-bounce" />
                    </div>
                  )}

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* ========================================================
            CONCLUSIÓN EJECUTIVA DE LA CAUSA RAÍZ + GATEWAY A BENCHMARKS
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0F1426] via-[#080B1A] to-[#1A1208] border border-amber-400/40 shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEA900]/15 border border-[#FEA900]/30 text-xs font-mono font-bold text-amber-300">
                <Target className="w-3.5 h-3.5 text-[#FEA900]" />
                <span>RESOLUCIÓN ESTRATÉGICA DEL DIAGNÓSTICO</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-tight">
                El problema de NovaLab no es la falta de talento: es la{" "}
                <span className="text-[#FEA900]">ausencia de un Sistema Operativo</span> de innovación.
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Intentar acelerar el ritmo de experimentos sin resolver la estandarización aguas arriba solo incrementa el retrabajo y la frustración con Riesgos y Legal. La solución no es más burocracia, sino una arquitectura de Product Operations probada en los líderes mundiales.
              </p>
            </div>

            {/* CTA de Navegación hacia la Página 3: BENCHMARKS */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col items-center sm:items-end gap-3">
              <button
                type="button"
                onClick={onNavigateToPage3}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FEA900] via-amber-400 to-orange-500 text-black font-extrabold font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(254,169,0,0.45)] hover:shadow-[0_0_50px_rgba(254,169,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Ver Cómo lo Resuelven los Líderes</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
              <span className="text-[11px] font-mono text-slate-400">
                Avanzar a 03. BENCHMARKS GLOBALES →
              </span>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
};
