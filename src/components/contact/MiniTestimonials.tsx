"use client";

import { FadeUp } from "@/utils/hooks";
import { IconStar } from "@/utils/icons";

export default function MiniTestimonials() {
  const reviews = [
    {
      text: "Called the helpline and within 10 minutes I had full clarity on NEET batch fees, schedule, and faculty. Super responsive team!",
      name: "Ajay Kumar",
      role: "Parent, Bhojpur",
      initial: "A",
      color: "#E5232E",
    },
    {
      text: "The counselling session was genuinely helpful. No sales pressure at all — they helped me choose between Class 12 + NEET integrated vs standalone NEET.",
      name: "Prachi Singh",
      role: "Class 12 Student",
      initial: "P",
      color: "#1D6FDE",
    },
    {
      text: "I WhatsApped them at 9 PM and got a reply within 20 minutes. That kind of responsiveness tells you everything about how they treat students.",
      name: "Vikas Yadav",
      role: "JEE Aspirant",
      initial: "V",
      color: "#7c3aed",
    },
  ];

  return (
    <section className="bg-[#F6F9FF] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              What Families Say
            </span>
          </div>
          <h2 className="font-['Sora'] text-[28px] md:text-[36px] font-extrabold text-[#0D1836] leading-[1.15]">
            Our Support Team is
            <br />
            <span className="text-[#E5232E]">Always There for You</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={i} delay={i * 90}>
              <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <IconStar key={si} />
                  ))}
                </div>
                <p className="text-[14px] text-[#4A5568] leading-[1.75] mb-5 italic">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#F0F4FB]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-['Sora'] font-extrabold text-[15px] text-white flex-shrink-0"
                    style={{ background: r.color }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-['Sora'] text-[14px] font-bold text-[#0D1836] leading-none">
                      {r.name}
                    </div>
                    <div className="text-[12px] text-[#8A96AB] mt-0.5">
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
