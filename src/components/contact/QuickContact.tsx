"use client";

import { FadeUp } from "@/utils/hooks";
import {
  IconWhatsApp,
  IconPhone,
  IconMail,
  IconArrowRight,
} from "@/utils/icons";

export default function QuickContact() {
  const options = [
    {
      icon: <IconWhatsApp />,
      iconBg: "bg-green-500",
      title: "WhatsApp Us",
      desc: "Send us a message on WhatsApp for quick responses. Share your questions, get batch schedules, or ask about fees instantly.",
      cta: "Chat on WhatsApp",
      href: "https://wa.me/916287247735?text=Hello%2C%20I%20want%20to%20know%20more%20about%20courses%20at%20Unique%20Science%20Classes",
      ctaBg: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <IconPhone />,
      iconBg: "bg-[#E5232E]",
      title: "Call Us Directly",
      desc: "Speak directly with our academic counsellor. We're available Monday to Saturday, 8 AM to 8 PM, always ready to guide you.",
      cta: "Call +91 6287247735",
      href: "tel:+916287247735",
      ctaBg: "bg-[#E5232E] hover:bg-[#C41920]",
    },
    {
      icon: <IconMail />,
      iconBg: "bg-[#1D6FDE]",
      title: "Email Enquiry",
      desc: "For detailed queries, fee breakdowns, syllabus downloads, or batch schedules, drop us an email — we respond within 4 hours.",
      cta: "Send an Email",
      href: "mailto:uniquescinececlassesdhaka@gmail.com",
      ctaBg: "bg-[#1D6FDE] hover:bg-[#155BB5]",
    },
  ];

  return (
    <section className="bg-[#0F1F45] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-['Sora'] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#7FA5F5]">
              // Quick Connect
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-white leading-[1.15]">
            Prefer a Different Way
            <br />
            <span className="text-[#E5232E]">to Reach Us?</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="bg-white/[0.06] border border-white/10 rounded-[20px] p-8 hover:bg-white/[0.10] hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
                <div
                  className={`w-14 h-14 ${opt.iconBg} rounded-[14px] flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {opt.icon}
                </div>
                <h3 className="font-['Sora'] text-[19px] font-bold text-white mb-3">
                  {opt.title}
                </h3>
                <p className="text-[14px] text-white/55 leading-[1.75] flex-1 mb-6">
                  {opt.desc}
                </p>
                <a
                  href={opt.href}
                  target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`${opt.ctaBg} text-white font-['Sora'] font-semibold text-[14px] px-6 py-3 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2`}
                >
                  {opt.cta} <IconArrowRight />
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
