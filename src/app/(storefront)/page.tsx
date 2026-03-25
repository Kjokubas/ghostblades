import { HeroSection } from "@/components/home/hero-section";
import { CollectionCards } from "@/components/home/collection-cards";
import { FeaturedProducts } from "@/components/home/featured-products";
import { KatanaGuideCta } from "@/components/home/katana-guide-cta";
import { ReviewsSection } from "@/components/home/reviews-section";
import { AboutPreview } from "@/components/home/about-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ReviewsSection />
      <CollectionCards />
      <KatanaGuideCta />
      <AboutPreview />
    </>
  );
}
