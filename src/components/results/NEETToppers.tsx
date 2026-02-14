import { FadeUp } from "@/utils/hooks";
import TopperCard, { type TopperData } from "./TopperCard";

const neetToppers: TopperData[] = [
  {
    name: "Rahul Kumar",
    score: "680 / 720",
    rank: "AIR 2,140",
    college: "AIIMS Patna",
    year: "2024",
    tag: "NEET",
    tagColor: "bg-purple-100 text-purple-700",
    initial: "R",
    color: "#7c3aed",
  },
  {
    name: "Priya Singh",
    score: "672 / 720",
    rank: "AIR 3,450",
    college: "JIPMER Puducherry",
    year: "2024",
    tag: "NEET",
    tagColor: "bg-purple-100 text-purple-700",
    initial: "P",
    color: "#7c3aed",
  },
  {
    name: "Sneha Kumari",
    score: "665 / 720",
    rank: "AIR 4,200",
    college: "KGMU Lucknow",
    year: "2024",
    tag: "NEET",
    tagColor: "bg-purple-100 text-purple-700",
    initial: "S",
    color: "#7c3aed",
  },
  {
    name: "Vivek Ranjan",
    score: "658 / 720",
    rank: "AIR 5,910",
    college: "VMMC New Delhi",
    year: "2024",
    tag: "NEET",
    tagColor: "bg-purple-100 text-purple-700",
    initial: "V",
    color: "#7c3aed",
  },
  {
    name: "Ananya Tiwari",
    score: "651 / 720",
    rank: "AIR 7,320",
    college: "MAMC Delhi",
    year: "2024",
    tag: "NEET",
    tagColor: "bg-purple-100 text-purple-700",
    initial: "A",
    color: "#7c3aed",
  },
  {
    name: "Deepak Sharma",
    score: "644 / 720",
    rank: "AIR 9,105",
    college: "IGIMS Patna",
    year: "2024",
    tag: "NEET",
    tagColor: "bg-purple-100 text-purple-700",
    initial: "D",
    color: "#7c3aed",
  },
];

export default function NEETToppers() {
  return (
    <section className="bg-[#F6F9FF] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
              <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                NEET 2024
              </span>
            </div>
            <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
              NEET Toppers &<br />
              <span className="text-[#E5232E]">Medical Selections</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 pb-1">
            <div className="bg-purple-50 border border-purple-100 rounded-[12px] px-4 py-3 text-center">
              <div className="font-['Sora'] text-[24px] font-extrabold text-purple-700">
                320+
              </div>
              <div className="text-[12px] text-purple-500 mt-0.5">
                Selections in 2024
              </div>
            </div>
            <div className="bg-[#EEF4FB] border border-[#D8E8F4] rounded-[12px] px-4 py-3 text-center">
              <div className="font-['Sora'] text-[24px] font-extrabold text-[#0F1F45]">
                680
              </div>
              <div className="text-[12px] text-[#8A96AB] mt-0.5">
                Top Score / 720
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {neetToppers.map((topper, i) => (
            <TopperCard key={i} topper={topper} index={i} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
