import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground ",
        secondary: "bg-secondary text-secondary-foreground ",
        destructive: "bg-destructive text-destructive-foreground ",
        outline: "text-foreground",
        skill:
          "bg-white/60 text-muted-foreground border-transparent dark:bg-teal-600/10 dark:text-teal-300/90 hover:bg-zinc-700 hover:bg-white/20 dark:hover:bg-teal-600/20 transition-colors",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
