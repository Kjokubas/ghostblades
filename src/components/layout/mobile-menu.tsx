"use client";

import Link from "next/link";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { mainNavigation } from "@/data/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full max-w-sm border-ghost-steel/30 bg-ghost-dark p-0">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ghost-steel/30 px-6 py-4">
            <img
              src="/images/about/GB_Transparent_Diamond_Logo.webp"
              alt="Ghost Blades"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <span
                    className="font-heading block cursor-pointer border-l-2 border-transparent pl-4 text-2xl font-bold uppercase tracking-wider text-ghost-light transition-all hover:border-accent-red hover:text-accent-red-light"
                  >
                    {item.label}
                  </span>
                  {item.children && (
                    <ul className="mt-3 ml-4 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <span
                            className="block cursor-pointer border-l border-ghost-steel/30 pl-4 text-sm uppercase tracking-wider text-ghost-silver transition-colors hover:border-accent-red/50 hover:text-accent-red-light"
                          >
                            {child.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-ghost-steel/30 px-6 py-4">
            <p className="text-accent-red/40 text-xs">
              Ghost Blades
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
