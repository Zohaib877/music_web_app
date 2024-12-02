"use client";

import {
  addFavourite,
  pauseTrack,
  playNext,
  playPrevious,
  removeFavourite,
  setCurrentTime,
  setDuration,
  setVolume,
  toggleMute,
  togglePlayPause,
  toggleShuffle,
} from "@/lib/features/Player/mediaPlayerSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { post } from "@/utils/axios";
import { durationToSeconds, formatTime } from "@/utils/util";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { BsRepeat } from "react-icons/bs";
import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoDownloadOutline,
  IoPlay,
  IoPause,
  IoPlayBackOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const AudioPlayer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    currentTrack,
    isPlaying,
    volume,
    mute,
    media_duration,
    currentTime,
    isShuffled,
  } = useSelector((state: RootState) => state.mediaPlayer);
  const [track, setTrack] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Create a ref to store the interval ID
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null); // Reference to store interval ID

  // const songId = pathname.split("/").pop();

  // useEffect(() => {
  //   if (songId) {
  //     const fetchSong = async (id: string) => {
  //       const response = await fetch(`/api/songs/${id}`);
  //       if (response.ok) {
  //         const songData = await response.json();
  //         dispatch(playTrack(songData));
  //       } else {
  //         console.error("Failed to fetch song:", response.status);
  //       }
  //     };

  //     fetchSong(songId);
  //   }
  // }, [songId]);
  useEffect(() => {
    if (audioRef.current && currentTrack.file_path) {
      audioRef.current.src = currentTrack.file_path;
      audioRef.current.load();
      audioRef.current.currentTime = currentTime;

      if (isPlaying) audioRef.current.play();
      // if (isPlaying) {
      //   audioRef.current.play();
      // }
    }
  }, [currentTrack.file_path, currentTrack.id]);

  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        // Start tracking duration every 10 seconds if not already tracking
        if (!durationIntervalRef.current) {
          durationIntervalRef.current = setInterval(() => {
            trackSongDuration(
              currentTrack.id,
              audioRef.current?.currentTime || 0
            );
          }, 10000); // Call every 10 seconds
        }
      } else {
        audioRef.current.pause();
        dispatch(pauseTrack());
        // Clear the interval when the song is paused
        if (durationIntervalRef.current) {
          clearInterval(durationIntervalRef.current);
          durationIntervalRef.current = null; // Reset the ref
        }
      }
    }
  }, [isPlaying, currentTrack.id]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = mute ? 0 : volume / 100;
    }
  }, [volume, mute]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        console.log("asassa");

        handleNext();
        setTrack(0);
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      };

      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [dispatch]);

  const trackSongDuration = async (mediaId: number, currentTime: number) => {
    const duration = formatTime(currentTime);
    const formData = new FormData();
    formData.append("media_id", mediaId.toString());
    formData.append("duration", duration);

    try {
      const response = await post({
        url: "recently-played/create",
        data: formData,
        includeToken: true,
      });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error tracking song duration:", error);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(parseFloat(e.target.value)));
  };

  const togglePlayPauseHandler = () => {
    dispatch(togglePlayPause());
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const totalDuration = durationToSeconds(media_duration);
      const percentage = (currentTime / totalDuration) * 100;
      setTrack(percentage);
      dispatch(setCurrentTime(currentTime));
    }
  };
  const TrackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    const totalDurationInSeconds = durationToSeconds(media_duration);

    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * totalDurationInSeconds;
    }
  };
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      dispatch(setDuration(audioRef.current.duration));
    }
  };

  const handleLikeToggle = () => {
    currentTrack.is_favorite
      ? dispatch(removeFavourite({ mediaId: currentTrack.id, type: "song" }))
      : dispatch(addFavourite({ mediaId: currentTrack.id, type: "song" }));
  };


  const handleNext = () => {
    dispatch(playNext());
  };

  const handlePrevious = () => {
    dispatch(playPrevious());
  };

  const handleToggleShuffle = () => {
    dispatch(toggleShuffle());
  };
  const handleDownload = async () => {
    const downloadUrl = `/api/download?url=${encodeURIComponent(
      currentTrack.file_path
    )}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = currentTrack.title;
    link.click();
  };

  return (
    <>
      <div className="w-full flex justify-end items-end lg:hidden xl:hidden">
        <div className="text-fontPrimary cursor-pointer">
          <IoIosArrowDown size={35} />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col justify-items-center items-center px-12 pb-9">
        <Image
          src={currentTrack.cover_image??""}
          alt={currentTrack.title}
          width={280}
          height={260}
        />
        <h1 className="text-fontPrimary font-bold text-xl pt-6">
          {currentTrack.title}
        </h1>
        <h1 className="text-fontPrimary font-light text-xs pt-1 text-center">
          {currentTrack.description}
        </h1>
      </div>

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
          {formatTime(media_duration)}
        </p>
      </div>

      {/* Player Action Button */}
      <div className="w-full flex flex-row justify-start items-center pb-3">
        <div className="text-fontPrimary text-xl" onClick={handleToggleShuffle}>
          <BsRepeat
            size={35}
            className={isShuffled ? "text-buttonPrimary" : "text-fontPrimary"}
          />
        </div>
        <div className="flex-1 w-full py-4">
          <div className="w-full flex justify-center items-center gap-3">
            <button
              className="w-12 h-12 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center"
              onClick={handlePrevious}
            >
              <IoPlayBackOutline size={25} />
            </button>
            <button
              className="w-14 h-14 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center"
              onClick={togglePlayPauseHandler}
            >
              {isPlaying ? <IoPause size={30} /> : <IoPlay size={30} />}
            </button>
            <button
              className="w-12 h-12 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center"
              onClick={handleNext}
            >
              <IoPlayForwardOutline size={25} />
            </button>
          </div>
        </div>
        <div
          className="text-buttonPrimary text-xl cursor-pointer"
          onClick={handleLikeToggle}
        >
          {currentTrack.is_favorite ? (
            <FaHeart size={35} />
          ) : (
            <FaRegHeart size={35} />
          )}
        </div>
      </div>

      {/* Player Volume */}
      <div className="w-full flex flex-row justify-start items-center pb-3">
        <div
          className="text-fontPrimary text-xl cursor-pointer"
          onClick={() => dispatch(toggleMute())}
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
              onChange={handleVolumeChange}
              className="range-slider w-full -mt-1.5"
            />
          </div>
        </div>
        <div
          className="text-fontPrimary text-xl cursor-pointer"
          onClick={handleDownload}
        >
          <IoDownloadOutline size={35} />
        </div>
      </div>
      <div>
        <h1 className="text-fontPrimary font-bold text-xl pt-6">Artist: {currentTrack.artist.name}</h1>
        <h1 className="text-fontPrimary font-bold text-xl pt-6">Language: {currentTrack.language.name}</h1>
        <h1 className="text-fontPrimary font-bold text-xl pt-6">Category: {currentTrack.category ?? 'empty'}</h1>
      </div>
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
    </>
  );
};

export default AudioPlayer;
