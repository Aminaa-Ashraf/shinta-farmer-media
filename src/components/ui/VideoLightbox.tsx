"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export function VideoLightbox({
  src,
  poster,
  onClose,
}: {
  src: string | null;
  poster?: string;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      void video.play();
    }
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-2xl leading-none text-ink"
          >
            ×
          </button>
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[9/16] h-[min(82vh,860px)] w-auto max-w-[min(100%,420px)] overflow-hidden rounded-[28px] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
          >
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              autoPlay
              controls
              playsInline
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
