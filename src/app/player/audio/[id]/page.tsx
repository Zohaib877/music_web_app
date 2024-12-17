'use client'
import AudioPlayer from "@/components/Player/AudioPlayer";
import PlayerQueue from "@/components/PlayerQueue/PlayerQueue";
import AppLayout from "@/containers/layout/AppLayout";
import { clearQueue } from "@/lib/features/Player/mediaPlayerSlice";
import { AppDispatch } from "@/lib/store";
import { useDispatch } from "react-redux";

type Params = {
  id: string;
};

const AudioPlayerPage = ({ params }: { params: Params }) => {
  const dispatch = useDispatch<AppDispatch>();

  const _handleClearQueue = () => {
    dispatch(clearQueue());
  };
  return (
    <AppLayout>
      <div className="w-full h-fill flex max-lg:flex-col justify-between items-center gap-5 px-5 max-lg:py-2 py-9">
        <div className="max-md:w-full max-lg:w-10/12 w-5/12 max-xl:ml-0 ml-10">
          <AudioPlayer />
        </div>
        <div className="max-md:w-full max-lg:w-10/12 w-6/12 max-xl:mr-0 mr-10 pb-10 flex flex-col justify-between gap-6">
          <div className="flex flex-row justify-between items-end">
            <h1 className="text-fontPrimary font-bold text-4xl max-lg:text-2xl max-lg:text-center ">
              Next Songs
            </h1>
            <h3
              className="text-fontPrimary font-bold max-lg:text-center underline cursor-pointer"
              onClick={_handleClearQueue}
            >
              Clear Queue
            </h3>
          </div>
          <PlayerQueue />
        </div>
      </div>
    </AppLayout>
  );
};
export default AudioPlayerPage;
