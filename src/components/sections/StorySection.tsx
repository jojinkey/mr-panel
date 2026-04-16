"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MEDIA } from "@/lib/media";

function CarvingSVG() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      fill="none"
      className="w-full max-w-sm mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M200 20 C260 20 340 60 360 120 C380 180 380 260 340 320 C300 360 240 380 200 380 C160 380 100 360 60 320 C20 260 20 180 40 120 C60 60 140 20 200 20Z"
        stroke="var(--wood-mid)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 3, ease: "easeInOut" as const }}
      />
      <motion.path
        d="M200 50 C250 50 310 80 330 130 C350 180 350 250 320 300 C290 340 240 360 200 360 C160 360 110 340 80 300 C50 250 50 180 70 130 C90 80 150 50 200 50Z"
        stroke="var(--gold-accent)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" as const, delay: 0.5 }}
      />
      <motion.path
        d="M200 60 C210 80 230 90 220 110 C210 100 200 90 190 100 C180 90 170 100 180 110 C170 90 190 80 200 60Z"
        stroke="var(--wood-dark)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.line x1="100" y1="200" x2="300" y2="200" stroke="var(--wood-light)" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.5, delay: 1.5 }} />
      <motion.line x1="200" y1="100" x2="200" y2="300" stroke="var(--wood-light)" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.5, delay: 1.5 }} />
      {[0, 90, 180, 270].map((angle) => (
        <motion.path
          key={angle}
          d="M0 -120 Q20 -110 15 -90 Q30 -100 25 -80"
          stroke="var(--wood-mid)"
          strokeWidth="1"
          fill="none"
          transform={`translate(200,200) rotate(${angle})`}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, delay: 2 + angle * 0.002 }}
        />
      ))}
      <motion.path
        d="M200 160 L240 200 L200 240 L160 200 Z"
        stroke="var(--gold-accent)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
      />
      <motion.text
        x="200"
        y="207"
        textAnchor="middle"
        fill="var(--wood-dark)"
        fontSize="16"
        fontFamily="var(--font-display)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        2014
      </motion.text>
    </svg>
  );
}

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative overflow-hidden"
      style={{ background: "#EDE0C8" }}
    >
      {/* Top spacer with gradient transition */}
      <div className="h-16 lg:h-24 bg-gradient-to-b from-[var(--warm-white)] to-transparent" />

      <div className="py-20 lg:py-32 xl:py-40">
        <div className="mx-auto max-w-7xl px-8 lg:px-16">
          {/* Section header — centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-5">
              Our Origin
            </p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] leading-tight">
              A Mission Born
              <br />
              <span className="text-[var(--gold-accent)]">In 2014</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
            {/* Left: Carving animation + image */}
            <div className="space-y-10">
              <CarvingSVG />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={MEDIA.FURNITURE}
                  alt="Premium modular furniture and kitchen panels by MR Panel"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  style={{ filter: "saturate(105%) brightness(1.02)" }}
                  priority
                />
              </motion.div>
            </div>

            {/* Right: Story text */}
            <div className="lg:pl-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-[var(--wood-mid)] font-[family-name:var(--font-body)] leading-relaxed mb-6"
              >
                Mr. Rajesh started MR Panel after watching too many dream kitchens fail —
                not from bad design, but from the wrong wood. Swollen carcasses.
                Warped shutters. Delaminating panels. Premium interiors undone by
                substandard materials passed off as quality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="text-lg lg:text-xl text-[var(--wood-mid)] font-[family-name:var(--font-body)] leading-relaxed mb-10"
              >
                In 2014, he set out to build something India&apos;s modular kitchen
                industry had never seen — panels engineered <em>specifically</em> for
                the heat, moisture, and load demands of the modern furniture, kitchen and dream designs. Every grade
                we make exists because a real kitchen demanded it.
              </motion.p>

              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="border-l-4 border-[var(--gold-accent)] pl-8 py-4"
              >
                <p className="text-xl lg:text-2xl font-[family-name:var(--font-accent)] italic text-[var(--wood-dark)] leading-relaxed">
                  &ldquo;A kitchen is the heart of every home. It deserved a panel
                  built with the same intention.&rdquo;
                </p>
                <cite className="block mt-6 text-sm not-italic tracking-wide text-[var(--wood-mid)] font-[family-name:var(--font-body)]">
                  — Mr. Rajesh, Founder &amp; CEO, MR Panel
                </cite>
              </motion.blockquote>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                {["ISI Certified", "BWP IS:710", "BWR IS:303", "Kitchen-Grade Tested"].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full text-xs tracking-wider font-[family-name:var(--font-body)] border border-[var(--wood-mid)]/30 text-[var(--wood-mid)] bg-[var(--warm-white)]/50"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-16 lg:h-24" />
    </section>
  );
}
