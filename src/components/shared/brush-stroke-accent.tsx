import { cn } from "@/lib/utils";

interface BrushStrokeAccentProps {
  variant?: "underline" | "splash" | "strike";
  className?: string;
}

export function BrushStrokeAccent({
  variant = "underline",
  className,
}: BrushStrokeAccentProps) {
  if (variant === "underline") {
    return (
      <svg
        viewBox="0 0 300 12"
        className={cn("h-3 w-full", className)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="brush-rough">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.04"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <path
          d="M0 6 C30 3, 60 9, 100 5 C140 2, 180 8, 220 4 C250 7, 280 3, 300 6"
          stroke="#8B2020"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#brush-rough)"
          opacity="0.7"
        />
        <path
          d="M10 7 C50 4, 90 10, 140 5 C190 2, 240 8, 290 6"
          stroke="#DC2626"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#brush-rough)"
          opacity="0.3"
        />
      </svg>
    );
  }

  if (variant === "splash") {
    return (
      <svg
        viewBox="0 0 120 120"
        className={cn("h-28 w-28", className)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="splash-rough">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="35"
          fill="#8B2020"
          filter="url(#splash-rough)"
          opacity="0.15"
        />
        <ellipse
          cx="55"
          cy="50"
          rx="20"
          ry="28"
          fill="#DC2626"
          filter="url(#splash-rough)"
          opacity="0.1"
        />
        {/* Splatter dots */}
        <circle cx="25" cy="30" r="4" fill="#8B2020" opacity="0.12" />
        <circle cx="90" cy="25" r="3" fill="#B33030" opacity="0.1" />
        <circle cx="85" cy="85" r="5" fill="#8B2020" opacity="0.08" />
        <circle cx="20" cy="80" r="3" fill="#DC2626" opacity="0.1" />
      </svg>
    );
  }

  // variant === "strike"
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-full w-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="strike-rough">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.06"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <line
        x1="5"
        y1="95"
        x2="95"
        y2="5"
        stroke="#8B2020"
        strokeWidth="3"
        strokeLinecap="square"
        filter="url(#strike-rough)"
        opacity="0.3"
      />
    </svg>
  );
}
