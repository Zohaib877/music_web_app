interface VideoDurationAndProgressPropsType {
  currentProgress: number;
  videoDuration: number;
  handleVideoProgressChange: (value: number) => void;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

const VideoDurationAndProgress = ({
  currentProgress,
  videoDuration,
  handleVideoProgressChange,
}: VideoDurationAndProgressPropsType) => {
  // Calculate the percentage of the video that has been played
  const progressPercentage = (currentProgress / videoDuration) * 100 || 0;

  return (
    <div className="absolute bottom-2.5 left-0 right-0 max-md:w-[85%] w-[96%] max-md:pl-[4%] pl-[2%] text-white">
      {/* Time display */}
      <div className="flex justify-between items-center mx-4">
        <span className="text-sm">{formatTime(currentProgress)}</span>
        {/* Progress Bar */}
        <input
          type="range"
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mx-4"
          min="0"
          max={videoDuration}
          value={currentProgress}
          onChange={(e) => handleVideoProgressChange(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, #600D62 ${progressPercentage}%, #ccc ${progressPercentage}%)`,
          }}
        />
        <span className="text-sm">{formatTime(videoDuration)}</span>
      </div>
    </div>
  );
};

export default VideoDurationAndProgress;
