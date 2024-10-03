"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/lib/features/User/userSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/store";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("showOtpField", showOtpField);
    console.log("otp", otp);
    if (!showOtpField && phoneNumber) {
      setShowOtpField(true);
    } else if (showOtpField && otp) {
      dispatch(loginUser({ phoneNumber, otp }));
      router.push("/");
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);
  return (
    <>
      <div className="hidden max-sm:flex flex-col justify-center items-center">
        <p className="hidden max-sm:block text-borderPrimary font-semibold text-xl mt-20">
          Music App name and logo
        </p>
        <h1 className="text-white text-3xl font-bold mt-14">Welcome To</h1>
        <p className="text-borderPrimary font-light text-xl">Music App</p>
      </div>
      <h2 className="text-white font-thin max-sm:text-xl text-2xl mb-6 max-sm:mt-5 mt-32">
        Login to your account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center flex-col"
      >
        <div className="h-max py-2 bg-cardDisabled rounded-lg w-full divide-y px-4">
          <div className="my-2 w-full">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none focus:border-none text-white text-left"
            />
          </div>
          {showOtpField && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="my-2 w-full"
            >
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none focus:border-none text-white text-left"
              />
            </motion.div>
          )}
        </div>
        <div className="flex items-center justify-between my-4 w-full">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-buttonPrimary bg-gray-900 focus:ring-butttext-buttonPrimary"
            />
            <span className="ml-2 text-sm text-white">Remember me</span>
          </label>
          <Link
            href={"/forgotpassword"}
            className="text-white text-sm text-thin underline underline-offset-1"
          >
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-5/6 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-5 hover:font-bold"
        >
          {showOtpField ? "Verify OTP" : "Login"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
