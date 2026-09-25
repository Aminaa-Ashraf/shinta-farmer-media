"use client";

import { motion } from "framer-motion";

const D =
  "M180.79 1.30042C163.471 65.6046 110.061 102.919 78.3233 105.455C51.3324 107.612 61.0037 65.4235 78.3233 76.7446C89.9026 84.3135 103.169 118.769 59.3715 133.984C33.4678 142.984 1.79041 130.815 1.79041 130.815";

export function PinkScribble({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0.25 -0.24 182.08 139.08"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      <motion.path
        d={D}
        stroke="#ffa8f2"
        strokeWidth="3.08"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.4 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
