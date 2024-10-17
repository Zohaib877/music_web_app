"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {/* Header Section */}
      <div className="max-sm:hidden w-full mt-10 mb-4 lg:mt-12 lg:mb-2 lg:mx-32 flex justify-center lg:justify-start">
        <div className="relative w-40 h-40 sm:w-40 sm:h-40">
          <Image
            src={require("../../../public/assets/images/brand/Logo.png")}
            alt="Music App Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </>
  );
};

export default AuthLayout;
