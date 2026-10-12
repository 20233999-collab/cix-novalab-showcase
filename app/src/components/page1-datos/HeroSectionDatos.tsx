"use client";

import { motion } from "framer-motion";
import { ChevronDown, TrendingDown, Clock, Layers } from "lucide-react";
import GlowHorizonFM from "@/components/ui/glow-horizon";
import { AnimatedTitleFM } from "@/components/ui/glow-horizon-utils/animated-title-fm";

export const HeroSectionDatos: React.FC = () => {
  return (
    <section className="relative min-h-[165vh] flex flex-col items-center bg-[#080B1A] text-white overflow-hidden border-b border-slate-800/80">
      
      {/* 1. Componente GlowHorizonFM: Curva cóncava CIX corriendo limpia por debajo de la narrativa */}
      <div className="absolute top-[180px] left-0 right-0 h-[720px] pointer-events-none overflow-hidden">
        <GlowHorizonFM backgroundColor="#080B1A" />
      </div>

      {/* Grid de líneas arquitectónicas sutiles en el fondo */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* ETAPA 1: PANTALLA INICIAL (100vh limpio dedicado solo a la frase y el fondo) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto min-h-[96vh] flex flex-col items-center justify-center px-6 text-center">
        <AnimatedTitleFM open={true} />

        {/* Action CTA: Indicador sutil de scroll hacia abajo al pie de la primera pantalla */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col items-center"
        >
          <motion.a
            href="#hero-cards"
            whileHover={{ y: 2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-[#FEA900]/50 backdrop-blur-xl text-slate-300 hover:text-white transition-all shadow-lg hover:shadow-[#FEA900]/10 cursor-pointer"
          >
            {/* Pequeño punto de pulso ámbar */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FEA900] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FEA900]"></span>
            </span>

            <span className="text-xs font-mono tracking-wider uppercase font-medium">
              Explorar Auditoría
            </span>

            {/* Flecha con animación micro-bounce suave hacia abajo */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-slate-400 group-hover:text-[#FEA900] transition-colors"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* ETAPA 2: TARJETAS DE TELEMETRÍA (Primero las cards) */}
      <div id="hero-cards" className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center">
        {/* Bento Bar Horizontal de Telemetría Clave */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.22,
                delayChildren: 0.15,
              },
            },
          }}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {/* Métrica 1: Déficit de Entregables (Output) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.94 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } 
              },
            }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-white/15 backdrop-blur-xl relative overflow-hidden group hover:border-[#3B49DF]/80 transition-all shadow-lg hover:shadow-[#3B49DF]/25 cursor-default flex flex-col justify-between"
          >
            {/* Animación en Loop 1: Haz de luz viajero continuo (beam gradient sweep) */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none -skew-x-12"
            />

            <div>
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-[10px] font-mono tracking-wider text-white/90 uppercase font-bold">
                  DÉFICIT DE ENTREGABLES (OUTPUT)
                </span>
                <motion.span 
                  animate={{ opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-rose-400 font-mono text-[11px] font-bold flex items-center gap-0.5"
                >
                  <TrendingDown className="w-3 h-3" />
                  -26.7%
                </motion.span>
              </div>
              <div className="flex items-baseline gap-1.5 relative z-10">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  44
                </span>
                <span className="text-xs font-mono text-white/80 font-medium">/ 60 Meta Anual</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1 block relative z-10">
                Déficit del 26.7% vs. meta de 60 exp.
              </span>
            </div>
            
            {/* Barra de progreso con respiración de pulso */}
            <div className="mt-3 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "73.3%" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-[#3B49DF] to-[#FEA900] relative"
              >
                {/* Destello de punta en la barra */}
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_white]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Métrica 2: Ralentización Sistémica (Cycle Time) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.94 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } 
              },
            }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-white/15 backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/80 transition-all shadow-lg hover:shadow-amber-500/25 cursor-default flex flex-col justify-between"
          >
            {/* Animación en Loop 2: Respiración de halo ámbar de advertencia */}
            <motion.div
              animate={{
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-28 h-28 bg-[#FEA900]/15 rounded-full blur-2xl pointer-events-none"
            />

            <div>
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-[10px] font-mono tracking-wider text-white/90 uppercase font-bold">
                  RALENTIZACIÓN SISTÉMICA (CYCLE TIME)
                </span>
                <span className="text-amber-400 font-mono text-[11px] font-bold flex items-center gap-0.5">
                  {/* Icono con sutil rotación en loop tipo segundero */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-3 h-3" />
                  </motion.div>
                  +50%
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 relative z-10">
                <motion.span 
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(254,169,0,0)",
                      "0 0 16px rgba(254,169,0,0.5)",
                      "0 0 0px rgba(254,169,0,0)",
                    ],
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400"
                >
                  57
                </motion.span>
                <span className="text-xs font-mono text-white/80 font-medium">días hábiles en T4</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1 block relative z-10">
                Pasó de 38 días en T1 a 57 días en T4
              </span>
            </div>

            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-amber-300/90 relative z-10">
              Deterioro del 50% en el año
            </div>
          </motion.div>

          {/* Métrica 3: Caída de Eficiencia (Throughput) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.94 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } 
              },
            }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-white/15 backdrop-blur-xl relative overflow-hidden group hover:border-rose-500/80 transition-all shadow-lg hover:shadow-rose-500/30 cursor-default flex flex-col justify-between"
          >
            {/* Animación en Loop 3: Resplandor intermitente suave */}
            <motion.div
              animate={{
                opacity: [0.1, 0.35, 0.1],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 w-28 h-28 bg-rose-500/20 rounded-full blur-2xl pointer-events-none"
            />

            <div>
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-[10px] font-mono tracking-wider text-white/90 uppercase font-bold">
                  CAÍDA DE EFICIENCIA (THROUGHPUT)
                </span>
                <span className="text-rose-400 font-mono text-[11px] font-bold flex items-center gap-0.5">
                  <TrendingDown className="w-3 h-3" />
                  -42.8%
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 relative z-10">
                <motion.span 
                  animate={{
                    scale: [1, 1.025, 1],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl sm:text-3xl font-extrabold font-mono text-rose-500"
                >
                  8
                </motion.span>
                <span className="text-xs font-mono text-white/80 font-medium">exp. en T4 (vs 14 en T1)</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1 block relative z-10">
                Productividad trimestral: 14 (T1) vs. 8 (T4)
              </span>
            </div>

            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-rose-300/90 relative z-10">
              Desplome del 42.8% en el año
            </div>
          </motion.div>

          {/* Métrica 4: Inventario Bloqueado (Backlog) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.94 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } 
              },
            }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-white/15 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-400/80 transition-all shadow-lg hover:shadow-indigo-500/25 cursor-default flex flex-col justify-between"
          >
            {/* Animación en Loop 4: Resplandor azul tenue */}
            <motion.div
              animate={{
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-t from-[#3B49DF]/10 to-transparent pointer-events-none"
            />

            <div>
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-[10px] font-mono tracking-wider text-white/90 uppercase font-bold">
                  INVENTARIO BLOQUEADO (BACKLOG)
                </span>
                <span className="text-slate-200 font-mono text-[11px] font-bold flex items-center gap-1">
                  <motion.div
                    animate={{ y: [-1, 1, -1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Layers className="w-3 h-3 text-[#3B49DF]" />
                  </motion.div>
                  EN COLA
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 relative z-10">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  23
                </span>
                <span className="text-xs font-mono text-white/80 font-medium">ideas de negocio</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1 block relative z-10">
                Acumuladas en cola esperando entrar al flujo
              </span>
            </div>

            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-indigo-300/90 relative z-10">
              Equivale a ~2.9 trimestres de retraso
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ANIMACIÓN DE SCROLL: Indicador 'Diagnóstico' para conectar con la frase */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 pt-4 pb-12"
      >
        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
          Diagnóstico
        </span>
        <div className="relative w-5 h-9 rounded-full border-2 border-slate-700/80 flex items-start justify-center p-1">
          <motion.div
            animate={{
              y: [0, 14, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-2 rounded-full bg-[#FEA900] shadow-[0_0_8px_#FEA900]"
          />
        </div>
      </motion.div>

      {/* ETAPA 3: FRASE DE TRANSICIÓN OPERATIVA (Luego de las tarjetas y el scroll) */}
      <div id="hero-statement" className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10 pb-36 flex flex-col items-center text-center">
        {/* Eyebrow de transición */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FEA900] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEA900]"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
            PRINCIPIO OPERATIVO // EL VALOR DEL DIAGNÓSTICO
          </span>
        </motion.div>

        {/* Cita limpia, sin comillas, con "casi resuelto." en loop */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.18] font-display max-w-4xl mx-auto"
        >
          <span className="text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] inline-block mr-2">
            Un problema bien planteado
          </span>
          <span className="text-slate-200 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] inline-block mr-2 font-semibold">
            es un problema
          </span>
          
          {/* Parte en loop: "casi resuelto." */}
          <motion.span
            className="relative inline-block font-extrabold"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            {/* Halo difuso posterior con pulso */}
            <motion.span
              aria-hidden
              animate={{
                opacity: [0.35, 0.85, 0.35],
                scale: [0.97, 1.1, 0.97],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-x-3 -inset-y-2 bg-gradient-to-r from-[#FEA900]/30 via-orange-500/25 to-[#3B49DF]/25 blur-xl -z-10 rounded-full pointer-events-none"
            />

            {/* Shimmer en loop constante */}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "200% 50%"],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-white via-[48%] to-[#FEA900] drop-shadow-[0_2px_24px_rgba(254,169,0,0.65)]"
            >
              casi resuelto.
            </motion.span>
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
};
