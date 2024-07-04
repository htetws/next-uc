"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MdLink } from "react-icons/md";
import { cn } from "@/lib/utils";

interface NewPromoProps {
  news: { id: number; title: string; image: string }[];
}

const NewPromo = ({ news }: NewPromoProps) => {
  return (
    <div className="flex flex-col space-y-6">
      <nav className="flex justify-between">
        <h1 className="uppercase font-bold text-2xl">news & promotions</h1>
        <span className="text-sm">
          More gaming news and promotions on
          <span className="text-blue-500 font-bold italic cursor-pointer ml-1">
            UCDIA News
          </span>
          <MdLink className="w-6 h-6 ml-2 text-blue-500 inline mb-1" />
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {news.map((item, idx) => (
          <Card className="bg-transparent border-0 shadow-none" key={idx}>
            <CardContent className="rounded-xl overflow-hidden h-[10rem] p-0">
              <Image
                alt="news"
                src={item.image}
                width={500}
                height={500}
                className="h-full w-full object-fill hover:scale-105 duration-300 cursor-pointer"
              />
            </CardContent>
            <CardFooter className="px-1 py-2">
              <span className="text-[.75rem] leading-[1rem] font-bold dark:text-slate-300 capitalize tracking-wide line-clamp-1">
                {item.title}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Four Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 bg-slate-200 shadow-lg dark:bg-gradient-to-tr dark:from-slate-900 dark:to-black/90 py-7 px-10 rounded-2xl">
          <Image
            alt="grid1"
            src="https://seagm-media.seagmcdn.com/art/v5/home/playstation-network-card-code.png?x-oss-process=image/resize,w_240"
            width={130}
            height={130}
          />
          <div className="flex flex-col space-y-4">
            <h1 className="lg:text-xl uppercase font-semibold">
              Entertainment and adventures all in one place, the PlayStation
              Store.
            </h1>
            <span className="text-muted-foreground text-xs">
              With the PlayStation Network Card you can shop for games from AAA
              titles to Indies plus movies and music. Buy PlayStation Network
              Card from SEAGM and start shopping now! Instant delivery with 24/7
              live support, globally trusted.
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 bg-slate-200 shadow-lg dark:bg-gradient-to-tr dark:from-slate-900 dark:to-black/90 py-7 px-10 rounded-2xl">
          <Image
            alt="grid1"
            src="https://seagm-media.seagmcdn.com/art/v5/home/google-play-gift-card.png?x-oss-process=image/resize,w_240"
            width={130}
            height={130}
          />
          <div className="flex flex-col space-y-4">
            <h1 className="lg:text-xl font-semibold uppercase">
              TURN YOUR SMARTPHONE INTO A GAME, MOVIE AND BOOK LIBRARY!
            </h1>
            <span className="text-muted-foreground text-xs line-clamp-3">
              Top up your Google Play Balance with the Google Play Gift card and
              start growing your collection! Buy game booster packs, rent a
              movie or read an ebook - all from the convenience of your
              smartphone. SEAGM offers cards for up to 15 regions, check them
              out! Instant delivery with 24/7 live support, globally trusted.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPromo;
