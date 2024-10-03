"use client";
import Songs from "@/components/Songs/Songs";
import { closeSearchModel } from "@/lib/features/Search/searchModelSlice";
import { RootState } from "@/lib/store";
import { IoClose, IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { closeSidebar } from "@/lib/features/Sidebar/SidebarSlice";

interface Slide {
  url: string;
  title?: string;
}

const SongSlides: Slide[] = [
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
];

const SearchModel = () => {
  const isOpen    = useSelector((state: RootState) => state.searchModel.isOpen);
  const dispatch  = useDispatch();
  const router    = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(closeSearchModel());
    setSearchQuery("");
    router.push('/search');
    console.log("Search submitted with query:", searchQuery);
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(closeSidebar());
    }
  }, [isOpen, dispatch]);
  
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
              placeholder="Search Audio, Video, Movie, Artist..."
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
        {/* Close Model */}
        <div
          className="text-fontPrimary flex justify-center items-center font-bold text-5xl cursor-pointer"
          onClick={() => dispatch(closeSearchModel())}
        >
          <IoClose />
        </div>
      </div>

      {/* Top Trending */}
      <div className="w-full flex flex-col justify-between items-center py-7">
        {/* Top Trending Heading */}
        <h1 className="w-full text-fontPrimary text-center font-bold max-md:text-2xl text-3xl">
          Top Trending
        </h1>

        <Songs type={0} dot={false} arrow={false} slides={SongSlides} />
      </div>
    </div>
  );
};

export default SearchModel;
