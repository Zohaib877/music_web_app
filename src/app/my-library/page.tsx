"use client";
import { useEffect } from 'react';
import Tabs from "@/components/Tabs/Tabs";
import AppLayout from "@/containers/layout/AppLayout";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists } from '@/lib/features/PlayList/createPlayList';
import { AppDispatch, RootState } from '@/lib/store';
import { fetchFavoriteSongs } from '@/lib/features/Favourite/favouriteSlice';
import SongCard from '@/components/SongCard/SongCard';
import { fetchRecentlyPlayed } from '@/lib/features/RecentlyPlayed/recentlyPlayedSlice';
import PlayListContent from '@/components/Tabs/PlayListContent';

const MyLibrary = () => {
    const dispatch = useDispatch<AppDispatch>();
    const playlists = useSelector((state: RootState) => state.playList.playlists);
    const { favoriteSongs } = useSelector((state: RootState) => state.favourite);
    const { media, currentPage } = useSelector((state: RootState) => state.recentlyPlayed);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchPlaylists());
                await dispatch(fetchFavoriteSongs());
                await dispatch(fetchRecentlyPlayed(currentPage));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [dispatch, currentPage]);

    const tabs = [
        { label: 'My Playlist', href: '#', content: <PlayListContent items={playlists} /> },
        { label: 'Favourite Songs', href: '#', content: <SongCard items={favoriteSongs} /> },
        { label: 'Recently Played', href: '#', content: <SongCard items={media} /> },
    ];

    return (
        <AppLayout>
            <div className="w-full h-auto">
                <div className="w-full h-auto flex max-md:flex-col justify-between items-center px-6">
                    <h1 className="text-fontPrimary text-3xl font-bold py-3">My Library</h1>
                    <div className="flex justify-center max-sm:w-full max-sm:overflow-x-scroll max-sm:whitespace-nowrap py-3">
                        <Link href="#" className="w-fit h-11 px-6 mx-2 flex items-center rounded-3xl bg-buttonPrimary border-buttonPrimary text-white font-medium hover:text-gray-200">
                            Audio
                        </Link>
                        {/* <Link href="/my-library/video" className="w-fit h-11 px-6 mx-2 flex items-center rounded-3xl bg-buttonDisable border border-buttonPrimary text-white font-medium hover:text-gray-200">
                            Video
                        </Link> */}
                    </div>
                </div>
                <Tabs tabs={tabs} />
            </div>
        </AppLayout>
    );
};

export default MyLibrary;
