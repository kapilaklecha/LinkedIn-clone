"use client";

import Searchbar from "@/app/lib/Searchbar";
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

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className=" bg-white border-b border-gray-200 fixed left-0 top-0 w-[100vw] px-6 z-50">
      <div className=" flex items-center my-0 mx-auto min-h-[100%] max-w-[1128px] ">
        <span className=" mr-2 text-[0px] ">
          <a href="home">
            <img src="/home-logo.svg" alt="home-logo" />
          </a>
        </span>
        <div className=" opacity-100 flex-grow relative ">
          <div className=" max-w-[280x]">
            <input
              type="text"
              placeholder="Search"
              className=" border-none shadow-[none] bg-[#eef3f8] rounded-sm text-[rgba(0,0,0,0.9)] w-[218px] py-0 pr-2 pl-10 leading-7 font-normal text-[14px] h-[34px] border-[#dce6f1] align-text-top"
            />
          </div>
          <div className=" w-10 absolute z-[1] top-[7px] left-[2px] m-0 pointer-events-none flex justify-center items-center   ">
            <Search />
          </div>
        </div>
        <nav className=" ml-auto block md:fixed md:left-0 md:bottom-0 md:bg-white md:w-[100%] ">
          <ul className="flex flex-nowrap list-none ">
            <li className={`NavList ${pathname === "/" ? "border-b-2" : ""}`}>
              <Link href="/" className=" NavList__link">
                <HomeIcon className=" text-neutral-600" />
                <span className=" NavList__text">Home</span>
              </Link>
            </li>

            <li
              className={`NavList ${
                pathname === "/mynetwork" ? "border-b-2" : ""
              }`}
            >
              <Link href="/mynetwork" className="NavList__link">
                <PeopleIcon className=" text-neutral-600" />
                <span className="NavList__text">My Network</span>
              </Link>
            </li>

            <li
              className={`NavList ${pathname === "/jobs" ? "border-b-2" : ""}`}
            >
              <Link href="/jobs" className="NavList__link">
                <WorkIcon className=" text-neutral-600" />
                <span className="NavList__text">Jobs</span>
              </Link>
            </li>

            <li
              className={`NavList ${
                pathname === "/message" ? "border-b-2" : ""
              }`}
            >
              <Link href="/message" className="NavList__link">
                <Message className=" text-neutral-600" />
                <span className="NavList__text">Messaging</span>
              </Link>
            </li>

            <li
              className={`NavList ${
                pathname === "/notification" ? "border-b-2" : ""
              }`}
            >
              <Link href="/notification" className="NavList__link">
                <NotificationAdd className=" text-neutral-600" />
                <span className="NavList__text">Notifications</span>
              </Link>
            </li>

            <li
              className={`NavList ${
                pathname === "/profile" ? "border-b-2" : ""
              }`}
            >
              <Link href="/profile" className=" NavList__link">
                <AccountCircle className=" text-neutral-600" />
                <div className="flex items-center justify-center ">
                  <span className=" NavList__text">Me</span>
                  <ArrowDropDownIcon />
                </div>
              </Link>

              <div className=" signOut">
                <a>Sign Out</a>
              </div>
            </li>

            <li
              className={`NavList ${
                pathname === "/business" ? "border-b-2" : ""
              }`}
            >
              <Link
                href="business"
                className="NavList__link flex justify-center"
              >
                <ViewCompactIcon className=" text-neutral-600" />
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
