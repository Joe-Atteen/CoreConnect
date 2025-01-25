import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  //   SheetDescription,
  //   SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors md:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.png" width={150} height={0} alt="Logo" />
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between gap-10 overflow-y-auto">
          <section className="flex h-full flex-col gap-8 pt-16 uppercase">
            <SheetClose asChild>
              <Link href="#about">About</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#services">Services</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#contact">Contact</Link>
            </SheetClose>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
