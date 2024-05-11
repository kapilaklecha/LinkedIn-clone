import React from "react";
import AddIcon from "@mui/icons-material/Add";

const PostComponent = () => {
  return (
    <div className=" bg-white  mb-1 px-6 py-4  rounded-md">
      <div className=" flex  flex-row gap-2 box-border">
        <a className=" flex items-center ">
          <div className=" h-[48px] w-[48px] ">
            <img src="/k2.png" alt="" className="rounded-full w-full h-full " />
          </div>
        </a>

        <button className=" border rounded-full border-secondary  w-[100%]   flex items-center px-2  hover:bg-hover">
          <span className=" font-medium">Start a post</span>
        </button>
      </div>
      <div className=" flex items-center justify-around py-4">
        <button className=" flex items-center">
          <div>
            <AddIcon />
          </div>
          Media
        </button>
        <button className=" flex items-center">
          <div>
            <AddIcon />
          </div>
          Media
        </button>
        <button className=" flex items-center">
          <div>
            <AddIcon />
          </div>
          Media
        </button>
      </div>
    </div>
  );
};

export default PostComponent;
