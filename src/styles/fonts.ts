import { Inter, Cinzel, Noto_Sans_JP } from "next/font/google";

export const fontHeading = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700", "900"],
});

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontJapanese = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-japanese",
  display: "swap",
  weight: ["400", "700"],
});
