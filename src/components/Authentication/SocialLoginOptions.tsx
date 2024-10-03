"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SocialProps {
  title: String;
  enableSocialButton: boolean;
  buttonType: String;
}

const SocialLoginOptions: React.FC<SocialProps> = ({
  title,
  enableSocialButton,
  buttonType,
}) => {
  const router = useRouter();
  return (
    <>
      {enableSocialButton ? (
        <>
          <div className="flex items-center w-4/5 mt-14 mb-4">
            <hr className="flex-grow border-t border-white" />
            <span className="px-3 text-white">OR</span>
            <hr className="flex-grow border-t border-white" />
          </div>
          <div className="flex flex-1 items-center justify-around w-3/6">
            <Image
              src="/assets/images/icons/fb.png"
              width={36}
              height={36}
              alt="facebook"
            />
            <Image
              src="/assets/images/icons/google.png"
              width={35}
              height={35}
              alt="google"
            />
            {/* <Image
              src="/assets/images/icons/linkdin.png"
              width={35}
              height={35}
              alt="linkedin"
            /> */}
          </div>
        </>
      ) : 
        <>
          <div className="my-16">

          </div>
        </>
      }

      <p className="text-borderPrimary font-light text-base mt-9 tracking-wide">
        {title ?? "Don't have an account ?"}
      </p>
      {buttonType === "login" ? (
        <button
          type="button"
          onClick={() => router.push("/register")}
          className="w-5/6 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-4"
        >
          Register Now
        </button>
      ) : (
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="w-5/6 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-4"
        >
          Login
        </button>
      )}
    </>
  );
};

export default SocialLoginOptions;
