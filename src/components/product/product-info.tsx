"use client";

import { Badge } from "@/components/ui/badge";
import { Star, Check } from "lucide-react";
import { AddToCartButton } from "./add-to-cart-button";
import { KatanaSlashDivider } from "@/components/shared/katana-slash-divider";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {/* Tier & collection */}
      <div className="flex items-center gap-3">
        <Badge className="border-none bg-accent-red font-semibold text-white">
          {product.tier}
        </Badge>
        <Badge
          variant="outline"
          className="border-ghost-steel capitalize text-ghost-silver"
        >
          {product.collection}
        </Badge>
        {product.isNew && (
          <Badge className="border-none bg-accent-crimson text-white">
            New
          </Badge>
        )}
      </div>

      {/* Title */}
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wider text-ghost-white lg:text-4xl">
        {product.title}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.round(product.rating)
                  ? "fill-current text-accent-red-light"
                  : "text-ghost-steel"
              )}
            />
          ))}
        </div>
        <span className="text-sm text-ghost-silver">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-accent-crimson">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-lg text-ghost-silver line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="leading-relaxed text-ghost-silver">{product.description}</p>

      <KatanaSlashDivider variant="single" className="py-2" />

      {/* Specs */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-ghost-silver">
            Steel
          </p>
          <p className="text-sm font-medium text-ghost-light">
            {product.steel}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-ghost-silver">
            Hamon
          </p>
          <p className="text-sm font-medium text-ghost-light">
            {product.hamon}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-ghost-silver">
            Length
          </p>
          <p className="text-sm font-medium text-ghost-light">
            {product.length}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-ghost-silver">
            Weight
          </p>
          <p className="text-sm font-medium text-ghost-light">
            {product.weight}
          </p>
        </div>
      </div>

      <KatanaSlashDivider variant="single" className="py-2" />

      {/* Features */}
      <ul className="space-y-2">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-4 w-4 flex-shrink-0 text-accent-crimson" />
            <span className="text-sm text-ghost-silver">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Add to cart */}
      <AddToCartButton product={product} />

      {/* Stock status */}
      <p className="text-center text-xs text-ghost-silver">
        {product.inStock ? (
          <span className="text-green-500">In stock &bull; Ships in 1-3 days</span>
        ) : (
          <span className="text-accent-crimson">Out of stock</span>
        )}
      </p>
    </div>
  );
}
