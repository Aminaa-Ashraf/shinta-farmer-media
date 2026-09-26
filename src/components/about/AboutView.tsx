"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/data/people";
import { media } from "@/data/media";
import { FinalCta } from "@/components/home/HomeSections";
import { Reveal } from "@/components/ui/Reveal";
import { PinkScribble } from "@/components/ui/PinkScribble";
import { ZoomImage } from "@/components/motion/ZoomImage";
import { WordReveal } from "@/components/motion/WordReveal";

const ease = [0.16, 1, 0.3, 1] as const;

const collage = [
  {
    src: media.aboutCollage,
    className:
      "right-[2%] top-0 h-[26%] w-[46%] rotate-3 md:left-[68%] md:top-0 md:h-[227px] md:w-[302px] md:rotate-0",
    delay: 0.02,
  },
  {
    src: media.aboutPhones[3],
    className:
      "left-[4%] top-[10%] h-[38%] w-[30%] -rotate-6 md:left-[19.5%] md:top-[7%] md:h-[320px] md:w-[194px] md:rotate-0",
    delay: 0.06,
  },
  {
    src: media.aboutPhones[1],
    className:
      "left-[22%] top-[12%] z-20 h-[62%] w-[52%] -rotate-2 md:left-[33.5%] md:top-[17%] md:h-[729px] md:w-[410px] md:rotate-0",
    delay: 0.1,
  },
  {
    src: media.aboutCollageWide,
    className:
      "bottom-[4%] left-[2%] h-[22%] w-[42%] -rotate-3 md:bottom-auto md:left-[15%] md:top-[55.5%] md:h-[189px] md:w-[252px] md:rotate-0",
    delay: 0.16,
  },
  {
    src: media.aboutPhones[2],
    className:
      "bottom-0 right-[4%] z-10 h-[36%] w-[28%] rotate-6 md:bottom-0 md:left-[69.5%] md:top-[72%] md:h-[345px] md:w-[194px] md:rotate-0",
    delay: 0.2,
  },
];

export function AboutView() {
  return (
    <>
      <article className="overflow-x-hidden pb-8 pt-28 md:pt-32">
        <section className="px-5 md:px-[72px]">
          <div className="mx-auto max-w-[1296px]">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
              className="inline-flex rounded-full bg-pink px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink"
            >
              about us
            </motion.span>
            <WordReveal
              text="Built by people who won’t ship content they’d skip"
              className="headline mt-5 max-w-[744px] text-[40px] font-bold leading-[1.05] sm:text-[56px] md:text-[72px]"
            />
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-6 max-w-[620px] text-[17px] leading-7 text-muted"
            >
              We’re the ones who pause a Reel just to analyze the hook, send TikToks to each other
              with “this is smart,” and debate why one video popped while another didn’t. That
              obsession is kind of the point.
            </motion.p>

            <div className="mt-10">
              <ZoomImage
                src={media.aboutHero}
                alt="Shinta team"
                sizes="1280px"
                rounded="rounded-[28px] sm:rounded-[40px]"
                className="aspect-[1280/889] w-full"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-20 md:px-[72px] md:pt-28">
          <div className="mx-auto grid max-w-[1296px] items-center gap-10 md:grid-cols-[460px_410px] md:justify-between">
            <div className="relative">
              <PinkScribble className="absolute -left-8 -top-8 w-[200px] sm:-left-16 sm:-top-10 sm:w-[280px] md:w-[340px]" />
              <ZoomImage
                src={media.aboutWide}
                alt=""
                sizes="460px"
                className="aspect-[460/281] w-full"
              />
            </div>
            <Reveal>
              <p className="eyebrow text-faint">our vision</p>
              <h2 className="headline mt-3 text-[36px] font-bold sm:text-[48px] md:text-[64px]">
                What We Stand For
              </h2>
              <p className="mt-5 text-[17px] leading-7 text-muted">
                Social media moves fast. Audiences are sharp. If your content feels forced, they
                scroll past. We wanted to build a team that understands platforms from the inside
                out, and helps brands keep up without losing their voice.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-5 pt-20 md:px-[72px] md:pt-28">
          <div className="mx-auto grid max-w-[1296px] items-center gap-10 md:grid-cols-[minmax(0,520px)_390px] md:justify-between">
            <Reveal>
              <p className="eyebrow text-faint">our mission</p>
              <h2 className="headline mt-3 max-w-[520px] text-[36px] font-bold sm:text-[48px] md:text-[64px]">
                What We’re Here to Do
              </h2>
              <p className="mt-5 max-w-[520px] text-[17px] leading-7 text-muted">
                We create short-form, scroll-first content designed for the platform, guided by real
                audience behavior and performance data. Every idea is tested, refined, and scaled
                with one goal in mind: content that people actually want to watch.
              </p>
            </Reveal>
            <ZoomImage
              src={media.aboutPhones[0]}
              alt=""
              sizes="390px"
              delay={0.08}
              className="mx-auto aspect-[390/691] w-full max-w-[390px]"
            />
          </div>
        </section>

        <section className="px-5 pt-20 md:px-[72px] md:pt-28">
          <Reveal className="mx-auto max-w-[1000px] text-center">
            <h2 className="headline text-[36px] font-bold sm:text-[48px] md:text-[64px]">
              Building contents that matters
            </h2>
          </Reveal>
          <div className="relative mx-auto mt-10 h-[540px] max-w-[420px] overflow-hidden sm:h-[640px] md:h-[1231px] md:max-w-[1296px] md:overflow-visible">
            {collage.map((shot) => (
              <motion.div
                key={shot.src + shot.className}
                initial={{ opacity: 0, y: 48, scale: 1.08, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.95, delay: shot.delay, ease }}
                whileHover={{ y: -14, scale: 1.04, zIndex: 30 }}
                className={`absolute overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] ${shot.className}`}
              >
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 410px, 40vw"
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-5 pt-16 md:px-[72px] md:pt-24">
          <div className="mx-auto max-w-[1185px]">
            <Reveal>
              <p className="eyebrow text-faint">Team</p>
              <h2 className="headline mt-3 text-[36px] font-bold sm:text-[48px] md:text-[64px]">
                Small Team, Big Impact
              </h2>
              <p className="mt-5 max-w-xl text-[17px] leading-7 text-muted">
                Our team comes from content creation, design, social strategy, and growth. Some of us
                have built brands. Some have scaled social accounts.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-[118px] md:gap-y-[80px]">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={i * 0.06}>
                  <article className="group">
                    <div className="relative aspect-[316/374] overflow-hidden rounded-[20px] bg-ink/5">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                        sizes="(min-width: 768px) 316px, 50vw"
                      />
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold leading-snug md:mt-4 md:text-xl">{member.name}</h3>
                    <p className="text-sm text-faint">{member.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </article>
      <FinalCta />
    </>
  );
}
