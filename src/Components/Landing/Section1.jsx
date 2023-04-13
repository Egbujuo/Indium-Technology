import React from "react";
import image1 from "../../Assests/Arrow 2.png";
import image2 from "../../Assests/AdobeStock_170801444 1.png";
import image3 from "../../Assests/AdobeStock_227421922 1.png";
import image4 from "../../Assests/Arrow 2 (1).png";
import image5 from "../../Assests/Vector (24).png";
import image6 from "../../Assests/pathway 1.png";
import "../../styles/Landing/Section1.css";

const Section1 = () => {
  return (
    <div className=" container1 m-auto  section1">
      <div className="w-11/12 m-auto md:hidden">
        <p className=" max-w-lg text-sm text-red-500 text-left font-bold font-mulish ">
          LOREM IPSUM DOLOR SIT AMET
        </p>
        <p className="max-w-lg text-sm text-left font-normal mt-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p className="max-w-lg text-sm text-left font-normal mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className=" text-left mt-3 mb-3">
          <button className="bg-red-700 py-2 px-3 text-xs  text-white rounded-3xl shadow-md hover:bg-red-400 ">
            GET STARTED
          </button>
        </div>
      </div>

      <div className=" w-11/12 m-auto pt-3 md:flex flex-row-reverse md:items-center  ">
        <div className="w-full max-w-3xl md:w-3/5  ">
          <img src={image2} alt="" />
        </div>
        <div className=" lg:max-w-lg    ">
          <div className=" w-full grid justify-start mt-3  ">
            <p className="w-14 text-left">WHO WE ARE</p>
            <img className="w-10 " src={image1} alt="" />
          </div>
          <div className="w-full max-w-3xl mt-3">
            <p className=" max-w-3xl text-sm lg:text-3xl text-red-500 text-right font-bold font-Open Sans  md:text-left">
              Technology investments as a differentiator
            </p>
            <p className=" w-full max-w-sm ms-auto text-right text-sm font-normal mt-2 md:text-left md:m-0 ">
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
          <div className=" w-full text-right mt-3 mb-5 md:text-left">
            <button className="bg-red-700 py-2 px-3 text-xs text-white rounded-3xl shadow-md hover:bg-red-400 ">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      <div className=" w-11/12 m-auto md:flex items-center lg:mt-24  ">
        <div className="w-full max-w-3xl md:w-3/5 ">
          <img src={image3} alt="" />
        </div>
        <div className=" ">
          <div className="w-full m-auto grid justify-end ">
            <p className="w-20 ">WE BUILD FUTURE</p>
            <img className="w-10" src={image4} alt="" />
          </div>

          <div className="md:w-11/12 m-auto">
            <div className="flex gap-5 mb-7 ">
              <img className="w-10 h-12 max-w-xs mt-3 " src={image5} alt="" />
              <div className=" mt-3 ">
                <p className=" max-w-3xl text-sm text-left font-bold font-mulish  ">
                  Our Mission & Vision{" "}
                </p>
                <p className="text-left max-w-xs ">
                  As experienced professionals in the field of software
                  development, user experience, and marketing performance, we
                  are aware of the hard work, dedication, and overall diligence
                  required to prosper in modern-day business.
                </p>
              </div>
            </div>

            <div className="flex gap-5 ">
              <img className="w-10 h-12 max-w-xs mt-3" src={image6} alt="" />
              <div>
                <p className=" max-w-3xl text-sm text-left font-bold font-mulish  ">
                  Our Approach{" "}
                </p>
                <p className="text-left max-w-sm">
                  As a result, we offer our clients with the development of CRM
                  cloud systems, bespoke website development and design, project
                  and R&D management, custom development, and system
                  integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
