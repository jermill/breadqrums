import { BentoBox } from "@/components/ui/bento-box";
import { Users, TrendingUp, Heart, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Breadheads",
    color: "from-[#F5BC55] to-[#F5BC55]/50",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Community Driven",
    color: "from-[#6AC9D8] to-[#6AC9D8]/50",
  },
  {
    icon: Heart,
    value: "24/7",
    label: "Active Chat",
    color: "from-pink-500 to-pink-500/50",
  },
  {
    icon: Zap,
    value: "Moon",
    label: "Destination",
    color: "from-purple-500 to-purple-500/50",
  },
];

const vibes = [
  "🍞 Fresh memes daily",
  "🎨 Community art contests",
  "🎮 Gaming nights",
  "💰 Holder rewards",
  "🎉 Regular AMAs",
  "🚀 To the moon together",
];

export function Community() {
  return (
    <BentoBox className="space-y-6 p-6 sm:space-y-8 sm:p-8 lg:p-10">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-[#F5BC55] via-[#6AC9D8] to-[#F5BC55] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
          Welcome, Breadheads!
        </h2>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          Just like Swifties 💜 We're the Breadheads 🍞
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-background/80 to-background/40 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-border hover:shadow-xl sm:p-6"
          >
            <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14`}>
              <stat.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </div>
            <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Community Vibes */}
      <div className="rounded-2xl border border-[#F5BC55]/20 bg-gradient-to-br from-[#F5BC55]/10 to-[#6AC9D8]/10 p-6">
        <h3 className="mb-4 text-center text-xl font-bold sm:text-2xl">
          The Breadhead Experience
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vibes.map((vibe, index) => (
            <div
              key={index}
              className="rounded-xl bg-background/50 px-4 py-3 text-center font-medium backdrop-blur-sm transition-all hover:scale-105 hover:bg-background/70"
            >
              {vibe}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-lg font-bold sm:text-xl">
          Ready to become a Breadhead? 🍞
        </p>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Join thousands of holders building the Breadverse together
        </p>
      </div>
    </BentoBox>
  );
}
