import { useState, useEffect, useRef } from "react";
import {
  addFavourite,
  playTrack,
  removeFavourite,
  removeFromQueue,
  toggleLike,
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
import AddToPlayListModal from "../Modal/AddToPlayListModal";
import { openPlaylistModel } from "@/lib/features/PlayList/playListModal";

interface SongQueueCardProps {
  item: MediaItem;
  isOpen: boolean;
  handleToggle: () => void;
}

const SongQueueCard: React.FC<SongQueueCardProps> = ({
  item,
  isOpen,
  handleToggle,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.user.token);
  const isBigScreen = useMediaQuery({ minWidth: 1024 });
  const { currentTrack } = useSelector((state: RootState) => state.mediaPlayer);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    store.dispatch(playTrack(item));
  };

  const handleLikeToggle = () => {
    item.is_favorite
      ? dispatch(removeFavourite({ mediaId: item.id, type: "song" }))
      : dispatch(addFavourite({ mediaId: item.id, type: "song" }));
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDownload = async () => {
    const downloadUrl = `/api/download?url=${encodeURIComponent(
      item.file_path
    )}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = currentTrack.title;
    link.click();
  };

  const handleShare = async () => {
    const songUrl = item.file_path;
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: `Check out this song: ${item.title}`,
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
  const handleRemoveFromQueue = (id: any) => {
    dispatch(removeFromQueue(id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`h-auto rounded-lg lg:rounded-full ${
        isOpen ? "bg-black/40" : "bg-cardDisabled/50"
      } flex flex-col justify-between items-center my-2 lg:px-4 xl:px-4 divide-y relative`}
    >
      <div className="flex w-full justify-between items-center pb-3 py-2">
        <div className="flex justify-around items-center w-3/12 md:w-2/12 lg:w-2/12 xl:w-2/12">
          <Image
            className="ml-2 cursor-pointer"
            src="/assets/icons/play.png"
            alt="play"
            width={35}
            height={35}
            onClick={handlePlay}
          />
          <Image
            className="ml-2"
            src={item.cover_image??""}
            alt="play"
            width={55}
            height={55}
          />
        </div>
        <div className="ml-2 flex flex-col justify-start w-7/12">
          <h3
            className="text-fontPrimary font-bold text-xs truncate cursor-pointer hover:underline"
            onClick={handlePlay}
          >
            {item.title}
          </h3>
          <p className="text-fontPrimary font-light text-xs truncate">
            {item.description}
          </p>
        </div>
        {!isBigScreen ? (
          <div className="flex flex-col justify-between items-center h-full w-3/12 md:w-2/12 lg:w-2/12 xl:w-2/12">
            <div
              className="text-fontPrimary cursor-pointer"
              onClick={handleToggle}
            >
              <IoIosArrowDown width={55} />
            </div>
            <p className="text-fontPrimary font-thin text-xs">
              {item.duration}
            </p>
          </div>
        ) : (
          <div className="flex justify-evenly items-center w-3/12 cursor-pointer">
            <div className="text-fontPrimary text-xl" onClick={handleDownload}>
              <IoDownloadOutline />
            </div>
            <div
              className="text-buttonPrimary text-xl cursor-pointer"
              onClick={handleLikeToggle}
            >
              {item.is_favorite ? <FaHeart /> : <FaRegHeart />}
            </div>
            <div className="relative" ref={dropdownRef}>
              <div
                className="text-fontPrimary text-xl cursor-pointer"
                onClick={handleDropdownToggle}
              >
                <HiOutlineDotsVertical />
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-md overflow-hidden z-10 text-gray-700 dark:text-gray-200 dark:bg-gray-700 dark:divide-gray-600">
                  <ul>
                    {token && (
                      <>
                        <li
                          className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() =>
                            dispatch(
                              openPlaylistModel({
                                media_id: item.id,
                                is_playlist:
                                  item.is_playlist !== null ? true : false,
                              })
                            )
                          }
                        >
                          {item.is_playlist !== null
                            ? "Remove from playlist"
                            : "Add to Playlist"}
                        </li>
                      </>
                    )}

                    <li
                      className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleRemoveFromQueue(item.id)}
                    >
                      Remove from queue
                    </li>
                    <li
                      className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleShare}
                    >
                      Share
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <p className="text-fontPrimary font-thin text-xs">
              {item.duration}
            </p>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex justify-evenly items-center w-8/12 md:w-10/12 pt-3">
          <div className="text-fontPrimary text-xl">
            <IoDownloadOutline />
          </div>
          <div className="text-fontPrimary text-xl">
            <FaHeart />
          </div>
          <div className="text-fontPrimary text-xl">
            <HiOutlineDotsVertical />
          </div>
        </div>
      )}
      <AddToPlayListModal
        is_playlist={item.is_playlist !== null ? true : false}
      />
    </div>
  );
};

export default SongQueueCard;
