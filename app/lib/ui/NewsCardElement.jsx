import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
const NewsCardElement = ({ title, time, count }) => {
  return (
    <div className=" text-secondary py-1 px-3 hover:bg-hover ">
      <div className=" font-semibold ">{title}</div>
      <div className=" text-[12px]">
        <span>{time.toString()}</span>
        <CircleIcon className=" w-1 h-1 mx-1" />
        {`${count} ${"readers"}`}
      </div>
    </div>
  );
};

export default NewsCardElement;
