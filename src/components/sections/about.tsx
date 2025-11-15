import { BentoBox } from "@/components/ui/bento-box";
import { TOKENOMICS } from "@/lib/constants";

export function About() {
  return (
    <BentoBox variant="secondary" className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#6AC9D8] to-[#F5BC55] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
            Why $KNEAD?
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            The Breadheads' ticket to the moon 🚀
          </p>
        </div>

        <div className="rounded-2xl border-2 border-[#F5BC55]/20 bg-gradient-to-br from-[#F5BC55]/10 to-[#6AC9D8]/10 p-5">
          <p className="text-center text-base leading-relaxed text-foreground sm:text-lg">
            Join <span className="font-bold text-[#F5BC55]">10,000+ Breadheads</span> holding, staking, and building the Breadverse together. 
            <span className="font-bold text-[#6AC9D8]"> We're not just a community, we're a movement.</span>
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {TOKENOMICS.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-r from-primary/5 to-primary/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg hover:wiggle sm:p-5"
            >
              <div className="relative z-10 flex items-center justify-between space-x-4">
                <div className="flex-1">
                  <h3 className="text-base font-bold sm:text-lg">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6AC9D8] to-[#6AC9D8]/50 text-base font-bold text-background shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16 sm:text-lg">
                  {item.percentage}%
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[#6AC9D8] to-[#F5BC55] transition-all"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </BentoBox>
  );
}