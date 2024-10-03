import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  phoneNumber: string;
  otp: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  phoneNumber: "",
  otp: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{ phoneNumber: string; otp: string }>
    ) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.otp = action.payload.otp;
      state.isLoggedIn = true; // Set logged-in status to true
    },
    logoutUser: (state) => {
      state.phoneNumber = "";
      state.otp = "";
      state.isLoggedIn = false; // Set logged-in status to false
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
