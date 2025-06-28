'use client';

import { allProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import FadeUpStagger, { FadeItem } from "@/components/animations/FadeUpStagger";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">All Projects</h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-3xl">
          A curated list of real-world systems I’ve developed — from e-commerce platforms
          and SaaS tools to desktop apps, CMS integrations, and internal systems.
        </p>
      </div>

      <FadeUpStagger>
        <div className="grid sm:grid-cols-2 gap-6">
          {allProjects.map((project) => (
            <FadeItem key={project.title}>
              <ProjectCard {...project} />
            </FadeItem>
          ))}
        </div>
      </FadeUpStagger>
    </section>
  );
}
