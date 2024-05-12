import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";
import Image from "next/image";

const MidSection = () => {
  return (
    <div className=" bg-white  h-fit py-1 rounded-md">
      <div className=" flex flex-row gap-1 shrink-0  mt-1 px-6">
        <a className=" cursor-pointer">
          <Image src="/google.png" width={48} height={48} alt="profile-pic" />
        </a>
        <div className=" max-w- ">
          <div className="">
            <a className=" text-[14px] cursor-pointer">
              AWS Training & Certification
            </a>
            <span className=" text-[14px] text-secondary">{" 2nd "}</span>
          </div>
          <p className=" text-[12px] text-secondary">
            {"Human Resource Executive"}
          </p>
          <div className=" text-[12px] text-secondary flex gap-4">
            <span>{" 21h "} </span>
            <span>{"Edited"}</span>
          </div>
        </div>
        <div className="flex justify-end ml-auto p-1 ">
          <button className="flex items-center   text-primary">
            <AddIcon />
            <span>Follow</span>
          </button>
        </div>
      </div>
      <div className="px-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum
        quo dolor consectetur in a reiciendis illum natus sint aliquam impedit
        ut nobis inventore perspiciatis, commodi eligendi. Minima, et quam!
      </div>
      <div>{false ? <img src="/k2.png" alt="" /> : ""}</div>
      <div className=" flex justify-between items-center  text-[12px] mb-2 text-secondary hover:text-black px-6">
        <a className=" flex items-center cursor-pointer gap-1">
          <ThumbUpIcon className=" w-4" />
          <span>{" 2234 "}</span>
        </a>
        <p>
          <span>{22}</span> comments
        </p>
      </div>
      <div className=" flex items-center justify-between text-secondary py-2 border-t px-6">
        <ButtonB text={"Like"} logo={<ThumbUpIcon />} />
        <ButtonB text={"Comment"} logo={<ModeCommentIcon />} />
        <ButtonB text={"Share"} logo={<ShareIcon />} />
      </div>
    </div>
  );
};

const ButtonB = ({ text, logo }) => {
  return (
    <button className=" flex items-center gap-1 px-4 py-2 hover:text-black hover:bg-hover">
      {logo}
      <span>{text}</span>
    </button>
  );
};

export default MidSection;
