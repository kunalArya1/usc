import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";

export interface TopperData {
  name: string;
  score: string;
  rank: string;
  college: string;
  year: string;
  tag: string;
  tagColor: string;
  initial: string;
  color: string;
}

export default function TopperCard({
  topper,
  index,
  featured = false,
}: {
  topper: TopperData;
  index: number;
  featured?: boolean;
}) {
  return (
    <FadeUp delay={index * 80}>
      <div
        className={`rounded-[20px] overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group bg-white flex flex-col h-full ${featured ? "border-[#E5232E]/30 shadow-lg" : "border-[#E2E8F0] shadow-sm"}`}
      >
        {/* Photo area */}
        <div className="relative h-[200px] overflow-hidden">
          <ImgPlaceholder
            label={`${topper.name} — ${topper.tag} topper ${topper.year}, student portrait`}
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          {/* Rank badge — top left */}
          {featured && (
            <div className="absolute top-3 right-3 bg-[#E5232E] text-white font-['Sora'] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md">
              ★ TOP RANKER
            </div>
          )}
          {/* Tag */}
          <div
            className={`absolute top-3 left-3 font-['Sora'] text-[10px] font-bold tracking-wide px-3 py-1.5 rounded-full ${topper.tagColor}`}
          >
            {topper.tag}
          </div>
          {/* Year */}
          <div className="absolute bottom-3 right-3 bg-[#0F1F45]/80 text-white font-['Sora'] text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
            Batch {topper.year}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col flex-1">
          {/* Avatar + name row */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center font-['Sora'] font-extrabold text-[17px] text-white flex-shrink-0"
              style={{ background: topper.color }}
            >
              {topper.initial}
            </div>
            <div>
              <div className="font-['Sora'] text-[16px] font-bold text-[#0D1836] leading-tight">
                {topper.name}
              </div>
              <div className="text-[12px] text-[#8A96AB] mt-0.5">
                {topper.college}
              </div>
            </div>
          </div>

          {/* Score + rank */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <div className="bg-[#F6F9FF] border border-[#E8EEF6] rounded-[10px] px-3 py-2.5">
              <div className="text-[10px] text-[#8A96AB] font-['Sora'] uppercase tracking-wider mb-0.5">
                Score
              </div>
              <div className="font-['Sora'] text-[14px] font-extrabold text-[#0D1836] leading-tight">
                {topper.score}
              </div>
            </div>
            <div
              className="rounded-[10px] px-3 py-2.5"
              style={{
                background: `${topper.color}12`,
                border: `1px solid ${topper.color}25`,
              }}
            >
              <div
                className="text-[10px] font-['Sora'] uppercase tracking-wider mb-0.5"
                style={{ color: topper.color, opacity: 0.7 }}
              >
                Rank / College
              </div>
              <div
                className="font-['Sora'] text-[14px] font-extrabold leading-tight"
                style={{ color: topper.color }}
              >
                {topper.rank}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
