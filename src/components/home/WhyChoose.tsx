import { FadeUp } from "@/utils/hooks";
import { IconGraduate, IconTarget, IconUsers } from "@/utils/icons";

export function WhyChoose() {
  const cards = [
    {
      icon: <IconGraduate />,
      title: "Expert Faculty",
      desc: "Our faculities bring deep subject expertise, mentoring students with proven strategies and personalized guidance.",
    },
    {
      icon: <IconTarget />,
      title: "Result-Oriented Approach",
      desc: "Structured curriculum aligned with CBSE, BSEB, NEET & JEE syllabi. Regular mock tests, analysis sessions and doubt-clearing classes.",
    },
    {
      icon: <IconUsers />,
      title: "Small Batch Sizes",
      desc: "Limited seats per batch ensure every student receives individual attention. No student gets left behind in our focused learning environment.",
    },
  ];

  return (
    <section className="bg-[#0F1F45] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#7FA5F5] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#7FA5F5]">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-['Sora'] text-[36px] md:text-[44px] font-extrabold text-white leading-[1.15]">
            We Offer Dhaka's Most Trusted
            <br />
            Science Coaching
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 120}>
              <div className="bg-white/[0.06] border border-white/10 rounded-[16px] p-8 hover:bg-white/[0.10] hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#E5232E]/20 rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-[#E5232E]/30 transition-colors">
                  <span className="text-[#E5232E]">{card.icon}</span>
                </div>
                <h3 className="font-['Sora'] text-[19px] font-700 font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-white/60 leading-[1.75]">
                  {card.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
