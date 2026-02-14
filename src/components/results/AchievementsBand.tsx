import { FadeUp } from "@/utils/hooks";

export default function AchievementsBand() {
  const achievements = [
    {
      emoji: "🏆",
      title: "#1 Coaching in Dhaka",
      desc: "Ranked the most trusted and result-oriented science coaching institute in Dhaka Block, Bihar.",
    },
    {
      emoji: "🎯",
      title: "98% Selection Rate",
      desc: "98 out of every 100 students who complete their preparation with us clear their target exam.",
    },
    {
      emoji: "🔬",
      title: "AIIMS & IIT Alumni Faculty",
      desc: "Our faculty brings real-world exam experience from India's most prestigious institutions.",
    },
    {
      emoji: "📊",
      title: "Consistent Growth Every Year",
      desc: "Our result numbers have grown every single year since 2016 — a testament to our teaching system.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              Our Recognition
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
            Why Families in Bihar
            <br />
            <span className="text-[#E5232E]">Trust Us the Most</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <FadeUp key={i} delay={i * 90}>
              <div className="bg-[#F6F9FF] border border-[#E2E8F0] rounded-[18px] p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center h-full">
                <div className="text-[44px] mb-4">{a.emoji}</div>
                <h3 className="font-['Sora'] text-[17px] font-bold text-[#0D1836] mb-3">
                  {a.title}
                </h3>
                <p className="text-[13px] text-[#4A5568] leading-[1.72]">
                  {a.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
