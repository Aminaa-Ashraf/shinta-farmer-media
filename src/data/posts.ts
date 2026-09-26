import { media } from "./media";

export type PostSection = { heading: string; paragraphs: string[] };

export type Post = {
  slug: string;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  excerpt: string;
  body: string[];
  sections?: PostSection[];
  image: string;
};

export const posts: Post[] = [
  {
    slug: "why-good-copywriting-matters",
    title: "Why Good Copywriting Matters a Lot",
    author: "Kristanto Mahera",
    authorImage: media.authors.kristanto,
    date: "January 27, 2026",
    excerpt:
      "Pretty visuals get the glance. The line on screen is what makes someone stay, save, or buy.",
    body: [
      "Most brands treat copy as a caption you add after the video is done. That is backwards. On social, the first line is the product.",
      "A good hook names a real tension the viewer already feels. A weak hook talks about the brand. That difference is why two videos with the same footage can be 10x apart in performance.",
      "At Shinta we write before we shoot. We test three openings, keep the one that earns the watch, and only then polish the rest of the script.",
      "If your content looks expensive and still underperforms, start with the words. Design cannot rescue a sentence nobody cares about.",
    ],
    sections: [
      {
        heading: "Social media starts with words",
        paragraphs: [
          "Before someone likes, comments, or shares they read.",
          "Copywriting is the backbone of social media content. It gives meaning to visuals and guides people on what to feel or do next.",
          "A great design may stop the scroll but the words keep people engaged.",
          "This is why social media agencies take copywriting seriously.",
        ],
      },
      {
        heading: "Clear words beat clever words",
        paragraphs: [
          "On social media clarity always wins.",
          "People scroll fast. They do not want to think too hard. If the message is confusing they move on.",
          "Social media agencies focus on simple direct language. Short sentences. Clear ideas. One message per post.",
          "Good copy feels easy to read and easy to understand.",
        ],
      },
      {
        heading: "Strong hooks grab attention fast",
        paragraphs: [
          "The first line matters most.",
          "Social media agencies spend time crafting hooks that pull people in. This could be a question, a bold statement, or a relatable problem.",
          "If the first line works people keep reading. If not the post is ignored no matter how good the rest is.",
          "Hooks are not about tricks. They are about relevance.",
        ],
      },
      {
        heading: "Copywriting supports brand voice",
        paragraphs: [
          "Every brand has a personality.",
          "Some brands sound friendly. Some sound professional. Some sound bold. Copywriting brings this voice to life.",
          "Social media agencies define tone and style early. This keeps captions consistent across all platforms.",
          "When the voice stays consistent brands feel more trustworthy and familiar.",
        ],
      },
      {
        heading: "Writing with purpose improves results",
        paragraphs: [
          "Good copy always has a goal.",
          "Sometimes the goal is engagement. Sometimes it is education. Sometimes it is clicks or messages.",
          "Social media agencies write captions with intention. Every post guides the reader toward one clear action.",
          "Purpose driven writing creates better outcomes than posting just to fill the feed.",
        ],
      },
      {
        heading: "Editing is part of the process",
        paragraphs: [
          "First drafts are rarely perfect.",
          "Agencies edit captions to remove fluff, tighten sentences, and improve flow. This makes content sharper and easier to consume.",
          "Less words often create more impact.",
          "Good copy feels natural but it is rarely accidental.",
        ],
      },
      {
        heading: "Writing works with visuals not against them",
        paragraphs: [
          "Copy and visuals should support each other.",
          "Social media agencies write captions that match the design and mood of the post. Calm visuals get calm words. Bold visuals get strong statements.",
          "When copy and visuals align content feels polished and intentional.",
        ],
      },
      {
        heading: "Why copywriting matters for your brand",
        paragraphs: [
          "If your social media posts look good but do not perform the issue may be the words.",
          "Copywriting turns attention into engagement and engagement into action.",
          "Social media agencies use clear intentional writing to help brands connect with real people not just algorithms.",
          "Strong words make strong content.",
        ],
      },
    ],
    image:
      media.posts[0],
  },
  {
    slug: "turning-ideas-into-content-plans",
    title: "Turning Social Media Ideas Into Content Plans",
    author: "Budi Pandu",
    authorImage: media.authors.budi,
    date: "January 27, 2026",
    excerpt:
      "Ideas are cheap. A calendar that a team can actually ship is the asset.",
    body: [
      "Brainstorms feel productive. Monday morning is where they die. A content plan is the bridge between a fun idea and a published post.",
      "We group ideas into formats first, not topics. Formats can be repeated. Topics get used once and forgotten.",
      "Then we assign each format a job: awareness, trust, or conversion. If the week is all awareness, the brand is entertaining, not growing.",
      "The plan should be boring to read and easy to film. That is how you stay consistent without burning the team out.",
    ],
    image:
      media.posts[1],
  },
  {
    slug: "social-media-is-never-a-one-person-job",
    title: "Why Social Media Is Never a One Person Job",
    author: "Karina Kumala",
    authorImage: media.authors.karina,
    date: "January 27, 2026",
    excerpt:
      "One talented generalist can post. A small specialist team can grow.",
    body: [
      "Strategy, filming, editing, community, and reporting are different crafts. Asking one person to do all five is how accounts stall.",
      "The hidden cost is not quality. It is decision speed. When one person owns everything, every post waits on their energy.",
      "You do not need a huge agency. You need clear roles: who decides the idea, who makes it, who ships it, who reads the numbers.",
      "That is the model we run with clients. Fewer meetings. Faster loops. Better content.",
    ],
    image:
      media.posts[2],
  },
  {
    slug: "how-a-social-media-agency-helps-brands",
    title: "How a Social Media Agency Helps Brands",
    author: "Kristanto Mahera",
    authorImage: media.authors.kristanto,
    date: "January 27, 2026",
    excerpt:
      "An agency is not extra posts. It is a system for learning what your audience rewards.",
    body: [
      "The useful agency does three things: it finds the formats that work, it produces them on a rhythm, and it kills what does not perform.",
      "That last part is the one most in-house teams skip. Killing work feels wasteful. It is how you protect the budget.",
      "We also bring pattern recognition from other brands. You should not have to discover every hook from zero.",
      "Hire for the system, not the aesthetics. Pretty is easy. Repeatable growth is the product.",
    ],
    image:
      media.posts[3],
  },
  {
    slug: "improve-social-content-quality",
    title: "How to Improve Social Media Content Quality",
    author: "Budi Pandu",
    authorImage: media.authors.budi,
    date: "January 27, 2026",
    excerpt:
      "Quality is not higher production. It is a stronger first second and a clearer point.",
    body: [
      "Upgrade the opening frame before you upgrade the camera. Viewers decide with their thumb, not a color grade.",
      "Cut anything that does not move the idea forward. Most “cinematic” brand films are just slow.",
      "Use real people and real language. Native content beats studio content on every platform we run.",
      "Then measure. If quality is up and performance is flat, you improved the wrong thing.",
    ],
    image:
      media.posts[4],
  },
  {
    slug: "podcasts-help-brands-build-trust",
    title: "How Podcasts Help Brands Build Trust",
    author: "Karina Kumala",
    authorImage: media.authors.karina,
    date: "January 27, 2026",
    excerpt:
      "Long form is not the opposite of short form. It is the source file.",
    body: [
      "A podcast gives you hours of proof, stories, and language you can clip into the feed.",
      "Trust builds when people hear you think, not when they see a polished ad. That is why founders who talk weekly feel closer than brands that only post products.",
      "We clip the sharpest minutes, then send viewers back to the full conversation if they want more.",
      "Used this way, a podcast is a trust engine and a content engine at the same time.",
    ],
    image:
      media.posts[5],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3) {
  const rest = posts.filter((p) => p.slug !== slug);
  return rest.slice(0, count);
}
