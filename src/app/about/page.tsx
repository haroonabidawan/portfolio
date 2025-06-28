'use client';

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import FadeUpStagger, { FadeItem } from "@/components/animations/FadeUpStagger";

export default function AboutPage() {
  return (
    <FadeIn>
      <section className="max-w-3xl mx-auto px-4 space-y-12">
        {/* Intro */}
        <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>

        <p className="text-gray-400 text-base sm:text-lg">
          I’m Haroon Abid Awan — a senior full stack consultant who believes great software
          is more than just code. It's <strong className="text-white">clarity in design</strong>,
          <strong className="text-white"> resilience in architecture</strong>, and
          <strong className="text-white"> trust in delivery</strong>.
        </p>

        <p className="text-gray-400 text-base sm:text-lg">
          My journey started not with formal education, but with curiosity. I began tinkering
          with websites in my teens, fascinated by how logic could power real experiences.
          Over time, I went from hacking together frontends to building scalable APIs, managing
          AWS infrastructure, and deploying secure SaaS platforms — often solo, and often fast.
        </p>

        <p className="text-gray-400 text-base sm:text-lg">
          What began as code turned into consulting: solving real business problems,
          communicating with stakeholders, and helping startups move from chaos to clarity.
          From Laravel monoliths to Vue-powered dashboards, Electron apps to cloud-native
          deployments — I’ve built systems that not only work, but last.
        </p>

        <p className="text-gray-400 text-base sm:text-lg">
          Today, I partner with startups, agencies, and entrepreneurs to deliver robust full-stack
          solutions with precision and speed. My work includes multi-vendor marketplaces, inventory systems,
          real-time dashboards, and API integrations — all customized for performance and maintainability.
        </p>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack & Tools</h2>
          <FadeUpStagger>
            <FadeItem>
              <div>
                <h3 className="font-medium text-emerald-400 mb-2">Languages</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>PHP, JavaScript, TypeScript</li>
                  <li>SQL (MySQL, PostgreSQL, MSSQL)</li>
                  <li>Bash / Shell scripting</li>
                </ul>
              </div>
            </FadeItem>

            <FadeItem>
              <div>
                <h3 className="font-medium text-emerald-400 mb-2">Frameworks & Libraries</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>Laravel, Symfony, Node.js, Nest.js</li>
                  <li>Vue.js, Nuxt.js, React, Next.js</li>
                  <li>Electron.js, Inertia.js, Alpine.js</li>
                </ul>
              </div>
            </FadeItem>

            <FadeItem>
              <div>
                <h3 className="font-medium text-emerald-400 mb-2">DevOps & Cloud</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>AWS (EC2, S3, SES, Route53)</li>
                  <li>Docker, NGINX, PM2, Supervisor</li>
                  <li>GitHub Actions, Bitbucket Pipelines, CI/CD</li>
                </ul>
              </div>
            </FadeItem>

            <FadeItem>
              <div>
                <h3 className="font-medium text-emerald-400 mb-2">Databases & Storage</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>MySQL, PostgreSQL, SQL Server</li>
                  <li>Redis, S3, Cloudflare R2</li>
                </ul>
              </div>
            </FadeItem>

            <FadeItem>
              <div>
                <h3 className="font-medium text-emerald-400 mb-2">Tools & Workflow</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>Git, GitHub, Bitbucket</li>
                  <li>VSCode, Postman, TablePlus</li>
                  <li>Trello, Notion, Slack</li>
                </ul>
              </div>
            </FadeItem>

            <FadeItem>
              <div>
                <h3 className="font-medium text-emerald-400 mb-2">APIs & Payments</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>Stripe, Benefit, CrediMax, PayPal</li>
                  <li>REST, GraphQL, Webhooks</li>
                  <li>JWT / OAuth2 / Firebase Auth</li>
                </ul>
              </div>
            </FadeItem>
          </FadeUpStagger>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <div className="space-y-6 border-l border-emerald-700 pl-6">
            <div>
              <p className="text-sm text-emerald-400 font-semibold">2018</p>
              <p className="text-gray-300">
                Started as a Junior PHP Developer — built small business websites and internal tools.
              </p>
            </div>
            <div>
              <p className="text-sm text-emerald-400 font-semibold">2019–2020</p>
              <p className="text-gray-300">
                Progressed to Full Stack Developer — building Laravel/Vue dashboards, APIs, and e-commerce platforms.
              </p>
            </div>
            <div>
              <p className="text-sm text-emerald-400 font-semibold">2021–2022</p>
              <p className="text-gray-300">
                Took ownership of full-stack apps, infrastructure, and DevOps — introduced Docker, AWS, CI/CD, and cloud deployments.
              </p>
            </div>
            <div>
              <p className="text-sm text-emerald-400 font-semibold">2023–Present</p>
              <p className="text-gray-300">
                Working as a freelance consultant — helping businesses scale and modernize software with a full-stack + DevOps approach.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="pt-4">
          <h2 className="text-2xl font-semibold mb-2">My Coding Philosophy</h2>
          <p className="italic text-gray-300 text-lg border-l-4 pl-4 border-emerald-600">
            "Build it once, build it right."
          </p>
          <p className="text-gray-400 mt-2">
            Code is easy to write. But writing code that scales, survives handoffs, and earns trust —
            that takes intent. I don’t just solve technical problems — I prevent future ones.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <p className="text-gray-400 mb-4">
            I’m based in Bahrain and work remotely with clients around the world.
            Whether you're building a startup, scaling a system, or just need a senior developer who can speak both code and strategy — I’m ready to collaborate.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/projects"
              className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
            >
              View My Projects →
            </Link>
            <Link
              href="/contact"
              className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
            >
              Work With Me →
            </Link>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
