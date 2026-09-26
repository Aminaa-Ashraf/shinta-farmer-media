"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-8">
        <h3 className="text-2xl font-semibold">Got it.</h3>
        <p className="mt-2 text-muted">We’ll write back shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-white p-6 md:p-8">
      <h3 className="text-xl font-semibold">Let us know about you.</h3>
      <label className="block">
        <span className="eyebrow text-faint">full Name</span>
        <input
          required
          name="name"
          placeholder="Enter full name"
          className="mt-2 w-full rounded-2xl border border-ink/10 bg-bg px-4 py-3 outline-none focus:border-ink/30"
        />
      </label>
      <label className="block">
        <span className="eyebrow text-faint">email</span>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter email address"
          className="mt-2 w-full rounded-2xl border border-ink/10 bg-bg px-4 py-3 outline-none focus:border-ink/30"
        />
      </label>
      <label className="block">
        <span className="eyebrow text-faint">Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Let us know about your ideas or challenges"
          className="mt-2 w-full resize-none rounded-2xl border border-ink/10 bg-bg px-4 py-3 outline-none focus:border-ink/30"
        />
      </label>
      <p className="text-xs text-faint">
        By submitting, you agree to our{" "}
        <Link href="/terms" className="underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="submit"
        className="w-full rounded-full bg-ink py-3.5 font-medium text-white"
      >
        Submit
      </button>
    </form>
  );
}
