import type { Metadata } from "next";
import { fontHeading, fontBody, fontJapanese } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ghost Blades \u2014 Handcrafted Japanese Swords",
    template: "%s | Ghost Blades",
  },
  description:
    "Swedish premium destination for handcrafted katanas, wakizashi and tanto. Forged from high-quality carbon steel and folded steel.",
  metadataBase: new URL("https://ghostblades.se"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        fontHeading.variable,
        fontBody.variable,
        fontJapanese.variable,
        "dark"
      )}
      suppressHydrationWarning
    >
      <body className="font-body min-h-screen overflow-x-hidden bg-ghost-black text-ghost-light">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#111111",
              border: "1px solid #2A2A2A",
              color: "#E5E5E5",
            },
          }}
        />
      </body>
    </html>
  );
}
