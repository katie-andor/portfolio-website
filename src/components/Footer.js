import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#D9D9D9] bottom-0 left-0 w-full h-[70px] border-t-4 border-t-solid border-t-white text-[#616161]">
      <div className="flex justify-start items-center text-[30px] sm:text-[33px] md:text-[30px] lg:text-[30px] xlg:text-[33px] w-full">
        <p className="pr-[60px] pl-[60px] pl:sm-[40px] pr:sm-[40px] ml-[6px] mt-[10px] border-r-[6px] border-r-[white]">START</p>
        <p className="pr-[60px] pl-[60px] ml-[10px] mt-[10px] hidden sm:hidden md:block lg:block xlg:block">MINESWEEPER</p>
        <p className="pr-[60px] pl-[60px] ml-[10px] mt-[10px] border-r-[6px] border-r-[white] hidden sm:hidden md:hidden lg:block xlg:block">FILES</p>
        <p className="pr-[60px] pl-[60px] ml-[10px] mt-[10px] border-r-[6px] border-r-[white] hidden sm:hidden md:hidden lg:block xlg:block">GALLERY</p>
        
        <div className="flex-grow items-center"></div> 
        <div className="mt-[8px] mr-[10px] border-t-4 border-t-solid border-t-white border-l-4 border-l-solid border-l-white border-r-4 border-r-solid border-r-[#616161] border-b-4 border-b-solid border-b-[#616161]">
        <p className="pr-[8px] pl-[8px] bg-none text-[25px] sm:text-[33px] md:text-[30px] lg:text-[30px] xlg:text-[33px]">{time}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
