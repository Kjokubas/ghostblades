"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="group relative block aspect-square cursor-pointer overflow-hidden border-0 bg-black transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(220,38,38,0.2),0_20px_60px_rgba(139,32,32,0.1)]"
    >
      {/* Image */}
      <Image
        src={product.images[0]}
        alt={product.title}
        fill
        className="scale-105 object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-1000 ease-out group-hover:from-black/80 group-hover:via-accent-red/10" />

      {/* Red glow edge on hover — top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-accent-red/0 transition-all duration-500 group-hover:bg-accent-red/50 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]" />
      {/* Red glow edge on hover — bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-accent-red/0 transition-all duration-500 group-hover:bg-accent-red/50 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]" />

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-8">
        <h3
          className="font-heading mb-1 text-2xl font-bold uppercase tracking-wider text-ghost-white transition-all duration-300 group-hover:text-white"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          {product.title}
        </h3>
        <p
          className="mb-3 text-lg font-semibold text-accent-crimson"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
        >
          {formatPrice(product.price)}
        </p>

        {/* Reveal line + CTA on hover */}
        <div className="flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="text-sm uppercase tracking-wider text-accent-red-light">
            View Details
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-accent-red-light transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
