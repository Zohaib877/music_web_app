"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import store, { RootState } from "@/lib/store";
import Image from "next/image";
import { errorToast, successToast } from "@/utils/toast";
import { useAppDispatch } from "@/lib/hooks";
import { loginUser } from "@/lib/features/Auth/authSlice";
import { verifyCode } from "@/lib/features/Auth/otpSlice";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (phoneNumber !== "") {
      try {
        await store.dispatch(loginUser({ phone: phoneNumber })).unwrap();
        setShowOtpField(true);
      } catch (error: any) {
        errorToast(error.message || "Failed to login");
      } finally {
        setLoading(false);
      }
    } else {
      errorToast("Please fill in the required fields.");
      setLoading(false);
    }
  };
  const handleOtp = async () => {
    console.log("asd");

    if (!otp) {
      errorToast("Please enter OTP.");
      return;
    }
    setLoading(true);

    try {
      await store.dispatch(verifyCode({ phone: phoneNumber, otp })).unwrap();
      successToast("Login successful!");
      router.push("/");
    } catch (error: any) {
      errorToast(error[0] || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="hidden max-sm:flex flex-col justify-center items-center mt-3 content-center">
        <div className="relative w-40 h-40 sm:w-40 sm:h-40">
          <Image
            src={require("../../../public/assets/images/brand/Logo.png")}
            alt="Music App Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <h1 className="text-white text-3xl font-bold mt-14">Welcome To</h1>
        <p className="text-borderPrimary font-light text-xl">Dhun</p>
      </div>
      <h2 className="text-white font-thin max-sm:text-xl text-2xl mb-6 max-sm:mt-5 mt-32">
        Login to your account
      </h2>
      {showOtpField ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md flex flex-col items-center"
        >
          <div className=" w-full">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full py-2 bg-transparent focus:outline-none focus:border-none text-white text-left"
            />
          </div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-1 pb-2 pt-3 bg-transparent focus:outline-none focus:border-none text-white text-left"
            maxLength={4}
          />
          <button
            onClick={handleOtp}
            disabled={loading}
            className={`w-5/6 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-5 flex items-center justify-center ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? (
              <>
                <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></span>
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center flex-col"
        >
          <div className="h-max py-2 bg-cardDisabled/50 rounded-lg w-full divide-y px-4 opacity-95">
            <div className=" w-full">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-none text-white text-left"
              />
            </div>

          </div>
          {/* <div className="flex items-center justify-between my-4 w-full">
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
          </div> */}
          <button
            type="submit"
            disabled={loading}
            className={`w-5/6 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-5 hover:font-bold flex items-center justify-center ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? (
              <>
                <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></span>
                Processing...
              </>
            ) : showOtpField ? (
              "Verify OTP"
            ) : (
              "Login"
            )}
          </button>
        </form>
      )}

    </>
  );
};

export default LoginForm;
