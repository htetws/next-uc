"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface ExclusiveProps {
  data: {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    percent: string;
  }[];
}

const Exclusive = ({ data }: ExclusiveProps) => {
  return (
    <div className="flex flex-col space-y-6">
      <nav className="flex justify-between items-start">
        <div className="flex flex-col space-y-1">
          <h1 className="text-2xl uppercase font-bold">exclusive offers</h1>
          <span className="text-xs text-muted-foreground">
            {
              " Don't miss our limited-time offers! Discover current deals today!"
            }
          </span>
        </div>
        <Button size="xs" className="rounded-full text-xs font-semibold">
          View More
        </Button>
      </nav>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-6">
        {data.map((item, idx) => (
          <Card
            key={idx}
            className="overflow-hidden shadow-md border-black/20 dark:border-white/10"
          >
            <CardContent className="flex flex-row items-center gap-4 p-2 overflow-hidden">
              <Image
                src={item.image}
                alt="icon"
                width={50}
                height={50}
                className="rounded-xl p-1"
              />

              <div className="flex flex-col gap-y-[.1rem]">
                <h1 className="text-sm line-clamp-1 font-semibold">
                  {item.title}
                </h1>
                <small className="text-muted-foreground text-[10px]">
                  {item.subtitle}
                </small>
              </div>
            </CardContent>
            <CardFooter className="p-2 bg-gradient-to-tr bg-black/20 dark:bg-white/10 flex justify-between items-center">
              <Badge
                variant="success"
                size="xs"
                className="text-white font-bold"
              >
                PROMO
              </Badge>

              <div className="text-xs dark:text-white font-bold">
                {item.percent} %
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Exclusive;
