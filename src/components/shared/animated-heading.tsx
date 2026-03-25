"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ease, duration } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  staggerDelay?: number;
  animation?: "mask" | "fade";
}

export function AnimatedHeading({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  staggerDelay = 0.12,
  animation = "mask",
}: AnimatedHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const lines = text.split("\n");

  return (
    <Tag ref={ref} className={cn(className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={
              animation === "mask"
                ? { y: "100%", opacity: 0 }
                : { y: 20, opacity: 0 }
            }
            animate={
              isInView
                ? { y: 0, opacity: 1 }
                : animation === "mask"
                  ? { y: "100%", opacity: 0 }
                  : { y: 20, opacity: 0 }
            }
            transition={{
              duration: animation === "mask" ? duration.slow : duration.normal,
              ease: animation === "mask" ? ease.dramatic : ease.smooth,
              delay: delay + i * staggerDelay,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
