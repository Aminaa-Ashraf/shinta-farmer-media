"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const pathname = usePathname();
  const first = useRef(true);
  const [show, setShow] = useState(true);
  const [tone, setTone] = useState<"ink" | "paper">("ink");

  useEffect(() => {
    if (first.current) {
      first.current = false;
      const hide = window.setTimeout(() => setShow(false), 520);
      return () => window.clearTimeout(hide);
    }
    setTone("paper");
    setShow(true);
    const hide = window.setTimeout(() => setShow(false), 360);
    return () => window.clearTimeout(hide);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed inset-0 z-[300] ${tone === "ink" ? "bg-ink" : "bg-bg"}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        />
      )}
    </AnimatePresence>
  );
}
