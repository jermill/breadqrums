import { BentoBox } from "@/components/ui/bento-box";
import { TitleSection } from "./hero/title-section";
import { PUMP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <BentoBox className="relative min-h-[500px] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6AC9D8]/10 via-background to-[#F5BC55]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(106,201,216,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,188,85,0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative flex h-full min-h-[500px] flex-col items-center justify-center space-y-8 p-8 text-center sm:space-y-10 sm:p-12">
        <TitleSection />
        
        <div className="space-y-8 w-full">
          <div className="flex flex-col items-center gap-4">
            <a 
              href={PUMP_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6AC9D8] to-[#F5BC55] px-8 py-4 text-lg font-bold text-background shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Get $KNEAD on Pump.fun
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">
                Join the Breadheads! 🍞
              </p>
              <p className="text-sm text-muted-foreground">
                The crustiest community in crypto
              </p>
            </div>
          </div>
        </div>
      </div>
    </BentoBox>
  );
}