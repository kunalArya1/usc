"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/results/HeroBanner";
import StatsBand from "@/components/results/StatsBand";
import NEETToppers from "@/components/results/NEETToppers";
import JEEToppers from "@/components/results/JEEToppers";
import BoardToppers from "@/components/results/BoardToppers";
import ResultsTable from "@/components/results/ResultsTable";
import ResultsGallery from "@/components/results/ResultsGallery";
import Testimonials from "@/components/results/Testimonials";
import AchievementsBand from "@/components/results/AchievementsBand";
import CTABanner from "@/components/results/CTABanner";

export default function ResultsPage() {
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
      `}</style>

      <Navbar />

      <main>
        <HeroBanner />
        <StatsBand />
        {/* <NEETToppers /> */}
        {/* <JEEToppers /> */}
        <BoardToppers title={"BSEB"} />
        {/* <BoardToppers title={"CBSE"} /> */}
        <ResultsTable />
        {/* <ResultsGallery /> */}
        <Testimonials />
        {/* <AchievementsBand /> */}
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
