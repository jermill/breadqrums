import { Twitter, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <a
        href={SOCIAL_LINKS.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-full bg-background/50 p-3 transition-all hover:bg-background/80 hover:shadow-lg"
        aria-label="Follow us on Twitter"
      >
        <div className="absolute inset-0 bg-[#1DA1F2]/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <Twitter className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-[#1DA1F2] sm:h-7 sm:w-7" />
      </a>
      <a
        href={SOCIAL_LINKS.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-full bg-background/50 p-3 transition-all hover:bg-background/80 hover:shadow-lg"
        aria-label="Join our Telegram group"
      >
        <div className="absolute inset-0 bg-[#0088cc]/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <MessageCircle className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-[#0088cc] sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}