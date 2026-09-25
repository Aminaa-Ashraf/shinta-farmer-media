import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { FinalCta } from "@/components/home/HomeSections";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on social content, creators, and strategy, written from inside the work, not theory.",
  openGraph: { title: "Blog · Shinta", description: "Insights & ideas from the Shinta team." },
};

export default function BlogPage() {
  return (
    <>
      <section className="px-5 pb-12 pt-28 md:px-6 md:pt-32">
        <div className="mx-auto max-w-[860px]">
          <p className="eyebrow">blog</p>
          <h1 className="headline mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">Insights & Ideas</h1>
          <p className="mt-5 max-w-2xl text-base text-muted">
            Insights on social content, creators, and strategy, written from inside the work, not
            theory.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    sizes="50vw"
                  />
                </div>
                <p className="mt-4 eyebrow text-faint">{post.date}</p>
                <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-muted">By {post.author}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
