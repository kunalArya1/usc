import { FadeUp } from "@/utils/hooks";
import {
  IconArrowRight,
  IconAtom,
  IconBookOpen,
  IconCalculator,
  IconCheck,
  IconFlask,
  IconMicroscope,
} from "@/utils/icons";

export function Courses() {
  const courses = [
    {
      tag: "Board Exam",
      title: "Class 10 — CBSE & BSEB",
      icon: <IconBookOpen />,
      desc: "Comprehensive preparation for Class 10 board exams. Covers all science subjects with concept clarity, practice papers, and model tests for both CBSE and Bihar Board.",
      features: [
        "Physics, Chemistry, Biology, Maths",
        "Chapter-wise tests & revision",
        "Previous year paper practice",
      ],
      featured: false,
      color: "from-[#EEF4FB] to-[#D8E8F8]",
    },
    {
      tag: "Most Popular",
      title: "Class 11–12 Science",
      icon: <IconAtom />,
      desc: "Rigorous science coaching for Class 11 & 12 students covering the full CBSE/BSEB syllabus. Build a rock-solid foundation for board exams and competitive entrance tests.",
      features: [
        "PCB & PCM streams",
        "Weekly assessments",
        "Full syllabus coverage",
      ],
      featured: false,
      color: "from-[#0F1F45] to-[#1D6FDE]",
    },
    {
      tag: "Medical",
      title: "NEET Preparation",
      icon: <IconMicroscope />,
      desc: "Targeted NEET coaching with expert Biology, Physics & Chemistry faculty. Proven strategies, 3000+ question banks, and regular NTA-pattern mock tests.",
      features: [
        "NTA-pattern mock tests",
        "3000+ question bank",
        "Daily doubt sessions",
      ],
      featured: false,
      color: "from-[#EEF4FB] to-[#D8E8F8]",
    },
    {
      tag: "Engineering",
      title: "JEE Preparation",
      icon: <IconCalculator />,
      desc: "Intensive JEE Mains & Advanced coaching. Problem-solving focused approach with IIT alumni faculty, weekly DPPs, and full-length mock tests.",
      features: [
        "JEE Mains & Advanced",
        "IIT-alumni faculty",
        "Daily Practice Problems",
      ],
      featured: false,
      color: "from-[#EEF4FB] to-[#D8E8F8]",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-[#EEF4FB]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Head */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <FadeUp>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
              <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                Our Courses
              </span>
            </div>
            <h2 className="font-['Sora'] text-[34px] md:text-[44px] font-extrabold text-[#0D1836] leading-[1.15]">
              Courses Tailored to
              <br />
              Your Goals
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[14px] px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-200 no-underline whitespace-nowrap"
            >
              Enroll Now <IconArrowRight />
            </a>
          </FadeUp>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((c, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div
                className={`rounded-[20px] overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full ${
                  c.featured
                    ? "border-transparent shadow-xl shadow-blue-900/20"
                    : "border-[#E2E8F0] bg-white shadow-sm"
                }`}
              >
                {/* Image area */}
                <div
                  className={`h-[160px] bg-gradient-to-br ${c.color} flex flex-col items-center justify-center gap-2 relative`}
                >
                  <span
                    className={c.featured ? "text-white/50" : "text-[#A0B8D8]"}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-14 h-14"
                    >
                      {i === 0 && (
                        <>
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <circle cx="12" cy="12" r="2" />
                          <path d="M12 2a10 10 0 0 1 0 20M12 2a10 10 0 0 0 0 20" />
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <path d="M9 3h6l3 9H6L9 3z" />
                          <path d="M6 12s-1 1-1 3c0 3 3 6 7 6s7-3 7-6c0-2-1-3-1-3" />
                        </>
                      )}
                      {i === 3 && (
                        <>
                          <rect width="16" height="20" x="4" y="2" rx="2" />
                          <line x1="8" x2="16" y1="6" y2="6" />
                          <line x1="16" x2="16" y1="14" y2="18" />
                          <path d="M16 10h.01M12 10h.01M8 10h.01" />
                        </>
                      )}
                    </svg>
                  </span>
                  <p
                    className={`text-[10px] text-center px-3 leading-tight ${c.featured ? "text-white/40" : "text-[#98AEC5]"}`}
                  >
                    {c.title} course image
                  </p>
                  {/* Tag */}
                  <div className="absolute top-3 left-3 bg-[#E5232E] text-white font-['Sora'] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full">
                    {c.tag}
                  </div>
                </div>

                {/* Body */}
                <div
                  className={`p-5 flex flex-col flex-1 ${c.featured ? "bg-[#0F1F45]" : "bg-white"}`}
                >
                  <h3
                    className={`font-['Sora'] text-[17px] font-bold mb-3 leading-tight ${c.featured ? "text-white" : "text-[#0D1836]"}`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`text-[13px] leading-[1.65] mb-4 flex-1 ${c.featured ? "text-white/60" : "text-[#4A5568]"}`}
                  >
                    {c.desc}
                  </p>
                  <ul className="flex flex-col gap-1.5 mb-5">
                    {c.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${c.featured ? "bg-white/10" : "bg-blue-50"}`}
                        >
                          <span
                            className={
                              c.featured ? "text-white" : "text-[#1D6FDE]"
                            }
                          >
                            <IconCheck />
                          </span>
                        </div>
                        <span
                          className={`text-[12px] ${c.featured ? "text-white/70" : "text-[#4A5568]"}`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 text-[13px] font-semibold font-['Sora'] no-underline transition-all duration-200 group ${
                      c.featured
                        ? "text-white hover:text-blue-200"
                        : "text-[#E5232E] hover:text-[#C41920]"
                    }`}
                  >
                    Know More
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      <IconArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
