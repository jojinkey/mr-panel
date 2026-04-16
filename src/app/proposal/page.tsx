"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

/* ─── tiny helpers ─────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({
  children,
  delay = 0,
  from = "left",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: from === "left" ? -48 : 48 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── stat counter card ─────────────────────────────────────────────── */
function StatCard({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--wood-light)]/30 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
        <p className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-[var(--gold-accent)] font-bold mb-1">
          {value}
        </p>
        <p className="text-xs tracking-widest uppercase text-[var(--wood-mid)] font-[family-name:var(--font-body)]">
          {label}
        </p>
      </div>
    </FadeIn>
  );
}

/* ─── service card ──────────────────────────────────────────────────── */
function ServiceCard({
  num,
  title,
  desc,
  items,
  delay = 0,
}: {
  num: string;
  title: string;
  desc: string;
  items: string[];
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-[var(--wood-light)]/30 p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
        {/* bg accent on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--gold-accent)] text-white flex items-center justify-center text-sm font-bold font-[family-name:var(--font-body)]">
              {num}
            </span>
            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] leading-tight">
                {title}
              </h3>
              <p className="text-sm text-[var(--wood-mid)] mt-1 font-[family-name:var(--font-body)]">
                {desc}
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-[var(--wood-dark)]/80 font-[family-name:var(--font-body)]"
              >
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-[var(--gold-accent)]/20 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#B8860B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}

/* ─── iPhone mockup ─────────────────────────────────────────────────── */
function IPhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto"
      style={{ width: 260, filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.28))" }}
    >
      {/* outer shell */}
      <div
        className="relative rounded-[2.8rem] overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 100%)",
          padding: "10px 8px",
          boxShadow:
            "inset 0 0 0 1.5px rgba(255,255,255,0.12), 0 0 0 1px #111",
        }}
      >
        {/* notch */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 z-20 rounded-full"
          style={{ width: 90, height: 26, background: "#111" }}
        />
        {/* screen */}
        <div
          className="rounded-[2.2rem] overflow-hidden bg-white relative"
          style={{ minHeight: 480 }}
        >
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-10 pb-1 bg-white">
            <span className="text-[10px] font-bold text-black">9:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[9px] text-black font-semibold">5G</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <rect x="0" y="5" width="2.5" height="5" rx="1" fill="#000" />
                <rect x="3.5" y="3" width="2.5" height="7" rx="1" fill="#000" />
                <rect x="7" y="1.5" width="2.5" height="8.5" rx="1" fill="#000" />
                <rect x="10.5" y="0" width="2.5" height="10" rx="1" fill="#000" />
              </svg>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Google Maps mock inside iPhone ───────────────────────────────── */
function GoogleMapsScreen() {
  return (
    <div className="bg-gray-100 px-3 pb-4">
      {/* search bar */}
      <div className="bg-white rounded-full shadow px-3 py-2 flex items-center gap-2 mb-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <span className="text-[10px] text-gray-700 font-medium">modular kitchen panels Bhiwadi</span>
      </div>

      {/* map area */}
      <div
        className="rounded-xl overflow-hidden mb-3 relative"
        style={{
          height: 100,
          background: "linear-gradient(135deg, #e8f0d4 0%, #d4e8c4 50%, #c8e0b8 100%)",
        }}
      >
        {/* roads */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 100">
          <line x1="0" y1="55" x2="260" y2="55" stroke="#fff" strokeWidth="3" opacity="0.7" />
          <line x1="110" y1="0" x2="90" y2="100" stroke="#fff" strokeWidth="2" opacity="0.6" />
          <line x1="180" y1="0" x2="160" y2="100" stroke="#fff" strokeWidth="2" opacity="0.5" />
        </svg>
        {/* pin */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{ left: "50%", top: "24%", transform: "translateX(-50%)" }}
        >
          <div className="relative flex flex-col items-center">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: "var(--gold-accent)" }}
            >
              <span className="text-white text-[8px] font-bold">MR</span>
            </div>
            <div
              className="w-2 h-2 rotate-45 -mt-1"
              style={{ background: "var(--gold-accent)" }}
            />
          </div>
        </motion.div>
        {/* competitor pin */}
        <div className="absolute" style={{ left: "70%", top: "55%", transform: "translateX(-50%)" }}>
          <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center shadow">
            <span className="text-white text-[6px] font-bold">C</span>
          </div>
        </div>
        {/* #1 badge */}
        <div className="absolute top-2 left-2 bg-[var(--gold-accent)] text-white text-[8px] font-bold px-2 py-0.5 rounded-full">
          #1 Ranked
        </div>
      </div>

      {/* result cards */}
      <div className="space-y-2">
        {/* MR Panel card */}
        <div className="bg-white rounded-xl p-3 shadow-sm border-l-3 border-l-[var(--gold-accent)]" style={{ borderLeftWidth: 3, borderLeftColor: "var(--gold-accent)" }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-900">MR Panel</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[var(--gold-accent)] text-[9px]">★★★★★</span>
                <span className="text-[8px] text-gray-500">4.9 (183)</span>
              </div>
              <p className="text-[8px] text-gray-500 mt-0.5">Modular Kitchen Panels · Bhiwadi</p>
              <p className="text-[8px] text-green-600 font-medium">Open · 9AM–6PM · mrpanel.com</p>
            </div>
            <div className="flex-shrink-0 w-10 h-10 bg-[var(--cream)] rounded-lg flex items-center justify-center">
              <span className="text-[7px] font-bold text-[var(--wood-dark)]">MR</span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            {["Directions", "Call", "Website"].map((btn) => (
              <div key={btn} className="flex-1 bg-[var(--gold-accent)]/10 rounded-full py-1 text-center">
                <span className="text-[7px] font-semibold text-[var(--gold-accent)]">{btn}</span>
              </div>
            ))}
          </div>
        </div>

        {/* competitor */}
        <div className="bg-white rounded-xl p-3 shadow-sm opacity-60">
          <p className="text-[9px] font-semibold text-gray-700">Competitor Panel Co.</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-gray-400 text-[8px]">★★★★</span>
            <span className="text-[7px] text-gray-400">3.7 (42) · Gurugram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ROI funnel ────────────────────────────────────────────────────── */
function ROIFunnel() {
  const steps = [
    { icon: "📢", label: "Ad Impressions", value: "1,33,000/mo", color: "#B8860B" },
    { icon: "👆", label: "Landing Page Clicks", value: "3,267 clicks", color: "#8B6343" },
    { icon: "📝", label: "Lead Forms Filled", value: "~107 leads", color: "#7A8C6E" },
    { icon: "📞", label: "Booking Calls", value: "~26 calls", color: "#4A7A3E" },
    { icon: "✅", label: "Projects Won", value: "~8 clients", color: "#2E6B2E" },
  ];

  return (
    <div className="flex flex-col items-center gap-0">
      {steps.map((step, i) => (
        <FadeIn key={step.label} delay={i * 0.12}>
          <div className="flex flex-col items-center">
            <div
              className="flex items-center gap-4 px-6 py-4 rounded-xl text-white shadow-md"
              style={{
                background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                width: `${340 - i * 36}px`,
                maxWidth: "100%",
              }}
            >
              <span className="text-xl">{step.icon}</span>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase opacity-80">
                  {step.label}
                </p>
                <p className="text-lg font-bold">{step.value}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 h-4 bg-gradient-to-b from-gray-300 to-transparent" />
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

/* ─── keyword table row ─────────────────────────────────────────────── */
function KeywordRow({
  kw,
  comp,
  vol,
  rank,
  delay,
}: {
  kw: string;
  comp: string;
  vol: string;
  rank: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.tr
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="border-b border-[var(--wood-light)]/20 hover:bg-[var(--gold-accent)]/5 transition-colors"
    >
      <td className="py-3 pr-4 text-sm text-[var(--wood-dark)] font-[family-name:var(--font-body)]">{kw}</td>
      <td className="py-3 pr-4">
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            comp === "HIGH"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {comp}
        </span>
      </td>
      <td className="py-3 pr-4 text-sm text-[var(--wood-mid)]">{vol}</td>
      <td className="py-3 text-sm font-semibold text-[var(--gold-accent)]">{rank}</td>
    </motion.tr>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function ProposalPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden" style={{ background: "var(--warm-white)" }}>

        {/* ── HERO BANNER ── */}
        <section
          className="relative pt-28 pb-24 px-6 overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #1a0e04 0%, #2d1a0a 40%, #3d2510 70%, #4a2e1a 100%)",
          }}
        >
          {/* ambient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 800,
              height: 400,
              background:
                "radial-gradient(ellipse, rgba(184,134,11,0.25) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[11px] tracking-[0.4em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-4"
            >
              Digital Bytes Solutions · April 2026 · Confidential
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-display)] text-white leading-tight mb-4"
            >
              Digital Growth
              <br />
              <span className="text-[var(--gold-accent)]">Proposal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base lg:text-lg text-white/60 font-[family-name:var(--font-accent)] italic mb-12"
            >
              From Panels to Profits — Your Complete Digital Business Blueprint
            </motion.p>

            {/* 4 stat badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                { letter: "G", val: "Delhi-NCR", sub: "Google 4.8 Ranking" },
                { letter: "D", val: "Real-Time", sub: "Live Business Dashboard" },
                { letter: "S", val: "7 Platforms", sub: "Social + Amazon" },
                { letter: "R", val: "28.8x", sub: "Projected ROAS" },
              ].map((s, i) => (
                <motion.div
                  key={s.letter}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center"
                >
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">
                    {s.letter}
                  </p>
                  <p className="text-xl font-bold text-[var(--gold-accent)] font-[family-name:var(--font-display)]">
                    {s.val}
                  </p>
                  <p className="text-[10px] text-white/50 mt-1">{s.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--warm-white)] to-transparent" />
        </section>

        {/* ── PREPARED FOR ── */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* text */}
              <SlideIn from="left">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-3">
                  Prepared For
                </p>
                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-4">
                  MR Panel
                </h2>
                <p className="text-[var(--wood-mid)] font-[family-name:var(--font-accent)] italic text-lg mb-6">
                  Premium Modular Kitchen Wood Panels
                </p>
                <div className="space-y-2 text-sm text-[var(--wood-dark)]/80 font-[family-name:var(--font-body)]">
                  <p>📍 Bhiwadi, Rajasthan, India</p>
                  <p>👨‍👩‍👧 Family-Owned Since 2018</p>
                  <p>🏭 Founded by Mr. Rajesh</p>
                </div>
              </SlideIn>

              {/* services list */}
              <SlideIn from="right" delay={0.1}>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--wood-light)]/30 p-6 shadow-sm">
                  <p className="text-xs tracking-widest uppercase text-[var(--wood-mid)] mb-4">
                    Services Covered
                  </p>
                  {[
                    "Google Business Profile",
                    "Inventory & Dashboard",
                    "Premium Website + E-Com",
                    "Brand Digital Presence",
                    "Social Media + Amazon",
                    "Google + Meta Ad Campaigns",
                    "Price Estimator & Order Track",
                    "SEO & Keyword Dominance",
                    "Payment Integration",
                  ].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      className="flex items-center gap-3 py-2 border-b border-[var(--wood-light)]/15 last:border-0"
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                        style={{ background: "var(--gold-accent)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-[var(--wood-dark)] font-[family-name:var(--font-body)]">
                        {s}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* ── GOOGLE MAPS iPhone MOCKUP ── */}
        <section
          className="py-20 px-6"
          style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--warm-white) 100%)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-accent)] mb-3">
                  Service 01
                </p>
                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-3">
                  Google Business Profile
                </h2>
                <p className="text-[var(--wood-mid)] font-[family-name:var(--font-accent)] italic">
                  Rank #1 when anyone searches "modular kitchen panels Bhiwadi"
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* iPhone */}
              <FadeIn delay={0.2} className="flex justify-center">
                <IPhoneMockup>
                  <GoogleMapsScreen />
                </IPhoneMockup>
              </FadeIn>

              {/* benefits */}
              <SlideIn from="right" delay={0.15}>
                <h3 className="text-2xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-6">
                  MR Panel Ranks #1
                </h3>
                <p className="text-[var(--wood-mid)] text-sm mb-8 font-[family-name:var(--font-body)] leading-relaxed">
                  When anyone in Bhiwadi — or across Delhi NCR — searches for modular kitchen panels,
                  MR Panel appears first. Your Google Business Profile becomes your 24/7 sales representative.
                </p>
                <div className="space-y-3">
                  {[
                    "First result for 20+ local search queries",
                    "Branded knowledge panel on the right",
                    "4.9 ★ review display builds instant trust",
                    'Direct "Call", "Directions", "WhatsApp" buttons',
                    "Weekly posts keep profile active & relevant",
                    "Google Maps pin verified in Bhiwadi",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "var(--gold-accent)" }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1.5 4L3.5 6L8.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--wood-dark)] font-[family-name:var(--font-body)]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* ── 9 SERVICES GRID ── */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-14">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-accent)] mb-3">
                What We Are Building
              </p>
              <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-3">
                9 Integrated Services
              </h2>
              <p className="text-[var(--wood-mid)] font-[family-name:var(--font-accent)] italic text-lg">
                One connected ecosystem for a family-owned leader
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                num="01"
                title="Google Business Profile"
                desc="Verified listing · Bhiwadi + Delhi NCR targeting"
                items={[
                  "Verified GBP setup",
                  "500-word keyword-rich description",
                  "20 FAQs pre-populated",
                  "Weekly Google Posts",
                  "Review generation templates",
                  "Monthly analytics reporting",
                ]}
                delay={0.05}
              />
              <ServiceCard
                num="02"
                title="Inventory & Business Dashboard"
                desc="Live stock, order pipeline, KPIs — one screen"
                items={[
                  "Live inventory per grade & size",
                  "Order pipeline tracking",
                  "GST-compliant auto-invoices",
                  "WhatsApp dispatch alerts",
                  "Dealer portal with logins",
                  "Revenue charts: daily/weekly",
                ]}
                delay={0.1}
              />
              <ServiceCard
                num="03"
                title="Premium Website + E-commerce"
                desc="10-page SEO site, product catalog, Razorpay checkout"
                items={[
                  "10 SEO-optimised pages",
                  "Product catalog with filters",
                  "Razorpay / PhonePe / UPI",
                  "GST invoice auto-generation",
                  "Customer login & order history",
                  "Google Analytics + Search Console",
                ]}
                delay={0.15}
              />
              <ServiceCard
                num="04"
                title="Brand Presence & Identity"
                desc="Brand voice, visual guidelines, content pillars"
                items={[
                  "Brand guidelines document",
                  "Logo usage rules",
                  "Colour + typography system",
                  "Photography brief",
                  "3 content pillars",
                  "Competitive positioning statement",
                ]}
                delay={0.2}
              />
              <ServiceCard
                num="05"
                title="Social Media + Amazon"
                desc="7 platforms — Instagram, Facebook, Pinterest, YouTube, Amazon, LinkedIn, WhatsApp"
                items={[
                  "3 Instagram posts/week",
                  "Facebook B2C ads setup",
                  "Amazon A+ content",
                  "YouTube factory tours",
                  "LinkedIn B2B authority",
                  "30-day content calendar",
                ]}
                delay={0.25}
              />
              <ServiceCard
                num="06"
                title="Google + Meta Ad Campaigns"
                desc="₹50,000/month budget — 28.8x projected ROAS"
                items={[
                  "Google Ads: ₹30,000/mo",
                  "Meta Ads: ₹20,000/mo",
                  "~25 booking calls/month",
                  "~8 projects won/month",
                  "₹14,40,000 revenue/month",
                  "₹5,98,000 net profit/month",
                ]}
                delay={0.3}
              />
              <ServiceCard
                num="07"
                title="Price Estimator & Order Tracking"
                desc="Customer calculator, order portal, WhatsApp/SMS updates"
                items={[
                  "Product grade & size calculator",
                  "Auto GST calculation",
                  "PDF quotation download",
                  "Unique tracking IDs",
                  "WhatsApp/SMS auto-updates",
                  "Lead capture before price reveal",
                ]}
                delay={0.35}
              />
              <ServiceCard
                num="08"
                title="SEO & Keyword Strategy"
                desc="20+ keywords, 6 cities, 90-day page-1 roadmap"
                items={[
                  "20+ target keywords",
                  "6 cities covered",
                  "Technical SEO foundation",
                  "Blog / knowledge hub",
                  "Local citation building",
                  "2,000+ monthly organic visitors",
                ]}
                delay={0.4}
              />
              <ServiceCard
                num="09"
                title="Payment Integration"
                desc="Razorpay / PhonePe / UPI — seamless checkout"
                items={[
                  "Razorpay + PhonePe + UPI QR",
                  "Auto-GST invoice on payment",
                  "Failed payment recovery",
                  "Monthly bank reconciliation",
                  "Secure PCI-compliant flow",
                  "WhatsApp payment confirmation",
                ]}
                delay={0.45}
              />
            </div>
          </div>
        </section>

        {/* ── BRAND PILLARS ── */}
        <section
          className="py-20 px-6"
          style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--warm-white) 100%)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-14">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-accent)] mb-3">
                Service 04
              </p>
              <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-3">
                Brand Presence & Identity
              </h2>
              <p className="text-[var(--wood-mid)] font-[family-name:var(--font-accent)] italic text-lg">
                The 4 Brand Pillars for MR Panel
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: "Precision",
                  desc: "Engineering-led storytelling — spec sheets, ISI certs, technical credibility",
                  icon: "⚙️",
                },
                {
                  title: "Premium",
                  desc: "Visual quality that signals craftsmanship — not price war positioning",
                  icon: "✨",
                },
                {
                  title: "Purpose",
                  desc: "Rajesh's 2018 mission from Bhiwadi: kitchens built to last — authentic narrative",
                  icon: "🎯",
                },
                {
                  title: "Proof",
                  desc: "Project showcases, customer reviews, before/after kitchen transformations",
                  icon: "🏆",
                },
              ].map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="bg-white/70 rounded-2xl border border-[var(--wood-light)]/30 p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">{p.icon}</div>
                    <h3 className="text-lg font-[family-name:var(--font-display)] text-[var(--gold-accent)] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[var(--wood-mid)] font-[family-name:var(--font-body)] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Founder quote */}
            <FadeIn delay={0.2}>
              <div
                className="rounded-2xl p-8 lg:p-12 text-center"
                style={{
                  background: "linear-gradient(135deg, #1a0e04 0%, #2d1a0a 100%)",
                }}
              >
                <p className="text-[var(--gold-accent)] text-xs tracking-widest uppercase mb-4">
                  The Founder Story — Your Biggest Brand Asset
                </p>
                <blockquote className="text-xl lg:text-2xl font-[family-name:var(--font-accent)] italic text-white mb-4">
                  "A kitchen is the heart of every home. It deserved a panel built with the same intention."
                </blockquote>
                <p className="text-white/50 text-sm">— Mr. Rajesh, Founder & CEO, MR Panel</p>
              </div>
            </FadeIn>

            {/* Target segments */}
            <div className="mt-12 overflow-x-auto">
              <FadeIn delay={0.1}>
                <h3 className="text-xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-6 text-center">
                  Who We Speak To — And How
                </h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-[var(--gold-accent)]/30">
                      <th className="py-3 pr-4 text-left text-xs tracking-widest uppercase text-[var(--wood-mid)]">Target Segment</th>
                      <th className="py-3 pr-4 text-left text-xs tracking-widest uppercase text-[var(--wood-mid)]">Core Message</th>
                      <th className="py-3 text-left text-xs tracking-widest uppercase text-[var(--wood-mid)]">Channel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { seg: "Modular Kitchen Makers", msg: '"The panel your brand depends on"', ch: "LinkedIn + Direct B2B" },
                      { seg: "Interior Designers", msg: '"Specify with confidence"', ch: "Instagram + Pinterest" },
                      { seg: "Premium Homeowners", msg: '"Your kitchen, built to last"', ch: "Google + Facebook Ads" },
                      { seg: "Builders & Contractors", msg: '"Bulk supply. Zero variance."', ch: "WhatsApp + Google Maps" },
                    ].map((row, i) => (
                      <motion.tr
                        key={row.seg}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="border-b border-[var(--wood-light)]/20 hover:bg-[var(--gold-accent)]/5 transition-colors"
                      >
                        <td className="py-3 pr-4 text-sm font-semibold text-[var(--wood-dark)]">{row.seg}</td>
                        <td className="py-3 pr-4 text-sm text-[var(--wood-mid)] italic">{row.msg}</td>
                        <td className="py-3 text-sm text-[var(--gold-accent)]">{row.ch}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── AD CAMPAIGN ROI ── */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-14">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-accent)] mb-3">
                Service 06
              </p>
              <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-3">
                Google + Meta Ad Campaigns
              </h2>
              <p className="text-[var(--wood-mid)] font-[family-name:var(--font-accent)] italic">
                Paid campaigns with real math — ₹50,000/month → 28.8x projected ROAS
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* funnel */}
              <FadeIn>
                <h3 className="text-lg font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-8 text-center">
                  How ₹50,000 Becomes ₹14,40,000 Revenue
                </h3>
                <ROIFunnel />
              </FadeIn>

              {/* ROI table */}
              <FadeIn delay={0.15}>
                <div className="bg-white/70 rounded-2xl border border-[var(--wood-light)]/30 p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-[var(--wood-dark)] mb-4 font-[family-name:var(--font-body)]">
                    Detailed ROI Calculation
                  </h3>
                  {[
                    { label: "Total Booking Calls / Month", val: "25 calls", bold: false },
                    { label: "Avg. Kitchen Project Value", val: "₹1,80,000", bold: false },
                    { label: "Profit Margin", val: "45%", bold: false },
                    { label: "Close Rate from Booking Call", val: "30%", bold: false },
                    { label: "Projects Won / Month", val: "~8", bold: true },
                    { label: "Monthly Revenue Generated", val: "₹14,40,000", bold: true },
                    { label: "Monthly Profit (45% margin)", val: "₹6,48,000", bold: false },
                    { label: "Ad Spend", val: "₹50,000", bold: false },
                    { label: "Net Monthly Profit After Ad Spend", val: "₹5,98,000", bold: true },
                    { label: "ROAS (Revenue / Ad Spend)", val: "28.8x", bold: true },
                  ].map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className={`flex justify-between items-center py-2.5 border-b border-[var(--wood-light)]/15 last:border-0 ${
                        row.bold ? "bg-[var(--gold-accent)]/5 rounded-lg px-2 -mx-2" : ""
                      }`}
                    >
                      <span
                        className={`text-xs font-[family-name:var(--font-body)] ${
                          row.bold ? "font-bold text-[var(--wood-dark)]" : "text-[var(--wood-mid)]"
                        }`}
                      >
                        {row.label}
                      </span>
                      <span
                        className={`text-sm font-[family-name:var(--font-body)] ${
                          row.bold
                            ? "font-bold text-[var(--gold-accent)]"
                            : "text-[var(--wood-dark)]"
                        }`}
                      >
                        {row.val}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* 3 big stats */}
            <div className="grid sm:grid-cols-3 gap-6 mt-16">
              <StatCard value="28.8x" label="ROAS · Return on Ad Spend" delay={0.05} />
              <StatCard value="₹5,98,000" label="Net Profit / Month after ₹50K spend" delay={0.1} />
              <StatCard value="~25 Calls" label="Booking Calls / Month · Qualified Leads" delay={0.15} />
            </div>
          </div>
        </section>

        {/* ── SEO KEYWORDS ── */}
        <section
          className="py-20 px-6"
          style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--warm-white) 100%)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-14">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-accent)] mb-3">
                Service 08
              </p>
              <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-3">
                SEO & Keyword Strategy
              </h2>
              <p className="text-[var(--wood-mid)] font-[family-name:var(--font-accent)] italic">
                20+ keywords · 6 cities · 90-day to page-1 roadmap
              </p>
            </FadeIn>

            <div className="overflow-x-auto mb-12">
              <table className="w-full min-w-[580px]">
                <thead>
                  <tr className="border-b-2 border-[var(--gold-accent)]/30">
                    {["Keyword", "Competition", "Search Vol.", "Target Rank"].map((h) => (
                      <th key={h} className="py-3 pr-4 text-left text-xs tracking-widest uppercase text-[var(--wood-mid)]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <KeywordRow kw="modular kitchen panels Bhiwadi" comp="HIGH" vol="800/mo" rank="P1 in 30 days" delay={0.05} />
                  <KeywordRow kw="BWP plywood kitchen Rajasthan" comp="HIGH" vol="1,200/mo" rank="P1 in 45 days" delay={0.1} />
                  <KeywordRow kw="kitchen carcass board India" comp="MED" vol="880/mo" rank="P1 in 30 days" delay={0.15} />
                  <KeywordRow kw="modular kitchen wood Delhi NCR" comp="HIGH" vol="2,400/mo" rank="P1 in 60 days" delay={0.2} />
                  <KeywordRow kw="marine grade plywood kitchen" comp="HIGH" vol="1,900/mo" rank="P1 in 60 days" delay={0.25} />
                  <KeywordRow kw="kitchen shutter ply supplier" comp="MED" vol="540/mo" rank="P1 in 30 days" delay={0.3} />
                  <KeywordRow kw="ISI certified plywood kitchen" comp="MED" vol="720/mo" rank="P1 in 45 days" delay={0.35} />
                  <KeywordRow kw="MR Panel plywood Bhiwadi" comp="HIGH" vol="300/mo" rank="P1 in 14 days" delay={0.4} />
                  <KeywordRow kw="plywood supplier Bhiwadi Alwar" comp="HIGH" vol="1,100/mo" rank="P1 in 45 days" delay={0.45} />
                  <KeywordRow kw="kitchen panels near me" comp="HIGH" vol="3,200/mo" rank="P1 in 90 days" delay={0.5} />
                </tbody>
              </table>
            </div>

            {/* 12-month roadmap */}
            <FadeIn delay={0.1}>
              <h3 className="text-xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-8 text-center">
                SEO 12-Month Roadmap
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    phase: "Month 1–2",
                    title: "Foundation",
                    items: ["Technical SEO & site speed", "Schema markup", "Keyword mapping", "Google Search Console", "Bhiwadi local citations"],
                    color: "#B8860B",
                  },
                  {
                    phase: "Month 3–4",
                    title: "Content Build",
                    items: ["Blog articles per city", "Landing pages per product", "Backlink outreach", "Local directory listings"],
                    color: "#8B6343",
                  },
                  {
                    phase: "Month 5–6",
                    title: "Ranking Growth",
                    items: ["Keywords hitting page 1", "Local pack visibility", "Bhiwadi & Delhi NCR", "Review velocity program"],
                    color: "#7A8C6E",
                  },
                  {
                    phase: "Month 7–12",
                    title: "Dominance",
                    items: ["Top 3 primary keywords", "Featured snippets", "2,000+ monthly visitors", "Brand authority established"],
                    color: "#4A7A3E",
                  },
                ].map((phase, i) => (
                  <FadeIn key={phase.phase} delay={i * 0.1}>
                    <div className="rounded-2xl overflow-hidden shadow-sm border border-[var(--wood-light)]/20">
                      <div className="px-5 py-3 text-white text-center" style={{ background: phase.color }}>
                        <p className="text-xs opacity-80">{phase.phase}</p>
                        <p className="font-bold text-sm">{phase.title}</p>
                      </div>
                      <div className="bg-white/80 p-4 space-y-1.5">
                        {phase.items.map((item) => (
                          <p key={item} className="text-xs text-[var(--wood-dark)]/80 flex items-start gap-1.5">
                            <span className="text-[var(--gold-accent)] mt-0.5">·</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── ROI SCENARIOS ── */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-14">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-accent)] mb-3">
                Investment
              </p>
              <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-3">
                ROI Summary
              </h2>
              <p className="text-[var(--wood-mid)] font-[family-name:var(--font-accent)] italic">
                Transparent pricing. Measurable returns. 90-day delivery from scratch.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {[
                { label: "Conservative", val: "₹3,24,000/mo", sub: "net profit after all costs", bg: "var(--cream)" },
                {
                  label: "Realistic",
                  val: "₹5,98,000/mo",
                  sub: "8 projects @ 45% margin",
                  bg: "linear-gradient(135deg, #1a0e04, #2d1a0a)",
                  dark: true,
                },
                { label: "Optimistic", val: "₹9,20,000/mo", sub: "12 projects + organic traffic", bg: "var(--cream)" },
              ].map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.12}>
                  <div
                    className="rounded-2xl p-8 text-center shadow-sm border border-[var(--wood-light)]/20"
                    style={{ background: s.bg }}
                  >
                    <p
                      className={`text-[10px] tracking-widest uppercase mb-2 ${
                        s.dark ? "text-white/50" : "text-[var(--wood-mid)]"
                      }`}
                    >
                      {s.label}
                    </p>
                    <p
                      className={`text-3xl font-bold font-[family-name:var(--font-display)] mb-1 ${
                        s.dark ? "text-[var(--gold-accent)]" : "text-[var(--wood-dark)]"
                      }`}
                    >
                      {s.val}
                    </p>
                    <p className={`text-xs ${s.dark ? "text-white/40" : "text-[var(--wood-mid)]"}`}>
                      {s.sub}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Why us */}
            <FadeIn>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[var(--wood-light)]/30 p-8 mb-12 shadow-sm">
                <h3 className="text-2xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-8 text-center">
                  Why Digital Bytes Solutions
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: "🏗️", title: "We Built MR Panel's Website", desc: "We know the brand and digital markets inside-out. Zero ramp-up time." },
                    { icon: "📊", title: "Results-First Approach", desc: "Every deliverable tied to a business outcome: leads, revenue, rankings." },
                    { icon: "🔢", title: "Transparent Math", desc: "Exact ROI calculation shown. Real numbers, real projections, no vague promises." },
                    { icon: "🔗", title: "End-to-End Execution", desc: "One partner from Google listing to paid ads to website to dashboard." },
                    { icon: "🎯", title: "Category-Specific Expertise", desc: "Modular kitchen / building materials is a specific SEO niche." },
                    { icon: "⏱️", title: "90-Day Go-Live Commitment", desc: "Full ecosystem live in 90 days. Weekly progress reports." },
                  ].map((w, i) => (
                    <motion.div
                      key={w.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-3"
                    >
                      <span className="text-2xl flex-shrink-0">{w.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-[var(--wood-dark)] mb-1 font-[family-name:var(--font-body)]">
                          {w.title}
                        </p>
                        <p className="text-xs text-[var(--wood-mid)] font-[family-name:var(--font-body)] leading-relaxed">
                          {w.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── 90-DAY TIMELINE ── */}
        <section
          className="py-20 px-6"
          style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--warm-white) 100%)" }}
        >
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-14">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-accent)] mb-3">
                Next Steps
              </p>
              <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)]">
                90-Day Activation Timeline
              </h2>
            </FadeIn>

            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gold-accent)] to-transparent" />

              <div className="space-y-6 pl-12 sm:pl-16">
                {[
                  { step: "01", label: "Review this proposal and confirm scope", day: "Day 1–2" },
                  { step: "02", label: "Sign Letter of Intent + 50% advance payment", day: "Day 3" },
                  { step: "03", label: "Kickoff call — brand assets, credentials, access", day: "Day 5" },
                  { step: "04", label: "Google Business Profile live — Bhiwadi", day: "Day 7" },
                  { step: "05", label: "Website wireframe approval", day: "Day 14" },
                  { step: "06", label: "Dashboard MVP delivered for feedback", day: "Day 20" },
                  { step: "07", label: "Social media + Amazon profiles live", day: "Day 30" },
                  { step: "08", label: "Website + e-commerce live", day: "Day 35" },
                  { step: "09", label: "Paid campaigns activated", day: "Day 40" },
                  { step: "10", label: "Full ecosystem operational", day: "Day 90" },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex items-center gap-4"
                  >
                    {/* dot */}
                    <div
                      className="absolute -left-12 sm:-left-16 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: "var(--gold-accent)" }}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1 bg-white/70 rounded-xl border border-[var(--wood-light)]/20 px-5 py-3 flex justify-between items-center">
                      <span className="text-sm text-[var(--wood-dark)] font-[family-name:var(--font-body)]">
                        {item.label}
                      </span>
                      <span className="text-xs font-semibold text-[var(--gold-accent)] ml-4 flex-shrink-0">
                        {item.day}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FOOTER ── */}
        <section
          className="py-24 px-6"
          style={{
            background: "linear-gradient(160deg, #1a0e04 0%, #2d1a0a 40%, #1a0e04 100%)",
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            {/* ambient glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 600,
                height: 300,
                background: "radial-gradient(ellipse, rgba(184,134,11,0.2) 0%, transparent 70%)",
                filter: "blur(50px)",
                transform: "translateX(-50%)",
                left: "50%",
              }}
            />

            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-white mb-4">
                Ready to grow{" "}
                <span className="text-[var(--gold-accent)]">MR Panel?</span>
              </h2>
              <p className="text-white/60 mb-10 font-[family-name:var(--font-accent)] italic text-lg">
                Contact Digital Bytes Solutions to begin your 90-day digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/70 font-[family-name:var(--font-body)]">
                <a
                  href="mailto:contact@digitalbytessolutions.in"
                  className="flex items-center gap-2 hover:text-[var(--gold-accent)] transition-colors"
                >
                  ✉ contact@digitalbytessolutions.in
                </a>
                <span className="hidden sm:block text-white/30">·</span>
                <a
                  href="tel:+919821199832"
                  className="flex items-center gap-2 hover:text-[var(--gold-accent)] transition-colors"
                >
                  📞 +91 9821199832
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
