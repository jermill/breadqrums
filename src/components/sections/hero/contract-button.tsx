import { Copy } from "lucide-react";
import { CONTRACT_ADDRESS } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

export function ContractButton() {
  const { toast } = useToast();

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      toast({
        title: "Success!",
        description: "Contract address copied to clipboard",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      onClick={copyAddress}
      className="group relative flex w-full items-center justify-center space-x-2 overflow-hidden rounded-lg bg-background/50 px-4 py-3 text-xs transition-all hover:bg-background/80 hover:shadow-lg sm:w-auto sm:space-x-3 sm:px-5 sm:py-3 sm:text-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#6AC9D8]/10 to-[#F5BC55]/10 opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="relative font-mono text-muted-foreground transition-colors group-hover:text-foreground">
        {CONTRACT_ADDRESS}
      </span>
      <Copy className="relative h-3.5 w-3.5 opacity-50 transition-all group-hover:opacity-100 group-hover:text-[#F5BC55] sm:h-4 sm:w-4" />
    </button>
  );
}