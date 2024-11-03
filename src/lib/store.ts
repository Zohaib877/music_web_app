import { configureStore } from '@reduxjs/toolkit';
import searchModelSlice from './features/Search/searchModelSlice';
import SidebarSlice from './features/Sidebar/SidebarSlice';
import userReducer from './features/User/userSlice';
import authSlice from './features/Auth/authSlice';
import otpSlice from './features/Auth/otpSlice';
import topSlice from './features/Tops/TopsSlice';
import mediaPlayerReducer from './features/Player/mediaPlayerSlice';
import homeReducer from './features/Home/homeSlice';

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
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
