"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CountAnimation } from "@/components/ui/count-animation";
import { ChefHat, Award, Zap } from "lucide-react";

const flipWords = ["Kitchens", "Furniture", "Wardrobes", "Offices"];

function CalendarFlipWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flipWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="relative inline-block overflow-hidden"
      style={{
        perspective: "600px",
        verticalAlign: "bottom",
        minWidth: "320px",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={flipWords[index]}
          initial={{ rotateX: -90, opacity: 0, transformOrigin: "top center" }}
          animate={{ rotateX: 0, opacity: 1, transformOrigin: "top center" }}
          exit={{ rotateX: 90, opacity: 0, transformOrigin: "bottom center" }}
          transition={{
            duration: 0.52,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="inline-block text-[var(--gold-accent)]"
          style={{ display: "inline-block", backfaceVisibility: "hidden" }}
        >
          {flipWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const stats = [
  {
    icon: ChefHat,
    number: 500,
    suffix: "+",
    label: "Projects Delivered",
    description:
      "Over 500 modular projects — kitchens, furniture, wardrobes & corporate spaces — across India trust MR Panel.",
  },
  {
    icon: Award,
    number: 100,
    suffix: "%",
    label: "ISI Certified",
    description:
      "Every batch tested and certified to Bureau of Indian Standards — IS:710 and IS:303. No shortcuts.",
  },
  {
    icon: Zap,
    number: 0,
    suffix: "",
    label: "Zero Compromise",
    description:
      "Modular-grade engineering from raw timber to final panel. Built to outlast every space it's placed in.",
    displayText: "Zero",
  },
];

export default function QualitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="quality"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #EDE0C8 0%, #C8A97E 100%)" }}
    >
      {/* Decorative wood grain overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, var(--wood-dark) 0px, transparent 1px, transparent 8px)`,
        }}
      />

      <div className="relative py-24 lg:py-36 xl:py-44">
        <div className="mx-auto max-w-7xl px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-5">
              The MR Difference
            </p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-display)] text-[var(--wood-dark)]">
              Modular <CalendarFlipWord />
            </h2>
            <p className="mt-5 text-lg text-[var(--wood-mid)] font-[family-name:var(--font-body)] max-w-xl mx-auto">
              Not just any plywood. Panels precision-engineered for every modular application — kitchens, furniture, wardrobes, and corporate fit-outs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-14 xl:gap-16 max-w-6xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="group relative bg-[var(--warm-white)]/60 backdrop-blur-sm rounded-2xl p-10 lg:p-14 border border-[var(--wood-light)]/30 hover:border-[var(--gold-accent)]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--wood-dark)]/10 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-[var(--wood-dark)] flex items-center justify-center mb-8 mx-auto group-hover:bg-[var(--gold-accent)] transition-colors duration-500">
                    <Icon className="w-8 h-8 text-[var(--cream)]" />
                  </div>

                  <div className="text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-display)] font-bold text-[var(--wood-dark)] mb-4">
                    {stat.displayText ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      >
                        {stat.displayText}
                      </motion.span>
                    ) : (
                      <CountAnimation
                        number={stat.number}
                        suffix={stat.suffix}
                        duration={2.5}
                        className="inline-flex justify-center"
                      />
                    )}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-5">
                    {stat.label}
                  </h3>

                  <p className="text-[var(--wood-mid)] font-[family-name:var(--font-body)] leading-relaxed text-base lg:text-lg max-w-xs mx-auto">
                    {stat.description}
                  </p>

                  <div className="absolute bottom-0 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
