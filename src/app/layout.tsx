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
  title: "MR Panel | Premium Modular Wood Panels — Kitchens, Furniture & Corporate Spaces",
  description:
    "MR Panel engineers premium wood panels for modular kitchens, furniture, wardrobes, and corporate interiors. BWP marine grade, carcass boards, shutter ply & flexi panels. ISI Certified. Founded by Mr. Rajesh in 2014. Serving India. Request a free sample today.",
  keywords: [
    "modular kitchen panels",
    "modular furniture panels",
    "corporate interior panels",
    "BWP plywood modular",
    "modular carcass board",
    "modular wood panels India",
    "shutter ply supplier",
    "marine grade plywood",
    "MR Panel Bhiwadi",
    "premium plywood modular design",
    "ISI certified modular panels",
    "modular wood panels India",
  ],
  openGraph: {
    title: "MR Panel — Premium Wood Panels for Modular Designs",
    description:
      "Precision-engineered plywood panels for modular kitchens, furniture & corporate spaces. Marine grade, carcass, shutter & flexi variants. ISI Certified. Trusted by 500+ projects.",
    type: "website",
    locale: "en_IN",
    siteName: "MR Panel",
  },
  twitter: {
    card: "summary_large_image",
    title: "MR Panel — Where Every Modular Dream Begins",
    description:
      "Premium wood panels for modular kitchens, furniture & corporate spaces. ISI Certified. Founded 2018.",
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
