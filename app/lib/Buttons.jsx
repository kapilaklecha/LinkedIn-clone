import React from "react";

export const Buttons = ({ name }) => {
  return (
    <a
      href=""
      className=" btn-md flex items-center mr-1.5 mb-3 shadow-border shadow-slate-900 w-fit "
    >
      {name}
    </a>
  );
};

export const BlueBtn = ({ name }) => {
  return (
    <a
      href=""
      className=" btn-md text-primary flex shadow-border-blue items-center mr-1.5 mb-3 shadow-primary w-fit"
    >
      {name}
    </a>
  );
};

export default Buttons;
