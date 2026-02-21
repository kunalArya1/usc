"use client";

import { useState } from "react";
import { FadeUp } from "@/utils/hooks";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconWhatsApp,
  IconYouTube,
  IconInstagram,
  IconFacebook,
  IconLinkedIn,
  IconShield,
} from "@/utils/icons";

export default function ContactMain() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    standard: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const contactCards = [
    {
      icon: <IconPhone />,
      iconBg: "bg-red-50",
      iconColor: "text-[#E5232E]",
      title: "Call / WhatsApp",
      lines: ["+91 6287247735", "+91 7065484607"],
      sub: "Mon–Sat, 8 AM – 8 PM",
      action: { label: "Call Now", href: "tel:+916287247735" },
    },
    {
      icon: <IconMail />,
      iconBg: "bg-blue-50",
      iconColor: "text-[#1D6FDE]",
      title: "Email Us",
      lines: ["uniquescinececlassesdhaka@gmail.com"],
      sub: "We reply within 2–4 hours",
      action: {
        label: "Send Email",
        href: "mailto:info@uniquescienceclasses.in",
      },
    },
    {
      icon: <IconMapPin />,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      title: "Visit Us",
      lines: ["Baba Market,Bairganiya Road Dhaka", "Dhaka, Bihar — 845418"],
      sub: "Mon–Sat 8AM–7PM, Sun 10AM–2PM",
      action: { label: "Get Directions", href: "https://maps.google.com" },
    },
    {
      icon: <IconClock />,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      title: "Office Hours",
      lines: ["Mon – Sat: 8:00 AM – 8:00 PM", "Sunday: 10:00 AM – 2:00 PM"],
      sub: "Classes run 7 days/week",
      action: { label: "View Schedule", href: "/courses" },
    },
  ];

  return (
    <section className="bg-[#EEF4FB] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* ── LEFT: Info + Cards ── (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <FadeUp>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
                <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-['Sora'] text-[28px] md:text-[34px] font-extrabold text-[#0D1836] leading-[1.2] mb-2">
                We're Here to
                <br />
                <span className="text-[#E5232E]">Help You Succeed</span>
              </h2>
              <p className="text-[14px] text-[#4A5568] leading-[1.75]">
                Whether you have a question about admissions, course fees, batch
                schedules, or just want to know if we're the right fit — we'd
                love to hear from you.
              </p>
            </FadeUp>

            {/* Contact info cards */}
            {contactCards.map((card, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${card.iconBg} rounded-[12px] flex items-center justify-center flex-shrink-0`}
                  >
                    <span className={card.iconColor}>{card.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Sora'] text-[13px] font-semibold text-[#8A96AB] uppercase tracking-wider mb-1">
                      {card.title}
                    </div>
                    {card.lines.map((line, li) => (
                      <div
                        key={li}
                        className="font-['Sora'] text-[14px] font-bold text-[#0D1836] leading-snug"
                      >
                        {line}
                      </div>
                    ))}
                    <div className="text-[12px] text-[#8A96AB] mt-1">
                      {card.sub}
                    </div>
                  </div>
                  <a
                    href={card.action.href}
                    target={
                      card.action.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noreferrer"
                    className="font-['Sora'] text-[12px] font-semibold text-[#E5232E] hover:text-[#C41920] no-underline whitespace-nowrap flex-shrink-0 flex items-center gap-1 mt-1 transition-colors"
                  >
                    {card.action.label} →
                  </a>
                </div>
              </FadeUp>
            ))}

            {/* Social links */}
            <FadeUp delay={380}>
              <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-5">
                <div className="font-['Sora'] text-[13px] font-semibold text-[#8A96AB] uppercase tracking-wider mb-3">
                  Follow Us
                </div>
                <div className="flex gap-3 flex-wrap">
                  {[
                    {
                      icon: <IconWhatsApp />,
                      label: "WhatsApp",
                      href: "https://wa.me/919876543210",
                      color: "bg-green-500 hover:bg-green-600",
                    },
                    {
                      icon: <IconYouTube />,
                      label: "YouTube",
                      href: "#",
                      color: "bg-red-600 hover:bg-red-700",
                    },
                    {
                      icon: <IconInstagram />,
                      label: "Instagram",
                      href: "#",
                      color:
                        "bg-gradient-to-br from-[#F58529] to-[#DD2A7B] hover:opacity-90",
                    },
                    {
                      icon: <IconFacebook />,
                      label: "Facebook",
                      href: "#",
                      color: "bg-[#1877F2] hover:bg-[#145dbf]",
                    },
                    // {
                    //   icon: <IconLinkedIn />,
                    //   label: "LinkedIn",
                    //   href: "#",
                    //   color: "bg-[#0A66C2] hover:bg-[#084B8A]",
                    // },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className={`w-10 h-10 ${s.color} text-white rounded-[10px] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md no-underline`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT: Form ── (3/5) */}
          <FadeUp delay={120} className="lg:col-span-3">
            <div className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-lg overflow-hidden">
              {/* Form header */}
              <div className="bg-[#0F1F45] px-8 py-6">
                <h3 className="font-['Sora'] text-[22px] font-extrabold text-white leading-tight">
                  Book Your Free Counselling
                </h3>
                <p className="text-[14px] text-white/55 mt-1">
                  Fill in the form and our academic advisor will call you back
                  within 2 hours.
                </p>
                {/* Mini trust row */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    { icon: "⚡", text: "2-hour response" },
                    { icon: "🆓", text: "100% Free" },
                    { icon: "🔒", text: "No spam ever" },
                  ].map((t) => (
                    <div key={t.text} className="flex items-center gap-1.5">
                      <span className="text-[14px]">{t.icon}</span>
                      <span className="font-['Sora'] text-[12px] text-white/60 font-medium">
                        {t.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form body */}
              <div className="px-8 py-7">
                {submitted ? (
                  // Success state
                  <div className="text-center py-10">
                    <div
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ animation: "scaleIn 0.5s ease both" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4 className="font-['Sora'] text-[22px] font-extrabold text-[#0D1836] mb-2">
                      We've Received Your Request!
                    </h4>
                    <p className="text-[15px] text-[#4A5568] leading-[1.75] max-w-[380px] mx-auto mb-6">
                      Thank you, <strong>{formData.name || "there"}</strong>!
                      Our counsellor will call you at{" "}
                      <strong>{formData.phone || "your number"}</strong> within
                      the next 2 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          course: "",
                          standard: "",
                          message: "",
                        });
                      }}
                      className="font-['Sora'] text-[14px] font-semibold text-[#E5232E] border-2 border-[#E5232E] px-6 py-2.5 rounded-full hover:bg-[#E5232E] hover:text-white transition-all duration-200"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                          Full Name <span className="text-[#E5232E]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Rahul Kumar"
                          className="w-full bg-[#F8FAFF] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] text-[#0D1836] placeholder-[#B0BCC8] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                          Phone Number <span className="text-[#E5232E]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-[#F8FAFF] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] text-[#0D1836] placeholder-[#B0BCC8] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email */}
                    <div>
                      <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com (optional)"
                        className="w-full bg-[#F8FAFF] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] text-[#0D1836] placeholder-[#B0BCC8] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      />
                    </div>

                    {/* Row 3: Current Standard + Course Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                          Current Standard{" "}
                          <span className="text-[#E5232E]">*</span>
                        </label>
                        <select
                          name="standard"
                          value={formData.standard}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#F8FAFF] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] text-[#0D1836] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all duration-200 appearance-none"
                        >
                          <option value="">Select standard</option>
                          <option>Class 9</option>
                          <option>Class 10</option>
                          <option>Class 11</option>
                          <option>Class 12</option>
                          <option>Passed Class 12</option>
                          <option>Dropper (NEET/JEE)</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                          Course Interest{" "}
                          <span className="text-[#E5232E]">*</span>
                        </label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#F8FAFF] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] text-[#0D1836] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all duration-200 appearance-none"
                        >
                          <option value="">Select a course</option>
                          <option>Class 10 — CBSE</option>
                          <option>Class 10 — BSEB (Bihar Board)</option>
                          <option>Class 11–12 Science</option>
                          <option>NEET Preparation</option>
                          <option>JEE Mains & Advanced</option>
                          <option>Not sure — need guidance</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="font-['Sora'] text-[12px] font-semibold text-[#4A5568] uppercase tracking-wider block mb-1.5">
                        Your Message / Questions
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Ask us anything — batch timings, fee structure, hostel availability..."
                        className="w-full bg-[#F8FAFF] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] text-[#0D1836] placeholder-[#B0BCC8] outline-none focus:border-[#1D6FDE] focus:ring-2 focus:ring-blue-100 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Privacy note */}
                    <div className="flex items-start gap-2.5 bg-[#F0F7FF] border border-[#D8E8F8] rounded-[10px] px-4 py-3">
                      <span className="text-[#1D6FDE] mt-0.5 flex-shrink-0">
                        <IconShield />
                      </span>
                      <p className="text-[12px] text-[#4A5568] leading-[1.6]">
                        Your information is completely private. We never share
                        your details with third parties, and you won't receive
                        any spam.
                      </p>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex items-center justify-center gap-2.5 font-['Sora'] font-semibold text-[15px] py-4 rounded-full transition-all duration-200 ${loading ? "bg-[#0F1F45]/70 text-white cursor-not-allowed" : "bg-[#E5232E] hover:bg-[#C41920] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-200"}`}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10" opacity="0.3" />
                            <path d="M12 2a10 10 0 0 1 0 20" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
