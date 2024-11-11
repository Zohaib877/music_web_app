"use client";
import {
  addFavourite,
  removeFavourite,
} from "@/lib/features/Favourite/favouriteSlice";
import {
  pauseTrack,
  playNext,
  playPrevious,
  setCurrentTime,
  setDuration,
  toggleLike,
  togglePlayPause,
  toggleShuffle,
} from "@/lib/features/Player/mediaPlayerSlice";
import store, { AppDispatch, RootState } from "@/lib/store";
import { post } from "@/utils/axios";
import { errorToast, successToast } from "@/utils/toast";
import { durationToSeconds, formatTime } from "@/utils/util";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { BsRepeat } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import {
  IoPlay,
  IoPause,
  IoPlayBackOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const PlayerBar = () => {
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
  const token = useSelector((state: RootState) => state.user.token);
  const router = useRouter();
  const [value, setValue] = useState<number>(0);
  const [track, setTrack] = useState<number>(0);
  const [isBigScreen, setIsBigScreen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isDropdownAbove, setIsDropdownAbove] = useState(false);
  const [localCurrentTime, setLocalCurrentTime] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dotsButtonRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Create a ref to store the interval ID
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null); // Reference to store interval ID

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDropdownOpen && dotsButtonRef.current && dropdownRef.current) {
      const buttonRect = dotsButtonRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      // Check if there's more space above or below the button
      if (
        spaceBelow < dropdownRect.height &&
        spaceAbove > dropdownRect.height
      ) {
        setIsDropdownAbove(true);
      } else {
        setIsDropdownAbove(false);
      }
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    const saveCurrentTime = () => {
      if (audioRef.current) {
        dispatch(setCurrentTime(audioRef.current.currentTime));
      }
    };

    window.addEventListener("beforeunload", saveCurrentTime);

    return () => {
      window.removeEventListener("beforeunload", saveCurrentTime);
    };
  }, [dispatch]);

  useEffect(() => {
    if (audioRef.current && currentTrack.file_path) {
      audioRef.current.src = currentTrack.file_path;
      audioRef.current.load();

      audioRef.current.currentTime = currentTime;

      if (isPlaying) audioRef.current.play();
    }
  }, [currentTrack.file_path, currentTrack.id, currentTime, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        if (!durationIntervalRef.current) {
          durationIntervalRef.current = setInterval(() => {
            trackSongDuration(
              currentTrack.id,
              audioRef.current?.currentTime || 0
            );
          }, 10000);
        }
      } else {
        audioRef.current.pause();
        dispatch(pauseTrack());
        if (durationIntervalRef.current) {
          clearInterval(durationIntervalRef.current);
          durationIntervalRef.current = null;
        }
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = mute ? 0 : volume / 100;
    }
  }, [volume, mute]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        setTrack(0);
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      };
      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);
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
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const totalDuration = durationToSeconds(media_duration);
      const percentage = (currentTime / totalDuration) * 100;
      setTrack(percentage);
      setLocalCurrentTime(currentTime);

      if (Math.abs(currentTime - localCurrentTime) > 1) {
        dispatch(setCurrentTime(currentTime));
      }
    }
  };
  const togglePlayPauseHandler = () => {
    dispatch(togglePlayPause());
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLikeToggle = () => {
    dispatch(toggleLike(currentTrack.id));
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

  const handleAddToFavorite = () => {
    dispatch(addFavourite({ mediaId: currentTrack.id, type: "song" }))
      .unwrap()
      .then((res) => {
        successToast("Song added to favorites");
        setIsDropdownOpen(!isDropdownOpen);
      })
      .catch((err) => {
        errorToast("Song is already in your favorites");
        setIsDropdownOpen(!isDropdownOpen);
      });
  };

  const handleRemoveFromFavorite = () => {
    dispatch(removeFavourite({ mediaId: currentTrack.id, type: "song" }))
      .unwrap()
      .then((res) => {
        successToast("Song added to favorites");
        setIsDropdownOpen(!isDropdownOpen);
      })
      .catch((err) => {
        errorToast("Song is already in your favorites");
        setIsDropdownOpen(!isDropdownOpen);
      });
  };
  const handleShare = async () => {
    const songUrl = currentTrack.file_path;
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentTrack.title,
          text: `Check out this song: ${currentTrack.title}`,
          url: songUrl,
        });
        console.log("Song shared successfully!");
      } catch (err) {
        console.error("Error sharing the song:", err);
      }
    } else {
      navigator.clipboard
        .writeText(songUrl)
        .then(() => {
          alert("Song link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Error copying to clipboard:", err);
        });
    }
  };
  return (
    <div className="fixed bottom-0 left-0 w-full h-[70px] lg:h-[90px] xl:h-[90px] bg-black/100 z-20 flex flex-col justify-start lg:justify-center xl:justify-center">
      <audio
        ref={audioRef}
        src={currentTrack.file_path}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      {!isBigScreen && (
        <div className="relative w-full bg-gray-700 rounded-full h-2 pb-1">
          <div className="w-full flex flex-col items-center absolute">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div
                className="bg-buttonPrimary h-1 rounded-full"
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
              className="range-slider w-full absolute"
            />
          </div>
        </div>
      )}

      <div className="flex justify-between items-center px-2 md:px-3 py-3 lg:py-0">
        <div className="w-1/2 lg:w-2/12 xl:w-2/12 flex justify-start overflow-hidden">
          <Image
            src={currentTrack.cover_image}
            alt=""
            width={isBigScreen ? 75 : 45}
            height={isBigScreen ? 75 : 45}
          />
          <div className="flex flex-col justify-center pl-1 lg:pl-2">
            <p className="text-fontPrimary text-xs lg:text-base xl:text-base whitespace-nowrap">
              {currentTrack.title}
            </p>
            <p className="text-fontPrimary text-[10px] lg:text-xs xl:text-xs font-thin whitespace-nowrap">
              {currentTrack.description}
            </p>
          </div>
        </div>
        {isBigScreen && (
          <div className="w-6/12 h-full flex flex-row justify-start items-center px-5">
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
        )}
        <div className="w-1/2 lg:w-4/12 xl:w-4/12 flex justify-evenly items-center">
          <button
            className="w-7 lg:w-10 xl:w-10 h-7 lg:h-10 xl:h-10 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center"
            onClick={handlePrevious}
          >
            <IoPlayBackOutline size={isBigScreen ? 22 : 15} />
          </button>
          <button
            onClick={togglePlayPauseHandler}
            className="w-8 lg:w-12 xl:w-12 h-8 lg:h-12 xl:h-12 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center"
          >
            {isPlaying ? (
              <IoPause size={isBigScreen ? 23 : 17} />
            ) : (
              <IoPlay size={isBigScreen ? 23 : 17} />
            )}
          </button>
          <button
            className="w-7 lg:w-10 xl:w-10 h-7 lg:h-10 xl:h-10 rounded-full bg-buttonPrimary text-fontPrimary flex justify-center items-center"
            onClick={handleNext}
          >
            <IoPlayForwardOutline size={isBigScreen ? 22 : 15} />
          </button>
          {isBigScreen && (
            <div
              className="text-fontPrimary text-xl"
              onClick={handleToggleShuffle}
            >
              <BsRepeat
                className={
                  isShuffled ? "text-buttonPrimary" : "text-fontPrimary"
                }
              />
            </div>
          )}
          <div
            className="text-buttonPrimary text-xl cursor-pointer"
            onClick={handleLikeToggle}
          >
            {currentTrack.is_like ? <FaHeart /> : <FaRegHeart />}
          </div>
          {isBigScreen && (
            <div className="relative" ref={dotsButtonRef}>
              <div
                onClick={toggleDropdown}
                className="cursor-pointer text-fontPrimary text-xl"
              >
                <HiOutlineDotsVertical />
              </div>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className={`absolute right-0 w-40 bg-white divide-y divide-gray-100  dark:bg-gray-700 dark:divide-gray-600 shadow-lg rounded-md z-50 ${
                    isDropdownAbove ? "bottom-full mb-2" : "top-full mt-2"
                  }`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    {token && (
                      <>
                        <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Add to Playlist
                        </li>
                      </>
                    )}

                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleShare}>
                      Share
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
          <div
            className="text-fontPrimary text-xl cursor-pointer"
            onClick={() => router.push(`/player/audio/${currentTrack.id}`)}
          >
            <IoIosArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
