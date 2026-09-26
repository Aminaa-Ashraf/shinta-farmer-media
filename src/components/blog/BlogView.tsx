"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { FinalCta } from "@/components/home/HomeSections";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function BlogView() {
  return (
    <>
      <section className="overflow-x-hidden px-5 pb-12 pt-28 md:px-[72px] md:pt-32">
        <div className="mx-auto max-w-[1296px]">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="inline-flex rounded-full bg-pink px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink"
          >
            blog
          </motion.span>
          <WordReveal
            text="Insight & Ideas"
            className="headline mt-5 text-[40px] font-bold leading-[1.05] sm:text-[56px] md:text-[72px]"
          />
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-5 max-w-2xl text-[17px] leading-7 text-muted"
          >
            Insights on social content, creators, and strategy, written from inside the work, not
            theory.
          </motion.p>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.07}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[605/453] overflow-hidden rounded-[24px] bg-ink/5">
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1.14 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.15, ease }}
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                        sizes="(min-width: 1024px) 420px, 50vw"
                      />
                    </motion.div>
                  </div>
                  <p className="mt-4 eyebrow text-faint">{post.date}</p>
                  <h2 className="mt-2 text-[22px] font-semibold leading-snug transition-colors group-hover:text-ink/70 md:text-[32px]">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">By {post.author}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
