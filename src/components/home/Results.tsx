import { FadeUp } from "@/utils/hooks";
import { IconArrowRight } from "@/utils/icons";

export function Results() {
  const toppers = [
    {
      name: "Pranay ranjan",
      score: "CBSE topper",
      rank: "",
      imgPath: "/students/2.png",
    },
    {
      name: "Aniket Kumar",
      score: "BSEB topper",
      rank: "417/500",
      imgPath: "/students/1.png",
    },
    {
      name: "Md Tarique",
      score: "BSEB topper",
      rank: "412/500",
      imgPath: "/students/3.jpeg",
    },
    {
      name: "Fazle Imam",
      score: "BSEB topper",
      rank: "395/500",
      imgPath: "/students/4.jpeg",
    },
    {
      name: "Rohan Mishra",
      score: "JEE Adv Qualified",
      rank: "IIT-JEE 2024",
      imgPath: "",
    },
    {
      name: "Kavita Raj",
      score: "CBSE 98.2%",
      rank: "School Topper",
      imgPath: "",
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
              Success Stories We <br />
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {toppers.map((t, i) => (
            <FadeUp key={i} delay={i * 70}>
              <div className="rounded-[18px] overflow-hidden relative group cursor-pointer bg-gradient-to-br from-[#dce8f8] to-[#c2d8f0]">
                {/* Image wrapper with fixed ratio */}
                <div className="relative aspect-[3/4]">
                  {t.imgPath ? (
                    <img
                      src={t.imgPath}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#8BACC8] text-sm font-medium">
                      No Image
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0F1F45]/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">
                    <div className="font-['Sora'] text-[16px] font-bold text-white">
                      {t.name}
                    </div>
                    <div className="font-['Sora'] text-[13px] font-semibold text-[#E5232E]">
                      {t.score}
                    </div>
                    <div className="text-[12px] text-white/70">{t.rank}</div>
                  </div>
                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 group-hover:opacity-0 transition">
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
