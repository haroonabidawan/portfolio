'use client';

import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <FadeIn>
      <section className="max-w-xl mx-auto px-4 py-12 space-y-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Let’s Work Together</h1>

        <p className="text-gray-400 text-base sm:text-lg">
          I&apos;m available for freelance and contract projects. Feel free to reach out via email
          or connect with me on your preferred freelance platform.
        </p>

        <div className="space-y-4 text-sm text-gray-300">
          <div>
            📧 Email:{" "}
            <a
              href="mailto:haroon.abid.1999@gmail.com"
              className="text-emerald-400 underline hover:text-emerald-300"
            >
              haroon.abid.1999@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
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

        <p className="text-xs text-gray-500 pt-8">
          Based in Bahrain — working with global clients remotely.
        </p>
      </section>
    </FadeIn>
  );
}
