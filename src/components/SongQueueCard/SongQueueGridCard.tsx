import { toggleLike } from "@/lib/features/Home/homeSlice";
import {
  addQueueList,
  playTrack,
  addToQueue
} from "@/lib/features/Player/mediaPlayerSlice";
import { MediaItem } from "@/lib/features/Tops/TopsSlice";
import store, { AppDispatch, RootState } from "@/lib/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

interface SongQueueCardGridProps {
  data: MediaItem;
  queue: MediaItem[];
  isOpen: number | null;
  handleToggle: () => void;
}


const SongQueueGridCard: React.FC<SongQueueCardGridProps> = ({
  data,
  isOpen,
  handleToggle,
  queue,
}) => {
  const { loading } = useSelector((state: RootState) => state.topMedis);
  const isBigScreen = useMediaQuery({ minWidth: 1024 });
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const options = [
    { label: "Add to Playlist", action: () => alert("Add to Playlist") },
    { label: "Add to Queue", action: () => dispatch(addToQueue(data)) },
    { label: "Share", action: () => alert("Share") },
  ];
  const handlePlay = () => {
    if (data.type === "audio") {
      router.push(`/player/audio/${data.id}`);
    } else if (data.type === "video") {
      router.push(`/player/video/${data.id}`);
    }
    store.dispatch(playTrack(data));
    // store.dispatch(addQueueList(queue));
  };

  const handleLikeToggle = () => {
    dispatch(toggleLike(data.id));
  };

  if (loading) {
    return (
      <div className="animate-pulse relative h-52 rounded-lg shadow-lg bg-gray-700 my-2">
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative p-4 flex flex-col justify-between h-full">
          <div className="flex items-center w-full gap-2">
            <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
            <div className="h-4 w-16 bg-gray-600 rounded"></div>
          </div>
          <div className="flex w-full justify-between items-center relative">
            <div className="flex flex-col justify-end w-7/12">
              <div className="h-10 bg-gray-600 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-52 rounded-lg shadow-lg transition-transform transform overflow-hidden ${
        isOpen ? "bg-gray-800" : "bg-gray-700 cursor-pointer"
      } hover:scale-105 my-2`}
      style={{
        backgroundImage: `url(${data.cover_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={handlePlay}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>{" "}
      {/* Dark overlay */}
      <div className="relative p-4 flex flex-col justify-between h-full">
        <div className="flex items-center w-full gap-2">
          <Image
            className="cursor-pointer"
            src="/assets/icons/play.png"
            alt="play"
            width={35}
            height={35}
          />
          <p className="text-white font-semibold text-xs">{data.duration}</p>
        </div>

        <div className="flex w-full justify-between items-center relative">
          <div className="flex flex-col justify-end w-7/12">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-2 rounded-md">
              <h3
                className="text-white font-bold text-xs truncate cursor-pointer hover:underline"
                onClick={handlePlay}
              >
                {data.title}
              </h3>
              <p className="text-gray-300 font-light text-xs truncate">
                {data.description}
              </p>
            </div>
          </div>
          {!isBigScreen ? (
            <div className="flex flex-col justify-between items-center h-full w-3/12">
              <div
                className="text-white cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle();
                }}
              >
                <IoIosArrowDown width={30} />
              </div>
              <p className="text-gray-300 font-thin text-xs">05:23</p>
            </div>
          ) : (
            <div className="flex justify-evenly items-center w-3/12 gap-2">
              <div className="text-white text-xl">
                <IoDownloadOutline />
              </div>
              <div
                className="text-red-500 text-xl cursor-pointer"
                onClick={handleLikeToggle}
                style={{ zIndex: 1000 }}
              >
                {data.is_like ? <FaHeart /> : <FaRegHeart />}
              </div>
              <div
                className="relative text-white text-xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle();
                }}
              >
                <HiOutlineDotsVertical />
              </div>
            </div>
          )}
        </div>
        {isOpen === data.id && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg ">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 text-sm text-white hover:bg-gray-600 cursor-pointer"
                onClick={() => {
                  option.action();
                  handleToggle();
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SongQueueGridCard;
