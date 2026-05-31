import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { ActivityItem } from "@/components/activity-item";
import { db } from "@/lib/db";
import { History } from "lucide-react";

export const ActivityList = async () => {
  const { orgId } = auth();

  if (!orgId) return redirect("/select-org");

  const auditLogs = await db.auditLog.findMany({
    where: { orgId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2 text-zinc-300 font-semibold text-lg">
        <History className="h-5 w-5 text-zinc-500" />
        Activity
      </div>

      {/* Timeline List */}
      <ol className="relative border-l border-zinc-800 ml-2 space-y-8 pb-4">
        {auditLogs.length === 0 && (
          <p className="text-sm text-center text-zinc-500 pt-4">
            No activity found inside this organization.
          </p>
        )}

        {auditLogs.map((log) => (
          <li key={log.id} className="ml-6">
            {/* The little dot on the timeline */}
            <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-zinc-700 ring-4 ring-zinc-900" />
            
            <ActivityItem data={log} />
          </li>
        ))}
      </ol>
    </div>
  );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-6 w-32" />
      <div className="space-y-8 ml-2 border-l border-zinc-800 pl-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="w-full h-14" />
        ))}
      </div>
    </div>
  );
};