"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MessageCircle, Mail } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      ref={ref}
      id="cta"
      className="relative overflow-hidden"
      style={{ background: "var(--warm-white)" }}
    >
      {/* Top gradient transition from dark */}
      <div className="h-16 lg:h-24 bg-gradient-to-b from-[var(--wood-dark)]/10 to-transparent" />

      <div className="py-20 lg:py-32 xl:py-40">
        <div className="relative mx-auto max-w-3xl lg:max-w-4xl px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 lg:mb-20"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-5">
              Start Your Modular Project
            </p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-display)] text-[var(--wood-dark)] mb-6">
              Feel the Difference
            </h2>
            <p className="text-lg lg:text-xl text-[var(--wood-mid)] font-[family-name:var(--font-body)] max-w-2xl mx-auto leading-relaxed">
              Request a free sample panel and experience the precision, finish,
              and quality that 500+ modular projects — kitchens, furniture & corporate spaces — across India are built on.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 lg:p-16 border border-[var(--wood-light)]/30 shadow-2xl shadow-[var(--wood-dark)]/10 max-w-3xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              <div>
                <label className="block text-sm font-[family-name:var(--font-body)] text-[var(--wood-dark)] mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full px-5 py-3.5 rounded-xl border border-[var(--wood-light)]/30 bg-[var(--warm-white)] text-[var(--wood-dark)] placeholder:text-[var(--wood-light)] focus:outline-none focus:border-[var(--gold-accent)] transition-colors font-[family-name:var(--font-body)]"
                />
              </div>
              <div>
                <label className="block text-sm font-[family-name:var(--font-body)] text-[var(--wood-dark)] mb-3">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-5 py-3.5 rounded-xl border border-[var(--wood-light)]/30 bg-[var(--warm-white)] text-[var(--wood-dark)] placeholder:text-[var(--wood-light)] focus:outline-none focus:border-[var(--gold-accent)] transition-colors font-[family-name:var(--font-body)]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              <div>
                <label className="block text-sm font-[family-name:var(--font-body)] text-[var(--wood-dark)] mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-5 py-3.5 rounded-xl border border-[var(--wood-light)]/30 bg-[var(--warm-white)] text-[var(--wood-dark)] placeholder:text-[var(--wood-light)] focus:outline-none focus:border-[var(--gold-accent)] transition-colors font-[family-name:var(--font-body)]"
                />
              </div>
              <div>
                <label className="block text-sm font-[family-name:var(--font-body)] text-[var(--wood-dark)] mb-3">
                  Product Interest
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-[var(--wood-light)]/30 bg-[var(--warm-white)] text-[var(--wood-dark)] focus:outline-none focus:border-[var(--gold-accent)] transition-colors font-[family-name:var(--font-body)]">
                  <option value="">Select a product</option>
                  <option value="shield">MR Modular Shield (Marine BWP)</option>
                  <option value="carcass">MR Carcass Board (BWR)</option>
                  <option value="shutter">MR Shutter Ply</option>
                  <option value="curve">MR Curve Form (Flexi)</option>
                  <option value="all">Full Range Sample Kit</option>
                </select>
              </div>
            </div>

            <div className="mb-8 lg:mb-10">
              <label className="block text-sm font-[family-name:var(--font-body)] text-[var(--wood-dark)] mb-3">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-5 py-3.5 rounded-xl border border-[var(--wood-light)]/30 bg-[var(--warm-white)] text-[var(--wood-dark)] placeholder:text-[var(--wood-light)] focus:outline-none focus:border-[var(--gold-accent)] transition-colors font-[family-name:var(--font-body)] resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-5">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[var(--wood-dark)] text-[var(--cream)] rounded-xl font-[family-name:var(--font-body)] tracking-wide hover:bg-[var(--gold-accent)] transition-colors duration-300 flex items-center justify-center gap-2 text-base"
              >
                {submitted ? "Thank You!" : (<><Send className="w-4 h-4" />Request Sample</>)}
              </button>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20MR%20Panel%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 border-2 border-[#25D366] text-[#25D366] rounded-xl font-[family-name:var(--font-body)] tracking-wide hover:bg-[#25D366] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 text-base"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>

              <a
                href="mailto:info@mrpanel.com"
                className="w-full sm:w-auto px-10 py-4 border border-[var(--wood-light)]/40 text-[var(--wood-mid)] rounded-xl font-[family-name:var(--font-body)] tracking-wide hover:border-[var(--gold-accent)] hover:text-[var(--gold-accent)] transition-colors duration-300 flex items-center justify-center gap-2 text-base"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-12 lg:h-16" />
    </section>
  );
}
