"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { ease, duration } from "@/lib/animations";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export function StatCounter({
  value,
  suffix = "",
  label,
  decimals = 0,
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const dur = 2000;
    const startTime = Date.now();

    function tick() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / dur, 1);
      // Dramatic easing: slow start, powerful acceleration, soft landing
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      setDisplayValue(eased * value);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, value]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="font-heading text-4xl font-bold text-accent-red md:text-5xl"
        style={{
          filter: done ? "blur(0px)" : `blur(${Math.max(0, 2 - displayValue / value * 2)}px)`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: duration.normal, ease: ease.smooth }}
      >
        {formatted}
        {suffix}
      </motion.p>
      <motion.p
        className="mt-2 text-sm uppercase tracking-wider text-ghost-silver"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: duration.normal, ease: ease.smooth, delay: 2.3 }}
      >
        {label}
      </motion.p>
    </div>
  );
}
