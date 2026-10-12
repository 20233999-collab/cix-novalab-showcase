"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  Calculator, 
  FileCheck2, 
  Lock, 
  AlertCircle
} from "lucide-react";

export const SmartExperimentCanvasSection: React.FC = () => {
  // Estado para la calculadora interactiva de MDE (Muestra Mínima)
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(120000);
  const [baselineConversion, setBaselineConversion] = useState<number>(4.5); // %
  const [mdePercentage, setMdePercentage] = useState<number>(10.0); // % de mejora mínima esperada

  // Cálculo aproximado estándar para MDE A/B test (potencia 80%, alfa 5%)
  // n = 16 * p * (1-p) / (p * delta)^2
  const p = baselineConversion / 100;
  const delta = (p * (mdePercentage / 100));
  const samplePerVariant = Math.round((16 * p * (1 - p)) / (delta * delta));
  const totalSample = samplePerVariant * 2;
  const daysRequired = Math.max(7, Math.ceil((totalSample / (monthlyTraffic / 30))));

  // Estado del catálogo legal preaprobado
  const [selectedLegalClause, setSelectedLegalClause] = useState<string>("plazo-fijo");

  // Estado de la regla de Gating
  const [hasPendingLearningCard, setHasPendingLearningCard] = useState<boolean>(false);

  return (
    <section className="relative w-full py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#070A18] text-white border-t border-white/[0.08]">
      
      {/* Halos ambientales */}
      <div 
        aria-hidden 
        className="absolute top-1/3 left-10 w-[550px] h-[350px] bg-[#FEA900]/10 blur-3xl rounded-full pointer-events-none transform-gpu"
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-[#002A8F]/20 blur-3xl rounded-full pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Header del Componente */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEA900]/15 border border-[#FEA900]/30 text-xs font-mono uppercase tracking-wider text-amber-300 mb-4">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>EL MVP PRINCIPAL (FASE 1) · CALIDAD DE ENTRADA DESDE LA FUENTE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-4">
            Smart Intake &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-amber-200 to-orange-400">
              Experiment Canvas Interactivo
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Eliminamos de raíz el 80% de los rechazos en Riesgos y Legal causados por falta de muestra estadística (<strong className="text-amber-300">34%</strong>), métricas ambiguas (<strong className="text-amber-300">24%</strong>) y textos no aprobados (<strong className="text-amber-300">22%</strong>). Todo integrado directamente en <strong className="text-white">Jira Service Management</strong>.
          </p>
        </div>

        {/* Mockup Interactivo: El Canvas en Acción */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Columna Izquierda: Calculadora MDE en Vivo */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F1435] to-[#080B1A] border border-white/10 shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase">
                <Calculator className="w-4 h-4 text-[#FEA900]" />
                <span>Módulo 1: Calculadora MDE de Muestra en Tiempo Real</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                Poder 80% · α 0.05
              </span>
            </div>

            <p className="text-xs text-slate-300 font-sans mb-6">
              El PM ya no puede ingresar números arbitrarios. Los algoritmos calculan el tamaño de muestra y el tiempo mínimo de corrida requerido para alcanzar significancia estadística:
            </p>

            {/* Sliders de control */}
            <div className="space-y-6 mb-8 font-mono text-xs">
              
              {/* Control 1: Tráfico */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Tráfico Mensual del Canal:</span>
                  <strong className="text-white font-bold">{monthlyTraffic.toLocaleString()} visitas/mes</strong>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="10000"
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FEA900]"
                />
              </div>

              {/* Control 2: Conversión Base */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Conversión Base Actual:</span>
                  <strong className="text-white font-bold">{baselineConversion.toFixed(1)}%</strong>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="20.0"
                  step="0.5"
                  value={baselineConversion}
                  onChange={(e) => setBaselineConversion(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Control 3: MDE */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Mínimo Efecto Detectable (MDE Deseado):</span>
                  <strong className="text-amber-400 font-bold">+{mdePercentage.toFixed(0)}% Lift</strong>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={mdePercentage}
                  onChange={(e) => setMdePercentage(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

            </div>

            {/* Resultado del Cálculo Estadístico */}
            <div className="p-5 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-slate-400">Muestra Requerida Total:</span>
                <strong className="text-emerald-400 text-sm font-bold">
                  {totalSample.toLocaleString()} usuarios ({samplePerVariant.toLocaleString()} / variante)
                </strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Duración Recomendada:</span>
                <strong className="text-[#FEA900] text-sm font-bold">
                  {daysRequired} días corridos (evita sesgo de fin de semana)
                </strong>
              </div>
            </div>

            <div className="mt-4 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resuelve el 34% de rechazos de Riesgos por diseño muestral deficiente.</span>
            </div>

          </div>

          {/* Columna Derecha: Catálogo Legal Preaprobado & Regla de Gating */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Módulo 2: Catálogo Legal */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F1435] to-[#080B1A] border border-white/10 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase">
                  <FileCheck2 className="w-4 h-4 text-[#FEA900]" />
                  <span>Módulo 2: Catálogo de Cláusulas Legales Preaprobadas</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">
                  Asesoría Legal BCP
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans mb-4">
                En vez de redactar descargos por su cuenta en un PPT, el PM selecciona cláusulas estándar validadas por Legal:
              </p>

              {/* Selector de Cláusulas */}
              <div className="grid grid-cols-3 gap-2 mb-4 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedLegalClause("plazo-fijo")}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedLegalClause === "plazo-fijo"
                      ? "bg-[#002A8F] border-[#3B49DF] text-white font-bold"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  Plazo Fijo
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLegalClause("credito")}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedLegalClause === "credito"
                      ? "bg-[#002A8F] border-[#3B49DF] text-white font-bold"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  Crédito Pyme
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLegalClause("yape")}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedLegalClause === "yape"
                      ? "bg-[#002A8F] border-[#3B49DF] text-white font-bold"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  Promoción Yape
                </button>
              </div>

              {/* Cláusula Renderizada */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-xs font-mono text-slate-300">
                <div className="text-slate-500 mb-1">// Cláusula estándar pre-auditada SBS:</div>
                {selectedLegalClause === "plazo-fijo" && (
                  <p className="text-slate-200 font-sans italic">
                    &ldquo;Tasa de Rendimiento Efectiva Anual (TREA) fija en soles calculada a 360 días. Fondos cubiertos por el Fondo de Seguro de Depósitos (FSD). Aplican términos y condiciones en bcp.com.pe.&rdquo;
                  </p>
                )}
                {selectedLegalClause === "credito" && (
                  <p className="text-slate-200 font-sans italic">
                    &ldquo;Tasa de Costo Efectivo Anual (TCEA) máxima calculada según evaluación crediticia. Sujeto a aprobación de capacidad de pago. Banco de Crédito del Perú.&rdquo;
                  </p>
                )}
                {selectedLegalClause === "yape" && (
                  <p className="text-slate-200 font-sans italic">
                    &ldquo;Promoción válida hasta agotar fondo de S/ 50,000 o fecha de vencimiento. Máximo 1 canje por usuario verificado en Yape. No acumulable.&rdquo;
                  </p>
                )}
              </div>

              <div className="mt-4 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Resuelve el 22% de observaciones de Legal por copys o descargos deficientes.</span>
              </div>

            </div>

            {/* Módulo 3: La Regla de Gating en el Formulario */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#140D26] to-[#080B1A] border border-purple-500/20">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-300 uppercase">
                  <Lock className="w-4 h-4 text-purple-400" />
                  <span>Módulo 3: Regla de Gating Infranqueable</span>
                </div>
                <button
                  type="button"
                  onClick={() => setHasPendingLearningCard(!hasPendingLearningCard)}
                  className="text-[11px] font-mono text-purple-300 underline cursor-pointer"
                >
                  Simular {hasPendingLearningCard ? "Ficha Aprobada" : "Ficha Pendiente"}
                </button>
              </div>

              <AnimatePresence mode="wait">
                {hasPendingLearningCard ? (
                  <motion.div
                    key="blocked"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-xl bg-red-950/30 border border-red-500/40 text-xs font-mono text-red-200 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <div>
                      <strong className="block text-red-300 uppercase">SOLICITUD BLOQUEADA POR EL SISTEMA</strong>
                      <span>El laboratorio mantiene pendiente la Ficha de Aprendizaje del experimento EXP-2024-42. No se autoriza nuevo tráfico.</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="allowed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs font-mono text-emerald-200 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <strong className="block text-emerald-300 uppercase">GATING SUPERADO</strong>
                      <span>Todos los experimentos previos cerrados con Ficha de Aprendizaje en el repositorio. Formulario habilitado para envío.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
