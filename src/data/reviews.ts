export interface Review {
  id: string;
  author: string;
  country: string;
  rating: number;
  title: string;
  body: string;
  productHandle: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: "rev-001",
    author: "Erik L.",
    country: "Sweden",
    rating: 5,
    title: "Absolutely stunning craftsmanship",
    body: "The Shadow Blade Katana exceeded all my expectations. The hamon is beautiful and the balance is perfect. Shipping was fast and packaging was very secure. My new favorite piece in my collection.",
    productHandle: "shadow-blade-katana",
    date: "2025-12-15",
    verified: true,
  },
  {
    id: "rev-002",
    author: "Marcus T.",
    country: "Germany",
    rating: 5,
    title: "Museum quality for a fraction of the price",
    body: "I\u2019ve been collecting Japanese swords for 10 years and the Golden Dragon Katana is genuinely one of the best pieces I own. The folded steel pattern is mesmerizing. Worth every krona.",
    productHandle: "golden-dragon-katana",
    date: "2025-11-28",
    verified: true,
  },
  {
    id: "rev-003",
    author: "James W.",
    country: "United Kingdom",
    rating: 4,
    title: "Great starter katana",
    body: "Bought the Green Goblin as my first real katana. The edge came razor sharp and the green theme looks even better in person. Only minor complaint is the saya fit is a bit loose, but for this price it\u2019s incredible value.",
    productHandle: "green-goblin-katana",
    date: "2026-01-03",
    verified: true,
  },
  {
    id: "rev-004",
    author: "Sophie R.",
    country: "France",
    rating: 5,
    title: "Perfect gift for my husband",
    body: "Ordered the Flow Katana as a birthday gift. The minimalist white design is absolutely gorgeous. My husband was speechless. Delivery to France took only 5 days!",
    productHandle: "flow-katana",
    date: "2026-01-20",
    verified: true,
  },
  {
    id: "rev-005",
    author: "Viktor S.",
    country: "Sweden",
    rating: 5,
    title: "Ghost Fang is the perfect desk piece",
    body: "I wanted something small but impressive for my home office. The Ghost Fang Tanto is exactly that. The clay-tempered hamon catches the light beautifully and the display stand is a nice touch.",
    productHandle: "ghost-fang-tanto",
    date: "2026-02-10",
    verified: true,
  },
  {
    id: "rev-006",
    author: "Alex M.",
    country: "United States",
    rating: 5,
    title: "Dragon Flame is a masterpiece",
    body: "The folded steel grain pattern on this blade is insane. You can see every fold. The dragon fittings are detailed and the crimson/gold color scheme is killer. This is art you can swing.",
    productHandle: "dragon-flame-katana",
    date: "2026-02-22",
    verified: true,
  },
  {
    id: "rev-007",
    author: "Kenji H.",
    country: "Japan",
    rating: 4,
    title: "Respectable quality for the price",
    body: "As someone from Japan, I was curious about a Swedish katana company. I\u2019m impressed. The Yin & Yang Katana has good balance, sharp edge, and the dual-tone design is creative. A solid addition to any collection.",
    productHandle: "yin-yang-katana",
    date: "2026-03-01",
    verified: true,
  },
  {
    id: "rev-008",
    author: "Lena K.",
    country: "Norway",
    rating: 5,
    title: "Fast shipping, beautiful sword",
    body: "The Crimson Edge Wakizashi arrived in just 3 days to Norway. The red theme is striking and the blade is sharp right out of the box. Already eyeing a katana to match!",
    productHandle: "crimson-edge-wakizashi",
    date: "2026-03-05",
    verified: true,
  },
];

export function getReviewsByProduct(productHandle: string): Review[] {
  return reviews.filter((r) => r.productHandle === productHandle);
}

export function getFeaturedReviews(): Review[] {
  return reviews.filter((r) => r.rating >= 5).slice(0, 5);
}
