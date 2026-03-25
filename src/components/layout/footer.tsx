import { Separator } from "@/components/ui/separator";
import { footerNavigation } from "@/data/navigation";
import { BRAND } from "@/lib/constants";
import { KatanaSlashDivider } from "@/components/shared/katana-slash-divider";

export function Footer() {
  return (
    <footer className="border-t border-ghost-steel/20 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src="/images/about/GB_Transparent_Diamond_Logo.webp"
              alt="Ghost Blades"
              className="mb-4 h-12 w-auto"
            />
            <p className="text-ghost-silver text-sm leading-relaxed">
              Swedish premium destination for handcrafted Japanese swords. Every
              blade tells a story.
            </p>
          </div>

          {/* Footer nav sections */}
          {footerNavigation.map((section) => (
            <div key={section.title}>
              <h4 className="text-ghost-white mb-4 text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <span
                      className="group relative inline-block cursor-pointer text-sm text-ghost-silver transition-colors hover:text-accent-red"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-red transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-accent-red/20" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-ghost-silver text-xs">
            &copy; {new Date().getFullYear()} Ghost Blades. All rights reserved.
          </p>
          <p className="text-ghost-silver text-xs">
            Handcrafted with precision in the spirit of the samurai.
          </p>
        </div>
      </div>
    </footer>
  );
}
