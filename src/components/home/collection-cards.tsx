"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { collections } from "@/data/collections";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { ArrowRight } from "lucide-react";
import { ease } from "@/lib/animations";

export function CollectionCards() {
  return (
    <section className="relative bg-[#4A0C0C] px-4 py-16 md:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-ghost-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-ghost-black to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Our"
          titleAccent="Collections"
          subtitle="Three traditions. Centuries of craft. One standard: perfection."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
          {collections.map((collection, i) => (
            <RevealOnScroll key={collection.handle} delay={i * 0.15} type="fade-up">
              <motion.div
                className="group relative block aspect-[3/4] cursor-pointer overflow-hidden bg-black"
                whileHover={{
                  y: -8,
                  boxShadow: "0 8px 30px rgba(139,0,0,0.2), 0 20px 60px rgba(139,0,0,0.1)",
                }}
                transition={{ duration: 0.7, ease: ease.silk }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ duration: 0.8, ease: ease.silk }}
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="scale-105 object-cover object-right"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-700 group-hover:from-black/60" />

                {/* Red glow edges on hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-accent-red/0 transition-all duration-500 group-hover:bg-accent-red/50 group-hover:shadow-[0_0_15px_rgba(139,0,0,0.4)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-accent-red/0 transition-all duration-500 group-hover:bg-accent-red/50 group-hover:shadow-[0_0_15px_rgba(139,0,0,0.4)]" />

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3
                    className="font-heading mb-1 text-2xl font-bold uppercase tracking-wider text-ghost-white transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                  >
                    {collection.title}
                  </h3>
                  {/* Animated underline on hover */}
                  <div className="mb-3 h-px w-0 bg-accent-red transition-all duration-500 group-hover:w-16" />
                  <div className="flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="text-sm text-ghost-silver">
                      {collection.productCount} products
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-accent-red transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Custom Katana Banner */}
        <RevealOnScroll delay={0.5} type="fade-up">
          <div className="mt-12 rounded-lg border border-accent-red/20 bg-ghost-charcoal px-8 py-12 text-center">
            <h3 className="font-heading mb-3 text-3xl font-bold uppercase tracking-wider text-ghost-white md:text-4xl">
              Design Your Own{" "}
              <span className="text-accent-red">Blade</span>
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-lg text-ghost-silver">
              Choose your steel, fittings, and saya. Build a katana that&apos;s
              uniquely yours.
            </p>
            <motion.span
              className="inline-flex h-12 cursor-pointer items-center justify-center border border-accent-red bg-transparent px-10 text-sm font-bold uppercase tracking-wider text-accent-red transition-colors duration-300 hover:bg-accent-red hover:text-white"
              whileHover={{ y: -2, boxShadow: "0 4px 15px rgba(139, 0, 0, 0.3)" }}
            >
              Start Building
            </motion.span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
