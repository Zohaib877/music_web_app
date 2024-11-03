"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SongQueueGridCard from "../SongQueueCard/SongQueueGridCard";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/lib/store";
import { fetchTopMedia } from "@/lib/features/Tops/TopsSlice";
import Songs from "../Songs/Songs";
import { addToQueue } from "@/lib/features/Player/mediaPlayerSlice";

const TopSong = () => {
  const dispatch = useDispatch();

  const { audio, video, movie, loading, error } = useSelector((state: RootState) => state.topMedis);

  const [openCardId, setOpenCardId] = useState<Number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoSelected, setIsVideoSelected] = useState(false); // State to track selection

  const router = useRouter();
  const slides = isVideoSelected ? video : audio;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    store.dispatch(fetchTopMedia());
  }, [dispatch]);

  const handleMediaToggle = (isVideo: boolean) => {
    setIsVideoSelected(isVideo);
  };

  const handleToggle = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full h-auto px-4 lg:px-11 xl:px-11 py-8">
      <div className="text-center lg:flex lg:justify-between lg:items-center xl:flex xl:justify-between xl:items-center">
        <h1 className="text-fontPrimary text-xl">Top Songs</h1>
        <div className="flex justify-center pt-6 lg:pt-0 xl:pt-0 lg:justify-end xl:justify-end items-center">
          <button
            type="button"
            className={`w-fit h-9 lg:h-11 xl:h-11 px-4 lg:px-8 xl:px-8 mx-2 rounded-3xl ${!isVideoSelected ? 'bg-buttonPrimary' : 'bg-buttonDisable'} border border-btnGradientFrom text-white font-medium hover:font-bold`}
            onClick={() => handleMediaToggle(false)}
          >
            Audio
          </button>
          <button
            type="button"
            className={`w-fit h-9 lg:h-11 xl:h-11 px-4 lg:px-8 xl:px-8 mx-2 rounded-3xl ${isVideoSelected ? 'bg-buttonPrimary' : 'bg-buttonDisable'} border border-btnGradientFrom text-white font-medium hover:font-bold`}
            onClick={() => handleMediaToggle(true)}
          >
            Video
          </button>
        </div>
      </div>

      <div className="flex">
      <div className="lg:w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {
              slides.map((_, index) => (
                <SongQueueGridCard
                  key={index + 1}
                  data={_}
                  queue={slides}
                  isOpen={openCardId === _.id}
                  handleToggle={() => handleToggle(_.id)}
                />
              ))
            }
          </div>
      </div>
    </div>
  );
};

export default TopSong;
