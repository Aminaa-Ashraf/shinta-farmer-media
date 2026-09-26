"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, type MotionValue } from "framer-motion";
import { useLenis } from "lenis/react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  comparison,
  faqs,
  painPoints,
  plans,
  processSteps,
  services,
} from "@/data/site";
import { projects } from "@/data/projects";
import { team, testimonials } from "@/data/people";
import { posts } from "@/data/posts";
import { media } from "@/data/media";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CtaPill } from "@/components/ui/CtaPill";
import { PinkScribble } from "@/components/ui/PinkScribble";
import { PlayableVideo } from "@/components/ui/PlayableVideo";

const painItems = [
  { text: painPoints[0], row: "items-center justify-start", width: "w-[min(100%,384px)]" },
  { text: painPoints[1], row: "items-center justify-end", width: "w-[min(100%,321px)]" },
  { text: painPoints[2], row: "items-center justify-center", width: "w-[min(100%,284px)]" },
  { text: painPoints[3], row: "items-center justify-start md:pl-[8%]", width: "w-[min(100%,246px)]" },
  { text: painPoints[4], row: "items-center justify-end", width: "w-[min(100%,288px)]" },
];

function mixInk(t: number) {
  const r = Math.round(28 + (244 - 28) * t);
  const g = Math.round(25 + (244 - 25) * t);
  const b = Math.round(23 + (243 - 23) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

function PainToast({ text, width }: { text: string; width: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4, margin: "-8% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${width} min-h-38.75 rounded-2xl bg-muted p-6 shadow-[0_10px_24px_rgba(0,0,0,0.16)]`}
    >
      <svg width="32" height="32" viewBox="0 0 16 16" aria-hidden className="mb-2.5 block">
        <circle cx="8" cy="8" r="8" fill="#ffa952" />
        <path
          d="M5.1 5.1l5.8 5.8M10.9 5.1l-5.8 5.8"
          stroke="#44403c"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
      <p className="whitespace-pre-line text-[18px] font-bold leading-[1.15] text-bg md:text-[24px]">
        {text}
      </p>
    </motion.div>
  );
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function syncPainTheme(
  el: HTMLElement | null,
  blackOpacity: MotionValue<number>,
  color: MotionValue<string>,
) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const progress = -rect.top / Math.max(1, el.offsetHeight - window.innerHeight);
  const enter = clamp01(progress / 0.08);
  const leave = clamp01((progress - 0.82) / 0.12);
  const t = Math.min(enter, 1 - leave);
  blackOpacity.set(t);
  color.set(mixInk(t));
}

export function PainPoints() {
  const ref = useRef<HTMLElement>(null);
  const blackOpacity = useMotionValue(0);
  const color = useMotionValue("#1c1917");

  useLenis(() => syncPainTheme(ref.current, blackOpacity, color));

  useEffect(() => {
    const run = () => syncPainTheme(ref.current, blackOpacity, color);
    run();
    window.addEventListener("scroll", run, { passive: true });
    window.addEventListener("resize", run);
    return () => {
      window.removeEventListener("scroll", run);
      window.removeEventListener("resize", run);
    };
  }, [blackOpacity, color]);

  return (
    <section ref={ref} className="relative">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] bg-ink"
        style={{ opacity: blackOpacity }}
      />
      <div className="sticky top-0 z-[1] flex h-screen items-center justify-center">
        <motion.h2
          style={{ color }}
          className="headline relative max-w-[600px] px-5 text-center text-[32px] font-bold sm:text-[40px] md:text-[64px]"
        >
          Social media feels harder than it should be
        </motion.h2>
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1280px] px-6 md:px-18">
        {painItems.map((item) => (
          <div key={item.text} className={`flex h-[220px] md:h-[280px] ${item.row}`}>
            <PainToast text={item.text} width={item.width} />
          </div>
        ))}
      </div>
      <div className="h-[22vh] md:h-[280px]" />
    </section>
  );
}

