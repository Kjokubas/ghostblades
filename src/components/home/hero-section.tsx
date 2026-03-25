"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="texture-noise relative flex min-h-[70vh] items-center overflow-hidden py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/code-red-katana-ghost-blades-hamon-blade-tsuka-saya.webp')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        {/* Black gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-ghost-black to-transparent" />
      </div>


      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-left lg:px-8">
        <motion.h1
          className="font-heading text-ghost-white mb-4 text-4xl font-black uppercase tracking-wider md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Handcrafted
          <br />
          <span className="text-accent-crimson">Japanese Swords</span>
        </motion.h1>


        <motion.p
          className="text-ghost-silver mb-12 max-w-xl text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Premium katanas, wakizashi, and tanto forged from the finest steel.
          Each blade is a unique work of art.
        </motion.p>

        <motion.div
          className="flex flex-col items-start gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <span
            className="group relative inline-flex h-11 cursor-pointer items-center justify-center border border-accent-red/50 bg-accent-red-light px-10 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-crimson hover:border-accent-crimson hover:shadow-[0_0_20px_rgba(220,38,38,0.5),0_0_40px_rgba(139,32,32,0.25)] active:scale-[0.98]"
          >
            Shop Collection
          </span>
          <span
            className="group relative inline-flex h-11 cursor-pointer items-center justify-center border border-ghost-silver/30 bg-transparent px-10 text-sm font-semibold uppercase tracking-wider text-ghost-light transition-all duration-300 hover:border-accent-red-light hover:text-accent-red-light hover:shadow-[0_0_20px_rgba(220,38,38,0.35),0_0_40px_rgba(139,32,32,0.15)] active:scale-[0.98]"
          >
            Katana Guide
          </span>
        </motion.div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-accent-red/60 h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
