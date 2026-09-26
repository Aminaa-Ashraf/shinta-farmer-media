"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getRelatedPosts, type Post } from "@/data/posts";
import { FinalCta } from "@/components/home/HomeSections";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function BlogArticle({ post }: { post: Post }) {
  const related = getRelatedPosts(post.slug);
  const sections = post.sections;

  return (
    <>
      <article className="overflow-x-hidden px-5 pb-12 pt-28 md:px-[72px] md:pt-32">
        <div className="mx-auto max-w-[840px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="eyebrow text-faint"
          >
            {post.date}
          </motion.p>
          <WordReveal
            text={post.title}
            className="headline mt-4 text-[40px] font-bold leading-[1.05] sm:text-[52px] md:text-[64px]"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-5 flex items-center gap-3"
          >
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-ink/10">
              <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
            </span>
            <p className="text-sm text-muted">
              By <span className="font-medium text-ink">{post.author}</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.14, ease }}
            className="relative mt-8 aspect-[840/526] overflow-hidden rounded-[28px] bg-ink/5"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.16 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.3, ease }}
            >
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </motion.div>
          </motion.div>
          <div className="mt-12 space-y-10">
            {sections
              ? sections.map((section, i) => (
                  <Reveal key={section.heading} delay={i * 0.03}>
                    <h2 className="headline text-[28px] font-bold md:text-[40px]">{section.heading}</h2>
                    <div className="mt-4 space-y-4 text-lg leading-8 text-muted">
                      {section.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </Reveal>
                ))
              : post.body.map((p, i) => (
                  <Reveal key={p} delay={i * 0.04}>
                    <p className="text-lg leading-8 text-muted">{p}</p>
                  </Reveal>
                ))}
          </div>
        </div>
      </article>

      <section className="px-5 pb-8 md:px-[72px]">
        <div className="mx-auto max-w-[1296px]">
          <Reveal>
            <p className="eyebrow text-faint">Blog</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 className="headline text-[32px] font-bold sm:text-[40px] md:text-[52px]">
                Insight & Ideas
              </h2>
              <Button href="/blog" variant="ghost">
                More Articles
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.06}>
                <Link href={`/blog/${item.slug}`} className="group block">
                  <div className="relative aspect-[329/246] overflow-hidden rounded-[20px] bg-ink/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                      sizes="329px"
                    />
                  </div>
                  <p className="mt-4 eyebrow text-faint">{item.date}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">By {item.author}</p>
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
