import { checkSubscription } from "@/lib/subscription";
import { Separator } from "@/components/ui/separator";
import { SubscriptionButton } from "./_components/subscription-button";
import { Info } from "../_components/info";
import Image from "next/image";
import { Check } from "lucide-react";

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4 md:p-8">
      {/* Header Info */}
      <Info isPro={isPro} />
      <Separator className="bg-zinc-800" />

      {/* Main Billing Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Illustration */}
        <div className="relative aspect-square md:aspect-auto h-64 md:h-96 w-full flex items-center justify-center">
          <Image
            src="/subscribe.svg"
            alt="Subscription illustration"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Side: Value Proposition */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-zinc-100">
              {isPro ? "Manage your Pro plan" : "Upgrade to Pro"}
            </h2>
            <p className="text-zinc-400 text-sm">
              {isPro 
                ? "You have full access to all premium features." 
                : "Unlock unlimited boards, advanced analytics, and priority support."}
            </p>
          </div>

          {!isPro && (
            <ul className="space-y-3">
              {["Unlimited Boards", "Advanced Analytics", "Priority Support"].map((feature) => (
                <li key={feature} className="flex items-center text-sm text-zinc-300">
                  <Check className="h-4 w-4 text-purple-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <SubscriptionButton isPro={isPro} />
        </div>
      </div>
    </div>
  );
};

export default BillingPage;