import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { PageTransition } from "@/components/shared/page-transition";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ghost Blades is a Swedish premium brand dedicated to handcrafted Japanese swords. Learn our story.",
};

export default function AboutPage() {
  // TODO: Build full about page with:
  // - Brand story with parallax hero image
  // - Mission statement
  // - Craftsmanship process timeline
  // - Team section (optional)
  // - Values / philosophy section
  return (
    <PageTransition>
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="About Ghost Blades"

          />

          <RevealOnScroll>
            <div className="space-y-6">
              <p className="text-ghost-light text-lg leading-relaxed">
                Ghost Blades was born from a passion for Japanese sword
                craftsmanship and a desire to make premium-quality blades
                accessible to collectors worldwide. Based in Sweden, we bridge
                Scandinavian design sensibility with centuries-old Japanese
                forging traditions.
              </p>
              <p className="text-ghost-silver leading-relaxed">
                Every sword in our collection is handcrafted by skilled
                artisans using traditional techniques. From the initial forging
                of the steel to the final hand-sharpening of the edge, each
                blade passes through dozens of meticulous steps before earning
                the Ghost Blades name.
              </p>
              <p className="text-ghost-silver leading-relaxed">
                We believe that a sword is more than a weapon &mdash; it is a
                work of art, a piece of history, and a testament to the
                dedication of its maker. Our mission is to share that belief
                with collectors, martial artists, and enthusiasts around the
                world.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageTransition>
  );
}
