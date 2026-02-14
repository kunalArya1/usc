"use client";

import { FadeUp } from "@/utils/hooks";
import { IconArrowRight, IconPhone } from "@/utils/icons";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gradient-to-br from-[#0F1F45] to-[#1A3A6E]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
            className="w-12 h-12"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <p className="text-[11px] text-center px-4 leading-snug text-white/30">
            CTA background: wide shot of full classroom with students engaged in
            study
          </p>
        </div>
        <div className="absolute inset-0 bg-[#0A1628]/88" />
      </div>

      <div className="relative z-10 flex flex-col items-center py-24 px-6 text-center">
        <FadeUp>
          <div className="w-16 h-16 rounded-full border-2 border-white/25 flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-[#E5232E] rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
          </div>

          <h2 className="font-['Sora'] text-[30px] md:text-[46px] font-extrabold text-white leading-[1.12] mb-5 max-w-[660px]">
            Not Sure Which Course
            <br />
            <span className="text-[#E5232E]">Is Right for You?</span>
          </h2>

          <p className="text-[15px] text-white/60 leading-[1.75] max-w-[460px] mx-auto mb-10">
            Our academic counsellors will help you choose the perfect course
            based on your current level, target exam, and timeline — completely
            free.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/30 no-underline"
            >
              Get Free Counselling <IconArrowRight />
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-['Sora'] font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 no-underline"
            >
              <IconPhone /> Call Us Now
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
