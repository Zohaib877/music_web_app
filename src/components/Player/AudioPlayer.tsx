"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { BsRepeat } from "react-icons/bs";
import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoDownloadOutline,
  IoPlay,
  IoPause,
  IoPlayBackOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";

const AudioPlayer = () => {
  const [track, setTrack] = useState<number>(0);
  const [volume, setVolume] = useState<number>(45);
  const [mute, setMute] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = mute ? 0 : volume / 100;
    }
  }, [mute, volume]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setTrack((audioRef.current.currentTime / duration) * 100);
    }
  };

  const TrackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTrack = parseFloat(e.target.value);
    setTrack(newTrack);
    if (audioRef.current) {
      audioRef.current.currentTime = (newTrack / 100) * duration;
    }
  };

  const VolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
    if (audioRef.current) {
      audioRef.current.volume = mute ? 0 : volume / 100;
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      {/* Toggle Screen Mobile */}
      <div className="w-full flex justify-end items-end lg:hidden xl:hidden">
        <div className="text-fontPrimary cursor-pointer">
          <IoIosArrowDown size={35} />
        </div>
      </div>

      {/* Player Card */}
      <div className="w-full h-auto flex flex-col justify-items-center items-center px-12 pb-9">
        <Image
          src="/assets/images/thumbnail/song_mobile.png"
          alt="Wo Larki Khawab Mere Dekhti Hai"
          width={280}
          height={260}
        ></Image>
        <h1 className="text-fontPrimary font-bold text-xl pt-6">
          Wo Larki Khawab Mere Dekhti Hai
        </h1>
        <h1 className="text-fontPrimary font-light text-xs pt-1">
          Nadeem Abbas Khan Lonay Wala
        </h1>
      </div>

      {/* Player Tracker */}
      <div className="w-full flex flex-row justify-start items-center pb-3">
        <p className="text-fontPrimary text-base font-light pr-2">
          {formatTime(audioRef.current?.currentTime || 0)}
        </p>
        <div className="flex-1 w-full bg-gray-700 rounded-full h-1.5">
          <div className="w-full flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-full">
              <div
                className="bg-buttonPrimary h-1.5 rounded-full"
                style={{ width: `${track}%` }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={track}
              step="0.1"
              onChange={TrackChange}
              className="range-slider w-full -mt-1.5"
            />
          </div>
        </div>
        <p className="text-fontPrimary text-base font-light pl-2">
          {formatTime(duration)}
        </p>
      </div>

      {/* Player Action Button */}
      <div className="w-full flex flex-row justify-start items-center pb-3">
        <div className="text-fontPrimary text-xl">
          <BsRepeat size={35} />
        </div>
        <div className="flex-1 w-full py-4">
          <div className="w-full flex justify-center items-center gap-3">
            <button className="w-12 h-12 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center">
              <IoPlayBackOutline size={26} />
            </button>
            <button
              className="w-14 h-14 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center"
              onClick={togglePlayPause}
            >
              {isPlaying ? <IoPause size={30} /> : <IoPlay size={30} />}
            </button>
            <button className="w-12 h-12 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center">
              <IoPlayForwardOutline size={26} />
            </button>
          </div>
        </div>
        <div className="text-buttonPrimary text-xl">
          <FaHeart size={35} />
        </div>
      </div>

      {/* Player Volume */}
      <div className="w-full flex flex-row justify-start items-center pb-3">
        <div
          className="text-fontPrimary text-xl cursor-pointer"
          onClick={() => setMute(!mute)}
        >
          {mute ? <CiVolumeMute size={35} /> : <CiVolumeHigh size={35} />}
        </div>
        <div className="flex-1 w-full bg-gray-700 rounded-full h-1.5 mx-5">
          <div className="w-full flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-full">
              <div
                className="bg-buttonPrimary h-1.5 rounded-full"
                style={{ width: `${volume}%` }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              step="0.1"
              onChange={VolumeChange}
              className="range-slider w-full -mt-1.5"
            />
          </div>
        </div>
        <div className="text-fontPrimary text-xl">
          <IoDownloadOutline size={35} />
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        src="https://www.kozco.com/tech/LRMonoPhase4.mp3"
      />
    </>
  );
};

export default AudioPlayer;
