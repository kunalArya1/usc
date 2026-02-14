import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";

export default function ResultsGallery() {
  const photos = [
    {
      label: "NEET 2024 toppers holding rank certificates — group photo",
      tall: true,
    },
    {
      label: "JEE qualifier Arjun Mishra with faculty — celebration moment",
      tall: false,
    },
    {
      label: "Board topper Tina Henry with parents — award ceremony",
      tall: false,
    },
    { label: "Classroom scene — students in mock test session", tall: false },
    {
      label: "Results announcement board showing batch performance",
      tall: false,
    },
    {
      label: "Faculty team with top NEET 2024 selections — group photo",
      tall: true,
    },
    {
      label: "Students receiving scholarship certificates on stage",
      tall: false,
    },
    {
      label: "NEET 2024 batch photo — all 320+ selections together",
      tall: false,
    },
  ];

  return (
    <section className="bg-[#0F1F45] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#7FA5F5]">
              // Gallery
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[42px] font-extrabold text-white leading-[1.15]">
            Moments of{" "}
            <span className="text-[#E5232E]">Success & Celebration</span>
          </h2>
          <p className="text-[15px] text-white/55 mt-4 max-w-[500px] mx-auto">
            Every photo here is a story of hard work, dedication, and the joy of
            achieving a dream.
          </p>
        </FadeUp>

        {/* Masonry grid — 4 col layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Col 1: tall first then small */}
          <div className="flex flex-col gap-4">
            <FadeUp delay={0}>
              <div className="rounded-[16px] overflow-hidden">
                <ImgPlaceholder
                  label={photos[0].label}
                  className="w-full h-[280px]"
                />
              </div>
            </FadeUp>
            <FadeUp delay={60}>
              <div className="rounded-[16px] overflow-hidden">
                <ImgPlaceholder
                  label={photos[1].label}
                  className="w-full h-[160px]"
                />
              </div>
            </FadeUp>
          </div>
          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <FadeUp delay={80}>
              <div className="rounded-[16px] overflow-hidden">
                <ImgPlaceholder
                  label={photos[2].label}
                  className="w-full h-[160px]"
                />
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="rounded-[16px] overflow-hidden">
                <ImgPlaceholder
                  label={photos[3].label}
                  className="w-full h-[180px]"
                />
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="rounded-[16px] overflow-hidden">
                <ImgPlaceholder
                  label={photos[4].label}
                  className="w-full h-[100px]"
                />
              </div>
            </FadeUp>
          </div>
          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <FadeUp delay={100}>
              <div className="rounded-[16px] overflow-hidden">
                <ImgPlaceholder
                  label={photos[5].label}
                  className="w-full h-[220px]"
                />
              </div>
            </FadeUp>
            <FadeUp delay={160}>
              <div className="rounded-[16px] overflow-hidden">
                <ImgPlaceholder
                  label={photos[6].label}
                  className="w-full h-[220px]"
                />
              </div>
            </FadeUp>
          </div>
          {/* Col 4: small then tall */}
          <div className="flex flex-col gap-4">
            <FadeUp delay={120}>
              <div className="rounded-[16px] overflow-hidden">
                <ImgPlaceholder
                  label={photos[7].label}
                  className="w-full h-[160px]"
                />
              </div>
            </FadeUp>
            <FadeUp delay={180}>
              <div className="rounded-[16px] overflow-hidden relative">
                <ImgPlaceholder
                  label="Unique Science Classes — result celebration banner 2024"
                  className="w-full h-[280px]"
                  dark
                />
                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0F1F45]/80 p-4 text-center">
                  <div className="font-['Sora'] text-[36px] font-extrabold text-white leading-none">
                    320+
                  </div>
                  <div className="text-[13px] text-white/60 mt-1">
                    NEET Selections
                  </div>
                  <div className="font-['Sora'] text-[13px] font-bold text-[#E5232E] mt-2">
                    2024 Batch
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
