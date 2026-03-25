"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { getFeaturedReviews } from "@/data/reviews";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ease } from "@/lib/animations";
import "swiper/css";

export function ReviewsSection() {
  const reviews = getFeaturedReviews();

  return (
    <section className="bg-ghost-black px-4 py-16 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What Our"
          titleAccent="Clients"
          titleSuffix="Say"
          subtitle="Trusted by sword collectors and martial artists worldwide."
        />

        <RevealOnScroll type="fade-up" delay={0.3}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            speed={800}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={review.id}>
                <motion.div
                  className="relative rounded-xl border border-ghost-steel/10 bg-ghost-dark/50 p-8"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: ease.silk,
                    delay: idx * 0.5,
                  }}
                >
                  {/* Decorative quote mark */}
                  <span className="pointer-events-none absolute top-4 right-6 select-none font-serif text-6xl leading-none text-ghost-steel/10">
                    &ldquo;
                  </span>

                  {/* Stars — staggered fill */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{
                          duration: 0.3,
                          ease: ease.snap,
                          delay: 0.5 + j * 0.08,
                        }}
                      >
                        <Star className="h-4 w-4 fill-current text-accent-red" />
                      </motion.div>
                    ))}
                  </div>

                  <h4 className="mb-2 font-semibold text-ghost-white">
                    {review.title}
                  </h4>
                  <p className="mb-6 text-sm leading-relaxed italic text-ghost-light/90">
                    {review.body}
                  </p>

                  <div className="border-t border-ghost-steel/20 pt-4">
                    <p className="text-sm font-medium text-ghost-light">
                      {review.author}
                    </p>
                    <p className="text-xs text-ghost-silver">
                      {review.country} &bull;{" "}
                      {review.verified && "Verified Purchase"}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </RevealOnScroll>
      </div>
    </section>
  );
}
