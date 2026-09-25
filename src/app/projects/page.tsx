import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { FinalCta } from "@/components/home/HomeSections";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Work we’re proud of — campaigns and UGC that grew followers, leads, and conversion for Rama, Pandawa, Kresna, Sadewa, Bima, and Mandala.",
  openGraph: { title: "Projects · Shinta", description: "Featured social campaigns and UGC work from Shinta." },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="px-5 pb-12 pt-28 md:px-6 md:pt-32">
        <div className="mx-auto max-w-[760px]">
          <span className="inline-flex rounded-full bg-pink px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
            Works
          </span>

          <div className="mt-5 grid items-end gap-4 md:grid-cols-2">
            <Reveal>
              <h1 className="headline text-4xl font-bold sm:text-5xl md:text-[64px]">All Projects</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-md text-base leading-7 text-muted md:justify-self-end">
                We collaborate with brands and creators to build real campaigns and scroll-stopping
                content that drive engagement, reach, and growth.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
