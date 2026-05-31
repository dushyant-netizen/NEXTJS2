import Link from "next/link";
import { Blocks, Zap, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES_DATA = [
  {
    title: "Integrations",
    body: "Connect the apps your team already uses into your Taskify workflow or add a Power-Up to fine-tune your specific needs.",
    icon: Blocks,
    iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    href: "/integrations",
  },
  {
    title: "Butler Automation",
    body: "No-code automation is built into every Taskify board. Focus on the work that matters most.",
    icon: Zap,
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    href: "/automation",
  },
  {
    title: "Taskify Enterprise",
    body: "The productivity tool teams love, paired with the features and security needed for scale.",
    icon: ShieldAlert,
    iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    href: "/enterprise",
  },
] as const;

export const Features = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES_DATA.map((feature) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.title}
              className="group flex flex-col p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-white/10"
            >
              <div className={cn("p-3 rounded-xl border w-fit mb-4", feature.iconColor)}>
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {feature.body}
              </p>

              <Link
                href={feature.href}
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
              >
                Learn more →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};