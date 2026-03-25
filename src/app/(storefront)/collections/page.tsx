import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { PageTransition } from "@/components/shared/page-transition";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse our curated collections of handcrafted Japanese swords — katanas, wakizashi, and tanto.",
};

export default function CollectionsPage() {
  return (
    <PageTransition>
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Collections"
            subtitle="Each blade is handcrafted using traditional Japanese techniques, from forging to final polish."

          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {collections.map((collection, i) => (
              <RevealOnScroll key={collection.handle} delay={i * 0.15}>
                <div
                  className="group relative block cursor-pointer aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-japanese text-accent-red-light mb-1 text-sm">
                      {collection.japaneseName}
                    </p>
                    <h3 className="font-heading text-ghost-white mb-2 text-3xl font-bold uppercase">
                      {collection.title}
                    </h3>
                    <p className="text-ghost-silver text-sm">
                      {collection.productCount} products
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
