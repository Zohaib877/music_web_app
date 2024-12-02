"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "react-responsive";

interface Slide {
  url: string;
  title?: string;
}

interface Props {
  slides: Slide[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<Props> = ({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ minWidth: 425, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 425 });

  const iconSize = isMobile ? 30 : isTablet ? 40 : 60;

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!autoSlide || !emblaApi) return;

    intervalRef.current = window.setInterval(() => {
      scrollNext();
    }, autoSlideInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoSlide, autoSlideInterval, emblaApi, scrollNext]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-300 ease-in-out 
              ${
                isMobile
                  ? "flex-[0_0_90%]"
                  : isTablet
                  ? "flex-[0_0_50%]"
                  : "flex-[0_0_40%]"
              }
              mx-2 ${
                selectedIndex === index
                  ? "scale-105 z-20"
                  : "scale-90 opacity-50"
              }`}
            >
              <Image
                src={slide.url??""}
                alt={slide.title || `Slide ${index + 1}`}
                width={isMobile ? 300 : isTablet ? 500 : 500}
                height={isMobile ? 180 : isTablet ? 300 : 450}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-3 md:px-5">
        <button
          onClick={scrollPrev}
          className="p-1.5 md:p-2 lg:p-3 rounded-full shadow bg-white bg-opacity-70 hover:bg-opacity-100 transition duration-300 transform hover:scale-105 md:hover:scale-110"
        >
          <BiChevronLeft
            size={iconSize}
            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
        </button>
        <button
          onClick={scrollNext}
          className="p-1.5 md:p-2 lg:p-3 rounded-full shadow bg-white bg-opacity-70 hover:bg-opacity-100 transition duration-300 transform hover:scale-105 md:hover:scale-110"
        >
          <BiChevronRight
            size={iconSize}
            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
