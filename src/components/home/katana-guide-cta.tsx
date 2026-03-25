"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import Image from "next/image";
import { SmokeMist } from "@/components/shared/smoke-mist";
import { ease, duration } from "@/lib/animations";

export function KatanaGuideCta() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.9, 0.7]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] items-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/about/samurai_scroll_2_by_rickyfl1975_dk8lhmo.jpg"
          alt="Katana guide background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Dynamic overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      <SmokeMist position="top" intensity={0.8} />
      <SmokeMist position="bottom" intensity={0.8} />

      <div className="relative z-20 mx-auto w-full max-w-3xl px-4 py-24 text-center">
        {/* Red line — expands first */}
        <motion.div
          className="mx-auto mb-6 h-px w-16 origin-center bg-accent-red"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: duration.slow, ease: ease.dramatic }}
        />

        {/* Heading — mask reveal */}
        <div className="mb-6 overflow-hidden">
          <motion.h2
            className="font-heading text-5xl font-bold uppercase tracking-wider text-ghost-white md:text-6xl lg:text-7xl"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{ duration: duration.slow, ease: ease.dramatic, delay: 0.3 }}
          >
            The Complete
          </motion.h2>
        </div>
        <div className="mb-8 overflow-hidden">
          <motion.h2
            className="font-heading text-5xl font-bold uppercase tracking-wider text-accent-crimson md:text-6xl lg:text-7xl"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{ duration: duration.slow, ease: ease.dramatic, delay: 0.45 }}
          >
            Katana Guide
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-ghost-silver md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: duration.normal, ease: ease.smooth, delay: 0.6 }}
        >
          New to Japanese swords? Our comprehensive guide covers everything
          from steel types and hamon patterns to choosing your first blade.
        </motion.p>

        {/* Button */}
        <motion.span
          className="inline-flex h-12 cursor-pointer items-center justify-center bg-accent-red px-12 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-accent-red-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: duration.normal, ease: ease.smooth, delay: 0.8 }}
          whileHover={{ y: -2, boxShadow: "0 4px 15px rgba(139, 0, 0, 0.3)" }}
        >
          Read the Guide
        </motion.span>
      </div>
    </section>
  );
}
