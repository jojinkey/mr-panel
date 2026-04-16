"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MEDIA } from "@/lib/media";

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Fade the section in as it enters viewport, fade out as it leaves
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.85, 1],
    [0, 1, 1, 0]
  );

  // Subtle vertical parallax on the video
  const videoY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver to only play when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    const handleCanPlay = () => setVideoReady(true);
    if (video.readyState >= 3) {
      setVideoReady(true);
    } else {
      video.addEventListener("canplaythrough", handleCanPlay, { once: true });
    }

    return () => {
      observer.disconnect();
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="ambience"
      style={{ opacity: sectionOpacity }}
      className="relative overflow-hidden"
      // Minimum height so there's enough scroll travel for the fade
      // Full-width, no horizontal gutters
    >
      {/* Top premium fade-in gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "22%",
          background:
            "linear-gradient(to bottom, var(--warm-white) 0%, transparent 100%)",
        }}
      />

      {/* The video fills full width, parallax on Y */}
      <motion.div
        className="relative w-full"
        style={{ height: "115%", marginTop: "-7.5%", y: videoY }}
      >
        {/* Placeholder while video buffers */}
        {!videoReady && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #c8a97e22 0%, #faf6ee 100%)",
            }}
          />
        )}

        <video
          ref={videoRef}
          src={MEDIA.CALM_VIDEO}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          style={{
            opacity: videoReady ? 1 : 0,
            transition: "opacity 1.4s ease",
            display: "block",
          }}
        />

        {/* Subtle warm colour-grade overlay so video matches site palette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(184,134,11,0.08) 0%, rgba(250,246,238,0.04) 100%)",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>

      {/* ── CONVERSION TEXT OVERLAY ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6 text-center"
      >
        {/* Soft dark halo so text floats above any video frame */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "min(680px, 90vw)",
            height: 220,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(6,3,1,0.52) 0%, rgba(4,2,0,0.28) 55%, transparent 80%)",
            filter: "blur(22px)",
          }}
        />

        <p
          className="relative text-[11px] sm:text-xs tracking-[0.38em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-3"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.85)" }}
        >
          ISI Certified · BWP Marine Grade · Made for India
        </p>

        <h2
          className="relative text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-display)] text-white leading-none mb-3 tracking-wide"
          style={{
            textShadow:
              "0 2px 24px rgba(0,0,0,0.95), 0 4px 48px rgba(0,0,0,0.80), 0 0 2px rgba(0,0,0,1)",
          }}
        >
          MR PANEL
        </h2>

        <p
          className="relative text-xl sm:text-2xl lg:text-3xl font-[family-name:var(--font-accent)] italic text-[var(--gold-accent)] mb-5"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.90)" }}
        >
          Vision
        </p>

        <p
          className="relative text-sm sm:text-base text-white/80 font-[family-name:var(--font-body)] max-w-md leading-relaxed mb-7"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.80)" }}
        >
          Every panel we ship is engineered for the heat, moisture, and load demands
          of modern kitchens, furniture, wardrobes, and corporate spaces — precision built, zero compromise.
        </p>

        <a
          href="/contact"
          className="relative pointer-events-auto inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm tracking-widest uppercase font-[family-name:var(--font-body)] font-semibold transition-all duration-300"
          style={{
            background: "rgba(218,165,32,0.92)",
            color: "#1a0e04",
            boxShadow: "0 0 24px rgba(218,165,32,0.55), 0 2px 12px rgba(0,0,0,0.40)",
            backdropFilter: "blur(6px)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,200,50,1)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 36px rgba(255,200,50,0.75), 0 2px 14px rgba(0,0,0,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(218,165,32,0.92)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(218,165,32,0.55), 0 2px 12px rgba(0,0,0,0.40)";
          }}
        >
          Request a Free Sample
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>

      {/* Bottom premium fade-out gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "28%",
          background:
            "linear-gradient(to top, var(--warm-white) 0%, transparent 100%)",
        }}
      />
    </motion.section>
  );
}
