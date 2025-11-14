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
            More than a token — it's your entry into the Breadverse
          </p>
        </div>

        <p className="text-center text-base leading-relaxed text-foreground sm:text-lg">
          Hold it, stake it, trade it, and join thousands of Breadheads building something special. 
          <span className="font-semibold text-[#F5BC55]"> When life gives you grains, make tokens.</span>
        </p>

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