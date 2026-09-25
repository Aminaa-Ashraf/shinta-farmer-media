import { Hero } from "@/components/home/Hero";
import {
  BlogPreview,
  Comparison,
  FAQ,
  FeaturedProjects,
  FinalCta,
  LogoMarquee,
  Mission,
  PainPoints,
  Pricing,
  Process,
  SeeMoreWorks,
  Services,
  TeamPreview,
  Testimonials,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <PainPoints />
      <Mission />
      <FeaturedProjects />
      <SeeMoreWorks />
      <Services />
      <Comparison />
      <Process />
      <Testimonials />
      <TeamPreview />
      <Pricing />
      <BlogPreview />
      <FAQ />
      <FinalCta />
    </>
  );
}
