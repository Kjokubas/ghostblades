"use client";

import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { ArrowRight } from "lucide-react";

export function CollectionCards() {
  return (
    <section className="relative bg-[#4A0C0C] px-4 py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-ghost-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-ghost-black to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Our"
          titleAccent="Collections"
          subtitle="Three traditions. Centuries of craft. One standard: perfection."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {collections.map((collection, i) => (
            <RevealOnScroll key={collection.handle} delay={i * 0.15}>
              <div
                className="group relative block aspect-square cursor-pointer overflow-hidden border-0 bg-black transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(220,38,38,0.2),0_20px_60px_rgba(139,32,32,0.1)]"
              >
                {/* Image */}
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="scale-105 object-cover object-right"
                />

                {/* Gradient overlay — darkens bottom, red tint on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-1000 ease-out group-hover:from-black/80 group-hover:via-accent-red/10" />

                {/* Red glow edge on hover — top */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-accent-red/0 transition-all duration-500 group-hover:bg-accent-red/50 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]" />
                {/* Red glow edge on hover — bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-accent-red/0 transition-all duration-500 group-hover:bg-accent-red/50 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]" />


                {/* Content overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3
                    className="font-heading mb-3 text-3xl font-bold uppercase tracking-wider text-ghost-white transition-all duration-300 group-hover:text-white"
                    style={{
                      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  >
                    {collection.title}
                  </h3>

                  {/* Reveal line + CTA on hover */}
                  <div className="flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="text-sm uppercase tracking-wider text-accent-red-light">
                      {collection.productCount} products
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-accent-red-light transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.5}>
          <div className="mt-12 text-center">
            <span className="text-ghost-silver text-sm uppercase tracking-wider">or</span>
            <div className="mt-4">
              <span
                className="group relative inline-flex h-11 cursor-pointer items-center justify-center border border-accent-red/50 bg-accent-red-light px-10 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-crimson hover:border-accent-crimson hover:shadow-[0_0_20px_rgba(220,38,38,0.5),0_0_40px_rgba(139,32,32,0.25)] active:scale-[0.98]"
              >
                Make Your Custom Katana
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
