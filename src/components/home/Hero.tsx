"use client";

import { useEffect, useState } from "react";
import { FadeUp } from "@/utils/hooks";
import { ImgPlaceholder } from "@/utils/ImgPlaceholder";
import {
  IconArrowRight,
  IconGraduate,
  IconTrophy,
  IconUsers,
} from "@/utils/icons";

export function Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const animate = (
      setter: (v: number) => void,
      target: number,
      duration: number,
    ) => {
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setter(Math.floor(current));
        if (current >= target) clearInterval(timer);
      }, 16);
    };
    const t1 = setTimeout(() => animate(setCount1, 500, 2000), 400);
    const t2 = setTimeout(() => animate(setCount2, 98, 1800), 600);
    const t3 = setTimeout(() => animate(setCount3, 5, 1200), 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      id="home"
      className="pt-[70px] min-h-screen flex items-center bg-white relative overflow-hidden"
    >
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#EEF4FB] to-transparent rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#FFF0F0] to-transparent rounded-full -translate-x-1/2 translate-y-1/4 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-5"
              style={{ animation: "fadeInDown 0.6s ease both" }}
            >
              <span
                className="w-2 h-2 bg-[#E5232E] rounded-full"
                style={{ animation: "pulse 2s infinite" }}
              />
              <span className="font-['Sora'] text-[12px] font-600 font-semibold text-[#E5232E]">
                Admissions Open — 2026 Batch
              </span>
            </div>

            <h1
              className="font-['Sora'] text-[44px] md:text-[56px] lg:text-[62px] font-extrabold text-[#0D1836] leading-[1.08] mb-5"
              style={{ animation: "fadeInUp 0.7s ease 0.1s both" }}
            >
              Excel in CBSE<span className="text-[#E5232E]"> & BSEB</span>
              <br />
              Board Exams
            </h1>

            <p
              className="text-[16px] text-[#4A5568] leading-[1.75] mb-8 max-w-[480px]"
              style={{ animation: "fadeInUp 0.7s ease 0.2s both" }}
            >
              Unique Science Classes in Dhaka, Bihar delivers result-driven
              coaching for Class 8-10 (CBSE & BSEB), Class 11–12 Science. Learn
              from expert faculty who've shaped hundreds of toppers.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4 mb-12"
              style={{ animation: "fadeInUp 0.7s ease 0.3s both" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-200 no-underline"
              >
                Get Free Counselling
              </a>
              {/* <a
                href="#courses"
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#E5232E] hover:text-[#E5232E] text-[#0D1836] font-['Sora'] font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 no-underline"
              >
                 <IconArrowRight />
              </a> */}
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap items-center gap-6"
              style={{ animation: "fadeInUp 0.7s ease 0.4s both" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EEF4FB] rounded-[14px] flex items-center justify-center">
                  <IconUsers />
                </div>
                <div>
                  <div className="font-['Sora'] text-[22px] font-extrabold text-[#0D1836] leading-none">
                    {count1.toLocaleString()}+
                  </div>
                  <div className="text-[12px] text-[#8A96AB] mt-0.5">
                    Students Enrolled
                  </div>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EEF4FB] rounded-[14px] flex items-center justify-center">
                  <IconTrophy />
                </div>
                <div>
                  <div className="font-['Sora'] text-[22px] font-extrabold text-[#0D1836] leading-none">
                    {count2}%
                  </div>
                  <div className="text-[12px] text-[#8A96AB] mt-0.5">
                    Selection Rate
                  </div>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EEF4FB] rounded-[14px] flex items-center justify-center">
                  <IconGraduate />
                </div>
                <div>
                  <div className="font-['Sora'] text-[22px] font-extrabold text-[#0D1836] leading-none">
                    {count3}+
                  </div>
                  <div className="text-[12px] text-[#8A96AB] mt-0.5">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="relative max-w-5xl mx-auto"
            style={{ animation: "fadeInRight 0.8s ease 0.2s both" }}
          >
            {/* Main image */}
            <div className="rounded-[24px] overflow-hidden shadow-2xl relative w-full border-4 border-[#FDF200]">
              <img
                src="/result.png"
                alt="Unique Science Classes Results 2024"
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Floating card 1 — bottom left */}
            <div
              className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-[16px] shadow-xl px-4 py-3 flex items-center gap-3 z-10"
              style={{ animation: "floatUpDown 3s ease-in-out infinite" }}
            >
              <div className="w-10 h-10 bg-green-100 rounded-[10px] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div>
                <div className="font-['Sora'] text-[18px] font-extrabold text-[#0D1836] leading-none">
                  500+
                </div>
                <div className="text-[11px] text-[#8A96AB]">
                  BSEB Selections
                </div>
              </div>
            </div>

            {/* Floating card 2 — top right */}
            <div
              className="absolute -top-4 -right-4 md:-right-6 bg-white rounded-[16px] shadow-xl px-4 py-3 flex items-center gap-3 z-10"
              style={{
                animation: "floatUpDown 3.5s ease-in-out infinite 0.5s",
              }}
            >
              <div className="w-10 h-10 bg-yellow-100 rounded-[10px] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <div>
                <div className="font-['Sora'] text-[18px] font-extrabold text-[#0D1836] leading-none">
                  #1
                </div>
                <div className="text-[11px] text-[#8A96AB]">in Dhaka</div>
              </div>
            </div>

            {/* Badge overlay */}
            {/* <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#E5232E] text-white rounded-[14px] px-4 py-3 shadow-lg shadow-red-200 z-10">
              <div className="font-['Sora'] text-[28px] font-extrabold leading-none">
                #1
              </div>
              <div className="text-[11px] opacity-85 mt-0.5">
                Coaching in Dhaka
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
        @keyframes fadeInDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInRight{ from{opacity:0;transform:translateX(32px)} to{opacity:1;transform:translateX(0)} }
        @keyframes floatUpDown{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse      { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.4)} }
        .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to)); }
      `}</style>
    </section>
  );
}
