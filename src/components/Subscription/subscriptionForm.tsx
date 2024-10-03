"use client"
import { useRouter } from "next/navigation";
import React from "react";

const SubscriptionForm: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <h2 className="text-white font-thin text-2xl mb-6 mt-32">
      Subscribe
      </h2>
      <form
        className="w-full flex items-center flex-col"
        action=""
      >
        <div className="max-md:w-11/12 w-full h-max py-2 bg-black bg-opacity-40 rounded-lg px-12 divide-y">
          <div className="my-2">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-none text-white text-center"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => router.push('/subsscription/otp')}
          className="w-3/5 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-10 hover:font-bold"
        >
          Send Code
        </button>
      </form>
    </>
  );
};

export default SubscriptionForm;