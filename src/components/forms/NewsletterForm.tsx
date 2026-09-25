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
      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
          className="w-full rounded-full bg-white px-5 py-3.5 text-sm outline-none"
        />
        <button type="submit" className="group flex w-full items-center gap-2">
          <span className="flex-1 rounded-full bg-ink py-3.5 text-[15px] font-medium text-white">
            Subscribe
          </span>
          <span className="grid h-12 w-12 place-items-center rounded-full bg-pink text-ink transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
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
