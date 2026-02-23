import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";
import { IconLinkedIn } from "@/utils/icons";

export default function Team() {
  const members = [
    {
      name: "Shahid anwar sir",
      role: "Director",
      bio: "He has personally mentored 300+ NEET selections through his unique mnemonics-based teaching methodology.",
      imgLabel:
        "Faculty photo: Mr. Rajesh Kumar, Physics teacher, professional portrait",
      tag: "Math Expert",
      imagePath: "/sahid.png",
    },
    {
      name: "Arjun Sir",
      role: "Managing Director",
      bio: "He has successfully guided 200+ students using his innovative teaching methods, with core expertise in Machines, Electrostatics, and Calculus.",
      imgLabel:
        "Faculty photo: Dr. Sunita Devi, Biology teacher, professional portrait",
      tag: "Biology Expert",
      imagePath: "./arjun-sir.png",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Head */}
        <FadeUp className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              // Our Story
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[42px] font-extrabold text-[#0D1836] leading-[1.15]">
            Meet the <span className="text-[#E5232E]">Unique Science Team</span>
          </h2>
        </FadeUp>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7">
          {members.map((m, i) => (
            <FadeUp key={i} delay={i * 110}>
              <div className="rounded-[20px] overflow-hidden border border-[#E2E8F0] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group bg-white">
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImgPlaceholder
                    label={m.imgLabel}
                    className="w-full h-full min-h-[220px] group-hover:scale-105 transition-transform duration-500"
                    imagePath={m.imagePath}
                  />
                  {/* Tag badge */}
                  {/* <div className="absolute top-3 left-3 bg-[#E5232E] text-white font-['Sora'] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full">
                    {m.tag}
                  </div> */}
                </div>

                {/* Info row */}
                <div className="px-5 py-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-['Sora'] text-[16px] font-bold text-[#0D1836] leading-tight">
                      {m.name}
                    </div>
                    <div className="text-[13px] text-[#8A96AB] mt-0.5">
                      {m.role}
                    </div>
                    <p className="text-[13px] text-[#4A5568] leading-[1.65] mt-2 line-clamp-3">
                      {m.bio}
                    </p>
                  </div>
                  {/* LinkedIn icon */}
                  {/* <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-8 h-8 bg-[#0A66C2] text-white rounded-[7px] flex items-center justify-center flex-shrink-0 hover:bg-[#084B8A] transition-colors no-underline mt-0.5"
                  >
                    <IconLinkedIn />
                  </a> */}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
