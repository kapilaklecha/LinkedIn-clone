import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import Image from "next/image";

const PostComponent = () => {
  return (
    <div className=" bg-white  mb-1 px-6 pt-4 pb-2 rounded-md md:hidden">
      <div className=" flex  flex-row gap-2 box-border">
        <a className=" flex items-center ">
          <div className=" h-[48px] w-[48px] ">
            <Image
              src="/k2.png"
              alt=""
              width={48}
              height={48}
              className="rounded-full w-full h-full "
            />
          </div>
        </a>

        <button className=" border rounded-full border-secondary  w-[100%]   flex items-center px-2  hover:bg-hover">
          <span className=" font-medium">Start a post</span>
        </button>
      </div>
      <div className=" flex items-center justify-around py-4">
        <button className=" flex items-center px-2 py-2 text-secondary hover:bg-hover hover:text-black">
          <div>
            <ImageIcon />
          </div>
          Media
        </button>
        <button className=" flex items-center px-2 py-2 text-secondary hover:bg-hover hover:text-black">
          <div>
            <CalendarMonthIcon />
          </div>
          Event
        </button>
        <button className=" flex items-center px-2 py-2 text-secondary hover:bg-hover hover:text-black">
          <div>
            <ArticleIcon />
          </div>
          Article
        </button>
      </div>
    </div>
  );
};

export default PostComponent;
