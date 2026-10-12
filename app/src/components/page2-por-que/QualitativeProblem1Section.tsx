"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Quote, 
  BrainCircuit, 
  Lock, 
  Users, 
  CheckCircle2,
  XCircle,
  Terminal,
  Cpu
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const QualitativeProblem1Section: React.FC = () => {
  // Estado para el testimonio activo
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  
  // Estado para el sesgo activo en el explorador visual
  const [activeBiasTab, setActiveBiasTab] = useState<"simon" | "goodhart" | "silos">("simon");

  // 1. Datos clave (Cápsulas de Telemetría) - Estricta paleta CIX BCP
  const keyMetrics = [
    { label: "Tasa de Observación", value: "61%", sub: "27 de 44 exp. devueltos", color: "from-[#FEA900]/15 to-transparent", border: "border-[#FEA900]/30", text: "text-[#FEA900]" },
    { label: "Observaciones Totales", value: "41", sub: "Acumuladas en el año", color: "from-red-500/15 to-transparent", border: "border-red-500/30", text: "text-red-400" },
    { label: "Muestra No Definida", value: "34%", sub: "14 obs. sin cálculo MDE", color: "from-[#3B49DF]/15 to-transparent", border: "border-[#3B49DF]/30", text: "text-blue-300" },
    { label: "Métricas Ausentes", value: "24%", sub: "10 obs. sin umbral de éxito", color: "from-[#FEA900]/15 to-transparent", border: "border-[#FEA900]/30", text: "text-amber-300" },
    { label: "Copy & Comunicación", value: "22%", sub: "9 obs. piezas sin detalle", color: "from-[#3B49DF]/15 to-transparent", border: "border-[#3B49DF]/30", text: "text-blue-200" },
    { label: "Datos Personales (PII)", value: "15%", sub: "6 obs. sin consentimiento", color: "from-red-500/15 to-transparent", border: "border-red-500/30", text: "text-red-400" },
  ];

  // 2. Testimonios oficiales
  const testimonials = [
    {
      role: "Líder del Laboratorio Pymes",
      tag: "Falta de Claridad Normativa",
      quote: "Mandamos el diseño a Riesgos y nos lo devuelven por cosas que nadie nos dijo que había que incluir. Cada ida y vuelta es una semana más.",
      consequence: "Iteraciones a ciegas que dilatan el inicio de experimentación.",
      audioBars: [45, 80, 95, 60, 40, 85, 90, 50, 75, 85, 60, 95, 70, 40]
    },
    {
      role: "Analista de Datos · Lab Inversiones",
      tag: "Definición Reactiva de Métricas",
      quote: "Muchas veces nos damos cuenta al final del experimento de que no medimos lo que necesitábamos para decidir. Las métricas se terminan definiendo sobre la marcha.",
      consequence: "El 43% de las pruebas resultan inconclusas sin valor accionable.",
      audioBars: [55, 75, 40, 90, 65, 45, 80, 70, 95, 50, 80, 60, 85, 50]
    },
    {
      role: "Analista de Riesgos (Segunda Línea)",
      tag: "Recepción de Expedientes Incompletos",
      quote: "Nos llegan diseños incompletos: no sabemos a cuántos clientes va dirigido el experimento ni a cuáles. Todo lo revisamos por correo...",
      consequence: "Defensa natural: frenar el flujo para proteger el riesgo normativo.",
      audioBars: [60, 40, 85, 75, 95, 50, 45, 90, 65, 85, 55, 80, 65, 45]
    },
    {
      role: "Líder del Laboratorio Pagos",
      tag: "Aislamiento en Silos",
      quote: "Armamos una plantilla propia con todo lo que Riesgos y Legal nos suelen pedir. Desde que la usamos, casi no nos observan. Nunca la compartimos con los otros laboratorios, no se nos ocurrió.",
      consequence: "Pagos opera a 36 días mientras los demás laboratorios sufren 52 días.",
      audioBars: [40, 70, 90, 65, 95, 80, 45, 85, 90, 60, 55, 75, 85, 60]
    }
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#080B1A] text-white">
      
      {/* Halos atmosféricos suaves */}
      <div 
        aria-hidden 
        className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-[#FEA900]/10 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#002A8F]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* ========================================================
            1. TÍTULO Y DESCRIPCIÓN LOCAL
           ======================================================== */}
        <div className="max-w-4xl mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/25 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>PROBLEMA PRIORITARIO 1 · LA PALANCA PARETO AGUAS ARRIBA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-6"
          >
            Ausencia de Estandarización y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              Entrada Defectuosa
            </span>
          </motion.h2>

          {/* HUD MINIMALISTA Y FUTURISTA (Reemplazo del bloque de texto denso) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden max-w-3xl"
          >
            {/* Haz de luz sutil superior */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FEA900]/40 to-transparent" />

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FEA900]/10 border border-[#FEA900]/25 text-[#FEA900] font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>ETAPAS 01 & 02: INTAKE ARTESANAL</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>FORMATO LIBRE SIN GOBERNANZA</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/25 text-red-300 font-bold">
                <span>80% DÉFICIT CONCEPTUAL EN ORIGEN</span>
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
            <span className="w-2 h-2 rounded-full bg-[#FEA900]" />
            <span>Telemetría de Entrada (Datos para tener presentes)</span>
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
                <span>EVIDENCIA CUALITATIVA EN TERRENO</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Las Voces del Terreno: <span className="text-[#FEA900]">El Dolor Real</span>
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
              className="absolute w-[450px] h-[300px] bg-[#FEA900]/15 blur-3xl rounded-full pointer-events-none transform-gpu"
            />

            <div className="relative w-full max-w-5xl flex items-center justify-center">
              {testimonials.map((t, index) => {
                // Cálculo de distancia relativa respecto al testimonio activo (-1, 0, 1, etc.)
                let offset = index - activeTestimonial;
                if (offset < -2) offset += testimonials.length;
                if (offset > 2) offset -= testimonials.length;

                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                const isFarLeft = offset < -1;

                // Estilo biselado superior derecho (chamfered corner estilo inspo)
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
                    {/* Indicador de esquina biselada con acento de marca */}
                    <div 
                      className={`absolute top-0 right-0 w-[38px] h-[38px] pointer-events-none ${
                        isCenter 
                          ? "bg-gradient-to-bl from-[#7C2D12] via-[#9A3412] to-transparent opacity-90 shadow-inner" 
                          : "bg-white/10"
                      }`}
                    />

                    {/* Encabezado de la Tarjeta: Avatar / Tag / Rol */}
                    <div className="flex items-start justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        {/* Avatar temático CIX */}
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-black text-sm shadow-md ${
                          isCenter
                            ? "bg-[#080B1A] text-[#FEA900] border border-amber-900/30"
                            : "bg-white/10 text-white border border-white/15"
                        }`}>
                          {t.role.includes("Pymes") ? "PY" : t.role.includes("Inversiones") ? "INV" : t.role.includes("Riesgos") ? "RSG" : "PAG"}
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

                      {/* Mini ecualizador o badge */}
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

                    {/* Cita Textual Principal (Tipografía limpia e impactante) */}
                    <p className={`text-base sm:text-lg font-bold font-sans leading-snug mb-8 tracking-tight ${
                      isCenter ? "text-[#080B1A]" : "text-slate-200"
                    }`}>
                      "{t.quote}"
                    </p>

                    {/* Pie de la Tarjeta: Consecuencia Operativa */}
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

                    {/* Firma estilo '- Rol, Empresa' (como en la imagen de inspo) */}
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
            4. SESGOS COGNITIVOS DEL PROBLEMA 1 (CON DEFINICIONES Y ANIMACIONES EN LOOP)
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
                className="w-10 h-10 rounded-xl bg-[#002A8F]/25 border border-[#3B49DF]/40 flex items-center justify-center text-[#FEA900] shadow-[0_0_15px_rgba(0,42,143,0.4)]"
              >
                <BrainCircuit className="w-5 h-5" />
              </motion.div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#FEA900] font-bold block">
                  SESGOS COGNITIVOS RAÍZ · FUNDAMENTO CIENTÍFICO
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                  Ausencia de Estandarización y Entrada Defectuosa
                </h3>
              </div>
            </div>

            {/* Tabs para alternar entre los 3 sesgos */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/60 border border-white/10 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveBiasTab("simon")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeBiasTab === "simon"
                    ? "bg-[#FEA900] text-black font-bold shadow-[0_0_20px_rgba(254,169,0,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                1. Racionalidad Limitada
              </button>

              <button
                type="button"
                onClick={() => setActiveBiasTab("goodhart")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeBiasTab === "goodhart"
                    ? "bg-[#FEA900] text-black font-bold shadow-[0_0_20px_rgba(254,169,0,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                2. Ley de Goodhart
              </button>

              <button
                type="button"
                onClick={() => setActiveBiasTab("silos")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeBiasTab === "silos"
                    ? "bg-[#FEA900] text-black font-bold shadow-[0_0_20px_rgba(254,169,0,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                3. Sesgo Endogrupal
              </button>
            </div>
          </div>

          {/* Panel Interactivo del Sesgo Activo */}
          <AnimatePresence mode="wait">
            
            {/* SESGO 1: RACIONALIDAD LIMITADA (HERBERT SIMON) */}
            {activeBiasTab === "simon" && (
              <motion.div
                key="simon"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 text-xs font-mono font-bold">
                    DEFINICIÓN CIENTÍFICA · HERBERT SIMON (1957)
                  </span>
                  <h4 className="text-2xl font-bold font-display text-white">
                    Racionalidad Limitada (*Bounded Rationality*)
                  </h4>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#FEA900] font-bold block">
                      Definición del Sesgo:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
                      "Principio psicológico que demuestra que la capacidad de toma de decisiones de los individuos está limitada por la información accesible, las restricciones cognitivas de la memoria de trabajo y el tiempo disponible. Al carecer de un marco estandarizado externo, la mente humana recurre a soluciones 'satisfactorias' en lugar de óptimas, omitiendo sistemáticamente variables críticas que no están explícitamente presentes frente a ella."
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/25 text-xs font-mono text-amber-200">
                    <strong className="text-white">Manifestación en NovaLab:</strong> Al usar PowerPoint libre sin campos obligatorios, el PM omite involuntariamente el cálculo muestral MDE (34%) y la protección de datos PII (15%).
                  </div>
                </div>

                {/* Representación Visual: Lo que ve el PM vs Lo que exige el estándar con animación en loop */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Caja A - Animación en loop de pulso crítico */}
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(239,68,68,0)",
                        "0 0 25px rgba(239,68,68,0.25)",
                        "0 0 0px rgba(239,68,68,0)"
                      ]
                    }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 relative overflow-hidden"
                  >
                    {/* Haz en loop pasando por la caja defectuosa */}
                    <motion.div 
                      aria-hidden
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent pointer-events-none"
                    />

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-red-400">LO QUE VE EL PM (PPT LIBRE)</span>
                      <motion.div
                        animate={{ scale: [1, 1.25, 1], rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <XCircle className="w-4 h-4 text-red-400" />
                      </motion.div>
                    </div>
                    <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                      <li className="flex items-center gap-2 text-red-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                        ✗ Hipótesis vaga: "Probar WhatsApp"
                      </li>
                      <li className="flex items-center gap-2 text-red-200">✗ Muestra: "5,000 clientes" (Sin MDE)</li>
                      <li className="flex items-center gap-2 text-red-200">✗ Métrica: "Aumentar ventas" (Sin umbral)</li>
                      <li className="flex items-center gap-2 text-red-200">✗ Datos: Consentimiento omitido</li>
                    </ul>
                  </motion.div>

                  {/* Caja B - Animación en loop de respiración y estabilidad */}
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(16,185,129,0)",
                        "0 0 25px rgba(16,185,129,0.25)",
                        "0 0 0px rgba(16,185,129,0)"
                      ]
                    }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 relative overflow-hidden"
                  >
                    {/* Haz en loop pasando por la caja de estándar */}
                    <motion.div 
                      aria-hidden
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent pointer-events-none"
                    />

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-emerald-400">ESTÁNDAR PRODUCT OPS</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </motion.div>
                    </div>
                    <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                      <li className="flex items-center gap-2 text-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ✓ Hipótesis Falsable parametrizada
                      </li>
                      <li className="flex items-center gap-2 text-emerald-200">✓ MDE calculado con Power 80%</li>
                      <li className="flex items-center gap-2 text-emerald-200">✓ Métrica Δ ≥ 5% + Guardrails</li>
                      <li className="flex items-center gap-2 text-emerald-200">✓ Cláusulas legales preaprobadas</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* SESGO 2: SESGO DE ACCIÓN & LEY DE GOODHART */}
            {activeBiasTab === "goodhart" && (
              <motion.div
                key="goodhart"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 text-xs font-mono font-bold">
                    DEFINICIÓN CIENTÍFICA · CHARLES GOODHART (1975)
                  </span>
                  <h4 className="text-2xl font-bold font-display text-white">
                    Ley de Goodhart & Sesgo de Acción
                  </h4>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#FEA900] font-bold block">
                      Definición del Sesgo:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
                      "Cuando una medida métrica se convierte en el objetivo directo de evaluación, pierde instantáneamente su valor como indicador confiable. Esto interactúa con el <strong>Sesgo de Acción</strong>: la tendencia psicológica automática a preferir actuar de inmediato (lanzar expedientes rápidamente) antes que planificar con rigor, bajo la creencia intuitiva pero errónea de que la actividad frenética equivale a progreso real."
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/25 text-xs font-mono text-amber-200">
                    <strong className="text-white">Manifestación en NovaLab:</strong> La meta anual de "lanzar 60 experimentos" premió la salida apresurada de documentos incompletos, provocando 61% de retrabajo y alargando el ciclo final a 57 días.
                  </div>
                </div>

                {/* Representación Visual: La trampa de la métrica con animación secuencial en loop */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Resplandor oscilante de fondo */}
                  <motion.div 
                    aria-hidden
                    animate={{ opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/20 blur-2xl rounded-full pointer-events-none"
                  />

                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08] text-xs font-mono">
                    <span className="text-slate-400">Ciclo Búmeran de Incentivos Perversos:</span>
                    <motion.span 
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-red-400 font-bold"
                    >
                      ● EFECTO BÚMERAN ACTIVO
                    </motion.span>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { step: "1. Presión por entregar volumen rápido", tag: "Meta: 60 EXP", border: "border-white/[0.08]", text: "text-amber-300", delay: 0 },
                      { step: "2. Se salta el rigor estadístico y legal", tag: "Entrada Defectuosa", border: "border-white/[0.08]", text: "text-red-300", delay: 0.6 },
                      { step: "3. Riesgos y Legal observan el 61%", tag: "+12 Días de Retraso", border: "border-white/[0.08]", text: "text-rose-400", delay: 1.2 },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          x: [0, 6, 0],
                          borderColor: ["rgba(255,255,255,0.08)", "rgba(254,169,0,0.3)", "rgba(255,255,255,0.08)"]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
                        className={`p-3.5 rounded-xl bg-white/[0.03] border ${item.border} flex items-center justify-between`}
                      >
                        <span className="text-xs text-slate-300">{item.step}</span>
                        <span className={`text-xs font-mono font-bold ${item.text}`}>{item.tag}</span>
                      </motion.div>
                    ))}

                    <motion.div 
                      animate={{ 
                        scale: [1, 1.015, 1],
                        boxShadow: [
                          "0 0 0px rgba(254,169,0,0)",
                          "0 0 30px rgba(254,169,0,0.25)",
                          "0 0 0px rgba(254,169,0,0)"
                        ]
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="p-3.5 rounded-xl bg-[#FEA900]/15 border border-[#FEA900]/40 flex items-center justify-between"
                    >
                      <span className="text-xs text-amber-200 font-bold">Colapso: La prisa por lanzar destruyó la velocidad final</span>
                      <span className="text-xs font-mono text-[#FEA900] font-black">57 DÍAS / -42.8%</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SESGO 3: SESGO ENDOGRUPAL & MALDICIÓN DEL CONOCIMIENTO */}
            {activeBiasTab === "silos" && (
              <motion.div
                key="silos"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 text-xs font-mono font-bold">
                    DEFINICIÓN CIENTÍFICA · PSICOLOGÍA SOCIAL
                  </span>
                  <h4 className="text-2xl font-bold font-display text-white">
                    Sesgo Endogrupal (*In-Group Bias*)
                  </h4>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#FEA900] font-bold block">
                      Definición del Sesgo:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
                      "Patrón cognitivo donde los miembros de un equipo priorizan la cooperación, los recursos y la protección de su propio subgrupo ('nosotros') frente al colectivo general ('ellos'). Se combina con la <strong>Maldición del Conocimiento</strong>: la incapacidad psicológica de reconocer que las herramientas o saberes que uno domina no son evidentes para los demás equipos, perpetuando silos impermeables sin transferencia voluntaria."
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/25 text-xs font-mono text-amber-200">
                    <strong className="text-white">Manifestación en NovaLab:</strong> Pagos resolvió las observaciones creando una plantilla propia con Riesgos, pero "nunca se les ocurrió compartirla", dejando a Pymes e Inversiones con 80% de rechazos.
                  </div>
                </div>

                {/* Representación Visual: El Búnker de Pagos vs Los otros laboratorios con animación en loop */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Silo de Pagos con animación de búnker blindado */}
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(16,185,129,0)",
                        "0 0 30px rgba(16,185,129,0.3)",
                        "0 0 0px rgba(16,185,129,0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-emerald-400">LABORATORIO DE PAGOS</span>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2.2, repeat: Infinity }}
                        >
                          <Lock className="w-4 h-4 text-emerald-400" />
                        </motion.div>
                      </div>
                      <p className="text-xs text-slate-300 mb-3 font-sans">
                        Plantilla propia privada. Aislamiento tribal exitoso.
                      </p>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between text-emerald-200 bg-emerald-500/10 p-1.5 rounded-lg">
                          <span>Observados:</span>
                          <span className="font-bold">29% (Solo 4)</span>
                        </div>
                        <div className="flex justify-between text-emerald-200 bg-emerald-500/10 p-1.5 rounded-lg">
                          <span>Tiempo de ciclo:</span>
                          <span className="font-bold">36 días</span>
                        </div>
                        <div className="flex justify-between text-emerald-200 bg-emerald-500/10 p-1.5 rounded-lg">
                          <span>Conclusivos:</span>
                          <span className="font-bold">79%</span>
                        </div>
                      </div>
                    </div>
                    <span className="mt-4 pt-2 border-t border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Silo Aislado Eficiente
                    </span>
                  </motion.div>

                  {/* Resto de Laboratorios con animación de advertencia en loop */}
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(244,63,94,0)",
                        "0 0 25px rgba(244,63,94,0.25)",
                        "0 0 0px rgba(244,63,94,0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/40 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-rose-400">PYMES, INVERSIONES, SEGUROS</span>
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                        >
                          <Users className="w-4 h-4 text-rose-400" />
                        </motion.div>
                      </div>
                      <p className="text-xs text-slate-300 mb-3 font-sans">
                        Sin transferencia de plantillas. Fricción por desarticulación.
                      </p>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between text-rose-200 bg-rose-500/10 p-1.5 rounded-lg">
                          <span>Observados:</span>
                          <span className="font-bold">78% - 80%</span>
                        </div>
                        <div className="flex justify-between text-rose-200 bg-rose-500/10 p-1.5 rounded-lg">
                          <span>Tiempo de ciclo:</span>
                          <span className="font-bold">50 - 52 días</span>
                        </div>
                        <div className="flex justify-between text-rose-200 bg-rose-500/10 p-1.5 rounded-lg">
                          <span>Conclusivos:</span>
                          <span className="font-bold">40% - 56%</span>
                        </div>
                      </div>
                    </div>
                    <span className="mt-4 pt-2 border-t border-rose-500/20 text-[10px] font-mono text-rose-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                      Fricción por Ausencia de Estándar
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
