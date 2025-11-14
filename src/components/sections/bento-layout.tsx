import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoItem } from "@/components/ui/bento-item";
import { Utensils, Leaf, Coffee, Apple } from "lucide-react";

const items = [
  {
    title: "Main Course",
    description: "Rice or noodles with protein",
    icon: Utensils,
    size: "large" as const,
    variant: "primary" as const,
  },
  {
    title: "Vegetables",
    description: "Steamed or sautéed seasonal veggies",
    icon: Leaf,
    variant: "secondary" as const,
  },
  {
    title: "Side Dish",
    description: "Pickled vegetables or small bites",
    icon: Coffee,
    variant: "default" as const,
  },
  {
    title: "Fruits",
    description: "Fresh seasonal fruits",
    icon: Apple,
    variant: "secondary" as const,
  },
];

export function BentoLayout() {
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-3">
      {items.map((item, index) => (
        <BentoItem
          key={index}
          title={item.title}
          description={item.description}
          size={item.size}
          variant={item.variant}
          className="group"
        >
          <div className="flex h-full items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 blur transition-all group-hover:opacity-100" />
              <div className="relative rounded-full bg-background/80 p-4 backdrop-blur-sm">
                <item.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
              </div>
            </div>
          </div>
        </BentoItem>
      ))}
    </BentoGrid>
  );
}