import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQ } from "@/components/home/HomeSections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call with Shinta. Let’s talk content that actually works.",
  openGraph: { title: "Contact · Shinta", description: "Share your goals and we’ll help shape content that performs." },
};

export default function ContactPage() {
  return (
    <section className="px-5 pb-16 pt-28 md:px-6 md:pt-32">
      <div className="mx-auto grid max-w-[860px] gap-10 md:grid-cols-2">
        <div>
          <h1 className="headline text-4xl font-bold md:text-6xl">
            Let’s talk content that actually works.
          </h1>
          <p className="mt-5 text-lg text-muted">
            Share your goals and we’ll help shape content that fits how people actually scroll today.
          </p>
          <p className="mt-6 eyebrow text-faint">
            {site.brandsHelped} Brands leveled up their content game
          </p>
        </div>
        <ContactForm />
      </div>
      <FAQ />
    </section>
  );
}
