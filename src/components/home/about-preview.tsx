"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { BrushStrokeAccent } from "@/components/shared/brush-stroke-accent";

export function AboutPreview() {
  return (
    <section className="texture-noise relative bg-ghost-dark px-4 py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-ghost-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-ghost-black to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <RevealOnScroll direction="left">
            <div className="bg-ghost-charcoal aspect-square overflow-hidden ring-1 ring-ghost-steel/20">
              <video
                src="/images/about/Vortex Katana – Detailed Video Showcase  Ghost Blades - Ghost Blades (1080p, h264, youtube).mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div>
              <h2 className="font-heading text-ghost-white mb-4 text-4xl font-bold uppercase tracking-wider">
                Forged with
                <br />
                <span className="text-accent-crimson">Purpose</span>
              </h2>
              <div className="mb-6 max-w-xs">
                <BrushStrokeAccent variant="underline" />
              </div>
              <p className="text-ghost-silver mb-4 leading-relaxed">
                Every Ghost Blades sword begins as raw steel and ends as a work
                of art. Our artisans combine centuries-old Japanese forging
                techniques with modern metallurgy to create blades that are both
                beautiful and functional.
              </p>
              <p className="text-ghost-silver mb-8 leading-relaxed">
                Based in Sweden, we ship worldwide and have delivered over 5,000
                blades to collectors in 40+ countries.
              </p>
              <span
                className="inline-flex h-10 cursor-pointer items-center justify-center border border-ghost-silver/30 px-8 text-sm font-semibold uppercase tracking-wider text-ghost-light transition-all duration-300 hover:border-accent-red-light hover:text-accent-red-light hover:shadow-[0_0_12px_rgba(139,32,32,0.2)] active:scale-[0.98]"
              >
                Our Story
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
