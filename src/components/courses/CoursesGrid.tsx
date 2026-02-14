"use client";

import { FadeUp } from "@/utils/hooks";
import CourseCard from "./CourseCard";
import { courses } from "./coursesData";

export default function CoursesGrid() {
  return (
    <section className="bg-[#F6F9FF] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-0.5 bg-[#E5232E] rounded" />
            <span className="font-['Sora'] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#E5232E]">
              All Courses
            </span>
          </div>
          <h2 className="font-['Sora'] text-[32px] md:text-[42px] font-extrabold text-[#0D1836] leading-[1.15]">
            Choose the Program That's
            <br />
            <span className="text-[#E5232E]">Right for You</span>
          </h2>
        </FadeUp>

        {/* 3-col grid — featured card spans 2 rows visually via larger content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
