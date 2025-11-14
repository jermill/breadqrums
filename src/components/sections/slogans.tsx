import { BentoBox } from "@/components/ui/bento-box";
import { Sparkles } from "lucide-react";

const slogans = [
  "In Crust We Trust ✨",
  "Baked on Solana, Served Worldwide",
  "The Upper Crust of Crypto",
  "We're Gonna Make It (WAGMI) To The Bakery!",
];

export function Slogans() {
  return (
    <BentoBox className="space-y-6 p-6 sm:space-y-8 sm:p-8 lg:p-10">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-[#F5BC55] to-[#6AC9D8] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
          Our Mantras
        </h2>
      </div>

      <div className="grid gap-4 sm:gap-5">
        {slogans.map((slogan, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-r from-[#6AC9D8]/10 via-background/50 to-[#F5BC55]/10 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-border hover:shadow-xl sm:p-6"
          >
            <p className="text-base font-bold sm:text-lg lg:text-xl">
              {slogan}
            </p>
            {index === 0 && (
              <Sparkles className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#F5BC55] opacity-30 transition-opacity group-hover:opacity-60 sm:h-6 sm:w-6" />
            )}
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-[#F5BC55]/20 to-[#6AC9D8]/20 p-6 text-center">
        <p className="text-lg font-bold italic sm:text-xl">
          Remember: In Crust We Trust! ✨
        </p>
      </div>
    </BentoBox>
  );
}

