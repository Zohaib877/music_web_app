"use client";
import { openSearchModel } from "@/lib/features/Search/searchModelSlice";
import { closeSidebar, openSidebar } from "@/lib/features/Sidebar/SidebarSlice";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.Sidebar.isOpen);
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>("");

  // Update currentPath when the component mounts or URL changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);
  const isActive = (path: string) => currentPath === path;

  return (
    <>
      {/* Large Sidebar Start */}
      <div
        className={`hidden lg:flex xl:flex flex-col z-10 fixed top-0 ${
          isOpen ? "w-72" : "w-22 overflow-hidden"
        } h-full bg-sideBarBackground transition-all duration-700 px-6 py-5`}
      >
        {isOpen ? (
          <Image
            className="cursor-pointer"
            src="/assets/icons/sidebar_close_icon.png"
            alt="close"
            width={40}
            height={40}
            onClick={() => dispatch(closeSidebar())}
          />
        ) : (
          <Image
            className="cursor-pointer"
            src="/assets/icons/sidebar_open_icon.png"
            alt="open"
            width={40}
            height={40}
            onClick={() => dispatch(openSidebar())}
          />
        )}
        <ul className="list-none flex-1 flex flex-col justify-start items-start py-5">
          <li className="flex items-center my-5 group w-full hover:cursor-pointer">
            <Link
              href="/"
              className="flex flex-row items-center w-full"
              onClick={() => dispatch(closeSidebar())}
            >
              <Image
                src="/assets/icons/home_icon.png"
                alt="home"
                width={28}
                height={28}
                className={`group-hover:filter-custom-filter ${
                  isActive("/") ? "filter-custom-filter" : ""
                }`}
              />
              <p
                className={`font-normal text-xl text-fontPrimary ${
                  isOpen ? "pl-7" : "hidden"
                } group-hover:filter-custom-filter ${
                  isActive("/") ? "filter-custom-filter" : ""
                }`}
              >
                HOME
              </p>
            </Link>
          </li>
          <li className="flex items-center my-5 group w-full hover:cursor-pointer">
            <Link
              href="/my-library"
              className="flex flex-row items-center w-full"
              onClick={() => dispatch(closeSidebar())}
            >
              <Image
                src="/assets/icons/library_icon.png"
                alt="library"
                width={28}
                height={28}
                className={`group-hover:filter-custom-filter ${
                  isActive("/my-library") ? "filter-custom-filter" : ""
                }`}
              />
              <p
                className={`font-normal text-xl text-fontPrimary ${
                  isOpen ? "pl-7" : "hidden"
                } group-hover:filter-custom-filter ${
                  isActive("/my-library") ? "filter-custom-filter" : ""
                }`}
              >
                My Library
              </p>
            </Link>
          </li>
          <li className="flex items-center my-5 group w-full hover:cursor-pointer">
            <Link
              href="/language"
              className="flex flex-row items-center w-full"
              onClick={() => dispatch(closeSidebar())}
            >
              <Image
                src="/assets/icons/language_icon.png"
                alt="language"
                width={28}
                height={28}
                className={`group-hover:filter-custom-filter ${
                  isActive("/language") ? "filter-custom-filter" : ""
                }`}
              />
              <p
                className={`font-normal text-xl text-fontPrimary ${
                  isOpen ? "pl-7" : "hidden"
                } group-hover:filter-custom-filter ${
                  isActive("/language") ? "filter-custom-filter" : ""
                }`}
              >
                Language
              </p>
            </Link>
          </li>
          <li className="flex items-center my-5 group w-full hover:cursor-pointer">
            <Link
              href="/artists"
              className="flex flex-row items-center w-full"
              onClick={() => dispatch(closeSidebar())}
            >
              <Image
                src="/assets/icons/artist_icon.png"
                alt="artists"
                width={28}
                height={28}
                className={`group-hover:filter-custom-filter ${
                  isActive("/artists") ? "filter-custom-filter" : ""
                }`}
              />
              <p
                className={`font-normal text-xl text-fontPrimary ${
                  isOpen ? "pl-7" : "hidden"
                } group-hover:filter-custom-filter ${
                  isActive("/artists") ? "filter-custom-filter" : ""
                }`}
              >
                Artists
              </p>
            </Link>
          </li>
          <li className="flex items-center my-5 group w-full hover:cursor-pointer">
            <Link
              href="#"
              className="flex flex-row items-center w-full"
              onClick={() => dispatch(openSearchModel())}
            >
              <Image
                src="/assets/icons/search_simple_icon.png"
                alt="search"
                width={28}
                height={28}
                className={`group-hover:filter-custom-filter`}
              />
              <p
                className={`font-normal text-xl text-fontPrimary ${
                  isOpen ? "pl-7" : "hidden"
                } group-hover:filter-custom-filter`}
              >
                Search
              </p>
            </Link>
          </li>
        </ul>
      </div>
      {/* Large Sidebar End */}

      {/* Small Sidebar Start */}
      <div
        className={`lg:hidden xl:hidden flex flex-col justify-between z-10 fixed top-0 ${
          isOpen ? "w-72 px-6" : "w-0 overflow-hidden"
        } h-screen bg-sideBarBackground transition-all duration-300 py-5`}
      >
        <div>
          {isOpen ? (
            <Image
              className="cursor-pointer"
              src="/assets/icons/sidebar_close_icon.png"
              alt="close"
              width={25}
              height={25}
              onClick={() => dispatch(closeSidebar())}
            />
          ) : (
            <Image
              className="cursor-pointer"
              src="/assets/icons/sidebar_open_icon.png"
              alt="open"
              width={25}
              height={25}
              onClick={() => dispatch(openSidebar())}
            />
          )}
          <ul className="list-none flex-1 flex flex-col justify-start items-start py-2">
            <li className="flex items-center my-3 group w-full hover:cursor-pointer">
              <Link href="/" className="flex flex-row items-center w-full">
                <Image
                  src="/assets/icons/home_icon.png"
                  alt="home"
                  width={20}
                  height={20}
                  className={`group-hover:filter-custom-filter ${
                    isActive("/") ? "filter-custom-filter" : ""
                  }`}
                />
                <p
                  className={`font-normal text-base text-fontPrimary ${
                    isOpen ? "pl-5" : "hidden"
                  } group-hover:filter-custom-filter ${
                    isActive("/") ? "filter-custom-filter" : ""
                  }`}
                >
                  HOME
                </p>
              </Link>
            </li>
            <li className="flex items-center my-3 group w-full hover:cursor-pointer">
              <Link
                href="/my-library"
                className="flex flex-row items-center w-full"
              >
                <Image
                  src="/assets/icons/library_icon.png"
                  alt="library"
                  width={20}
                  height={20}
                  className={`group-hover:filter-custom-filter ${
                    isActive("/my-library") ? "filter-custom-filter" : ""
                  }`}
                />
                <p
                  className={`font-medium text-base text-fontPrimary ${
                    isOpen ? "pl-5" : "hidden"
                  } group-hover:filter-custom-filter ${
                    isActive("/my-library") ? "filter-custom-filter" : ""
                  }`}
                >
                  My Library
                </p>
              </Link>
            </li>
            <li className="flex items-center my-3 group w-full hover:cursor-pointer">
              <Link
                href="/language"
                className="flex flex-row items-center w-full"
              >
                <Image
                  src="/assets/icons/language_icon.png"
                  alt="language"
                  width={20}
                  height={20}
                  className={`group-hover:filter-custom-filter ${
                    isActive("/language") ? "filter-custom-filter" : ""
                  }`}
                />
                <p
                  className={`font-medium text-base text-fontPrimary ${
                    isOpen ? "pl-5" : "hidden"
                  } group-hover:filter-custom-filter ${
                    isActive("/language") ? "filter-custom-filter" : ""
                  }`}
                >
                  Language
                </p>
              </Link>
            </li>
            <li className="flex items-center my-3 group w-full hover:cursor-pointer">
              <Link
                href="/artists"
                className="flex flex-row items-center w-full"
              >
                <Image
                  src="/assets/icons/artist_icon.png"
                  alt="artists"
                  width={20}
                  height={20}
                  className={`group-hover:filter-custom-filter ${
                    isActive("/artists") ? "filter-custom-filter" : ""
                  }`}
                />
                <p
                  className={`font-medium text-base text-fontPrimary ${
                    isOpen ? "pl-5" : "hidden"
                  } group-hover:filter-custom-filter ${
                    isActive("/artists") ? "filter-custom-filter" : ""
                  }`}
                >
                  Artists
                </p>
              </Link>
            </li>
            <li className="flex items-center my-3 group w-full hover:cursor-pointer">
              <Link
                href="#"
                className="flex flex-row items-center w-full"
                onClick={() => dispatch(openSearchModel())}
              >
                <Image
                  src="/assets/icons/search_simple_icon.png"
                  alt="search"
                  width={20}
                  height={20}
                  className={`group-hover:filter-custom-filter`}
                />
                <p
                  className={`font-medium text-base text-fontPrimary ${
                    isOpen ? "pl-5" : "hidden"
                  } group-hover:filter-custom-filter`}
                >
                  Search
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${!isOpen && `hidden`}`}>
          <h3 className="text-base text-fontPrimary font-bold pb-2">
            Music APP
          </h3>
          <p className={`text-xs text-fontPrimary font-thin`}>
            Koyal offers you free, unlimited access to over millions of folk
            songs, trending dramas, short videos, movies and more of the active
            playlists that attract you. Stream online and download them in 9+
            different languages of Pakistan, including: Sindhi, Saraiki,
            Punjabi, Pashto, Balochi, Hindko, and Urdu.
          </p>
          <ul className="flex justify-start items-center pt-3 w-full">
            <li>
              <Image
                className="cursor-pointer px-1.5"
                src="/assets/icons/fb_active.png"
                alt="facebook_active"
                width={20}
                height={20}
              />
            </li>
            <li>
              <Image
                className="cursor-pointer px-1.5"
                src="/assets/icons/insta_active.png"
                alt="instagram_active"
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                className="cursor-pointer px-1.5"
                src="/assets/icons/linkdin_active.png"
                alt="linkedin_active"
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                className="cursor-pointer px-1.5"
                src="/assets/icons/youtube_active.png"
                alt="youtube_active"
                width={25}
                height={25}
              />
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => router.push("/subsscription")}
          className="w-full h-fit rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-fontPrimary text-lg font-normal mb-20"
        >
          Subscription
        </button>
      </div>
      {/* Small Sidebar End */}
    </>
  );
};

export default Sidebar;
