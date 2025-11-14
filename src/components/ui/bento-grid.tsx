import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(180px,auto)] gap-4 md:gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}