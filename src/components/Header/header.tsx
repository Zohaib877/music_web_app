"use client";
import { openSidebar } from "@/lib/features/Sidebar/SidebarSlice";
import { openSearchModel } from "@/lib/features/Search/searchModelSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useState } from "react";
import { RootState } from "@/lib/store";
import { logoutUser } from "@/lib/features/User/userSlice";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userDetails, token } = useSelector((state: RootState) => state.user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleuserDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <>
      {/* header start */}
      <div className="flex justify-between items-center bg-backgroundBlur h-16 lg:h-20 px-0 xl:px-28 pl-4 pr-4 lg:pl-28">
        <div className="flex-1 flex items-center lg:hidden xl:hidden">
          <Image
            className="cursor-pointer"
            src="/assets/icons/sidebar_open_icon.png"
            alt="close"
            width={22}
            height={35}
            onClick={() => dispatch(openSidebar())}
          />
          <div className="relative w-10 h-10 sm:w-10 sm:h-10">
            <Image
              src={require("../../../public/assets/images/brand/Logo.png")}
              alt="Music App Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        {/* <div className="relative w-20 h-20 sm:w-20 sm:h-20">
          <Image
            src={require("../../../public/assets/images/brand/Logo.png")}
            alt="Music App Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div> */}
        {/* search Input start */}
        <div className="hidden lg:grow lg:flex lg:justify-center">
          <div className="w-4/5">
            <div className="relative w-full">
              <input
                type="text"
                name="search"
                id="voice-search"
                className="w-full bg-transparent border border-borderPrimary rounded-full h-10 text-fontPrimary focus:ring-blue-500 block ps-5 pe-10 "
                placeholder="Search Audio, Video, Movie, Artist..."
                readOnly={true}
                onClick={() => dispatch(openSearchModel())}
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none text-fontPrimary text-2xl cursor-pointer">
                <IoSearch />
              </div>
            </div>
          </div>
        </div>
        {/* search input end */}
        {/* Large Screen Button start */}
        <div className="hidden lg:flex">
          {token === "" ? (
            <button
              type="button"
              className="w-fit h-11 px-6 mx-2 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium hover:text-gray-200"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          ) : null}

          <button
            type="button"
            className="w-fit h-11 px-6 mx-2 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium hover:text-gray-200"
            id="menu-button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            Download App
          </button>
          {token !== "" && (
            <button
              type="button"
              className="w-fit h-11 px-6 mx-2 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium hover:text-gray-200"
              onClick={() => router.push("/subsscription")}
            >
              Subscribe
            </button>
          )}
          {token !== "" && (
            <div className="ml-5">
              <Image
                id="avatarButton"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer"
                src="/assets/images/thumbnail/avatar.png"
                alt="User dropdown"
                onClick={toggleuserDropdown}
                width={40}
                height={40}
              />

              {dropdownVisible && (
                <div
                  id="userDropdown"
                  className="z-10 absolute right-5 top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{userDetails?.full_name}</div>
                    <div className="font-medium truncate">
                      {userDetails?.phone}
                    </div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={() => {
                        dispatch(logoutUser());
                        router.push("/login");
                      }}
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {isDropdownOpen && (
          <div
            className="absolute top-0 right-10 z-10 mt-16 mr-56 w-52 origin-top-right rounded-md bg-sideBarBackground/55 shadow-lg ring-1 ring-sideBarBackground ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="menu-item-0"
                onClick={() => setIsDropdownOpen(false)}
              >
                <Image
                  src="/assets/images/platform-button/playstore.png"
                  alt=""
                  width={178}
                  height={49}
                />
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="menu-item-1"
                onClick={() => setIsDropdownOpen(false)}
              >
                <Image
                  src="/assets/images/platform-button/appstore.png"
                  alt=""
                  width={178}
                  height={49}
                />
              </Link>
            </div>
          </div>
        )}
        {/* Download Popup end*/}

        {/* Large Screen Button end */}
        {/* Small screen Button start */}
        <div className="lg:hidden xl:hidden">
          <button type="button" className="w-fit mx-2 text-white text-3xl">
            <Image
              src="/assets/icons/user_icon.png"
              alt="close"
              width={35}
              height={35}
              onClick={() => router.push("/login")}
            />
          </button>
          <button type="button" className="w-fit mx-2 text-white text-3xl">
            <Image
              src="/assets/icons/search_icon.png"
              alt="close"
              width={35}
              height={35}
              onClick={() => dispatch(openSearchModel())}
            />
          </button>
        </div>
        {/* Small screen Button end */}
      </div>
      {/* header end */}
    </>
  );
};

export default Header;
