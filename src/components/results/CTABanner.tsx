import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";
import { IconTrophy, IconArrowRight, IconPhone } from "@/utils/icons";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ImgPlaceholder
          label="CTA background: wide shot of results celebration with students and faculty"
          className="w-full h-full"
          dark
        />
        <div className="absolute inset-0 bg-[#0A1628]/88" />
      </div>

      <div className="relative z-10 flex flex-col items-center py-24 px-6 text-center">
        <FadeUp>
          <div className="w-16 h-16 rounded-full border-2 border-white/25 flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-[#E5232E] rounded-full flex items-center justify-center">
              <IconTrophy />
            </div>
          </div>

          <h2 className="font-['Sora'] text-[30px] md:text-[46px] font-extrabold text-white leading-[1.12] mb-5 max-w-[660px]">
            The Next Success Story
            <br />
            <span className="text-[#E5232E]">Could Be Yours.</span>
          </h2>

          <p className="text-[15px] text-white/60 leading-[1.75] max-w-[480px] mx-auto mb-10">
            Join the hundreds of students who trusted Unique Science Classes and
            achieved their dream college. New batches are starting soon —
            limited seats available.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/30 no-underline"
            >
              Enroll Now <IconArrowRight />
            </a>
            <a
              href="tel:+916287247735"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-['Sora'] font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 no-underline"
            >
              <IconPhone /> Call Us Now
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
