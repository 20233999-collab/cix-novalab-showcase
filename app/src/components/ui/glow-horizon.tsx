"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 2.2;

export interface GlowHorizonProps {
  className?: string;
  backgroundColor?: string;
}

export default function GlowHorizonFM({ 
  className,
  backgroundColor = "#080B1A" // Deep CIX Navy
}: GlowHorizonProps) {
  return (
    <motion.div
      className={"absolute w-full h-full pointer-events-none overflow-hidden " + (className ?? "")}
      style={{ isolation: "isolate" }}
      initial={{ y: "80%", opacity: 0, filter: "blur(25px)" }}
      animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: DURATION, ease: EASE }}
    >
      {/* 1. Halo difuso exterior con naranja ardiente (#FE5500 / #FEA900) y morado CIX (#581C87) */}
      <div
        className="absolute top-[320px] left-1/2 -translate-x-1/2 w-[160%] sm:w-[130%] h-[680px] rounded-[100%] will-change-transform"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(254, 169, 0, 0.7) 0%, rgba(254, 85, 0, 0.55) 28%, rgba(183, 28, 34, 0.4) 52%, rgba(108, 13, 79, 0.35) 75%, transparent 92%)",
          filter: "blur(32px)",
          transform: "translateZ(0)",
        }}
      />

      {/* 2. Capa de resplandor intenso cóncavo */}
      <div
        className="absolute top-[360px] left-1/2 -translate-x-1/2 w-[150%] sm:w-[120%] h-[580px] rounded-[100%] will-change-transform"
        style={{
          background: "radial-gradient(ellipse at 50% 45%, rgba(255, 255, 255, 0.95) 0%, rgba(254, 181, 17, 0.85) 20%, rgba(254, 85, 0, 0.75) 42%, rgba(183, 28, 34, 0.55) 65%, rgba(108, 13, 79, 0.45) 80%, transparent 92%)",
          filter: "blur(18px)",
          boxShadow: "0px -10px 45px 8px rgba(254, 85, 0, 0.7), 0px -15px 60px 12px rgba(108, 13, 79, 0.5)",
          transform: "translateZ(0)",
        }}
      />

      {/* 3. Filo luminoso cóncavo: Blanco incandescente al centro -> Naranja Clementine explosivo -> Púrpura morado CIX */}
      <div
        className="absolute top-[400px] left-1/2 -translate-x-1/2 w-[140%] sm:w-[110%] h-[500px] rounded-[100%]"
        style={{
          background: "linear-gradient(90deg, transparent 2%, rgba(108, 13, 79, 0.8) 12%, rgba(183, 28, 34, 0.9) 25%, rgba(254, 85, 0, 0.95) 38%, #FFFFFF 50%, rgba(254, 169, 0, 0.95) 62%, rgba(254, 85, 0, 0.9) 75%, rgba(108, 13, 79, 0.8) 88%, transparent 98%)",
          boxShadow: "0 -6px 30px 2px rgba(255, 255, 255, 0.9), 0 -12px 45px 8px rgba(254, 169, 0, 0.8), 0 -20px 60px 14px rgba(108, 13, 79, 0.6)",
          filter: "blur(2px)",
          transform: "translateZ(0)",
        }}
      />

      {/* 4. Recorte de la parte superior con el fondo (#080B1A) para que la curva mire hacia arriba/adentro */}
      <div
        className="absolute top-[410px] left-1/2 -translate-x-1/2 w-[140%] sm:w-[110%] h-[500px] rounded-[100%]"
        style={{
          background: backgroundColor,
        }}
      />
    </motion.div>
  );
}
