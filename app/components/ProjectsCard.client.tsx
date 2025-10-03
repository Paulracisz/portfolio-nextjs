// app/components/ProjectCard.client.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "./ProjectsGrid.server";

export default function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <article
      className="
        group flex flex-col min-h-[400px] h-[100%] rounded-xl bg-white shadow-md
        transition-shadow hover:shadow-xl focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-indigo-500
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image
          src={project.thumbnail}
          alt={project.alt}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="mt-1 text-sm">{project.tagline}</p>
        {project.href && (
          <span className="mt-auto pt-3 text-sm font-medium text-indigo-600 group-hover:underline">
            View ↗
          </span>
        )}
      </div>
    </article>
  );

  // If a link exists, wrap the whole card in <Link>
  return project.href ? (
    <Link href={project.href} target="_blank" rel="noopener noreferrer">
      {inner}
    </Link>
  ) : (
    inner
  );
}