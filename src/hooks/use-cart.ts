"use client";

import { useCartStore } from "@/stores/cart-store";

export function useCart() {
  const store = useCartStore();

  return {
    items: store.items,
    isOpen: store.isOpen,
    addItem: store.addItem,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    toggleCart: store.toggleCart,
    itemCount: store.itemCount(),
    total: store.total(),
  };
}
