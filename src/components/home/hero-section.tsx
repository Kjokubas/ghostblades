"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ease, duration } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden">
      {/* Video background */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        src="/images/about/Vortex Katana – Detailed Video Showcase  Ghost Blades - Ghost Blades (1080p, h264, youtube).mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // @ts-expect-error — webkit vendor attribute for iOS autoplay
        webkit-playsinline="true"
        className="absolute inset-0 h-full w-full object-cover"
        ref={(el) => { if (el) el.play().catch(() => {}); }}
      />

      {/* Animated dark overlay — "lights coming up" */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/95 to-black/60"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: duration.glacial, ease: ease.silk }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
        {/* Eyebrow with decorative lines */}
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: ease.smooth, delay: 0.5 }}
        >
          <motion.div
            className="h-px w-12 origin-center bg-accent-red/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: ease.dramatic, delay: 0.7 }}
          />
          <span className="text-xs uppercase tracking-[0.3em] text-accent-red">
            Est. MMXXIII &bull; Sweden
          </span>
          <motion.div
            className="h-px w-12 origin-center bg-accent-red/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: ease.dramatic, delay: 0.7 }}
          />
        </motion.div>

        {/* Heading — mask reveal per line */}
        <div className="mb-6">
          <div className="overflow-hidden">
            <motion.h1
              className="font-heading text-6xl font-bold tracking-tight text-ghost-white md:text-7xl lg:text-8xl"
              initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: duration.slow, ease: ease.dramatic, delay: 0.8 }}
            >
              Where Steel
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-heading text-6xl font-bold tracking-tight text-accent-crimson md:text-7xl lg:text-8xl"
              initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: duration.dramatic, ease: ease.dramatic, delay: 1.1 }}
            >
              Meets Spirit
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mb-12 max-w-2xl text-lg text-ghost-silver md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: ease.smooth, delay: 1.8 }}
        >
          Premium katanas, wakizashi, and tanto — hand-forged from the finest
          steel. Each blade is a unique work of art.
        </motion.p>

        {/* Buttons — staggered */}
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <motion.span
            className="inline-flex h-12 cursor-pointer items-center justify-center bg-accent-red px-10 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-accent-red-light active:scale-[0.98]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.smooth, delay: 2.2 }}
            whileHover={{ y: -2, boxShadow: "0 4px 15px rgba(139, 0, 0, 0.3)" }}
          >
            Shop Collection
          </motion.span>
          <motion.span
            className="inline-flex h-12 cursor-pointer items-center justify-center border border-ghost-silver/30 bg-transparent px-10 text-sm font-semibold uppercase tracking-wider text-ghost-light transition-colors duration-300 hover:border-accent-red/50 hover:text-accent-red active:scale-[0.98]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ease.smooth, delay: 2.35 }}
            whileHover={{ y: -2 }}
          >
            Katana Guide
          </motion.span>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: ease.silk }}
        >
          <ChevronDown className="h-6 w-6 text-ghost-silver/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
