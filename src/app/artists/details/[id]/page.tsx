"use client"
import SongQueueGridCard from "@/components/SongQueueCard/SongQueueGridCard";
import AppLayout from "@/containers/layout/AppLayout";
import { fetchArtistDetails } from "@/lib/features/Artist/artistSlice";
import { AppDispatch, RootState } from "@/lib/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

type Params = {
  id: number;
};

const AudioPlayerPage = ({ params }: { params: Params }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { artistDetails, loadingArtistDetails } = useSelector((state: RootState) => state.artist);
  const [openCardId, setOpenCardId] = useState<number | null>(null);
  const isBigScreen = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    dispatch(fetchArtistDetails(params.id));
  }, [dispatch, params.id]);

  const handleToggle = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <AppLayout>
      <div className="w-full px-4 lg:px-10 py-8">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Artist Image and Info Section */}
          <div className="lg:w-5/12 w-full flex justify-center lg:justify-start">
            <div className="relative w-full lg:w-10/12 flex items-center">
              <div className="w-2/3 lg:w-full h-full">
                <Image
                  src={artistDetails?.image || ""}
                  alt={`${artistDetails?.name} cover`}
                  layout="responsive"
                  width={300}
                  height={420}
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-2xl lg:text-4xl">{artistDetails?.name}</h3>
              </div>
            </div>
          </div>

          {/* Media Queue Section */}
          <div className="lg:w-7/12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {artistDetails?.media.map((item) => (
                <SongQueueGridCard
                  key={item.id}
                  data={item}
                  queue={artistDetails?.media}
                  isOpen={openCardId === item.id}
                  handleToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AudioPlayerPage;
