"use client";
import { useEffect, useState } from "react";
import SongQueueCard from "../SongQueueCard/SongQueueCard";
import { useMediaQuery } from "react-responsive";

const PlayerQueue = () => {
    const [openCardId, setOpenCardId] = useState<Number | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    
    // Handle component mount
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    // Always call useMediaQuery, but ignore the value until mounted
    const isBigScreen = useMediaQuery({ minWidth: 1024 });
    
    const handleToggle = (id: number) => {
        setOpenCardId(openCardId === id ? null : id);
    };
    
    if (!isMounted) {
        return null; // Prevent rendering until mounted
    }

    return (
        <>
            <div className="h-[520px] overflow-y-scroll overflow-x-hidden">
                <SongQueueCard
                    id={1}
                    isOpen={openCardId === 1}
                    handleToggle={() => handleToggle(1)}
                />
                <SongQueueCard
                    id={2}
                    isOpen={openCardId === 2}
                    handleToggle={() => handleToggle(2)}
                />
                <SongQueueCard
                    id={3}
                    isOpen={openCardId === 3}
                    handleToggle={() => handleToggle(3)}
                />
                <SongQueueCard
                    id={4}
                    isOpen={openCardId === 4}
                    handleToggle={() => handleToggle(4)}
                />
                <SongQueueCard
                    id={5}
                    isOpen={openCardId === 5}
                    handleToggle={() => handleToggle(5)}
                />
                <SongQueueCard
                    id={6}
                    isOpen={openCardId === 6}
                    handleToggle={() => handleToggle(6)}
                />
            </div>
        </>
    )
}
export default PlayerQueue;