"use client";

import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import QualitySection from "@/components/sections/QualitySection";
import VideoSection from "@/components/sections/VideoSection";
import ProductTeaseSection from "@/components/sections/ProductTeaseSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import LegacyWallSection from "@/components/sections/LegacyWallSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <QualitySection />
        {/* Ambient video section — slides in as you reach the creamy area */}
        <VideoSection />
        <ProductTeaseSection />
        <SocialProofSection />
        <LegacyWallSection />
        <CTASection />
      </main>
      <Footer />
      {/* Floating WhatsApp contact button */}
      <FloatingWhatsApp />
    </>
  );
}
