"use client";

import Link from "next/link";
import Image from "next/image";
import { MEDIA } from "@/lib/media";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Distribution", href: "/distribution" },
  { name: "Price Calculator", href: "/price-calculator" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.024 4.388 11.02 10.125 11.927v-8.434h-3.05v-3.493h3.05V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.932-1.956 1.889v2.263h3.328l-.532 3.493h-2.796v8.434C19.612 23.093 24 18.097 24 12.073z" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

// SVG social icons since logo_search didn't have them
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-accent)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <Image
              src={MEDIA.FOOTER_LOGO}
              alt="MR Panel"
              width={180}
              height={72}
              className="h-12 w-auto object-contain mb-4 brightness-200 contrast-75"
            />
            <p className="text-[var(--wood-light)] font-[family-name:var(--font-accent)] italic text-lg">
              Precision Panels. Perfect Spaces.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[var(--wood-light)] hover:text-[var(--gold-accent)] transition-colors font-[family-name:var(--font-body)] text-sm py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & social */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-[var(--gold-accent)] font-[family-name:var(--font-body)] mb-4">
              Connect With Us
            </h4>
            <div className="space-y-2 text-sm text-[var(--wood-light)] font-[family-name:var(--font-body)] mb-6">
              <p>info@mrpanel.com</p>
              <p>+91 99999 99999</p>
              <p>Bhiwadi, India</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#" aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[var(--wood-light)]/30 flex items-center justify-center text-[var(--wood-light)] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[var(--wood-light)]/30 flex items-center justify-center text-[var(--wood-light)] hover:border-[#cc2366] hover:text-[#cc2366] transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest"
                className="w-9 h-9 rounded-full border border-[var(--wood-light)]/30 flex items-center justify-center text-[var(--wood-light)] hover:border-[#E60023] hover:text-[#E60023] transition-colors">
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[var(--wood-light)]/30 flex items-center justify-center text-[var(--wood-light)] hover:border-[var(--gold-accent)] hover:text-[var(--gold-accent)] transition-colors">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[var(--wood-light)]/30 flex items-center justify-center text-[var(--wood-light)] hover:border-[#25D366] hover:text-[#25D366] transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--wood-dark)] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--wood-mid)] font-[family-name:var(--font-body)]">
            &copy; {new Date().getFullYear()} MR Panel. All rights reserved.
          </p>
          <p className="text-xs text-[var(--wood-mid)] font-[family-name:var(--font-body)]">
            Crafting India&apos;s modular spaces, one panel at a time. Since 2014.
          </p>
        </div>
      </div>
    </footer>
  );
}
