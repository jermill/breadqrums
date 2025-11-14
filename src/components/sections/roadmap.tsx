import { BentoBox } from "@/components/ui/bento-box";
import { Calendar, Gamepad2, Award, Gift, Star } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Daily Community Events",
    description: "Regular activities to keep the Breadverse buzzing",
  },
  {
    icon: Gamepad2,
    title: "Future Gaming Ecosystem",
    description: "Play-to-earn games coming to the Breadverse",
  },
  {
    icon: Award,
    title: "Creative Competitions",
    description: "Show off your meme game and win rewards",
  },
  {
    icon: Gift,
    title: "Regular Community Rewards",
    description: "Holders get the upper crust treatment",
  },
  {
    icon: Star,
    title: "Special Character Appearances",
    description: "Exclusive events with Lil Qrum, Pip, and ByteBaker",
  },
];

export function Roadmap() {
  return (
    <BentoBox variant="accent" className="space-y-6 p-6 sm:space-y-8 sm:p-8 lg:p-10">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-[#F5BC55] to-[#6AC9D8] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
          What's Cooking?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Exciting features on the horizon
        </p>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group flex items-start space-x-4 rounded-2xl border border-border/30 bg-gradient-to-r from-background/50 to-background/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg sm:space-x-5 sm:p-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5BC55] to-[#F5BC55]/50 shadow-md transition-transform group-hover:scale-110 sm:h-12 sm:w-12">
              <feature.icon className="h-5 w-5 text-background sm:h-6 sm:w-6" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-base font-bold sm:text-lg">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </BentoBox>
  );
}

