import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageTransition } from "@/components/shared/page-transition";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Ghost Blades swords, shipping, returns, and custom orders.",
};

const faqs = [
  {
    question: "Are your swords sharp and functional?",
    answer:
      "Yes. All Ghost Blades swords are hand-sharpened and fully functional. They are crafted from real carbon or folded steel and are suitable for cutting practice (tameshigiri), display, and collection.",
  },
  {
    question: "What is the difference between Core, Heritage, and Premium tiers?",
    answer:
      "Core swords use 1095 high carbon steel with quality fittings — great for beginners. Heritage swords use T10 clay-tempered steel with a real hamon and premium fittings. Premium swords use folded steel with the highest-quality craftsmanship and custom forging.",
  },
  {
    question: "Do you ship worldwide?",
    answer:
      "Yes! We offer free worldwide shipping on all orders. Most orders ship within 1-3 business days. Delivery times vary by region: Europe (3-7 days), North America (5-10 days), Asia-Pacific (7-14 days).",
  },
  {
    question: "What is a hamon?",
    answer:
      "A hamon is the visible temper line on a Japanese blade, created during the clay tempering process. It is where the hard edge meets the softer spine, and each one is unique. Only clay-tempered blades (Heritage and Premium tiers) have a real hamon.",
  },
  {
    question: "Can I request a custom sword?",
    answer:
      "Absolutely! Visit our Custom Katana page to design your own blade, or contact us directly with specific requirements. Custom orders typically take 4-8 weeks to complete.",
  },
  {
    question: "How do I care for my sword?",
    answer:
      "Keep your blade lightly oiled with choji oil (included with Heritage and Premium tiers), store it in a dry environment, and avoid touching the blade with bare hands. See our Katana Guide for detailed maintenance instructions.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unused swords in their original packaging. Custom orders are non-refundable. If your sword arrives damaged, contact us immediately for a full replacement.",
  },
  {
    question: "Are these swords legal in my country?",
    answer:
      "Sword legality varies by country and region. It is the buyer's responsibility to verify local laws. In most countries, owning a sword for collection, display, or martial arts is legal. We recommend checking your local regulations before ordering.",
  },
];

export default function FaqPage() {
  return (
    <PageTransition>
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="FAQ"
            subtitle="Everything you need to know about our swords, shipping, and more."

          />

          <RevealOnScroll>
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-ghost-steel/30"
                >
                  <AccordionTrigger className="text-ghost-light hover:text-accent-red-light text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-ghost-silver leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealOnScroll>
        </div>
      </section>
    </PageTransition>
  );
}
