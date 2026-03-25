import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { PageTransition } from "@/components/shared/page-transition";

export const metadata: Metadata = {
  title: "Katana Guide",
  description:
    "Learn about Japanese sword types, steel grades, hamon patterns, and how to choose your first katana.",
};

const guideTopics = [
  {
    title: "Types of Japanese Swords",
    description:
      "Understand the differences between katana, wakizashi, tanto, nodachi, and more.",
  },
  {
    title: "Steel Types Explained",
    description:
      "From 1095 carbon steel to T10 clay-tempered and folded steel \u2014 learn what makes each unique.",
  },
  {
    title: "Understanding Hamon Patterns",
    description:
      "The visible temper line on a blade. Learn about suguha, gunome, notare, and choji styles.",
  },
  {
    title: "How to Choose Your First Katana",
    description:
      "A beginner\u2019s guide to selecting the right sword based on your budget, use case, and preferences.",
  },
  {
    title: "Sword Care & Maintenance",
    description:
      "Keep your blade pristine with proper oiling, storage, and handling techniques.",
  },
  {
    title: "The Art of Iaido",
    description:
      "An introduction to the Japanese martial art of drawing and cutting with a katana.",
  },
];

export default function KatanaGuidePage() {
  // TODO: Build full educational content with:
  // - Rich illustrated articles
  // - Comparison tables (steel types, price tiers)
  // - Interactive hamon pattern visualizer
  // - Video embeds for technique demonstrations
  return (
    <PageTransition>
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Katana Guide"
            subtitle="Everything you need to know about Japanese swords, from history to buying your first blade."

          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guideTopics.map((topic, i) => (
              <RevealOnScroll key={topic.title} delay={i * 0.1}>
                <div className="border-ghost-steel/30 bg-ghost-dark hover:border-accent-red/30 group border p-8 transition-colors">
                  <h3 className="font-heading text-ghost-white group-hover:text-accent-red-light mb-3 text-xl font-bold transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-ghost-silver text-sm leading-relaxed">
                    {topic.description}
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
