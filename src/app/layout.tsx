import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { PageLoader } from "@/components/layout/PageLoader";
import { site } from "@/data/site";
import { media } from "@/data/media";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shinta - Social Media Marketing Agency",
    template: "%s · Shinta",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Shinta",
    "UGC",
    "social media marketing",
    "short form content",
    "influencer marketing",
    "social media management",
    "content agency",
  ],
  authors: [{ name: "Shinta" }],
  creator: "Shinta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Shinta",
    title: "Shinta - Social Media Marketing Agency",
    description: site.description,
    images: [{ url: media.heroPosters[0], width: 906, height: 1200, alt: site.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinta - Social Media Marketing Agency",
    description: site.description,
    images: [media.heroPosters[0]],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  url: siteUrl,
  slogan: site.tagline,
  areaServed: "Worldwide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageLoader />
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
