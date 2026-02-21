import { FadeUp } from "@/utils/hooks";
import { IconStar } from "@/utils/icons";

export function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "Joining Unique Science Classes was the best decision of my life. The faculty's dedication and structured approach helped me crack Bord Exam in my very first attempt with a score of 412/500. I can't thank this institute enough!",
      name: "Md Tarique",
      role: "BSEB 2025",
      initial: "R",
    },
    {
      stars: 5,
      text: "The JEE preparation at Unique Science Classes is phenomenal. Daily problem-solving sessions, thorough concept building, and constant motivation from teachers made all the difference. Highly recommend to every science student.  381/500",
      name: "Sushil Kumar",
      role: "BSEB 2024",
      initial: "P",
    },
    {
      stars: 5,
      text: "Unique Science Classes transformed how I approach science. The teachers explain complex topics with such clarity. My BSEB board 407/500 results improved from 72% to 96% in just one year of coaching here.",
      name: "Nazihh Nehal",
      role: "BSEB 2024",
      initial: "T",
    },
  ];

  return (
    <section className="py-24 bg-[#F6F9FF]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              Satisfied Students
            </span>
          </div>
          <h2 className="font-['Sora'] text-[34px] md:text-[44px] font-extrabold text-[#0D1836] leading-[1.15]">
            Hear from Our
            <br />
            <span className="text-[#E5232E]">Successful Students</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <IconStar key={si} filled={si < r.stars} />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-[14px] text-[#4A5568] leading-[1.75] flex-1 mb-6 italic">
                  "{r.text}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#E2E8F0]">
                  <div className="w-11 h-11 bg-[#0F1F45] text-white rounded-full flex items-center justify-center font-['Sora'] font-bold text-[16px] flex-shrink-0">
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-['Sora'] text-[15px] font-bold text-[#0D1836] leading-none">
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
