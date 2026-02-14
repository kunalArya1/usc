"use client";

import { FadeUp } from "@/utils/hooks";
import { IconTarget, IconZap, IconFlask, IconBookOpen } from "@/utils/icons";

export default function FeaturesBand() {
  const features = [
    {
      icon: <IconTarget />,
      title: "Goal-Aligned Curriculum",
      desc: "Every topic, test, and revision is mapped to the exact exam pattern — no wasted effort, just focused preparation.",
    },
    {
      icon: <IconZap />,
      title: "Live Doubt Clearing",
      desc: "Daily doubt sessions after class hours ensure no question goes unanswered. Students never have to wait till the next day.",
    },
    {
      icon: <IconFlask />,
      title: "Lab & Practical Support",
      desc: "Fully equipped science lab for hands-on learning. Practical concepts are reinforced with experiments, not just theory.",
    },
    {
      icon: <IconBookOpen />,
      title: "Comprehensive Study Material",
      desc: "Meticulously prepared notes, DPPs, and workbooks included in every course — no need for external tuitions or books.",
    },
  ];

  return (
    <section className="bg-[#0F1F45] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#7FA5F5]">
              // Why Our Courses
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[42px] font-extrabold text-white leading-[1.15]">
            What Makes Our Coaching{" "}
            <span className="text-[#E5232E]">Different</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="bg-white/[0.06] border border-white/10 rounded-[18px] p-7 hover:bg-white/[0.10] hover:-translate-y-1.5 transition-all duration-300 group h-full">
                <div className="w-13 h-13 w-[52px] h-[52px] bg-[#E5232E]/20 rounded-[14px] flex items-center justify-center mb-5 group-hover:bg-[#E5232E]/30 transition-colors">
                  <span className="text-[#E5232E]">{f.icon}</span>
                </div>
                <h3 className="font-['Sora'] text-[17px] font-bold text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] text-white/55 leading-[1.75]">
                  {f.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
