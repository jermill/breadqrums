import { BentoBox } from "@/components/ui/bento-box";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function GetQrums() {
  const handleClick = () => {
    window.open('https://pump.fun/coin/9pLdfxua1tyx9kieuVtJXTsBV2o52ozg7S4Rzjjfpump', '_blank');
  };

  return (
    <BentoBox className="flex items-center justify-center p-8 sm:p-10 lg:p-12">
      <Button
        size="lg"
        onClick={handleClick}
        className="group bg-[#F5BC55] px-8 py-6 text-lg text-foreground shadow-lg transition-all hover:scale-105 hover:bg-[#F5BC55]/90 hover:shadow-xl dark:text-background sm:text-xl"
      >
        Get $KNEAD Now
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </BentoBox>
  );
}