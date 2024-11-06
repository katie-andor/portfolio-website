import React from "react";
import internetIcon from "./images/icons-8-internet-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer.js";
import projectdata from "./projectdata.js";
import "./App.css";

const Portfolio = (props) => {
  const [activeTab, setActiveTab] = useState("webdev");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filterProjects = (projectType) => {
    if (projectType === "webdev") {
      return projectdata.filter((project) => project.htmltitle);
    } else if (projectType === "mobileapp") {
      return projectdata.filter((project) => project.apptitle);
    } else if (projectType === "java") {
      return projectdata.filter((project) => project.javatitle);
    }
    return [];
  };

  return (
    <div className="min-h-screen font-[vt323] flex flex-col">
      <div className="flex-grow">
        <Link to="/">
          <img
            className="ml-2 mr-2 w-[40px] pt-[10px]"
            src={internetIcon}
            alt="Internet Icon"
          />
        </Link>

        <div>
          <div className="tab-menu flex flex-nowrap justify-center text-[20px] sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[60px] leading-tight mt-2">
            <button
              onClick={() => handleTabChange("webdev")}
              className="pt-2 pb-2 pr-2 sm:pr-6 md:pr-6 lg:pr-6 xl:pr-6 pl-2 sm:pl-6 md:pl-6 lg:pl-6 xl:pl-6 hover:bg-[#FF5CE7] border-2 border-black border-solid"
            >
              Web Development
            </button>
            <button
              onClick={() => handleTabChange("mobileapp")}
              className="pt-2 pb-2 pr-2 sm:pr-6 md:pr-6 lg:pr-6 xl:pr-6 pl-2 sm:pl-6 md:pl-6 lg:pl-6 xl:pl-6 hover:bg-[#FF5CE7] border-2 border-black border-solid"
            >
              Mobile Apps
            </button>
            <button
              onClick={() => handleTabChange("java")}
              className="pt-2 pb-2 pr-2 sm:pr-6 md:pr-6 lg:pr-6 xl:pr-6 pl-2 sm:pl-6 md:pl-6 lg:pl-6 xl:pl-6 hover:bg-[#FF5CE7] border-2 border-black border-solid"
            >
              Java Projects
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "webdev" && (
              <div className="grid gap-4 w-[90%] mr-auto ml-auto mt-8 mb-6 p-4 bg-[#FFFCBC] rounded-[18px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {filterProjects("webdev").map((project, index) => (
                  <Link to={project.htmllink}>
                  <div key={index}>
                    <img
                      src={project.htmlimage}
                      alt={project.htmlalt}
                      className="w-full mr-auto ml-auto"
                    />
                    <h3 className=" text-left leading-tight text-[35px] sm:text-[50px] md:text-[45px] lg:text-[50px] xl:text-[50px]">
                      {project.htmltitle}
                    </h3>
                    <p className="text-[20px] text-left leading-tight text-[25px] sm:text-[30px] md:text-[25px] lg:text-[30px] xl:text-[30px]">
                      {project.htmldescription}
                    </p>
                  </div>
                  </Link>
                ))}
              </div>
            )}

            {activeTab === "mobileapp" && (
              <div className="grid gap-4 w-[90%] mr-auto ml-auto mt-8 mb-6 p-4 bg-[#FFFCBC] rounded-[18px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {filterProjects("mobileapp").map((project, index) => (
                  <div key={index}>
                    <img
                      src={project.appimage}
                      alt={project.appalt}
                      className="w-full mr-auto ml-auto"
                    />
                    <h3 className="text-left leading-tight text-[35px] sm:text-[50px] md:text-[45px] lg:text-[50px] xl:text-[50px]">
                      {project.apptitle}
                    </h3>
                    <p className="text-[20px] text-left leading-tight text-[25px] sm:text-[30px] md:text-[25px] lg:text-[30px] xl:text-[30px]">
                      {project.appdescription}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "java" && (
              <div className="grid gap-4 w-[90%] mr-auto ml-auto mt-8 mb-6 p-4 bg-[#FFFCBC] rounded-[18px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {filterProjects("java").map((project, index) => (
                  <div key={index}>
                    <img
                      src={project.javaimage}
                      alt={project.javaalt}
                      className="w-full mr-auto ml-auto"
                    />
                    <h3 className="text-left leading-tight text-[35px] sm:text-[50px] md:text-[45px] lg:text-[50px] xl:text-[50px]">
                      {project.javatitle}
                    </h3>
                    <p className="text-[20px] text-left leading-tight text-[25px] sm:text-[30px] md:text-[25px] lg:text-[30px] xl:text-[30px]">
                      {project.javadescription}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
