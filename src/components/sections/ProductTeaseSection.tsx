"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const products = [
  {
    name: "MR Modular Shield",
    grade: "Marine Grade · BWP",
    description:
      "Engineered for the most demanding zones — kitchen under-sinks, bathroom vanities, wet areas, and high-moisture corporate spaces. Boiling water proof, termite-resistant, and dimensionally stable for life.",
    thickness: "6mm – 25mm",
    certification: "ISI IS:710",
    tag: "Most Popular",
    color: "#8B6343",
  },
  {
    name: "MR Carcass Board",
    grade: "Cabinet Grade · BWR",
    description:
      "The invisible backbone of every modular design — kitchens, wardrobes, storage units, and office cabinets. Precision-calibrated thickness, zero warping, and superior screw-holding strength.",
    thickness: "4mm – 19mm",
    certification: "ISI IS:303",
    tag: "Best Seller",
    color: "#C8A97E",
  },
  {
    name: "MR Shutter Ply",
    grade: "Shutter Grade · High Density",
    description:
      "Dense, flat, and warp-resistant — engineered to hold hinges firmly across kitchens, furniture shutters, wardrobe doors, and corporate cabinet fronts. Resists daily wear without losing its finish.",
    thickness: "6mm – 18mm",
    certification: "Modular Spec",
    tag: "New",
    color: "#A0784E",
  },
  {
    name: "MR Curve Form",
    grade: "Flexi Grade · Radius Cut",
    description:
      "Push the limits of modular design. Ultra-flexible panels for curved kitchen islands, arched wardrobes, radius reception desks, and every architectural statement piece.",
    thickness: "3mm – 8mm",
    certification: "Custom Spec",
    tag: "Designer Pick",
    color: "#4A2E1A",
  },
];

export default function ProductTeaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.2, 0.9], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative overflow-hidden"
      style={{ background: "var(--warm-white)" }}
    >
      {/* Top gradient transition */}
      <div className="h-16 lg:h-24 bg-gradient-to-b from-[#C8A97E]/20 to-transparent" />

      <div className="py-20 lg:py-32 xl:py-40">
        <div className="mx-auto max-w-7xl px-8 lg:px-16 mb-16 lg:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-5">
              Our Range
            </p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-5">
              Panels for Every
              <br />
              <span className="text-[var(--gold-accent)]">Modular Space</span>
            </h2>
            <p className="text-lg text-[var(--wood-mid)] font-[family-name:var(--font-body)] max-w-2xl mx-auto">
              Four precision grades — each engineered for a specific role across kitchens, furniture, wardrobes, and corporate interiors.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scroll strip */}
        <motion.div
          style={{ x }}
          className="flex gap-6 lg:gap-10 px-6 lg:px-16 overflow-x-auto scrollbar-hide justify-start lg:justify-center pb-4"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative flex-shrink-0 w-[280px] md:w-[320px] lg:w-[340px] xl:w-[360px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${product.color}18 0%, ${product.color}35 100%)` }}
              />

              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `repeating-linear-gradient(${85 + i * 5}deg, ${product.color} 0px, transparent 1px, transparent ${6 + i}px)`,
                }}
              />

              <div className="relative p-8 lg:p-10 xl:p-12 h-full flex flex-col min-h-[520px] lg:min-h-[560px] text-center items-center">
                {/* Tag pill */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] font-[family-name:var(--font-body)] tracking-widest uppercase mb-3"
                  style={{ background: `${product.color}22`, color: product.color }}
                >
                  {product.tag}
                </span>

                <span
                  className="inline-block w-fit px-4 py-1.5 rounded-full text-xs font-[family-name:var(--font-body)] tracking-wider uppercase mb-8 border"
                  style={{ borderColor: product.color, color: product.color }}
                >
                  {product.grade}
                </span>

                <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-5">
                  {product.name}
                </h3>

                <p className="text-[var(--wood-mid)] font-[family-name:var(--font-body)] leading-relaxed mb-10 text-base opacity-70 group-hover:opacity-100 transition-opacity duration-500 max-w-[280px]">
                  {product.description}
                </p>

                <div className="mt-auto space-y-4 w-full">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex justify-between text-sm font-[family-name:var(--font-body)] text-[var(--wood-mid)] border-t border-[var(--wood-light)]/30 pt-4">
                      <span>Thickness</span>
                      <span className="font-medium text-[var(--wood-dark)]">{product.thickness}</span>
                    </div>
                    <div className="flex justify-between text-sm font-[family-name:var(--font-body)] text-[var(--wood-mid)] border-t border-[var(--wood-light)]/30 pt-4 mt-4">
                      <span>Certification</span>
                      <span className="font-medium text-[var(--wood-dark)]">{product.certification}</span>
                    </div>
                  </div>

                  <div
                    className="h-1 rounded-full w-0 group-hover:w-full transition-all duration-700"
                    style={{ background: product.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom spacer */}
      <div className="h-12 lg:h-20" />
    </section>
  );
}
