"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { toast } from "sonner";
import type { Product } from "@/data/products";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const toggleCart = useCartStore((s) => s.toggleCart);

  function handleAddToCart() {
    addItem({
      id: product.id,
      handle: product.handle,
      title: product.title,
      image: product.images[0],
      price: product.price,
      quantity: 1,
    });

    setAdded(true);
    toast.success(`${product.title} added to cart`);

    setTimeout(() => {
      setAdded(false);
      toggleCart();
    }, 1000);
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={!product.inStock || added}
      size="lg"
      className="w-full bg-accent-red-light text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-crimson disabled:opacity-50"
    >
      {added ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart &mdash; {product.price.toLocaleString("sv-SE")} SEK
        </>
      )}
    </Button>
  );
}
