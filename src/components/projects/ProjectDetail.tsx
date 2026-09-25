"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MediaItem } from "@/data/media";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FinalCta } from "@/components/home/HomeSections";
import { PlayableVideo } from "@/components/ui/PlayableVideo";

const ease = [0.16, 1, 0.3, 1] as const;
const statColors = ["#AA94FF", "#FFA8F2", "#9EF483"] as const;

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MediaFrame({
  item,
  className = "",
  aspect,
  sizes = "(min-width: 768px) 40vw, 100vw",
}: {
  item: MediaItem;
  className?: string;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-black ${className}`}
      style={{ aspectRatio: aspect ?? `${item.width} / ${item.height}` }}
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        />
      ) : (
        <Image
          src={item.src}
          alt=""
          fill
          className="object-cover object-center"
          sizes={sizes}
        />
      )}
    </div>
  );
}

function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ProjectDetail({
  project,
  others,
}: {
  project: Project;
  others: Project[];
}) {
  const trio = project.gallery.slice(0, 3);
  const resultShot = project.gallery[3];
  const lowerLeft = [project.gallery[4], project.gallery[6]].filter(Boolean);
  const lowerRight = [project.gallery[5], project.gallery[7]].filter(Boolean);

  return (
    <>
      <article className="overflow-x-hidden pb-12 pt-28 md:pt-32">
        <section className="px-5 md:px-[72px]">
          <div className="mx-auto flex max-w-[1296px] flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-10">
            <div className="w-full max-w-[490px] shrink-0">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease }}
                className="mb-5 inline-flex rounded-full bg-pink px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink"
              >
                Project
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease }}
                className="headline text-[40px] font-bold sm:text-[52px] md:text-[64px]"
              >
                {project.title}
              </motion.h1>

              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease }}
                className="group mt-8 inline-flex items-center gap-2"
              >
                <span className="rounded-full border border-ink bg-white px-8 py-[17px] text-[15px] font-medium transition group-hover:bg-[#fafafa]">
                  Live preview
                </span>
                <span className="grid h-[57px] w-[57px] place-items-center rounded-full border border-ink bg-white text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </motion.a>

              <motion.dl
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease }}
                className="mt-16 flex flex-wrap gap-x-6 gap-y-8 sm:mt-20"
              >
                <div className="min-w-[88px]">
                  <dt className="eyebrow text-[11px] text-faint">Client</dt>
                  <dd className="mt-3">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={200}
                      height={50}
                      className="h-[50px] w-auto object-contain object-left"
                    />
                  </dd>
                </div>
                <div className="min-w-[160px] max-w-[297px]">
                  <dt className="eyebrow text-[11px] text-faint">Services</dt>
                  <dd className="mt-2 space-y-0.5 text-[17px] font-medium leading-snug">
                    {project.services.map((s) => (
                      <p key={s}>{s}</p>
                    ))}
                  </dd>
                </div>
                <div className="min-w-[45px]">
                  <dt className="eyebrow text-[11px] text-faint">Year</dt>
                  <dd className="mt-2 text-[17px] font-medium">{project.year}</dd>
                </div>
              </motion.dl>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
              className="w-full max-w-[686px]"
            >
              <PlayableVideo
                src={project.video}
                poster={project.image}
                className="aspect-[686/651] rounded-[24px] sm:rounded-[32px]"
              />
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-[72px] md:py-28">
          <SectionReveal className="mx-auto max-w-[770px] text-center">
            <p className="eyebrow text-faint">The Challenges</p>
            <h2 className="headline mt-3 text-[32px] font-bold sm:text-[48px] md:text-[64px]">
              {project.challengeTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[616px] text-[17px] leading-7 text-muted">
              {project.challenge}
            </p>
          </SectionReveal>
        </section>

        <section className="px-5 md:px-[72px]">
          <div className="mx-auto max-w-[1296px]">
            <SectionReveal>
              <p className="eyebrow text-faint">our approach</p>
              <div className="mt-3 grid items-start gap-6 md:grid-cols-[minmax(0,620px)_minmax(0,496px)] md:justify-between md:gap-12">
                <h2 className="headline text-[32px] font-bold sm:text-[48px] md:text-[64px]">
                  {project.approachTitle}
                </h2>
                <p className="text-[17px] leading-7 text-muted md:pt-3">{project.approach}</p>
              </div>
            </SectionReveal>

            <div className="mt-12 grid grid-cols-3 items-start gap-3 sm:mt-16 sm:gap-6 lg:gap-[72px]">
              {trio.map((item, i) => (
                <SectionReveal
                  key={`${item.src}-${i}`}
                  delay={i * 0.06}
                  className={i === 0 ? "mt-10 sm:mt-16 lg:mt-[126px]" : i === 1 ? "mt-5 sm:mt-8 lg:mt-[63px]" : ""}
                >
                  <MediaFrame
                    item={item}
                    aspect="329 / 584"
                    sizes="(min-width: 1024px) 329px, 33vw"
                    className="rounded-[20px] sm:rounded-[24px]"
                  />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pt-20 md:px-[72px] md:pt-28">
          <div className="mx-auto flex max-w-[1296px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <SectionReveal className="w-full max-w-[624px]">
              <p className="eyebrow text-faint">the result</p>
              <h2 className="headline mt-3 text-[32px] font-bold sm:text-[48px] md:text-[64px]">
                {project.resultTitle}
              </h2>
              <p className="mt-6 max-w-[499px] text-[17px] leading-7 text-muted">{project.result}</p>

              <div className="mt-10 flex flex-wrap gap-4 sm:gap-[48px]">
                {project.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="w-[162px] rounded-2xl px-4 py-5"
                    style={{ backgroundColor: statColors[i % statColors.length] }}
                  >
                    <p className="headline text-[40px] font-bold">{stat.value}</p>
                    <p className="mt-1 text-[13px] leading-tight text-ink/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {resultShot && (
              <SectionReveal delay={0.08} className="w-full max-w-[599px]">
                <MediaFrame
                  item={resultShot}
                  aspect="599 / 649"
                  sizes="(min-width: 1024px) 599px, 100vw"
                  className="rounded-[24px] sm:rounded-[32px]"
                />
              </SectionReveal>
            )}
          </div>
        </section>

        <section className="px-5 pt-16 md:px-[72px] md:pt-20">
          <div className="mx-auto grid max-w-[770px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-[48px] sm:gap-y-8">
            <div className="flex flex-col gap-8">
              {lowerLeft.map((item, i) => (
                <SectionReveal key={`${item.src}-${i}`}>
                  <MediaFrame
                    item={item}
                    sizes="(min-width: 768px) 330px, 100vw"
                    className="rounded-[20px] sm:rounded-[24px]"
                  />
                </SectionReveal>
              ))}
            </div>
            <div className="flex flex-col gap-8 sm:mt-10">
              {lowerRight.map((item, i) => (
                <SectionReveal key={`${item.src}-${i}`} delay={0.06}>
                  <MediaFrame
                    item={item}
                    sizes="(min-width: 768px) 330px, 100vw"
                    className="rounded-[20px] sm:rounded-[24px]"
                  />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pt-20 md:px-[72px] md:pt-28">
          <div className="mx-auto max-w-[1296px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="headline text-[32px] font-bold sm:text-[48px] md:text-[64px]">
                Check Other Projects
              </h2>
              <Link href="/projects" className="group inline-flex items-center gap-2">
                <span className="rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-white transition group-hover:bg-black">
                  More Projects
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-pink text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-1">
                  <ArrowIcon size={14} />
                </span>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 lg:gap-10">
              {others.map((p, i) => (
                <SectionReveal key={p.slug} delay={i * 0.06}>
                  <ProjectCard project={p} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </article>
      <FinalCta />
    </>
  );
}
