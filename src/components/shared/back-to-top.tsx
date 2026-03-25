"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { ease } from "@/lib/animations";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-ghost-steel/30 bg-ghost-charcoal text-ghost-silver shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.5, ease: ease.smooth }}
          whileHover={{
            scale: 1.1,
            borderColor: "rgba(139, 0, 0, 0.5)",
            color: "#8B0000",
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3, ease: ease.silk }}>
            <ArrowUp className="h-5 w-5" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
