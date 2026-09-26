"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useLenis(({ scroll, direction }) => {
    if (open) {
      setHidden(false);
      return;
    }
    if (scroll < 72) {
      setHidden(false);
      return;
    }
    setHidden(direction === 1);
  });

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? "-130%" : "0%", opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-x-0 top-[max(1rem,env(safe-area-inset-top))] z-50 flex justify-center px-4 md:px-6"
      >
        <div
          className={`relative flex w-full max-w-[1280px] items-center justify-between rounded-full bg-ink px-2 py-1.5 pl-4 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] md:px-3 md:pl-5 ${
            hidden ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <Logo inverted />

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[16px] font-semibold tracking-[-0.04em] transition ${
                    active ? "text-white" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-5 py-2.5 text-[16px] font-semibold tracking-[-0.04em] text-ink transition hover:bg-pink lg:inline-flex"
            >
              Book a Call
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full bg-pink text-ink lg:hidden"
            >
              {open ? (
                <span className="text-xl leading-none">×</span>
              ) : (
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M1 1h16M1 6h16M1 11h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-bg/95 pt-[calc(7rem+env(safe-area-inset-top))] backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-xl flex-col gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-4xl font-semibold tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-fit rounded-full bg-ink px-6 py-3 text-white"
              >
                Book a Call
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
