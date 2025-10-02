"use client";

import { useBelowBreakpoint } from "@/hooks/use-below-breakpoint";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const isMobile = useBelowBreakpoint(480);

  return (
    <nav className="w-screen shadow-2xl bg-white px-3 sm:px-6 py-3 relative">
      <h3
        className={cn(
          "text-lg sm:text-xl font-semibold text-[#8c916c] text-right",
          isMobile && "w-[60%] ml-auto"
        )}
      >
        Sapien&apos;s Wildlife Conservation Fund
      </h3>

      <Image
        src="/images/logo.jpg"
        alt="Sapien's Logo"
        className="absolute top-0 left-5 sm:left-10 z-50"
        width={100}
        height={150}
      />
    </nav>
  );
};

export default Navbar;
