import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { BoardNavbar } from "./_components/board-navbar";
import { BoardSidebarLeft } from "./_components/board-sidebar-left";
import { db } from "@/lib/db";

export async function generateMetadata({
  params,
  }: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;
  const { orgId } = auth();

  if (!orgId) return { title: "Board" };

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ boardId: string }>;
}) => {
  const { boardId } = await params;
  const { orgId } = auth();

  if (!orgId) redirect("/select-org");

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  if (!board) notFound();

  return (
    // 1. STABLE VIEWPORT ROOT ENGINE
    <div
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
      className="relative h-screen w-screen bg-no-repeat bg-cover bg-center flex flex-col overflow-hidden select-none antialiased p-3 gap-y-3"
    >
      {/* Premium dark matrix layer to keep contrast high across different wallpapers */}
      <div aria-hidden className="absolute inset-0 bg-black/15 backdrop-blur-[0.5px] z-0" />

      {/* 2. FLOATING SUB-NAVBAR CONTROL ROW */}
      <div className="relative z-20 shrink-0 w-full bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-md">
        <BoardNavbar data={board} />
      </div>

      {/* 3. WORKING AREA: SPLIT PANEL WRAPPER */}
      <div className="relative flex-1 flex gap-x-3 w-full h-full overflow-hidden z-10 min-w-0">
        
        {/* LEFT COMPONENT: Floating isolated Sidebar panel */}
        <aside className="hidden md:flex flex-col w-64 h-full bg-zinc-950/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all">
          <BoardSidebarLeft />
        </aside>

        {/* RIGHT COMPONENT: Floating isolated Main Canvas panel where lists reside */}
        <main className="flex-1 h-full bg-zinc-900/10 backdrop-blur-xs border border-white/5 rounded-2xl overflow-hidden shadow-xs relative flex flex-col min-w-0">
          <div className="flex-1 w-full h-full overflow-hidden relative">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
};

export default BoardIdLayout;