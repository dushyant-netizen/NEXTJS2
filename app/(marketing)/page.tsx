"use client";

import { useState } from "react";
import { Medal, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Features } from "./_components/features";

const MarketingPage = () => {
  const [view, setView] = useState<"hero" | "features">("hero");

  return (
    <main className="min-h-[calc(100vh-3.5rem)] w-full overflow-hidden bg-[#050505] text-white relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#CECDD370_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#7551BEBE_0%,transparent_60%)]" />
      
      {/* Stronger Square Grid Texture */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, #5E5757 0.25px, transparent 1px),
            linear-gradient(to bottom, #1B1919 0.25px, transparent 1px)
          `,
          backgroundSize: '75px 75px',
        }}
      />

      {/* Additional subtle noise layer */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] px-6">
        <div className="max-w-5xl w-full">
          
          {view === "hero" ? (
            <div className="flex flex-col items-center text-center animate-in fade-in duration-700">
              
              {/* Premium Badge */}
              <div className="mb-8 inline-flex items-center gap-x-2 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-6 py-2.5 rounded-2xl text-xs font-medium tracking-widest">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Medal className="h-4 w-4" />
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <span className="text-zinc-300">WORLD-CLASS TASK MANAGEMENT</span>
              </div>

              {/* Hero Headline */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8">
                Turn ideas into<br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  delivered outcomes
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
                Taskify brings clarity, alignment, and velocity to your team. 
                Built for ambitious individuals and high-performing organizations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setView("features")}
                  className={cn(
                    buttonVariants({ size: "lg" }), 
                    "bg-gradient-to-r from-indigo-700 to-violet-700 hover:from-indigo-500 hover:to-violet-500 h-14 px-10 text-base font-semibold rounded-2xl shadow-xl shadow-indigo-950/50 transition-all active:scale-[0.985]"
                  )}
                >
                  Explore Features
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>

                <Link 
                  href="/signup"
                  className={cn(
                    buttonVariants({ size: "lg" }), 
                    "bg-white text-black hover:bg-zinc-100 h-14 px-10 text-base font-semibold rounded-2xl shadow-xl shadow-white/10 transition-all active:scale-[0.985]"
                  )}
                >
                  Get Started Free
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="mt-16 flex items-center gap-8 text-sm text-zinc-500">
                <div>Trusted by teams at</div>
                <div className="flex items-center gap-6 opacity-75">
                  <span className="font-medium">Notion</span>
                  <span className="font-medium">Vercel</span>
                  <span className="font-medium">Framer</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-6 duration-500">
              <button 
                onClick={() => setView("hero")}
                className="group mb-10 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <span className="block w-6 h-px bg-current group-hover:w-8 transition-all" />
                Back to Overview
              </button>
              
              <Features />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MarketingPage;

