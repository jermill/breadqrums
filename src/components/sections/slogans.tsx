import { BentoBox } from "@/components/ui/bento-box";

const slogans = [
  { text: "In Crust We Trust ✨", emoji: "🍞" },
  { text: "Breadheads Stick Together", emoji: "🤝" },
  { text: "Baked on Solana, Served Worldwide", emoji: "🌍" },
  { text: "The Upper Crust of Crypto", emoji: "👑" },
  { text: "WAGMI To The Bakery!", emoji: "🚀" },
  { text: "From Breadheads, For Breadheads", emoji: "💯" },
];

export function Slogans() {
  return (
    <BentoBox className="relative overflow-hidden space-y-6 p-6 sm:space-y-8 sm:p-8 lg:p-10">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 h-40 w-40 animate-pulse rounded-full bg-[#F5BC55] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 animate-pulse rounded-full bg-[#6AC9D8] blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative text-center">
        <h2 className="bg-gradient-to-r from-[#F5BC55] via-[#6AC9D8] to-[#F5BC55] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
          Breadhead Mantras
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Words to live by in the Breadverse 🍞
        </p>
      </div>

      <div className="relative grid gap-4 sm:gap-5 md:grid-cols-2">
        {slogans.map((slogan, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border-2 border-border/30 bg-gradient-to-br from-[#6AC9D8]/5 via-background/50 to-[#F5BC55]/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#F5BC55]/50 hover:shadow-2xl"
          >
            <div className="absolute right-4 top-4 text-3xl opacity-20 transition-all group-hover:scale-125 group-hover:opacity-40">
              {slogan.emoji}
            </div>
            <p className="relative text-lg font-bold sm:text-xl">
              {slogan.text}
            </p>
          </div>
        ))}
      </div>

      <div className="relative rounded-2xl border-2 border-[#F5BC55]/30 bg-gradient-to-r from-[#F5BC55]/20 to-[#6AC9D8]/20 p-8 text-center">
        <p className="text-2xl font-bold sm:text-3xl">
          🍞 In Crust We Trust! ✨
        </p>
        <p className="mt-2 text-base text-muted-foreground sm:text-lg">
          - The Breadhead Creed
        </p>
      </div>
    </BentoBox>
  );
}

