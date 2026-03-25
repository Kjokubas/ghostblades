import { cn } from "@/lib/utils";

interface SmokeMistProps {
  position: "top" | "bottom";
  className?: string;
  intensity?: number;
}

export function SmokeMist({
  position,
  className,
  intensity = 0.6,
}: SmokeMistProps) {
  const isTop = position === "top";

  return (
    <div
      className={cn(
        "pointer-events-none absolute right-0 left-0 z-10",
        isTop ? "top-0" : "bottom-0",
        className
      )}
      style={{ height: `${Math.round(120 * intensity)}px` }}
      aria-hidden="true"
    >
      {/* Primary fog layer */}
      <div
        className="absolute inset-0"
        style={{
          background: isTop
            ? "linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.7) 30%, transparent 100%)"
            : "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.7) 30%, transparent 100%)",
        }}
      />
      {/* Subtle red-tinted fog layer */}
      <div
        className="absolute inset-0"
        style={{
          background: isTop
            ? "linear-gradient(to bottom, rgba(139,32,32,0.08) 0%, transparent 60%)"
            : "linear-gradient(to top, rgba(139,32,32,0.08) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
