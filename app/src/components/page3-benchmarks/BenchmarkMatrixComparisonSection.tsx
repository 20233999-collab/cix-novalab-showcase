"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRightLeft, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Sliders, 
  FlaskConical, 
  BrainCircuit,
  Zap
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const BenchmarkMatrixComparisonSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: "1. Aprobación y Gobernanza",
      icon: ShieldCheck,
      novalab: {
        status: "FALLA SECUENCIAL WATERFALL",
        badge: "61% Observados / 20 Días",
        color: "border-red-500/30 bg-red-950/20 text-red-300",
        points: [
          "Revisión lineal asincrónica por hilos de correo (Lab → Riesgos → Legal).",
          "Si Legal encuentra un copy observado al final, se resetea todo a cero (+12 días).",
          "Sobrecosto temporal de +150% (de 8 a 20 días hábiles por prueba).",
          "23 ideas de negocio varadas en el backlog sin poder iniciar."
        ]
      },
      benchmark: {
        leader: "CAPITAL ONE & BBVA",
        status: "COMPLIANCE-AS-CODE & TRIAJE DINÁMICO",
        badge: "Green Lane <24h / Red Lane 3-5d",
        color: "border-emerald-500/30 bg-emerald-950/20 text-emerald-300",
        points: [
          "Políticas de privacidad y PII ejecutadas por código en CI/CD con Open Policy Agent (OPA).",
          "Triaje de 3 carriles: Green Lane (<24h auto), Yellow Lane (48-72h), Red Lane (Comité concurrente).",
          "Reversibilidad técnica garantizada con Feature Flags (LaunchDarkly / Confidence).",
          "Cero solicitudes gestionadas por correo: 70% de pruebas aprobadas en <48 horas."
        ]
      }
    },
    {
      id: 1,
      title: "2. Estandarización y Silos",
      icon: Sliders,
      novalab: {
        status: "INTAKE ARTESANAL EN SILOS",
        badge: "80% Déficit Conceptual",
        color: "border-red-500/30 bg-red-950/20 text-red-300",
        points: [
          "Cada laboratorio utiliza formatos propios en PPT o Excel sin campos obligatorios.",
          "El laboratorio de Pagos aisló su plantilla exitosa (29% observados) sin compartirla.",
          "Pymes y Seguros operan a ciegas sufriendo 80% y 78% de observaciones.",
          "Product Operations inexistente: los equipos 'descubren las reglas' al ser rebotados."
        ]
      },
      benchmark: {
        leader: "NUBANK & DBS BANK",
        status: "PRODUCT OPS & GOLDEN PATH",
        badge: "nuFormer & 2-in-a-Box",
        color: "border-[#FEA900]/30 bg-amber-500/10 text-amber-300",
        points: [
          "Product Operations actúa como habilitador de infraestructura y procesos transversales.",
          "Golden Path universal (nuFormer): plantillas y modelos de datos pre-validados para toda la región.",
          "Smart Intake Form con validación matemática obligatoria de muestra (MDE) antes del envío.",
          "Modelo 2-in-a-Box de DBS: liderazgo dual (Negocio + TI) con OKRs unificados."
        ]
      }
    },
    {
      id: 2,
      title: "3. Rigor Estadístico y Métricas",
      icon: FlaskConical,
      novalab: {
        status: "MÉTRICAS REACTIVAS POST-HOC",
        badge: "43% Pruebas Inconclusas",
        color: "border-red-500/30 bg-red-950/20 text-red-300",
        points: [
          "La conclusividad cayó del 64% al 50%: 19 de 44 experimentos no arrojaron valor de negocio.",
          "Las métricas se definen sobre la marcha o al final para 'probar que la idea funcionó'.",
          "80% de los rechazos se concentran en muestras (34%) y métricas ausentes (24%).",
          "Presión de Goodhart por cantidad (meta: 60) que destruyó la calidad científica."
        ]
      },
      benchmark: {
        leader: "SPOTIFY CONFIDENCE & PENDO",
        status: "SALT MACHINE & GUARDRAIL METRICS",
        badge: "64% Learning Rate",
        color: "border-blue-500/30 bg-blue-950/20 text-blue-300",
        points: [
          "Salt Machine: hashing criptográfico de usuarios para ejecutar +500 tests sin contaminación.",
          "Pre-registro congelado obligatorio de MDE, hipótesis falsable y umbral de éxito.",
          "Guardrail Metrics: si el test degrada latencia o reclamos en >5%, se apaga automáticamente.",
          "Cambio cultural maestro: de Win Rate (12%) a Learning Rate (64% decisiones firmes)."
        ]
      }
    },
    {
      id: 3,
      title: "4. Memoria Organizacional",
      icon: BrainCircuit,
      novalab: {
        status: "AMNESIA COLECTIVA Y FUGA",
        badge: "25% Documentado en T4",
        color: "border-red-500/30 bg-red-950/20 text-red-300",
        points: [
          "La etapa de documentación es tratada como un paso opcional sin medición de tiempo.",
          "Descuento hiperbólico: los equipos saltan de inmediato al siguiente proyecto sin registrar nada.",
          "Dispersión de aprendizajes en carpetas compartidas locales de computadoras personales.",
          "Duplicidad real: Seguros repitió a ciegas un test que Pymes ya había descartado."
        ]
      },
      benchmark: {
        leader: "AIRBNB & RAG REPOSITORIES",
        status: "INVESTIGACIÓN COMO CÓDIGO & GATING",
        badge: "Zero Duplicidad / RAG Search",
        color: "border-emerald-500/30 bg-emerald-950/20 text-emerald-300",
        points: [
          "Airbnb Knowledge Repo: fichas de experimentos en Markdown/YAML revisadas con Pull Requests (PR).",
          "Regla de Gating Infranqueable: 'Sin Ficha de Aprendizaje aprobada = No nuevo experimento'.",
          "Buscador Semántico RAG: consultas en lenguaje natural que sintetizan resultados históricos.",
          "100% de capitalización del aprendizaje frente a la rotación natural del talento."
        ]
      }
    }
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#060814] text-white border-t border-white/[0.08]">
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/10 border border-[#FEA900]/30 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4">
            <ArrowRightLeft className="w-3.5 h-3.5 text-[#FEA900]" />
            <span>MATRIZ COMPARATIVA DE ALTO IMPACTO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            NovaLab vs.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              El Paradigma Global
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            El contraste directo entre el modelo artesanal secuencial y las soluciones de arquitectura operativa implementadas por la élite tecnológica internacional.
          </p>
        </div>

        {/* Píldoras de Navegación de los 4 Ejes */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-mono font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#FEA900] text-black shadow-[0_0_25px_rgba(254,169,0,0.4)] border border-amber-300 scale-105"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-black" : "text-[#FEA900]"}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Comparativo Dinámico: NovaLab (Izquierda) vs Benchmark (Derecha) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
          >
            {/* Tarjeta Izquierda: Situación Actual NovaLab */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-red-950/25 to-black/60 border border-red-500/35 backdrop-blur-xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                      NOVALAB (SITUACIÓN ACTUAL BCP)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                    {pillars[activePillar].novalab.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-6">
                  {pillars[activePillar].novalab.status}
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm font-sans text-slate-300">
                  {pillars[activePillar].novalab.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 animate-pulse" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-red-500/20 text-xs font-mono text-red-300/80 flex items-center justify-between">
                <span>Impacto en Throughput:</span>
                <strong className="text-red-400">Destrucción de Velocidad (-42.8%)</strong>
              </div>
            </div>

            {/* Tarjeta Derecha: Paradigma Benchmark Global */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#002A8F]/25 via-black/60 to-[#0A122C]/90 border border-[#3B49DF]/40 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,42,143,0.3)] flex flex-col justify-between relative overflow-hidden">
              <div 
                aria-hidden
                className="absolute top-0 right-0 w-48 h-48 bg-[#FEA900]/15 blur-3xl rounded-full pointer-events-none"
              />

              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                      {pillars[activePillar].benchmark.leader}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-[#FEA900] text-black shadow-md">
                    {pillars[activePillar].benchmark.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-6">
                  {pillars[activePillar].benchmark.status}
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm font-sans text-slate-200">
                  {pillars[activePillar].benchmark.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FEA900] mt-2 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FEA900]" />
                  <span>Resultado Probado:</span>
                </span>
                <strong className="text-white">+300% Capacidad sin Fricción</strong>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
};
