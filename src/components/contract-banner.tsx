import { Copy, Check, Twitter } from "lucide-react";
import { CONTRACT_ADDRESS, SOCIAL_LINKS } from "@/lib/constants";
import { useState } from "react";

export function ContractBanner() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="relative z-50 border-b bg-gradient-to-r from-[#6AC9D8]/10 via-[#F5BC55]/10 to-[#6AC9D8]/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          {/* Twitter Link */}
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 group flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 px-3 py-2 transition-all hover:border-[#1DA1F2] hover:bg-background hover:cursor-pointer sm:px-4"
            onClick={(e) => {
              e.stopPropagation();
              window.open(SOCIAL_LINKS.twitter, '_blank', 'noopener,noreferrer');
            }}
          >
            <Twitter className="h-4 w-4 text-[#1DA1F2]" />
            <span className="text-xs font-medium sm:text-sm">@breadqrums</span>
          </a>

          {/* Contract Address */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">
              Contract Address:
            </span>
            <button
              onClick={copyAddress}
              className="group flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 px-3 py-2 transition-all hover:border-[#F5BC55] hover:bg-background sm:px-4"
            >
              <span className="font-mono text-xs text-foreground sm:text-sm">
                {CONTRACT_ADDRESS.slice(0, 8)}...{CONTRACT_ADDRESS.slice(-8)}
              </span>
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[#F5BC55]" />
              )}
            </button>
            {copied && (
              <span className="text-xs font-medium text-green-500">
                Copied! ✓
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

