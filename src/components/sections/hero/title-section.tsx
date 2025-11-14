import { PUMP_URL } from "@/lib/constants";

export function TitleSection() {
  return (
    <a 
      href={PUMP_URL}
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center transition-transform hover:scale-[1.02]"
    >
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-[#6AC9D8]/5 to-[#F5BC55]/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
      <p className="text-base font-medium text-muted-foreground transition-colors group-hover:text-foreground sm:text-lg lg:text-xl">
        Grains & Gains
      </p>
      <h1 className="mt-2 text-4xl font-bold leading-tight text-shadow sm:text-5xl lg:text-6xl xl:text-7xl">
        <span className="moving-gradient bg-gradient-to-r from-[#6AC9D8] via-[#F5BC55] to-[#6AC9D8] bg-clip-text text-transparent">
          $KNEAD
        </span>
      </h1>
      <p className="mt-2 text-base text-muted-foreground transition-colors group-hover:text-foreground sm:text-lg lg:text-xl">
        Pull up, Hop Out, Made Bread Look Sexy
      </p>
      <div className="mt-4 rounded-full bg-[#F5BC55]/10 px-4 py-1.5 text-sm font-medium text-[#F5BC55] sm:text-base">
        144M $KNEAD fresh out the oven
      </div>
    </a>
  );
}