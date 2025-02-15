import React from "react";
import internetIcon from "./images/icons-8-internet-icon.png";
import mypicturecopy from "./images/my-picture.png";
import minesweeper from "./images/minesweeper.png";
import clippy from "./images/clippy.png";
import thumbtack from "./images/thumbtack.png";
import minimize from "./images/minimize.png";
import close from "./images/close.png";
import menubars from "./images/menubars.png";
import portfolio from "./images/portfolio.png";
import aboutme from "./images/aboutme.png";
import resume from "./images/resume.png";
import contact from "./images/contact.png";
import skillsdata from "./skillsdata";
import { Link } from "react-router-dom";
import Footer from "./components/Footer.js";
import "./App.css";

const Home = (props) => {
  return (
    <div className="bg-gradient-to-r from-[#AAF5FF] to-[#4C69FF] min-h-screen font-[vt323] flex flex-col">
      <Link to="/">
        <img
          className="ml-2 mr-2 w-[40px] pt-[10px]"
          src={internetIcon}
          alt="Internet Icon"
        />
      </Link>

      <div
        className="
        flex-grow
        mt-[1%]
        grid gap-4 m-8
        grid-cols-1
        sm:grid-cols-[50%_23%_23%]
        md:grid-cols-[50%_23%_23%]
        lg:grid-cols-[33%_31%_34%]
        xl:grid-cols-[33%_31%_34%]
      "
      >
        <div
          className="bg-[#FFD5E2] p-8 sm:col-span-1 lg:row-span-2 pt-[1%] pb-[0%] pr-[2%] pl-[5%]"
          style={{ boxShadow: "11px 11px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex justify-center items-center">
            <img
              src={thumbtack}
              alt="a cartoon thumbtack"
              className="translate-x-[-60%] w-[40px] sm:w-[50px] md:w-[50px] lg:w-[50px] xl:w-[60px]"
            />
          </div>
          <h1 className="text-[30px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-[65px] leading-none mt-[1%] mb-[1%]">
            PROJECTS:
          </h1>
          <h2 className="text-[23px] sm:text-[23px] md:text-[30px] lg:text-[30px] xl:text-[38px] leading-none">
            Esports Research Website:
          </h2>
          <ul className=" list-disc text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[27px] ml-[8%]">
            <li>Uses WordPress, Divi Theme Builder</li>
            <li>esportsresearch.net</li>
          </ul>
          <h2 className="text-[23px] sm:text-[23px] md:text-[30px] lg:text-[30px] xl:text-[38px] leading-none">
            Cuphead Fan Wiki:
          </h2>
          <ul className=" list-disc text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[27px] ml-[8%]">
            <li>Uses React.js, HTML, and CSS</li>
            <li>cupheadfanwiki.netlify.app</li>
          </ul>
          <h2 className="text-[23px] sm:text-[23px] md:text-[30px] lg:text-[30px] xl:text-[38px] leading-none">
            GitHub:
          </h2>
          <ul className=" list-disc text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[27px] ml-[8%]">
            <li>https://github.com/katie-andor</li>
          </ul>
          <img
            className="hidden sm:block md:block lg:hidden xlg:hidden h-1/3 mr-auto ml-auto mt-[4%]"
            src={clippy}
            alt="clippy from early windows"
          />
        </div>

        <div className="bg-[#FFFCBC] border-2 border-[black] border-solid rounded-[18px] ml-[1%] p-[2%] pb-[4%] sm:col-span-2 md:col-span-2 lg:col-span-2 h-full">
          <h2 className="text-[23px] sm:text-[23px] md:text-[30px] lg:text-[30px] xl:text-[38px] leading-none pt-[2%]">
            My Skills Include:
          </h2>
          <div className="flex flex-wrap justify-around h-full">
            {skillsdata.map((skill, index) => (
              <div
                key={index}
                className="text-center text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[27px]"
              >
                <img
                  className="w-[40%] sm:w-[60%] md:w-[80%] lg:w-[80%] xl:w-[100%] mr-auto ml-auto"
                  src={props.image || skill.image}
                  alt={skill.caption}
                />
                <p>{skill.caption}</p>
              </div>
            ))}
          </div>
        </div>

        
        <img
          className="hidden sm:hidden md:hidden lg:block xlg:block w-[30%] mx-auto sm:col-span-1 md:col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 h-full"
          src={clippy}
          alt="clippy from early windows"
        />

        <div className="bg-[#D9D9D9] w-full sm:col-span-1 md:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 h-full border-r-4 border-r-solid border-r-[#616161] border-b-4 border-b-solid border-b-[#616161]">
          <div className="bg-gradient-to-r from-[#FFF85C] to-[#FF9315] flex flex-nowrap justify-end items-center h-[20px] sm:h-[20px] md:h-[30px] lg:h-[30px] xlg:h-[30px] mr-[8px] ml-[8px] mt-[15px]">
            <div className="">
              <img
                src={minimize}
                alt="minimize button"
                className="mr-auto ml-auto w-[13px] sm:w-[13px] md:w-[16px] lg:w-[16px] xlg:w-[16px]"
              />
            </div>
            <div className="ml-[15px] mr-[6px]">
              <img
                src={close}
                alt="close button"
                className="mr-auto ml-auto w-[13px] sm:w-[13px] md:w-[16px] lg:w-[16px] xlg:w-[16px]"
              />
            </div>
          </div>
          <div className="flex ml-[8px] mr-[8px] mt-[10px]">
            <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[23px]">
              &larr;
            </p>
            <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[23px] ml-[8px] mr-[8px]">
              &rarr;
            </p>
            <div className="bg-white flex w-full items-center">
              <p className="text-[15px] sm:text-[15px] md:text-[18px] lg:text-[16px] xl:text-[21px]">
                "C:\Users\Katie\Portfolio_Website"
              </p>
              <div className="flex-grow items-center"></div>
              <img
                src={menubars}
                alt="menu bar icon"
                className="h-[60%] sm:h-[60%] md:h-[70%] lg:h-[70%] xl:h-[60%]"
              />
            </div>
          </div>
          <div className="flex flex-nowrap justify-around items-center bg-white mr-[8px] ml-[8px] mt-[15px] h-[100px] sm:h-[50%] md:h-[60%] lg:h-[9vw] border-l-2 border-l-solid border-l-black border-t-2 border-t-solid border-t-black">
            <Link to="/portfolio">
              <div>
                <img
                  src={portfolio}
                  alt="folder icon"
                  className="w-[60%] sm:w-[60%] md:w-[70%] lg:w-[70%] xl:w-[90%] mr-auto ml-auto"
                />
                <p className="text-center text-[17px] sm:text-[20px] md:text-[20px] lg:text-[23px] xl:text-[27px]">
                  Portfolio
                </p>
              </div>
            </Link>
            <Link to="/certifications">
            <div>
              <img
                src={aboutme}
                alt="notepad icon"
                className="w-[60%] sm:w-[60%] md:w-[70%] lg:w-[70%] xl:w-[90%] mr-auto ml-auto"
              />
              <p className="text-center text-[17px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[22px]">
                Certificates
              </p>
            </div>
            </Link>
            <Link to="/resume">
            <div>
              <img
                src={resume}
                alt="save icon"
                className="w-[60%] sm:w-[60%] md:w-[70%] lg:w-[70%] xl:w-[90%] mr-auto ml-auto"
              />
              <p className="text-center text-[17px] sm:text-[20px] md:text-[20px] lg:text-[23px] xl:text-[27px]">
                Resume
              </p>
            </div>
            </Link>
            <Link to="/contact">
            <div>
              <img
                src={contact}
                alt="email icon"
                className=" w-[60%] sm:w-[60%] md:w-[70%] lg:w-[70%] xl:w-[90%] mr-auto ml-auto"
              />
              <p className="text-center text-[17px] sm:text-[20px] md:text-[20px] lg:text-[23px] xl:text-[27px]">
                Contact
              </p>
            </div>
            </Link>
          </div>
        </div>

        <img
          className="hidden sm:hidden md:hidden lg:block xlg:block w-[80%] mx-auto sm:col-span-1 md:col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
          src={minesweeper}
          alt="A game of minesweeper open in a window"
        />

        <img
          className="w-[90%] mr-auto ml-auto sm:col-span-2 md:col-span-2 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4"
          src={mypicturecopy}
          alt="Katie Andor"
          title="Hi, I'm Katie!"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;