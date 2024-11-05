"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import CustomVideoPlayer from "../VideoPlayer/CustomVideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { toggleLike } from "@/lib/features/Player/mediaPlayerSlice";

const VideoPlayer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentTrack } = useSelector((state: RootState) => state.mediaPlayer);

    const handleLikeToggle = () => {
        dispatch(toggleLike(currentTrack.id));
      };
    return (
        <>
            <CustomVideoPlayer />

            {/* Video Detail start */}
            <div className="w-full flex max-lg:flex-col flex-row justify-between items-center">
                {/* Title */}
                <h1 className="text-fontPrimary font-bold text-2xl text-center pt-4">
                    {currentTrack.title}
                </h1>

                {/* Action Button */}
                <div className="max-lg:w-full w-6/12 h-auto max-lg:bg-backgroundBlur rounded-xl mt-4 flex max-lg:justify-between justify-end items-center gap-3 px-2 py-3 max-sm:overflow-x-scroll scrollbar-thin scrollbar-thumb-buttonPrimary scrollbar-track-backgroundBlur">
                    {/* Heart */}
                    <div className="flex flex-row items-center gap-2 w-max text-nowrap">
                        <div className="text-buttonPrimary text-xl cursor-pointer" onClick={handleLikeToggle}>
                        {currentTrack.is_like ? <FaHeart/> : <FaRegHeart />}
                        </div>
                        <p className="text-fontPrimary font-normal text-base">{currentTrack.likes} likes</p>
                    </div>
                    {/* View */}
                    <div className="flex flex-row items-center gap-1 w-max text-nowrap">
                        <div className="text-fontPrimary text-xl">
                            <IoEyeOutline size={25} />
                        </div>
                        <p className="text-fontPrimary font-normal text-base">{currentTrack.recently_played_count} views</p>
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
                        <h1 className="text-borderPrimary font-light text-xl">{currentTrack.duration}</h1>
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
                       {currentTrack.description}
                    </p>
                </div>
            </div>
            {/* Video Detail End */}
        </>
    );
};
export default VideoPlayer;
