import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unique Scinece Classes | NEET, JEE & Board Exam Coaching",
  description:
    "Expert coaching for NEET, JEE, CBSE, and BSEB board exams. Learn from Expert teachers. Personalized guidance with small batch sizes.",
  keywords: [
    "Dhaka",
    "Sicence Coaching in Dhaka",
    "NEET coaching",
    "JEE coaching",
    "CBSE",
    "BSEB",
    "Board exams",
  ],
  authors: [{ name: "Unique Scinece classes" }],
  creator: "Kunal Kumar Arya",
  publisher: "Kunal Kumar Arya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usclearning.com",
    siteName: "USC Learning",
    title: "USC Learning | NEET, JEE & Board Exam Coaching",
    description:
      "Expert coaching for NEET, JEE, CBSE, and BSEB board exams with personalized guidance.",
    images: [
      {
        url: "/usclogo.png",
        width: 1200,
        height: 630,
        alt: "USC Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USC Learning | NEET, JEE & Board Exam Coaching",
    description: "Expert coaching for NEET, JEE, CBSE, and BSEB board exams.",
    creator: "@usclearning",
    images: ["/usclogo.png"],
  },
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
