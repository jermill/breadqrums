import { BentoBox } from "@/components/ui/bento-box";
import { TOKENOMICS } from "@/lib/constants";
import { PieChart } from "lucide-react";

export function Tokenomics() {
  return (
    <BentoBox className="flex h-full flex-col justify-between p-8">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-primary/20 p-4">
            <PieChart className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mt-4 text-2xl font-bold">Baker's Recipe 🥖</h2>
        </div>

        <div className="grid gap-3">
          {TOKENOMICS.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-lg bg-primary/5 p-4 transition-all hover:bg-primary/10"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 font-bold">
                  {item.percentage}%
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/50 to-primary transition-all group-hover:from-primary group-hover:to-primary"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </BentoBox>
  );
}