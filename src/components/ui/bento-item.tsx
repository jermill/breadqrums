import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const bentoItemVariants = cva(
  "relative overflow-hidden rounded-lg bg-gradient-to-b from-muted/50 to-muted p-4 transition-all hover:shadow-lg md:p-6 lg:p-8",
  {
    variants: {
      size: {
        default: "col-span-1",
        wide: "col-span-2",
        tall: "row-span-2",
        large: "col-span-2 row-span-2",
      },
      variant: {
        default: "from-muted/50 to-muted hover:from-muted/60 hover:to-muted/90",
        primary: "from-primary/10 to-primary/30 hover:from-primary/20 hover:to-primary/40",
        secondary: "from-secondary/10 to-secondary/30 hover:from-secondary/20 hover:to-secondary/40",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

interface BentoItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bentoItemVariants> {
  title?: string;
  description?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function BentoItem({
  title,
  description,
  header,
  footer,
  children,
  className,
  size,
  variant,
  ...props
}: BentoItemProps) {
  return (
    <div
      className={cn(bentoItemVariants({ size, variant }), className)}
      {...props}
    >
      {header && <div className="mb-4">{header}</div>}
      
      {(title || description) && (
        <div className="mb-4 space-y-2">
          {title && (
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground md:text-base">
              {description}
            </p>
          )}
        </div>
      )}
      
      <div className="relative h-full w-full">{children}</div>
      
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}