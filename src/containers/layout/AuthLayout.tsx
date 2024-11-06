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
      <div className="w-full lg:mx-32 flex justify-center lg:justify-start">
        <div className="relative w-40 h-40 cursor-pointer" onClick={()=>router.push("/")}> 
          <Image
            src={require("../../../public/assets/images/brand/Logo.png")}
            alt="Music App Logo"
            width={160} // Tailwind w-40 is 10rem, which is 160px
            height={160}
            quality={100} // Optional: Increases clarity
          />
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col flex-1">{children}</div>
    </>
  );
};

export default AuthLayout;
