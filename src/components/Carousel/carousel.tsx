"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

interface slide {
  url: string;
  title?: string;
}

interface Props {
  slides: slide[];
  autoSlide: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<Props> = ({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const totalSlides = slides.length;
  const initialCurrIndex = Math.floor(totalSlides / 2);
  const [curr, setCurr] = useState(initialCurrIndex);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? totalSlides - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === totalSlides - 1 ? 0 : curr + 1));

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isBigScreen = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 425, maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 425 });
  const visibleSlides = isMobile || isTablet ? 1 : 3;

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const iconSize = isMobile ? 20 : isTablet ? 40 : isBigScreen ? 70 : 60;

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex items-center transition-transform ease-out duration-700"
        style={{
          transform: `translateX(${((curr - 1) * -100) / visibleSlides}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
              curr === index ? "scale-105 z-20" : "scale-90 opacity-50"
            }`}
          >
            <Image
              src={slide.url}
              alt=""
              width={isLargeScreen ? 550 : 381}
              height={isLargeScreen ? 380 : 393}
              className={`object-contain w-[222px] h-[93px] md:w-[381px] md:h-[193px] lg:w-[550px] lg:h-[280px] xl:w-[550px] xl:h-[380px] p-0`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-3 md:px-5">
        <button
          onClick={prev}
          className="p-1.5 md:p-2 lg:p-3 rounded-full shadow bg-white bg-opacity-70 hover:bg-opacity-100 transition duration-300 transform hover:scale-105 md:hover:scale-110"
        >
          <BiChevronLeft
            size={iconSize ? iconSize : 24}
            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
        </button>
        <button
          onClick={next}
          className="p-1.5 md:p-2 lg:p-3 rounded-full shadow bg-white bg-opacity-70 hover:bg-opacity-100 transition duration-300 transform hover:scale-105 md:hover:scale-110"
        >
          <BiChevronRight
            size={iconSize ? iconSize : 24}
            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
