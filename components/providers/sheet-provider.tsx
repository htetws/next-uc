"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { MdClose, MdNewspaper } from "react-icons/md";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { MenuType } from "@/utils/types";
import { Button } from "../ui/button";
import { FaBlog, FaGift } from "react-icons/fa6";

interface SheetProviderProps {
  data: MenuType[];
  children: ReactNode;
}

const SheetProvider = ({ data, children }: SheetProviderProps) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="left" className="p-0 overflow-auto">
        <SheetTitle className="sr-only">test</SheetTitle>
        <nav className="border-b p-4 flex justify-between items-center">
          <Image alt="logo" src="/logo.svg" width={30} height={30} priority />
          <SheetClose>
            <MdClose className="w-6 h-6 text-muted-foreground" />
          </SheetClose>
        </nav>

        <main className="p-5 pt-4">
          <Button
            className="w-full mb-2 text-muted-foreground rounded-full"
            variant="outline"
            size="sm"
          >
            Sign In
          </Button>

          <button className="capitalize text-sm font-bold text-muted-foreground tracking-wide flex items-center py-3 w-full text-start">
            <MdNewspaper className="w-5 h-5 mr-4" /> news
          </button>

          <button className="capitalize text-sm font-bold text-muted-foreground tracking-wide flex items-center py-3 w-full text-start">
            <FaBlog className="w-5 h-5 mr-4" /> blogs
          </button>

          <button className="capitalize text-sm font-bold text-muted-foreground tracking-wide flex items-center py-3 w-full text-start">
            <FaGift className="w-5 h-5 mr-4" /> find order
          </button>

          <hr className="my-4" />

          <Accordion type="single" collapsible className="w-full mt-2">
            {data.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-none"
              >
                <AccordionTrigger className="capitalize text-sm font-bold text-muted-foreground tracking-wide">
                  <div className="flex items-center">
                    {item.icon && <item.icon className="w-5 h-5 mr-4" />}
                    {item.label}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-4 px-3 grid grid-cols-1 gap-2">
                  {item.data.map((each, idx) => (
                    <Button
                      variant="ghost"
                      size="xs"
                      key={idx}
                      className="justify-start text-xs font-bold tracking-wider text-muted-foreground"
                    >
                      <each.icon className="w-5 h-5 mr-4" /> {each.title}
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </main>
      </SheetContent>
    </Sheet>
  );
};

export default SheetProvider;
