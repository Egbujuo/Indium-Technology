import React from "react";
import icon from "../Assests/image 1.png";
import "../styles/Landing/Footer.css";

const Footer = () => {
  return (
    <div className="container1 ">
      <div className="footer">
        <div className="w-11/12 m-auto ">
          <img width='250px'  src={icon} alt="" />
        </div>
        <ul className="footer-ul ">
          <li className=" font-normal text-sm md:text-lg">
            Home
          </li>
          <li className=" font-normal text-sm md:text-lg">
            About us
          </li>
          <li className=" font-normal text-sm md:text-lg">
            Services
          </li>
          <li className=" font-normal text-sm md:text-lg">
            Careers
          </li>
          <li className=" font-normal text-sm md:text-lg">
            Contact us
          </li>
        </ul>
      </div>
      <div className="md:flex md:w-11/12 justify-between m-auto">
        <p className="font-Open Sans font-normal text-sm">
          © 2021 IndiumTechnologies All Rights Reserved{" "}
        </p>
        <p className="font-Open Sans font-normal text-sm">
          Deák Ferenc utca 23.2.emelet, Budapest, 1052,HU
        </p>
      </div>

    </div>
  );
};

export default Footer;
