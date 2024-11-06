import React from "react";
import internetIcon from "./images/icons-8-internet-icon.png";
import { Link } from "react-router-dom";
import resume from "./images/KAITLYNANDOR_Resume.pdf";
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
      <div className="flex-grow flex justify-center">
        <iframe src={resume} className="w-[90%] h-[80vh]" />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
