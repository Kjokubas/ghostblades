"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ease, duration as dur } from "@/lib/animations";

type RevealType = "fade-up" | "mask-up" | "scale" | "slide-left" | "slide-right";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: RevealType;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

const typeVariants = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "mask-up": {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
    visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

// Legacy direction map for backward compatibility
const directionToType: Record<string, RevealType> = {
  up: "fade-up",
  down: "fade-up",
  left: "slide-right",
  right: "slide-left",
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  type,
  duration = dur.normal,
  direction,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const resolvedType = type || (direction ? directionToType[direction] : "fade-up");
  const variant = typeVariants[resolvedType];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variant.hidden}
      animate={isInView ? variant.visible : variant.hidden}
      transition={{
        duration,
        delay,
        ease: resolvedType === "mask-up" ? ease.dramatic : ease.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}
