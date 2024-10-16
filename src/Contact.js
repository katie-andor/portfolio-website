import React from "react";
import internetIcon from "./images/icons-8-internet-icon.png";
import { Link } from "react-router-dom";
import Footer from "./components/Footer.js";
import emailpixel from "./images/emailpixel.png";
import phonepixel from "./images/phonepixel.png";
import linkedinpixel from "./images/linkedinpixel.png";
import githubpixel from "./images/githubpixel.png";
import "./App.css";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#AAF5FF] to-[#4C69FF] min-h-screen font-[vt323] flex flex-col">
      <div className="flex-grow">
        <Link to="/">
          <img
            className="ml-2 mr-2 w-[40px] pt-[10px]"
            src={internetIcon}
            alt="Internet Icon"
          />
        </Link>
        <div className="w-[70%] mr-auto ml-auto">
          <div className="bg-white flex items-center">
            <p className="text-[15px] sm:text-[15px] md:text-[18px] lg:text-[6px] xl:text-[25px]">
              Snake
            </p>
          </div>
          <div className="snake-background h-[800px] flex items-center justify-center">
            <div className="bg-[#D9D9D9] h-[528px] w-[60%] border-r-4 border-r-solid border-r-[#616161] border-b-4 border-b-solid border-b-[#616161] border-t-4 border-t-solid border-t-white border-l-4 border-l-solid border-l-white">
              <div className="bg-gradient-to-r from-[#FF5CE7] to-[#FF9315] h-[30px] mr-[8px] ml-[8px] mt-[15px]"></div>
              <div className="flex ml-[8px] mr-[8px] mt-[10px]">
                <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[23px]">
                  &larr;
                </p>
                <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[23px] ml-[8px] mr-[8px]">
                  &rarr;
                </p>
                <div className="bg-white flex w-full items-center">
                  <p className="text-[15px] sm:text-[15px] md:text-[18px] lg:text-[16px] xl:text-[21px]">
                    To: Kaitlyn Andor
                  </p>
                </div>
              </div>
              <div className="bg-white mr-[8px] ml-[8px] mt-[15px] h-[100px] sm:h-[50%] md:h-[60%] lg:h-[80%] xl:h-[75%] border-l-2 border-l-solid border-l-black border-t-2 border-t-solid border-t-black">
                <div className="ml-[5%] mt-[3%]">
                  <div className="flex flex-nowrap justify-begin items-center">
                    <img src={emailpixel} alt="email icon"/>
                    <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[30px]">
                      Email: superkga5678@gmail.com
                    </p>
                  </div>
                  <div className="flex flex-nowrap justify-begin items-center mt-[3%]">
                    <img src={phonepixel} alt="phone icon" />
                    <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[30px]">
                      Phone: 516-743-2591
                    </p>
                  </div>
                  <div className="flex flex-nowrap justify-begin items-center mt-[3%]">
                    <img src={linkedinpixel} alt="linkedin icon" />
                    <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[30px]">
                      LinkedIn: www.linkedin.com/in/kaitlyn-andor
                    </p>
                  </div>
                  <div className="flex flex-nowrap justify-begin items-center mt-[3%]">
                    <img src={githubpixel} alt="github icon" />
                    <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[30px]">
                      GitHub: https://github.com/katie-andor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
