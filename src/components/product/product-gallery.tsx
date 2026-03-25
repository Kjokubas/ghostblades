"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="bg-ghost-charcoal relative aspect-square overflow-hidden ring-1 ring-ghost-steel/20">
        <Image
          src={images[selectedIndex]}
          alt={`${title} - Image ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={cn(
                "bg-ghost-charcoal relative aspect-square w-20 overflow-hidden border-2 transition-colors",
                i === selectedIndex
                  ? "border-accent-crimson"
                  : "border-transparent hover:border-accent-red/30"
              )}
            >
              <Image
                src={image}
                alt={`${title} - Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
