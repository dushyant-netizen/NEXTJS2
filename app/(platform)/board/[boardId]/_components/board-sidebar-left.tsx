"use client";

import { Mail, Calendar, LayoutGrid, Layers, Info } from "lucide-react";

export const BoardSidebarLeft = () => {
  return (
    <div className="w-full h-full flex flex-col text-zinc-300">
      
      {/* Inbox Header Item */}
      <div className="h-12 px-4 border-b border-white/5 flex items-center justify-between shrink-0 bg-black/20">
        <div className="flex items-center gap-x-2">
          <Mail className="h-4 w-4 text-zinc-400" />
          <span className="text-sm font-semibold tracking-wide text-white">Inbox</span>
        </div>
      </div>

      {/* Navigation Links List */}
      <div className="flex-1 p-3 space-y-1 overflow-y-auto custom-scrollbar">
        <button className="w-full flex items-center gap-x-3 px-3 py-2 rounded-xl text-sm font-medium transition bg-white/10 text-white shadow-xs">
          <LayoutGrid className="h-4 w-4 text-blue-400" />
          <span>Board View</span>
        </button>

        <button className="w-full flex items-center gap-x-3 px-3 py-2 rounded-xl text-sm font-medium transition text-zinc-400 hover:text-zinc-200 hover:bg-white/5">
          <Calendar className="h-4 w-4 text-emerald-400" />
          <span>Planner</span>
        </button>

        <button className="w-full flex items-center gap-x-3 px-3 py-2 rounded-xl text-sm font-medium transition text-zinc-400 hover:text-zinc-200 hover:bg-white/5">
          <Layers className="h-4 w-4 text-purple-400" />
          <span>Switch boards</span>
        </button>
      </div>

      {/* Symmetrical Help Footer Card */}
      <div className="p-3 border-t border-white/5 bg-black/20 shrink-0">
        <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 text-center space-y-1">
          <Info className="h-4 w-4 text-zinc-500 mx-auto" />
          <p className="text-[11px] text-zinc-400 font-medium">Consolidate your to-dos smoothly.</p>
        </div>
      </div>

    </div>
  );
};