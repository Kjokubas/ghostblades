"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ease, duration, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childVariant?: "fade-up" | "scale";
}

const childVariants = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function StaggerGroup({
  children,
  className,
  staggerDelay = stagger.normal,
  childVariant = "fade-up",
}: StaggerGroupProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={childVariants[childVariant]}
              transition={{
                duration: duration.normal,
                ease: ease.smooth,
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
