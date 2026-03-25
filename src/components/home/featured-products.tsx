"use client";

import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SmokeMist } from "@/components/shared/smoke-mist";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="texture-noise relative bg-ghost-dark px-4 py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-ghost-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-ghost-black to-transparent" />

      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <SectionHeading
            title="Featured"
            titleAccent="Blades"
            subtitle="Hand-picked from our collection. New arrivals and top-rated swords."
            className="mb-0"
          />
          <span
            className="group relative hidden shrink-0 cursor-pointer inline-flex h-11 items-center justify-center border border-ghost-silver/30 bg-transparent px-10 text-sm font-semibold uppercase tracking-wider text-ghost-light transition-all duration-300 hover:border-accent-red-light hover:text-accent-red-light hover:shadow-[0_0_20px_rgba(220,38,38,0.35),0_0_40px_rgba(139,32,32,0.15)] active:scale-[0.98] md:inline-flex"
          >
            View All Blades
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <RevealOnScroll key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
