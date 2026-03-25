"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, total } =
    useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="flex w-full max-w-md flex-col border-ghost-steel/30 bg-ghost-dark p-0">
        <SheetHeader className="border-b border-ghost-steel/30 px-6 py-4">
          <SheetTitle className="font-heading flex items-center gap-2 text-lg uppercase tracking-wider text-ghost-white">
            <ShoppingBag className="h-5 w-5" />
            Cart ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <ShoppingBag className="mb-4 h-16 w-16 text-ghost-steel" />
            <p className="mb-6 text-center text-ghost-silver">
              Your cart is empty. Discover our collection of handcrafted
              Japanese swords.
            </p>
            <span
              className="inline-flex h-8 cursor-pointer items-center justify-center border border-accent-red-light px-6 text-sm uppercase tracking-wider text-accent-red-light transition-colors hover:bg-accent-red-light hover:text-white"
            >
              Browse Collections
            </span>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="bg-ghost-charcoal relative h-20 w-20 flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <span
                          className="cursor-pointer text-sm font-medium text-ghost-light transition-colors hover:text-accent-red-light"
                        >
                          {item.title}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-ghost-silver transition-colors hover:text-accent-crimson"
                          aria-label={`Remove ${item.title}`}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-1 text-sm font-medium text-accent-crimson">
                        {formatPrice(item.price)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center border border-ghost-steel text-ghost-silver transition-colors hover:border-accent-red hover:text-accent-red-light"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm text-ghost-light">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center border border-ghost-steel text-ghost-silver transition-colors hover:border-accent-red hover:text-accent-red-light"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-ghost-steel/30 px-6 py-4">
              <Separator className="mb-4 bg-ghost-steel/30" />
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider text-ghost-silver">
                  Total
                </span>
                <span className="font-heading text-xl font-bold text-accent-crimson">
                  {formatPrice(total())}
                </span>
              </div>
              <Button className="w-full bg-accent-red-light text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-crimson">
                Proceed to Checkout
              </Button>
              <p className="mt-2 text-center text-xs text-ghost-silver">
                Free worldwide shipping on all orders
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
