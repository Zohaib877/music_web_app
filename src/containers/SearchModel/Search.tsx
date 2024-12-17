"use client";
import Songs from "@/components/Songs/Songs";
import { closeSearchModel } from "@/lib/features/Search/searchModelSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { IoClose, IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { closeSidebar } from "@/lib/features/Sidebar/SidebarSlice";
import SearchSong from "@/components/Songs/SearchSong";
import {
  fetchSearchResults,
  setQuery,
} from "@/lib/features/Search/searchSlice";

const SearchModel = () => {
  const { results, query, pagination, loading } = useSelector(
    (state: RootState) => state.searchSong
  );
  const isOpen = useSelector((state: RootState) => state.searchModel.isOpen);
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setQuery(searchQuery));
    dispatch(fetchSearchResults({ query: searchQuery, page: 1 }));
    setSearchQuery("");
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(closeSidebar());
    }
  }, [isOpen]);


  const shimmer = () => {
    return (
      <div className="w-full h-auto px-4 lg:px-11 xl:px-11 flex flex-col justify-evenly m-10">
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
  };

  if (!isOpen) return null;
  return (
    <div className="fixed w-full top-0 left-0 right-0 max-sm:h-[350px] max-lg:h-[440px] xl:h-[666px] z-10 bg-sideBarBackground flex flex-col justify-start items-center p-6">
      {/* Top Search */}
      <div className="w-full flex justify-between items-center">
        {/* Search Input */}
        <div className="w-full flex justify-center">
          <form
            className="max-sm:w-10/12 max-lg:w-8/12 w-6/12 relative"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="search"
              id="voice-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border border-borderPrimary rounded-full h-12 text-fontPrimary focus:ring-blue-500 block ps-5 pe-10"
              placeholder="Search Audio, Video, Artist..."
              required
            />
            <button
              type="submit"
              className="absolute inset-y-0 end-0 flex items-center pe-4 text-fontPrimary text-2xl cursor-pointer"
            >
              <IoSearch />
            </button>
          </form>
        </div>
        <div
          className="text-fontPrimary flex justify-center items-center font-bold text-5xl cursor-pointer"
          onClick={() => dispatch(closeSearchModel())}
        >
          <IoClose />
        </div>
      </div>
      {loading ? (
        shimmer()
      ) : (
        <div className="w-full flex flex-col justify-between items-center py-7 m-10">
          <SearchSong type={0} dot={true} arrow={true} slides={results.slice(0,5)} heading="Search Results"/>
        </div>
      )}
    </div>
  );
};

export default SearchModel;
