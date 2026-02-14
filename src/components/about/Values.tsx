import { FadeUp } from "@/utils/hooks";

export default function Values() {
  const values = [
    {
      emoji: "🎯",
      title: "Result-Driven",
      desc: "Every lesson, test, and revision session is designed with one goal — measurable improvement in your exam score.",
    },
    {
      emoji: "🔬",
      title: "Conceptual Clarity",
      desc: "We never rely on rote learning. Our faculty builds deep conceptual understanding that lasts beyond any single exam.",
    },
    {
      emoji: "🤝",
      title: "Student-First",
      desc: "Each student's doubts, pace, and learning style are respected. No one is left behind in our supportive environment.",
    },
    {
      emoji: "📊",
      title: "Data-Led Teaching",
      desc: "We track every student's performance through regular tests and use data to fix weak spots before they become problems.",
    },
  ];

  return (
    <section className="bg-[#F6F9FF] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              // Our Values
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
            The Principles That
            <br />
            <span className="text-[#E5232E]">Drive Our Teaching</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <FadeUp key={i} delay={i * 90}>
              <div className="bg-white border border-[#E2E8F0] rounded-[18px] p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center h-full">
                <div className="text-[40px] mb-4">{v.emoji}</div>
                <h3 className="font-['Sora'] text-[17px] font-bold text-[#0D1836] mb-3">
                  {v.title}
                </h3>
                <p className="text-[14px] text-[#4A5568] leading-[1.7]">
                  {v.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
