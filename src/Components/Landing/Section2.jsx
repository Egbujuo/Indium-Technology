import React from "react";
import image1 from "../../Assests/Arrow 2.png";
import img1 from "../../Assests/Group (3).png";
import img2 from "../../Assests/support 1.png";
import img3 from "../../Assests/Page 1 (1).png";
import "../../styles/Landing/Section2.css";

const Section2 = () => {
  return (
    <div className="container1 section2 ">
      <div className="our-product">
        <p className="w-14 text-left">OUR PRODUCTS</p>
        <img className="w-10 " src={image1} alt="" />
      </div>

      <div className="wrap">
        <div className="w-full m-auto">
          <div className="section2-icon">
            <img src={img2} alt="" />
            <p className="md:hidden font-extrabold text-lg font-Mulish h-7">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="section2-text ">
            <p className="font-bold font-Open Sans section2-text1">
              System Integration
            </p>
            <p className="font-Open Sans font-normal section2-text2">
              In today’s digital world, the ability to effectively integrate
              across different systems, data sources, and channels is
              fundamental. Indium technologies has a long history of
              successfully and efficiently integrating a variety of client-based
              systems
            </p>
            <button className="font-bold text-sm font-Open Sans section2-btn">
              READ MORE
            </button>
          </div>
        </div>

        <div className="w-full middle-text">
          <div className="section2-icon">
            <img src={img1} alt="" />
            <p className="md:hidden font-extrabold text-lg font-Mulish h-7">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="section2-text">
            <p className="font-bold font-Open Sans section2-text1">
            IT Services
            </p>
            <p className="font-Open Sans  font-normal section2-text2">
              While you focus on delivering the best products or services you
              can to your customers, we provide the support you need to keep up
              with industry demands and emerging trends
            </p>
            <button className="font-bold text-sm font-Open Sans section2-btn">
              READ MORE
            </button>
          </div>
        </div>

        <div className="w-full last-text">
          <div className="section2-icon ">
            <img src={img3} alt="" />
            <p className="md:hidden font-extrabold text-lg font-Mulish h-7">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="section2-text">
            <p className="font-bold font-Open Sans section2-text1">
              Process Optimization
            </p>
            <p className="font-Open Sans  font-normal section2-text2">
              Improve efficiencies by leveraging methodology and productivity
              tools. Re-energize workforce management to identify saving
              opportunities, optimize contacts or enhance front-/back-office
              productive output
            </p>
            <button className="font-bold text-sm font-Open Sans section2-btn">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
