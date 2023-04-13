import React from "react";
import img1 from "../../Assests/AdobeStock_170801444 1 (1) 1.png";
import img2 from "../../Assests/AdobeStock_227421922 1 (1) 2.png";
import img3 from "../../Assests/AdobeStock_170801444 1 (1) 3.png";
import img4 from "../../Assests/033   UI Data Information.png";
import img5 from "../../Assests/Group (3).png";
import img6 from "../../Assests/website support.png";
import "../../styles/Service/ServiceSection1.css";

const ServiceSection1 = () => {
  return (
    <div className="container1 section1 ">
      <div className="md:hidden pt-7 pb-14  ">
        <p className=" w-11/12 m-auto max-w-xl text-sm text-red-500 text-left font-bold font-mulish ">
          LOREM IPSUM DOLOR SIT AMET
        </p>
        <p className= "w-11/12 m-auto  max-w-xl text-sm text-left font-normal mt-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p className="w-11/12 m-auto max-w-xl text-sm text-left font-normal mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="md:pt-28 ">
        <div className="w-full pb-24 md:pb-0  md:flex flex-row-reverse md:w-11/12 lg:w-9/12 md:ms-auto service-section1-wrap">
          <div className="w-full max-w-3xl  ">
            <img src={img1} alt="" />
          </div>
          <div className="w-full md:text-left lg:w-9/12 lg:h-52 md:px-3">
            <div className="w-full mt-5 service-Img">
              <img className="w-1/5" src={img5} alt="" />
            </div>
            <p className="text-sm lg:text-2xl mt-3 text-right ms-auto w-11/12 m-auto max-w-lg md:text-left text-red-500 font-bold font-Open Sans ">
              SYSTEM INTEGRATION
            </p>
            <p className="w-11/12 m-auto max-w-lg mt-3 ms-auto text-right text-sm font-normal md:text-left ">
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

        <div className="w-full pb-24 md:pb-0 md:mt-24 md:flex md:w-11/12 lg:w-9/12 md:me-auto service-section1-wrap">
          <div className="w-full max-w-3xl ">
            <img src={img2} alt="" />
          </div>
          <div className="w-full md:text-right lg:w-9/12 lg:h-52 md:px-3">
            <div className="w-full  mt-5  service-Img">
                <img className="w-1/5" src={img6} alt="" />
            </div>
            <p className="text-sm lg:text-2xl mt-3 text-left me-auto w-11/12 m-auto max-w-lg  text-red-500 font-bold font-Open Sans ">
              IT SERVICES
            </p>
            {/* <p className="w-11/12 m-auto max-w-lg mt-3 me-auto text-left text-sm font-normal  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
            <p className="w-11/12 m-auto max-w-lg mt-1 me-auto text-left text-sm font-normal ">
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

        <div className="w-full pb-16 md:pb-0 md:mt-24 md:flex flex-row-reverse md:w-11/12 lg:w-9/12 md:ms-auto service-section1-wrap">
          <div className="w-full max-w-3xl ">
            <img src={img3} alt="" />
          </div>
          <div className="w-full md:text-left lg:w-9/12 lg:h-52 md:px-3">
            <div className="w-full mt-5 service-Img">
              <img className="w-1/5" src={img4} alt="" />
            </div>
            <p className="text-sm lg:text-2xl mt-3 text-right ms-auto w-11/12 m-auto max-w-lg md:text-left text-red-500 font-bold font-Open Sans ">
              PROCESS OPTIMIZATION
            </p>
            {/* <p className="w-11/12 m-auto max-w-lg mt-3 ms-auto text-right text-sm font-normal md:text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
            <p className="w-11/12 m-auto max-w-lg mt-1 ms-auto text-right text-sm font-normal md:text-left ">
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

      <div className="w-full m-auto pt-24 pb-10 ">
        <p className=" font-Open Sans font-bold text-3xl text-rose-600 ">
          Sounds Great?! Let’s work together!
        </p>
        <button className="service-section2-btn mt-5">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ServiceSection1;
