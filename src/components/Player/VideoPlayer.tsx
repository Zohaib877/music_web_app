"use client";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import CustomVideoPlayer from "../VideoPlayer/CustomVideoPlayer";

const VideoPlayer = () => {

  return (
    <>
        <CustomVideoPlayer />

        {/* Video Detail start */}
        <div className="w-full flex max-lg:flex-col flex-row justify-between items-center">
            {/* Title */}
            <h1 className="text-fontPrimary font-bold text-2xl text-center pt-4">
            Bawa Jee Sialkot
            </h1>

            {/* Action Button */}
            <div className="max-lg:w-full w-6/12 h-auto max-lg:bg-backgroundBlur rounded-xl mt-4 flex max-lg:justify-between justify-end items-center gap-3 px-2 py-3 max-sm:overflow-x-scroll scrollbar-thin scrollbar-thumb-buttonPrimary scrollbar-track-backgroundBlur">
            {/* Heart */}
            <div className="flex flex-row items-center gap-2 w-max text-nowrap">
                <div className="text-buttonPrimary text-xl">
                <FaHeart size={22} />
                </div>
                <p className="text-fontPrimary font-normal text-base">1 likes</p>
            </div>
            {/* View */}
            <div className="flex flex-row items-center gap-1 w-max text-nowrap">
                <div className="text-fontPrimary text-xl">
                <IoEyeOutline size={25} />
                </div>
                <p className="text-fontPrimary font-normal text-base">41 views</p>
            </div>
            {/* Share */}
            <div className="flex flex-row items-center gap-1 w-max text-nowrap">
                <div className="text-fontPrimary text-xl">
                <IoShareSocialOutline size={25} />
                </div>
                <p className="text-fontPrimary font-normal text-base">0 shares</p>
            </div>
            {/* watch later */}
            <div className="flex flex-row items-center gap-1 w-max text-nowrap">
                <div className="text-fontPrimary text-xl">
                <WiTime3 size={25} />
                </div>
                <p className="text-fontPrimary font-normal text-base">
                Watch later
                </p>
            </div>
            </div>
        </div>

        <div className="w-full flex max-lg:flex-col flex-row justify-between items-center">
            {/* Video Detail */}
            <div className="max-lg:w-full w-3/12 max-lg:bg-backgroundBlur rounded-xl h-auto mt-4 flex flex-col justify-between items-center px-4 py-3">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-fontPrimary font-bold text-xl">About Video</h1>
                <div className="text-fontPrimary cursor-pointer lg:hidden xl:hidden">
                <IoIosArrowDown size={30} />
                </div>
            </div>
            <div className="w-full flex justify-between items-center py-3 max-lg:border-b-2 max-lg:border-borderPrimary">
                <h1 className="text-borderPrimary font-light text-xl">Duration</h1>
                <h1 className="text-borderPrimary font-light text-xl">00:05:59</h1>
            </div>
            <div className="w-full flex justify-between items-center py-3">
                <h1 className="text-borderPrimary font-light text-xl">Language</h1>
                <h1 className="text-borderPrimary font-light text-xl">Saraiki</h1>
            </div>
            </div>

            {/* video description */}
            <div className="max-lg:hidden w-9/12 max-lg:bg-backgroundBlur rounded-xl h-auto mt-4 flex flex-col justify-between items-start px-4 py-3">
            <h1 className="text-fontPrimary font-bold text-xl text-left py-2">
                Description
            </h1>
            <p className="text-borderPrimary font-light text-xs py-2">
                Bawa Jee Sialkot video songs Koyal is among the top music streaming
                channel in Pakistan, promoting regional and folk music through its
                platform. Koyal offers you free, unlimited access to over millions
                of folk songs, trending dramas, short videos, movies and more of the
                active playlists that attract you. Stream online and download them
                in 9+ different languages of Pakistan, including: Sindhi, Saraiki,
                Punjabi, Pashto, Balochi, Hindko and Urdu.
            </p>
            </div>
        </div>
        {/* Video Detail End */}
    </>
  );
};
export default VideoPlayer;
