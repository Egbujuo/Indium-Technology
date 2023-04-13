import React from "react";
import image1 from "../../Assests/Arrow 2.png";
import img1 from "../../Assests/support 1.png";
import img2 from "../../Assests/Group (4).png";
import img3 from "../../Assests/Page 1 (1).png";
import "../../styles/About/AboutSection2.css";

const AboutPageSection2 = () => {
  return (
    <div className="container1 aboutSection2 xl:pt-36">
      <div className="w-9/12 m-auto mb-4 about-container-wrap ">
        <p className="w-14 text-left">OUR PRODUCTS</p>
        <img className="w-10 " src={image1} alt="" />
      </div>

      <div className="w-full max-w-4xl m-auto flex gap-5 justify-center  about-container-wrap">
        <div className="about-section2-wrap1 w-11/12 p-2 ">
          <div className="w-1/5 m-auto mt-7">
            <img src={img1} alt="" />
          </div>
          <p className="font-Open Sans text-2xl font-bold mt-3">
            System Integration
          </p>
          <p className="h-40 w-96 max-w-xs mt-3 ">
            In today’s digital world, the ability to effectively integrate
            across different systems, data sources, and channels is fundamental.
            Indium technologies has a long history of successfully and
            efficiently integrating a variety of client-based systems
          </p>
        </div>

        <div className="w-11/12 p-2 about-section2-wrap2">
          <div className="w-1/5 m-auto mt-7 about-section2-img">
            <img src={img2} alt="" />
          </div>
          <p className="font-Open Sans text-2xl font-bold mt-3">IT Services</p>
          <p className="h-40 w-96 max-w-xs mt-3">
            While you focus on delivering the best products or services you can
            to your customers, we provide the support you need to keep up with
            industry demands and emerging trends
          </p>
        </div>

        <div className="11/12 p-2 about-section2-wrap1">
          <div className="w-1/5 m-auto mt-7">
            <img src={img3} alt="" />
          </div>
          <p className="font-Open Sans text-2xl font-bold mt-3">
            Process Optimization
          </p>
          <p className="h-40 w-96 max-w-xs mt-3">
            Improve efficiencies by leveraging methodology and productivity
            tools. Re-energize workforce management to identify saving
            opportunities, optimize contacts or enhance front-/back-office
            productive output
          </p>
        </div>
      </div>
      <div className="w-full m-auto pt-28 pb-10">
        <p className=" font-Open Sans font-bold text-3xl text-rose-600 ">
          Sounds Great?! Let’s work together!
        </p>
        <button className="about-section2-btn mt-5">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default AboutPageSection2;
