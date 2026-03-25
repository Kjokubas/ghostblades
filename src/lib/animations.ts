// ============================================
// Ghost Blades — Premium Animation System
// ============================================

// EASING CURVES — Never use built-in easings
export const ease = {
  smooth: [0.16, 1, 0.3, 1] as const,
  dramatic: [0.77, 0, 0.175, 1] as const,
  silk: [0.25, 0.1, 0.25, 1] as const,
  snap: [0.87, 0, 0.13, 1] as const,
  out: [0.33, 1, 0.68, 1] as const,
} as const;

// DURATION PRESETS
export const duration = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  dramatic: 1.6,
  glacial: 2.0,
} as const;

// STAGGER PRESETS
export const stagger = {
  tight: 0.06,
  normal: 0.1,
  relaxed: 0.15,
  dramatic: 0.2,
} as const;

// REUSABLE VARIANT SETS

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease.smooth, delay },
  }),
};

export const fadeUpDramatic = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.dramatic, delay },
  }),
};

export const maskReveal = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  visible: (delay: number = 0) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.dramatic, delay },
  }),
};

export const scaleFade = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: ease.smooth, delay },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: ease.smooth, delay },
  }),
};

export const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: ease.smooth, delay },
  }),
};

export const lineExpand = {
  hidden: { scaleX: 0 },
  visible: (delay: number = 0) => ({
    scaleX: 1,
    transition: { duration: duration.slow, ease: ease.dramatic, delay },
  }),
};

export const staggerContainer = (staggerDelay: number = stagger.normal) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});
