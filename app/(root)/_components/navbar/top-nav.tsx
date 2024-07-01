"use client";

import { MenuType } from "@/utils/types";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/app/(root)/_components/theme";

import { HiMenu } from "react-icons/hi";
import { FaLanguage } from "react-icons/fa6";
import { RiMobileDownloadLine } from "react-icons/ri";
import SheetProvider from "@/components/providers/sheet-provider";

const TopNav = ({ data }: { data: MenuType[] }) => {
  return (
    <section id="top" className="flex justify-between py-2 border-b">
      <div className="w-full lg:w-[75%] mx-auto flex justify-end lg:justify-between items-center px-3 lg:px-0">
        <div className="hidden lg:flex flex-row gap-x-6 text-xs tracking-wider font-bold uppercase">
          <div>news</div>
          <div>blogs</div>
          <div>find order</div>
        </div>

        <div className="mr-auto lg:hidden">
          <SheetProvider data={data}>
            <HiMenu className="w-6 h-6" />
            <span className="sr-only">Menu Bar</span>
          </SheetProvider>
        </div>

        <div className="flex flex-row gap-x-6 items-center">
          <ThemeToggle />
          <Button className="hidden lg:inline-flex" size="xs" variant="oval">
            <RiMobileDownloadLine className="w-4 h-4 mr-2" /> Get APP
          </Button>

          <button className="flex items-center">
            <FaLanguage className="w-6 h-6 mr-2" />
            <div className="text-xs">ENG / USD</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
