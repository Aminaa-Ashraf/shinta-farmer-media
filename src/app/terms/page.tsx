import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Condition",
  description: "Terms of use for the Shinta website.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-6 md:pt-36">
      <h1 className="headline text-5xl font-bold">Terms & Condition</h1>
      <p className="mt-6 text-muted">Last updated January 27, 2026</p>
      <div className="mt-10 space-y-5 text-muted">
        <p>
          This website is a frontend recreation of a social media agency marketing site for learning
          and portfolio use. Service descriptions and prices are sample content.
        </p>
        <p>
          Booking a call or submitting a form does not create a paid contract until a real backend
          and agreement are added.
        </p>
      </div>
    </article>
  );
}
