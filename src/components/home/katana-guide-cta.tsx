"use client";

import Link from "next/link";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SmokeMist } from "@/components/shared/smoke-mist";
import { BrushStrokeAccent } from "@/components/shared/brush-stroke-accent";

export function KatanaGuideCta() {
  return (
    <section className="relative overflow-hidden py-40">
      <ParallaxImage
        src="/images/about/samurai_scroll_2_by_rickyfl1975_dk8lhmo.jpg"
        alt="Katana guide background"
        className="absolute inset-0"
        speed={0.2}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />
      {/* Red blood tint */}
      <div className="absolute inset-0 bg-accent-red/5" />

      <SmokeMist position="top" intensity={0.8} />
      <SmokeMist position="bottom" intensity={0.8} />

      <div className="relative z-20 mx-auto max-w-3xl px-4 text-center">
        <RevealOnScroll>
          <h2 className="font-heading text-ghost-white mb-4 text-4xl font-bold uppercase tracking-wider md:text-6xl">
            The Complete
            <br />
            <span className="text-accent-crimson">Katana Guide</span>
          </h2>
          <div className="mx-auto mb-8 max-w-xs">
            <BrushStrokeAccent variant="underline" />
          </div>
          <p className="text-ghost-silver mb-12 text-lg leading-relaxed md:text-xl">
            New to Japanese swords? Our comprehensive guide covers everything
            from steel types and hamon patterns to choosing your first blade and
            proper maintenance.
          </p>
          <span
            className="inline-flex h-11 cursor-pointer items-center justify-center border border-accent-red/50 bg-accent-red-light px-10 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-crimson hover:border-accent-crimson hover:shadow-[0_0_16px_rgba(139,32,32,0.5)] active:scale-[0.98]"
          >
            Read the Guide
          </span>
        </RevealOnScroll>
      </div>
    </section>
  );
}
