"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setDirection(currentY > lastScrollY ? "down" : "up");
      setLastScrollY(currentY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return direction;
}
