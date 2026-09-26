"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { media } from "@/data/media";
import { servicesTicker, site } from "@/data/site";
import { CtaPill } from "@/components/ui/CtaPill";
import { CurveTicker } from "@/components/ui/CurveTicker";

const ease = [0.16, 1, 0.3, 1] as const;

const phoneClips = [
  { src: media.heroVideos[0], poster: media.heroPosters[0] },
  { src: media.heroVideos[1], poster: media.heroPosters[1] },
  { src: media.heroVideos[2], poster: media.heroPosters[2] },
];

const desktopStage = { x: 552, y: 175, w: 360, h: 640 };
const mobileStage = { x: 50, y: 18, w: 200, h: 356 };

const deckPoses = [
  { x: 0, y: 0, scale: 1, rotate: 0, z: 0, zIndex: 3 },
  { x: -40, y: -8, scale: 0.95, rotate: -3, z: -40, zIndex: 2 },
  { x: -80, y: -16, scale: 0.9, rotate: -6, z: -80, zIndex: 1 },
];

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
  x,
  y,
  visible,
  onPrev,
  onNext,
}: {
  x: number;
  y: number;
  visible: boolean;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="pointer-events-none absolute z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-white shadow-[0_10px_24px_rgba(0,0,0,0.28)] transition-opacity duration-150"
      style={{ left: x, top: y, opacity: visible ? 1 : 0 }}
    >
      <button
        type="button"
        aria-label="Previous video"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="pointer-events-auto grid h-6 w-6 place-items-center"
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
        className="pointer-events-auto grid h-6 w-6 place-items-center"
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
}: {
  src: string;
  poster: string;
  className?: string;
  style?: CSSProperties;
  showPlay?: boolean;
  playing?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) void video.play();
    else video.pause();
  }, [playing, src]);

  return (
    <div className={className} style={style}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none h-full w-full object-cover"
      />
      {showPlay && !playing ? <PlayMark /> : null}
    </div>
  );
}

function PhoneStack({
  stage,
  className,
  style,
}: {
  stage: typeof desktopStage;
  className?: string;
  style?: CSSProperties;
}) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hover, setHover] = useState(false);
  const [cursor, setCursor] = useState({ x: stage.w / 2, y: stage.h * 0.16 });
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const start = useRef<{ x: number; y: number; w: number } | null>(null);
  const dragged = useRef(false);
  const dragXRef = useRef(0);

  const n = phoneClips.length;
  const applyDrag = (value: number) => {
    dragXRef.current = value;
    setDragX(value);
  };

  const go = (dir: number) => {
    setPlaying(false);
    applyDrag(0);
    setActive((v) => (v + dir + n) % n);
  };

  const localPoint = (e: ReactPointerEvent) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return { x: stage.w / 2, y: stage.h / 2, w: stage.w };
    return {
      x: ((e.clientX - rect.left) / rect.width) * stage.w,
      y: ((e.clientY - rect.top) / rect.height) * stage.h,
      w: rect.width,
    };
  };

  const onPointerDown = (e: ReactPointerEvent) => {
    const p = localPoint(e);
    start.current = { x: e.clientX, y: e.clientY, w: p.w };
    dragged.current = false;
    setCursor({ x: p.x, y: p.y });
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const p = localPoint(e);
    setHover(true);
    setCursor({ x: p.x, y: p.y });
    if (!start.current) return;
    const dx = ((e.clientX - start.current.x) / start.current.w) * stage.w;
    if (Math.abs(dx) > 8) {
      dragged.current = true;
      setDragging(true);
    }
    if (dragged.current) applyDrag(dx);
  };

  const onPointerUp = (e: ReactPointerEvent) => {
    const wasDrag = dragged.current;
    const dx = dragXRef.current;
    start.current = null;
    dragged.current = false;
    setDragging(false);
    if (wasDrag) {
      if (dx < -56) go(1);
      else if (dx > 56) go(-1);
      else applyDrag(0);
      return;
    }
    applyDrag(0);
    const target = e.target as HTMLElement;
    if (target.closest("button[aria-label='Previous video'], button[aria-label='Next video']")) return;
    setPlaying((v) => !v);
  };

  return (
    <div className={`pointer-events-none ${className ?? ""}`} style={style}>
      <div
        ref={stageRef}
        className="absolute cursor-grab pointer-events-auto touch-none active:cursor-grabbing lg:cursor-none"
        style={{
          left: stage.x,
          top: stage.y,
          width: stage.w,
          height: stage.h,
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => {
          if (!dragging) setHover(false);
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          start.current = null;
          dragged.current = false;
          setDragging(false);
          applyDrag(0);
        }}
      >
        {phoneClips.map((phone, i) => {
          const offset = (i - active + n) % n;
          const pose = deckPoses[offset] ?? deckPoses[2];
          const front = offset === 0;
          return (
            <motion.div
              key={phone.src}
              initial={false}
              animate={{
                x: pose.x + (front ? dragX : dragX * (0.18 - offset * 0.04)),
                y: pose.y,
                scale: pose.scale,
                rotate: pose.rotate + (front ? dragX * 0.045 : 0),
                rotateY: front ? dragX * -0.12 : offset * -6,
                z: pose.z,
                zIndex: pose.zIndex,
              }}
              transition={
                dragging
                  ? { type: "tween", duration: 0 }
                  : { duration: 0.62, ease }
              }
              className="absolute inset-0 pointer-events-auto origin-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <HeroPhone
                src={phone.src}
                poster={phone.poster}
                showPlay={front && !playing && Math.abs(dragX) < 12}
                playing={front && playing}
                className="h-full w-full overflow-hidden rounded-[28px] bg-ink shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
              />
            </motion.div>
          );
        })}
        <SwipeControl
          x={hover ? cursor.x : stage.w / 2}
          y={hover ? cursor.y : stage.h * 0.16}
          visible
          onPrev={() => go(-1)}
          onNext={() => go(1)}
        />
      </div>
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
        <CurveTicker className="absolute left-[-238px] top-[369px] z-0 h-[437px] w-[1900px]" />

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

        <PhoneStack stage={desktopStage} className="absolute inset-0 z-[1]" />

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
    <div className="overflow-hidden px-5 pb-10 pt-28 lg:hidden">
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

      <div className="relative mx-auto mt-8 w-full max-w-[300px]">
        <CurveTicker className="absolute left-1/2 top-[18%] z-0 h-[200px] w-[170%] -translate-x-1/2" />
        <PhoneStack
          stage={mobileStage}
          className="relative z-[1] mx-auto h-[min(68vw,420px)] w-[min(70vw,260px)]"
        />
      </div>

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
