"use client";

import { useState } from "react";
import { VideoLightbox } from "@/components/ui/VideoLightbox";

export function PlayableVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Play video"
        onClick={() => setOpen(true)}
        className={`group relative block w-full overflow-hidden ${className}`}
      >
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none h-full w-full object-cover"
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-ink text-white shadow-lg transition group-hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </span>
      </button>
      <VideoLightbox src={open ? src : null} poster={poster} onClose={() => setOpen(false)} />
    </>
  );
}
