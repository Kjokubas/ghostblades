import { cn } from "@/lib/utils";

interface KatanaSlashDividerProps {
  variant?: "single" | "double" | "triple";
  className?: string;
}

export function KatanaSlashDivider({
  variant = "single",
  className,
}: KatanaSlashDividerProps) {
  const lines = variant === "single" ? 1 : variant === "double" ? 2 : 3;

  return (
    <div
      className={cn("flex items-center justify-center py-6", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 40"
        className="h-8 w-48 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="slash-rough">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.05"
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
        {/* Main slash line */}
        <line
          x1="10"
          y1="35"
          x2="190"
          y2="5"
          stroke="#8B2020"
          strokeWidth="2.5"
          strokeLinecap="square"
          filter="url(#slash-rough)"
          opacity="0.9"
        />
        {lines >= 2 && (
          <line
            x1="20"
            y1="38"
            x2="180"
            y2="10"
            stroke="#DC2626"
            strokeWidth="1.5"
            strokeLinecap="square"
            filter="url(#slash-rough)"
            opacity="0.5"
          />
        )}
        {lines >= 3 && (
          <line
            x1="30"
            y1="32"
            x2="170"
            y2="2"
            stroke="#B33030"
            strokeWidth="1"
            strokeLinecap="square"
            filter="url(#slash-rough)"
            opacity="0.3"
          />
        )}
      </svg>
    </div>
  );
}
