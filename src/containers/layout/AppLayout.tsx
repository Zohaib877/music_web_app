import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import Sidebar from "@/components/Sidebar/sidebar";
import React, { ReactNode } from "react";
import SearchModel from "../SearchModel/Search";

interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* pb-[90px] use when playerbar active */}
      <div className="flex flex-col min-h-screen pb-[70px] lg:pb-[90px] xl:pb-[90px]">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="w-full pl-0 lg:pl-24 xl:pl-24">{children}</main>
        </div>
        {/* <Footer /> */}
      </div>
      <SearchModel />
      <PlayerBar />
    </>
  );
};

export default AppLayout;
