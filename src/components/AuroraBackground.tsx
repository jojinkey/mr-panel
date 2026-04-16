"use client";

import { motion } from "framer-motion";

/**
 * Ambient aurora-like gradient animation with warm brownish/gold tones.
 * Creates a soft, organic, flowing glow effect behind the hero content.
 */
export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base warm gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,169,126,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Aurora blob 1 — warm gold, top-left drift */}
      <motion.div
        className="absolute w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,134,11,0.08) 0%, rgba(200,169,126,0.04) 40%, transparent 70%)",
          filter: "blur(80px)",
          top: "-10%",
          left: "-5%",
        }}
        animate={{
          x: [0, 80, 30, 100, 0],
          y: [0, 60, 120, 40, 0],
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora blob 2 — soft cream/beige, center drift */}
      <motion.div
        className="absolute w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245,237,214,0.15) 0%, rgba(139,99,67,0.05) 40%, transparent 70%)",
          filter: "blur(100px)",
          top: "20%",
          right: "10%",
        }}
        animate={{
          x: [0, -60, -100, -30, 0],
          y: [0, 80, 30, 100, 0],
          scale: [1, 1.1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Aurora blob 3 — amber glow, bottom-right */}
      <motion.div
        className="absolute w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,126,0.1) 0%, rgba(122,140,110,0.03) 50%, transparent 70%)",
          filter: "blur(90px)",
          bottom: "5%",
          right: "-5%",
        }}
        animate={{
          x: [0, -40, 20, -60, 0],
          y: [0, -50, -80, -20, 0],
          scale: [1, 1.05, 1.15, 1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Aurora blob 4 — subtle sage/wood hint, left-center */}
      <motion.div
        className="absolute w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,99,67,0.06) 0%, rgba(184,134,11,0.03) 50%, transparent 70%)",
          filter: "blur(70px)",
          top: "40%",
          left: "15%",
        }}
        animate={{
          x: [0, 50, 80, 20, 0],
          y: [0, -30, 40, -50, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />
    </div>
  );
}
