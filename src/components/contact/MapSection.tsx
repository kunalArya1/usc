"use client";

import { FadeUp } from "@/utils/hooks";
import { IconMapPin, IconClock } from "@/utils/icons";

export default function MapSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              Find Us
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-extrabold text-[#0D1836] leading-[1.15]">
            Visit Our <span className="text-[#E5232E]">Institute</span>
          </h2>
          <p className="text-[15px] text-[#4A5568] mt-3 max-w-[480px] mx-auto">
            Conveniently located near the Main Road in Baba Market,Bairganiya
            Road Dhaka Bihar — easy to reach from all nearby villages and towns.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map embed placeholder */}
          <FadeUp className="lg:col-span-2">
            <div className="rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-md h-[400px] bg-[#EEF4FB] relative flex flex-col items-center justify-center gap-4">
              {/* Map placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D8E8F8] to-[#C4D8F0]" />
              {/* Grid lines for map feel */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#1D6FDE"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              {/* Roads simulation */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#1D6FDE"
                  strokeWidth="4"
                />
                <line
                  x1="35%"
                  y1="0"
                  x2="35%"
                  y2="100%"
                  stroke="#1D6FDE"
                  strokeWidth="3"
                />
                <line
                  x1="70%"
                  y1="20%"
                  x2="100%"
                  y2="60%"
                  stroke="#1D6FDE"
                  strokeWidth="2"
                />
                <line
                  x1="0"
                  y1="30%"
                  x2="35%"
                  y2="50%"
                  stroke="#1D6FDE"
                  strokeWidth="2"
                />
              </svg>
              {/* Map pin */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div
                  className="w-16 h-16 bg-[#E5232E] rounded-full flex items-center justify-center shadow-xl shadow-red-200"
                  style={{ animation: "floatUpDown 2.5s ease-in-out infinite" }}
                >
                  <IconMapPin />
                  <style>{`@keyframes floatUpDown { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }`}</style>
                </div>
                <div className="bg-white rounded-[12px] shadow-lg px-5 py-3 text-center">
                  <div className="font-['Sora'] text-[14px] font-extrabold text-[#0D1836]">
                    Unique Science Classes
                  </div>
                  <div className="text-[12px] text-[#4A5568] mt-0.5">
                    Baba Market,Bairganiya Road Dhaka,Bihar 845418
                  </div>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0F1F45] hover:bg-[#1A2E5C] text-white font-['Sora'] font-semibold text-[13px] px-5 py-2.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <IconMapPin /> Open in Google Maps
                </a>
              </div>
              {/* Replace this div with actual Google Maps embed:
                  <iframe src="https://maps.google.com/maps?q=Dhaka+Bhojpur+Bihar&output=embed" ... /> */}
            </div>
          </FadeUp>

          {/* Address + how to reach */}
          <FadeUp delay={120}>
            <div className="flex flex-col gap-5">
              {/* Address card */}
              <div className="bg-[#F6F9FF] border border-[#E2E8F0] rounded-[18px] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-50 rounded-[10px] flex items-center justify-center">
                    <span className="text-green-600">
                      <IconMapPin />
                    </span>
                  </div>
                  <div className="font-['Sora'] text-[15px] font-bold text-[#0D1836]">
                    Our Address
                  </div>
                </div>
                <p className="text-[14px] text-[#4A5568] leading-[1.75] mb-4">
                  Unique Science Classes
                  <br />
                  Baba Market,Bairganiya Road Dhaka
                  <br />
                  Dhaka, Bihar — 845418
                  <br />
                  India
                </p>
                <div className="flex items-center gap-2 text-[13px] text-[#8A96AB]">
                  <IconClock />
                  Mon–Sat: 8AM–8PM · Sun: 10AM–2PM
                </div>
              </div>

              {/* How to reach */}
              {/* <div className="bg-[#F6F9FF] border border-[#E2E8F0] rounded-[18px] p-6">
                <div className="font-['Sora'] text-[14px] font-bold text-[#0D1836] mb-4">
                  How to Reach Us
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      icon: "🚌",
                      mode: "By Bus",
                      desc: "Ara–Dhaka route buses stop at Dhaka Chowk, 2 min walk",
                    },
                    {
                      icon: "🚂",
                      mode: "By Train",
                      desc: "Ara Junction (18 km) — auto/cab available to Dhaka",
                    },
                    {
                      icon: "🛺",
                      mode: "By Auto",
                      desc: "E-rickshaws available from Dhaka Chowk to Main Road",
                    },
                    {
                      icon: "🚗",
                      mode: "By Car",
                      desc: "NH-922 from Patna to Ara, then State Highway to Dhaka",
                    },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[20px] flex-shrink-0">
                        {r.icon}
                      </span>
                      <div>
                        <div className="font-['Sora'] text-[13px] font-semibold text-[#0D1836]">
                          {r.mode}
                        </div>
                        <div className="text-[12px] text-[#4A5568] leading-snug mt-0.5">
                          {r.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Quick call CTA */}
              <a
                href="tel:+916287247735"
                className="bg-[#E5232E] hover:bg-[#C41920] text-white font-['Sora'] font-semibold text-[15px] px-6 py-4 rounded-[14px] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-200 flex items-center justify-center gap-2"
              >
                <IconMapPin /> Call for Directions
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
