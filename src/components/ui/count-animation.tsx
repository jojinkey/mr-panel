"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountAnimationProps {
  number: number;
  className?: string;
  suffix?: string;
  duration?: number;
}

export function CountAnimation({
  number,
  className = "",
  suffix = "",
  duration = 2,
}: CountAnimationProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, number, { duration });
      return animation.stop;
    }
  }, [isInView, count, number, duration]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
