import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageTransition } from "@/components/shared/page-transition";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Ghost Blades collection of handcrafted Japanese swords.",
};

export default function SearchPage() {
  // TODO: Implement search with:
  // - Client-side filtering of mock products
  // - Debounced search input
  // - Product grid results with highlight matching
  return (
    <PageTransition>
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Search"

          />

          <div className="relative mb-12">
            <Search className="text-ghost-silver absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Search for katana, wakizashi, tanto..."
              className="border-ghost-steel bg-ghost-dark h-14 pl-12 text-lg"
            />
          </div>

          <p className="text-ghost-silver text-center">
            Start typing to search our collection of handcrafted Japanese
            swords.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
