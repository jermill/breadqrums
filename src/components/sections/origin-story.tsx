import { BentoBox } from "@/components/ui/bento-box";
import { Sparkles } from "lucide-react";

export function OriginStory() {
  return (
    <BentoBox variant="accent" className="group relative overflow-hidden space-y-6 p-6 sm:space-y-8 sm:p-8 lg:p-10">
      {/* Meme coin style background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-[#F5BC55] blur-2xl" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-[#6AC9D8] blur-3xl" />
      </div>

      <div className="relative text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5BC55] to-[#F5BC55]/50 shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110 sm:h-20 sm:w-20">
          <Sparkles className="h-8 w-8 text-background sm:h-10 sm:w-10" />
        </div>
        <h2 className="bg-gradient-to-r from-[#F5BC55] to-[#6AC9D8] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
          How the Breadverse Began
        </h2>
        <div className="mt-2 inline-block rounded-full bg-[#F5BC55]/20 px-4 py-1 text-sm font-bold">
          Origin of the Breadheads 🍞
        </div>
      </div>
      
      <div className="relative space-y-4 text-base leading-relaxed sm:space-y-5 sm:text-lg">
        <p className="text-muted-foreground">
          In a world where ordinary meets extraordinary, a peculiar experiment changed everything. 
          When a master baker's prized sourdough starter had an unexpected encounter with a quantum 
          computer, something magical happened.
        </p>
        <p className="font-semibold text-foreground">
          From this cosmic collision, Lil Qrum was born — and with him, the first Breadheads emerged. 
          A community united by memes, gains, and an undying love for bread. 🚀
        </p>
        <div className="rounded-2xl border-2 border-[#F5BC55]/30 bg-gradient-to-r from-[#F5BC55]/20 to-[#6AC9D8]/20 p-6 text-center">
          <p className="text-xl font-bold italic text-foreground sm:text-2xl">
            "When life gives you grains, make tokens!"
          </p>
          <p className="mt-2 text-sm text-muted-foreground">- Lil Qrum, Founder of the Breadheads</p>
        </div>
      </div>
    </BentoBox>
  );
}

