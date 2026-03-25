"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { ease } from "@/lib/animations";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      className="group cursor-pointer overflow-hidden rounded-lg border border-ghost-steel/20 bg-ghost-dark"
      whileHover={{
        borderColor: "rgba(139, 0, 0, 0.4)",
        boxShadow: "0 8px 30px rgba(139, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.4, ease: ease.silk }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: ease.silk }}
        >
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Gradient overlay at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ghost-dark to-transparent" />

        {/* Tier badge — top left */}
        <div className="absolute top-3 left-3 z-10">
          {product.tier === "Core" && (
            <span className="rounded bg-ghost-steel/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ghost-light backdrop-blur-sm">
              Core
            </span>
          )}
          {product.tier === "Heritage" && (
            <span className="rounded border border-accent-red/30 bg-accent-red/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-red backdrop-blur-sm">
              Heritage
            </span>
          )}
          {product.tier === "Premium" && (
            <span className="rounded bg-accent-red px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Premium
            </span>
          )}
        </div>

        {/* NEW badge — top right */}
        {product.isNew && (
          <span className="absolute top-3 right-3 z-10 rounded bg-accent-crimson px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            New
          </span>
        )}
      </div>

      {/* Text area */}
      <div className="p-5">
        <h3 className="font-medium text-ghost-light transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-red">
          {product.title}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-wider text-ghost-silver">
          {product.steel}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-heading text-lg text-accent-crimson">
            {formatPrice(product.price)}
          </span>
          <ArrowRight className="h-4 w-4 -translate-x-2 text-accent-red opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </div>
      </div>
    </motion.div>
  );
}
