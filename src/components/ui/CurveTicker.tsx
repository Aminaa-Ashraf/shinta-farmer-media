"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const PATH =
  "M12.8009 194.615C12.8009 194.615 111.532 356.733 371.301 334.115C705.301 305.035 906.801 -8.74635 1201.3 16.4344C1405.06 33.8564 1537.3 189.615 1537.3 189.615";

const PHRASE =
  "SOCIAL MEDIA MANAGEMENT • SHORT FORM CONTENT • INFLUENCER MARKETING • ";

export function CurveTicker({ className = "" }: { className?: string }) {
  const pathRef = useRef<SVGTextPathElement>(null);

  useAnimationFrame((t) => {
    const node = pathRef.current;
    if (!node) return;
    node.setAttribute("startOffset", `${-((t / 90) % 50)}%`);
  });

  return (
    <svg
      viewBox="-7.2 -28.7 1564.5 405.5"
      preserveAspectRatio="xMidYMid meet"
      className={`pointer-events-none h-auto w-full ${className}`}
      aria-hidden
    >
      <defs>
        <path id="hero-curve-path" d={PATH} />
      </defs>
      <path
        d={PATH}
        fill="none"
        stroke="#ffa8f2"
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        fill="#1c1917"
        style={{
          fontFamily: '"Open Sauce One", sans-serif',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        <textPath
          ref={pathRef}
          href="#hero-curve-path"
          startOffset="0%"
          textAnchor="start"
          dominantBaseline="middle"
        >
          {PHRASE.repeat(16)}
        </textPath>
      </text>
    </svg>
  );
}
