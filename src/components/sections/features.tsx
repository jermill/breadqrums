import { BentoBox } from "@/components/ui/bento-box";
import { Users, Coins, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community-Driven",
    description: "Breadheads unite! Join our fun-loving community.",
  },
  {
    icon: Coins,
    title: "Staking Rewards",
    description: "Stake for crumbs, earn while you HODL.",
  },
  {
    icon: Sparkles,
    title: "Meme Power",
    description: "Join the #Breadolution today!",
  },
];

export function Features() {
  return (
    <BentoBox variant="accent" className="space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">
      <h2 className="text-center text-xl font-bold text-shadow sm:text-2xl lg:text-3xl dark:text-[#f5bc55]">
        In Crust We Trust
      </h2>

      <div className="grid gap-3 sm:gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center space-x-3 rounded-lg bg-background/50 p-3 transition-colors hover:bg-background/80 dark:bg-background/20 dark:hover:bg-background/30 sm:space-x-4 sm:p-4"
          >
            <div className="rounded-lg bg-primary/20 p-2.5 dark:bg-primary/30 sm:p-3">
              <feature.icon className="h-5 w-5 text-primary dark:text-[#f5bc55] sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold sm:text-base">{feature.title}</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </BentoBox>
  );
}