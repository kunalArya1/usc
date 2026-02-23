import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";
import {
  IconArrowRight,
  IconBookOpen,
  IconCheck,
  IconGraduate,
  IconTrophy,
  IconUsers,
} from "@/utils/icons";

export function About() {
  const checks = [
    "Delivering 98% success rate in board exams year after year",
    "Personalized study plans crafted for every student",
    "Technology-enabled smart classrooms & digital resources",
    "Dedicated crash course & revision programs",
  ];
  const miniCards = [
    { icon: <IconGraduate />, val: "8+", label: "Expert Faculties" },
    { icon: <IconTrophy />, val: "10+", label: "Board Topper" },
    { icon: <IconBookOpen />, val: "5", label: "Courses Offered" },
    { icon: <IconUsers />, val: "100+", label: "Alumni Network" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image side */}
          <FadeUp>
            <div className="relative">
              <div className="rounded-[20px] overflow-hidden shadow-2xl aspect-[5/4] relative">
                <img src="result.png" alt="" />
              </div>
              {/* Years badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#E5232E] text-white rounded-[18px] p-5 text-center shadow-xl shadow-red-200/50">
                <div className="font-['Sora'] text-[38px] font-extrabold leading-none">
                  5+
                </div>
                <div className="text-[12px] opacity-85 mt-1 leading-tight">
                  Years of
                  <br />
                  Excellence
                </div>
              </div>
              {/* Decorative blob */}
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#EEF4FB] rounded-full -z-10" />
            </div>
          </FadeUp>

          {/* Text side */}
          <FadeUp delay={150}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
              <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                About Us
              </span>
            </div>
            <h2 className="font-['Sora'] text-[34px] md:text-[42px] font-extrabold text-[#0D1836] leading-[1.15] mb-5">
              Discover Our Passion for{" "}
              <span className="text-[#E5232E]">Academic Excellence</span>
            </h2>
            <p className="text-[15px] text-[#4A5568] leading-[1.75] mb-6">
              At Unique Science Classes, Dhaka, Bihar, we believe every student
              has the potential to achieve greatness. Founded with a singular
              mission — to bridge the gap between aspiration and achievement —
              we've built an environment where science becomes exciting and exam
              success becomes inevitable.
            </p>

            {/* Check list */}
            <div className="flex flex-col gap-3 mb-8">
              {checks.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#1D6FDE]">
                      <IconCheck />
                    </span>
                  </div>
                  <span className="text-[15px] text-[#4A5568]">{c}</span>
                </div>
              ))}
            </div>

            {/* Mini stat cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {miniCards.map((m, i) => (
                <div
                  key={i}
                  className="bg-[#F6F9FF] border border-[#E2E8F0] rounded-[12px] p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#EEF4FB] rounded-[10px] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1D6FDE]">{m.icon}</span>
                  </div>
                  <div>
                    <div className="font-['Sora'] text-[16px] font-extrabold text-[#0D1836] leading-none">
                      {m.val}
                    </div>
                    <div className="text-[11px] text-[#8A96AB] mt-0.5">
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-[#0F1F45] hover:bg-[#1A2E5C] text-white font-['Sora'] font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg no-underline"
            >
              Explore Our Courses <IconArrowRight />
            </a> */}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
