"use client"
import { useRouter } from "next/navigation";
import React from "react";

const ForgotForm: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="hidden max-sm:flex flex-col justify-center items-center">
        <p className="hidden max-sm:block text-borderPrimary font-semibold text-xl mt-20">
          Music App name and logo
        </p>
      </div>
      <h2 className="text-white font-thin max-sm:text-xl text-2xl mb-6 max-sm:mt-36 mt-32">
        Forgot Password
      </h2>
      <form
        className="w-full flex items-center flex-col"
        action=""
      >
        <div className="h-max py-2 bg-cardDisabled rounded-lg w-full divide-y px-4">
          <div className="my-2 w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-none text-white text-left"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => router.push('/resetpassword')}
          className="w-5/6 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-10 hover:font-bold"
        >
          Send Code
        </button>
      </form>
    </>
  );
};

export default ForgotForm;