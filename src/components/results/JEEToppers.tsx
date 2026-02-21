import { FadeUp } from "@/utils/hooks";
import TopperCard, { type TopperData } from "./TopperCard";

const jeeToppers: any[] = [
  {
    name: "Arjun Mishra",
    score: "97.8 Percentile",
    rank: "AIR 4,200",
    college: "IIT Dhanbad (ISM)",
    year: "2024",
    tag: "JEE",
    tagColor: "bg-orange-100 text-orange-700",
    initial: "A",
    color: "#ea580c",
  },
  {
    name: "Siddharth Yadav",
    score: "96.4 Percentile",
    rank: "AIR 7,830",
    college: "NIT Patna",
    year: "2024",
    tag: "JEE",
    tagColor: "bg-orange-100 text-orange-700",
    initial: "S",
    color: "#ea580c",
  },
  {
    name: "Rohan Verma",
    score: "JEE Adv. Cleared",
    rank: "IIT Roorkee",
    college: "B.Tech Civil",
    year: "2024",
    tag: "JEE Adv",
    tagColor: "bg-red-100 text-red-700",
    initial: "R",
    color: "#E5232E",
  },
  {
    name: "Kavya Raj",
    score: "94.2 Percentile",
    rank: "AIR 12,440",
    college: "NIT Jamshedpur",
    year: "2024",
    tag: "JEE",
    tagColor: "bg-orange-100 text-orange-700",
    initial: "K",
    color: "#ea580c",
  },
];

export default function JEEToppers() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
              <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                JEE 2024
              </span>
            </div>
            <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
              JEE Qualifiers &<br />
              <span className="text-[#E5232E]">Engineering Selections</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 pb-1">
            <div className="bg-orange-50 border border-orange-100 rounded-[12px] px-4 py-3 text-center">
              <div className="font-['Sora'] text-[24px] font-extrabold text-orange-700">
                180+
              </div>
              <div className="text-[12px] text-orange-500 mt-0.5">
                JEE Qualifiers 2024
              </div>
            </div>
            <div className="bg-[#EEF4FB] border border-[#D8E8F4] rounded-[12px] px-4 py-3 text-center">
              <div className="font-['Sora'] text-[24px] font-extrabold text-[#0F1F45]">
                97.8%
              </div>
              <div className="text-[12px] text-[#8A96AB] mt-0.5">
                Top Percentile
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* {jeeToppers.map((topper, i) => (
            <TopperCard key={i} topper={topper} index={i} featured={i === 2} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
