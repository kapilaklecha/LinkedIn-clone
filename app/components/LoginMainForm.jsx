"use client";
import React from "react";
import { signInWithGoogle } from "../lib/firebase/auth";
import { createSession, removeSession } from "@/Actions/auth-actions";
import Image from "next/image";

const LoginMainForm = () => {
  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
    }
  };
  return (
    <div className=" max-w-[408px] flex flex-col gap-2">
      <div className="mt-1.5 ">
        <label
          htmlFor="session_key"
          className="text-secondary inline-block mb-1"
        >
          Email
        </label>
        <div className="border border-secondary px-4 py-[14px] rounded hover:border-2 hover:bg-zinc-50">
          <input type="Email" className=" w-full outline-none bg-transparent" />
        </div>
      </div>

      <div className="mt-1.5">
        <label
          htmlFor="session_password"
          className="text-secondary inline-block mb-1"
        >
          Password
        </label>
        <div className="border border-secondary px-4 py-[14px] flex justify-between items-center rounded hover:border-2 hover:bg-zinc-50">
          <input
            type="password"
            className=" w-full outline-none bg-transparent"
          />
          <button className="text-primary">Show</button>
        </div>
      </div>
      <div>
        <div>
          <a href="" className="text-primary mt-2 mb-5 inline-block">
            Forgot password?
          </a>
        </div>
        <button className="text-white rounded-full py-3 px-6 w-full my-2  flex-shrink-0 bg-primary inline-block hover:bg-[#004182]  cursor-pointer">
          Sign In
        </button>
      </div>
      <div className="flex items-center justify-center py-4">
        <div className="flex-1 h-0 border-t border-gray-600 border-opacity-35"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-1 h-0 border-t border-gray-600 border-opacity-35"></div>
      </div>
      <div className=" text-xs text-secondary pb-4  leading-[18px] ">
        <p>
          {"By clicking Continue to join or sign in, you agree to LinkedIn's "}
          <a
            href=""
            className=" text-primary hover:border-b hover:border-primary"
          >
            User Agreement
          </a>
          ,
          <a
            href=""
            className=" text-primary hover:border-b hover:border-primary"
          >
            Privacy Policy
          </a>
          <span> and </span>
          <a
            href=""
            className=" text-primary hover:border-b hover:border-primary"
          >
            Cookie Policy
          </a>
          .
        </p>
        <div
          className="text-black  text-[16px] rounded-full py-3 px-6 w-full 
        border border-secondary
        my-4  flex-shrink-0  
        flex flex-row justify-center  hover:bg-slate-50 hover:border-2 cursor-pointer"
        >
          <Image
            src="/google.png"
            alt="google Auth"
            width={20}
            height={20}
            className=" w-5 mr-2"
          />
          <button onClick={handleSignIn}>Continue with Google</button>
        </div>
        <button
          className="text-black  text-[16px] rounded-full py-4 px-6 w-full 
        border border-secondary
        my-4  flex-shrink-0  
        flex flex-row justify-center  hover:bg-slate-50 hover:border-2 cursor-pointer"
        >
          New to SocialIn? Join now
        </button>
      </div>
    </div>
  );
};

export default LoginMainForm;
