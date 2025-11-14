import { BentoBox } from "@/components/ui/bento-box";
import { Twitter, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const socials = [
  {
    icon: Twitter,
    name: "Twitter",
    link: SOCIAL_LINKS.twitter,
    color: "from-[#1DA1F2] to-[#0D8BD9]",
  },
  {
    icon: MessageCircle,
    name: "Telegram",
    link: SOCIAL_LINKS.telegram,
    color: "from-[#0088cc] to-[#0072ab]",
  },
];

export function Community() {
  return (
    <BentoBox variant="accent" className="flex h-full flex-col justify-between p-8">
      <div className="space-y-6">
        <h2 className="text-center text-2xl font-bold dark:text-[#f5bc55]">Join Us</h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex aspect-square items-center justify-center rounded-lg bg-accent/5 p-4 transition-all hover:bg-accent/10 hover:scale-105"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${social.color} sm:h-16 sm:w-16 md:h-20 md:w-20`}>
                <social.icon className="h-6 w-6 text-white sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </BentoBox>
  );
}