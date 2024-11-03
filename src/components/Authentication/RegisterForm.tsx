"use client";
import React, { useState } from "react";
import Image from "next/image";
import store from "@/lib/store";
import { registerUser } from "@/lib/features/Auth/authSlice";
import { errorToast, successToast } from "@/utils/toast";
import { motion } from "framer-motion";
import { verifyCode } from "@/lib/features/Auth/otpSlice";
import { useRouter } from "next/navigation";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    userName: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [showOtpField, setShowOtpField] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { phoneNumber, userName, password, confirmPassword } = formData;

    if (!userName || !phoneNumber || !password || !confirmPassword) {
      errorToast("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      errorToast("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await store.dispatch(registerUser({ full_name: userName, password, phone: phoneNumber })).unwrap();
      setShowOtpField(true);
      successToast("Please enter the OTP sent to your phone.");
    } catch (error: any) {
      console.log("error", error);

      errorToast(error[0] || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  const handleOtp = async () => {
    const { phoneNumber, otp } = formData;
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
      <div className="relative w-40 h-40 sm:w-40 sm:h-40">
        <Image
          src={require("../../../public/assets/images/brand/Logo.png")}
          alt="Music App Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2 className="text-borderPrimary font-light max-sm:text-xl text-2xl max-sm:mb-3 mb-6 max-sm:mt-8 mt-32">
        Sign Up For New Account
      </h2>

      {showOtpField ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none text-white"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none text-white"
            value={formData.otp}
            onChange={handleChange}
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
        <form onSubmit={handleSubmit} className="w-full flex items-center flex-col">
          <div className="h-max py-2 bg-cardDisabled/50 rounded-lg w-full divide-y px-4 opacity-95">
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none text-white"
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none text-white"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none text-white"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none text-white"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-5/6 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-5 flex items-center justify-center ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? (
              <>
                <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></span>
                Processing...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      )}
    </>
  );
};

export default RegisterForm;
