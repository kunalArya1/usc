"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/courses/HeroBanner";
import CoursesGrid from "@/components/courses/CoursesGrid";
import FeaturesBand from "@/components/courses/FeaturesBand";
import ComparisonTable from "@/components/courses/ComparisonTable";
import FAQ from "@/components/courses/FAQ";
import CTABanner from "@/components/courses/CTABanner";

export default function CoursesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>

      <Navbar />

      <main>
        <HeroBanner />
        <CoursesGrid />
        <FeaturesBand />
        <ComparisonTable />
        <FAQ />
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
