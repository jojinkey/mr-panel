"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// SVG brand icons — inline so no external dependency needed
function AmazonIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <text x="4" y="32" fontSize="22" fontWeight="700" fill="#FF9900" fontFamily="Arial, sans-serif">
        amazon
      </text>
      {/* smile arrow */}
      <path
        d="M6 36 Q24 44 42 36"
        stroke="#FF9900"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M40 33 L42 36 L39 37" fill="#FF9900" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="24" r="22" fill="#E60023" />
      <path
        d="M24 8C15.163 8 8 15.163 8 24c0 6.627 3.963 12.346 9.69 14.946-.134-1.205-.254-3.056.053-4.371.278-1.178 1.857-7.876 1.857-7.876s-.474-.948-.474-2.351c0-2.203 1.278-3.849 2.866-3.849 1.352 0 2.007 1.014 2.007 2.23 0 1.358-.864 3.393-1.313 5.279-.373 1.576.789 2.859 2.341 2.859 2.81 0 4.702-3.612 4.702-7.882 0-3.246-2.163-5.678-6.093-5.678-4.437 0-7.183 3.311-7.183 7.014 0 1.274.376 2.172.962 2.868.269.32.308.448.21.813-.069.265-.228.897-.294 1.148-.097.369-.397.502-.727.366-2.034-.838-2.985-3.088-2.985-5.622 0-4.179 3.536-9.215 10.567-9.215 5.677 0 9.418 4.112 9.418 8.527 0 5.857-3.244 10.246-8.003 10.246-1.601 0-3.107-.864-3.62-1.843l-.985 3.797c-.357 1.317-1.32 2.965-1.966 3.967C22.073 39.938 23.025 40 24 40c8.837 0 16-7.163 16-16S32.837 8 24 8z"
        fill="white"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="24" r="22" fill="#1877F2" />
      <path
        d="M31 8h-4.5C23.015 8 21 10.015 21 13.5V17h-4v5h4v14h5V22h4l1-5h-5v-3c0-1.105.895-2 2-2H31V8z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#ig-grad)" />
      <rect x="12" y="12" width="24" height="24" rx="7" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="33" cy="15" r="1.8" fill="white" />
    </svg>
  );
}

function WhatsAppIconSocial() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="24" r="22" fill="#25D366" />
      <path
        d="M34.3 13.7A14.08 14.08 0 0024 9C16.27 9 10 15.27 10 23c0 2.45.65 4.75 1.77 6.75L10 38l8.5-1.73A14.05 14.05 0 0024 37c7.73 0 14-6.27 14-14 0-3.74-1.45-7.25-3.7-9.3zm-10.3 21.6c-2.07 0-4.1-.56-5.87-1.6l-.42-.25-4.35.89.9-4.22-.28-.44A11.6 11.6 0 0112.4 23c0-6.39 5.21-11.6 11.6-11.6 3.1 0 6 1.2 8.18 3.39A11.52 11.52 0 0135.6 23c0 6.39-5.21 11.3-11.6 11.3zm6.37-8.68c-.35-.17-2.06-1.01-2.38-1.13-.32-.11-.55-.17-.78.18-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.18-1.47-.54-2.8-1.72-1.03-.92-1.73-2.05-1.93-2.4-.2-.35-.02-.54.15-.71.15-.15.35-.4.53-.6.17-.2.23-.35.35-.58.11-.23.06-.44-.03-.61-.09-.18-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59-.2-.01-.44-.01-.67-.01-.23 0-.61.09-.93.44-.32.35-1.22 1.19-1.22 2.9 0 1.71 1.25 3.36 1.42 3.59.18.23 2.45 3.75 5.95 5.26.83.36 1.48.57 1.98.73.83.26 1.59.23 2.19.14.67-.1 2.06-.84 2.35-1.66.29-.81.29-1.51.2-1.66-.08-.14-.31-.23-.66-.41z"
        fill="white"
      />
    </svg>
  );
}

const brands = [
  { name: "Amazon", Icon: AmazonIcon, bg: "#FFFBF0" },
  { name: "Pinterest", Icon: PinterestIcon, bg: "#FFF0F0" },
  { name: "Facebook", Icon: FacebookIcon, bg: "#F0F4FF" },
  { name: "Instagram", Icon: InstagramIcon, bg: "#FFF0F8" },
  { name: "WhatsApp", Icon: WhatsAppIconSocial, bg: "#F0FFF5" },
];

// Duplicate for seamless infinite scroll
const allBrands = [...brands, ...brands, ...brands];

export default function SocialProofSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="social-presence"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "var(--warm-white)" }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 px-6"
      >
        <p className="text-xs tracking-[0.35em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-4">
          Find Us Online
        </p>
        <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-[var(--wood-dark)]">
          Our Digital Presence
        </h2>
        <p className="mt-4 text-base text-[var(--wood-mid)] font-[family-name:var(--font-body)] max-w-lg mx-auto">
          Explore our catalogue, inspiration boards, and community across platforms.
        </p>
      </motion.div>

      {/* Sliding brand strip — infinite marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--warm-white), transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--warm-white), transparent)" }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="overflow-hidden"
        >
          <motion.div
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 lg:gap-12 items-center"
            style={{ width: "max-content" }}
          >
            {allBrands.map((brand, i) => {
              const Icon = brand.Icon;
              return (
                <div
                  key={`${brand.name}-${i}`}
                  className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center p-4 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: brand.bg }}
                  >
                    <Icon />
                  </div>
                  <span className="text-xs font-[family-name:var(--font-body)] text-[var(--wood-mid)] tracking-wide">
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* CTA links row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mt-14 px-6"
      >
        {[
          { label: "Shop on Amazon", href: "#", color: "#FF9900" },
          { label: "Pinterest Boards", href: "#", color: "#E60023" },
          { label: "Facebook Page", href: "#", color: "#1877F2" },
          { label: "Instagram", href: "#", color: "#cc2366" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-6 py-2.5 rounded-full text-sm font-[family-name:var(--font-body)] border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: link.color + "55",
              color: link.color,
              background: link.color + "0D",
            }}
          >
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
