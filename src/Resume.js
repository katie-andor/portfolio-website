import React from "react";
import internetIcon from "./images/icons-8-internet-icon.png";
import { Link } from "react-router-dom";
import resume from "./images/resumepicture.png";
import Footer from "./components/Footer";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Link to="/">
        <img
          className="ml-2 mr-2 w-[40px] pt-[10px]"
          src={internetIcon}
          alt="Internet Icon"
        />
      </Link>
      <div className="w-[90%] sm:w-[650px] md:w-[750px] lg:w-[1000px] mt-2 mb-2 sm:h-[650px] md:h-[600px] lg:h-[600px] xl:h-[42vw] sm:mt-4 md:mt-10 lg:mt-10 xl:mt-0 overflow-y-auto mx-auto">
        <img
          src={resume}
          alt="kaitlyn andor's resume"
          className=""
        />
      </div>
      <div className="flex flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Resume;
