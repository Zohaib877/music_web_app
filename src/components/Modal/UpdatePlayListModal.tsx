"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { updatePlaylist } from "@/lib/features/PlayList/createPlayList";
import { closePlaylistModel } from "@/lib/features/PlayList/playListModal";

interface UpdatePlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
  playlistId: number;
  currentName: string;
}

const UpdatePlaylistModal: React.FC<UpdatePlaylistModalProps> = ({
  isOpen,
  onClose,
  playlistId,
  currentName,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [playlistName, setPlaylistName] = useState(currentName);

  const handleUpdatePlaylist = () => {
    const formData = new FormData();
    formData.append("name", playlistName);
    formData.append("playlist_id", playlistId.toString());

    dispatch(updatePlaylist(formData))
      .unwrap()
      .then(() => {
        setPlaylistName("");
        onClose();
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mx-4 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-3 mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Update Playlist
          </h3>
          <button
            type="button"
            onClick={() => onClose()}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Input Field */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Playlist Name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className="w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Confirm Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleUpdatePlaylist}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900 transition duration-200"
          >
            <svg
              className="w-5 h-5 mr-1 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlaylistModal;
