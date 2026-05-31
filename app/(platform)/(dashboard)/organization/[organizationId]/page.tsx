import { Suspense } from "react";
import { Search, SlidersHorizontal, Grid, List } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { checkSubscription } from "@/lib/subscription";
import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";

const OrganizationIdPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full space-y-6 pb-20">
      {/* Profile workspace banner block header */}
      <Info isPro={isPro} />

      <Separator className="bg-zinc-800/60 my-2" />

      {/* FILTER CONTROLLER TOOLBAR */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full border-b border-zinc-800/40 pb-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Filter boards..."
            className="w-full bg-zinc-950/20 border border-zinc-800/80 rounded-lg pl-9 pr-4 py-1.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition"
          />
        </div>

        <div className="flex items-center gap-x-2 ml-auto w-full sm:w-auto justify-end">
          <button className="flex items-center gap-x-2 text-xs font-medium px-3 py-2 bg-zinc-950/20 hover:bg-zinc-900/40 border border-zinc-800/80 rounded-lg text-zinc-400 hover:text-zinc-200 transition">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Sort by settings</span>
          </button>
          <div className="h-6 w-px bg-zinc-800/60 mx-1 hidden sm:block" />
          <div className="bg-zinc-950/40 p-1 border border-zinc-800/80 rounded-lg flex items-center gap-x-1">
            <button className="p-1.5 rounded-md bg-zinc-800 text-zinc-100 transition">
              <Grid className="h-3.5 w-3.5" />
            </button>
            <button className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 transition">
              <List className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* RENDER DYNAMIC BOARD CARDS STREAM */}
      <div className="px-1 pt-2">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;