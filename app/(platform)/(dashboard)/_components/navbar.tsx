import {
  ClerkLoaded,
  ClerkLoading,
  OrganizationSwitcher,
  UserButton,
} from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FormPopover } from "@/components/form/form-popover";

import { Logo } from "@/components/logo";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full px-4 h-14 border-b shadow-sm  border-indigo-900/50 bg-slate-900/80 backdrop-blur flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <FormPopover align="start" side="bottom" sideOffset={20}>
          <Button
            size="sm"
            className="rounded-sm md:flex md:gap-x-1 h-auto py-1.5 px-5 bg-violet-700/80"
          >
            <Plus className="h-3 w-4" />
            <span className="hidden md:block">Create</span>
          </Button>
        </FormPopover>
      </div>

      <div className="ml-auto flex items-center gap-x-2">
        <ClerkLoading>
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </ClerkLoading>
        <ClerkLoaded>
        <OrganizationSwitcher
  hidePersonal
  afterCreateOrganizationUrl="/organization/:id"
  afterLeaveOrganizationUrl="/select-org"
  afterSelectOrganizationUrl="/organization/:id"
  appearance={{
    elements: {
      rootBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      organizationSwitcherTrigger: {
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid #312e81", // Indigo-900 border
        backgroundColor: "rgba(30, 41, 59, 0.5)", // Dark background highlight
        color: "white", // Direct style for the trigger container
        "&:hover": {
          backgroundColor: "rgba(30, 41, 59, 0.8)",
        },
      },
    },
  }}
/>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 45,
                  width: 45,
                },
                loaderIcon: {
                  display: "block",
                },
              },
            }}
          />
        </ClerkLoaded>
      </div>
    </nav>
  );
};