import type { Metadata } from "next";
import { BlogView } from "@/components/blog/BlogView";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on social content, creators, and strategy, written from inside the work, not theory.",
  openGraph: { title: "Blog · Shinta", description: "Insight & Ideas from the Shinta team." },
};

export default function BlogPage() {
  return <BlogView />;
}
