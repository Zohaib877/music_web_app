"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SongIds: Number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

enum types {
  IMAGE,
  VIDEO,
  Banner,
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
  types: types,
  dot: boolean,
  arrow: boolean
): SliderSettings => ({
  dots: types == 2 || dot == false ? false : true,
  infinite: true,
  speed: 500,
  slidesToShow: types == 2 ? 3 : 5,
  slidesToScroll: 1,
  arrows: arrow == false ? false : true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: types == 2 ? 3 : 6,
        slidesToScroll: 1,
        infinite: true,
        dots: types == 2 || dot == false ? false : true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: types == 2 ? 2 : 5,
        slidesToScroll: 1,
        infinite: true,
        dots: types == 2 || dot == false ? false : true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: types == 2 ? 1 : 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: types == 0 ? 3 : types == 1 ? 2 : 1,
        slidesToScroll: 1,
      },
    },
  ],
});

interface slide {
  url: string;
  title?: string;
}

interface SongsProps {
  type: types;
  heading?: string;
  link?: string;
  banner?: boolean;
  dot?: boolean;
  arrow?: boolean;
  slides: slide[];
}

const Songs: React.FC<SongsProps> = ({
  type,
  heading,
  link,
  banner = false,
  dot = true,
  arrow = false,
  slides,
}) => {
  const isBigScreen = useMediaQuery({ minWidth: 1024 });
  const settings = getSettings(type, dot, arrow);
  const router = useRouter();
  return (
    <div className="w-full h-auto px-4 lg:px-11 xl:px-11 flex flex-col justify-evenly">
      {heading && (
        <div className="flex justify-between items-center py-5 px-4">
          <h3 className={`text-fontPrimary text-2xl`}>{heading}</h3>
          {link && (
            <Link
              href={`/song/${link}`}
              className="w-fit items-center justify-center  px-4 lg:px-8 xl:px-8 mx-2 rounded-3xl bg-buttonPrimary border border-btnGradientFrom text-white font-medium hover:font-bold"
            >
              View All
            </Link>
          )}
        </div>
      )}

      <div className={`${type != 2 ? `py-6 mb-9` : ``}`}>
        <Slider {...settings} className="custom-slider">
          {slides.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center hover:scale-105 ${
                type == 2
                  ? `h-80 w-64`
                  : isBigScreen
                  ? `h-80 w-64`
                  : `h-28 w-28`
              } px-4 py-3`}
            >
              <img
                src={item.url}
                alt={`Slide ${index + 1}`}
                width={type == 2 ? 450 : isBigScreen ? 200 : 121}
                height={type == 2 ? 450 : isBigScreen ? 250 : 73}
                style={{
                  borderRadius: 20,
                  aspectRatio: 1.5,
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
                className="mb-3 mx-auto cursor-pointer rounded-sm"
                onClick={() =>
                  type == 0
                    ? router.push("/player/audio/1")
                    : type == 1
                    ? router.push("/player/video/1")
                    : {}
                }
              />
              {item.title && (
                <p
                  className={`text-fontPrimary ${
                    isBigScreen ? "text-base font-medium" : "text-xs font-thin"
                  } text-center cursor-pointer hover:underline`}
                  onClick={() =>
                    type == 0
                      ? router.push("/player/audio/1")
                      : type == 1
                      ? router.push("/player/video/1")
                      : {}
                  }
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
