import { BentoBox } from "@/components/ui/bento-box";
import { Wallet, Coins, ArrowRightLeft } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Create Wallet",
    description: "Use Phantom or Sollet",
  },
  {
    icon: Coins,
    title: "Get SOL",
    description: "Fund your wallet",
  },
  {
    icon: ArrowRightLeft,
    title: "Swap",
    description: "Get your $KNEAD",
  },
];

export function HowToBuy() {
  return (
    <BentoBox variant="secondary" className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
      <div className="space-y-6 sm:space-y-8">
        <h2 className="bg-gradient-to-r from-[#6AC9D8] to-[#F5BC55] bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
          How to Buy
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex items-center space-x-4 rounded-2xl border border-border/30 bg-gradient-to-r from-secondary/5 to-secondary/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg sm:space-x-5 sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5BC55] to-[#F5BC55]/50 shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
                <step.icon className="h-6 w-6 text-background sm:h-7 sm:w-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#F5BC55]">Step {index + 1}</span>
                </div>
                <h3 className="text-base font-bold sm:text-lg">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute -bottom-4 left-8 h-4 w-0.5 bg-gradient-to-b from-[#F5BC55] to-transparent sm:left-9" />
              )}
            </div>
          ))}
        </div>
      </div>
    </BentoBox>
  );
}