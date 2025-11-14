import { Twitter, MessageCircle, ExternalLink, Globe } from "lucide-react";
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
              The crustiest coin on Solana. Rise with the Breadheads!
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
                  className="h-auto w-fit justify-start p-0 text-muted-foreground hover:text-foreground"
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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} $KNEAD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}