import React from "react";
import internetIcon from "./images/icons-8-internet-icon.png";
import mypicturecopy from "./images/my-picture-copy.png";
import minesweeper from "./images/minesweeper.png";
import clippy from "./images/clippy.png";
import skillsdata from "./skillsdata";
import { Link } from "react-router-dom";
import Footer from './components/Footer.js';

const Home = (props) => {
  return (
    <div className="bg-gradient-to-b from-[#AAF5FF] to-[#4C69FF] min-h-screen font-[vt323]">
      <Link to="/">
        <img className="ml-2 mr-2 w-[clamp(30px,3vw,300px)]" src={internetIcon} alt="Internet Icon" />
      </Link>
      
      <div className="
        grid gap-4 m-8
        grid-cols-1
        sm:grid-cols-[50%_23%_23%]
        md:grid-cols-[50%_23%_23%]
        lg:grid-cols-[33%_31%_34%]
        xl:grid-cols-[33%_31%_34%]
      ">
        
        <div className="bg-[#FFD5E2] p-8 sm:col-span-1 lg:row-span-2 pt-[1%] pb-[3%] pr-[2%] pl-[5%]" style={{ boxShadow: '11px 11px 10px rgba(0, 0, 0, 0.25)' }}>
          <h1 className=" text-[30px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-[65px] leading-none mt-0 mb-0">PROJECTS:</h1>
          <h2 className="text-[23px] sm:text-[23px] md:text-[30px] lg:text-[30px] xl:text-[38px] leading-none">Esports Research Website:</h2>
          <ul className=" list-disc text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[27px] ml-[8%]">
            <li>Uses WordPress, Divi Theme Builder</li>
            <li>esportsresearch.net</li>
          </ul>
          <h2 className="text-[23px] sm:text-[23px] md:text-[30px] lg:text-[30px] xl:text-[38px] leading-none">Cuphead Fan Wiki:</h2>
          <ul className=" list-disc text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[27px] ml-[8%]">
            <li>Uses React.js, HTML, and CSS</li>
            <li>cupheadfanwiki.netlify.app</li>
          </ul>
          <h2 className="text-[23px] sm:text-[23px] md:text-[30px] lg:text-[30px] xl:text-[38px] leading-none">GitHub:</h2>
          <ul className=" list-disc text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[27px] ml-[8%]">
            <li>https://github.com/katie-andor</li>
          </ul>
        </div>

        <div className="bg-[#FFFCBC] border-2 border-[black] border-solid rounded-[18px] ml-[1%] p-[2%] sm:col-span-2 md:col-span-2 lg:col-span-2">
          <h2 className="text-[23px] sm:text-[23px] md:text-[30px] lg:text-[30px] xl:text-[38px] leading-none pt-[2%]">My Skills Include:</h2>
          <div className="flex flex-wrap justify-around">
            {skillsdata.map((skill, index) => (
              <div key={index} className="text-center text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[27px]">
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

        <img className="hidden sm:hidden md:hidden lg:block xlg:block w-[30%] mx-auto sm:col-span-1 md:col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3" src={clippy} alt="clippy from early windows" />

        <div className="bg-orange-500 w-full sm:col-span-1 md:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4">
          <p>Links go here</p>
        </div>

        <img className="hidden sm:block md:block lg:block xlg:block w-[90%] mx-auto sm:col-span-1 md:col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4" src={minesweeper} alt="A game of minesweeper open in a window" />

        <img className="w-full sm:col-span-1 md:col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4" src={mypicturecopy} alt="Katie Andor" title="Hi, I'm Katie!" />

      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
