export default function HeroBanner() {
  return (
    <section className="pt-[68px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div
          className="max-w-[540px]"
          style={{ animation: "fadeInUp 0.7s ease both" }}
        >
          {/* Overline */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.2em] uppercase text-[#0D1836]/50">
              // About Us
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Sora'] text-[42px] md:text-[56px] font-extrabold text-[#0D1836] leading-[1.1] mb-5">
            Your Trusted
            <br />
            <span className="text-[#E5232E]">Science Coaching</span>
            <br />
            Experts
          </h1>

          {/* Body */}
          <p className="text-[15px] text-[#4A5568] leading-[1.75] max-w-[440px]">
            We are dedicated to providing high-quality science coaching that
            enhances academic performance and builds the confidence of every
            student in Dhaka, Bihar.
          </p>
        </div>
      </div>
    </section>
  );
}
