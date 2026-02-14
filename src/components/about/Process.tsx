import { FadeUp } from "@/utils/hooks";
import { IconConsult, IconBookOpen, IconComplete } from "@/utils/icons";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <IconConsult />,
      title: "1. Counselling",
      desc: "We begin with a detailed free counselling session to understand the student's current level, target exam, and goals — crafting a personalised study road map.",
    },
    {
      number: "02",
      icon: <IconBookOpen />,
      title: "2. Preparation",
      desc: "Our faculty meticulously covers every topic, ensuring concept clarity through lectures, practice sheets, and revision cycles with DPPs and weekly tests.",
    },
    {
      number: "03",
      icon: <IconComplete />,
      title: "3. Results",
      desc: "Once preparation peaks, we conduct NTA-pattern mock tests, detailed performance analysis, and final revision sessions to get students exam-ready and confident.",
    },
  ];

  return (
    <section className="bg-[#0F1F45] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Head */}
        <FadeUp className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#7FA5F5]">
              // Our Process
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[42px] font-extrabold text-white leading-[1.15]">
            Our Simplified
            <br />
            <span className="text-[#E5232E]">Teaching Process</span>
          </h2>
        </FadeUp>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <FadeUp key={i} delay={i * 110}>
              <div className="bg-white rounded-[18px] p-8 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full">
                {/* Background step number */}
                <div className="absolute top-4 right-5 font-['Sora'] text-[64px] font-extrabold text-[#EEF4FB] leading-none select-none">
                  {s.number}
                </div>

                {/* Icon circle */}
                <div className="w-14 h-14 bg-[#E5232E] rounded-[14px] flex items-center justify-center mb-6 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white">{s.icon}</span>
                </div>

                <h3 className="font-['Sora'] text-[19px] font-bold text-[#0D1836] mb-3 relative z-10">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[#4A5568] leading-[1.72] relative z-10">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
