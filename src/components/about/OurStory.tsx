import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";
import { IconCheck, IconArrowRight } from "@/utils/icons";

export default function OurStory() {
  const checks = [
    "98% Student Satisfaction Rate",
    "Over 10 Board Topper",
    "8+ Qualified Expert Faculty",
    "90% Students Clear in First Attempt",
  ];

  return (
    <section className="bg-[#EEF4FB] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── Left: image with badge ── */}
          <FadeUp>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-[18px] overflow-hidden shadow-xl aspect-[5/4]">
                <img src="/result.png" alt="" />
              </div>

              {/* Years badge — bottom-left overlap */}
              <div
                className="absolute -bottom-5 left-6 bg-[#0F1F45] text-white rounded-[14px] px-5 py-4 flex items-center gap-3 shadow-xl"
                style={{ animation: "floatUpDown 3s ease-in-out infinite" }}
              >
                <div className="w-10 h-10 bg-[#E5232E] rounded-[10px] flex items-center justify-center flex-shrink-0">
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
                <div>
                  <div className="font-['Sora'] text-[24px] font-extrabold leading-none">
                    5+
                  </div>
                  <div className="text-[11px] text-white/65 mt-0.5">
                    Years of Excellence
                  </div>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full border-4 border-[#D0E4F5] -z-10" />
            </div>
          </FadeUp>

          {/* ── Right: text ── */}
          <FadeUp delay={140}>
            {/* Overline */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                // Our Story
              </span>
            </div>

            <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15] mb-5">
              Delivering Exceptional Results{" "}
              <span className="text-[#E5232E]">Every Time</span>
            </h2>

            <p className="text-[15px] text-[#4A5568] leading-[1.78] mb-7">
              Founded with a passion for academic excellence and student-centric
              teaching, Unique Science Classes has grown into Dhaka's most
              trusted coaching institute. With years of experience, we pride
              ourselves on our ability to prepare students for NEET, JEE, and
              board exams — delivering exceptional results every time.
            </p>

            {/* Check list */}
            <div className="flex flex-col gap-3 mb-8">
              {checks.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#E5232E] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">
                      <IconCheck />
                    </span>
                  </div>
                  <span className="text-[15px] text-[#0D1836] font-medium">
                    {c}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F1F45] hover:bg-[#1A2E5C] text-white font-['Sora'] font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg no-underline"
            >
              Book Free Counselling <IconArrowRight />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
