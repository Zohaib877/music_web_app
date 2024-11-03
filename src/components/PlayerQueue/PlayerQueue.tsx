"use client";
import { useEffect, useState } from "react";
import SongQueueCard from "../SongQueueCard/SongQueueCard";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import store, { RootState } from "@/lib/store";

const PlayerQueue = () => {
    const [openCardId, setOpenCardId] = useState<Number | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const { queue } = useSelector((state: RootState) => state.mediaPlayer);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const isBigScreen = useMediaQuery({ minWidth: 1024 });

    const handleToggle = (id: number) => {
        setOpenCardId(openCardId === id ? null : id);
    };
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className="h-[520px] overflow-y-scroll overflow-x-hidden">
                {queue.map((track, index) => (
                    <SongQueueCard
                        key={track.id}
                        item={track}
                        isOpen={openCardId === track.id}
                        handleToggle={() => handleToggle(track.id)}
                    />
                ))}
            </div>
        </>
    )
}
export default PlayerQueue;