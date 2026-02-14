"use client";

import { FadeUp } from "@/utils/hooks";

export default function HeroBanner() {
  return (
    <section className="pt-[68px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div style={{ animation: "fadeInUp 0.7s ease both" }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.2em] uppercase text-[#0D1836]/50">
              // Contact Us
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-['Sora'] text-[42px] md:text-[56px] font-extrabold text-[#0D1836] leading-[1.08] mb-5">
                Let's Build Your
                <br />
                <span className="text-[#E5232E]">Success Story</span>
              </h1>
              <p className="text-[16px] text-[#4A5568] leading-[1.75] max-w-[500px]">
                Have questions about courses, batches, or fees? Reach out — our
                academic counsellors respond within 2 hours and will guide you
                to the right program for your goals.
              </p>
            </div>
            {/* Trust pill badges */}
            <div className="flex flex-col gap-2 mb-1">
              {[
                { icon: "⚡", text: "Response within 2 hours" },
                { icon: "🎓", text: "Free counselling session" },
                { icon: "🔒", text: "Your info is 100% private" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-[#F6F9FF] border border-[#E2E8F0] rounded-full px-4 py-2"
                >
                  <span className="text-[16px]">{b.icon}</span>
                  <span className="font-['Sora'] text-[13px] font-semibold text-[#0D1836]">
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
