"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({ variant = "inline" }: { variant?: "inline" | "footer" }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className="mt-4 text-sm font-medium">You’re on the list.</p>;
  }

  if (variant === "footer") {
    return (
      <form onSubmit={onSubmit} className="mt-4 space-y-2">
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
          className="h-14 w-full rounded-[10px] bg-white px-4 text-base text-ink outline-none placeholder:text-ink/45"
        />
        <button type="submit" className="group flex w-full items-center gap-0">
          <span className="flex h-[57px] flex-1 items-center justify-center rounded-full bg-ink text-[18px] font-bold text-[#f4f4f3] transition group-hover:bg-black">
            Subscribe
          </span>
          <span className="-ml-0.5 grid h-[57px] w-[57px] shrink-0 place-items-center rounded-full bg-pink text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 flex gap-2">
      <input
        required
        type="email"
        name="email"
        placeholder="Email address"
        className="w-full rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-ink/30"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white"
      >
        Subscribe
      </button>
    </form>
  );
}
