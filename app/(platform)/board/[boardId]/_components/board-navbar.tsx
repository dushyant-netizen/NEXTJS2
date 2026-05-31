"use client";

import Link from "next/link";
import { Board } from "@prisma/client"; 
import { useOrganization } from "@clerk/nextjs"; // ADDED: Safe Clerk organization state hook
import { 
  Star, 
  Users, 
  Lock, 
  ChevronDown, 
  SlidersHorizontal, 
  Share2, 
  MoreHorizontal,
  LayoutDashboard
} from "lucide-react";

import { BoardTitleForm } from "./board-title-form"; 
import { BoardOptions } from "./board-options"; 

interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = ({ data }: BoardNavbarProps) => {
  // 1. Grab the current active organization info from Clerk state
  const { organization, isLoaded } = useOrganization();

  // 2. Safe fallback routing: If Clerk is loaded and has an ID, use it. Otherwise go to select-org
  const backLink = isLoaded && organization?.id 
    ? `/organization/${organization.id}` 
    : "/select-org";

  return (
    <div className="w-full h-12 bg-black/25 backdrop-blur-md border-b border-white/10 px-4 flex items-center justify-between text-white select-none relative z-40">
      
      {/* LEFT SIDE: Navigation, Board Context & Meta Controls */}
      <div className="flex items-center gap-x-2 sm:gap-x-3 min-w-0">
        
        {/* SAFE DASHBOARD LINK */}
        <Link
          href={backLink}
          className="flex items-center gap-x-1.5 text-xs font-medium px-2.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition text-white/90 shrink-0 border border-white/5 active:scale-95"
        >
          <LayoutDashboard className="h-3.5 w-3.5 text-zinc-300" />
          <span className="hidden xs:inline font-semibold">Dashboard</span>
        </Link>

        {/* Divider line */}
        <div className="h-4 w-px bg-white/20 shrink-0" />

        {/* Inline editable board title form */}
        <div className="shrink-0">
          <BoardTitleForm data={data} />
        </div>

        {/* Workspace Visibility Token */}
        <button className="hidden sm:flex items-center gap-x-1.5 text-xs font-medium px-2 py-1.5 rounded-md hover:bg-white/10 transition text-white/90">
          <Lock className="h-3.5 w-3.5" />
          <span>Private</span>
          <ChevronDown className="h-3 w-3 opacity-60" />
        </button>

        {/* Interactive Workspace View Toggle Mode */}
        <button className="flex items-center gap-x-1.5 text-xs font-medium px-2.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition max-w-[140px]">
          <Users className="h-3.5 w-3.5 shrink-0" />
          <span className="hidden md:inline truncate">Board view</span>
          <ChevronDown className="h-3 w-3 opacity-60 shrink-0" />
        </button>

        {/* Favorite Star Node */}
        <button className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-amber-400 transition shrink-0">
          <Star className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* RIGHT SIDE: Collaboration Utilities & Board Options Menus */}
      <div className="flex items-center gap-x-2 shrink-0">
        
        {/* Filters Panel Trigger */}
        <button className="hidden sm:flex items-center gap-x-1.5 text-xs font-medium px-2.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition text-white/90">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span>Filters</span>
        </button>

        <div className="h-4 w-px bg-white/20 mx-1 hidden sm:block" />

        {/* Collaborator Team Avatars */}
        <div className="flex items-center -space-x-2.5 overflow-hidden invisible sm:visible">
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-900 bg-gradient-to-tr from-amber-500 to-orange-600 text-[10px] font-bold flex items-center justify-center text-white">
            DU
          </div>
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-900 bg-gradient-to-tr from-blue-500 to-indigo-600 text-[10px] font-bold flex items-center justify-center text-white">
            JD
          </div>
        </div>

        {/* Premium Invitation / Share Trigger Button */}
        <button className="flex items-center gap-x-1.5 text-xs font-semibold px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 rounded-md text-zinc-900 transition shadow-xs">
          <Share2 className="h-3.5 w-3.5" />
          <span className="hidden xs:inline">Share</span>
        </button>

        {/* Dynamic Board Actions Overlay Menu */}
        <div className="p-1 rounded-md hover:bg-white/10 text-white/90 transition cursor-pointer">
          <BoardOptions id={data.id} />
        </div>

      </div>
    </div>
  );
};