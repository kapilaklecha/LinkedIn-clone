import { Search } from "@mui/icons-material";
import React from "react";

const Searchbar = () => {
  return (
    <div className=" bg-[#EDF3F8] flex items-center box-border ml-1 h-[28px] w-[280px] focus:outline-1">
      <div className=" py-2 pl-4 pr-2 flex items-center z-1">
        <Search className="w-4 h-4 " />
      </div>

      <input
        type="text"
        placeholder="Search"
        className=" bg-transparent w-full outline-none"
      />
    </div>
  );
};

export default Searchbar;
