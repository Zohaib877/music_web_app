import { MediaItem } from "@/lib/features/Tops/TopsSlice";
import Image from "next/image";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";

interface TabContentProps {
    items: MediaItem[];
}

const VideoCard: React.FC<TabContentProps> = ({ items }) => {
    return (
        <div className="w-full h-auto py-2 grid justify-items-center grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-center items-center h-auto w-fit px-4 py-3"
                >
                    <Image
                        src={item.cover_image || '/assets/images/thumbnail/video_desktop.png'}
                        alt={item.title}
                        width={250}
                        height={250}
                        className="mb-3 mx-auto"
                    />
                    <p className="text-fontPrimary text-base font-medium text-center">
                        {item.title}
                    </p>
                    {item.recently_played_count &&
                        <p className="text-fontPrimary text-xs font-medium text-center flex flex-row gap-1 items-center">
                            <IoEyeOutline size={20} />
                            {item.recently_played_count} view
                        </p>
                    }
                </div>
            ))}
        </div>
    );
}

export default VideoCard;