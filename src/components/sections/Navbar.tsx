"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { MEDIA } from "@/lib/media";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Distribution", href: "/distribution" },
  { name: "Price Calculator", href: "/price-calculator" },
  { name: "Our Proposal", href: "/proposal" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.02);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
    >
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[var(--warm-white)]/80 backdrop-blur-xl shadow-sm border-b border-[var(--wood-light)]/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" aria-label="MR Panel Home">
              <Image
                src={MEDIA.HERO_LOGO}
                alt="MR Panel"
                width={200}
                height={80}
                className="h-11 lg:h-14 w-auto object-contain transition-all duration-500"
                style={{
                  filter: scrolled
                    ? "brightness(0.92) drop-shadow(0 1px 6px rgba(0,0,0,0.22))"
                    : "brightness(1.2) saturate(1.3) drop-shadow(0 0 14px rgba(255,210,50,0.90)) drop-shadow(0 0 6px rgba(255,240,120,0.70))",
                }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-[family-name:var(--font-body)] tracking-widest uppercase transition-all duration-300 hover:text-[var(--gold-accent)] ${
                    scrolled
                      ? "text-[var(--wood-dark)]"
                      : "text-white font-semibold"
                  }`}
                  style={
                    scrolled
                      ? undefined
                      : { textShadow: "0 1px 8px rgba(0,0,0,0.80), 0 2px 16px rgba(0,0,0,0.60)" }
                  }
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative z-50 p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-[var(--wood-dark)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--wood-dark)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[var(--warm-white)]/95 backdrop-blur-xl border-t border-[var(--wood-light)]/20"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-[family-name:var(--font-body)] text-[var(--wood-dark)] hover:text-[var(--gold-accent)] transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