function LoopVideo({ src }: { src: string }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

export function Mission() {
  return (
    <section className="px-5 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-[1060px]">
        <p className="eyebrow text-center">our mission</p>
        <div className="relative">
          <PinkScribble className="absolute -left-24 -top-10 hidden w-[340px] md:block" />
          <Reveal>
            <h2 className="headline mx-auto mt-4 max-w-[850px] text-center text-[32px] font-bold sm:text-[40px] md:text-[64px]">
              We made social media into a consistent, high-performing growth channel.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-8 md:mt-16 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:gap-10">
          <Reveal className="relative mx-auto w-full max-w-[280px] min-w-0 md:mx-0">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-ink/5">
              <LoopVideo src={media.missionVideos[0]} />
            </div>
            <div className="absolute bottom-4 left-0 w-[min(100%,220px)] rounded-2xl bg-pink px-5 py-4 md:-left-3">
              <p className="headline text-[40px] font-bold leading-none">200%</p>
              <p className="mt-2 text-[16px] leading-6 text-[#ac459d]">Organic Follower Growth</p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="min-w-0">
            <h3 className="headline text-[32px] font-bold leading-[1.05] sm:text-[40px] md:text-[56px] lg:text-[64px]">
              Performance-driven UGC that delivers results
            </h3>
            <p className="mt-6 max-w-[484px] text-[18px] leading-[27px] text-muted">
              Our UGC strategy is grounded in real performance data. We design, test, and refine
              creative so every piece contributes to growth you can actually measure.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-8 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,380px)] md:gap-10">
          <Reveal className="min-w-0">
            <h3 className="headline text-[32px] font-bold leading-[1.05] sm:text-[40px] md:text-[56px] lg:text-[64px]">
              Creator-led content, long-term growth.
            </h3>
            <p className="mt-6 max-w-[480px] text-[18px] leading-[27px] text-muted">
              We source and test creators across niches and communities, focusing on those who
              naturally align with your brand. The result is authentic UGC that feels native and
              performs consistently.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative mx-auto w-full max-w-[380px] min-w-0 md:mx-0">
            <div className="relative aspect-[461/281] w-full overflow-hidden rounded-3xl bg-ink/5">
              <LoopVideo src={media.missionVideos[1]} />
            </div>
            <div className="absolute -bottom-3 -right-1 rounded-2xl bg-purple px-5 py-4">
              <p className="headline text-[40px] font-bold leading-none">4.2M</p>
              <p className="mt-1 text-[18px] leading-[27px] text-muted">Impressions</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const featured = [projects[0], projects[1], projects[3], projects[2], projects[4]];
  const [hero, ...rest] = featured;

  return (
    <section className="px-5 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-[860px]">
        <Reveal className="text-center">
          <span className="inline-flex rounded-full bg-pink px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
            featured projects
          </span>
          <h2 className="headline mt-4 text-[32px] font-bold sm:text-[40px] md:text-[64px]">
            Work We’re Proud Of
          </h2>
        </Reveal>
        <Reveal className="mt-8 md:mt-10">
          <ProjectCard project={hero} size="hero" />
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} size="grid" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const worksTilt = [8, -10, 6, -8, 12, -6];

export function SeeMoreWorks() {
  return (
    <section className="relative isolate h-[88svh] min-h-[520px] overflow-hidden md:min-h-[680px]">
      <div className="works-orbit pointer-events-none absolute left-1/2 top-1/2 h-[980px] w-[980px] max-md:h-[640px] max-md:w-[640px]">
        {media.worksShots.map((shot, i) => {
          const angle = (i / media.worksShots.length) * 360;
          const radius = 380;
          return (
            <div
              key={`${shot.src}-${i}`}
              className="absolute left-1/2 top-1/2 max-md:scale-[0.62]"
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`,
              }}
            >
              <div
                className="works-card"
                style={{ width: shot.w, height: shot.h, marginLeft: -shot.w / 2, marginTop: -shot.h / 2 }}
              >
                <div
                  className="relative h-full w-full overflow-hidden rounded-3xl bg-ink/5 shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                  style={{ transform: `rotate(${worksTilt[i]}deg)` }}
                >
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href="/projects"
        className="group relative z-10 flex h-full flex-wrap items-center justify-center gap-3 px-5 text-center text-ink"
      >
        <h2 className="headline text-[28px] font-bold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1 sm:text-[48px] md:text-[64px]">
          See More Works
        </h2>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pink text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-pink-2 sm:h-12 sm:w-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const scale = useMotionValue(1);

  useLenis(() => {
    const el = ref.current;
    const next = el?.nextElementSibling as HTMLElement | null;
    if (!el || !next) {
      scale.set(1);
      return;
    }
    const top = next.getBoundingClientRect().top;
    const t = 1 - Math.min(1, Math.max(0, top / window.innerHeight));
    scale.set(1 - t * 0.07);
  });

  return (
    <article
      ref={ref}
      className="sticky top-0 flex min-h-[100svh] items-center justify-center px-5 py-16 md:px-6"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ scale }}
        className="w-full max-w-[1060px] origin-center will-change-transform"
      >
        <div className="inline-flex rounded-tl-lg rounded-tr-3xl bg-purple px-4 py-2">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em]">Service / {service.n}</p>
        </div>
        <div className="rounded-b-[28px] rounded-tr-[28px] bg-purple p-5 shadow-[0_24px_60px_rgba(28,25,23,0.12)] md:p-8">
          <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="headline text-[28px] font-bold leading-none md:text-[48px] lg:text-[64px]">{service.title}</h2>
                <p className="mt-4 max-w-md text-[16px] leading-7 text-ink/80">{service.text}</p>
              </div>
              <div className="mt-8">
                <p className="headline text-4xl font-bold md:text-[52px]">{service.stat}</p>
                <p className="mt-1 text-[16px] text-ink/70">{service.statLabel}</p>
              </div>
            </div>
            <div className="relative aspect-[478/500] min-h-[280px] overflow-hidden rounded-3xl md:aspect-auto md:min-h-[460px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 500px, 100vw"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

export function Services() {
  return (
    <section className="relative">
      {services.map((service, i) => (
        <ServiceCard key={service.n} service={service} index={i} />
      ))}
    </section>
  );
}

export function Comparison() {
  return (
    <section className="px-5 py-16 md:px-18 md:py-24">
      <Reveal className="mx-auto max-w-[800px] text-center">
        <h2 className="headline text-[32px] font-bold sm:text-[40px] md:text-[56px]">Don’t settle for less</h2>
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-[800px] gap-5 md:grid-cols-2">
        <Reveal>
          <div className="lift-card min-h-[287px] rounded-[22px] bg-white p-6 md:p-8">
            <h3 className="text-[18px] font-semibold text-faint">Other Agencies</h3>
            <ul className="mt-4 space-y-1.5 text-[15px] leading-8 text-muted">
              {comparison.others.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="lift-card min-h-[287px] rounded-[22px] bg-pink p-6 md:p-8">
            <h3 className="text-[18px] font-semibold">Shinta</h3>
            <ul className="mt-4 space-y-1.5 text-[15px] leading-8">
              {comparison.shinta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessIcon({ name }: { name: (typeof processSteps)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "chat") {
    return (
      <svg {...common}>
        <path d="M5 8.5A3.5 3.5 0 0 1 8.5 5h7A3.5 3.5 0 0 1 19 8.5v3A3.5 3.5 0 0 1 15.5 15H9l-4 3.2V8.5Z" />
        <path d="M9 10h6" />
      </svg>
    );
  }
  if (name === "play") {
    return (
      <svg {...common}>
        <rect x="4.5" y="6" width="15" height="12" rx="3.5" />
        <path d="M10.5 9.4v5.2L15 12l-4.5-2.6Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg {...common}>
        <path d="M5.5 12.5 10 17l8.5-9" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M6 16.5v-3M12 16.5v-7M18 16.5v-5" />
    </svg>
  );
}

export function Process() {
  return (
    <section className="px-5 py-16 md:px-22 md:py-24">
      <div className="mx-auto max-w-[1264px]">
        <p className="eyebrow">our process</p>
        <h2 className="headline mt-3 max-w-[720px] text-[32px] font-bold sm:text-[40px] md:text-[52px]">
          From strategy to scroll-stopping content.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <article
                className="lift-card flex h-[403px] flex-col rounded-3xl p-1.5"
                style={{ background: step.color }}
              >
                <div className="flex items-center justify-between rounded-full bg-bg px-4 py-2.5">
                  <span className="headline text-[22px] font-bold leading-none">{step.n}</span>
                  <ProcessIcon name={step.icon} />
                </div>
                <div className="mt-auto px-4 pb-4">
                  <h3 className="headline text-[28px] font-bold leading-none md:text-[32px]">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-[13px] leading-5 text-ink/75">{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="px-5 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-[1100px]">
        <p className="eyebrow">testimonials</p>
        <h2 className="headline mt-3 text-[32px] font-bold sm:text-[40px] md:text-[52px]">Trusted by 40+ Companies</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Reveal className="w-full max-w-[216px] sm:w-[216px]">
            <PlayableVideo
              src={media.testimonialVideo}
              poster={media.testimonialPoster}
              className="h-[371px] rounded-[22px]"
            />
          </Reveal>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04} className="w-full max-w-[283px] sm:w-[283px]">
              <article className="lift-card flex h-full min-h-[371px] flex-col rounded-[22px] bg-white p-6">
                <h3 className="text-[17px] font-semibold">{t.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-muted">“{t.quote}”</p>
                <div className="mt-auto flex items-center gap-3 pt-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={58}
                    height={58}
                    className="h-[58px] w-[58px] rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-faint">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const teamHeights = [226, 215, 215, 215, 200, 215];

export function TeamPreview() {
  return (
    <section className="px-5 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-[1100px]">
        <p className="eyebrow">our team</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="headline max-w-[700px] text-[32px] font-bold sm:text-[40px] md:text-[52px]">The Content Experts</h2>
          <Button href="/about-us">More About Us</Button>
        </div>
        <p className="mt-3 max-w-lg text-muted">
          Shinta helped us turn ideas into consistent, high-performing social content.
        </p>
        <div className="mt-10 flex items-end justify-start overflow-x-auto pb-2 md:justify-center md:overflow-visible">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.04} className={i > 0 ? "-ml-6 md:-ml-8" : ""}>
              <article className="group w-[150px] shrink-0 md:w-[197px]" style={{ marginBottom: i % 2 ? 0 : 24 }}>
                <div
                  className="relative overflow-hidden rounded-[18px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.14)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:z-10 group-hover:-translate-y-2"
                  style={{ height: teamHeights[i] }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="197px"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="px-5 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-[800px]">
        <p className="eyebrow">pricing</p>
        <h2 className="headline mt-3 text-[32px] font-bold sm:text-[40px] md:text-[52px]">Flexible pricing for every stage</h2>
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${!yearly ? "bg-ink text-white" : "bg-white"}`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${yearly ? "bg-ink text-white" : "bg-white"}`}
          >
            Yearly
          </button>
          <span className="eyebrow text-[#ac459d]">save 20%</span>
        </div>
        <div className="mx-auto mt-10 grid max-w-[716px] gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`lift-card flex min-h-[427px] flex-col rounded-3xl p-2.5 ${plan.popular ? "bg-ink text-white" : "bg-white"}`}
            >
              <div className={`rounded-3xl p-4 ${plan.popular ? "bg-white/10" : "bg-bg"}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-[22px] font-semibold">{plan.name}</h3>
                  {plan.popular && <span className="eyebrow text-pink">popular</span>}
                </div>
                <p className={`mt-1 text-sm ${plan.popular ? "text-white/70" : "text-muted"}`}>{plan.blurb}</p>
                <p className="headline mt-5 text-5xl font-bold">
                  ${yearly ? plan.yearly : plan.monthly}
                  <span className="text-base font-medium">/mo</span>
                </p>
              </div>
              <ul className="mt-2 space-y-2 px-4 py-4 text-sm">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-auto inline-flex w-full justify-center rounded-full py-3 font-medium ${
                  plan.popular ? "bg-pink text-ink" : "bg-ink text-white"
                }`}
              >
                Get {plan.name} Plan
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-muted">
          Need custom plan?{" "}
          <Link href="/contact" className="font-medium text-ink underline">
            Let’s Talk
          </Link>
        </p>
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="px-5 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-[1035px]">
        <p className="eyebrow">Blog</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="headline text-[32px] font-bold sm:text-[40px] md:text-[52px]">Insight & Ideas</h2>
          <Button href="/blog" variant="ghost">
            More Articles
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Reveal key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[329/248] overflow-hidden rounded-[18px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    sizes="(min-width: 768px) 329px, 100vw"
                  />
                </div>
                <p className="mt-4 eyebrow text-faint">{post.date}</p>
                <h3 className="mt-2 text-base font-semibold">{post.title}</h3>
                <p className="mt-1 text-sm text-muted">By {post.author}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-5 py-16 md:px-18 md:py-24">
      <div className="mx-auto max-w-[720px]">
        <h2 className="headline text-[32px] font-bold sm:text-[40px] md:text-[52px]">FAQ</h2>
        <div className="mt-8 divide-y divide-line">
          {faqs.map((item, i) => (
            <div key={item.q} className="py-4">
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 text-left text-lg font-semibold"
              >
                {item.q}
                <span className="text-2xl font-normal text-faint">{open === i ? "–" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pt-3 text-muted"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-5 pb-16 md:px-18 md:pb-24">
      <Reveal className="mx-auto flex max-w-[1296px] flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-12 text-white sm:rounded-4xl sm:px-10 sm:py-14 md:w-[min(100%,520px)] md:shrink-0">
          <svg
            viewBox="0 0 420 90"
            fill="none"
            aria-hidden
            className="pointer-events-none absolute left-0 top-6 w-[78%] max-w-[340px]"
          >
            <path
              d="M12 58C72 8 132 78 198 34C248 2 292 62 348 28C372 16 396 22 408 30"
              stroke="#ffa8f2"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="headline relative mt-8 max-w-[285px] text-[36px] font-bold sm:text-[48px] md:text-[56px]">
            Let’s grow thorough content!
          </h2>
          <p className="relative mt-5 max-w-[320px] text-[15px] leading-6 text-white/70">
            Shinta helps brands create content that earns attention, builds engagement, and drives real
            growth.
          </p>
          <div className="relative mt-8 max-w-[280px]">
            <CtaPill href="/contact" accent="white">
              Book a call
            </CtaPill>
          </div>
        </div>
        <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-3xl sm:rounded-4xl md:min-h-[510px]">
          <Image
            src={media.footerPhoto}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 675px, 100vw"
          />
        </div>
      </Reveal>
    </section>
  );
}

export function LogoMarquee() {
  const logos = [...media.logos, ...media.logos];
  return (
    <div className="overflow-hidden border-y border-line py-5">
      <div className="marquee-track flex w-max items-center gap-16">
        {logos.map((src, i) => (
          <Image
            key={`${src}-${i}`}
            src={src}
            alt="Brand partner"
            width={160}
            height={32}
            className="h-6 w-auto opacity-70 sm:h-8"
          />
        ))}
      </div>
    </div>
  );
}
