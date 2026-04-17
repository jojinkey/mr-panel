"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MEDIA } from "@/lib/media";

const taglineWords = ["Where", "Every", "Modular", "Dream", "Begins."];

export default function HeroSection() {
  const [showTagline, setShowTagline] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.38], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTagline(true), 1800);
    const t2 = setTimeout(() => setShowContent(true), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlaying = () => setVideoReady(true);
    video.addEventListener("playing", handlePlaying, { once: true });

    const tryPlay = () => video.play().catch(() => {});
    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      // Warm golden base so before video loads nothing looks stark-black
      style={{ background: "radial-gradient(ellipse at 50% 40%, #3a2108 0%, #1a0e04 60%, #0d0804 100%)" }}
    >
      {/* ── VIDEO LAYER (fades in once ready, fades out on scroll) ── */}
      <motion.div
        style={{ opacity: videoOpacity }}
        className="absolute inset-0 z-0"
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={MEDIA.HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1.2s ease" }}
        />

        {/* Very light warm scrim — just enough to deepen edges, not kill the logo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(10,5,2,0.55) 100%)",
          }}
        />

        {/* ── LOGO + GOLDEN BACKLIT GLOW ── */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ top: "-8%" }}>
          <div className="relative flex items-center justify-center">

            {/* Far ambient halo — very wide, soft golden wash */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3.2, ease: "easeOut" }}
              className="absolute pointer-events-none"
              style={{
                width: 680,
                height: 480,
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(218,165,32,0.28) 0%, rgba(184,134,11,0.12) 45%, transparent 70%)",
                filter: "blur(52px)",
              }}
            />

            {/* Mid halo — warmer, tighter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.4, ease: "easeOut", delay: 0.3 }}
              className="absolute pointer-events-none"
              style={{
                width: 400,
                height: 280,
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(255,200,60,0.55) 0%, rgba(210,155,30,0.28) 50%, transparent 78%)",
                filter: "blur(28px)",
              }}
            />

            {/* Inner hot spot — the "lamp behind the sign" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
              className="absolute pointer-events-none"
              style={{
                width: 220,
                height: 140,
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(255,230,100,0.85) 0%, rgba(255,200,50,0.45) 50%, transparent 80%)",
                filter: "blur(14px)",
              }}
            />

            {/* Breathing pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.30, 0.60, 0.30] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute pointer-events-none"
              style={{
                width: 380,
                height: 260,
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(218,165,32,0.28) 0%, transparent 70%)",
                filter: "blur(16px)",
              }}
            />

            {/*
              LOGO IMAGE
              mix-blend-mode: screen → black pixels in the logo PNG become
              transparent, gold letterforms glow against the video/backlit glow.
              Applied to the wrapper div so the entire composited content (logo
              + its own background) screens against the parent.
            */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.8 }}
              className="relative z-10"
            >
              <Image
                src={MEDIA.HERO_LOGO}
                alt="MR Panel — Premium Modular Wood Panels for Kitchens, Furniture & Corporate Spaces"
                width={420}
                height={210}
                className="w-56 sm:w-72 md:w-88 lg:w-[400px] xl:w-[460px] h-auto object-contain"
                style={{
                  filter:
                    "brightness(1.15) saturate(1.4) " +
                    "drop-shadow(0 0 40px rgba(255,215,50,0.95)) " +
                    "drop-shadow(0 0 20px rgba(255,190,30,0.80)) " +
                    "drop-shadow(0 0 8px rgba(255,240,120,0.65))",
                }}
                priority
              />
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ── TAGLINE + SCROLL INDICATOR (positioned below logo center) ── */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 flex flex-col items-center justify-end text-center px-6 pb-28 h-full w-full max-w-4xl mx-auto"
      >
        {/* Ambient backlit panel — sits behind tagline + eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showTagline ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="absolute pointer-events-none"
          style={{
            bottom: "7rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(700px, 92vw)",
            height: 160,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(8,4,2,0.72) 0%, rgba(5,2,1,0.45) 50%, transparent 78%)",
            filter: "blur(18px)",
          }}
        />

        {/* Tagline — word by word */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-4 relative">
          <AnimatePresence>
            {showTagline &&
              taglineWords.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.18, duration: 0.55, ease: "easeOut" }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-accent)] italic text-[var(--cream)] tracking-wide"
                  style={{
                    textShadow:
                      "0 2px 16px rgba(0,0,0,0.90), 0 4px 32px rgba(0,0,0,0.75), 0 0 6px rgba(0,0,0,1)",
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </AnimatePresence>
        </div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={showTagline ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-[11px] sm:text-sm tracking-[0.32em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-14 relative"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.90), 0 2px 20px rgba(0,0,0,0.70)" }}
        >
          Precision Panels · Kitchens · Furniture · Corporate Spaces · ISI Certified
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--cream)]/55 font-[family-name:var(--font-body)]">
              Discover the Craft
            </span>
            <svg
              width="20"
              height="30"
              viewBox="0 0 20 30"
              fill="none"
              className="text-[var(--cream)]/45"
            >
              <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="1.5" />
              <motion.circle
                cx="10" cy="10" r="3"
                fill="currentColor"
                animate={{ cy: [8, 16, 8] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── BOTTOM GRADIENT FADE to warm-white ── */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[var(--warm-white)] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
