import React from 'react';
import internetIcon from "./images/icons-8-internet-icon.png";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div>
    <Link to="/">
        <img
          className="ml-2 mr-2 w-[40px] pt-[10px]"
          src={internetIcon}
          alt="Internet Icon"
        />
      </Link>
    <p>resume</p>
    </div>
  );
};

export default Resume;