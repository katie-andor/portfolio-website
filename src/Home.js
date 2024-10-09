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
      
      {/* Responsive Grid Container */}
      <div className="
        grid gap-1 m-8 mr-[3%]
        grid-cols-2       /* 1 column on extra small screens (default) */
        sm:grid-cols-3    /* 2 columns on small screens */
        md:grid-cols-3    /* 3 columns on medium screens */
        lg:grid-cols-[31%_31%_37%]  /* Custom percentages for large screens */
        xl:grid-cols-[31%_31%_37%]  /* Custom percentages for extra large screens */
      ">
        
        {/* Post-it Section */}
        <div className="bg-[#FFFA89] p-8 sm:col-span-1 lg:row-span-2">
          <h1>PROJECTS:</h1>
          <h2>Esports Research Website:</h2>
          <ul>
            <li>Uses WordPress, Divi Theme Builder</li>
            <li>esportsresearch.net</li>
          </ul>
          <h2>Cuphead Fan Wiki:</h2>
          <ul>
            <li>Uses React.js, HTML, and CSS</li>
            <li>cupheadfanwiki.netlify.app</li>
          </ul>
          <h2>GitHub:</h2>
          <ul>
            <li>https://github.com/katie-andor</li>
          </ul>
        </div>

        <div className="bg-blue-500 ml-[5%] pl-[5%] sm:col-span-2 md:col-span-3 lg:col-span-2">
          <h2>My Skills Include:</h2>
          <div className="flex flex-wrap justify-around">
            {skillsdata.map((skill, index) => (
              <div key={index} className="text-center">
                <img
                  className="w-24 h-24"
                  src={props.image || skill.image}
                  alt={skill.caption}
                />
                <p>{skill.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <img className="w-[30%] mx-auto sm:col-span-1 md:col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3" src={clippy} alt="clippy from early windows" />

        <div className="bg-orange-500 w-full sm:col-span-1 md:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4">
          <p>Links go here</p>
        </div>

        <img className="w-[90%] mx-auto sm:col-span-1 md:col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4" src={minesweeper} alt="A game of minesweeper open in a window" />

        <img className="w-full sm:col-span-1 md:col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4" src={mypicturecopy} alt="Katie Andor" title="Hi, I'm Katie!" />

      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
