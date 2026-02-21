import { FadeUp } from "@/utils/hooks";

export default function ResultsTable() {
  const rows = [
    {
      year: "2025",
      class8: "80+",
      class9: "70+",
      board10: "158+",
      board12: "150+",
      topScore: "680/720 (NEET)",
    },
    {
      year: "2024",
      class8: "70+",
      class9: "68+",
      board10: "150+",
      board12: "142+",
      topScore: "672/720 (NEET)",
    },
    {
      year: "2023",
      class8: "63+",
      class9: "62+",
      board10: "142+",
      board12: "135+",
      topScore: "668/720 (NEET)",
    },
    {
      year: "2022",
      class8: "60+",
      class9: "60+",
      board10: "132+",
      board12: "125+",
      topScore: "98.2% (CBSE)",
    },
    {
      year: "2021",
      class8: "50+",
      class9: "55+",
      board10: "122+",
      board12: "115+",
      topScore: "97.8% (BSEB)",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              Year-wise Data
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
            5 Years of Consistent
            <br />
            <span className="text-[#E5232E]">Growth & Results</span>
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="overflow-x-auto rounded-[20px] border border-[#E2E8F0] shadow-sm">
            <table className="w-full min-w-[680px]">
              <thead>
                <tr className="bg-[#0F1F45]">
                  {[
                    "Year",
                    "Class 8",
                    "class 9",
                    "Class 10",
                    "Class 12",
                    // "Top Score",
                  ].map((h, i) => (
                    <th
                      key={i}
                      className={`px-5 py-4 font-['Sora'] text-[13px] font-semibold text-white/70 ${i === 0 ? "text-left" : "text-center"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={`${ri % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"} hover:bg-[#EEF4FB] transition-colors`}
                  >
                    <td className="px-5 py-4">
                      <span
                        className={`font-['Sora'] text-[15px] font-extrabold ${ri === 0 ? "text-[#E5232E]" : "text-[#0D1836]"}`}
                      >
                        {row.year}
                      </span>
                      {ri === 0 && (
                        <span className="ml-2 font-['Sora'] text-[10px] font-bold bg-[#E5232E]/10 text-[#E5232E] px-2 py-0.5 rounded-full">
                          Latest
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="font-['Sora'] text-[15px] font-bold text-purple-700">
                        {row.class8}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="font-['Sora'] text-[15px] font-bold text-orange-600">
                        {row.class9}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="font-['Sora'] text-[15px] font-bold text-green-700">
                        {row.board10}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="font-['Sora'] text-[15px] font-bold text-[#1D6FDE]">
                        {row.board12}
                      </span>
                    </td>
                    {/* <td className="px-5 py-4 text-center">
                      <span className="font-['Sora'] text-[13px] font-semibold text-[#0D1836]">
                        {row.topScore}
                      </span>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
