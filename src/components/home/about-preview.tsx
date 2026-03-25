"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { StatCounter } from "@/components/shared/stat-counter";
import { ease, duration } from "@/lib/animations";

export function AboutPreview() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="texture-noise relative bg-ghost-dark px-4 py-16 md:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-ghost-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-ghost-black to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <RevealOnScroll direction="left" type="slide-right">
            <div className="aspect-square overflow-hidden bg-ghost-charcoal ring-1 ring-ghost-steel/20">
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

          <RevealOnScroll direction="right" type="slide-left">
            <div>
              <h2 className="font-heading mb-4 text-4xl font-bold uppercase tracking-wider text-ghost-white md:text-5xl">
                Forged with
                <br />
                <span className="text-accent-crimson">Purpose</span>
              </h2>
              <div className="mb-6 h-px w-20 bg-accent-red/60" />
              <p className="mb-4 leading-relaxed text-ghost-silver">
                Every Ghost Blades sword begins as raw steel and ends as a work
                of art — centuries-old Japanese forging techniques meets modern
                metallurgy.
              </p>
              <p className="mb-8 leading-relaxed text-ghost-silver">
                Based in Sweden, shipping worldwide to collectors in 40+
                countries.
              </p>
              <motion.span
                className="inline-flex h-12 cursor-pointer items-center justify-center border border-accent-red bg-transparent px-10 text-sm font-semibold uppercase tracking-wider text-accent-red transition-colors duration-300 hover:bg-accent-red hover:text-white"
                whileHover={{ y: -2, boxShadow: "0 4px 15px rgba(139, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Our Story
              </motion.span>
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats row with animated dividers */}
        <div ref={statsRef} className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          <div className="relative md:border-r md:border-ghost-steel/20">
            <StatCounter value={5000} suffix="+" label="Blades Forged" />
          </div>
          <div className="relative md:border-r md:border-ghost-steel/20">
            <StatCounter value={40} suffix="+" label="Countries Served" />
          </div>
          <div>
            <StatCounter
              value={4.9}
              suffix="/5"
              label="Average Rating"
              decimals={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
