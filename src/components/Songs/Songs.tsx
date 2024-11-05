"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MediaItem } from "@/lib/features/Tops/TopsSlice";
import store, { RootState } from "@/lib/store";
import {
  addQueueList,
  playTrack,
} from "@/lib/features/Player/mediaPlayerSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useState } from "react";

enum types {
  IMAGE,
  VIDEO,
  BANNER,
}

interface ResponsiveSetting {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
    infinite?: boolean;
    dots?: boolean;
    initialSlide?: number;
  };
}

interface SliderSettings {
  dots: boolean;
  className?: string;
  centerMode?: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
  responsive: ResponsiveSetting[];
}

const getSettings = (
  type: types,
  dot: boolean,
  arrow: boolean
): SliderSettings => ({
  dots: type === types.BANNER || !dot ? false : true,
  infinite: true,
  speed: 500,
  slidesToShow: type === types.BANNER ? 3 : 5,
  slidesToScroll: 1,
  arrows: arrow,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: type === types.BANNER ? 3 : 6,
        slidesToScroll: 1,
        infinite: true,
        dots: type === types.BANNER || !dot ? false : true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: type === types.BANNER ? 2 : 5,
        slidesToScroll: 1,
        infinite: true,
        dots: type === types.BANNER || !dot ? false : true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: type === types.BANNER ? 1 : 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: type === types.IMAGE ? 3 : type === types.VIDEO ? 2 : 1,
        slidesToScroll: 1,
      },
    },
  ],
});

interface SongsProps {
  type: types;
  heading?: string;
  link?: string;
  banner?: boolean;
  dot?: boolean;
  arrow?: boolean;
  slides: MediaItem[];
}

const Songs: React.FC<SongsProps> = ({
  type,
  heading,
  link,
  dot = false,
  arrow = true,
  slides,
}) => {
  const { loading } = useSelector((state: RootState) => state.home);
  const [ratio, setRatio] = useState(16/9) 
  const isBigScreen = useMediaQuery({ minWidth: 1024 });
  const settings = getSettings(type, dot, arrow);
  const router = useRouter();

  const handlePlay = (data: MediaItem) => {
    if (data.type === "audio") {
      router.push(`/player/audio/${data.id}`);
    } else if (data.type === "video") {
      router.push(`/player/video/${data.id}`);
    }
    store.dispatch(playTrack(data));
    store.dispatch(addQueueList(slides));
  };
  if (loading) {
    return (
      <div className="w-full h-auto px-4 lg:px-11 xl:px-11 flex flex-col justify-evenly">
        {heading && (
          <div className="flex justify-between items-center px-4 mb-6">
            <div className="bg-gray-600 animate-pulse h-8 w-1/5 rounded"></div>
            <div className="bg-gray-600 animate-pulse h-8 w-24 rounded"></div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-1 mb-9 w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              role="status"
              className="flex flex-col items-center justify-center p-4 h-56 w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
            >
              <svg
                className="w-16 h-16 text-gray-200 dark:text-gray-600 mb-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
              <div className="flex flex-col justify-end items-center w-full">
                <div className="w-full h-16 bg-gray-600 rounded mb-3"></div>
                <div className="w-3/4 h-4 bg-gray-600 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto px-4 lg:px-11 xl:px-11 flex flex-col justify-evenly">
      {heading && (
        <div className="flex justify-between items-center px-4">
          <h3 className={`text-fontPrimary text-2xl`}>{heading}</h3>
          {link && (
            <Link
              href={`/song/${link}`}
              className="w-fit items-center justify-center px-4 lg:px-8 xl:px-8 mx-2 rounded-3xl bg-buttonPrimary border border-btnGradientFrom text-white font-medium hover:font-bold"
            >
              View All
            </Link>
          )}
        </div>
      )}

      <div className={`${type !== types.BANNER ? `py-1 mb-9` : ``}`}>
        <Slider {...settings} className="custom-slider">
          {slides.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col justify-center items-center hover:scale-105 ${
                type === types.BANNER
                  ? `h-80 w-64`
                  : isBigScreen
                  ? `h-70 w-64`
                  : `h-28 w-28`
              } px-4 py-3`}
              onClick={() => handlePlay(item)}
            >
              <Image
                src={item.cover_image}
                alt={item.title}
                width={type === types.BANNER ? 450 : isBigScreen ? 200 : 121}
                height={type === types.BANNER ? 450 : isBigScreen ? 150 : 73}
                className="mb-3 mx-auto cursor-pointer rounded-sm"
                objectFit="contain"
                style={{
                  borderRadius: 10,
                  aspectRatio: "16/9",
                }}
                layout="fixed"
                onLoadingComplete={({ naturalWidth, naturalHeight }) => 
                  setRatio(naturalWidth / naturalHeight)
                }
              />
              {item.title && (
                <p
                  className={`text-fontPrimary ${
                    isBigScreen ? "text-base font-medium" : "text-xs font-thin"
                  } text-center cursor-pointer hover:underline`}
                >
                  {item.title}
                </p>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Songs;
