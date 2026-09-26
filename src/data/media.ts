export const img = (id: string) => `https://framerusercontent.com/images/${id}`;
export const vid = (id: string) => `https://framerusercontent.com/assets/${id}`;

export type MediaItem = {
  type: "image" | "video";
  src: string;
  width: number;
  height: number;
};

export const shot = (
  type: "image" | "video",
  id: string,
  width: number,
  height: number,
): MediaItem => ({
  type,
  src: type === "video" ? vid(id) : img(id),
  width,
  height,
});

export const media = {
  heroVideos: [
    vid("ifg3JJylN40L3Ktt7fc7uhNA.mp4"),
    vid("W2Rujgt14CX4MJRHRhuoYaS4YQc.mp4"),
    vid("0xZ363kYUXAzmMvtmoGEUWzbm40.mp4"),
  ],
  heroPosters: [
    img("BTdwgsLgaju5ECPSXgxQTc1YHo0.jpeg?width=1536&height=2752"),
    img("xU93mJqJ0TqKc1yS8RDOHXbdBcY.jpeg?width=1536&height=2752"),
    img("E4n82ePYz4GJL2naWy5tew9mE.jpeg?width=906&height=1200"),
  ],
  logos: [
    img("Z7GDJBWdmNR1WwCk7f5T9FKm8mI.png?width=393&height=128"),
    img("AnOBAzaJBNTsO6eVhbHxVrnUaUM.png?width=568&height=128"),
    img("S6wPTNIZYXCqDeL26kzsHrnBxxQ.png?width=548&height=128"),
    img("zi98qpLRPEfMh2jGGwmXbSyd6zg.png?width=568&height=128"),
    img("74Sjr6NvsDyK2XEWz9ShuBvPI.png?width=584&height=128"),
  ],
  projects: {
    rama: img("RipSn2SQ7Ar9lyNjRRBHwFuQnQM.jpg?width=1224&height=1296"),
    pandawa: img("DSkqddojWvdnF4RlswuktLEti8.jpg?width=1224&height=1296"),
    kresna: img("eHFOiTmQL9qIAHpKb3CuCogqU.jpg?width=1224&height=1296"),
    sadewa: img("HqsNJ2bapyQeDfuIV3HrcBByCg.jpg?width=1224&height=1296"),
    bima: img("tG8lmAK8JTIs1D1NUIQ8K7sXVkI.jpg?width=1224&height=1296"),
    mandala: img("HcexCdtIoMF2Di8sxIz5oMBgm7I.jpg?width=1224&height=1296"),
  },
  mission: img("RipSn2SQ7Ar9lyNjRRBHwFuQnQM.jpg?width=1224&height=1296"),
  aboutHero: img("hzZ9ghLbN7IvefHpvkH2HPdA1v8.jpg?width=2560&height=1440"),
  aboutWide: img("KoMtUoLES7vlHd9VwBnDWbuL1QI.jpg?width=1040&height=640"),
  aboutPhones: [
    img("I9gjbU49oI1z2W6S8JIxYnpghI.png?width=1440&height=2560"),
    img("R8rscLVO3Wd4Lj5D7CkTKZSam7c.jpg?width=820&height=1458"),
    img("HdP9iBKnVQ0lF1SX37cXdSc.jpg?width=388&height=690"),
    img("kIgTrrpKuzeZcJwAbzBc17wV6MM.jpg?width=388&height=690"),
  ],
  aboutCollage: img("JqqvWFwSCdI8Dk0bBfoedZXhuUk.jpg?width=604&height=454"),
  aboutCollageWide: img("evhfk0zl2rQQgVSe0xwEdKnVuqk.jpg?width=504&height=378"),
  team: [
    img("zcV8VMLW2UaiLm9AJM8MPiwdlw.jpg?width=790&height=936"),
    img("o6duUa9OkHlf9DhOgeIlWNcRGY.jpg?width=790&height=936"),
    img("Q4PeZp2Qx7rmA1hYjx2r2TeGlQ.jpg?width=790&height=936"),
    img("DDCUixRHvKkrC3Ij9VowKTydSFE.jpg?width=790&height=936"),
    img("5gXitsm3iI0zoj6mry7iO1T3Xo.jpg?width=790&height=936"),
    img("ZsEIaooNaf9TIZjuTEevCpMqEe8.jpg?width=790&height=936"),
  ],
  faces: [
    img("V0ZV4pxwSSUCSBO2VWF8vTHgAGY.jpg?width=672&height=900"),
    img("e8YHKjEmqhxqPxUY8ddkvCPbk.jpg?width=672&height=900"),
    img("A3uHBButjxd7WzDnkG9DYBvSODs.jpg?width=672&height=900"),
    img("JxwU3O7pozLmbOoniwdpe5LGAk.jpg?width=672&height=900"),
    img("eyiXeMBMEUOtTZVM5UbR6v4Ct7I.png?width=1194&height=1599"),
  ],
  footerPhoto: img("Ng72SfQHklNByTeJTtQUtBwT8.png?width=1152&height=896"),
  clientLogos: {
    rama: img("XFuGWbyySBEBlG3uqewi29JB94.png?width=877&height=533"),
    pandawa: img("AnOBAzaJBNTsO6eVhbHxVrnUaUM.png?width=568&height=128"),
    kresna: img("91emvUr6MxW0mmNdjgIXX7slCu8.png?width=485&height=120"),
    sadewa: img("S6wPTNIZYXCqDeL26kzsHrnBxxQ.png?width=548&height=128"),
    bima: img("Z7GDJBWdmNR1WwCk7f5T9FKm8mI.png?width=393&height=128"),
    mandala: img("zi98qpLRPEfMh2jGGwmXbSyd6zg.png?width=568&height=128"),
  },
  wordmark: img("osXTQmLx6RntsX7CfW3A94lUHo.png?width=1000&height=267"),
  madeBy: img("3J2iAobW3FSPLnwwcW1KCqr2pwM.png?width=1000&height=268"),
  missionVideos: [
    vid("Lz2KK6tJvaSwPqt8CILUTfpWU.mp4"),
    vid("aPqDWQqPVRqGBPXrnqHff4IYY.mp4"),
  ],
  testimonialVideo: vid("XTCdwiXD6G6XZHNxQZiGuoIg.mp4"),
  testimonialPoster: img("rShi7FRK1A3MC8sVAnUdEZj0TiA.jpeg?width=1696&height=2528"),
  comparisonImages: [
    img("IQt3n4yCfVlf2LjLAgR6UTG97I.jpg?width=954&height=1084"),
    img("QEvXFU7LLQGido9vvsIBugEh0.jpg?width=958&height=1084"),
  ],
  worksShots: [
    { src: img("Uudgqm4mIOJ5tmvqSyQYtVA0I.png?width=1200&height=1200"), w: 343, h: 332 },
    { src: img("f97I4x785jif26FyDNYeQ8cn65o.png?width=1680&height=2400"), w: 308, h: 242 },
    { src: img("lG0zMMTzickdGkPWdnnh3PRIwk.jpg?width=1256&height=1360"), w: 333, h: 287 },
    { src: img("ZF5Teurodl2AtzZNYWczrGF0.png?width=2512&height=2720"), w: 332, h: 343 },
    { src: img("ontH0F9R9iz2KLrJyIh78PgAgg.png?width=1594&height=1750"), w: 287, h: 333 },
    { src: img("0PyfpdelnqpVBXmeBrq2XN1HQo.png?width=904&height=1200"), w: 242, h: 308 },
  ],
  serviceImages: [
    img("IQt3n4yCfVlf2LjLAgR6UTG97I.jpg?width=954&height=1084"),
    img("QEvXFU7LLQGido9vvsIBugEh0.jpg?width=958&height=1084"),
    img("awOeL0yKNFgvqogsdV27KvNegc.jpg?width=958&height=1084"),
    img("egBQUlNKV8uJcmRSjCVVWJPTG9I.jpg?width=958&height=1084"),
  ],
  posts: [
    img("cNhxMCAtBg1pCkLonOn6wBwPzA.jpg?width=822&height=616"),
    img("r2x5juiviagvZesFV13a9pVaR4.jpg?width=822&height=616"),
    img("LjqUtvyQXNfWUeK0iqaOyoetDg.jpg?width=822&height=616"),
    img("vrsTB9iCMqt035VA9x2UzaBTWY.jpg?width=822&height=616"),
    img("hFtuQt4dJrspgu3oorlstBaf7BI.jpg?width=822&height=616"),
    img("F0HhyUWRZDTVCNjXeLfuEqNYpkk.jpg?width=822&height=616"),
  ],
  authors: {
    kristanto: img("j2SDQqAkQ3arXM8IQ1jnCBB6S0.png?width=1200&height=1200"),
    budi: img("QJRZerULrXfNrY08IEi5N1xnB0.png?width=800&height=800"),
    karina: img("3TCXEPjCw7AbpdVqOwb0J3keQNA.png?width=1032&height=1032"),
  },
};
