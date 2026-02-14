import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";
import { IconArrowRight } from "@/utils/icons";

export function Results() {
  const toppers = [
    {
      name: "Rahul Kumar",
      score: "NEET 680/720",
      rank: "AIR 2140",
      img: "Student portrait — NEET topper",
    },
    {
      name: "Priya Singh",
      score: "JEE Mains 97.8%ile",
      rank: "AIR 4200",
      img: "Student portrait — JEE qualifier",
    },
    {
      name: "Amit Yadav",
      score: "BSEB 96.4%",
      rank: "District Topper",
      img: "Student portrait — board topper",
    },
    {
      name: "Sneha Kumari",
      score: "NEET 665/720",
      rank: "AIR 3800",
      img: "Student portrait — NEET topper",
    },
    {
      name: "Rohan Mishra",
      score: "JEE Adv Qualified",
      rank: "IIT-JEE 2024",
      img: "Student portrait — IIT qualifier",
    },
    {
      name: "Kavita Raj",
      score: "CBSE 98.2%",
      rank: "School Topper",
      img: "Student portrait — board topper",
    },
  ];

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <FadeUp>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
              <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                Recent Results
              </span>
            </div>
            <h2 className="font-['Sora'] text-[34px] md:text-[44px] font-extrabold text-[#0D1836] leading-[1.15]">
              Success Stories We
              <br />
              <span className="text-[#E5232E]">Bring to Life.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[14px] px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-200 no-underline whitespace-nowrap"
            >
              Enroll Today <IconArrowRight />
            </a>
          </FadeUp>
        </div>

        {/* Masonry-style topper grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {toppers.map((t, i) => (
            <FadeUp key={i} delay={i * 70}>
              <div
                className={`rounded-[16px] overflow-hidden relative group cursor-pointer ${
                  i === 0 ? "row-span-2" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-[#dce8f8] to-[#c2d8f0] relative overflow-hidden ${
                    i === 0
                      ? "h-[340px] md:h-[420px]"
                      : "h-[160px] md:h-[200px]"
                  }`}
                >
                  <ImgPlaceholder label={t.img} className="w-full h-full" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0F1F45]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 p-4">
                    <div className="font-['Sora'] text-[16px] font-bold text-white text-center">
                      {t.name}
                    </div>
                    <div className="font-['Sora'] text-[13px] font-semibold text-[#E5232E]">
                      {t.score}
                    </div>
                    <div className="text-[12px] text-white/70">{t.rank}</div>
                  </div>
                </div>
                {/* Name badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 group-hover:opacity-0 transition-opacity">
                  <div className="font-['Sora'] text-[13px] font-bold text-white leading-tight">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-white/70">{t.score}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
