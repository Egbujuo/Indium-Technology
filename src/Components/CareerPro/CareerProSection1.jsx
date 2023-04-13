import React from "react";
import "../../styles/CareerPro/CareerProSection1.css";
import img1 from "../../Assests/Group (4) 1.png";

const CareerProSection1 = () => {
  return (
    <div className="container1 bg-slate-100">
      <div className="w-11/12 m-auto pt-10 pb-28">
        <p className=" max-w-lg text-sm md:text-2xl text-red-500 text-left font-bold font-mulish ">
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
      </div>

      <div className="w-11/12 m-auto text-start">
        <p className="font-bold text-2xl mb-10 text-red-600">
          APPLY FOR UI/UX DESIGNER
        </p>
        <p className=" text-gray-600 mb-4">
          As a UX / UI Designer, you’ll possess the creative vision that will
          cater to the need and requirements of our clients. Hence, you will be
          in charge of defining design objectives and opportunities, conducting
          UX and user research, building visual language, designing
          high-converting experiences, and work with our developers on a daily
          basis to ensure we are delivering creative work that sets a new
          standard in the field.
        </p>

        <p className="text-lg text-gray-600 mb-4"> What are we looking for?</p>
        <div className="px-3 ">
          <li className="text-gray-600">
            {" "}
            Ability to develop UI mockups and prototypes.
          </li>
          <li className="text-gray-600">
            {" "}
            Creating original graphic designs e.g. images, sketches and tables.
          </li>
          <li className="text-gray-600">
            {" "}
            Preparing and presenting rough drafts to internal teams and key
            stakeholders.
          </li>
          <li className="text-gray-600">
            {" "}
            Crafting the UX journey and proposed functionality to enable
            software developers to bring to life intuitively usable product
            features and functionality.
          </li>
          <li className="text-gray-600">
            {" "}
            Collaborating with the technical designer, architect and software
            development team of each of the products to align on the
            implementation of new
          </li>
          <li className="text-gray-600"> features and functionality.</li>
          <li className="text-gray-600 ">
            {" "}
            Finding creative ways to solve UX problems (e.g. usability,
            findability) within the constraints of existing products and their
            technical design.
          </li>
        </div>

        <p className="text-gray-600 mt-6">
          The successful candidate will possess the following skills and
          capabilities:
        </p>

        <p className="text-gray-600 mt-4">Requirements: </p>

        <div className="mt-5 px-3">
          <li className="text-gray-600">
            3+ years’ experience as a UI / UX designer on complex web
            applications, mobile experience is a plus
          </li>
          <li className="text-gray-600">English working proficiency</li>
          <li className="text-gray-600">
            Excellent verbal and written communication skills
          </li>
          <li className="text-gray-600"> Excellent visual design skills</li>
          <li className="text-gray-600">Wireframing and UI prototyping</li>
          <li className="text-gray-600">
            Ability to communicate effectively with teams working remotely
          </li>
          <li className="text-gray-600">Creative thinker with a vision</li>
          <li className="text-gray-600">Attention to detail and aesthetics</li>
          <li className="text-gray-600">
            Motivation to work on a product with true purpose
          </li>
          <li className="text-gray-600">
            {" "}
            Experience with Sketch or similar tools
          </li>
        </div>
      </div>
      <div className="w-11/12 m-auto pt-5">

        <div className="careerPro-input">
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
        </div>

        <div className="input2 pt-4">
          <input type="text" placeholder="phone"/>
          <div className="w-full  md:w-6/12 m-auto">
          <img width='30px' src={img1} alt="" />
          </div>
        </div>

        <div className="mt-2 mb-2 input3">
          <textarea className="w-full" name="" id="" cols="30" rows="4" placeholder="Cover letter"></textarea>
        </div>
      <div className="text-end md:text-start pb-14">
        <button className=" text-xs text-white font-bold bg-red-500 rounded-full px-2 py-2">Send Application</button>
      </div>
      </div>
    </div>
  );
};

export default CareerProSection1;
