import React from "react";
import TryIcon from "@mui/icons-material/Try";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const MidLeftSection = () => {
  return (
    <div className=" max-w-[225px] bg-white rounded-md mt-5">
      <div className=" h-[56px] max-w-[225px] ">
        <img
          src="/k2.png"
          alt=""
          className="w-[100%] h-[100%] object-cover rounded-t-md"
        />
      </div>
      <div className=" p-3">
        <a href="" className=" flex flex-col justify-center">
          <div className=" self-center relative w-fit h-fit">
            <img
              src="/k2.png"
              alt=""
              width={"72px"}
              height={"72px"}
              className="rounded-full border-2 border-white  mt-[-56px] mb-2"
            />
          </div>
          <div className=" mx-auto font-bold mb-1 mt-2">{"Kapil Aklecha"}</div>
        </a>
        <div>
          <p className=" text-center text-secondary text-[12px]">
            {"Passionate ReactJs Developer"}
          </p>
        </div>
      </div>
      <div className=" border-y">
        <a
          href=""
          className=" flex justify-between px-[12px] py-1 text-[12px] hover:bg-hover "
        >
          <div className="text-secondary">Profile Views</div>
          <div>
            <span className=" text-primary">
              <strong>24</strong>
            </span>
          </div>
        </a>
        <a
          href=""
          className=" flex justify-between px-[12px] py-1 text-[12px] hover:bg-hover "
        >
          <div>
            <div className="text-secondary">Connections</div>
            <div className=" font-semibold"> Grow your network</div>
          </div>
          <div>
            <span className=" text-primary">
              <strong>24</strong>
            </span>
          </div>
        </a>
      </div>
      <div className=" group  text-[12px]  cursor-pointer placeholder py-1 px-3 hover:bg-hover">
        <a href="">
          <h3>Get hired 2.6x faster with Premium</h3>
          <div className=" my-1">
            <span>
              {" "}
              <span>
                <TryIcon className=" w-4 text-secondary group-hover:text-black" />
              </span>{" "}
              <span className=" group-hover:text-primary font-semibold">
                Try for $0
              </span>
            </span>
          </div>
        </a>
      </div>
      <div className="group px-3 py-1 text-[12px] font-semibold hover:bg-hover">
        <BookmarkIcon className=" w-4  text-secondary group-hover:text-black" />
        {"  "}
        <span className=" group-hover:text-black">Save items</span>
      </div>
    </div>
  );
};

export default MidLeftSection;
