"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { MobileMenu } from "./mobile-menu";
import { ease } from "@/lib/animations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-ghost-steel/10 bg-ghost-black/80 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
      >
        {/* Red accent line at bottom — only visible when scrolled */}
        <div
          className={`absolute bottom-0 left-1/2 h-[1px] -translate-x-1/2 bg-accent-red/60 transition-all duration-500 ease-out ${
            scrolled ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
          style={{
            boxShadow: scrolled
              ? "0 0 8px rgba(139,0,0,0.6), 0 0 20px rgba(139,0,0,0.3)"
              : "none",
          }}
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-ghost-light transition-colors hover:text-accent-red-light lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo — animated entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: ease.smooth, delay: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <img
                src="/images/about/GB_Transparent_Diamond_Logo.webp"
                alt="Ghost Blades"
                className="h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop navigation — staggered entrance */}
          <nav className="hidden items-center gap-8 lg:flex">
            {mainNavigation.map((item, i) => (
              <motion.span
                key={item.href}
                className="group relative cursor-pointer text-sm font-medium uppercase tracking-wider text-ghost-silver transition-colors hover:text-accent-red"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: ease.smooth,
                  delay: 0.6 + i * 0.08,
                }}
              >
                {item.label}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent-red transition-transform duration-300 group-hover:scale-x-100" />
              </motion.span>
            ))}
          </nav>

          {/* Actions — staggered entrance */}
          <div className="flex items-center gap-4">
            <motion.span
              className="cursor-pointer text-ghost-silver transition-colors hover:text-accent-red"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </motion.span>
            <motion.span
              className="relative cursor-pointer text-ghost-silver transition-colors hover:text-accent-red"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </motion.span>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
