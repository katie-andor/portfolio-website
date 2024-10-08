import React from "react";
import internetIcon from "./images/icons-8-internet-icon.png";
import mypicture from "./images/my-picture.png";
import minesweeper from "./images/minesweeper.png";
import clippy from "./images/clippy.png";
import skillsdata from "./skillsdata";
import "./App.css";

const Home = (props) => {
  return (
    <div>
      <img className="internet-icon" src={internetIcon} alt="Internet Icon" />
      <div className="top-row">
        <div className="post-it">
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
        <div className="skills">
          <div className="textbubble">
            <div>
              <h2>My Skills Include:</h2>
            </div>
            <div className="skills-no-clippy">
              {skillsdata.map((skill, index) => (
                <div key={index} className="image-caption-container">
                  <img
                    className="dynamic-image"
                    src={props.image || skill.image}
                    alt={skill.caption}
                  />
                  <p className="image-caption">{skill.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            className="clippy"
            src={clippy}
            alt="clippy from early windows"
          />
        </div>
      </div>
      {/* <img
        className="minesweeper"
        src={minesweeper}
        alt="A game of minesweeper open in a window"
      />
      <img
        className="my-picture"
        src={mypicture}
        alt="Katie Andor"
        title="Hi, I'm Katie!"
      /> */}
    </div>
  );
};

export default Home;
