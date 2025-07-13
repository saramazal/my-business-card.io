import React from "react";
import { Github, Linkedin, ExternalLink, Code, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sara-mazal",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/saramazal",
    color: "hover:text-[#f0f6fc]",
  },
  {
    name: "TryHackMe",
    icon: Shield,
    url: "https://tryhackme.com/p/maz4l",
    color: "hover:text-[#88cc14]",
  },
  {
    name: "CodePen",
    icon: Code,
    url: "https://codepen.io/Saramazal",
    color: "hover:text-[#47cf73]",
  },
  {
    name: "X (Twitter)",
    icon: ExternalLink,
    url: "https://x.com/mazalspace",
    color: "hover:text-[#1da1f2]",
  },
  {
    name: "Blog",
    icon: ExternalLink,
    url: "https://maz4lhacks.vercel.app/",
    color: "hover:text-[#bb9af7]",
  },
];

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="lg"
          className={`
            group relative overflow-hidden
            bg-[#24283b]/50 hover:bg-[#414868]/50
            border-[#414868] hover:border-[#7aa2f7]
            text-[#c0caf5] ${link.color}
            transition-all duration-300
            font-mono
          `}
          onClick={() => window.open(link.url, "_blank")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7aa2f7]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <link.icon className="w-5 h-5 mr-2" />
          {link.name}
        </Button>
      ))}
    </div>
  );
}
