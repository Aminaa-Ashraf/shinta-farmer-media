import { media, shot, type MediaItem } from "./media";

export type Project = {
  slug: string;
  name: string;
  title: string;
  metric: string;
  metricLabel: string;
  year: string;
  services: string[];
  challengeTitle: string;
  challenge: string;
  approachTitle: string;
  approach: string;
  resultTitle: string;
  result: string;
  stats: { value: string; label: string }[];
  image: string;
  video: string;
  liveUrl: string;
  gallery: MediaItem[];
  color: string;
};

export const projects: Project[] = [
  {
    slug: "rama",
    name: "Rama",
    title: "Making Rama unmistakable on social",
    metric: "100%",
    metricLabel: "Follower growth",
    year: "2026",
    services: ["Short-form Content", "UGC Campaigns", "Creative Strategy"],
    challengeTitle: "Staying bold without losing momentum",
    challenge:
      "Their content needed to feel sharp and opinionated without becoming repetitive or getting buried in the feed. At the same time, Rama needed a content system that could scale without diluting their creative intent or slowing the team down.",
    approachTitle: "Content optimized for how people scroll",
    approach:
      "We started by understanding Rama’s tone, visual language, and how their audience actually behaves on social. From there, we shaped short-form content formats that felt native to Reels and TikTok while staying unmistakably Rama.",
    resultTitle: "A bolder presence, backed by growth",
    result:
      "With a clearer structure and more intentional execution, Rama’s content became more consistent and instantly recognizable. Their social presence gained momentum without losing its edge.",
    stats: [
      { value: "100%", label: "Follower growth" },
      { value: "5M+", label: "Impressions" },
      { value: "3x", label: "ROAS increase" },
    ],
    image: media.projects.rama,
    video: "https://framerusercontent.com/assets/jMhtqxySVyb8SvXhtvmPY0VkSA.mp4",
    liveUrl: "https://rama.framer.media/",
    gallery: [
      shot("image", "eH0784jTygubQiIa8fvaNl3TUvw.jpeg?width=1856&height=2240", 1856, 2240),
      shot("video", "oWhq1cxBk806dYbW4IaRjSIlJU.mp4", 440, 788),
      shot("image", "8HikBqwyvNNtEkJtpSTIHpFx6A.jpeg?width=1680&height=2400", 1680, 2400),
      shot("image", "lG0zMMTzickdGkPWdnnh3PRIwk.jpg?width=1256&height=1360", 1256, 1360),
      shot("image", "aJIpTF2fqQkuKNVdItWQTOqoJy8.jpg?width=821&height=615", 821, 615),
      shot("image", "SfcMEPxAjjNBad7zsl97ae9IDLI.jpg?width=821&height=1459", 821, 1459),
      shot("image", "eY33rLn0V9AE7SzqnTZpRTiVvAM.jpg?width=821&height=1459", 821, 1459),
      shot("image", "AFbVXtzpYR4Xr1Mv8CJoewOeKI0.jpg?width=821&height=615", 821, 615),
    ],
    color: "#FFD6F5",
  },
  {
    slug: "pandawa",
    name: "Pandawa",
    title: "Making Pandawa clear and credible",
    metric: "150%",
    metricLabel: "Follower growth",
    year: "2026",
    services: ["UGC Campaigns", "Creative Strategy", "Short-form Content"],
    challengeTitle: "Standing out in an overcrowded AI space",
    challenge:
      "Pandawa entered a market flooded with AI copy tools all claiming to be faster, smarter, and better. The challenge wasn’t building the product. It was communicating its value in a way that felt human, clear, and worth trusting.",
    approachTitle: "Clarity-first content that educates and converts",
    approach:
      "We started by distilling Pandawa’s core value into simple, repeatable messaging pillars. From there, we translated product features into short-form content that focused on real use cases, outcomes, and proof.",
    resultTitle: "Stronger messaging, stronger growth",
    result:
      "With clearer positioning and a more consistent social presence, Pandawa became easier to understand and easier to trust. Their content started attracting the right audience and guiding them smoothly from curiosity to signup.",
    stats: [
      { value: "150%", label: "Follower growth" },
      { value: "5M+", label: "Impressions" },
      { value: "3x", label: "Product Sign-ups" },
    ],
    image: media.projects.pandawa,
    video: "https://framerusercontent.com/assets/VJBu5xpeJGPwyT7Pz79ShCDr0r0.mp4",
    liveUrl: "https://pandawa.framer.ai/",
    gallery: [
      shot("image", "wESbC1K0hOg4MB7oviPDxNawMU.jpg?width=411&height=731", 411, 731),
      shot("video", "FWe4QZHYya5IW4eB939ECDAW8.mp4", 440, 788),
      shot("image", "tpzq19rWt6urpPkzhbChQCB7vZo.jpg?width=411&height=731", 411, 731),
      shot("image", "f97I4x785jif26FyDNYeQ8cn65o.png?width=1680&height=2400", 1680, 2400),
      shot("image", "PkAx5Oe6GZejnXmzmeS10WsMY.png?width=3032&height=2056", 3032, 2056),
      shot("image", "QZvUf2xz1cgQaf81vUD0yCXGZOs.png?width=1720&height=2296", 1720, 2296),
      shot("image", "WEcmfeodJPxLiXdsnh8NOeB3I.png?width=800&height=1200", 800, 1200),
      shot("image", "IomJhnlZ8H2aK66vWyymrQ7NBKs.png?width=840&height=705", 840, 705),
    ],
    color: "#D9C8FF",
  },
  {
    slug: "kresna",
    name: "Kresna",
    title: "Making Kresna adoptable, and trusted",
    metric: "+75%",
    metricLabel: "Conversion Rate",
    year: "2026",
    services: ["UGC Campaigns", "Creative Strategy", "Short-form Content"],
    challengeTitle: "Explaining complexity without killing interest",
    challenge:
      "Kresna is built for revenue teams, combining automation, AI, and workflows that replace manual, repetitive tasks. The challenge wasn’t the product’s capability. It was explaining it clearly without overwhelming the people who needed it most.",
    approachTitle: "Product-led stories that focus on outcomes",
    approach:
      "We started by mapping Kresna’s features to real revenue problems teams face every day. From there, we translated those workflows into short-form content that highlighted outcomes, not just capabilities.",
    resultTitle: "Clearer messaging, faster traction",
    result:
      "With clearer positioning and more structured content, Kresna became easier to explain and easier to trust. Their social presence shifted from feature-heavy to value-driven, helping prospects understand why it matters.",
    stats: [
      { value: "+75%", label: "Conversion Rate" },
      { value: "5M+", label: "Impressions" },
      { value: "3x", label: "Product Sign-ups" },
    ],
    image: media.projects.kresna,
    video: "https://framerusercontent.com/assets/iClEtUErlHwffZchF6QB5Sj9NY.mp4",
    liveUrl: "https://kresna.framer.ai/",
    gallery: [
      shot("image", "spFFHK2BM0ukFPLXhiulV1fTy8.jpg?width=411&height=731", 411, 731),
      shot("video", "vP66XId6zWwuSV9T2p0HKsw.mp4", 440, 788),
      shot("image", "rX9WP2MMIcUTt4pKa7tAmOxPB5s.jpg?width=411&height=731", 411, 731),
      shot("image", "Uudgqm4mIOJ5tmvqSyQYtVA0I.png?width=1200&height=1200", 1200, 1200),
      shot("image", "IOV0fiLeMyGJLlbDFbSnpfvAxg.png?width=1429&height=2400", 1429, 2400),
      shot("image", "rJEmdjCnN6FOPcYOw5P3G8yPKRo.png?width=1200&height=800", 1200, 800),
      shot("image", "yLveHkXhGmAYNeGK0ewWrU7dg.png?width=859&height=655", 859, 655),
      shot("image", "klNPWOugj1LDBvM8gQIdnlBS5P4.png?width=1800&height=3200", 1800, 3200),
    ],
    color: "#FFE8A3",
  },
  {
    slug: "sadewa",
    name: "Sadewa",
    title: "Making Sadewa’s automation easy to trust",
    metric: "2×",
    metricLabel: "Increase Leads",
    year: "2026",
    services: ["UGC Campaigns", "Creative Strategy", "Short-form Content"],
    challengeTitle: "Proving value beyond the buzzwords",
    challenge:
      "Sadewa helps businesses automate workflows that are traditionally manual, repetitive, and time-consuming. The challenge wasn’t capability. It was perception.",
    approachTitle: "Content built on real use cases",
    approach:
      "We focused on turning Sadewa’s automation work into simple, story-driven content. Instead of leading with tools or features, we highlighted problems, processes, and results.",
    resultTitle: "Stronger trust, better leads and conversion",
    result:
      "With clearer messaging and a more structured content strategy, Sadewa’s social presence became more credible and more effective. Prospects understood what Sadewa does, who it’s for, and why it matters before ever starting a conversation.",
    stats: [
      { value: "2×", label: "Increase Leads" },
      { value: "5M+", label: "Impressions" },
      { value: "3x", label: "ROAS increase" },
    ],
    image: media.projects.sadewa,
    video: "https://framerusercontent.com/assets/fVFvhIbQo5Uji0TOfFtpgXudM.mp4",
    liveUrl: "https://sadewa.framer.website/",
    gallery: [
      shot("image", "hXbAFgYyukcq7YYdlmbLUxuurWM.jpg?width=411&height=731", 411, 731),
      shot("video", "mzA7tsaeGMt2q56Ffelu4LFmEoA.mp4", 440, 788),
      shot("image", "ZeQRbACLMpiuROQwGoQ8WnEs98.jpg?width=411&height=731", 411, 731),
      shot("image", "0PyfpdelnqpVBXmeBrq2XN1HQo.png?width=904&height=1200", 904, 1200),
      shot("image", "RedMVvzDEl1fN5E1qD3HaYBk7hw.png?width=1200&height=1200", 1200, 1200),
      shot("image", "zM2AjC678mRp8g5rJUcoYJwAh3A.png?width=898&height=1481", 898, 1481),
      shot("image", "loqbTNWZl2Io2Ot2yPb2I6c.png?width=904&height=1200", 904, 1200),
      shot("image", "c48a3FQB3WtXVG6FfKlMjLeM6lo.png?width=1603&height=1080", 1603, 1080),
    ],
    color: "#C8F0E0",
  },
  {
    slug: "bima",
    name: "Bima",
    title: "Making Bima’s automation feel practical",
    metric: "100%",
    metricLabel: "Follower growth",
    year: "2026",
    services: ["UGC Campaigns", "Creative Strategy", "Short-form Content"],
    challengeTitle: "From sounds powerful to I need this",
    challenge:
      "Bima works with business owners who want to save time, reduce manual work, and scale operations using AI automation. The challenge wasn’t interest. It was clarity.",
    approachTitle: "Storytelling, not technical demos",
    approach:
      "We focused on framing Bima’s automation around everyday business problems. Instead of showcasing tools, we highlighted workflows, before-and-after scenarios, and outcomes business owners care about.",
    resultTitle: "Clear value, stronger demand and leads",
    result:
      "With clearer positioning and more grounded content, Bima’s social presence became more effective at attracting the right audience. Prospects understood what Bima offers and how it fits their business before reaching out.",
    stats: [
      { value: "100%", label: "Follower growth" },
      { value: "5M+", label: "Impressions" },
      { value: "3x", label: "ROAS increase" },
    ],
    image: media.projects.bima,
    video: "https://framerusercontent.com/assets/SqA27eI48XerrU381O6WzPbXPpw.mp4",
    liveUrl: "https://bima.framer.media/",
    gallery: [
      shot("image", "z7kub7chRjp32nIZ4xCHjQ54.jpg?width=411&height=731", 411, 731),
      shot("video", "6yeQSv6YwkdjkslGE7OJxyt6HMU.mp4", 440, 788),
      shot("image", "Idj8YoROLeb58aoDfsKOwkTBBE.jpg?width=411&height=731", 411, 731),
      shot("image", "ontH0F9R9iz2KLrJyIh78PgAgg.png?width=1594&height=1750", 1594, 1750),
      shot("image", "xgxSgoLM4rKNOzWhcpe0sfoFhiI.png?width=1744&height=1422", 1744, 1422),
      shot("image", "9k7JuzTH6oR6GFJBVHb7mTzRs.png?width=1536&height=2661", 1536, 2661),
      shot("image", "CMGVwKdY2Ya9Gl1FPc7zijfoUA.png?width=1536&height=2565", 1536, 2565),
      shot("image", "mMVqvzjBjlmYerqG1x4FEI0B0.png?width=2400&height=1792", 2400, 1792),
    ],
    color: "#FFD0C8",
  },
  {
    slug: "mandala",
    name: "Mandala",
    title: "Making Mandala’s brand thinking visible",
    metric: "100%",
    metricLabel: "Follower growth",
    year: "2026",
    services: ["UGC Campaigns", "Creative Strategy", "Short-form Content"],
    challengeTitle: "Showing the depth behind the design",
    challenge:
      "Mandala’s strength lies in strategy, storytelling, and long-term brand thinking. The challenge was making that depth visible on social without oversimplifying the work.",
    approachTitle: "Editorial-style content in brand thinking",
    approach:
      "We treated Mandala’s social presence like a living brand journal. Instead of focusing only on finished visuals, we highlighted ideas and perspectives behind the work.",
    resultTitle: "A clearer voice, a stronger presence",
    result:
      "With a more defined content direction, Mandala’s social presence became more cohesive and more expressive. Their audience connected not just with the visuals, but with the thinking behind them.",
    stats: [
      { value: "100%", label: "Follower growth" },
      { value: "5M+", label: "Impressions" },
      { value: "3x", label: "ROAS increase" },
    ],
    image: media.projects.mandala,
    video: "https://framerusercontent.com/assets/asHJJ7eTcYaYOIYA1rMQIT5KAnU.mp4",
    liveUrl: "https://mandala.framer.website/",
    gallery: [
      shot("image", "snKhOmogZzLsmdU9XkmUq6eUM5s.jpg?width=411&height=731", 411, 731),
      shot("video", "fNZjOdnp89lkKAy04Wv2nTHtKY.mp4", 440, 788),
      shot("image", "tnXYsVnY3jfZwUnFNnOfTZjgyjw.jpg?width=411&height=731", 411, 731),
      shot("image", "ZF5Teurodl2AtzZNYWczrGF0.png?width=2512&height=2720", 2512, 2720),
      shot("image", "RJW4Cu5EoDnJVCWonkZJDcIbbQ.png?width=1200&height=946", 1200, 946),
      shot("image", "z4fkJgPDMnYUR2Z2ODWJ0WJPvFg.png?width=1168&height=1460", 1168, 1460),
      shot("image", "W6RpzVkjPGyThWgFuPqBVvLk.png?width=1944&height=2352", 1944, 2352),
      shot("image", "8IH30DSIeHAiL9YJGU8NvaBtY.png?width=1136&height=852", 1136, 852),
    ],
    color: "#D6E4FF",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
