"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/about/HeroBanner";
import OurStory from "@/components/about/OurStory";
import Process from "@/components/about/Process";
import StatsBand from "@/components/about/StatsBand";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import CTABanner from "@/components/about/CTABanner";

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>

      <Navbar />

      <main>
        <HeroBanner />
        <OurStory />
        <Process />
        <StatsBand />
        <Team />
        {/* <Values /> */}
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
