"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { media } from "@/data/media";
import { servicesTicker, site } from "@/data/site";
import { CtaPill } from "@/components/ui/CtaPill";
import { CurveTicker } from "@/components/ui/CurveTicker";

const ease = [0.16, 1, 0.3, 1] as const;

const phoneClips = [
  { src: media.heroVideos[2], poster: media.heroPosters[2] },
  { src: media.heroVideos[1], poster: media.heroPosters[1] },
  { src: media.heroVideos[0], poster: media.heroPosters[0] },
];

const desktopSlots = [
  { x: 481, y: 199, w: 354, h: 562, z: 1 },
  { x: 514, y: 187, w: 359, h: 601, z: 2 },
  { x: 552, y: 175, w: 360, h: 640, z: 3 },
];

const mobileSlots = [
  { x: 18, y: 34, w: 200, h: 356, z: 1 },
  { x: 34, y: 26, w: 200, h: 356, z: 2 },
  { x: 50, y: 18, w: 200, h: 356, z: 3 },
];

function slotFor(phoneIndex: number, active: number, slots: typeof desktopSlots) {
  const offset = (phoneIndex - active + phoneClips.length) % phoneClips.length;
  return slots[slots.length - 1 - offset];
}

function PlayMark() {
  return (
    <span className="pointer-events-none absolute left-1/2 top-[58%] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink/70">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7L8 5Z" />
      </svg>
    </span>
  );
}

function SwipeControl({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="pointer-events-auto absolute left-1/2 top-[42%] z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-ink px-3 py-2 text-white shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
      <button
        type="button"
        aria-label="Previous video"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="grid h-6 w-6 place-items-center"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <span className="text-[13px] font-semibold tracking-[-0.02em]">Swipe</span>
      <button
        type="button"
        aria-label="Next video"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="grid h-6 w-6 place-items-center"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

function HeroPhone({
  src,
  poster,
  className,
  style,
  showPlay,
  playing,
  onToggle,
}: {
  src: string;
  poster: string;
  className?: string;
  style?: CSSProperties;
  showPlay?: boolean;
  playing?: boolean;
  onToggle?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) void video.play();
    else video.pause();
  }, [playing, src]);

  return (
    <button
      type="button"
      aria-label={playing ? "Pause hero video" : "Play hero video"}
      onClick={onToggle}
      className={className}
      style={style}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
      {showPlay && !playing ? <PlayMark /> : null}
    </button>
  );
}

function PhoneStack({
  slots,
  className,
  style,
}: {
  slots: typeof desktopSlots;
  className?: string;
  style?: CSSProperties;
}) {
  const [active, setActive] = useState(2);
  const [playing, setPlaying] = useState(false);
  const startX = useRef<number | null>(null);

  const n = phoneClips.length;
  const go = (dir: number) => {
    setPlaying(false);
    setActive((v) => (v + dir + n) % n);
  };

  return (
    <div className={`pointer-events-none ${className ?? ""}`} style={style}>
      {phoneClips.map((phone, i) => {
        const slot = slotFor(i, active, slots);
        const front = i === active;
        return (
          <motion.div
            key={phone.src}
            initial={false}
            animate={{
              left: slot.x,
              top: slot.y,
              width: slot.w,
              height: slot.h,
              zIndex: slot.z,
            }}
            transition={{ duration: 0.55, ease }}
            className="absolute pointer-events-auto"
            onPointerDown={(e) => {
              startX.current = e.clientX;
            }}
            onPointerUp={(e) => {
              if (startX.current === null) return;
              const dx = e.clientX - startX.current;
              startX.current = null;
              if (dx > 50) go(-1);
              else if (dx < -50) go(1);
            }}
          >
            <HeroPhone
              src={phone.src}
              poster={phone.poster}
              showPlay={front}
              playing={front && playing}
              onToggle={
                front
                  ? () => setPlaying((v) => !v)
                  : () => {
                      setPlaying(false);
                      setActive(i);
                    }
              }
              className="h-full w-full overflow-hidden rounded-[28px] bg-ink shadow-[0_24px_50px_rgba(0,0,0,0.18)]"
            />
            {front ? <SwipeControl onPrev={() => go(-1)} onNext={() => go(1)} /> : null}
          </motion.div>
        );
      })}
    </div>
  );
}

function ServiceList() {
  return (
    <ul className="space-y-1.5">
      {servicesTicker.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="text-[13px] font-semibold leading-none text-pink">*</span>
          <span className="text-[12px] font-semibold uppercase tracking-[0.08em]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NewProjectCard() {
  return (
    <Link href="/projects/rama" className="group flex items-center gap-3">
      <span className="relative h-[121px] w-24 shrink-0 overflow-hidden rounded-[18px]">
        <Image
          src={media.projects.rama}
          alt="Rama"
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="96px"
        />
      </span>
      <span>
        <span className="block text-[12px] font-semibold uppercase tracking-[0.08em] text-purple">
          New project!
        </span>
        <span className="mt-1 block text-[18px] font-bold leading-[1.4] tracking-[-0.02em]">
          Making Rama unmistakable on social
        </span>
      </span>
    </Link>
  );
}

function DesktopHero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / 1440));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative hidden overflow-hidden lg:block" style={{ height: 920 * scale }}>
      <div
        className="absolute left-1/2 top-0"
        style={{
          width: 1440,
          height: 920,
          marginLeft: -720,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <CurveTicker className="absolute left-[-238px] top-[369px] h-[437px] w-[1900px]" />

        <h1 className="headline absolute left-[72px] top-[175px] w-[448px] text-[64px] font-bold leading-none">
          UGC that
          <br />
          grows your
          <br />
          brand.
        </h1>

        <div className="absolute left-[72px] top-[399px]">
          <ServiceList />
        </div>

        <PhoneStack slots={desktopSlots} className="absolute inset-0" />

        <div className="absolute left-[1052px] top-[175px] w-[300px]">
          <NewProjectCard />
        </div>

        <p className="absolute left-[1052px] top-[626px] w-[300px] text-[18px] leading-[27px] text-muted">
          {site.description}
        </p>

        <div className="absolute left-[1052px] top-[758px] w-[300px]">
          <CtaPill href="/contact">Book a call</CtaPill>
        </div>
      </div>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="px-5 pb-10 pt-28 lg:hidden">
      <h1 className="headline text-[40px] font-bold leading-[0.95] sm:text-[52px]">
        UGC that
        <br />
        grows your
        <br />
        brand.
      </h1>
      <div className="mt-8">
        <ServiceList />
      </div>

      <PhoneStack slots={mobileSlots} className="relative mx-auto mt-10 h-[420px] w-[260px]" />

      <div className="mt-10">
        <NewProjectCard />
        <p className="mt-6 text-[16px] leading-7 text-muted">{site.description}</p>
        <div className="mt-6 max-w-[300px]">
          <CtaPill href="/contact">Book a call</CtaPill>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <DesktopHero />
      <MobileHero />
      <p className="px-5 pb-6 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-faint">
        {site.brandsHelped} Brands leveled up their content game
      </p>
    </section>
  );
}
