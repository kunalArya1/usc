import { FadeUp } from "@/utils/hooks";
import { IconArrowRight, IconMapPin, IconPhone } from "@/utils/icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left info */}
          <FadeUp>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
              <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                Contact Us
              </span>
            </div>
            <h2 className="font-['Sora'] text-[34px] md:text-[42px] font-extrabold text-[#0D1836] leading-[1.15] mb-5">
              Start Your Journey to
              <br />
              <span className="text-[#E5232E]">Success Today</span>
            </h2>
            <p className="text-[15px] text-[#4A5568] leading-[1.75] mb-8">
              Get free counselling to find the right course for you. Our
              academic advisors are here to guide you through course selection,
              batch timings, and fee structure.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <IconMapPin />,
                  label: "Address",
                  value: "Baba Market,Bairganiya Road Dhaka , Bihar — 845418",
                },
                {
                  icon: <IconPhone />,
                  label: "Phone",
                  value: "+91 6287247735 / +91 7065484607",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                  label: "Email",
                  value: "uniquescinececlassesdhaka@gmail.com",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#EEF4FB] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1D6FDE]">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-['Sora'] text-[13px] font-semibold text-[#8A96AB] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[15px] text-[#0D1836] font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right form */}
          <FadeUp delay={150}>
            <div className="bg-[#F6F9FF] border border-[#E2E8F0] rounded-[24px] p-8">
              <h3 className="font-['Sora'] text-[22px] font-bold text-[#0D1836] mb-6">
                Book Free Counselling
              </h3>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-white border border-[#E2E8F0] rounded-[10px] px-4 py-3 text-[14px] text-[#0D1836] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border border-[#E2E8F0] rounded-[10px] px-4 py-3 text-[14px] text-[#0D1836] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                    Interested Course *
                  </label>
                  <select className="w-full bg-white border border-[#E2E8F0] rounded-[10px] px-4 py-3 text-[14px] text-[#0D1836] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all">
                    <option value="">Select a course</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                    <option>Class 11–12 Science</option>
                    <option>NEET Preparation</option>
                    <option>JEE Preparation</option>
                  </select>
                </div>
                <div>
                  <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific questions or requirements..."
                    className="w-full bg-white border border-[#E2E8F0] rounded-[10px] px-4 py-3 text-[14px] text-[#0D1836] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[15px] py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-200 mt-1"
                >
                  Book Free Counselling Session
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
