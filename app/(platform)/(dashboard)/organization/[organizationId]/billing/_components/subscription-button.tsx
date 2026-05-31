"use client";

import { toast } from "sonner";
import { Zap, CreditCard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { useProModal } from "@/hooks/use-pro-modal";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { cn } from "@/lib/utils";

type SubscriptionButtonProps = {
  isPro: boolean;
};

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const proModal = useProModal();
  
  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      toast.dismiss();
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    if (isPro) {
      execute({});
      toast.loading("Redirecting to billing...");
    } else {
      proModal.onOpen();
    }
  };

  return (
    <Button 
      variant={isPro ? "outline" : "default"}
      disabled={isLoading} 
      onClick={onClick}
      className={cn(
        "w-full transition-all duration-300 flex items-center justify-center gap-x-2 font-semibold",
        !isPro && "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 shadow-lg hover:shadow-indigo-500/25",
        isPro && "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300"
      )}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isPro ? (
        <CreditCard className="h-4 w-4" />
      ) : (
        <Zap className="h-4 w-4 fill-white" />
      )}
      
      <span>{isPro ? "Manage subscription" : "Upgrade to Pro"}</span>
    </Button>
  );
};