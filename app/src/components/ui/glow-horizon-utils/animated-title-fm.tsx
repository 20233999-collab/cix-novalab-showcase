"use client";

import { motion } from "framer-motion";

interface AnimatedTitleProps {
  open?: boolean;
  eyebrow?: string;
  author?: string;
  description?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function AnimatedTitleFM({
  open = true,
  eyebrow = "CIX // MIGUEL AMPUERO",
  author = "W. EDWARDS DEMING · PADRE DEL CONTROL ESTADÍSTICO DE CALIDAD",
  description = ""
}: AnimatedTitleProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.3,
      },
    },
  };

  if (!open) return null;

  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
      {/* Eyebrow badge */}
      <motion.div
        initial={{ opacity: 0, y: -15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md mb-8 shadow-inner"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FEA900] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEA900]"></span>
        </span>
        <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
          {eyebrow}
        </span>
      </motion.div>

      {/* Titular Minimalista, Corporativo y Sobrio con animaciones y loop */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.18] mb-6 font-display max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] inline-block mr-2"
        >
          "En Dios confiamos,
        </motion.span>
        
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="text-slate-200 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] inline-block mr-2.5 font-semibold"
        >
          todos los demás
        </motion.span>
        
        {/* PARTE EN LOOP: "traigan datos." con shimmer continuo, respiración y resplandor CIX */}
        <motion.span
          className="relative inline-block font-extrabold"
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        >
          {/* Halo difuso con pulso de respiración constante */}
          <motion.span
            aria-hidden
            animate={{
              opacity: [0.45, 0.95, 0.45],
              scale: [0.97, 1.12, 0.97],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-x-3 -inset-y-2 bg-gradient-to-r from-[#FEA900]/40 via-orange-500/30 to-[#3B49DF]/30 blur-xl -z-10 rounded-full pointer-events-none"
          />

          {/* Texto en loop infinito de brillo (shimmer metálico Clementine Gold CIX) */}
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "200% 50%"],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEA900] via-white via-[48%] to-[#FEA900] drop-shadow-[0_2px_28px_rgba(254,169,0,0.7)]"
          >
            traigan datos."
          </motion.span>
        </motion.span>
      </motion.h1>

      {/* Autor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex items-center justify-center gap-3 text-xs md:text-sm font-mono text-slate-400 mb-6 uppercase tracking-wider"
      >
        <div className="h-[1px] w-8 bg-[#3B49DF]" />
        <span>{author}</span>
        <div className="h-[1px] w-8 bg-[#3B49DF]" />
      </motion.div>

      {/* Descripción (si se provee) */}
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
