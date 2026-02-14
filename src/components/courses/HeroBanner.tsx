"use client";

export default function HeroBanner() {
  return (
    <section className="pt-[68px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div style={{ animation: "fadeInUp 0.7s ease both" }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.2em] uppercase text-[#0D1836]/50">
              // Our Courses
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-['Sora'] text-[42px] md:text-[56px] font-extrabold text-[#0D1836] leading-[1.08] mb-5">
                Courses Tailored
                <br />
                to Your <span className="text-[#E5232E]">Goals</span>
              </h1>
              <p className="text-[16px] text-[#4A5568] leading-[1.75] max-w-[540px]">
                From Class 10 boards to NEET & JEE, we offer structured,
                expert-led courses designed to take every student from
                foundation to final result — systematically and confidently.
              </p>
            </div>
            {/* Quick course filter pills */}
            <div className="flex flex-wrap gap-2 mb-1">
              {["All Courses", "Class 10", "Class 11–12", "NEET", "JEE"].map(
                (tag, i) => (
                  <button
                    key={tag}
                    className={`font-['Sora'] text-[13px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                      i === 0
                        ? "bg-[#E5232E] text-white border-[#E5232E]"
                        : "bg-white text-[#0D1836] border-[#E2E8F0] hover:border-[#E5232E] hover:text-[#E5232E]"
                    }`}
                  >
                    {tag}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
