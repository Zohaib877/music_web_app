"use client";
import Header from "@/components/Header/header";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import Sidebar from "@/components/Sidebar/sidebar";
import React, { ReactNode, useEffect, useState } from "react";
import SearchModel from "../SearchModel/Search";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const { currentTrack } = useSelector((state: RootState) => state.mediaPlayer);
  const [showPlayerBar, setShowPlayerBar] = useState(false);

  useEffect(() => {
    const restrictedPaths = ['/player/audio', '/player/video'];
    setShowPlayerBar(
      currentTrack.file_path !== "" &&
      currentTrack.type === 'audio' &&
      !restrictedPaths.some(path => pathname.startsWith(path))
    );
  }, [pathname, currentTrack]);

  return (
    <>
      <div className="flex flex-col min-h-screen pb-[70px] lg:pb-[90px] xl:pb-[90px]">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="w-full pl-0 lg:pl-24 xl:pl-24">{children}</main>
        </div>
      </div>
      <SearchModel />
      {pathname === "/" && <div className={pathname === "/" ? `mb-${showPlayerBar ? '20' : '0'}` : ''}> <Footer /></div>}
      {showPlayerBar && <PlayerBar />}
    </>
  );
};

export default AppLayout;
