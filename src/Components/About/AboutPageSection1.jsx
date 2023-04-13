import React from "react";
import image1 from "../../Assests/Arrow 2.png";
import image2 from "../../Assests/AdobeStock_170801444 1 (1).png";
import image3 from "../../Assests/AdobeStock_227421922 1 (1).png";
import image4 from "../../Assests/Arrow 2 (1).png";


const AboutPageSection1 = () => {
  return (
    <div className=" container1 pt-7  section1">
      <div className="md:hidden w-11/12 m-auto">
        <p className=" max-w-xl text-sm text-red-500 text-left font-bold font-mulish ">
          LOREM IPSUM DOLOR SIT AMET
        </p>
        <p className="max-w-xl text-sm text-left font-normal mt-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p className="max-w-xl text-sm text-left font-normal mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="w-11/12 m-auto md:flex flex-row-reverse md:gap-8 items-center justify-around ">
        <div className="md:w-full md:max-w-lg mt-14 ">
          <img src={image2} alt="" />
        </div>
        <div className=" w-full md:max-w-md max-w-3xl ">
          <div className="text-left mt-3 ">
            <p className="w-20  font-normal font-Open Sans text-xl  ">
              WE ARE TECH
            </p>
            <img className="w-10 " src={image1} alt="" />
          </div>
          <div className="w-full sm:text-right md:text-left mt-3">
            <p className=" text-sm lg:text-2xl text-right md:text-left text-red-500 font-bold font-Open Sans  ">
              LOREM IPSUM DOLOR SIT AMET SIT AMET
            </p>
            <p className=" w-full max-w-xl ms-auto text-right text-sm font-normal mt-2 md:text-left md:m-0">
              No forced partnership technology here. We focus on the right
              solution to drive our clients’ business forward and employ a
              technology-agnostic approach for all needed stages of the activity
              cycle, allowing access to current, robust, and advanced solutions.
              Paramount to this is ensuring the security and compliant use of
              all information. In the end, it’s not just technology; we ensure
              our methodologies, staff, industry knowledge, and governance align
              with the technology to drive the right client results.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-11/12 m-auto mt-3 md:flex md:gap-8 justify-around  md:items-center ">
        <div className=" md:w-full md:max-w-lg mt-14">
          <img className="w-full" src={image3} alt="" />
        </div>
        <div className=" w-full md:max-w-md max-w-3xl mt-3 ">
          <div className="grid justify-end mt-3 max-w-2xl ">
            <p className="w-20 font-normal font-Open Sans text-xl  ">
              WE ARE DIGITAL
            </p>
            <img className="w-10 ms-8" src={image4} alt="" />
          </div>
          <div className="w-full max-w-lg text-left mt-3 ">
            <p className="text-sm lg:text-2xl text-red-500 font-bold font-Open Sans mb-3 ">
              LOREM IPSUM DOLOR SIT AMET SIT AMET
            </p>
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageSection1;
