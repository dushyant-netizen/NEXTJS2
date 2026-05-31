"use client";

import { useQuery } from "@tanstack/react-query";
import { getBoards } from "@/actions/get-boards"; // <-- IMPORT THIS
import { useRouter } from "next/navigation";
import { History, Star, Plus } from "lucide-react";

interface Board {
  id: string;
  title: string;
  imageThumbUrl: string;
}

export const SidebarRight = () => {
  const router = useRouter();

  const { data: boards, isLoading } = useQuery<Board[]>({
    queryKey: ["Boards"],
    queryFn: getBoards, // <-- THIS IS THE MISSING PIECE
  });

  // ... rest of your component

  return (
    <aside className="hidden lg:flex flex-col w-65 h-full bg-zinc-950/50 backdrop-blur-sm text-zinc-400 select-none border-l border-zinc-800/80 pt-20 px-6">
      <div className="space-y-1.5 flex-1 overflow-y-auto custom-scrollbar">
        
        {/* SECTION HEADER */}
        <div className="font-semibold text-xs text-zinc-500 flex items-center mb-2 px-2 uppercase tracking-wider h-7 shrink-0">
          <div className="flex items-center gap-x-2">
            <History className="h-4 w-4 text-zinc-500" />
            <span>Recently viewed</span>
          </div>
        </div>

        {/* BOARD LIST */}
        {isLoading ? (
          <div className="px-2 text-sm text-zinc-600 animate-pulse">Loading...</div>
        ) : !boards || boards.length === 0 ? (
          <div className="px-2 text-sm text-zinc-600">No boards found</div>
        ) : (
          boards.map((board) => (
            <div
              key={board.id}
              onClick={() => router.push(`/board/${board.id}`)}
              className="w-full flex items-center gap-x-3 p-2 rounded-lg text-left transition hover:bg-zinc-900/60 active:bg-zinc-900 group cursor-pointer relative"
            >
              <div
                className="w-10 h-8 rounded-sm bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
              />
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-medium text-zinc-300 truncate group-hover:text-zinc-100 transition">
                  {board.title}
                </span>
                <span className="text-xs text-zinc-500 truncate">Trello Workspace</span>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); }}
                className="p-1 rounded-md text-zinc-500 hover:text-amber-500 hover:bg-zinc-800/50 transition opacity-0 group-hover:opacity-100 ml-auto"
              >
                <Star className="h-4 w-4" />
              </button>
            </div>
          ))
        )}

        {/* LINKS SECTION */}
        <div className="flex flex-col gap-y-2 pt-4">
          <div className="px-2 text-zinc-500 font-semibold text-xs uppercase tracking-wider h-7 flex items-center shrink-0">
            <span>Links</span>
          </div>
          <button
            onClick={() => router.push("/select-org")}
            className="w-full flex items-center gap-x-3 p-2 rounded-lg text-left transition hover:bg-zinc-900/60 active:bg-zinc-900 group"
          >
            <div className="w-10 h-8 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-zinc-700 transition">
              <Plus className="h-4 w-4 text-zinc-400 group-hover:text-zinc-200 transition" />
            </div>
            <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition">
              Create new board
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarRight;