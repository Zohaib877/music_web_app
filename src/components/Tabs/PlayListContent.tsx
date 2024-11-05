"use client"
import { PlaylistData } from "@/lib/features/PlayList/types";
import Image from "next/image";
import React, { useState } from "react";
import CreatePlaylistModal from "../Modal/CreatePlaylistModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { createPlaylist } from "@/lib/features/PlayList/createPlayList";

interface TabContentProps {
  items: PlaylistData[];
}

const PlayListContent: React.FC<TabContentProps> = ({ items }) => {
  const dispatch = useDispatch<AppDispatch>();
  const playlists = useSelector((state: RootState) => state.playList.playlists);
  const [isModalOpen, setModalOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState('');

  const handleCreatePlaylist = () => {
    const formData = new FormData();
    formData.append('name', playlistName);
    dispatch(createPlaylist(formData));
    setModalOpen(false);
    setPlaylistName('');
  };

  return (
    <>
      {playlists.length == 0 && (
        <div className="text-center my-10">
          <p className="text-lg text-gray-500">No playlists found.</p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Playlist
          </button>
        </div>
      )}

      <div className="w-full h-auto py-10 grid justify-items-center grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center h-auto w-fit px-4 py-3"
          >
            <Image
              src={require('../../../public/assets/images/thumbnail/artist_mobile.png')}
              alt={item.name}
              width={250}
              height={250}
              className="mb-3 mx-auto"
            />
            <p className="text-fontPrimary text-base font-medium text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      {/* Modal for creating playlist */}
      <CreatePlaylistModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} heading='Create New Playlist'>
        <div className='flrx mb-4 justify-center align-middle items-center'>
          <input
            type="text"
            placeholder="Playlist Name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
          <button onClick={handleCreatePlaylist} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            Create Playlist
          </button>
        </div>
      </CreatePlaylistModal>
    </>
  )
}

export default PlayListContent;
