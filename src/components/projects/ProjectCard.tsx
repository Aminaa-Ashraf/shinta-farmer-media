"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  size = "grid",
}: {
  project: Project;
  size?: "hero" | "grid";
}) {
  const hero = size === "hero";

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article
        className={`relative h-full overflow-hidden bg-ink/5 ${
          hero
            ? "aspect-[860/911] rounded-[24px] sm:rounded-[32px]"
            : "aspect-[418/443] rounded-[20px] sm:rounded-[24px]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.06]"
          sizes={hero ? "(min-width: 768px) 860px, 100vw" : "(min-width: 768px) 418px, 50vw"}
        />

        <div
          className={`absolute inset-x-3 bottom-3 flex items-center gap-1.5 sm:inset-x-4 sm:bottom-4 ${
            hero ? "sm:gap-1.5" : ""
          }`}
        >
          <div className="flex min-h-8 min-w-0 flex-1 items-center gap-1 rounded-full bg-[#f4f4f3] px-2.5 py-1.5 sm:min-h-[33px] sm:gap-1.5 sm:px-4">
            <h2 className="shrink-0 text-[13px] font-bold leading-none sm:text-[18px]">{project.name}</h2>
            <span className="hidden text-[13px] leading-none text-faint min-[400px]:inline">/</span>
            <p className="hidden min-w-0 truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-ink min-[400px]:block sm:text-[11px]">
              <span>{project.metric}</span> {project.metricLabel}
            </p>
          </div>
          <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e7e5e4] text-ink transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-pink">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute right-0.5 top-0.5 h-[5px] w-[5px] rounded-full bg-pink transition-opacity duration-300 group-hover:opacity-0" />
          </span>
        </div>
      </article>
    </Link>
  );
}
