export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  tier: "Core" | "Heritage" | "Premium";
  collection: "katana" | "wakizashi" | "tanto";
  images: string[];
  steel: string;
  hamon: string;
  length: string;
  weight: string;
  features: string[];
  inStock: boolean;
  isNew: boolean;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  // --- KATANAS ---
  {
    id: "kat-001",
    handle: "black-static-katana",
    title: "Black Static Katana",
    description:
      "A blade forged in darkness. The Black Static features a deep black saya with subtle gold menuki, paired with a T10 clay-tempered blade that reveals a striking natural hamon. Built for collectors who appreciate understated power.",
    price: 4499,
    compareAtPrice: 5499,
    currency: "SEK",
    tier: "Heritage",
    collection: "katana",
    images: [
      "/images/products/black-static-katana-ghost-blades-unsheathed_a16af5b0-6dba-4127-8e03-e43b75e302d1.webp",
    ],
    steel: "T10 Clay Tempered",
    hamon: "Gunome",
    length: "104cm overall / 72cm blade",
    weight: "1.1kg",
    features: [
      "Full tang construction",
      "Real ray skin (same) handle wrap",
      "Hand-sharpened edge",
      "Clay tempered with real hamon",
      "Cotton sword bag included",
    ],
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 47,
  },
  {
    id: "kat-002",
    handle: "epic-fury-katana",
    title: "Epic Fury Katana",
    description:
      "Unleash the storm. The Epic Fury is an aggressive, battle-ready katana with a blackened blade, crimson cord wrap, and a tsuba depicting fierce warriors. A true centerpiece for any collection.",
    price: 7999,
    currency: "SEK",
    tier: "Premium",
    collection: "katana",
    images: [
      "/images/products/epic-fury-katana-ghost-blades-unsheathed.webp",
    ],
    steel: "Folded Steel (13 folds)",
    hamon: "Notare",
    length: "105cm overall / 73cm blade",
    weight: "1.15kg",
    features: [
      "13-fold pattern-welded steel",
      "Dragon motif tsuba and menuki",
      "Double-pegged mekugi",
      "Premium lacquered saya",
      "Silk sword bag and display stand",
    ],
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 23,
  },
  {
    id: "wak-003",
    handle: "electric-flames-wakizashi",
    title: "Electric Flames Wakizashi",
    description:
      "A wakizashi that blazes with intensity. The Electric Flames features a fiery design theme with premium folded steel and a mesmerizing grain pattern. A stunning companion blade or standalone display piece.",
    price: 5999,
    currency: "SEK",
    tier: "Premium",
    collection: "wakizashi",
    images: [
      "/images/products/electric_flames_wakizashi_overview_8f4d5689-5e7c-4d88-a356-9ca54b3c9f2e.webp",
    ],
    steel: "Folded Steel (13 folds)",
    hamon: "Choji Midare",
    length: "69cm overall / 46cm blade",
    weight: "0.7kg",
    features: [
      "Traditional tamahagane-style forging",
      "Gold-plated dragon tsuba",
      "Genuine ray skin with silk ito wrap",
      "Hand-lacquered saya with gold inlay",
      "Wooden display stand and certificate",
    ],
    inStock: true,
    isNew: false,
    rating: 5.0,
    reviewCount: 12,
  },
  {
    id: "kat-004",
    handle: "mystic-mist-katana",
    title: "Mystic Mist Katana",
    description:
      "Ethereal and mysterious. The Mystic Mist features a unique blue-grey wrapping with silver fittings, and a T10 blade with a beautiful suguha hamon that catches the light like morning fog.",
    price: 4999,
    currency: "SEK",
    tier: "Heritage",
    collection: "katana",
    images: [
      "https://picsum.photos/seed/mist1/800/800",
      "https://picsum.photos/seed/mist2/800/800",
      "https://picsum.photos/seed/mist3/800/800",
    ],
    steel: "T10 Clay Tempered",
    hamon: "Suguha",
    length: "103cm overall / 71cm blade",
    weight: "1.08kg",
    features: [
      "Full tang construction",
      "Silver-plated tsuba with mist motif",
      "Hand-sharpened to razor edge",
      "Clay tempered with straight hamon",
      "Cotton sword bag included",
    ],
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 31,
  },
  {
    id: "kat-005",
    handle: "green-goblin-katana",
    title: "Green Goblin Katana",
    description:
      "Bold and unapologetic. The Green Goblin stands out with its striking emerald green cord wrap and darkened iron fittings. A Core tier blade that delivers serious cutting performance at an accessible price.",
    price: 3499,
    currency: "SEK",
    tier: "Core",
    collection: "katana",
    images: [
      "https://picsum.photos/seed/goblin1/800/800",
      "https://picsum.photos/seed/goblin2/800/800",
      "https://picsum.photos/seed/goblin3/800/800",
    ],
    steel: "1095 High Carbon Steel",
    hamon: "Wire-brushed",
    length: "103cm overall / 70cm blade",
    weight: "1.12kg",
    features: [
      "Full tang 1095 carbon steel",
      "Emerald green cotton ito",
      "Iron tsuba with leaf design",
      "Hand-sharpened edge",
      "Cotton sword bag included",
    ],
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviewCount: 62,
  },
  {
    id: "tan-003",
    handle: "clout-killa-tanto",
    title: "Clout Killa Tanto",
    description:
      "Compact and deadly. The Clout Killa tanto combines aggressive styling with premium craftsmanship. A T10 clay-tempered blade with a clean hamon line, housed in sleek fittings. The ultimate desk piece for collectors.",
    price: 2799,
    currency: "SEK",
    tier: "Heritage",
    collection: "tanto",
    images: [
      "/images/products/clout_killa_tanto_overview.webp",
    ],
    steel: "T10 Clay Tempered",
    hamon: "Notare",
    length: "38cm overall / 27cm blade",
    weight: "0.4kg",
    features: [
      "T10 clay tempered blade",
      "Genuine ray skin handle",
      "Premium fittings throughout",
      "Hand-sharpened edge",
      "Display stand included",
    ],
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 19,
  },
  {
    id: "tan-004",
    handle: "red-flag-tanto",
    title: "Red Flag Tanto",
    description:
      "Bold and unmistakable. The Red Flag tanto features a striking crimson design theme with a high-carbon steel blade. An aggressive compact blade that commands attention on any display stand.",
    price: 2499,
    currency: "SEK",
    tier: "Core",
    collection: "tanto",
    images: [
      "/images/products/red_flag_tanto_overview.webp",
    ],
    steel: "1095 High Carbon Steel",
    hamon: "Wire-brushed",
    length: "37cm overall / 26cm blade",
    weight: "0.38kg",
    features: [
      "Full tang 1095 carbon steel",
      "Crimson red design theme",
      "Hand-sharpened edge",
      "Iron tsuba with red accents",
      "Cotton sword bag included",
    ],
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 15,
  },

  // --- WAKIZASHI ---
  {
    id: "wak-001",
    handle: "black-mirror-wakizashi",
    title: "Black Mirror Wakizashi",
    description:
      "Dark reflections. The Black Mirror wakizashi features a sleek all-black aesthetic with a mirror-polished T10 blade. A shorter, faster blade for close-quarters elegance and a stunning display piece.",
    price: 3299,
    currency: "SEK",
    tier: "Heritage",
    collection: "wakizashi",
    images: [
      "/images/products/black_mirror_wakizashi_overview.webp",
    ],
    steel: "T10 Clay Tempered",
    hamon: "Gunome",
    length: "68cm overall / 45cm blade",
    weight: "0.7kg",
    features: [
      "Full tang T10 steel",
      "Matching Shadow Blade aesthetics",
      "Clay tempered with real hamon",
      "Hand-sharpened edge",
      "Cotton sword bag included",
    ],
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 22,
  },
  {
    id: "wak-002",
    handle: "crimson-edge-wakizashi",
    title: "Crimson Edge Wakizashi",
    description:
      "A fierce and elegant companion sword. The Crimson Edge wakizashi features a striking red-themed design with a high-performance 1095 blade. Perfect as a standalone display piece or paired with any of our katanas.",
    price: 2799,
    currency: "SEK",
    tier: "Core",
    collection: "wakizashi",
    images: [
      "https://picsum.photos/seed/wakcrim1/800/800",
    ],
    steel: "1095 High Carbon Steel",
    hamon: "Wire-brushed",
    length: "70cm overall / 47cm blade",
    weight: "0.75kg",
    features: [
      "Full tang 1095 carbon steel",
      "Crimson ito with black ray skin",
      "Iron tsuba with maple leaf design",
      "Hand-sharpened edge",
      "Cotton sword bag included",
    ],
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviewCount: 35,
  },
  {
    id: "wak-004",
    handle: "black-mirror-wakizashi-premium",
    title: "Black Mirror Wakizashi Premium",
    description:
      "The pinnacle of the Black Mirror line. This premium wakizashi features gold-accented fittings and a folded steel blade with an exquisite grain pattern. The ultimate companion blade for serious collectors.",
    price: 5999,
    currency: "SEK",
    tier: "Premium",
    collection: "wakizashi",
    images: [
      "/images/products/black_mirror_wakizashi_overview.webp",
    ],
    steel: "Folded Steel (13 folds)",
    hamon: "Choji",
    length: "69cm overall / 46cm blade",
    weight: "0.68kg",
    features: [
      "13-fold pattern-welded steel",
      "Gold-plated fittings",
      "Genuine ray skin with gold silk ito",
      "Premium lacquered saya",
      "Silk sword bag and display stand",
    ],
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 8,
  },

  // --- TANTO ---
  {
    id: "tan-001",
    handle: "ghost-fang-tanto",
    title: "Ghost Fang Tanto",
    description:
      "Small but deadly. The Ghost Fang tanto is a compact blade with an imposing presence. Featuring a T10 clay-tempered blade in a matte black mounting, it's the ultimate desk or display piece.",
    price: 2499,
    currency: "SEK",
    tier: "Heritage",
    collection: "tanto",
    images: [
      "/images/products/clout_killa_tanto_overview.webp",
    ],
    steel: "T10 Clay Tempered",
    hamon: "Suguha",
    length: "38cm overall / 27cm blade",
    weight: "0.4kg",
    features: [
      "Full tang T10 steel",
      "Compact tanto form factor",
      "Clay tempered with hamon",
      "Matte black fittings throughout",
      "Hardwood display stand included",
    ],
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 41,
  },
  {
    id: "tan-002",
    handle: "night-striker-tanto",
    title: "Night Striker Tanto",
    description:
      "Built for the shadows. The Night Striker is a blacked-out tanto with a razor-sharp 1095 blade. Its aggressive aesthetic and compact size make it a favorite among tactical collectors.",
    price: 1899,
    currency: "SEK",
    tier: "Core",
    collection: "tanto",
    images: [
      "/images/products/red_flag_tanto_overview.webp",
    ],
    steel: "1095 High Carbon Steel",
    hamon: "Wire-brushed",
    length: "37cm overall / 26cm blade",
    weight: "0.38kg",
    features: [
      "Full tang 1095 carbon steel",
      "All-black tactical finish",
      "Black iron tsuba",
      "Hand-sharpened edge",
      "Cotton sword bag included",
    ],
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviewCount: 55,
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getProductsByCollection(
  collection: Product["collection"]
): Product[] {
  return products.filter((p) => p.collection === collection);
}

export function getProductsByTier(tier: Product["tier"]): Product[] {
  return products.filter((p) => p.tier === tier);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isNew || p.rating >= 4.8).slice(0, 6);
}
