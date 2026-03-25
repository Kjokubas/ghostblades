"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center border bg-clip-padding text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 outline-none select-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-accent-red/50 bg-accent-red-light text-white hover:bg-accent-crimson hover:border-accent-crimson hover:shadow-[0_0_20px_rgba(220,38,38,0.5),0_0_40px_rgba(139,32,32,0.25)] focus-visible:shadow-[0_0_20px_rgba(220,38,38,0.5)]",
        outline:
          "border-ghost-silver/30 bg-transparent text-ghost-light hover:border-accent-red-light hover:text-accent-red-light hover:shadow-[0_0_20px_rgba(220,38,38,0.35),0_0_40px_rgba(139,32,32,0.15)] focus-visible:border-accent-red-light",
        secondary:
          "border-ghost-steel bg-ghost-steel/50 text-ghost-light hover:bg-ghost-steel hover:text-ghost-white hover:border-ghost-silver/50 hover:shadow-[0_0_16px_rgba(220,38,38,0.2)]",
        ghost:
          "border-transparent bg-transparent text-ghost-silver hover:text-ghost-white hover:bg-ghost-steel/30 hover:shadow-[0_0_12px_rgba(220,38,38,0.15)]",
        destructive:
          "border-accent-crimson/50 bg-accent-crimson/10 text-accent-crimson hover:bg-accent-crimson/20 hover:border-accent-crimson hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]",
        gold:
          "border-accent-gold-dim/50 bg-transparent text-accent-gold hover:bg-accent-gold/10 hover:border-accent-gold hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]",
        link: "border-transparent text-accent-red-light underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 gap-2 px-6",
        xs: "h-7 gap-1 px-3 text-xs",
        sm: "h-8 gap-1.5 px-4 text-xs",
        lg: "h-11 gap-2 px-8",
        xl: "h-12 gap-2.5 px-10 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
