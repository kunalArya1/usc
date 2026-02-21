"use client";

import { useState } from "react";
import { FadeUp } from "@/utils/hooks";

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "Is the counselling session really free?",
      a: "Yes, 100% free. No obligation, no hidden fees. We simply want to help you choose the right course. Our academic counsellors will call you, understand your goals, and guide you accordingly.",
    },
    {
      q: "What is the best time to visit the institute?",
      a: "You can visit Monday to Saturday between 9 AM and 6 PM. Sunday visits are available between 10 AM and 2 PM by prior appointment. We recommend calling ahead to ensure an academic advisor is available for you.",
    },
    {
      q: "How do I know which course is right for me?",
      a: "That's exactly what our free counselling session is for. Based on your current standard, target exam, available time, and budget, our advisor will recommend the most suitable course and batch.",
    },
    {
      q: "Can I get the fee structure and batch schedule over WhatsApp?",
      a: "Absolutely. Just send us a message on WhatsApp at +91 6287247735 and we'll share the complete fee structure, batch timings, and syllabus overview immediately.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[800px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              Quick Answers
            </span>
          </div>
          <h2 className="font-['Sora'] text-[28px] md:text-[36px] font-extrabold text-[#0D1836] leading-[1.15]">
            Common Questions
            <br />
            <span className="text-[#E5232E]">Before You Contact Us</span>
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 50}>
              <div
                className={`bg-white rounded-[16px] border overflow-hidden transition-all duration-300 ${open === i ? "border-[#E5232E]/30 shadow-md" : "border-[#E2E8F0] shadow-sm hover:shadow-md"}`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className={`font-['Sora'] text-[15px] font-semibold leading-snug transition-colors ${open === i ? "text-[#E5232E]" : "text-[#0D1836]"}`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-[#E5232E] text-white rotate-180" : "bg-[#EEF4FB] text-[#0D1836]"}`}
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
                  style={{ maxHeight: open === i ? "200px" : "0px" }}
                >
                  <p className="px-6 pb-5 text-[14px] text-[#4A5568] leading-[1.78]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={300} className="text-center mt-8">
          <p className="text-[14px] text-[#4A5568]">
            Still have a question?{" "}
            <a
              href="tel:+916287247735"
              className="font-['Sora'] font-semibold text-[#E5232E] hover:underline no-underline"
            >
              Call us directly →
            </a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
