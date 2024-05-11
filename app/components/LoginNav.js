"use client";
import React from "react";
import "./LoginNav.css";
//-----------------------LOGOS------------------------------
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupIcon from "@mui/icons-material/Group";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
//---------------------------AUTH-------------------------
import { useUserSession } from "@/Hooks/use-user-session";
import { signInWithGoogle } from "../lib/firebase/auth";
import { createSession, removeSession } from "@/Actions/auth-actions";
import { usePathname } from "next/navigation";

const LoginNav = (session) => {
  const pathname = usePathname();
  const userSessionId = useUserSession(session);
  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
    }
  };
  if (pathname == "/") {
    return (
      <div className="nav pt-3 pb-4 flex items-center justify-between relative flex-nowrap">
        <a href="#">
          <img
            src="/LinkedIn-Blue-14@2x.png"
            alt="LinkedIn"
            className="w-[102px]"
          />
        </a>
        <ul className="flex justify-between flex-wrap">
          <li>
            <a href="#" className="nav_link">
              <NewspaperIcon />
              <span>Article</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav_link">
              <GroupIcon />
              <span>People</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav_link">
              <SmartDisplayIcon />
              <span>Learning</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav_link">
              <BusinessCenterIcon />
              <span>Jobs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav_link border-l-gray-300 border-l-[1px] border-r-[1px]"
            >
              <LaptopMacIcon />
              <span className="sm:text-xs">Get the app</span>
            </a>
          </li>
          <li className="flex items-center">
            <div
              className="button font-medium text-secondary rounded-full py-3 px-6 inline-block  cursor-pointer m-1"
              onClick={handleSignIn}
            >
              Join now
            </div>
            <div
              className="text-primary rounded-full py-3 px-6 border-2 border-primary max-h-[48px] inline-block hover:bg-blue-100 hover:text-black cursor-pointer"
              onClick={handleSignIn}
            >
              Sign In
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default LoginNav;
