import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    // Deep midnight blue background with blur
    <header className="fixed top-0 w-full h-14 z-50  border-indigo-700/50 bg-slate-900/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4">
        
        {/* Logo - Ensure your Logo component has text-white or a light filter */}
        <Link 
          href="/" 
          className="flex items-center hover:opacity-80 transition"
        >
          <Logo />
        </Link>

        {/* Action CTA Group */}
        <nav className="flex items-center gap-x-3">
          {/* GitHub Icon - White tone */}
          <Link
            href="https://github.com/sanidhyy/trello-clone"
            target="_blank"
            className={cn(
              buttonVariants({ size: "sm", variant: "ghost" }),
              "h-9 w-9 p-0 text-slate-300 hover:text-white hover:bg-indigo-900/40 rounded-lg"
            )}
          >
            <Github className="h-4 w-4" />
          </Link>

          <div className="h-4 w-[1px] bg-indigo-900" />

          {/* Log in - White tone */}
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ size: "sm", variant: "ghost" }),
              "text-slate-300 hover:text-white hover:bg-indigo-900/40 font-medium text-sm rounded-lg hidden sm:inline-flex"
            )}
          >
            Log in
          </Link>

          {/* CTA - Vibrant Blue button */}
          <Link 
            href="/sign-up" 
            className={cn(
              buttonVariants({ size: "sm" }),
              "group bg-purple-700 hover:bg-indigo-500 text-white font-semibold text-sm px-4 h-9 rounded-lg transition-all active:scale-[0.98] flex items-center gap-x-1.5 shadow-[0_0_10px_rgba(79,70,229,0.3)]"
            )}
          >
            <span>Get Taskify free</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

