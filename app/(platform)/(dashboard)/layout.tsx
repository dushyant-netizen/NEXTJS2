import type { PropsWithChildren } from "react";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { SidebarRight } from "./_components/sidebar-right"; 

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-col bg-zinc-900 text-zinc-100 overflow-hidden">
      <Navbar />

      <div className="flex flex-1 h-[calc(100vh-3.5rem)] w-full overflow-hidden">
        
        {/* Left Side: flex-none maintains width */}
        <aside className="hidden md:flex flex-none w-64 h-full border-r border-zinc-800/80 bg-zinc-950/20">
          <Sidebar />
        </aside>

        {/* Center Workspace */}
        <main className="flex-grow h-full overflow-y-auto pt-20 px-6">
          <div className="max-w-5xl mx-auto w-full">
            {children}
          </div>
        </main>

        {/* Right Side */}
        <aside className="hidden lg:flex flex-none w-64 h-full border-l border-zinc-800/80 bg-zinc-950/20">
          <SidebarRight />
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;