"use client"
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import OTPInput from "../Input/OTPInput";

const SubscriptionOTPForm: React.FC = () => {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  
  const handleOtpComplete = (otp: string) => {
    console.log("Entered OTP:", otp);
    setOTP(otp)
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(OTP == '1234'){
      router.push('/subsscription/success');
    }else{
      router.push('/subsscription/failed');
    }
  };

  return (
    <>
      <h2 className="text-white font-thin text-2xl mb-6 mt-32">
      OTP
      </h2>
      <form
        className="w-full flex items-center flex-col"
        onSubmit={handleSubmit}
      >
        <div className="max-md:w-11/12 w-full h-max py-2 bg-black bg-opacity-40 rounded-lg px-12 divide-y">
          <div className="my-2">
            <OTPInput 
              length={4} 
              onComplete={handleOtpComplete}
              CSSClass="w-full px-2 py-2 bg-transparent focus:outline-none text-white text-center border-b-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-3/5 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-10 hover:font-bold"
        >
          Verify
        </button>
      </form>
    </>
  );
};

export default SubscriptionOTPForm;