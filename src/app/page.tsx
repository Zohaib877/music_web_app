"use client"
import Artists from "@/components/Artists/Artists";
import Carousel from "@/components/Carousel/carousel";
import Footer from "@/components/Footer/footer";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import Songs from "@/components/Songs/Songs";
import TopSong from "@/components/SongTab/TopSong";
import AppLayout from "@/containers/layout/AppLayout";
import { fetchHomeData } from "@/lib/features/Home/homeSlice";
import { fetchPlaylists } from "@/lib/features/PlayList/createPlayList";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Slide {
  url: string;
  title?: string;
}

const BannerSlides: Slide[] = [
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
];

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  
  const { newRelease, videoSongs, trendingSongs, topArtists, pickYourMode, loading, error } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(fetchHomeData());
    dispatch(fetchPlaylists())
  }, []);
  
  return (
    <AppLayout>
      <Carousel autoSlide={true} slides={BannerSlides} />
      <TopSong />
      <Songs
        type={0} 
        heading="New Release"
        slides={newRelease} 
        link="new_release" 
      />
      <Songs
        type={1} 
        heading="Video Songs"
        slides={videoSongs}
        link="video_song" 
      />
      <Songs
        type={0} 
        heading="Trending Songs"
        slides={trendingSongs}
        link="trending_song" 
      />
      <Artists
        type={0} 
        heading="Top Artists"
        slides={topArtists}
        link="top_artists" 
      />
      <Songs
        type={0} 
        heading="Pick Your Mood"
        slides={pickYourMode}
        link="pick_your_mode" 
      />
    </AppLayout>
  );
}
