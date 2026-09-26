"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function ZoomImage({
  src,
  alt = "",
  sizes,
  className = "",
  rounded = "rounded-[24px]",
  delay = 0,
}: {
  src: string;
  alt?: string;
  sizes: string;
  className?: string;
  rounded?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease }}
      className={`relative overflow-hidden bg-ink/5 ${rounded} ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.35, delay, ease }}
        whileHover={{ scale: 1.06 }}
      >
        <Image src={src} alt={alt} fill className="object-cover object-center" sizes={sizes} />
      </motion.div>
    </motion.div>
  );
}
