"use client";
import Artists from "@/components/Artists/Artists";
import Songs from "@/components/Songs/Songs";
import AppLayout from "@/containers/layout/AppLayout";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const Artist = () => {
  const {trendingSongs, topArtists } = useSelector((state: RootState) => state.home);

  return (
    <AppLayout>
      <div className="w-full h-auto py-10">
        <Artists type={0} heading="Top Artists" slides={topArtists} />
        <Songs type={0} heading="Urdu" slides={trendingSongs} />
        <Songs type={0} heading="English" slides={trendingSongs} />
        <Songs type={0} heading="Pubjabi" slides={trendingSongs} />
        <Songs type={0} heading="Pashto" slides={trendingSongs} />
      </div>
    </AppLayout>
  )
}

export default Artist;