"use client";
import SongQueueGridCard from "@/components/SongQueueCard/SongQueueGridCard";
import AppLayout from "@/containers/layout/AppLayout";
import { fetchPlaylistDetails } from "@/lib/features/PlayList/createPlayList";
import lottie from "lottie-web";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
type Params = {
  id: number;
};

const Playlist = ({ params }: { params: Params }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { playlistDetails, loading } = useSelector(
    (state: RootState) => state.playList
  );
  const [openCardId, setOpenCardId] = useState<Number | null>(null);
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `/assets/lottie/noRecaurd.json?v=${Date.now()}`,
      }).addEventListener("error", (event) => {
        console.error("Lottie animation error:", event);
      });
    }
  }, []);

  useEffect(() => {
    dispatch(fetchPlaylistDetails(params.id));
  }, [dispatch, params.id]);

  const handleToggle = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };
  if (loading) {
    return (
      <div className="w-full h-auto px-4 lg:px-11 xl:px-11 flex justify-center items-center mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-1 mb-9 w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              role="status"
              className="flex flex-col items-center justify-center p-4 h-56 w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
            >
              <svg
                className="w-16 h-16 text-gray-200 dark:text-gray-600 mb-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
              <div className="flex flex-col justify-end items-center w-full">
                <div className="w-full h-16 bg-gray-600 rounded mb-3"></div>
                <div className="w-3/4 h-4 bg-gray-600 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <AppLayout>
      
      <h1 className="text-fontPrimary text-2xl px-10 pt-6">
        {playlistDetails?.name}
      </h1>
      <div className="flex px-10 pt-6">
      <div ref={animationContainer}></div>
        {playlistDetails?.media.length !== 0 ? (
          <div className="lg:w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {playlistDetails?.media.map((_, index) => (
              <SongQueueGridCard
                key={index + 1}
                data={_}
                queue={playlistDetails?.media}
                isOpen={openCardId === _.id}
                handleToggle={() => handleToggle(_.id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center align-middle items-center"> 
            <h1 className="text-cyan-50 align-middle">No Record Found</h1>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Playlist;
