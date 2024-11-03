import { useEffect, useRef, useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { motion } from "framer-motion";
import VideoDurationAndProgress from "./VideoDurationAndProgress";
import PlayPause from "./PlayPause";
import Video from "./Video";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { pauseTrack, playTrack, setVolume, toggleMute } from "@/lib/features/Player/mediaPlayerSlice";

const CustomVideoPlayer = () => {
    const dispatch = useDispatch();
    const { currentTrack, isPlaying, mute, volume, media_duration } = useSelector((state: RootState) => state.mediaPlayer);

    const [playButton, setPlayButton] = useState<boolean>(true);
    const [settingsMenu, setSettingsMenu] = useState<boolean>(false);
    const [settingsHoverText, setSettingsHoverText] = useState<string>("");
    const [playHoverText, setPlayHoverText] = useState<string>("");
    const [pauseHoverText, setPauseHoverText] = useState<string>("");
    const [fullScreenHoverText, setFullScreenHoverText] = useState<string>("");
    const [videoTitleHoverText, setVideoTitleHoverText] = useState<string>("");
    const [videoDuration, setVideoDuration] = useState<number>(0);
    const [currentProgress, setCurrentProgress] = useState<number>(0);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            isPlaying ? video.play() : video.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = mute ? 0 : volume / 100;
        }
    }, [volume, mute]);

    const handlePlayPause = () => {
        dispatch(isPlaying ? pauseTrack() : playTrack(currentTrack));
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setVolume(Number(event.target.value)));
    };

    const handleMuteToggle = () => {
        dispatch(toggleMute());
    };

    const handleVideoProgressChange = (value: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = value;
            setCurrentProgress(value);
        }
    };

    const handleFullScreen = () => {
        const video = videoRef.current;
        if (video) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                video.requestFullscreen();
            }
        }
    };

    const handleRewind = () => {
        if (videoRef.current) videoRef.current.currentTime -= 5;
    };

    const handleWind = () => {
        if (videoRef.current) videoRef.current.currentTime += 5;
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleLoadedMetadata = () => setVideoDuration(video.duration);
            const handleTimeUpdate = () => setCurrentProgress(video.currentTime);

            video.addEventListener("loadedmetadata", handleLoadedMetadata);
            video.addEventListener("timeupdate", handleTimeUpdate);

            return () => {
                video.removeEventListener("loadedmetadata", handleLoadedMetadata);
                video.removeEventListener("timeupdate", handleTimeUpdate);
            };
        }
    }, []);

    if (!currentTrack) return null;

    return (
        <>
            <div className="relative w-full">
                <motion.div
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Video
                        setPlayButton={setPlayButton}
                        setVideoTitleHoverText={setVideoTitleHoverText}
                        handlePlayPause={handlePlayPause}
                        videoFile={currentTrack.file_path}
                        videoRef={videoRef}
                        playButton={playButton}
                    />
                    <VideoDurationAndProgress
                        currentProgress={currentProgress}
                        videoDuration={videoDuration}
                        handleVideoProgressChange={handleVideoProgressChange}
                    />
                </motion.div>

                <PlayPause
                    playButton={playButton}
                    playHoverText={playHoverText}
                    setPlayButton={setPlayButton}
                    pauseHoverText={pauseHoverText}
                    handlePlayPause={handlePlayPause}
                    setPauseHoverText={setPauseHoverText}
                    setPlayHoverText={setPlayHoverText}
                />

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-3 right-3 text-white cursor-pointer"
                >
                    <div className="flex flex-col items-end gap-4">
                        <span className="text-sm">{fullScreenHoverText}</span>
                        <BsFullscreen
                            onClick={handleFullScreen}
                            onMouseEnter={() => setFullScreenHoverText("FullScreen")}
                            onMouseLeave={() => setFullScreenHoverText("")}
                        />
                    </div>
                </motion.div>

                <div className="relative">
                    <motion.div className="absolute bottom-[9px] right-12 text-[22px] text-white cursor-pointer">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex flex-col items-end gap-4">
                                <span className="text-sm">{settingsHoverText}</span>
                                <CiSettings
                                    className="hover:animate-spin"
                                    onMouseEnter={() => setSettingsHoverText("Settings")}
                                    onMouseLeave={() => setSettingsHoverText("")}
                                    onClick={() => setSettingsMenu(!settingsMenu)}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                    {settingsMenu && (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Settings menu content here */}
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CustomVideoPlayer;
