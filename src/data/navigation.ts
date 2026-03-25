export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Katana", href: "/collections/katana" },
      { label: "Wakizashi", href: "/collections/wakizashi" },
      { label: "Tanto", href: "/collections/tanto" },
    ],
  },
  { label: "Custom Katana", href: "/custom-katana" },
  { label: "Katana Guide", href: "/katana-guide" },
  { label: "Videos", href: "/videos" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export const footerNavigation: FooterSection[] = [
  {
    title: "Shop",
    links: [
      { label: "Katana", href: "/collections/katana" },
      { label: "Wakizashi", href: "/collections/wakizashi" },
      { label: "Tanto", href: "/collections/tanto" },
      { label: "Custom Katana", href: "/custom-katana" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Katana Guide", href: "/katana-guide" },
      { label: "Videos", href: "/videos" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
