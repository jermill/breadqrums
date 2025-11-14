import { cn } from "@/lib/utils";

interface LilQrumProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function LilQrum({ size = "md", className, ...props }: LilQrumProps) {
  const sizeClasses = {
    sm: "h-24 w-24",
    md: "h-32 w-32",
    lg: "h-48 w-48",
  };

  return (
    <div
      className={cn(
        "relative animate-float select-none",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <img
        src="/lil-qrum.png"
        alt="Lil Qrum"
        className="h-full w-full object-contain drop-shadow-2xl"
      />
    </div>
  );
}