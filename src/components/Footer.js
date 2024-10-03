import React from 'react';
import 'Footer.css';

const Home = () => {
  return (
    <div> 
      <img className="internet-icon" src={internetIcon} alt="Internet Icon" />
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
      <img className="minesweeper" src={minesweeper} alt="A game of minesweeper open in a window"/>
      <img className="my-picture" src={mypicture} alt="Katie Andor"/>
    </div>
  );
};

export default Home;