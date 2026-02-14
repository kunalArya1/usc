"use client";

import { ReactNode } from "react";
import {
  IconBookOpen,
  IconAtom,
  IconMicroscope,
  IconCalculator,
} from "@/utils/icons";

export interface Course {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  duration: string;
  batchSize: string;
  rating: number;
  reviews: number;
  fee: string;
  imgLabel: string;
  highlights: string[];
  subjects: string[];
  description: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: "class10-cbse",
    tag: "Board Exam",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Class 10 — CBSE",
    subtitle: "Foundation for Future Success",
    icon: <IconBookOpen />,
    iconBg: "bg-blue-50",
    iconColor: "text-[#1D6FDE]",
    accentColor: "#1D6FDE",
    duration: "11 Months",
    batchSize: "Max 30 Students",
    rating: 4.9,
    reviews: 182,
    fee: "₹18,000/year",
    imgLabel: "Class 10 CBSE students studying science in a bright classroom",
    highlights: [
      "Complete NCERT-based syllabus coverage",
      "Physics, Chemistry, Biology & Maths",
      "Chapter-wise tests every week",
      "Full-length mock board exams",
      "Doubt-clearing sessions (daily)",
      "Previous 10 years' paper practice",
    ],
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    description:
      "A comprehensive CBSE Class 10 coaching program built to deliver board toppers. We combine NCERT mastery with rigorous practice so students walk into the exam hall fully prepared and confident.",
  },
  {
    id: "class10-bseb",
    tag: "Bihar Board",
    tagColor: "bg-green-100 text-green-700",
    title: "Class 10 — BSEB",
    subtitle: "Bihar Board Expert Coaching",
    icon: <IconBookOpen />,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    accentColor: "#16a34a",
    duration: "11 Months",
    batchSize: "Max 30 Students",
    rating: 4.8,
    reviews: 210,
    fee: "₹15,000/year",
    imgLabel:
      "Bihar Board Class 10 students in classroom with teacher writing on board",
    highlights: [
      "Full BSEB Class 10 syllabus",
      "Model papers & objective practice",
      "Special focus on long-answer writing",
      "Bihar Board exam pattern training",
      "Regular parent feedback sessions",
      "Revision batch before exams",
    ],
    subjects: ["Science", "Mathematics", "Social Science", "English"],
    description:
      "Tailored for Bihar Board students, this course covers the exact BSEB pattern with special emphasis on objective, short, and long-answer question types to maximise board exam scores.",
  },
  {
    id: "class11-12",
    tag: "Most Popular",
    tagColor: "bg-red-100 text-[#E5232E]",
    title: "Class 11–12 Science",
    subtitle: "Build the Foundation for NEET & JEE",
    icon: <IconAtom />,
    iconBg: "bg-red-50",
    iconColor: "text-[#E5232E]",
    accentColor: "#E5232E",
    duration: "2 Years",
    batchSize: "Max 25 Students",
    rating: 4.9,
    reviews: 340,
    fee: "₹28,000/year",
    featured: true,
    imgLabel:
      "Class 11-12 science students working on physics experiment in lab",
    highlights: [
      "PCM & PCB streams available",
      "NCERT + reference book coverage",
      "Weekly chapter tests & unit exams",
      "Integrated board + entrance prep",
      "Smart classroom with video lessons",
      "Monthly parent-teacher meetings",
    ],
    subjects: ["Physics", "Chemistry", "Biology / Maths", "English"],
    description:
      "Our flagship 2-year Science program simultaneously prepares students for Class 11–12 boards AND competitive entrance exams. Taught by IIT/AIIMS-qualified faculty with proven track records.",
  },
  //   {
  //     id: "neet",
  //     tag: "Medical",
  //     tagColor: "bg-purple-100 text-purple-700",
  //     title: "NEET Preparation",
  //     subtitle: "Your Pathway to AIIMS & Top Medical Colleges",
  //     icon: <IconMicroscope />,
  //     iconBg: "bg-purple-50",
  //     iconColor: "text-purple-600",
  //     accentColor: "#7c3aed",
  //     duration: "1 or 2 Years",
  //     batchSize: "Max 20 Students",
  //     rating: 4.9,
  //     reviews: 290,
  //     fee: "₹35,000/year",
  //     imgLabel: "NEET students studying biology diagrams and chemistry equations",
  //     highlights: [
  //       "Complete NTA syllabus (PCB)",
  //       "3000+ question bank (topic-wise)",
  //       "NTA-pattern weekly mock tests",
  //       "AIIMS-qualified Biology faculty",
  //       "Detailed performance analysis",
  //       "Crash course & revision batches",
  //     ],
  //     subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
  //     description:
  //       "Intensive NEET coaching designed to take students from Chapter 1 to AIR top ranks. Our biology faculty is AIIMS-qualified, and our physics & chemistry teachers come from IIT backgrounds.",
  //   },
  //   {
  //     id: "jee",
  //     tag: "Engineering",
  //     tagColor: "bg-orange-100 text-orange-700",
  //     title: "JEE Mains & Advanced",
  //     subtitle: "Crack IITs & Top Engineering Colleges",
  //     icon: <IconCalculator />,
  //     iconBg: "bg-orange-50",
  //     iconColor: "text-orange-600",
  //     accentColor: "#ea580c",
  //     duration: "1 or 2 Years",
  //     batchSize: "Max 20 Students",
  //     rating: 4.8,
  //     reviews: 215,
  //     fee: "₹38,000/year",
  //     imgLabel:
  //       "JEE students solving complex mathematics and physics problems at desks",
  //     highlights: [
  //       "JEE Mains + Advanced syllabus",
  //       "IIT-alumni faculty for all subjects",
  //       "Daily Practice Problems (DPPs)",
  //       "Full-length JEE mock tests weekly",
  //       "Previous year paper deep-dive",
  //       "Individual performance mentoring",
  //     ],
  //     subjects: ["Physics", "Chemistry", "Mathematics"],
  //     description:
  //       "Our JEE program focuses on deep problem-solving skills, speed, and accuracy. Taught by IIT alumni who know exactly what it takes to crack both Mains and Advanced.",
  //   },
];
