import React from "react";
import Nav from "../components/mainpage/Nav";
import "./Main.css";
import MidSection from "../components/mainpage/MidSection";
import MidLeftSection from "../components/mainpage/MidLeftSection";

const Main = () => {
  return (
    <div className="">
      <div className="">
        <Nav />
      </div>
      <MidLeftSection />
    </div>
  );
};

export default Main;
