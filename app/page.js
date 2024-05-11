"use client";
import LoginNav from "./components/LoginNav";
import LoginMainForm from "./components/LoginMainForm";
import Buttons, { BlueBtn } from "./lib/Buttons";
import { exploreData } from "./lib/data";

const loginPage = () => {
  return (
    <div className="md:px-4  ">
      <main className="flex flex-col items-center overflow-hidden min-h-[calc(100vh-76px-50px)] lg:p-2">
        <section className=" max-w-[1128px]  relative flex w-[100%] items-center  flex-nowrap  md:flex-col">
          <div className=" self-start  relative flex-shrink-0 w-[55%] pr-[42px] md:w-full md:pr-0">
            <h1 className=" main-heading text-[56px] text-[#B24020] font-thin pb-6 md:text-[32px] md:leading-10 md:pt-4">
              Welcome to your professional community
            </h1>
            <LoginMainForm />
          </div>

          <img
            src="/asset.svg"
            alt=""
            className=" relative z-[-1] w-[700px] h-[560px]  md:h-[214px] md:static"
          />
        </section>
        <section className=" max-w-[1128px] flex flex-wrap items-center  md:flex-col ">
          <div className="mr-[72px] py-[60px] self-start shrink-0  w-[408px] md:w-fit md:mb-6">
            <h2 className=" secondary-heading">
              Explore Collaberative atricle
            </h2>
            <p className="etta-text font-extralight">
              We’re unlocking community knowledge in a new way. Experts add
              insights directly into each article, started with the help of AI.
            </p>
          </div>
          <div className=" flex flex-wrap flex-shrink max-w-[648px] md:ml-1">
            {exploreData.map((val, i) => (
              <Buttons key={`button_${i}0`} name={val} />
            ))}
            <BlueBtn name={"Show all"} />
          </div>
        </section>
        <section className=" max-w-[1128px] flex flex-wrap items-center py-[60px]  relative md:flex-col ">
          <div className="mr-[72px]  self-start shrink-0  w-[408px] md:w-fit md:mb-6">
            <h2 className=" secondary-heading ">
              Find the right job or internship for you
            </h2>
          </div>
          <div>
            <h3 className=" mb-5 text-gray-500 text-[14px]">
              SUGGESTED SEARCHES
            </h3>

            <div className=" flex flex-wrap flex-shrink  items-center  max-w-[648px]  md:ml-1">
              {exploreData.map((val, i) => (
                <Buttons key={`button_${i}`} name={val} />
              ))}
              <BlueBtn name={"Show all"} />
            </div>
          </div>
        </section>
        <section className=" bg-[#f1ece5] w-full flex items-center justify-center">
          <div className=" max-w-[1128px] flex flex-wrap items-center py-[60px] w-full  relative md:flex-col  ">
            <div className="mr-[72px]  self-start shrink-0  w-[408px] md:w-fit md:mb-6 before:contents">
              <h2 className=" tertiary-heading ">
                Post your job for millions of people to see
              </h2>
            </div>
            <div className=" flex flex-wrap flex-shrink  items-center  max-w-[648px]  md:ml-1 ">
              <BlueBtn name={"Post a job"} />
            </div>
          </div>
        </section>
        <section className=" max-w-[1128px] flex flex-wrap items-center py-[60px]  relative md:flex-col ">
          <div className="mr-[72px]  self-start shrink-0  w-[408px] md:w-fit md:mb-6">
            <h2 className=" secondary-heading ">
              Discover the best software tools
            </h2>
            <p className="etta-text font-extralight">
              Connect with buyers who have first-hand experience to find the
              best products for you.
            </p>
          </div>
          <div>
            <h3 className=" mb-5 text-gray-500 text-[14px] font-medium">
              SUGGESTED TOOLS
            </h3>

            <div className=" flex flex-wrap flex-shrink  items-center  max-w-[648px]  md:ml-1">
              {exploreData.map((val, i) => (
                <Buttons key={`button_${i}2`} name={val} />
              ))}
              <BlueBtn name={"Show all"} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default loginPage;
