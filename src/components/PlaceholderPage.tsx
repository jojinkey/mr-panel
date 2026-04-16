"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import MRPanelLogo from "@/components/MRPanelLogo";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "var(--warm-white)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-xl"
        >
          <MRPanelLogo variant="dark" className="h-16 w-auto mx-auto mb-8" />

          <h1 className="text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-4">
            {title}
          </h1>

          <p className="text-lg text-[var(--wood-mid)] font-[family-name:var(--font-body)] mb-4">
            {description}
          </p>

          <div className="inline-block px-6 py-2 rounded-full border border-[var(--gold-accent)] text-[var(--gold-accent)] font-[family-name:var(--font-accent)] italic text-lg mb-8">
            Coming Soon
          </div>

          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--wood-dark)] hover:text-[var(--gold-accent)] transition-colors font-[family-name:var(--font-body)]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
