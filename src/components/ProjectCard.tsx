'use client';

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, link, logo }: Project) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col h-full shadow-md transition-transform duration-300 hover:shadow-emerald-500/20 hover:border-emerald-500/40"
    >
      <div className="mb-4 flex items-center gap-3">
        {logo && (
          <Image
            src={logo}
            alt={`${title} logo`}
            width={32}
            height={32}
            className="rounded-sm"
          />
        )}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-md text-xs bg-emerald-600/10 text-emerald-300 border border-emerald-700/60"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300 mt-auto"
        >
          Visit Project →
        </Link>
      )}
    </motion.div>
  );
}
