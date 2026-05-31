"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { ClerkLoaded, ClerkLoading, useOrganization, useOrganizationList } from "@clerk/nextjs";

import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItem, Organization } from "./nav-item";
import { cn } from "@/lib/utils";

export const Sidebar = ({ storageKey = "t-sidebar-state" }) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {});
  const { organization: activeOrganization, isLoaded: isLoadedOrg } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  const onExpand = (id: string) => setExpanded((curr) => ({ ...curr, [id]: !expanded[id] }));

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <div className="p-4 space-y-4 w-full">
        <Skeleton className="h-8 w-full" />
        <NavItem.Skeleton />
      </div>
    );
  }

  return (
    // 'pt-6' provides the vertical offset you requested
    <div className="h-full w-full flex flex-col pt-20 p-4 overflow-y-auto">
      <div className="font-semibold text-xs flex items-center mb-4 px-2 text-zinc-400 uppercase tracking-wider">
        Workspaces
        <Link href="/select-org" className={cn(buttonVariants({ size: "icon", variant: "ghost" }), "ml-auto h-6 w-6")}>
          <Plus className="h-4 w-4" />
        </Link>
      </div>
      
      <Accordion type="multiple" className="w-full space-y-1">
        <ClerkLoaded>
          {userMemberships.data?.map(({ organization }) => (
            <NavItem
              key={organization.id}
              isActive={activeOrganization?.id === organization.id}
              isExpanded={expanded[organization.id]}
              organization={organization as Organization}
              onExpand={onExpand}
            />
          ))}
        </ClerkLoaded>
      </Accordion>
    </div>
  );
};