import { AnimatedCounter, FadeUp } from "@/utils/hooks";

export default function StatsBand() {
  const stats = [
    { target: 2500, suffix: "+", label: "Total Students", sub: "since 2016" },
    { target: 98, suffix: "%", label: "Success Rate", sub: "board exams" },
    {
      target: 320,
      suffix: "+",
      label: "NEET Selections",
      sub: "in 2024 alone",
    },
    {
      target: 180,
      suffix: "+",
      label: "JEE Qualifiers",
      sub: "Mains & Advanced",
    },
    {
      target: 8,
      suffix: "+",
      label: "Years of Excellence",
      sub: "in Dhaka, Bihar",
    },
  ];

  return (
    <section className="bg-[#0F1F45] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 80} className="text-center">
              <div className="font-['Sora'] text-[42px] md:text-[48px] font-extrabold text-white leading-none mb-1">
                <AnimatedCounter
                  target={s.target}
                  suffix={s.suffix}
                  duration={1800}
                />
              </div>
              <div className="font-['Sora'] text-[14px] font-semibold text-white/80 mt-1">
                {s.label}
              </div>
              <div className="text-[12px] text-white/40 mt-0.5">{s.sub}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
