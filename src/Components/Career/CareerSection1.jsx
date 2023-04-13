import React from "react";
import  "../../styles/Career/CareerSection1.css";
import image1 from "../../Assests/Arrow 2.png";
import { Link } from "react-router-dom";

const CareerSection1 = () => {
  return (
    <div className="career-section1 container1">
      <div className=" w-11/12 max-w-4xl m-auto text-left mt-3 ">
        <p className="w-26  font-normal font-Open Sans text-xl  ">
          JOIN OUR TEAM OF <br /> PROFESSIONALS
        </p>
        <img className="w-10   " src={image1} alt="" />
      </div>

      <div className="w-11/12 max-w-4xl mt-8 m-auto flex justify-between bg-white py-2 px-3">
        <div>
            <p className="text-red-400">UI/UX Desginer</p>
        </div>
        <Link to="/careerPro" className="flex items-center gap-1 ">
            <p className="text-red-400 more-details">More details </p>
            <div>
            <img className="w-6" src={image1} alt="" />
            </div>
        </Link>
      </div>
      <div className="w-11/12 max-w-4xl mt-1 m-auto flex justify-between bg-white py-2 px-3">
        <div className="">
            <p className="text-red-400 font-normal">Full-Stack Developer</p>
        </div>
        <Link to="/careerPro" className="flex items-center gap-1 ">
            <p className="text-red-400 more-details">More details </p>
            <div>
            <img className="w-6" src={image1} alt="" />
            </div>
        </Link>
      </div>
      <div className="w-11/12 mt-1 max-w-4xl m-auto flex justify-between bg-white py-2 px-3 ">
        <div>
            <p className="text-red-400">Automation QA</p>
        </div>
        <Link to="/careerPro" className="flex items-center gap-1 ">
            <p className="text-red-400 more-details">More details </p>
            <div>
            <img className="w-6" src={image1} alt="" />
            </div>
        </Link>
      </div>































    </div>
  );
};

export default CareerSection1;
