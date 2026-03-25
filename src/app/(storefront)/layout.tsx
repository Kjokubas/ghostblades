import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";
import { IntroOverlay } from "@/components/shared/intro-overlay";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <IntroOverlay />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
