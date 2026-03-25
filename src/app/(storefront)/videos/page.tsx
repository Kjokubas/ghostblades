import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { PageTransition } from "@/components/shared/page-transition";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Ghost Blades sword reviews, unboxings, cutting tests, and forging process videos.",
};

const videos = [
  {
    title: "Shadow Blade Katana \u2014 Full Review",
    description: "An in-depth look at our best-selling Heritage tier katana.",
    thumbnail: "https://picsum.photos/seed/vid1/640/360",
  },
  {
    title: "The Art of Clay Tempering",
    description:
      "Watch how a real hamon is created through the traditional clay tempering process.",
    thumbnail: "https://picsum.photos/seed/vid2/640/360",
  },
  {
    title: "Golden Dragon Katana Unboxing",
    description: "Unboxing our flagship Premium tier katana for the first time.",
    thumbnail: "https://picsum.photos/seed/vid3/640/360",
  },
  {
    title: "Cutting Test: T10 vs 1095 Steel",
    description: "Side-by-side cutting comparison of our two most popular steel types.",
    thumbnail: "https://picsum.photos/seed/vid4/640/360",
  },
  {
    title: "How to Maintain Your Katana",
    description: "Step-by-step sword care tutorial covering oiling, storage, and handling.",
    thumbnail: "https://picsum.photos/seed/vid5/640/360",
  },
  {
    title: "Ghost Blades \u2014 Behind the Brand",
    description: "The story behind Ghost Blades and our commitment to quality craftsmanship.",
    thumbnail: "https://picsum.photos/seed/vid6/640/360",
  },
];

export default function VideosPage() {
  // TODO: Replace thumbnails with ReactPlayer video embeds (YouTube/Vimeo)
  return (
    <PageTransition>
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Videos"
            subtitle="Reviews, unboxings, cutting tests, and behind-the-scenes forging footage."

          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
              <RevealOnScroll key={video.title} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="bg-ghost-charcoal relative aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/10">
                      <div className="bg-accent-red-light/90 flex h-14 w-14 items-center justify-center rounded-full">
                        <svg
                          className="text-ghost-black ml-1 h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-ghost-light group-hover:text-accent-red-light mt-3 font-medium transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-ghost-silver mt-1 text-sm">
                    {video.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
