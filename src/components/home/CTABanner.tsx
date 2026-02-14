import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";
import { IconPhone } from "@/utils/icons";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImgPlaceholder
          label="CTA background: students in study hall, blurred/darkened overlay — wide landscape shot"
          className="w-full h-full"
          dark
        />
        <div className="absolute inset-0 bg-[#0F1F45]/88" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 text-center">
        <FadeUp>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-7 h-0.5 bg-white/40 rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
              Limited Seats Available
            </span>
            <div className="w-7 h-0.5 bg-white/40 rounded" />
          </div>
          <h2 className="font-['Sora'] text-[34px] md:text-[50px] font-extrabold text-white leading-[1.12] mb-5">
            Ready to Transform Your Future
            <br />
            with the <span className="text-[#E5232E]">Right Coaching?</span>
          </h2>
          <p className="text-[16px] text-white/65 leading-[1.75] max-w-[540px] mx-auto mb-10">
            Join hundreds of toppers who built their success story at Unique
            Science Classes, Dhaka. New batches for Class 10, 11–12, NEET & JEE
            starting soon.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/30 no-underline"
            >
              Get Free Counselling
            </a>
            <a
              href="tel:+919876543210"
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
