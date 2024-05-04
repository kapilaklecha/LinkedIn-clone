import React from "react";
import Nav from "../components/mainpage/Nav";
import "./Main.css";
import MidSection from "../components/mainpage/MidSection";
import MidLeftSection from "../components/mainpage/MidLeftSection";
import RightSection from "../components/mainpage/RightSection";

const Main = () => {
  return (
    <div className=" ">
      <div className="">
        <Nav />
      </div>
      <div className="px-6 md:px-0">
        <div className=" box-border max-w-[1128px] m-auto mt-6  flex justify-between gap-4 md:flex-wrap md:mt-0 ">
          <div className=" w-[100%] max-w-[225px] flex-shrink md:hidden">
            <MidLeftSection />
          </div>
          <div className=" w-[100%] min-w-[440px] ">
            <MidSection />
          </div>

          <div className="w-[100%] max-w-[225px] md:hidden ">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
