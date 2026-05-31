import type { PropsWithChildren } from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] relative antialiased">
      {/* Note: The layout is set to min-h-screen to cover the full viewport.
         The content starts at the top with a padding-top for the Navbar.
      */}
      <Navbar />
      
      <main className="flex-grow flex flex-col pt-14 relative z-10"> 
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingLayout;