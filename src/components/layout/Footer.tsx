"use client";

import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { footerLegal, footerNav, site, socials } from "@/data/site";
import { media } from "@/data/media";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.7 10.3 22 2h-2.2l-5.8 6.6L9.3 2H2l7.7 10.9L2 22h2.2l6.3-7.2L14.6 22H22l-7.3-11.7Zm-2.2 2.5-.8-1.1L5 3.6h2.8l4.7 6.6.8 1.1 6.5 9.1H17l-4.5-6.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialIcons = [FacebookIcon, XIcon, InstagramIcon];

export function Footer() {
  return (
    <footer className="bg-pink">
      <div className="mx-auto max-w-[1280px] px-5 pt-6 md:px-[72px]">
        <div className="grid gap-12 pb-8 pt-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h2 className="headline text-4xl font-bold md:text-6xl">{site.tagline}</h2>
            <p className="eyebrow mt-10 text-ink/55">contact</p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-2xl font-semibold">
              {site.email}
            </a>
            <a href={`tel:+12345678`} className="mt-1 block text-2xl font-semibold">
              {site.phone}
            </a>
          </div>

          <div>
            <p className="eyebrow text-ink/55">navigation</p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-lg font-medium hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ink/55">legal</p>
            <ul className="mt-4 space-y-2">
              {footerLegal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-lg font-medium hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-10 text-ink/55">Follow Us</p>
            <div className="mt-4 flex gap-2">
              {socials.map((s, i) => {
                const Icon = socialIcons[i];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="w-full max-w-[300px] self-start rounded-3xl bg-[#f4f4f3] p-5 sm:p-6 md:justify-self-end">
            <h3 className="headline text-[32px] font-bold leading-none sm:text-[40px]">Newsletter</h3>
            <p className="mt-1.5 text-[14px] leading-[1.4] text-[#78716c]">
              Sign up for our newsletter to stay up to date with the latest motion design & studio
              news
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="overflow-hidden pb-6 pt-8">
          <Image src={media.wordmark} alt="Shinta" width={1000} height={267} className="h-auto w-full" />
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink/10 py-6 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70 md:flex-row md:text-left">
          <p>© 2026 Shinta. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            Made by
            <Image src={media.madeBy} alt="Velox Themes" width={100} height={27} className="h-5 w-auto" />
          </p>
        </div>
      </div>
    </footer>
  );
}
