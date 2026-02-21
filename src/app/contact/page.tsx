"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/contact/HeroBanner";
import ContactMain from "@/components/contact/ContactMain";
import MapSection from "@/components/contact/MapSection";
import QuickContact from "@/components/contact/QuickContact";
import MiniTestimonials from "@/components/contact/MiniTestimonials";
import ContactFAQ from "@/components/contact/ContactFAQ";

export default function ContactPage() {
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
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <Navbar />

      <main>
        <HeroBanner />
        <ContactMain />
        <MapSection />
        <QuickContact />
        {/* <MiniTestimonials /> */}
        <ContactFAQ />
      </main>

      <Footer />
    </>
  );
}
