import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { PageTransition } from "@/components/shared/page-transition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ghost Blades. Questions about our swords, custom orders, or shipping? We're here to help.",
};

export default function ContactPage() {
  // TODO: Add form handling with React Hook Form + Zod validation
  // TODO: Add server action or API route for form submission
  return (
    <PageTransition>
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Contact Us"
            subtitle="Have a question about our swords or a custom order? We'd love to hear from you."

          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <RevealOnScroll direction="left">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-accent-crimson mt-1 h-5 w-5" />
                  <div>
                    <h3 className="text-ghost-white font-semibold">Email</h3>
                    <p className="text-ghost-silver text-sm">
                      info@ghostblades.se
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent-crimson mt-1 h-5 w-5" />
                  <div>
                    <h3 className="text-ghost-white font-semibold">Location</h3>
                    <p className="text-ghost-silver text-sm">
                      Stockholm, Sweden
                    </p>
                  </div>
                </div>
                <p className="text-ghost-silver text-sm leading-relaxed">
                  We typically respond within 24 hours. For custom katana
                  inquiries, please include your preferred steel type and any
                  design references.
                </p>
              </div>
            </RevealOnScroll>

            {/* Contact form */}
            <RevealOnScroll direction="right">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-ghost-steel bg-ghost-dark"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-ghost-steel bg-ghost-dark"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    className="border-ghost-steel bg-ghost-dark"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={5}
                    className="border-ghost-steel bg-ghost-dark"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-accent-red-light text-white hover:bg-accent-crimson w-full font-semibold uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
