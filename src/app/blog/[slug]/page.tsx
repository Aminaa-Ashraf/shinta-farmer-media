import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { FinalCta } from "@/components/home/HomeSections";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · Shinta`,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="px-5 pb-12 pt-32 md:px-6">
        <div className="mx-auto max-w-[680px]">
          <p className="eyebrow">{post.date}</p>
          <h1 className="headline mt-4 text-4xl font-bold md:text-6xl">{post.title}</h1>
          <p className="mt-4 text-muted">By {post.author}</p>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[22px]">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
          <div className="mt-10 space-y-5 text-lg leading-8 text-muted">
            {post.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
