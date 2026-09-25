import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Shinta handles information on this website.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-6 md:pt-36">
      <h1 className="headline text-5xl font-bold">Privacy Policy</h1>
      <p className="mt-6 text-muted">Last updated January 27, 2026</p>
      <div className="mt-10 space-y-5 text-muted">
        <p>
          This demo site stores only what you type into forms in your own browser session. No
          accounts, cards, or social logins are collected.
        </p>
        <p>
          If this clone is connected to a backend later, contact submissions (name, email, message)
          and newsletter emails would be stored to reply to you.
        </p>
        <p>
          Analytics, if added, would only track page views. We do not sell personal data.
        </p>
      </div>
    </article>
  );
}
