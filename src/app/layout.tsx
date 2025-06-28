import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haroon Abid Awan — Senior Full Stack Developer & DevOps Engineer",
  description:
    "Experienced senior full stack developer with 5+ years of expertise in Laravel, Symfony, Vue.js, Electron, Next.js, AWS, and scalable DevOps architecture. Available for freelance and contract projects.",
  keywords: [
    "Haroon Abid Awan",
    "Senior Full Stack Developer",
    "Laravel Symfony Next.js",
    "Electron AWS Developer",
    "DevOps Engineer Bahrain",
    "Freelance Software Engineer",
    "Vue.js Laravel Expert",
    "Vue.js Expert",
    "Next.js Expert",
    "Nest.js Expert",
    "Full Stack Consultant",
    "Freelancer in Bahrain",
  ],
  metadataBase: new URL("https://haroonabidawan.netlify.app"),
  alternates: {
    canonical: "https://haroonabidawan.netlify.app",
  },
  openGraph: {
    title: "Haroon Abid Awan — Senior Full Stack & DevOps Engineer",
    description:
      "Hire an experienced full stack developer with cross-platform skills in Laravel, Electron, Vue.js, AWS, and more.",
    url: "https://haroonabidawan.netlify.app",
    siteName: "Haroon.dev",
    images: [
      {
        url: "/og/upwork-og.png",
        width: 1200,
        height: 630,
        alt: "Hire Haroon Abid Awan — Upwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroon Abid Awan — Senior Full Stack & DevOps Engineer",
    description:
      "5+ years experience with Laravel, Vue, Symfony, Electron, Next.js & AWS. Let's build something powerful.",
    images: ["/og/fiverr-og.png"],
    creator: "@yourhandle", // optional
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0d1117] text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
