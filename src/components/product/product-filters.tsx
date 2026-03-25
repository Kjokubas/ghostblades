"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  activeTier: string | null;
  onTierChange: (tier: string | null) => void;
}

const tiers = ["Core", "Heritage", "Premium"];

export function ProductFilters({ activeTier, onTierChange }: ProductFiltersProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <span className="text-sm uppercase tracking-wider text-ghost-silver">
        Filter:
      </span>
      <button
        onClick={() => onTierChange(null)}
        className={cn(
          "text-sm uppercase tracking-wider transition-colors",
          activeTier === null
            ? "text-accent-crimson"
            : "text-ghost-silver hover:text-ghost-light"
        )}
      >
        All
      </button>
      {tiers.map((tier) => (
        <button
          key={tier}
          onClick={() => onTierChange(activeTier === tier ? null : tier)}
        >
          <Badge
            variant="outline"
            className={cn(
              "cursor-pointer transition-colors",
              activeTier === tier
                ? "border-accent-crimson text-accent-crimson"
                : "border-ghost-steel text-ghost-silver hover:border-ghost-light"
            )}
          >
            {tier}
          </Badge>
        </button>
      ))}
    </div>
  );
}
