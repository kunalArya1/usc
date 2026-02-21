import { FadeUp } from "@/utils/hooks";
import TopperCard, { type TopperData } from "./TopperCard";

const boardToppers: TopperData[] = [
  {
    name: "Pranay ranjan",
    score: "83%",
    rank: "District Topper",
    college: "CBSE Topper",
    year: "",
    tag: "CBSE",
    tagColor: "bg-green-100 text-green-700",
    initial: "T",
    color: "#16a34a",
    imagePath: "/students/2.png",
    marks: "415",
  },

  {
    name: "Aniket Kumar",
    score: "83.4%",
    rank: "School Topper",
    college: "BSEB Topper",
    year: "",
    tag: "BSEB",
    tagColor: "bg-blue-100 text-blue-700",
    initial: "M",
    color: "#1D6FDE",
    imagePath: "/students/1.png",
    marks: "417",
  },
  {
    name: "Md Tarique",
    score: "82.4%",
    rank: "State Rank 42",
    college: "BSEB Topper",
    year: "2024",
    tag: "BSEB",
    tagColor: "bg-green-100 text-green-700",
    initial: "R",
    color: "#16a34a",
    imagePath: "/students/3.jpeg",
    marks: "412",
  },
  {
    name: "Fazle Imam",
    score: "79.0%",
    rank: "State Rank 18",
    college: "BSEB Topper",
    year: "2024",
    tag: "BSEB",
    tagColor: "bg-blue-100 text-blue-700",
    initial: "S",
    color: "#1D6FDE",
    imagePath: "/students/4.jpeg",
    marks: "395",
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
              Board Exam <span className="text-[#E5232E]">Toppers</span>
              <br />
            </h2>
          </div>
          <div className="flex items-center gap-3 pb-1">
            {/* <div className="bg-green-50 border border-green-100 rounded-[12px] px-4 py-3 text-center">
              <div className="font-['Sora'] text-[24px] font-extrabold text-green-700">
                98%
              </div>
              <div className="text-[12px] text-green-600 mt-0.5">
                Avg. Board Score
              </div>
            </div> */}
            <div className="bg-[#EEF4FB] border border-[#D8E8F4] rounded-[12px] px-4 py-3 text-center">
              <div className="font-['Sora'] text-[24px] font-extrabold text-[#0F1F45]">
                20+
              </div>
              <div className="text-[12px] text-[#8A96AB] mt-0.5">Toppers</div>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardToppers.map((topper, i) => (
            <TopperCard
              key={i}
              topper={topper}
              index={i}
              imagePath={topper.imagePath}
              featured={i === 1}
              marks={topper.marks}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
