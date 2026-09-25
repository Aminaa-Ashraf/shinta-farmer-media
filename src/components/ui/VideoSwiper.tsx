"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export type SwiperClip = { src: string; poster?: string };

export function VideoSwiper({
  clips,
  index,
  onClose,
}: {
  clips: SwiperClip[];
  index: number | null;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startX = useRef<number | null>(null);
  const dragged = useRef(false);
  const open = index !== null;

  useEffect(() => {
    if (index === null) return;
    setActive(index);
    setPaused(false);
  }, [index]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(active + 1);
      if (e.key === "ArrowLeft") go(active - 1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, active, onClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !open) return;
    video.currentTime = 0;
    setPaused(false);
    void video.play();
  }, [active, open]);

  const go = (next: number) => {
    setActive(Math.max(0, Math.min(clips.length - 1, next)));
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  if (typeof document === "undefined") return null;

  const clip = open ? clips[active] : null;

  return createPortal(
    <AnimatePresence>
      {open && clip && (
        <motion.div
          className="fixed inset-0 z-[400] flex items-center justify-center"
          style={{ backgroundColor: "#1c1917" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={(e) => {
              e.stopPropagation();
              window.setTimeout(onClose, 0);
            }}
            className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full bg-white text-[28px] leading-none text-ink"
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Previous video"
            disabled={active === 0}
            onClick={(e) => {
              e.stopPropagation();
              go(active - 1);
            }}
            className="absolute left-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/12 text-2xl text-white disabled:opacity-0 md:left-10"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next video"
            disabled={active === clips.length - 1}
            onClick={(e) => {
              e.stopPropagation();
              go(active + 1);
            }}
            className="absolute right-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/12 text-2xl text-white disabled:opacity-0 md:right-10"
          >
            ›
          </button>

          <div
            className="relative isolate"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => {
              startX.current = e.clientX;
              dragged.current = false;
            }}
            onPointerUp={(e) => {
              if (startX.current === null) return;
              const dx = e.clientX - startX.current;
              startX.current = null;
              if (dx > 60) {
                dragged.current = true;
                go(active - 1);
              } else if (dx < -60) {
                dragged.current = true;
                go(active + 1);
              }
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.button
                key={clip.src}
                type="button"
                aria-label={paused ? "Play video" : "Pause video"}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  if (dragged.current) {
                    dragged.current = false;
                    return;
                  }
                  togglePlay();
                }}
                className="relative block aspect-[9/16] h-[min(78vh,820px)] w-auto max-w-[min(calc(100vw-32px),400px)] overflow-hidden rounded-[28px] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              >
                <video
                  ref={videoRef}
                  src={clip.src}
                  poster={clip.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="pointer-events-none h-full w-full object-cover"
                />
                {paused ? (
                  <span className="pointer-events-none absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-ink/70">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7L8 5Z" />
                      </svg>
                    </span>
                  </span>
                ) : null}
              </motion.button>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {clips.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Go to video ${i + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  go(i);
                }}
                className={`h-1.5 rounded-full transition ${i === active ? "w-8 bg-white" : "w-3 bg-white/35"}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
