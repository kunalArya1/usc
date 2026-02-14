export default function HeroBanner() {
  return (
    <section className="pt-[68px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div style={{ animation: "fadeInUp 0.7s ease both" }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.2em] uppercase text-[#0D1836]/50">
              // Our Results
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-['Sora'] text-[42px] md:text-[56px] font-extrabold text-[#0D1836] leading-[1.08] mb-5">
                Proof of What's
                <br />
                <span className="text-[#E5232E]">Possible Here.</span>
              </h1>
              <p className="text-[16px] text-[#4A5568] leading-[1.75] max-w-[540px]">
                Every year, our students set new benchmarks — in NEET, JEE, CBSE
                and Bihar Board. These are real students, real ranks, and real
                transformations. Their success is our purpose.
              </p>
            </div>
            {/* Year filter tabs */}
            <div className="flex flex-wrap gap-2 mb-1">
              {["2024", "2023", "2022", "2021"].map((yr, i) => (
                <button
                  key={yr}
                  className={`font-['Sora'] text-[13px] font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    i === 0
                      ? "bg-[#E5232E] text-white border-[#E5232E]"
                      : "bg-white text-[#0D1836] border-[#E2E8F0] hover:border-[#E5232E] hover:text-[#E5232E]"
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
