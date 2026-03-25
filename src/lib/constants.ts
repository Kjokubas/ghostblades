export const SITE_CONFIG = {
  name: "Ghost Blades",
  description:
    "Swedish premium destination for handcrafted katanas, wakizashi and tanto. Forged from high-quality carbon steel and folded steel.",
  url: "https://ghostblades.se",
  ogImage: "/og-image.jpg",
  currency: "SEK",
  locale: "sv-SE",
} as const;

export const BRAND = {
  tagline: "Handcrafted Japanese Swords",
  announcementText: "Free Worldwide Shipping on All Orders",
  japaneseTagline: "\u5e7d\u970a\u306e\u5203", // Ghost Blades in Japanese
} as const;

export const TIERS = {
  Core: {
    label: "Core",
    description: "Premium entry-level — T10 carbon steel, hand-sharpened",
  },
  Heritage: {
    label: "Heritage",
    description: "Mid-tier — Clay tempered, real hamon, premium fittings",
  },
  Premium: {
    label: "Premium",
    description: "Flagship — Folded steel, custom forged, museum-quality",
  },
} as const;
