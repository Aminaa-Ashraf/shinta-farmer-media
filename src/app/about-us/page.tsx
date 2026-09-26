import type { Metadata } from "next";
import { AboutView } from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Shinta team — content experts who turn ideas into consistent, high-performing social content.",
  openGraph: { title: "About Us · Shinta", description: "Built by people who won’t ship content they’d skip." },
};

export default function AboutPage() {
  return <AboutView />;
}
