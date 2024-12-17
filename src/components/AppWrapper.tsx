"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadUserFromStorage } from "@/utils/Storage";
import { loginUser } from "@/lib/features/User/userSlice";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { user, token } = loadUserFromStorage();
    console.log("user", user);
    console.log("token", token);
    if (user && token) {
      dispatch(
        loginUser({ phoneNumber: user.phone, token, userDetails: user })
      );
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AppWrapper;
