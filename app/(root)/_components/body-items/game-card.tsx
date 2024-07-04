"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GameCardProps } from "@/utils/types";
import { MdArrowRight } from "react-icons/md";
import Image from "next/image";

const GameCard = ({ games }: GameCardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {games.map((game, idx) => (
        <Card
          key={idx}
          className="border-0 bg-slate-200 shadow-lg dark:bg-gradient-to-tr dark:from-slate-900 dark:to-black/90"
        >
          <CardHeader className="flex flex-row justify-between py-4">
            <h1 className="font-bold text-xl uppercase">{game.label}</h1>
            <Link
              href="/games"
              className="flex items-center gap-x-2 text-xs hover:text-[#F06225] transition-colors"
            >
              View More <MdArrowRight className="w-6 h-6" />
            </Link>
          </CardHeader>
          <CardContent className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
            {game.data.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row gap-4 group transition cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt="image"
                  width={60}
                  height={60}
                  className="rounded-lg group-hover:scale-105 duration-300"
                />

                <div className="flex flex-col space-y-1">
                  <h1 className="font-bold text-xs line-clamp-2">
                    {item.title}
                  </h1>
                  <span className="text-[10px] text-muted-foreground capitalize">
                    {item.region}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GameCard;
