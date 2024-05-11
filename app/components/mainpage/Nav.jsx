"use client";

import {
  AccountCircle,
  Message,
  NotificationAdd,
  Search,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { signOutWithGoogle } from "@/app/lib/firebase/auth";
import { removeSession } from "@/Actions/auth-actions";

const Nav = () => {
  const pathname = usePathname();
  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
  };

  return (
    <div className=" bg-white border-b border-gray-200 skicky left-0 top-0 w-[100vw] px-6 z-50 ">
      <div className=" flex items-center my-0 mx-auto min-h-[100%] max-w-[1128px] ">
        <div className=" flex my-1 w-full items-center">
          <span className=" mr-2 text-[0px] ">
            <a href="home">
              <img src="/home-logo.svg" alt="home-logo" />
            </a>
          </span>
          <div className=" opacity-100 flex-grow relative  ">
            <div className=" max-w-[280x] mr-4">
              <input
                type="text"
                placeholder="Search"
                className=" border-none shadow-[none] bg-[#eef3f8] rounded-sm text-[rgba(0,0,0,0.9)] w-[218px] py-0 pr-2 pl-10 leading-7 font-normal text-[14px] h-[34px] border-[#dce6f1] align-text-top md:w-full"
              />
            </div>
            <div className=" w-10 absolute z-[1] top-[7px] left-[2px] m-0 pointer-events-none flex justify-center items-center   ">
              <Search />
            </div>
          </div>
          <div
            className={` text-secondary flex items-center hover:text-black mdmin:hidden ${
              pathname === "/message" ? "border-b-2" : ""
            }`}
          >
            <Link href="/message">
              <Message />
            </Link>
          </div>
        </div>
        <nav className=" ml-auto block md:fixed md:left-0 md:bottom-0 md:bg-white md:w-[100%]  ">
          <ul className="flex flex-nowrap list-none md:flex md:justify-between">
            <li className={`NavList ${pathname === "/main" ? "active" : ""}`}>
              <Link href="/" className=" NavList__link">
                <HomeIcon />
                <span className=" NavList__text">Home</span>
              </Link>
            </li>

            <li
              className={`NavList ${
                pathname === "/mynetwork" ? "border-b-2" : ""
              }`}
            >
              <Link href="/mynetwork" className="NavList__link">
                <PeopleIcon />
                <span className="NavList__text">My Network</span>
              </Link>
            </li>

            <li
              className={`NavList mdmin:hidden ${
                pathname === "/mynetwork" ? "border-b-2" : ""
              }`}
            >
              <Link href="/mynetwork" className="NavList__link">
                <PeopleIcon />
                <span className="NavList__text">Post</span>
              </Link>
            </li>

            <li
              className={`NavList ${pathname === "/jobs" ? "border-b-2" : ""}`}
            >
              <Link href="/jobs" className="NavList__link">
                <WorkIcon />
                <span className="NavList__text">Jobs</span>
              </Link>
            </li>

            <li
              className={`NavList md:hidden   ${
                pathname === "/message" ? "border-b-2" : ""
              }`}
            >
              <Link href="/message" className="NavList__link">
                <Message />
                <span className="NavList__text">Messaging</span>
              </Link>
            </li>

            <li
              className={`NavList ${
                pathname === "/notification" ? "border-b-2" : ""
              }`}
            >
              <Link href="/notification" className="NavList__link">
                <NotificationAdd />
                <span className="NavList__text">Notifications</span>
              </Link>
            </li>

            <li
              className={`NavList group md:hidden  relative ${
                pathname === "/profile" ? "border-b-2" : ""
              }`}
            >
              <Link href="/profile" className=" NavList__link ">
                <AccountCircle />
                <div className="flex items-center justify-center ">
                  <span className=" NavList__text">Me</span>
                  <ArrowDropDownIcon />
                </div>
              </Link>

              <div className=" hidden absolute group-hover:block bg-white top-[52px] py-2 w-full z-10 border">
                <div className=" flex justify-center">
                  <button
                    className=" text-primary text-[14px]"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </li>

            <li
              className={`NavList md:hidden ${
                pathname === "/business" ? "border-b-2" : ""
              }`}
            >
              <Link
                href="business"
                className="NavList__link flex justify-center"
              >
                <ViewCompactIcon />
                <span className="NavList__text">
                  Work
                  <ArrowDropDownIcon />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
