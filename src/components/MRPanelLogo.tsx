"use client";

import { motion } from "framer-motion";

interface MRPanelLogoProps {
  variant?: "light" | "dark";
  className?: string;
  animated?: boolean;
}

export default function MRPanelLogo({
  variant = "dark",
  className = "",
  animated = false,
}: MRPanelLogoProps) {
  const color = variant === "dark" ? "#4A2E1A" : "#F5EDD6";
  const grainColor = variant === "dark" ? "#8B6343" : "#C8A97E";

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" as const },
    },
  };

  const fillVariants = {
    hidden: { fillOpacity: 0 },
    visible: {
      fillOpacity: 1,
      transition: { duration: 0.8, delay: 1.8 },
    },
  };

  if (!animated) {
    return (
      <svg
        viewBox="0 0 280 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Plywood layers icon */}
        <rect x="0" y="12" width="24" height="3" rx="1" fill={grainColor} />
        <rect x="0" y="19" width="24" height="3" rx="1" fill={color} />
        <rect x="0" y="26" width="24" height="3" rx="1" fill={grainColor} />
        <rect x="0" y="33" width="24" height="3" rx="1" fill={color} />
        <rect x="0" y="40" width="24" height="3" rx="1" fill={grainColor} />

        {/* M */}
        <path
          d="M36 10 L36 46 L40 46 L40 18 L52 34 L64 18 L64 46 L68 46 L68 10 L52 30 Z"
          fill={color}
        />
        {/* Wood grain lines in M */}
        <line x1="38" y1="24" x2="42" y2="24" stroke={grainColor} strokeWidth="0.8" />
        <line x1="38" y1="30" x2="42" y2="30" stroke={grainColor} strokeWidth="0.8" />
        <line x1="38" y1="36" x2="42" y2="36" stroke={grainColor} strokeWidth="0.8" />
        <line x1="62" y1="24" x2="66" y2="24" stroke={grainColor} strokeWidth="0.8" />
        <line x1="62" y1="30" x2="66" y2="30" stroke={grainColor} strokeWidth="0.8" />
        <line x1="62" y1="36" x2="66" y2="36" stroke={grainColor} strokeWidth="0.8" />

        {/* R */}
        <path
          d="M80 10 L80 46 L84 46 L84 32 L96 32 Q106 32 106 21 Q106 10 96 10 Z M84 14 L96 14 Q102 14 102 21 Q102 28 96 28 L84 28 Z"
          fill={color}
          fillRule="evenodd"
        />
        {/* R leg */}
        <path d="M94 32 L106 46 L101 46 L90 33Z" fill={color} />
        {/* Wood grain in R vertical */}
        <line x1="81" y1="24" x2="83" y2="24" stroke={grainColor} strokeWidth="0.8" />
        <line x1="81" y1="30" x2="83" y2="30" stroke={grainColor} strokeWidth="0.8" />
        <line x1="81" y1="36" x2="83" y2="36" stroke={grainColor} strokeWidth="0.8" />

        {/* Horizontal rule above PANEL */}
        <line x1="36" y1="52" x2="106" y2="52" stroke={color} strokeWidth="1" />

        {/* PANEL text */}
        <text
          x="71"
          y="67"
          textAnchor="middle"
          fill={color}
          fontSize="13"
          fontFamily="var(--font-body), sans-serif"
          letterSpacing="6"
          fontWeight="400"
        >
          PANEL
        </text>

        {/* Horizontal rule below PANEL */}
        <line x1="36" y1="72" x2="106" y2="72" stroke={color} strokeWidth="1" />
      </svg>
    );
  }

  return (
    <motion.svg
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {/* Plywood layers icon - animated */}
      {[12, 19, 26, 33, 40].map((y, i) => (
        <motion.rect
          key={y}
          x="0"
          y={y}
          width="24"
          height="3"
          rx="1"
          fill={i % 2 === 0 ? grainColor : color}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
          style={{ originX: 0 }}
        />
      ))}

      {/* M - stroke draw */}
      <motion.path
        d="M36 10 L36 46 L40 46 L40 18 L52 34 L64 18 L64 46 L68 46 L68 10 L52 30 Z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        variants={pathVariants}
      />
      <motion.path
        d="M36 10 L36 46 L40 46 L40 18 L52 34 L64 18 L64 46 L68 46 L68 10 L52 30 Z"
        fill={color}
        variants={fillVariants}
      />

      {/* R - stroke draw */}
      <motion.path
        d="M80 10 L80 46 L84 46 L84 32 L96 32 Q106 32 106 21 Q106 10 96 10 Z M84 14 L96 14 Q102 14 102 21 Q102 28 96 28 L84 28 Z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        fillRule="evenodd"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut", delay: 0.2 },
          },
        }}
      />
      <motion.path
        d="M80 10 L80 46 L84 46 L84 32 L96 32 Q106 32 106 21 Q106 10 96 10 Z M84 14 L96 14 Q102 14 102 21 Q102 28 96 28 L84 28 Z"
        fill={color}
        fillRule="evenodd"
        variants={fillVariants}
      />
      <motion.path
        d="M94 32 L106 46 L101 46 L90 33Z"
        fill={color}
        variants={fillVariants}
      />

      {/* Wood grain lines */}
      {[24, 30, 36].map((y) => (
        <motion.line
          key={`ml-${y}`}
          x1="38"
          y1={y}
          x2="42"
          y2={y}
          stroke={grainColor}
          strokeWidth="0.8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        />
      ))}
      {[24, 30, 36].map((y) => (
        <motion.line
          key={`mr-${y}`}
          x1="62"
          y1={y}
          x2="66"
          y2={y}
          stroke={grainColor}
          strokeWidth="0.8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        />
      ))}

      {/* Horizontal rules */}
      <motion.line
        x1="36"
        y1="52"
        x2="106"
        y2="52"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
      />
      <motion.line
        x1="36"
        y1="72"
        x2="106"
        y2="72"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
      />

      {/* PANEL text */}
      <motion.text
        x="71"
        y="67"
        textAnchor="middle"
        fill={color}
        fontSize="13"
        fontFamily="var(--font-body), sans-serif"
        letterSpacing="6"
        fontWeight="400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        PANEL
      </motion.text>
    </motion.svg>
  );
}
