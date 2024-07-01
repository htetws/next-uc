"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuType } from "@/utils/types";
import { buttonVariants } from "@/components/ui/button";
import NavItem from "@/app/(root)/_components/navbar/nav-item";

import { FaSearch } from "react-icons/fa";

const BottomNav = ({ data }: { data: MenuType[] }) => {
  return (
    <section
      id="bottom"
      className="hidden lg:flex justify-between items-center lg:w-[75%] mx-auto py-4 px-3 lg:px-0"
    >
      <div className="flex flex-row gap-x-10 justify-between items-center">
        <Image alt="logo" src="/logo.svg" width={40} height={40} priority />
        <div className="flex flex-row space-x-2">
          {data.map((item, idx) => (
            <NavItem key={idx} label={item.label} data={item.data} />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-x-3">
        <div className="border-2 border-slate-300 dark:border-slate-800 focus-within:border-slate-400 dark:focus-within:border-blue-500/20 dark:focus-within:bg-gradient-to-tr focus-within:from-blue-900/20 rounded-full flex justify-between items-center px-3">
          <input
            className="outline-none bg-transparent peer pl-3 placeholder:text-sm"
            placeholder="Search"
          />
          <FaSearch className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="tracking-wide">
          <Link
            href="/auth"
            className={cn(
              buttonVariants({ variant: "link" }),
              "pr-0 text-sm dark:text-muted-foreground"
            )}
          >
            Sign In / Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BottomNav;
