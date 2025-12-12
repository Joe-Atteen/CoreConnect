"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavigationProps {
  isHeroSection?: boolean;
}

const MobileNavigation = ({ isHeroSection = false }: MobileNavigationProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
          <Image
            src="/hamburger.svg"
            width={28}
            height={28}
            alt="Menu"
            className={`md:hidden transition-all duration-300 ${
              isHeroSection ? "brightness-0 invert" : ""
            }`}
          />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white border-none w-[300px] p-0">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="p-6 border-b border-[#f0f0f0]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={130}
              height={40}
              alt="CoreConnect Logo"
            />
          </Link>
        </div>

        <div className="flex flex-col p-6">
          <nav className="flex flex-col gap-2">
            <SheetClose asChild>
              <Link
                href="#about"
                className="px-4 py-3 text-[#545454] font-medium hover:text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-xl transition-colors"
              >
                About
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="#services"
                className="px-4 py-3 text-[#545454] font-medium hover:text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-xl transition-colors"
              >
                Services
              </Link>
            </SheetClose>
          </nav>

          <div className="mt-8 pt-6 border-t border-[#f0f0f0]">
            <SheetClose asChild>
              <Link
                href="#contact"
                className="block w-full text-center bg-[#1a1a1a] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#333] transition-colors"
              >
                Get in touch
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
