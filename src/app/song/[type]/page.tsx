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
  } = useSelector((state: RootState) => state.home);
  const { type }: any = React.use(params);
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
    case "your_mood":
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
            return <ArtistCard items={MediaType as Artist[]} />;
        } else {
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
