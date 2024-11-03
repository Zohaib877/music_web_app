"use client"
import VideoPlayer from "@/components/Player/VideoPlayer";
import VideoCard from "@/components/SongCard/VideoCard";
import AppLayout from "@/containers/layout/AppLayout";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const AudioPlayerPage = ({ params }: { params: { id: string } }) => {
    const { queue } = useSelector((state: RootState) => state.mediaPlayer);
    return (
        <AppLayout>
            <div className="w-full h-auto flex flex-col justify-between items-center max-lg:px-4 px-9 max-lg:py-2 py-9">
                <VideoPlayer />
                <div className="w-full h-auto max-xl:mr-0 mr-10 flex flex-col justify-between gap-6 pt-5">
                    <h1 className="text-fontPrimary font-bold text-4xl max-lg:text-2xl max-lg:text-center">Similar</h1>
                    <VideoCard items={queue} />
                </div>
            </div>
        </AppLayout>
    );
}
export default AudioPlayerPage;