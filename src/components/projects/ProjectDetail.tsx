"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { MediaItem } from "@/data/media";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FinalCta } from "@/components/home/HomeSections";

const ease = [0.16, 1, 0.3, 1] as const;

function MediaFrame({
  item,
  className = "",
  rounded = "rounded-[24px]",
}: {
  item: MediaItem;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-black ${rounded} ${className}`}
      style={{ aspectRatio: `${item.width} / ${item.height}` }}
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
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      )}
    </div>
  );
}

function HeroMedia({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.97, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.75, delay: 0.12, ease }}
      className="relative mt-8 block w-full overflow-hidden rounded-[28px] bg-black text-left"
    >
      <div className="relative aspect-[3/4] w-full">
        <video
          ref={videoRef}
          src={project.video}
          poster={project.image}
          className="absolute inset-0 h-full w-full object-cover object-center"
          playsInline
          preload="metadata"
        />
        {!playing && (
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-ink shadow-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
            </span>
          </span>
        )}
      </div>
    </motion.button>
  );
}

export function ProjectDetail({
  project,
  others,
}: {
  project: Project;
  others: Project[];
}) {
  return (
    <>
      <article className="px-5 pb-12 pt-32 md:px-6">
        <div className="mx-auto max-w-[760px]">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="inline-flex rounded-full bg-pink px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink"
          >
            Project
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease }}
            className="headline mt-4 max-w-3xl text-3xl font-bold md:text-5xl"
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
            className="mt-8 inline-flex items-center gap-2"
          >
            <span className="rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white">
              Live preview
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.a>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-10 grid gap-6 border-y border-line py-8 md:grid-cols-3"
          >
            <div>
              <dt className="eyebrow text-faint">Client</dt>
              <dd className="mt-2 text-lg font-medium">{project.name}</dd>
            </div>
            <div>
              <dt className="eyebrow text-faint">Services</dt>
              <dd className="mt-2 space-y-1">
                {project.services.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-faint">Year</dt>
              <dd className="mt-2 text-lg">{project.year}</dd>
            </div>
          </motion.dl>

          <HeroMedia project={project} />

          {[
            { label: "The Challenges", title: project.challengeTitle, text: project.challenge },
            { label: "our approach", title: project.approachTitle, text: project.approach },
            { label: "the result", title: project.resultTitle, text: project.result },
          ].map((block, i) => (
            <motion.section
              key={block.label}
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease }}
              className="mt-14"
            >
              <p className="eyebrow">{block.label}</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{block.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{block.text}</p>
            </motion.section>
          ))}

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {project.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="lift-card rounded-[20px] bg-white p-5"
              >
                <p className="headline text-5xl font-bold">{stat.value}</p>
                <p className="mt-2 text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 columns-1 gap-4 md:columns-2">
            {project.gallery.map((item, i) => (
              <motion.div
                key={`${item.src}-${i}`}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: (i % 2) * 0.06, ease }}
                className="mb-4 break-inside-avoid"
              >
                <MediaFrame item={item} rounded="rounded-[28px]" />
              </motion.div>
            ))}
          </div>

          <section className="mt-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold md:text-3xl">Check Other Projects</h2>
              <Link href="/projects" className="text-sm font-medium underline">
                More Projects
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
