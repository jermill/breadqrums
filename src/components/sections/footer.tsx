import { Twitter, MessageCircle, ExternalLink, Globe, TrendingUp } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const socials = [
  {
    icon: Globe,
    name: "Website",
    link: SOCIAL_LINKS.website,
  },
  {
    icon: Twitter,
    name: "Twitter",
    link: SOCIAL_LINKS.twitter,
  },
  {
    icon: MessageCircle,
    name: "Telegram",
    link: SOCIAL_LINKS.telegram,
  },
  {
    icon: Globe,
    name: "TikTok",
    link: SOCIAL_LINKS.tiktok,
  },
  {
    icon: Globe,
    name: "Instagram",
    link: SOCIAL_LINKS.instagram,
  },
  {
    icon: TrendingUp,
    name: "Chart",
    link: SOCIAL_LINKS.chart,
    featured: true,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">$KNEAD</h3>
            <p className="text-sm text-muted-foreground">
              The official token of the Breadverse. Built by Breadheads, for Breadheads. 🍞
            </p>
            <p className="mt-2 text-xs font-semibold text-[#F5BC55]">
              #BreadheadsStickyTogether
            </p>
          </div>

          {/* Join the Adventure */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Join the Adventure</h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Follow our socials to stay updated
            </p>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((social) => (
                <Button
                  key={social.name}
                  variant="link"
                  className={`h-auto w-fit justify-start p-0 transition-colors ${
                    social.featured 
                      ? 'font-bold text-[#F5BC55] hover:text-[#F5BC55]/80' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => window.open(social.link, '_blank')}
                >
                  <social.icon className="mr-1.5 h-4 w-4" />
                  {social.name}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 border-t pt-8 text-center sm:flex-row sm:space-y-0 sm:text-left">
          <p className="text-sm text-muted-foreground">
            Not financial advice, just bread advice. Keep your loaves and crumbs safe.
          </p>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} $KNEAD. All rights reserved.
            </p>
            <a
              href="https://jermill.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-[#F5BC55]"
            >
              Created by <span className="font-semibold">jermill.dev</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}