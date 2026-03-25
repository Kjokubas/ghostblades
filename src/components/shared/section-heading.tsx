"use client";

import { RevealOnScroll } from "./reveal-on-scroll";
import { BrushStrokeAccent } from "./brush-stroke-accent";
import { KatanaSlashDivider } from "./katana-slash-divider";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  titleAccent?: string;
  titleSuffix?: string;
  subtitle?: string;
  japanese?: string;
  align?: "left" | "center";
  showSlash?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  titleAccent,
  titleSuffix,
  subtitle,
  japanese,
  align = "left",
  showSlash = false,
  className,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {japanese && (
        <p className="font-japanese text-accent-red/60 mb-3 text-sm tracking-[0.3em]">
          {japanese}
        </p>
      )}
      <h2 className="font-heading text-ghost-white text-4xl font-bold uppercase tracking-wider md:text-5xl lg:text-6xl">
        {title}
        {titleAccent && (
          <>{" "}<span className="text-accent-crimson">{titleAccent}</span></>
        )}
        {titleSuffix && <>{" "}{titleSuffix}</>}
      </h2>
      <div className={cn("mx-auto mt-4 max-w-xs", align === "left" && "mx-0")}>
        <BrushStrokeAccent variant="underline" />
      </div>
      {subtitle && (
        <p className={cn("text-ghost-silver/80 mt-6 max-w-2xl text-lg md:text-xl", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
      {showSlash && (
        <KatanaSlashDivider variant="single" className="mt-6 py-2" />
      )}
    </RevealOnScroll>
  );
}
