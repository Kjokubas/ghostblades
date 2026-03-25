"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { mainNavigation } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ghost-black/95 border-b border-ghost-steel/20 backdrop-blur-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Red accent line at bottom — only visible when scrolled */}
      <div
        className={`absolute bottom-0 left-1/2 h-[1px] -translate-x-1/2 bg-accent-red/60 transition-all duration-500 ease-out ${
          scrolled ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
        style={{ boxShadow: scrolled ? "0 0 8px rgba(139,32,32,0.6), 0 0 20px rgba(139,32,32,0.3)" : "none" }}
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Mobile menu button (disabled) */}
        <button
          className="text-ghost-light hover:text-accent-red-light transition-colors lg:hidden cursor-default"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/about/GB_Transparent_Diamond_Logo.webp"
            alt="Ghost Blades"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop navigation — all links go to homepage */}
        <nav className="hidden items-center gap-8 lg:flex">
          {mainNavigation.map((item) => (
            <span
              key={item.href}
              className="text-ghost-silver hover:text-accent-red-light text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              {item.label}
            </span>
          ))}
        </nav>

        {/* Actions (non-functional) */}
        <div className="flex items-center gap-4">
          <span
            className="text-ghost-silver hover:text-accent-red-light transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </span>
          <span
            className="text-ghost-silver hover:text-accent-red-light relative transition-colors cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </span>
        </div>
      </div>
    </header>
  );
}
