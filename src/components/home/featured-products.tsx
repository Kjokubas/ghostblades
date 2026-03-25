"use client";

import { motion } from "motion/react";
import { getFeaturedProducts } from "@/data/products";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { StaggerGroup } from "@/components/shared/stagger-group";
import { ease } from "@/lib/animations";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="texture-noise relative bg-ghost-dark px-4 py-16 md:py-20 lg:px-8">
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
          <motion.span
            className="group relative hidden shrink-0 cursor-pointer items-center justify-center border border-ghost-silver/30 bg-transparent px-10 text-sm font-semibold uppercase tracking-wider text-ghost-light transition-colors duration-300 hover:border-accent-red hover:text-accent-red md:inline-flex h-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: ease.smooth, delay: 0.4 }}
            whileHover={{ y: -2, boxShadow: "0 4px 15px rgba(139, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Blades
          </motion.span>
        </div>

        <StaggerGroup
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
          childVariant="scale"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
