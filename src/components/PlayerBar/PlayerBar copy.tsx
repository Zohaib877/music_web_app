"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { BsRepeat } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import {
  IoPlay,
  IoPause,
  IoPlayBackOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";

const PlayerBar = () => {
  const router = useRouter();
  const [value, setValue] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isBigScreen, setIsBigScreen] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Use useEffect to handle client-side only logic
  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle range slider change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setValue(value);
    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * duration;
    }
  };

  // Toggle play and pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle time update from the audio element
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const progress = (currentTime / duration) * 100;
      setCurrentTime(currentTime);
      setValue(progress);
    }
  };

  // Load metadata for the audio duration
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-[70px] lg:h-[90px] xl:h-[90px] bg-black/100 z-20 flex flex-col justify-start lg:justify-center xl:justify-center">
      <audio
        ref={audioRef}
        src="https://www.kozco.com/tech/LRMonoPhase4.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      {!isBigScreen && (
        <div className="relative w-full bg-gray-700 rounded-full h-2 pb-1">
          <div className="w-full flex flex-col items-center absolute">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div
                className="bg-buttonPrimary h-1 rounded-full"
                style={{ width: `${value}%` }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              step="0.1"
              onChange={handleChange}
              className="range-slider w-full absolute"
            />
          </div>
        </div>
      )}

      <div className="flex justify-between items-center px-2 md:px-3 py-3 lg:py-0">
        <div className="w-1/2 lg:w-2/12 xl:w-2/12 flex justify-start overflow-hidden">
          <Image
            src="/assets/images/thumbnail/song_mobile.png"
            alt=""
            width={isBigScreen ? 75 : 45}
            height={isBigScreen ? 75 : 45}
          />
          <div className="flex flex-col justify-center pl-1 lg:pl-2">
            <p className="text-fontPrimary text-xs lg:text-base xl:text-base whitespace-nowrap">
              Kithaan Guzaari Raat
            </p>
            <p className="text-fontPrimary text-[10px] lg:text-xs xl:text-xs font-thin whitespace-nowrap">
              Nadeem Abbas Khan Lonay Wala
            </p>
          </div>
        </div>
        {isBigScreen && (
          <div className="w-6/12 h-full flex flex-row justify-start items-center px-5">
            <p className="text-fontPrimary text-base font-light pr-2">
              {new Date(currentTime * 1000).toISOString().substring(14, 19)}
            </p>
            <div className="flex-1 w-full bg-gray-700 rounded-full h-1.5">
              <div className="w-full flex flex-col items-center">
                <div className="w-full bg-gray-700 rounded-full">
                  <div
                    className="bg-buttonPrimary h-1.5 rounded-full"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  step="0.1"
                  onChange={handleChange}
                  className="range-slider w-full -mt-1.5"
                />
              </div>
            </div>
            <p className="text-fontPrimary text-base font-light pl-2">
              {new Date(duration * 1000).toISOString().substring(14, 19)}
            </p>
          </div>
        )}
        <div className="w-1/2 lg:w-4/12 xl:w-4/12 flex justify-evenly items-center">
          <button className="w-7 lg:w-10 xl:w-10 h-7 lg:h-10 xl:h-10 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center">
            <IoPlayBackOutline size={isBigScreen ? 22 : 15} />
          </button>
          <button
            onClick={togglePlay}
            className="w-8 lg:w-12 xl:w-12 h-8 lg:h-12 xl:h-12 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center"
          >
            {isPlaying ? (
              <IoPause size={isBigScreen ? 23 : 17} />
            ) : (
              <IoPlay size={isBigScreen ? 23 : 17} />
            )}
          </button>
          <button className="w-7 lg:w-10 xl:w-10 h-7 lg:h-10 xl:h-10 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center">
            <IoPlayForwardOutline size={isBigScreen ? 22 : 15} />
          </button>
          {isBigScreen && (
            <div className="text-fontPrimary text-xl">
              <BsRepeat />
            </div>
          )}
          <div className="text-buttonPrimary text-xl">
            <FaHeart />
          </div>
          {isBigScreen && (
            <div className="text-fontPrimary text-xl">
              <HiOutlineDotsVertical />
            </div>
          )}
          <div
            className="text-fontPrimary text-xl cursor-pointer"
            onClick={() => router.push("/player/audio/1")}
          >
            <IoIosArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
