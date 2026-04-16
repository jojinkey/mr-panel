import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MR Panel | Premium Modular Kitchen Wood Panels — Bhiwadi, India",
  description:
    "MR Panel engineers premium wood panels exclusively for modular kitchens. BWP marine grade, carcass boards, shutter ply & flexi panels. ISI Certified. Founded by Mr. Rajesh in 2014. Request a free sample today.",
  keywords: [
    "modular kitchen panels",
    "BWP plywood kitchen",
    "kitchen carcass board",
    "modular kitchen wood India",
    "kitchen shutter ply",
    "marine grade plywood kitchen",
    "MR Panel Mumbai",
    "premium plywood modular kitchen",
    "ISI certified kitchen panels",
    "modular kitchen wood panels India",
  ],
  openGraph: {
    title: "MR Panel — Premium Wood Panels for Modular Kitchens",
    description:
      "Precision-engineered plywood panels for modular kitchens. Marine grade, carcass, shutter & flexi variants. ISI Certified. Trusted by 500+ kitchen projects.",
    type: "website",
    locale: "en_IN",
    siteName: "MR Panel",
  },
  twitter: {
    card: "summary_large_image",
    title: "MR Panel — Where Every Modular Dream Begins",
    description:
      "Premium wood panels engineered for modular kitchens. ISI Certified. Founded 2014.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} antialiased`}
    >
      <head>
        {/*
          Preload the hero background video so the browser fetches it
          immediately — before React hydrates or the component mounts.
          fetchPriority="high" puts it ahead of non-critical resources.
        */}
        <link
          rel="preload"
          href="/api/media?key=hero-video"
          as="video"
          type="video/mp4"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
