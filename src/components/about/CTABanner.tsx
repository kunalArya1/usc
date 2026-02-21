import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";
import { IconArrowRight } from "@/utils/icons";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark bg image */}
      <div className="absolute inset-0">
        <ImgPlaceholder
          label="CTA background: wide shot of classroom interior with students — blurred/darkened"
          className="w-full h-full"
          dark
        />
        <div className="absolute inset-0 bg-[#0A1628]/88" />
      </div>

      {/* Center icon ring */}
      <div className="relative z-10 flex flex-col items-center py-24 px-6 text-center">
        <FadeUp>
          <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-[#E5232E] rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
          </div>

          <h2 className="font-['Sora'] text-[30px] md:text-[46px] font-extrabold text-white leading-[1.12] mb-5 max-w-[700px]">
            Ready to Transform Your Future
            <br />
            with the Right Coaching?
          </h2>

          <p className="text-[15px] text-white/60 leading-[1.75] max-w-[480px] mx-auto mb-10">
            New batches for Class 8 –12 are starting soon. Limited seats — enrol
            today.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/30 no-underline"
          >
            Contact Us <IconArrowRight />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
