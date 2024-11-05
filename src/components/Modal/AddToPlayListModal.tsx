"use client"
import React, { useState } from 'react';
import { addSongToPlaylist, createPlaylist } from '@/lib/features/PlayList/createPlayList';
import { AppDispatch, RootState } from '@/lib/store';
import { useDispatch, useSelector } from 'react-redux';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaId: any
}

const AddToPlayListModal: React.FC<ModalProps> = ({ isOpen, onClose, mediaId }) => {

  const dispatch = useDispatch<AppDispatch>();
  const playlists = useSelector((state: RootState) => state.playList.playlists);
  const [playlistName, setPlaylistName] = useState('')
  const handleAddToSong = (id: any) => {
    const formData = new FormData();
    formData.append('media_id', mediaId);
    formData.append('playlist_id', id);
    dispatch(addSongToPlaylist(formData)).unwrap().then((res) => {
      onClose()
    })
  }
  const handleCreatePlaylist = () => {
    const formData = new FormData();
    formData.append('name', playlistName);
    dispatch(createPlaylist(formData));
    setPlaylistName('');
};
  if (!isOpen) return null;
  return (
    <div aria-hidden="true" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative dark:bg-gray-700 w-full max-w-md p-6 rounded-lg shadow-lg mx-4">
        <div className="flex items-center justify-between md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add to Playlist
          </h3>
          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={onClose}>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 space-y-3">
          {playlists.length !== 0 ? (
            <ul className="space-y-3 overflow-y-auto max-h-64 ">
              {
                playlists.map((item, index) => (
                  <li key={`${item.id}-${index}`} className='mx-3'>
                    <button onClick={() => handleAddToSong(item.id)} className="flex items-center p-3 w-full text-base font-semibold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                      {item.name}
                    </button>
                  </li>
                ))
              }
            </ul>
          ) : (
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
          )}

        </div>
      </div>
    </div>
  );
};

export default AddToPlayListModal;
