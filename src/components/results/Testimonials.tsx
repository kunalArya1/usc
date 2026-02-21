import { FadeUp } from "@/utils/hooks";
import { IconStar, IconQuote } from "@/utils/icons";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "Joining Unique Science Classes was the best decision of my life. The faculty's dedication and structured approach helped me crack Bord Exam in my very first attempt with a score of 412/500. I can't thank this institute enough!",
      name: "Md Tarique",
      role: "BSEB 2025",
      initial: "R",
      color: "#7c3aed",
    },
    {
      stars: 5,
      text: "Unique Science Classes completely changed my approach to science. The teachers make even the most complex topics easy to understand. With their guidance, I scored 381/500 in my BSEB board exams.",
      name: "Sushil Kumar",
      role: "BSEB 2024",
      initial: "P",
      color: "#1D6FDE",
    },
    {
      stars: 5,
      text: "Unique Science Classes transformed the way I approach science. The teachers explain complex topics with great clarity. I scored 417/500 in my BSEB board exams with their guidance.",
      name: "Aniket Kumar ",
      role: "BSEB 2023",
      initial: "T",
      color: "#ea580c",
    },
    // {
    //   stars: 5,
    //   text: "As a parent, I was worried about my daughter's NEET preparation in a small town. But Unique Science Classes proved that world-class coaching is available right here in Dhaka. She scored 665 marks!",
    //   name: "Mrs. Reena Singh",
    //   role: "Parent of Sneha Kumari — NEET 2024",
    //   initial: "M",
    //   color: "#1D6FDE",
    // },
    // {
    //   stars: 5,
    //   text: "The small batch sizes mean every student gets real attention. My doubts were cleared daily, my test scores were tracked every week, and the faculty genuinely cared about my progress. Best decision of my life.",
    //   name: "Siddharth Yadav",
    //   role: "JEE Mains 2024 — 96.4 Percentile, NIT Patna",
    //   initial: "S",
    //   color: "#ea580c",
    // },
    // {
    //   stars: 5,
    //   text: "I enrolled in the Class 11-12 + NEET integrated batch and it was perfect. Board preparation and NEET prep happened simultaneously. The curriculum is so well planned. I got 672/720 in my very first NEET.",
    //   name: "Priya Singh",
    //   role: "NEET 2024 — AIR 3,450 | JIPMER",
    //   initial: "P",
    //   color: "#7c3aed",
    // },
  ];

  return (
    <section className="bg-[#F6F9FF] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              What Students Say
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[42px] font-extrabold text-[#0D1836] leading-[1.15]">
            In Their Own Words —<br />
            <span className="text-[#E5232E]">Straight from the Toppers</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                {/* Quote icon bg */}
                <div className="absolute top-4 right-5 text-[#0F1F45]">
                  <IconQuote />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <IconStar key={si} filled={si < r.stars} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[14px] text-[#4A5568] leading-[1.78] flex-1 mb-6 italic relative z-10">
                  "{r.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#E8EEF6]">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-['Sora'] font-extrabold text-[16px] text-white flex-shrink-0"
                    style={{ background: r.color }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-['Sora'] text-[15px] font-bold text-[#0D1836] leading-none">
                      {r.name}
                    </div>
                    <div className="text-[12px] text-[#8A96AB] mt-0.5 leading-tight">
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
