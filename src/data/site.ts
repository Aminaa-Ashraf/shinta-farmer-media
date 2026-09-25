import { media } from "./media";

export const site = {
  name: "Shinta",
  tagline: "UGC that grows your brand.",
  description:
    "Shinta helps brands create content that truly connects with their audience, consistently and strategically across social media.",
  email: "contact@shinta.com",
  phone: "+12 345 678",
  brandsHelped: "30+",
};

export const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about-us", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/404", label: "404" },
];

export const footerLegal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Condition" },
];

export const socials = [
  { href: "https://facebook.com/", label: "Facebook" },
  { href: "https://x.com/", label: "X" },
  { href: "https://instagram.com/", label: "Instagram" },
];

export const servicesTicker = [
  "short form content",
  "social media management",
  "influencer marketing",
];

export const painPoints = [
  "Influencer collaborations that bring views but no results",
  "Posting consistently but getting low engagement",
  "Content looks “nice”\nbut doesn’t perform",
  "Campaigns feel\nforced and salesy",
  "No clear content\ndirection or strategy",
];

export const processSteps = [
  {
    n: "01",
    title: "Planing",
    text: "We do the research so it’s likely to go viral.",
    color: "#ffa8f2",
    icon: "chat" as const,
  },
  {
    n: "02",
    title: "Contents",
    text: "We create native content that fits the platform.",
    color: "#aa94ff",
    icon: "play" as const,
  },
  {
    n: "03",
    title: "Optimization",
    text: "We track performance and refine what works.",
    color: "#d0cac6",
    icon: "check" as const,
  },
  {
    n: "04",
    title: "Scale",
    text: "We push what performs and drop what doesn’t.",
    color: "#9ef483",
    icon: "chart" as const,
  },
];

export const services = [
  {
    n: "01",
    title: "Short-Form Production",
    text: "We produce high impact short form videos designed for how people actually consume content on social platforms. Built to grab attention.",
    stat: "242+",
    statLabel: "Long Form Videos Clipped",
    image: media.serviceImages[0],
  },
  {
    n: "02",
    title: "Creator & UGC Campaigns",
    text: "We turn data into direction. By analyzing performance, we refine formats, hooks, and storytelling to scale what works and cut what doesn’t.",
    stat: "50M+",
    statLabel: "Total Impressions",
    image: media.serviceImages[1],
  },
  {
    n: "03",
    title: "Social Media Management",
    text: "From content planning to publishing and optimization, we manage your social presence with consistency and intent. Relax and we handle the rest.",
    stat: "50M+",
    statLabel: "Total Impressions",
    image: media.serviceImages[2],
  },
  {
    n: "04",
    title: "Performance Creative Strategy",
    text: "We research, test, iterate, and scale creative based on real world data. We’re the first agency that doesn’t guess, no vibes, just what performs.",
    stat: "150%",
    statLabel: "Increase in Leads",
    image: media.serviceImages[3],
  },
];

export const comparison = {
  others: [
    "Ad-like, brand-heavy",
    "Posting volume",
    "Based on follower count",
    "Trend-chasing",
    "Basic metrics",
  ],
  shinta: [
    "Platform-native, organic-first",
    "Engagement & relevance",
    "Performance-based selection",
    "Strategic & brand-aligned",
    "Clear insights & learnings",
  ],
};

export const plans = [
  {
    name: "Starter",
    blurb: "Best for early-stage brands & campaigns",
    monthly: 3999,
    yearly: 3199,
    href: "/contact",
    popular: false,
    features: [
      "Content strategy for 1 platform",
      "8–12 contents / month",
      "Copywriting + visual direction",
      "Basic performance insights",
      "1 revision round",
    ],
  },
  {
    name: "Agency",
    blurb: "Best for mid to big brands & campaigns",
    monthly: 5999,
    yearly: 4799,
    href: "/contact",
    popular: true,
    features: [
      "Content strategy for 3 platforms",
      "18-20 contents / month",
      "Copywriting + visual direction",
      "Full performance insights",
      "Unlimited revision",
    ],
  },
];

export const faqs = [
  {
    q: "What does your social media agency do?",
    a: "We help brands grow on social media. We plan content, design posts, write captions, and manage accounts. Our goal is to help you get more attention, more engagement, and more leads.",
  },
  {
    q: "Which social media platforms do you manage?",
    a: "We manage Instagram, TikTok, X, LinkedIn, and Facebook. If your audience hangs out there, we can help you show up the right way.",
  },
  {
    q: "Do you create the content or do we need to provide it?",
    a: "We handle everything. Strategy, ideas, visuals, captions, and posting. If you already have content, we can also optimize and improve it.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see early growth in the first one to three months. Real results come from consistency, testing, and learning what your audience loves.",
  },
  {
    q: "Who is this service best for?",
    a: "This is perfect for founders, startups, and brands that want to grow online but do not have time to manage social media daily.",
  },
];
