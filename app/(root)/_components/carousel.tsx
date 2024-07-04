"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { url } from "inspector";

interface CarouselProps {
  images: string[];
}

const variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0.3,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0.3,
  }),
};

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const prevImage = (currentIndex - 1 + images.length) % images.length;
  const nextImage = (currentIndex + 1) % images.length;

  const scrollTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    const newIndex = prevImage;
    scrollTo(newIndex);
    setDirection(-1);
  }, [prevImage, scrollTo]);

  const nextSlide = useCallback(() => {
    const newIndex = nextImage;
    scrollTo(newIndex);
    setDirection(1);
  }, [nextImage, scrollTo]);

  useEffect(() => {
    const intervalFun = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (6000 / 100);
      });
    }, 100);

    return () => clearInterval(intervalFun);
  }, [nextSlide]);

  return (
    <main className="flex flex-row gap-x-6">
      <div
        onClick={prevSlide}
        className="group cursor-pointer w-[15%] hidden lg:block h-[22rem] relative rounded-xl overflow-hidden"
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

      <div className="w-full relative aspect-video cursor-pointer h-[10rem] lg:h-[22rem] rounded-md lg:rounded-xl overflow-hidden transition">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 100) {
                prevSlide();
                setDirection(-1);
              } else if (offset.x < -100) {
                nextSlide();
                setDirection(1);
              }
            }}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-md lg:rounded-xl h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={images[currentIndex]}
              className="pointer-events-none z-10"
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-x-2 absolute bottom-3 z-10 left-1/2 -translate-x-1/2">
          {images.map((_, idx) => {
            return (
              <div
                key={idx}
                role="progressbar"
                aria-label="progress-bar-div"
                onClick={() => {
                  currentIndex !== idx && scrollTo(idx);
                }}
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
                      backgroundColor: "#F06225",
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
        className="group cursor-pointer w-[15%] hidden lg:block h-[22rem] relative rounded-xl overflow-hidden"
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
