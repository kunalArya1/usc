"use client";

import { useState } from "react";
import { FadeUp } from "@/utils/hooks";
import {
  IconCheck,
  IconStar,
  IconClock,
  IconUsers,
  IconArrowRight,
} from "@/utils/icons";
import { Course } from "./coursesData";

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeUp delay={index * 90}>
      <div
        className={`rounded-[22px] overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full group ${
          course.featured
            ? "border-[#E5232E]/30 shadow-xl shadow-red-100"
            : "border-[#E2E8F0] shadow-sm"
        } bg-white`}
      >
        {/* ── Image ── */}
        <div className="relative h-[200px] overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gradient-to-br from-[#EEF4FB] to-[#D4E6F6] group-hover:scale-105 transition-transform duration-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A4BDDA"
              strokeWidth="1.5"
              className="w-12 h-12"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <p className="text-[11px] text-center px-4 leading-snug text-[#8BACC8]">
              {course.imgLabel}
            </p>
          </div>
          {/* Tag badge */}
          <div
            className={`absolute top-3 left-3 font-['Sora'] text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full ${course.tagColor}`}
          >
            {course.tag}
          </div>
          {/* Featured ribbon */}
          {course.featured && (
            <div className="absolute top-3 right-3 bg-[#E5232E] text-white font-['Sora'] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full shadow-lg">
              ★ MOST POPULAR
            </div>
          )}
        </div>

        {/* ── Body ── */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <div className="flex items-start gap-3 mb-3">
            <div
              className={`w-11 h-11 ${course.iconBg} rounded-[12px] flex items-center justify-center flex-shrink-0 mt-0.5`}
            >
              <span className={course.iconColor}>{course.icon}</span>
            </div>
            <div>
              <h3 className="font-['Sora'] text-[19px] font-bold text-[#0D1836] leading-tight">
                {course.title}
              </h3>
              <p className="text-[12px] text-[#8A96AB] mt-0.5">
                {course.subtitle}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} />
              ))}
            </div>
            <span className="font-['Sora'] text-[13px] font-semibold text-[#0D1836]">
              {course.rating}
            </span>
            <span className="text-[12px] text-[#8A96AB]">
              ({course.reviews} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-[14px] text-[#4A5568] leading-[1.72] mb-5">
            {course.description}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#F0F4FB]">
            <div className="flex items-center gap-1.5 text-[#4A5568]">
              <IconClock />
              <span className="text-[13px]">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#4A5568]">
              <IconUsers />
              <span className="text-[13px]">{course.batchSize}</span>
            </div>
          </div>

          {/* Highlights — toggle */}
          <div className="mb-5 flex-1">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 font-['Sora'] text-[13px] font-semibold text-[#0D1836] hover:text-[#E5232E] transition-colors mb-3"
            >
              {expanded ? "Hide" : "Show"} course highlights
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              className="overflow-hidden transition-all duration-400"
              style={{ maxHeight: expanded ? "300px" : "0px" }}
            >
              <ul className="flex flex-col gap-2">
                {course.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${course.accentColor}18` }}
                    >
                      <span style={{ color: course.accentColor }}>
                        <IconCheck />
                      </span>
                    </div>
                    <span className="text-[13px] text-[#4A5568]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subjects chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {course.subjects.map((s) => (
              <span
                key={s}
                className="font-['Sora'] text-[11px] font-semibold bg-[#F0F4FB] text-[#4A5568] px-3 py-1 rounded-full border border-[#E8EEF6]"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Fee + CTA */}
          {/* <div className="flex items-center justify-between gap-3 mt-auto">
            <div>
              <div className="font-['Sora'] text-[20px] font-extrabold text-[#0D1836]">
                {course.fee}
              </div>
              <div className="text-[11px] text-[#8A96AB]">
                incl. study material
              </div>
            </div> */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[13px] font-semibold font-['Sora'] px-5 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
            style={{
              background: course.featured ? "#E5232E" : course.accentColor,
              color: "#fff",
              boxShadow: `0 4px 14px ${course.accentColor}30`,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                `0 8px 24px ${course.accentColor}45`)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                `0 4px 14px ${course.accentColor}30`)
            }
          >
            Call Us <IconArrowRight />
          </a>
        </div>
      </div>
      {/* </div> */}
    </FadeUp>
  );
}
