import * as React from "react";
import { cn } from "@/lib/utils";

interface BentoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "accent";
  children: React.ReactNode;
}

export function BentoBox({
  className,
  variant = "default",
  children,
  ...props
}: BentoBoxProps) {
  const variants = {
    default: "bg-gradient-to-br from-card to-card/50 text-card-foreground border-border/50 hover:border-border hover:shadow-2xl hover:shadow-primary/10",
    secondary: "bg-gradient-to-br from-secondary/5 to-secondary/20 text-secondary-foreground border-secondary/20 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10",
    accent: "bg-gradient-to-br from-accent/5 to-accent/20 text-accent-foreground border-accent/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:scale-[1.01]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}