import React from 'react';
import internetIcon from "./images/icons-8-internet-icon.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Link to="/">
        <img className="internet-icon" src={internetIcon} alt="Internet Icon" />
      </Link>
  );
};

export default About;
