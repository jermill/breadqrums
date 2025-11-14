import { BentoBox } from "@/components/ui/bento-box";
import { Sparkles } from "lucide-react";

export function OriginStory() {
  return (
    <BentoBox variant="accent" className="group space-y-6 p-6 sm:space-y-8 sm:p-8 lg:p-10">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5BC55] to-[#F5BC55]/50 shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
          <Sparkles className="h-8 w-8 text-background sm:h-10 sm:w-10" />
        </div>
        <h2 className="bg-gradient-to-r from-[#F5BC55] to-[#6AC9D8] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
          The Origin Story
        </h2>
      </div>
      
      <div className="space-y-4 text-base leading-relaxed sm:space-y-5 sm:text-lg">
        <p className="text-muted-foreground">
          In a world where ordinary meets extraordinary, a peculiar experiment changed everything. 
          When a master baker's prized sourdough starter had an unexpected encounter with a quantum 
          computer, something magical happened.
        </p>
        <p className="font-semibold text-foreground">
          From this cosmic collision, Lil Qrum was born — our quantum-enhanced mascot who's here to 
          lead us on an incredible journey.
        </p>
        <div className="rounded-2xl bg-gradient-to-r from-[#F5BC55]/20 to-[#6AC9D8]/20 p-6 text-center">
          <p className="text-lg font-medium italic text-foreground sm:text-xl">
            "When life gives you grains, make tokens!"
          </p>
          <p className="mt-2 text-sm text-muted-foreground">- Lil Qrum</p>
        </div>
      </div>
    </BentoBox>
  );
}

