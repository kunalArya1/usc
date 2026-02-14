"use client";

import { useState } from "react";
import { FadeUp } from "@/utils/hooks";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "When do new batches start?",
      a: "New batches typically start in April–May (post Class 10/12 results) and again in August–September. Limited seats are available. Contact us to check current batch availability.",
    },
    {
      q: "Can a student join Class 11–12 coaching",
      a: "Yes! Our integrated Class 11–12 program is specifically designed so that board preparation, saving time and effort.",
    },
    {
      q: "What is the class schedule? How many hours per day?",
      a: "Regular batches run 3–4 hours per day (weekdays). Weekend batches of 5–6 hours are also available for students who need a flexible schedule.",
    },
    {
      q: "Are study materials provided, or do we need to buy separately?",
      a: "All study materials, notes, DPPs, and practice sheets are included in the course fee. Students do not need to purchase any additional books — everything is provided.",
    },
    // {
    //   q: "Is there an online option available?",
    //   a: "Yes, we offer hybrid classes (live online + recorded lectures) for students who cannot attend in-person. Online students get the same study material, tests, and doubt-clearing sessions.",
    // },
    // {
    //   q: "What is the refund policy if I want to leave the course?",
    //   a: "We offer a 15-day trial period. If you're unsatisfied for any reason within 15 days, we provide a full refund — no questions asked. After 15 days, a partial refund may be applicable.",
    // },
  ];

  return (
    <section className="bg-[#EEF4FB] py-20">
      <div className="max-w-[860px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              FAQs
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
            Frequently Asked
            <br />
            <span className="text-[#E5232E]">Questions</span>
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 60}>
              <div
                className={`bg-white rounded-[16px] border overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "border-[#E5232E]/30 shadow-md"
                    : "border-[#E2E8F0] shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span
                    className={`font-['Sora'] text-[15px] font-semibold leading-snug transition-colors ${
                      openIndex === i ? "text-[#E5232E]" : "text-[#0D1836]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? "bg-[#E5232E] text-white rotate-180"
                        : "bg-[#EEF4FB] text-[#0D1836]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: openIndex === i ? "200px" : "0px",
                  }}
                >
                  <p className="px-6 pb-5 text-[14px] text-[#4A5568] leading-[1.78]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
