"use client";

import { Star } from "lucide-react";
import { getFeaturedReviews } from "@/data/reviews";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { KatanaSlashDivider } from "@/components/shared/katana-slash-divider";

export function ReviewsSection() {
  const reviews = getFeaturedReviews();

  return (
    <section className="bg-ghost-black px-4 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What Our"
          titleAccent="Clients"
          titleSuffix="Say"
          subtitle="Trusted by sword collectors and martial artists worldwide."

        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <RevealOnScroll key={review.id} delay={i * 0.1}>
              <div className="border border-ghost-steel/30 bg-ghost-black p-6 transition-colors hover:border-accent-red/30">
                {/* Stars */}
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="text-accent-red-light h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                <h4 className="text-ghost-white mb-2 font-semibold">
                  {review.title}
                </h4>
                <p className="text-ghost-silver mb-4 text-sm leading-relaxed">
                  {review.body}
                </p>

                <div className="border-t border-ghost-steel/30 pt-3">
                  <p className="text-ghost-light text-sm font-medium">
                    {review.author}
                  </p>
                  <p className="text-ghost-silver text-xs">
                    {review.country} &bull;{" "}
                    {review.verified && "Verified Purchase"}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
