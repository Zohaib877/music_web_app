"use client";
import Artists from "@/components/Artists/Artists";
import SongQueueGridCard from "@/components/SongQueueCard/SongQueueGridCard";
import Songs from "@/components/Songs/Songs";
import AppLayout from "@/containers/layout/AppLayout";
import { fetchSearchResults } from "@/lib/features/Search/searchSlice";
import { MediaItem } from "@/lib/features/Tops/TopsSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [openCardId, setOpenCardId] = useState<number | null>(null);
  const { results, query, pagination, loading } = useSelector(
    (state: RootState) => state.searchSong
  );

  const handleNextPage = () => {
    if (pagination.current_page < pagination.last_page) {
      dispatch(
        fetchSearchResults({ query, page: pagination.current_page + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (pagination.current_page > 1) {
      dispatch(
        fetchSearchResults({ query, page: pagination.current_page - 1 })
      );
    }
  };

  const handleToggle = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <AppLayout>
      <h1 className="text-fontPrimary text-2xl px-10 pt-6">Search Results</h1>
      <div className="flex px-10 pt-6">
      <div className="lg:w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {results.map((_, index) => (
          <SongQueueGridCard
            key={index + 1}
            data={_}
            queue={results}
            isOpen={openCardId}
            handleToggle={() => handleToggle(_.id)}
          />
        ))}
      </div>
      </div>
    </AppLayout>
  );
};

export default Search;
