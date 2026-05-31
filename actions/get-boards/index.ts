"use server";

import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const getBoards = async () => {
  const { orgId } = auth();
  if (!orgId) return [];

  return await db.board.findMany({
    where: { orgId },
    orderBy: { createdAt: "desc" },
  });
};