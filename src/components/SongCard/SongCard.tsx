import { addQueueList, playTrack } from "@/lib/features/Player/mediaPlayerSlice";
import { MediaItem } from "@/lib/features/Tops/TopsSlice";
import { AppDispatch } from "@/lib/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface SongCardProps {
    items: MediaItem[];
}

const SongCard: React.FC<SongCardProps> = ({ items }) => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handlePlay = (data: MediaItem) => {
      if (data.type === "audio") {
        router.push(`/player/audio/${data.id}`);
      } else if (data.type === "video") {
        router.push(`/player/video/${data.id}`);
      }
      dispatch(playTrack(data));
      dispatch(addQueueList(items));
    };

    return (
        <div className="w-full h-auto py-10 grid justify-items-center grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 cursor-pointer ">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-center items-center h-auto w-fit px-4 py-3 rounded-lg hover:scale-105 "
                    onClick={()=>handlePlay(item)}
                >
                    <Image
                        src={item.cover_image}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="mb-3 mx-auto rounded-sm"
                        style={{
                            borderRadius:10
                        }}
                    />
                    <p className="text-fontPrimary text-base font-medium text-center">
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    );
}
export default SongCard;