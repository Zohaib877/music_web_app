type VideoPropsType = {
    setVideoTitleHoverText: (e: string) => void;
    handlePlayPause: () => void;
    setPlayButton: (e: boolean) => void;
    videoRef: React.RefObject<HTMLVideoElement>;
    videoFile: string;
    playButton: boolean;
  };
  
  const Video = ({
    setVideoTitleHoverText,
    handlePlayPause,
    setPlayButton,
    videoRef,
    videoFile,
    playButton,
  }: VideoPropsType) => {
    return (
      <video
        onMouseEnter={() =>
          setVideoTitleHoverText("At the Cinema | Mr. Bean Official")
        }
        onMouseLeave={() => setVideoTitleHoverText("")}
        className="rounded-xl w-full max-sm:h-[219px] max-md:h-[430px] max-lg:h-[530px] h-[689px] bg-black"
        onClick={() => {
          handlePlayPause();
          setPlayButton(!playButton);
        }}
        ref={videoRef}
        src={videoFile}
        controls={false}
        preload="metadata"
      ></video>
    );
  };
  
  export default Video;