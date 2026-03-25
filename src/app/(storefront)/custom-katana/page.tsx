import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageTransition } from "@/components/shared/page-transition";

export const metadata: Metadata = {
  title: "Custom Katana Builder",
  description:
    "Design your own custom katana. Choose the steel, hamon, fittings, and handle wrap to create a one-of-a-kind blade.",
};

export default function CustomKatanaPage() {
  // TODO: Build an interactive katana customizer with:
  // - Step-by-step configuration (steel type, blade length, hamon style)
  // - Handle wrap color and material selection
  // - Tsuba design selection
  // - Saya color and finish
  // - Live price calculator
  // - 3D preview or illustration that updates
  return (
    <PageTransition>
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Custom Katana"
            subtitle="Design your dream blade from scratch. Choose every detail, from steel type to handle wrap."

          />

          <div className="border-ghost-steel/30 bg-ghost-dark/50 border p-12 text-center">
            <p className="text-ghost-silver text-lg">
              The custom katana builder is coming soon. Configure every detail
              of your perfect blade.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
