import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2", // If the file is in your project root
});

type LogoProps = {
  isMobile?: boolean;
};

export const Logo = ({ isMobile = false }: LogoProps) => {
  return (
    <Link href="/" className="hover:opacity-75 transition-opacity duration-300">
      <div className={cn("flex items-center gap-x-2", !isMobile && "hidden md:flex")}>
        <div className="relative h-7 w-8">
          <Image
            src="/task.png"
            alt="TaskiLy logo"
            fill
            className="object-contain"
          />
        </div>
        <p
          className={cn(
            "text-xl font-bold text-neutral-300 tracking-tight leading-none", 
            headingFont.className
          )}
        >
          TaskiLy
        </p>
      </div>
    </Link>
  );
};