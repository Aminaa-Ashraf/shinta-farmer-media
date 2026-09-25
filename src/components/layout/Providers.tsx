"use client";

import { ReactLenis } from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.075, duration: 1.15, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
