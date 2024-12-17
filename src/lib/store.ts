import { configureStore } from '@reduxjs/toolkit';
import searchModelSlice from './features/Search/searchModelSlice';
import SidebarSlice from './features/Sidebar/SidebarSlice';
import userReducer from './features/User/userSlice';
import authSlice from './features/Auth/authSlice';
import otpSlice from './features/Auth/otpSlice';
import topSlice from './features/Tops/TopsSlice';
import mediaPlayerReducer from './features/Player/mediaPlayerSlice';
import homeReducer from './features/Home/homeSlice';
import playlistSlice from './features/PlayList/createPlayList';
import favouriteSlice from './features/Favourite/favouriteSlice';
import recentlyPlayedSlice from './features/RecentlyPlayed/recentlyPlayedSlice';
import artistSlice from './features/Artist/artistSlice';
import searchSlice from './features/Search/searchSlice';
import languageSlice from './features/language/languageSlice';
import languageMediaSlice from './features/language/languageMediaSlice';
import playlistModelSlice from './features/PlayList/playListModal';

const store = configureStore({
  reducer: {
    searchModel: searchModelSlice,
    Sidebar: SidebarSlice,
    user: userReducer,
    auth: authSlice,
    otpVerify: otpSlice,
    topMedis: topSlice,
    mediaPlayer: mediaPlayerReducer,
    home: homeReducer,
    playList: playlistSlice,
    favourite: favouriteSlice,
    recentlyPlayed: recentlyPlayedSlice,
    artist: artistSlice,
    searchSong: searchSlice,
    languages: languageSlice,
    languageMedia: languageMediaSlice,
    playlistModal: playlistModelSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
