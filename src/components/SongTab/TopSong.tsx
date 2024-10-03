"use client";
import { useState, useEffect } from "react";
import SongQueueCard from "../SongQueueCard/SongQueueCard";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import SongQueueGridCard from "../SongQueueCard/SongQueueGridCard";

const TopSong = () => {
  const [openCardId, setOpenCardId] = useState<Number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Handle component mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Always call useMediaQuery, but ignore the value until mounted
  const isBigScreen = useMediaQuery({ minWidth: 1024 });

  const handleToggle = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  // If the component isn't mounted yet, return a default layout (optional: a loading state could be returned)
  if (!isMounted) {
    return null; // Prevent rendering until mounted
  }

  return (
    <div className="w-full h-auto px-4 lg:px-11 xl:px-11 py-8">
      <div className="text-center lg:flex lg:justify-between lg:items-center xl:flex xl:justify-between xl:items-center">
        <h1 className="text-fontPrimary text-xl">Top Songs</h1>
        <div className="flex justify-center pt-6 lg:pt-0 xl:pt-0 lg:justify-end xl:justify-end items-center">
          <button
            type="button"
            className="w-fit h-9 lg:h-11 xl:h-11 px-4 lg:px-8 xl:px-8 mx-2 rounded-3xl bg-buttonPrimary border border-btnGradientFrom text-white font-medium hover:font-bold"
          >
            Audio
          </button>
          <button
            type="button"
            className="w-fit h-9 lg:h-11 xl:h-11 px-4 lg:px-8 xl:px-8 mx-2 rounded-3xl bg-buttonDisable border border-btnGradientFrom text-white font-medium hover:font-bold"
          >
            Video
          </button>
          <button
            type="button"
            className="w-fit h-9 lg:h-11 xl:h-11 px-4 lg:px-8 xl:px-8 mx-2 rounded-3xl bg-buttonDisable border border-btnGradientFrom text-white font-medium hover:font-bold"
          >
            Movie
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row py-4">
        <div
          className={`lg:w-5/12 w-full flex justify-items-start ${
            !isBigScreen ? "py-8" : ""
          }`}
        >
          <div className="w-10/12 flex justify-center items-center">
            <div className="w-7/12 lg:w-7/12 xl:w-7/12 hover:scale-105">
              {isBigScreen ? (
                <Image
                  src="/assets/images/thumbnail/tumbnail2.jpg"
                  alt="song trending"
                  width={300}
                  height={420}
                  style={{ borderRadius: 20 }}
                />
              ) : (
                <Image
                  src="/assets/images/thumbnail/song_mobile.png"
                  alt="song trending"
                  width={176}
                  height={174}
                />
              )}
            </div>
            <div className="w-5/12 lg:w-4/12 xl:w-4/12 h-full flex flex-col justify-center items-start pl-3 xl:pl-1">
              <p className="text-fontPrimary font-thin text-base lg:text-2xl xl:text-2xl mt-2">
                Top 10 Hits
              </p>
              <h3 className="text-fontPrimary font-bold text-xl lg:text-3xl xl:text-3xl mt-2 whitespace-nowrap lg:whitespace-pre-line xl:whitespace-pre-line">
                Trending Music
              </h3>
              <Image
                className="my-3 cursor-pointer"
                src="/assets/icons/play.png"
                alt="play"
                width={isBigScreen ? 50 : 35}
                height={isBigScreen ? 50 : 35}
                onClick={() => router.push("/player/audio/1")}
              />
            </div>
          </div>
        </div>
        {/* <div className="lg:w-7/12 h-[420px] overflow-y-scroll overflow-x-hidden grid">
          <SongQueueCard
            id={1}
            isOpen={openCardId === 1}
            handleToggle={() => handleToggle(1)}
          />
          <SongQueueCard
            id={2}
            isOpen={openCardId === 2}
            handleToggle={() => handleToggle(2)}
          />
          <SongQueueCard
            id={3}
            isOpen={openCardId === 3}
            handleToggle={() => handleToggle(3)}
          />
          <SongQueueCard
            id={4}
            isOpen={openCardId === 4}
            handleToggle={() => handleToggle(4)}
          />
          <SongQueueCard
            id={5}
            isOpen={openCardId === 5}
            handleToggle={() => handleToggle(5)}
          />
          <SongQueueCard
            id={6}
            isOpen={openCardId === 6}
            handleToggle={() => handleToggle(6)}
          />
        </div> */}
        <div className="lg:w-7/12 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }, (_, index) => (
            <SongQueueGridCard
              key={index + 1}
              id={index + 1}
              isOpen={openCardId === index + 1}
              handleToggle={() => handleToggle(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSong;
