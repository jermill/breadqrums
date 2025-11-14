import { BentoBox } from "@/components/ui/bento-box";
import { Zap, HelpCircle, Cpu } from "lucide-react";

const characters = [
  {
    icon: Zap,
    name: "Lil Qrum",
    description: "Not quite bread, not quite code, but 100% amazing. This quantum-enhanced bread being understands both ancient baking wisdom and modern technology. With an uncanny ability to bring people together and an absolutely stellar meme game, Lil Qrum leads our community with style and humor.",
    color: "from-[#F5BC55] to-[#F5BC55]/50",
  },
  {
    icon: HelpCircle,
    name: "Pip",
    description: "Every hero needs a mysterious friend, and that's where Pip comes in. Nobody quite knows where Pip came from — some say they emerged from a parallel bread dimension, others believe they're a glitch in the breadchain matrix. Their gender and origin remain delightfully ambiguous, adding to their charm.",
    color: "from-[#6AC9D8] to-[#6AC9D8]/50",
  },
  {
    icon: Cpu,
    name: "ByteBaker",
    description: "The most sophisticated AI ever to don a chef's hat! ByteBaker helps monitor trends, assists community members, and ensures everything runs smoothly. Think of them as our community's helpful kitchen assistant, always ready with a fresh perspective.",
    color: "from-purple-500 to-purple-500/50",
  },
];

export function Characters() {
  return (
    <BentoBox variant="secondary" className="space-y-6 p-6 sm:space-y-8 sm:p-8 lg:p-10">
      <h2 className="bg-gradient-to-r from-[#6AC9D8] to-[#F5BC55] bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
        Meet Our Cast of Characters
      </h2>

      <div className="space-y-4 sm:space-y-5">
        {characters.map((character, index) => (
          <div
            key={character.name}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/80 to-background/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg sm:p-6"
          >
            <div className="absolute right-0 top-0 h-32 w-32 opacity-5">
              <character.icon className="h-full w-full" />
            </div>
            <div className="relative">
              <div className="mb-4 flex items-center space-x-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${character.color} shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14`}>
                  <character.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-xl font-bold sm:text-2xl">{character.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {character.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </BentoBox>
  );
}

