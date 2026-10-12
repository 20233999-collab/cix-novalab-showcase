"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  DatabaseBackup, 
  Quote, 
  BrainCircuit, 
  CopyX, 
  HelpCircle, 
  Terminal, 
  Layers,
  FolderArchive,
  Hourglass,
  Scale
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const QualitativeProblem3Section: React.FC = () => {
  // Testimonio activo para el carrusel en abanico
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  
  // Sesgo activo en el explorador de ciencias del comportamiento
  const [activeBiasTab, setActiveBiasTab] = useState<"hyperbolic" | "confirmation" | "commons">("hyperbolic");

  // 1. Datos clave (Cápsulas de Telemetría Oficiales de P3) - Estricta paleta CIX BCP
  const keyMetrics = [
    { label: "Documentación T1 → T4", value: "50% → 25%", sub: "Colapso a la mitad", color: "from-red-500/15 to-transparent", border: "border-red-500/30", text: "text-red-400" },
    { label: "Promedio Anual Registrado", value: "39%", sub: "Solo 17 de 44 documentados", color: "from-[#FEA900]/15 to-transparent", border: "border-[#FEA900]/30", text: "text-[#FEA900]" },
    { label: "Fuga en Labs Periféricos", value: "20% - 22%", sub: "Pymes y Seguros casi en cero", color: "from-red-500/15 to-transparent", border: "border-red-500/30", text: "text-red-400" },
    { label: "Pruebas Inconclusas", value: "43%", sub: "19 de 44 sin valor de negocio", color: "from-[#002A8F]/15 to-transparent", border: "border-[#3B49DF]/30", text: "text-blue-300" },
    { label: "Tiempo Perdido en Vacío", value: "38 MESES", sub: "19 exp. x 2 meses c/u tirados", color: "from-red-500/15 to-transparent", border: "border-red-500/30", text: "text-red-400" },
    { label: "Frecuencia de Duplicidad", value: "ALTA", sub: "Reinvención de la rueda entre labs", color: "from-[#FEA900]/15 to-transparent", border: "border-[#FEA900]/30", text: "text-amber-300" },
  ];

  // 2. Testimonios oficiales del Problema 3
  const testimonials = [
    {
      role: "Product Manager · Lab Seguros",
      tag: "Reinvención de la Rueda y Duplicidad",
      quote: "No sé qué han probado los otros laboratorios. Hace poco lanzamos un experimento de notificaciones de pago y después me enteré de que Pymes había probado algo casi igual meses antes.",
      consequence: "Desperdicio de meses de desarrollo y presupuesto repitiendo hipótesis ya descartadas.",
      audioBars: [50, 80, 95, 65, 45, 90, 85, 60, 75, 95, 70, 50, 85, 40]
    },
    {
      role: "Encuesta de Clima Operativo NovaLab",
      tag: "Factor Peor Evaluado del Centro",
      quote: "En la evaluación general del centro de innovación, el indicador con la puntuación más baja de todo el equipo fue la 'posibilidad de acceder y consultar lo que aprendieron otros laboratorios'.",
      consequence: "Sensación de aislamiento metodológico y frustración entre investigadores.",
      audioBars: [60, 40, 85, 70, 95, 55, 80, 90, 65, 85, 60, 75, 90, 45]
    },
    {
      role: "Analista de Datos · Lab Inversiones",
      tag: "Urgencia del Próximo Proyecto",
      quote: "Termina el experimento y de inmediato te piden el siguiente. Nadie te da tiempo para escribir un reporte ni nadie te lo pide. El conocimiento se queda en el PPT de la compu.",
      consequence: "La falta de un paso de cierre obligatorio borra la memoria organizacional.",
      audioBars: [45, 75, 60, 90, 70, 50, 85, 65, 95, 80, 55, 75, 85, 50]
    },
    {
      role: "Scrum Master · Lab Pymes",
      tag: "Dispersión en Carpetas Locales",
      quote: "Si la persona que diseñó el experimento se va del banco o cambia de célula, nadie sabe qué se hizo. No hay un buscador ni un índice donde ver qué funcionó y qué no.",
      consequence: "Amnesia institucional total ante la rotación natural del talento.",
      audioBars: [55, 70, 85, 60, 95, 75, 50, 85, 90, 65, 80, 60, 90, 45]
    }
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#080B1A] text-white border-t border-white/[0.06]">
      
      {/* Halos atmosféricos suaves en GPU */}
      <div 
        aria-hidden 
        className="absolute top-10 left-1/3 w-[500px] h-[300px] bg-[#3B49DF]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#FEA900]/10 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* ========================================================
            1. TÍTULO Y DESCRIPCIÓN LOCAL (PROBLEMA 3)
           ======================================================== */}
        <div className="max-w-4xl mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono uppercase tracking-wider text-blue-300 mb-4"
          >
            <DatabaseBackup className="w-3.5 h-3.5 text-blue-400" />
            <span>PROBLEMA PRIORITARIO 3 · LA FUGA DEL CAPITAL COGNITIVO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-6"
          >
            Amnesia Institucional y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#FEA900] to-amber-300">
              Fuga de Aprendizajes
            </span>
          </motion.h2>

          {/* HUD MINIMALISTA Y FUTURISTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden max-w-3xl"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-300 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>ETAPA 07: CIERRE SIN GATING</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/25 text-red-300">
                <FolderArchive className="w-3.5 h-3.5 text-red-400" />
                <span>ZERO KNOWLEDGE MANAGEMENT</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-400/25 text-amber-300 font-bold">
                <span>REDUNDANCIA SILENCIOSA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            2. DATOS CLAVE EN CARDS / CÁPSULAS DE TELEMETRÍA
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Telemetría de Conocimiento (Pérdida de Memoria y Calidad Científica)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {keyMetrics.map((item, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-2xl bg-gradient-to-b ${item.color} border ${item.border} backdrop-blur-md flex flex-col justify-between`}
              >
                <span className="text-[11px] font-mono text-slate-300 leading-tight block mb-2">
                  {item.label}
                </span>
                <div>
                  <span className={`text-2xl sm:text-3xl font-black font-mono ${item.text} block leading-none mb-1`}>
                    {item.value}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block leading-tight">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            3. TESTIMONIOS: LAS VOCES DEL TERRENO (ESTILO INSPO ANGULADO)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-24"
        >
          {/* Header con Badge y Controles */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-amber-300 uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-[#FEA900]" />
                <span>EVIDENCIA CUALITATIVA EN CULTURA Y MEMORIA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Las Voces del Terreno: <span className="text-blue-400">La Amnesia Colectiva</span>
              </h3>
            </div>
            
            {/* Controles de navegación de testimonios */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">
                {activeTestimonial + 1} / {testimonials.length}
              </span>
              <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Testimonio anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Testimonio siguiente"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Carrusel en Abanico / Fanning Cards estilo /inspo/testimonios.png */}
          <div className="relative py-8 min-h-[460px] flex items-center justify-center overflow-visible">
            
            {/* Fondo de resplandor centrado */}
            <div 
              aria-hidden
              className="absolute w-[450px] h-[300px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none transform-gpu"
            />

            <div className="relative w-full max-w-5xl flex items-center justify-center">
              {testimonials.map((t, index) => {
                let offset = index - activeTestimonial;
                if (offset < -2) offset += testimonials.length;
                if (offset > 2) offset -= testimonials.length;

                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                const isFarLeft = offset < -1;

                const chamferClip = {
                  clipPath: "polygon(0 0, calc(100% - 38px) 0, 100% 38px, 100% 100%, 0 100%)"
                };

                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    animate={{
                      scale: isCenter ? 1.05 : isLeft || isRight ? 0.9 : 0.8,
                      x: isCenter ? 0 : isLeft ? -280 : isRight ? 280 : isFarLeft ? -440 : 440,
                      rotate: isCenter ? 0 : isLeft ? -4 : isRight ? 4 : isFarLeft ? -7 : 7,
                      zIndex: isCenter ? 30 : isLeft || isRight ? 20 : 10,
                      opacity: isCenter ? 1 : isLeft || isRight ? 0.55 : 0.25,
                    }}
                    transition={{ duration: 0.5, ease: EASE }}
                    style={chamferClip}
                    className={`absolute w-full max-w-md sm:max-w-[420px] p-8 sm:p-9 cursor-pointer transition-colors duration-300 ${
                      isCenter
                        ? "bg-gradient-to-br from-[#FEA900] via-[#F59E0B] to-[#D97706] text-[#080B1A] shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_60px_rgba(254,169,0,0.5)] border-t border-l border-b border-amber-300"
                        : "bg-[#0F1426] text-slate-300 border border-white/10 hover:border-amber-400/40"
                    }`}
                  >
                    {/* Indicador de esquina biselada */}
                    <div 
                      className={`absolute top-0 right-0 w-[38px] h-[38px] pointer-events-none ${
                        isCenter 
                          ? "bg-gradient-to-bl from-[#7C2D12] via-[#9A3412] to-transparent opacity-90 shadow-inner" 
                          : "bg-white/10"
                      }`}
                    />

                    {/* Encabezado de la Tarjeta */}
                    <div className="flex items-start justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-black text-sm shadow-md ${
                          isCenter
                            ? "bg-[#080B1A] text-[#FEA900] border border-amber-900/30"
                            : "bg-white/10 text-white border border-white/15"
                        }`}>
                          {t.role.includes("Seguros") ? "SEG" : t.role.includes("Encuesta") ? "ENC" : t.role.includes("Inversiones") ? "INV" : "PYM"}
                        </div>
                        <div>
                          <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                            isCenter ? "text-[#080B1A]/85" : "text-[#FEA900]"
                          }`}>
                            {t.tag}
                          </span>
                          <span className={`text-xs font-mono font-bold block ${
                            isCenter ? "text-[#080B1A]/70" : "text-slate-400"
                          }`}>
                            {t.role.split("·")[0]}
                          </span>
                        </div>
                      </div>

                      {/* Ecualizador animado */}
                      {isCenter && (
                        <div className="flex items-center gap-0.5 h-4 pt-1">
                          {t.audioBars.slice(0, 7).map((h, i) => (
                            <motion.span
                              key={i}
                              animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
                              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.08 }}
                              className="w-1 bg-[#080B1A] rounded-full inline-block"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Cita Textual */}
                    <p className={`text-base sm:text-lg font-bold font-sans leading-snug mb-8 tracking-tight ${
                      isCenter ? "text-[#080B1A]" : "text-slate-200"
                    }`}>
                      "{t.quote}"
                    </p>

                    {/* Impacto Sistémico */}
                    <div className={`pt-4 border-t ${
                      isCenter ? "border-black/15" : "border-white/10"
                    }`}>
                      <span className={`text-[10px] font-mono uppercase block mb-1 font-extrabold ${
                        isCenter ? "text-[#7C2D12]" : "text-slate-400"
                      }`}>
                        Impacto Sistémico:
                      </span>
                      <p className={`text-xs font-mono font-bold leading-relaxed ${
                        isCenter ? "text-[#431407]" : "text-amber-300"
                      }`}>
                        {t.consequence}
                      </p>
                    </div>

                    {/* Firma */}
                    <div className="mt-4 pt-2">
                      <span className={`text-[11px] font-mono italic block font-semibold ${
                        isCenter ? "text-[#080B1A]/75" : "text-slate-400"
                      }`}>
                        — {t.role}
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Selector de Píldoras Rápidas Abajo */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTestimonial(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeTestimonial === idx
                    ? "bg-[#FEA900] text-black font-bold shadow-[0_0_15px_rgba(254,169,0,0.4)]"
                    : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]"
                }`}
              >
                {t.role.split("·")[0].trim()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            4. SESGOS COGNITIVOS DEL PROBLEMA 3 (CON DEFINICIONES Y ANIMACIONES EN LOOP)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
        >
          {/* Header del Bloque de Sesgos con el Título del Problema */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                <BrainCircuit className="w-5 h-5" />
              </motion.div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold block">
                  SESGOS COGNITIVOS RAÍZ · FUNDAMENTO CIENTÍFICO
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                  Amnesia Institucional y Fuga de Aprendizajes
                </h3>
              </div>
            </div>

            {/* Tabs para alternar entre los 3 sesgos de P3 */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/60 border border-white/10 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveBiasTab("hyperbolic")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeBiasTab === "hyperbolic"
                    ? "bg-[#FEA900] text-black font-bold shadow-[0_0_20px_rgba(254,169,0,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                1. Descuento Hiperbólico
              </button>

              <button
                type="button"
                onClick={() => setActiveBiasTab("confirmation")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeBiasTab === "confirmation"
                    ? "bg-[#FEA900] text-black font-bold shadow-[0_0_20px_rgba(254,169,0,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                2. Sesgo de Confirmación
              </button>

              <button
                type="button"
                onClick={() => setActiveBiasTab("commons")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeBiasTab === "commons"
                    ? "bg-[#FEA900] text-black font-bold shadow-[0_0_20px_rgba(254,169,0,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                3. Tragedia de los Comunes
              </button>
            </div>
          </div>

          {/* Panel Interactivo del Sesgo Activo */}
          <AnimatePresence mode="wait">
            
            {/* SESGO 1: DESCUENTO HIPERBÓLICO / PRESENT BIAS */}
            {activeBiasTab === "hyperbolic" && (
              <motion.div
                key="hyperbolic"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 text-xs font-mono font-bold">
                    DEFINICIÓN CIENTÍFICA · AINSLIE & LAIBSON (1997)
                  </span>
                  <h4 className="text-2xl font-bold font-display text-white">
                    Descuento Hiperbólico (*Present Bias*)
                  </h4>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#FEA900] font-bold block">
                      Definición del Sesgo:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
                      "Predisposición cognitiva donde los seres humanos sobrevaloran de forma extrema las recompensas inmediatas en el presente a expensas de beneficios acumulativos mucho más valiosos en el futuro. Ante la ausencia de un compromiso estructural rígido, cualquier tarea cuyos costos sean inmediatos y sus beneficios diferidos tiende a postergarse indefinidamente."
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-200">
                    <strong className="text-white">Manifestación en NovaLab:</strong> Iniciar un nuevo experimento otorga visibilidad y gratificación inmediata. Escribir los aprendizajes del experimento pasado solo beneficia al banco en un futuro abstracto: la documentación se desplomó del 50% al 25%.
                  </div>
                </div>

                {/* Representación Visual: Gratificación Inmediata vs Memoria Futura */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Recompensa Inmediata */}
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(254,169,0,0)",
                        "0 0 25px rgba(254,169,0,0.25)",
                        "0 0 0px rgba(254,169,0,0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="p-5 rounded-2xl bg-[#FEA900]/10 border border-amber-400/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-amber-300">LANZAR NUEVO PROYECTO</span>
                        <Hourglass className="w-4 h-4 text-[#FEA900]" />
                      </div>
                      <p className="text-xs text-slate-300 mb-3 font-sans">
                        Gratificación en el Presente (T=0)
                      </p>
                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="p-2 rounded bg-black/40 border border-amber-400/20 text-amber-200">
                          <span className="block text-[10px] text-slate-400">BENEFICIO PERCIBIDO:</span>
                          <strong>Visibilidad Inmediata ante Jefaturas</strong>
                        </div>
                        <div className="p-2 rounded bg-black/40 border border-white/10 text-slate-300">
                          <span className="block text-[10px] text-slate-400">ESFUERZO EMOCIONAL:</span>
                          <span>Bajo (Adrenalina de inicio)</span>
                        </div>
                      </div>
                    </div>
                    <span className="mt-4 pt-2 border-t border-amber-400/20 text-[10px] font-mono text-amber-300 font-bold">
                      COMPORTAMIENTO PRIORIZADO
                    </span>
                  </motion.div>

                  {/* Documentar Aprendizajes */}
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(239,68,68,0)",
                        "0 0 25px rgba(239,68,68,0.25)",
                        "0 0 0px rgba(239,68,68,0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-red-400">DOCUMENTAR ETAPA 07</span>
                        <FolderArchive className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-xs text-slate-300 mb-3 font-sans">
                        Beneficio Diferido y Difuso (T+1 año)
                      </p>
                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="p-2 rounded bg-black/40 border border-red-500/20 text-red-200">
                          <span className="block text-[10px] text-slate-400">COSTO INMEDIATO:</span>
                          <strong>Tiempo de redacción analítica</strong>
                        </div>
                        <div className="p-2 rounded bg-black/40 border border-red-500/20 text-red-200">
                          <span className="block text-[10px] text-slate-400">RECONOCIMIENTO FORMAL:</span>
                          <strong>Cero incentivo en el OKR actual</strong>
                        </div>
                      </div>
                    </div>
                    <span className="mt-4 pt-2 border-t border-red-500/20 text-[10px] font-mono text-red-400 font-bold">
                      DESPLOME A SOLO 25% EN T4
                    </span>
                  </motion.div>

                </div>
              </motion.div>
            )}

            {/* SESGO 2: SESGO DE CONFIRMACIÓN */}
            {activeBiasTab === "confirmation" && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 text-xs font-mono font-bold">
                    DEFINICIÓN CIENTÍFICA · PETER WASON (1960)
                  </span>
                  <h4 className="text-2xl font-bold font-display text-white">
                    Sesgo de Confirmación (*Confirmation Bias*)
                  </h4>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#FEA900] font-bold block">
                      Definición del Sesgo:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
                      "Tendencia psicológica fundamental a buscar, interpretar, favorecer y recordar únicamente aquella información que confirme las creencias, hipótesis o deseos preexistentes, descartando sistemáticamente cualquier evidencia refutatoria o contradictoria."
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/25 text-xs font-mono text-amber-200">
                    <strong className="text-white">Manifestación en NovaLab:</strong> Al definir las métricas "sobre la marcha" y sin umbral de éxito falsable (24% de observaciones), los equipos amoldaron los datos para no admitir el fracaso de la idea: 43% de las pruebas resultaron inconclusas sin valor accionable.
                  </div>
                </div>

                {/* Representación Visual: El 43% de Inconclusividad con animación en loop */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08] text-xs font-mono">
                    <span className="text-slate-400">Ciencia Rigurosa vs Experimentación Teatral:</span>
                    <span className="text-red-400 font-bold">19 Pruebas Inconclusas</span>
                  </div>

                  <div className="space-y-3">
                    <motion.div 
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-red-500/30 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <CopyX className="w-4 h-4 text-red-400" />
                        <div>
                          <span className="text-xs font-bold text-white block">Métrica Definida Post-Lanzamiento</span>
                          <span className="text-[10px] font-mono text-slate-400">Ajuste de datos para "probar que funcionó"</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-red-400 bg-red-500/15 px-2.5 py-1 rounded-lg">
                        Inconcluso
                      </span>
                    </motion.div>

                    <motion.div 
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-emerald-400" />
                        <div>
                          <span className="text-xs font-bold text-white block">Hipótesis Falsable Previa (Estándar Ops)</span>
                          <span className="text-[10px] font-mono text-slate-400">Criterio estricto de éxito o descarte</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-lg">
                        Conclusivo
                      </span>
                    </motion.div>

                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-xs font-mono text-red-200 text-center">
                      ⚠ Impacto: 38 meses-hombre de trabajo consumidos sin aprender si las hipótesis eran válidas o falsas.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SESGO 3: TRAGEDIA DE LOS COMUNES */}
            {activeBiasTab === "commons" && (
              <motion.div
                key="commons"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 text-xs font-mono font-bold">
                    DEFINICIÓN CIENTÍFICA · GARRETT HARDIN (1968)
                  </span>
                  <h4 className="text-2xl font-bold font-display text-white">
                    Tragedia de los Bienes Comunes
                  </h4>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#FEA900] font-bold block">
                      Definición del Sesgo:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
                      "Dilema social en el que múltiples individuos o equipos, actuando de forma independiente y racional en búsqueda de su propio interés local, terminan por agotar, descuidar y destruir un recurso colectivo compartido que beneficia a todos, debido a la ausencia de reglas de gobernanza que protejan la infraestructura común."
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-400/25 text-xs font-mono text-blue-200">
                    <strong className="text-white">Manifestación en NovaLab:</strong> La base de conocimiento es el bien común. Como ningún laboratorio tiene incentivos para nutrirlo, todos lo abandonan: Seguros terminó probando a ciegas una idea que Pymes ya había descartado meses antes.
                  </div>
                </div>

                {/* Representación Visual: Silos Desconectados vs Repositorio Central con animación en loop */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* El Bien Común Abandonado (Realidad Actual) */}
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(239,68,68,0)",
                        "0 0 25px rgba(239,68,68,0.25)",
                        "0 0 0px rgba(239,68,68,0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-red-400">BIEN COMÚN ABANDONADO</span>
                        <Scale className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-xs text-slate-300 mb-3 font-sans">
                        Carpetas locales aisladas. Cero gobernanza de repositorio.
                      </p>
                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="p-2 rounded bg-black/40 border border-red-500/20 text-red-300">
                          <span>• Pymes repite notificaciones de Seguros</span>
                        </div>
                        <div className="p-2 rounded bg-black/40 border border-red-500/20 text-red-300">
                          <span>• Inversiones no accede a métricas de Pagos</span>
                        </div>
                      </div>
                    </div>
                    <span className="mt-4 pt-2 border-t border-red-500/20 text-[10px] font-mono text-red-400 font-bold">
                      REDUNDANCIA SILENCIOSA Y GASTO DOBLE
                    </span>
                  </motion.div>

                  {/* Knowledge Repository con RAG (Modelo To-Be) */}
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(16,185,129,0)",
                        "0 0 25px rgba(16,185,129,0.25)",
                        "0 0 0px rgba(16,185,129,0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-emerald-400">BCP BRAIN · REPOSITORIO VIVO</span>
                        <Layers className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-xs text-slate-300 mb-3 font-sans">
                        Gobernanza activa con indexación semántica y búsqueda RAG.
                      </p>
                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="p-2 rounded bg-black/40 border border-emerald-500/20 text-emerald-200">
                          <span className="block text-[10px] text-slate-400">GATING DE CIERRE:</span>
                          <strong className="text-emerald-300">No hay nuevo exp sin cerrar el anterior</strong>
                        </div>
                        <div className="p-2 rounded bg-black/40 border border-emerald-500/20 text-emerald-200">
                          <span className="block text-[10px] text-slate-400">DETECCIÓN DE DUPLICIDAD:</span>
                          <strong className="text-emerald-300">Alertas semánticas automáticas</strong>
                        </div>
                      </div>
                    </div>
                    <span className="mt-4 pt-2 border-t border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-bold">
                      100% CAPITALIZACIÓN DEL APRENDIZAJE
                    </span>
                  </motion.div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>

      </div>

    </section>
  );
};
