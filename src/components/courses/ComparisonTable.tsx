"use client";

import { FadeUp } from "@/utils/hooks";

export default function ComparisonTable() {
  const features = [
    "Expert Faculty",
    "Small Batch (≤40 students)",
    "Daily Doubt Sessions",
    "Study Material Included",
    "Mock Tests (Weekly)",
    "Performance Analytics",
    "Parent Progress Reports",
    "Crash Course / Revision Batch",
  ];

  const cols = [
    { label: "Class 9", icon: "📚", color: "text-blue-600" },
    { label: "Class 10", icon: "📚", color: "text-blue-600" },
    { label: "Class 11", icon: "⚗️", color: "text-[#E5232E]" },
    { label: "Class 11", icon: "⚗️", color: "text-[#E5232E]" },
  ];

  const matrix = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              Course Comparison
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
            Compare All Courses
            <br />
            <span className="text-[#E5232E]">at a Glance</span>
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="overflow-x-auto rounded-[20px] border border-[#E2E8F0] shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#0F1F45]">
                  <th className="text-left px-6 py-4 font-['Sora'] text-[13px] font-semibold text-white/60 w-[40%]">
                    Features
                  </th>
                  {cols.map((c) => (
                    <th key={c.label} className="px-4 py-4 text-center">
                      <div className="text-[18px] mb-1">{c.icon}</div>
                      <div
                        className={`font-['Sora'] text-[13px] font-bold ${c.color}`}
                      >
                        {c.label}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feat, fi) => (
                  <tr
                    key={fi}
                    className={fi % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}
                  >
                    <td className="px-6 py-4 font-['Sora'] text-[14px] font-medium text-[#0D1836]">
                      {feat}
                    </td>
                    {matrix[fi].map((has, ci) => (
                      <td key={ci} className="px-4 py-4 text-center">
                        {has ? (
                          <div className="inline-flex w-7 h-7 bg-green-100 rounded-full items-center justify-center mx-auto">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#16a34a"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        ) : (
                          <div className="inline-flex w-7 h-7 bg-gray-100 rounded-full items-center justify-center mx-auto">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#9CA3AF"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-3.5 h-3.5"
                            >
                              <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </td>
                    ))}
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
