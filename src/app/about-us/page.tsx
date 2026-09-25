import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/data/people";
import { media } from "@/data/media";
import { FinalCta } from "@/components/home/HomeSections";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Shinta team — content experts who turn ideas into consistent, high-performing social content.",
  openGraph: { title: "About Us · Shinta", description: "Built by people who won’t ship content they’d skip." },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pb-8 pt-28 md:px-6 md:pt-32">
        <div className="mx-auto max-w-[760px]">
          <p className="eyebrow">about us</p>
          <Reveal>
            <h1 className="headline mt-4 text-4xl font-bold md:text-7xl">
              Built by people who won’t ship content they’d skip
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg text-muted">
              We’re the ones who pause a Reel just to analyze the hook, send TikToks to each other
              with “this is smart,” and debate why one video popped while another didn’t. That
              obsession is kind of the point.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-8">
        <Reveal className="mx-auto max-w-[760px] overflow-hidden rounded-[24px]">
          <Image
            src={media.aboutHero}
            alt="Shinta team"
            width={2560}
            height={1440}
            className="h-[240px] w-full object-cover md:h-[360px]"
            priority
          />
        </Reveal>
      </section>

      <section className="px-5 py-12 md:px-6">
        <div className="mx-auto grid max-w-[760px] gap-8 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">our vision</p>
            <h2 className="mt-3 text-3xl font-semibold">What We Stand For</h2>
            <p className="mt-4 text-muted">
              Social media moves fast. Audiences are sharp. If your content feels forced, they
              scroll past. We wanted to build a team that understands platforms from the inside
              out, and helps brands keep up without losing their voice.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">our mission</p>
            <h2 className="mt-3 text-3xl font-semibold">What We’re Here to Do</h2>
            <p className="mt-4 text-muted">
              We create short-form, scroll-first content designed for the platform, guided by real
              audience behavior and performance data. Every idea is tested, refined, and scaled
              with one goal in mind: content that people actually want to watch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-8 md:px-6">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <h2 className="headline text-4xl font-bold md:text-6xl">Building contents that matters</h2>
          </Reveal>
          <div className="mt-10 flex items-end justify-center gap-3 md:gap-5">
            {media.aboutPhones.map((src, i) => (
              <Reveal key={src} delay={i * 0.08} className={i === 0 ? "w-[28%]" : "w-[18%]"}>
                <div className="overflow-hidden rounded-[28px] bg-white shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2">
                  <Image
                    src={src}
                    alt=""
                    width={400}
                    height={720}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-6">
        <div className="mx-auto max-w-[760px]">
          <p className="eyebrow">Team</p>
          <h2 className="headline mt-3 text-4xl font-bold md:text-5xl">Small Team, Big Impact</h2>
          <p className="mt-4 max-w-xl text-muted">
            Our team comes from content creation, design, social strategy, and growth. Some of us
            have built brands. Some have scaled social accounts.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      sizes="33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-faint">{member.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
