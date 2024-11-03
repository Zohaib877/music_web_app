import AudioPlayer from "@/components/Player/AudioPlayer";
import PlayerQueue from "@/components/PlayerQueue/PlayerQueue";
import AppLayout from "@/containers/layout/AppLayout";

type Params = {
    id: string;
  };

  const AudioPlayerPage = ({ params }: { params: Params }) => {
  return (
    <AppLayout>
      <div className="w-full h-fill flex max-lg:flex-col justify-between items-center gap-5 px-5 max-lg:py-2 py-9">
        <div className="max-md:w-full max-lg:w-10/12 w-5/12 max-xl:ml-0 ml-10">
          <AudioPlayer />
        </div>
        <div className="max-md:w-full max-lg:w-10/12 w-6/12 max-xl:mr-0 mr-10 pb-10 flex flex-col justify-between gap-6">
          <h1 className="text-fontPrimary font-bold text-4xl max-lg:text-2xl max-lg:text-center ">
            Next Songs
          </h1>
          <PlayerQueue />
        </div>
      </div>
    </AppLayout>
  );
};
export default AudioPlayerPage;
