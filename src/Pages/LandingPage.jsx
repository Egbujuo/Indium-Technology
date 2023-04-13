import React from "react";
import Hero from "../Components/Landing/Hero";
import Secction3 from "../Components/Landing/Secction3";
import Section1 from "../Components/Landing/Section1";
import Section2 from "../Components/Landing/Section2";

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Section1 />
      <Section2 />
      <Secction3 />

      {/* <Footer/> */}
    </div>
  );
};

export default LandingPage;
