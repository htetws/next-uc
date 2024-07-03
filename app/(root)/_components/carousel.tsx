"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const prevImage = (currentIndex - 1 + images.length) % images.length;
  const nextImage = (currentIndex + 1) % images.length;

  const scrollTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    const newIndex = prevImage;
    scrollTo(newIndex);
  }, [prevImage, scrollTo]);

  const nextSlide = useCallback(() => {
    const newIndex = nextImage;
    scrollTo(newIndex);
  }, [nextImage, scrollTo]);

  useEffect(() => {
    const intervalFun = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (5000 / 100);
      });
    }, 100);

    return () => clearInterval(intervalFun);
  }, [nextSlide]);

  return (
    <main className="flex flex-row gap-x-6">
      <div
        onClick={prevSlide}
        className="group cursor-pointer w-[10%] hidden lg:block h-[22rem] relative rounded-xl overflow-hidden"
      >
        <Image
          width={1000}
          height={1000}
          src={images[prevImage]}
          alt={images[prevImage]}
          priority
          className="object-cover h-full grayscale opacity-60 dark:opacity-20"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <MdArrowLeft className="w-14 h-14 hidden group-hover:block transition-all" />
        </div>
      </div>

      <div className="relative w-full cursor-pointer h-[10rem] lg:h-[22rem] rounded-md lg:rounded-xl overflow-hidden transition">
        <AnimatePresence>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 100) {
                prevSlide();
              } else if (offset.x < -100) {
                nextSlide();
              }
            }}
            className="w-full rounded-md lg:rounded-xl z-10 h-full absolute opacity-0"
          />
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            fill
            priority
          />
        </AnimatePresence>

        <div className="flex gap-x-2 absolute z-20 bottom-3 left-1/2 -translate-x-1/2">
          {images.map((_, idx) => {
            return (
              <div
                key={idx}
                role="progressbar"
                aria-label="progress-bar-div"
                onClick={() => scrollTo(idx)}
                className={cn(
                  "w-2 h-1 lg:w-[1.4rem] lg:h-[5px] gap-x-3 rounded-full overflow-hidden bg-slate-300",
                  currentIndex === idx && "w-8 lg:w-14 bg-white",
                  currentIndex !== idx && "opacity-60"
                )}
              >
                {currentIndex === idx && (
                  <div
                    style={{
                      height: "100%",
                      width: `${progress}%`,
                      backgroundColor: "blue",
                    }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div
        onClick={nextSlide}
        className="group cursor-pointer w-[10%] hidden lg:block h-[22rem] relative rounded-xl overflow-hidden"
      >
        <Image
          width={1000}
          height={1000}
          src={images[nextImage]}
          alt={images[nextImage]}
          priority
          className="object-cover grayscale h-full opacity-60 dark:opacity-20"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <MdArrowRight className="w-14 h-14 hidden group-hover:block transition-all" />
        </div>
      </div>
    </main>
  );
};

export default Carousel;
