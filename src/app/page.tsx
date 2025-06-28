import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";
import FadeIn from "@/components/animations/FadeIn";
import FadeUpStagger, { FadeItem } from "@/components/animations/FadeUpStagger";

export default function Home() {
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <div className="space-y-24">
      {/* Intro Section */}
      <FadeIn>
        <section className="flex flex-col items-center sm:items-start justify-center gap-6 min-h-[60vh] text-center sm:text-left px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Hi, I&apos;m Haroon Abid Awan
          </h1>
          <h2 className="text-xl sm:text-2xl text-emerald-400 font-medium">
            Senior Full Stack Consultant — PHP & JavaScript Frameworks | DevOps & Cloud
          </h2>
          <p className="max-w-2xl text-gray-400 text-base sm:text-lg">
            I help startups and businesses architect, develop, and deploy scalable web applications
            using modern PHP and JavaScript frameworks like Laravel, Symfony, Vue, Next.js, and Electron —
            backed by secure DevOps workflows and AWS infrastructure.
          </p>
          <Link
            href="/contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-2 px-6 rounded-md transition"
          >
            Contact Me
          </Link>
        </section>
      </FadeIn>

      {/* Freelance CTA */}
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

      {/* About Preview */}
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

      {/* Featured Projects */}
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

      {/* Final CTA */}
      <FadeIn>
        <section className="px-4 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            Let’s work together!
          </h3>
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
