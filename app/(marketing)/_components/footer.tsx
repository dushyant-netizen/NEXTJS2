import Link from "next/link";
import { Globe, HelpCircle } from "lucide-react"; // Using lucide-react for Trello-style utility icons

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";

const TRELLO_FOOTER_LINKS = [
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/pricing" },
  { label: "Apps", href: "/apps" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-12 border-t bg-zinc-950 border-zinc-900/80 px-4 z-50 select-none">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between gap-x-4 w-full">
        
        {/* Left Section: Branding & Copyright (Trello Style) */}
        <div className="flex items-center gap-x-3 text-xs text-zinc-900 shrink-0">
          <div className="scale-90 opacity-85 hover:opacity-100 transition">
            <Logo />
          </div>
          <span className="hidden md:inline-block font-normal text-zinc-200">
            &copy; {new Date().getFullYear()} EDZLRD
          </span>
        </div>

        {/* Right Section: Compact Utility Actions & Navigation */}
        <nav className="flex items-center gap-x-1 sm:gap-x-2 text-xs font-medium">
          {/* Desktop Trello Links */}
          <div className="hidden lg:flex items-center gap-x-1">
            {TRELLO_FOOTER_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={buttonVariants({ 
                  size: "sm", 
                  variant: "ghost",
                  className: "text-zinc-300 hover:text-zinc-900 hover:bg-zinc-200/60 h-8 text-xs font-normal px-2.5"
                })}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Trello Core App Settings Utilities (Always Visible) */}
          <button 
            className={buttonVariants({ 
              size: "sm", 
              variant: "ghost", 
              className: "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 h-8 gap-x-1 px-2 text-xs font-normal" 
            })}
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Change language</span>
          </button>

          <Link
            href="/help"
            className={buttonVariants({ 
              size: "sm", 
              variant: "ghost", 
              className: "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 h-8 gap-x-1 px-2 text-xs font-normal" 
            })}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Help</span>
          </Link>
        </nav>
        
      </div>
    </footer>
  );
};

