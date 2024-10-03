import { configureStore } from "@reduxjs/toolkit";
import searchModelSlice from "./features/Search/searchModelSlice";
import SidebarSlice from "./features/Sidebar/SidebarSlice";
import userReducer from "./features/User/userSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      searchModel: searchModelSlice,
      Sidebar: SidebarSlice,
      user: userReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ReturnType<AppStore["dispatch"]>;
