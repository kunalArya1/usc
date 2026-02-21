"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { WhyChoose } from "@/components/home/WhyChoose";
import { About } from "@/components/home/About";
import { Courses } from "@/components/home/Courses";
import { Results } from "@/components/home/Results";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.4); }
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <About />
        {/* <Courses /> */}
        <Results />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
