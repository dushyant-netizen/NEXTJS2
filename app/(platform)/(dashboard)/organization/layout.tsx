import type { PropsWithChildren } from "react";
import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;