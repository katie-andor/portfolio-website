import React from "react";
import internetIcon from "./images/icons-8-internet-icon.png";
import { Link } from "react-router-dom";
import certficates from "./datasets/certdata";
import Footer from "./components/Footer";

const Certifications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Link to="/">
        <img
          className="ml-2 mr-2 w-[40px] pt-[10px]"
          src={internetIcon}
          alt="Internet Icon"
        />
      </Link>
      <div className="flex flex-wrap justify-around h-full mt-4">
        <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2">
          {certficates.map((certification, index) => (
            <div key={index}>
              <img
                className="w-[90%] mr-auto ml-auto"
                src={certification.image}
                alt={certification.caption}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-grow"></div>
      <Footer/>
    </div>
  );
};

export default Certifications;
