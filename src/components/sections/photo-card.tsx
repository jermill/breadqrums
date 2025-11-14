import { BentoBox } from "@/components/ui/bento-box";
import { PUMP_URL } from "@/lib/constants";

export function PhotoCard() {
  return (
    <BentoBox className="group relative min-h-[500px] overflow-hidden">
      <a
        href={PUMP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full min-h-[500px] items-center justify-center"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5BC55]/10 via-background to-[#6AC9D8]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,188,85,0.15),transparent_70%)]" />
        
        {/* Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5BC55]/20 via-transparent to-[#6AC9D8]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Image */}
        <img
          src="https://github.com/QRUMN/imgaes/blob/main/LilQrumFull.png?raw=true"
          alt="Lil Qrum in a Hoodie"
          className="relative z-10 h-full w-full object-contain p-8 transition-all duration-500 will-change-transform group-hover:scale-105 group-hover:drop-shadow-2xl"
        />
        
        {/* Label */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full border border-border/50 bg-background/80 px-6 py-2 backdrop-blur-md transition-all duration-300 group-hover:border-[#F5BC55] group-hover:bg-background/90">
          <p className="text-sm font-bold sm:text-base">Meet Lil Qrum 🍞</p>
        </div>
      </a>
    </BentoBox>
  );
}