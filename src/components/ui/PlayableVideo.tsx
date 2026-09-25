"use client";

import { useRef, useState } from "react";

export function PlayableVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = false;
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <button
      type="button"
      aria-label={playing ? "Pause video" : "Play video"}
      onClick={toggle}
      className={`group relative block w-full overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="pointer-events-none h-full w-full object-cover"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <span className="absolute inset-0 grid place-items-center bg-black/15">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-ink text-white shadow-lg transition group-hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </span>
      )}
    </button>
  );
}
