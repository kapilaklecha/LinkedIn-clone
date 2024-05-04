import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";
const MidSection = () => {
  return (
    <div className=" bg-white px-6 h-fit py-1">
      <div className=" flex flex-row gap-1 shrink-0  mt-1">
        <a href="">
          <img src="/google.png" width={"48px"} height={"48"} alt="" />
        </a>
        <div className=" max-w- ">
          <div className="">
            <a href="" className=" text-[14px]">
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
          <a href="" className="flex items-center   text-primary">
            <AddIcon />
            <span>FOLLOW</span>
          </a>
        </div>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum
        quo dolor consectetur in a reiciendis illum natus sint aliquam impedit
        ut nobis inventore perspiciatis, commodi eligendi. Minima, et quam!
      </div>
      <div>{false ? <img src="/k2.png" alt="" /> : ""}</div>
      <div className=" flex justify-between items-center  text-[12px] mb-2 text-secondary hover:text-black">
        <a href="" className=" flex items-center gap-1">
          <ThumbUpIcon className=" w-4" />
          <span>{" 2234 "}</span>
        </a>
        <p>
          <span>{22}</span> comments
        </p>
      </div>
      <div className=" flex items-center justify-between text-secondary py-2 border-t ">
        <div className=" flex items-center gap-1 hover:text-black">
          <ThumbUpIcon />
          <span>Like</span>
        </div>
        <div className=" flex items-center gap-1 hover:text-black">
          <ModeCommentIcon />
          <span>Comment</span>
        </div>
        <div className=" flex items-center gap-1 hover:text-black">
          <ShareIcon />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
