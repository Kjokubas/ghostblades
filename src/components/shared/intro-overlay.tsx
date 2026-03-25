"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ease } from "@/lib/animations";

export function IntroOverlay() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("gb-intro-seen")) {
      setShowIntro(true);
      document.documentElement.style.overflow = "hidden";
    }
  }, []);

  const handleComplete = useCallback(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("gb-intro-seen", "1");
      setShowIntro(false);
      document.documentElement.style.overflow = "";
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showIntro) {
      return handleComplete();
    }
  }, [showIntro, handleComplete]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ghost-black"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.8, ease: ease.dramatic }}
        >
          {/* Logo with red glow */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: ease.dramatic, delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ boxShadow: "0 0 0px 0px rgba(139, 0, 0, 0)" }}
              animate={{
                boxShadow: [
                  "0 0 80px 20px rgba(139, 0, 0, 0.15)",
                  "0 0 80px 20px rgba(139, 0, 0, 0.25)",
                  "0 0 80px 20px rgba(139, 0, 0, 0.15)",
                ],
              }}
              transition={{
                delay: 1.0,
                duration: 0.5,
                ease: ease.silk,
              }}
            />
            <img
              src="/images/about/GB_Transparent_Diamond_Logo.webp"
              alt="Ghost Blades"
              className="relative z-10 h-24 w-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
