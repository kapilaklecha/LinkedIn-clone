import React from "react";
import InfoIcon from "@mui/icons-material/Info";

import NewsCardElement from "@/app/lib/ui/NewsCardElement";
const RightSection = () => {
  return (
    <div className=" w-[100%] min-w-[225px]">
      <div className="  bg-white rounded-md   py-1  ">
        <div className=" text-[20px] font-bold flex items-center justify-between py-1 px-3 ">
          <h2> LinkedIn News</h2>
          <InfoIcon className=" w-3 h-3" />
        </div>
        <div className=" text-[16px] px-3 ">Top stories</div>

        <NewsCardElement title={"This is the news"} time={"2h"} count={1123} />
      </div>
    </div>
  );
};

export default RightSection;
