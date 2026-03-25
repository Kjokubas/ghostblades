"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ease, duration } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  titleAccent?: string;
  titleSuffix?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  titleAccent,
  titleSuffix,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={cn("mb-16", align === "center" && "text-center", className)}
    >
      {/* Red line — animates FIRST */}
      <motion.div
        className={cn(
          "h-px w-12 bg-accent-red/60 origin-center",
          align === "center" && "mx-auto"
        )}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: duration.slow, ease: ease.dramatic }}
      />

      {/* Heading — mask reveals SECOND */}
      <div className="mt-4 overflow-hidden">
        <motion.h2
          className="font-heading text-4xl font-bold uppercase tracking-wider text-ghost-white md:text-5xl lg:text-6xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{
            duration: duration.slow,
            ease: ease.dramatic,
            delay: 0.3,
          }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="text-accent-crimson">{titleAccent}</span>
            </>
          )}
          {titleSuffix && <>{" "}{titleSuffix}</>}
        </motion.h2>
      </div>

      {/* Subtitle — fades up THIRD */}
      {subtitle && (
        <motion.p
          className={cn(
            "mt-6 max-w-2xl text-lg text-ghost-silver md:text-xl",
            align === "center" && "mx-auto"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: duration.normal,
            ease: ease.smooth,
            delay: 0.6,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
