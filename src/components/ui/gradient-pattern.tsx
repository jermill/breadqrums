import { cn } from "@/lib/utils";

export function GradientPattern({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("absolute inset-0 opacity-20", className)}>
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#F4C430]/20 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#F5BC55]/10 to-transparent" />
    </div>
  );
}