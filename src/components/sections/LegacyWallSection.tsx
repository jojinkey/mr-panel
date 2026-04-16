"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function LegacyWallSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="legacy"
      className="relative overflow-hidden"
      style={{ background: "var(--wood-dark)" }}
    >
      {/* Parallax background texture */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-20">
        <div
          className="w-full h-[120%] -mt-[10%]"
          style={{
            backgroundImage: `repeating-linear-gradient(88deg, #C8A97E 0px, transparent 1px, transparent 12px), repeating-linear-gradient(2deg, #8B6343 0px, transparent 0.5px, transparent 24px)`,
          }}
        />
      </motion.div>

      {/* Gold decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-accent)] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-accent)] to-transparent opacity-40" />

      <div className="py-36 lg:py-48 xl:py-56">
        <div className="relative mx-auto max-w-5xl px-8 lg:px-16 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-24 h-px bg-[var(--gold-accent)] mx-auto mb-14"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm tracking-[0.4em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-10"
          >
            Our Mission
          </motion.p>

          <motion.h2
            style={{ opacity }}
            className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-display)] text-[var(--cream)] leading-tight mb-14"
          >
            Every great space
            <br />
            is only as strong as
            <br />
            <span className="text-[var(--gold-accent)]">the panel within it.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg lg:text-xl text-[var(--wood-light)] font-[family-name:var(--font-accent)] italic leading-relaxed">
              Since 2014, interior designers, modular manufacturers, furniture makers,
              and architects across India have trusted MR Panel to be the invisible
              foundation of their finest work — from dream kitchens to corporate offices —
              where no one sees the panel, but everyone feels the difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="w-24 h-px bg-[var(--gold-accent)] mx-auto mt-14"
          />

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={isInView ? { opacity: 1, rotate: 45 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-3 h-3 border border-[var(--gold-accent)] mx-auto mt-8"
          />
        </div>
      </div>
    </section>
  );
}
