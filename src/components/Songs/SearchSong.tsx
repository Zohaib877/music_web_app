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

const SearchSong: React.FC<SongsProps> = ({
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
  };

  return (
    <div className="w-full h-auto px-4 lg:px-11 xl:px-11 flex flex-col justify-evenly">
       {heading && (
        <div className="flex justify-between items-center px-4 mb-5">
          <h3 className={`text-fontPrimary text-2xl`}>{heading}</h3>
          <Link
              href={`/search`}
              className="w-fit items-center justify-center px-4 lg:px-8 xl:px-8 mx-2 rounded-3xl bg-buttonPrimary border border-btnGradientFrom text-white font-medium hover:font-bold"
            >
              View All
            </Link>
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
                src={item.cover_image??""}
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

export default SearchSong;
