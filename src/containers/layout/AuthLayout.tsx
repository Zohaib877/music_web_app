"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full lg:mx-32 flex justify-center lg:justify-start">
        <div className="relative w-40 h-40">
          <Image
            src={require("../../../public/assets/images/brand/Logo.png")}
            alt="Music App Logo"
            fill
            sizes="(max-width: 640px) 40px, (min-width: 640px) 40px"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col flex-1">{children}</div>
    </>
  );
};

export default AuthLayout;
