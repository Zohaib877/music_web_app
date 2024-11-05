"use client";
import ArtistCard from "@/components/SongCard/ArtistCard";
import SongCard from "@/components/SongCard/SongCard";
import AppLayout from "@/containers/layout/AppLayout";
import { Artist, fetchMediaByType } from "@/lib/features/Home/homeSlice";
import { MediaItem } from "@/lib/features/Tops/TopsSlice";
import { AppDispatch, RootState } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SongDetail = ({ params }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    media,
    all_topArtists,
    loading
  } = useSelector((state: RootState) => state.home);
  const { type } = params;
  let MediaType = null;
  let Title = null;
  switch (type) {
    case "new_release":
      Title = "New Releases";
      MediaType = media;
      break;
    case "video_song":
      Title = "Video Songs";
      MediaType = media;
      break;
    case "top_artists":
      Title = "Top Artists";
      MediaType = all_topArtists;
      break;
    case "trending_song":
      Title = "Trending Songs";
      MediaType = media;
      break;
    case "pick_your_mode":
      Title = "Pick Your Mood";
      MediaType = media;
      break;

    default:
      break;
  }

  useEffect(() => {
    dispatch(fetchMediaByType({ type, page: 1, perPage: 20 }));
  }, [dispatch, type]);

  const _renderItems = () => {
    if (MediaType) {
      if (type === "top_artists") {
        if (loading) {
          return (
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
          )
        }
        return <ArtistCard items={MediaType as Artist[]} />;
      } else {
        if (loading) {
          return (
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
          )
        }
        return <SongCard items={MediaType as MediaItem[]} />;
      }
    }
  };
  return (
    <AppLayout>
      <div className="w-full h-auto">
        {/* Header Title & Buttons */}
        <div className="w-full h-auto flex max-md:flex-col justify-between items-center px-6 py-5">
          <h1 className="text-fontPrimary text-3xl font-bold">{Title}</h1>
        </div>
        {_renderItems()}
      </div>
    </AppLayout>
  );
};

export default SongDetail;
