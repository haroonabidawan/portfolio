'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";
import FadeIn from "@/components/animations/FadeIn";
import FadeUpStagger, { FadeItem } from "@/components/animations/FadeUpStagger";
import TypewriterLabel from "@/components/TypewriterLabel"; // new

export default function Home() {
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <div className="space-y-24">
      {/* 🧑‍💻 Intro Section with Avatar + Glow + Typewriter */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col sm:flex-row items-center gap-10">
          {/* Text on the left */}
          <div className="flex-1 text-center sm:text-left space-y-4">
            <p className="text-sm text-emerald-400 font-mono">&gt; Full Stack Engineer</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Hi, I&apos;m Haroon Abid Awan
            </h1>
            <h2 className="text-xl sm:text-2xl text-emerald-400 font-medium">
              Senior Full Stack Consultant — PHP & JavaScript Frameworks | DevOps & Cloud
            </h2>
            <p className="max-w-2xl text-gray-400 text-base sm:text-lg">
              I help startups and businesses architect, develop, and deploy scalable web applications
              using modern PHP and JavaScript frameworks like Laravel, Symfony, Vue, Next.js, and Electron — backed by secure DevOps workflows and AWS infrastructure.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-2 px-6 rounded-md transition"
            >
              Contact Me
            </Link>
          </div>

          {/* Avatar on the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex-shrink-0"
          >
            {/* Typewriter terminal label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-mono text-emerald-400 whitespace-nowrap"
            >
              <TypewriterLabel />
            </motion.div>

            {/* Avatar with glow animation */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px #10b98130",
                  "0 0 20px #10b98180",
                  "0 0 0px #10b98130",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="rounded-lg border border-emerald-500/20"
            >
              <Image
                src="/avatar-terminal.png"
                alt="Terminal-style avatar"
                width={180}
                height={180}
                className="rounded-lg"
                priority
              />
            </motion.div>
          </motion.div>
        </section>
      </FadeIn>

      {/* 💼 Freelance CTA */}
      <FadeIn>
        <section className="px-4 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Available for Freelance Work</h3>
          <p className="text-gray-400 mb-6">
            Prefer working via trusted freelance platforms? No problem — I’m active on both.
            You can securely hire me through either Upwork or Fiverr.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.upwork.com/freelancers/~haroonabid"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#14a800] hover:bg-[#108000] text-white font-medium py-2 px-6 rounded-md transition"
            >
              Hire on Upwork
            </a>
            <a
              href="https://www.fiverr.com/haroonabidawan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1dbf73] hover:bg-[#1aa666] text-white font-medium py-2 px-6 rounded-md transition"
            >
              Hire on Fiverr
            </a>
          </div>
        </section>
      </FadeIn>

      {/* 👤 About Preview */}
      <FadeIn>
        <section className="px-4 max-w-3xl mx-auto text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-400 mb-6">
            I’m a dedicated full stack developer with 5+ years of experience
            building modern web applications using Laravel, Vue.js, and AWS. My
            focus is on delivering secure, performant, and user-friendly
            solutions tailored to business needs.
          </p>
          <Link
            href="/about"
            className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
          >
            Learn more about me →
          </Link>
        </section>
      </FadeIn>

      {/* 🚀 Featured Projects */}
      <FadeIn>
        <section className="px-4 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">
            Featured Projects
          </h3>
          <FadeUpStagger>
            <div className="grid sm:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <FadeItem key={project.title}>
                  <ProjectCard {...project} />
                </FadeItem>
              ))}
            </div>
          </FadeUpStagger>
          <div className="text-center mt-6">
            <Link
              href="/projects"
              className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
            >
              View all projects →
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* 📣 Final CTA */}
      <FadeIn>
        <section className="px-4 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Let&apos;s work together!</h3>
          <p className="text-gray-400 mb-6">
            Whether you&apos;re building something new or need help scaling your existing
            app, I can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-2 px-6 rounded-md transition"
          >
            Get in Touch
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}
