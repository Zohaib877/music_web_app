'use client'
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  return (
    <>
      {/* Header Section */}
      <div className="max-sm:hidden w-full mt-10 mb-4 lg:mt-12 lg:mb-2 lg:mx-32 flex justify-center lg:justify-start">
        <h1 className="text-white text-4xl font-thin cursor-pointer w-fit" onClick={() => router.push('/')}>
          Music App
        </h1>
      </div>
      <div className="flex flex-col">
          {children}
      </div>
    </>
  );
};

export default AuthLayout;
