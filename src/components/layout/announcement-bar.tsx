"use client";

import { BRAND } from "@/lib/constants";

export function AnnouncementBar() {
  const text = BRAND.announcementText;

  return (
    <div className="texture-noise relative overflow-hidden border-b border-accent-red/30 bg-accent-red py-2 text-white">
      <div className="animate-ticker flex whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="mx-8 text-xs font-semibold uppercase tracking-widest"
          >
            &#x2694; {text} &#x2694;
          </span>
        ))}
      </div>
    </div>
  );
}
