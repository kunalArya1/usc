import { FadeUp } from "@/utils/hooks";

export default function StatsBand() {
  const stats = [
    { value: "500+", label: "Students Enrolled" },
    { value: "98%", label: "Success Rate" },
    { value: "200+", label: "Board Results" },
    { value: "5+", label: "Expert Faculty" },
  ];

  return (
    <section className="bg-white py-16 border-y border-[#E8EEF6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 80} className="text-center">
              <div className="font-['Sora'] text-[40px] md:text-[48px] font-extrabold text-[#0D1836] leading-none mb-2">
                {s.value}
              </div>
              <div className="text-[14px] text-[#8A96AB] font-medium">
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
