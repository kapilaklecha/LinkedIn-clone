import Image from "next/image";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const CommentBox = () => {
  return (
    <div className=" flex items-center gap-1">
      <div className="">
        <Image
          src="/k2.png"
          alt="profile-pic"
          width={40}
          height={40}
          className=" object-cover  rounded-full"
        />
      </div>
      <div className=" border border-black rounded-full p-2 w-[100%] flex justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="comment..."
            className=" outline-none w-[100%] "
          />
        </div>
        <div className=" flex items-center">
          <div className=" rounded-full p-1 hover:bg-hover">
            <SentimentSatisfiedAltIcon />
          </div>
          <div className=" rounded-full p-1 hover:bg-hover">
            <ImageIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
