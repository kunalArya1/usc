import { FadeUp } from "@/utils/hooks";
import TopperCard, { type TopperData } from "./TopperCard";

const boardToppers: TopperData[] = [
  {
    name: "Tina Henry",
    score: "96.4%",
    rank: "District Topper",
    college: "BSEB Class 10",
    year: "2024",
    tag: "BSEB 10",
    tagColor: "bg-green-100 text-green-700",
    initial: "T",
    color: "#16a34a",
  },
  {
    name: "Manish Kumar",
    score: "98.2%",
    rank: "School Topper",
    college: "CBSE Class 10",
    year: "2024",
    tag: "CBSE 10",
    tagColor: "bg-blue-100 text-blue-700",
    initial: "M",
    color: "#1D6FDE",
  },
  {
    name: "Ritu Kumari",
    score: "95.6%",
    rank: "State Rank 42",
    college: "BSEB Class 12",
    year: "2024",
    tag: "BSEB 12",
    tagColor: "bg-green-100 text-green-700",
    initial: "R",
    color: "#16a34a",
  },
  {
    name: "Shubham Gupta",
    score: "97.0%",
    rank: "State Rank 18",
    college: "CBSE Class 12",
    year: "2024",
    tag: "CBSE 12",
    tagColor: "bg-blue-100 text-blue-700",
    initial: "S",
    color: "#1D6FDE",
  },
];

export default function BoardToppers({ title }: { title: string }) {
  return (
    <section className="bg-[#EEF4FB] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
              <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                Board 2024
              </span>
            </div>
            <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
              Board Exam Toppers
              <br />
              <span className="text-[#E5232E]">{title}</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 pb-1">
            <div className="bg-green-50 border border-green-100 rounded-[12px] px-4 py-3 text-center">
              <div className="font-['Sora'] text-[24px] font-extrabold text-green-700">
                98%
              </div>
              <div className="text-[12px] text-green-600 mt-0.5">
                Avg. Board Score
              </div>
            </div>
            <div className="bg-[#EEF4FB] border border-[#D8E8F4] rounded-[12px] px-4 py-3 text-center">
              <div className="font-['Sora'] text-[24px] font-extrabold text-[#0F1F45]">
                12+
              </div>
              <div className="text-[12px] text-[#8A96AB] mt-0.5">
                District Toppers
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardToppers.map((topper, i) => (
            <TopperCard key={i} topper={topper} index={i} featured={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
