export interface Collection {
  handle: string;
  title: string;
  japaneseName: string;
  description: string;
  image: string;
  productCount: number;
}

export const collections: Collection[] = [
  {
    handle: "katana",
    title: "Katana",
    japaneseName: "\u5200",
    description:
      "The iconic Japanese longsword. Our katanas range from battle-ready Core models to museum-quality Premium masterpieces, each hand-forged with traditional techniques.",
    image: "/images/collections/hell-fire-katana-ghost-blades-folded-steel-hamon-blade-tsuka-saya.webp",
    productCount: 68,
  },
  {
    handle: "wakizashi",
    title: "Wakizashi",
    japaneseName: "\u8107\u5dee",
    description:
      "The companion sword of the samurai. Shorter and faster than the katana, our wakizashi are crafted with equal care and make stunning standalone pieces or daisho pairs.",
    image: "/images/collections/hell-fire-wakizashi-ghost-blades-folded-steel-sanmai-hamon-blade-tsuka-saya.webp",
    productCount: 12,
  },
  {
    handle: "tanto",
    title: "Tanto",
    japaneseName: "\u77ed\u5200",
    description:
      "The Japanese short blade. Compact, elegant, and deadly — our tanto are perfect for collectors seeking a premium desk piece or a starter sword at an accessible price.",
    image: "/images/collections/last_measure_tanto_tsuba_handle_blade_saya.webp",
    productCount: 10,
  },
];

export function getCollectionByHandle(
  handle: string
): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}
